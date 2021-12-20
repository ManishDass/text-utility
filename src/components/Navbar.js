import React from "react"
import { Link } from "react-router-dom"

export default function Navbar(props) {
  return (
    <>
      <nav
        className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}
      >
        <div className='container-fluid'>
          <Link className='navbar-brand fw-bolder' to='/'>
            Text Utility
          </Link>
          <button
            className='navbar-toggler'
            type='button'
            data-bs-toggle='collapse'
            data-bs-target='/navbarSupportedContent'
            aria-controls='navbarSupportedContent'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <span className='navbar-toggler-icon' />
          </button>
          <div className='collapse navbar-collapse' id='navbarSupportedContent'>
            <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
              <li className='nav-item'>
                <Link
                  className='nav-link active'
                  aria-current='page'
                  to='/about'
                >
                  About
                </Link>
              </li>
              <li className='nav-item'>
                <Link className='nav-link' to='/'>
                  Contact
                </Link>
              </li>
              <li className='nav-item my-2 mx-2'>
                <div className='form-check form-switch'>
                  <label
                    className={`form-check-label text-${
                      props.mode === "dark" ? "light" : "dark"
                    }`}
                    htmlFor='flexSwitchCheckDefault'
                  >
                    {`Enable ${props.mode} mode`}
                  </label>
                  <input
                    className='form-check-input'
                    type='checkbox'
                    role='switch'
                    id='flexSwitchCheckDefault'
                    onClick={props.toggleMode}
                  />
                </div>
              </li>
            </ul>
            <form className='d-flex'>
              <input
                className='form-control me-2'
                type='search'
                placeholder='Search'
                aria-label='Search'
              />
              <button className='btn btn-outline-danger' type='submit'>
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </>
  )
}
