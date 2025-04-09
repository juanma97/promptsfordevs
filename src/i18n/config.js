import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  en: {
    translation: {
      // Navbar
      home: 'Home',
      terms: 'Terms of Service',
      privacy: 'Privacy Policy',
      themeToggle: 'Toggle Theme',
      createPrompt: 'Create Prompt',
      loginToCreate: 'Login to create prompts',
      premium: 'Premium',
      premiumTooltip: 'Coming soon! Access premium prompts for $4.99/month',
      logout: 'Logout',

      // Home
      welcome: 'Welcome to Prompts for Devs',
      searchPlaceholder: 'Search prompts...',
      noResults: 'No results found',
      loading: 'Loading...',
      error: 'Error loading prompts',
      popular: 'Popular',
      featured: 'Featured',
      latest: 'Latest',
      viewAll: 'View All',

      // Prompt Card
      by: 'by',
      views: 'views',
      likes: 'likes',
      comments: 'comments',
      readMore: 'Read More',
      copyPrompt: 'Copy Prompt',
      promptCopied: 'Prompt copied to clipboard!',

      // Reviews
      reviews: 'Reviews',
      noReviews: 'No reviews yet',
      addReview: 'Add Review',
      editReview: 'Edit Review',
      deleteReview: 'Delete Review',
      reviewPlaceholder: 'Write your review...',
      submitReview: 'Submit Review',
      updateReview: 'Update Review',
      loginToReview: 'Login to leave a review',
      reviewDeleted: 'Review deleted successfully',
      reviewError: 'Error submitting review',

      // Auth
      loginWithGoogle: 'Login with Google',
      loginWithGithub: 'Login with Github',
      loginRequired: 'Login required',
      loginToContinue: 'Please login to continue',

      navbar: {
        home: "Home",
        prompts: "Prompts",
        reviews: "Reviews",
        login: "Login",
        register: "Register",
        logout: "Logout",
        language: "Language",
        theme: "Theme",
        darkMode: "Dark Mode",
        lightMode: "Light Mode",
      },
      home: {
        hero: {
          title: "Discover AI Prompts",
          subtitle: "Find and share prompts for testing, development, and professional growth"
        },
        search: {
          placeholder: "Search prompts..."
        },
        filters: {
          reset: "Reset Filters"
        },
        loading: "Loading prompts...",
        noResults: "No prompts found matching your criteria."
      },
      promptCard: {
        author: "Author",
        views: "views",
        copy: "Copy",
        copied: "Copied!",
        readMore: "Read More"
      },
      reviews: {
        title: "Reviews",
        noReviews: "No reviews yet",
        addReview: "Add Review",
        submit: "Submit",
        cancel: "Cancel",
        rating: "Rating",
        comment: "Comment"
      },
      auth: {
        login: "Login",
        register: "Register",
        email: "Email",
        password: "Password",
        confirmPassword: "Confirm Password",
        name: "Name",
        submit: "Submit",
        noAccount: "Don't have an account?",
        haveAccount: "Already have an account?"
      },
      terms: {
        title: "Terms of Service",
        lastUpdated: "Last updated: March 15, 2024",
        introduction: "Welcome to Prompts for Devs. By accessing our website, you agree to these terms.",
        acceptance: "By accessing or using our Service, you agree to be bound by these Terms.",
        changes: "We reserve the right to modify these terms at any time.",
        content: {
          title: "Content",
          description: "All content provided on this website is for informational purposes only."
        },
        userConduct: {
          title: "User Conduct",
          description: "Users must not engage in any activity that disrupts the service."
        },
        intellectualProperty: {
          title: "Intellectual Property",
          description: "All content and materials available on this site are protected by intellectual property laws."
        },
        disclaimer: {
          title: "Disclaimer",
          description: "The service is provided 'as is' without any warranties."
        },
        contact: {
          title: "Contact Us",
          description: "If you have any questions about these Terms, please contact us."
        }
      },
      privacy: {
        title: "Privacy Policy",
        lastUpdated: "Last updated: March 15, 2024",
        introduction: "Your privacy is important to us. This policy outlines how we handle your information.",
        information: {
          title: "Information We Collect",
          description: "We collect information that you provide directly to us."
        },
        usage: {
          title: "How We Use Your Information",
          description: "We use the information to provide and improve our services."
        },
        sharing: {
          title: "Information Sharing",
          description: "We do not share your personal information with third parties."
        },
        security: {
          title: "Security",
          description: "We implement security measures to protect your information."
        },
        cookies: {
          title: "Cookies",
          description: "We use cookies to enhance your experience on our website."
        },
        rights: {
          title: "Your Rights",
          description: "You have the right to access and control your personal information."
        },
        changes: {
          title: "Changes to This Policy",
          description: "We may update this privacy policy from time to time."
        },
        contact: {
          title: "Contact Us",
          description: "If you have questions about this Privacy Policy, please contact us."
        }
      }
    }
  },
  es: {
    translation: {
      // Navbar
      home: 'Inicio',
      terms: 'Términos de Servicio',
      privacy: 'Política de Privacidad',
      themeToggle: 'Cambiar Tema',
      createPrompt: 'Crear Prompt',
      loginToCreate: 'Inicia sesión para crear prompts',
      premium: 'Premium',
      premiumTooltip: '¡Próximamente! Accede a prompts premium por $4.99/mes',
      logout: 'Cerrar sesión',

      // Home
      welcome: 'Bienvenido a Prompts for Devs',
      searchPlaceholder: 'Buscar prompts...',
      noResults: 'No se encontraron resultados',
      loading: 'Cargando...',
      error: 'Error al cargar los prompts',
      popular: 'Populares',
      featured: 'Destacados',
      latest: 'Recientes',
      viewAll: 'Ver Todos',

      // Prompt Card
      by: 'por',
      views: 'vistas',
      likes: 'me gusta',
      comments: 'comentarios',
      readMore: 'Leer Más',
      copyPrompt: 'Copiar Prompt',
      promptCopied: '¡Prompt copiado al portapapeles!',

      // Reviews
      reviews: 'Reseñas',
      noReviews: 'Aún no hay reseñas',
      addReview: 'Añadir Reseña',
      editReview: 'Editar Reseña',
      deleteReview: 'Eliminar Reseña',
      reviewPlaceholder: 'Escribe tu reseña...',
      submitReview: 'Enviar Reseña',
      updateReview: 'Actualizar Reseña',
      loginToReview: 'Inicia sesión para dejar una reseña',
      reviewDeleted: 'Reseña eliminada correctamente',
      reviewError: 'Error al enviar la reseña',

      // Auth
      loginWithGoogle: 'Iniciar sesión con Google',
      loginWithGithub: 'Iniciar sesión con Github',
      loginRequired: 'Inicio de sesión requerido',
      loginToContinue: 'Por favor inicia sesión para continuar',

      navbar: {
        home: "Inicio",
        prompts: "Prompts",
        reviews: "Reseñas",
        login: "Iniciar Sesión",
        register: "Registrarse",
        logout: "Cerrar Sesión",
        language: "Idioma",
        theme: "Tema",
        darkMode: "Modo Oscuro",
        lightMode: "Modo Claro",
      },
      home: {
        hero: {
          title: "Descubre Prompts de IA",
          subtitle: "Encuentra y comparte prompts para pruebas, desarrollo y crecimiento profesional"
        },
        search: {
          placeholder: "Buscar prompts..."
        },
        filters: {
          reset: "Restablecer Filtros"
        },
        loading: "Cargando prompts...",
        noResults: "No se encontraron prompts que coincidan con tus criterios."
      },
      promptCard: {
        author: "Autor",
        views: "vistas",
        copy: "Copiar",
        copied: "¡Copiado!",
        readMore: "Leer Más"
      },
      reviews: {
        title: "Reseñas",
        noReviews: "Aún no hay reseñas",
        addReview: "Añadir Reseña",
        submit: "Enviar",
        cancel: "Cancelar",
        rating: "Calificación",
        comment: "Comentario"
      },
      auth: {
        login: "Iniciar Sesión",
        register: "Registrarse",
        email: "Correo Electrónico",
        password: "Contraseña",
        confirmPassword: "Confirmar Contraseña",
        name: "Nombre",
        submit: "Enviar",
        noAccount: "¿No tienes una cuenta?",
        haveAccount: "¿Ya tienes una cuenta?"
      },
      terms: {
        title: "Términos de Servicio",
        lastUpdated: "Última actualización: 15 de marzo de 2024",
        introduction: "Bienvenido a Prompts for Devs. Al acceder a nuestro sitio web, aceptas estos términos.",
        acceptance: "Al acceder o usar nuestro Servicio, aceptas estar sujeto a estos Términos.",
        changes: "Nos reservamos el derecho de modificar estos términos en cualquier momento.",
        content: {
          title: "Contenido",
          description: "Todo el contenido proporcionado en este sitio web es solo para fines informativos."
        },
        userConduct: {
          title: "Conducta del Usuario",
          description: "Los usuarios no deben participar en ninguna actividad que interrumpa el servicio."
        },
        intellectualProperty: {
          title: "Propiedad Intelectual",
          description: "Todo el contenido y materiales disponibles en este sitio están protegidos por leyes de propiedad intelectual."
        },
        disclaimer: {
          title: "Descargo de Responsabilidad",
          description: "El servicio se proporciona 'tal cual' sin garantías de ningún tipo."
        },
        contact: {
          title: "Contáctanos",
          description: "Si tienes alguna pregunta sobre estos Términos, por favor contáctanos."
        }
      },
      privacy: {
        title: "Política de Privacidad",
        lastUpdated: "Última actualización: 15 de marzo de 2024",
        introduction: "Tu privacidad es importante para nosotros. Esta política describe cómo manejamos tu información.",
        information: {
          title: "Información que Recopilamos",
          description: "Recopilamos información que nos proporcionas directamente."
        },
        usage: {
          title: "Cómo Usamos Tu Información",
          description: "Usamos la información para proporcionar y mejorar nuestros servicios."
        },
        sharing: {
          title: "Compartición de Información",
          description: "No compartimos tu información personal con terceros."
        },
        security: {
          title: "Seguridad",
          description: "Implementamos medidas de seguridad para proteger tu información."
        },
        cookies: {
          title: "Cookies",
          description: "Usamos cookies para mejorar tu experiencia en nuestro sitio web."
        },
        rights: {
          title: "Tus Derechos",
          description: "Tienes derecho a acceder y controlar tu información personal."
        },
        changes: {
          title: "Cambios en Esta Política",
          description: "Podemos actualizar esta política de privacidad de vez en cuando."
        },
        contact: {
          title: "Contáctanos",
          description: "Si tienes preguntas sobre esta Política de Privacidad, por favor contáctanos."
        }
      }
    }
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    lng: "en",
    fallbackLng: "en",
    detection: {
      order: ['querystring', 'cookie', 'localStorage', 'navigator'],
      caches: ['cookie', 'localStorage'],
      lookupQuerystring: 'lng',
      lookupCookie: 'i18next',
      lookupLocalStorage: 'i18nextLng',
      checkWhitelist: true
    },
    interpolation: {
      escapeValue: false
    }
  });

export default i18n; 