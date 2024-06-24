import React from "react";
import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebase";
// import {useNavigate} "./browser-router-dom"
// import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import {useNavigate} from "react-router-dom"

function Signup() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
    // const navigate = useNavigate();
    
    
  const signup = async (e) => {
    e.preventDefault();

    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
      );
      console.log(userCredential);
// navigate("/Login")
  };
  return (
    <>
          <div>
              <h1 className="text-center text-3xl">Sign Up</h1>
        <div className="">
          <form
            onSubmit={signup}
            className="w-full m-10 p-10"
          >
            <input
              type="text"
              placeholder="Enter Your Name here"
              onChange={(e) => {
                setName(e.target.value);
              }}
              value={name}
              className="border-2 w-[40%] py-1"
            />
            <br />
            <br />

            <input
              type="text"
              placeholder="Enter Your EMAIL here"
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
              className="mt-5 border-2 px-20 py-2 bg-slate-50 hover:bg-green-500 hover:text-white"
            />
          </form>
        </div>
      </div>
    </>
  );
}

export default Signup;
