import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp, TrendingDown, AlertCircle } from "lucide-react";

const varianceData = [
  {
    metric: "Revenue",
    forecast: "$2.5M",
    actual: "$2.4M",
    variance: -4.0,
    status: "warning",
    reason: "Delayed enterprise deal closure"
  },
  {
    metric: "COGS",
    forecast: "$1.3M",
    actual: "$1.2M",
    variance: -7.7,
    status: "good",
    reason: "Supplier cost reduction"
  },
  {
    metric: "OPEX",
    forecast: "$650K",
    actual: "$680K",
    variance: +4.6,
    status: "warning",
    reason: "Increased marketing spend"
  },
  {
    metric: "Gross Margin %",
    forecast: "48.0%",
    actual: "50.2%",
    variance: +2.2,
    status: "good",
    reason: "Better cost management"
  },
  {
    metric: "Operating Income",
    forecast: "$550K",
    actual: "$520K",
    variance: -5.5,
    status: "monitor",
    reason: "Lower revenue + higher OPEX"
  },
];

export function VarianceAnalysis() {
  return (
    <div className="p-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-[#0A2540] mb-2">Variance Analysis</h1>
        <p className="text-gray-600">Compare forecast vs actual performance</p>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <Card>
          <CardContent className="p-6">
            <div className="text-sm text-gray-600 mb-1">Favorable Variances</div>
            <div className="text-3xl font-bold text-green-600">2</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="text-sm text-gray-600 mb-1">Unfavorable Variances</div>
            <div className="text-3xl font-bold text-yellow-600">2</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="text-sm text-gray-600 mb-1">Require Monitoring</div>
            <div className="text-3xl font-bold text-orange-600">1</div>
          </CardContent>
        </Card>
      </div>

      {/* Variance Table */}
      <Card>
        <CardHeader>
          <CardTitle className="text-[#0A2540]">Detailed Variance Report - Q4 2024</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {varianceData.map((item, index) => {
              const isPositive = item.variance > 0;
              const TrendIcon = isPositive ? TrendingUp : TrendingDown;
              
              const statusConfig = {
                good: { bg: "bg-green-100", text: "text-green-700", label: "Favorable" },
                warning: { bg: "bg-yellow-100", text: "text-yellow-700", label: "Unfavorable" },
                monitor: { bg: "bg-orange-100", text: "text-orange-700", label: "Monitor" },
              };
              
              const config = statusConfig[item.status as keyof typeof statusConfig];
              
              return (
                <div
                  key={index}
                  className="p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow"
                >
                  <div className="grid grid-cols-1 md:grid-cols-5 gap-4 items-center">
                    <div>
                      <div className="font-semibold text-[#0A2540]">{item.metric}</div>
                    </div>
                    
                    <div className="text-center">
                      <div className="text-xs text-gray-500 mb-1">Forecast</div>
                      <div className="font-semibold">{item.forecast}</div>
                    </div>
                    
                    <div className="text-center">
                      <div className="text-xs text-gray-500 mb-1">Actual</div>
                      <div className="font-semibold">{item.actual}</div>
                    </div>
                    
                    <div className="text-center">
                      <div className="text-xs text-gray-500 mb-1">Variance</div>
                      <div className={`font-bold flex items-center justify-center gap-1 ${
                        item.status === "good" ? "text-green-600" : "text-red-600"
                      }`}>
                        <TrendIcon className="w-4 h-4" />
                        <span>{Math.abs(item.variance)}%</span>
                      </div>
                    </div>
                    
                    <div className="text-center">
                      <span className={`px-3 py-1 rounded-full text-xs ${config.bg} ${config.text}`}>
                        {config.label}
                      </span>
                    </div>
                  </div>
                  
                  <div className="mt-3 pt-3 border-t border-gray-200 flex items-start gap-2">
                    <AlertCircle className="w-4 h-4 text-gray-500 flex-shrink-0 mt-0.5" />
                    <div className="text-sm text-gray-600">
                      <span className="font-medium">Reason: </span>
                      {item.reason}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </CardContent>
      </Card>

      {/* AI Insights */}
      <Card className="mt-8">
        <CardHeader>
          <CardTitle className="text-[#0A2540]">AI-Generated Insights</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="p-4 bg-blue-50 border-l-4 border-blue-500 rounded">
              <div className="font-semibold text-[#0A2540] mb-2">Revenue Gap Analysis</div>
              <p className="text-sm text-gray-700">
                The $100K revenue shortfall is primarily due to delayed enterprise deal closures. 
                Based on pipeline data, these deals are expected to close in Q1 2025, potentially 
                recovering the variance.
              </p>
            </div>
            
            <div className="p-4 bg-green-50 border-l-4 border-green-500 rounded">
              <div className="font-semibold text-[#0A2540] mb-2">Cost Optimization Success</div>
              <p className="text-sm text-gray-700">
                COGS reduction of 7.7% demonstrates successful supplier negotiations and process 
                improvements. This trend should continue into Q1 2025 based on new contracts.
              </p>
            </div>
            
            <div className="p-4 bg-yellow-50 border-l-4 border-yellow-500 rounded">
              <div className="font-semibold text-[#0A2540] mb-2">OPEX Recommendation</div>
              <p className="text-sm text-gray-700">
                Marketing spend exceeded budget by 4.6%. While this investment shows promising 
                lead generation (+15%), recommend implementing stricter approval process for Q1.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

