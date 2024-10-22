import MyHeader from "./MyHeader";
import {Outlet} from "react-router-dom";
import MyContact from "./MyContact";
import MyFooter from "./MyFooter";



export default function MainLayout (props) {

    return(
        <>
            <MyHeader byPropsPageName = {props.byPropsPageName} />
            <Outlet />
            <MyContact />

            <MyFooter />
        </>
    )
}