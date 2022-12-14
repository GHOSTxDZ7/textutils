import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'


export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg bg-${props.mode}`}>
      <div className="container-fluid">
        <a className="navbar-brand" href="/"><img src="favicon.png" alt="logo" width="30px" height="30px"/> {props.title}</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/textutils">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">About</Link>
            </li>
          </ul>
          <div className={`custom-control custom-switch text-${props.mode === 'light' ?'dark':'light'}`} id='switch'>
            <input type="checkbox" className="custom-control-input" id="customSwitches" onClick={props.toggleMode}/>
            <label className="custom-control-label mx-2" htmlFor="customSwitches">{props.modeLable}</label>
          </div>
        </div>
      </div>
    </nav>
  )
}

Navbar.propTypes = {title: PropTypes.string}