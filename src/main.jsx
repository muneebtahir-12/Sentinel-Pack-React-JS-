import { StrictMode } from 'react'
import './index.css'
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from './allPages/App'
import About from './allPages/About'
import Contact from './allPages/Contact'
import Product from "./allPages/Products"
import Details from './allPages/ProductDetails';
import Add from '../allComponents/productDetails/Add';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/product",
    element: <Product />,
  },
  {
  path: "/product/:name",
  element: <Details />,
},

]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
