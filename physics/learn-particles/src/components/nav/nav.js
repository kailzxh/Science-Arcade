import React from 'react';
import { Link } from 'react-router-dom'
import { FaHome } from 'react-icons/fa';

function Nav() {
    return (
        <div className="navigation">
            <Link className="navigation__main-menu--first" to='/'>< FaHome className="navigation__main-menu__home-link" /></Link>
            <div className="navigation__main-menu">
            <Link className="navigation__main-menu__main-link"
      to="/elementary-particles"
>
    <button tabIndex="-1">
        Elementary Particles
    </button>
</Link>
<Link className="navigation__main-menu__main-link"
      to="/interactions-elementary-particles"
>
    <button tabIndex="-1">
        Interactions of Elementary Particles
    </button>
</Link>

            </div>
        </div>
    )
}

export default Nav;