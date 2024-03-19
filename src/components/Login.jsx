import React from 'react'
import Input from '../ui/Input';
import Tesla from '../assets/tesla.png'
import { useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { loginUserStart } from "../counter/CounterSlice";

const Login = () => {
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const { isLoading } = useSelector( state => state.auth)
    const dispatch = useDispatch()
    const loginnn = (e) => {
      e.preventDefault()
      dispatch(loginUserStart())
    }
  return (
    <div className="d-flex align-items-center py-4 bg-body-tertiary text-center">
      <main className="form-signin w-50 m-auto">
        <form>
          <img className="mb-4" src={Tesla} alt="" width="200" />
          <h1 className="h3 mb-3 fw-normal">Please sign in</h1>
          <Input
            type="text"
            label="Username"
            placeholder="John Doe"
            getInfo={setName}
            state={name}
          />
          <Input
            type="password"
            label="Password"
            placeholder="Password"
            getInfo={setPassword}
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