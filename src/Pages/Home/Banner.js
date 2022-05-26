import React from "react";
import banner from "../../assets/banner.png";

const Banner = () => {
  return (
    <div>
      <div class="hero min-h-screen bg-base-200">
        <div class="hero-content flex-col flex-wrap lg:flex-row-reverse">
          <img src={banner} class="max-w-sm rounded-lg shadow-2xl" />
          <div>
            <h1 class="text-5xl font-bold">
              All You Need To Make A Robot Is Here...
            </h1>
            <p class="py-9">
              Robots are used in manufacturing to take on repetitive tasks,
              which streamlines the overall assembly workflow. Robots also
              collaborate with humans for product production. Many jobs are
              dangerous or include high volumes of materials, which can be
              harmful to human workers
            </p>
            <button class="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
