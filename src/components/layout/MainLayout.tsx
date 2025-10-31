import React from 'react';
import { clsx } from 'clsx';

export interface MainLayoutProps {
  children: React.ReactNode;
  header?: React.ReactNode;
  sidebar?: React.ReactNode;
  footer?: React.ReactNode;
  className?: string;
}

export const MainLayout: React.FC<MainLayoutProps> = ({
  children,
  header,
  sidebar,
  footer,
  className,
}) => {
  return (
    <div className={clsx('min-h-screen bg-secondary-50', className)}>
      {/* Header */}
      {header && (
        <header className="sticky top-0 z-50 bg-white border-b border-secondary-200 shadow-sm">
          {header}
        </header>
      )}

      <div className="flex flex-1">
        {/* Sidebar */}
        {sidebar && (
          <aside className="hidden lg:flex lg:w-64 lg:flex-col lg:fixed lg:inset-y-0 lg:pt-16">
            <div className="flex-1 flex flex-col min-h-0 bg-white border-r border-secondary-200">
              {sidebar}
            </div>
          </aside>
        )}

        {/* Main Content */}
        <main className={clsx('flex-1', sidebar && 'lg:ml-64')}>
          <div className="py-6">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              {children}
            </div>
          </div>
        </main>
      </div>

      {/* Footer */}
      {footer && (
        <footer className="bg-white border-t border-secondary-200">
          {footer}
        </footer>
      )}
    </div>
  );
};

export interface PageHeaderProps {
  title: string;
  subtitle?: string;
  actions?: React.ReactNode;
  breadcrumbs?: React.ReactNode;
  className?: string;
}

export const PageHeader: React.FC<PageHeaderProps> = ({
  title,
  subtitle,
  actions,
  breadcrumbs,
  className,
}) => {
  return (
    <div className={clsx('mb-8', className)}>
      {breadcrumbs && (
        <div className="mb-4">
          {breadcrumbs}
        </div>
      )}
      
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-secondary-900">{title}</h1>
          {subtitle && (
            <p className="mt-1 text-sm text-secondary-600">{subtitle}</p>
          )}
        </div>
        
        {actions && (
          <div className="flex items-center space-x-3">
            {actions}
          </div>
        )}
      </div>
    </div>
  );
};

export interface ContentSectionProps {
  children: React.ReactNode;
  title?: string;
  description?: string;
  actions?: React.ReactNode;
  className?: string;
}

export const ContentSection: React.FC<ContentSectionProps> = ({
  children,
  title,
  description,
  actions,
  className,
}) => {
  return (
    <section className={clsx('mb-8', className)}>
      {(title || description || actions) && (
        <div className="mb-6">
          <div className="flex items-center justify-between">
            <div>
              {title && (
                <h2 className="text-xl font-semibold text-secondary-900">
                  {title}
                </h2>
              )}
              {description && (
                <p className="mt-1 text-sm text-secondary-600">
                  {description}
                </p>
              )}
            </div>
            
            {actions && (
              <div className="flex items-center space-x-3">
                {actions}
              </div>
            )}
          </div>
        </div>
      )}
      
      {children}
    </section>
  );
};