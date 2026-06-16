import { motion } from 'motion/react';
import { ArrowLeft, Clock, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export default function LifeSciences2026() {
  const { t, i18n } = useTranslation();
  const isEn = i18n.language === 'en';

  return (
    <div className="py-24 md:py-48 bg-paper">
      <div className="max-w-4xl mx-auto px-6">
        <Link 
          to="/insights"
          className="inline-flex items-center space-x-2 text-[10px] uppercase tracking-widest font-bold text-accent hover:text-ink transition-colors mb-16"
        >
          <ArrowLeft size={14} />
          <span>{isEn ? 'Back to Insights' : 'Torna agli Insights'}</span>
        </Link>
        
        <header className="mb-24">
          <div className="flex items-center space-x-4 mb-8">
            <span className="text-[9px] uppercase tracking-[0.4em] font-bold text-accent">#LifeSciences</span>
            <div className="h-4 w-[1px] bg-accent-soft" />
            <div className="flex items-center space-x-2 text-[10px] uppercase tracking-widest font-mono text-gray-400">
              <Clock size={12} />
              <span>{isEn ? '8 min read' : 'Lettura 8 min'}</span>
            </div>
          </div>
          <h1 className="text-4xl md:text-6xl font-display font-medium leading-tight mb-8">
            {isEn ? (
              <>Life Sciences 2026:<br /> <span className="italic text-accent">how human capital is changing in Italian pharma</span></>
            ) : (
              <>Life Sciences 2026:<br /> <span className="italic text-accent">come sta cambiando il capitale umano nel pharma italiano</span></>
            )}
          </h1>
          <p className="text-xl md:text-2xl text-gray-500 font-light leading-relaxed">
            {isEn ? 'From Agentic AI to the new CCNL: an analysis of organizational dynamics and HR priorities.' : 'Dall\'AI Agentica al nuovo CCNL: un\'analisi delle dinamiche organizzative e delle priorità HR.'}
          </p>
        </header>

        {isEn ? (
          <article className="prose prose-lg prose-headings:font-display prose-headings:font-medium text-gray-600 font-light leading-relaxed max-w-none">
            <h2 className="text-3xl mt-16 mb-8 text-ink border-b border-accent-soft pb-4">
              A solid sector facing a double transformation
            </h2>
            <p>
              2026 presents itself, for Italian Life Sciences, as the year of convergence: on one hand, the arrival of agentic AI in corporate processes, on the other, a new regulatory and contractual framework (from the Chemical-Pharmaceutical National Collective Labour Agreement to the EU AI Act) that redesigns the way people are managed. It is a moment when HR choices cease to be an administrative support function and become a direct lever of competitiveness.
            </p>
            <p>
              The starting point is highly respectable. Italy is the first pharmaceutical manufacturing hub in the European Union.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-8">
              <div className="p-6 border border-accent-soft rounded">
                <h4 className="text-2xl font-display text-accent mb-2">71,000</h4>
                <p className="text-sm">direct employees working in the pharmaceutical manufacturing sector.</p>
              </div>
              <div className="p-6 border border-accent-soft rounded">
                <h4 className="text-2xl font-display text-accent mb-2">€56B</h4>
                <p className="text-sm">of annual production, coupled with €53.4 billion in exports.</p>
              </div>
              <div className="p-6 border border-accent-soft rounded">
                <h4 className="text-2xl font-display text-accent mb-2">€3.6B</h4>
                <p className="text-sm">invested in R&D, while biotech alone is worth €20.8 billion.</p>
              </div>
              <div className="p-6 border border-accent-soft rounded">
                <h4 className="text-2xl font-display text-accent mb-2">53%</h4>
                <p className="text-sm">of women in research, and a workforce 90% comprising graduates or diploma holders.</p>
              </div>
            </div>
            
            <p>
              Not surprisingly, pharma is the first Italian industrial sector for corporate welfare according to Istat.
            </p>

            <h2 className="text-3xl mt-16 mb-8 text-ink border-b border-accent-soft pb-4">
              The paradox of talent
            </h2>
            <p>
              Alongside these numbers lives a paradox. 77% of employers in the sector struggle to find "bilingual" scientists, meaning those capable of combining STEM and Data Science skills. And while Italy is the EU leader for qualified female employment in R&D, evident gaps remain on the digital front:
            </p>
            <ul className="list-disc pl-5 mt-4 mb-4 space-y-2">
              <li>There are an estimated 15-20 AI specialists per thousand employees, compared to 60-80 in US and UK hubs.</li>
              <li>Only 15% of companies have conducted an audit of their AI use cases, compared to 40-50% of the global benchmark.</li>
              <li>The digitalization of clinical trials is at 50%, compared to 95% in the US ecosystem.</li>
            </ul>
            <p className="font-medium">In other words: the foundation is there, but it needs to be rapidly updated.</p>

            <h2 className="text-3xl mt-16 mb-8 text-ink border-b border-accent-soft pb-4">
              The regulatory deadlines changing HR work
            </h2>
            <p>Four appointments deserve to be marked on the agenda.</p>
            <div className="space-y-6 mt-6">
              <div className="bg-paper border border-accent-soft p-6">
                <h4 className="text-[10px] uppercase tracking-[0.2em] font-bold text-accent mb-2">June 2026 – EU Directive 2023/970</h4>
                <p className="text-sm font-light">On pay transparency: salary ranges published in job ads, gender-disaggregated data, a ban on requesting salary history. Impact: need to conduct salary audits to identify any Gender Pay Gap &gt; 5%. <em>Best practice: Chiesi has already eliminated the unexplained Gender Pay Gap.</em></p>
              </div>
              <div className="bg-paper border border-accent-soft p-6">
                <h4 className="text-[10px] uppercase tracking-[0.2em] font-bold text-accent mb-2">August 2, 2026 – EU AI Act</h4>
                <p className="text-sm font-light">AI systems used for recruiting, performance evaluation, and promotions are classified as "High Risk." This requires risk management, data quality, transparency and human oversight, with fines up to 35 million euros. Solution: a governance board that puts CHRO, CIO, Legal, and scientific figures at the same table.</p>
              </div>
              <div className="bg-paper border border-accent-soft p-6">
                <h4 className="text-[10px] uppercase tracking-[0.2em] font-bold text-accent mb-2">Chemical-Pharmaceutical NCLA (2025-2028)</h4>
                <p className="text-sm font-light">Introduces a TEC increase of about 294-305 euros over the three years, transforms continuous training into an enforceable subjective right (focused on digital/green skills), and strengthens Faschim/Fonchim with ESG models.</p>
              </div>
              <div className="bg-paper border border-accent-soft p-6">
                <h4 className="text-[10px] uppercase tracking-[0.2em] font-bold text-accent mb-2">January 1, 2026 – Law 106/2025</h4>
                <p className="text-sm font-light">Makes smart working a priority for vulnerable workers, with individual agreements and an explicit right to disconnect: an opportunity also for the inclusion of over-50s, caregivers, and single parents.</p>
              </div>
            </div>

            <h2 className="text-3xl mt-16 mb-8 text-ink border-b border-accent-soft pb-4">
              The six strategic pillars for 2026
            </h2>
            <p>The report identifies six areas on which CEOs, CHROs, and CIOs are called to act together:</p>
            <ul className="list-decimal pl-5 mt-4 space-y-4">
              <li>
                <strong>Talent Architecture:</strong> see the Angelini case and the Future Leaders Program (SDA Bocconi). A "build vs buy" logic to internalize STEM leadership training, reducing time-to-fill from 120 to 60 days and aiming for 40% women in STEM roles.
              </li>
              <li>
                <strong>AI Literacy & Upskilling:</strong> inspired by the Novartis Data Science Academy and Roche's Digital Academy. 60 hours per year of AI training in R&D, a network of AI Champions, and 50% of the workforce certified in AI.
              </li>
              <li>
                <strong>Hybrid Work Model:</strong> Sanofi stands out with the abolition of time control and flexibility in production. Chiesi adopts 2-5 days of remote work. The reference is "Hybrid by Activity": lab work on-site, deep work remotely.
              </li>
              <li>
                <strong>Holistic Welfare:</strong> Novartis offers 6 months of paid parental leave (80%) also to new fathers; Sanofi structures "All Well"; Angelini allocates €800 per year. Goal: welfare utilization from 45% to 80%.
              </li>
              <li>
                <strong>Supply Chain Reshoring:</strong> incentivized by the Critical Medicines Act (80% of active ingredients are imported from China and India). It means investing in upskilling, enhancing hubs like Siena, and CTS partnerships (e.g., Clust-ER Health in Emilia-Romagna).
              </li>
              <li>
                <strong>AI Governance & ESG:</strong> compliance as a competitive advantage. 100% of AI use cases audited, 95% AI ethics training completed, unexplained Gender Pay Gap below 5%.
              </li>
            </ul>

            <h2 className="text-3xl mt-16 mb-8 text-ink border-b border-accent-soft pb-4">
              What makes execution possible
            </h2>
            <p>The report identifies four enabling factors:</p>
            <ul className="list-disc pl-5 mt-4 mb-4 space-y-2">
              <li><strong>C-Level Commitment:</strong> the HR strategy is a business driver and the CHRO sits on the board next to the CEO.</li>
              <li><strong>Adequate Budget:</strong> 15-20% of HR resources allocated to strategic hiring and L&D.</li>
              <li><strong>Partner Ecosystem:</strong> from universities to welfare providers and consulting firms.</li>
              <li><strong>Transparent Communication:</strong> AI leads to a "Job Evolution," not a "Job Elimination." Informing employees reduces resistance.</li>
            </ul>

            <h2 className="text-3xl mt-16 mb-8 text-ink border-b border-accent-soft pb-4">
              A summary for HR professionals
            </h2>
            <p className="font-medium text-accent border-l-4 border-accent pl-4 italic my-8">
              The underlying message is clear: 2026 will reward companies capable of keeping together the efficiency of AI and a new social pact with their people. 
            </p>
            <p>
              Augmented human capital means AI as a co-pilot and not as a substitute, welfare 4.0 that evolves from standardization to personalized care, ethical governance that becomes a factor of reputation and attractiveness. For HR in Italian Life Sciences, it is the transition from an administrative function to the director of transformation: an uncomfortable position but, in light of the sector's numbers, also extraordinarily promising.
            </p>
          </article>
        ) : (
          <article className="prose prose-lg prose-headings:font-display prose-headings:font-medium text-gray-600 font-light leading-relaxed max-w-none">
            <h2 className="text-3xl mt-16 mb-8 text-ink border-b border-accent-soft pb-4">

              Un settore solido davanti a una trasformazione doppia
            </h2>
            <p>
              Il 2026 si presenta, per il Life Sciences italiano, come l'anno della convergenza: da un lato l'arrivo dell'AI agentica nei processi aziendali, dall'altro un nuovo quadro normativo e contrattuale (dal CCNL Chimico-Farmaceutico all'EU AI Act) che ridisegna il modo in cui si gestiscono le persone. È un momento in cui le scelte HR smettono di essere una funzione di supporto e diventano leva diretta di competitività.
            </p>
            <p>
              Il punto di partenza è di tutto rispetto. L'Italia è il primo hub manifatturiero farmaceutico dell'Unione Europea.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-8">
              <div className="p-6 border border-accent-soft rounded">
                <h4 className="text-2xl font-display text-accent mb-2">71.000</h4>
                <p className="text-sm">addetti diretti impiegati nel settore manifatturiero farmaceutico.</p>
              </div>
              <div className="p-6 border border-accent-soft rounded">
                <h4 className="text-2xl font-display text-accent mb-2">€56 Mld</h4>
                <p className="text-sm">di produzione annua, unita a €53,4 miliardi di export.</p>
              </div>
              <div className="p-6 border border-accent-soft rounded">
                <h4 className="text-2xl font-display text-accent mb-2">€3,6 Mld</h4>
                <p className="text-sm">investiti in R&S, mentre il biotech da solo vale €20,8 miliardi.</p>
              </div>
              <div className="p-6 border border-accent-soft rounded">
                <h4 className="text-2xl font-display text-accent mb-2">53%</h4>
                <p className="text-sm">di donne nella ricerca, e forza lavoro al 90% laureata o diplomata.</p>
              </div>
            </div>
            
            <p>
              Non a caso il pharma è il primo settore industriale italiano per welfare aziendale secondo Istat.
            </p>

            <h2 className="text-3xl mt-16 mb-8 text-ink border-b border-accent-soft pb-4">
              Il paradosso del talento
            </h2>
            <p>
              Accanto a questi numeri convive un paradosso. Il 77% degli employer del comparto fatica a reperire scienziati "bilingui", capaci cioè di unire competenze STEM e Data Science. E mentre l'Italia è leader UE per occupazione femminile qualificata in R&D, restano gap evidenti sul fronte digitale:
            </p>
            <ul className="list-disc pl-5 mt-4 mb-4 space-y-2">
              <li>Si stimano 15-20 specialisti AI ogni mille dipendenti, contro i 60-80 degli hub statunitensi e britannici.</li>
              <li>Solo il 15% delle aziende ha effettuato un audit dei propri use case di AI, contro il 40-50% del benchmark globale.</li>
              <li>La digitalizzazione dei clinical trial è al 50%, contro il 95% dell'ecosistema USA.</li>
            </ul>
            <p className="font-medium">In altre parole: la base c'è, ma va aggiornata in fretta.</p>

            <h2 className="text-3xl mt-16 mb-8 text-ink border-b border-accent-soft pb-4">
              Le scadenze normative che cambiano il lavoro HR
            </h2>
            <p>Quattro appuntamenti meritano di essere segnati in agenda.</p>
            <div className="space-y-6 mt-6">
              <div className="bg-paper border border-accent-soft p-6">
                <h4 className="text-[10px] uppercase tracking-[0.2em] font-bold text-accent mb-2">Giugno 2026 – Direttiva UE 2023/970</h4>
                <p className="text-sm font-light">Sulla trasparenza retributiva: range salariali pubblicati negli annunci, dati disaggregati per genere, divieto di chiedere lo storico retributivo. Impatto: necessità di audit salariali per individuare un eventuale Gender Pay Gap &gt; 5%. <em>Best practice: Chiesi ha già eliminato il Gender Pay Gap inspiegato.</em></p>
              </div>
              <div className="bg-paper border border-accent-soft p-6">
                <h4 className="text-[10px] uppercase tracking-[0.2em] font-bold text-accent mb-2">2 Agosto 2026 – EU AI Act</h4>
                <p className="text-sm font-light">I sistemi AI usati per recruiting, valutazione performance e promozioni sono classificati come "High Risk". Servono risk management, data quality, trasparenza e sorveglianza umana, con sanzioni fino a 35 milioni di euro. Soluzione: una governance board che metta allo stesso tavolo CHRO, CIO, Legal e figure scientifiche.</p>
              </div>
              <div className="bg-paper border border-accent-soft p-6">
                <h4 className="text-[10px] uppercase tracking-[0.2em] font-bold text-accent mb-2">CCNL Chimico-Farmaceutico (2025-2028)</h4>
                <p className="text-sm font-light">Introduce un aumento del TEC di circa 294-305 euro nel triennio, trasforma la formazione continua in un diritto soggettivo esigibile (focalizzato su competenze digitali/green), e rafforza Faschim/Fonchim con modelli ESG.</p>
              </div>
              <div className="bg-paper border border-accent-soft p-6">
                <h4 className="text-[10px] uppercase tracking-[0.2em] font-bold text-accent mb-2">1 Gennaio 2026 – Legge 106/2025</h4>
                <p className="text-sm font-light">Rende prioritario lo smart working per i lavoratori fragili, con accordo individuale e diritto alla disconnessione esplicito: un'opportunità anche per l'inclusione di over 50, caregiver e genitori single.</p>
              </div>
            </div>

            <h2 className="text-3xl mt-16 mb-8 text-ink border-b border-accent-soft pb-4">
              I sei pilastri strategici per il 2026
            </h2>
            <p>Il report individua sei aree su cui CEO, CHRO e CIO sono chiamati ad agire insieme:</p>
            <ul className="list-decimal pl-5 mt-4 space-y-4">
              <li>
                <strong>Talent Architecture:</strong> vedi il caso Angelini e il Future Leaders Program (SDA Bocconi). Una logica "build vs buy" per internalizzare la formazione della leadership STEM, riducendo il time-to-fill da 120 a 60 giorni e puntando al 40% di donne STEM.
              </li>
              <li>
                <strong>AI Literacy & Upskilling:</strong> ispirata alla Data Science Academy di Novartis e Digital Academy di Roche. 60 ore annue di formazione AI in R&D, una rete di AI Champions, e il 50% di workforce certificata sull'AI.
              </li>
              <li>
                <strong>Hybrid Work Model:</strong> spicca Sanofi con l'abolizione del controllo orario e la flessibilità in produzione. Chiesi adotta 2-5 giorni di remoto. Il riferimento è "Hybrid by Activity": laboratorio in presenza, deep work in remoto.
              </li>
              <li>
                <strong>Welfare Olistico:</strong> Novartis offre 6 mesi di congedo parentale retribuito (80%) anche ai neopapà; Sanofi struttura "All Well"; Angelini stanzia €800 l'anno. Obiettivo: utilizzo del welfare dall'45% all'80%.
              </li>
              <li>
                <strong>Supply Chain Reshoring:</strong> incentivato dal Critical Medicines Act (80% dei principi attivi è importato da Cina e India). Significa investire nell'upskilling, valorizzare hub come Siena, e partnership CTS (es. Clust-ER Health in Emilia-Romagna).
              </li>
              <li>
                <strong>AI Governance & ESG:</strong> la compliance come vantaggio competitivo. 100% degli use case AI auditati, 95% training di etica AI completato, Gender Pay Gap inspiegato sotto il 5%.
              </li>
            </ul>

            <h2 className="text-3xl mt-16 mb-8 text-ink border-b border-accent-soft pb-4">
              Cosa rende possibile l'esecuzione
            </h2>
            <p>Il report individua quattro fattori abilitanti:</p>
            <ul className="list-disc pl-5 mt-4 mb-4 space-y-2">
              <li><strong>Commitment del C-Level:</strong> la strategia HR è driver di business e il CHRO siede nel board accanto al CEO.</li>
              <li><strong>Budget adeguato:</strong> 15-20% delle risorse HR destinate a hiring strategico e L&D.</li>
              <li><strong>Ecosistema di partner:</strong> dalle università ai provider di welfare e società di consulenza.</li>
              <li><strong>Comunicazione trasparente:</strong> l'AI porta a una "Job Evolution", non a una "Job Elimination". Dirlo riduce le resistenze.</li>
            </ul>

            <h2 className="text-3xl mt-16 mb-8 text-ink border-b border-accent-soft pb-4">
              Una sintesi per chi lavora in HR
            </h2>
            <p className="font-medium text-accent border-l-4 border-accent pl-4 italic my-8">
              Il messaggio di fondo è chiaro: il 2026 premierà le aziende capaci di tenere insieme l'efficienza dell'AI e un nuovo patto sociale con le persone. 
            </p>
            <p>
              Capitale umano aumentato significa AI come co-pilot e non come sostituto, welfare 4.0 che evolve dalla standardizzazione alla cura personalizzata, governance etica che diventa fattore di reputazione e attrattività. Per l'HR del Life Sciences italiano è il passaggio da funzione amministrativa a regista della trasformazione: una posizione scomoda ma, alla luce dei numeri del settore, anche straordinariamente promettente.
            </p>
          </article>
        )}

        <div className="mt-24 pt-16 border-t border-accent-soft">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-medium text-ink mb-4">
              {isEn ? 'Sources & References' : 'Fonti & Riferimenti'}
            </h2>
            <p className="text-gray-500 font-light">
              {isEn ? 'Documentation used for the elaboration of this insight.': 'Documentazione utilizzata per l\'elaborazione di questo insight (Life Sciences 2026).'}
            </p>
          </div>
          
          <div className="flex flex-col gap-4">
            {[
              { author: "Deloitte", title: "2026 Life Sciences Outlook & Executive Trends", year: "2026" },
              { author: "McKinsey & Company", title: "Growth Strategy: The Next Chapter in Life Sciences", year: "2026" },
              { author: "Boston Consulting Group", title: "Reimagining Business Models: Biopharma Trends 2026", year: "2026" },
              { author: "Farmindustria", title: "Indicatori Farmaceutici 2025", year: "2025" },
              { author: "Assobiotec", title: "Il Biotech in Italia 2025", year: "2025" }
            ].map((source, index) => (
              <div key={index} className="flex flex-row items-center p-6 bg-white border border-gray-100 rounded shadow-sm">
                <div className="w-12 h-12 rounded-full bg-paper flex items-center justify-center shrink-0 mr-6">
                  <FileText size={20} className="text-ink" />
                </div>
                <div className="flex flex-col">
                  <span className="text-ink font-display text-lg font-medium mb-1">{source.title}</span>
                  <span className="text-gray-500 text-sm font-light">
                    {source.author} <span className="mx-2">&bull;</span> {source.year}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
