# AI-BPMS Client Application

## Overview
Frontend client application for the AI-powered Business Process Management System. Provides a rich user interface for process management, monitoring, and administration.

## Technology Stack
- **Framework**: React 18 + TypeScript
- **Build Tool**: Vite (fast builds and development)
- **Styling**: Tailwind CSS + Headless UI/Radix UI
- **State Management**: Zustand (simple, TypeScript-friendly)
- **Server State**: React Query (TanStack Query) for caching and synchronization
- **API Client**: Axios with interceptors
- **Real-time**: Socket.io-client for WebSocket connections
- **Process Visualization**: React Flow for workflow designer
- **Charts**: Recharts for analytics dashboards
- **Forms**: React Hook Form + Zod validation
- **Dynamic Forms**: React JSON Schema Form (RJSF) for process-driven forms
- **Icons**: Lucide React
- **Testing**: Vitest + React Testing Library + Playwright

## Core Features
- Process designer (visual workflow builder)
- Process monitoring dashboard
- Task management interface
- User and role administration
- Business rule configuration
- Analytics and reporting
- Real-time notifications
- Mobile-responsive design

## User Roles & Interfaces
- **Process Designers**: Visual workflow creation tools
- **Business Users**: Task execution and monitoring
- **Administrators**: System configuration and user management
- **Analysts**: Reporting and analytics dashboards

## Architecture
```
client/
├── src/
│   ├── components/         # Reusable UI components
│   │   ├── ui/            # Base UI components (buttons, inputs, etc.)
│   │   ├── process/       # Process-specific components
│   │   ├── forms/         # Dynamic form components
│   │   ├── charts/        # Analytics and visualization components
│   │   └── layout/        # Layout and navigation components
│   ├── pages/             # Application pages/views
│   │   ├── dashboard/     # Main dashboard and overview
│   │   ├── designer/      # Visual process designer
│   │   ├── tasks/         # Task management interface
│   │   ├── analytics/     # Reports and analytics
│   │   └── admin/         # Administration panels
│   ├── hooks/             # Custom React hooks
│   ├── stores/            # Zustand state stores
│   ├── services/          # API communication layer
│   │   ├── api/           # HTTP API calls
│   │   ├── websocket/     # Real-time connections
│   │   └── auth/          # Authentication services
│   ├── types/             # TypeScript type definitions
│   ├── utils/             # Helper functions and utilities
│   ├── lib/               # Configuration and third-party setup
│   └── assets/            # Static assets (images, etc.)
├── public/                # Public static files
├── tests/                 # Test files and utilities
│   ├── components/        # Component tests
│   ├── e2e/              # End-to-end tests
│   └── utils/            # Test utilities
└── docs/                  # Component and API documentation
```

## Key Features
- **Process Designer**: Drag-and-drop workflow builder using React Flow
- **Real-time Dashboard**: Live process monitoring with WebSocket updates
- **Task Management**: Intuitive task inbox and assignment interface
- **Dynamic Forms**: Auto-generated forms based on JSON schemas from process definitions
- **Analytics Hub**: Interactive charts and process performance metrics
- **User Administration**: Role-based access control and user management
- **Responsive Design**: Mobile-first approach for all devices
- **Offline Support**: Critical functionality available without internet

## Development Environment Setup
```bash
# Prerequisites
node --version  # Requires Node.js 18+
npm --version   # or yarn/pnpm

# Installation
npm create vite@latest ai-bpms-client -- --template react-ts
cd ai-bpms-client
npm install

# Additional dependencies
npm install @tanstack/react-query zustand axios socket.io-client
npm install @headlessui/react @tailwindcss/forms react-hook-form zod
npm install reactflow recharts lucide-react
npm install @rjsf/core @rjsf/utils @rjsf/validator-ajv8 @rjsf/tailwind
npm install -D @types/node vitest @testing-library/react playwright

# Development server
npm run dev  # Starts on http://localhost:5173
```

## Configuration Files
- **vite.config.ts**: Build configuration and dev server
- **tailwind.config.js**: Styling and design system
- **tsconfig.json**: TypeScript compiler settings
- **.env**: Environment variables for API endpoints

## Dynamic Form System
The client uses **React JSON Schema Form (RJSF)** for generating dynamic forms based on process definitions:

### **Form Architecture:**
```typescript
// Process task form schema from backend
interface ProcessFormSchema {
  schema: JSONSchema7;        // Data validation schema
  uiSchema?: UiSchema;       // UI layout and styling
  formData?: any;            // Pre-filled data
  readonly?: boolean;        // Form interaction mode
}

// Example form generation
<Form
  schema={taskSchema.schema}
  uiSchema={taskSchema.uiSchema}
  formData={taskSchema.formData}
  validator={validator}
  onSubmit={handleTaskSubmit}
  customWidgets={customWidgets}
/>
```

### **Custom Widgets:**
- **User Picker**: Select users/groups for assignments
- **Date Range**: Business day calendars
- **File Upload**: Document attachments
- **Rich Text**: Formatted text input
- **Conditional Fields**: Dynamic field visibility
- **Approval Chain**: Multi-step approval flows

### **Integration Benefits:**
- **Backend Driven**: Forms defined by Go backend via JSON schemas
- **Type Safe**: Full TypeScript support for form validation
- **Consistent Styling**: Tailwind CSS integration for uniform design
- **Extensible**: Custom widgets for BPMS-specific inputs
- **Validation**: Real-time validation with detailed error messages

## Performance Goals
- **Fast Initial Load**: < 2 seconds first contentful paint
- **Smooth Interactions**: 60fps animations and transitions
- **Real-time Updates**: < 100ms WebSocket message handling
- **Bundle Size**: < 500KB gzipped main bundle
- **Responsive Design**: Fluid experience across all device sizes
- **Offline Capability**: Core features available without connectivity

## Development Workflow
- **Hot Module Replacement**: Instant feedback during development
- **Type Safety**: Full TypeScript coverage with strict mode
- **Component Library**: Reusable design system components
- **Automated Testing**: Unit, integration, and E2E test coverage
- **Code Generation**: AI-friendly patterns and conventions
- **CI/CD Ready**: GitHub Actions/Azure DevOps pipeline integration

## AI Code Generation Benefits
- **Standard Patterns**: Uses well-established React + TypeScript patterns
- **Clear Structure**: Predictable folder organization for AI understanding
- **Type Definitions**: Strong typing helps AI generate accurate code
- **Component Composition**: Reusable patterns that AI can replicate
- **Documentation**: Comprehensive docs improve AI code suggestions

## Status
🚧 **Planning Phase** - Ready for initial project setup and development