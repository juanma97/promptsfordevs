import { useEffect } from 'react';

export function SchemaOrg({ prompt }) {
  useEffect(() => {
    const schema = {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": prompt.title,
      "description": prompt.description,
      "author": {
        "@type": "Person",
        "name": prompt.author.name
      },
      "datePublished": prompt.createdAt,
      "dateModified": prompt.updatedAt
    };

    let scriptTag = document.querySelector('#schema-org');
    if (!scriptTag) {
      scriptTag = document.createElement('script');
      scriptTag.id = 'schema-org';
      scriptTag.type = 'application/ld+json';
      document.head.appendChild(scriptTag);
    }
    scriptTag.textContent = JSON.stringify(schema);

    return () => {
      scriptTag.remove();
    };
  }, [prompt]);

  return null;
} 