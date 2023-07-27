import React from "react";
import {
  ADPanels,
  Banner,
  BiomTypes,
  BiomWipes,
  Footer,
  Gallery,
  NavigationDesktop,
  NavigationMobile,
  Video,
} from "./containers";
import { MeeTBiom } from "./containers";
import { SERVICES } from "./mock/services";
import { PANELS } from "./mock/panels";
import { BIN_TYPES } from "./mock/bin-types";

import Kitchen from "./assets/kitchen.png";
import MeetBiomBG from "./assets/maskBiom.png";

import "./App.css";
import TestimonialCarousel from "./containers/TestimonialsCarousel/TestimonialsCarousel";
import { TESTIMONIALS } from "./mock/testimonials";
import { ADVANTAGES } from "./mock/advantages";
import { GALLERY } from "./mock/gallery";

function App() {
  return (
    <div className="App">
      <NavigationDesktop />
      <main className="w-full flex flex-col justify-start items-center mb-5 lg:mb-0">
        <Banner
          title="So fresh. So green."
          description="We believe that a more eco-friendly everyday makes a happier you and me. We're on a mission to put sustainability in reach with better-for-the-planet wipes that are easy, effective, and plastic-free."
          actionText="Get started"
          image={Kitchen}
        />
        <MeeTBiom
          image={MeetBiomBG}
          title="THE BIOM DISPENSER"
          subtitle="Redefine your experience of clean."
          description="A quality engineered wipes dispenser that looks beautiful in your home, making better habits for your home and planet always within reach."
          listOfServices={SERVICES}
        />
        <ADPanels
          title={"when you need it."}
          subtitle={"where you need it"}
          panels={PANELS}
        />
        <BiomTypes
          message="Ready to start wiping out waste?"
          types={BIN_TYPES}
        />
        <TestimonialCarousel
          title="WHAT PEOPLE ARE SAYING"
          slides={TESTIMONIALS}
        />
        <BiomWipes
          listOfAdvantages={ADVANTAGES}
          title="BIOM WIPES"
          subtitle="Better for you, and the planet."
          description="The experience of clean should feel amazing. In a time when we're constantly sanitizing, it can be damaging to our hands and skins. We decided to load our wipes with Aloe to take care of you, while you take care of your home."
        />
        <Video
          title="CLEANING OUR OCEANS WITH EVERY WIPE"
          subtitle="Wipes have plastic in them. We don't."
          description="We reinvented wipes to cut out all the bad stuff —like single-use plastic that hurts the environment, and toxic chemicals that don’t belong in our oceans (or in our homes)."
          actionText="LEARN MORE"
          video="/videos/ocean.mp4"
        />
        <Gallery pictures={GALLERY} />
      </main>
      <NavigationMobile />
      <Footer />
    </div>
  );
}

export default App;
