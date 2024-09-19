import React, { useState } from 'react';

const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    // Handle sign-up logic here
    console.log('Signup details:', { name, email, password });
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center text-gray-700">Sign Up</h2>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label className="block text-sm font-medium text-gray-600">Name</label>
            <input
              type="text"
              className="w-full px-4 py-2 mt-2 border rounded-md focus:ring focus:ring-blue-200"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-600">Email</label>
            <input
              type="email"
              className="w-full px-4 py-2 mt-2 border rounded-md focus:ring focus:ring-blue-200"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-600">Password</label>
            <input
              type="password"
              className="w-full px-4 py-2 mt-2 border rounded-md focus:ring focus:ring-blue-200"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-600">Confirm Password</label>
            <input
              type="password"
              className="w-full px-4 py-2 mt-2 border rounded-md focus:ring focus:ring-blue-200"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600"
          >
            Sign Up
          </button>
        </form>
        <div className="text-center text-sm text-gray-600">
          Already have an account? <a href="/login" className="text-blue-500">Login</a>
        </div>
      </div>
    </div>
  );
};

export default Signup;