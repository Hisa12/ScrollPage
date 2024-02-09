import React from "react";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Home from "./Pages/Home";
import Contact from "./Pages/Contact";
import Project from "./Pages/Project";
import PageNotFound from "./Pages/PageNotFound";

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
