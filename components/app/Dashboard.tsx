import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp, TrendingDown, DollarSign, Package, Wrench, Clock } from "lucide-react";

const kpiData = [
  {
    title: "Revenue",
    value: "$2.4M",
    change: "+12.5%",
    trend: "up",
    icon: DollarSign,
    color: "#4FD1C5",
  },
  {
    title: "COGS",
    value: "$1.2M",
    change: "-3.2%",
    trend: "down",
    icon: Package,
    color: "#4FD1C5",
  },
  {
    title: "OPEX",
    value: "$680K",
    change: "+5.1%",
    trend: "up",
    icon: Wrench,
    color: "#F59E0B",
  },
  {
    title: "Gross Margin",
    value: "50.2%",
    change: "+2.1%",
    trend: "up",
    icon: TrendingUp,
    color: "#10B981",
  },
];

const workingCapitalMetrics = [
  { label: "DSO (Days Sales Outstanding)", value: "45 days", target: "40 days", status: "warning" },
  { label: "DPO (Days Payable Outstanding)", value: "60 days", target: "55 days", status: "good" },
  { label: "DIO (Days Inventory Outstanding)", value: "32 days", target: "35 days", status: "good" },
];

export function Dashboard() {
  return (
    <div className="p-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-[#0A2540] mb-2">FP&A Dashboard</h1>
        <p className="text-gray-600">Real-time financial metrics and analysis</p>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {kpiData.map((kpi, index) => {
          const Icon = kpi.icon;
          const TrendIcon = kpi.trend === "up" ? TrendingUp : TrendingDown;
          
          return (
            <Card key={index} className="border-gray-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div
                    className="w-12 h-12 rounded-lg flex items-center justify-center"
                    style={{ backgroundColor: `${kpi.color}20` }}
                  >
                    <Icon className="w-6 h-6" style={{ color: kpi.color }} />
                  </div>
                  <div className={`flex items-center gap-1 text-sm ${
                    kpi.trend === "up" ? "text-green-600" : "text-red-600"
                  }`}>
                    <TrendIcon className="w-4 h-4" />
                    <span>{kpi.change}</span>
                  </div>
                </div>
                <div className="text-sm text-gray-600 mb-1">{kpi.title}</div>
                <div className="text-2xl font-bold text-[#0A2540]">{kpi.value}</div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Working Capital Metrics */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-[#0A2540]">
            <Clock className="w-5 h-5" />
            Working Capital Metrics
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {workingCapitalMetrics.map((metric, index) => (
              <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div>
                  <div className="font-medium text-[#0A2540]">{metric.label}</div>
                  <div className="text-sm text-gray-600 mt-1">Target: {metric.target}</div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="text-2xl font-bold text-[#0A2540]">{metric.value}</div>
                  <div className={`px-3 py-1 rounded-full text-sm ${
                    metric.status === "good" 
                      ? "bg-green-100 text-green-700"
                      : "bg-yellow-100 text-yellow-700"
                  }`}>
                    {metric.status === "good" ? "On Track" : "Monitor"}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Recent Analysis */}
      <Card>
        <CardHeader>
          <CardTitle className="text-[#0A2540]">Recent AI Analysis</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="p-4 border border-gray-200 rounded-lg">
              <div className="flex items-start justify-between mb-2">
                <div className="font-medium text-[#0A2540]">Q4 Revenue Forecast Analysis</div>
                <div className="text-sm text-gray-500">2 hours ago</div>
              </div>
              <p className="text-sm text-gray-600 mb-3">
                Based on current trends and historical data from 10-Q reports, projected Q4 revenue shows a 12.5% increase...
              </p>
              <div className="flex items-center gap-2">
                <span className="text-xs px-2 py-1 bg-[#4FD1C5]/10 text-[#0A2540] rounded">
                  📊 Source: 10-Q FY2024
                </span>
                <span className="text-xs px-2 py-1 bg-[#4FD1C5]/10 text-[#0A2540] rounded">
                  ✓ Verified
                </span>
              </div>
            </div>

            <div className="p-4 border border-gray-200 rounded-lg">
              <div className="flex items-start justify-between mb-2">
                <div className="font-medium text-[#0A2540]">OPEX Variance Analysis</div>
                <div className="text-sm text-gray-500">5 hours ago</div>
              </div>
              <p className="text-sm text-gray-600 mb-3">
                Operating expenses exceeded budget by 5.1%, primarily due to increased marketing spend in Q3...
              </p>
              <div className="flex items-center gap-2">
                <span className="text-xs px-2 py-1 bg-[#4FD1C5]/10 text-[#0A2540] rounded">
                  📊 Source: ERP System
                </span>
                <span className="text-xs px-2 py-1 bg-[#4FD1C5]/10 text-[#0A2540] rounded">
                  ✓ Verified
                </span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

