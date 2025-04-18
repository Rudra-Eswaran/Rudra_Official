import Navbar from "./components/Navbar";
import Footer from "./pages/Footer";
import Contact from "./pages/Contactus";
import Rudrans from "./pages/Rudrans";
import Home from "./pages/Home";
import Products from "./pages/Products";

export default function App() {
  return (
    <>
      <Navbar />
      
      {/* Add a top margin to push content below the navbar */}
      <div className="mt-[80px]"> {/* Adjust this value based on your navbar height */}
       
        <Home/>
        <Rudrans />
        <Contact />
      </div>

      {/* Footer will be at the bottom */}
      <Footer />
    </>
  );
}
