import React from 'react';
import { clsx } from 'clsx';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  padding?: 'none' | 'sm' | 'md' | 'lg';
  shadow?: 'none' | 'sm' | 'md' | 'lg';
}

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ children, padding = 'md', shadow = 'md', className, ...props }, ref) => {
    const baseClasses = 'bg-white rounded-lg border border-secondary-200';
    
    const paddingClasses = {
      none: '',
      sm: 'p-3',
      md: 'p-6',
      lg: 'p-8',
    };

    const shadowClasses = {
      none: '',
      sm: 'shadow-sm',
      md: 'shadow-md',
      lg: 'shadow-lg',
    };

    return (
      <div
        ref={ref}
        className={clsx(
          baseClasses,
          paddingClasses[padding],
          shadowClasses[shadow],
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Card.displayName = 'Card';

export interface CardHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  actions?: React.ReactNode;
}

export const CardHeader: React.FC<CardHeaderProps> = ({
  children,
  actions,
  className,
  ...props
}) => {
  return (
    <div
      className={clsx(
        'flex items-center justify-between border-b border-secondary-200 pb-4 mb-4',
        className
      )}
      {...props}
    >
      <div>{children}</div>
      {actions && <div className="flex items-center space-x-2">{actions}</div>}
    </div>
  );
};

export interface CardTitleProps extends React.HTMLAttributes<HTMLHeadingElement> {
  children: React.ReactNode;
  level?: 1 | 2 | 3 | 4 | 5 | 6;
}

export const CardTitle: React.FC<CardTitleProps> = ({
  children,
  level = 3,
  className,
  ...props
}) => {
  const sizeClasses = {
    1: 'text-2xl',
    2: 'text-xl',
    3: 'text-lg',
    4: 'text-base',
    5: 'text-sm',
    6: 'text-xs',
  };

  const commonClassName = clsx(
    'font-semibold text-secondary-900',
    sizeClasses[level],
    className
  );

  switch (level) {
    case 1:
      return <h1 className={commonClassName} {...props}>{children}</h1>;
    case 2:
      return <h2 className={commonClassName} {...props}>{children}</h2>;
    case 3:
      return <h3 className={commonClassName} {...props}>{children}</h3>;
    case 4:
      return <h4 className={commonClassName} {...props}>{children}</h4>;
    case 5:
      return <h5 className={commonClassName} {...props}>{children}</h5>;
    case 6:
      return <h6 className={commonClassName} {...props}>{children}</h6>;
    default:
      return <h3 className={commonClassName} {...props}>{children}</h3>;
  }
};

export interface CardContentProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export const CardContent: React.FC<CardContentProps> = ({
  children,
  className,
  ...props
}) => {
  return (
    <div className={clsx('text-secondary-700', className)} {...props}>
      {children}
    </div>
  );
};