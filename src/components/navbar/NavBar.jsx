import { Link } from "wouter";
import { useState } from "react";
import { Button } from "../button/Button";
import { Plus, Crown, LogOut, Moon, Sun } from "lucide-react";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { useAuth } from "../../hooks/useAuth"; 
import { useTheme } from "../../context/ThemeContext";
import { useTranslation } from 'react-i18next';
import "./navbar.css";
import { useAnalytics } from '../../hooks/useAnalytics';

export function Navbar() {
  const { user, loginWithGoogle, loginWithGithub, logout } = useAuth();
  const { isDarkMode, toggleTheme } = useTheme();
  const { t, i18n } = useTranslation();
  const [tooltip, setTooltip] = useState(null);
  const { logLogin } = useAnalytics();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  const handleGoogleLogin = async () => {
    try {
      await loginWithGoogle();
      logLogin('google');
    } catch (error) {
      console.error(error);
    }
  };

  const handleGithubLogin = async () => {
    try {
      await loginWithGithub();
      logLogin('github');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <nav className={`navbar ${isDarkMode ? 'dark' : ''}`}>
      <div className="nav-container">
        <Link href="/" className="nav-logo">Prompts for Devs</Link>

        {/* <div className="nav-links">
          <Link href="/featured" className="nav-link">
            <Star size={16} />
            Destacados
          </Link>
          <Link href="/popular" className="nav-link">
            <TrendingUp size={16} />
            Populares
          </Link>
        </div> */}

        <div className="nav-actions">
          <Button className="nav-theme-btn" onClick={toggleTheme}>
            {isDarkMode ? <Sun className="nav-icon" /> : <Moon className="nav-icon" />}
          </Button>

          <div 
            className="tooltip-wrapper" 
            onMouseEnter={() => setTooltip("crear")} 
            onMouseLeave={() => setTooltip(null)}
          >
            <Link href="/submit">
              <Button className="nav-create-btn" disabled={!user}>
                <Plus className="nav-icon" />
              </Button>
            </Link>
            {tooltip === "crear" && (
              <div className="tooltip-content">
                {user ? "Crear nuevo prompt" : "Inicia sesión para crear prompts"}
              </div>
            )}
          </div>

          <div 
            className="tooltip-wrapper" 
            onMouseEnter={() => setTooltip("premium")} 
            onMouseLeave={() => setTooltip(null)}
          >
            <Button className="nav-premium" disabled={!user}>
              <Crown className="nav-icon" />
              <span>Premium</span>
            </Button>
            {tooltip === "premium" && (
              <div className="tooltip-content">
                <p>¡Próximamente! Accede a prompts premium por $4.99/mes</p>
              </div>
            )}
          </div>

          {user ? (
            <div className="user-info">
              <img src={user.photoURL || "/default-avatar.png"} alt="Avatar" className="user-avatar" />
              <Button className="nav-auth-btn logout-btn" onClick={logout}>
                <LogOut /> Cerrar sesión
              </Button>
            </div>
          ) : (
            <div className="auth-buttons">
              <Button className="nav-auth-btn" onClick={handleGoogleLogin}>
                <FcGoogle size={20} />
              </Button>
              <Button className="nav-auth-btn" onClick={handleGithubLogin}>
                <FaGithub size={20} />
              </Button>
            </div>
          )}
          <div className="language-buttons">
            <button 
              className={`language-button ${i18n.language === 'en' ? 'active' : ''}`}
              onClick={() => changeLanguage('en')}
              title="English"
            >
              🇬🇧
            </button>
            <button 
              className={`language-button ${i18n.language === 'es' ? 'active' : ''}`}
              onClick={() => changeLanguage('es')}
              title="Español"
            >
              🇪🇸
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
