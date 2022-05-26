import React from "react";
import trima2 from "../assets/trima2.png";

const MyPortfolio = () => {
  return (
    <div>
      <div class="hero min-h-screen bg-base-200">
        <div class="hero-content flex-col lg:flex-row">
          <img src={trima2} class="max-w-sm rounded-lg shadow-2xl" />
          <div>
            <h1 class="text-5xl font-bold text-purple-400">
              Hello I am Nabani!!!
            </h1>
            <p class="py-6">
              <h1 className="text-2xl  text-purple-400">
                Name: <span className="text-white"> Nabani Chowdhury</span>
              </h1>{" "}
              <h1 className="text-2xl  text-purple-400">
                Email:
                <span className="text-white">nabanichowdhury@gmail.com</span>
              </h1>
              <h1 className="text-2xl  text-purple-400">
                Educational Background:
              </h1>
              <h1 className="text-2xl text-white">
                <span className="text-purple-400 ">SSC:</span>2019 From
                Bangladesh Mohila Samity Girls' High School GPA-5
              </h1>
              <h1 className="text-2xl text-white">
                <span className="text-purple-400 ">Class 12th:</span> 2021 From
                NorthPoint Residensial School Siliguri with 94% in Boards.{" "}
              </h1>
              <h1 className="text-2xl text-white">
                At present 2025 Undergrad in Computer Science Specialization in
                Artificial Intelligence At Netaji Subhas University Of
                Technology Dwarka New Delhi.
              </h1>
              <h1 className="text-2xl text-white">
                <span className="text-purple-400">Skills:</span>
                HTML,CSS,FRAMEWORK:Bootstrap,tailwind,JAVASCRIPT,React.js,Firebase
                Authentication system,Learning basics of mongodb,nodejs and
                express
              </h1>
              <h2 className="text-2xl  text-purple-400">
                Link of my two recent project:
              </h2>
              <div className="text-xl text-primary">
                <a href="https://stupefied-ptolemy-d45e77.netlify.app/">
                  Responsive landing Page
                </a>
                <br />
                <a href="https://life-saviour-doctor.web.app/">
                  {" "}
                  Authentication system
                </a>
              </div>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyPortfolio;
