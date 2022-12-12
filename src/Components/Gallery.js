import React from 'react'
import { Link } from 'react-router-dom'
import cars from '../SampleData/cars.json'

export default function Gallery() {
    console.log(cars)
  return (
    <div className='carbox'>
        <h1>Current Inventory</h1>
        {cars.map((element, index) => {
            return(
                <Link to={`/${element.make}/${element.model}`}>
                    <div className='car'>{element.make} {element.model}
                        <img src={element.image}></img>
                    </div>
                </Link>
            )
        })}
    </div>
  )
}
