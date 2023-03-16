import React from "react";
import { toast } from "react-hot-toast";
import { useLoaderData, useNavigation } from "react-router-dom";
import aircon from "../../assets/air-con.svg";
import bodyType from "../../assets/body-type.svg";
import driveType from "../../assets/drive-type.svg";
import engine from "../../assets/engine.svg";
import fuelType from "../../assets/fuel-type.svg";
import gearbox from "../../assets/gearbox.svg";
import mileage from "../../assets/mileage.svg";
import year from "../../assets/year.svg";

const ProductDetails = () => {
  const singleProduct = useLoaderData();
  const { img, _id, sellerImg, sellerName, email, resalePrice } = singleProduct;
  console.log(singleProduct)
  const navigation = useNavigation();
  // report product
  const handleReport = (id) => {
    fetch(`${process.env.REACT_APP_API_URL}/products/${id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ report: true }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        toast.error("Successfully report this product");
      });
  };


  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-3 grid-cols-1 gap-8">
          {/* Car Featured */}
          <div className="lg:col-span-2 col-span-1">
            <figure>
              <img
                className="w-full h-[225px] md:h-[400px] lg:h-[500px]"
                src={img}
                alt="car!"
              />
            </figure>

            <div className="grid xl:grid-cols-4 lg:grid-cols-4 grid-cols-2 bg__drop">
              <div className="vehicle__propertie">
                <img src={engine} alt="Engine" />
                <div>
                  <span className="text-[#a5a5a5] text-xs uppercase">
                    Engine
                  </span>
                  <h4 className="font-medium xl:text-xl text-xl lg:text-lg text-secondary">
                    1.5 L
                  </h4>
                </div>
              </div>
              <div className="vehicle__propertie">
                <img src={gearbox} alt="Gearbox" />
                <div>
                  <span className="text-[#a5a5a5] text-xs uppercase">
                    Gearbox
                  </span>
                  <h4 className="font-medium xl:text-xl text-xl lg:text-lg text-secondary">
                    Automatic
                  </h4>
                </div>
              </div>
              <div className="vehicle__propertie">
                <img src={mileage} alt="Mileage" />
                <div>
                  <span className="text-[#a5a5a5] text-xs uppercase">
                    Mileage
                  </span>
                  <h4 className="font-medium xl:text-xl text-xl lg:text-lg text-secondary">
                    65,000 Km
                  </h4>
                </div>
              </div>
              <div className="vehicle__propertie">
                <img src={year} alt="Year" />
                <div>
                  <span className="text-[#a5a5a5] text-xs uppercase">Year</span>
                  <h4 className="font-medium xl:text-xl text-xl lg:text-lg text-secondary">
                    2006
                  </h4>
                </div>
              </div>
              <div className="vehicle__propertie">
                <img src={bodyType} alt="Body type" />
                <div>
                  <span className="text-[#a5a5a5] text-xs uppercase">
                    Body type
                  </span>
                  <h4 className="font-medium xl:text-xl text-xl lg:text-lg text-secondary">
                    Sedan
                  </h4>
                </div>
              </div>
              <div className="vehicle__propertie">
                <img src={fuelType} alt="Fuel Type" />
                <div>
                  <span className="text-[#a5a5a5] text-xs uppercase">
                    Fuel Type
                  </span>
                  <h4 className="font-medium xl:text-xl text-xl lg:text-lg text-secondary">
                    1.5 L
                  </h4>
                </div>
              </div>
              <div className="vehicle__propertie">
                <img src={aircon} alt="Air Con" />
                <div>
                  <span className="text-[#a5a5a5] text-xs uppercase">
                    Air Con
                  </span>
                  <h4 className="font-medium xl:text-xl text-xl lg:text-lg text-secondary">
                    Yes
                  </h4>
                </div>
              </div>
              <div className="vehicle__propertie">
                <img src={driveType} alt="Drive Type" />
                <div>
                  <span className="text-[#a5a5a5] text-xs uppercase">
                    Drive Type
                  </span>
                  <h4 className="font-medium xl:text-xl text-xl lg:text-lg text-secondary">
                    Right
                  </h4>
                </div>
              </div>
            </div>

            <div className="bg__drop mt-5 px-5 py-6">
              <h5 className="text-lg text-secondary mb-3 font-semibold">
                Seller comment
              </h5>
              <p className=" text-secondary font-light">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Ducimus iste explicabo nostrum libero rerum nihil. Animi cumque
                deserunt modi nihil sapiente excepturi sed adipisci sint ullam,
                cupiditate eligendi nemo vitae?
              </p>
            </div>
          </div>

          {/* User Information */}
          <div className="">
            <div className="bg__drop shadow-md text-primary font-bold text-2xl text-center p-8">
              Price: $ {resalePrice}
            </div>
            <div className="mt-5 bg__drop p-8  shadow-md">
              <div className="inline-flex items-center mb-5">
                <img
                  className="rounded-full h-[100px] w-[100px]"
                  src={sellerImg}
                  alt="Ferdous Munir"
                />
                <div className="ml-3">
                  <h4 className="text-xl text-secondary">{sellerName}</h4>
                  <span>{email}</span>
                </div>
              </div>
              {/* <button className="btn btn-outline btn-error w-full rounded">
                Report this add
              </button> */}
              <button
                onClick={() => handleReport(_id)}
                className="btn btn-outline btn-error w-full rounded">

                Report
              </button>

              <button className="mt-5 btn btn-active btn-secondary w-full rounded">
                Book Now!
              </button>

              <label htmlFor="my-modal-3" className="btn">open modal</label>
            </div>
          </div>
        </div>
      </div>
      {/* MOdal content*/}
      <input type="checkbox" id="my-modal-3" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
          <h3 className="text-lg font-bold">Congratulations random Internet user!</h3>
          <p className="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
