import { motion } from 'motion/react';
import { useTranslation } from 'react-i18next';

export default function WorkAreas() {
  const { t } = useTranslation();
  
  const sectors = t('work_areas.sectors', { returnObjects: true }) as Array<{ title: string, description: string }>;
  const sectorsWithImages = sectors.map((sector, idx) => {
    const images = [
      "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&q=80&w=1470",
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1470",
      "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80&w=1470",
      "https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&q=80&w=1470",
      "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&q=80&w=1470",
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1470"
    ];
    return { ...sector, image: images[idx] || images[0] };
  });

  const engagements = t('work_areas.engagements', { returnObjects: true }) as Array<{ label: string, context: string }>;

  return (
    <div className="py-24 md:py-40">
      <div className="max-w-7xl mx-auto px-6">
        <header className="max-w-4xl mb-48">
          <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-accent mb-8 block">{t('work_areas.subtitle')}</span>
          <h1 
            className="text-6xl md:text-[7rem] font-display font-light mb-12 leading-[0.85] tracking-tighter"
            dangerouslySetInnerHTML={{ __html: t('work_areas.title') }}
          />
          <p className="text-xl md:text-2xl text-gray-500 font-light leading-relaxed max-w-2xl">
            {t('work_areas.p1')}
          </p>
          <p className="text-lg md:text-xl text-gray-500 font-light leading-relaxed max-w-2xl mt-6">
            {t('work_areas.p2')}
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-32 mb-64">
          {sectorsWithImages.map((sector, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="group space-y-12"
            >
              <div className="aspect-[16/10] overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-1000 border border-accent-soft">
                <motion.img 
                  src={sector.image} 
                  alt={sector.title} 
                  initial={{ scale: 1.2, filter: 'blur(5px)' }}
                  whileInView={{ scale: 1, filter: 'blur(0px)' }}
                  whileHover={{ scale: 1.05 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2, ease: "easeOut" }}
                  className="w-full h-full object-cover" 
                />
              </div>
              <div className="space-y-6">
                <h3 className="text-4xl font-display font-medium group-hover:italic transition-all duration-300">{sector.title}</h3>
                <p className="text-lg text-gray-500 leading-relaxed font-light">{sector.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <section className="bg-ink text-paper p-12 md:p-32 rounded-sm relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-accent" />
          <h2 className="text-[10px] uppercase tracking-[0.4em] font-bold text-accent mb-24">{t('work_areas.engagements_title')}</h2>
          <div className="grid grid-cols-1 gap-4">
            {engagements.map((item, idx) => (
              <div key={idx} className="flex flex-col md:flex-row md:items-center justify-between py-12 border-b border-white/5 group cursor-default hover:bg-white/5 transition-colors px-4 -mx-4">
                <span className="text-3xl md:text-4xl font-display font-light group-hover:italic transition-all duration-500">
                  {item.label}
                </span>
                <span className="text-[10px] font-mono text-gray-500 mt-4 md:mt-0 uppercase tracking-widest bg-white/5 px-4 py-2">
                  {item.context}
                </span>
              </div>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
}
