import { Search, Bell, Plus, Calendar, MessageSquare, HelpCircle } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuLabel, 
  DropdownMenuSeparator, 
  DropdownMenuTrigger 
} from "./ui/dropdown-menu";
import { Badge } from "./ui/badge";

export function TopBar() {
  const currentDate = new Date().toLocaleDateString('en-US', { 
    weekday: 'short', 
    month: 'short', 
    day: 'numeric' 
  });
  const currentTime = new Date().toLocaleTimeString('en-US', { 
    hour: '2-digit', 
    minute: '2-digit' 
  });

  return (
    <div className="h-16 bg-white border-b border-gray-200 fixed top-0 right-0 left-64 z-10 flex items-center justify-between px-6 shadow-sm">
      <div className="flex items-center gap-4 flex-1">
        <div className="relative flex-1 max-w-lg">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
          <Input
            type="text"
            placeholder="Search clients, deals, employees..."
            className="pl-10 bg-gray-50 border-gray-200"
          />
        </div>
        
        <Button variant="default" size="sm" className="bg-primary hover:bg-primary/90">
          <Plus size={16} className="mr-1" />
          Quick Add
        </Button>
      </div>
      
      <div className="flex items-center gap-3">
        <div className="flex items-center gap-1 px-3 py-1 bg-gray-50 rounded-lg text-sm text-gray-600">
          <Calendar size={14} />
          <span>{currentDate}</span>
          <span className="mx-1">•</span>
          <span>{currentTime}</span>
        </div>
        
        <Button variant="ghost" size="sm">
          <MessageSquare size={18} />
        </Button>
        
        <Button variant="ghost" size="sm">
          <HelpCircle size={18} />
        </Button>
        
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button className="relative p-2 hover:bg-gray-100 rounded-lg transition-colors">
              <Bell size={20} className="text-gray-600" />
              <Badge className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 bg-red-500 text-white text-xs">
                3
              </Badge>
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-80">
            <DropdownMenuLabel>Notifications</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="flex flex-col items-start p-3 cursor-pointer">
              <p className="text-sm">New deal closed by Comfort Esonu</p>
              <p className="text-xs text-gray-500 mt-1">2 minutes ago</p>
            </DropdownMenuItem>
            <DropdownMenuItem className="flex flex-col items-start p-3 cursor-pointer">
              <p className="text-sm">Payment received: $45,000</p>
              <p className="text-xs text-gray-500 mt-1">1 hour ago</p>
            </DropdownMenuItem>
            <DropdownMenuItem className="flex flex-col items-start p-3 cursor-pointer">
              <p className="text-sm">New employee onboarding scheduled</p>
              <p className="text-xs text-gray-500 mt-1">3 hours ago</p>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="justify-center text-primary cursor-pointer">
              View all notifications
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        
        <div className="flex items-center gap-3 pl-3 border-l border-gray-200">
          <div className="text-right">
            <p className="text-sm text-gray-900">Lillian Adunia</p>
            <p className="text-xs text-gray-500">CEO</p>
          </div>
          <Avatar className="cursor-pointer hover:opacity-80 transition-opacity">
            <AvatarImage src="https://images.unsplash.com/photo-1559736797-57946dd5c248?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3VudGFpbiUyMGxhbmRzY2FwZSUyMG5hdHVyZXxlbnwxfHx8fDE3NjE1OTY3ODB8MA&ixlib=rb-4.1.0&q=80&w=1080" />
            <AvatarFallback>LA</AvatarFallback>
          </Avatar>
        </div>
      </div>
    </div>
  );
}
