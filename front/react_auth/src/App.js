import logo from './logo.svg';
import './App.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import JwtExample from "./components/JwtExample";
import {
    BrowserRouter,
    createBrowserRouter, Route,
    RouterProvider, Routes,
} from "react-router-dom";
import HomePage from "./components/pages/HomePage";
import AboutPage from "./components/pages/AboutPage";
import ContactPage from "./components/pages/ContactPage";
import MainLayouts from "./layouts/MainLayouts";
import NotFoundPage from "./components/pages/NotFoundPage";
import CarsPage from "./components/pages/CarsPage";
import CarModelPage from "./components/pages/CarModelPage";



function App() {
  return (
      <BrowserRouter>
    <div className="App">

        <Routes>
            <Route path={"/"} element={<MainLayouts/>}>
            <Route index element={<HomePage/>}></Route>
            <Route path={'/about'} element={<AboutPage/>}></Route>
            <Route path={'/contact'} element={<ContactPage/>}></Route>
            <Route path={'/cars'} element={<CarsPage/>}></Route>
            <Route path={"/cars/:seo_text/:car_slug"} element={<CarModelPage/>}></Route>
            <Route path={'*'} element={<NotFoundPage/>}></Route>
            </Route>
        </Routes>
        
      {/*<JwtExample/>*/}
        <ToastContainer/>
    </div>
      </BrowserRouter>
  );
}

export default App;
