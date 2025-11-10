# ⚡ Quick Start - NovaLink CRM

## 🎯 For VS Code Users (5 Minutes)

### 1. Create New Folder
```bash
mkdir novalink-crm
cd novalink-crm
```

### 2. Copy These Files First

#### Create `package.json`:
```json
{
  "name": "novalink-crm",
  "private": true,
  "version": "1.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "tsc && vite build",
    "preview": "vite preview"
  },
  "dependencies": {
    "react": "^18.3.1",
    "react-dom": "^18.3.1",
    "lucide-react": "^0.263.1",
    "recharts": "^2.12.7",
    "sonner": "2.0.3",
    "react-day-picker": "^8.10.0",
    "date-fns": "^3.3.1",
    "clsx": "^2.1.0",
    "tailwind-merge": "^2.2.1",
    "class-variance-authority": "^0.7.0",
    "@radix-ui/react-avatar": "^1.0.4",
    "@radix-ui/react-dialog": "^1.0.5",
    "@radix-ui/react-dropdown-menu": "^2.0.6",
    "@radix-ui/react-label": "^2.0.2",
    "@radix-ui/react-progress": "^1.0.3",
    "@radix-ui/react-select": "^2.0.0",
    "@radix-ui/react-separator": "^1.0.3",
    "@radix-ui/react-slot": "^1.0.2",
    "@radix-ui/react-switch": "^1.0.3",
    "@radix-ui/react-tabs": "^1.0.4",
    "react-hook-form": "7.55.0",
    "vaul": "^0.9.0"
  },
  "devDependencies": {
    "@types/react": "^18.3.3",
    "@types/react-dom": "^18.3.0",
    "@types/node": "^20.11.24",
    "@vitejs/plugin-react": "^4.3.1",
    "autoprefixer": "^10.4.19",
    "postcss": "^8.4.38",
    "tailwindcss": "^4.0.0",
    "typescript": "^5.5.3",
    "vite": "^5.3.1"
  }
}
```

### 3. Install
```bash
npm install
```

### 4. Copy All Your Existing Files

Create this structure:
```
novalink-crm/
├── src/
│   ├── components/    (copy your components folder here)
│   ├── lib/
│   │   └── utils.ts
│   ├── styles/        (copy your styles folder here)
│   ├── App.tsx        (copy your App.tsx here)
│   └── main.tsx
├── index.html
├── vite.config.ts
├── tsconfig.json
└── package.json (already created above)
```

### 5. Create Missing Files

#### `index.html` (root):
```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>NovaLink CRM</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>
```

#### `src/main.tsx`:
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

#### `src/lib/utils.ts`:
```typescript
import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
```

#### `vite.config.ts` (root):
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

#### `tsconfig.json` (root):
```json
{
  "compilerOptions": {
    "target": "ES2020",
    "useDefineForClassFields": true,
    "lib": ["ES2020", "DOM", "DOM.Iterable"],
    "module": "ESNext",
    "skipLibCheck": true,
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true,
    "jsx": "react-jsx",
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noFallthroughCasesInSwitch": true,
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"]
    }
  },
  "include": ["src"],
  "references": [{ "path": "./tsconfig.node.json" }]
}
```

#### `tsconfig.node.json` (root):
```json
{
  "compilerOptions": {
    "composite": true,
    "skipLibCheck": true,
    "module": "ESNext",
    "moduleResolution": "bundler",
    "allowSyntheticDefaultImports": true
  },
  "include": ["vite.config.ts"]
}
```

#### `tailwind.config.js` (root):
```javascript
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: { extend: {} },
  plugins: [],
}
```

#### `postcss.config.js` (root):
```javascript
export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}
```

### 6. Fix Import Paths

In all `src/components/ui/*.tsx` files, change:
```typescript
// FROM:
import { cn } from "./utils"

// TO:
import { cn } from "@/lib/utils"
```

### 7. Run!
```bash
npm run dev
```

Open: http://localhost:5173

---

## ✅ Checklist

- [ ] Created `novalink-crm` folder
- [ ] Created `package.json`
- [ ] Ran `npm install`
- [ ] Copied all `components/` to `src/components/`
- [ ] Copied `styles/` to `src/styles/`
- [ ] Copied `App.tsx` to `src/App.tsx`
- [ ] Created `src/main.tsx`
- [ ] Created `src/lib/utils.ts`
- [ ] Created `index.html`
- [ ] Created `vite.config.ts`
- [ ] Created `tsconfig.json`
- [ ] Created `tailwind.config.js`
- [ ] Updated import paths in UI components
- [ ] Ran `npm run dev`
- [ ] Opened http://localhost:5173
- [ ] See dashboard working!

---

## 🚨 Common Issues

**"Cannot find module '@/lib/utils'"**
→ Make sure `vite.config.ts` and `tsconfig.json` are created correctly

**"Module not found: sonner"**
→ Run `npm install sonner@2.0.3`

**Styles not working**
→ Make sure `main.tsx` imports `'./styles/globals.css'`

---

## 🎉 Done!

You now have a fully working CRM dashboard!

Navigate through:
- Dashboard
- Sales
- Finance  
- HR
- Reports
- Settings

All features are working with mock data.
