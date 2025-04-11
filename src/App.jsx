import { Switch, Route } from "wouter";
import { Navbar } from "./components/navbar/NavBar";
import { Home } from "./pages/home/Home";
import { PromptDetails } from "./pages/prompt-details/PromptDetails";
import { PromptProvider } from "./context/PromptContext";
import { AuthProvider } from "./hooks/useAuth";
import { ThemeProvider } from "./context/ThemeContext";
import { SubmitPrompt } from "./pages/submit-prompt/SubmitPrompt";
import { PopularPage } from "./pages/popular/PopularPage";
import { FeaturedPage } from "./pages/featured/FeaturedPage";
import { Footer } from './components/footer/Footer';
import { Terms } from './pages/terms/Terms';
import { Privacy } from './pages/privacy/Privacy';
import "./App.css";
import './i18n/config';
import { useAnalytics } from './hooks/useAnalytics';
import { Profile } from './pages/profile/Profile';

function App() {
  useAnalytics();

  return (
    <ThemeProvider>
      <AuthProvider>
        <PromptProvider>
          <div className="app">
            <Navbar />
            <main>
              <Route path="/" component={Home} />
              <Route path="/prompt/:id" component={PromptDetails} />
              <Route path="/submit" component={SubmitPrompt} />
              <Route path="/popular" component={PopularPage} />
              <Route path="/featured" component={FeaturedPage} />
              <Route path="/terminos" component={Terms} />
              <Route path="/privacidad" component={Privacy} />
              <Route path="/profile" component={Profile} />
            </main>
            <Footer />
          </div>
        </PromptProvider>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;
