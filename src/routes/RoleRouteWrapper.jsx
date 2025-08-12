import React from "react";
import { Navigate, useLocation, useParams } from "react-router";
import { useAuth } from "../contexts/AuthContext";

export default function RoleRouteWrapper({ children }) {
  const { user } = useAuth();
  const location = useLocation();
  const params = useParams();

  if (!user) {
    return <Navigate to='/login' replace />;
  }

  const id = user?.matric_number || user?.teacher_id;
  const role = user?.role; // "student" or "teacher"

  // If URL doesn't already have the ID in the path, redirect with it
  if (!params.id) {
    return <Navigate to={`/${role}/${id}${location.pathname}`} replace />;
  }

  return children;
}
