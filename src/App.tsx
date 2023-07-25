import React from "react";
import "./App.css";
import { Banner, NavigationDesktop } from "./components";
import Kitchen from "./assets/Kitchen_3.png";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavigationDesktop />
      </header>
      <main className="w-full flex flex-col justify-start items-center">
        <Banner
          title="So fresh. So green."
          description="We believe that a more eco-friendly everyday makes a happier you and me. We're on a mission to put sustainability in reach with better-for-the-planet wipes that are easy, effective, and plastic-free."
          actionText="Get started"
          image={Kitchen}
        />
      </main>
      <footer></footer>
    </div>
  );
}

export default App;
