import React from "react";
import { useState } from "react";
import { useEffect } from 'react';
import axios from 'axios';

export default function Cars({ make, searchInput, searchType, cars, searchCars, setCars, searchMake, model, year, transmission, engine, price, mileage}) {


    useEffect(() => {
        searchCars()
        // const searchMake = () => {
        //     axios.get(`http://localhost:8000/api/getsupercars/make/${make}`)
        //     .then((response) => response.data)
        //     .then((response) => {
        //         console.log(response)
        //         setCars(response) 
        //     })
        // }
    }, []);
    console.log(searchInput)
    console.log(searchType)
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