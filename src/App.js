import Header from "./components/Header";
import './App.css';
import NavMenu from "./components/Nav.jsx";
import Hero from "./components/Hero";
import About from "./components/About";
import Works from "./components/Works";
import Offer from './components/Offer';

function App() {
  return (
    <div className="App"  style={{backgroundColor: "#F2F2F2"}}>
      <Header />
      <hr style={{border: "1px solid gray"}}/>
      <NavMenu/>
      <Hero/>
      <About/>
      <Works/>
      <Offer/>
    </div>
  );
}

export default App;
