import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import App from "../App";
import NotFound from "../pages/NotFound";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";
import NewArrival from "../pages/NewArrival";
import MyCloset from "../pages/MyCloset";
import Shop from "../pages/Shop";
import Contact from "../pages/Contact";
import Selling from "../pages/Selling";
import ShoppingCart from "../pages/ShoppingCart";
import Checkout from "../pages/Checkout";
import Profile from "../pages/Profile";
import ProductDetails from "../pages/ProductDetails";
import About from "../pages/About";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        path: "/",
        element: <Home />,
      },
      {
        path: "/closet",
        element: <MyCloset />,
      },
      {
        path: "/new-arrival",
        element: <NewArrival />,
      },
      {
        path: "/shop",
        element: <Shop />,
      },

      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/selling",
        element: <Selling />,
      },
      {
        path: "/product-details",
        element: <ProductDetails />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/shopping-cart",
        element: <ShoppingCart />,
      },
      {
        path: "/checkout",
        element: <Checkout />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
    ],
  },

  {
    path: "/login",
    element: <SignIn />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },

  {
    path: "*",
    element: <NotFound />,
  },
]);

export default routes;
