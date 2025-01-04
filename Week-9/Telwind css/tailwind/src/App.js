import "./App.css";
import Register from "./Componet/Register";
import Login from "./Componet/Login";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Deshboard from "./page/Deshboard";
import Product from "./page/Product";
import About from "./page/About";
import ProtectedRoutes from "./Service/ProtectedRoutes";
import Contact from "./page/Contact";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ProtectedRoutes />}>
            <Route path="/" element={<Deshboard />} />

            <Route path="/About" element={<About />} />

            <Route path="/Product" element={<Product />} />
            <Route path="/Contact" element={<Contact />} />
          </Route>

          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
