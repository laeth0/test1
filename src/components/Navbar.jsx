import React from 'react'

export default function Navbar() {
  return (
    <>
   
      <nav className="navbar navbar-expand-lg startPage text-uppercase">
        <div className="container ">
          <a className="navbar-brand text-white fs-2 fw-bolder" href="#">Start Bootstrap</a>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 fs-5 fw-bolder">
              <li className="nav-item">
                <a className="nav-link  text-white" aria-current="page" href="#">Portfolio</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" aria-current="page" href="#">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link  text-white" aria-current="page" href="#">Contact</a>
              </li>
            </ul>

          </div>
        </div>
      </nav>


    </>
  )
}
