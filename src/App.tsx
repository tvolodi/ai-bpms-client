import { MainLayout, PageHeader } from '@/components/layout/MainLayout';
import { Button, Card, CardHeader, CardTitle, CardContent } from '@/components/ui';
import { env, validateEnvironment } from '@/lib/config';

// Validate environment on app start
try {
  validateEnvironment();
} catch (error) {
  console.error('Environment validation failed:', error);
}

function App() {
  return (
    <MainLayout
      header={
        <div className="px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center">
            <h1 className="text-xl font-semibold text-secondary-900">
              {env.APP_NAME}
            </h1>
            <span className="ml-2 text-xs bg-primary-100 text-primary-700 px-2 py-1 rounded">
              v{env.APP_VERSION}
            </span>
          </div>
          
          <div className="flex items-center space-x-4">
            <Button variant="outline" size="sm">
              Settings
            </Button>
            <Button variant="primary" size="sm">
              Get Started
            </Button>
          </div>
        </div>
      }
    >
      <PageHeader
        title="Welcome to AI-BPMS Client"
        subtitle="Business Process Management System powered by AI"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        <Card>
          <CardHeader>
            <CardTitle>Process Designer</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-secondary-600 mb-4">
              Create and design business processes with our visual workflow builder.
            </p>
            <Button variant="primary" size="sm" className="w-full">
              Open Designer
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Task Management</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-secondary-600 mb-4">
              Manage and execute tasks assigned to you or your team.
            </p>
            <Button variant="primary" size="sm" className="w-full">
              View Tasks
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Analytics Dashboard</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-secondary-600 mb-4">
              Monitor process performance and analyze business metrics.
            </p>
            <Button variant="primary" size="sm" className="w-full">
              View Analytics
            </Button>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>System Status</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-primary-600">--</div>
              <div className="text-sm text-secondary-600">Active Processes</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-success-600">--</div>
              <div className="text-sm text-secondary-600">Completed Tasks</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-warning-600">--</div>
              <div className="text-sm text-secondary-600">Pending Tasks</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-secondary-600">--</div>
              <div className="text-sm text-secondary-600">Active Users</div>
            </div>
          </div>
        </CardContent>
      </Card>
    </MainLayout>
  );
}

export default App;