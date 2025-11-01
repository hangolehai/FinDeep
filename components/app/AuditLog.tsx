import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, User, FileText, Download, Eye, Edit, Upload } from "lucide-react";

interface AuditEntry {
  id: string;
  user: string;
  action: string;
  resource: string;
  timestamp: string;
  status: "success" | "warning" | "error";
  details?: string;
}

const auditLogs: AuditEntry[] = [
  {
    id: "1",
    user: "Admin User",
    action: "Uploaded",
    resource: "ERP_Export_Nov_2024.csv",
    timestamp: "2024-11-05 14:30:22",
    status: "success",
  },
  {
    id: "2",
    user: "Admin User",
    action: "Generated Report",
    resource: "Q4_2024_KPI_Dashboard.xlsx",
    timestamp: "2024-11-05 14:15:10",
    status: "success",
  },
  {
    id: "3",
    user: "Admin User",
    action: "Viewed",
    resource: "Q3_2024_10-Q_Report.pdf",
    timestamp: "2024-11-05 13:45:33",
    status: "success",
  },
  {
    id: "4",
    user: "Admin User",
    action: "AI Query",
    resource: "Revenue forecast analysis",
    timestamp: "2024-11-05 13:30:15",
    status: "success",
  },
  {
    id: "5",
    user: "Admin User",
    action: "Downloaded",
    resource: "Variance_Analysis_Oct_2024.pdf",
    timestamp: "2024-11-05 12:20:44",
    status: "success",
  },
  {
    id: "6",
    user: "System",
    action: "Auto-sync",
    resource: "ERP Data Sync",
    timestamp: "2024-11-05 12:00:00",
    status: "success",
  },
];

export function AuditLog() {
  const getActionIcon = (action: string) => {
    if (action.includes("Upload")) return Upload;
    if (action.includes("Download")) return Download;
    if (action.includes("View")) return Eye;
    if (action.includes("Edit")) return Edit;
    if (action.includes("Generate")) return FileText;
    return FileText;
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "success":
        return "bg-green-100 text-green-700";
      case "warning":
        return "bg-yellow-100 text-yellow-700";
      case "error":
        return "bg-red-100 text-red-700";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  return (
    <div className="p-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-[#0A2540] mb-2">Audit Log</h1>
        <p className="text-gray-600">Track all data access and system activities</p>
      </div>

      {/* Security Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <Card>
          <CardContent className="p-6">
            <div className="text-sm text-gray-600 mb-1">Total Activities</div>
            <div className="text-3xl font-bold text-[#0A2540]">142</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="text-sm text-gray-600 mb-1">Active Users</div>
            <div className="text-3xl font-bold text-[#0A2540]">1</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="text-sm text-gray-600 mb-1">Data Accessed</div>
            <div className="text-3xl font-bold text-[#0A2540]">24</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="text-sm text-gray-600 mb-1">Security Alerts</div>
            <div className="text-3xl font-bold text-green-600">0</div>
          </CardContent>
        </Card>
      </div>

      {/* Audit Trail */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="flex items-center gap-2 text-[#0A2540]">
              <Shield className="w-5 h-5" />
              Activity Timeline
            </CardTitle>
            <div className="text-sm text-gray-500">Last 24 hours</div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {auditLogs.map((log) => {
              const ActionIcon = getActionIcon(log.action);
              
              return (
                <div
                  key={log.id}
                  className="flex items-start gap-4 p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow"
                >
                  <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                    <ActionIcon className="w-5 h-5 text-blue-600" />
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <div className="font-medium text-[#0A2540]">
                          <span className="text-gray-700">{log.user}</span> {log.action.toLowerCase()}
                        </div>
                        <div className="text-sm text-gray-600 mt-1">
                          Resource: <span className="font-medium">{log.resource}</span>
                        </div>
                      </div>
                      
                      <span className={`px-3 py-1 rounded-full text-xs ${getStatusColor(log.status)}`}>
                        {log.status}
                      </span>
                    </div>
                    
                    <div className="text-xs text-gray-500">
                      {log.timestamp}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </CardContent>
      </Card>

      {/* RBAC Info */}
      <Card className="mt-8">
        <CardHeader>
          <CardTitle className="text-[#0A2540]">Role-Based Access Control (RBAC)</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-[#0A2540] mb-3">Current User Permissions</h4>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm">
                  <div className="w-2 h-2 rounded-full bg-green-500"></div>
                  <span>Upload Documents</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <div className="w-2 h-2 rounded-full bg-green-500"></div>
                  <span>View Financial Data</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <div className="w-2 h-2 rounded-full bg-green-500"></div>
                  <span>Generate Reports</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <div className="w-2 h-2 rounded-full bg-green-500"></div>
                  <span>AI Query Access</span>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold text-[#0A2540] mb-3">Security Features</h4>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm">
                  <Shield className="w-4 h-4 text-[#4FD1C5]" />
                  <span>End-to-end encryption</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Shield className="w-4 h-4 text-[#4FD1C5]" />
                  <span>Audit trail logging</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Shield className="w-4 h-4 text-[#4FD1C5]" />
                  <span>Role-based access control</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Shield className="w-4 h-4 text-[#4FD1C5]" />
                  <span>Secure cloud storage</span>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

