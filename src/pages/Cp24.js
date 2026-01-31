import cp24Main from '../images/cp24-main.png';
import cp24DateAndTime from '../images/cp24-date-time.png';
import cp24Location from '../images/cp24-location.png';
import cp24Weather from '../images/cp24-local-weather.png';
import cp24IntlNews from '../images/cp24-intlnews.png';
import cp24LocalNews from '../images/cp24-local-news.png';
import cp24Rate from '../images/cp24-rate.png';
import cp24Youtube from '../images/cp24-youtube.png';
import cp24Ad from '../images/cp24-ad.png';
import cp24Chat from '../images/cp24-chat.png';
import "./cp24.css";
import LiveRepoLinks from "../components/LiveRepoLinks";

const Cp24 = ({ value }) => {
  return (
    <article className="cp24-article-container">
      <div className="cp24-header">CP24 Style - REST APIs</div>
      <div className="cp24-header-caption"> - A Multifunctional Dashboard Project -</div>
      <hr/>
      <p className='cp24-section-description'>This multifunctional dashboard project provides users with a comprehensive platform similar to 
      CP24 news format. It offers a wide range of features, including <em>real-time data such as current 
      date and time, user's IP location, 5-day weather forecast with daily high and low temperatures, 
      international news, current local news, currency exchange rates, YouTube video integration, 
      advertisements, and a simulation of a social media chat section</em>.
      </p>
      <img src={cp24Main} className='cp24-page-images' alt='home page' />
      
      <section className='cp24-section-container'>
        <div className='cp24-section-header'>Features</div>
        <hr/>
        <ol className='cp24-section-list-container'>
          <li className='cp24-section-list'>Real-Time Information
            <ul className='cp24-section-sub-list-container'>
              <li className='cp24-section-sub-list'><strong>Current Date and Time: </strong>Display the current date and time on the dashboard.</li>
              <img src={cp24DateAndTime} className='cp24-page-images' alt='date and time' />
              <li className='cp24-section-sub-list'><strong>User's IP Location: </strong>Retrieve and display the user's approximate location based on their IP address.</li>
              <img src={cp24Location} className='cp24-page-images' alt='location' />
            </ul>
          </li>
          <li className='cp24-section-list'>Weather Forecast
            <ul className='cp24-section-sub-list-container'>
              <li className='cp24-section-sub-list'><strong>5-Day Weather Forecast:</strong>Provide users with a 5-day weather forecast, including daily high and low temperatures, for their location, sourced from the WeatherAPI.</li>
              <img src={cp24Weather} className='cp24-page-images' alt='weather forecast' />
            </ul>
          </li>
          <li className='cp24-section-list'>News
            <ul className='cp24-section-sub-list-container'>
              <li className='cp24-section-sub-list'><strong>International News:</strong>Fetch and display international news headlines from the NewsAPI.</li>
              <img src={cp24IntlNews} className='cp24-page-images' alt='international news' />
              <li className='cp24-section-sub-list'><strong>Crrent Local News:</strong>Present local news articles relevant to the user's location, offering a personalized news experience.</li>
              <img src={cp24LocalNews} className='cp24-page-images' alt='local news' />
            </ul>
          </li>
          <li className='cp24-section-list'>Currency Exchange Rates
            <ul className='cp24-section-sub-list-container'>
              <li className='cp24-section-sub-list'><strong>Currency Rates:</strong>Show real-time currency exchange rates, sourced from Fixer.io, for multiple currencies.</li>
              <img src={cp24Rate} className='cp24-page-images' alt='currency rate' />
            </ul>
          </li>
          <li className='cp24-section-list'>Multimedia Integration
            <ul className='cp24-section-sub-list-container'>
              <li className='cp24-section-sub-list'><strong>YouTube Integration:</strong>Embed YouTube videos relevant to the user's interests or location.</li>
              <img src={cp24Youtube} className='cp24-page-images' alt='youtube' />
            </ul>
          </li>
          <li className='cp24-section-list'>Advertisement
            <ul className='cp24-section-sub-list-container'>
              <li className='cp24-section-sub-list'><strong>Advertisements:</strong>Display targeted advertisements to the users.</li>
              <img src={cp24Ad} className='cp24-page-images' alt='advertisement' />
            </ul>
          </li>
          <li className='cp24-section-list'>Social Media Chat Simulation
            <ul className='cp24-section-sub-list-container'>
              <li className='cp24-section-sub-list'><strong>Social Media Chat Section:</strong>Create a simulated chat section that allows users to engage with the content and each other.</li>
              <img src={cp24Chat} className='cp24-page-images' alt='chat section' />
            </ul>
          </li>
        </ol>
      </section>

      <section className='cp24-section-container'>
        <div className='cp24-section-header'>Technologies Used</div>
        <hr/>
        <p className='cp24-section-description'>This project leverages the following technologies to deliver a dynamic and feature-rich dashboard:</p>
        <ul className='cp24-section-list-container'>
          <li className='cp24-section-list'><strong>HTML:</strong>Used to structure the dashboard's layout and content.</li>
          <li className='cp24-section-list'><strong>CSS:</strong>Applied for styling to ensure an appealing and user-friendly interface.</li>
          <li className='cp24-section-list'><strong>JavaScript:</strong>Utilized to implement interactive features, fetch data from REST APIs, and provide real-time updates.</li>
          <li className='cp24-section-list'><strong>React:</strong>Employed to build dynamic and responsive user interfaces, making the project highly modular and efficient.</li>
        </ul>
      </section>

      <section className='cp24-section-container'>
        <div className='cp24-section-header'>Usage</div>
        <hr/>
        <p className='cp24-section-description'>To run the project locally or deploy it to a web server, follow these steps:</p>
        <ol className='cp24-section-list-container'>
          <li className="cp24-section-list">Clone the repository.</li>
          <li className="cp24-section-list">Install any necessary dependencies.</li>
          <li className="cp24-section-list">Set up API keys or endpoints for WeatherAPI, NewsAPI, Fixer.io, and YouTube API as required.</li>
          <li className="cp24-section-list">Customize the dashboard's content and styling to your preferences.</li>
          <li className="cp24-section-list">Launch the application and enjoy the multifunctional dashboard.</li>
        </ol>
        <p className='cp24-section-description'>Feel free to extend the project with additional features or APIs as needed to further enhance its capabilities.</p>
      </section>

      <section className='cp24-section-container'>
        <div className='cp24-section-header'>License</div>
        <hr/>
        <p className='cp24-section-description'>This project is licensed under theMIT License - see the  <a className='cp24-license' href='https://github.com/Blynx03/react-cp24/blob/master/LICENSE'>LICENSE</a> file for details.</p>
      </section>

      <LiveRepoLinks value={value} />
    </article>
  );
};

export default Cp24;
