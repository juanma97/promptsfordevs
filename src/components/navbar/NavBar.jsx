import { Link } from "wouter";
import { useState } from "react";
import { Button } from "../button/Button";
import { Plus, Crown, Mail, LogOut, Star, TrendingUp } from "lucide-react";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { useAuth } from "../../hooks/useAuth"; 
import "./navbar.css";

export function Navbar() {
  const { user, loginWithGoogle, loginWithGithub, logout } = useAuth();
  const [tooltip, setTooltip] = useState(null);

  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link href="/" className="nav-logo">Prompts for Devs</Link>

        <div className="nav-links">
          <Link href="/featured" className="nav-link">
            <Star size={16} />
            Destacados
          </Link>
          <Link href="/popular" className="nav-link">
            <TrendingUp size={16} />
            Populares
          </Link>
        </div>

        <div className="nav-actions">
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
              <Button className="nav-auth-btn"><Mail className="nav-icon" /></Button>
              <Button className="nav-auth-btn" onClick={loginWithGoogle}>
                <FcGoogle size={20} />
              </Button>
              <Button className="nav-auth-btn" onClick={loginWithGithub}>
                <FaGithub size={20} />
              </Button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
