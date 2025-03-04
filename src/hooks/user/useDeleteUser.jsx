import { useState } from "react";
import BaseAPI from "../../helpers/BaseAPI";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const useDeleteUser = () => {
  const navigate = useNavigate()
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const deleteUser = async (username) => {
    setLoading(true);
    setError(null);
    try {
      const response = await BaseAPI.delete(`/user/${username}`);
      setUser(response.data.data);
      toast.success(response.data.message);
      navigate("/user-management")
    } catch (error) {
      setError(error);
      toast.error(error.response.data.message);
    } finally {
      setLoading(false);
    }
  };

  return [user, loading, error, deleteUser];
};

export default useDeleteUser;
