import {Link, Outlet} from "react-router-dom";

export default function MainLayouts ()
{
    return(
        <>
            <nav>
                <ul>
                    <li><Link to={"/"}>Home</Link></li>
                    <li><Link to={"/about"}>About</Link></li>
                    <li><Link to={"/contact"}>Contact</Link></li>
                    <li><Link to={"/cars"}>Cars</Link></li>
                    <li><Link to={"/N"}>111</Link></li>

                </ul>
            </nav>
            <hr/>
            <Outlet/>
        </>
    )
}