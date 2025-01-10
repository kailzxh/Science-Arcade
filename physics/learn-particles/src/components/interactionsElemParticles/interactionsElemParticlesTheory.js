import React from 'react';

function InteractionsElemParticleTheory() {
    return (
        <div className="content-container">
            <header className="content-container__header">
                <h1>Read about the interactions of elementary particles</h1>
            </header>
            <main className="main-menu">
                <div className="two_paragraphs_text">
                    <p className="two_paragraphs_text--first">The table of Elementary Particles contains the building blocks from which all the matter of the Universe is made. However, it does not tell us how they interact with each other to form this Universe. It's like having the letters of the alphabet but not the words and rules that create meaningful sentences. 
                    Surely, in our daily life, we perceive a relatively large number of different forces: electrical, gravitational, magnetic, friction, etc. However, we believe that all this multitude of different interactions that we encounter in matter can be classified into four fundamental interactions, which are shown in the table below:
                    </p>

                    <table>
                        <tr>
                            <th className="table_cell">Type of Interaction</th>
                            <th className="table_cell">Relative Strength</th>
                            <th className="table_cell">Interaction Mediator</th>
                            <th className="table_cell">Presence</th>
                        </tr>
                        <tr className="table_row">
                            <td className="table_cell">Strong Nuclear Interaction</td>
                            <td className="table_cell">~1</td>
                            <td className="table_cell">8 Gluons <br /> (massless)</td>
                            <td className="table_cell">Atomic Nuclei</td>
                        </tr>
                        <tr>
                            <td className="table_cell">Electromagnetic Interaction</td>
                            <td className="table_cell">~10<sup>-3</sup></td>
                            <td className="table_cell">Photon <br /> (massless)</td>
                            <td className="table_cell">Atomic Electron Shells</td>
                        </tr >
                        <tr>
                            <td className="table_cell">Weak Nuclear Interaction</td>
                            <td className="table_cell">~10<sup>-5</sup></td>
                            <td className="table_cell">Bosons <br /> Z, W<sup>+</sup>, W<sup>-</sup></td>
                            <td className="table_cell">Beta Decay</td>
                        </tr>
                        <tr>
                            <td className="table_cell">Gravitational Interaction</td>
                            <td className="table_cell">~10<sup>-38</sup></td>
                            <td className="table_cell">Graviton (?);</td>
                            <td className="table_cell">Celestial Bodies</td>
                        </tr>
                    </table>
                    <p className="two_paragraphs_text--second">
                        The electromagnetic force and gravity were known (at least in some form) since ancient times and we perceive them in our daily life. The strong and weak nuclear forces, although we don't "feel" them directly, also play a very significant role in our existence. Let's now look at each of the four interactions individually.
                    </p>

                    <h2>GRAVITATIONAL INTERACTION</h2>
                    <p className="two_paragraphs_text--second">This interaction is responsible for the formation of galaxies, the orbit of the Earth and other planets around the Sun. The reason we return to the ground when we jump is due to gravity. It is the force exerted between all objects and is always attractive.</p>

                    <h2>ELECTROMAGNETIC INTERACTION</h2>
                    <p className="two_paragraphs_text--second">It is responsible for the "shock" we feel when, walking on a carpet, we touch a metal object. It is responsible for the functioning of all electric machines. But it is also responsible for the formation of atoms: electrons revolve around the nucleus of the atom held by the electromagnetic interaction. It is exerted between all bodies with an electric charge. There are two types of charges: positive and negative. Like charges (positive-positive or negative-negative) repel each other, while opposite charges (positive-negative) attract.</p>

                    <h2>WEAK NUCLEAR INTERACTION</h2>
                    <p className="two_paragraphs_text--second">It is the second interaction that is not directly perceptible. However, its importance is great. As an example, one of the basic nuclear reactions happening in the Sun that makes it shine is due to this interaction. Particles that feel the weak interaction but not the strong one are called leptons.</p>

                    <h2>THE STRENGTH OF INTERACTIONS</h2>
                    <p className="two_paragraphs_text--second">Now, let's arrange the four interactions in order of their strength. Let's take the strongest of them, the Strong Nuclear Interaction (which we arbitrarily assign strength 1 in the second column of the Interaction Table) and compare the others to it. The Electromagnetic is about 100 (actually 137) times weaker, while the weak nuclear force is 100,000 times weaker than the strong one. As for the Gravitational Interaction, its strength is tragically small. That is exactly why the gravitational interaction doesn't play any role in experiments involving elementary particles. It is literally "covered" by the other interactions. As a result, we cannot get data about the gravitational interaction from these experiments. Only in experiments involving huge masses of stars (or galaxies) can we observe the effects of this interaction.</p>
                </div>
            </main>
        </div>
    )
}

export default InteractionsElemParticleTheory;
