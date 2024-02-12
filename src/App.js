import React from "react";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Home from "./Pages/Home";

import TrackVisibility from "react-on-screen";

function App() {
  return (
    <>
      <TrackVisibility>
        <header>
          <Header />
        </header>
        <main>
          <Home />
        </main>
        <footer>
          <Footer />
        </footer>
      </TrackVisibility>
    </>
  );
}

export default App;
