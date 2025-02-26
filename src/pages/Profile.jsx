import React from 'react';
import {CardsContainer} from '../components/components';
import dataPopulaiton from '../metadata';

const Profile = () => {
  // Sample user data
  const user = {
    name: 'Hrishabh Jain',
    username: '@hrishabh038',
    avatar: 'https://via.placeholder.com/150',
    bio: 'Software Developer | Open Source Enthusiast | Coffee Lover ☕',
  };

  // Sample blog data
  const blogs = [
    {
      id: 1,
      title: 'Getting Started with React',
      description:
        'Learn the basics of React and how to build your first application.',
    },
    {
      id: 2,
      title: 'Mastering Tailwind CSS',
      description:
        'A comprehensive guide to using Tailwind CSS for modern web development.',
    },
    {
      id: 3,
      title: 'Building REST APIs with Node.js',
      description:
        'Step-by-step guide to creating RESTful APIs using Node.js and Express.',
    },
  ];

  // Button handlers
  const handleDeleteAccount = () => {
    alert('Account deletion requested!');
  };

  const handleLogout = () => {
    alert('Logged out!');
  };

  return (
    <>
      {/* Profile Section */}
      <div>
        <div className="flex flex-col items-center space-y-4">

          {/* Name and Username */}
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-800">{user.name}</h1>
            <p className="text-sm text-gray-500">{user.username}</p>
          </div>

          {/* Bio */}
          <p className="text-center text-gray-600">{user.bio}</p>

          {/* Buttons */}
          <div className="flex gap-4">
            <button
              onClick={handleDeleteAccount}
              className="px-4 py-2 text-sm font-semibold text-white bg-red-600 rounded hover:bg-red-700 transition duration-300 cursor-pointer"
            >
              Delete Account
            </button>
            <button
              onClick={handleLogout}
              className="px-4 py-2 text-sm font-semibold text-gray-700 bg-gray-200 rounded hover:bg-gray-300 transition duration-300 cursor-pointer"
            >
              Logout
            </button>
          </div>
        </div>
      </div>

    <div className='w-full h-[1px] bg-neutral-200 my-10'></div>
      {/* Blogs Section */}
      <CardsContainer blogs={dataPopulaiton.blogPosts} />
    </>
  );
};

export default Profile;