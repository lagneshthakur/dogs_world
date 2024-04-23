import React from 'react';

interface Dog404Props {
    show: boolean;
}

const Dog404: React.FC<Dog404Props> = ({ show }) => {
    return (
        <>
            {
                show && <>
                    <h1 className="text-center text-2xl mt-4 font-bold">No Dogs Found</h1>
                    <p className="text-center text-xl mt-4 font-bold">Oops! It looks like the dog you're looking for doesn't exist.</p>
                </>
            }
        </>
    );
};

export default Dog404;