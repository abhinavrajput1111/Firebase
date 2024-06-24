import React, { useEffect } from "react";
import { auth } from "./firebase";
import { useNavigate } from "react-router-dom";

function Homepage() {

    const navigate = useNavigate();

   useEffect(() => {
    if (auth.currentUser == null) {
      navigate("/login");
    }
  }, []);

    return (<>
        <div className="flex justify-center items-center mt-20  gap-20">
            <h1 className="text-4xl">This is a Homepage</h1>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSN2PJgpjJ1CqEXZFFj5Aer1DnMgLf0VtwQ0g&s" />
      </div>
  </>);
}

export default Homepage;
