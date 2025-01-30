import React from 'react'

export default function () {
    return (
        <div className='footer mt-5'>
            <div class="container text-center ">
                <div class="row">
                    <div class="col-lg-4 col-md-6 col-sm-12">
                        <h3 className=' text-uppercase mt-5 mb-4'>Location</h3>
                        <p className=' mb-5 '>2215 John Daniel Drive Clark, MO 65243</p>
                    </div>
                    <div class="col-lg-4 col-md-6 col-sm-12">
                        <h3 className=' text-uppercase mt-5 mb-4'>Around the Web</h3>
                        <div className='mb-5 d-flex align-items-center '>
                            <div class="col-lg-3 col-md-6 col-sm-12 ">
                                <i class="fa-brands fa-facebook fa-1x border border-2 rounded-circle  p-3 "></i>
                            </div>
                            <div class="col-lg-3 col-md-6 col-sm-12">
                                <i class="fa-brands fa-twitter fa-1x border border-2 rounded-circle  p-3"></i>
                            </div>
                            <div class="col-lg-3 col-md-6 col-sm-12">
                                <i class="fa-brands fa-linkedin fa-1x border border-2 rounded-circle  p-3"></i>
                            </div>
                            <div class="col-lg-3 col-md-6 col-sm-12">
                                <i class="fa-brands fa-instagram fa-1x border border-2 rounded-circle  p-3"></i>
                            </div>

                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6 col-sm-12">
                        <h3 className=' text-uppercase mt-5 mb-4'>About Freelancer</h3>
                        <p className='mb-5'>Freelance is a free to use, MIT licensed Bootstrap theme created by <a href="#" style={{ color: "#18bc9c" }}>Start Bootstrap</a>  .</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
