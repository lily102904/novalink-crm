# 🚀 NovaLink CRM - Complete Business Management System

A modern, full-featured CRM dashboard built with React, TypeScript, and Tailwind CSS.

![NovaLink CRM](https://img.shields.io/badge/React-18.3-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-5.5-blue)
![Tailwind](https://img.shields.io/badge/Tailwind-4.0-blue)
![License](https://img.shields.io/badge/License-MIT-green)

## 📋 Overview

NovaLink CRM is a comprehensive business management system featuring:
- **Dashboard** - Real-time analytics and KPIs
- **Sales Pipeline** - Deal tracking and management
- **Finance** - Revenue, expenses, and invoicing
- **HR Management** - Employee directory and performance
- **Reports** - Business intelligence and analytics
- **Settings** - User preferences and configuration

## 🎨 Design System

- **Primary Color:** #1E88E5 (Professional Blue)
- **Accent Color:** #FFC107 (Gold)
- **Background:** #F5F5F5 (Light Gray)
- **Text:** #212121 (Dark Gray)
- **Fonts:** Poppins (headings), Roboto (body)

## ✨ Features

### Dashboard
- Revenue vs target charts
- Weekly sales trends
- Recent activity feed
- Upcoming tasks widget
- Top performers showcase
- Interactive progress bars

### Sales
- Pipeline visualization
- Deal stage tracking
- Client management
- Sales funnel analytics
- Advanced filtering
- Probability indicators

### Finance
- Income vs expenses charts
- Invoice management
- Revenue forecasting
- Expense categories
- Transaction history
- Payment tracking

### HR
- Employee directory with nature profile images
- Performance metrics
- Attendance calendar
- Leave request management
- Department statistics
- Real-time status indicators

### Reports
- Comprehensive analytics
- Department performance
- KPI tracking
- Growth trends
- Quarterly comparisons
- Export functionality (PDF/CSV)

### Settings
- User profile management
- Account preferences
- Notification settings
- Security options
- Display customization

## 🛠️ Tech Stack

- **Framework:** React 18.3 with TypeScript
- **Build Tool:** Vite 5.3
- **Styling:** Tailwind CSS 4.0
- **UI Components:** Radix UI + shadcn/ui
- **Charts:** Recharts 2.12
- **Icons:** Lucide React
- **Date Handling:** date-fns + react-day-picker
- **Notifications:** Sonner 2.0.3
- **Form Handling:** React Hook Form 7.55

## 📦 Installation

### Prerequisites
- Node.js 16+ 
- npm or yarn

### Quick Start

```bash
# Clone or download the project
cd novalink-crm

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for Production

```bash
npm run build
npm run preview
```

## 📁 Project Structure

```
novalink-crm/
├── src/
│   ├── components/
│   │   ├── ui/              # Reusable UI components
│   │   ├── DashboardScreen.tsx
│   │   ├── SalesScreen.tsx
│   │   ├── FinanceScreen.tsx
│   │   ├── HRScreen.tsx
│   │   ├── ReportsScreen.tsx
│   │   ├── SettingsScreen.tsx
│   │   ├── Sidebar.tsx
│   │   └── TopBar.tsx
│   ├── lib/
│   │   └── utils.ts         # Utility functions
│   ├── styles/
│   │   └── globals.css      # Global styles & themes
│   ├── App.tsx              # Main app component
│   └── main.tsx             # Entry point
├── public/
├── index.html
├── package.json
├── vite.config.ts
├── tsconfig.json
└── tailwind.config.js
```

## 🎯 Key Components

### Navigation
- **Sidebar** - Main navigation with 6 sections
- **TopBar** - Search, notifications, user profile

### Screens
- **DashboardScreen** - Overview and analytics
- **SalesScreen** - Pipeline management
- **FinanceScreen** - Financial tracking
- **HRScreen** - Employee management
- **ReportsScreen** - Business intelligence
- **SettingsScreen** - Configuration

### UI Components
All components follow shadcn/ui patterns:
- Avatar, Badge, Button
- Card, Dialog, Dropdown
- Input, Select, Table
- Progress, Calendar, Tabs
- And more...

## 🔧 Configuration

### Environment Variables
No environment variables required - all data is mock/static.

### Customization

#### Change Brand Colors
Edit `src/styles/globals.css`:
```css
:root {
  --primary: #1E88E5;    /* Your brand color */
  --accent: #FFC107;     /* Your accent color */
}
```

#### Change Company Name
Edit `src/components/Sidebar.tsx`:
```typescript
<h2 className="text-primary">Your Company Name</h2>
```

#### Modify Data
Update mock data in each screen component:
- `DashboardScreen.tsx` - Dashboard data
- `SalesScreen.tsx` - Sales deals
- `FinanceScreen.tsx` - Financial records
- `HRScreen.tsx` - Employee list
- etc.

## 📊 Mock Data

All data is static/mock data for demonstration purposes:
- No backend required
- No database needed
- No API calls
- Perfect for presentations and demos

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📱 Responsive Design

Optimized for:
- Desktop: 1920x1080 (primary)
- Laptop: 1366x768
- Tablet: Basic support
- Mobile: Limited support

## 🚀 Deployment

### Vercel
```bash
npm run build
# Deploy dist/ folder to Vercel
```

### Netlify
```bash
npm run build
# Deploy dist/ folder to Netlify
```

### GitHub Pages
```bash
npm run build
# Deploy dist/ folder to gh-pages branch
```

## 🤝 Contributing

This is a demonstration project. Feel free to:
- Fork and modify
- Use as a template
- Learn from the code
- Build upon it

## 📄 License

MIT License - feel free to use for personal or commercial projects.

## 👥 Team

**Featured Roles:**
- Lillian Adunia - CEO
- Comfort Esonu - Sales Manager
- Kwesi Amaning - Finance Director
- Vanessa Umenze - HR Lead

## 🎓 Use Cases

Perfect for:
- Business presentations
- Classroom demonstrations
- Portfolio projects
- Learning React/TypeScript
- UI/UX showcases
- Client mockups

## 📧 Support

For questions or issues:
1. Check `SETUP_GUIDE.md` for detailed setup
2. Review `COMPLETE_SETUP_PACKAGE.md` for configuration
3. See `EASY_COPY_GUIDE.md` for copy/paste instructions

## 🎉 Credits

- **UI Components:** shadcn/ui
- **Icons:** Lucide React
- **Charts:** Recharts
- **Images:** Unsplash (nature photographs)
- **Design:** NovaLink Solutions

## 📝 Notes

- All employee profile images use nature photography
- All financial data is fictional
- Designed for demonstration purposes only
- Not suitable for collecting real PII or sensitive data

---

**Built with ❤️ by NovaLink Solutions**

*Last Updated: November 10, 2025*
