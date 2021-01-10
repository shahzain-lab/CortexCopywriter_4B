import React from "react";
import { Header } from "./components/Header";
import { Body } from "./components/Body";
import "./App.css";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div>
      <header>
        <Header />
      </header>
      <section>
        <Body />
        <Footer />
      </section>
    </div>
  );
}

export default App;
