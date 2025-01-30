import React from 'react'

export default function 
() {
  return (
    <div className='SecAbout mt-5 '>
    <div className='container d-flex align-items-center flex-column'>
        <h1 className=' fw-bold fs-1 text-uppercase mt-5 mb-4'>about</h1>
        <div className='mb-4'>
        <div className='mb-4 d-flex align-items-center justify-content-center'>
          <hr className='custom-hr' />
          <i class="fa-solid fa-star fa-2x ms-3 me-3"></i>
          <hr className='custom-hr'/>
        </div>
        </div>
        <div className='d-flex align-items-center justify-content-center '>
            <div className='col-lg-4  col-md-6 col-sm-12 px-5'>
                <p>Freelancer is a free bootstrap theme created by Start Bootstrap. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
            </div>
            <div className='col-lg-3  col-md-6 col-sm-12'>
                <p>You can create your own custom avatar for the masthead, change the icon in the dividers, and add your email address to the contact form to make it fully functional!</p>
            </div>
        </div>
        <div className='btnDownload mt-4 mb-5'>
        <button type="button" class="btn btn-outline-secondary "><i class="fa-solid fa-download px-2"></i>Free Download!</button>
        </div>
    </div>
    </div>
  )
}
