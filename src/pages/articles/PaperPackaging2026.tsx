import { ArrowLeft, Clock, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function PaperPackaging2026() {
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
            <span className="text-[9px] uppercase tracking-[0.4em] font-bold text-accent">#Paper & Packaging</span>
            <div className="h-4 w-[1px] bg-accent-soft" />
            <div className="flex items-center space-x-2 text-[10px] uppercase tracking-widest font-mono text-gray-400">
              <Clock size={12} />
              <span>Lettura 6 min</span>
            </div>
          </div>
          <h1 className="text-4xl md:text-6xl font-display font-medium leading-tight mb-8 text-ink">
            Paper & Packaging 2026:<br /> 
            <span className="italic text-accent">leggere la trasformazione</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-500 font-light leading-relaxed">
            Un'analisi delle dinamiche organizzative e delle priorità HR per il comparto Paper & Packaging attraverso la lente del capitale umano.
          </p>
        </header>

        <article className="prose prose-lg prose-headings:font-display prose-headings:font-medium text-gray-600 font-light leading-relaxed max-w-none">
          <p>
            Il 2026 si apre per il comparto Paper & Packaging in una condizione che merita di essere letta con qualche cautela in più rispetto al consueto. La narrazione del "settore in declino" non descrive più la realtà — o meglio, la descrive solo in parte. Se la carta grafica continua effettivamente a perdere terreno, il packaging vive una fase di espansione che pone interrogativi diversi: non come gestire la contrazione, ma come accompagnare una crescita che incontra vincoli normativi crescenti e una disponibilità di competenze tecniche sempre più sottile. È una distinzione che ha conseguenze concrete sulle scelte organizzative e sulle priorità HR.
          </p>

          <h2 className="text-3xl mt-16 mb-8 text-ink border-b border-accent-soft pb-4">
            Un'industria con luci nitide e ombre meno raccontate
          </h2>
          <p>
            L'industria italiana del packaging conserva alcuni primati che rischiamo di dare per scontati. Il tasso di riciclo CONAI vicino al 77%, la concentrazione di competenze meccaniche in distretti come la Packaging Valley emiliana o il polo cartario lucchese, una quota export del machinery che si attesta intorno all'80% — sono dati che raccontano un'eccellenza costruita in decenni. 
          </p>
          <p>
            Vale però la pena leggere accanto a questi numeri anche le tensioni meno visibili: i costi energetici che restano significativamente sopra i livelli pre-2021, la frammentazione di un tessuto produttivo in cui molte realtà sotto i 50 addetti faticano a sostenere investimenti in automazione, e una percezione del settore presso i giovani che non si è ancora aggiornata rispetto a ciò che il packaging è diventato.
          </p>
          <p>
            Sul versante delle dinamiche di mercato, la sostituzione della plastica con fibra cellulosica — la cosiddetta <em>paperization</em> — sta producendo effetti concreti sui volumi, supportata dalla domanda dell'e-commerce e da un food & beverage sempre più attento alla sostenibilità percepita. Allo stesso tempo, la sovracapacità globale, il consolidamento attraverso operazioni di M&A e l'evoluzione regolatoria europea introducono variabili che chiedono letture più sofisticate rispetto al passato.
          </p>

          <h2 className="text-3xl mt-16 mb-8 text-ink border-b border-accent-soft pb-4">
            Il PPWR come occasione di ridisegno organizzativo
          </h2>
          <p>
            Con l'entrata nella piena operatività del Regolamento PPWR e della Direttiva Green Claims, molte aziende stanno scoprendo che la compliance non è solo un tema legale, ma un'occasione per ridisegnare ruoli e responsabilità. Stanno emergendo profili che fino a pochi anni fa non esistevano nelle organizzazioni:
          </p>
          <ul className="list-disc pl-5 mt-4 mb-8 space-y-4">
            <li><strong>Il Packaging Compliance Manager:</strong> figura ibrida che dialoga con legale, R&D e operations.</li>
            <li><strong>Specialisti del Passaporto Digitale del Prodotto:</strong> chiamati a strutturare flussi informativi lungo l'intera filiera.</li>
            <li><strong>L'EPR Compliance Manager:</strong> che presidia la responsabilità di fine vita.</li>
            <li><strong>Il Sustainable Packaging Designer:</strong> con competenze sui biopolimeri.</li>
            <li><strong>L'LCA Specialist:</strong> focalizzato sull'analisi del ciclo di vita.</li>
          </ul>
          <p>
            La domanda interessante, da una prospettiva HR, non è tanto "come trovare queste persone" — perché spesso non esistono ancora sul mercato — quanto "come costruirle internamente, partendo da quali profili adiacenti". È una conversazione che richiede tempo e che si svolge meglio in sede di workforce planning che in fase di selezione urgente.
          </p>

          <h2 className="text-3xl mt-16 mb-8 text-ink border-b border-accent-soft pb-4">
            I numeri che meritano attenzione
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-8">
            <div className="p-6 border border-accent-soft rounded">
              <h4 className="text-2xl font-display text-accent mb-2">60%</h4>
              <p className="text-sm">dei label converters segnala difficoltà nel reperire operatori adeguatamente formati.</p>
            </div>
            <div className="p-6 border border-accent-soft rounded">
              <h4 className="text-2xl font-display text-accent mb-2">65%</h4>
              <p className="text-sm">delle aziende ha completato upgrades significativi in chiave robotica negli ultimi 18 mesi.</p>
            </div>
            <div className="p-6 border border-accent-soft rounded">
              <h4 className="text-2xl font-display text-accent mb-2">10-18%</h4>
              <p className="text-sm">l'incremento retributivo annuo sui ruoli tecnici critici e profili compliance.</p>
            </div>
            <div className="p-6 border border-accent-soft rounded">
              <h4 className="text-2xl font-display text-accent mb-2">€13.9 Mld</h4>
              <p className="text-sm">il valore proiettato per il mercato italiano del paper-based packaging entro il 2033.</p>
            </div>
          </div>
          <p>
            C'è però un dato che, nelle nostre conversazioni con i clienti, sta diventando sempre più centrale: circa metà della popolazione boomer è prossima all'uscita. Il rischio non è solo quantitativo, ma qualitativo — riguarda quel know-how tacito, accumulato in decenni di pratica, che nessuna procedura formalizzata cattura davvero. La gestione di questa transizione generazionale è probabilmente la sfida HR più sottovalutata del momento.
          </p>

          <h2 className="text-3xl mt-16 mb-8 text-ink border-b border-accent-soft pb-4">
            L'operatore di produzione: una figura in evoluzione silenziosa
          </h2>
          <p>
            Una delle trasformazioni più interessanti — e meno visibili dall'esterno — riguarda il ruolo operativo. Si sta passando, in tempi relativamente rapidi, dal profilo tradizionale fatto di manualità e setup lunghi al cosiddetto <em>digital native</em> uscito dagli ITS, abituato a interfacce HMI touch e con nozioni base di coding.
          </p>
          <p>
            Da lì si arriva all'All-in-One Operator, capace di coordinare stampa digitale, flexo e fustellatura in linea, fino al Process Leader dedicato a supervisione remota, analisi OEE e manutenzione predittiva. Sono percorsi che si articolano tipicamente su uno o due anni di sviluppo strutturato. Affrontarli senza una pipeline formativa pensata in anticipo significa subirli.
          </p>

          <h2 className="text-3xl mt-16 mb-8 text-ink border-b border-accent-soft pb-4">
            Il rinnovo del CCNL: una variabile da monitorare
          </h2>
          <p>
            A gennaio 2026 il rinnovo del CCNL Carta e Cartotecnica, scaduto a fine 2024, resta in una fase di stallo. Le richieste sindacali si concentrano su aumenti tabellari nell'ordine dei 200-250 euro mensili, formazione continua obbligatoria, maggiori tutele per il lavoro precario e potenziamento del welfare contrattuale. 
          </p>
          <p>
            Le posizioni datoriali richiamano i costi energetici e la pressione competitiva, orientandosi verso premi legati alla produttività e maggiore flessibilità oraria. Per dare un ordine di grandezza, una cartotecnica con 50 dipendenti potrebbe vedere impatti di costo nell'intervallo dei 120-150 mila euro annui. Lo scenario realistico è quello di una conflittualità in aumento nel primo trimestre, con possibili accordi aziendali individuali nelle realtà più marginali. Per le funzioni HR significa, banalmente, dotarsi per tempo di scenari alternativi.
          </p>

          <h2 className="text-3xl mt-16 mb-8 text-ink border-b border-accent-soft pb-4">
            Alcune riflessioni sulle priorità HR del 2026
          </h2>
          <p>Da queste dinamiche emergono alcune direzioni che, nelle conversazioni con i nostri clienti, stanno mostrando maggiore traction:</p>
          <ul className="list-decimal pl-5 mt-4 space-y-4">
            <li>
              <strong>L'orizzonte temporale:</strong> Il modello "stop and replace" — esco un profilo, ne cerco uno equivalente sul mercato — sta diventando progressivamente meno sostenibile. Serve uno Strategic Workforce Planning su orizzonte triennale, che integri scenari produttivi, demografia interna e dinamiche di filiera.
            </li>
            <li>
              <strong>La narrazione:</strong> Il settore continua a soffrire di una percezione che non corrisponde più alla realtà degli ambienti produttivi più avanzati. Aziende come Fedrigoni o Sofidel hanno dimostrato che è possibile costruire un employer branding credibile attorno alle dimensioni high-tech e green del packaging.
            </li>
            <li>
              <strong>La pipeline di ingresso:</strong> Gli ITS — in particolare ITS Maker e ITS Nuove Tecnologie della Vita — si stanno rivelando un canale prezioso per profili pronti all'inserimento. Costruire relazioni stabili con questi enti sta diventando un vantaggio competitivo concreto.
            </li>
            <li>
              <strong>L'ergonomia organizzativa:</strong> Il modello Human-Centric Manufacturing — che automatizza i compiti gravosi e ripensa gli ambienti in chiave più pulita, climatizzata, sicura — è una leva di attrattività significativa per ampliare la base di reclutamento.
            </li>
            <li>
              <strong>Welfare personalizzato:</strong> In un contesto di pressione inflattiva sulle retribuzioni, il welfare strutturato (sanità integrativa, flessibilità, genitorialità) sta dimostrando un impatto sulla retention superiore alle aspettative.
            </li>
          </ul>

          <h2 className="text-3xl mt-16 mb-8 text-ink border-b border-accent-soft pb-4">
            Aree dove la specializzazione conta più della generalità
          </h2>
          <p>
            Tre ambiti meritano un'attenzione specifica perché concentrano una parte sproporzionata della complessità tecnica:
          </p>
          <ul className="list-disc pl-5 mt-4 space-y-2">
            <li><strong>Materiali a Contatto con Alimenti (MOCA):</strong> dove l'aumento dei contenuti riciclati introduce nuovi rischi (es. oli minerali) richiedendo laboratori e competenze analitiche di livello.</li>
            <li><strong>Le etichette intelligenti (RFID, NFC, QR dinamici):</strong> che stanno portando competenze IT in segmenti, come il vino e il lusso, dove fino a poco fa erano periferiche.</li>
            <li><strong>La compliance EPR:</strong> che sta trasformando le funzioni acquisti in vere e proprie strutture di Supply Chain Risk Management, con responsabilità sulla tracciabilità etica e ambientale.</li>
          </ul>

          <h2 className="text-3xl mt-16 mb-8 text-ink border-b border-accent-soft pb-4">
            In sintesi
          </h2>
          <p>
            Il 2026 non si presenta come un anno di gestione ordinaria, ma neanche come un'emergenza generalizzata. È piuttosto un anno in cui le scelte organizzative fatte oggi avranno effetti visibili tra diciotto e trentasei mesi. 
          </p>
          <p>
            La divergenza tra carta grafica e packaging chiede strategie di riconversione mirate; il gap retributivo con Germania e Paesi Bassi su alcuni profili invita a ripensare i modelli retributivi senza attendere forzature dai candidati; la competizione sui ruoli ibridi si gioca sull'intersezione tra tecnologia, narrazione e welfare.
          </p>
          <p className="font-medium text-accent border-l-4 border-accent pl-4 italic mt-8">
            Le aziende che stanno affrontando meglio questa fase non sono necessariamente le più grandi, ma quelle che hanno smesso di leggere la trasformazione come un problema di reclutamento e hanno iniziato a leggerla come un tema di disegno organizzativo. È una distinzione sottile ma, sul medio periodo, fa la differenza.
          </p>

        </article>

        <div className="mt-24 pt-16 border-t border-accent-soft">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-medium text-ink mb-4">
              Fonti & Riferimenti
            </h2>
            <p className="text-gray-500 font-light">
              Documentazione utilizzata per l'elaborazione di questo dashboard strategico (Paper & Packaging 2026).
            </p>
          </div>
          
          <div className="flex flex-col gap-4">
            {[
              { title: "Orizzonte 2026: Strategie di Capitale Umano nella Filiera Paper & Packaging", author: "Human Value Internal Analysis", year: "2026" },
              { title: "2026 Packaging Trends - Expert Predictions", author: "GWP Group / LinkedIn Pulse", year: "2026" },
              { title: "What's Hot: Trends Driving Packaging Industry 2026", author: "BradyPLUS Blog", year: "2026" },
              { title: "CCNL Carta e Cartotecnica: Comunicati Rinnovo", author: "Assocarta / SLC-CGIL / UILCOM", year: "2026" },
              { title: "PPWR & Green Claims Directive Impact Analysis", author: "European Commission / Deloitte", year: "2025" },
              { title: "Report Attività 2024: Settore Imballaggi", author: "Gifco / CONAI", year: "2025" },
              { title: "Employment Impacts of AI in Manufacturing", author: "Brookings Institution", year: "2025" }
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
