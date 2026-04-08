// import React, { useState } from 'react';
// import { Search, Filter, Eye } from 'lucide-react'; // lucide-react icons use korchi

// interface User {
//     id: string;
//     name: string;
//     pmi: string;
//     phone: string;
//     status: 'active' | 'pending' | 'inactive';
//     registered: string;
// }

// const users: User[] = [
//     { id: '1', name: 'Sarah Johnson', pmi: 'PMI-20234', phone: '(555) 123-4567', status: 'active', registered: '2024-01-15' },
//     { id: '2', name: 'Michael Chen', pmi: 'PMI-20235', phone: '(555) 234-5678', status: 'active', registered: '2024-02-10' },
//     { id: '3', name: 'Angela Rivera', pmi: 'PMI-20236', phone: '(555) 345-6789', status: 'pending', registered: '2024-03-05' },
//     { id: '4', name: 'David Thompson', pmi: 'PMI-20237', phone: '(555) 456-7890', status: 'active', registered: '2024-01-20' },
//     { id: '5', name: 'Patricia Williams', pmi: 'PMI-20238', phone: '(555) 567-8901', status: 'inactive', registered: '2023-11-10' },
//     { id: '6', name: 'Robert Kim', pmi: 'PMI-20239', phone: '(555) 678-9012', status: 'active', registered: '2024-03-12' },
// ];

// const RiderMannagement: React.FC = () => {

//     // Status wise colors logic
//     const getStatusStyle = (status: string) => {
//         switch (status) {
//             case 'active':
//                 return 'bg-emerald-100 text-emerald-600';
//             case 'pending':
//                 return 'bg-amber-100 text-amber-600';
//             case 'inactive':
//                 return 'bg-slate-200 text-slate-500';
//             default:
//                 return 'bg-gray-100 text-gray-600';
//         }
//     };


//     const [open, setOpen] = useState(false);
//     const [status, setStatus] = useState("All Status");

//     const handleSelect = (value) => {
//         setStatus(value);
//         setOpen(false);
//     };


//     return (
//         <div className=" ">
//             <div className=" space-y-4">


//                 <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
//                     <div className="relative w-full md:w-2/3">
//                         <span className="absolute inset-y-0 left-3 flex items-center text-gray-400">
//                             <Search size={18} />
//                         </span>
//                         <input
//                             type="text"
//                             placeholder="Search by name or PMI..."
//                             className="w-full pl-10 pr-4 py-2.5 bg-slate-100 border-none rounded-xl focus:ring-2 focus:ring-blue-500 outline-none text-gray-600 transition-all"
//                         />
//                     </div>

//                     <div className="relative inline-block w-full md:w-auto">
//                         {/* Button */}
//                         <button
//                             onClick={() => setOpen(!open)}
//                             className="w-full md:w-auto flex items-center justify-between gap-3 px-4 py-2.5 bg-white border border-gray-200 rounded-xl text-gray-600 hover:bg-gray-50 transition-colors"
//                         >
//                             <div className="flex items-center gap-2">
//                                 <Filter size={18} />
//                                 <span>{status}</span>
//                             </div>
//                             <span className="text-xs">▼</span>
//                         </button>

//                         {/* Dropdown */}
//                         {open && (
//                             <div className="absolute mt-2 w-full bg-white border border-gray-200 rounded-xl shadow-md z-10">
//                                 <ul className="py-2 text-sm text-gray-700">
//                                     <li
//                                         onClick={() => handleSelect("All Status")}
//                                         className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
//                                     >
//                                         All Status
//                                     </li>
//                                     <li
//                                         onClick={() => handleSelect("Active")}
//                                         className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
//                                     >
//                                         Active
//                                     </li>
//                                     <li
//                                         onClick={() => handleSelect("Inactive")}
//                                         className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
//                                     >
//                                         Inactive
//                                     </li>
//                                 </ul>
//                             </div>
//                         )}
//                     </div>
//                 </div>
// <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
//   <div className="w-full overflow-x-auto">
//     <table className="min-w-[600px] w-full text-left border-collapse">
//       <thead>
//         <tr className="border-b border-gray-200">
//           <th className="px-6 py-4 text-sm text-[#737B8C]">Name</th>
//           <th className="px-6 py-4 text-sm text-[#737B8C]">PMI</th>
//           <th className="px-6 py-4 text-sm text-[#737B8C]">Phone</th>
//           <th className="px-6 py-4 text-sm text-[#737B8C]">Status</th>
//           <th className="px-6 py-4 text-sm text-[#737B8C]">Registered</th>
//           <th className="px-6 py-4 text-sm text-[#737B8C] text-center">Actions</th>
//         </tr>
//       </thead>
//       <tbody className="divide-y divide-gray-50">
//         {users.map((user) => (
//           <tr key={user.id} className="hover:bg-slate-50 transition-colors">
//             <td className="px-6 py-4 font-medium text-gray-800 whitespace-nowrap">{user.name}</td>
//             <td className="px-6 py-4 text-gray-600 whitespace-nowrap">{user.pmi}</td>
//             <td className="px-6 py-4 text-gray-600 whitespace-nowrap">{user.phone}</td>
//             <td className="px-6 py-4 whitespace-nowrap">
//               <span className={`px-3 py-1 rounded-full text-xs ${getStatusStyle(user.status)}`}>
//                 {user.status}
//               </span>
//             </td>
//             <td className="px-6 py-4 text-gray-500 whitespace-nowrap">{user.registered}</td>
//             <td className="px-6 py-4 text-center whitespace-nowrap">
//               <button className="p-2 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded-full">
//                 <Eye size={20} />
//               </button>
//             </td>
//           </tr>
//         ))}
//       </tbody>
//     </table>
//   </div>
// </div>







//             </div>
//         </div>
//     );
// };

// export default RiderMannagement;





















import React, { useState } from 'react';
import { Search, Filter, Eye } from 'lucide-react';

interface User {
    id: string;
    name: string;
    pmi: string;
    phone: string;
    status: 'active' | 'pending' | 'inactive';
    registered: string;
}

const users: User[] = [
    { id: '1', name: 'Sarah Johnson', pmi: 'PMI-20234', phone: '(555) 123-4567', status: 'active', registered: '2024-01-15' },
    { id: '2', name: 'Michael Chen', pmi: 'PMI-20235', phone: '(555) 234-5678', status: 'active', registered: '2024-02-10' },
    { id: '3', name: 'Angela Rivera', pmi: 'PMI-20236', phone: '(555) 345-6789', status: 'pending', registered: '2024-03-05' },
    { id: '4', name: 'David Thompson', pmi: 'PMI-20237', phone: '(555) 456-7890', status: 'active', registered: '2024-01-20' },
    { id: '5', name: 'Patricia Williams', pmi: 'PMI-20238', phone: '(555) 567-8901', status: 'inactive', registered: '2023-11-10' },
    { id: '6', name: 'Robert Kim', pmi: 'PMI-20239', phone: '(555) 678-9012', status: 'active', registered: '2024-03-12' },
];

const RiderManagement: React.FC = () => {
    const [open, setOpen] = useState(false);
    const [status, setStatus] = useState("All Status");

    const handleSelect = (value: string) => {
        setStatus(value);
        setOpen(false);
    };

    const getStatusStyle = (status: string) => {
        switch (status) {
            case 'active':
                return 'bg-emerald-100 text-emerald-600';
            case 'pending':
                return 'bg-amber-100 text-amber-600';
            case 'inactive':
                return 'bg-slate-200 text-slate-500';
            default:
                return 'bg-gray-100 text-gray-600';
        }
    };

    return (
        <div className="p-4 sm:p-6">
            <div className="space-y-4">

                {/* Search + Filter */}
                <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
                    <div className="relative w-full sm:w-2/3">
                        <span className="absolute inset-y-0 left-3 flex items-center text-gray-400">
                            <Search size={18} />
                        </span>
                        <input
                            type="text"
                            placeholder="Search by name or PMI..."
                            className="w-full pl-10 pr-4 py-2.5 bg-slate-100 border-none rounded-xl focus:ring-2 focus:ring-blue-500 outline-none text-gray-600 transition-all"
                        />
                    </div>

                    <div className="relative w-full sm:w-auto">
                        <button
                            onClick={() => setOpen(!open)}
                            className="w-full sm:w-auto flex items-center justify-between gap-3 px-4 py-2.5 bg-white border border-gray-200 rounded-xl text-gray-600 hover:bg-gray-50 transition-colors"
                        >
                            <div className="flex items-center gap-2">
                                <Filter size={18} />
                                <span>{status}</span>
                            </div>
                            <span className="text-xs">▼</span>
                        </button>

                        {open && (
                            <div className="absolute mt-2 w-full sm:w-auto bg-white border border-gray-200 rounded-xl shadow-md z-10">
                                <ul className="py-2 text-sm text-gray-700 min-w-[120px]">
                                    {["All Status", "Active", "Inactive"].map((item) => (
                                        <li
                                            key={item}
                                            onClick={() => handleSelect(item)}
                                            className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                                        >
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </div>
                </div>

                {/* Table */}
                <div className="bg-white rounded-2xl border border-gray-100 shadow-sm ">
                    <table className="min-w-[600px] w-full text-left border-collapse">
                        <thead>
                            <tr className="border-b border-gray-200">
                                {["Name", "PMI", "Phone", "Status", "Registered", "Actions"].map((head) => (
                                    <th key={head} className="px-6 py-4 text-sm text-[#737B8C] text-center sm:text-left">
                                        {head}
                                    </th>
                                ))}
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-50">
                            {users.map((user) => (
                                <tr key={user.id} className="hover:bg-slate-50 transition-colors">
                                    <td className="px-6 py-4 font-medium text-gray-800 whitespace-nowrap">{user.name}</td>
                                    <td className="px-6 py-4 text-gray-600 whitespace-nowrap">{user.pmi}</td>
                                    <td className="px-6 py-4 text-gray-600 whitespace-nowrap">{user.phone}</td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <span className={`px-3 py-1 rounded-full text-xs ${getStatusStyle(user.status)}`}>
                                            {user.status}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 text-gray-500 whitespace-nowrap">{user.registered}</td>
                                    <td className="px-6 py-4 text-center whitespace-nowrap">
                                        <button className="p-2 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded-full">
                                            <Eye size={20} />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>


            </div>
        </div>
    );
};

export default RiderManagement;