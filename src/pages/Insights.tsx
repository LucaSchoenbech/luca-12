import { motion } from 'motion/react';
import { Clock } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

export default function Insights() {
  const { t } = useTranslation();
  
  const articles = t('insights.articles', { returnObjects: true }) as Array<{ title: string, excerpt: string, tag: string, date: string, slug?: string }>;

  return (
    <div className="py-24 md:py-48">
      <div className="max-w-7xl mx-auto px-6">
        <header className="max-w-4xl mb-32">
          <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-accent mb-8 block">{t('insights.subtitle')}</span>
          <h1 
            className="text-6xl md:text-[7rem] font-display font-light mb-12 leading-[0.85] tracking-tighter"
            dangerouslySetInnerHTML={{ __html: t('insights.title') }}
          />
          <p className="text-xl md:text-2xl text-gray-500 font-light leading-relaxed max-w-2xl">
            {t('insights.desc')}
          </p>
        </header>

        <div className="w-full aspect-[21/9] bg-accent-soft mb-48 overflow-hidden relative border border-accent-soft">
          <motion.img 
            initial={{ scale: 1.1, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 0.8 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            src="https://image.pollinations.ai/prompt/Elegant%20leather%20bound%20journal%20on%20a%20dark%20wooden%20executive%20desk%2C%20dramatic%20soft%20lighting%2C%20macro%20photography%2C%20business%20insights%2C%20no%20text?width=1920&height=800&nologo=true" 
            alt="Executive insights"
            className="w-full h-full object-cover grayscale mix-blend-multiply"
          />
        </div>

        <div className="grid grid-cols-1 gap-y-32">
          {articles.map((article, idx) => {
            const ArticleWrapper = article.slug ? Link : 'div';
            const wrapperProps = article.slug ? { to: article.slug } : {};
            
            return (
              <motion.article 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-12 group cursor-pointer border-t border-accent-soft pt-16 hover:bg-accent-soft/30 transition-colors px-4 -mx-4 pb-16"
              >
                <div className="lg:col-span-3 space-y-4">
                  <span className="text-[9px] uppercase tracking-[0.4em] font-bold text-accent">#{article.tag}</span>
                  <div className="flex items-center space-x-2 text-[10px] uppercase tracking-widest font-mono text-gray-400">
                    <Clock size={12} />
                    <span>{article.date}</span>
                  </div>
                </div>
                <ArticleWrapper {...wrapperProps} className="lg:col-span-9 space-y-6 block">
                  <h2 className="text-4xl md:text-5xl font-display font-medium group-hover:italic transition-all duration-300 leading-tight">
                    {article.title}
                  </h2>
                  <div className="max-w-2xl">
                    <p className="text-lg text-gray-500 font-light leading-relaxed">
                      {article.excerpt}
                    </p>
                  </div>
                  <div className="pt-4 overflow-hidden">
                    <span className="inline-block text-[10px] font-bold uppercase tracking-[0.2em] border-b border-ink pb-1 group-hover:translate-x-2 transition-transform duration-500">
                      {article.slug ? t('insights.read_article') || 'Leggi articolo' : t('insights.read_abstract')}
                    </span>
                  </div>
                </ArticleWrapper>
              </motion.article>
            );
          })}
        </div>
      </div>
    </div>
  );
}
