import React from "react";

const ContactUs = () => {
  return (
    <div>
      <h1 className="text-3xl text-center text-secondary mt-10">
        {" "}
        Always ask your doubt from us
      </h1>
      <div className="w-20 h-1 bg-secondary mx-auto my-6"></div>
      <div class="hero min-h-screen bg-base-200">
        <div class="hero-content flex-col lg:flex-row-reverse">
          <div class="text-center lg:text-left ">
            <h1 class="text-5xl font-bold">Contact Us</h1>
            <p class="py-6">
              To access our all the services please contact us .We will give you
              full support to access our tools and make them.And free homke
              delivery is also available for you..
            </p>
          </div>
          <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div class="card-body">
              <div class="form-control">
                <label class="label">
                  <span class="label-text">Email</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter your email"
                  class="input input-bordered"
                />
              </div>
              <div class="form-control">
                <label class="label">
                  <span class="label-text">Query</span>
                </label>
                <textarea
                  class="textarea textarea-bordered"
                  placeholder="Enter your Query"
                ></textarea>
              </div>
              <div class="form-control mt-6">
                <button class="btn btn-primary">SUbmit</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
