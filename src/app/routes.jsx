import { createBrowserRouter } from "react-router-dom"
import Home from "../pages/Home"
export const  router= createBrowserRouter([
    {path:"/",element:<Home/>},
      {
    path: "*",
    element: (
      <div className="min-h-screen grid place-items-center">
        <div>
          <h1 className="text-3xl font-bold">404</h1>
          <p className="text-gray-600">Page not found</p>
        </div>
      </div>
    ),
  },
])

