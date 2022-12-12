import React, { useEffect } from 'react';

export default function Cars({cars, searchCars}) {


    useEffect(() => {
        searchCars()
    }, []);
    // console.log(cars)
    // console.log(searchType)
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