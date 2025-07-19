import React from 'react';
import { useSelector } from 'react-redux';

const Account = () => {
  // Mock user data (replace this with real data via props, context, or API)
  const userDate=useSelector(state=>state.userInfo)

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-md">
        {/* Profile Image */}
        <div className="flex justify-center mb-6">
          <img
            src={user.profileImage}
            alt="Profile"
            className="w-24 h-24 rounded-full border-4 border-blue-500 shadow-md object-cover"
          />
        </div>

        {/* User Info */}
        <div className="text-center">
          <h2 className="text-2xl font-semibold text-gray-800">{user.name}</h2>
          <p className="text-gray-500 mb-4">{user.email}</p>
        </div>

        <div className="space-y-4 text-sm text-gray-700">
          <div className="flex justify-between border-b pb-2">
            <span className="font-medium">Phone:</span>
            <span>{user.phone}</span>
          </div>
          <div className="flex justify-between border-b pb-2">
            <span className="font-medium">Address:</span>
            <span>{user.address}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Account;
