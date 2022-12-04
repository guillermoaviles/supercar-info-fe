import React from 'react'
import { Link } from 'react-router-dom'
import cars from '../SampleData/cars.json'

export default function Gallery() {
  return (
    <div>
        {cars.map((element, index) => {
            return(
                <Link to={`/${element.make}/${element.model}`}>
                    <div>{element.make} {index}
                        <img src={element.image}></img>
                    </div>
                </Link>
            )
        })}
    </div>
  )
}
