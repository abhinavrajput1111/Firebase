import React, { useEffect } from "react";
import Signup from "./Signup";
import Login from "./Login";
import { auth } from "./firebase";
import {useNavigate} from "react-router-dom"

function Home() {

    const navigate = useNavigate();


    return <>
        <Signup />
        <Login />
  </>;
}

export default Home;
