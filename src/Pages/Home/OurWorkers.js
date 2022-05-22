import React from "react";

const OurWorkers = () => {
  return (
    <div>
      <h1 className="text-2xl text-secondary text-center mt-20">
        Our Expert Workers are working hard
      </h1>
      <div className="w-20 h-1 bg-secondary mx-auto my-6"></div>

      <div class="card lg:card-side bg-base-100 shadow-xl">
        <figure>
          <img
            className="w-96"
            src="https://i.ibb.co/sg8ztTH/rob-lambert-9-Q-p-LLP-jm-A-unsplash.jpg"
          />
        </figure>
        <div class="card-body p-4">
          <h2 class="text-2xl text-center text-secondary">
            Our Expert Workers
          </h2>
          <p className="text-accent">
            {" "}
            Knowledge workers are workers whose main capital is knowledge.
            Examples include programmers, physicians, pharmacists, architects,
            engineers, scientists, design thinkers, public accountants, lawyers,
            editors, and academics, whose job is to "think for a living".
          </p>
        </div>
      </div>
    </div>
  );
};

export default OurWorkers;
