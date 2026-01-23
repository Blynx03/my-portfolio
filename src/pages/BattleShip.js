import React from 'react';
import battleshipMainPage from '../images/battleship-mainpage.png';
import battleshipHowToPage from '../images/battleship-howto.png';
import battleshipSetupPage from '../images/battleship-setup.png';
import battleshipBoardGamePage from '../images/battleship-board.png';
import LiveRepoLinks from '../components/LiveRepoLinks';
import '../pages/battleship.css';

// type BattleshipProps = {
//   value: any;
// };

const Battleship = ({ value }) => {
  return (
    <article className='battleship-article-container'>
      <div className='battleship-header'>Battleship</div>
      <div className='battleship-header-caption'>
        - A Turn-Based Naval Strategy Game -
      </div>

      <div className='battleship-description-container'>
        <hr />
        <p>
          <strong>Battleship</strong> is a browser-based strategy game built with a
          modern front-end stack.
        </p>
        <p>
          It challenges players to apply logic, memory, and deduction to locate
          and destroy enemy ships on a hidden grid.
        </p>
        <p>
          Designed as a <strong>state-driven React application</strong>, this
          project highlights structured game logic and predictable UI behavior.
        </p>
      </div>

      <div className='battleship-section-container'>
        <div className='battleship-section-header'>🧠 Game Overview</div>
        <hr />
        <p className='battleship-section-description'>
          Battleship is played on grid-based boards where players attempt to
          uncover and sink all enemy ships.
        </p>
      </div>

      <div className='battleship-section-container'>
        <div className='battleship-section-header'>🎯 Objective</div>
        <hr />
        <ul className='battleship-list-container'>
          <li>Destroy all enemy ships</li>
          <li>Each ship occupies multiple grid cells</li>
          <li>A ship is sunk only when all segments are hit</li>
        </ul>
      </div>

      <div className='battleship-section-container'>
        <div className='battleship-section-header'>🚢 Game Setup</div>
        <hr />
        <ul className='battleship-list-container'>
          <li>Players place ships on their personal grid</li>
          <li>No overlapping ships allowed</li>
          <li>Ships must stay within board boundaries</li>
          <li>Setup phase ends once all ships are placed</li>
        </ul>
      </div>

      <div className='battleship-section-container'>
        <div className='battleship-section-header'>🔄 Turn-Based Gameplay</div>
        <hr />
        <ul className='battleship-list-container'>
          <li>One shot per turn</li>
          <li>Players select grid coordinates to fire</li>
          <li>Turns switch automatically after each shot</li>
          <li>Clear hit, miss, and sunk feedback</li>
        </ul>
      </div>

      <div className='battleship-section-container'>
        <div className='battleship-section-header'>⚙️ Architecture</div>
        <hr />
        <ul className='battleship-list-container'>
          <li>Typed game entities using TypeScript</li>
          <li>Centralized state via React hooks</li>
          <li>Clean separation of logic and UI</li>
          <li>Predictable render flow</li>
        </ul>
      </div>

      <div className='battleship-section-container'>
        <div className='battleship-section-header'>🛠️ Tech Stack</div>
        <hr />
        <ul className='battleship-list-container'>
          <li><strong>React</strong> — Component-based UI</li>
          <li><strong>TypeScript</strong> — Type-safe game logic</li>
          <li><strong>JavaScript</strong> — Utilities & helpers</li>
          <li><strong>HTML5 / CSS3</strong> — Layout & styling</li>
        </ul>
      </div>

      <div className='battleship-section-container'>
        <div className='battleship-section-header'>📸 Game Screenshots</div>
        <hr />
        <ul className='battleship-list-container battleship-page-images-container'>
          <li><strong>Main Page</strong> — Game entry and introduction</li>
          <img src={battleshipMainPage} alt='main-page' className='page-images' />

          <li><strong>How-To Page</strong> — Rules and gameplay explanation</li>
          <img src={battleshipHowToPage} alt='how-to-page' className='page-images' />

          <li><strong>Setup Page</strong> — Ship placement phase</li>
          <img src={battleshipSetupPage} alt='setup-page' className='page-images' />

          <li><strong>Board Game Page</strong> — Active turn-based combat</li>
          <img
            src={battleshipBoardGamePage}
            alt='board-game-page'
            className='page-images'
          />
        </ul>
      </div>

      <LiveRepoLinks value={value} />
    </article>
  );
};

export default Battleship;
