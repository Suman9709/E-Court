import React from 'react'
import Layout from './Layout'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import HomePage from './Pages/HomePage'
import LoginPage from './Pages/LoginPage'
import MainPage from './Pages/MainPage'
import AdminPanel from './Pages/AdminPanel'
import NewCaseForm from './Pages/NewCaseForm'



const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <MainPage />
      },
      {
        path: "/login",
        element: <LoginPage />
      },
      {
        path:"/adminpanel",
        element:<AdminPanel/>
      },
      {
         path:"/addnewcase",
        element:<NewCaseForm/>
      }
    ]
  }
])
const App = () => {
  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  )
}

export default App