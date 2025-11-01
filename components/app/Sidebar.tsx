import { 
  LayoutDashboard, 
  Upload, 
  MessageSquare, 
  FileText, 
  TrendingUp, 
  FileOutput, 
  Shield,
  Settings
} from "lucide-react";

interface SidebarProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
  onNavigateToLanding?: () => void;
}

const navItems = [
  { id: "dashboard", label: "Dashboard", icon: LayoutDashboard },
  { id: "data", label: "Data Management", icon: Upload },
  { id: "query", label: "AI Query", icon: MessageSquare },
  { id: "documents", label: "Documents", icon: FileText },
  { id: "variance", label: "Variance Analysis", icon: TrendingUp },
  { id: "reports", label: "Reports", icon: FileOutput },
  { id: "audit", label: "Audit Log", icon: Shield },
];

export function Sidebar({ activeTab, onTabChange, onNavigateToLanding }: SidebarProps) {
  return (
    <aside className="w-64 bg-[#0A2540] text-white flex flex-col">
      {/* Logo */}
      <div className="p-6 border-b border-white/10">
        <div 
          className="flex items-center gap-3 cursor-pointer hover:opacity-80 transition-opacity"
          onClick={onNavigateToLanding}
          title="Back to Homepage"
        >
          <div className="w-10 h-10 rounded-lg bg-[#4FD1C5] flex items-center justify-center">
            <span className="text-[#0A2540] font-bold text-xl">F</span>
          </div>
          <div>
            <div className="font-bold text-lg">FinDeep</div>
            <div className="text-xs text-gray-400">FP&A Assistant</div>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4 space-y-1">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.id;
          
          return (
            <button
              key={item.id}
              onClick={() => onTabChange(item.id)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                isActive
                  ? "bg-[#4FD1C5] text-[#0A2540]"
                  : "text-gray-300 hover:bg-white/5 hover:text-white"
              }`}
            >
              <Icon className="w-5 h-5" />
              <span className="text-sm font-medium">{item.label}</span>
            </button>
          );
        })}
      </nav>

      {/* Footer */}
      <div className="p-4 border-t border-white/10">
        <button className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-gray-300 hover:bg-white/5 hover:text-white transition-colors">
          <Settings className="w-5 h-5" />
          <span className="text-sm font-medium">Settings</span>
        </button>
      </div>
    </aside>
  );
}

