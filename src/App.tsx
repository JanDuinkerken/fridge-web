import type { Component } from "solid-js";

import Fridges from "./components/Fridges";
import Navbar from "./components/Navbar";

const App: Component = () => {
  return (
    <div>
      <header>
        <Navbar />
      </header>
      <main>
        <Fridges />
      </main>
    </div>
  );
};

export default App;
