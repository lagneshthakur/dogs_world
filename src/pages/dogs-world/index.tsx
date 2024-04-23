import { Dog404, DogCard, DogLoader, DogsContainer, Navbar } from "@/components";
import { findBreedId } from "@/helpers/dogHelpers";
import useDebounce from "@/hooks/useDebounce";
import { useDogService } from "@/hooks/useDogService";
import useEffectAsync from "@/hooks/useEffectAsync";
import { BreedImageSearchResponse } from "@/interfaces/responses/BreedImageSearchResponse";
import { BreedsResponse } from "@/interfaces/responses/BreedsResponse";
import { NextPage } from "next";
import { Fragment, useState } from "react";


const DogWorldPage: NextPage = () => {
    // States for the DogWorldPage component
    const [isLoading, setIsLoading] = useState(false);
    const [breeds, setBreeds] = useState<BreedsResponse | null>(null);
    const [breedSearch, setBreedSearch] = useState<string>('');
    const [imageList, setImageList] = useState<BreedImageSearchResponse>([]);
    // Destructuring the useDogService hook
    const { fetchBreeds, fetchDogs: fetchDog } = useDogService();
    // Functions for the DogWorldPage component
    const debounceDogSearch = useDebounce(() => searchDogs(findBreedId(breedSearch, breeds)), 1500)
    const resetImageList = () => setImageList([]);
    const searchDogs = async (searchedIds: string[]) => {
        if (searchedIds.length > 0) {
            const dogImages = await fetchDog(searchedIds.join(","));
            if (dogImages) setImageList(dogImages);
        }
        else resetImageList();
        setIsLoading(false);
    }
    const setBreedsResponse = async () => {
        try{
            const breedsResponse = await fetchBreeds();
            if (breedsResponse) setBreeds(breedsResponse);
        }
        catch (error) {
            console.error(error);
        }
    }
    const searchDogsByBreed = async () => {
        try{
            if (breedSearch.length < 4) return resetImageList();
            setIsLoading(true);
            resetImageList();
            debounceDogSearch();
        }
        catch (error) {
            console.error(error);
        }
    };
    useEffectAsync(async() => setBreedsResponse(), [])
    useEffectAsync(async() => searchDogsByBreed(), [breedSearch])
    return (
        <Fragment>
            <Navbar breedSearch={breedSearch} onSearch={(newValue) => {
                console.log(newValue);
                setBreedSearch(newValue)
            }} breeds={breeds || []} />
            <DogsContainer>
                {
                    imageList.map((image) => {
                        return <DogCard key={image.id} breedName={image?.breeds[0]?.name || ""} imageUrl={image.url} />
                    })
                }
            </DogsContainer>
            <DogLoader isLoading={isLoading} />
            <Dog404 show={!isLoading && imageList.length === 0 && breedSearch.length > 3} />
        </Fragment>
    );
}

export default DogWorldPage;