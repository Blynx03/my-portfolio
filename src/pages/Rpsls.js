import React from 'react'
import rpslsTitle from '../images/rpsls-title.png'
import rpslsMainPage from '../images/rpsls-mainPage.png'
import rpslsSelection from '../images/rpsls-selection.png'
import rpslsPlay from '../images/rpsls-play.png'
import rpslsComputer from '../images/rpsls-computer.png'
import rpslsResult from '../images/rpsls-result.png'
import LiveRepoLinks from '../components/LiveRepoLinks'
import '../pages/rpsls.css'

const Rpsls = ({ value }) => {
  return (
    <article className='rpsls-article-container'>

      <div className='rpsls-header'>Rock Paper Scissors Lizard Spock</div>
      <div className='rpsls-header-caption'>
        - A Classic Game with a Strategic Twist -
      </div>

      <div className='rpsls-description-container'>
        <hr/>
        <p>
          <strong>Rock Paper Scissors Lizard Spock</strong> is a simple, single-page
          browser game built with React.
        </p>
        <img src={rpslsTitle} className='rpsls-title-image' alt='rock-paper-scissors-lizard-spock title' />
        <p>
          It expands the traditional Rock Paper Scissors ruleset by introducing
          two additional choices — <em>Lizard</em> and <em>Spock</em>.
        </p>

        <img
          src={rpslsMainPage}
          className='rpsls-title-image'
          alt='rpsls title'
        />

        <p>
          The game emphasizes clean logic, fast interactions, and clear visual
          feedback.
        </p>
      </div>

      <div className='rpsls-section-container'>
        <div className='rpsls-section-header'>🎮 How It Works</div>
        <hr/>
        <ul className='rpsls-list-container'>
          <li>Select one of the five available moves</li>
          <li>Click the play button</li>
          <li>The computer randomly selects its move</li>
          <li>The result is calculated instantly</li>
        </ul>
      </div>

      <div className='rpsls-section-container'>
        <div className='rpsls-section-header'>🎯 Player Selection</div>
        <hr/>
        <img
          src={rpslsSelection}
          alt='player selection'
          className='rpsls-page-images'
        />
        <p className='rpsls-section-description'>
          Players choose their move from the five available options before
          starting the round.
        </p>
      </div>

      <div className='rpsls-section-container'>
        <div className='rpsls-section-header'>▶️ Play Action</div>
        <hr/>
        <img
          src={rpslsPlay}
          alt='play button'
          className='rpsls-page-images'
        />
        <p className='rpsls-section-description'>
          Clicking play triggers the computer’s move and the game logic.
        </p>
      </div>

      <div className='rpsls-section-container'>
        <div className='rpsls-section-header'>🤖 Computer Move</div>
        <hr/>
        <img
          src={rpslsComputer}
          alt='computer move'
          className='rpsls-page-images'
        />
        <p className='rpsls-section-description'>
          The computer randomly selects a move each round.
        </p>
      </div>

      <div className='rpsls-section-container'>
        <div className='rpsls-section-header'>🏆 Result</div>
        <hr/>
        <img
          src={rpslsResult}
          alt='game result'
          className='rpsls-page-images'
        />
        <p className='rpsls-section-description'>
          The result is clearly displayed as a win, loss, or draw.
        </p>
      </div>

      <div className='rpsls-section-container'>
        <div className='rpsls-section-header'>🛠️ Technologies Used</div>
        <hr/>
        <ul className='rpsls-list-container'>
          <li><strong>React</strong> — UI and state management</li>
          <li><strong>JavaScript (ES6+)</strong> — Game logic</li>
          <li><strong>HTML5</strong> — Structure</li>
          <li><strong>CSS3</strong> — Styling and layout</li>
        </ul>
      </div>

      <div className='rpsls-section-container'>
        <div className='rpsls-section-header'>🚀 Future Enhancements</div>
        <hr/>
        <ul className='rpsls-list-container'>
          <li>Score tracking</li>
          <li>Animations and transitions</li>
          <li>Sound effects</li>
          <li>Mobile gesture support</li>
        </ul>
        <hr/>
      </div>

      <LiveRepoLinks value={value} />

    </article>
  )
}

export default Rpsls
