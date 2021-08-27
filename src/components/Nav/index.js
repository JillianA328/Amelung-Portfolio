import React from "react";
// import img1 from "../../images/hero1";

export default function Navbar() {
  return (
<nav class="navbar navbar-expand-lg navbar-light bg-light">
<div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="true" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarNav">

    <ul class="navbar-nav">

      <li class="nav-item active">
        <a class="nav-link" href="">About <span class="sr-only"></span></a>
      </li>

      <li class="nav-item">
        <a class="nav-link" href="">Projects</a>
      </li>

      <li class="nav-item">
        <a class="nav-link" href="">Contact</a>
      </li>
    </ul>
  </div>
  </div>
  </nav>

  );
}