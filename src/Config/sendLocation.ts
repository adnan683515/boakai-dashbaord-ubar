


import { useLocation } from "react-router";

export const dashboardTitleOptions: {
  [key: string]: { title: string; subtitle: string };
} = {
  "/": {
    title: "Dashboard Overview",
    subtitle: "Welcome back! Here's what's happening today."
  },
  "/riders": {
    title: "Rider Management",
    subtitle: "View and manage all registered riders"
  },
  "/drivers": {
    title: "Driver Management",
    subtitle: "View and manage all registered drivers"
  },
  "/documents": {
    title: "Document Verification",
    subtitle: "Track and verify driver compliance documents"
  },
  "/enrollments": {
    title: "Enrollment Forms",
    subtitle: "Register new riders and drivers using the official forms"
  },
  "/uploads": {
    title: "Document Upload Center",
    subtitle: "Upload documents anytime for drivers and riders"
  }
};

export function useDashboardTitle() {
  const location = useLocation();
  const path = location?.pathname as string;

  // Return the corresponding title and subtitle based on the current path
  const currentTitle = dashboardTitleOptions[path] || {
    title: "Page Not Found",
    subtitle: "The page you are looking for doesn't exist."
  };

  return currentTitle;
}