import React from "react";

const JobCard = ({ job, openModal }) => {
  
  return (
    <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
      <div className="flex items-center mb-4">
        <img src={job.companyLogo} alt="Company Logo" className="w-12 h-12 mr-4"/>
        <div>
          <h3 className="text-xl font-semibold">{job.jobTitle}</h3>
          <p className="text-gray-500">{job.companyName}</p>
        </div>
      </div>
      <p className="text-gray-700 mb-2">
        {job.jobLocation} | {job.employmentType} | {job.experienceLevel}
      </p>
      <p className="text-gray-700">Salary: {job.minPrice} - {job.maxPrice}</p>
      <p className="text-gray-500">Date posted: {job.postingDate}</p>
      <button className="mt-4 bg-blue text-white px-4 py-2 rounded"  onClick={() => openModal(job)}>
        View Details
      </button>
    </div>
  );
};

export default JobCard;
