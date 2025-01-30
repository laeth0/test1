import React from 'react'
import avataaars from '../images/avataaars.svg'

export default function Startbootstrap() {
  return (
    <div className='start-Bootstrap text-white'>
      <div className='container d-flex align-items-center flex-column '>
        <img className='Imgavataaars mb-5 mt-5' src={avataaars} />
        <h1 className='fw-bold fs-1 text-uppercase mb-4'>Start Bootstrap</h1>
        <div className='mb-4 d-flex align-items-center justify-content-center'>
          <hr className='custom-hr' />
          <i class="fa-solid fa-star fa-2x ms-3 me-3"></i>
          <hr className='custom-hr'/>
        </div>
        <p>Graphic Artist - Web Designer - Illustrator</p>
      </div>
    </div>
  )
}
