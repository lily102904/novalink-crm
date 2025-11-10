import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "./ui/table";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { ArrowLeft, Plus, FileText, DollarSign, TrendingUp, TrendingDown, Download, CreditCard, Wallet } from "lucide-react";
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Area, AreaChart } from "recharts";
import { useState } from "react";

interface FinanceScreenProps {
  onNavigate: (screen: string) => void;
}

const incomeExpenseData = [
  { month: "Jan", income: 65000, expenses: 42000, profit: 23000 },
  { month: "Feb", income: 72000, expenses: 45000, profit: 27000 },
  { month: "Mar", income: 68000, expenses: 43000, profit: 25000 },
  { month: "Apr", income: 81000, expenses: 48000, profit: 33000 },
  { month: "May", income: 75000, expenses: 46000, profit: 29000 },
  { month: "Jun", income: 87000, expenses: 51000, profit: 36000 },
];

const revenueGrowthData = [
  { month: "Jan", revenue: 45000, forecast: 42000 },
  { month: "Feb", revenue: 52000, forecast: 48000 },
  { month: "Mar", revenue: 48000, forecast: 50000 },
  { month: "Apr", revenue: 61000, forecast: 55000 },
  { month: "May", revenue: 55000, forecast: 58000 },
  { month: "Jun", revenue: 67000, forecast: 62000 },
  { month: "Jul", revenue: 72000, forecast: 68000 },
  { month: "Aug", revenue: 68000, forecast: 70000 },
];

const expenseCategories = [
  { category: "Salaries", amount: 125000, percentage: 45, trend: "up" },
  { category: "Operations", amount: 55000, percentage: 20, trend: "stable" },
  { category: "Marketing", amount: 42000, percentage: 15, trend: "up" },
  { category: "Technology", amount: 35000, percentage: 12, trend: "down" },
  { category: "Office", amount: 22000, percentage: 8, trend: "stable" },
];

const invoices = [
  { id: "INV-001", client: "Acme Corp", amount: 45000, status: "paid", date: "Oct 20, 2025", dueDate: "Oct 20, 2025" },
  { id: "INV-002", client: "TechStart Inc", amount: 32500, status: "pending", date: "Oct 25, 2025", dueDate: "Nov 10, 2025" },
  { id: "INV-003", client: "Global Solutions", amount: 67000, status: "paid", date: "Oct 15, 2025", dueDate: "Oct 15, 2025" },
  { id: "INV-004", client: "Blue Ocean Tech", amount: 28000, status: "overdue", date: "Oct 10, 2025", dueDate: "Oct 25, 2025" },
  { id: "INV-005", client: "Summit Enterprises", amount: 52000, status: "pending", date: "Oct 28, 2025", dueDate: "Nov 15, 2025" },
  { id: "INV-006", client: "Vertex Systems", amount: 38500, status: "paid", date: "Oct 22, 2025", dueDate: "Oct 22, 2025" },
];

export function FinanceScreen({ onNavigate }: FinanceScreenProps) {
  const [timeRange, setTimeRange] = useState("6months");
  const [invoiceFilter, setInvoiceFilter] = useState("all");

  const filteredInvoices = invoiceFilter === "all" 
    ? invoices 
    : invoices.filter(inv => inv.status === invoiceFilter);

  const getStatusColor = (status: string) => {
    switch (status) {
      case "paid":
        return "bg-green-100 text-green-700";
      case "pending":
        return "bg-yellow-100 text-yellow-700";
      case "overdue":
        return "bg-red-100 text-red-700";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  const totalPending = invoices.filter(i => i.status === "pending").reduce((sum, inv) => sum + inv.amount, 0);
  const totalPaid = invoices.filter(i => i.status === "paid").reduce((sum, inv) => sum + inv.amount, 0);
  const totalOverdue = invoices.filter(i => i.status === "overdue").reduce((sum, inv) => sum + inv.amount, 0);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <div className="flex items-center gap-3">
            <Button variant="ghost" size="sm" onClick={() => onNavigate("dashboard")}>
              <ArrowLeft size={18} />
            </Button>
            <h1>Finance Management</h1>
          </div>
          <p className="text-gray-600 mt-1 ml-11">Track income, expenses, and revenue</p>
        </div>
        <div className="flex gap-2">
          <Select value={timeRange} onValueChange={setTimeRange}>
            <SelectTrigger className="w-36">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="1month">Last Month</SelectItem>
              <SelectItem value="3months">Last 3 Months</SelectItem>
              <SelectItem value="6months">Last 6 Months</SelectItem>
              <SelectItem value="1year">Last Year</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline">
            <Download size={18} className="mr-2" />
            Export Report
          </Button>
          <Button variant="outline">
            <Plus size={18} className="mr-2" />
            Add Expense
          </Button>
          <Button className="bg-primary hover:bg-primary/90">
            <FileText size={18} className="mr-2" />
            Create Invoice
          </Button>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="hover:shadow-lg transition-shadow">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Pending Invoices</p>
                <h2 className="mt-2">${(totalPending / 1000).toFixed(1)}K</h2>
                <p className="text-sm text-orange-600 mt-1">{invoices.filter(i => i.status === "pending").length} invoices</p>
              </div>
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                <FileText className="text-orange-600" size={24} />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-shadow">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Approved Payments</p>
                <h2 className="mt-2">${(totalPaid / 1000).toFixed(1)}K</h2>
                <p className="text-sm text-green-600 mt-1">{invoices.filter(i => i.status === "paid").length} payments</p>
              </div>
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                <DollarSign className="text-green-600" size={24} />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-shadow">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Total Revenue</p>
                <h2 className="mt-2">$453,200</h2>
                <p className="text-sm text-primary mt-1 flex items-center gap-1">
                  <TrendingUp size={14} />
                  +15.3% growth
                </p>
              </div>
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <TrendingUp className="text-primary" size={24} />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-shadow border-red-200">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Overdue Invoices</p>
                <h2 className="mt-2">${(totalOverdue / 1000).toFixed(1)}K</h2>
                <p className="text-sm text-red-600 mt-1">{invoices.filter(i => i.status === "overdue").length} overdue</p>
              </div>
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                <CreditCard className="text-red-600" size={24} />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Monthly Income vs Expenses Chart */}
        <Card>
          <CardHeader>
            <CardTitle>Monthly Income vs Expenses</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={incomeExpenseData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="income" fill="#4CAF50" name="Income" radius={[8, 8, 0, 0]} />
                <Bar dataKey="expenses" fill="#FF5722" name="Expenses" radius={[8, 8, 0, 0]} />
                <Bar dataKey="profit" fill="#1E88E5" name="Profit" radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Revenue Growth Chart */}
        <Card>
          <CardHeader>
            <CardTitle>Revenue Growth & Forecast</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <AreaChart data={revenueGrowthData}>
                <defs>
                  <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#1E88E5" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="#1E88E5" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Area 
                  type="monotone" 
                  dataKey="revenue" 
                  stroke="#1E88E5" 
                  fillOpacity={1} 
                  fill="url(#colorRevenue)"
                  name="Actual Revenue"
                />
                <Line 
                  type="monotone" 
                  dataKey="forecast" 
                  stroke="#FFC107" 
                  strokeWidth={2}
                  strokeDasharray="5 5"
                  name="Forecast"
                />
              </AreaChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Expense Categories */}
      <Card>
        <CardHeader>
          <CardTitle>Expense Categories</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {expenseCategories.map((category, index) => (
              <div key={index} className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center shadow-sm">
                  <Wallet className="text-primary" size={24} />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h4>{category.category}</h4>
                    <div className="flex items-center gap-2">
                      <span className="text-sm text-gray-600">{category.percentage}%</span>
                      {category.trend === "up" ? (
                        <TrendingUp className="text-red-500" size={16} />
                      ) : category.trend === "down" ? (
                        <TrendingDown className="text-green-500" size={16} />
                      ) : (
                        <div className="w-4 h-0.5 bg-gray-400" />
                      )}
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="flex-1 bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-primary h-2 rounded-full transition-all" 
                        style={{ width: `${category.percentage}%` }}
                      />
                    </div>
                    <span className="text-sm text-gray-900 w-24 text-right">${category.amount.toLocaleString()}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Invoices Table */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>Invoice Management</CardTitle>
            <Select value={invoiceFilter} onValueChange={setInvoiceFilter}>
              <SelectTrigger className="w-36">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Invoices</SelectItem>
                <SelectItem value="paid">Paid</SelectItem>
                <SelectItem value="pending">Pending</SelectItem>
                <SelectItem value="overdue">Overdue</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Invoice ID</TableHead>
                <TableHead>Client</TableHead>
                <TableHead>Amount</TableHead>
                <TableHead>Issue Date</TableHead>
                <TableHead>Due Date</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredInvoices.map((invoice) => (
                <TableRow key={invoice.id} className="hover:bg-gray-50">
                  <TableCell className="font-medium">{invoice.id}</TableCell>
                  <TableCell>{invoice.client}</TableCell>
                  <TableCell>${invoice.amount.toLocaleString()}</TableCell>
                  <TableCell className="text-sm text-gray-600">{invoice.date}</TableCell>
                  <TableCell className="text-sm text-gray-600">{invoice.dueDate}</TableCell>
                  <TableCell>
                    <Badge className={getStatusColor(invoice.status)} variant="secondary">
                      {invoice.status}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm">View</Button>
                      {invoice.status !== "paid" && (
                        <Button variant="default" size="sm" className="bg-primary hover:bg-primary/90">
                          Send
                        </Button>
                      )}
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {/* Recent Transactions */}
      <Card>
        <CardHeader>
          <CardTitle>Recent Transactions</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {[
              { type: "Income", description: "Payment from Acme Corp - INV-001", amount: "+$45,000", date: "Oct 28, 2025", status: "completed", category: "Sales" },
              { type: "Expense", description: "Office Supplies - Staples Inc", amount: "-$2,450", date: "Oct 27, 2025", status: "completed", category: "Operations" },
              { type: "Income", description: "Payment from TechStart Inc - INV-002", amount: "+$32,500", date: "Oct 26, 2025", status: "completed", category: "Sales" },
              { type: "Expense", description: "Employee Salaries - October 2025", amount: "-$85,000", date: "Oct 25, 2025", status: "completed", category: "Payroll" },
              { type: "Income", description: "Payment from Global Solutions - INV-003", amount: "+$67,000", date: "Oct 24, 2025", status: "pending", category: "Sales" },
              { type: "Expense", description: "Marketing Campaign - Google Ads", amount: "-$5,200", date: "Oct 23, 2025", status: "completed", category: "Marketing" },
            ].map((transaction, index) => (
              <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                <div className="flex items-center gap-4">
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                    transaction.type === "Income" ? "bg-green-100" : "bg-red-100"
                  }`}>
                    {transaction.type === "Income" ? (
                      <TrendingUp className="text-green-600" size={20} />
                    ) : (
                      <TrendingDown className="text-red-600" size={20} />
                    )}
                  </div>
                  <div>
                    <p className="text-sm text-gray-900">{transaction.description}</p>
                    <div className="flex items-center gap-2 mt-1">
                      <p className="text-xs text-gray-500">{transaction.date}</p>
                      <span className="text-xs text-gray-400">•</span>
                      <Badge variant="secondary" className="text-xs">{transaction.category}</Badge>
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <p className={`${transaction.type === "Income" ? "text-green-600" : "text-red-600"}`}>
                    {transaction.amount}
                  </p>
                  <p className="text-xs text-gray-500 capitalize mt-1">{transaction.status}</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
