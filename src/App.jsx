import { HashRouter as Router, Routes, Route } from "react-router-dom";
import AboutUs from "./components/about/AboutUs";
import Background from "./components/about/Background";
import Resources from "./components/Resources";
import SupportUs from "./components/support/SupportUs";
import Team from "./components/Team";
import WhyUs from "./components/WhyUs";
import Gallery from "./components/Gallery";
import Navbar from "./components/constant/Navbar";
import Footer from "./components/constant/Footer";
import Hero from "./components/home/Hero";
import Funding from "./components/funding/Funding";
import ProductsAndService from "./components/productandservice/ProductsAndService";

function App() {
  return (
    <Router>
      <div className="App">
        {/* Navbar */}
        <Navbar />

        {/* Routes */}
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/background" element={<Background />} />
          <Route path="/funding" element={<Funding />} />
          <Route path="/products" element={<ProductsAndService />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/support-us" element={<SupportUs />} />
          <Route path="/team" element={<Team />} />
          <Route path="/why-us" element={<WhyUs />} />
          <Route path="/gallery" element={<Gallery />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
