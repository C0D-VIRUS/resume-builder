
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";

import HomePage from "./pages/HomePage";
import TemplatesPage from "./pages/TemplatesPage";
import CareerCenterPage from "./pages/CareerCenterPage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import AccountPage from "./pages/AccountPage";
import EditorPage from "./pages/EditorPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Header />
                <main className="min-h-screen">
                  <HomePage />
                </main>
                <Footer />
              </>
            }
          />
          <Route
            path="/templates"
            element={
              <>
                <Header />
                <main className="min-h-screen">
                  <TemplatesPage />
                </main>
                <Footer />
              </>
            }
          />
          <Route
            path="/career-center"
            element={
              <>
                <Header />
                <main className="min-h-screen">
                  <CareerCenterPage />
                </main>
                <Footer />
              </>
            }
          />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route
            path="/account"
            element={
              <>
                <Header />
                <main className="min-h-screen">
                  <AccountPage />
                </main>
                <Footer />
              </>
            }
          />
          <Route
            path="/editor"
            element={
              <main className="min-h-screen">
                <Header />
                <EditorPage />
              </main>
            }
          />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route
            path="*"
            element={
              <>
                <Header />
                <main className="min-h-screen">
                  <NotFound />
                </main>
                <Footer />
              </>
            }
          />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
