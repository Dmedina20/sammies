import "./App.css";
import Nav from "./components/Navigation/Nav";
import Footer from "./components/Footer/Footer";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Products from "./pages/Products";
import AlertSuccess from "./components/Alerts/AlertSuccess";
import { useSelector } from "react-redux";

function App() {
  const alert = useSelector((state) => state.alert);
  return (
    <>
      {" "}
      <Nav />
      <AlertSuccess />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/products" element={<Products />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
