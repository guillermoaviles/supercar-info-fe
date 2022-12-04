import './App.css';
import Header from './Header';
import Search from './Search';
import Gallery from './Gallery';
import Footer from './Footer';
import Cars from './Car';

function App() {
  return (
    <div className="App">
      <Header />
      <Search />
      <Cars />
      {/* <Gallery /> */}
      <Footer />
    </div>
  );
}

export default App;
