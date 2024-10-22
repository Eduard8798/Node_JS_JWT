import {Link, useLocation} from "react-router-dom";
import {useEffect, useState} from "react";


export default function MyMenu (props) {

    const location = useLocation();
    const [navClassName,setNavClassName] = useState('navbar navbar-expand-lg navbar-dark fixed-top ');

    useEffect(() => {
        if (location.pathname !== '/')
        {
            setNavClassName('navbar navbar-expand-lg navbar-dark fixed-top navbar-shrink')
        }
        else setNavClassName('navbar navbar-expand-lg navbar-dark fixed-top ')
    }, [location]);

    return  (

        <nav className={navClassName} id="mainNav">
        <div className="container px-4 px-lg-5">
            <Link className="navbar-brand" to="/">Start Bootstrap</Link> : {props.byPropsPageName}
            <button className="navbar-toggler navbar-toggler-right" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                Menu
                <i className="fas fa-bars"></i>
            </button>
            <div className="collapse navbar-collapse" id="navbarResponsive">
                <ul className="navbar-nav ms-auto">
                    <li className="nav-item"><Link className="nav-link" to="/about">About</Link></li>
                    <li className="nav-item"><Link className="nav-link" to="/projects">Projects</Link></li>
                    <li className="nav-item"><Link className="nav-link" to="/contact">Contact</Link></li>
                    <li className="nav-item"><Link className="nav-link" to="/cars">Cars</Link></li>
                </ul>
            </div>
        </div>
        </nav>


    )
}