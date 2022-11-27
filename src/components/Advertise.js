import { useQuery } from "@tanstack/react-query";
import React from "react";
import AdvertisedItems from "./AdvertisedItems";

const Advertise = () => {
  const { data: advertises = [] } = useQuery({
    queryKey: ["addProducts"],
    queryFn: async () => {
      const res = await fetch(`http://localhost:5000/advertises`);
      const data = await res.json();

      return data;
    },
  });

  console.log(advertises.length);

  return (
    <div className="max-w-[1400px] mx-auto">
      {advertises?.length > 0 ? (
        <>
          <h1 className="text-5xl my-8 font-bold text-center">
            <span className="text-[#e0c83d]">Advertise Items</span>
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {advertises.map((advertise) => (
              <AdvertisedItems key={advertise._id} advertise={advertise} />
            ))}
          </div>
        </>
      ) : (
        " "
      )}
    </div>
  );
};

export default Advertise;
