import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "./ui/table";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "./ui/dialog";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Input } from "./ui/input";
import { ArrowLeft, Plus, TrendingUp, Clock, CheckCircle, Filter, Search, Download, BarChart3 } from "lucide-react";
import { useState } from "react";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, BarChart, Bar, XAxis, YAxis, CartesianGrid } from "recharts";

interface SalesScreenProps {
  onNavigate: (screen: string) => void;
}

const salesData = [
  {
    id: 1,
    client: "Acme Corporation",
    stage: "Negotiation",
    amount: "$45,000",
    status: "hot",
    owner: "Comfort Esonu",
    date: "Oct 25, 2025",
    probability: 85,
  },
  {
    id: 2,
    client: "TechStart Inc",
    stage: "Proposal",
    amount: "$32,500",
    status: "warm",
    owner: "Lillian Adunia",
    date: "Oct 26, 2025",
    probability: 65,
  },
  {
    id: 3,
    client: "Global Solutions Ltd",
    stage: "Closed Won",
    amount: "$67,000",
    status: "closed",
    owner: "Comfort Esonu",
    date: "Oct 20, 2025",
    probability: 100,
  },
  {
    id: 4,
    client: "Blue Ocean Technologies",
    stage: "Discovery",
    amount: "$28,000",
    status: "cold",
    owner: "Kwesi Amaning",
    date: "Oct 28, 2025",
    probability: 35,
  },
  {
    id: 5,
    client: "Summit Enterprises",
    stage: "Negotiation",
    amount: "$52,000",
    status: "hot",
    owner: "Comfort Esonu",
    date: "Oct 24, 2025",
    probability: 80,
  },
  {
    id: 6,
    client: "Vertex Systems",
    stage: "Proposal",
    amount: "$38,500",
    status: "warm",
    owner: "Vanessa Umenze",
    date: "Oct 27, 2025",
    probability: 60,
  },
  {
    id: 7,
    client: "Phoenix Industries",
    stage: "Closed Won",
    amount: "$71,000",
    status: "closed",
    owner: "Lillian Adunia",
    date: "Oct 18, 2025",
    probability: 100,
  },
  {
    id: 8,
    client: "Nova Dynamics",
    stage: "Qualification",
    amount: "$19,500",
    status: "cold",
    owner: "Kwesi Amaning",
    date: "Oct 29, 2025",
    probability: 40,
  },
];

const stageDistribution = [
  { name: "Discovery", value: 2, color: "#FFC107" },
  { name: "Qualification", value: 1, color: "#FF9800" },
  { name: "Proposal", value: 2, color: "#2196F3" },
  { name: "Negotiation", value: 2, color: "#1E88E5" },
  { name: "Closed Won", value: 2, color: "#4CAF50" },
];

const monthlyPerformance = [
  { month: "Jul", deals: 8, revenue: 125000 },
  { month: "Aug", deals: 12, revenue: 185000 },
  { month: "Sep", deals: 10, revenue: 165000 },
  { month: "Oct", deals: 15, revenue: 245000 },
];

export function SalesScreen({ onNavigate }: SalesScreenProps) {
  const [selectedDeal, setSelectedDeal] = useState<typeof salesData[0] | null>(null);
  const [filterStage, setFilterStage] = useState("all");
  const [filterStatus, setFilterStatus] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const getStatusColor = (status: string) => {
    switch (status) {
      case "hot":
        return "bg-red-100 text-red-700";
      case "warm":
        return "bg-yellow-100 text-yellow-700";
      case "cold":
        return "bg-blue-100 text-blue-700";
      case "closed":
        return "bg-green-100 text-green-700";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  const filteredData = salesData.filter(deal => {
    const matchesStage = filterStage === "all" || deal.stage === filterStage;
    const matchesStatus = filterStatus === "all" || deal.status === filterStatus;
    const matchesSearch = deal.client.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         deal.owner.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesStage && matchesStatus && matchesSearch;
  });

  const totalDeals = salesData.filter(d => d.status === "closed").length;
  const pendingLeads = salesData.filter(d => d.status !== "closed").length;
  const totalValue = salesData.reduce((sum, deal) => sum + parseFloat(deal.amount.replace(/[$,]/g, "")), 0);
  const topSalesperson = "Comfort Esonu";

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <div className="flex items-center gap-3">
            <Button variant="ghost" size="sm" onClick={() => onNavigate("dashboard")}>
              <ArrowLeft size={18} />
            </Button>
            <h1>Sales Pipeline</h1>
          </div>
          <p className="text-gray-600 mt-1 ml-11">Manage your leads and deals</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">
            <Download size={18} className="mr-2" />
            Export
          </Button>
          <Button className="bg-primary hover:bg-primary/90">
            <Plus size={18} className="mr-2" />
            Add New Lead
          </Button>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="hover:shadow-lg transition-shadow">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-4">
              <CheckCircle className="text-green-600" size={32} />
            </div>
            <p className="text-sm text-gray-600">Total Deals Closed</p>
            <h2 className="mt-2">{totalDeals}</h2>
            <p className="text-sm text-green-600 mt-1">This month</p>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-shadow">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-4">
              <Clock className="text-yellow-600" size={32} />
            </div>
            <p className="text-sm text-gray-600">Pending Leads</p>
            <h2 className="mt-2">{pendingLeads}</h2>
            <p className="text-sm text-gray-600 mt-1">In pipeline</p>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-shadow">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-4">
              <TrendingUp className="text-primary" size={32} />
            </div>
            <p className="text-sm text-gray-600">Pipeline Value</p>
            <h2 className="mt-2">${(totalValue / 1000).toFixed(0)}K</h2>
            <p className="text-sm text-primary mt-1">Total opportunity</p>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-shadow">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-4">
              <BarChart3 className="text-accent" size={32} />
            </div>
            <p className="text-sm text-gray-600">Top Salesperson</p>
            <h4 className="mt-2">{topSalesperson}</h4>
            <p className="text-sm text-primary mt-1">3 deals this week</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Sales Pipeline by Stage */}
        <Card>
          <CardHeader>
            <CardTitle>Pipeline by Stage</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={250}>
              <PieChart>
                <Pie
                  data={stageDistribution}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={90}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {stageDistribution.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
            <div className="mt-4 space-y-2">
              {stageDistribution.map((stage, index) => (
                <div key={index} className="flex items-center justify-between text-sm">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full" style={{ backgroundColor: stage.color }} />
                    <span className="text-gray-600">{stage.name}</span>
                  </div>
                  <span className="text-gray-900">{stage.value} deals</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Monthly Performance */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Monthly Performance</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={250}>
              <BarChart data={monthlyPerformance}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis dataKey="month" />
                <YAxis yAxisId="left" orientation="left" stroke="#1E88E5" />
                <YAxis yAxisId="right" orientation="right" stroke="#FFC107" />
                <Tooltip />
                <Bar yAxisId="left" dataKey="deals" fill="#1E88E5" name="Deals" radius={[8, 8, 0, 0]} />
                <Bar yAxisId="right" dataKey="revenue" fill="#FFC107" name="Revenue" radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Deals Table */}
      <Card>
        <CardHeader>
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <CardTitle>Active Deals</CardTitle>
            <div className="flex flex-wrap gap-2">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
                <Input
                  placeholder="Search deals..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-9 w-48"
                />
              </div>
              <Select value={filterStage} onValueChange={setFilterStage}>
                <SelectTrigger className="w-40">
                  <SelectValue placeholder="All Stages" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Stages</SelectItem>
                  <SelectItem value="Discovery">Discovery</SelectItem>
                  <SelectItem value="Qualification">Qualification</SelectItem>
                  <SelectItem value="Proposal">Proposal</SelectItem>
                  <SelectItem value="Negotiation">Negotiation</SelectItem>
                  <SelectItem value="Closed Won">Closed Won</SelectItem>
                </SelectContent>
              </Select>
              <Select value={filterStatus} onValueChange={setFilterStatus}>
                <SelectTrigger className="w-32">
                  <SelectValue placeholder="All Status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Status</SelectItem>
                  <SelectItem value="hot">Hot</SelectItem>
                  <SelectItem value="warm">Warm</SelectItem>
                  <SelectItem value="cold">Cold</SelectItem>
                  <SelectItem value="closed">Closed</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Client Name</TableHead>
                <TableHead>Deal Stage</TableHead>
                <TableHead>Amount</TableHead>
                <TableHead>Probability</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Owner</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredData.map((deal) => (
                <TableRow key={deal.id} className="hover:bg-gray-50">
                  <TableCell className="font-medium">{deal.client}</TableCell>
                  <TableCell>{deal.stage}</TableCell>
                  <TableCell>{deal.amount}</TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <div className="w-full bg-gray-200 rounded-full h-2 max-w-[60px]">
                        <div 
                          className="bg-primary h-2 rounded-full" 
                          style={{ width: `${deal.probability}%` }}
                        />
                      </div>
                      <span className="text-xs text-gray-600">{deal.probability}%</span>
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge className={getStatusColor(deal.status)} variant="secondary">
                      {deal.status}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-sm">{deal.owner}</TableCell>
                  <TableCell className="text-sm text-gray-600">{deal.date}</TableCell>
                  <TableCell>
                    <Button 
                      variant="outline" 
                      size="sm"
                      onClick={() => setSelectedDeal(deal)}
                    >
                      View
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          {filteredData.length === 0 && (
            <div className="text-center py-8 text-gray-500">
              No deals found matching your filters
            </div>
          )}
        </CardContent>
      </Card>

      {/* Deal Details Dialog */}
      <Dialog open={!!selectedDeal} onOpenChange={() => setSelectedDeal(null)}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle>Deal Details</DialogTitle>
            <DialogDescription>
              Comprehensive information about this deal
            </DialogDescription>
          </DialogHeader>
          {selectedDeal && (
            <div className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-gray-600">Client</p>
                  <p className="text-gray-900 mt-1">{selectedDeal.client}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Deal Stage</p>
                  <p className="text-gray-900 mt-1">{selectedDeal.stage}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Amount</p>
                  <p className="text-gray-900 mt-1">{selectedDeal.amount}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Probability</p>
                  <div className="flex items-center gap-2 mt-1">
                    <div className="flex-1 bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-primary h-2 rounded-full" 
                        style={{ width: `${selectedDeal.probability}%` }}
                      />
                    </div>
                    <span className="text-sm text-gray-900">{selectedDeal.probability}%</span>
                  </div>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Status</p>
                  <Badge className={`${getStatusColor(selectedDeal.status)} mt-1`} variant="secondary">
                    {selectedDeal.status}
                  </Badge>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Deal Owner</p>
                  <p className="text-gray-900 mt-1">{selectedDeal.owner}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Date Created</p>
                  <p className="text-gray-900 mt-1">{selectedDeal.date}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Expected Close</p>
                  <p className="text-gray-900 mt-1">Nov 15, 2025</p>
                </div>
              </div>
              
              <div>
                <p className="text-sm text-gray-600 mb-2">Recent Activity</p>
                <div className="space-y-2 bg-gray-50 p-4 rounded-lg max-h-40 overflow-y-auto">
                  <p className="text-sm">• Proposal sent to client - Oct 26, 2025</p>
                  <p className="text-sm">• Follow-up call scheduled - Oct 28, 2025</p>
                  <p className="text-sm">• Demo completed - Oct 24, 2025</p>
                  <p className="text-sm">• Initial contact made - Oct 20, 2025</p>
                </div>
              </div>

              <div className="flex gap-2 pt-4 border-t">
                <Button className="flex-1 bg-primary hover:bg-primary/90">Edit Deal</Button>
                <Button variant="outline" className="flex-1">Send Proposal</Button>
                <Button variant="outline" onClick={() => setSelectedDeal(null)}>Close</Button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
