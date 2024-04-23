import { SelectOption } from "@/interfaces/common/SelectOption";
import { BreedsResponse } from "@/interfaces/responses/BreedsResponse";

export const findBreedId = (breedName: string,breeds:BreedsResponse | null) => {
    if(breeds){
        const breed = breeds.filter(breed => breed.name.toLowerCase().includes(breedName.toLowerCase()));
        if(breed) return breed.map(breed => breed.id.toString());
    }
    return [];
}

export const mapBreedsResponseToSelectOptions = (breeds: BreedsResponse | null):SelectOption[] => {
    if(breeds){
        return breeds.map(breed => ({ value: breed.id.toString(), label: breed.name }));
    }
    return [];
}