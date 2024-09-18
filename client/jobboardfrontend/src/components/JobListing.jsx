import React, { useState, useEffect } from "react";
import Filters from "./Filters";
import JobCard from "./Jobcard";

const JobListings = () => {
  const [jobs, setJobs] = useState([]); // Initialize with an empty array

  useEffect(() => {
    fetch('http://localhost:8000/jobs')
      .then(res => res.json())
      .then(data => {
        setJobs(data); // Update state with the fetched jobs
      })
      .catch(error => {
        console.error("Error fetching job data:", error);
      });
  }, []);

  return (
    <div className="p-8">
      <div className="flex space-x-8">
        {/* Filters on the left */}
        <div className="w-1/4">
          <Filters />
        </div>

        {/* Job Listings */}
        <div className="w-3/4">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-semibold">
              Showing {jobs.length} Jobs
            </h2>
            <div className="flex items-center space-x-4">
              <input
                type="text"
                placeholder="Search jobs..."
                className="border p-2 rounded w-64"
              />
              <select className="border p-2 rounded">
                <option value="relevance">Sort by Relevance</option>
                <option value="date">Sort by Date</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {jobs.map((job, index) => (
              <JobCard key={index} job={job} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobListings;
