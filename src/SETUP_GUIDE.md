# NovaLink CRM - Complete Setup Guide

## 📦 Prerequisites

Before you begin, make sure you have:
- Node.js (v16 or higher)
- npm or yarn
- VS Code or any code editor

## 🚀 Quick Start

### Step 1: Create React + TypeScript + Vite Project

```bash
npm create vite@latest novalink-crm -- --template react-ts
cd novalink-crm
```

### Step 2: Install Dependencies

```bash
npm install
npm install lucide-react recharts sonner@2.0.3 react-day-picker date-fns
npm install -D tailwindcss@next postcss autoprefixer
```

### Step 3: Initialize Tailwind CSS

```bash
npx tailwindcss init -p
```

### Step 4: Configure Tailwind

Replace the content of `tailwind.config.js` with:

```javascript
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

### Step 5: Update vite.config.ts

Replace the content of `vite.config.ts` with:

```typescript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})
```

### Step 6: Update tsconfig.json

Add the following to the `compilerOptions` section:

```json
{
  "compilerOptions": {
    // ... existing options
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"]
    }
  }
}
```

### Step 7: Update package.json

Add path to dependencies:

```bash
npm install --save-dev @types/node
```

## 📁 File Structure

Create the following structure in your `src` folder:

```
src/
├── App.tsx
├── main.tsx
├── components/
│   ├── Sidebar.tsx
│   ├── TopBar.tsx
│   ├── DashboardScreen.tsx
│   ├── SalesScreen.tsx
│   ├── FinanceScreen.tsx
│   ├── HRScreen.tsx
│   ├── ReportsScreen.tsx
│   ├── SettingsScreen.tsx
│   └── ui/
│       ├── avatar.tsx
│       ├── badge.tsx
│       ├── button.tsx
│       ├── calendar.tsx
│       ├── card.tsx
│       ├── dialog.tsx
│       ├── dropdown-menu.tsx
│       ├── input.tsx
│       ├── label.tsx
│       ├── progress.tsx
│       ├── select.tsx
│       ├── separator.tsx
│       ├── sonner.tsx
│       ├── switch.tsx
│       ├── table.tsx
│       └── tabs.tsx
└── styles/
    └── globals.css
```

## 📝 File Contents

### 1. src/main.tsx

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

### 2. src/styles/globals.css

Copy the entire globals.css content from the previous message.

### 3. Component Files

Copy all component files exactly as provided in the next sections.

## 🎨 UI Components (shadcn/ui)

The UI components are based on shadcn/ui. Copy each file into `src/components/ui/`:

- avatar.tsx
- badge.tsx
- button.tsx
- calendar.tsx
- card.tsx
- dialog.tsx
- dropdown-menu.tsx
- input.tsx
- label.tsx
- progress.tsx
- select.tsx
- separator.tsx
- sonner.tsx
- switch.tsx
- table.tsx
- tabs.tsx

**Note:** All UI components are included in the file list below.

## 🔧 Utils

Create `src/lib/utils.ts`:

```typescript
import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
```

Install dependencies:

```bash
npm install clsx tailwind-merge class-variance-authority
```

## ✅ Running the Project

```bash
npm run dev
```

Open your browser to `http://localhost:5173`

## 🎯 Features

✅ **Dashboard** - Overview with charts, stats, and activities
✅ **Sales** - Pipeline management with filters and analytics
✅ **Finance** - Revenue tracking, invoices, and expenses
✅ **HR** - Employee directory with performance metrics
✅ **Reports** - Comprehensive business analytics
✅ **Settings** - User preferences and system configuration

## 🌐 No Backend Required

All data is mock/static data defined in the components. The application runs entirely in the browser without any backend server.

## 📱 Responsive Design

The application is optimized for desktop viewing but includes responsive design elements.

## 🎨 Design System

- **Primary Color:** #1E88E5 (Professional Blue)
- **Accent Color:** #FFC107 (Gold)
- **Background:** #F5F5F5 (Light Gray)
- **Text:** #212121 (Dark Gray)

## 🆘 Troubleshooting

### Issue: Module not found errors
**Solution:** Make sure all dependencies are installed with `npm install`

### Issue: Tailwind classes not working
**Solution:** Ensure `globals.css` is imported in `main.tsx`

### Issue: Icons not showing
**Solution:** Verify `lucide-react` is installed: `npm install lucide-react`

### Issue: Charts not rendering
**Solution:** Verify `recharts` is installed: `npm install recharts`

## 📚 Additional Resources

- [Vite Documentation](https://vitejs.dev/)
- [React Documentation](https://react.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [shadcn/ui](https://ui.shadcn.com/)
- [Lucide Icons](https://lucide.dev/)
- [Recharts](https://recharts.org/)

---

**Created by NovaLink Solutions**
*For classroom demonstration purposes*
