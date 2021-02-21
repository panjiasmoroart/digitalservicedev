import React from 'react'
import { Link } from 'react-router-dom'
import ImageLogo from "../assets/images/logo_jds.png";

export default function Header() {
  return (
    <nav className="navbar navbar-light" style={{ backgroundColor: '#c3c3c3' }}>
      <div className="container">
        <div className="row">
          <div className="col-md-3 offset-md-9">
            <Link to="/" className="navbar-brand">
              <img src={ImageLogo} className="justify-content-center" width={200} alt="Belum Tersedia" />
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}
