import { motion } from 'motion/react';
import { Mail, Linkedin, MapPin, ArrowRight } from 'lucide-react';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

export default function Contact() {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const isFormValid = formData.name.trim() !== '' && formData.email.trim() !== '' && formData.message.trim() !== '';

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isFormValid) {
      const subject = encodeURIComponent(`Nuovo messaggio dal form contatti da ${formData.name}`);
      const body = encodeURIComponent(`Nome: ${formData.name}\nEmail: ${formData.email}\n\nMessaggio:\n${formData.message}`);
      window.location.href = `mailto:luca@schoenbech.com?subject=${subject}&body=${body}`;
      setFormData({ name: '', email: '', message: '' });
    }
  };

  return (
    <div className="py-24 md:py-40">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-32">
          
          <div className="space-y-24">
            <h1 
              className="text-6xl md:text-8xl font-display font-light mb-12"
              dangerouslySetInnerHTML={{ __html: t('contact.title') }}
            />
            
            <div className="space-y-16">
              <div className="space-y-4">
                <h3 className="text-[10px] uppercase tracking-[0.4em] font-bold text-accent">{t('contact.institutional_title')}</h3>
                <p className="text-gray-400 font-light text-sm">{t('contact.institutional_desc')}</p>
                <a href="mailto:luca.roberto@humanvalue.it" className="text-xl md:text-2xl font-display font-medium hover:text-accent transition-colors block border-b border-accent-soft pb-4">
                  luca.roberto@humanvalue.it
                </a>
              </div>

              <div className="space-y-4">
                <h3 className="text-[10px] uppercase tracking-[0.4em] font-bold text-accent">{t('contact.private_title')}</h3>
                <a href="mailto:luca@schoenbech.com" className="text-xl md:text-2xl font-display font-medium hover:text-accent transition-colors block border-b border-accent-soft pb-4">
                  luca@schoenbech.com
                </a>
              </div>

              <div className="space-y-6 pt-12">
                <div className="flex items-center space-x-6 text-gray-500">
                  <Linkedin size={20} className="text-accent" />
                  <a href="https://www.linkedin.com/in/luca-roberto-schoenbech-261a8214/" target="_blank" className="hover:text-ink font-medium tracking-wide">/in/lucaroberto-schoenbech</a>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-12 md:p-16 shadow-[0_32px_64px_-12px_rgba(0,0,0,0.08)] space-y-12 relative border border-accent-soft">
            <div className="absolute top-0 right-0 w-24 h-24 bg-paper/50 -z-10" />
            <h2 className="text-3xl font-display font-medium italic">{t('contact.form_title')}</h2>
            <form onSubmit={handleSubmit} className="space-y-10">
              <div className="space-y-12">
                <div className="space-y-2 group">
                  <label className="text-[9px] uppercase tracking-[0.3em] font-bold text-accent group-focus-within:text-ink transition-colors">{t('contact.form_name')}</label>
                  <input type="text" required value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} className="w-full border-b border-accent-soft py-4 focus:outline-none focus:border-accent transition-colors bg-transparent placeholder:text-gray-300" placeholder={t('contact.form_name_placeholder')} />
                </div>
                <div className="space-y-2 group">
                  <label className="text-[9px] uppercase tracking-[0.3em] font-bold text-accent group-focus-within:text-ink transition-colors">{t('contact.form_email')}</label>
                  <input type="email" required value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} className="w-full border-b border-accent-soft py-4 focus:outline-none focus:border-accent transition-colors bg-transparent placeholder:text-gray-300" placeholder={t('contact.form_email_placeholder')} />
                </div>
                <div className="space-y-2 group">
                  <label className="text-[9px] uppercase tracking-[0.3em] font-bold text-accent group-focus-within:text-ink transition-colors">{t('contact.form_message')}</label>
                  <textarea rows={4} required value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} className="w-full border-b border-accent-soft py-4 focus:outline-none focus:border-accent transition-colors bg-transparent resize-none placeholder:text-gray-300" placeholder={t('contact.form_message_placeholder')}></textarea>
                </div>
              </div>
              <button disabled={!isFormValid} type="submit" className={`w-full bg-ink text-paper p-6 font-bold uppercase tracking-[0.2em] flex items-center justify-center space-x-4 transition-opacity ${!isFormValid ? 'opacity-30 cursor-not-allowed' : 'opacity-100 hover:bg-accent'}`}>
                <span>{t('contact.form_submit')}</span>
                <ArrowRight size={18} />
              </button>
              <p className="text-[10px] text-gray-400 text-center uppercase tracking-widest font-mono">
                {t('contact.form_protected')}
              </p>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
}
