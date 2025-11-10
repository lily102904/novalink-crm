import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Progress } from "./ui/progress";
import { Calendar } from "./ui/calendar";
import { ArrowLeft, Plus, Users, UserCheck, UserX, Award, Calendar as CalendarIcon, TrendingUp } from "lucide-react";
import { useState } from "react";

interface HRScreenProps {
  onNavigate: (screen: string) => void;
}

const employees = [
  {
    name: "Lillian Adunia",
    department: "Management",
    position: "CEO",
    status: "active",
    performance: 98,
    yearsOfService: 8,
    email: "lillian@novalink.com",
    image: "https://images.unsplash.com/photo-1559736797-57946dd5c248?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3VudGFpbiUyMGxhbmRzY2FwZSUyMG5hdHVyZXxlbnwxfHx8fDE3NjE1OTY3ODB8MA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    name: "Comfort Esonu",
    department: "Sales",
    position: "Sales Manager",
    status: "active",
    performance: 95,
    yearsOfService: 5,
    email: "comfort@novalink.com",
    image: "https://images.unsplash.com/photo-1613114016852-9f99ef56d395?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvY2VhbiUyMHN1bnNldCUyMG5hdHVyZXxlbnwxfHx8fDE3NjE2OTk4OTd8MA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    name: "Kwesi Amaning",
    department: "Finance",
    position: "Finance Director",
    status: "active",
    performance: 92,
    yearsOfService: 6,
    email: "kwesi@novalink.com",
    image: "https://images.unsplash.com/photo-1598984229931-c26188b3994a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmb3Jlc3QlMjB0cmVlcyUyMG5hdHVyZXxlbnwxfHx8fDE3NjE2MzY0NDB8MA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    name: "Vanessa Umenze",
    department: "HR",
    position: "HR Lead",
    status: "active",
    performance: 90,
    yearsOfService: 4,
    email: "vanessa@novalink.com",
    image: "https://images.unsplash.com/photo-1616398675428-6f67aae03008?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXNlcnQlMjBsYW5kc2NhcGUlMjBuYXR1cmV8ZW58MXx8fHwxNzYxNjk5ODk4fDA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    name: "Michael Chen",
    department: "Sales",
    position: "Sales Executive",
    status: "active",
    performance: 88,
    yearsOfService: 3,
    email: "michael@novalink.com",
    image: "https://images.unsplash.com/photo-1610044847457-f6aabcbb67d3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3YXRlcmZhbGwlMjBuYXR1cmV8ZW58MXx8fHwxNzYxNjIwMDgyfDA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    name: "Sarah Johnson",
    department: "Finance",
    position: "Accountant",
    status: "active",
    performance: 86,
    yearsOfService: 2,
    email: "sarah@novalink.com",
    image: "https://images.unsplash.com/photo-1746453628302-873bcef0afd4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYWtlJTIwbW91bnRhaW4lMjBuYXR1cmV8ZW58MXx8fHwxNzYxNjk5ODk5fDA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    name: "David Martinez",
    department: "Sales",
    position: "Sales Executive",
    status: "on_leave",
    performance: 84,
    yearsOfService: 3,
    email: "david@novalink.com",
    image: "https://images.unsplash.com/photo-1551506405-72b823fc5dbf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cm9waWNhbCUyMGJlYWNoJTIwbmF0dXJlfGVufDF8fHx8MTc2MTYyNjQyOHww&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    name: "Emily Williams",
    department: "HR",
    position: "HR Coordinator",
    status: "active",
    performance: 89,
    yearsOfService: 2,
    email: "emily@novalink.com",
    image: "https://images.unsplash.com/photo-1644659513503-abcbf75b4521?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhdXJvcmElMjBub3J0aGVybiUyMGxpZ2h0c3xlbnwxfHx8fDE3NjE2OTk4OTl8MA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    name: "James Anderson",
    department: "Finance",
    position: "Financial Analyst",
    status: "active",
    performance: 87,
    yearsOfService: 4,
    email: "james@novalink.com",
    image: "https://images.unsplash.com/photo-1715566318785-f15dca96d94e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGVycnklMjBibG9zc29tJTIwbmF0dXJlfGVufDF8fHx8MTc2MTY5OTkwMHww&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    name: "Lisa Thompson",
    department: "Sales",
    position: "Sales Representative",
    status: "active",
    performance: 82,
    yearsOfService: 1,
    email: "lisa@novalink.com",
    image: "https://images.unsplash.com/photo-1647820571510-8d6f2dfaae73?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYW55b24lMjBuYXR1cmUlMjBsYW5kc2NhcGV8ZW58MXx8fHwxNzYxNjk5OTAwfDA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    name: "Robert Brown",
    department: "Management",
    position: "Operations Manager",
    status: "active",
    performance: 91,
    yearsOfService: 7,
    email: "robert@novalink.com",
    image: "https://images.unsplash.com/photo-1657454994130-b33ac8269b41?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWFkb3clMjBmbG93ZXJzJTIwbmF0dXJlfGVufDF8fHx8MTc2MTY5OTkwMHww&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    name: "Jennifer Lee",
    department: "HR",
    position: "Recruitment Specialist",
    status: "on_leave",
    performance: 85,
    yearsOfService: 3,
    email: "jennifer@novalink.com",
    image: "https://images.unsplash.com/photo-1698336260856-8055991f3eaf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyaXZlciUyMHZhbGxleSUyMG5hdHVyZXxlbnwxfHx8fDE3NjE2OTk5MDF8MA&ixlib=rb-4.1.0&q=80&w=1080",
  },
];

const departmentStats = [
  { name: "Sales", count: 4, avgPerformance: 87 },
  { name: "Finance", count: 3, avgPerformance: 88 },
  { name: "HR", count: 3, avgPerformance: 88 },
  { name: "Management", count: 2, avgPerformance: 95 },
];

const leaveRequests = [
  { id: 1, employee: "David Martinez", type: "Vacation", startDate: "Oct 28, 2025", endDate: "Nov 5, 2025", status: "approved" },
  { id: 2, employee: "Jennifer Lee", type: "Sick Leave", startDate: "Oct 26, 2025", endDate: "Oct 30, 2025", status: "approved" },
  { id: 3, employee: "Lisa Thompson", type: "Personal", startDate: "Nov 10, 2025", endDate: "Nov 12, 2025", status: "pending" },
];

export function HRScreen({ onNavigate }: HRScreenProps) {
  const [filter, setFilter] = useState("All");
  const [date, setDate] = useState<Date | undefined>(new Date());

  const filteredEmployees = filter === "All" 
    ? employees 
    : employees.filter(emp => emp.department === filter);

  const totalStaff = employees.length;
  const activeStaff = employees.filter(e => e.status === "active").length;
  const onLeave = employees.filter(e => e.status === "on_leave").length;
  const avgPerformance = Math.round(employees.reduce((sum, e) => sum + e.performance, 0) / employees.length);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <div className="flex items-center gap-3">
            <Button variant="ghost" size="sm" onClick={() => onNavigate("dashboard")}>
              <ArrowLeft size={18} />
            </Button>
            <h1>Human Resources</h1>
          </div>
          <p className="text-gray-600 mt-1 ml-11">Manage employees, attendance, and performance</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">
            <CalendarIcon size={18} className="mr-2" />
            View Attendance
          </Button>
          <Button className="bg-primary hover:bg-primary/90">
            <Plus size={18} className="mr-2" />
            Add Employee
          </Button>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="hover:shadow-lg transition-shadow">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Total Staff</p>
                <h2 className="mt-2">{totalStaff}</h2>
                <p className="text-sm text-gray-600 mt-1">Employees</p>
              </div>
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <Users className="text-primary" size={24} />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-shadow">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Active</p>
                <h2 className="mt-2">{activeStaff}</h2>
                <p className="text-sm text-green-600 mt-1">Working today</p>
              </div>
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                <UserCheck className="text-green-600" size={24} />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-shadow">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">On Leave</p>
                <h2 className="mt-2">{onLeave}</h2>
                <p className="text-sm text-orange-600 mt-1">Currently absent</p>
              </div>
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                <UserX className="text-orange-600" size={24} />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-shadow">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Avg Performance</p>
                <h2 className="mt-2">{avgPerformance}%</h2>
                <p className="text-sm text-primary mt-1 flex items-center gap-1">
                  <TrendingUp size={14} />
                  +5% this month
                </p>
              </div>
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                <Award className="text-purple-600" size={24} />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Department Statistics */}
        <Card>
          <CardHeader>
            <CardTitle>Department Overview</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {departmentStats.map((dept, index) => (
                <div key={index} className="p-4 bg-gray-50 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <h4>{dept.name}</h4>
                    <Badge variant="secondary">{dept.count} staff</Badge>
                  </div>
                  <div className="flex items-center gap-2 mt-2">
                    <span className="text-xs text-gray-600">Performance:</span>
                    <Progress value={dept.avgPerformance} className="flex-1 h-2" />
                    <span className="text-xs text-gray-900">{dept.avgPerformance}%</span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Attendance Calendar */}
        <Card>
          <CardHeader>
            <CardTitle>Attendance Calendar</CardTitle>
          </CardHeader>
          <CardContent className="flex justify-center">
            <Calendar
              mode="single"
              selected={date}
              onSelect={setDate}
              className="rounded-md border"
            />
          </CardContent>
        </Card>

        {/* Leave Requests */}
        <Card>
          <CardHeader>
            <CardTitle>Leave Requests</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {leaveRequests.map((request) => (
                <div key={request.id} className="p-4 bg-gray-50 rounded-lg">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <p className="text-sm text-gray-900">{request.employee}</p>
                      <p className="text-xs text-gray-500 mt-1">{request.type}</p>
                    </div>
                    <Badge 
                      variant="secondary" 
                      className={request.status === "approved" ? "bg-green-100 text-green-700" : "bg-yellow-100 text-yellow-700"}
                    >
                      {request.status}
                    </Badge>
                  </div>
                  <p className="text-xs text-gray-600 mt-2">
                    {request.startDate} - {request.endDate}
                  </p>
                  {request.status === "pending" && (
                    <div className="flex gap-2 mt-3">
                      <Button variant="outline" size="sm" className="flex-1">Reject</Button>
                      <Button size="sm" className="flex-1 bg-primary hover:bg-primary/90">Approve</Button>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Employee Directory */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>Employee Directory</CardTitle>
            <div className="flex gap-2">
              {["All", "HR", "Finance", "Sales", "Management"].map((dept) => (
                <Button
                  key={dept}
                  variant={filter === dept ? "default" : "outline"}
                  size="sm"
                  onClick={() => setFilter(dept)}
                  className={filter === dept ? "bg-primary hover:bg-primary/90" : ""}
                >
                  {dept}
                </Button>
              ))}
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {filteredEmployees.map((employee, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-5">
                  <div className="flex flex-col items-center text-center">
                    <div className="relative">
                      <Avatar className="h-20 w-20 mb-3">
                        <AvatarImage src={employee.image} className="object-cover" />
                        <AvatarFallback>{employee.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                      </Avatar>
                      <div className={`absolute bottom-2 right-0 w-4 h-4 rounded-full border-2 border-white ${
                        employee.status === "active" ? "bg-green-500" : "bg-orange-500"
                      }`} />
                    </div>
                    <h4>{employee.name}</h4>
                    <p className="text-sm text-gray-600 mt-1">{employee.position}</p>
                    <div className="flex items-center gap-2 mt-2">
                      <Badge variant="secondary" className="text-xs">
                        {employee.department}
                      </Badge>
                      <Badge 
                        className={`text-xs ${
                          employee.status === "active" 
                            ? "bg-green-100 text-green-700" 
                            : "bg-orange-100 text-orange-700"
                        }`}
                        variant="secondary"
                      >
                        {employee.status === "active" ? "Active" : "On Leave"}
                      </Badge>
                    </div>
                    <div className="w-full mt-4 space-y-2">
                      <div className="flex items-center justify-between text-xs">
                        <span className="text-gray-600">Performance</span>
                        <span className="text-gray-900">{employee.performance}%</span>
                      </div>
                      <Progress value={employee.performance} className="h-2" />
                      <div className="flex items-center justify-between text-xs text-gray-500 pt-2">
                        <span>{employee.yearsOfService} years</span>
                        <span>{employee.email}</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
