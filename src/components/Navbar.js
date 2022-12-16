import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function Navbar(props) {
    const successStyle = {
        height: "25px",
        width: "25px",
        backgroundColor: "#d1e7dd",
        borderRadius: "50%",
        display: "inline-block",
    }
    const warningStyle = {
        height: "25px",
        width: "25px",
        backgroundColor: "#f8d7da",
        borderRadius: "50%",
        display: "inline-block",
    }

    return (
        <nav className={`navbar navbar-expand-lg bg-${props.isDarkMode ? "dark" : "light"} navbar-${props.isDarkMode ? "dark" : "light"}`}>
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">{props.title}</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/about">{props.aboutText}</Link>
                        </li>
                    </ul>
                    {/* <form className="d-flex" role="search">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form> */}
                    <div className="mx-4">
                        <span className="mx-2" onClick={() => { props.toggleSuccessStyle("#d1e7dd", props.isSuccessStyle, "success") }} style={successStyle}></span>
                        <span onClick={() => { props.toggleWarningStyle("#f8d7da", props.isWarningStyle, "danger") }} style={warningStyle}></span>
                    </div>

                    <div className="form-check form-switch">
                        <input onClick={props.toggleMode} className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                        <label className={`form-check-label text-${props.isDarkMode ? "light" : "dark"}`} htmlFor="flexSwitchCheckDefault">Enable {props.isDarkMode ? "Light" : "Dark"} Mode</label>
                    </div>
                </div>
            </div>
        </nav>
    )
}

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    aboutText: PropTypes.string.isRequired,
}

Navbar.defaultProps = {
    title: "Set Title",
    aboutText: "About"
}

export default Navbar


