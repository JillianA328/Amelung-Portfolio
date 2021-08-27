import React from "react";
import img2 from '../../images/selfie.jpg'
import hero from '../../images/hero1.jpg'

export default function About() {
  return (
    <section id="about">
      
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
        <div styles={{ backgroundImage: `url(${hero})`, height: "100%"}}></div>
          
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
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
        </div>
      </div>
      </div>
    </section>
  );
}