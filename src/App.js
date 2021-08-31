import React, {useState} from "react";
import About from "./components/About";
import Hero from "./components/Hero";
import Contact from "./components/Contact";
import Nav from "./components/Nav";
import Projects from "./components/Projects";
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
const [currentPage, setCurrentPage] = useState("About")

  function renderPage() {
    if(currentPage === "About") {
      return <About />;

    } else  if(currentPage === "Contact") {
      return <Contact />;

    }else if(currentPage === "Projects") {
      return <Projects />;
    }
  }

  return (
    <main>
      <Nav setCurrentPage={setCurrentPage} />
      <Hero />

      {renderPage()}
    </main>
  );
}

export default App;
