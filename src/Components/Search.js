import React from 'react'
import { useState } from "react";

export default function Search() {

  const [make, setMake] = useState({make: ''});
  const [model, setModel] = useState({model: ''});
  const [year, setYear] = useState({year: ''});
  const [transmission, setTransmission] = useState({transmission: ''});
  const [engine, setEngine] = useState({engine: ''});
  const [price, setPrice] = useState({price: ''});
  const [mileage, setMileage] = useState({mileage: ''});

  const handleMake = (event) => {
    setMake({
      make: event.target.value
    })
  }

  const handleModel = (event) => {
    setModel({
      model: event.target.value
      })
  }

  const handleYear = (event) => {
    setYear({
      year: event.target.value
      })
  }

  const handleTransmission = (event) => {
    setTransmission({
      transmission: event.target.value
      })
  }

  const handleEngine = (event) => {
    setEngine({
      engine: event.target.value
      })
  }

  const handlePrice = (event) => {
    setPrice({
      price: event.target.value
      })
  }

  const handleMileage = (event) => {
    setMileage({
      mileage: event.target.value
      })
  }


  return (
    <div>
        <h1>Welcome to SuperCars!</h1>
        <h2>Looking for something specific? Search below:</h2>
        <div>
          <input type="text" id="make" placeholder='make'></input>
          <button type='submit' onClick={handleMake}>Search</button>
        </div>
        <div>
          <input type="text" id="model" placeholder='model'></input>
          <button type='submit'  onClick={handleModel}>Search</button>
        </div>
        <div>
          <input type="text" id="year" placeholder='year'></input>
          <button type='submit' onClick={handleYear}>Search</button>
        </div>
        <div>
          <input type="text" id="engine" placeholder='engine'></input>
          <button type='submit' onClick={handleEngine}>Search</button>
        </div>
       <div>
        <label for="transmission">Transmission:</label>
            <select name="transmission" id="transmission">
              <option value="automatic">Automatic</option>
              <option value="manual">Manual</option>
              </select>
        <button type='submit' onClick={handleTransmission}>Search</button>
       </div>
       <div>
        <label for="price">Price range:</label>
            <select name="price" id="price">
              <option value="lessThan75">less than $75,000</option>
              <option value="75to150">$75,000 - $150,000</option>
              <option value="150to250">$150,000 - $250,000</option>
              <option value="250up">$250,000 +</option>
              </select>
          <button type='submit' onClick={handlePrice}>Search</button>
       </div>
      <div>
        <label for="mileage">Mileage:</label>
            <select name="mileage" id="mileage">
              <option value="lessThan20">less than 20,000</option>
              <option value="21to50">21,000 - 50,000</option>
              <option value="51to80">51,000 - 80,000</option>
              <option value="81up">81,000 +</option>
              </select>
        <button type='submit' onClick={handleMileage}>Search</button>
      </div>
    </div>
  )
}
