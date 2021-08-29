import React from "react";
import img2 from '../../images/selfie.jpg'

export default function About() {
  return (
    <section id="About">
      
      <div class="d-flex p-2 bd-highlight">
    
          <img src={img2} class="image" alt="selfie"></img>
          

          <p className="mb-8 leading-relaxed">
          Sed ac metus fermentum nisi lacinia sodales. 
          Nullam porta tristique justo et laoreet. 
          Vestibulum pulvinar, purus a finibus commodo, 
          quam lectus imperdiet arcu, vel sollicitudin augue ligula quis 
          lorem. Nunc vehicula lectus nec quam interdum, 
          vitae mattis sapien iaculis. Duis et dui sed lorem hendrerit 
          sollicitudin. Donec ut justo tincidunt, finibus nisi ut, 
          fringilla augue. Donec a nibh nec libero pellentesque semper 
          et vel lacus. Integer quis magna quam
          </p>
      </div>
    </section>
  );
}