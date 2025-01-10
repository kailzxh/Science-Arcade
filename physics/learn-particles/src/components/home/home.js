import React from 'react';
import { Link } from 'react-router-dom'


function Home() {
    return (
        <div className="content-container">
           <div className="content-container__header">
    <h1>THE CELEBRATION OF PARTICLE PHYSICS</h1>
    <p>a look at the genealogy tree of hadrons</p>
</div>
<div className="main-menu">
    <p>Choose one of the two categories to start your search</p>
    <div className="main-menu__home-links">
        <Link tabIndex="-1" to='/elementary-particles'>
            <button className="main-menu__option main-menu__option--first">
                <h2>ELEMENTARY PARTICLES</h2>
            </button>
        </Link>
        <Link tabIndex="-1" to='/interactions-elementary-particles'>
            <button className="main-menu__option">
                <h2>INTERACTIONS OF ELEMENTARY PARTICLES</h2>
            </button>
        </Link>
    </div>
</div>

        </div>)
}

export default Home;