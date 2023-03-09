import Hero from "./components/Hero";
import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Pricing from "./components/Pricing";
import Buynfts from "./components/BuyNFTs";
import "./style/NavbarStyle.css";

function App() {
  return (
    <div>
      <Navbar />
      <div>
        <Hero />
        <About/>
        <Contact />
        <Pricing />
        <Buynfts />
      </div>
    </div>
  );
}

export default App;