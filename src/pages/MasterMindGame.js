import React from "react";
import LiveRepoLinks from "../components/LiveRepoLinks";
import "./mastermindGame.css";
import mainPage from "../images/mm-mainpage.png"
import howToPage from "../images/mm-how-to.png"
import gamePage from "../images/mm-game.png"
import unlockPage from "../images/mm-unlock-level.png"

const MasterMindGame = ({ value }) => {
  return (
    <article className="mm-article-container">
      <div className="mm-header">MasterMind Game</div>
      <div className="mm-header-caption">- Order-based puzzle game testing logic and memory -</div>
      <hr/>
      <p>Welcome to the Mastermind Game! This program offers a fun and challenging experience as you attempt to crack the secret code. The game consists of different levels, each with its own set of rules and challenges.</p>
      <p>
        This interactive command-line program promises a delightful and intellectually stimulating experience as you embark on the journey to decipher the enigmatic code. The game is built using HTML, CSS, Vanilla JavaScript, and select libraries. Moreover, the game boasts a responsive design that seamlessly adapts to both portrait and landscape mobile orientations for a versatile gaming experience.
      </p>
      <div className="mm-section-container">
        <div className="mm-section-header">Table of Contents</div>
        <hr/>
        <ol className="mm-list-container">
          <li>Main Page</li>
          <img src={mainPage} className="mm-page-images" alt="main-page" />
          <p>The main page of the Mastermind Game provides you with links on how to play the game and start the game.</p>
          <li>How To Play</li>
          <img src={howToPage} className="mm-page-images" alt="how-to-page" />
          <div className="how-to-instruction-container">
            <p className="how-to-instruction">To play Mastermind, follow these basic instructions:</p>
            <ol className="how-to-instruction-list-container">
              <li className="how-to-instruction-list"><em>Guess the secret code: </em><span>The computer generates a secret code consisting of a sequence of colors.</span></li>
              <li className="how-to-instruction-list"><em>Make your guesses: </em><span>You have a limited number of attempts to guess the correct combination of colors.</span></li>
              <li className="how-to-instruction-list"><em>Receive feedback: </em><span>After each guess, you will receive feedback in the form of pegs.  These pegs indicate the correctness of your guess.</span></li>
              <ul className="sub-list-container">
                <li>In Level 1, the feedback pegs are in order, meaning they correspond to the positions of the correct colors in your guess.</li>
                <li>In Level 3, the feedback pegs are no longer in order, making the game more challenging.</li>
              </ul>
              <li className="how-to-instruction-list"><em>Keep an eye on the timer: </em><span>In levels 6, 7, and 8, a timer is introduced to add an extra element of difficulty. You must solve the code within the given time limit.</span></li>
              <li className="how-to-instruction-list"><em>Level-specific rules:</em></li>
              <ul className="sub-list-container">
                <li><em>Level 1:</em><span>Guess the 4-color code with 6 color choices and 10 attempts.</span></li>
                <li><em>Level 2:</em><span>Same as Level 1 but with 3 additional colors and 8 attempts.</span></li>
                <li><em>Level 3:</em><span>Same as Level 1 but with feedback pegs not in order.</span></li>
                <li><em>Level 4:</em><span>Same as Level 3 but with 8 attempts.</span></li>
                <li><em>Level 5:</em><span>Same as Level 4 but with 9 color choices.</span></li>
                <li><em>Level 6:</em><span>Same as Level 5 but with a 3-minute timer.</span></li>
                <li><em>Level 7:</em><span>Same as Level 6 but with a 2-minute timer.</span></li>
                <li><em>Level 8:</em><span>The most challenging level with a 1-minute timer.</span></li>
              </ul>
              <img src={gamePage} className="mm-page-images" alt="unlock-page" />
            </ol>
          </div>
          <li>Game Levels</li>
          <img src={unlockPage} className="mm-page-images" alt="game-page" />
          <p>Each level offers a unique challenge, and as you progress to higher levels, the game becomes more demanding.</p>
          <p>Remember that in some levels, the computer-generated code can include multiple instances of the same color or colors, making it even trickier to crack the code.</p>
          <p>Have fun and test your code-breaking skills in the Mastermind Game! Don't forget to turn on your speakers! Good luck!</p>
        </ol>
      </div>
      <LiveRepoLinks value={value} />
    </article>
    
  )
};

export default MasterMindGame;
