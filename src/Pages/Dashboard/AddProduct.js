import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import Loading from "../Loading/Loading";

const AddProduct = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  // const { tools, isLoading } = useQuery("parts", () =>
  //   fetch("https://polar-ocean-58245.herokuapp.com/parts").then((res) => res.json())
  // );

  const [tools, setTools] = useState([]);

  useEffect(() => {
    fetch("https://polar-ocean-58245.herokuapp.com/parts")
      .then((res) => res.json())
      .then((data) => setTools(data));
  }, []);

  const image_storage_key = "a38224bea26e4b65fb7d431d40d3baaa";

  const onSubmit = async (data) => {
    console.log(data);
    const image = data.image[0];
    const formData = new FormData();
    formData.append("image", image);
    const url = `https://api.imgbb.com/1/upload?key=${image_storage_key}`;
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.success) {
          const img = result.data.url;
          const products = {
            name: data.name,
            price: data.price,
            availableQuantity: data.AvailableItems,
            minimumOrder: data.minimumItems,
            des: data.des,
            img: img,
          };

          //   send to your database

          fetch("https://polar-ocean-58245.herokuapp.com/parts", {
            method: "POST",
            headers: {
              "content-type": "application/json",
              authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
            body: JSON.stringify(products),
          })
            .then((res) => res.json())
            .then((inserted) => {
              if (inserted.insertedId) {
                toast.success("Product Added successfully");
              } else {
                toast.error("Failed to add doctor");
              }
            });
        }
        console.log(result);
      });
  };

  //   if (isLoading) {
  //     return <Loading></Loading>;
  //   }

  return (
    <div>
      <h1>Add a product:{tools?.length}</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div class="form-control w-full max-w-xs">
          <label class="label">
            <span class="label-text">Name</span>
          </label>

          <input
            name="name"
            type="text"
            placeholder="Name of Product"
            class="input input-bordered  max-w-xs"
            {...register("name", {
              required: {
                value: true,
                message: "Name is required",
              },
            })}
          />
        </div>
        <label class="label">
          {errors.name?.type === "required" && (
            <span class="label-text-alt text-red-500">
              {errors.name.message}
            </span>
          )}
        </label>
        <div class="form-control w-full max-w-xs">
          <label class="label">
            <span class="label-text">Price</span>
          </label>

          <input
            name="price"
            type="text"
            placeholder="Enter Price"
            class="input input-bordered  max-w-xs"
            {...register("price", {
              required: {
                value: true,
                message: "Price is required",
              },
            })}
          />
        </div>

        <div class="form-control w-full max-w-xs">
          <label class="label">
            <span class="label-text">Description</span>
          </label>
          <textarea
            name="des"
            type="text"
            placeholder="Add description"
            class="input input-bordered  max-w-xs"
            {...register("des", {
              required: {
                value: true,
                message: "Description is required",
              },
            })}
          />
          <label class="label">
            <span class="label-text">Available Items</span>
          </label>
          <input
            name="AvailableItems"
            type="text"
            placeholder="AvailableItems"
            class="input input-bordered  max-w-xs"
            {...register("AvailableItems", {
              required: {
                value: true,
                message: "Available items is required",
              },
            })}
          />
          <label class="label">
            <span class="label-text">Minimum Items</span>
          </label>
          <input
            name="minimumItems"
            type="text"
            placeholder="Minimum Items"
            class="input input-bordered  max-w-xs"
            {...register("minimumItems", {
              required: {
                value: true,
                message: "minimum items is required",
              },
            })}
          />

          <label class="label">
            <span class="label-text">Photo</span>
          </label>

          <input
            name="name"
            type="file"
            class="input input-bordered  max-w-xs"
            {...register("image", {
              required: {
                value: true,
                message: "Image is required",
              },
            })}
          />
        </div>

        <input
          value="Add"
          class="btn max-w-xs modal-button btn-primary w-full"
          type="submit"
        />
      </form>
    </div>
  );
};

export default AddProduct;
