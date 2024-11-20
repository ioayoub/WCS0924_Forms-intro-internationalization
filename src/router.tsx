import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import ContactPage from "./pages/ContactPage";
import HomePage from "./pages/HomePage";

export const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/contact",
        element: <ContactPage />,
      },
    ],
  },
]);
