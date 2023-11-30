import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Root from "./routes/Root.jsx";
import Home from "./routes/Home.jsx";
import SinglePage from "./routes/SinglePage.jsx";
import About from "./routes/About.jsx";
import ErrorPage from "./routes/ErrorPage.jsx";
import Products from "./routes/Products.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/products",
        element: <Products />,
      },
      {
        path: "/product/:productID",
        element: <SinglePage />,
      },
      {
        path: "/about",
        element: <About />,
      },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
