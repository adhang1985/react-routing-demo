import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Navbar = (props) => {

    const [isToggle,setIsToggle] = useState(false);

    const handleLogin = () => {
        setIsToggle(!isToggle);
    }

    useEffect(() => {
        props.onToggle(isToggle);   
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[isToggle])

  return (
    <nav className="navbar bg-dark navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
  <div className="container-fluid">
    <Link className="navbar-brand">Navbar</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        {
            isToggle ? 
            <li className="nav-item">
                <Link className="nav-link" to="/add-blog">Add Blog</Link>
            </li>
            : 
            ""
        }
        <li className="nav-item">
          <Link className="nav-link" to="/about">About</Link>
        </li>
        <li>
        <button className="btn btn-outline-success" type="submit" onClick={handleLogin}>{isToggle ? 'Log Out' : 'Login'}</button>
        </li>
      </ul>
    </div>
  </div>
</nav>
  )
}

export default Navbar
