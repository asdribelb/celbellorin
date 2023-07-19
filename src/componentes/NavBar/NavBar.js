import CarWidget from "./CartWidget/CartWidget"
import { Link, NavLink } from 'react-router-dom'

const NavBar = () => {
    return (
        <nav className="NavBar">
            <Link to='/'>
                <img src='./cel_logo.png' width='70' />
            </Link>
            <div className='Categories'>
                <NavLink to={`/category/celular`} className={({ isActive}) => isActive ? 'ActiveOption' : 'Option'}> Celulares</NavLink>
                <NavLink to={`/category/productos`} className={({ isActive}) => isActive ? 'ActiveOption' : 'Option'}>Productos</NavLink>
                <NavLink to={`/category/tablets`} className={({ isActive}) => isActive ? 'ActiveOption' : 'Option'}>Tablets</NavLink>
                    </div>
            <CarWidget />
        </nav>
    )
}

export default NavBar