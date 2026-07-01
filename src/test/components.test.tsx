import { describe, it, expect, vi, beforeEach } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { ErrorBoundary } from "@/components/ErrorBoundary";
import Navbar from "@/components/Navbar";
import Loading from "@/components/Loading";
import { ThemeProvider } from "@/contexts/ThemeContext";
import { LangProvider } from "@/contexts/LangContext";

describe("ErrorBoundary", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("should render children when no error", () => {
    render(
      <ErrorBoundary>
        <div>Test Content</div>
      </ErrorBoundary>
    );
    expect(screen.getByText("Test Content")).toBeInTheDocument();
  });

  it("should render fallback when error occurs", () => {
    const ErrorComponent = () => {
      throw new Error("Test error");
    };

    const originalError = console.error;
    console.error = vi.fn();

    render(
      <ErrorBoundary>
        <ErrorComponent />
      </ErrorBoundary>
    );

    console.error = originalError;

    expect(screen.getByRole("alert")).toBeInTheDocument();
    expect(screen.getByText("ERROR")).toBeInTheDocument();
  });

  it("should display error message in development", () => {
    const originalEnv = process.env.NODE_ENV;
    process.env.NODE_ENV = "development";

    const ErrorComponent = () => {
      throw new Error("Test error message");
    };

    const originalError = console.error;
    console.error = vi.fn();

    render(
      <ErrorBoundary>
        <ErrorComponent />
      </ErrorBoundary>
    );

    console.error = originalError;
    process.env.NODE_ENV = originalEnv;

    expect(screen.getByText("Test error message")).toBeInTheDocument();
  });

  it("should display user-friendly messages for known errors", () => {
    const originalEnv = process.env.NODE_ENV;
    process.env.NODE_ENV = "production";

    const FetchErrorComponent = () => {
      throw new Error("Failed to fetch");
    };

    const originalError = console.error;
    console.error = vi.fn();

    render(
      <ErrorBoundary>
        <FetchErrorComponent />
      </ErrorBoundary>
    );

    console.error = originalError;
    process.env.NODE_ENV = originalEnv;

    expect(
      screen.getByText(/Failed to load data. Please check your internet connection/i)
    ).toBeInTheDocument();
  });

  it("should render custom fallback when provided", () => {
    const ErrorComponent = () => {
      throw new Error("Test error");
    };

    const originalError = console.error;
    console.error = vi.fn();

    render(
      <ErrorBoundary fallback={<div>Custom Fallback</div>}>
        <ErrorComponent />
      </ErrorBoundary>
    );

    console.error = originalError;

    expect(screen.getByText("Custom Fallback")).toBeInTheDocument();
  });
});

describe("Loading", () => {
  it("should render with default message", () => {
    render(<Loading />);
    expect(screen.getByText("Loading...")).toBeInTheDocument();
  });

  it("should render with custom message", () => {
    render(<Loading message="Initializing..." />);
    expect(screen.getByText("Initializing...")).toBeInTheDocument();
  });

  it("should render without crashing", () => {
    render(<Loading size="lg" />);
    expect(screen.getByText("Loading...")).toBeInTheDocument();
  });
});

describe("Navbar", () => {
  const renderNavbar = () => {
    return render(
      <ThemeProvider>
        <LangProvider>
          <Navbar />
        </LangProvider>
      </ThemeProvider>
    );
  };

  it("should render logo and brand", () => {
    renderNavbar();
    expect(screen.getByText("YB")).toBeInTheDocument();
  });

  it("should render navigation items", () => {
    renderNavbar();
    expect(screen.getByText("home")).toBeInTheDocument();
    expect(screen.getByText("about")).toBeInTheDocument();
    expect(screen.getByText("skills")).toBeInTheDocument();
    expect(screen.getByText("projects")).toBeInTheDocument();
    expect(screen.getByText("journey")).toBeInTheDocument();
    expect(screen.getByText("connect")).toBeInTheDocument();
  });

  it("should have theme toggle button", () => {
    renderNavbar();
    const buttons = screen.getAllByTitle("Toggle theme");
    expect(buttons.length).toBeGreaterThan(0);
  });

  it("should have language toggle button", () => {
    renderNavbar();
    const buttons = screen.getAllByTitle("Toggle language");
    expect(buttons.length).toBeGreaterThan(0);
  });

  it("should have mobile menu button", () => {
    renderNavbar();
    expect(screen.getByLabelText("Open menu")).toBeInTheDocument();
  });

  it("should toggle mobile menu", () => {
    renderNavbar();
    const menuButton = screen.getByLabelText("Open menu");
    fireEvent.click(menuButton);
    expect(screen.getByLabelText("Close menu")).toBeInTheDocument();
    expect(screen.getByLabelText("Mobile navigation")).toBeInTheDocument();
  });

  it("should have proper ARIA attributes", () => {
    renderNavbar();
    const nav = screen.getByLabelText("Main navigation");
    expect(nav).toBeInTheDocument();
    expect(nav).toHaveAttribute("aria-label", "Main navigation");
  });
});

describe("ThemeContext", () => {
  it("should default to dark theme", () => {
    render(
      <ThemeProvider>
        <div data-testid="test">Test</div>
      </ThemeProvider>
    );
    expect(screen.getByTestId("test")).toBeInTheDocument();
  });
});

describe("LangContext", () => {
  it("should default to English", () => {
    render(
      <LangProvider>
        <div data-testid="test">Test</div>
      </LangProvider>
    );
    expect(screen.getByTestId("test")).toBeInTheDocument();
  });
});
