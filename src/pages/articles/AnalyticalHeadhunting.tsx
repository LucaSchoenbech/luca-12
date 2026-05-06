import { motion } from 'motion/react';
import { ArrowLeft, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function AnalyticalHeadhunting() {
  return (
    <div className="py-24 md:py-48">
      <div className="max-w-4xl mx-auto px-6">
        <Link 
          to="/metodo"
          className="inline-flex items-center space-x-2 text-[10px] uppercase tracking-widest font-bold text-accent hover:text-ink transition-colors mb-16"
        >
          <ArrowLeft size={14} />
          <span>Torna alla Metodologia</span>
        </Link>
        
        <header className="mb-24">
          <div className="flex items-center space-x-4 mb-8">
            <span className="text-[9px] uppercase tracking-[0.4em] font-bold text-accent">#HeadhuntingAnalitico</span>
            <div className="h-4 w-[1px] bg-accent-soft" />
            <div className="flex items-center space-x-2 text-[10px] uppercase tracking-widest font-mono text-gray-400">
              <Clock size={12} />
              <span>Lettura 4 min</span>
            </div>
          </div>
          <h1 className="text-4xl md:text-6xl font-display font-medium leading-tight mb-8">
            Prima dei candidati, <span className="italic text-accent">il mercato.</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-500 font-light leading-relaxed">
            Ogni progetto di executive search nasce da una lettura strutturata dell'ecosistema in cui opera la figura ricercata. Prima di aprire la ricerca, costruiamo una mappa strategica del mercato di riferimento — uno strumento di lavoro condiviso con il cliente, non un esercizio interno alla nostra metodologia.
          </p>
        </header>

        <article className="prose prose-lg prose-headings:font-display prose-headings:font-medium text-gray-600 font-light leading-relaxed max-w-none">
          
          <h2 className="text-3xl mt-16 mb-8 text-ink">Come funziona la nostra mappatura</h2>
          <p>
            All'avvio di ogni mandato sviluppiamo una target list analitica: una rappresentazione ragionata del mercato che ci consente di identificare i profili più coerenti nelle aziende più rilevanti, prima ancora di avviare il primo contatto.
          </p>
          <p className="font-medium text-ink mb-6">Ogni mappatura si articola su quattro dimensioni:</p>
          
          <ul className="space-y-6 list-none pl-0">
            <li className="flex gap-4">
              <span className="text-accent font-display font-bold text-xl">1</span>
              <div>
                <strong className="text-ink">Cluster strategici</strong> — Organizziamo le aziende potenzialmente di interesse per filiera produttiva, modello di business e prossimità competitiva al cliente. La logica di clusterizzazione varia in funzione del settore e del ruolo: in alcuni contesti prevalgono affinità di prodotto, in altri di canale, in altri ancora di competenza tecnica o regolatoria.
              </div>
            </li>
            <li className="flex gap-4">
              <span className="text-accent font-display font-bold text-xl">2</span>
              <div>
                <strong className="text-ink">Perimetro geografico</strong> — Definiamo le aree di sourcing in coerenza con la sede aziendale, con il modello operativo del ruolo (field-based, ibrido, in sede) e con i bacini di mobilità realistici per la seniority target.
              </div>
            </li>
            <li className="flex gap-4">
              <span className="text-accent font-display font-bold text-xl">3</span>
              <div>
                <strong className="text-ink">Profili target</strong> — Selezioniamo le figure più coerenti con la mission del mandato, includendo i ruoli adiacenti dai quali è possibile attrarre competenze trasferibili. La definizione del perimetro non si limita mai al solo titolo ricercato.
              </div>
            </li>
            <li className="flex gap-4">
              <span className="text-accent font-display font-bold text-xl">4</span>
              <div>
                <strong className="text-ink">Criteri di screening</strong> — Stabiliamo ex ante gli indicatori che useremo per qualificare i candidati: dimensione delle responsabilità gestite, familiarità con i framework normativi e regolatori rilevanti, track record misurabile sui KPI prioritari per il ruolo.
              </div>
            </li>
          </ul>

          <h2 className="text-3xl mt-16 mb-8 text-ink">Un esempio concreto</h2>
          <p>
            Per dare concretezza al metodo, condividiamo un esempio anonimizzato di mappatura realizzata su un mandato recente:
          </p>
          <blockquote className="border-l-2 border-accent pl-6 italic my-8">
            In un progetto nel settore Manufacturing, abbiamo costruito una target list di 45 aziende, organizzate in 3 cluster strategici e 2 aree geografiche prioritarie. Lo scouting ha coperto profili con esperienza in Operations & Supply Chain, con un range retributivo di riferimento tra 80 e 110 K + componente variabile.
          </blockquote>
          <p>
            Ogni mandato genera una mappatura dedicata. La versione completa — con cluster, aziende identificate, criteri di selezione e logica di prioritizzazione — viene condivisa con il cliente come strumento di lavoro durante tutta la durata del progetto.
          </p>

          <h2 className="text-3xl mt-16 mb-8 text-ink">Logica di allocazione delle priorità di scouting</h2>
          <p>
            La mappatura non distribuisce le risorse in modo uniforme: definisce dove concentrare lo sforzo di ricerca e dove mantenere una copertura più esplorativa. L'allocazione segue tre principi.
          </p>
          <ul className="space-y-4 list-disc pl-5">
            <li>
              <strong className="text-ink">Trasferibilità diretta delle competenze.</strong> Le aziende dove le competenze del ruolo sono più immediatamente trasferibili ricevono la massima priorità di scouting. Si tratta tipicamente del nucleo più alto di copertura, intorno al 40–50% dello sforzo complessivo.
            </li>
            <li>
              <strong className="text-ink">Adiacenze strategiche.</strong> Una quota significativa, indicativamente il 20–30%, viene destinata a settori adiacenti nei quali esistono profili con competenze chiave per il ruolo, anche se provenienti da una filiera diversa. È spesso da queste aree che emergono i candidati più interessanti in termini di apporto di prospettiva.
            </li>
            <li>
              <strong className="text-ink">Esplorazione mirata.</strong> La parte residuale viene riservata a contesti meno ovvi ma rilevanti per il cliente — ad esempio aziende clienti, fornitori o partner industriali del settore di destinazione — dove possono emergere profili con visione complementare e relazioni già consolidate.
            </li>
          </ul>
          <p>
            Questa ripartizione viene ridefinita per ogni mandato, perché ogni cliente ha una strategia commerciale, un posizionamento competitivo e una cultura organizzativa diversi.
          </p>

          <h2 className="text-3xl mt-16 mb-8 text-ink">I punti che definiamo insieme, prima di partire</h2>
          <p>
            Prima di avviare la ricerca, affrontiamo con il cliente alcune domande spesso date per scontate, ma decisive per la riuscita del progetto:
          </p>
          <ul className="space-y-2 list-disc pl-5 font-medium text-ink">
            <li>A chi riporta la figura cercata e quali sono i suoi principali interlocutori interni?</li>
            <li>Quale modello commerciale o operativo sostiene il ruolo (vendita diretta, distributori, agenti, partner industriali)?</li>
            <li>Esistono aziende dalle quali non è opportuno attrarre profili, per ragioni di clientela, partnership o reputazione?</li>
            <li>Quale è il margine di flessibilità sulla proposta retributiva rispetto ai benchmark di mercato?</li>
            <li>Quali competenze il cliente è disposto a costruire internamente nel tempo, e quali sono invece prerequisiti non negoziabili al momento dell'ingresso?</li>
          </ul>
          <p className="mt-6">
            Queste domande non rallentano il progetto: lo rendono più preciso e riducono in modo significativo il rischio di disallineamento nelle fasi finali, quando un eventuale ripensamento è più oneroso da gestire — sia per il cliente, sia per il candidato.
          </p>
        </article>
      </div>

      <div className="bg-ink text-paper py-24 px-6 mt-24">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-display font-medium text-white mb-8">
            Vuoi vedere come mappiamo il mercato per il tuo prossimo mandato?
          </h2>
          <p className="text-xl text-gray-400 font-light leading-relaxed mb-12">
            Ogni progetto inizia con una sessione di briefing strategico: un confronto in cui definiamo insieme il perimetro della ricerca, le priorità di scouting e i criteri di valutazione. È il primo passo per costruire una mappatura realmente utile alla decisione.
          </p>
          <Link 
            to="/contatti"
            className="inline-block px-8 py-4 bg-accent text-ink text-sm font-bold tracking-widest uppercase hover:bg-white transition-colors"
          >
            Richiedi un briefing strategico
          </Link>
        </div>
      </div>
    </div>
  );
}
