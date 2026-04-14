import { useState, useMemo } from "react";
import AppIcon from "../../components/common/AppIcon";
import Dropdown from "../../components/common/Dropdown";
import Pagination from "../../components/common/Pagination";
import {
  DashboardPage,
  MetricCard,
  SectionCard,
} from "../../components/common/DashboardPrimitives";

const userStats = [
  {
    label: "Total Users",
    value: "153",
    change: "+9",
    helper: "Active accounts",
    tone: "blue",
  },
  {
    label: "Platform Admins",
    value: "12",
    change: "+2",
    helper: "Full access",
    tone: "purple",
  },
  {
    label: "School Admins",
    value: "84",
    change: "+5",
    helper: "Management",
    tone: "emerald",
  },
  {
    label: "Coaching",
    value: "39",
    change: "+3",
    helper: "Management",
    tone: "amber",
  },
  {
    label: "Support Staff",
    value: "18",
    change: "0",
    helper: "Help desk",
    tone: "rose",
  },
  {
    label: "Pending",
    value: "17",
    change: "5 urgent",
    helper: "Awaiting approval",
    tone: "orange",
  },
];

const users = [
  {
    id: 1,
    name: "Sarah Johnson",
    email: "sarah.johnson@lincolnhigh.edu",
    phone: "+91 98765 43210",
    role: "School Admin",
    institution: "Lincoln High School",
    institutionType: "school",
    status: "active",
    joinDate: "2023-01-15",
    lastLogin: "2024-03-15T10:30:00Z",
    avatar: "https://picsum.photos/seed/sarah/40/40.jpg",
  },
  {
    id: 2,
    name: "Rajesh Kumar",
    email: "rajesh@excelacademy.com",
    phone: "+91 98765 43211",
    role: "Coaching Owner",
    institution: "Excel Academy",
    institutionType: "coaching",
    status: "active",
    joinDate: "2023-02-20",
    lastLogin: "2024-03-15T09:45:00Z",
    avatar: "https://picsum.photos/seed/rajesh/40/40.jpg",
  },
  {
    id: 3,
    name: "Michael Chen",
    email: "michael.chen@stmarys.edu",
    phone: "+91 98765 43212",
    role: "School Admin",
    institution: "St. Mary's Academy",
    institutionType: "school",
    status: "active",
    joinDate: "2023-03-10",
    lastLogin: "2024-03-14T16:15:00Z",
    avatar: "https://picsum.photos/seed/michael/40/40.jpg",
  },
  {
    id: 4,
    name: "Priya Sharma",
    email: "priya@brightfuture.com",
    phone: "+91 98765 43213",
    role: "Coaching Owner",
    institution: "Bright Future Coaching",
    institutionType: "coaching",
    status: "pending",
    joinDate: "2024-01-05",
    lastLogin: "2024-03-10T14:30:00Z",
    avatar: "https://picsum.photos/seed/priya/40/40.jpg",
  },
  {
    id: 5,
    name: "Amit Patel",
    email: "amit@riverside.edu",
    phone: "+91 98765 43214",
    role: "Platform Manager",
    institution: "Skoolnet Platform",
    institutionType: "platform",
    status: "active",
    joinDate: "2023-04-12",
    lastLogin: "2024-03-15T11:20:00Z",
    avatar: "https://picsum.photos/seed/amit/40/40.jpg",
  },
  {
    id: 6,
    name: "Neha Gupta",
    email: "neha@oakwood.edu",
    phone: "+91 98765 43215",
    role: "School Admin",
    institution: "Oakwood Academy",
    institutionType: "school",
    status: "active",
    joinDate: "2023-05-20",
    lastLogin: "2024-03-15T08:00:00Z",
    avatar: "https://picsum.photos/seed/neha/40/40.jpg",
  },
];

export default function UserManagement() {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [roleFilter, setRoleFilter] = useState("all");
  const [institutionFilter, setInstitutionFilter] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const filteredUsers = useMemo(() => {
    return users.filter((user) => {
      const matchesSearch =
        user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.institution.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesStatus =
        statusFilter === "all" || user.status === statusFilter;
      const matchesRole = roleFilter === "all" || user.role === roleFilter;
      const matchesInstitution =
        institutionFilter === "all" ||
        user.institutionType === institutionFilter;

      return (
        matchesSearch && matchesStatus && matchesRole && matchesInstitution
      );
    });
  }, [searchTerm, statusFilter, roleFilter, institutionFilter]);

  const paginatedUsers = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return filteredUsers.slice(startIndex, endIndex);
  }, [filteredUsers, currentPage, itemsPerPage]);

  const totalPages = Math.ceil(filteredUsers.length / itemsPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const statusOptions = [
    { value: "all", label: "All Status" },
    { value: "active", label: "Active" },
    { value: "pending", label: "Pending" },
  ];

  const roleOptions = [
    { value: "all", label: "All Roles" },
    { value: "Platform Manager", label: "Platform Manager" },
    { value: "School Admin", label: "School Admin" },
    { value: "Coaching", label: "Coaching" },
    { value: "Support Staff", label: "Support Staff" },
  ];

  const institutionOptions = [
    { value: "all", label: "All Types" },
    { value: "school", label: "Schools" },
    { value: "coaching", label: "Coaching" },
    { value: "platform", label: "Platform" },
  ];

  const formatLastLogin = (timestamp) => {
    const date = new Date(timestamp);
    const now = new Date();
    const diff = now - date;
    const hours = Math.floor(diff / (1000 * 60 * 60));

    if (hours < 1) return "Just now";
    if (hours < 24) return `${hours}h ago`;
    if (hours < 48) return "Yesterday";
    return date.toLocaleDateString();
  };

  const getRoleColor = (role) => {
    const colors = {
      "Platform Manager": "text-purple-600 bg-purple-50",
      "School Admin": "text-emerald-600 bg-emerald-50",
      "Coaching Owner": "text-amber-600 bg-amber-50",
      "Support Staff": "text-rose-600 bg-rose-50",
    };
    return colors[role] || "text-slate-600 bg-slate-50";
  };

  const getInstitutionIcon = (type) => {
    const icons = {
      school: "school",
      coaching: "rocket_launch",
      platform: "dashboard",
    };
    return icons[type] || "school";
  };

  return (
    <DashboardPage
      eyebrow="Access Control"
      title="User Management"
      actions={
        <>
          <button
            type="button"
            className="px-5 py-2.5 bg-primary text-white rounded-xl text-xs font-bold hover:shadow-lg hover:shadow-primary/20 transition-all flex items-center gap-2"
          >
            <AppIcon name="add" size={16} />
            Add User
          </button>
          <button
            type="button"
            className="px-5 py-2.5 bg-white border border-slate-200 rounded-xl text-xs font-bold text-on-surface hover:bg-slate-50 transition-all flex items-center gap-2 shadow-sm"
          >
            <AppIcon name="download" size={16} className="text-primary" />
            Export Data
          </button>
        </>
      }
    >
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 md:gap-4">
        {userStats.map((stat, index) => {
          const icons = {
            "Total Users": "groups",
            "Platform Admins": "shield_check",
            "School Admins": "school",
            Coaching: "rocket_launch",
            "Support Staff": "support_agent",
            Pending: "pending",
          };
          return (
            <MetricCard
              key={index}
              icon={icons[stat.label] || "groups"}
              label={stat.label}
              value={stat.value}
              change={stat.change}
              helper={stat.helper}
              tone={stat.tone}
            />
          );
        })}
      </div>

      <SectionCard
        title="All Users"
        description="Complete list of platform users with their roles and institutions"
      >
        <div className="mb-4 md:mb-6 space-y-3 md:space-y-0 md:flex md:flex-row md:gap-4">
          <div className="flex-1">
            <div className="relative">
              <AppIcon
                name="search"
                size={16}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
              />
              <input
                type="text"
                placeholder="Search users..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 md:py-2 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
              />
            </div>
          </div>
          <div className="flex flex-wrap gap-2">
            <Dropdown
              value={statusFilter}
              onChange={setStatusFilter}
              options={statusOptions}
              className="min-w-24 md:min-w-40"
            />
            <Dropdown
              value={roleFilter}
              onChange={setRoleFilter}
              options={roleOptions}
              className="min-w-24 md:min-w-40"
            />
            <Dropdown
              value={institutionFilter}
              onChange={setInstitutionFilter}
              options={institutionOptions}
              className="min-w-24 md:min-w-40"
            />
          </div>
        </div>
        <div className="overflow-x-auto -mx-4 md:mx-0 px-4 md:px-0">
          <table className="w-full min-w-[700px]">
            <thead className="hidden md:table-header-group">
              <tr className="border-b border-slate-200">
                <th className="text-left py-3 px-4 text-xs font-semibold text-slate-600 uppercase tracking-wider whitespace-nowrap w-[25%]">
                  User
                </th>
                <th className="text-left py-3 px-4 text-xs font-semibold text-slate-600 uppercase tracking-wider whitespace-nowrap w-[25%]">
                  Contact
                </th>
                <th className="text-left py-3 px-4 text-xs font-semibold text-slate-600 uppercase tracking-wider whitespace-nowrap w-[20%]">
                  Role & Status
                </th>
                <th className="text-left py-3 px-4 text-xs font-semibold text-slate-600 uppercase tracking-wider whitespace-nowrap w-[25%]">
                  Institution
                </th>
                <th className="text-center py-3 px-4 text-xs font-semibold text-slate-600 uppercase tracking-wider whitespace-nowrap w-[5%]">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {filteredUsers.length === 0 ? (
                <tr>
                  <td colSpan="5" className="py-8 text-center text-slate-500">
                    No users found matching your criteria.
                  </td>
                </tr>
              ) : (
                paginatedUsers.map((user) => (
                  <tr
                    key={user.id}
                    className="hover:bg-slate-50 transition-colors"
                  >
                    <td className="py-3 px-4">
                      <div className="flex items-center gap-3 min-w-0">
                        <img
                          src={user.avatar}
                          alt={user.name}
                          className="w-10 h-10 rounded-full border-2 border-white shadow-sm object-cover shrink-0"
                        />
                        <div className="min-w-0 flex-1">
                          <p className="font-semibold text-sm text-slate-900 truncate">
                            {user.name}
                          </p>
                          <p className="text-xs text-slate-500 truncate">
                            Joined: {user.joinDate}
                          </p>
                          <p className="text-xs text-slate-500 truncate">
                            Last active: {formatLastLogin(user.lastLogin)}
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className="py-3 px-4">
                      <div className="min-w-0">
                        <p className="text-sm text-slate-900 truncate max-w-50">
                          {user.email}
                        </p>
                        <p className="text-xs text-slate-500 truncate">
                          {user.phone}
                        </p>
                      </div>
                    </td>
                    <td className="py-3 px-4">
                      <div className="flex flex-col gap-1.5">
                        <div
                          className={`inline-flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-medium whitespace-nowrap ${getRoleColor(user.role)}`}
                        >
                          <AppIcon name="shield_check" size={12} />
                          {user.role}
                        </div>
                        <div
                          className={`inline-flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-medium whitespace-nowrap ${
                            user.status === "active"
                              ? "bg-emerald-50 text-emerald-700 border border-emerald-200"
                              : "bg-amber-50 text-amber-700 border border-amber-200"
                          }`}
                        >
                          <AppIcon
                            name={
                              user.status === "active"
                                ? "check_circle"
                                : "pending"
                            }
                            size={12}
                          />
                          {user.status}
                        </div>
                      </div>
                    </td>
                    <td className="py-3 px-4">
                      <div className="flex items-center gap-2 min-w-0">
                        <AppIcon
                          name={getInstitutionIcon(user.institutionType)}
                          size={14}
                          className="text-slate-600 shrink-0"
                        />
                        <div className="min-w-0 flex-1">
                          <p className="text-sm font-medium text-slate-900 truncate max-w-45">
                            {user.institution}
                          </p>
                          <p className="text-xs text-slate-500 capitalize truncate">
                            {user.institutionType}
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className="py-3 px-4">
                      <div className="flex items-center gap-1">
                        <button className="p-1.5 md:p-1 rounded hover:bg-slate-100 transition-colors">
                          <AppIcon
                            name="visibility"
                            size={14}
                            className="text-slate-600"
                          />
                        </button>
                        <button className="p-1.5 md:p-1 rounded hover:bg-slate-100 transition-colors">
                          <AppIcon
                            name="edit"
                            size={14}
                            className="text-slate-600"
                          />
                        </button>
                        <button className="p-1.5 md:p-1 rounded hover:bg-slate-100 transition-colors">
                          <AppIcon
                            name="more_vert"
                            size={14}
                            className="text-slate-600"
                          />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>

        {filteredUsers.length > 0 && (
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
            itemsPerPage={itemsPerPage}
            totalItems={filteredUsers.length}
            className="mt-4"
          />
        )}
      </SectionCard>
    </DashboardPage>
  );
}
