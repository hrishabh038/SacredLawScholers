import { useState } from "react";
import BaseAPI from "../../helpers/BaseAPI";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const usePostUser = () => {
  const navigate = useNavigate()
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const postUser = async (data) => {
    setLoading(true);
    setError(null);
    try {
      const response = await BaseAPI.post(`/user/register`, data);
      setUser(response.data.data);
      toast.success(response.data.message);
      navigate("/auth/login")
    } catch (error) {
      setError(error);
      toast.error(error.response.data.message);
    } finally {
      setLoading(false);
    }
  };

  return [user, loading, error, postUser];
};

export default usePostUser;
