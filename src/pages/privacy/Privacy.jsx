import React from "react";
import { useTranslation } from "react-i18next";
import "./privacy.css";

export function Privacy() {
  const { t } = useTranslation();

  return (
    <div className="privacy-container">
      <div className="privacy-content">
        <h1>{t('privacy.title')}</h1>
        <p className="last-updated">{t('privacy.lastUpdated')}</p>
        
        <section>
          <p>{t('privacy.introduction')}</p>
        </section>

        <section>
          <h2>{t('privacy.information.title')}</h2>
          <p>{t('privacy.information.description')}</p>
        </section>

        <section>
          <h2>{t('privacy.usage.title')}</h2>
          <p>{t('privacy.usage.description')}</p>
        </section>

        <section>
          <h2>{t('privacy.sharing.title')}</h2>
          <p>{t('privacy.sharing.description')}</p>
        </section>

        <section>
          <h2>{t('privacy.security.title')}</h2>
          <p>{t('privacy.security.description')}</p>
        </section>

        <section>
          <h2>{t('privacy.cookies.title')}</h2>
          <p>{t('privacy.cookies.description')}</p>
        </section>

        <section>
          <h2>{t('privacy.rights.title')}</h2>
          <p>{t('privacy.rights.description')}</p>
        </section>

        <section>
          <h2>{t('privacy.changes.title')}</h2>
          <p>{t('privacy.changes.description')}</p>
        </section>

        <section>
          <h2>{t('privacy.contact.title')}</h2>
          <p>{t('privacy.contact.description')}</p>
        </section>
      </div>
    </div>
  );
} 