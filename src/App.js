
import React, { useState, useEffect } from "react"
import "./App.css";
import { Switch, Route, BrowserRouter, Routes } from "react-router-dom";
import UserProfile from "./screens/UserProfile";
import Home from "./screens/Home";


function App() {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    const res = await fetch("https://panorbit.in/api/users.json");
    const resJson = await res.json();
    setData(resJson);

  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home data={data} />} />
        <Route exact path="/view/:id" element={<UserProfile data={data} />} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
