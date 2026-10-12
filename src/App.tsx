import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Routes, Route, Navigate } from "react-router-dom";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Index from "./pages/Index";
import CityPage from "./pages/CityPage";
import ServicePage from "./pages/ServicePage";
import BlogIndex from "./pages/BlogIndex";
import BlogPost from "./pages/BlogPost";
import ServiceAreas from "./pages/ServiceAreas";
import NotFound from "./pages/NotFound";
import RouteSEO from "./components/SEOHead";
import { services as serviceData } from "./data/serviceData";
import { retiredRoutes } from "./lib/redirects";

const queryClient = new QueryClient();

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

// The router is supplied by the entry point: BrowserRouter in main.tsx,
// StaticRouter in entry-server.tsx (build-time prerender).
const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <ScrollToTop />
      <RouteSEO />
      <Routes>
        <Route path="/" element={<Index />} />
        {retiredRoutes.map((r) => (
          <Route key={r.from} path={r.from} element={<Navigate to={r.to} replace />} />
        ))}
        {serviceData.map((s) => (
          <Route key={s.slug} path={`/${s.slug}`} element={<ServicePage />} />
        ))}
        <Route path="/blog" element={<BlogIndex />} />
        <Route path="/service-areas" element={<ServiceAreas />} />
        <Route path="/blog/:slug" element={<BlogPost />} />
        <Route path="/:slug" element={<CityPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
