"use client";

import { useState } from "react";
import {
  Users,
  UserCheck,
  Clock,
  Building2,
  Calendar,
  TrendingUp,
  Plus,
  Search,
  ChevronDown,
  ArrowLeft,
  Mail,
  Phone,
  MapPin,
  Gift,
  UserPlus,
  ShieldAlert,
  Edit3,
  MoreHorizontal,
  Eye,
  Star,
  Megaphone,
  User,
  DollarSign,
  Check,
  Download
} from "lucide-react";
import { AdminShell } from "../components/AdminShell";

// Employee Interface
interface Employee {
  id: string;
  initials: string;
  name: string;
  email: string;
  role: string;
  department: string;
  joiningDate: string;
  performance: string; // performance % e.g. "88%"
  status: "Active" | "On Leave" | "Inactive";
  phone: string;
  address: string;
  dob: string;
  emergencyContact: string;
  leaveBalance: string;
  attendance: string;
  avatarBg: string;
}

// Initial Employees Dataset
const initialEmployees: Employee[] = [
  {
    id: "emp-1",
    initials: "AS",
    name: "Arjun Sharma",
    email: "arjun@bizos.in",
    role: "Product Manager",
    department: "Product",
    joiningDate: "2023-03-15",
    performance: "88%",
    status: "Active",
    phone: "+91 98765 43210",
    address: "Mumbai, MH 400001",
    dob: "1992-06-15",
    emergencyContact: "+91 99999 00000",
    leaveBalance: "12 days",
    attendance: "96%",
    avatarBg: "#8a6652"
  },
  {
    id: "emp-2",
    initials: "PN",
    name: "Priya Nair",
    email: "priya@bizos.in",
    role: "Marketing Head",
    department: "Marketing",
    joiningDate: "2022-08-01",
    performance: "92%",
    status: "Active",
    phone: "+91 98765 43211",
    address: "Bengaluru, KA 560001",
    dob: "1994-04-12",
    emergencyContact: "+91 99999 00001",
    leaveBalance: "14 days",
    attendance: "97%",
    avatarBg: "#4caf50"
  },
  {
    id: "emp-3",
    initials: "RG",
    name: "Rahul Gupta",
    email: "rahul@bizos.in",
    role: "Sales Executive",
    department: "Sales",
    joiningDate: "2024-01-10",
    performance: "74%",
    status: "Active",
    phone: "+91 98765 43212",
    address: "Delhi, DL 110001",
    dob: "1996-09-22",
    emergencyContact: "+91 99999 00002",
    leaveBalance: "8 days",
    attendance: "91%",
    avatarBg: "#e91e63"
  },
  {
    id: "emp-4",
    initials: "SJ",
    name: "Sneha Joshi",
    email: "sneha@bizos.in",
    role: "HR Manager",
    department: "HR",
    joiningDate: "2022-05-20",
    performance: "85%",
    status: "On Leave",
    phone: "+91 98765 43213",
    address: "Pune, MH 411001",
    dob: "1991-11-05",
    emergencyContact: "+91 99999 00003",
    leaveBalance: "15 days",
    attendance: "95%",
    avatarBg: "#009688"
  },
  {
    id: "emp-5",
    initials: "VP",
    name: "Vikram Patel",
    email: "vikram@bizos.in",
    role: "Accountant",
    department: "Finance",
    joiningDate: "2023-11-01",
    performance: "79%",
    status: "Active",
    phone: "+91 98765 43214",
    address: "Ahmedabad, GJ 380001",
    dob: "1993-02-18",
    emergencyContact: "+91 99999 00004",
    leaveBalance: "10 days",
    attendance: "93%",
    avatarBg: "#3f51b5"
  },
  {
    id: "emp-6",
    initials: "MR",
    name: "Meera Reddy",
    email: "meera@bizos.in",
    role: "Inventory Manager",
    department: "Operations",
    joiningDate: "2021-09-15",
    performance: "91%",
    status: "Active",
    phone: "+91 98765 43215",
    address: "Hyderabad, TS 500001",
    dob: "1990-07-30",
    emergencyContact: "+91 99999 00005",
    leaveBalance: "16 days",
    attendance: "98%",
    avatarBg: "#e040fb"
  },
  {
    id: "emp-7",
    initials: "KS",
    name: "Karan Singh",
    email: "karan@bizos.in",
    role: "Developer",
    department: "Tech",
    joiningDate: "2024-03-01",
    performance: "68%",
    status: "Active",
    phone: "+91 98765 43216",
    address: "Noida, UP 201301",
    dob: "1997-12-08",
    emergencyContact: "+91 99999 00006",
    leaveBalance: "6 days",
    attendance: "89%",
    avatarBg: "#ff5722"
  },
  {
    id: "emp-8",
    initials: "AD",
    name: "Ananya Das",
    email: "ananya@bizos.in",
    role: "Customer Support",
    department: "Support",
    joiningDate: "2023-07-20",
    performance: "82%",
    status: "Inactive",
    phone: "+91 98765 43217",
    address: "Kolkata, WB 700001",
    dob: "1995-05-15",
    emergencyContact: "+91 99999 00007",
    leaveBalance: "11 days",
    attendance: "94%",
    avatarBg: "#795548"
  }
];

export default function HRMPage() {
  const [employees, setEmployees] = useState<Employee[]>(initialEmployees);
  const [view, setView] = useState<"list" | "profile" | "add_employee" | "success">("list");
  const [selectedEmpId, setSelectedEmpId] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");

  // Stepper states
  const [builderStep, setBuilderStep] = useState(1);
  const [formName, setFormName] = useState("");
  const [formEmail, setFormEmail] = useState("");
  const [formPhone, setFormPhone] = useState("");
  const [formDob, setFormDob] = useState("");
  const [formAddress, setFormAddress] = useState("");

  // Step 2 states
  const [formDept, setFormDept] = useState("Product");
  const [formDesignation, setFormDesignation] = useState("Product Manager");
  const [formReportingManager, setFormReportingManager] = useState("");
  const [formJoinDate, setFormJoinDate] = useState("2026-06-26");
  const [formEmploymentType, setFormEmploymentType] = useState("Full-time");
  const [formMonthlySalary, setFormMonthlySalary] = useState("50000");

  // Step 3 states
  const [formPermissionRole, setFormPermissionRole] = useState("Accounting");
  const [formCustomPermissions, setFormCustomPermissions] = useState<string[]>(["Access Accounting"]);

  // Profile tabs state
  const [activeProfileTab, setActiveProfileTab] = useState("Personal");

  // Filter employees
  const filteredEmployees = employees.filter((emp) => {
    const matchesSearch =
      emp.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      emp.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      emp.role.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesSearch;
  });

  const selectedEmployee = employees.find((emp) => emp.id === selectedEmpId);

  // Stats calculation
  const totalCount = employees.length;
  const activeCount = employees.filter((emp) => emp.status === "Active").length;
  const leaveCount = employees.filter((emp) => emp.status === "On Leave").length;

  const handleSaveEmployee = () => {
    const initials = (formName || "New Employee")
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase()
      .substring(0, 2);

    // Preset color templates
    const colors = ["#8a6652", "#4caf50", "#e91e63", "#009688", "#3f51b5", "#e040fb", "#ff5722"];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];

    const newEmp: Employee = {
      id: `emp-${Date.now()}`,
      initials,
      name: formName || "New Employee",
      email: formEmail || "employee@bizos.in",
      role: formDesignation || "Product Manager",
      department: formDept,
      joiningDate: formJoinDate || "Today",
      performance: "100%",
      status: "Active",
      phone: formPhone || "+91 98765 43210",
      address: formAddress || "Not specified",
      dob: formDob || "1995-01-01",
      emergencyContact: "+91 99999 00000",
      leaveBalance: "15 days",
      attendance: "100%",
      avatarBg: randomColor
    };

    setEmployees([newEmp, ...employees]);
    setView("success");
  };

  const resetForm = () => {
    setBuilderStep(1);
    setFormName("");
    setFormEmail("");
    setFormPhone("");
    setFormDob("");
    setFormAddress("");
    setFormDept("Product");
    setFormDesignation("Product Manager");
    setFormReportingManager("");
    setFormJoinDate("2026-06-26");
    setFormEmploymentType("Full-time");
    setFormMonthlySalary("50000");
    setFormPermissionRole("Accounting");
    setFormCustomPermissions(["Access Accounting"]);
  };

  const togglePermission = (perm: string) => {
    if (formCustomPermissions.includes(perm)) {
      setFormCustomPermissions(formCustomPermissions.filter((p) => p !== perm));
    } else {
      setFormCustomPermissions([...formCustomPermissions, perm]);
    }
  };

  const managementCenters = [
    { title: "Attendance Center", desc: "Track daily attendance, check-in/out, and absences", icon: Clock },
    { title: "Leave Management", desc: "Approve or reject leave requests and manage balances", icon: Calendar },
    { title: "Payroll Management", desc: "Process salaries, deductions, bonuses, and pay slips", icon: DollarSign },
    { title: "Shift Scheduling", desc: "Create and manage employee shifts and rosters", icon: Clock },
    { title: "Performance Reviews", desc: "Set goals, track KPIs, and conduct appraisals", icon: Star },
    { title: "Internal Announcements", desc: "Broadcast company news and updates to all staff", icon: Megaphone }
  ];

  return (
    <AdminShell activePage="hrm">
      <section className="content hrmContent">
        {/* ==========================================================================
           1. EMPLOYEE DIRECTORY LIST
           ========================================================================== */}
        {view === "list" && (
          <>
            <div className="hrmHero">
              <div>
                <h1>Human Resource Management</h1>
                <p>Manage employees, teams, permissions, payroll, attendance, and performance.</p>
              </div>
              <div className="hrmActions">
                <button type="button">
                  <UserPlus size={15} /> Create Team
                </button>
                <button type="button">
                  <Mail size={15} /> Invite User
                </button>
                <button type="button" className="primary" onClick={() => setView("add_employee")}>
                  <Plus size={16} /> Add Employee
                </button>
              </div>
            </div>

            {/* Stats Overview */}
            <section className="hrmStatsGrid" aria-label="HRM metrics stats grid">
              <div className="hrmStatCard">
                <div className="hrmStatCardIcon">
                  <Users size={16} />
                </div>
                <strong>{totalCount}</strong>
                <span>Total Employees</span>
              </div>
              <div className="hrmStatCard">
                <div className="hrmStatCardIcon">
                  <UserCheck size={16} />
                </div>
                <strong>{activeCount}</strong>
                <span>Active Employees</span>
              </div>
              <div className="hrmStatCard">
                <div className="hrmStatCardIcon">
                  <Clock size={16} />
                </div>
                <strong>94.2%</strong>
                <span>Attendance Rate</span>
              </div>
              <div className="hrmStatCard">
                <div className="hrmStatCardIcon">
                  <Building2 size={16} />
                </div>
                <strong>9</strong>
                <span>Departments</span>
              </div>
              <div className="hrmStatCard">
                <div className="hrmStatCardIcon">
                  <Calendar size={16} />
                </div>
                <strong>{leaveCount}</strong>
                <span>Pending Leaves</span>
              </div>
              <div className="hrmStatCard">
                <div className="hrmStatCardIcon">
                  <TrendingUp size={16} />
                </div>
                <strong>83%</strong>
                <span>Productivity</span>
              </div>
            </section>

            {/* Employee Directory table */}
            <section className="employeeDirectoryWrap">
              <div className="directoryHeader">
                <h2>Employee Directory</h2>
                <div className="employeeFilters">
                  <label htmlFor="searchEmp">
                    <Search size={16} />
                    <input
                      id="searchEmp"
                      placeholder="Search employees..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                    />
                  </label>
                  <button type="button">
                    <Download size={15} /> Export
                  </button>
                </div>
              </div>

              <div className="employeeTable">
                <div className="employeeRow employeeHead">
                  <span>Employee</span>
                  <span>Role</span>
                  <span>Department</span>
                  <span>Joining Date</span>
                  <span>Performance</span>
                  <span>Status</span>
                  <span>Actions</span>
                </div>

                {filteredEmployees.map((emp) => (
                  <div
                    className="employeeRow"
                    key={emp.id}
                    onClick={() => {
                      setSelectedEmpId(emp.id);
                      setView("profile");
                    }}
                  >
                    <div className="employeeInfoCell">
                      <div className="employeeAvatar" style={{ background: emp.avatarBg }}>
                        {emp.initials}
                      </div>
                      <div className="employeeMetaBlock">
                        <strong>{emp.name}</strong>
                        <span>{emp.email}</span>
                      </div>
                    </div>
                    <span className="roleText">{emp.role}</span>
                    <div>
                      <span className="deptPill">{emp.department}</span>
                    </div>
                    <span>{emp.joiningDate}</span>
                    <div className="perfTrackWrap">
                      <div className="perfTrackBar">
                        <div className="perfTrackFill" style={{ width: emp.performance }} />
                      </div>
                      <span>{emp.performance}</span>
                    </div>
                    <div>
                      <span className={`employeeStatusPill ${emp.status.toLowerCase().replaceAll(" ", "-")}`}>
                        {emp.status}
                      </span>
                    </div>
                    <div className="actionBtns">
                      <button
                        type="button"
                        className="actionBtn"
                        title="View Profile"
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedEmpId(emp.id);
                          setView("profile");
                        }}
                      >
                        <Eye size={13} />
                      </button>
                      <button type="button" className="actionBtn" title="Edit Profile">
                        <Edit3 size={13} />
                      </button>
                      <button type="button" className="actionBtn" title="More Options">
                        <MoreHorizontal size={13} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Management Centers */}
            <section className="advancedAccountingWrap">
              <h2>HR Management Centers</h2>
              <div className="centersGrid">
                {managementCenters.map((item) => (
                  <div className="centerCard" key={item.title}>
                    <div className="centerIcon">
                      <item.icon size={20} />
                    </div>
                    <div className="centerMeta">
                      <h3>{item.title}</h3>
                      <p>{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </>
        )}

        {/* ==========================================================================
           2. EMPLOYEE PROFILE VIEW
           ========================================================================== */}
        {view === "profile" && selectedEmployee && (
          <>
            <div className="backNav" onClick={() => setView("list")}>
              <button type="button" className="backBtn">
                <ArrowLeft size={16} />
              </button>
              <div className="detailsHeaderInfo">
                <h1>Employee Profile</h1>
              </div>
            </div>

            <div className="profileHeaderCard">
              <div className="profileHeroBlock">
                <div className="profileHeroLeft">
                  <div className="profileAvatarLarge" style={{ background: selectedEmployee.avatarBg }}>
                    {selectedEmployee.initials}
                  </div>
                  <div className="profileHeroMeta">
                    <h2>{selectedEmployee.name}</h2>
                    <p>{selectedEmployee.role} • {selectedEmployee.department}</p>
                    <div className="profileHeroContacts">
                      <span><Mail size={13} /> {selectedEmployee.email}</span>
                      <span><Phone size={13} /> {selectedEmployee.phone}</span>
                    </div>
                  </div>
                </div>
                <div className="profileHeroRight">
                  <span className={`employeeStatusPill ${selectedEmployee.status.toLowerCase().replaceAll(" ", "-")}`}>
                    {selectedEmployee.status}
                  </span>
                  <button type="button" className="actionBtn" style={{ padding: "0 12px", gap: 6, height: 32 }}>
                    <Edit3 size={13} /> Edit
                  </button>
                </div>
              </div>

              {/* Profile sub-metrics row */}
              <div className="profileMetricsRow">
                <div className="profileMetricCol">
                  <span>Performance</span>
                  <strong>{selectedEmployee.performance}</strong>
                </div>
                <div className="profileMetricCol">
                  <span>Leave Balance</span>
                  <strong>{selectedEmployee.leaveBalance}</strong>
                </div>
                <div className="profileMetricCol">
                  <span>Attendance</span>
                  <strong>{selectedEmployee.attendance}</strong>
                </div>
                <div className="profileMetricCol">
                  <span>Joined</span>
                  <strong>{selectedEmployee.joiningDate}</strong>
                </div>
              </div>
            </div>

            {/* Profile Tab Navigation links */}
            <div className="profileTabsContainer">
              {["Personal", "Employment", "Permissions", "Attendance", "Payroll", "Performance"].map((tab) => (
                <div
                  className={`profileTabLink ${activeProfileTab === tab ? "active" : ""}`}
                  key={tab}
                  onClick={() => setActiveProfileTab(tab)}
                >
                  {tab}
                </div>
              ))}
            </div>

            {/* Tab Details container card */}
            <div className="accountingFormCard">
              {activeProfileTab === "Personal" && (
                <div className="personalDetailsGrid">
                  <div className="personalDetailsCol">
                    <span>Full Name</span>
                    <strong>{selectedEmployee.name}</strong>
                  </div>
                  <div className="personalDetailsCol">
                    <span>Email</span>
                    <strong>{selectedEmployee.email}</strong>
                  </div>
                  <div className="personalDetailsCol">
                    <span>Phone</span>
                    <strong>{selectedEmployee.phone}</strong>
                  </div>
                  <div className="personalDetailsCol">
                    <span>Address</span>
                    <strong>{selectedEmployee.address}</strong>
                  </div>
                  <div className="personalDetailsCol">
                    <span>Date of Birth</span>
                    <strong>{selectedEmployee.dob}</strong>
                  </div>
                  <div className="personalDetailsCol">
                    <span>Emergency Contact</span>
                    <strong>{selectedEmployee.emergencyContact}</strong>
                  </div>
                </div>
              )}

              {activeProfileTab !== "Personal" && (
                <div style={{ padding: "20px 0", color: "#9aa7ba", fontSize: "14px" }}>
                  Detailed {activeProfileTab} information is currently restricted to HR Administrator view.
                </div>
              )}
            </div>
          </>
        )}

        {/* ==========================================================================
           3. ADD EMPLOYEE STEPPER WIZARD
           ========================================================================== */}
        {view === "add_employee" && (
          <>
            <div
              className="backNav"
              onClick={() => {
                setView("list");
                setBuilderStep(1);
              }}
            >
              <button type="button" className="backBtn">
                <ArrowLeft size={16} />
              </button>
              <div className="detailsHeaderInfo">
                <h1>Add Employee</h1>
                <span>Set up an employee profile and grant platform access.</span>
              </div>
            </div>

            {/* Stepper nodes */}
            <div className="stepperContainer" style={{ margin: "0 0 20px" }}>
              <div className={`stepNode ${builderStep === 1 ? "active" : builderStep > 1 ? "completed" : ""}`}>
                <div className="stepCircle">{builderStep > 1 ? "✓" : "1"}</div>
                <span className="stepLabel">Basic Info</span>
              </div>
              <div className="stepConnector">
                <div className="stepConnectorActive" style={{ width: builderStep > 1 ? "100%" : "0%" }} />
              </div>

              <div className={`stepNode ${builderStep === 2 ? "active" : builderStep > 2 ? "completed" : ""}`}>
                <div className="stepCircle">{builderStep > 2 ? "✓" : "2"}</div>
                <span className="stepLabel">Employment</span>
              </div>
              <div className="stepConnector">
                <div className="stepConnectorActive" style={{ width: builderStep > 2 ? "100%" : "0%" }} />
              </div>

              <div className={`stepNode ${builderStep === 3 ? "active" : builderStep > 3 ? "completed" : ""}`}>
                <div className="stepCircle">{builderStep > 3 ? "✓" : "3"}</div>
                <span className="stepLabel">Permissions</span>
              </div>
              <div className="stepConnector">
                <div className="stepConnectorActive" style={{ width: builderStep > 3 ? "100%" : "0%" }} />
              </div>

              <div className={`stepNode ${builderStep === 4 ? "active" : ""}`}>
                <div className="stepCircle">4</div>
                <span className="stepLabel">Review</span>
              </div>
            </div>

            {/* Stepper view components */}
            <div className="builderSection" style={{ minHeight: "260px" }}>
              {/* STEP 1: BASIC INFO */}
              {builderStep === 1 && (
                <>
                  <h2>Basic Information</h2>
                  <div className="accountingFormGrid">
                    <div className="formGroup">
                      <label htmlFor="fullName">Full Name</label>
                      <input
                        id="fullName"
                        type="text"
                        placeholder="Enter full name"
                        value={formName}
                        onChange={(e) => setFormName(e.target.value)}
                      />
                    </div>
                    <div className="formGroup">
                      <label htmlFor="emailAddr">Email Address</label>
                      <input
                        id="emailAddr"
                        type="email"
                        placeholder="name@company.com"
                        value={formEmail}
                        onChange={(e) => setFormEmail(e.target.value)}
                      />
                    </div>
                    <div className="formGroup">
                      <label htmlFor="phoneNum">Phone Number</label>
                      <input
                        id="phoneNum"
                        type="text"
                        placeholder="+91 00000 00000"
                        value={formPhone}
                        onChange={(e) => setFormPhone(e.target.value)}
                      />
                    </div>
                    <div className="formGroup">
                      <label htmlFor="dobField">Date of Birth</label>
                      <input
                        id="dobField"
                        type="date"
                        value={formDob}
                        onChange={(e) => setFormDob(e.target.value)}
                      />
                    </div>
                    <div className="formGroup" style={{ gridColumn: "span 2" }}>
                      <label htmlFor="addrField">Address</label>
                      <input
                        id="addrField"
                        type="text"
                        placeholder="Street, City, State, PIN"
                        value={formAddress}
                        onChange={(e) => setFormAddress(e.target.value)}
                      />
                    </div>
                  </div>
                </>
              )}

              {/* STEP 2: EMPLOYMENT */}
              {builderStep === 2 && (
                <>
                  <h2>Employment Information</h2>
                  <div className="accountingFormGrid">
                    <div className="formGroup">
                      <label htmlFor="deptField">Department</label>
                      <select
                        id="deptField"
                        value={formDept}
                        onChange={(e) => setFormDept(e.target.value)}
                      >
                        <option value="Product">Product</option>
                        <option value="Marketing">Marketing</option>
                        <option value="Sales">Sales</option>
                        <option value="HR">HR</option>
                        <option value="Finance">Finance</option>
                        <option value="Operations">Operations</option>
                        <option value="Tech">Tech</option>
                        <option value="Support">Support</option>
                      </select>
                    </div>
                    <div className="formGroup">
                      <label htmlFor="designationField">Designation</label>
                      <input
                        id="designationField"
                        type="text"
                        placeholder="e.g. Senior Developer"
                        value={formDesignation}
                        onChange={(e) => setFormDesignation(e.target.value)}
                      />
                    </div>
                    <div className="formGroup">
                      <label htmlFor="managerField">Reporting Manager</label>
                      <input
                        id="managerField"
                        type="text"
                        placeholder="Enter manager's name"
                        value={formReportingManager}
                        onChange={(e) => setFormReportingManager(e.target.value)}
                      />
                    </div>
                    <div className="formGroup">
                      <label htmlFor="joinField">Joining Date</label>
                      <input
                        id="joinField"
                        type="date"
                        value={formJoinDate}
                        onChange={(e) => setFormJoinDate(e.target.value)}
                      />
                    </div>
                    <div className="formGroup">
                      <label htmlFor="employmentTypeField">Employment Type</label>
                      <select
                        id="employmentTypeField"
                        value={formEmploymentType}
                        onChange={(e) => setFormEmploymentType(e.target.value)}
                      >
                        <option value="Full-time">Full-time</option>
                        <option value="Part-time">Part-time</option>
                        <option value="Contract">Contract</option>
                        <option value="Intern">Intern</option>
                      </select>
                    </div>
                    <div className="formGroup">
                      <label htmlFor="monthlySalaryField">Monthly Salary (₹)</label>
                      <input
                        id="monthlySalaryField"
                        type="number"
                        placeholder="e.g. 50000"
                        value={formMonthlySalary}
                        onChange={(e) => setFormMonthlySalary(e.target.value)}
                      />
                    </div>
                  </div>
                </>
              )}

              {/* STEP 3: PERMISSIONS */}
              {builderStep === 3 && (
                <>
                  <h2>Assign Role & Permissions</h2>
                  <div className="formGroup" style={{ marginBottom: "24px", gridColumn: "span 2" }}>
                    <label style={{ display: "block", marginBottom: "12px", fontSize: "13px", fontWeight: "600", color: "#8b98ab" }}>Select Role</label>
                    <div className="rolesGrid">
                      {[
                        { name: "Admin", desc: "Full access to all modules and configurations" },
                        { name: "Manager", desc: "Team management and performance tracking" },
                        { name: "Marketing", desc: "Access to marketing campaigns and analytics" },
                        { name: "Inventory", desc: "Manage stock levels, suppliers, and items" },
                        { name: "Sales", desc: "Access orders, sales data, and customers" },
                        { name: "HR", desc: "Manage employee directory and requests" },
                        { name: "Accounting", desc: "View financial reports and record transactions" }
                      ].map((role) => (
                        <div
                          key={role.name}
                          className={`roleCard ${formPermissionRole === role.name ? "active" : ""}`}
                          onClick={() => setFormPermissionRole(role.name)}
                        >
                          <div className="roleCardHeader">
                            <strong>{role.name}</strong>
                            <div className="customCheckboxRadio">
                              {formPermissionRole === role.name && <div className="checkedIndicator" />}
                            </div>
                          </div>
                          <p>{role.desc}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="formGroup" style={{ gridColumn: "span 2" }}>
                    <label style={{ display: "block", marginBottom: "12px", fontSize: "13px", fontWeight: "600", color: "#8b98ab" }}>Custom Permissions</label>
                    <div className="permissionsGrid">
                      {[
                        "View Reports",
                        "Manage Inventory",
                        "Access Accounting",
                        "Export Data",
                        "Process Orders",
                        "Manage Customers"
                      ].map((perm) => (
                        <label key={perm} className="permissionCheckboxLabel">
                          <input
                            type="checkbox"
                            checked={formCustomPermissions.includes(perm)}
                            onChange={() => togglePermission(perm)}
                          />
                          <span>{perm}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                </>
              )}

              {/* STEP 4: REVIEW & SAVE */}
              {builderStep === 4 && (
                <>
                  <h2>Review Employee Profile</h2>
                  <p style={{ color: "#9aa7ba", fontSize: "13px", marginBottom: "20px" }}>
                    Please verify the details before inviting the employee to the platform.
                  </p>
                  <div className="reviewList">
                    <div className="reviewRow">
                      <span className="reviewLabel">Full Name</span>
                      <strong className="reviewVal">{formName || "Not specified"}</strong>
                    </div>
                    <div className="reviewRow">
                      <span className="reviewLabel">Email Address</span>
                      <strong className="reviewVal">{formEmail || "Not specified"}</strong>
                    </div>
                    <div className="reviewRow">
                      <span className="reviewLabel">Department</span>
                      <strong className="reviewVal">{formDept}</strong>
                    </div>
                    <div className="reviewRow">
                      <span className="reviewLabel">Designation</span>
                      <strong className="reviewVal">{formDesignation || "Not specified"}</strong>
                    </div>
                    <div className="reviewRow">
                      <span className="reviewLabel">System Role</span>
                      <strong className="reviewVal">{formPermissionRole} Role</strong>
                    </div>
                    <div className="reviewRow">
                      <span className="reviewLabel">Joining Date</span>
                      <strong className="reviewVal">{formJoinDate}</strong>
                    </div>
                  </div>
                </>
              )}
            </div>

            {/* Stepper Footer buttons */}
            <div className="builderFooter">
              {builderStep === 1 ? (
                <button
                  type="button"
                  className="secondary"
                  onClick={() => setView("list")}
                >
                  &lt; Cancel
                </button>
              ) : (
                <button
                  type="button"
                  className="secondary"
                  onClick={() => setBuilderStep(builderStep - 1)}
                >
                  &lt; Previous
                </button>
              )}

              {builderStep === 4 ? (
                <div style={{ display: "flex", gap: "12px" }}>
                  <button
                    type="button"
                    className="outlineSaveBtn"
                    onClick={handleSaveEmployee}
                  >
                    Save Employee
                  </button>
                  <button
                    type="button"
                    className="solidInviteBtn"
                    onClick={handleSaveEmployee}
                  >
                    <Mail size={14} /> Send Invite
                  </button>
                </div>
              ) : (
                <button
                  type="button"
                  className="primary"
                  onClick={() => setBuilderStep(builderStep + 1)}
                >
                  Continue &gt;
                </button>
              )}
            </div>
          </>
        )}

        {/* ==========================================================================
           4. SUCCESS SCREEN
           ========================================================================== */}
        {view === "success" && (
          <div className="successScreen">
            <div className="successIconWrap">
              <Check size={32} strokeWidth={2.5} />
            </div>
            <h2>Employee Added!</h2>
            <p>
              The employee profile has been created and an invitation has been sent to their email.
            </p>
            <div className="successBtns">
              <button
                type="button"
                className="primary"
                onClick={() => {
                  resetForm();
                  setView("list");
                }}
              >
                Back to Directory
              </button>
              <button
                type="button"
                className="secondary"
                onClick={() => {
                  resetForm();
                  setView("add_employee");
                }}
              >
                Add Another
              </button>
            </div>
          </div>
        )}
      </section>
    </AdminShell>
  );
}
