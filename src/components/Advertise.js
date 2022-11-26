import React, { useEffect, useState } from "react";
import AdvertisedItems from "./AdvertisedItems";

const Advertise = () => {
  const [advertises, setAdvertises] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/advertises")
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, []);
  console.log(advertises);
  
  return (
    <div>
      <h2 className="text-2xl mb-6 text-[#000000]  font-medium">
        Advertise Items
      </h2>
      <div>
        {advertises.map((advertise) => (
          <AdvertisedItems key={advertise._id} advertise={advertise} />
        ))}
      </div>
    </div>
  );
};

export default Advertise;
