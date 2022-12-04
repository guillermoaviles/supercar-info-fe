import React from 'react'

export default function Search() {
  return (
    <div>
        <h1>Welcome to SuperCars!</h1>
        <h2>Looking for something specific? Search below:</h2>
        <input type="text" placeholder='make'></input>
        <input type="text" placeholder='model'></input>
        <input type="text" placeholder='year'></input>
        <input type="text" placeholder='engine'></input>
        <input type="text" placeholder='transmission'></input>
        <input type="text" placeholder='price'></input>
        <label for="mileage">Mile range:</label>
          <select name="mileage" id="mileage">
            <option value="lessThan75">less than $75,000</option>
            <option value="75to150">$75,000 - $150,000</option>
            <option value="150to250">$150,000 - $250,000</option>
            <option value="250up">$250,000 +</option>
            </select>
        <label for="price">Price range:</label>
          <select name="price" id="price">
            <option value="lessThan20">less than 20,000</option>
            <option value="21to50">$21,000 - $50,000</option>
            <option value="51to80">$51,000 - $80,000</option>
            <option value="81up">$81,000 +</option>
            </select>
        <button type='submit'>Search</button>
    </div>
  )
}
