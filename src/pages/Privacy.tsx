import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'motion/react';

export default function Privacy() {
  const { t } = useTranslation();

  return (
    <div className="py-24 md:py-48">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-16"
        >
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl font-display font-medium text-ink">
              {t('privacy.title')}
            </h1>
            <p className="text-gray-500 font-mono text-xs uppercase tracking-widest">
              {t('privacy.last_updated')}
            </p>
          </div>

          <div className="space-y-12 text-lg text-gray-600 font-light leading-relaxed">
            <section className="space-y-4">
              <h2 className="text-2xl font-display font-medium text-ink">{t('privacy.controller_title')}</h2>
              <p dangerouslySetInnerHTML={{ __html: t('privacy.controller_desc') }}></p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-display font-medium text-ink">{t('privacy.data_title')}</h2>
              <p dangerouslySetInnerHTML={{ __html: t('privacy.data_desc') }}></p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-display font-medium text-ink">{t('privacy.source_title')}</h2>
              <p dangerouslySetInnerHTML={{ __html: t('privacy.source_desc') }}></p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-display font-medium text-ink">{t('privacy.purpose_title')}</h2>
              <p dangerouslySetInnerHTML={{ __html: t('privacy.purpose_desc') }}></p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-display font-medium text-ink">{t('privacy.communication_title')}</h2>
              <p dangerouslySetInnerHTML={{ __html: t('privacy.communication_desc') }}></p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-display font-medium text-ink">{t('privacy.retention_title')}</h2>
              <p dangerouslySetInnerHTML={{ __html: t('privacy.retention_desc') }}></p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-display font-medium text-ink">{t('privacy.rights_title')}</h2>
              <p dangerouslySetInnerHTML={{ __html: t('privacy.rights_desc') }}></p>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
