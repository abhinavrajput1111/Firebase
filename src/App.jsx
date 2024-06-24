// import Home from "./Home";

import Home from "./Home";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Homepage from "./Homepage";
import Login from "./Login";
import Signup from "./Signup";

function App() {
  return (
    <>

      <BrowserRouter>
     
        <Routes>
          <Route path="/" element={<Home />} /> 
          <Route path="/Homepage" element={<Homepage />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Signup" element={<Signup />} /> 
      </Routes> 
      </BrowserRouter>
</>
  );
}

export default App;
