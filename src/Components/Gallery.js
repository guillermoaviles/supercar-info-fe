import React from 'react'
import { Link } from 'react-router-dom'
import cars from '../SampleData/cars.json'

export default function Gallery(props) {
  return (
    <div>
        {props.cars.map((element, index) => {
            return(
                <Link to={`/cars/${element.id_}`}>
                    <div>{element.make} {index}
                        <img src={element.image}></img>
                    </div>
                </Link>
            )
        })}
    </div>
  )
}
