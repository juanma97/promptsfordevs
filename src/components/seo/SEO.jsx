import { useEffect } from 'react';

export function SEO({ 
  title, 
  description, 
  keywords, 
  image, 
  url,
  type = 'website'
}) {
  const siteTitle = 'PromptsForDevs';
  const defaultDescription = 'Descubre y comparte los mejores prompts para desarrolladores. Una colección curada de prompts para IA que mejorará tu productividad como desarrollador.';
  const defaultImage = '/og-image.png';
  const siteUrl = 'https://promptsfordevs.com';

  useEffect(() => {
    // Actualizar título
    document.title = title ? `${title} | ${siteTitle}` : siteTitle;

    // Actualizar meta tags
    updateMetaTag('description', description || defaultDescription);
    updateMetaTag('keywords', keywords || 'prompts, desarrollo, programación, IA, ChatGPT, productividad, desarrolladores');

    // Open Graph
    updateMetaTag('og:type', type, 'property');
    updateMetaTag('og:title', title || siteTitle, 'property');
    updateMetaTag('og:description', description || defaultDescription, 'property');
    updateMetaTag('og:image', image || `${siteUrl}${defaultImage}`, 'property');
    updateMetaTag('og:url', url || siteUrl, 'property');
    updateMetaTag('og:site_name', siteTitle, 'property');

    // Twitter
    updateMetaTag('twitter:card', 'summary_large_image', 'name');
    updateMetaTag('twitter:title', title || siteTitle, 'name');
    updateMetaTag('twitter:description', description || defaultDescription, 'name');
    updateMetaTag('twitter:image', image || `${siteUrl}${defaultImage}`, 'name');

    // Otros
    updateMetaTag('robots', 'index, follow');
    updateMetaTag('language', 'Spanish');

    // Canonical URL
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = url || siteUrl;
  }, [title, description, keywords, image, url, type]);

  return null;
}

function updateMetaTag(name, content, attributeName = 'name') {
  let meta = document.querySelector(`meta[${attributeName}="${name}"]`);
  
  if (!meta) {
    meta = document.createElement('meta');
    meta.setAttribute(attributeName, name);
    document.head.appendChild(meta);
  }
  
  meta.setAttribute('content', content);
}