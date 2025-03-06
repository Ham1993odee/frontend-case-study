// filepath: shared/src/hocs/withErrorBoundary.tsx
import React, { Component, ErrorInfo, ReactNode } from 'react';

interface ErrorBoundaryProps {
  children: ReactNode;
  fallback?: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
}

// HOC to add error boundary functionality
export function withErrorBoundary<P extends object>(
  WrappedComponent: React.ComponentType<P>,
  fallback: ReactNode = <div>Something went wrong</div>
) {
  return class WithErrorBoundary extends Component<P, ErrorBoundaryState> {
    state: ErrorBoundaryState = {
      hasError: false,
      error: null,
    };

    static getDerivedStateFromError(error: Error) {
      return { hasError: true, error };
    }

    componentDidCatch(error: Error, errorInfo: ErrorInfo) {
      console.error('Error caught by error boundary:', error, errorInfo);
    }

    render() {
      if (this.state.hasError) {
        return fallback;
      }

      return <WrappedComponent {...this.props} />;
    }
  };
}