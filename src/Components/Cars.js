import React from "react";
import { useState } from "react";
import { useEffect } from 'react';
import axios from 'axios';

export default function Cars({make, model, year, transmission, engine, price, mileage}) {
    const [cars, setCars] = useState([]); 
    console.log(make)
    useEffect(() => {
        // if (make !== '') {
            axios.get(`http://localhost:8000/api/getsupercars/make/${make}`)
            .then((response) => response.data)
            .then((response) => {
                console.log(response)
                setCars(response) 
            })
        // }
    }, []);

    return (
        <div>
            {cars.map((car) => {
                return( 
                    <div>
                        <img src={car.image}/>
                        <div>{car.make}</div>
                        <div>{car.model}</div>
                        <div>{car.mileage}</div>
                        <div>{car.engine}</div>
                        <div>{car.price}</div>
                        <div>{car.transmission}</div>
                        <div>{car.year}</div>
                    </div>
                )
            })}
        </div>
    )
}