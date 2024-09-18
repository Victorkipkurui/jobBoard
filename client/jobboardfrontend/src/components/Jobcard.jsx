import React from "react";

const JobCard = ({ job }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <div className="flex">
      <div>{job.companyLogo}</div>
      <h3 className="text-xl font-semibold">{job.jobTitle}</h3>
      </div>
      <p className="text-gray-500">{job.companyName}</p>
      <p className="text-gray-700">
        {job.jobLocation} | {job.employmentType} | {job.experienceLevel}
      </p>
      <p>Date posted: {job.postingDate} </p>
      <p>Min Price: {job.minPrice} | Max Price: {job.maxPrice}</p>
       <p> Salary Type: {job.salaryType}</p>
   
      <button className="mt-4 bg-blue text-white px-4 py-2 rounded">
        Apply Now
      </button>
    </div>
  );
};

export default JobCard;
