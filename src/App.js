import React from "react";
import About from "./components/About";
// import Contact from "./components/Contact";
import Nav from "./components/Nav";
// import Projects from "./components/Projects";
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <main>
      <Nav />
      <About />
      {/* <Projects />
      <Contact /> */}
    </main>
  );
}

export default App;
