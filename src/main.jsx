import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router';
import MainLayout from './layout/MainLayout';
import Homepage from './pages/homepage/HomePage';
import Errorpages from './pages/errorpage/Errorpages';
import Timeline from './pages/friends/timelline';
import Stats from './pages/stats/Stats';


const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element:<Homepage />
      },
      {
        path:"/timeline",
        element:<Timeline/>
      },
      {
        path:"/stats",
        element:<Stats />
      }
    ],

    errorElement: <Errorpages />
  },

]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
     <RouterProvider router={router} />
  </StrictMode>
)
