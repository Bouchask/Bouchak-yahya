import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "@/contexts/ThemeContext";
import { LangProvider } from "@/contexts/LangContext";
import Index from "./pages/Index.tsx";
import NotFound from "./pages/NotFound.tsx";
import BootSequence from "@/components/BootSequence";
import { ErrorBoundary } from "@/components/ErrorBoundary";
import Loading from "@/components/Loading";
import { Suspense, useState } from "react";
import { AnimatePresence } from "framer-motion";

const queryClient = new QueryClient();

const App = () => {
  const [booting, setBooting] = useState(true);

  return (
    <ErrorBoundary>
      <ThemeProvider>
        <LangProvider>
          <QueryClientProvider client={queryClient}>
            <TooltipProvider>
              <Toaster />
              <Sonner />
              <AnimatePresence>
                {booting && <BootSequence onComplete={() => setBooting(false)} />}
              </AnimatePresence>
              
              <Suspense fallback={<Loading message="Initializing system..." />}>
                <div className={`transition-opacity duration-1000 ${booting ? "opacity-0" : "opacity-100"} crt-flicker`}>
                  <div className="crt-vignette" />
                  <div className="moving-scanline" />
                  <BrowserRouter>
                    {/* Skip to main content for accessibility */}
                    <a 
                      href="#main-content" 
                      className="fixed -top-40 left-0 bg-primary text-primary-foreground px-4 py-2 rounded-br z-50 focus:top-0 focus:transition-all focus:duration-300"
                      aria-label="Skip to main content"
                    >
                      Skip to Content
                    </a>
                    <Routes>
                      <Route path="/" element={<Index />} />
                      <Route path="*" element={<NotFound />} />
                    </Routes>
                  </BrowserRouter>
                </div>
              </Suspense>
            </TooltipProvider>
          </QueryClientProvider>
        </LangProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
};

export default App;

