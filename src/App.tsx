import { useState } from "react";
import { Sidebar } from "./components/Sidebar";
import { TopBar } from "./components/TopBar";
import { DashboardScreen } from "./components/DashboardScreen";
import { SalesScreen } from "./components/SalesScreen";
import { FinanceScreen } from "./components/FinanceScreen";
import { HRScreen } from "./components/HRScreen";
import { ReportsScreen } from "./components/ReportsScreen";
import { SettingsScreen } from "./components/SettingsScreen";
import { Toaster } from "./components/ui/sonner";

export default function App() {
  const [activeScreen, setActiveScreen] = useState("dashboard");

  const renderScreen = () => {
    switch (activeScreen) {
      case "dashboard":
        return <DashboardScreen onNavigate={setActiveScreen} />;
      case "sales":
        return <SalesScreen onNavigate={setActiveScreen} />;
      case "finance":
        return <FinanceScreen onNavigate={setActiveScreen} />;
      case "hr":
        return <HRScreen onNavigate={setActiveScreen} />;
      case "reports":
        return <ReportsScreen onNavigate={setActiveScreen} />;
      case "settings":
        return <SettingsScreen onNavigate={setActiveScreen} />;
      default:
        return <DashboardScreen onNavigate={setActiveScreen} />;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Sidebar activeScreen={activeScreen} onNavigate={setActiveScreen} />
      <TopBar />
      <main className="ml-64 mt-16 p-6">
        <div className="max-w-7xl mx-auto">
          {renderScreen()}
        </div>
      </main>
      <Toaster />
    </div>
  );
}
