import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { createBrowserRouter, RouterProvider } from 'react-router'

import MainLayout from './layout/MainLayout'
import Homepage from './pages/homepage/HomePage'
import Errorpages from './pages/errorpage/Errorpages'
import Timeline from './pages/friends/Timelline'
import Stats from './pages/stats/Stats'
import FriendDetails from './pages/friendDetails/FriendDetails'
import FriendProvider from './context/FriendContext'
import { ToastContainer } from 'react-toastify'

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Homepage />
      },
      {
        path: "/timeline",
        element: <Timeline />
      },
      {
        path: "/friendDetails/:id",
        element: <FriendDetails />,
        loader: () => fetch("/friends.json"),
      },
      {
        path: "/stats",
        element: <Stats />
      }
    ],
    errorElement: <Errorpages />
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <FriendProvider>
      <RouterProvider router={router} />
       <ToastContainer />
    </FriendProvider>
  </StrictMode>
)