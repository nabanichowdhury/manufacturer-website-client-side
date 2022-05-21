import React from "react";
import robo from "../../assets/robo.png";
import drone from "../../assets/drone.png";
import car from "../../assets/car.png";

const Tools = () => {
  const tools = [
    {
      img: "https://i.ibb.co/TrDJfFz/Untitled-design-3.png",
      name: "Robot Internal Part",
      price: "12$",
      des: "",
      minimumOrder: "45",
      availableQuantity: "1000",
    },
    {
      img: "https://i.ibb.co/KzwRKCp/Untitled-design-2.png",
      price: "12$",
      name: "Drone Internal Part",
      des: "",
      minimumOrder: "45",
      availableQuantity: "1000",
    },
    {
      img: "https://i.ibb.co/PDzV6C1/Untitled-design-1.png",
      price: "12$",
      name: "Car Internal Part",
      des: "",
      minimumOrder: "45",
      availableQuantity: "1000",
    },
  ];
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
                  <button class="btn btn-primary">Order Now</button>
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
