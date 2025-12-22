import { useEffect, useMemo, useState } from "react";
import { useGetUsers } from "../pages/Admin/useGetUsers";

const defaultStatusOptions = ["All", "Active", "Pending", "Suspended"];
const defaultLevelOptions = ["All", "Beginner", "Intermediate", "Advanced"];

const deriveStatusDefault = (user) => {
  if (user.is_verified) {
    return user.is_active ? "Active" : "Suspended";
  }
  return "Pending";
};

export function useUserTable({
  role,
  includeLevelFilter = false,
  pageSize = 5,
  statusOptions = defaultStatusOptions,
  levelOptions = defaultLevelOptions,
  deriveStatus = deriveStatusDefault,
}) {
  const { users, isLoading, setUsers } = useGetUsers({ role });

  const [search, setSearch] = useState("");
  const [filterLevel, setFilterLevel] = useState("All");
  const [filterStatus, setFilterStatus] = useState("All");
  const [sortConfig, setSortConfig] = useState({ key: null, direction: "asc" });
  const [currentPage, setCurrentPage] = useState(1);
  const [overlay, setOverlay] = useState({ type: null, entity: null });

  const openOverlay = (type, entity = null) => setOverlay({ type, entity });
  const closeOverlay = () => setOverlay({ type: null, entity: null });

  const handleDelete = (id) => {
    setUsers((prev) => prev.filter((item) => item._id !== id));
  };

  const handleAdd = (entity) => setUsers((prev) => [...prev, entity]);

  const handleUpdate = (updatedEntity) => {
    setUsers((prev) =>
      prev.map((item) =>
        item._id === updatedEntity._id ? updatedEntity : item
      )
    );
  };

  const toggleSort = (key) => {
    let direction = "asc";
    if (sortConfig.key === key && sortConfig.direction === "asc") {
      direction = "desc";
    }
    setSortConfig({ key, direction });
  };

  const filtered = useMemo(() => {
    return users
      .filter((user) => {
        const matchesSearch = user.full_name
          ?.toLowerCase()
          .includes(search.toLowerCase());

        const status = deriveStatus(user);
        const matchesStatus = filterStatus === "All" || status === filterStatus;

        const matchesLevel = includeLevelFilter
          ? filterLevel === "All" ||
            (user.level
              ? user.level.toLowerCase() === filterLevel.toLowerCase()
              : false)
          : true;

        return matchesSearch && matchesStatus && matchesLevel;
      })
      .sort((a, b) => {
        if (!sortConfig.key) return 0;

        const key = sortConfig.key;
        let aValue = a[key];
        let bValue = b[key];

        if (key === "status") {
          aValue = deriveStatus(a);
          bValue = deriveStatus(b);
        }

        if (key === "createdAt") {
          aValue = new Date(a.createdAt);
          bValue = new Date(b.createdAt);
        }

        if (key === "level") {
          const levelOrder = { beginner: 1, intermediate: 2, advanced: 3 };
          aValue = levelOrder[aValue?.toLowerCase()] || 0;
          bValue = levelOrder[bValue?.toLowerCase()] || 0;
        }

        if (aValue < bValue) return sortConfig.direction === "asc" ? -1 : 1;
        if (aValue > bValue) return sortConfig.direction === "asc" ? 1 : -1;
        return 0;
      });
  }, [
    users,
    search,
    filterLevel,
    filterStatus,
    includeLevelFilter,
    deriveStatus,
    sortConfig,
  ]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / pageSize));

  const currentData = useMemo(() => {
    const start = (currentPage - 1) * pageSize;
    return filtered.slice(start, start + pageSize);
  }, [filtered, currentPage, pageSize]);

  useEffect(() => {
    setCurrentPage(1);
  }, [search, filterLevel, filterStatus]);

  return {
    // data
    isLoading,
    filtered,
    currentData,
    totalPages,
    currentPage,
    setCurrentPage,
    pageSize,
    filteredCount: filtered.length,

    // filters
    search,
    setSearch,
    filterLevel,
    setFilterLevel,
    filterStatus,
    setFilterStatus,
    statusOptions,
    levelOptions,

    // sorting
    sortConfig,
    toggleSort,

    // overlay
    overlay,
    openOverlay,
    closeOverlay,

    // mutations
    handleDelete,
    handleAdd,
    handleUpdate,

    // helpers
    deriveStatus,
    includeLevelFilter,
  };
}
