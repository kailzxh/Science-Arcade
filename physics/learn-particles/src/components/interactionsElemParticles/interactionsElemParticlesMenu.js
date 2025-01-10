import React from 'react';
import { Link } from 'react-router-dom'

function InteractionsElemParticlesMenu() {
    return (
        <div className="content-container">
           <header className="content-container__header">
    <h1>INTERACTIONS OF ELEMENTARY PARTICLES</h1>
    <p>Let's learn some new things!</p>
</header>
<main>
    <section className="main-menu">
        <div className="main-menu__home-links subCategories-menu--padding">
            <p>Read the theory carefully and then play the game to test your knowledge!</p>
            <Link tabIndex="-1" to="/interactions-elementary-particles-theory">
                <button className="main-menu__option main-menu__option--first">THEORY</button>
            </Link>
            <Link tabIndex="-1" to="/interactions-feynman-game">
                <button className="main-menu__option main-menu__option--second">PLAY WITH FEYMAN DIAGRAMS</button>
            </Link>
                        {/*<Link tabIndex="-1" to="/interactions-hadron-decay-game">*/}
                        {/*    <button className="main-menu__option">ΠΑΙΞΕ ΜΕ ΤΗ ΔΙΑΣΠΑΣΗ ΑΝΔΡΟΝΙΩΝ</button>*/}
                        {/*</Link>*/}
                    </div>
                </section>
            </main>
        </div>
    )
}

export default InteractionsElemParticlesMenu;