import React from 'react'
import foodpickerMain from '../images/fpicker-main.png'
import foodpickerSelection from '../images/fpicker-selection.png'
import foodpickerAddSelection from '../images/fpicker-add-selection.png'
import foodpickerSpinZone from '../images/fpicker-spin-zone.png'
import foodpickerSpinPage from '../images/fpicker-spin-page.png'
import foodpickerRoulette from '../images/fpicker-roulette.png'
import LiveRepoLinks from '../components/LiveRepoLinks'
import '../pages/foodPicker.css'

const FoodPicker = ({ value }) => {
  return (
    <article className='foodpicker-article-container'>

      <div className='foodpicker-header'>Food Picker</div>
      <div className='foodpicker-header-caption'>
        - A Mobile-First Random Food Decision App -
      </div>

      <div className='foodpicker-description-container'>
        <hr/>
        <p>
          <strong>Food Picker</strong> is a mobile-focused React application
          designed to help users decide what to eat using a roulette-style
          spinning wheel.
        </p>
        <p>
          Users add their own food or restaurant choices, enter the spin zone,
          and let the app randomly select a result.
        </p>

        <img
          src={foodpickerMain}
          className='foodpicker-title-image'
          alt='food picker main page'
        />

        <p className='foodpicker-section-description'>
          The app is optimized for touch interaction while remaining fully usable
          on desktop devices.
        </p>
      </div>

      <div className='foodpicker-section-container'>
        <div className='foodpicker-section-header'>📋 Selection</div>
        <hr/>
        <p className='foodpicker-section-description'>
          Users start by reviewing and preparing their list of food options.
        </p>
        <img
          src={foodpickerSelection}
          alt='selection page'
          className='foodpicker-page-images'
        />
      </div>

      <div className='foodpicker-section-container'>
        <div className='foodpicker-section-header'>➕ Add Selection</div>
        <hr/>
        <p className='foodpicker-section-description'>
          Custom food or restaurant choices can be added through a simple input
          interface.
        </p>
        <img
          src={foodpickerAddSelection}
          alt='add selection input'
          className='foodpicker-page-images'
        />
      </div>

      <div className='foodpicker-section-container'>
        <div className='foodpicker-section-header'>▶️ Enter Spin Zone</div>
        <hr/>
        <p className='foodpicker-section-description'>
          Once the list is ready, users proceed to the spin zone to begin the
          selection process.
        </p>
        <img
          src={foodpickerSpinZone}
          alt='enter spin zone'
          className='foodpicker-page-images'
        />
      </div>

      <div className='foodpicker-section-container'>
        <div className='foodpicker-section-header'>🎡 Spin Page</div>
        <hr/>
        <p className='foodpicker-section-description'>
          The spin page displays the roulette interface and handles the
          randomized logic.
        </p>
        <img
          src={foodpickerSpinPage}
          alt='spin page'
          className='foodpicker-page-images'
        />
      </div>

      <div className='foodpicker-section-container'>
        <div className='foodpicker-section-header'>🎰 Roulette Result</div>
        <hr/>
        <p className='foodpicker-section-description'>
          A roulette-style wheel visually determines and displays the selected
          food option.
        </p>
        <img
          src={foodpickerRoulette}
          alt='roulette wheel'
          className='foodpicker-page-images'
        />
      </div>

      <div className='foodpicker-section-container'>
        <div className='foodpicker-section-header'>🛠️ Technologies Used</div>
        <hr/>
        <ul className='foodpicker-list-container'>
          <li><strong>React</strong> — Component architecture & state</li>
          <li><strong>JavaScript (ES6+)</strong> — Application logic</li>
          <li><strong>HTML5</strong> — Semantic structure</li>
          <li><strong>CSS3</strong> — Styling & responsiveness</li>
        </ul>
      </div>

      <div className='foodpicker-section-container'>
        <div className='foodpicker-section-header'>🚀 Future Enhancements</div>
        <hr/>
        <ul className='foodpicker-list-container'>
          <li>Saved favorites</li>
          <li>Spin history tracking</li>
          <li>Enhanced animations and sound effects</li>
          <li>Theme customization</li>
        </ul>
        <hr/>
      </div>

      <LiveRepoLinks value={value} />

    </article>
  )
}

export default FoodPicker
