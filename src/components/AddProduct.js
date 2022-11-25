import { format } from "date-fns";
import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { AuthContext } from "../contexts/AuthProvider";


const AddProduct = () => {
  // date: new Date()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { user } = useContext(AuthContext);

  const imageHostKey = process.env.REACT_APP_IMGBB_KEY;

  const currentDate = new Date();
  const time = currentDate.getHours() + ":" + currentDate.getMinutes();
  const date = format(currentDate, "PP");
  // const date = new Date();

  const handleAddProduct = (data) => {
    console.log(data);
    const image = data.image[0];
    const formData = new FormData();
    formData.append("image", image);
    const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`;
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imgData) => {
        console.log(imgData);
        if (imgData.success) {
          console.log(imgData.data.url);
          const products = {
            date,
            time,
            sellerName: user?.displayName,
            email: user?.email,
            title: data.title,
            category: data.category,
            resalePrice: data.resalePrice,
            originalPrice: data.price,
            uses: data.uses,
            location: data.location,
            status: data.status,
            img: imgData.data.url,
            description: data.description,
          };
          console.log(products);
          //save information to the database
          fetch("http://localhost:5000/products", {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(products),
          })
            .then((res) => res.json())
            .then((result) => {
              console.log(result);
              toast.success(`${data.name} is added successfully`);
            });
        }
      });
  };

  return (
    <div>
      <div>
        <h2 className="text-2xl mb-6 text-[#000000]  font-medium">
          Add a New Product
        </h2>
        <div className="">
          <form onSubmit={handleSubmit(handleAddProduct)}>
            <div className="md:flex items-start justify-between">
              <div className="form-control w-full md:mr-3 mb-2">
                <label className="label py-1">
                  {" "}
                  <span className="label-text font-semibold text-[#383838] mb-[10px] text-[14px]">
                    Title
                  </span>
                </label>
                <input
                  type="text"
                  {...register("title", {
                    required: "Title is required",
                  })}
                  className="input input-bordered w-full"
                />
              </div>
              <div className="form-control md:mr-3 w-full mb-4">
                <label className="label py-1">
                  {" "}
                  <span className="label-text font-semibold mb-[10px] text-[#383838] text-[14px]">
                    Product Category
                  </span>
                </label>
                <select
                  {...register("category", {
                    required: "Category is required",
                  })}
                  className="select select-bordered w-full"
                >
                  <option value="bmw">BMW</option>
                  <option value="lexus">LEXUS</option>
                  <option value="toyota">TOYOTA</option>
                </select>
              </div>
            </div>
            <div className="md:flex items-start justify-between">
              <div className="form-control w-full md:mr-3 mb-2">
                <label className="label py-1">
                  {" "}
                  <span className="label-text font-semibold text-[#383838] mb-[10px] text-[14px]">
                    Resale Price
                  </span>
                </label>
                <input
                  type="text"
                  {...register("resalePrice", {
                    required: "Resale is required",
                  })}
                  className="input input-bordered w-full"
                />
              </div>
              <div className="form-control w-full mb-4">
                <label className="label py-1">
                  {" "}
                  <span className="label-text font-semibold mb-[10px] text-[#383838] text-[14px]">
                    Original Price
                  </span>
                </label>
                <input
                  type="text"
                  {...register("price", {
                    required: "Price is required",
                  })}
                  className="input input-bordered w-full"
                />
              </div>
            </div>
            <div className="md:flex items-start justify-between">
              <div className="form-control w-full md:mr-3 mb-2">
                <label className="label py-1">
                  {" "}
                  <span className="label-text font-semibold text-[#383838] mb-[10px] text-[14px]">
                    Uses
                  </span>
                </label>
                <input
                  type="text"
                  {...register("uses", {
                    required: "uses is required",
                  })}
                  className="input input-bordered w-full"
                />
              </div>
              <div className="form-control w-full mb-4">
                <label className="label py-1">
                  {" "}
                  <span className="label-text font-semibold mb-[10px] text-[#383838] text-[14px]">
                    Location
                  </span>
                </label>
                <input
                  type="text"
                  {...register("location", {
                    required: "Price is required",
                  })}
                  className="input input-bordered w-full"
                />
              </div>
            </div>
            <div className="md:flex items-start justify-between">
              <div className="form-control w-full md:mr-3 mb-2">
                <label className="label py-1">
                  {" "}
                  <span className="label-text font-semibold text-[#383838] mb-[10px] text-[14px]">
                    Status
                  </span>
                </label>
                <input
                  type="text"
                  {...register("status")}
                  className="input input-bordered w-full"
                />
              </div>
              <div className="form-control w-full  mb-2">
                <label className="label py-1">
                  {" "}
                  <span className="label-text font-semibold text-[#383838] mb-[10px] text-[14px]">
                    Photo
                  </span>
                </label>
                <input
                  type="file"
                  {...register("image", {
                    required: "Photo is required",
                  })}
                  className="input input-bordered w-full"
                />
                {errors.image && (
                  <p className="text-red-600">{errors.image?.message}</p>
                )}
              </div>
            </div>
            <div className="md:flex items-start justify-between">
              <div className="form-control md:mr-3 w-full mb-4">
                <label className="label py-1">
                  {" "}
                  <span className="label-text font-semibold mb-[10px] text-[#383838] text-[14px]">
                    Description
                  </span>
                </label>
                <textarea
                  type="textarea"
                  {...register("description", {
                    required: "Description is required",
                  })}
                  className="input input-bordered w-full"
                />
              </div>
            </div>
            <input
              className="btn btn-accent mt-8 text-white w-full"
              value="Add Product"
              type="submit"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
