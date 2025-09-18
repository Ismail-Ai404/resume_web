# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Project Overview

This is a personal resume website built as a React TypeScript application using Vite as the build tool. The application features a modern, responsive design with dark/light mode theming and an interactive animated cursor. The resume displays professional experience, projects, education, and technical skills in a clean, organized layout.

## Common Commands

### Development
```powershell
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

### Code Quality
```powershell
# Run ESLint
npm run lint

# Run TypeScript compiler check
npx tsc --noEmit
```

### Deployment
```powershell
# Deploy to GitHub Pages
npm run deploy

# Build then deploy (full process)
npm run predeploy && npm run deploy
```

## Architecture & Structure

### Core Application Architecture
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite with React plugin and Tailwind CSS integration
- **Styling**: Tailwind CSS v4 with custom dark/light mode theming
- **State Management**: React useState hooks for theme and touch device detection

### Key Components Structure
The application follows a simple component architecture:

**App.tsx** - Root component that:
- Manages global dark mode state
- Detects touch devices to conditionally render animated cursor
- Renders the main Resume component

**components/resume.tsx** - Main resume component containing:
- Personal information and contact details
- Professional experience section
- Projects showcase with external links
- Education information
- Tech stack with visual icons
- Responsive layout with sidebar and main content areas

### Design Patterns

**Theme Management**: 
- Dark/light mode implemented through conditional CSS classes
- Theme state managed at the App level and passed down to Resume component
- Smooth transitions using Tailwind's duration utilities

**Responsive Design**:
- Mobile-first approach with responsive breakpoints (md:, lg:)
- Flexible grid layouts for tech stack icons
- Conditional rendering for touch vs non-touch devices

**Asset Management**:
- Tech stack icons stored in `src/assets/` directory
- Images imported as ES modules for proper bundling
- Static assets referenced through proper import paths

### External Integrations
- **react-animated-cursor**: Custom animated cursor for non-touch devices
- **lucide-react**: Clean, consistent icons for contact information
- **react-icons**: Additional icon library for UI elements
- **GitHub Pages**: Deployment target with base path configuration

### Development Considerations

**Vite Configuration**:
- Base path set to "/resume_web/" for GitHub Pages deployment
- Tailwind CSS integrated via Vite plugin
- React plugin configured for JSX transformation

**TypeScript Setup**:
- Strict mode enabled with comprehensive linting rules
- Modern ES2020 target with DOM types included
- Bundler module resolution for Vite compatibility

**ESLint Configuration**:
- TypeScript-aware linting with recommended rules
- React hooks linting for proper hook usage
- React Refresh plugin for fast development updates

### Project-Specific Patterns
- Personal data centralized in typed objects within resume.tsx
- External project links handled through switch-case navigation functions
- Tech stack represented as typed arrays for easy maintenance
- Section details structured as JSX elements for rich formatting