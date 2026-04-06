import {
  ActivityIcon,
  ArrowLeftRight,
  ArrowUpFromLine,
  BadgeQuestionMark,
  Bell,
  BellDot,
  BookText,
  CarFront,
  ChartLine,
  CreditCard,
  FilePlusCorner,
  Gavel,
  LayoutDashboard,
  LifeBuoy,
  MapPin,
  Menu,
  Send,
  ShieldPlus,
  SquareUserRound,
  X
} from "lucide-react";
import { useState } from "react";
import { Outlet } from "react-router";
import logo from '../assets/Logo.png';
import SideNavigation from "../components/SideNavigation";
import './laytout.css';


export type SidebarItem = {
  name: string;
  path: string;
  icon: React.ReactNode;
};



const sidebarItems: SidebarItem[] = [
  {
    name: "Dashboard",
    path: "/",
    icon: <LayoutDashboard size={20} />,
  },
  {
    name: "Drivers",
    path: "drivers",
    icon: <CarFront size={20} />,
  },
  {
    name: "Riders",
    path: "riders",
    icon: <ArrowLeftRight size={20} />,
  },
  {
    name: "Documents",
    path: "documents",
    icon: <BookText size={20} />,
  },
  {
    name: "Enrollments",
    path: "enrollments",
    icon: <FilePlusCorner size={20} />,
  },
  {
    name: "Uploads",
    path: "uploads",
    icon: <ArrowUpFromLine size={20} />,
  },
];

const manageMentItems: SidebarItem[] = [

  {
    name: 'Payments',
    path: 'payments',
    icon: <CreditCard size={20} />
  },
  {
    name: 'Notifications',
    path: 'notifications',
    icon: <Bell size={20} />
  },
  {
    name: 'User Accounts',
    path: 'useraccounts',
    icon: <SquareUserRound size={20} />
  },
  {
    name: 'Reports',
    path: 'reports',
    icon: <ChartLine size={20} />
  },
]



const OperationsItems: SidebarItem[] = [
  {
    name: 'Rides & Monitoring',
    path: 'ridesandmonitoring',
    icon: <Send size={20} />
  },
  {
    name: 'Live Map',
    path: 'livemap',
    icon: <MapPin size={20} />
  },
  {
    name: 'Manual Dispatch',
    path: 'manualdispatch',
    icon: <Send size={20} />
  },
]


const SystemItems: SidebarItem[] = [

  {
    name: 'Support',
    path: 'support',
    icon: <LifeBuoy size={20} />
  },
  {
    name: 'Activity Log',
    path: 'activitylog',
    icon: <ActivityIcon size={20} />
  },
  {
    name: 'Feedback',
    path: 'feedback',
    icon: <BadgeQuestionMark size={20} />
  },
  {
    name: 'System Health',
    path: 'system-health',
    icon: <ShieldPlus size={20} />
  },
  {
    name: 'Legal',
    path: 'legal',
    icon: <Gavel size={20} />
  },
]









export default function MainLayout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);



  return (
    <div className="min-h-screen bg-gray-100 flex">
      {/* Mobile Overlay */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/40 lg:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}



      {/* Sidebar */}
      <aside
        className={`
    fixed top-0 left-0 z-50 h-screen sm:w-[15%] bg-white shadow-lg
    overflow-y-auto px-2 sm:px-4
    transform transition-transform duration-300 ease-in-out
    ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}
    lg:translate-x-0 lg:static lg:z-auto
    no-scrollbar
  `}
      >
        <div className="flex items-center justify-between px-5 py-4 ">

          <div className="flex justify-center items-center">
            <img className=" w-32" src={logo} alt="" />
          </div>

          <button
            className="lg:hidden text-gray-600"
            onClick={() => setIsSidebarOpen(false)}
          >
            <X size={22} />
          </button>
        </div>


        <SideNavigation title="Overview" sideItemsArray={sidebarItems} setIsSidebarOpen={setIsSidebarOpen} ></SideNavigation>


        <div className="mt-4 ">
          <SideNavigation title="Management" sideItemsArray={manageMentItems} setIsSidebarOpen={setIsSidebarOpen} ></SideNavigation>

        </div>


        <div className="mt-4 ">
          <SideNavigation title="Operations" sideItemsArray={OperationsItems} setIsSidebarOpen={setIsSidebarOpen} ></SideNavigation>
        </div>

        <div className="mt-4 ">
          <SideNavigation title="System" sideItemsArray={SystemItems} setIsSidebarOpen={setIsSidebarOpen} ></SideNavigation>
        </div>




      </aside>




      {/* Main Section */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Topbar */}
        <header className="sticky top-0 z-30 border-b border-b-gray-300 bg-white  px-4 py-4 flex items-center justify-between lg:px-6">
          <div className="flex items-center gap-3">
            <button
              className="lg:hidden text-gray-700"
              onClick={() => setIsSidebarOpen(true)}
            >
              <Menu size={24} />
            </button>
            <h1 className="overflow-hidden sm:whitespace-nowrap text-[14px] md:text-xl font-semibold text-gray-800">
              <span className="inline-block animate-marquee">
                <span className="bg-linear-to-r from-gray-700 via-gray-950 to-gray-700 bg-size-[200%_100%] bg-clip-text text-transparent animate-shine">
                  Welcome to our Go Places Dashboard
                </span>


              </span>
            </h1>
          </div>

          <div className="flex items-center gap-3">
            <div className="hidden sm:flex items-center justify-center relative text-gray-600">
              <BellDot size={25} className="w-5 h-5" />
              <span className="absolute top-0 right-0 h-2.5 w-2.5 rounded-full bg-red-500 border border-white"></span>
            </div>
            <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-semibold">
              A
            </div>
          </div>
        </header>




        {/* Dynamic Content */}
        <main className="flex-1  md:p-0 overflow-x-hidden">
          <div className=" bg-white p-4 md:p-6 shadow-sm min-h-[calc(100vh-75px)]">

            <Outlet />

          </div>

        </main>
      </div>
    </div>
  );
}