import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import SelfStudy from "./pages/selfStudy.jsx";
import OfflineCourses from "./pages/offlineCourses.jsx";
import OnlineCourses from "./pages/onlineCourses.jsx";
import Home from "./pages/home.jsx";
import Footer from "./components/Footer.jsx";
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/self-study" element={<SelfStudy />} />
        <Route path="offline-curses" element={<OfflineCourses />} />
        <Route path="online-curses" element={<OnlineCourses />} />
        <Route path="*" element={<h1>404 Not Found</h1>} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
