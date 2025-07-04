import "./App.css";
import React, { useState } from "react";
import Navbar from "./Navbar";
import About from "./components/About";
import Event from "./Event";
import TextForm from "./components/TextForm";

// import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";

// import About from "./components/About";
// import StatePrc from "./StatePrc";
// import ShowText from "./ShowText";
// import { InputField } from "./components/InputField";
function App() {
  const [mode, setMode] = useState("light");

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#333";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
    }
  };
  return (
    <>
      <Navbar
        title="My App"
        aboutText="About Us"
        TextForm="Safah" //if i don't want props
        mode="light"
        toggleMode={toggleMode}
      />
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/textform" element={<TextForm />} />
        <Route path="/event" element={<Event />} />
      </Routes>
    </>
  );
}

export default App;

