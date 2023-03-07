import { BrowserRouter } from "react-router-dom";

import {
  About,
  Contact,
  Footer,
  Hero,
  Navbar,
  Content,
  Works,
} from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <About />
        <Content />
        <Works />
        <Works />
        <div className="relative z-0">
          <Contact />
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;