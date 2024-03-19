import React, { useState } from "react";
import Tesla from "../assets/tesla.png";
import Input from "../ui/Input";
import { useDispatch, useSelector } from "react-redux";
import { registerUserStart } from "../counter/CounterSlice";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { isLoading } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const loginnn = (e) => {
    e.preventDefault();
    dispatch(registerUserStart());
  };
  return (
    <div className="d-flex align-items-center py-4 bg-body-tertiary text-center">
      <main className="form-signin w-50 m-auto">
        <form>
          <img className="mb-4" src={Tesla} alt="" width="200" />
          <h1 className="h3 mb-3 fw-normal">Please Register</h1>
          <Input
            type="text"
            label="Username"
            placeholder="John Doe"
            getInfo={setName}
            state={name}
          />
          <Input
            type="email"
            label="Email address"
            placeholder="name@example.com"
            getInfo={setEmail}
            state={email}
          />
          <Input
            type="password"
            label="Password"
            placeholder="Password"
            getInfo={setPassword}
            state={password}
          />
          <button
            disabled={isLoading}
            onClick={loginnn}
            className="btn btn-primary w-100 py-2 mt-3"
            type="submit"
          >
            {isLoading ? "Loading..." : "Register"}
          </button>
          <p className="mt-5 mb-3 text-body-secondary">© 2017–2024</p>
        </form>
      </main>
    </div>
  );
};

export default Register;
