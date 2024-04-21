import React from 'react'
import { NavLink } from 'react-router-dom'

const NavMenu = () => (
    <>
        <nav className="main-menu" id="main-menu">
            <ul>
                <li><NavLink exact to="/" activeClassName="activo"> Inicio </NavLink></li>
                <li><NavLink to="/cursos" activeClassName="activo"> Cursos </NavLink></li>
                <li><NavLink to="/formulario" activeClassName="activo"> Formulario </NavLink></li>
                <li><NavLink to="/usuarios" activeClassName="activo"> Usuarios </NavLink></li>
            </ul>
        </nav>
        <div className="main-menu-toggle to-l" id="main-menu-toggle"></div>
    </>
)


export default NavMenu