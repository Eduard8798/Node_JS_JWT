import './assets/css/styles.css';
import {ToastContainer} from "react-toastify";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import {Suspense} from "react";
import AboutPage from "./pages/AboutPage";
import IndexPage from "./pages/IndexPage";
import ProjectPage from "./pages/ProjectPage";
import ContactPage from "./pages/ContactPage";
import Eror404page from "./pages/Eror404page";

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Routes>
                    <Route path="/" element={<MainLayout/>}/>
                    <Route path="" element={<IndexPage/>}/>

                    {/*лениво загружаем AboutPage*/}
                    <Route path="about" element={
                        <Suspense fallback={<div>Loading...</div>}>
                            <AboutPage />
                        </Suspense>
                    } />
                    <Route path="project" element={
                        <Suspense fallback={<div>Loading...</div>}>
                            <ProjectPage />
                        </Suspense>
                    } />

                    <Route path="contact" element={
                        <Suspense fallback={<div>Loading...</div>}>
                            <ContactPage />
                        </Suspense>
                    } />
                    <Route path={"*"} element={<Eror404page/>}/>
                </Routes>
                <ToastContainer/>
            </div>
        </BrowserRouter>
    );
}

export default App;
