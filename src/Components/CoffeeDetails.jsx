import React from 'react';
import { useLoaderData } from 'react-router';

const CoffeeDetails = () => {
    const coffee = useLoaderData()
    console.log(coffee)
    return (
        <div>
            <h2>Details : {coffee.name} </h2>
        </div>
    );
};

export default CoffeeDetails;