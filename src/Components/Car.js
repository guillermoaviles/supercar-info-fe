import React from "react";
import { useState } from "react";
import { useEffect } from 'react';
import axios from 'axios';

export default function Cars() {
    const [cars, setCars] = useState([]); 

    useEffect(() => {
        axios.get(`https://supercar-be.fly.dev/api/getsupercars/${searchType}/${searchInput})`
          .then((response) => response.data)
          .then((response) => {
            console.log(response)
            setCars(response) 
          })
    }, []);

    return (
        <div className="container">
            {cars.map((element) => {
                return( 
                    <div id={element._id}>
                        <div className="carbox">
                        <img src={element.image}/>
                        <div>{element.make}</div>
                        <div>{element.model}</div>
                        <div>{element.mileage}</div>
                        <div>{element.engine}</div>
                        <div>{element.price}</div>
                        <div>{element.transmission}</div>
                        <div>{element.year}</div>
                    </div>
                    </div>
                )
            })}
        </div>
    )
}