import React from 'react'
import Tesla from '../assets/tesla.png'
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { remove } from '../helpers/persistnce-storage';
import { signOut } from '../counter/CounterSlice';

const Navbar = () => {
  const { isLoggedIn, user } = useSelector((state) => state.auth);
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const logOut = () => {
    remove('token')
    dispatch(signOut());
    navigate('/')
    console.log('Logout');
  }
  return (
    <div className="container">
      <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
        <Link
          to={"/"}
          className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none"
        >
          <img src={Tesla} alt="Tesla" style={{ width: "200px" }} />
        </Link>
        <ul className="nav nav-pills d-flex align-items-center">
          {isLoggedIn ? (
            <>
              <li className="nav-item">
                <h1 className='m-0'>{user.user.username}</h1>
              </li>
              <li className="nav-item mx-3">
                <button className="btn btn-success" onClick={logOut}>Log Out</button>
              </li>
            </>
          ) : (
            <>
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
        </ul>
      </header>
    </div>
  );
}

export default Navbar