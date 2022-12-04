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
        <label for="mileage">Choose a mileage range:</label>
          <select name="mileage" id="mileage">
            <option value="lessThan75">less than $75,000</option>
            <option value="75to150">$75,000 - $150,000</option>
            <option value="150to250">$150,000 - $250,000</option>
            <option value="250up">$250,000 +</option>
            </select>
        <button type='submit'>Submit</button>
    </div>
  )
}
