"use client";

import { useState } from "react";
import { Sidebar } from "@/components/app/Sidebar";
import { Dashboard } from "@/components/app/Dashboard";
import { DataUpload } from "@/components/app/DataUpload";
import { QueryInterface } from "@/components/app/QueryInterface";
import { DocumentViewer } from "@/components/app/DocumentViewer";
import { VarianceAnalysis } from "@/components/app/VarianceAnalysis";
import { ReportGenerator } from "@/components/app/ReportGenerator";
import { AuditLog } from "@/components/app/AuditLog";

interface AppPageProps {
  onNavigateToLanding?: () => void;
}

export default function AppPage({ onNavigateToLanding }: AppPageProps) {
  const [activeTab, setActiveTab] = useState("dashboard");

  const renderContent = () => {
    switch (activeTab) {
      case "dashboard":
        return <Dashboard />;
      case "data":
        return <DataUpload />;
      case "query":
        return <QueryInterface />;
      case "documents":
        return <DocumentViewer />;
      case "variance":
        return <VarianceAnalysis />;
      case "reports":
        return <ReportGenerator />;
      case "audit":
        return <AuditLog />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar 
        activeTab={activeTab} 
        onTabChange={setActiveTab}
        onNavigateToLanding={onNavigateToLanding}
      />
      <main className="flex-1 overflow-y-auto">
        {renderContent()}
      </main>
    </div>
  );
}

