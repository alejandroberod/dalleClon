import React, { useState, useContext } from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";

import { logo, darkLogo } from "./assets";
import { Home, CreatePost } from "./pages";
import Language from "./components/Language";
import { ThemeContext } from "./store/ThemeContext";

export default function App() {
  const [selected, setSelected] = useState("es");
  const { theme, toggleTheme } = useContext(ThemeContext);
  console.log(theme);

  return (
    <BrowserRouter>
      <header className="w-full flex justify-between items-center bg-white dark:bg-[#1A1A1A] sm:px-8 px-4 py-4 border-b border-b-[#e6ebf4] dark:border-b-[#2A2A2A]">
        <Link to="/">
          <img src={theme === 'light' ? logo : darkLogo} alt="logo" className="w-28 object-contain" />
        </Link>
        {/* <div className="flex justify-center gap-3">
          <Language lng="en" isSelected={selected === "en"} onClick={() => setSelected("en")}/>
          <Language lng="es" isSelected={selected === "es"} onClick={() => setSelected("es")}/>
        </div> */}
        <Link
          to="/create-post"
          className="font-inter font-medium bg-[#FF2F61] dark:bg-transparent dark:border-[#FF2F61] border-2 dark:hover:bg-[#FF2F61] text-white px-4 py-2 rounded-md"
        >
          Create
        </Link>
      </header>
      <main className="sm:p-8 px-4 py-8 w-full bg-[#f9fafe] dark:bg-[#121212] min-h-[calc(100vh-73px)]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create-post" element={<CreatePost />} />
        </Routes>
        <button className="w-11 h-11 bg-[#121212] dark:bg-[#f9fafe] rounded-full align-middle cursor-pointer fixed bottom-6 right-6 text-[#f9fafe] dark:text-[#121212]" onClick={toggleTheme}>
          {theme === "light" ? "DRK" : "LHT"}
        </button>
      </main>
    </BrowserRouter>
  );
}
