import { useAuth } from '../../hooks/useAuth';
import './profile.css';

export function Profile() {
  const { user } = useAuth();

  if (!user) {
    return <div className="container">Debes iniciar sesión para ver tu perfil</div>;
  }

  return (
    <div className="container profile">
      <h1>Perfil de Usuario</h1>
      {/* Contenido pendiente */}
    </div>
  );
} 