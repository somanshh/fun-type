import React from 'react';

interface ProfileProps {
  username: string ;
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
            MY Profile
          </h2>
        </div>
        <div className="bg-gray-800 p-4 rounded-lg shadow-lg">
          <div className="mt-8 text-sm">
            <div className="flex flex-col justify-center items-center">
              <img
                className="w-32 h-32 rounded-full mb-4"
                src="https://picsum.photos/id/237/200/200"
                alt="Profile"
              />
              <div className="text-xl font-medium mb-2">{username}</div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gray-700 p-4 rounded-lg shadow-md">
                <div className="text-gray-300 font-medium mb-2">Email</div>
                <div className="text-gray-400">{email}</div>
              </div>
              <div className="bg-gray-700 p-4 rounded-lg shadow-md">
                <div className="text-gray-300 font-medium mb-2">Date Joined</div>
                <div className="text-gray-400">{dateJoined}</div>
              </div>
            </div>
            {/* other information */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
