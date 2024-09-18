import React, { useState } from "react";

const Filters = () => {
  const [remote, setRemote] = useState(false);
  
  return (
    <div className="p-4 w-52 bg-white rounded-lg shadow-md ml-7">
      <div className="flex justify-between border-b-2 mb-4">
      <h3 className="text-lg font-semibold mb-4">Filter</h3>
      <h3 className="text-lg font-semibold mb-4 text-blue">Clear All</h3>
      </div>
      {/* Job Type */}
      <div className="mb-6">
        <h4 className="font-medium mb-2">Job Type</h4>
        <div className="flex flex-col space-y-2">
          {["Contract", "Full-Time", "Part-Time", "Internship"].map((type) => (
            <label key={type} className="flex items-center">
              <input type="checkbox" className="form-checkbox mr-2" />
              {type}
            </label>
          ))}
        </div>
      </div>

      {/* Remote Switch */}
      <div className="mb-6">
        <h4 className="font-medium mb-2">Open to remote</h4>
        <label className="inline-flex items-center">
          <input
            type="checkbox"
            checked={remote}
            onChange={() => setRemote(!remote)}
            className="form-checkbox mr-2"
          />
          {remote ? "Yes" : "No"}
        </label>
      </div>

      {/* Salary Range */}
      <div className="mb-6">
        <h4 className="font-medium mb-2">Range Salary</h4>
        <div className="space-y-2">
          <label className="flex items-center">
            <input type="radio" name="salary" className="form-radio mr-2" />
            Less than $1000
          </label>
          <label className="flex items-center">
            <input type="radio" name="salary" className="form-radio mr-2" />
            $1000 - $1500
          </label>
          <label className="flex items-center">
            <input type="radio" name="salary" className="form-radio mr-2" />
            More than $1500
          </label>

          {/* Custom Salary Range */}
          <div className="flex items-center space-x-2">
            <input
              type="number"
              placeholder="Min"
              className="border p-2 w-20 rounded"
            />
            <span>-</span>
            <input
              type="number"
              placeholder="Max"
              className="border p-2 w-20 rounded"
            />
          </div>
        </div>
      </div>

      {/* Experience */}
      <div className="mb-6">
        <h4 className="font-medium mb-2">Experience</h4>
        <div className="space-y-2">
          {["Less than a year", "1-3 years", "More than 5 years"].map(
            (exp) => (
              <label key={exp} className="flex items-center">
                <input type="checkbox" className="form-checkbox mr-2" />
                {exp}
              </label>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default Filters;
