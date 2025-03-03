import React, { useState } from "react";
import {useGetAllUsers} from "../hooks/hooks";
import { Loading } from "../components/components";
import { Link, useNavigate } from "react-router-dom";

const UserManagement = () => {
  const [userUpdated, setUserUpdated] = useState(false);
  const [users, loading, error] = useGetAllUsers(userUpdated);

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-xl sm:text-3xl font-bold text-center text-gray-800 mb-6">
        User Management
      </h1>

      {loading ? (
        <Loading />
      ) : error ? (
        <div className="text-red-600 text-center">Error: {error.message}</div>
      ) : users?.length > 0 ? (
        <div className="bg-gray-50 rounded-lg border border-gray-200 overflow-x-auto">
          <table className="w-full whitespace-nowrap">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">
                  Username
                </th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">
                  Email
                </th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">
                  Full Name
                </th>
                <th className="px-4 py-3 text-right text-sm font-semibold text-gray-700 w-fit">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <UserRow user={user} key={index} />
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="text-gray-600 text-center">No users found.</div>
      )}
    </div>
  );
};

const UserRow = ({ user }) => {
  const navigate = useNavigate();
  return (
    <tr className="border-b border-gray-100 last:border-b-0 hover:bg-gray-100 transition-colors">
      <td className="px-4 py-3 text-sm text-gray-800 whitespace-nowrap">
        <Link
          className="text-blue-600 hover:text-blue-800 hover:underline"
          to={`/profile/${user.username}`}
        >
          {user.username}
        </Link>
      </td>
      <td className="px-4 py-3 text-sm text-gray-600 whitespace-nowrap">
        {user.email_address}
      </td>
      <td className="px-4 py-3 text-sm text-gray-600 whitespace-nowrap">
        {user.full_name}
      </td>
      <td className="px-4 py-3 text-right space-x-2 w-fit whitespace-nowrap">
        <button className="text-sm text-blue-600 hover:text-blue-800">
          Edit
        </button>
        <button className="text-sm text-red-600 hover:text-red-800">
          Delete
        </button>
      </td>
    </tr>
  );
};

export default UserManagement;
