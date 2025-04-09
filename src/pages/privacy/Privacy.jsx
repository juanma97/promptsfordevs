import './privacy.css';

export function Privacy() {
  return (
    <div className="container privacy-container">
      <h1 className="title">Política de Privacidad</h1>
      
      <div className="content">
        <section className="section">
          <h2>1. Información que Recopilamos</h2>
          <p>
            En PromptsForDevs, recopilamos la siguiente información:
          </p>
          <ul>
            <li>Información de registro (nombre, email)</li>
            <li>Datos de uso de la plataforma</li>
            <li>Contenido que publicas (prompts, comentarios)</li>
            <li>Información técnica (IP, navegador, dispositivo)</li>
          </ul>
        </section>

        <section className="section">
          <h2>2. Uso de la Información</h2>
          <p>
            Utilizamos tu información para:
          </p>
          <ul>
            <li>Proporcionar y mejorar nuestros servicios</li>
            <li>Personalizar tu experiencia</li>
            <li>Comunicarnos contigo</li>
            <li>Cumplir con obligaciones legales</li>
          </ul>
        </section>

        <section className="section">
          <h2>3. Compartir Información</h2>
          <p>
            No vendemos tu información personal. Podemos compartir información con:
          </p>
          <ul>
            <li>Proveedores de servicios que nos ayudan a operar la plataforma</li>
            <li>Autoridades legales cuando sea requerido por ley</li>
            <li>Otros usuarios (solo la información que eliges compartir)</li>
          </ul>
        </section>

        <section className="section">
          <h2>4. Cookies y Tecnologías Similares</h2>
          <p>
            Utilizamos cookies y tecnologías similares para:
          </p>
          <ul>
            <li>Mejorar la funcionalidad del sitio</li>
            <li>Analizar el uso de la plataforma</li>
            <li>Personalizar tu experiencia</li>
          </ul>
        </section>

        <section className="section">
          <h2>5. Tus Derechos</h2>
          <p>
            Tienes derecho a:
          </p>
          <ul>
            <li>Acceder a tu información personal</li>
            <li>Corregir información incorrecta</li>
            <li>Solicitar la eliminación de tus datos</li>
            <li>Retirar tu consentimiento</li>
          </ul>
        </section>

        <section className="section">
          <h2>6. Seguridad</h2>
          <p>
            Implementamos medidas de seguridad para proteger tu información, 
            incluyendo encriptación y controles de acceso.
          </p>
        </section>

        <section className="section">
          <h2>7. Cambios en la Política</h2>
          <p>
            Podemos actualizar esta política periódicamente. Te notificaremos 
            de cambios significativos.
          </p>
        </section>

        <section className="section">
          <h2>8. Contacto</h2>
          <p>
            Para preguntas sobre privacidad, contacta con nosotros en:
            <br />
            Email: privacidad@promptsfordevs.com
          </p>
        </section>
      </div>
    </div>
  );
} 