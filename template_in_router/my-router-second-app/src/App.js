import './assets/css/styles.css';
import {ToastContainer} from "react-toastify";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import {Suspense, useState} from "react";
import AboutPage from "./pages/AboutPage";
import IndexPage from "./pages/IndexPage";
import ProjectPage from "./pages/ProjectPage";
import ContactPage from "./pages/ContactPage";
import Eror404page from "./pages/Eror404page";
import {PageContextProvider} from "./context/PageContext";
import CarVendorsPage from "./pages/CarVendorsPage";
import {CarsContextProvider} from "./context/CarsContext";
import CarsPage from "./context/CarsPage";




function App() {
    const [byPropsPageName,setByPropsPageName] = useState('Home by props');

    return (
        <BrowserRouter>
            <PageContextProvider>
            <div className="App">

                <Routes>
                    <Route path="/" element={<MainLayout byPropsPageName = {byPropsPageName}/>}>

                    <Route path="" element={<IndexPage setByPropsPageName = {setByPropsPageName}/>}/>


                    {/*лениво загружаем AboutPage*/}
                    <Route path="about" element={
                        <Suspense fallback={<div>Loading...</div>}>
                            <AboutPage setByPropsPageName = {setByPropsPageName} />
                        </Suspense>
                    } />
                    <Route path="projects" element={
                        <Suspense fallback={<div>Loading...</div>}>
                            <ProjectPage setByPropsPageName = {setByPropsPageName} />
                        </Suspense>
                    } />

                    <Route path="contact" element={
                        <Suspense fallback={<div>Loading...</div>}>
                            <ContactPage setByPropsPageName = {setByPropsPageName}/>
                        </Suspense>
                    } />

                        <Route path="cars" element={<Suspense fallback={<div>Loading...</div>}>
                            <CarsContextProvider> <CarVendorsPage/> </CarsContextProvider>
                        </Suspense>
                    } />
                        <Route path="cars/:seo_text/:car_slug" element={<Suspense fallback={<div>Loading...</div>}>
                            <CarsContextProvider> <CarsPage/></CarsContextProvider>
                        </Suspense>
                    } />

                    <Route path={"*"} element={<Eror404page setByPropsPageName = {setByPropsPageName}/>}/>
</Route>
                </Routes>
                <ToastContainer/>
            </div>
            </PageContextProvider>
        </BrowserRouter>
    );
}

export default App;
