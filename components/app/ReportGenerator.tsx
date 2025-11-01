import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, FileSpreadsheet, Download, Calendar } from "lucide-react";

const reportTemplates = [
  {
    id: "1",
    title: "Monthly KPI Dashboard",
    description: "Revenue, COGS, OPEX, and key metrics summary",
    format: "Excel",
    lastGenerated: "2 days ago"
  },
  {
    id: "2",
    title: "Variance Analysis Report",
    description: "Forecast vs Actual comparison with AI insights",
    format: "PDF",
    lastGenerated: "1 week ago"
  },
  {
    id: "3",
    title: "Working Capital Analysis",
    description: "DSO, DPO, DIO trends and recommendations",
    format: "Excel",
    lastGenerated: "3 days ago"
  },
  {
    id: "4",
    title: "Quarterly Forecast",
    description: "Revenue and expense projections for Q1 2025",
    format: "PDF",
    lastGenerated: "1 day ago"
  },
];

const recentReports = [
  {
    id: "1",
    name: "Q4_2024_KPI_Dashboard.xlsx",
    type: "Excel",
    date: "Nov 5, 2024",
    size: "2.1 MB"
  },
  {
    id: "2",
    name: "Variance_Analysis_Oct_2024.pdf",
    type: "PDF",
    date: "Nov 2, 2024",
    size: "1.8 MB"
  },
  {
    id: "3",
    name: "Working_Capital_Report_Q4.xlsx",
    type: "Excel",
    date: "Oct 28, 2024",
    size: "1.5 MB"
  },
];

export function ReportGenerator() {
  const handleGenerate = (templateId: string) => {
    alert(`Generating report from template ${templateId}...`);
  };

  return (
    <div className="p-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-[#0A2540] mb-2">Report Generator</h1>
        <p className="text-gray-600">Create and export FP&A reports</p>
      </div>

      {/* Report Templates */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="text-[#0A2540]">Report Templates</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {reportTemplates.map((template) => {
              const Icon = template.format === "Excel" ? FileSpreadsheet : FileText;
              
              return (
                <div
                  key={template.id}
                  className="p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow"
                >
                  <div className="flex items-start gap-4">
                    <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                      template.format === "Excel" ? "bg-green-100" : "bg-red-100"
                    }`}>
                      <Icon className={`w-6 h-6 ${
                        template.format === "Excel" ? "text-green-600" : "text-red-600"
                      }`} />
                    </div>
                    
                    <div className="flex-1">
                      <h4 className="font-semibold text-[#0A2540] mb-1">{template.title}</h4>
                      <p className="text-sm text-gray-600 mb-3">{template.description}</p>
                      
                      <div className="flex items-center justify-between">
                        <div className="text-xs text-gray-500">
                          Last generated: {template.lastGenerated}
                        </div>
                        <Button
                          size="sm"
                          onClick={() => handleGenerate(template.id)}
                          className="bg-[#4FD1C5] hover:bg-[#3DBFB5] text-[#0A2540]"
                        >
                          Generate
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </CardContent>
      </Card>

      {/* Recent Reports */}
      <Card>
        <CardHeader>
          <CardTitle className="text-[#0A2540]">Recent Reports</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {recentReports.map((report) => {
              const Icon = report.type === "Excel" ? FileSpreadsheet : FileText;
              
              return (
                <div
                  key={report.id}
                  className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow"
                >
                  <div className="flex items-center gap-4">
                    <Icon className={`w-6 h-6 ${
                      report.type === "Excel" ? "text-green-600" : "text-red-600"
                    }`} />
                    <div>
                      <div className="font-medium text-[#0A2540]">{report.name}</div>
                      <div className="text-sm text-gray-600">
                        {report.date} • {report.size}
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex gap-2">
                    <Button size="sm" variant="outline">
                      View
                    </Button>
                    <Button size="sm" variant="outline" className="flex items-center gap-2">
                      <Download className="w-4 h-4" />
                      Download
                    </Button>
                  </div>
                </div>
              );
            })}
          </div>
        </CardContent>
      </Card>

      {/* Export Options */}
      <Card className="mt-8">
        <CardHeader>
          <CardTitle className="text-[#0A2540]">Custom Export</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Date Range
              </label>
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5 text-gray-400" />
                <span className="text-sm text-gray-600">Oct 1, 2024 - Nov 5, 2024</span>
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Export Format
              </label>
              <div className="flex gap-2">
                <Button variant="outline" size="sm">Excel</Button>
                <Button variant="outline" size="sm">PDF</Button>
                <Button variant="outline" size="sm">CSV</Button>
              </div>
            </div>
          </div>
          
          <Button className="mt-6 bg-[#4FD1C5] hover:bg-[#3DBFB5] text-[#0A2540]">
            Generate Custom Report
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}

