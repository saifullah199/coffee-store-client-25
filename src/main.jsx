import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import MainLayouts from './Layouts/MainLayouts.jsx';
import Home from './Components/Home.jsx';
import AddCoffee from './Components/AddCoffee.jsx';
import UpdateCoffee from './Components/UpdateCoffee.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayouts,
    children: [
      {
        index: true,
        loader: () => fetch('http://localhost:5000/coffees'),
        Component: Home
      },
      {
        path: 'addCoffee',
        Component: AddCoffee
      },
      {
        path:'updateCoffee',
        Component: UpdateCoffee
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <RouterProvider router={router} />,
  </StrictMode>,
)
