import React from 'react'
import bubblitzHomePage from '../images/bubblitz-main-page.png';
import bubblitzHowToPage from '../images/bubblitz-how-to.png';
import bubblitzPlayPage from '../images/bubblitz-play-page.png';
import LiveRepoLinks from '../components/LiveRepoLinks';
import '../pages/bubblitz.css'

const Bubblitz = ({ value }) => {
  return (
    <article className='bubblitz-article-container'>
      <div className='bubblitz-header'>Bubblitz</div>
      <div className='bubblitz-header-caption'> - A Timed Reflex & Focus Number Game -</div>
      <div className='bubblitz-description-container'>
        <hr/>
        <p><strong>Bubblitz</strong> is a fast-paced, browser-based game built with a modern front-end stack.</p>
        <p>It challenges players to maintain focus, speed, and accuracy while reacting to increasingly complex visual behaviors — all under time pressure.</p>
        <p>Designed and engineered as a <strong>scalable, animation-heavy React application</strong>, Bubblitz showcases advanced front-end architecture, state management, and performance-driven animation techniques.</p>
      {/* <hr/> */}
      </div>

      <div className='bubblitz-section-container'>
        <div className='bubblitz-section-header'>🧠 Game Overview</div>
        <hr/>
        <div className='bubblitz-section-description-container'>
          <p className='bubblitz-section-description'>At each level, players are presented with a set of dynamically generated balls, each containing a numerical value.</p>
          <div className='bubblitz-sub-header'>🎯 Objective</div>
          <p className='bubblitz-list-header'>Pop the balls in the correct order:</p>
            <ul className='bubblitz-list-container'>
              <li><em>Ascending</em> (lowest → highest), or</li>
              <li><em>Descending</em> (highest → lowest)</li>
            </ul>
          <p className='bubblitz-section-description'>The required order is randomly determined per level, forcing players to stay alert and adapt quickly.</p>
        </div>
      {/* <hr/> */}
      </div>

      <div className='bubblitz-section-container'>
        <div className='bubblitz-section-header'>⏱️ Timed Gameplay & Progression</div>
        <hr/>
        <ul className='bubblitz-list-container'>
          <li>The game <em>starts from Level 1</em> with generous time limits.</li>
          <li>As players progress, <em>time is reduced at specific milestone levels</em>, significantly increasing difficulty.</li>
          <li>Failure to clear a level before time runs out results in <em>Game Over.</em></li>
          <li>Extra lives are awarded <em>every 10 levels cleared</em>, rewarding consistency and precision.</li>
        </ul>
        <p className='bubblitz-section-description'>This time-based progression creates a strong balance between speed, accuracy, and decision-making under pressure.</p>
      {/* <hr/> */}
      </div>

      <div className='bubblitz-section-container'>
        <div className='bubblitz-section-header'>✨ Core Gameplay Features</div>
        <hr/>
        <ul className='bubblitz-list-container'>
          <li>🎲 Randomized Ball Generation</li>
          <li>🔢 Ascending / Descending Order Challenges</li>
          <li>❤️ Three-Life System with bonus life rewards</li>
          <li>⏳ Timed Levels with Dynamic Time Reduction</li>
          <li>🌗 Light & Dark Theme Modes</li>
          <li>🎯 Clear Visual Feedback for Correct & Incorrect Actions</li>
          <li>🔁 Replayable, Non-Predictable Gameplay</li>
        </ul>
      {/* <hr/> */}
      </div>

      <div className='bubblitz-section-container'>
        <div className='bubblitz-section-header'>🌀 Advanced Ball Behaviors</div>
        <hr/>
        <ul className='bubblitz-list-container'>
          <li>🏃 Movement (horizontal / vertical directions)</li>
          <li>🔄 Rotation (clockwise or counter-clockwise)</li>
          <li>👻 Value Vanishing & Reappearing</li>
          <li>📏 Dynamic Size Changes (shrink & restore)</li>
          <li>🧠 Randomized Behavior Assignment per Ball</li>
        </ul>
        <p className='bubblitz-section-description'>Each behavior is modular and level-driven, allowing the game to scale in complexity without increasing code fragility.</p>
      {/* <hr/> */}
      </div>

      <div className='bubblitz-section-container'>
        <div className='bubblitz-section-header'>⚙️ Architecture & Performance</div>
        <hr/>
        <ul className='bubblitz-list-container'>
          <li>Smooth, frame-accurate animations powered by requestAnimationFrame</li>
          <li>Centralized game state using React Context</li>
          <li>Strongly-typed game entities using TypeScript discriminated unions</li>
          <li>Custom hooks for:</li>
          <ul className='bubblitz-sub-list-container'>
            <li>Container size tracking</li>  
            <li>Timers</li>
            <li>Game quitting & cleanup</li>
          </ul>
          <li>Clean separation between:</li>
          <ul className='bubblitz-sub-list-container'>
            <li>Game logic</li>
            <li>Animation logic</li>
            <li>UI Components</li>
          </ul>
          <li>Predictable re-render behavior and animation cleanup</li>
        </ul>
        <p className='bubblitz-section-description'>The architecture is intentionally built to be <strong>extensible, testable, and maintainable.</strong></p>
      {/* <hr/> */}
      </div>

      <div className='bubblitz-section-container'>
        <div className='bubblitz-section-header'>🛠️ Tech Stack</div>
        <hr/>
        <div className='bubblitz-section-sub-header'>Core Technologies</div>
        <ul className='bubblitz-list-container'>
          <li><strong>React</strong> -- Component-based UI architecture</li>
          <li><strong>Typescript</strong> -- Type safety, scalability, and maintainability</li>
          <li><strong>Javascript (ES6+)</strong> -- Game logic & utilities</li>
          <li><strong>HTML</strong> -- Semantic structure</li>
          <li><strong>CSS3</strong> -- Animations, transitions, and theming</li>
        </ul>
        <div className='bubblitz-section-sub-header'>Advanced Techniques</div>
        <ul className='bubblitz-list-container'>
          <li><strong>React Hooks</strong> -- useState, useEffect, useRef, useContext</li>
          <li><strong>requestAnimationFrame</strong> -- High-performance motion handling</li>
          <li><strong>Dynamic inline animations</strong> combined with CSS keyframes</li>
          <li><strong>Context-driven game state management</strong></li>
        </ul>
      {/* <hr/> */}
      </div>

      <div className='bubblitz-section-container'>
        <div className='bubblitz-section-header'>🌗 Theme Support</div>
        <hr/>
        <ul className='bubblitz-list-container'>
          <li>Fully implemented <strong>Light Mode / Dark Mode</strong></li>
          <li>Theme state shared globally</li>
          <li>Visual clarity preserved across all animations and levels</li>
        </ul>
      {/* <hr/> */}
      </div>

      <div className='bubblitz-section-container'>
        <div className='bubblitz-section-header'>📸 Game Screenshots</div>
        <hr/>
        <ul className='bubblitz-list-container bubblitz-page-images-container'>
          <li><strong>Main Page</strong> - Landing screen and theme presentation</li>
          <img src={bubblitzHomePage} alt='home-page' className='page-images' />
          <li><strong>How-To-Play-Page</strong> -- Clear instructions and gameplay rules</li>
          <img src={bubblitzHowToPage} alt='how-to-page' className='page-images' />
          <li><strong>Play Page </strong> -- Live gameplay area with animations, timer, and HUD</li>
          <img src={bubblitzPlayPage} alt='play-page' className='page-images' />
        </ul>
      {/* <hr/> */}
      </div>

      <div className='bubblitz-section-container'>
        <div className='bubblitz-section-header'>🎯 Project Goals & Developer Focus</div>
        <hr/>
        <p className='bubblitz-section-description'>This project was built to:</p>
        <ul className='bubblitz-list-container'>
          <li>Demonstrate<strong>advanced front-end engineering skills</strong></li>
          <li>Explore <strong>real-time animation systems</strong> in React</li>
          <li>Apply <strong>TypeScript for complex game state modeling</strong></li>
          <li>Build a <strong>non-trivial, scalable interactive application</strong></li>
          <li>Showcase clean, production-ready front-end architecture</li>
        </ul>
      {/* <hr/> */}
      </div>

      <div className='bubblitz-section-container'>
        <div className='bubblitz-section-header'>👨‍💻 About this Game App</div>
        <hr/>
        <p className='bubblitz-section-description'>Bubblitz is developed with a strong focus on:</p>
        <ul className='bubblitz-list-container'>
          <li>Modern React patterns</li>
          <li>Type-safe application design</li>
          <li>Performance-conscious animation systems</li>
          <li>Clean, maintainable codebases</li>
          <li>User-centric interactive experiences</li>
        </ul>
        <p className='bubblitz-section-description'>This project reflects real-world front-end problem-solving beyond static UI work.</p>
      {/* <hr/> */}
      </div>

      <div className='bubblitz-section-container'>
        <div className='bubblitz-section-header'>🚀 Possible Future Enhancements</div>
        <hr/>
        <ul className='bubblitz-list-container'>
          <li>🏆 Scoring system & leaderboards</li>
          <li>Explore <strong>real-time animation systems</strong> in React</li>
          <li>📱 Mobile & touch gesture support</li>
          <li>⚙️ Difficulty presets</li>
          <li>♿ Accessibility options</li>
        </ul>
        <hr/>
      </div>
      <LiveRepoLinks value={value} />
    </article>
  )
}

export default Bubblitz