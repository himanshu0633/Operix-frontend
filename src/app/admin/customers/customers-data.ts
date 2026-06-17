export const customerStats = [
  { label: "Total Customers", value: "12", meta: "+3 this month", tone: "blue", spark: "M2 30 L18 24 L34 21 L50 21 L66 14" },
  { label: "New Customers", value: "2", meta: "This month", tone: "green", spark: "M2 24 L14 16 L26 23 L40 14 L54 5 L68 13" },
  { label: "Returning", value: "4", meta: "Repeat buyers", tone: "cyan", spark: "M2 18 L14 14 L28 20 L42 9 L56 14 L68 28" },
  { label: "VIP Customers", value: "2", meta: "High value", tone: "amber", spark: "M2 24 L16 24 L28 5 L44 5 L66 5" },
  { label: "Avg Revenue / Cust", value: "₹2,72,350", meta: "Lifetime avg", tone: "teal", spark: "M2 27 L18 23 L34 19 L50 14 L66 9" },
];

export const customers = [
  { id: "CUS-1001", initials: "PS", name: "Priya Sharma", city: "Mumbai", phone: "+91 98201 45678", email: "priya@gmail.com", orders: "24", spend: "₹1,84,500", last: "2d ago", type: "Returning", payment: "UPI", loyalty: "Gold", tone: "blue" },
  { id: "CUS-1002", initials: "RM", name: "Rahul Mehta", city: "Delhi", phone: "+91 94830 22145", email: "rahul@example.com", orders: "58", spend: "₹5,40,000", last: "1d ago", type: "VIP", payment: "Credit Card", loyalty: "Platinum", tone: "amber" },
  { id: "CUS-1003", initials: "SP", name: "Sunita Patel", city: "Ahmedabad", phone: "+91 99204 78901", email: "sunita@example.com", orders: "2", spend: "₹12,800", last: "5d ago", type: "New", payment: "UPI", loyalty: "Bronze", tone: "green" },
  { id: "CUS-1004", initials: "AS", name: "Arjun Singh", city: "Jaipur", phone: "+91 97801 34567", email: "arjun@example.com", orders: "12", spend: "₹96,000", last: "3d ago", type: "Returning", payment: "Net Banking", loyalty: "Silver", tone: "cyan" },
  { id: "CUS-1005", initials: "MI", name: "Meena Iyer", city: "Chennai", phone: "+91 98760 11234", email: "meena@example.com", orders: "38", spend: "₹8,20,000", last: "1d ago", type: "Wholesale", payment: "Bank Transfer", loyalty: "Gold", tone: "blue" },
  { id: "CUS-1006", initials: "VD", name: "Vikram Desai", city: "Pune", phone: "+91 90121 88765", email: "vikram@example.com", orders: "45", spend: "₹3,90,000", last: "1d ago", type: "VIP", payment: "UPI", loyalty: "Platinum", tone: "amber" },
  { id: "CUS-1007", initials: "KN", name: "Kavya Nair", city: "Kochi", phone: "+91 88901 23456", email: "kavya@example.com", orders: "3", spend: "₹18,400", last: "8d ago", type: "New", payment: "Credit Card", loyalty: "Bronze", tone: "green" },
  { id: "CUS-1008", initials: "DJ", name: "Deepak Joshi", city: "Indore", phone: "+91 97654 32109", email: "deepak@example.com", orders: "18", spend: "₹1,42,000", last: "4d ago", type: "Returning", payment: "COD", loyalty: "Silver", tone: "cyan" },
  { id: "CUS-1009", initials: "RD", name: "Rohini Das", city: "Kolkata", phone: "+91 99001 12345", email: "rohini@example.com", orders: "4", spend: "₹28,000", last: "3mo ago", type: "Inactive", payment: "UPI", loyalty: "Bronze", tone: "gray" },
  { id: "CUS-1010", initials: "AK", name: "Anil Kumar", city: "Hyderabad", phone: "+91 96321 87654", email: "anil@example.com", orders: "62", spend: "₹9,60,000", last: "2d ago", type: "Wholesale", payment: "Bank Transfer", loyalty: "Gold", tone: "blue" },
  { id: "CUS-1011", initials: "SV", name: "Shalini Verma", city: "Lucknow", phone: "+91 85421 66778", email: "shalini@example.com", orders: "9", spend: "₹68,000", last: "6d ago", type: "Returning", payment: "UPI", loyalty: "Silver", tone: "green" },
  { id: "CUS-1012", initials: "MG", name: "Manish Gupta", city: "Bhopal", phone: "+91 93221 54389", email: "manish@example.com", orders: "2", spend: "₹8,500", last: "45d ago", type: "Inactive", payment: "COD", loyalty: "Bronze", tone: "red" },
];

export const customerProfile = {
  initials: "PS",
  name: "Priya Sharma",
  phone: "+91 98201 45678",
  email: "priya@gmail.com",
  city: "Mumbai",
  gst: "27AABCP1234S1Z5",
  since: "Jan 2024",
  type: "Returning",
  loyalty: "Gold",
  totalOrders: "24",
  totalSpend: "₹1,84,500",
  avgOrder: "₹7,688",
  lastOrder: "2d ago",
};

export const customerOrders = [
  { id: "ORD-4421", product: "Banarasi Silk Saree", amount: "₹24,000", date: "May 19, 2026", status: "Delivered" },
  { id: "ORD-4390", product: "Kashmiri Pashmina Shawl", amount: "₹30,000", date: "Apr 28, 2026", status: "Delivered" },
  { id: "ORD-4350", product: "Cotton Kurta (x3)", amount: "₹12,000", date: "Mar 15, 2026", status: "Delivered" },
  { id: "ORD-4280", product: "Rose Water + Coconut Oil", amount: "₹3,200", date: "Feb 10, 2026", status: "Delivered" },
  { id: "ORD-4200", product: "Handmade Pottery Set", amount: "₹6,000", date: "Jan 8, 2026", status: "Returned" },
];
