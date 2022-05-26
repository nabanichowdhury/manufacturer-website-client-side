import React, { useEffect, useState } from "react";
import robo from "../../assets/robo.png";
import drone from "../../assets/drone.png";
import car from "../../assets/car.png";
import { Link, useNavigate } from "react-router-dom";

const Tools = () => {
  const [tools, setTools] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    fetch("https://polar-ocean-58245.herokuapp.com/parts")
      .then((res) => res.json())
      .then((data) => setTools(data));
  }, []);
  const handleToolDetails = (id) => {
    navigate(`/purchase/${id}`);
  };
  return (
    <div>
      <h1 className="text-3xl text-primary text-center m-5">
        Our most famous Tools
      </h1>
      <div className="flex">
        {tools.map((tool) => (
          <div>
            <div class="card w-85 bg-neutral shadow-xl mx-4">
              <figure class="px-10 pt-8">
                <img src={tool.img} alt="Shoes" class="rounded-xl" />
              </figure>
              <div class="card-body items-center text-center">
                <h2 class="card-title">{tool.name}</h2>
                <p>{tool.des}</p>
                <p className="font-bold">Price:{tool.price}</p>
                <p className="font-bold">Minimum Order:{tool.minimumOrder}</p>
                <p className="font-bold">
                  Available Quantity:{tool.availableQuantity}
                </p>

                <div class="card-actions">
                  <button
                    class="btn btn-primary"
                    onClick={() => handleToolDetails(tool._id)}
                  >
                    Order Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tools;
