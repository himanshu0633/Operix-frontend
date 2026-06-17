export const orderStats = [
  { label: "Total Orders", value: "12", meta: "+8 today", tone: "blue", spark: "M2 30 L18 25 L34 17 L50 17 L66 9" },
  { label: "Pending Orders", value: "1", meta: "Needs action", tone: "amber", spark: "M2 19 L14 17 L26 22 L38 15 L50 18 L62 12 L70 17" },
  { label: "Delivered", value: "4", meta: "This week", tone: "green", spark: "M2 24 L18 22 L34 18 L50 16 L66 10" },
  { label: "COD Orders", value: "2", meta: "Cash on delivery", tone: "cyan", spark: "M2 19 L17 11 L32 18 L47 7 L62 16 L70 10" },
  { label: "Revenue", value: "₹1,32,800", meta: "Confirmed", tone: "teal", spark: "M2 27 L18 24 L34 19 L50 15 L66 8" },
];

export const orders = [
  { id: "ORD-4421", customer: "Priya Sharma", city: "Mumbai", products: "2 items", platform: "Website", payment: "UPI", payStatus: "Paid", status: "Delivered", amount: "₹24,000", date: "May 19", tone: "green" },
  { id: "ORD-4420", customer: "Rahul Mehta", city: "Delhi", products: "3 items", platform: "WhatsApp", payment: "COD", payStatus: "COD", status: "Shipped", amount: "₹4,500", date: "May 19", tone: "cyan" },
  { id: "ORD-4419", customer: "Sunita Patel", city: "Ahmedabad", products: "1 item", platform: "Instagram", payment: "Credit Card", payStatus: "Paid", status: "Processing", amount: "₹1,600", date: "May 18", tone: "blue" },
  { id: "ORD-4418", customer: "Arjun Singh", city: "Jaipur", products: "2 items", platform: "Website", payment: "Net Banking", payStatus: "Paid", status: "Packed", amount: "₹60,000", date: "May 18", tone: "cyan" },
  { id: "ORD-4417", customer: "Meena Iyer", city: "Chennai", products: "4 items", platform: "POS", payment: "Cash", payStatus: "Paid", status: "Delivered", amount: "₹3,200", date: "May 17", tone: "green" },
  { id: "ORD-4416", customer: "Vikram Desai", city: "Pune", products: "1 item", platform: "Website", payment: "UPI", payStatus: "Paid", status: "Out for Delivery", amount: "₹3,000", date: "May 17", tone: "teal" },
  { id: "ORD-4415", customer: "Kavya Nair", city: "Kochi", products: "1 item", platform: "Instagram", payment: "Credit Card", payStatus: "Partial", status: "Pending", amount: "₹6,000", date: "May 16", tone: "amber" },
  { id: "ORD-4414", customer: "Deepak Joshi", city: "Indore", products: "3 items", platform: "WhatsApp", payment: "COD", payStatus: "COD", status: "Shipped", amount: "₹9,000", date: "May 15", tone: "cyan" },
  { id: "ORD-4413", customer: "Rohini Das", city: "Kolkata", products: "2 items", platform: "Website", payment: "UPI", payStatus: "Refunded", status: "Returned", amount: "₹8,000", date: "May 14", tone: "red" },
  { id: "ORD-4412", customer: "Anil Kumar", city: "Hyderabad", products: "5 items", platform: "Manual", payment: "Bank Transfer", payStatus: "Paid", status: "Delivered", amount: "₹7,500", date: "May 13", tone: "green" },
  { id: "ORD-4411", customer: "Shalini Verma", city: "Lucknow", products: "1 item", platform: "Website", payment: "Credit Card", payStatus: "Paid", status: "Delivered", amount: "₹20,000", date: "May 12", tone: "green" },
  { id: "ORD-4410", customer: "Manish Gupta", city: "Bhopal", products: "1 item", platform: "Instagram", payment: "UPI", payStatus: "Failed", status: "Cancelled", amount: "₹1,500", date: "May 11", tone: "red" },
];

export const detailOrder = {
  id: "ORD-4421",
  date: "May 19, 2026",
  platform: "Website",
  customer: "Priya Sharma",
  city: "Mumbai",
  phone: "+91 98201 45678",
  email: "priya@gmail.com",
  address: "204, Andheri West, Mumbai 400053",
  tracking: "DHL-88421",
  amount: "₹24,000",
  subtotal: "₹21,120",
  gst: "₹2,880",
  estDelivery: "May 22, 2026",
};

export const orderedProducts = [
  { name: "Banarasi Silk Saree", sku: "BSS-0012", qty: "1", amount: "₹12,000" },
  { name: "Cotton Kurta", sku: "CKT-7821", qty: "1", amount: "₹12,000" },
];

export const statusSteps = ["Pending", "Processing", "Packed", "Shipped", "Out for Delivery", "Delivered"];
