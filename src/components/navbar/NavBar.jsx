import { Link } from "wouter";
import { useState, useRef, useEffect } from "react";
import { Button } from "../button/Button";
import { Plus, Crown, LogOut, Moon, Sun, ChevronDown, Menu } from "lucide-react";
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
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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

  // Cerrar el menú cuando se hace clic fuera
  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <nav className={`navbar ${isDarkMode ? 'dark' : ''}`}>
      <div className="nav-container">
        <Link href="/" className="nav-logo">Prompts for Devs</Link>

        <div className="nav-actions">
          <div className="mobile-menu" ref={menuRef}>
            <Button 
              className="mobile-menu-btn"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <Menu className="nav-icon" />
            </Button>

            {isMobileMenuOpen && (
              <div className="mobile-dropdown">
                <Button className="dropdown-item" onClick={toggleTheme}>
                  {isDarkMode ? <Sun className="nav-icon" /> : <Moon className="nav-icon" />}
                  <span>{isDarkMode ? 'Modo Claro' : 'Modo Oscuro'}</span>
                </Button>
                
                <div className="dropdown-item language-container">
                  <span>Idioma</span>
                  <div className="language-buttons">
                    <button 
                      className={`language-button ${i18n.language === 'en' ? 'active' : ''}`}
                      onClick={() => changeLanguage('en')}
                    >
                      🇬🇧
                    </button>
                    <button 
                      className={`language-button ${i18n.language === 'es' ? 'active' : ''}`}
                      onClick={() => changeLanguage('es')}
                    >
                      🇪🇸
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="tooltip-wrapper">
            <Link href="/submit">
              <Button className="nav-create-btn" disabled={!user}>
                <Plus className="nav-icon" />
              </Button>
            </Link>
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

          <div className="nav-auth">
            {!user ? (
              <>
                <Button className="nav-auth-btn" onClick={handleGoogleLogin}>
                  <FcGoogle size={20} />
                </Button>
                <Button className="nav-auth-btn" onClick={handleGithubLogin}>
                  <FaGithub size={20} />
                </Button>
              </>
            ) : (
              <div className="user-menu" ref={menuRef}>
                <button 
                  className="user-menu-button"
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                  <img 
                    src={user.photoURL || '/favicon.ico'} 
                    alt="Avatar" 
                    className="user-avatar"
                  />
                  <ChevronDown size={16} />
                </button>

                {isMenuOpen && (
                  <div className="dropdown-menu">
                    <Link href="/profile" onClick={() => setIsMenuOpen(false)}>
                      <a className="dropdown-item">Mi Perfil</a>
                    </Link>
                    <button 
                      className="dropdown-item"
                      onClick={() => {
                        logout();
                        setIsMenuOpen(false);
                      }}
                    >
                      Cerrar Sesión
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>

          <div className="desktop-only">
            <Button className="nav-theme-btn" onClick={toggleTheme}>
              {isDarkMode ? <Sun className="nav-icon" /> : <Moon className="nav-icon" />}
            </Button>
            <div className="language-buttons">
              <button 
                className={`language-button ${i18n.language === 'en' ? 'active' : ''}`}
                onClick={() => changeLanguage('en')}
                title="English"
              >
                ��🇧
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
      </div>
    </nav>
  );
}
