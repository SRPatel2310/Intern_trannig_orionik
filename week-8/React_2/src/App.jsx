import React from "react";
import "./App.css";
import Navigation from "./componet/Navigation";
import Home from "./componet/Home";
import About from "./componet/About";
import Product from "./componet/Product";
import Products from "./componet/Products";
import Service from "./componet/Service";
import Contect from "./componet/Contect";
import Login from "./componet/Login";
import Deshboad from "./componet/Deshboad";
import Paramsuser from "./componet/Paramsuser";
import NotFound from "./componet/NotFound";
import { createBrowserRouter, RouterProvider } from "react-router-dom";


const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <Navigation />
        <Home />
      </div>
    ),
  },

  {
    path: "/About",
    element: (
      <div>
        <Navigation />
        <About />
      </div>
    ),
  },

  {
    path: "/Product",
    element: (
      <div>
        <Navigation />
        <Product />
      </div>
    ),
    children: [
      {
        path: "Products",
        element: <Products />,
      },
    ],
  },

  {
    path: "/Service",
    element: (
      <div>
        <Navigation />
        <Service />
      </div>
    ),
  },
  {
    path: "/Contect",
    element: (
      <div>
        <Navigation />
        <Contect />
      </div>
    ),
  },
  
  {
    path: "/Login",
    element: (
      <div>
        <Navigation />
        <Login />
      </div>
    ),
  },

  {
    path: "/Deshboad",
    element: (
      <div>
        <Navigation />
        <Deshboad />
      </div>
    ),
  },

  {
    path: "/student/:id",
    element: (
      <div>
        <Navigation />
        <Paramsuser />
      </div>
    ),
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);
function App() {
  return (
    <>
      <div>
        <RouterProvider router={router} />
      </div>

      {/* <Useeffect /> */}
      {/* <Advanceuseeffcet /> */}
    </>
  );
}

export default App;
