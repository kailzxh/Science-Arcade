import React from 'react';
import { Link } from 'react-router-dom'

function ElemParticlesMenu() {
    return (
        <div className="content-container">
          <header className="content-container__header">
    <h1>DISCOVER THE ELEMENTARY PARTICLES</h1>
    <p>Are you ready to start?</p>
</header>
<main>
    <section className="main-menu">
        <div className="main-menu__home-links subCategories-menu--padding">
            <p>Read the theory carefully and then play the game to test your knowledge!</p>
            <Link tabIndex="-1" to="/elementary-particles-board">
                <button className="main-menu__option main-menu__option--first">
                    ELEMENTARY PARTICLES TABLE
                </button>
            </Link>
            <Link tabIndex="-1" to="/elementary-particles-generations">
                <button className="main-menu__option main-menu__option--second">
                    PARTICLE GENERATIONS
                </button>
            </Link>
            <Link tabIndex="-1" to="/elementary-particles-game">
                <button className="main-menu__option">
                    PLAY!
                </button>
            </Link>
        </div>
    </section>
</main>

        </div>)
}

export default ElemParticlesMenu;