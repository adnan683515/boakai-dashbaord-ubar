import { createBrowserRouter } from "react-router";
import MainLayout from "../Layout/MaiLayout";
import Dashboard from "../pages/DashboardHome/Dashboard";
import Documents from "../pages/Documents/Documents";
import Driver from "../pages/Drivers/Driver";
import Rider from "../pages/Riders/Rider";
import Enrollments from "../pages/Enrollments/Enrollments";
import Uploads from "../pages/Uploads/Uploads";
import UserAccount from "../pages/UserAccounts/UserAccount";
import Payments from "../pages/Payments/Payments";
import Notifications from "../pages/Notifications/Notifications";
import Reports from "../pages/Reports/Reports";
import RidesAndMonitoring from "../pages/RidesAndMonitoring/RidesAndMonitoring";
import Livemap from "../pages/LiveMap/Livemap";
import ManualDispatch from "../pages/ManualDispatch/ManualDispatch";
import Support from "../pages/Support/Support";
import Activity from "../pages/ActivityLog/Activity";
import Feedback from "../pages/Feedback/Feedback";
import SystemHealth from "../pages/SystemHealth/SystemHealth";
import Legal from "../pages/Legal/Legal";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                index: true,
                Component: Dashboard,
            },
            {
                path: "riders",
                Component: Rider,
            },
            {
                path: "drivers",
                Component: Driver,
            },
            {
                path: "documents",
                Component: Documents
            },
            {
                path: "enrollments",
                Component: Enrollments
            }, {
                path: 'uploads',
                Component: Uploads
            }, {
                path: 'useraccounts',
                Component: UserAccount
            }, {
                path: 'payments',
                Component: Payments
            }, {
                path: 'notifications',
                Component: Notifications
            },
            {
                path: 'reports',
                Component: Reports
            }, {
                path: 'ridesandmonitoring',
                Component: RidesAndMonitoring
            }, {
                path: 'livemap',
                Component: Livemap
            },
             {
                path: 'manualdispatch',
                Component: ManualDispatch
            },
             {
                path: 'support',
                Component: Support
            },
             {
                path: 'activitylog',
                Component: Activity
            },
             {
                path: 'feedback',
                Component: Feedback
            },
             {
                path: 'system-health',
                Component: SystemHealth
            },
             {
                path: 'legal',
                Component: Legal
            },
        ],
    },
]);