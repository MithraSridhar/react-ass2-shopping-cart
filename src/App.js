import logo from './logo.svg';
import './App.css';
import NavBar from './components/navbar';
import Header from './components/header';
import Products from './components/products';
import Footer from './components/footer';


function App() {
  return (
    <div className="App">

      <NavBar/>
      <Header/>
      <Products/>
      <Footer/>
    </div>
  );
}

export default App;
