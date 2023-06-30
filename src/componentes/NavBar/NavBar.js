import CarWidget from "./CartWidget/CartWidget"
import {Link} from 'react-router-dom'

const NavBar = () => {
    return (
        <nav>
            <div>

                <nav className="navbar navbar-expand-lg bg-body-tertiary">
                    <div className="container-fluid">
                        <Link to='/'>
                        <img src= './cel_logo.png' width='70'/>
                        </Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav m-auto">
                                <li className="nav-item">
                                    <Link className="nav-link" aria-current="page" to='/'>Inicio</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to='/'>Celulares</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to='/'>Apple</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to='/'>Contacto</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>




            </div>
            <CarWidget />
        </nav>
    )
}

export default NavBar;