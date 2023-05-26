import React from 'react';

interface ProfileProps {
  username: string;
  email: string;
  dateJoined: string;
  // other user information...
}

const Profile: React.FC<ProfileProps> = ({ username, email, dateJoined }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-900 text-white">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-300">
            {username}'s Profile
          </h2>
        </div>
        <div className="bg-gray-800 p-4 rounded-lg shadow-lg">
          <div className="mt-8 text-sm">
            <div className="py-2">Username: {username}</div>
            <div className="py-2">Email: {email}</div>
            <div className="py-2">Date Joined: {dateJoined}</div>
            {/* other information */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
