import React from 'react';

interface DogCardProps {
    breedName: string;
    imageUrl: string;
}

const DogCard: React.FC<DogCardProps> = ({ breedName, imageUrl }) => {
    const [isLoading, setIsLoading] = React.useState(true);
    return (
        <div className="dog-card rounded-lg shadow-md p-4 w-96 h-96">
            <div className="">
                <div className="bg-gray-200 animate-pulse"></div>
                {
                    isLoading && <div className="bg-gray-200 animate-pulse h-64 w-full rounded-lg"></div>
                }
                <img
                    onLoad={() => setIsLoading(false)}
                    src={imageUrl}
                    alt={breedName}
                    className={`object-cover rounded-lg h-64 w-full bg-gray-300 ${isLoading ? 'hidden' : ''}`}
                />
            </div>
            <h2 className="text-xl font-bold text-center">{breedName}</h2>
        </div>
    );
};

export default DogCard;