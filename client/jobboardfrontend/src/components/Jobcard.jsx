import React from "react";

const Jobcard = ({ job }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h3 className="text-xl font-semibold">{job.title}</h3>
      <p className="text-gray-500">{job.company}</p>
      <p className="text-gray-700">
        {job.location} | {job.type}
      </p>
      <p className="text-green-600 font-semibold mt-2">${job.salary}/month</p>
      <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded">
        Apply Now
      </button>
    </div>
  );
};

export default Jobcard;
