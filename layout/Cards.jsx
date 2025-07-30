import React from 'react'
import './Cards.css'

function Cards() {
  return (


    <div id='Cards'>
      <div className='card-texto'>
        <h1>Recommended Destination</h1>
        <button>View More</button>
      </div>

      <div id="card-container">


        <div class="card">
          <div class="card-image">
            <img src="https://live.sociolib.com/nomad/wp-content/uploads/sites/15/2025/07/colin-watts-M1ObxvsWVhY.webp"
              alt="Caspian Sea Beach" />
            <span class="flag">Kazakhstan</span>
          </div>
          <div class="card-content">
            <h2>Caspian Sea Beach, Aktau</h2>
            <p class="description">A Unique Seaside Escape in Central Asia</p>
            <div class="info-row">

              <span> 📅  12 Jun - 20 Jun</span>
              <span>⭐ 5.0 Rating</span>
              <span>🏖️ Beach</span>
            </div>
            <div class="card-footer">
              <div>
                <strong>$1,580</strong>
                <p class="days">9 day package</p>
              </div>
              <button class="btn-outline">Book Now</button>
            </div>
          </div>
        </div>
        
        <div class="card">
          <div class="card-image">
            <img src="https://live.sociolib.com/nomad/wp-content/uploads/sites/15/2025/07/colin-watts-M1ObxvsWVhY.webp"
              alt="Caspian Sea Beach" />
            <span class="flag">Indonesia</span>
          </div>
          <div class="card-content">
            <h2>Caspian Sea Beach, Aktau</h2>
            <p class="description">A Unique Seaside Escape in Central Asia</p>
            <div class="info-row">
              <span>📅 12 Jun - 20 Jun</span>
              <span>⭐ 5.0 Rating</span>
              <span>🏖️ Beach</span>
            </div>
            <div class="card-footer">
              <div>
                <strong>$1,580</strong>
                <p class="days">9 day package</p>
              </div>
              <button class="btn-outline">Book Now</button>
            </div>
          </div>
        </div>

        <div class="card">
          <div class="card-image">
            <img src="https://live.sociolib.com/nomad/wp-content/uploads/sites/15/2025/07/colin-watts-M1ObxvsWVhY.webp"
              alt="Caspian Sea Beach" />
            <span class="flag"> Indonesia</span>
          </div>
          <div class="card-content">
            <h2>Caspian Sea Beach, Aktau</h2>
            <p class="description">A Unique Seaside Escape in Central Asia</p>
            <div class="info-row">
              <span>📅 12 Jun - 20 Jun</span>
              <span>⭐ 5.0 Rating</span>
              <span>🏖️ Beach</span>
            </div>
            <div class="card-footer">
              <div>
                <strong>$1,580</strong>
                <p class="days">9 day package</p>
              </div>
              <button class="btn-outline">Book Now</button>
            </div>
          </div>
        </div>

      </div>

    </div>
  )
}

export default Cards