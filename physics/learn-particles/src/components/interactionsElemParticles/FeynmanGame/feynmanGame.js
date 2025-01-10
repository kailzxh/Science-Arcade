import React, { useState } from 'react';
import FeynmanInteraction from './feynmanInteraction';
import FeynmanRotation from './feynmanRotation';

const first_game_data_collection = [
    ["u", "arrow", "d", "W+"],
    ["W-", "u", "arrow", "d"],
    ["W-", "arrow", "u_", "d"],
    ["d_", "W-", "arrow", "u_"],
    ["d_", "arrow", "W+", "u_"],
    ["u", "d_", "arrow", "W+"],
];

const second_game_data_collection = [
    ["u", "arrow", "s", "W+"],
    ["W-", "u", "arrow", "s"],
    ["W-", "arrow", "u_", "s"],
    ["s_", "W-", "arrow", "u_"],
    ["s_", "arrow", "W+", "u_"],
    ["u", "s_", "arrow", "W+"],
];

const third_game_data_collection = [
    ["ve", "arrow", "e-", "W+"],
    ["W-", "ve", "arrow", "e-"],
    ["W-", "arrow", "ve_", "e-"],
    ["e+", "W-", "arrow", "ve_"],
    ["e+", "arrow", "W+", "ve_"],
    ["ve", "e+", "arrow", "W+"],
];

const fourth_game_data_collection = [
    ["vμ", "arrow", "μ-", "W+"],
    ["W-", "vμ", "arrow", "μ-"],
    ["W-", "arrow", "vμ_", "μ-"],
    ["μ+", "W-", "arrow", "vμ_"],
    ["μ+", "arrow", "W+", "vμ_"],
    ["vμ_", "μ+", "arrow", "W+"],
];


function FeynmanGame() {
    const [hasChosenInteraction, setHasChosenInteraction] = useState(false);
    const [selected, setSelected] = useState({ react: '', result: '' , dataCollectionSelected: []});

    const toggleOpenGame = () => {
        setHasChosenInteraction(!hasChosenInteraction)
    };
    
    const chooseInteraction = (react, result, index) => {
        toggleOpenGame();
        const dataCollectionSelected = index === 1 ? first_game_data_collection :
                                       index === 2 ? second_game_data_collection :
                                       index === 3 ? third_game_data_collection :
                                       index === 4 ? fourth_game_data_collection : null;
        setSelected({ react, result , dataCollectionSelected});
    };

    if (!hasChosenInteraction) {
        return (
            <div>
                <header className="content-container__header">
    <h1>Feynman Diagrams Game</h1>
    <h2>From Quark Transformations to Hadron Decays</h2>
    <p>
        Play with the weak interaction of leptons, quarks, and the W+ boson,
        and, of course, their antiparticles! Choose from the following vertices
        and see how particles interact with each other by rotating the vertex clockwise,
        counterclockwise, or by taking the mirror image of the vertex.
    </p>
</header>

                <ul className="feynman-diagram--container">
                    <li className="feynman-diagram">
                        <FeynmanInteraction
                            react={"u"}
                            result={"d"}
                            index={1}
                            onClick={chooseInteraction}
                        />
                    </li>
                    <li className="feynman-diagram">
                        <FeynmanInteraction
                            react={["u"]}
                            result={["s"]}
                            index={2}
                            onClick={chooseInteraction}
                        />
                    </li>
                    <li className="feynman-diagram">
                        <FeynmanInteraction
                            react={["v"]}
                            result={["e", <sup>-</sup>]}
                            index={3}
                            onClick={chooseInteraction}
                        />
                    </li>
                    <li className="feynman-diagram">
                        <FeynmanInteraction
                            react={["v"]}
                            result={["μ", <sup>-</sup>]}
                            index={4}
                            onClick={chooseInteraction}
                        />
                    </li>
                </ul>
            </div>)
    } else {
        return (
            <div className="feynman-rotation-container">
                <FeynmanRotation toggleOpenGame={toggleOpenGame} initialReact={selected.react} initialResult={selected.result} dataCollection={selected.dataCollectionSelected} />
            </div>

        )
    }
}

export default FeynmanGame;