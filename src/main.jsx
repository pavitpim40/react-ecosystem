import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import './index.css';

const routes = [
  { path: '/', element: <div>HomePage</div> },
  { path: '/profile', element: <div>ProfilePage</div> },
  { path: '/profile/:userId', element: <div>FriendPage</div> },
  { path: '/feed', element: <div>FeedPage</div> },
  { path: '*', element: <Navigate to='/' /> },
];

const router = createBrowserRouter(routes);

ReactDOM.createRoot(document.getElementById('root')).render(<RouterProvider router={router} />);

// npm i react-router-dom
