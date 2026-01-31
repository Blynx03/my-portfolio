import './dartmaster.css'
import dmTitle from '../images/dm-title.png';
import dmMain from '../images/dm-main.png';
import dmStructure from '../images/dm-structure.png';
import dmBoardRules from '../images/dm-boardrules.png';
import dmHowTo from '../images/dm-howTo.png';
import dmPlayers from '../images/dm-players.png';
import dmScoreboard from '../images/dm-scoreboard.png';
import dmWinner from '../images/dm-winner.png';
import LiveRepoLinks from "../components/LiveRepoLinks";


const DartMaster = ({ value }) => {
  return (
    <article className="dm-article-container">
      <div className="dm-header">DartMaster Scoreboard</div>
      <div className="dm-header-caption">– A Modern Scoreboard App for Tactics/Cricket Dart Games –</div>
      <hr/>
      <p className="dm-section-description">
        DartMaster Scoreboard is a fully interactive, responsive, and intuitive scoreboard application built specifically for the <strong>Tactics/Cricket dart game variant.</strong>
      </p>
      <img src={dmTitle} className='dm-title-image' alt='dart-master title' />
      <p className='dm-section-description'>This project demonstrates clean front-end engineering practices using <strong>React, TypeScript, Context API, React Router,</strong> structured component logic, and responsive UI/UX design.
        It will also be deployed on <strong>GitHub Pages</strong> so players can try it online.</p>
      
      <section className="dm-section-container">
        <div className="dm-section-header">🚀 Features </div>
        <hr/>
        <div className="dm-section-sub-header">🏠 Main Menu</div>
        <p className="dm-sub-section-description">A clean landing interface featuring:</p>
        <ul className="dm-section-list-container">
          <li className="dm-section-list">Play Game</li>
          
          <li className="dm-section-list">How to Play</li>
          <li className="dm-section-list">The Dartboard (Guide)</li>
        </ul>
        <p className='dm-sub-section-description'>Structured with smooth navigation powered by <strong>react-router-dom.</strong></p>
      </section>

      <section className="dm-section-container">
        <div className="dm-section-header">Add Players & Game Settings</div>
        <hr/>
        <p className="dm-section-description">On the <strong>Start Game</strong>setup page you can:</p>
        <ul className="dm-section-list-container">
          <li className="dm-section-list">Choose <strong>1-4 players </strong></li>
          <li className="dm-section-list">Select the scoring range:
            <ul className='dm-sub-section-list-container'>
              <li className="dm-sub-section-list">15 → Bull</li>
              <li className="dm-sub-section-list">12 → Bull</li>
              <li className="dm-sub-section-list">Custom range (1 → Bull)</li>
            </ul>
          </li>
        </ul>
        <p className='dm-section-description'>Additional behaviors:</p>
        <ul className='dm-section-list-container'>
          <li className="dm-section-list">The <strong>Start Game</strong> button appears only when all fields are valid</li>
          <li className="dm-section-list">A <strong>Main Page</strong> button lets players return anytime</li>
        </ul>
      </section>

      <section className="dm-section-container">
        <div className="dm-section-header">🎮 Scoreboard Gameplay</div>
        <hr/>
        <p className="dm-section-description">once the game begins:</p>
        <ul className="dm-section-list-container">
          <li className="dm-section-list">Targets from <strong>20 → Bull</strong> display on the left (descending)</li>
          <li className="dm-section-list">Players appear in columns on the right</li>
          <li className="dm-section-list">Every scoring cell is clickable</li>
        </ul>
        <div className='dm-sub-section-header'>📌 Score Selection Window</div>
        <p className='dm-sub-section-description'>Clicking a score field opens a modal offering:</p>
        <ul className='dm-section-list-container'>
          <li className="dm-section-list"><code>|</code> = 1 point</li>
          <li className="dm-section-list"><code>||</code> = 2 points</li>
          <li className="dm-section-list"><code>|||</code> = 3 points</li>
          <li className="dm-section-list">Cancel</li>
        </ul>
        <p className='dm-sub-section-description'>The scoreboard updates instantly using:</p>
        <ul className='dm-section-list-container'>
          <li className="dm-section-list">Context API shared state</li>
          <li className="dm-section-list">Immutable state updates</li>
          <li className="dm-section-list"><code>Record&lt;number, number&gt;</code> and <code>Record&lt;number, string&gt;</code> for dynamic scoring</li>
        </ul>
      </section>

      <section className="dm-section-container">
        <div className="dm-section-header">🏆 Automatic Winner Detection</div>
        <hr/>
        <p className="dm-section-description">A player wins when every target in their column reaches <strong>3 (|||).</strong></p>
        <p className="dm-section-description">Winner detection logic:</p>
        <div className='dm-section-item'><code>Object.values(player.numberScores!).every(val =&gt; val === 3)</code></div>
        <p className='dm-section-description'>When a player wins, a modal offers:</p>
        <ol className='dm-section-list-container'>
          <li className="dm-section-list">Play Another Round
            <ul className="dm-sub-section-list-container">
              <li className="dm-sub-section-list">Resets only the scoreboard</li>
              <li className="dm-sub-section-list">Keeps:</li>
              <ul className='dm-sub-sub-section-list-container'>
                <li className="dm-sub-sub-section-list">The same players</li>
                <li className="dm-sub-sub-section-list">The same game range</li>
                <li className="dm-sub-sub-section-list">Storing player wins</li>
              </ul>
            </ul>
          </li>
          <li className="dm-section-list">Play With New Players</li>
          <p className='dm-section-description'>Resets:</p>
          <ul className="dm-sub-section-list-container">
            <li className="dm-sub-section-list">Player names</li>
            <li className="dm-sub-section-list">All scoring objects</li>
            <li className="dm-sub-section-list">Game configurations</li>
          </ul>
          <p className='dm-section-description'>Starts a <strong>fresh match.</strong></p>
          <li className="dm-section-list">Quit
            <ul className="dm-sub-section-list-container">
              <li className="dm-sub-section-list">Resets all data</li>
              <li className="dm-sub-section-list">Returns to <strong>Main Menu</strong></li>
            </ul>
          </li>
        </ol>
      </section>

      <section className="dm-section-container">
        <div className="dm-section-header">⭐ Upcoming Feature: Player Point Accumulation</div>
        <hr/>
        <p className="dm-section-description">A future enhancement will include:</p>
        <ul className='dm-section-list-container'>
          <li className="dm-section-list">Persistent point tracking</li>
          <li className="dm-section-list">+1 point for each win</li>
          <li className="dm-section-list">Light competitive tournament mode</li>
        </ul>
      </section>

      <section className="dm-section-container">
        <div className="dm-section-header">🧠 Technical Highlights</div>
        <hr/>
        <ul className="dm-section-list-container">
          <li className="dm-section-list">⚛️ React
            <ul className="dm-sub-section-list-container">
              <li className="dm-sub-section-list">Functional components</li>
              <li className="dm-sub-section-list">Hooks: <code>useState</code>, <code>useContext</code>,<code>useEffect</code></li>
              <li className="dm-sub-section-list">Context API for global state</li>
              <li className="dm-sub-section-list">Clean UI and logic separation</li>
            </ul>
          </li>
          <li className="dm-section-list">🟦 TypeScript
            <p className="dm-section-description">Strong typing for:</p>
            <ul className="dm-sub-section-list-container">
              <li className="dm-sub-section-list"><code>PlayersType</code></li>
              <li className="dm-sub-section-list">Context structure</li>
              <li className="dm-sub-section-list">Components props</li>
              <li className="dm-sub-section-list">Scoring objects (<code>Record&lt;number, number&gt;</code>)</li>
              <p className="dm-sub-section-list-description">Prevents undefined values and runtime bugs.</p>
            </ul>
          </li>
          <li className="dm-section-list">🧭 react-router-dom
            <p className="dm-section-description">Routes:</p>
            <ul className="dm-sub-section-list-container">
              <li className="dm-sub-section-list"><code>/</code> - Main Menu</li>
              <li className="dm-sub-section-list"><code>/players</code> - Player setup</li>
              <li className="dm-sub-section-list"><code>/how-to-play</code> - Instructions</li>
              <li className="dm-sub-section-list"><code>/the-board</code> - Dartboard reference</li>
              <li className="dm-sub-section-list"><code>/start-game</code> - Score board</li>
            </ul>
          </li>
          <li className="dm-section-list">💅 CSS
            <ul className="dm-sub-section-list-container">
              <li className="dm-sub-section-list">Custom styling</li>
              <li className="dm-sub-section-list">Game-inspired layout</li>
            </ul>
          </li>
          <li className="dm-section-list">📐 Logic & Architecture
            <p className="dm-section-description">Includes advanced logic patterns:</p>
            <ul className="dm-sub-section-list-container">
              <li className="dm-sub-section-list">Dynamic rendering with <code>.map</code> and <code>Array.from</code></li>
              <li className="dm-sub-section-list">Safe nested object updates using spread operators</li>
              <li className="dm-sub-section-list">Winner detection with <code>every()</code></li>
              <li className="dm-sub-section-list">Key-indexed player scoring</li>
            </ul>
          </li>
          <li className="dm-section-list">📂 Project Structure
            <p className="dm-section-description"></p>
            <img src={dmStructure} className='dm-page-images' alt='file structure' />
          </li>
        </ul>

        <ul className='dm-section-list-container'>
          <li className="dm-section-list">Persistent point tracking</li>
          <li className="dm-section-list">+1 point for each win</li>
          <li className="dm-section-list">Light competitive tournament mode</li>
        </ul>
      </section>

      <section className="dm-section-container">
        <div className="dm-section-header">📸 Screenshots</div>
        <hr/>
        <ul className='dm-section-list-container'>
          <li className="dm-section-list">🏠 Main Menu</li>
          <img src={dmMain} className='dm-page-images' alt='home page' />   
          <li className="dm-section-list">📄 How To Play</li>
          <img src={dmHowTo} className='dm-page-images' alt='how to play instruction' />
          <li className="dm-section-list">🎯 The Dart Board</li>
          <img src={dmBoardRules} className='dm-page-images' alt='board reference' />
          <li className="dm-section-list">👥 Add Players</li>
          <img src={dmPlayers} className='dm-page-images' alt='adding players' />
          <li className="dm-section-list">🎯 Scoreboard</li>
          <img src={dmScoreboard} className='dm-page-images' alt='score board' />
          <li className="dm-section-list">🏆 Winner Popup</li>
          <img src={dmWinner} className='dm-page-images' alt='winner page' />
        </ul>
      </section>

      <section className='dm-section-container'>
        <div className='dm-section-header'>🏁 Running the Project</div>
        <hr/>
        <p className='dm-section-description'>Install dependencies:</p>
        <div className='dm-section-description-illustration'><code>npm install</code></div>
        <p className='dm-section-description'>Run locally:</p>
        <div className='dm-section-description-illustration'><code>npm run dev</code></div>        
        <p className='dm-section-description'>Build for production:</p>
        <div className='dm-section-description-illustration'><code>npm run build</code></div>
      </section>

      <section className='dm-section-container'>
        <div className='dm-section-header'>🌐 Live Demo</div>
        <hr/>
        <p className='dm-section-description'><a href='https://blynx03.github.io/dart-master-scoreboard/'>Dart Master Scoreboard</a></p>
      </section>  
      
      <section className='dm-section-container'>
        <div className='dm-section-header'>🤝 Contributing</div>
        <hr/>
        <p className='dm-section-description'>PRs and suggestions welcome!</p>
        <p className='dm-section-description'>You may contribute improvements to:</p>
        <ul className='dm-section-list-container'>
          <li className="dm-section-list">Framer Motion animations</li>
          <li className="dm-section-list">UI design</li>
          <li className="dm-section-list">Performance</li>
          <li className="dm-section-list">Game logic refinements</li>
        </ul>
      </section>  
      
      <section className='dm-section-container'>
        <div className='dm-section-header'>📄 License</div>
        <p className='dm-section-description'>This project is open source under the <a className='dm-license' href='https://github.com/Blynx03/dart-master-scoreboard/blob/main/LICENSE'>MIT License</a></p>
      </section>

      <LiveRepoLinks value={value} />
    </article>
  );
};

export default DartMaster;
