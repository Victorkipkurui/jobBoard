import React from 'react';

const JobDetailModal = ({ jobs, isModalOpen, closeModal }) => {
  if (!isModalOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-lg w-11/12 md:w-3/4 lg:w-2/3 xl:w-1/2 max-h-screen overflow-y-auto">
        <div className="p-6 flex justify-between items-center border-b">
          <h2 className="text-2xl font-semibold">{jobs.jobTitle}</h2>
          <button onClick={closeModal} className="text-gray-500 hover:text-red-500">
            &times;
          </button>
        </div>
        <div className="p-6 grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Left Column - Job Details */}
          <div className="lg:col-span-3">
            <div className="mb-4">
              <img src={job.companyLogo} alt="Company Logo" className="h-12 w-12 rounded-full"/>
              <div className="mt-2 text-gray-600">{job.company} - {job.location}</div>
              <div className="text-gray-600">{job.jobType} - {job.experienceLevel}</div>
            </div>
            <p className="mb-4 text-gray-700">{job.description}</p>
            
            <h3 className="text-lg font-semibold mt-4 mb-2">Qualification</h3>
            <ul className="list-disc pl-5 text-gray-700">
              {job.qualifications.map((qualification, index) => (
                <li key={index}>{qualification}</li>
              ))}
            </ul>
            
            <h3 className="text-lg font-semibold mt-4 mb-2">Responsibilities</h3>
            <ul className="list-disc pl-5 text-gray-700">
              {job.responsibilities.map((responsibility, index) => (
                <li key={index}>{responsibility}</li>
              ))}
            </ul>

            <div className="mt-6 flex space-x-4">
              {job.attachments.map((attachment, index) => (
                <div key={index} className="bg-gray-100 p-4 rounded-lg">
                  <img src={attachment.image} alt="Attachment" className="h-20 w-20"/>
                  <p className="text-sm mt-2">{attachment.name}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Similar Jobs and Other Jobs */}
          <div className="lg:col-span-1">
            <div>
              <h3 className="text-lg font-semibold mb-2">Similar Jobs</h3>
              <div className="space-y-4">
                {job.similarJobs.map((similarJob, index) => (
                  <div key={index} className="p-4 border rounded-lg">
                    <h4 className="text-md font-semibold">{similarJob.title}</h4>
                    <div className="text-gray-600">{similarJob.company} - {similarJob.location}</div>
                    <div className="text-sm text-gray-500">{similarJob.type}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6">
              <h3 className="text-lg font-semibold mb-2">Other Jobs from {job.company}</h3>
              <div className="space-y-4">
                {job.otherJobs.map((otherJob, index) => (
                  <div key={index} className="p-4 border rounded-lg">
                    <h4 className="text-md font-semibold">{otherJob.title}</h4>
                    <div className="text-gray-600">{otherJob.location}</div>
                    <div className="text-sm text-gray-500">{otherJob.type}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="p-6 border-t flex justify-end">
          <button className="bg-blue-500 text-white px-4 py-2 rounded-lg" onClick={() => window.location.href = job.applyLink}>
            Apply Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default JobDetailModal;
