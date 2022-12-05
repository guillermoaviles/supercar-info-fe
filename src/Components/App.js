import './App.css';
import Header from './Header';
import Search from './Search';
import Gallery from './Gallery';
import Footer from './Footer';
import Cars from './Car';
import { useEffect, useState } from 'react';
import axios from 'axios';
import {Link, Route, Routes} from 'react-router-dom'

function App() {
  const [cars, setCars] = useState([]); 

    useEffect(() => {
        axios.get('http://localhost:8000/api/getsupercars/')
          .then((response) => response.data)
          .then((response) => {
            console.log(response)
            setCars(response) 
          })
    }, []);
    console.log(cars)
  return (
    <div className="App">
      <nav>
        <Link to="/">
          <Header />
        </Link>
        {/* <Link to="/search">
          <Search />
        </Link> */}
      </nav>
      <main>
        {/* <Routes> */}
          {/* <Route path='/' element={ <Header /> }/> */}
          <Route path='/' element={ <Gallery cars={cars} setCars={cars} />} />
          {/* <Route path='/cars/:_id' element={ <Cars cars={cars} setCars={cars} />} /> */}
          {/* <Route path='/search' element={ <Search />} /> */}
        {/* </Routes> */}
      </main>

      <Cars />
      <Gallery />
      <Footer />
    </div>
  );
}

export default App;
