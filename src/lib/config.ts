import type { EnvironmentConfig } from '@/types';

// Environment configuration utility
export const env: EnvironmentConfig = {
  API_BASE_URL: import.meta.env['VITE_API_BASE_URL'] || 'http://localhost:8080/api/v1',
  WEBSOCKET_URL: import.meta.env['VITE_WEBSOCKET_URL'] || 'ws://localhost:8080/ws',
  KEYCLOAK_URL: import.meta.env['VITE_KEYCLOAK_URL'] || 'http://localhost:8180/auth',
  KEYCLOAK_REALM: import.meta.env['VITE_KEYCLOAK_REALM'] || 'ai-bpms',
  KEYCLOAK_CLIENT_ID: import.meta.env['VITE_KEYCLOAK_CLIENT_ID'] || 'ai-bpms-client',
  APP_NAME: import.meta.env['VITE_APP_NAME'] || 'AI-BPMS Client',
  APP_VERSION: import.meta.env['VITE_APP_VERSION'] || '1.0.0',
  APP_ENVIRONMENT: import.meta.env['VITE_APP_ENVIRONMENT'] || 'development',
  ENABLE_ANALYTICS: import.meta.env['VITE_ENABLE_ANALYTICS'] === 'true',
  ENABLE_OFFLINE_MODE: import.meta.env['VITE_ENABLE_OFFLINE_MODE'] === 'true',
  ENABLE_DEBUG_MODE: import.meta.env['VITE_ENABLE_DEBUG_MODE'] === 'true',
  MAX_FILE_UPLOAD_SIZE: parseInt(import.meta.env['VITE_MAX_FILE_UPLOAD_SIZE'] || '10485760'),
  WEBSOCKET_RECONNECT_INTERVAL: parseInt(import.meta.env['VITE_WEBSOCKET_RECONNECT_INTERVAL'] || '5000'),
  API_TIMEOUT: parseInt(import.meta.env['VITE_API_TIMEOUT'] || '30000'),
  DEFAULT_THEME: import.meta.env['VITE_DEFAULT_THEME'] || 'light',
  ENABLE_DARK_MODE: import.meta.env['VITE_ENABLE_DARK_MODE'] === 'true',
  DEFAULT_LANGUAGE: import.meta.env['VITE_DEFAULT_LANGUAGE'] || 'en',
};

// Validate required environment variables
export function validateEnvironment(): void {
  const requiredVars = [
    'API_BASE_URL',
    'WEBSOCKET_URL',
    'KEYCLOAK_URL',
    'KEYCLOAK_REALM',
    'KEYCLOAK_CLIENT_ID'
  ];

  const missing = requiredVars.filter(varName => {
    const value = env[varName as keyof EnvironmentConfig];
    return !value || value === '';
  });

  if (missing.length > 0) {
    throw new Error(`Missing required environment variables: ${missing.join(', ')}`);
  }
}

// Debug logging utility
export function debugLog(message: string, data?: any): void {
  if (env.ENABLE_DEBUG_MODE) {
    console.log(`[${env.APP_NAME}] ${message}`, data || '');
  }
}

// Format file size utility
export function formatFileSize(bytes: number): string {
  if (bytes === 0) return '0 Bytes';
  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
}

// Check if file size is valid
export function isValidFileSize(size: number): boolean {
  return size <= env.MAX_FILE_UPLOAD_SIZE;
}

// Development mode check
export const isDevelopment = env.APP_ENVIRONMENT === 'development';
export const isProduction = env.APP_ENVIRONMENT === 'production';