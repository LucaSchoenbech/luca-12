import { ArrowLeft, Clock, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function HumanFactorMA() {
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
            <span className="text-[9px] uppercase tracking-[0.4em] font-bold text-accent">#Talent Sourcing Advisory</span>
            <div className="h-4 w-[1px] bg-accent-soft" />
            <div className="flex items-center space-x-2 text-[10px] uppercase tracking-widest font-mono text-gray-400">
              <Clock size={12} />
              <span>Lettura 5 min</span>
            </div>
          </div>
          <h1 className="text-4xl md:text-6xl font-display font-medium leading-tight mb-8 text-ink">
            Il Fattore Umano nell'M&A:<br /> 
            <span className="italic text-accent">perché il 70% delle acquisizioni PE fallisce prima ancora di iniziare</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-500 font-light leading-relaxed">
            Il problema che nessuno vuole nominare in due diligence, dove si annida il paradosso più costoso del mid-market italiano.
          </p>
        </header>

        <article className="prose prose-lg prose-headings:font-display prose-headings:font-medium text-gray-600 font-light leading-relaxed max-w-none">
          <p>
            Quando un fondo di Private Equity acquisisce una PMI italiana, la due diligence finanziaria occupa settimane di lavoro, decine di advisor e milioni di euro in fee. La due diligence sul management team dura, nella maggior parte dei casi, mezza giornata.
          </p>
          <p>
            È qui che si annida il paradosso più costoso del mid-market italiano.
          </p>
          <p>
            Il BCG documenta che fino al 70% delle operazioni PE sottoperforma le proiezioni iniziali — non per ragioni di mercato, non per errori nel modello finanziario, ma per fratture nella leadership e attrito culturale. L'EY aggiunge che l'81% degli operatori PE ha dovuto estendere gli holding period, riconoscendo il capitale umano come principale driver dell'IRR.
          </p>
          <p>
            Eppure, storicamente, meno dell'1% dei budget pre-deal viene destinato alla valutazione delle persone.
          </p>

          <h2 className="text-3xl mt-16 mb-8 text-ink border-b border-accent-soft pb-4">
            La tempesta perfetta: 320.000 imprese senza erede
          </h2>
          <p>
            Siamo entrati in una finestra temporale irripetibile per il capitalismo italiano.
          </p>
          <p>
            L'Osservatorio AUB stima che il 20-30% del PIL italiano cambierà di mano nei prossimi 60 mesi. Unioncamere certifica che 320.000 imprese sono oggi guidate da fondatori ultra-settantenni privi di un erede manageriale strutturato. Nel frattempo, i tassi di interesse normalizzati hanno chiuso l'era del debito a basso costo, moltiplicando la pressione sui ritorni.
          </p>
          <p>
            Il risultato: i fondi si trovano ad acquisire aziende eccellenti dal punto di vista operativo e del prodotto, ma costruite attorno a una singola figura — il fondatore — che accentra ogni decisione, ogni relazione chiave, ogni conoscenza tacita.
          </p>
          <p>
            Solo il 4,1% delle PMI italiane dispone di un C-suite con delega reale (fonte: AUB). Solo il 9% ha skill manageriali digitali adeguate alla governance istituzionale.
          </p>

          <h2 className="text-3xl mt-16 mb-8 text-ink border-b border-accent-soft pb-4">
            I tre archetipi del fallimento
          </h2>
          <p>
            Nell'analisi dei deal del mid-market italiano emergono tre pattern ricorrenti che bruciano cassa e distruggono l'IRR.
          </p>
          <ul className="list-disc pl-5 mt-4 mb-8 space-y-4">
            <li><strong>Il Bridge CEO.</strong> Nominato sotto la pressione del Day 1, questo leader di compromesso non ha né il mandato del fondatore né la legittimità del mercato. Diventa un segnaposto che ritarda la vera trasformazione consumando credibilità e tempo.</li>
            <li><strong>Il Rigetto dell'Innesto.</strong> Un manager esterno, solido e "Proven", viene proiettato in un'organizzazione che non ha preparato il terreno culturale. Il sistema immunitario della PMI reagisce: il reporting viene percepito come sorveglianza, la lealtà al fondatore prevale sul merito. Il turnover esplode — fino al 47% entro il primo anno post-acquisizione.</li>
            <li><strong>La Sindrome da Roll-Up.</strong> L'integrazione contabile precede quella umana. I fondatori delle aziende acquisite, privati dell'autonomia, innescano una fuga silenziosa dei talenti chiave. Oltre il 67% di queste strategie distrugge valore: il fondo resta con un conglomerato ingovernabile prima ancora che diventi invendibile.</li>
          </ul>

          <h2 className="text-3xl mt-16 mb-8 text-ink border-b border-accent-soft pb-4">
            I Red Flag che si vedono in due diligence — se si sa dove guardare
          </h2>
          <p>
            Esistono segnali precisi, rilevabili in fase pre-deal, che predicono con alta affidabilità le difficoltà post-closing:
          </p>
          <ul className="list-disc pl-5 mt-4 space-y-2">
            <li><strong>Dati opachi:</strong> resistenza sistematica alla condivisione di margini per linea di prodotto o dati di vendita disaggregati.</li>
            <li><strong>Accentramento assoluto:</strong> ogni decisione — anche operativa — richiede il visto del fondatore.</li>
            <li><strong>Organigramma per anzianità:</strong> la vicinanza familiare pesa più della competenza nelle promozioni.</li>
            <li><strong>Contabilità puramente fiscale:</strong> assenza di KPI storici, nessun sistema di reporting gestionale.</li>
            <li><strong>HR assente:</strong> la funzione è ridotta all'amministrazione del personale. Nessun employer branding, nessuna pipeline di talenti, nessun assessment strutturato dei key people.</li>
          </ul>
          <p className="mt-4">
            Nessuno di questi segnali è una sentenza. Tutti richiedono un piano di intervento — non ignoranza.
          </p>

          <h2 className="text-3xl mt-16 mb-8 text-ink border-b border-accent-soft pb-4">
            Il ciclo di vita dell'advisory: dall'origination all'exit
          </h2>
          <p>
            L'intervento sul capitale umano non è un evento puntuale. È un processo continuo che attraversa ogni fase del lifecycle dell'investimento.
          </p>
          <ul className="list-decimal pl-5 mt-4 space-y-4">
            <li><strong>Pre-Deal:</strong> Leadership Due Diligence con strumenti psicometrici calibrati sull'ecosistema PE — orientamento al risultato, resilienza operativa, agilità cognitiva. L'obiettivo è mappare chi può scalare, chi può essere affiancato e dove si nascondono i rischi di rigetto culturale.</li>
            <li><strong>Day 1–100:</strong> Inserimento del C-Suite PE-ready con mandato operativo definito. Cash-flow forecasting settimanale, normalizzazione EBITDA nel primo quarter, ristrutturazione del Board da organo notarile ad arena strategica.</li>
            <li><strong>Holding:</strong> Performance coaching per il passaggio dallo stile familiare a quello corporate. Implementazione di sistemi di performance management collegati al Value Creation Plan. Elevazione della funzione HR da ente burocratico a partner strategico.</li>
            <li><strong>Pre-Exit:</strong> Succession planning documentato, riduzione del key-person risk, de-personalizzazione dall'asset. La trasformazione in un'azienda Management-Independent può espandere il multiplo di exit di 1.0x–1.5x EBITDA — un premio documentato tra il 20% e il 40% sul valore d'impresa (McKinsey).</li>
          </ul>

          <h2 className="text-3xl mt-16 mb-8 text-ink border-b border-accent-soft pb-4">
            La conclusione che i numeri impongono
          </h2>
          <p>
            Il mercato PE italiano è maturo per una revisione strutturale del proprio approccio al capitale umano. Non per ragioni etiche o di employer branding. Per ragioni di IRR.
          </p>
          <p>
            Le organizzazioni con leadership allineata hanno il 70% di probabilità in più di completare con successo i piani di trasformazione (BCG). Il 30% dei CEO e l'80% dei CFO vengono sostituiti entro 18 mesi dal closing — un dato che rappresenta costi diretti, perdita di conoscenza tacita e rallentamento del piano industriale.
          </p>
          <p className="font-medium text-accent border-l-4 border-accent pl-4 italic mt-8">
            La domanda non è se investire nel capitale umano prima, durante e dopo l'acquisizione. La domanda è quanto vale, in punti di multiplo, farlo sistematicamente invece di rincorrere l'emergenza.
          </p>

        </article>

        <div className="mt-24 pt-16 border-t border-accent-soft">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-medium text-ink mb-4">
              Fonti & Riferimenti
            </h2>
            <p className="text-gray-500 font-light">
              Documentazione e insight di mercato utilizzati per l'elaborazione.
            </p>
          </div>
          
          <div className="flex flex-col gap-4">
            {[
              { title: "M&A Annual Report: Trends in 2025", author: "McKinsey & Company", year: "2025" },
              { title: "How the Drivers of PE Value Creation Are Changing", author: "EY", year: "2024" },
              { title: "Aziende Familiari Italiane, XVII Edizione", author: "Osservatorio AUB", year: "2024" },
              { title: "Leadership Alignment & Transformation Research", author: "BCG", year: "2023" },
              { title: "The Founder's Mentality", author: "Bain & Company", year: "2022" },
              { title: "Culture is Key in Private Equity Deals", author: "AlixPartners", year: "2022" },
              { title: "SCALE-100 Framework for CFOs", author: "Zone & Co / Accordion", year: "2023" }
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
