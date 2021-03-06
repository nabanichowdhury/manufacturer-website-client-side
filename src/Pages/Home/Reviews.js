import React from "react";

const Reviews = () => {
  const reviews = [
    {
      img: "https://api.lorem.space/image/face?hash=88560",
      name: "Rolika Josul",
      desc: " Great work",
      location: "Florida",
    },
    {
      img: "https://api.lorem.space/image/face?hash=3174",
      name: "Kolin Eka",
      desc: "Nice Products",
      location: "Florida",
    },
    {
      img: "https://i.ibb.co/7pgVscK/joseph-gonzalez-i-Fg-Rcq-Hznqg-unsplash.jpg",
      name: "Telentu Ubantu",
      desc: "Qualityful products",
      location: "Florida",
    },
    {
      img: "https://api.lorem.space/image/face?hash=28212",
      name: "Ikole Jkil",
      desc: "Best equipment",
      location: "Florida",
    },
  ];
  return (
    <div>
      <h1 className="text-secondary text-center text-2xl m-5">
        Our Best Reviews
      </h1>
      <div className="w-20 h-1 bg-secondary mx-auto my-6 "></div>
      <div className="flex flex-wrap">
        {reviews.map((review) => (
          <div class="card w-80 bg-neutral text-neutral-content mx-5 ">
            <div class="card-body items-center text-center">
              <h2 class="card-title">{review.desc}</h2>
              <p>{review.name}</p>
              <div class="avatar">
                <div class="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                  <img
                    src="https://api.lorem.space/image/face?hash=92048"
                    alt="review"
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
