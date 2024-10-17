import {Link} from "react-router-dom";


export default function MyMenu () {

    return  (

        <nav className="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav">
        <div className="container px-4 px-lg-5">
            <a className="navbar-brand" href="#page-top">Start Bootstrap</a>
            <button className="navbar-toggler navbar-toggler-right" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                Menu
                <i className="fas fa-bars"></i>
            </button>
            <div className="collapse navbar-collapse" id="navbarResponsive">
                <ul className="navbar-nav ms-auto">
                    <li className="nav-item"><Link className="nav-link" to="/about">About</Link></li>
                    <li className="nav-item"><Link className="nav-link" to="/project">Projects</Link></li>
                    <li className="nav-item"><Link className="nav-link" to="/contact">Contact</Link></li>
                </ul>
            </div>
        </div>
        </nav>


    )
}