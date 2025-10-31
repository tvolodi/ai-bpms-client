// Global type definitions for the AI-BPMS Client Application

export interface User {
  id: string;
  username: string;
  email: string;
  firstName: string;
  lastName: string;
  roles: Role[];
  createdAt: string;
  updatedAt: string;
}

export interface Role {
  id: string;
  name: string;
  permissions: Permission[];
}

export interface Permission {
  id: string;
  action: string;
  resource: string;
}

export interface Process {
  id: string;
  name: string;
  description: string;
  version: string;
  status: ProcessStatus;
  createdBy: string;
  createdAt: string;
  updatedAt: string;
  definition: ProcessDefinition;
}

export type ProcessStatus = 'draft' | 'active' | 'inactive' | 'deprecated';

export interface ProcessDefinition {
  nodes: ProcessNode[];
  edges: ProcessEdge[];
  variables: ProcessVariable[];
}

export interface ProcessNode {
  id: string;
  type: NodeType;
  position: { x: number; y: number };
  data: NodeData;
}

export type NodeType = 'start' | 'end' | 'task' | 'gateway' | 'event';

export interface NodeData {
  label: string;
  properties: Record<string, any>;
  formSchema?: FormSchema;
}

export interface ProcessEdge {
  id: string;
  source: string;
  target: string;
  label?: string;
  condition?: string;
}

export interface ProcessVariable {
  name: string;
  type: 'string' | 'number' | 'boolean' | 'object' | 'array';
  defaultValue?: any;
  required: boolean;
}

export interface Task {
  id: string;
  processInstanceId: string;
  name: string;
  description: string;
  assignee?: string;
  candidateUsers: string[];
  candidateGroups: string[];
  status: TaskStatus;
  priority: TaskPriority;
  dueDate?: string;
  createdAt: string;
  formData?: Record<string, any>;
  formSchema?: FormSchema;
}

export type TaskStatus = 'created' | 'assigned' | 'in-progress' | 'completed' | 'cancelled';
export type TaskPriority = 'low' | 'medium' | 'high' | 'urgent';

export interface ProcessInstance {
  id: string;
  processId: string;
  status: ProcessInstanceStatus;
  startedBy: string;
  startedAt: string;
  endedAt?: string;
  variables: Record<string, any>;
  currentTasks: Task[];
}

export type ProcessInstanceStatus = 'running' | 'completed' | 'suspended' | 'terminated';

export interface FormSchema {
  schema: JSONSchema7;
  uiSchema?: UiSchema;
  formData?: any;
  readonly?: boolean;
}

export interface JSONSchema7 {
  type?: string;
  properties?: Record<string, JSONSchema7>;
  required?: string[];
  title?: string;
  description?: string;
  enum?: any[];
  items?: JSONSchema7;
  additionalProperties?: boolean | JSONSchema7;
  [key: string]: any;
}

export interface UiSchema {
  'ui:widget'?: string;
  'ui:options'?: Record<string, any>;
  'ui:order'?: string[];
  'ui:field'?: string;
  [key: string]: any;
}

export interface Analytics {
  processMetrics: ProcessMetrics;
  taskMetrics: TaskMetrics;
  userMetrics: UserMetrics;
  systemMetrics: SystemMetrics;
}

export interface ProcessMetrics {
  totalProcesses: number;
  activeInstances: number;
  completedInstances: number;
  averageCompletionTime: number;
  processPerformance: ProcessPerformance[];
}

export interface ProcessPerformance {
  processId: string;
  processName: string;
  instanceCount: number;
  averageTime: number;
  successRate: number;
}

export interface TaskMetrics {
  totalTasks: number;
  completedTasks: number;
  overdueTasks: number;
  averageCompletionTime: number;
  taskDistribution: TaskDistribution[];
}

export interface TaskDistribution {
  assignee: string;
  taskCount: number;
  averageTime: number;
}

export interface UserMetrics {
  totalUsers: number;
  activeUsers: number;
  userActivity: UserActivity[];
}

export interface UserActivity {
  userId: string;
  username: string;
  tasksCompleted: number;
  processesStarted: number;
  lastActive: string;
}

export interface SystemMetrics {
  systemLoad: number;
  memoryUsage: number;
  activeConnections: number;
  responseTime: number;
}

export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: ApiError;
  pagination?: Pagination;
}

export interface ApiError {
  code: string;
  message: string;
  details?: Record<string, any>;
}

export interface Pagination {
  page: number;
  limit: number;
  total: number;
  totalPages: number;
}

export interface WebSocketMessage {
  type: string;
  payload: any;
  timestamp: string;
}

export interface NotificationMessage {
  id: string;
  type: 'info' | 'success' | 'warning' | 'error';
  title: string;
  message: string;
  timestamp: string;
  read: boolean;
  userId: string;
}

// Environment variables interface
export interface EnvironmentConfig {
  API_BASE_URL: string;
  WEBSOCKET_URL: string;
  KEYCLOAK_URL: string;
  KEYCLOAK_REALM: string;
  KEYCLOAK_CLIENT_ID: string;
  APP_NAME: string;
  APP_VERSION: string;
  APP_ENVIRONMENT: string;
  ENABLE_ANALYTICS: boolean;
  ENABLE_OFFLINE_MODE: boolean;
  ENABLE_DEBUG_MODE: boolean;
  MAX_FILE_UPLOAD_SIZE: number;
  WEBSOCKET_RECONNECT_INTERVAL: number;
  API_TIMEOUT: number;
  DEFAULT_THEME: string;
  ENABLE_DARK_MODE: boolean;
  DEFAULT_LANGUAGE: string;
}