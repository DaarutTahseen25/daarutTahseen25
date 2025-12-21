import { dashboardLinks } from "./sidebarConfig";

export const getDashboardSidebarLinks = (role, user) => {
  const isActive = user?.is_active ?? false;

  return dashboardLinks
    .filter((item) => item.roles.includes(role))
    .map((item) => ({
      ...item,
      to: item.to[role],
      requiresLevel: item.requiresLevel ? isActive : false,
    }));
};
