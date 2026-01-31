import React from 'react';
import nickelTitle from '../images/nickel-title.png';
import nickelMain from '../images/nickel-main.png';
import nickelLogin from '../images/nickel-login.png';
import nickelSignup from '../images/nickel-signup.png';
import nickelLog from '../images/nickel-log.png';
import nickelSearch from '../images/nickel-search.png';
import nickelByPoints from '../images/nickel-bypoints.png';
import LiveRepoLinks from '../components/LiveRepoLinks';
import '../pages/nickel.css';

const Nickel = ({ value }) => {
  return (
    <article className='nickel-article-container'>
      
      <div className='nickel-header'>15 Nickel Point</div>
      <div className='nickel-header-caption'>
        – A Nickel Allergy Management & Dietary Awareness App –
      </div>

      <div className='nickel-description-container'>
        <hr/>
        <p>
          <strong>15 Nickel Point</strong> is a practical, user-focused web application designed to help individuals
          with <strong>nickel allergies</strong> manage their daily dietary intake with clarity and confidence.
        </p>
        <p>
          The app converts nickel content in foods into a simplified scoring system — <em>Nickel Points</em> — allowing
          users to log meals, monitor intake, and stay within a recommended daily limit.
        </p>

        <img
          src={nickelTitle}
          className='nickel-title-image'
          alt='15 nickel point title'
        />

        <p>
          Built as a <strong>modern React application</strong>, this project emphasizes clean UI design,
          intuitive data flow, and real-world problem solving for health-conscious users.
        </p>
      </div>

      {/* -------------------------------------------------- */}
      <div className='nickel-section-container'>
        <div className='nickel-section-header'>🧠 Why Nickel Awareness Matters</div>
        <hr/>
        <p className='nickel-section-description'>
          Nickel is one of the most common contact allergens worldwide. While often associated with jewelry
          and metals, nickel is also present in many everyday foods.
        </p>
        <img
          src={nickelMain}
          className='nickel-title-image'
          alt='15 nickel point main page'
        />
        <p className='nickel-section-description'>
          For sensitive individuals, cumulative exposure can trigger flare-ups. The
          <strong> 15 Nickel Point </strong> system helps users remain mindful of their intake
          without relying on guesswork or external charts.
        </p>
      </div>

      {/* -------------------------------------------------- */}
      <div className='nickel-section-container'>
        <div className='nickel-section-header'>🔍 Food Search</div>
        <hr/>
        <p className='nickel-section-description'>
          Users can quickly search foods and instantly view their corresponding nickel point values.
        </p>
        <ul className='nickel-list-container'>
          <li>Fast keyword-based lookup</li>
          <li>Clear nickel point visibility</li>
          <li>Designed for quick, daily reference</li>
        </ul>

        <img
          src={nickelSearch}
          className='nickel-page-image'
          alt='food search page'
        />
      </div>

      {/* -------------------------------------------------- */}
      <div className='nickel-section-container'>
        <div className='nickel-section-header'>📊 Browse by Point Value</div>
        <hr/>
        <p className='nickel-section-description'>
          The <strong>By Points</strong> view presents a complete list of foods organized by their nickel
          values, allowing users to plan meals more strategically.
        </p>
        <ul className='nickel-list-container'>
          <li>Structured, readable data layout</li>
          <li>Helpful for meal planning</li>
          <li>Reduces accidental overconsumption</li>
        </ul>

        <img
          src={nickelByPoints}
          className='nickel-page-image'
          alt='foods by nickel points'
        />
      </div>

      {/* -------------------------------------------------- */}
      <div className='nickel-section-container'>
        <div className='nickel-section-header'>📝 Daily Logging & History</div>
        <hr/>
        <p className='nickel-section-description'>
          Users can log consumed foods throughout the day and automatically track their total nickel intake.
        </p>
        <ul className='nickel-list-container'>
          <li>Daily point accumulation</li>
          <li>Clear summary of intake</li>
          <li>Historical visibility for habit awareness</li>
        </ul>

        <img
          src={nickelLog}
          className='nickel-page-image'
          alt='nickel intake log'
        />
      </div>

      {/* -------------------------------------------------- */}
      <div className='nickel-section-container'>
        <div className='nickel-section-header'>🔐 Authentication</div>
        <hr/>
        <p className='nickel-section-description'>
          Account creation and login allow users to securely store their intake history
          and access their data across sessions.
        </p>

        <ul className='nickel-list-container'>
          <li>Member login for returning users</li>
          <li>Signup flow for new users</li>
          <li>Foundation for persistent data storage</li>
        </ul>

        <div className='nickel-auth-images'>
          <img
            src={nickelLogin}
            className='nickel-page-image'
            alt='login form'
          />
          <img
            src={nickelSignup}
            className='nickel-page-image'
            alt='signup form'
          />
        </div>
      </div>

      {/* -------------------------------------------------- */}
      <div className='nickel-section-container'>
        <div className='nickel-section-header'>🧪 Test Account (Demo)</div>
        <hr/>
        <p className='nickel-section-description'>
          To explore the app without creating a new account, you can use the following demo credentials:
        </p>
        <ul className='nickel-list-container'>
          <li><strong>Email:</strong> <code>user@user.com</code></li>
          <li><strong>Password:</strong> <code>user</code></li>
        </ul>
        <p className='nickel-section-description'>
          This account is intended for testing and demonstration purposes only.
        </p>
      </div>

      {/* -------------------------------------------------- */}
      <div className='nickel-section-container'>
        <div className='nickel-section-header'>🚧 Project Status</div>
        <hr/>
        <p className='nickel-section-description'>
          This project is currently <strong>under active development</strong> and is approximately
          <strong> 98% complete</strong>.
        </p>
        <ul className='nickel-list-container'>
          <li>Core functionality is fully operational</li>
          <li>Authentication flows are in place</li>
          <li>Minor refinements and polish are ongoing</li>
        </ul>
        <p className='nickel-section-description'>
          The remaining work focuses on edge cases, UX improvements, and long-term enhancements.
        </p>
      </div>

      {/* -------------------------------------------------- */}
      <div className='nickel-section-container'>
        <div className='nickel-section-header'>⚙️ Technical Highlights</div>
        <hr/>
        <ul className='nickel-list-container'>
          <li>⚛️ React functional components</li>
          <li>🧠 Clear separation of UI and logic</li>
          <li>📦 Scalable component-based architecture</li>
          <li>🧭 Intuitive state-driven UI updates</li>
          <li>🎯 User-focused feature design</li>
        </ul>
      </div>

      {/* -------------------------------------------------- */}
      <div className='nickel-section-container'>
        <div className='nickel-section-header'>🛠️ Tech Stack</div>
        <hr/>
        <ul className='nickel-list-container'>
          <li><strong>React</strong> — Component-driven UI</li>
          <li><strong>JavaScript (ES6+)</strong> — Application logic</li>
          <li><strong>HTML</strong> — Semantic structure</li>
          <li><strong>CSS</strong> — Layout, styling, responsiveness</li>
        </ul>
      </div>

      {/* -------------------------------------------------- */}
      <div className='nickel-section-container'>
        <div className='nickel-section-header'>🎯 Project Goals</div>
        <hr/>
        <ul className='nickel-list-container'>
          <li>Solve a real-world dietary management problem</li>
          <li>Create a clean, approachable health-focused UI</li>
          <li>Demonstrate structured React application design</li>
          <li>Build a scalable foundation for future features</li>
        </ul>
      </div>

      {/* -------------------------------------------------- */}
      <div className='nickel-section-container'>
        <div className='nickel-section-header'>🚀 Future Enhancements</div>
        <hr/>
        <ul className='nickel-list-container'>
          <li>Persistent user data storage</li>
          <li>Custom daily nickel thresholds</li>
          <li>Food favorites & quick-add shortcuts</li>
          <li>Mobile-first optimizations</li>
        </ul>
        <hr/>
      </div>

      <LiveRepoLinks value={value} />
    </article>
  );
};

export default Nickel;
