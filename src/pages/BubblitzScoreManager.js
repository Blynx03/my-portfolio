import React from 'react';
import bsmTitle from '../images/bsm-title.png';
import bsmHomePage from '../images/bsm-mainpage.png';
import bsmLogin from '../images/bsm-login.png';
import bsmLoginNight from '../images/bsm-loginnight.png';
import bsmLoginUnknown from '../images/bsm-loginunknown.png';
import bsmLoginSuccessful from '../images/bsm-loginsuccessful.png';
import bsmAdminPage from '../images/bsm-adminpage.png';
import bsmLeaderboard from '../images/bsm-leaderboard.png';
import bsmAddAdmin from '../images/bsm-addadmin.png';
import bsmDeleteAdmin from '../images/bsm-deleteadmin.png';
import bsmAddScore from '../images/bsm-addscore.png';
import bsmDeleteScore from '../images/bsm-deletescore.png';
import LiveRepoLinks from '../components/LiveRepoLinks';


const BubblitzScoreManager = ({ value }) => {
  return (
    <article className='bubblitz-article-container'>
        <div className='bubblitz-header'>Bubblitz Score Manager</div>
        <div className='bubblitz-header-caption'> - Full-Stack Leaderboard & Administration System -</div>
        <div className='bubblitz-description-container'>
            <hr/>
            <p><strong>Bubblitz Score Manager </strong> is a full-stack score and administration management application built to manage the player data and leaderboard records used by the Bubblitz game.</p>
            <p>Built with a modern full-stack architecture, Bubblitz Score Manager combines a responsive React front end with a Node.js backend, PostgreSQL cloud database, administrator authentication, protected management functionality, and production cloud deployment.</p>
            <img src={bsmTitle} className='bubblitz-title-image' alt='bubblitz-score-manager title' />
            <p>The project demonstrates real-world software engineering practices including authentication and authorization, CRUD operations, REST API development, database integration, cloud deployment, responsive design, state management, validation, and error handling.</p>
        {/* <hr/> */}
        </div>

        <div className='bubblitz-section-container'>
            <div className='bubblitz-section-header'>🏗️ System Architecture</div>
            <hr/>
            <p className='bubblitz-section-description'>Bubblitz Score Manager uses a React and TypeScript frontend communicating with an Express REST API, with Prisma ORM providing access to a PostgreSQL database hosted on Neon.</p>
            {/* <hr/> */}
        </div>

        <div className='bubblitz-section-container'>
            <div className='bubblitz-section-header'>🧠 Application Overview</div>
            <hr/>
            <p className='bubblitz-section-description'>Bubblitz Score Manager provides separate experiences for guests and administrators.</p>
            <ul className='bubblitz-list-container'>
                <li>👤 Guest Access</li>
                <p className='bubblitz-section-description'>Guests can access the leaderboard to view player scores and rankings without administrator privileges.</p>
                <li>🔐 Administrator Access</li>
                <p className='bubblitz-section-description'>Authenticated administrators can access protected management functionality for maintaining administrator accounts and score records.</p>
            </ul>
        </div>

        <div className='bubblitz-section-container'>
            <div className='bubblitz-section-header'>🏆 Leaderboard System</div>
            <hr/>
            <p className='bubblitz-section-description'>Bubblitz Score Manager provides access to the persistent leaderboard data used by Bubblitz.</p>
            <h4>Features</h4>
            <ul className='bubblitz-list-container'>
                <li>Persistent score storage</li>
                <li>Player ranking display</li>
                <li>Server-side leaderboard ordering</li>
                <li>Player information display</li>
                <li>Score and gameplay information</li>
                <li>Player status tracking</li>
                <li>Real-time API communication</li>
                <li>Responsive leaderboard presentation</li>
            </ul>
            <p className='bubblitz-section-description'>Leaderboard records are ordered by player performance using level, score value, and completion time.</p>
        </div>

        <div className='bubblitz-section-container'>
            <div className='bubblitz-section-header'>🔐 Administrator Authentication</div>
            <hr/>
            <p className='bubblitz-section-description'>The application includes a dedicated administrator authentication workflow.</p>
            <h4>Features</h4>
            <ul className='bubblitz-list-container'>
                <li>Administrator login</li>
                <li>JWT-based authentication</li>
                <li>Protected administrator functionality</li>
                <li>Invalid/unknown login handling</li>
                <li>Successful login feedback</li>
                <li>Logout functionality</li>
                <li>Protected administrator accounts</li>
            </ul>
        </div>

        <div className='bubblitz-section-container'>
            <div className='bubblitz-section-header'>⚙️ Administration & Score Management</div>
            <hr/>
            <h4>Administrator Management</h4>
            <p className='bubblitz-section-description'>Authenticated administrators can:</p>
            <ul className='bubblitz-list-container'>
                <li>Add administrator accounts</li>
                <li>View administrator information</li>
                <li>Delete eligible administrator accounts</li>
                <li>Protect designated administrator accounts from deletion</li>
                <li>Receive success and error feedback</li>
            </ul>
            <h4>Score Management</h4>
            <p className='bubblitz-section-description'>Authenticated administrators can:</p>
            <ul className='bubblitz-list-container'>
                <li>Add score records</li>
                <li>View leaderboard records</li>
                <li>Delete score records</li>
                <li>Assign player status</li>
                <li>Specify gameplay information</li>
                <li>Manage score dates</li>
                <li>Receive updated leaderboard data after changes</li>
            </ul>
        </div>

        <div className='bubblitz-section-container'>
            <div className='bubblitz-section-header'>⚙️ Full-Stack Architecture</div>
            <hr/>
            <h4>Frontend</h4>
            <p className='bubblitz-section-description'>Responsibilities:</p>
            <ul className='bubblitz-list-container'>
                <li>Guest adn Administrator Interfaces</li>
                <li>Administrator Authentication</li>
                <li>Leaderboard Presentation</li>
                <li>Score Management Forms</li>
                <li>Administrator Management</li>
                <li>State Management</li>
                <li>Error & Success Feedback</li>
                <li>Theme Management</li>
                <li>Responsive Layout</li>
            </ul>
            <h4>Backend</h4>
            <p className='bubblitz-section-description'>Responsibilities:</p>
            <ul className='bubblitz-list-container'>
                <li>REST API Endpoints</li>
                <li>Administrator Authentication</li>
                <li>JWT Authorization</li>
                <li>Score Management</li>
                <li>Administrator Management</li>
                <li>Server-Side Validation</li>
                <li>Error Handling</li>
                <li>Environment Configuration</li>
            </ul>
            <h4>Database</h4>
            <p className='bubblitz-section-description'>Responsibilities:</p>
            <ul className='bubblitz-list-container'>
                <li>Player Information Storage</li>
                <li>Score Persistence</li>
                <li>Administrator Account Storage</li>
                <li>Player Status Tracking</li>
                <li>Historical Score Records</li>
            </ul>
        </div>

        <div className='bubblitz-section-container'>
            <div className='bubblitz-section-header'>🛠️ Tech Stack</div>
            <hr/>
            <h4>Frontend</h4>
            <ul className='bubblitz-list-container'>
                <li>React</li>
                <li>TypeScript</li>
                <li>Vite</li>
                <li>JavaScript (ES6+)</li>
                <li>HTML5</li>
                <li>CSS3</li>
            </ul>
            <h4>Backend</h4>
            <ul className='bubblitz-list-container'>
                <li>Node.js</li>
                <li>Express.js</li>
                <li>REST API Architecture</li>
                <li>JSON Web Tokens (JWT)</li>
            </ul>
            <h4>Database</h4>
            <ul className='bubblitz-list-container'>
                <li>PostgreSQL</li>
                <li>Neon Cloud Database</li>
                <li>Prisma ORM</li>
            </ul>
            <h4>Cloud & Deployment</h4>
            <ul className='bubblitz-list-container'>
                <li>Vercel</li>
                <li>Render</li>
            </ul>
            <h4>Development Tools</h4>
            <ul className='bubblitz-list-container'>
                <li>Git</li>
                <li>GitHub</li>
                <li>VS Code</li>
                <li>Chrome DevTools</li>
                <li>Firefox DevTools</li>
            </ul>
        </div>

       <div className='bubblitz-section-container'>
            <div className='bubblitz-section-header'>🛠️🚀 Engineering Highlights</div>
            <hr/>
            <h4>Frontend Engineering</h4>
            <ul className='bubblitz-list-container'>
                <li>React Context API</li>
                <li>Controlled Form Inputs</li>
                <li>TypeScript API Response Types</li>
                <li>Conditional Rendering</li>
                <li>Responsive Design</li>
                <li>Theme Management</li>
                <li>Dynamic Success & Error States</li>
            </ul>
            <h4>Backend Engineering</h4>
            <ul className='bubblitz-list-container'>
                <li>RESTful API Development</li>
                <li>JWT Authentication & Authorization</li>
                <li>Protected Routes</li>
                <li>Environment Variables</li>
                <li>CORS Configuration</li>
                <li>Server-Side Validation</li>
                <li>Error Handling</li>
            </ul>
            <h4>Database Engineering</h4>
            <ul className='bubblitz-list-container'>
                <li>Prisma ORM</li>
                <li>PostgreSQL Schema Integration</li>
                <li>Database Migrations</li>
                <li>Relational Data Queries</li>
                <li>Persistent Data Storage</li>
                <li>Ordered Leaderboard Queries</li>
            </ul>
            <h4>Cloud Engineering</h4>
            <ul className='bubblitz-list-container'>
                <li>Vercel Frontend Deployment</li>
                <li>Render Backend Deployment</li>
                <li>Neon Database Hosting</li>
                <li>Production Environment Configuration</li>
            </ul>
        </div>

       <div className='bubblitz-section-container'>
            <div className='bubblitz-section-header'>🌗 Theme Support</div>
            <hr/>
            <ul className='bubblitz-list-container'>
                <li>Light Mode</li>
                <li>Dark Mode</li>
                <li>Global Theme State</li>
                <li>Consistent Visual Experience</li>
            </ul>
        </div>

       <div className='bubblitz-section-container'>
            <div className='bubblitz-section-header'>📸 Application Screenshots</div>
            <hr/>
            <ul className='bubblitz-list-container bubblitz-sm-container'>
                <li>Main Page</li>
                <p>— Landing screen providing access to the guest leaderboard and administrator login while presenting the primary Bubblitz Score Manager interface.</p>
                <img src={bsmHomePage} alt='home-page' className='page-images' />
                <li>Administrator Login</li>
                <p>— Dedicated authentication interface allowing authorized administrators to securely access Score Manager administration functionality.</p>
                <img src={bsmLogin} alt='login-page' className='page-images' />
                <li>Administrator Login - Night Mode</li>
                <p>— Dark-theme version of the administrator login interface demonstrating application-wide theme support.</p>
                <img src={bsmLoginNight} alt='login-night-page' className='page-images' />
                <li>Unknown Administrator Login</li>
                <p>— Login error state providing feedback when submitted administrator credentials are not recognized or authentication is unsuccessful.</p>
                <img src={bsmLoginUnknown} alt='login-unknown-page' className='page-images' />
                <li>Successful Administrator Login</li>
                <p>— Authentication success state confirming administrator access before entering protected management functionality.</p>
                <img src={bsmLoginSuccessful} alt='login-successful-page' className='page-images' />
                <li>Leaderboard</li>
                <p>— Persistent leaderboard interface displaying player rankings, score information, gameplay results, player status, and recorded play dates.</p>
                <img src={bsmLeaderboard} alt='leaderboard-page' className='page-images' />
                <li>Administrator Page</li>
                <p>— Protected administration dashboard providing access to administrator management and score management functionality.</p>
                <img src={bsmAdminPage} alt='admin-page' className='page-images' />
                <li>Add Administrator</li>
                <p>— Protected administrator creation interface for adding authorized users to the Score Manager administration system.</p>
                <img src={bsmAddAdmin} alt='add-admin-page' className='page-images' />
                <li>Delete Administrator</li>
                <p>— Administrator management interface displaying existing administrators and providing controlled deletion functionality.</p>
                <img src={bsmDeleteAdmin} alt='delete-admin-page' className='page-images' />
                <li>Add Score</li>
                <p>— Score creation interface for manually adding player information, gameplay results, player status, and play-date information.</p>
                <img src={bsmAddScore} alt='add-score-page' className='page-images' />
                <li>Delete Score</li>
                <p>— Score management interface displaying leaderboard records and allowing administrators to remove selected score records while refreshing the updated leaderboard.</p>
                <img src={bsmDeleteScore} alt='delete-score-page' className='page-images' />
            </ul>
        </div>

        <div className='bubblitz-section-container'>
            <div className='bubblitz-section-header'>🎯 Project Goals</div>
            <hr/>
            <p className='bubblitz-section-description'>This project was built to:</p>
            <ul className='bubblitz-list-container'>
                <li>Demonstrate Full-Stack Development Skills</li>
                <li>Implement Authentication & Authorization</li>
                <li>Build Protected Administration Workflows</li>
                <li>Practice CRUD Application Development</li>
                <li>Design REST APIs</li>
                <li>Integrate Relational Cloud Databases</li>
                <li>Manage Shared Game Data</li>
                <li>Deploy Applications to Production</li>
                <li>Practice Real-World Software Engineering</li>
            </ul>
        </div>

        <div className='bubblitz-section-container'>
            <div className='bubblitz-section-header'>👨‍💻 About This Project</div>
            <hr/>
            <p className='bubblitz-section-description'>Bubblitz Score Manager was developed as a companion administration application for the Bubblitz full-stack game.</p>
            <p className='bubblitz-section-description'>The project demonstrates the ability to design, build, deploy, and maintain software across:</p>
            <ul className='bubblitz-list-container'>
                <li>Frontend Development</li>
                <li>Backend Development</li>
                <li>Authentication & Authorization</li>
                <li>Database Design</li>
                <li>REST API Development</li>
                <li>Cloud Infrastructure</li>
                <li>Application Deployment</li>
            </ul>
        </div>

        <div className='bubblitz-section-container'>
            <div className='bubblitz-section-header'>🚀 Possible Future Enhancements</div>
            <hr/>
            <ul className='bubblitz-list-container'>
                <li>✏️ Score Editing</li>
                <li>✏️ Administrator Account Editing</li>
                <li>🔎 Advanced Search & Filtering</li>
                <li>📊 Administrator Dashboard Statistics</li>
                <li>📝 Administrative Activity Logging</li>
                <li>👤 Expanded Role-Based Access Control</li>
                <li>📱 Enhanced Mobile Administration Experience</li>
            </ul>
        </div>
        
        <div className='bubblitz-section-container'>
            <div className='bubblitz-section-header'>📄 License</div>
            <hr/>
            <p className='bubblitz-section-description'>This project is created for education, portfolio, and demonstration purposes.</p>
        </div>

        <LiveRepoLinks value={value} />
    </article>
  )
}

export default BubblitzScoreManager