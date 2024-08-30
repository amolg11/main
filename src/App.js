import logo from "./logo.svg";
import "./App.css";
import About from "./components/About";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Tours from "./components/Tours";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar>Test</Navbar>
      <Hero></Hero>
      <About></About>
      <Tours></Tours>
      <Services></Services>
      <Footer></Footer>
    </>
  );
}

export default App;
