/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebase";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const logIn = (e) => {
    e.preventDefault();
    try {
      signInWithEmailAndPassword(auth, email, password)
        .then(alert("welcome"))
        .then(navigate("/Homepage"));
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <div>
        <h1 className="text-center text-3xl">Log IN</h1>
        <div className="">
          <form onSubmit={logIn} className="w-full m-10 p-10">
            <input
              type="text"
              placeholder="Enter Your Name here"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              value={email}
              className="border-2 w-[40%] py-1"
            />
            <br />
            <br />
            <input
              type="password"
              placeholder="Enter Your Password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              className="border-2 w-[40%] py-1"
            />
            <br />
            <input
              type="submit"
              className="mt-5 border-2 px-3 py-1 bg-slate-50 hover:bg-green-500 hover:text-white"
            />
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;
