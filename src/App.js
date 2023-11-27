import "./App.css";
import Nav from "./components/Navigation/Nav";
import Footer from "./components/Footer/Footer";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Products from "./pages/Products";
import AlertSuccess from "./components/Alerts/AlertSuccess";
import SignupModal from "./components/Modals/SignupModal";
import Signup from "./pages/Signup";

function App() {
  return (
    <>
      {" "}
      <Nav />
      <SignupModal />
      <AlertSuccess />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/products" element={<Products />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
