import React from 'react'
import Tesla from '../assets/tesla.png'
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Navbar = () => {
  const { isLoggedIn, user } = useSelector((state) => state.auth);
  return (
    <div className="container">
      <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
        <Link
          to={"/"}
          className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none"
        >
          <img src={Tesla} alt="Tesla" style={{ width: "200px" }} />
        </Link>
        <ul className="nav nav-pills">
          {isLoggedIn ? (
            <>
              <li className="nav-item">
                <h1>{user.user.username}</h1>
              </li>
            </>
          ) : (
            <>
              {" "}
              <li className="nav-item">
                <Link className="nav-link" to={"/login"}>
                  Login
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/register"}>
                  Register
                </Link>
              </li>{" "}
            </>
          )}
          {/* <li className="nav-item">
            <a href="#" className="nav-link active" aria-current="page">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link">
              Features
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link">
              Pricing
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link">
              FAQs
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link">
              About
            </a>
          </li> */}
        </ul>
      </header>
    </div>
  );
}

export default Navbar