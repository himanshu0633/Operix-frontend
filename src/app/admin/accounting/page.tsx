"use client";

import { useState } from "react";
import {
  TrendingUp,
  TrendingDown,
  DollarSign,
  BarChart3,
  ArrowUpRight,
  ArrowDownRight,
  CreditCard,
  Building2,
  Printer,
  Download,
  Share2,
  FileText,
  Plus,
  Search,
  ChevronDown,
  ArrowLeft,
  Filter,
  Scale,
  BookOpen,
  Coins,
  Percent,
  Calculator,
  PercentCircle,
  TrendingUp as TrendingUpIcon,
  Check,
  Upload
} from "lucide-react";
import { AdminShell } from "../components/AdminShell";

// Transaction Interface
interface Transaction {
  id: string;
  date: string;
  type: "Income" | "Expense";
  category: string;
  reference: string;
  party: string;
  amount: string;
  status: "Received" | "Paid" | "Pending";
}

// Mock Transactions List
const mockTransactions: Transaction[] = [
  {
    id: "tx-1",
    date: "2026-05-28",
    type: "Income",
    category: "Sales",
    reference: "ORD-1284",
    party: "Ramesh Traders",
    amount: "₹48,500",
    status: "Received"
  },
  {
    id: "tx-2",
    date: "2026-05-27",
    type: "Expense",
    category: "Rent",
    reference: "EXP-0042",
    party: "Office Landlord",
    amount: "₹25,000",
    status: "Paid"
  },
  {
    id: "tx-3",
    date: "2026-05-26",
    type: "Income",
    category: "Sales",
    reference: "ORD-1280",
    party: "Priya Boutique",
    amount: "₹22,400",
    status: "Received"
  },
  {
    id: "tx-4",
    date: "2026-05-25",
    type: "Expense",
    category: "Inventory",
    reference: "PO-0888",
    party: "Mehta Textiles",
    amount: "₹1,20,000",
    status: "Pending"
  },
  {
    id: "tx-5",
    date: "2026-05-24",
    type: "Expense",
    category: "Marketing",
    reference: "MKT-814",
    party: "Meta Ads",
    amount: "₹8,500",
    status: "Paid"
  },
  {
    id: "tx-6",
    date: "2026-05-23",
    type: "Income",
    category: "Returns",
    reference: "REF-808",
    party: "GST Refund",
    amount: "₹12,800",
    status: "Received"
  }
];

// CSS Chart Data (Revenue vs Expenses height percentages)
const chartMonths = [
  { month: "Jan", revenueHeight: "60%", expenseHeight: "50%" },
  { month: "Feb", revenueHeight: "85%", expenseHeight: "65%" },
  { month: "Mar", revenueHeight: "95%", expenseHeight: "75%" },
  { month: "Apr", revenueHeight: "70%", expenseHeight: "55%" },
  { month: "May", revenueHeight: "100%", expenseHeight: "80%" }
];

export default function AccountingPage() {
  // Toggle between dashboard list and full P&L / Balance Sheet statements / New Income / New Expense
  const [activeStatement, setActiveStatement] = useState<null | "p&l" | "balance_sheet" | "new_income" | "new_expense">(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [transactions, setTransactions] = useState<Transaction[]>(mockTransactions);

  // New Income Entry Form States
  const [incomeSource, setIncomeSource] = useState("");
  const [incomeAmount, setIncomeAmount] = useState("");
  const [incomeInvoice, setIncomeInvoice] = useState("");
  const [incomeDate, setIncomeDate] = useState("2026-06-26");
  const [incomePaymentMethod, setIncomePaymentMethod] = useState("");
  const [incomeCustomer, setIncomeCustomer] = useState("");

  // New Expense Entry Form States
  const [expenseType, setExpenseType] = useState("");
  const [expenseVendor, setExpenseVendor] = useState("");
  const [expenseAmount, setExpenseAmount] = useState("");
  const [expenseDate, setExpenseDate] = useState("2026-06-26");
  const [expenseGstRate, setExpenseGstRate] = useState("");
  const [expensePaymentMethod, setExpensePaymentMethod] = useState("");
  const [expenseNotes, setExpenseNotes] = useState("");

  const handleSaveIncome = () => {
    if (!incomeSource || !incomeAmount) return;
    const newTx: Transaction = {
      id: `tx-${Date.now()}`,
      date: incomeDate,
      type: "Income",
      category: incomeSource,
      reference: incomeInvoice || "INV-XXXX",
      party: incomeCustomer || "General Client",
      amount: `₹${Number(incomeAmount).toLocaleString("en-IN")}`,
      status: "Received"
    };

    setTransactions([newTx, ...transactions]);

    // Reset Form
    setIncomeSource("");
    setIncomeAmount("");
    setIncomeInvoice("");
    setIncomeDate("2026-06-26");
    setIncomePaymentMethod("");
    setIncomeCustomer("");

    setActiveStatement(null);
  };

  const handleSaveExpense = () => {
    if (!expenseType || !expenseAmount) return;
    const newTx: Transaction = {
      id: `tx-${Date.now()}`,
      date: expenseDate,
      type: "Expense",
      category: expenseType,
      reference: `EXP-${Math.floor(1000 + Math.random() * 9000)}`,
      party: expenseVendor || "General Payee",
      amount: `₹${Number(expenseAmount).toLocaleString("en-IN")}`,
      status: "Paid"
    };

    setTransactions([newTx, ...transactions]);

    // Reset Form
    setExpenseType("");
    setExpenseVendor("");
    setExpenseAmount("");
    setExpenseDate("2026-06-26");
    setExpenseGstRate("");
    setExpensePaymentMethod("");
    setExpenseNotes("");

    setActiveStatement(null);
  };

  // Module actions mapping icons
  const advancedModules = [
    { name: "GST Center", icon: Coins },
    { name: "Trial Balance", icon: Scale },
    { name: "Journal Entries", icon: BookOpen },
    { name: "Bank Reconciliation", icon: Building2 },
    { name: "Receivables", icon: ArrowUpRight },
    { name: "Payables", icon: ArrowDownRight },
    { name: "Fixed Assets", icon: BarChart3 },
    { name: "Tax Summary", icon: FileText },
    { name: "Depreciation", icon: TrendingDown },
    { name: "Ledger Management", icon: BookOpen }
  ];

  return (
    <AdminShell activePage="accounting">
      <section className="content accountingContent">
        {/* ==========================================================================
           1. DASHBOARD VIEW
           ========================================================================== */}
        {activeStatement === null && (
          <>
            <div className="accountingHero">
              <div>
                <h1>Accounting</h1>
                <p>Monitor revenue, expenses, cash flow, and profitability across your business.</p>
              </div>
              <div className="accountingActions">
                <button type="button">
                  <Download size={15} /> Export Financials
                </button>
                <button type="button" onClick={() => setActiveStatement("p&l")}>
                  <FileText size={15} /> Generate P&L
                </button>
                 <button type="button" onClick={() => setActiveStatement("new_income")}>
                  <ArrowUpRight size={15} /> New Income
                </button>
                <button type="button" className="primary" onClick={() => setActiveStatement("new_expense")}>
                  <Plus size={16} /> New Expense
                </button>
              </div>
            </div>

            {/* 8 Metric Cards Grid */}
            <section className="accountingStatsGrid" aria-label="Accounting dashboard metrics">
              <div className="accountingStatCard greenIcon">
                <div className="accountingStatCardHeader">
                  <div className="accountingStatCardIcon">
                    <TrendingUp size={16} />
                  </div>
                  <span className="green">+18.2%</span>
                </div>
                <strong>₹42.8L</strong>
                <span>Revenue</span>
              </div>

              <div className="accountingStatCard redIcon">
                <div className="accountingStatCardHeader">
                  <div className="accountingStatCardIcon">
                    <TrendingDown size={16} />
                  </div>
                  <span className="red">+12.1%</span>
                </div>
                <strong>₹28.4L</strong>
                <span>Expenses</span>
              </div>

              <div className="accountingStatCard greenIcon">
                <div className="accountingStatCardHeader">
                  <div className="accountingStatCardIcon">
                    <DollarSign size={16} />
                  </div>
                  <span className="green">+22.4%</span>
                </div>
                <strong>₹14.4L</strong>
                <span>Gross Profit</span>
              </div>

              <div className="accountingStatCard greenIcon">
                <div className="accountingStatCardHeader">
                  <div className="accountingStatCardIcon">
                    <BarChart3 size={16} />
                  </div>
                  <span className="green">+9.6%</span>
                </div>
                <strong>₹9.8L</strong>
                <span>Net Profit</span>
              </div>

              <div className="accountingStatCard redIcon">
                <div className="accountingStatCardHeader">
                  <div className="accountingStatCardIcon">
                    <ArrowUpRight size={16} />
                  </div>
                  <span className="red">-4.1%</span>
                </div>
                <strong>₹6.2L</strong>
                <span>Receivables</span>
              </div>

              <div className="accountingStatCard redIcon">
                <div className="accountingStatCardHeader">
                  <div className="accountingStatCardIcon">
                    <ArrowDownRight size={16} />
                  </div>
                  <span className="red">+2.3%</span>
                </div>
                <strong>₹3.8L</strong>
                <span>Payables</span>
              </div>

              <div className="accountingStatCard greenIcon">
                <div className="accountingStatCardHeader">
                  <div className="accountingStatCardIcon">
                    <CreditCard size={16} />
                  </div>
                  <span className="green">+8.4%</span>
                </div>
                <strong>₹1.24L</strong>
                <span>Cash In Hand</span>
              </div>

              <div className="accountingStatCard greenIcon">
                <div className="accountingStatCardHeader">
                  <div className="accountingStatCardIcon">
                    <Building2 size={16} />
                  </div>
                  <span className="green">+5.2%</span>
                </div>
                <strong>₹18.6L</strong>
                <span>Bank Balance</span>
              </div>
            </section>

            {/* Middle Section (Charts and Statements summary) */}
            <section className="accountingMiddleSection">
              {/* Revenue vs Expenses Chart */}
              <div className="accountingChartCard">
                <div className="accountingChartCardHeader">
                  <h3>Revenue vs Expenses</h3>
                </div>
                <div className="barChartWrap">
                  <div className="chartBars">
                    {chartMonths.map((item) => (
                      <div className="chartMonthColumn" key={item.month}>
                        <div className="chartBarsPair">
                          <div
                            className="chartBar revenue"
                            style={{ height: item.revenueHeight }}
                          />
                          <div
                            className="chartBar expense"
                            style={{ height: item.expenseHeight }}
                          />
                        </div>
                        <span className="chartMonthLabel">{item.month}</span>
                      </div>
                    ))}
                  </div>
                  <div className="chartLegend">
                    <div className="legendItem">
                      <span className="legendColor revenue" />
                      <span>Revenue</span>
                    </div>
                    <div className="legendItem">
                      <span className="legendColor expense" />
                      <span>Expenses</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Profit & Loss Card */}
              <div className="accountingStatementCard">
                <div className="accountingStatementCardHeader">
                  <h3>Profit & Loss</h3>
                  <button
                    className="statementLink"
                    type="button"
                    onClick={() => setActiveStatement("p&l")}
                  >
                    View Full Statement
                  </button>
                </div>
                <div className="statementRowsList">
                  <div className="statementRow">
                    <span>Sales Revenue</span>
                    <strong className="greenTextVal">₹42.8L</strong>
                  </div>
                  <div className="statementRow">
                    <span>Cost of Goods</span>
                    <strong className="redTextVal">-₹28.4L</strong>
                  </div>
                  <div className="statementRow">
                    <span>Gross Profit</span>
                    <strong className="greenTextVal">₹14.4L</strong>
                  </div>
                  <div className="statementRow">
                    <span>Operating Expenses</span>
                    <strong className="redTextVal">-₹4.6L</strong>
                  </div>
                  <div className="statementRow total greenVal">
                    <span>Net Profit</span>
                    <strong>₹9.8L</strong>
                  </div>
                </div>
              </div>

              {/* Balance Sheet Card */}
              <div className="accountingStatementCard">
                <div className="accountingStatementCardHeader">
                  <h3>Balance Sheet</h3>
                  <button
                    className="statementLink"
                    type="button"
                    onClick={() => setActiveStatement("balance_sheet")}
                  >
                    View Full
                  </button>
                </div>
                <div className="statementRowsList">
                  <div className="statementRow">
                    <span>Total Assets</span>
                    <strong className="greenTextVal">₹68.4L</strong>
                  </div>
                  <div className="statementRow">
                    <span>Total Liabilities</span>
                    <strong className="redTextVal">₹24.2L</strong>
                  </div>
                  <div className="statementRow">
                    <span>Equity</span>
                    <strong className="greenTextVal">₹44.2L</strong>
                  </div>
                  <div className="statementRow total greenVal">
                    <span>Net Worth</span>
                    <strong>₹44.2L</strong>
                  </div>
                </div>
              </div>
            </section>

            {/* Transactions Section */}
            <section className="transactionsTableWrap">
              <div className="transactionsHeader">
                <h2>Recent Transactions</h2>
                <div className="transactionFilters">
                  <button type="button">
                    <Filter size={15} /> Filter
                  </button>
                  <button type="button">
                    <Download size={15} /> Export
                  </button>
                </div>
              </div>

              <div className="transactionsTable">
                <div className="transactionRow transactionHead">
                  <span>Date</span>
                  <span>Type</span>
                  <span>Category</span>
                  <span>Reference</span>
                  <span>Party</span>
                  <span>Amount</span>
                  <span>Status</span>
                  <span>Actions</span>
                </div>

                {transactions.map((tx) => (
                  <div className="transactionRow" key={tx.id}>
                    <span className="transactionDate">{tx.date}</span>
                    <div>
                      <span className={`transactionBadge ${tx.type.toLowerCase()}`}>
                        {tx.type}
                      </span>
                    </div>
                    <span>{tx.category}</span>
                    <span>{tx.reference}</span>
                    <span>{tx.party}</span>
                    <span className="transactionAmount">{tx.amount}</span>
                    <div>
                      <span className={`statusBadge ${tx.status.toLowerCase()}`}>
                        <i />
                        {tx.status}
                      </span>
                    </div>
                    <div>
                      <button type="button" className="transactionActionBtn" title="View Invoice">
                        <FileText size={13} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Advanced Modules Grid */}
            <section className="advancedAccountingWrap">
              <h2>Advanced Accounting Modules</h2>
              <div className="modulesGrid">
                {advancedModules.map((item) => (
                  <div className="moduleCard" key={item.name}>
                    <div className="moduleIcon">
                      <item.icon size={20} />
                    </div>
                    <span>{item.name}</span>
                  </div>
                ))}
              </div>
            </section>
          </>
        )}

        {/* ==========================================================================
           2. DETAILED PROFIT & LOSS VIEW
           ========================================================================== */}
        {activeStatement === "p&l" && (
          <>
            <div className="backNav" onClick={() => setActiveStatement(null)}>
              <button type="button" className="backBtn">
                <ArrowLeft size={16} />
              </button>
              <div className="detailsHeaderInfo">
                <h1>Profit & Loss Statement</h1>
                <span>FY 2025—26 • April 2025 — March 2026</span>
              </div>
            </div>

            <div className="statementSheetCard">
              <div className="accountingHero" style={{ marginBottom: 0, paddingBottom: 0 }}>
                <div />
                <div className="accountingActions">
                  <button type="button">
                    <Printer size={15} /> Print
                  </button>
                  <button type="button">
                    <Download size={15} /> Export PDF
                  </button>
                  <button type="button">
                    <Share2 size={15} /> Share
                  </button>
                </div>
              </div>

              {/* Revenue */}
              <div className="statementSection">
                <h3 className="statementSectionTitle">Revenue</h3>
                <div className="sheetRow">
                  <span className="sheetLabel">Gross Sales</span>
                  <span className="sheetVal">₹48,40,000</span>
                </div>
                <div className="sheetRow">
                  <span className="sheetLabel">Sales Returns</span>
                  <span className="sheetVal">-₹5,60,000</span>
                </div>
                <div className="sheetRow subTotal green">
                  <span className="sheetLabel">Net Revenue</span>
                  <span className="sheetVal">₹42,80,000</span>
                </div>
              </div>

              {/* COGS */}
              <div className="statementSection">
                <h3 className="statementSectionTitle">Cost of Goods Sold</h3>
                <div className="sheetRow">
                  <span className="sheetLabel">Opening Stock</span>
                  <span className="sheetVal">₹12,00,000</span>
                </div>
                <div className="sheetRow">
                  <span className="sheetLabel">Purchases</span>
                  <span className="sheetVal">₹18,40,000</span>
                </div>
                <div className="sheetRow">
                  <span className="sheetLabel">Closing Stock</span>
                  <span className="sheetVal">-₹2,00,000</span>
                </div>
                <div className="sheetRow subTotal red">
                  <span className="sheetLabel">COGS Total</span>
                  <span className="sheetVal">₹28,40,000</span>
                </div>
              </div>

              {/* Gross Profit Highlight panel */}
              <div className="sheetHighlightCard tealBorder">
                <span className="sheetHighlightLabel">Gross Profit</span>
                <span className="sheetHighlightVal">₹14,40,000</span>
              </div>

              {/* OpEx */}
              <div className="statementSection">
                <h3 className="statementSectionTitle">Operating Expenses</h3>
                <div className="sheetRow">
                  <span className="sheetLabel">Salaries & Wages</span>
                  <span className="sheetVal">₹2,40,000</span>
                </div>
                <div className="sheetRow">
                  <span className="sheetLabel">Rent & Utilities</span>
                  <span className="sheetVal">₹80,000</span>
                </div>
                <div className="sheetRow">
                  <span className="sheetLabel">Marketing Expenses</span>
                  <span className="sheetVal">₹60,000</span>
                </div>
                <div className="sheetRow">
                  <span className="sheetLabel">Miscellaneous</span>
                  <span className="sheetVal">₹80,000</span>
                </div>
                <div className="sheetRow subTotal red">
                  <span className="sheetLabel">Total OpEx</span>
                  <span className="sheetVal">₹4,60,000</span>
                </div>
              </div>

              {/* Net Profit Highlight panel */}
              <div className="sheetHighlightCard blueBorder">
                <span className="sheetHighlightLabel">Net Profit</span>
                <span className="sheetHighlightVal">₹9,80,000</span>
              </div>
            </div>
          </>
        )}

        {/* ==========================================================================
           3. DETAILED BALANCE SHEET VIEW
           ========================================================================== */}
        {activeStatement === "balance_sheet" && (
          <>
            <div className="backNav" onClick={() => setActiveStatement(null)}>
              <button type="button" className="backBtn">
                <ArrowLeft size={16} />
              </button>
              <div className="detailsHeaderInfo">
                <h1>Balance Sheet Statement</h1>
                <span>As of March 31, 2026</span>
              </div>
            </div>

            <div className="statementSheetCard">
              <div className="accountingHero" style={{ marginBottom: 0, paddingBottom: 0 }}>
                <div />
                <div className="accountingActions">
                  <button type="button">
                    <Printer size={15} /> Print
                  </button>
                  <button type="button">
                    <Download size={15} /> Export PDF
                  </button>
                  <button type="button">
                    <Share2 size={15} /> Share
                  </button>
                </div>
              </div>

              {/* Assets */}
              <div className="statementSection">
                <h3 className="statementSectionTitle">Assets</h3>
                <div className="sheetRow">
                  <span className="sheetLabel">Cash & Bank Balances</span>
                  <span className="sheetVal">₹19,84,000</span>
                </div>
                <div className="sheetRow">
                  <span className="sheetLabel">Accounts Receivable</span>
                  <span className="sheetVal">₹6,20,000</span>
                </div>
                <div className="sheetRow">
                  <span className="sheetLabel">Inventory Stock Value</span>
                  <span className="sheetVal">₹12,00,000</span>
                </div>
                <div className="sheetRow">
                  <span className="sheetLabel">Fixed Property & Equipment</span>
                  <span className="sheetVal">₹30,36,000</span>
                </div>
                <div className="sheetRow subTotal green">
                  <span className="sheetLabel">Total Assets</span>
                  <span className="sheetVal">₹68,40,000</span>
                </div>
              </div>

              {/* Liabilities */}
              <div className="statementSection">
                <h3 className="statementSectionTitle">Liabilities</h3>
                <div className="sheetRow">
                  <span className="sheetLabel">Accounts Payable</span>
                  <span className="sheetVal">₹3,80,000</span>
                </div>
                <div className="sheetRow">
                  <span className="sheetLabel">Short-term Bank Borrowings</span>
                  <span className="sheetVal">₹8,40,000</span>
                </div>
                <div className="sheetRow">
                  <span className="sheetLabel">Long-term Secured Debt</span>
                  <span className="sheetVal">₹12,00,000</span>
                </div>
                <div className="sheetRow subTotal red">
                  <span className="sheetLabel">Total Liabilities</span>
                  <span className="sheetVal">₹24,20,000</span>
                </div>
              </div>

              {/* Equity */}
              <div className="statementSection">
                <h3 className="statementSectionTitle">Equity</h3>
                <div className="sheetRow">
                  <span className="sheetLabel">Shareholders Capital Contribution</span>
                  <span className="sheetVal">₹30,00,000</span>
                </div>
                <div className="sheetRow">
                  <span className="sheetLabel">Retained Accumulated Earnings</span>
                  <span className="sheetVal">₹14,20,000</span>
                </div>
                <div className="sheetRow subTotal green">
                  <span className="sheetLabel">Total Equity</span>
                  <span className="sheetVal">₹44,20,000</span>
                </div>
              </div>

              {/* Net Worth highlight panel */}
              <div className="sheetHighlightCard tealBorder">
                <span className="sheetHighlightLabel">Net Worth (Equity + Profit)</span>
                <span className="sheetHighlightVal">₹44,20,000</span>
              </div>
            </div>
          </>
        )}

        {/* ==========================================================================
           4. INCOME ENTRY VIEW
           ========================================================================== */}
        {activeStatement === "new_income" && (
          <>
            <div className="backNav" onClick={() => setActiveStatement(null)}>
              <button type="button" className="backBtn">
                <ArrowLeft size={16} />
              </button>
              <div className="detailsHeaderInfo">
                <h1 style={{ color: "rgba(255, 255, 255, 0.15)" }}>Income Entry</h1>
                <span>Record additional income sources and financial receipts.</span>
              </div>
            </div>

            <div className="accountingFormCard">
              <div className="accountingFormGrid">
                <div className="formGroup">
                  <label htmlFor="incSource">Income Source</label>
                  <input
                    id="incSource"
                    type="text"
                    value={incomeSource}
                    onChange={(e) => setIncomeSource(e.target.value)}
                  />
                </div>
                <div className="formGroup">
                  <label htmlFor="incAmount">Amount (₹)</label>
                  <input
                    id="incAmount"
                    type="number"
                    placeholder="0.00"
                    value={incomeAmount}
                    onChange={(e) => setIncomeAmount(e.target.value)}
                  />
                </div>
                <div className="formGroup">
                  <label htmlFor="incInvoice">Invoice Reference</label>
                  <input
                    id="incInvoice"
                    type="text"
                    placeholder="INV-XXXX"
                    value={incomeInvoice}
                    onChange={(e) => setIncomeInvoice(e.target.value)}
                  />
                </div>
                <div className="formGroup">
                  <label htmlFor="incDate">Date</label>
                  <input
                    id="incDate"
                    type="date"
                    value={incomeDate}
                    onChange={(e) => setIncomeDate(e.target.value)}
                  />
                </div>
                <div className="formGroup">
                  <label htmlFor="incPayment">Payment Method</label>
                  <select
                    id="incPayment"
                    value={incomePaymentMethod}
                    onChange={(e) => setIncomePaymentMethod(e.target.value)}
                  >
                    <option value="">Select Payment Method</option>
                    <option value="Cash">Cash</option>
                    <option value="Bank Transfer">Bank Transfer</option>
                    <option value="UPI">UPI</option>
                    <option value="Credit Card">Credit Card</option>
                    <option value="Cheque">Cheque</option>
                  </select>
                </div>
                <div className="formGroup">
                  <label htmlFor="incCustomer">Customer / Source</label>
                  <input
                    id="incCustomer"
                    type="text"
                    placeholder="Enter customer or source name"
                    value={incomeCustomer}
                    onChange={(e) => setIncomeCustomer(e.target.value)}
                  />
                </div>
              </div>

              <div className="formFooterActions">
                <button
                  type="button"
                  className="secondary"
                  onClick={() => setActiveStatement(null)}
                >
                  Cancel
                </button>
                <button type="button" className="secondary">
                  <FileText size={15} /> Generate Receipt
                </button>
                <button type="button" className="primary" onClick={handleSaveIncome}>
                  <Check size={15} /> Save Income
                </button>
              </div>
            </div>
          </>
        )}
        {/* ==========================================================================
           5. EXPENSE ENTRY VIEW
           ========================================================================== */}
        {activeStatement === "new_expense" && (
          <>
            <div className="backNav" onClick={() => setActiveStatement(null)}>
              <button type="button" className="backBtn">
                <ArrowLeft size={16} />
              </button>
              <div className="detailsHeaderInfo">
                <h1 style={{ color: "rgba(255, 255, 255, 0.15)" }}>Expense Entry</h1>
                <span>Record operational expenses and maintain accurate financial records.</span>
              </div>
            </div>

            <div className="accountingFormCard">
              <h2 className="formSectionHeader" style={{ borderBottom: "none", margin: 0, paddingBottom: 0 }}>
                Expense Details
              </h2>
              <div className="accountingFormGrid">
                <div className="formGroup">
                  <label htmlFor="expType">Expense Type</label>
                  <input
                    id="expType"
                    type="text"
                    value={expenseType}
                    onChange={(e) => setExpenseType(e.target.value)}
                  />
                </div>
                <div className="formGroup">
                  <label htmlFor="expVendor">Vendor / Payee</label>
                  <input
                    id="expVendor"
                    type="text"
                    placeholder="Enter vendor name"
                    value={expenseVendor}
                    onChange={(e) => setExpenseVendor(e.target.value)}
                  />
                </div>
                <div className="formGroup">
                  <label htmlFor="expAmount">Amount (₹)</label>
                  <input
                    id="expAmount"
                    type="number"
                    placeholder="0.00"
                    value={expenseAmount}
                    onChange={(e) => setExpenseAmount(e.target.value)}
                  />
                </div>
                <div className="formGroup">
                  <label htmlFor="expDate">Date</label>
                  <input
                    id="expDate"
                    type="date"
                    value={expenseDate}
                    onChange={(e) => setExpenseDate(e.target.value)}
                  />
                </div>
                <div className="formGroup">
                  <label htmlFor="expGst">GST Rate</label>
                  <select
                    id="expGst"
                    value={expenseGstRate}
                    onChange={(e) => setExpenseGstRate(e.target.value)}
                  >
                    <option value="">Select GST Rate</option>
                    <option value="0%">0%</option>
                    <option value="5%">5%</option>
                    <option value="12%">12%</option>
                    <option value="18%">18%</option>
                    <option value="28%">28%</option>
                  </select>
                </div>
                <div className="formGroup">
                  <label htmlFor="expPayment">Payment Method</label>
                  <select
                    id="expPayment"
                    value={expensePaymentMethod}
                    onChange={(e) => setExpensePaymentMethod(e.target.value)}
                  >
                    <option value="">Select Payment Method</option>
                    <option value="Cash">Cash</option>
                    <option value="Bank Transfer">Bank Transfer</option>
                    <option value="UPI">UPI</option>
                    <option value="Credit Card">Credit Card</option>
                    <option value="Cheque">Cheque</option>
                  </select>
                </div>
              </div>

              <h2 className="formSectionHeader" style={{ borderBottom: "none", margin: 0, paddingBottom: 0 }}>
                Attachments
              </h2>
              <div className="attachmentsDropzone">
                <Upload size={28} />
                <span>Drag & drop receipt, invoice, or supporting files</span>
                <button type="button" className="browseBtn">
                  Browse Files
                </button>
              </div>

              <h2 className="formSectionHeader" style={{ borderBottom: "none", margin: 0, paddingBottom: 0 }}>
                Notes
              </h2>
              <div className="formGroup" style={{ width: "100%" }}>
                <textarea
                  placeholder="Add any notes or reference details..."
                  value={expenseNotes}
                  onChange={(e) => setExpenseNotes(e.target.value)}
                />
              </div>

              <div className="formFooterActions">
                <button
                  type="button"
                  className="secondary"
                  onClick={() => setActiveStatement(null)}
                >
                  Cancel
                </button>
                <button type="button" className="secondary">
                  Save Draft
                </button>
                <button type="button" className="primary" onClick={handleSaveExpense}>
                  <Check size={15} /> Save Expense
                </button>
              </div>
            </div>
          </>
        )}
      </section>
    </AdminShell>
  );
}
