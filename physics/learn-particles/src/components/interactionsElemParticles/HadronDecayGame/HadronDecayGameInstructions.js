import React from 'react';

function HadronDecayGameInstructions({ toggleOpenGame }) {

    const HadronDecayChoice = ({ hadron, firstProduct, secondProduct, thirdProduct }) => {
        const arrowHTML = <span>&#8594;</span>;
        const hadronDecayElements = { hadron, firstProduct, secondProduct, thirdProduct };

        const proceedToHadronDecayGame = () => {
            toggleOpenGame(hadronDecayElements);
        };
        return (
            <div>
                <input type="radio" onClick={proceedToHadronDecayGame} />
                <label> {hadron} {arrowHTML} {firstProduct} {secondProduct} {thirdProduct}</label>
            </div>
        );
    }
    return (
        <div className="hadron-instructions-container">
            <div>
                <p>Select one of the decays presented to you on the right side of the screen and try to analyze it at the quark level to see how the transformation from one particle to another occurs, along with the transformation and interaction of the quarks among themselves.</p>
                <p>The decay process follows the steps below:</p>
                <ol style={{ textAlign: 'left', margin: '50px' }}>
                    <li>Select the quarks that make up the particle to be decayed</li>
                    <li>Activate one or more quarks to work with in the next steps.</li>
                    <li>From a drop-down list, select the appropriate vertex that will give you the quark transformation needed to reach the particles you desire.</li>
                    <li>Turn the vertex according to the rules that define the interactions between the particles and adjust it to the activated quark.</li>
                    <li>Repeat steps 3 and 4 as needed, until you reach the decay products.</li>
                    <li>If the decay products contain quarks, select from a drop-down list the hadron or hadrons formed by those quarks.</li>
                    <li>If you wish, you can view the entire decay process in an animated form.</li>
                </ol>
                <strong>ARE YOU READY TO START! SELECT DECAY!</strong>
            </div>
            <div className="hadron-instructions__decay-list">
                <HadronDecayChoice
                    hadron={["n"]}
                    firstProduct="p"
                    secondProduct={["e", <sup>-</sup>]}
                    thirdProduct={[<span style={{ 'textDecoration': 'overline' }}>v</span>, <sub>e</sub>]}
                    key={1}
                />
                <HadronDecayChoice
                    hadron={["Λ"]}
                    firstProduct="p"
                    secondProduct={["π", <sup>-</sup>]}
                    key={2}
                />
                <HadronDecayChoice
                    hadron={["Σ", <sup>-</sup>]}
                    firstProduct="n"
                    secondProduct={["π", <sup>-</sup>]}
                    key={3}
                />
                <HadronDecayChoice
                    hadron={["Ω", <sup>-</sup>]}
                    firstProduct="Λ"
                    secondProduct={["Κ", <sup>-</sup>]}
                    key={4}
                />
                <HadronDecayChoice
                    hadron={["Κ", <sup>+</sup>]}
                    firstProduct={["μ", <sup>+</sup>]}
                    secondProduct={["ν", <sub>μ</sub>]}
                    key={5}
                />
                <HadronDecayChoice
                    hadron={["π", <sup>+</sup>]}
                    firstProduct={["μ", <sup>+</sup>]}
                    secondProduct={["ν", <sub>μ</sub>]}
                    key={6}
                />
            </div>
        </div>
    );
}

export default HadronDecayGameInstructions;
