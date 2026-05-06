import { motion } from 'motion/react';
import { ArrowLeft, Clock, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function LifeSciences2026() {
  return (
    <div className="py-24 md:py-48 bg-paper">
      <div className="max-w-4xl mx-auto px-6">
        <Link 
          to="/insights"
          className="inline-flex items-center space-x-2 text-[10px] uppercase tracking-widest font-bold text-accent hover:text-ink transition-colors mb-16"
        >
          <ArrowLeft size={14} />
          <span>Torna agli Insights</span>
        </Link>
        
        <header className="mb-24">
          <div className="flex items-center space-x-4 mb-8">
            <span className="text-[9px] uppercase tracking-[0.4em] font-bold text-accent">#LifeSciences</span>
            <div className="h-4 w-[1px] bg-accent-soft" />
            <div className="flex items-center space-x-2 text-[10px] uppercase tracking-widest font-mono text-gray-400">
              <Clock size={12} />
              <span>Lettura 8 min</span>
            </div>
          </div>
          <h1 className="text-4xl md:text-6xl font-display font-medium leading-tight mb-8">
            Life Sciences 2026:<br /> <span className="italic text-accent">come sta cambiando il capitale umano nel pharma italiano</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-500 font-light leading-relaxed">
            Dall'AI Agentica al nuovo CCNL: un'analisi delle dinamiche organizzative e delle priorità HR.
          </p>
        </header>

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

        <div className="mt-24 pt-16 border-t border-accent-soft">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-medium text-ink mb-4">
              Fonti & Riferimenti
            </h2>
            <p className="text-gray-500 font-light">
              Documentazione utilizzata per l'elaborazione di questo insight (Life Sciences 2026).
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
