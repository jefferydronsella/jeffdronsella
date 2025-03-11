import { createBrowserRouter, RouterProvider, RouteObject } from 'react-router-dom'
import './App.css'
import RootLayout from './components/Root'
import ErrorPage from './components/Error'
import { navItems } from './components/NavItems'

const routerNavItems: RouteObject[] = [];
navItems.forEach(navItem => {
  routerNavItems.push({path: navItem.path, element: navItem.element})
});

const router = createBrowserRouter([
  {
    path: '/', element: <RootLayout />, errorElement: <ErrorPage />, children: routerNavItems
  }
])

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
