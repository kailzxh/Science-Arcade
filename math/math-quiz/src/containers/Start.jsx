import React from 'react';
import Button from '../components/Button';
import Input from '../components/Input';
import { Session } from '../utils/storage'

class Start extends React.Component {

    state = {
        player: "player"
    }

    setNameOfPlayer = (event) => {
        this.setState({ player: event.target.value })
    }

    clicked = () => {
        Session.set("onlinePlayer", this.state.player)
        this.props.startPressed();
    }

    render (){
        return (
            <div>
                <div className="App-brandname">
                    <i className="fas "></i> 
                    <br/>    
                    <h3>How to play?</h3>   
                    <p>Solve math problems with two random numbers and a random operator (+, -, ×, ÷).</p>
                    <p>You have 20 seconds to enter the correct answer.</p>
                    <p>Gain 1 extra life for every 3 correct answers in a row (a "hatrix").</p>
                    <p>Lose 1 life for each wrong answer.</p>
                    <p>Earn 100 stars for each correct answer.</p>
                    <p>The game ends when you run out of lives.</p>  
                    
                </div>
                {/* <Input text="Insert your name" onInputChange={this.setNameOfPlayer} /> */}
                
                <Button isClicked={this.clicked}>Start</Button>
            </div>
        )
    }
}
export default Start;