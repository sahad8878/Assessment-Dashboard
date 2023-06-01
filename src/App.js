import React, { useContext } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Dashboard from "./Pages/Dashboard";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Forgotpassword from "./Pages/Forgotpassword";
import {AuthContext} from './Context/AuthContext'
function App() {
  const {  user } = useContext(AuthContext);
  return (
    <Router>
      <Routes>
        <Route path="/" element={!user ?<Login /> : <Dashboard /> } />
        <Route path="/register" element={!user ?<Register />: <Dashboard />} />
        <Route path="/Forgotpassword" element={!user ?<Forgotpassword /> :<Dashboard />} />
        <Route path="/home" element={user ?<Dashboard /> : <Login />} />
      </Routes>
    </Router>
  );
}

export default App;
