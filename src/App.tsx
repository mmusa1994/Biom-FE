import React from "react";
import { Banner, NavigationDesktop } from "./containers";
import { MeeTBiom } from "./containers";

import Kitchen from "./assets/kitchen.png";
import MeetBiomBG from "./assets/maskBiom.png";

import "./App.css";

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
        <MeeTBiom image={MeetBiomBG} />
      </main>
      <footer></footer>
    </div>
  );
}

export default App;
