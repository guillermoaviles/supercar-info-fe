import React from "react";
import { useState } from "react";
import { useEffect } from 'react';
import axios from 'axios';

export default function Cars() {
    const [cars, setCars] = useState([]); 

    useEffect(() => {
        axios.get('http://localhost:8000/api/getsupercars')
          .then((response) => response.data)
          .then((response) => {
            console.log(response)
            setCars(response) 
          })
    }, []);

    return (
        <div>
            {cars.map((element, index) => {
                return( 
                    <div>
                        <div>{element.make}</div>
                        <div>{element.model}</div>
                        <div>{element.mileage}</div>
                        <div>{element.engine}</div>
                        <div>{element.price}</div>
                        <div>{element.transmission}</div>
                        <div>{element.year}</div>
                    </div>
                )
            })}
        </div>
    )
}