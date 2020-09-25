import React from 'react';
import './App.css';

const App = () => {
  const [message, setMessage] = React.useState("");
  const [playerscore, setPlayerScore] = React.useState(0);
  const [compscore, setCompScore] = React.useState(0);
  const [rounds, setRounds] = React.useState(0);
  const [matchResult, setMatchResult] = React.useState('');
  const [tieRounds, setTieRounds] = React.useState(0);
  
  const compChoose = () => {
    const choiceArray = ['rock', 'paper', 'scissors'];
      let randomComp = choiceArray[Math.floor(Math.random()*3)];
      console.log("compchoice: ", randomComp)
      return randomComp;
    }
  
  const handleClick = event => {
    const playerChoice = event.target.value
    console.log("playerChoice: " + playerChoice);

    compareChoices(compChoose(), playerChoice);
    // get computer choice 

    // pass comp choice and player choice to compare function
  };
  
  const PlayerInput = () => {
    return (
      <div style={{textAlign: "center"}}>
        <button onClick={handleClick} value="rock">Rock</button>
        <button onClick={handleClick} value="paper">Paper</button>
        <button onClick={handleClick} value="scissors" >Scissors</button>
      </div>
    );
  };

  const compareChoices = (randomComp, playerChoice) => {
    // Determine the winner
    // Set the message
    if (playerChoice === randomComp) {
      setMessage("You both chose: " + playerChoice)
      setRounds(rounds+1);
      setTieRounds(tieRounds+1);
    } else if (playerChoice === 'rock' && randomComp === 'scissors') {
      setMessage("You chose rock, and the computer chose scissors. You win!")
      setPlayerScore(playerscore+1);
      setRounds(rounds+1);
    } else if (playerChoice === 'rock' && randomComp === 'paper') {
      setMessage("You chose rock, and the computer chose paper. You lose.")
      setCompScore(compscore+1);
      setRounds(rounds+1);
    } else if (playerChoice === 'paper' && randomComp === 'scissors') {
      setMessage("You chose paper, and the computer chose scissors. You lose.")
      setCompScore(compscore+1);
      setRounds(rounds+1);
    } else if (playerChoice === 'paper' && randomComp === 'rock') {
      setMessage("You chose paper, and the computer chose rock. You win!")
      setPlayerScore(playerscore+1);
      setRounds(rounds+1);
    } else if (playerChoice === 'scissors' && randomComp === 'paper') {
      setMessage("You chose scissors, and the computer chose paper. You win!")
      setPlayerScore(playerscore+1);
      setRounds(rounds+1);
    } else if (playerChoice === 'scissors' && randomComp === 'rock') {
      setMessage("You chose scissors, and the computer chose rock. You lose.")
      setCompScore(compscore+1);
      setRounds(rounds+1);
    } else {
      setMessage("compareChoices: something wrong")
    }

    //-we know who won (we can add message and add to score and add to rounds)
  }

  const ResetButton = () => {
    const resetFunction = () => {
      setPlayerScore(0);
      setCompScore(0);
      setRounds(0);
      setMessage('');
      setMatchResult('');
      setTieRounds(0);
    }

    if (playerscore >= 3 || compscore >= 3) {
      displayMatchResult();
      return (
        <div style={{textAlign: "center"}}>
          <button onClick={resetFunction}>Reset Game</button>
        </div>
      )
  
    };
    return null;
  }

  const displayMatchResult = () => {
    if (playerscore > 2) {
      setMatchResult("You win the match! Nice!")
    } else if (compscore > 2) {
      (setMatchResult("You lost the match. Womp womp."))
    } else {
      return null;
    }
  };

  return (
    document.body.style = 'background: lightblue;',
    <div style={{textAlign: "center"}}>
      <h1 style={{color:'darkorchid', textAlign:'center'}}>Rock Paper Scissors</h1>
      <h2 style={{color:'dodgerblue', textAlign:'center'}}>Best of 5, first to 3 wins!</h2>
      <div>
        <PlayerInput />
        <br></br>
        <ResetButton />
        <br></br>
        {message}
      </div>

      <br></br>
      <br></br>

      <div style={{textAlign:'center'}}>
        Round number: {rounds}
        <br></br>
        Tied Rounds: {tieRounds}
        <br></br>
        <br></br>
        Your score: {playerscore}
        <br></br>
        Computer score: {compscore}
        <br></br>
        <h1 style={{color:'deeppink'}}>{matchResult}</h1>
      </div>
    </div>
  )  
};

export default App;
