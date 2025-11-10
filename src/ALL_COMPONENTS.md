# 🎯 All Component Files - Ready to Copy & Paste

---

## src/main.tsx

```typescript
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './styles/globals.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
```

---

## src/App.tsx

```typescript
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
```

---

## src/lib/utils.ts

```typescript
import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
```

---

## ⚠️ IMPORTANT: For All Other Component Files

Due to the length of the component files, I'll provide them in separate sections.
Please refer to the original files for:

1. **src/components/Sidebar.tsx** - See previous message
2. **src/components/TopBar.tsx** - See previous message  
3. **src/components/DashboardScreen.tsx** - Available in codebase
4. **src/components/SalesScreen.tsx** - Available in codebase
5. **src/components/FinanceScreen.tsx** - Available in codebase
6. **src/components/HRScreen.tsx** - Available in codebase
7. **src/components/ReportsScreen.tsx** - Available in codebase
8. **src/components/SettingsScreen.tsx** - Available in codebase

## UI Components Location

All UI components (avatar, badge, button, etc.) should be copied from your existing codebase's `components/ui/` directory into `src/components/ui/`.

---

## 📥 Quick Download Method

**Option 1: Copy from this chat**
- Scroll through previous messages to find each component
- Copy the full code for each file
- Paste into corresponding file in your VS Code project

**Option 2: View in the file browser**
- Use the view_tool to see each file's contents
- Copy the entire content
- Create new file in VS Code and paste

---

## ✅ File Checklist

- [ ] src/main.tsx
- [ ] src/App.tsx
- [ ] src/lib/utils.ts
- [ ] src/styles/globals.css
- [ ] src/components/Sidebar.tsx
- [ ] src/components/TopBar.tsx
- [ ] src/components/DashboardScreen.tsx
- [ ] src/components/SalesScreen.tsx
- [ ] src/components/FinanceScreen.tsx
- [ ] src/components/HRScreen.tsx
- [ ] src/components/ReportsScreen.tsx
- [ ] src/components/SettingsScreen.tsx
- [ ] All UI components in src/components/ui/

---

**Next:** I'll provide the screen components individually for easy copying.
