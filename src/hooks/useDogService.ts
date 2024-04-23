import { BreedImageSearchResponse } from "@/interfaces/responses/BreedImageSearchResponse";
import { BreedsResponse } from "@/interfaces/responses/BreedsResponse";
import { DOG_BREEDS, DOG_SEARCH } from "@/utils/Apis";
import { GET } from "@/utils/WebService";
import { useCallback } from "react";

export const useDogService = () => {
    const fetchDogs = async (userInput:string) => {
        return GET<BreedImageSearchResponse>(DOG_SEARCH(userInput)).then((res) => {
            return res.data
        }).catch((err) => {
            console.log(err)
        });
    }
    const fetchBreeds = useCallback(async () => {
        return GET<BreedsResponse>(DOG_BREEDS).then((res) => {
            return res.data;
        }).catch((err) => {
            console.log(err)
        });
    },[]);

    return { fetchDogs, fetchBreeds }
}

