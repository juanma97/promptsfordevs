import { useState } from "react";
import { Link } from "wouter";
import { Button } from "../button/Button";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "../tooltip/Tooltip";
import { Plus, Crown } from "lucide-react";
import "./navbar.css";

export function Navbar() {
  const [user, setUser] = useState(null);

  const handleSignIn = () => {
    alert("Función de inicio de sesión próximamente.");
    setUser({ name: "Usuario Demo" });
  };

  const handleSignOut = () => {
    alert("Sesión cerrada.");
    setUser(null);
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link href="/" className="nav-logo">
          Prompts for Devs
        </Link>

        <div className="nav-actions">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link href="/submit">
                  <Button className="nav-create-btn" disabled={!user}>
                    <Plus className="nav-icon" />
                  </Button>
                </Link>
              </TooltipTrigger>
              <TooltipContent>
                {user ? "Crear nuevo prompt" : "Inicia sesión para crear prompts"}
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>

          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button className="nav-premium" disabled={!user}>
                  <Crown className="nav-icon" />
                  <span>Premium</span>
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>¡Próximamente! Accede a prompts premium por $4.99/mes</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>

          {user ? (
            <Button className="nav-auth-btn" onClick={handleSignOut}>
              Cerrar sesión
            </Button>
          ) : (
            <Button className="nav-auth-btn" onClick={handleSignIn}>
              Iniciar sesión
            </Button>
          )}
        </div>
      </div>
    </nav>
  );
}
