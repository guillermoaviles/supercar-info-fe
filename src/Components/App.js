import './App.css';
import Header from './Header';
import Search from './Search';
import Gallery from './Gallery';
import Footer from './Footer';
import { useEffect, useState } from 'react'
import axios from 'axios';

function App() {
  const api = `http://localhost:8000/api/getsupercars/`
  let [data, setData] = useState([])
  useEffect(() => {
    axios.get(api)
  })
  .then((res) => res.json())
  .then((json) => {
    setData(json)
  })
  console.log(data)
  return (
    <div className="App">
      <Header />
      <Search />
      <Gallery />
      <Footer />
    </div>
  );
}

export default App;
