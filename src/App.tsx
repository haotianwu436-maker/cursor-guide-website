import { useState } from "react";
import { Route, Switch } from "wouter";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import GuideDetail from "./pages/GuideDetail";
import PromptLibrary from "./pages/PromptLibrary";
import FAQ from "./pages/FAQ";
import NotFound from "./pages/NotFound";

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header onMenuClick={() => setSidebarOpen(!sidebarOpen)} />
      
      <div className="flex flex-1">
        <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />
        
        <main className="flex-1 overflow-auto">
          <Switch>
            <Route path="/" component={Home} />
            <Route path="/guide/:id" component={GuideDetail} />
            <Route path="/prompts" component={PromptLibrary} />
            <Route path="/faq" component={FAQ} />
            <Route component={NotFound} />
          </Switch>
        </main>
      </div>
    </div>
  );
}

export default App;
