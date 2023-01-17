import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";

import Footer from "./components/Footer";
import Header from "./components/Header";

import "./styles/App.scss";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/product/:id" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
