import React, { useState } from "react";
import About from "./components/About";
import Header from "./components/Header";
import Contact from "./components/Contact";
import Nav from "./components/Nav";
import Projects from "./components/Projects";
import Resume from "./components/Resume";
import Footer from "./components/Footer";
import 'bootstrap/dist/css/bootstrap.min.css';




function App() {
  const [currentPage, setCurrentPage] = useState("About")

  function renderPage() {
    if (currentPage === "About") {
      return <About />;

    } else if (currentPage === "Contact") {
      return <Contact />;

    } else if (currentPage === "Projects") {
      return <Projects />;

    } else if (currentPage === "Resume") {
      return <Resume />
    }
  }

  return (
    <main>
      <Nav setCurrentPage={setCurrentPage} />
      <Header />

      {renderPage()}
      <Footer></Footer>
    </main>
  );
}

export default App;
