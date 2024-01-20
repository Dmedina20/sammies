import "./App.css";
import Nav from "./components/Navigation/Nav";
import Footer from "./components/Footer/Footer";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import AlertSuccess from "./components/Alerts/AlertSuccess";
import SignupModal from "./components/Modals/SignupModal";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ProfileCreation from "./pages/ProfileCreation";
import Profile from "./pages/Profile";
import { useSelector } from "react-redux";
function App() {
  const user = useSelector((state) => state.user.user);
  return (
    <>
      {" "}
      <Nav />
      <SignupModal />
      <div className="flex justify-center">
        <AlertSuccess />
      </div>
      {!user ? (
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/signup/createprofile" element={<ProfileCreation />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      ) : (
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/signup/createprofile" element={<ProfileCreation />} />
          <Route path={`/profile/${user.uid}`} element={<Profile />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      )}
      <Footer />
    </>
  );
}

export default App;
