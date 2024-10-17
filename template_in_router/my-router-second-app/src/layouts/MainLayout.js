import MyHeader from "./MyHeader";
import {Outlet} from "react-router-dom";
import MyContact from "./MyContact";
import MyFooter from "./MyFooter";
import IndexPage from "../pages/IndexPage";


export default function MainLayout () {

    return  (
        <>
       <MyHeader/>


        <Outlet/>

        <MyContact/>

            <MyFooter/>
            </>
    )
}