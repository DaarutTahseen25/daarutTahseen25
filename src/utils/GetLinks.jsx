import { dashboardLinks } from "./sidebarConfig";

export const getDashboardSidebarLinks = (role, user) => {
  const isActive = user?.is_active ?? false;

  return (
    dashboardLinks
      // include only links for the current role
      .filter((item) => item.roles.includes(role))
      .map((item) => ({
        ...item,
        // pick the correct path for the role
        to: item.to[role],
        // keep the requiresLevel logic
        requiresLevel: item.requiresLevel ? isActive : false,
      }))
  );
};
