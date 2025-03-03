import React, { useEffect, useState } from "react";
import BaseAPI from "../helpers/BaseAPI";
import toast from "react-hot-toast";
import { useLocation, useParams } from "react-router-dom";

const useUser = ({username}) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  async function fetchUser() {
    setLoading(true);
    setError(null);
    try {
      const response = await BaseAPI.get(`/user/${username}`);
      setUser(response.data.data);
    } catch (error) {
      setError(error);
      toast.error("Failed to fetch users.");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchUser();
  }, [username]); // Add usersUpdated as a dependency

  return [user, loading, error];
};

export default useUser;
