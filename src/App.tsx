import "./App.css";
import React from "react";
import { Route, Routes } from "react-router-dom";
import { Header } from "./components/Header";
import { Details } from "./pages/Details/Details";
import Home from "./pages/Home/Home";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/Details" element={<Details />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
