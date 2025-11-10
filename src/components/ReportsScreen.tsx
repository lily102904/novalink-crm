import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { ArrowLeft, Download, FileText, TrendingUp, Users, DollarSign, Target, Calendar } from "lucide-react";
import { PieChart, Pie, Cell, BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar } from "recharts";
import { useState } from "react";
import { toast } from "sonner@2.0.3";

interface ReportsScreenProps {
  onNavigate: (screen: string) => void;
}

const departmentPerformance = [
  { name: "Sales", value: 45, target: 40 },
  { name: "Finance", value: 25, target: 30 },
  { name: "HR", value: 20, target: 18 },
  { name: "Management", value: 10, target: 12 },
];

const COLORS = ["#1E88E5", "#FFC107", "#4CAF50", "#FF5722"];

const quarterlyData = [
  { quarter: "Q1", sales: 120000, revenue: 145000, expenses: 95000, profit: 50000 },
  { quarter: "Q2", sales: 145000, revenue: 168000, expenses: 102000, profit: 66000 },
  { quarter: "Q3", sales: 165000, revenue: 192000, expenses: 108000, profit: 84000 },
  { quarter: "Q4", sales: 185000, revenue: 215000, expenses: 115000, profit: 100000 },
];

const monthlyGrowth = [
  { month: "Jan", growth: 5.2, target: 4.0 },
  { month: "Feb", growth: 7.8, target: 5.0 },
  { month: "Mar", growth: 6.5, target: 6.0 },
  { month: "Apr", growth: 9.2, target: 7.0 },
  { month: "May", growth: 8.1, target: 8.0 },
  { month: "Jun", growth: 11.5, target: 9.0 },
];

const performanceMetrics = [
  { subject: "Sales", A: 95, B: 80, fullMark: 100 },
  { subject: "Customer Satisfaction", A: 88, B: 85, fullMark: 100 },
  { subject: "Employee Engagement", A: 82, B: 75, fullMark: 100 },
  { subject: "Revenue Growth", A: 91, B: 80, fullMark: 100 },
  { subject: "Market Share", A: 76, B: 70, fullMark: 100 },
  { subject: "Innovation", A: 84, B: 78, fullMark: 100 },
];

const topClients = [
  { name: "Acme Corporation", revenue: 185000, deals: 8 },
  { name: "Global Solutions Ltd", revenue: 156000, deals: 6 },
  { name: "TechStart Inc", revenue: 142000, deals: 7 },
  { name: "Summit Enterprises", revenue: 128000, deals: 5 },
  { name: "Phoenix Industries", revenue: 115000, deals: 4 },
];

export function ReportsScreen({ onNavigate }: ReportsScreenProps) {
  const [reportType, setReportType] = useState("comprehensive");
  const [timeRange, setTimeRange] = useState("year");

  const handleDownloadPDF = () => {
    toast.success("Downloading PDF report...");
  };

  const handleExportCSV = () => {
    toast.success("Exporting data to CSV...");
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <div className="flex items-center gap-3">
            <Button variant="ghost" size="sm" onClick={() => onNavigate("dashboard")}>
              <ArrowLeft size={18} />
            </Button>
            <h1>Business Reports & Analytics</h1>
          </div>
          <p className="text-gray-600 mt-1 ml-11">Comprehensive insights and performance metrics</p>
        </div>
        <div className="flex gap-2">
          <Select value={timeRange} onValueChange={setTimeRange}>
            <SelectTrigger className="w-36">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="month">This Month</SelectItem>
              <SelectItem value="quarter">This Quarter</SelectItem>
              <SelectItem value="year">This Year</SelectItem>
              <SelectItem value="custom">Custom Range</SelectItem>
            </SelectContent>
          </Select>
          <Select value={reportType} onValueChange={setReportType}>
            <SelectTrigger className="w-44">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="comprehensive">Comprehensive</SelectItem>
              <SelectItem value="sales">Sales Only</SelectItem>
              <SelectItem value="finance">Finance Only</SelectItem>
              <SelectItem value="hr">HR Only</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline" onClick={handleDownloadPDF}>
            <Download size={18} className="mr-2" />
            Download PDF
          </Button>
          <Button className="bg-primary hover:bg-primary/90" onClick={handleExportCSV}>
            <FileText size={18} className="mr-2" />
            Export CSV
          </Button>
        </div>
      </div>

      {/* Executive Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="hover:shadow-lg transition-shadow border-l-4 border-l-blue-500">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Total Sales</p>
                <h3 className="mt-2">$615,000</h3>
                <p className="text-sm text-green-600 mt-1 flex items-center gap-1">
                  <TrendingUp size={12} />
                  +15.3% YoY
                </p>
              </div>
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <TrendingUp className="text-primary" size={24} />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-shadow border-l-4 border-l-yellow-500">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Total Revenue</p>
                <h3 className="mt-2">$720,000</h3>
                <p className="text-sm text-green-600 mt-1 flex items-center gap-1">
                  <TrendingUp size={12} />
                  +18.2% YoY
                </p>
              </div>
              <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center">
                <DollarSign className="text-accent" size={24} />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-shadow border-l-4 border-l-green-500">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Net Profit</p>
                <h3 className="mt-2">$300,000</h3>
                <p className="text-sm text-green-600 mt-1 flex items-center gap-1">
                  <TrendingUp size={12} />
                  +25.5% YoY
                </p>
              </div>
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                <Target className="text-green-600" size={24} />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-shadow border-l-4 border-l-purple-500">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Team Size</p>
                <h3 className="mt-2">12</h3>
                <p className="text-sm text-blue-600 mt-1 flex items-center gap-1">
                  <Users size={12} />
                  2 new hires
                </p>
              </div>
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                <Users className="text-purple-600" size={24} />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Department Performance */}
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle>Department Performance</CardTitle>
              <Badge variant="secondary">vs Target</Badge>
            </div>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={250}>
              <PieChart>
                <Pie
                  data={departmentPerformance}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, value }) => `${name}: ${value}%`}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {departmentPerformance.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
            <div className="mt-4 space-y-2">
              {departmentPerformance.map((dept, index) => (
                <div key={index} className="flex items-center justify-between text-sm p-2 bg-gray-50 rounded">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full" style={{ backgroundColor: COLORS[index] }} />
                    <span className="text-gray-600">{dept.name}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-gray-900">{dept.value}%</span>
                    <span className="text-xs text-gray-500">({dept.target}% target)</span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Performance Radar */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Overall Performance Metrics</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <RadarChart data={performanceMetrics}>
                <PolarGrid />
                <PolarAngleAxis dataKey="subject" />
                <PolarRadiusAxis angle={90} domain={[0, 100]} />
                <Radar name="Current Year" dataKey="A" stroke="#1E88E5" fill="#1E88E5" fillOpacity={0.6} />
                <Radar name="Last Year" dataKey="B" stroke="#FFC107" fill="#FFC107" fillOpacity={0.6} />
                <Legend />
                <Tooltip />
              </RadarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Monthly Growth Rate */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>Monthly Growth Rate Trend</CardTitle>
            <Badge className="bg-green-100 text-green-700" variant="secondary">
              Exceeding Target
            </Badge>
          </div>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={monthlyGrowth}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line 
                type="monotone" 
                dataKey="growth" 
                stroke="#1E88E5" 
                strokeWidth={3}
                name="Actual Growth %"
                dot={{ fill: "#1E88E5", r: 6 }}
              />
              <Line 
                type="monotone" 
                dataKey="target" 
                stroke="#FFC107" 
                strokeWidth={2}
                strokeDasharray="5 5"
                name="Target Growth %"
                dot={{ fill: "#FFC107", r: 4 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      {/* Quarterly Performance */}
      <Card>
        <CardHeader>
          <CardTitle>Quarterly Performance Overview</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={350}>
            <BarChart data={quarterlyData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis dataKey="quarter" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="sales" fill="#1E88E5" name="Sales" radius={[8, 8, 0, 0]} />
              <Bar dataKey="revenue" fill="#4CAF50" name="Revenue" radius={[8, 8, 0, 0]} />
              <Bar dataKey="expenses" fill="#FF5722" name="Expenses" radius={[8, 8, 0, 0]} />
              <Bar dataKey="profit" fill="#FFC107" name="Profit" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Top Clients */}
        <Card>
          <CardHeader>
            <CardTitle>Top 5 Clients by Revenue</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {topClients.map((client, index) => (
                <div key={index} className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                  <div className="w-10 h-10 bg-primary text-white rounded-lg flex items-center justify-center">
                    <span>#{index + 1}</span>
                  </div>
                  <div className="flex-1">
                    <p className="text-gray-900">{client.name}</p>
                    <p className="text-xs text-gray-500 mt-1">{client.deals} deals closed</p>
                  </div>
                  <div className="text-right">
                    <p className="text-primary">${(client.revenue / 1000).toFixed(0)}K</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Key Metrics */}
        <Card>
          <CardHeader>
            <CardTitle>Key Performance Indicators</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: "Customer Satisfaction", value: "94%", change: "+3%", trend: "up" },
                { label: "Employee Retention", value: "87%", change: "+5%", trend: "up" },
                { label: "Project Completion", value: "92%", change: "+2%", trend: "up" },
                { label: "Average Deal Size", value: "$38.5K", change: "+12%", trend: "up" },
                { label: "Lead Conversion", value: "45%", change: "-2%", trend: "down" },
                { label: "Customer Acquisition Cost", value: "$2.45K", change: "-8%", trend: "up" },
              ].map((metric, index) => (
                <div key={index} className="p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                  <p className="text-xs text-gray-600">{metric.label}</p>
                  <div className="flex items-end justify-between mt-2">
                    <h3 className="text-xl">{metric.value}</h3>
                    <Badge 
                      variant="secondary"
                      className={`text-xs ${
                        metric.trend === "up" 
                          ? metric.change.startsWith("+") 
                            ? "bg-green-100 text-green-700" 
                            : "bg-red-100 text-red-700"
                          : metric.change.startsWith("-") 
                            ? "bg-green-100 text-green-700" 
                            : "bg-red-100 text-red-700"
                      }`}
                    >
                      {metric.change}
                    </Badge>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Action Buttons */}
      <div className="flex justify-center gap-4 pt-4">
        <Button 
          size="lg" 
          className="bg-primary hover:bg-primary/90"
        >
          <FileText size={20} className="mr-2" />
          View Detailed Report
        </Button>
        <Button 
          size="lg" 
          variant="outline"
          onClick={() => onNavigate("dashboard")}
        >
          <Calendar size={20} className="mr-2" />
          Schedule Report
        </Button>
      </div>
    </div>
  );
}
