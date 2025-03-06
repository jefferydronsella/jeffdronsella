import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Home from './components/Home'
import Music from './components/Music'
import About from './components/About'
import Contact from './components/Contact'
import RootLayout from './components/Root'
import ErrorPage from './components/Error'

const router = createBrowserRouter([
  {
    path: '/', element: <RootLayout />, errorElement: <ErrorPage />, children: [
      { path: '/', element: <Home /> },
      { path: '/music', element: <Music /> },
      { path: '/about', element: <About /> },
      { path: '/contact', element: <Contact /> },
    ]
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
