import React, { useEffect } from 'react';
import { useParams } from "react-router-dom";
import cars from '../SampleData/cars.json'

export default function Car() {
    const car  = useParams();

    const carFound = cars.find(carToFind => carToFind.make === car.make && carToFind.model === car.model);

    console.log(carFound)
    return (
        <div>
            <img src={carFound.image}/>
            <div>{carFound.make}</div>
            <div>{carFound.model}</div>
            <div>{carFound.mileage}</div>
            <div>{carFound.engine}</div>
            <div>{carFound.price}</div>
            <div>{carFound.transmission}</div>
            <div>{carFound.year}</div>
        </div>
    )
}