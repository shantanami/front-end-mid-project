import React from "react";
import Profile from "./components/Profile";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Interests from "./components/Interests";
import Photography from "./components/Photography";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div>
      <Profile />
      <Skills />
      <Education />
      <Interests />
      <Photography />
      <Footer />
    </div>
  );
};

export default App;
