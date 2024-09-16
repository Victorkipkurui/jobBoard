import React, { useEffect, useState } from "react";
import axios from "axios";

const JobListings = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const fetchJobs = async () => {
      const response = await axios.get("http://localhost:8000/jobs/");
      setJobs(response.data);
    };
    fetchJobs();
  }, []);

  return (
    <div>
      <h1>Job Listings</h1>
      <ul>
        {jobs.map((job) => (
          <li key={job.id}>
            <h3>{job.title}</h3>
            <p>{job.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default JobListings;
