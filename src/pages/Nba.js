import '../pages/nba.css';
import nbaMain from '../images/nba-main.png';
import nbaPlayer from '../images/nba-player.png';
import nbaTeam from '../images/nba-team.png';
import LiveRepoLinks from "../components/LiveRepoLinks";


const Nba = ({ value }) => {
  return (
    <article className="nba-article-container">
      <div className="nba-header">NBA - Team and Player Information</div>
      <div className="nba-header-caption">– REST API Project -</div>
      <hr/>
      <p className="nba-section-description">
        This is a simple REST API project that provides information about basketball teams and some of their players. The API allows users to retrieve details about teams, their rosters, and individual player information.
      </p>
      
      <section className="nba-section-container">
        <div className="nba-section-header">Features </div>
        <hr/>
     
        <ul className="nba-section-list-container">
          <li className="nba-section-list">Retrieve a list of basketball teams.</li>
          <li className="nba-section-list">Get information about a specific team, including its name, location, division and conference.</li>
          <li className="nba-section-list">Fetch a list of players for a particular team.</li>
          <li className="nba-section-list">Access player profiles, including their name, position, and statistics.</li>
          <li className="nba-section-list">Responsive design to cater desktop and mobile devices.</li>
          <img src={nbaMain} className="nba-page-images" alt="home page" />
        </ul>
      </section>

      <section className="nba-section-container">
        <div className="nba-section-header">Usage</div>
        <hr/>
        <div className="nba-section-description">To use this API, make HTTP requests to the following endpoints:</div>
        <ul className="nba-section-list-container">
          <li className="nba-section-list"><code>fetch(https://www.balldontlie.io/api/v1/players)</code> : Retrieve a list of basketball teams and players information in json format.</li>
        </ul>
      </section>

      <section className="nba-section-container">
        <div className="nba-section-header">Team Information</div>
        <hr/>
        <p className="nba-section-description">The project includes information about basketball teams, including:</p>
        <ul className="nba-section-list-container">
          <li className="nba-section-list">Team name</li>
          <li className="nba-section-list">Team conference</li>
          <li className="nba-section-list">Team division</li>
          <li className="nba-section-list">Team logo (image)</li>
        </ul>
        <img src={nbaTeam} className='nba-page-images' alt='team information' />
      </section>

      <section className="nba-section-container">
        <div className="nba-section-header">Player Information</div>
        <hr/>
        <p className="nba-section-description">The API provides data on individual players, including:</p>
        <ul className="nba-section-list-container">
          <li className="nba-section-list">Player fullname</li>
          <li className="nba-section-list">Player position</li>
          <li className="nba-section-list">Player image</li>
        </ul>
        <img src={nbaPlayer} className='nba-page-images' alt='player information' />
      </section>

      <section className="nba-section-container">
        <div className="nba-section-header">Technologies Used</div>
        <hr/>
        <ul className="nba-section-list-container">
          <li className="nba-section-list">Programming Languages/Libraries: HTML, CSS, Vanilla Javascript and Bootstrap</li>
          <li className="nba-section-list">Hosting: <a href='www.balldontlie.io' className='nba-link'>www.balldontlie.io</a> --- which was provided by a good samaritan :)</li>
        </ul>
      </section>

      <section className="nba-section-container">
        <div className="nba-section-header">Getting Started</div>
        <hr/>
        <p className="nba-section-description">To run this project locally or deploy it on your server, follow these steps:</p>
        <ol className='nba-section-list-container'>
          <li className="nba-section-list">Clone the repository.</li>
          <li className="nba-section-list">Start the server.</li>
        </ol>
      </section>
      <LiveRepoLinks value={value} />
    </article>
  );
};

export default Nba;
