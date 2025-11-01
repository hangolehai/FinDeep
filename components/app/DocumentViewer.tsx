import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, Download, ExternalLink, CheckCircle } from "lucide-react";

const documents = [
  {
    id: "1",
    title: "Q3 2024 10-Q Financial Report",
    type: "10-Q Report",
    date: "Oct 15, 2024",
    citations: 12,
    verified: true,
    preview: "Revenue: $2.4M | Gross Margin: 50.2% | Operating Income: $520K..."
  },
  {
    id: "2",
    title: "FY2024 Annual Budget",
    type: "Budget",
    date: "Jan 1, 2024",
    citations: 8,
    verified: true,
    preview: "Planned Revenue: $9.2M | OPEX Budget: $2.8M | Capital Expenditure: $500K..."
  },
  {
    id: "3",
    title: "November ERP Export",
    type: "ERP Data",
    date: "Nov 1, 2024",
    citations: 15,
    verified: true,
    preview: "AR: $450K | AP: $320K | Inventory: $180K | Cash: $850K..."
  },
];

export function DocumentViewer() {
  return (
    <div className="p-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-[#0A2540] mb-2">Document Library</h1>
        <p className="text-gray-600">Browse and manage financial documents with citation tracking</p>
      </div>

      {/* Documents List */}
      <div className="space-y-4">
        {documents.map((doc) => (
          <Card key={doc.id} className="hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-start justify-between">
                <div className="flex items-start gap-4 flex-1">
                  <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center flex-shrink-0">
                    <FileText className="w-6 h-6 text-blue-600" />
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="font-semibold text-lg text-[#0A2540]">{doc.title}</h3>
                      {doc.verified && (
                        <div className="flex items-center gap-1 px-2 py-1 bg-green-100 text-green-700 rounded text-xs">
                          <CheckCircle className="w-3 h-3" />
                          <span>Verified</span>
                        </div>
                      )}
                    </div>
                    
                    <div className="text-sm text-gray-600 mb-3">
                      {doc.type} • {doc.date} • {doc.citations} citations
                    </div>
                    
                    <div className="p-3 bg-gray-50 rounded text-sm text-gray-700 mb-4">
                      {doc.preview}
                    </div>
                    
                    <div className="flex gap-2">
                      <Button size="sm" variant="outline" className="flex items-center gap-2">
                        <ExternalLink className="w-4 h-4" />
                        View Full Document
                      </Button>
                      <Button size="sm" variant="outline" className="flex items-center gap-2">
                        <Download className="w-4 h-4" />
                        Download
                      </Button>
                      <Button size="sm" variant="outline">
                        View Citations
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Citation Statistics */}
      <Card className="mt-8">
        <CardHeader>
          <CardTitle className="text-[#0A2540]">Citation Tracking</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-[#4FD1C5] mb-1">35</div>
              <div className="text-sm text-gray-600">Total Citations</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-[#4FD1C5] mb-1">100%</div>
              <div className="text-sm text-gray-600">Verified Sources</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-[#4FD1C5] mb-1">0</div>
              <div className="text-sm text-gray-600">Unverified Claims</div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

