import React from 'react';
import DogSelect from '../DogSelect/DogSelect';
import { BreedsResponse } from '@/interfaces/responses/BreedsResponse';
import { mapBreedsResponseToSelectOptions } from '@/helpers/dogHelpers';

interface NavbarProps {
    breedSearch: string;
    breeds: BreedsResponse
    onSearch: (newValue:string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ breedSearch, onSearch, breeds }) => {
    const options = mapBreedsResponseToSelectOptions(breeds);
    return (
        <nav className="flex items-center justify-between p-4 bg-gray-800">
            <div className="flex items-center">
                <h1 className="text-white font-bold text-lg">The Dogs World</h1>
            </div>
            <div className="flex items-center">
                <DogSelect
                    options={options}
                    value={breedSearch}
                    onChange={onSearch}
                />
            </div>
        </nav>
    );
};

export default Navbar;