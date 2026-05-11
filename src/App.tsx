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
import { useState } from "react";
import { AnimatePresence } from "framer-motion";

const queryClient = new QueryClient();

const App = () => {
  const [booting, setBooting] = useState(true);

  return (
    <ThemeProvider>
      <LangProvider>
        <QueryClientProvider client={queryClient}>
          <TooltipProvider>
            <Toaster />
            <Sonner />
            <AnimatePresence>
              {booting && <BootSequence onComplete={() => setBooting(false)} />}
            </AnimatePresence>
            
            <div className={`transition-opacity duration-1000 ${booting ? "opacity-0" : "opacity-100"} crt-flicker`}>
              <div className="crt-vignette" />
              <div className="moving-scanline" />
              <BrowserRouter>
                <Routes>
                  <Route path="/" element={<Index />} />
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </BrowserRouter>
            </div>
          </TooltipProvider>
        </QueryClientProvider>
      </LangProvider>
    </ThemeProvider>
  );
};

export default App;

