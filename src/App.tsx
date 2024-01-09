import { useState } from "react";
import "./App.css";
import Footer from "./components/Footer";
import { ColorContext } from "./extras/ColorContext";
import UpMenu from "./components/UpMenu";
import Particle from "./components/Particle";
import Home from "./pages/HomePage";
import SimpleIntro from "./components/SimpleIntro";

function App() {
  const [color, setColor] = useState<string>("");
  const handleColorChange = (color: string) => {
    setColor(color);
  };

  return (
    <div className="overflow-hidden">
      <UpMenu />
      <SimpleIntro
        tag="FREE TOOL"
        heading="Powerful Semantic Parser"
        subtitle="Scrap HTML of Any Website"
        btntext="Scrap Websites"
      />
      <ColorContext.Provider
        value={{
          color: color,
          setColor: handleColorChange,
        }}
      >
        <Home />
      </ColorContext.Provider>

      <Footer />
    </div>
  );
}

export default App;
