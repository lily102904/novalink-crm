import { useState, useEffect } from "react";
import { Sidebar } from "./components/Sidebar";
import { TopBar } from "./components/TopBar";
import { DashboardScreen } from "./components/DashboardScreen";
import { SalesScreen } from "./components/SalesScreen";
import { FinanceScreen } from "./components/FinanceScreen";
import { HRScreen } from "./components/HRScreen";
import { ReportsScreen } from "./components/ReportsScreen";
import { SettingsScreen } from "./components/SettingsScreen";
import { LoginScreen } from "./components/LoginScreen";
import { SignupScreen } from "./components/SignupScreen";
import { Toaster } from "./components/ui/sonner";

interface User {
  email: string;
  name: string;
}

export default function App() {
  const [activeScreen, setActiveScreen] = useState("dashboard");
  const [authScreen, setAuthScreen] = useState<"login" | "signup">("login");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [currentUser, setCurrentUser] = useState<User | null>(null);

  // Check if user is already logged in
  useEffect(() => {
    const savedUser = localStorage.getItem("novalink_current_user");
    if (savedUser) {
      const user = JSON.parse(savedUser);
      setCurrentUser(user);
      setIsAuthenticated(true);
    }
  }, []);

  const handleLoginSuccess = (user: User) => {
    setCurrentUser(user);
    setIsAuthenticated(true);
    localStorage.setItem("novalink_current_user", JSON.stringify(user));
  };

  const handleSignupSuccess = (user: User) => {
    setCurrentUser(user);
    setIsAuthenticated(true);
    localStorage.setItem("novalink_current_user", JSON.stringify(user));
  };

  const handleLogout = () => {
    setCurrentUser(null);
    setIsAuthenticated(false);
    setActiveScreen("dashboard");
    localStorage.removeItem("novalink_current_user");
  };

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

  // Show login/signup screens if not authenticated
  if (!isAuthenticated) {
    if (authScreen === "login") {
      return (
        <>
          <LoginScreen
            onLoginSuccess={handleLoginSuccess}
            onSwitchToSignup={() => setAuthScreen("signup")}
          />
          <Toaster />
        </>
      );
    } else {
      return (
        <>
          <SignupScreen
            onSignupSuccess={handleSignupSuccess}
            onSwitchToLogin={() => setAuthScreen("login")}
          />
          <Toaster />
        </>
      );
    }
  }

  // Show main app if authenticated
  return (
    <div className="min-h-screen bg-background">
      <Sidebar activeScreen={activeScreen} onNavigate={setActiveScreen} />
      <TopBar currentUser={currentUser} onLogout={handleLogout} />
      <main className="ml-64 mt-16 p-6">
        <div className="max-w-7xl mx-auto">
          {renderScreen()}
        </div>
      </main>
      <Toaster />
    </div>
  );
}
