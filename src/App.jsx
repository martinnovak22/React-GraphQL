import React from "react";
import "../src/styles/tailwind.css";

import { Routes, Route } from "react-router-dom";
import { Characters } from "./screens/Characters.tsx";
import { Home } from "./screens/Home.tsx";
import { NavBar } from "./components/NavBar.tsx";
import { Episodes } from "./screens/Episodes.tsx";
import { Locations } from "./screens/Locations.tsx";

const App = () => {
  return (
    <>
      <NavBar />
      <div className="pt-16">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/characters" element={<Characters />} />
          <Route path="/episodes" element={<Episodes />} />
          <Route path="/locations" element={<Locations />} />
        </Routes>
      </div>
    </>
  );
};

export default App;
