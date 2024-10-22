
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import MyLayout from "./layout/MyLayout";
import {ToastContainer} from "react-toastify";
import {MainMenuContextProvider} from "./component/menu/MyMenuContext";
import MyPage from "./page/MyPage";
import BlogList from "./component/blog/BlogList";
import BlogItem from "./component/blog/BlogItem";
import {BlogContextProvider} from "./component/blog/BlogContext";

function App() {
    return (
        <BrowserRouter>
            <MainMenuContextProvider>
                <BlogContextProvider>
                    <div className="App">
                        <Routes>
                            <Route path="/" element={<MyLayout />} >
                                <Route path=":page_slug" element={<MyPage />} />
                                <Route path="posts" element={<BlogList />} />
                                <Route path="posts/:post_slug" element={<BlogItem />} />
                            </Route>
                        </Routes>
                    </div>
                    <ToastContainer />
                </BlogContextProvider>
            </MainMenuContextProvider>
        </BrowserRouter>
    );
}



export default App;
