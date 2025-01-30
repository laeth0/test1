import React from 'react'
import cabin from '../images/cabin.png'
import cake from '../images/cake.png'
import circus from '../images/circus.png'
import game from '../images/game.png'
import safe from '../images/safe.png'
import submarine from '../images/submarine.png'

export default function
  () {
  return (
    <div className='Sec-Portfolio container mt-4'>
      <div className='d-flex align-items-center flex-column'>
        <h1 className='header fw-bold fs-1 text-uppercase mt-5 mb-4'>Portfolio</h1>
        <div className='Star'>
        <div className='mb-4 d-flex align-items-center justify-content-center'>
          <hr className='custom-hr' />
          <i class="fa-solid fa-star fa-2x ms-3 me-3"></i>
          <hr className='custom-hr'/>
        </div>
        </div>
        <div className='row mt-5'>
          <div className='col-lg-4 col-md-6 col-sm-12 mb-4 '>
            <img className='rounded' src={cabin} alt="cabin" />
          </div>
          <div className='col-lg-4 col-md-6 col-sm-12 mb-4'>
            <img className='rounded' src={cake} alt="cake" />
          </div>
          <div className='col-lg-4 col-md-6 col-sm-12 mb-4 '>
            <img className='rounded' src={circus} alt="circus" />
          </div>
          <div className='col-lg-4 col-md-6 col-sm-12 mb-4 '>
            <img className='rounded' src={game} alt="game" />
          </div>
          <div className='col-lg-4 col-md-6 col-sm-12 mb-4 '>
            <img className='rounded' src={safe} alt="safe" />
          </div>
          <div className='col-lg-4 col-md-6 col-sm-12 mb-4 '>
            <img className='rounded' src={submarine} alt="submarine" />
          </div>
        </div>
      </div>

    </div>
  )
}
