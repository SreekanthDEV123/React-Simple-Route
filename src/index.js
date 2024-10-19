import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import Home from './Home';
import Contact from './Contact';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <App />, // Use App as the main component that contains the layout

    children: [
      {
        path: 'home',
        element: <Home />,
      },
      {
        path: 'contact',
        element: <Contact />,
      },
    ],
  },
]);

root.render(
  <StrictMode>
    <RouterProvider router={appRouter} />
  </StrictMode>
);
