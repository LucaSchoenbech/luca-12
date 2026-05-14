import { motion } from 'motion/react';
import { useTranslation } from 'react-i18next';
import { useCallback, useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import useEmblaCarousel from 'embla-carousel-react';

const CategoryCarousel = ({ category, items }: { category: string, items: Array<{ role: string, company: string, description: string }> }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: 'center',
    loop: true,
    skipSnaps: false,
  });

  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi])
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi])

  const onSelect = useCallback((emblaApi: any) => {
    setSelectedIndex(emblaApi.selectedScrollSnap())
  }, [])

  useEffect(() => {
    if (!emblaApi) return
    onSelect(emblaApi)
    emblaApi.on('reInit', onSelect).on('select', onSelect)
  }, [emblaApi, onSelect])

  return (
    <div className="relative mb-32 md:mb-40 group/carousel">
      <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-white/10 pb-6 mb-12 gap-6 relative z-10 px-6 lg:px-0">
        <h3 className="text-3xl md:text-5xl font-display text-paper font-light tracking-tight">{category}</h3>
        <div className="flex space-x-3 opacity-100 lg:opacity-0 group-hover/carousel:opacity-100 transition-opacity duration-300">
          <button onClick={scrollPrev} className="p-3 rounded-full border border-white/20 hover:bg-white/10 hover:border-white/40 text-white transition-all cursor-pointer" aria-label="Precedente">
            <ChevronLeft size={20} />
          </button>
          <button onClick={scrollNext} className="p-3 rounded-full border border-white/20 hover:bg-white/10 hover:border-white/40 text-white transition-all cursor-pointer" aria-label="Successivo">
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
      
      <div className="overflow-hidden cursor-grab active:cursor-grabbing pb-8 -mx-6 lg:-mx-12 px-6 lg:px-12" ref={emblaRef}>
        <div className="flex touch-pan-y" style={{ backfaceVisibility: 'hidden' }}>
          {items.map((item, i) => (
            <div key={i} className="flex-none min-w-0 w-[85vw] md:w-[60vw] lg:w-[45vw] pl-4 md:pl-8">
              <div 
                className={`h-full bg-[#12141c] border transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] p-8 md:p-12 lg:p-16 flex flex-col justify-between group
                  ${selectedIndex === i 
                    ? 'border-accent/40 opacity-100 scale-100 shadow-[0_20px_40px_-20px_rgba(0,0,0,0.5)]' 
                    : 'border-white/5 opacity-40 scale-[0.92] hover:opacity-60'}
                `}
              >
                <div>
                  <h4 className={`font-display font-light text-paper mb-6 transition-all duration-700 ease-out
                    ${selectedIndex === i ? 'text-3xl md:text-4xl italic' : 'text-2xl md:text-3xl'}
                  `}>{item.role}</h4>
                  <p className="text-gray-400 font-light leading-relaxed text-sm md:text-base lg:text-lg border-l-2 border-accent/30 pl-6 py-2">{item.description}</p>
                </div>
                <div className="mt-16 pt-8 border-t border-white/5 flex justify-between items-end">
                  <p className="text-[10px] md:text-[11px] font-mono text-accent uppercase tracking-widest leading-relaxed max-w-[80%]">{item.company}</p>
                  <span className="text-xs font-mono text-gray-700 block font-light">{String(i + 1).padStart(2, '0')}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <div className="mt-2 md:mt-6 flex justify-center space-x-3 items-center">
        {items.map((_, i) => (
          <button 
            key={i} 
            onClick={() => emblaApi && emblaApi.scrollTo(i)}
            className={`h-[2px] transition-all duration-500 ease-out ${selectedIndex === i ? 'w-12 bg-accent' : 'w-4 bg-white/20 hover:bg-white/40'}`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  )
}

export default function WorkAreas() {
  const { t } = useTranslation();
  
  const sectors = t('work_areas.sectors', { returnObjects: true }) as Array<{ title: string, description: string }>;
  const sectorsWithImages = sectors.map((sector, idx) => {
    const images = [
      "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&q=80&w=1470",
      "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=1470",
      "https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&q=80&w=1470",
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1470",
      "https://images.unsplash.com/photo-1537462715879-360eeb61a0ad?auto=format&fit=crop&q=80&w=1470",
      "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80&w=1470",
      "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&q=80&w=1470"
    ];
    return { ...sector, image: images[idx] || images[0] };
  });

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

        <section className="bg-ink text-paper py-24 md:py-32 rounded-sm relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-accent" />
          <div className="px-6 lg:px-24">
            <h2 className="text-[10px] uppercase tracking-[0.4em] font-bold text-accent mb-16 md:mb-32 text-center md:text-left">{t('work_areas.engagements_title')}</h2>
            
            <div className="space-y-4">
              {(t('work_areas.engagement_categories', { returnObjects: true }) as Array<{ category: string, items: Array<{ role: string, company: string, description: string }> }>).map((cat, idx) => (
                <CategoryCarousel key={idx} category={cat.category} items={cat.items} />
              ))}
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
