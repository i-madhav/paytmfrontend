import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css'
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import LandingPage from './components/LandingPage';
import { Provider } from 'react-redux';
import store from './store/store';

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
  }
])

function App() {
  return (
    <>
      <Provider store={store}>
        <RouterProvider router={appRouter} />
      </Provider>
    </>
  )
}

export default App;