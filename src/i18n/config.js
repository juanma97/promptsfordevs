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
      loginToContinue: 'Please login to continue'
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
      loginToContinue: 'Por favor inicia sesión para continuar'
    }
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n; 