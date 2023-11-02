import "./App.css";
import Nav from "./components/Navigation/Nav";
import Footer from "./components/Footer/Footer";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Products from "./pages/Products";
function App() {
  return (
    <>
      {" "}
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/products" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
