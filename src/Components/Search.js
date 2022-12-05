import React from 'react'
import { Link } from "react-router-dom";
import FetchCalls from './Fetch/FetchCalls';

export default function Search({make, setMake, model, setModel, year, setYear, transmission, setTransmission, engine, setEngine, price, setPrice, mileage,setMileage}) {


  const handleMake = (event) => {
    setMake(event.target.value)
  }



  const handleModel = (event) => {
    setModel(event.target.value)
  }

  const handleYear = (event) => {
    setYear(event.target.value)
  }

  const handleTransmission = (event) => {
    setTransmission(event.target.value)
  }

  const handleEngine = (event) => {
    setEngine(event.target.value)
  }

  const handlePrice = (event) => {
    setPrice(event.target.value)
  }

  const handleMileage = (event) => {
    setMileage(event.target.value)
  }


  return (
    <div>
        <h1>Welcome to SuperCars!</h1>
        <h2>Looking for something specific? Search below:</h2>
        <div>
          <input type="text" id="make" placeholder='make' onChange={handleMake}></input>
          <Link to = {`/cars/${make}`} >
                <h1>Search</h1>
          </Link>
        </div>
        <div>
          <input type="text" id="model" placeholder='model' onChange={handleModel}></input>
          <Link to = {`/cars/${model}`}>
                <h1>Search</h1>
          </Link>
        </div>
        <div>
          <input type="text" id="year" placeholder='year' onChange={handleYear}></input>
          <Link to = {`/cars/${year}`}>
                <h1>Search</h1>
          </Link>
        </div>
        <div>
          <input type="text" id="engine" placeholder='engine' onChange={handleEngine}></input>
          <Link to = {`/cars/${engine}`}>
                <h1>Search</h1>
          </Link>
        </div>
       <div>
        <label htmlFor="transmission">Transmission:</label>
            <select name="transmission" id="transmission" onChange={handleTransmission}>
              <option value="automatic">Automatic</option>
              <option value="manual">Manual</option>
              </select>
        <Link to = {`/cars/${transmission}`}>
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
        <Link to = {`/cars/${price}`}>
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
        <Link to = {`/cars/${mileage}`}>
                <h1>Search</h1>
        </Link>
      </div>
    </div>
  )
}
