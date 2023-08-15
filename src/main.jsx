import React from 'react'
import ReactDOM from 'react-dom/client'
import Signin from './login-pages/SignIn.jsx'
import './index.css'
import Signup from './login-pages/SignUp.jsx'
import Info from './login-pages/Info.jsx'
import Contact from './login-pages/Contact.jsx'
import Aichat from './chat-pages/AiChat.jsx'
import "./login-styles/App.css"
import Settings from "./chat-pages/Settings.jsx"
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import axios from "axios";

export default axios.create({
    baseURL: "http://localhost:8000/api",
    headers: {
        "Content-type": "application/json"
    }
});


const router = createBrowserRouter([
  {
    path: "/",
    element: <Signin/>,
  },
  {
    path: "Signup",
    element: <Signup/>,
  },
  {
    path: "Info",
    element: <Info/>,
  },
  {
    path: "Contact",
    element: <Contact/>,
  },
  {
    path: "Aichat",
    element: <Aichat />,
  },
  {
    path: "Settings",
    element: <Settings />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
