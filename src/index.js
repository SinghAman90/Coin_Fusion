import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Home from './pages/Home';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import { Children } from 'react';
import Crypto from './pages/Crypto';
import Saved from './pages/Saved';
import Tranding from './pages/Tranding';
import CryptoDetails from './components/CryptoDetails';
import Exchanges from './pages/Exchanges';
const router = createBrowserRouter([
  {
    path : "/", 
    element : <Home/>,
    children : [
      {
        path:"/",
        element :<Crypto/> ,
        children : [
          {
          path : ":coinId",
          element : <CryptoDetails></CryptoDetails>
          }
        ]     
      },
      {
        path:"/trending",
        element :<Tranding/> ,
        children: [
          {
            path:":coinId",
            element: <CryptoDetails />
          }
        ]  
      },
      {
        path:"/saved",
        element :<Saved/> ,
        children: [
          {
            path:":coinId",
            element: <CryptoDetails />
          }
        ]     
      },
      {
        path : "/exchanges",
        element : <Exchanges></Exchanges>
      }
    ]
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
