import './App.css';
import Header from './Header';
import Search from './Search';
import Gallery from './Gallery';
import Footer from './Footer';
import Cars from './Car';
import { Link, Route, Routes } from 'react-router-dom';
import { useState } from "react";

function App() {

  const [make, setMake] = useState({make: ''});
  const [model, setModel] = useState({model: ''});
  const [year, setYear] = useState({year: ''});
  const [transmission, setTransmission] = useState({transmission: ''});
  const [engine, setEngine] = useState({engine: ''});
  const [price, setPrice] = useState({price: ''});
  const [mileage, setMileage] = useState({mileage: ''});

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Gallery />}/>
        <Route path='/search' element={<Search setMake = {setMake} setModel={setModel} setYear={setYear} setTransmission={setTransmission} setEngine={setEngine} setPrice={setPrice} setMileage={setMileage}/>}/>
        <Route path='/cars' element={<Cars make = {make} model = {model} year = {year} transmission = {transmission} engine = {engine} price = {price} mileage = {mileage}/>}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
