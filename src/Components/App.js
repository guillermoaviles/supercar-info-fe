import './App.css';
import Header from './Header';
import Search from './Search';
import Gallery from './Gallery';

function App() {
  return (
    <div className="App">
      <Header />
      <h1>Welcome to SuperCars!</h1>
      <Search />
      <Gallery />
    </div>
  );
}

export default App;
