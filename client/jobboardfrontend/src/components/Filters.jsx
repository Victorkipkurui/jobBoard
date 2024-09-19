import React, { useState } from "react";

const Filters = ({ updateFilters, selectedFilters }) => {
  const [isRemote, setIsRemote] = useState(selectedFilters.remote);

  const handleFilterChange = (key, value) => {
    updateFilters(key, value);
  };

  const handleRemoteToggle = () => {
    const newRemoteStatus = !isRemote;
    setIsRemote(newRemoteStatus);
    handleFilterChange("remote", newRemoteStatus);
  };

  return (
    <div className="p-4 w-52 bg-white rounded-lg shadow-md ml-7">
      <div className="flex justify-between border-b-2 mb-4">
        <h3 className="text-lg font-semibold mb-4">Filter</h3>
        <button
          className="text-lg font-semibold mb-4 text-blue"
          onClick={() => handleFilterChange("reset")}
        >
          Clear All
        </button>
      </div>
      
      {/* Job Type Filter */}
      <div className="mb-6">
        <h4 className="font-medium mb-2">Job Type</h4>
        <div className="flex flex-col space-y-2">
          {["Contract", "Full-Time", "Part-Time", "Internship"].map((type) => (
            <label key={type} className="flex items-center">
              <input
                type="checkbox"
                className="form-checkbox mr-2"
                checked={selectedFilters.jobTypes.includes(type)}
                onChange={() => handleFilterChange("jobTypes", type)}
              />
              {type}
            </label>
          ))}
        </div>
      </div>

      {/* Remote Option */}
      <div className="mb-6">
        <h4 className="font-medium mb-2">Open to Remote</h4>
        <label className="inline-flex items-center">
          <input
            type="checkbox"
            checked={isRemote}
            onChange={handleRemoteToggle}
            className="form-checkbox mr-2"
          />
          {isRemote ? "Yes" : "No"}
        </label>
      </div>

      {/* Salary Range Filter */}
      <div className="mb-6">
        <h4 className="font-medium mb-2">Salary Range</h4>
        <div className="space-y-2">
          {[
            { label: "Less than $1000", value: "lessThan1000" },
            { label: "$1000 - $1500", value: "1000-1500" },
            { label: "More than $1500", value: "moreThan1500" }
          ].map((option) => (
            <label key={option.value} className="flex items-center">
              <input
                type="radio"
                name="salary"
                className="form-radio mr-2"
                checked={selectedFilters.salaryRange === option.value}
                onChange={() => handleFilterChange("salaryRange", option.value)}
              />
              {option.label}
            </label>
          ))}
        </div>
      </div>

      {/* Experience Filter */}
      <div className="mb-6">
        <h4 className="font-medium mb-2">Experience</h4>
        <div className="space-y-2">
          {["Less than a year", "1-3 years", "More than 5 years"].map((exp) => (
            <label key={exp} className="flex items-center">
              <input
                type="checkbox"
                className="form-checkbox mr-2"
                checked={selectedFilters.experience.includes(exp)}
                onChange={() => handleFilterChange("experience", exp)}
              />
              {exp}
            </label>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Filters;
