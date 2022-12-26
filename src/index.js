import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
// pages
import Home from './pages/Home';
import Contact from './pages/Contact';
import Project from './pages/Project';
import NotFound from './pages/NotFound';
// GA
import ReactGA from "react-ga4";


ReactGA.initialize(process.env.REACT_APP_ANALYTICS_ID)
ReactGA.send({ hitType: "pageview", page: "/" });

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NotFound />,
    children: [
      { index: true, path: '/', element: <Home /> },
      { path: '/contact', element: <Contact /> },
      { path: '/project', element: <Project /> },
    ]
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

reportWebVitals();
