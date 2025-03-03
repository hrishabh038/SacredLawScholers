import React, { useState } from "react";
import { CardsContainer, PageLoading } from "../components/components";
import dataPopulaiton from "../metadata";
import { useParams } from "react-router-dom";
import { useUser } from "../hooks/hooks";

const Profile = () => {
  const { username } = useParams();
  const [user, loading, error] = useUser({ username: username });
  const [activeTab, setActiveTab] = useState("published"); // State for active tab

  // Button handlers
  const handleEditProfile = () => {
    alert("Edit profile clicked!");
  };

  const handleDeleteAccount = () => {
    alert("Delete account clicked!");
  };

  if (loading) {
    return (
     <PageLoading />
    );
  }

  if (error) {
    return (
      <div className="text-center text-red-600 py-10">
        Error: {error.message}
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center w-full">
      {/* Profile Header */}
      <div className="flex flex-col md:flex-row items-center md:items-start gap-4 border border-gray-200 p-4 w-fit">
        {/* Avatar, Name, and Email */}
        <div className="flex flex-col items-center space-y-4">
          {/* Profile Picture */}
          <div className="w-24 h-24 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden">
            {user?.profile_picture ? (
              <img
                src={user.profile_picture}
                alt="Profile"
                className="w-full h-full object-cover"
              />
            ) : (
              <span className="text-3xl text-gray-500">
                {user?.full_name?.charAt(0).toUpperCase()}
              </span>
            )}
          </div>

          {/* Name and Email */}
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-900">
              {user?.full_name}
            </h1>
            <p className="text-sm text-gray-600">{user?.email_address}</p>
          </div>
        </div>

        {/* User Details */}
        <div className="flex flex-col items-center md:items-start gap-4">
          <h1 className="font-semibold text-2xl">@{user?.username}</h1>
          {/* Stats */}
          <div className="flex space-x-8">
            <div className="text-center">
              <span className="text-xl font-bold text-gray-900">24</span>
              <p className="text-sm text-gray-600">Published Blogs</p>
            </div>
            <div className="text-center">
              <span className="text-xl font-bold text-gray-900">3</span>
              <p className="text-sm text-gray-600">Under Approval Blogs</p>
            </div>
          </div>

          {/* Bio */}
          {user?.bio && (
            <p className="text-gray-600">{user.bio}</p>
          )}

          {/* Edit and Delete Buttons */}
          <div className="flex space-x-4">
            <button
              onClick={handleEditProfile}
              className="px-6 py-2 text-sm font-semibold text-white bg-blue-500 rounded-lg hover:bg-blue-600 transition duration-300 cursor-pointer"
            >
              Edit Profile
            </button>
            <button
              onClick={handleDeleteAccount}
              className="px-6 py-2 text-sm font-semibold text-white bg-red-500 rounded-lg hover:bg-red-600 transition duration-300 cursor-pointer"
            >
              Delete Account
            </button>
          </div>
        </div>
      </div>

      {/* Content Tabs */}
      <div className="flex justify-center space-x-6 bg-gray-100 my-10 w-full">
        <button
          onClick={() => setActiveTab("published")}
          className={`py-2 text-sm font-semibold ${
            activeTab === "published"
              ? "text-blue-500 border-b-2 border-blue-500"
              : "text-gray-500 hover:text-gray-700"
          }`}
        >
          Published Blogs
        </button>
        <button
          onClick={() => setActiveTab("pending")}
          className={`py-2 text-sm font-semibold ${
            activeTab === "pending"
              ? "text-blue-500 border-b-2 border-blue-500"
              : "text-gray-500 hover:text-gray-700"
          }`}
        >
          Under Approval Blogs
        </button>
      </div>

      {/* Content Section */}
      <div className="mt-10">
        {activeTab === "published" ? (
          <CardsContainer
            blogs={dataPopulaiton.blogPosts.filter(
              (blog) => blog.status === "approved"
            )}
          />
        ) : (
          <CardsContainer
            blogs={dataPopulaiton.blogPosts.filter(
              (blog) => blog.status === "pending"
            )}
          />
        )}
      </div>
    </div>
  );
};

export default Profile;
