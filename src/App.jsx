import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import CustomCursor from "./components/CustomCursor";

import Home from "./pages/Home";
import Marketplace from "./pages/Marketplace";
import ItemDetails from "./pages/ItemDetails";
import ContactSeller from "./pages/ContactSeller";
import Safety from "./pages/Safety";
import Support from "./pages/Support";

import "./App.css";

function App() {
  return (
    <>
      <CustomCursor/>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/marketplace" element={<Marketplace />} />
        <Route path="/item/:id" element={<ItemDetails />} />
        <Route path="/contact-seller" element={<ContactSeller />} />
        <Route path="/safety" element={<Safety />} />
        <Route path="/support" element={<Support />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;