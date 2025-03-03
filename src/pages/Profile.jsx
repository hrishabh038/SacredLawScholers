import React, { useState } from "react";
import { CardsContainer, PageLoading } from "../components/components";
import dataPopulaiton from "../metadata";
import { useParams } from "react-router-dom";
import { useGetUser } from "../hooks/hooks";

const Profile = () => {
  const { username } = useParams();
  const [user, loading, error] = useGetUser({ username: username });
  const [activeTab, setActiveTab] = useState("published"); // State for active tab

  // Button handlers
  const handleEditProfile = () => {
    alert("Edit profile clicked!");
  };

  const handleDeleteAccount = () => {
    alert("Delete account clicked!");
  };

  if (loading) {
    return <PageLoading />;
  }

  if (error) {
    return (
      <div className="text-center text-red-600 py-10">
        Error: {error.message}
      </div>
    );
  }

  return (
    <div className=" flex flex-col gap-8 w-full">
      <div className="flex flex-col items-center md:items-start  gap-6">
        <div className="flex flex-col md:flex-row items-center gap-6">
          <div className="flex flex-col md:flex-row items-center gap-4">
            <div className="rounded-full border border-gray-200 w-20 h-20 bg-gray-100 flex items-center justify-center text-gray-500 font-semibold text-lg">
              AM
            </div>
            <div className="text-sm flex flex-col items-center md:items-start gap-1">
              <p className="font-semibold text-gray-500">@{user?.username}</p>
              <p className="text-xl md:text-2xl font-bold">{user?.full_name}</p>
              <p className="font-semibold text-gray-400">{user?.email_address}</p>
            </div>
          </div>

          <div className="bg-gray-200 h-[1px] md:h-[100px] w-[100px] md:w-[1px]"></div>

          <div className="flex gap-4 ">
            <div className="flex flex-col items-center">
              <p className="text-3xl">26</p>
              <p className="text-sm text-gray-400">Published Blogs</p>
            </div>
            <div className="flex flex-col items-center">
              <p className="text-3xl">13</p>
              <p className="text-sm text-gray-400">Under Review Blogs</p>
            </div>
          </div>
        </div>

        <p className="text-lg text-gray-600 text-center md:text-start">
          {user?.bio}
        </p>

        <div className="w-fit flex gap-2">
          <div className=" text-sm px-2 py-1 rounded bg-blue-500 text-white hover:bg-blue-700 cursor-pointer">
            Edit Profile
          </div>
          <div className=" text-sm px-2 py-1 rounded bg-red-500 text-white hover:bg-red -700 cursor-pointer">
            Delete Account
          </div>
        </div>
      </div>
      <div className="border-y border-gray-200 flex items-center justify-center gap-4 p-2 text-gray-500">
        <div className="cursor-pointer text-black font-semibold">Published Blogs</div>
        <div className="cursor-pointer hover:text-black">
          Under Review Blogs
        </div>
      </div>
      <CardsContainer blogs={dataPopulaiton.blogPosts} />
    </div>
  );
};

export default Profile;
