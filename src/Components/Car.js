import React from "react";
import { useState } from "react";
import { useEffect } from 'react';
import axios from 'axios';

export default function Cars() {
    const [cars, setCars] = useState({}); 

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
            <h2>Cars</h2>
            <section>
                
            </section>
            <div>{cars.data}</div>
        </div>
    )
}