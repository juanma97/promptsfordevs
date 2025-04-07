import { Switch, Route } from "wouter";
import { Navbar } from "./components/navbar/NavBar";
import { Home } from "./pages/home/Home";
import { PromptDetails } from "./pages/prompt-details/PromptDetails";
import { PromptProvider } from "./context/PromptContext";
import { AuthProvider } from "./hooks/useAuth";
import { SubmitPrompt } from "./pages/submit-prompt/SubmitPrompt";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/prompt/:id" component={PromptDetails} />
      <Route path="/submit" component={SubmitPrompt} />
    </Switch>
  );
}

function App() {
  return (
    <AuthProvider>
    <PromptProvider>
      <div className="app-container">
        <Navbar />
        <main className="main-content">
          <Router />
        </main>
      </div>
    </PromptProvider>
    </AuthProvider>
  );
}

export default App;
