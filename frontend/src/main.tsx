import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import Root from '../pages/root'
import ErrorPage from '../pages/Error-pages'
import Index from '../pages/index'
import Login from '../pages/Login'

const router =  createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
  {
    path: '/index',
    element: <Index />,
    errorElement: <ErrorPage />
  },
  {
    path: '/Login',
    element: <Login />,
    errorElement: <ErrorPage />
  }
],
  }
]

)

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
