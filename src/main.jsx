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
import CoffeeDetails from './Components/CoffeeDetails.jsx';
import SignIn from './Components/SignIn.jsx';
import SignUp from './Components/SignUp.jsx';
import AuthProvider from './contexts/AuthProvider.jsx';

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
        path: 'coffee/:id',
        loader: ({params}) => fetch(`http://localhost:5000/coffees/${params.id}`),
        Component: CoffeeDetails
      },
      {
        path:'updateCoffee/:id',
        loader: ({params}) => fetch(`http://localhost:5000/coffees/${params.id}`),
        Component: UpdateCoffee
      },
      {
        path:'signin',
         Component: SignIn

      },
      {
        path: 'signup',
        Component: SignUp
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
  </StrictMode>,
)
