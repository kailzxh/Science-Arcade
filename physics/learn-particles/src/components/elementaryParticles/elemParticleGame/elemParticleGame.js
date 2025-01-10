import React, { useState } from 'react';
import ParticleButton from './elemParticleGameButton'
import Particle from './elemParticle'

const correctParticleCombinations = {
    // FOR_TWO_PARTICLES: [
    //     ["u", "u_"],
    //     ["d", "d_"],
    //     ["s", "s_"],
    //     ["u", "d_"],
    //     ["u", "s_"],
    //     ["d", "u_"],
    //     ["d", "s_"],
    //     ["s", "u_"],
    //     ["s", "d_"],
    // ],
    FOR_TWO_PARTICLES:[
        [["u", "u_"], <text>the η or π<sup>0</sup> meson</text>],
        [["d", "d_"], <text>the η or π<sup>0</sup> meson</text>],
        [["s", "s_"], <text>the η meson</text>],
        [["u", "d_"], <text>the π<sup>+</sup> meson</text>],
        [["u", "s_"], <text>the K<sup>+</sup> meson</text>],
        [["d", "u_"], <text>the π<sup>-</sup> meson</text>],
        [["d", "s_"], <text>the K<sup>0</sup> meson</text>],
        [["s", "u_"], <text>the K<sup>-</sup> meson</text>],
        [["s", "d_"], <text><span style={{ 'textDecoration': 'overline' }}>the K</span><sup>0</sup> meson</text>],
    ],
    
    // FOR_THREE_PARTICLES: [
    //     ["u", "u", "u"],
    //     ["u", "u", "d"],
    //     ["u", "u", "s"],
    //     ["u", "d", "d"],
    //     ["u", "s", "s"],
    //     ["d", "d", "d"],
    //     ["d", "d", "s"],
    //     ["s", "s", "s"],
    //     ["s", "s", "d"]
    // ]
    FOR_THREE_PARTICLES:[
        [["u", "u", "u"], <text>Δ<sup>++</sup></text>],
        [["u", "u", "d"], <text>p proton</text>],
        [["u", "u", "s"], <text>Σ<sup>+</sup></text>],
        [["u", "d", "d"], <text>n neutron</text>],
        [["u", "s", "s"], <text>Ξ<sup>0</sup></text>],
        [["d", "d", "d"], <text>Δ<sup>-</sup></text>],
        [["d", "d", "s"], <text>Σ<sup>-</sup></text>],
        [["s", "s", "s"], <text>Ω<sup>-</sup></text>],
        [["d", "s", "s"], <text>Ξ<sup>-</sup></text>],
        [["u", "d", "s"], <text>Λ or Σ<sup>0</sup></text>],
        [["u_", "u_", "u_"], <text>Δ<sup>--</sup></text>],
        [["u_", "u_", "d_"], <text><span style={{ 'textDecoration': 'overline' }}>p</span> antiproton</text>],
        [["u_", "u_", "s_"], <text>Σ<sup>-</sup></text>],
        [["d_", "d_", "d_"], <text>Δ<sup>+</sup></text>],
        [["u_", "d_", "d_"], <text><span style={{ 'textDecoration': 'overline' }}>n</span> antineutron</text>],
        [["d_", "d_", "s_"], <text>Σ<sup>+</sup></text>],
        [["s_", "s_", "s_"], <text>Ω<sup>+</sup></text>],
        [["u_", "s_", "s_"], <text><span style={{ 'textDecoration': 'overline' }}>Ξ</span><sup>0</sup></text>],
        [["d_", "s_", "s_"], <text>Ξ<sup>+</sup></text>],
        [["u_", "d_", "s_"], <text><span style={{ 'textDecoration': 'overline' }}>Λ</span> or <span style={{ 'textDecoration': 'overline' }}>Σ</span><sup>0</sup></text>]
    ]
    
};

const ElemParticlesGame = () => {

    const [selectedParticles, setSelectedParticles] = useState([]);
    const [warningTooMany, setWarningTooMany] = useState(false);
    const [endGame, setEndGame] = useState(false);
    const [winner, setWinner] = useState(false);
    const [correctParticleCombinationFound, setCorrectParticleCombinationFound] = useState("");

    const addNewParticle = (particleName) => {
        const newSelectedParticles = selectedParticles.slice();

        if (selectedParticles.length <= 2) {
            newSelectedParticles.push(particleName);
            setSelectedParticles(newSelectedParticles);
        } else {
            if (!endGame) {
                setWarningTooMany(true);
            }
        }
    };

    const checkDoubleParticleCombination = () => {
        const selectedParticlesJoined = selectedParticles.slice().sort().join('');
        let selectedMatchIsCorrect = -1;
        let particlesMatched = false;

        correctParticleCombinations.FOR_TWO_PARTICLES.forEach(correctParticleCombination => {
            if (!particlesMatched) {
                const correctParticleCombinationJoined = correctParticleCombination[0].slice().sort().join('');
                selectedMatchIsCorrect = correctParticleCombinationJoined.localeCompare(selectedParticlesJoined);

                if (selectedMatchIsCorrect === 0) {
                    setWinner(true);
                    setEndGame(true);
                    particlesMatched = true;
                    setCorrectParticleCombinationFound(correctParticleCombination[1]);
                }
            }
        });

        if (selectedMatchIsCorrect !== 0) {
            setWinner(false);
            setEndGame(true);
            setCorrectParticleCombinationFound("");
        }
    };

    const checkTripleParticleCombinations = () => {
        const selectedParticlesJoined = selectedParticles.slice().sort().join('');
        let selectedMatchIsCorrect = -1;
        let particlesMatched = false;

        correctParticleCombinations.FOR_THREE_PARTICLES.forEach(correctParticleCombination => {
            if (!particlesMatched) {
                const correctParticleCombinationJoined = correctParticleCombination[0].slice().sort().join('');
                selectedMatchIsCorrect = correctParticleCombinationJoined.localeCompare(selectedParticlesJoined);

                if (selectedMatchIsCorrect === 0) {
                    setWinner(true);
                    setEndGame(true);
                    particlesMatched = true;
                    setCorrectParticleCombinationFound(correctParticleCombination[1]);
                }
            }
        });

        if (selectedMatchIsCorrect !== 0) {
            setWinner(false);
            setEndGame(true);
            setCorrectParticleCombinationFound("");
        }
        setWarningTooMany(false);
    };

    const checkParticleCombination = () => {
        if (selectedParticles.length === 2) {
            checkDoubleParticleCombination();
        } else if (selectedParticles.length === 3) {
            checkTripleParticleCombinations();
        }
    };

    const resetGame = () => {
        setSelectedParticles([]);
        setWarningTooMany(false);
        setEndGame(false);
        setWinner(false);
        setCorrectParticleCombinationFound("")
    };

    return (
        <div className="homepage-container">
            <div className="particle-display">
                <div className="bowl"></div>
                {selectedParticles.map((particleName, index) => {
                    return (
                        <Particle
                            name={particleName}
                            index={index}
                            key={index}
                        />
                    )
                })}
                {warningTooMany ? <div className="particles-error">You can select up to three particles. Try again by clicking reset.</div> : null}
{endGame ? winner ? <div className="particles-success">Congratulations, you found the {correctParticleCombinationFound}.<br />Play again by clicking reset.</div> : <div className="particles-error">Unfortunately, the particle combination is not correct, play again by clicking reset.</div> : null}
<div className="particle-header">
    Select the particles and try to form the correct combination, verifying what you learned in the theory.
</div>

            </div>

            <div className="bariums-mesons">
                <ParticleButton
                    id="u"
                    name="u"
                    load="2/3"
                    index="1"
                    displayedName={["u"]}
                    addnewparticle={addNewParticle}
                />
                <ParticleButton
                    id="d"
                    name="d"
                    load="-1/3"
                    index="2"
                    displayedName={["d"]}
                    addnewparticle={addNewParticle}
                />
                <ParticleButton
                    id="s"
                    name="s"
                    load="-1/3"
                    index="3"
                    displayedName={["s"]}
                    addnewparticle={addNewParticle}
                />
                <ParticleButton
                    id="u_"
                    name="u_"
                    load="-2/3"
                    index="4"
                    displayedName={[<span style={{ 'textDecoration': 'overline' }}>u</span>]}
                    addnewparticle={addNewParticle}
                />
                <ParticleButton
                    id="d_"
                    name="d_"
                    load="1/3"
                    index="5"
                    displayedName={[<span style={{ 'textDecoration': 'overline' }}>d</span>]}
                    addnewparticle={addNewParticle}
                />
                <ParticleButton
                    id="s_"
                    name="s_"
                    load="1/3"
                    index="6"
                    displayedName={[<span style={{ 'textDecoration': 'overline' }}>s</span>]}
                    addnewparticle={addNewParticle}
                />
            </div>
            <div className="game-controllers">
    <button className="game-controllers__continue" id="game-controllers__continue" onClick={checkParticleCombination}>Continue</button>
    <button className="game-controllers__reset" id="game-controllers__reset" onClick={resetGame}>Reset</button>
</div>

        </div>
    )
};

export default ElemParticlesGame;