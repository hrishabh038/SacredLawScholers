import React, { useEffect, useState } from "react";
import BaseAPI from "../helpers/BaseAPI";
import toast from "react-hot-toast";

const useAllUsers = (usersUpdated) => {
  const [users, setUsers] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  async function fetchUsers() {
    setLoading(true);
    setError(null);
    try {
      const response = await BaseAPI.get(`/user/`);
      setUsers(response.data.data);
    } catch (error) {
      setError(error);
      toast.error("Failed to fetch users.");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchUsers();
  }, [usersUpdated]); // Add usersUpdated as a dependency

  return [ users, loading, error ];
};

export default useAllUsers;
