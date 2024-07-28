import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css'
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import LandingPage from './components/LandingPage';
import DashBoard from './components/DashBoard';

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />
  },
  {
    path: "/signup",
    element: <SignUp />
  },
  {
    path: "/signin",
    element: <SignIn />
  },
  {
    path:"/dashboard",
    element:<DashBoard/>
  }
])

function App() {
  return (
    <>
        <RouterProvider router={appRouter} />
    </>
  )
}

export default App;