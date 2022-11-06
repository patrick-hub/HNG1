import React from "react";
import { Routes, Route } from "react-router-dom";
import App from "../App";
import Contact from "./contact";

function Home () {
  return (

    <Routes>
        <Route path='/' element={<App />}></Route>
        <Route path='/contact' element={<Contact />}></Route>

    </Routes>
  )
};

export default Home
