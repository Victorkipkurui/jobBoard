import React, { useState, useEffect } from "react";
import Filters from "./Filters";
import JobCard from "../components/JobCard";
import Banner from "./Banner";
import JobDetailModal from "./jobModal";

const JobListings = () => {
  const [jobs, setJobs] = useState([]);
  const [selectedInput, setSelectedInput] = useState("All");
  const[selectedJob, setSelectedJob]= useState(null);
  const[isModalOpen, setIsModalOpen] =useState(false);
  const [selectedFilters, setSelectedFilters] = useState({
    jobTypes: [],
    remote: false,
    salaryRange: "",
    experience: [],
  });

  useEffect(() => {
    fetch('http://localhost:3000/jobs')
      .then(res => res.json())
      .then(data => {
        setJobs(data);
      })
      .catch(error => {
        console.error("Error fetching job data:", error);
      });
  }, []);

  const openModal = (job) => {
    setSelectedJob(job);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedJob(null);
    setIsModalOpen(false);
  };

  const handleInputChange = (event) => {
    setSelectedInput(event.target.value);
  };

  
  const filteredJobs = jobs.filter((job) => {
    const { jobTypes, remote, salaryRange, experience } = selectedFilters;

    // Filter by job type
    if (jobTypes.length && !jobTypes.includes(job.employmentType)) return false;

    // Filter by remote option
    if (remote && !job.remote) return false;

    // Filter by salary range
    if (salaryRange) {
      const salary = job.salary;
      switch (salaryRange) {
        case "lessThan1000":
          if (salary > 1000) return false;
          break;
        case "1000-1500":
          if (salary < 1000 || salary > 1500) return false;
          break;
        case "moreThan1500":
          if (salary < 1500) return false;
          break;
        default:
          break;
      }
    }

    // Filter by experience
    if (experience.length && !experience.includes(job.experienceLevel))
      return false;

    return true;
  });

  return (
    <div className="p-4 sm:p-8 lg:p-12">
      <div className="flex flex-col lg:flex-row lg:space-x-8">
        {/* Filters on the left */}
        <div className="w-full lg:w-1/4 mb-4 lg:mb-0">
          <Filters updateFilters={updateFilters} selectedFilters={selectedFilters} />
        </div>

        {/* Job Listings */}
        <div className="w-full lg:w-3/4">
          <div className="mb-4">
            <Banner selectedInput={selectedInput} handleInputChange={handleInputChange} />
          </div>
          <div className="flex flex-col lg:flex-row lg:justify-between items-center mb-4">
            <h2 className="text-xl lg:text-2xl font-semibold mb-2 lg:mb-0">
              Showing {filteredJobs.length} Jobs
            </h2>
            <div className="flex items-center space-x-4">
              <select className="border p-2 rounded bg-white text-gray-700">
                <option value="relevance">Sort by Relevance</option>
                <option value="date">Sort by Date</option>
              </select>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {filteredJobs.map((job, index) => (
              <JobCard key={index} job={job} openModal={openModal} closeModal={closeModal}/>
            ))}
          </div>
          <div>
            <JobDetailModal jobs={jobs} isModalOpen={isModalOpen} closeModal={closeModal}></JobDetailModal>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobListings;
