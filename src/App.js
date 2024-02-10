import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import Dashboard from "./Pages/Dashboard";
import Navbar from "./components/Navbar";
import { useState } from "react";

function App() {

  const [isLoggedIn,setIsLoggedIn]=useState(false);

  return (
    <div className="w-screen min-h-screen bg-richblack-900 flex flex-col font-inter">

      <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>

      <Routes>

        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn}/>}/>
        <Route path="/signup" element={<Signup setIsLoggedIn={setIsLoggedIn}/>}/>
        <Route path="/dashboard" element={
          isLoggedIn?(<Dashboard/>):(<Navigate to='/login'/>)
        }/>

      </Routes>

    </div>
  );
}

export default App;
