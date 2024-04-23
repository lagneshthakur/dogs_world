import React from 'react';

interface DogLoaderProps {
    isLoading: boolean;
}

const DogLoader: React.FC<DogLoaderProps> = ({ isLoading }) => {
    return (
        <>
            {
                isLoading && <img src="/loader.gif" alt="loading" className="mx-auto" />
            }
        </>
    );
};

export default DogLoader;