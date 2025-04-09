import { Link } from 'wouter';
import './footer.css';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-links">
          <Link href="/terminos" className="footer-link">
            Términos y Condiciones
          </Link>
          <Link href="/privacidad" className="footer-link">
            Política de Privacidad
          </Link>
        </div>
        <div className="footer-copyright">
          © {currentYear} Juanma Perez. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
} 