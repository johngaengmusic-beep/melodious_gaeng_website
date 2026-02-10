import { Switch, Route, Router } from "wouter";
import { useHashLocation } from "wouter/use-hash-location";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Home from "@/pages/Home";
import About from "@/pages/About";
import Music from "@/pages/Music";
import Socials from "@/pages/Socials";
import Press from "@/pages/Press";
import Contact from "@/pages/Contact";
import NotFound from "@/pages/not-found";

function AppRouter() {
  return (
    <Router hook={useHashLocation}>
      <div className="min-h-screen bg-mg-sand">
        <Navigation />
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/music" component={Music} />
          <Route path="/socials" component={Socials} />
          <Route path="/press" component={Press} />
          <Route path="/contact" component={Contact} />
          <Route component={NotFound} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <AppRouter />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
