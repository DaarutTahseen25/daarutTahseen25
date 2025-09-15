import { useState, useEffect } from "react";
import api from "../../utils/api";

export const useGetUsers = ({ page = 1, limit = 10, role, search } = {}) => {
  const [users, setUsers] = useState([]);
  const [pagination, setPagination] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const controller = new AbortController();

    const fetchUsers = async () => {
      setIsLoading(true);
      try {
        const params = new URLSearchParams({
          page,
          limit,
          ...(role ? { role } : {}),
          ...(search ? { search } : {}),
        });

        const res = await api.get(`/auth/users?${params.toString()}`, {
          signal: controller.signal,
          withCredentials: true,
        });
        console.log(res?.data?.data?.users);

        setUsers(res?.data?.data?.users);
        setPagination(res.data.data.pagination);
      } catch (err) {
        if (err.name !== "CanceledError") {
          console.error("Failed to fetch users:", err);
          setError(err);
        }
      } finally {
        setIsLoading(false);
      }
    };

    fetchUsers();
    return () => controller.abort();
  }, [page, limit, role, search]);

  return { users, pagination, isLoading, error, setUsers };
};
