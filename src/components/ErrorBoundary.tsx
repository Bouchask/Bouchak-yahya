import { Component, ErrorInfo, ReactNode } from "react";

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
  onError?: (error: Error, errorInfo: ErrorInfo) => void;
}

interface State {
  hasError: boolean;
  error: Error | null;
  errorInfo: ErrorInfo | null;
  retryCount: number;
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
    error: null,
    errorInfo: null,
    retryCount: 0,
  };

  private maxRetries = 3;

  public static getDerivedStateFromError(error: Error): State {
    return {
      hasError: true,
      error,
      errorInfo: null,
      retryCount: 0,
    };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("ErrorBoundary caught an error:", error, errorInfo);
    
    // Log to error tracking service if available
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("event", "error", {
        error_message: error.message,
        error_stack: error.stack,
        component_stack: errorInfo.componentStack,
      });
    }

    // Call custom error handler if provided
    if (this.props.onError) {
      this.props.onError(error, errorInfo);
    }

    this.setState((prevState) => ({
      ...prevState,
      errorInfo,
      hasError: true,
    }));
  }

  private handleRetry = () => {
    this.setState((prevState) => {
      const newRetryCount = prevState.retryCount + 1;
      
      if (newRetryCount >= this.maxRetries) {
        // If max retries reached, show permanent error
        return {
          ...prevState,
          retryCount: newRetryCount,
        };
      }

      // Try to reset the error state
      return {
        hasError: false,
        error: null,
        errorInfo: null,
        retryCount: newRetryCount,
      };
    });
  };

  private handleReset = () => {
    // Full reset - reload the page
    window.location.reload();
  };

  private getErrorMessage = (): string => {
    const { error } = this.state;

    if (!error) {
      return "An unexpected error occurred";
    }

    // User-friendly error messages
    if (error.message.includes("Failed to fetch")) {
      return "Failed to load data. Please check your internet connection.";
    }

    if (error.message.includes("404")) {
      return "Resource not found. The page you're looking for doesn't exist.";
    }

    if (error.message.includes("500")) {
      return "Server error. Please try again later.";
    }

    if (error.name === "TypeError") {
      return "A type error occurred. This might be a configuration issue.";
    }

    if (process.env.NODE_ENV === "development") {
      return error.message;
    }

    return "Something went wrong. Please try again.";
  };

  public render() {
    const { hasError, error, retryCount } = this.state;
    const { fallback, children } = this.props;

    if (!hasError) {
      return children;
    }

    if (fallback) {
      return fallback;
    }

    const showRetry = retryCount < this.maxRetries;

    return (
      <div
        className="flex flex-col items-center justify-center min-h-screen bg-muted p-6"
        role="alert"
        aria-live="assertive"
        aria-label="Error: Application crashed"
      >
        <div className="text-center max-w-md space-y-6">
          <div className="terminal-window p-6">
            <div className="terminal-titlebar mb-4">
              <div className="terminal-dot terminal-dot-red" />
              <div className="terminal-dot terminal-dot-amber" />
              <div className="terminal-dot terminal-dot-green" />
              <span className="ml-3 text-xs text-muted-foreground">
                error.log
              </span>
            </div>
            <div className="terminal-body">
              <p className="text-destructive font-bold mb-2">ERROR</p>
              <p className="text-muted-foreground text-sm">{this.getErrorMessage()}</p>
              {process.env.NODE_ENV === "development" && error && (
                <pre className="text-xs text-muted-foreground mt-4 overflow-auto">
                  {error.stack}
                </pre>
              )}
            </div>
          </div>

          <div className="flex gap-4 justify-center">
            {showRetry ? (
              <button
                onClick={this.handleRetry}
                aria-label="Retry loading the application"
                className="px-4 py-2 bg-primary text-primary-foreground rounded hover:bg-primary/90 transition-colors font-mono text-sm"
              >
                [ RETRY ]
              </button>
            ) : (
              <button
                onClick={this.handleReset}
                aria-label="Reload the page"
                className="px-4 py-2 bg-destructive text-destructive-foreground rounded hover:bg-destructive/90 transition-colors font-mono text-sm"
              >
                [ RELOAD ]
              </button>
            )}
            <a
              href="/"
              aria-label="Return to home page"
              className="px-4 py-2 border border-border text-foreground rounded hover:bg-secondary transition-colors font-mono text-sm"
            >
              [ HOME ]
            </a>
          </div>

          {retryCount > 0 && (
            <p className="text-xs text-muted-foreground">
              Attempt {retryCount} of {this.maxRetries}
            </p>
          )}
        </div>
      </div>
    );
  }
}

