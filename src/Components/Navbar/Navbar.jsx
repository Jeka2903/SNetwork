import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Navbar.module.css';


const Navbar = () => {
    return (
        <nav className={s.nav}>
            <div>
                <NavLink to='/profile' className = { navData => navData.isActive ? s.active : s.item} >
                    Profile
                </NavLink>
            </div>
            <div>
                <NavLink to='/dialogs'>
                    Messages
                </NavLink>
            </div>
            <div>
                <NavLink to='#s'>
                    News
                </NavLink>
            </div>
            <div>
                <NavLink to='#s'>
                    Music
                </NavLink>
            </div>
            <div>
                <NavLink to='#s'>
                    Settings
                </NavLink>
            </div>
        </nav>)
}
export default Navbar;