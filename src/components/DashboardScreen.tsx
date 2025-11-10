import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Badge } from "./ui/badge";
import { Progress } from "./ui/progress";
import { TrendingUp, DollarSign, Users, Activity, Target, Clock, CheckCircle2, AlertCircle } from "lucide-react";
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Area, AreaChart } from "recharts";

interface DashboardScreenProps {
  onNavigate: (screen: string) => void;
}

const revenueData = [
  { month: "Jan", revenue: 45000, target: 40000 },
  { month: "Feb", revenue: 52000, target: 45000 },
  { month: "Mar", revenue: 48000, target: 47000 },
  { month: "Apr", revenue: 61000, target: 50000 },
  { month: "May", revenue: 55000, target: 52000 },
  { month: "Jun", revenue: 67000, target: 55000 },
];

const salesTrendData = [
  { day: "Mon", sales: 12, leads: 8 },
  { day: "Tue", sales: 19, leads: 15 },
  { day: "Wed", sales: 15, leads: 12 },
  { day: "Thu", sales: 25, leads: 18 },
  { day: "Fri", sales: 22, leads: 20 },
  { day: "Sat", sales: 18, leads: 14 },
  { day: "Sun", sales: 10, leads: 7 },
];

const recentActivities = [
  { id: 1, action: "New deal closed", client: "Acme Corp", amount: "$45,000", time: "2 hours ago", user: "Comfort Esonu", type: "success" },
  { id: 2, action: "Payment received", client: "TechStart Inc", amount: "$12,500", time: "5 hours ago", user: "Kwesi Amaning", type: "success" },
  { id: 3, action: "New lead added", client: "Global Solutions", amount: "$28,000", time: "1 day ago", user: "Comfort Esonu", type: "info" },
  { id: 4, action: "Invoice sent", client: "Blue Ocean Ltd", amount: "$33,000", time: "2 days ago", user: "Kwesi Amaning", type: "info" },
  { id: 5, action: "Meeting scheduled", client: "Summit Enterprises", amount: "—", time: "3 days ago", user: "Lillian Adunia", type: "warning" },
];

const topEmployees = [
  {
    name: "Comfort Esonu",
    role: "Sales Manager",
    deals: "24 deals closed",
    revenue: "$485,000",
    performance: 95,
    image: "https://images.unsplash.com/photo-1613114016852-9f99ef56d395?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvY2VhbiUyMHN1bnNldCUyMG5hdHVyZXxlbnwxfHx8fDE3NjE2OTk4OTd8MA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    name: "Kwesi Amaning",
    role: "Finance Director",
    deals: "18 deals closed",
    revenue: "$372,000",
    performance: 88,
    image: "https://images.unsplash.com/photo-1598984229931-c26188b3994a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmb3Jlc3QlMjB0cmVlcyUyMG5hdHVyZXxlbnwxfHx8fDE3NjE2MzY0NDB8MA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    name: "Vanessa Umenze",
    role: "HR Lead",
    deals: "15 deals closed",
    revenue: "$298,000",
    performance: 82,
    image: "https://images.unsplash.com/photo-1616398675428-6f67aae03008?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXNlcnQlMjBsYW5kc2NhcGUlMjBuYXR1cmV8ZW58MXx8fHwxNzYxNjk5ODk4fDA&ixlib=rb-4.1.0&q=80&w=1080",
  },
];

const upcomingTasks = [
  { id: 1, task: "Follow up with Acme Corp", priority: "high", dueDate: "Today, 2:00 PM" },
  { id: 2, task: "Prepare Q4 financial report", priority: "medium", dueDate: "Tomorrow, 10:00 AM" },
  { id: 3, task: "Review new employee applications", priority: "low", dueDate: "Oct 31, 2025" },
  { id: 4, task: "Client meeting with Global Solutions", priority: "high", dueDate: "Nov 1, 2025" },
];

export function DashboardScreen({ onNavigate }: DashboardScreenProps) {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1>Dashboard Overview</h1>
          <p className="text-gray-600 mt-1">Welcome back, Lillian! Here's what's happening today.</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">
            <Target size={16} className="mr-2" />
            Set Goals
          </Button>
          <Button className="bg-primary hover:bg-primary/90" onClick={() => onNavigate("reports")}>
            View Reports
          </Button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="hover:shadow-lg transition-shadow">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Total Sales</p>
                <h3 className="mt-2">$328,500</h3>
                <p className="text-sm text-green-600 mt-1">+12.5% from last month</p>
              </div>
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <TrendingUp className="text-primary" size={24} />
              </div>
            </div>
            <Progress value={75} className="mt-4" />
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-shadow">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Total Revenue</p>
                <h3 className="mt-2">$453,200</h3>
                <p className="text-sm text-green-600 mt-1">+8.2% from last month</p>
              </div>
              <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center">
                <DollarSign className="text-accent" size={24} />
              </div>
            </div>
            <Progress value={82} className="mt-4" />
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-shadow">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Active Clients</p>
                <h3 className="mt-2">156</h3>
                <p className="text-sm text-green-600 mt-1">+23 new this month</p>
              </div>
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                <Users className="text-green-600" size={24} />
              </div>
            </div>
            <Progress value={68} className="mt-4" />
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-shadow">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Pending Deals</p>
                <h3 className="mt-2">42</h3>
                <p className="text-sm text-orange-600 mt-1">12 need attention</p>
              </div>
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                <Activity className="text-orange-600" size={24} />
              </div>
            </div>
            <Progress value={45} className="mt-4" />
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Revenue Overview Chart */}
        <Card className="lg:col-span-2">
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle>Revenue vs Target</CardTitle>
            <div className="flex gap-2">
              <Badge variant="secondary">This Month: $67,000</Badge>
            </div>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <AreaChart data={revenueData}>
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
                <Area type="monotone" dataKey="revenue" stroke="#1E88E5" fillOpacity={1} fill="url(#colorRevenue)" />
                <Line type="monotone" dataKey="target" stroke="#FFC107" strokeWidth={2} strokeDasharray="5 5" />
              </AreaChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Upcoming Tasks */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle>Upcoming Tasks</CardTitle>
            <Button variant="ghost" size="sm">
              <Clock size={16} />
            </Button>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {upcomingTasks.map((task) => (
                <div key={task.id} className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                  <div className={`mt-1 w-2 h-2 rounded-full ${
                    task.priority === "high" ? "bg-red-500" :
                    task.priority === "medium" ? "bg-yellow-500" : "bg-green-500"
                  }`} />
                  <div className="flex-1">
                    <p className="text-sm text-gray-900">{task.task}</p>
                    <p className="text-xs text-gray-500 mt-1">{task.dueDate}</p>
                  </div>
                </div>
              ))}
            </div>
            <Button variant="outline" className="w-full mt-4">View All Tasks</Button>
          </CardContent>
        </Card>
      </div>

      {/* Weekly Sales Trend */}
      <Card>
        <CardHeader>
          <CardTitle>Weekly Sales Trend</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={salesTrendData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis dataKey="day" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="sales" fill="#1E88E5" name="Sales" radius={[8, 8, 0, 0]} />
              <Bar dataKey="leads" fill="#FFC107" name="Leads" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Activities */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle>Recent Activities</CardTitle>
            <Button variant="ghost" size="sm">View All</Button>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {recentActivities.map((activity) => (
                <div key={activity.id} className="flex items-start gap-3 py-3 border-b border-gray-100 last:border-0">
                  <div className={`mt-1 w-8 h-8 rounded-full flex items-center justify-center ${
                    activity.type === "success" ? "bg-green-100" :
                    activity.type === "warning" ? "bg-yellow-100" : "bg-blue-100"
                  }`}>
                    {activity.type === "success" ? (
                      <CheckCircle2 className="text-green-600" size={16} />
                    ) : activity.type === "warning" ? (
                      <AlertCircle className="text-yellow-600" size={16} />
                    ) : (
                      <Activity className="text-blue-600" size={16} />
                    )}
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-gray-900">{activity.action}</p>
                    <p className="text-xs text-gray-500 mt-1">{activity.client} • {activity.user}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-gray-900">{activity.amount}</p>
                    <p className="text-xs text-gray-500 mt-1">{activity.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Top Employees */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle>Top Performers</CardTitle>
            <Button 
              variant="default" 
              size="sm"
              onClick={() => onNavigate("sales")}
              className="bg-primary hover:bg-primary/90"
            >
              View Details
            </Button>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {topEmployees.map((employee, index) => (
                <div key={index} className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                  <div className="relative">
                    <Avatar className="h-14 w-14">
                      <AvatarImage src={employee.image} />
                      <AvatarFallback>{employee.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                    </Avatar>
                    <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-white rounded-full flex items-center justify-center border-2 border-white">
                      <span className="text-xs">#{index + 1}</span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <p className="text-gray-900">{employee.name}</p>
                    <p className="text-xs text-gray-500">{employee.role}</p>
                    <div className="flex items-center gap-2 mt-2">
                      <Progress value={employee.performance} className="flex-1 h-2" />
                      <span className="text-xs text-gray-600">{employee.performance}%</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-primary">{employee.deals}</p>
                    <p className="text-xs text-gray-500 mt-1">{employee.revenue}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
