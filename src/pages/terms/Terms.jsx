import React from "react";
import { useTranslation } from "react-i18next";
import "./terms.css";

export function Terms() {
  const { t } = useTranslation();

  return (
    <div className="terms-container">
      <div className="terms-content">
        <h1>{t('terms.title')}</h1>
        <p className="last-updated">{t('terms.lastUpdated')}</p>
        
        <section>
          <p>{t('terms.introduction')}</p>
          <p>{t('terms.acceptance')}</p>
          <p>{t('terms.changes')}</p>
        </section>

        <section>
          <h2>{t('terms.content.title')}</h2>
          <p>{t('terms.content.description')}</p>
        </section>

        <section>
          <h2>{t('terms.userConduct.title')}</h2>
          <p>{t('terms.userConduct.description')}</p>
        </section>

        <section>
          <h2>{t('terms.intellectualProperty.title')}</h2>
          <p>{t('terms.intellectualProperty.description')}</p>
        </section>

        <section>
          <h2>{t('terms.disclaimer.title')}</h2>
          <p>{t('terms.disclaimer.description')}</p>
        </section>

        <section>
          <h2>{t('terms.contact.title')}</h2>
          <p>{t('terms.contact.description')}</p>
        </section>
      </div>
    </div>
  );
} 