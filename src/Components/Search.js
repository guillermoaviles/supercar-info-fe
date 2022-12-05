import React from 'react'
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Search({setMake, setModel, setYear, setTransmission, setEngine, setPrice, setMileage}) {


  const handleMake = (event) => {
    setMake({
      make: event.target.document.getElementById("make").value
    })
  }

  const handleModel = (event) => {
    setModel({
      model: event.target.document.getElementById("model").value
      })
  }

  const handleYear = (event) => {
    setYear({
      year: event.target.document.getElementById("year").value
      })
  }

  const handleTransmission = (event) => {
    setTransmission({
      transmission: event.target.document.getElementById("transmission").value
      })
  }

  const handleEngine = (event) => {
    setEngine({
      engine: event.target.document.getElementById("engine").value
      })
  }

  const handlePrice = (event) => {
    setPrice({
      price: event.target.document.getElementById("price").value
      })
  }

  const handleMileage = (event) => {
    setMileage({
      mileage: event.target.document.getElementById("mileage").value
      })
  }


  return (
    <div>
        <h1>Welcome to SuperCars!</h1>
        <h2>Looking for something specific? Search below:</h2>
        <div>
          <input type="text" id="make" placeholder='make' onChange={handleMake}></input>
          <Link to = '/car'>
                <h1>Search</h1>
          </Link>
        </div>
        <div>
          <input type="text" id="model" placeholder='model' onChange={handleModel}></input>
          <Link to = '/car'>
                <h1>Search</h1>
          </Link>
        </div>
        <div>
          <input type="text" id="year" placeholder='year' onChange={handleYear}></input>
          <Link to = '/car'>
                <h1>Search</h1>
          </Link>
        </div>
        <div>
          <input type="text" id="engine" placeholder='engine' onChange={handleEngine}></input>
          <Link to = '/car'>
                <h1>Search</h1>
          </Link>
        </div>
       <div>
        <label htmlFor="transmission">Transmission:</label>
            <select name="transmission" id="transmission" onChange={handleTransmission}>
              <option value="automatic">Automatic</option>
              <option value="manual">Manual</option>
              </select>
        <Link to = '/car'>
                <h1>Search</h1>
        </Link>
       </div>
       <div>
        <label htmlFor="price">Price range:</label>
            <select name="price" id="price" onChange={handlePrice}>
              <option value="lessThan75">less than $75,000</option>
              <option value="75to150">$75,000 - $150,000</option>
              <option value="150to250">$150,000 - $250,000</option>
              <option value="250up">$250,000 +</option>
              </select>
        <Link to = '/car'>
                <h1>Search</h1>
        </Link>
       </div>
      <div>
        <label htmlFor="mileage">Mileage:</label>
            <select name="mileage" id="mileage" onChange={handleMileage}>
              <option value="lessThan20">less than 20,000</option>
              <option value="21to50">21,000 - 50,000</option>
              <option value="51to80">51,000 - 80,000</option>
              <option value="81up">81,000 +</option>
              </select>
        <Link to = '/cars'>
                <h1>Search</h1>
        </Link>
      </div>
    </div>
  )
}
