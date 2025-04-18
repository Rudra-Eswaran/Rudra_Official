import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

// Pages
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import Business from "./pages/Business";
import Blog from "./pages/Blog";
import Team from "./pages/Team";
import Analysis from "./pages/Analysis";
import Support from "./pages/Support";
import Products from "./pages/Products";
import Contact from "./pages/Contact";

export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/business" element={<Business />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/team" element={<Team />} />
        <Route path="/analysis" element={<Analysis />} />
        <Route path="/support" element={<Support />} />
        <Route path="/products" element={<Products />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}
