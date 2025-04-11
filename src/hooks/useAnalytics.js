import { useEffect } from 'react';
import { useLocation } from 'wouter';
import { logAnalyticsEvent } from '../firebaseConfig';

export function useAnalytics() {
  const [location] = useLocation();

  // Trackear cambios de página
  useEffect(() => {
    logAnalyticsEvent('page_view', {
      page_path: location,
      page_title: document.title
    });
  }, [location]);

  // Añadir debug en desarrollo
  const logDebug = (eventName, params) => {
    if (process.env.NODE_ENV === 'development') {
      console.log('Analytics Event:', eventName, params);
    }
  };

  // Funciones helper para eventos comunes
  const logPromptView = (promptId, promptTitle) => {
    const params = {
      prompt_id: promptId,
      prompt_title: promptTitle
    };
    logAnalyticsEvent('prompt_view', params);
    logDebug('prompt_view', params);
  };

  const logPromptCopy = (promptId, promptTitle) => {
    logAnalyticsEvent('prompt_copy', {
      prompt_id: promptId,
      prompt_title: promptTitle
    });
  };

  const logPromptLike = (promptId, promptTitle) => {
    logAnalyticsEvent('prompt_like', {
      prompt_id: promptId,
      prompt_title: promptTitle
    });
  };

  const logSearch = (searchTerm) => {
    logAnalyticsEvent('search', {
      search_term: searchTerm
    });
  };

  const logLogin = (method) => {
    logAnalyticsEvent('login', {
      method: method
    });
  };

  const logPromptCreate = (promptId, promptTitle) => {
    logAnalyticsEvent('prompt_create', {
      prompt_id: promptId,
      prompt_title: promptTitle
    });
  };

  const logReviewSubmit = (promptId, rating) => {
    logAnalyticsEvent('review_submit', {
      prompt_id: promptId,
      rating: rating
    });
  };

  const logSharePrompt = (promptId, platform) => {
    logAnalyticsEvent('prompt_share', {
      prompt_id: promptId,
      platform: platform
    });
  };

  const logError = (errorCode, errorMessage) => {
    logAnalyticsEvent('error', {
      error_code: errorCode,
      error_message: errorMessage
    });
  };

  return {
    logPromptView,
    logPromptCopy,
    logPromptLike,
    logSearch,
    logLogin,
    logPromptCreate,
    logReviewSubmit,
    logSharePrompt,
    logError
  };
} 