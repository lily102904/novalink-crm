# 📋 NovaLink CRM - Complete Code Files

Copy and paste each file into your VS Code project following the file structure.

---

## 📁 File Structure

```
novalink-crm/
├── src/
│   ├── main.tsx
│   ├── App.tsx
│   ├── components/
│   │   ├── Sidebar.tsx
│   │   ├── TopBar.tsx
│   │   ├── DashboardScreen.tsx
│   │   ├── SalesScreen.tsx
│   │   ├── FinanceScreen.tsx
│   │   ├── HRScreen.tsx
│   │   ├── ReportsScreen.tsx
│   │   ├── SettingsScreen.tsx
│   │   └── ui/
│   │       ├── avatar.tsx
│   │       ├── badge.tsx
│   │       ├── button.tsx
│   │       ├── calendar.tsx
│   │       ├── card.tsx
│   │       ├── dialog.tsx
│   │       ├── dropdown-menu.tsx
│   │       ├── input.tsx
│   │       ├── label.tsx
│   │       ├── progress.tsx
│   │       ├── select.tsx
│   │       ├── separator.tsx
│   │       ├── sonner.tsx
│   │       ├── switch.tsx
│   │       ├── table.tsx
│   │       └── tabs.tsx
│   ├── lib/
│   │   └── utils.ts
│   └── styles/
│       └── globals.css
├── package.json
├── vite.config.ts
├── tsconfig.json
└── tailwind.config.js
```

---

## 🔧 Configuration Files

### package.json

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
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "lucide-react": "^0.263.1",
    "recharts": "^2.12.7",
    "sonner": "2.0.3",
    "react-day-picker": "^8.10.0",
    "date-fns": "^3.3.1",
    "clsx": "^2.1.0",
    "tailwind-merge": "^2.2.1",
    "class-variance-authority": "^0.7.0"
  },
  "devDependencies": {
    "@types/react": "^18.2.66",
    "@types/react-dom": "^18.2.22",
    "@types/node": "^20.11.24",
    "@vitejs/plugin-react": "^4.2.1",
    "autoprefixer": "^10.4.18",
    "postcss": "^8.4.35",
    "tailwindcss": "^4.0.0",
    "typescript": "^5.2.2",
    "vite": "^5.2.0"
  }
}
```

### vite.config.ts

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

### tsconfig.json

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

### tsconfig.node.json

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

### tailwind.config.js

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

### postcss.config.js

```javascript
export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}
```

---

## 📌 Installation Commands

Run these commands in order:

```bash
# 1. Create project
npm create vite@latest novalink-crm -- --template react-ts
cd novalink-crm

# 2. Install dependencies
npm install

# 3. Install additional packages
npm install lucide-react recharts sonner@2.0.3 react-day-picker date-fns clsx tailwind-merge class-variance-authority

# 4. Install dev dependencies
npm install -D tailwindcss@next postcss autoprefixer @types/node

# 5. Initialize Tailwind
npx tailwindcss init -p
```

---

## 🎯 Copy Files in This Order

1. **Configuration files** (package.json, vite.config.ts, etc.)
2. **src/lib/utils.ts**
3. **src/styles/globals.css**
4. **src/components/ui/** (all UI components)
5. **src/components/** (main components)
6. **src/main.tsx**
7. **src/App.tsx**

---

## ✅ Verification Steps

After copying all files:

1. Run `npm install` to ensure all dependencies are installed
2. Run `npm run dev` to start the development server
3. Open `http://localhost:5173` in your browser
4. You should see the NovaLink CRM dashboard

---

## 📝 Notes

- All images use Unsplash URLs and will load from the internet
- No backend is required - all data is mock/static
- The application is fully functional for demonstration purposes
- Designed for desktop viewing (1920x1080 recommended)

---

**Need Help?** Check SETUP_GUIDE.md for detailed instructions and troubleshooting.
