import logo from './logo.svg';
import './App.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import JwtExample from "./components/JwtExample";
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import HomePage from "./components/pages/HomePage";
import AboutPage from "./components/pages/AboutPage";
import ContactPage from "./components/pages/ContactPage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <HomePage/>,
    },
    {
        path: "/about",
        element: <AboutPage/>,
    },
    {
        path: "/contact",
        element: <ContactPage/>,
    }
]);

function App() {
  return (
    <div className="App">
        <RouterProvider router={router} />
      {/*<JwtExample/>*/}
        <ToastContainer/>
    </div>
  );
}

export default App;
