import { useQuery } from "@tanstack/react-query";
import React from "react";
import { toast } from "react-hot-toast";

const ReportedItems = () => {
  const {
    data: reportItems = [],
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["reportItem"],
    queryFn: async () => {
      const res = await fetch(`http://localhost:5000/report`);
      const data = await res.json();
      return data;
    },
  });

  if (isLoading) {
    return (
      <div className="h-[800px] flex justify-center items-center">
        <div className="w-16 text-center h-16 border-4 border-dashed rounded-full animate-spin border-violet-800"></div>
      </div>
    );
  }

  const handleDelete = (id) => {
    fetch(`http://localhost:5000/report/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          refetch();
          toast.success("Delete report item");
        }
      });
  };

  return (
    <div>
      <h1 className="text-5xl my-8 font-bold text-center">
        <span className="text-[#e0c83d]">Reported Items</span>
      </h1>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {reportItems?.map((reportItem) => (
          <div
            key={reportItem._id}
            className="card card-compact bg-base-100 shadow-xl"
          >
            <figure>
              <img src={reportItem.img} alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Name: {reportItem.title}</h2>
              <h2 className="card-title">Category: {reportItem.category}</h2>
              <p>
                Date: {reportItem.date} Time: {reportItem.time}
              </p>
              <p>Date: {reportItem.location}</p>
              <p>Seller Name: {reportItem.sellerName} </p>
              <p>Email: {reportItem.email} </p>
              <p>Original Price: {reportItem.originalPrice}</p>
              <p>Resale Price: {reportItem.resalePrice}</p>
              <p>Use: {reportItem.uses} year/month</p>
              <p>status: {reportItem.status}</p>
              <p>Relevant Info: {reportItem.relevantInfo}</p>
              <p>{reportItem.description}</p>
              <div className="card-actions justify-between">
                <button
                  onClick={() => handleDelete(reportItem._id)}
                  className="btn btn-primary"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReportedItems;
