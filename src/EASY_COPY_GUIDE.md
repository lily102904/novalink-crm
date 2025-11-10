# 🚀 Easy Copy & Paste Guide for VS Code

## Quick Setup (5 Minutes)

### Step 1: Create React Project
```bash
npm create vite@latest novalink-crm -- --template react-ts
cd novalink-crm
npm install
```

### Step 2: Install All Dependencies
```bash
npm install lucide-react recharts sonner@2.0.3 react-day-picker date-fns clsx tailwind-merge class-variance-authority @radix-ui/react-avatar @radix-ui/react-dialog @radix-ui/react-dropdown-menu @radix-ui/react-label @radix-ui/react-progress @radix-ui/react-select @radix-ui/react-separator @radix-ui/react-slot @radix-ui/react-switch @radix-ui/react-tabs
```

```bash
npm install -D tailwindcss@next postcss autoprefixer @types/node
npx tailwindcss init -p
```

### Step 3: Update Configuration Files

#### Update `vite.config.ts`:
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

#### Update `tsconfig.json` (add to compilerOptions):
```json
"baseUrl": ".",
"paths": {
  "@/*": ["./src/*"]
}
```

### Step 4: Create Folder Structure
```bash
mkdir -p src/components/ui
mkdir -p src/lib
mkdir -p src/styles
```

---

## 📂 Files to Copy (In Order)

### 1️⃣ Core Files (Copy First)

**File:** `src/lib/utils.ts`
```
Copy from: View the file in this chat
Location: src/lib/utils.ts
```

**File:** `src/styles/globals.css`
```
Copy from: View the file in this chat  
Location: src/styles/globals.css
```

**File:** `src/main.tsx`
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

### 2️⃣ UI Components (Copy These to `src/components/ui/`)

You need to copy ALL UI component files from the current codebase:

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

**Pro Tip:** These are standard shadcn/ui components. You can also:
1. Go to https://ui.shadcn.com/
2. Use their CLI to add components: `npx shadcn-ui@latest init`
3. Then add each component: `npx shadcn-ui@latest add avatar badge button...`

---

### 3️⃣ Main Components (Copy These to `src/components/`)

Copy each component file:

1. **Sidebar.tsx** - Navigation sidebar
2. **TopBar.tsx** - Top navigation bar
3. **DashboardScreen.tsx** - Main dashboard
4. **SalesScreen.tsx** - Sales pipeline
5. **FinanceScreen.tsx** - Financial management
6. **HRScreen.tsx** - Human resources
7. **ReportsScreen.tsx** - Business reports
8. **SettingsScreen.tsx** - Settings page

**Where to find them:** 
- Scroll through this chat to find each component
- OR use the file browser in the current environment
- OR I can provide each one individually

---

### 4️⃣ App.tsx (Copy Last)

**File:** `src/App.tsx`
```
Copy from: View App.tsx in this chat
Location: src/App.tsx
```

---

## 🎯 Verification Checklist

After copying all files:

- [ ] Run `npm install`
- [ ] Check no TypeScript errors
- [ ] Run `npm run dev`
- [ ] Open http://localhost:5173
- [ ] See NovaLink CRM dashboard
- [ ] Click through all menu items (Dashboard, Sales, Finance, HR, Reports, Settings)
- [ ] Verify charts are rendering
- [ ] Check profile images load

---

## 🆘 Common Issues & Solutions

### Issue: "Cannot find module '@/lib/utils'"
**Solution:** 
1. Make sure `src/lib/utils.ts` exists
2. Check `vite.config.ts` has the alias configuration
3. Restart VS Code and dev server

### Issue: "Module not found: recharts"
**Solution:** 
```bash
npm install recharts
```

### Issue: "Cannot find module 'sonner'"
**Solution:**
```bash
npm install sonner@2.0.3
```

### Issue: UI components not found
**Solution:**
1. Copy all files from `components/ui/` directory
2. OR install via shadcn CLI
3. Make sure import paths start with `./ui/` not `@/components/ui/`

### Issue: Tailwind styles not working
**Solution:**
1. Ensure `src/styles/globals.css` is imported in `main.tsx`
2. Check `tailwind.config.js` points to correct paths
3. Restart dev server

---

## 📥 Want Individual Files?

Reply with:
- "Show me [ComponentName]" - I'll provide that specific component
- "Show me all UI components" - I'll list all UI component code
- "Show me the complete DashboardScreen" - I'll provide full code

---

## 🎨 Optional: Customize

After everything works, you can:
- Change colors in `src/styles/globals.css`
- Modify company name in `Sidebar.tsx`
- Add your own data in screen components
- Change profile images URLs

---

## ✅ Final Step

Run and enjoy:
```bash
npm run dev
```

Your CRM dashboard should be running at **http://localhost:5173**

---

**Need a specific file?** Just ask! I can provide any component individually.
