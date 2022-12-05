import React from "react";
import { useState } from "react";
import { useEffect } from 'react';
import axios from 'axios';

export default function Cars(props) {
    
    return (
        <div>
            {props.cars.map((element) => {
                return( 
                    <div id={element._id}>
                        <img src={element.image}/>
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