import React from 'react'
import './Cards2.css'

function Cards2() {
  return (
    <div id='Cards2'>
      <div className='card2-texto'>
        <h1>Elevate Your Epic Adventures</h1>
        <p>We are a travel agency that specializes in customizing trips according to your preferences, needs, and desires</p>
      </div>
      <hr className='linha' />


      <div className='cards-e-imagem'>

        <div className='card-container'>
          <div className="simple-card">
            <h1>01</h1>
            <h1>Diving and Snorkeling</h1>
            <p>The travel package includes lending services for diving and snorkeling equipment</p>
          </div>
          <div className="simple-card">
            <h1>02</h1>
            <h1>Diving and Snorkeling</h1>
            <p>The travel package includes lending services for diving and snorkeling equipment</p>
          </div>
          <div className="simple-card">
            <h1>03</h1>
            <h1>Diving and Snorkeling</h1>
            <p>The travel package includes lending services for diving and snorkeling equipment</p>
          </div>
          <div className="simple-card">
            <h1>04</h1>
            <h1>Diving and Snorkeling</h1>
            <p>The travel package includes lending services for diving and snorkeling equipment</p>
          </div>
        </div>

   
        <div className='image-card'>
          <img
            width={700}
            height={700}
            src="https://live.sociolib.com/nomad/wp-content/uploads/sites/15/2025/07/exotic-tropical-seascape-with-palm-tree-jetty-pie-2024-10-18-08-01-58-utc.webp"
            alt="Praia tropical"
          />
        </div>
      </div>
    </div>

    
  )
}

export default Cards2