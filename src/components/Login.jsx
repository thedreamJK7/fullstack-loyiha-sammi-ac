import React from 'react'
import Input from '../ui/Input';
import Tesla from '../assets/tesla.png'
import { useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { signStart, signSuccess, signFailure } from "../counter/CounterSlice";
import AuthService from '../service/Auth';
import Validation from './validation';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const { isLoading } = useSelector( state => state.auth)
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const loginnn = async (e) => {
      e.preventDefault()
      dispatch(signStart());
      const user = {
        email: name,
        password
      }
      try {
        const response = await AuthService.userLogin(user);
        dispatch(signSuccess(response))
        navigate('/')
      } catch (error) {
        dispatch(signFailure(error.response.data.errors));
      }
    }
  return (
    <div className="d-flex align-items-center py-4 bg-body-tertiary text-center">
      <main className="form-signin w-50 m-auto">
        <form>
          <img className="mb-4" src={Tesla} alt="" width="200" />
          <h1 className="h3 mb-3 fw-normal">Please sign in</h1>
          <Validation />
          <Input
            type="email"
            label="Email address"
            placeholder="John Doe"
            setState={setName}
            state={name}
          />
          <Input
            type="password"
            label="Password"
            placeholder="Password"
            setState={setPassword}
            state={password}
          />
          <button
            onClick={loginnn}
            disabled={isLoading}
            className="btn btn-primary w-100 py-2 mt-3"
            type="submit"
          >
            {isLoading ? "Loading..." : "Sign in"}
          </button>
          <p className="mt-5 mb-3 text-body-secondary">© 2017–2024</p>
        </form>
      </main>
    </div>
  );
}

export default Login