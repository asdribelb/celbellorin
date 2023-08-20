import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import CartWidget from '../../componentes/NavBar/CartWidget/CartWidget';
import './NavBar.css';
import Logo from './Logo/logo';


const NavBar = () => {
    return (
        <nav className="NavBar">
            <Link to='/'>
            <Logo/>
            </Link>
            <div className='Categories'>
                <NavLink to={`/`} className={({ isActive}) => isActive ? 'ActiveOption' : 'Option'}> Productos</NavLink>
                <NavLink to={`/category/celulares`} className={({ isActive}) => isActive ? 'ActiveOption' : 'Option'}>Celulares</NavLink>
                <NavLink to={`/category/tablets`} className={({ isActive}) => isActive ? 'ActiveOption' : 'Option'}>Tablets</NavLink>
                <NavLink to={`/category/contacto`} className={({ isActive}) => isActive ? 'ActiveOption' : 'Option'}>Contacto</NavLink>
                    </div>
                    <li><CartWidget /></li>
            
        </nav>
    )
}

export default NavBar