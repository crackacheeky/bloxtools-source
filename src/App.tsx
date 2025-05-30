
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ConfigProvider } from "@/context/ConfigContext";
import Index from "./pages/Index";
import Tools from "./pages/Tools";
import FAQ from "./pages/FAQ";
import Contact from "./pages/Contact";
import BotFollowers from "./pages/BotFollowers";
import CopyGames from "./pages/CopyGames";
import CopyClothes from "./pages/CopyClothes";
import NotFound from "./pages/NotFound";
import ParallaxBackground from "./components/ParallaxBackground";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ConfigProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ParallaxBackground>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/tools" element={<Tools />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/bot-followers" element={<BotFollowers />} />
              <Route path="/copy-games" element={<CopyGames />} />
              <Route path="/copy-clothes" element={<CopyClothes />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </ParallaxBackground>
        </BrowserRouter>
      </TooltipProvider>
    </ConfigProvider>
  </QueryClientProvider>
);

export default App;
