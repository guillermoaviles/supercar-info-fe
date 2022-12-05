import React from 'react';
import './App.css';
import Header from './Header';
import Search from './Search';
import Gallery from './Gallery';
import Footer from './Footer';
import Cars from './Cars';
import { Route, Routes } from 'react-router-dom';
import { useState } from "react";

function App() {

  const [make, setMake] = useState('');
  const [model, setModel] = useState('');
  const [year, setYear] = useState('');
  const [transmission, setTransmission] = useState('');
  const [engine, setEngine] = useState('');
  const [price, setPrice] = useState('');
  const [mileage, setMileage] = useState('');


  console.log(make)

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Gallery />}/>
        <Route path='/search' element={<Search make={make} setMake={setMake} model={model} setModel={setModel} year={year} setYear={setYear} transmission={transmission} setTransmission={setTransmission} engine={engine} setEngine={setEngine} price={price} setPrice={setPrice} mileage={mileage} setMileage={setMileage}/>}/>
        <Route path='/:make/:model' element={<Cars make={make} model={model} year={year} transmission={transmission} engine={engine} price={price} mileage={mileage}/>}/>
        <Route path='/cars/:make' element={<Cars make={make} model={model} year={year} transmission={transmission} engine={engine} price={price} mileage={mileage}/>}/>
        <Route path='/cars/:model' element={<Cars make={make} model={model} year={year} transmission={transmission} engine={engine} price={price} mileage={mileage}/>}/>
        <Route path='/cars/:year' element={<Cars make={make} model={model} year={year} transmission={transmission} engine={engine} price={price} mileage={mileage}/>}/>
        <Route path='/cars/:engine' element={<Cars make={make} model={model} year={year} transmission={transmission} engine={engine} price={price} mileage={mileage}/>}/>
        <Route path='/cars/:transmission' element={<Cars make={make} model={model} year={year} transmission={transmission} engine={engine} price={price} mileage={mileage}/>}/>
        <Route path='/cars/:price' element={<Cars make={make} model={model} year={year} transmission={transmission} engine={engine} price={price} mileage={mileage}/>}/>
        <Route path='/cars/:mileage' element={<Cars make={make} model={model} year={year} transmission={transmission} engine={engine} price={price} mileage={mileage}/>}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
