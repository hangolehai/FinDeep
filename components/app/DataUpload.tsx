import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Upload, FileText, FileSpreadsheet, CheckCircle2, Clock, X } from "lucide-react";

interface UploadedFile {
  id: string;
  name: string;
  type: string;
  size: string;
  status: "processing" | "completed" | "error";
  uploadedAt: string;
}

export function DataUpload() {
  const [files, setFiles] = useState<UploadedFile[]>([
    {
      id: "1",
      name: "Q3_2024_10-Q_Report.pdf",
      type: "10-Q Report",
      size: "2.4 MB",
      status: "completed",
      uploadedAt: "2 hours ago"
    },
    {
      id: "2",
      name: "FY2024_Budget_Forecast.xlsx",
      type: "Excel",
      size: "1.8 MB",
      status: "completed",
      uploadedAt: "1 day ago"
    },
    {
      id: "3",
      name: "ERP_Export_Nov_2024.csv",
      type: "ERP Data",
      size: "5.2 MB",
      status: "processing",
      uploadedAt: "5 minutes ago"
    },
  ]);

  const handleFileUpload = () => {
    // Mock upload
    alert("File upload functionality - Connect to backend API");
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "completed":
        return <CheckCircle2 className="w-5 h-5 text-green-600" />;
      case "processing":
        return <Clock className="w-5 h-5 text-yellow-600 animate-spin" />;
      case "error":
        return <X className="w-5 h-5 text-red-600" />;
      default:
        return null;
    }
  };

  const getFileIcon = (type: string) => {
    if (type.includes("Excel") || type.includes("csv")) {
      return <FileSpreadsheet className="w-8 h-8 text-green-600" />;
    }
    return <FileText className="w-8 h-8 text-blue-600" />;
  };

  return (
    <div className="p-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-[#0A2540] mb-2">Data Management</h1>
        <p className="text-gray-600">Upload and manage your financial documents</p>
      </div>

      {/* Upload Area */}
      <Card className="mb-8">
        <CardContent className="p-12">
          <div className="border-2 border-dashed border-gray-300 rounded-lg p-12 text-center hover:border-[#4FD1C5] transition-colors cursor-pointer">
            <Upload className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-[#0A2540] mb-2">
              Drop files here or click to upload
            </h3>
            <p className="text-sm text-gray-600 mb-4">
              Supported formats: PDF, Excel, CSV (10-Q Reports, Budget, Forecasts, ERP Data)
            </p>
            <Button 
              onClick={handleFileUpload}
              className="bg-[#4FD1C5] hover:bg-[#3DBFB5] text-[#0A2540]"
            >
              Select Files
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Uploaded Files */}
      <Card>
        <CardHeader>
          <CardTitle className="text-[#0A2540]">Uploaded Documents</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {files.map((file) => (
              <div
                key={file.id}
                className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow"
              >
                <div className="flex items-center gap-4">
                  <div>{getFileIcon(file.type)}</div>
                  <div>
                    <div className="font-medium text-[#0A2540]">{file.name}</div>
                    <div className="text-sm text-gray-600">
                      {file.type} • {file.size} • Uploaded {file.uploadedAt}
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  {getStatusIcon(file.status)}
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm">View</Button>
                    <Button variant="outline" size="sm" className="text-red-600 hover:text-red-700">
                      Delete
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Data Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
        <Card>
          <CardContent className="p-6">
            <div className="text-sm text-gray-600 mb-1">Total Documents</div>
            <div className="text-3xl font-bold text-[#0A2540]">24</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="text-sm text-gray-600 mb-1">Storage Used</div>
            <div className="text-3xl font-bold text-[#0A2540]">15.2 GB</div>
            <div className="text-xs text-gray-500 mt-1">of 30 GB</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="text-sm text-gray-600 mb-1">Last Sync</div>
            <div className="text-3xl font-bold text-[#0A2540]">5m ago</div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

