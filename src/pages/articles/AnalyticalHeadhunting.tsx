import { motion } from 'motion/react';
import { ArrowLeft, Clock, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import React from 'react';
import ReadingProgress from '../../components/ReadingProgress';

export default function AnalyticalHeadhunting() {
  const { t, i18n } = useTranslation();
  const isEn = i18n.language === 'en';

  return (
    <div className="py-24 md:py-48 bg-paper">
      <ReadingProgress />
      <div className="max-w-4xl mx-auto px-6">
        <Link 
          to="/metodo"
          className="inline-flex items-center space-x-2 text-[10px] uppercase tracking-widest font-bold text-accent hover:text-ink transition-colors mb-16"
        >
          <ArrowLeft size={14} />
          <span>{isEn ? 'Back to Methodology' : 'Torna alla Metodologia'}</span>
        </Link>
        
        <header className="mb-24">
          <div className="flex items-center space-x-4 mb-8">
            <span className="text-[9px] uppercase tracking-[0.4em] font-bold text-accent">#HeadhuntingAnalitico</span>
            <div className="h-4 w-[1px] bg-accent-soft" />
            <div className="flex items-center space-x-2 text-[10px] uppercase tracking-widest font-mono text-gray-400">
              <Clock size={12} />
              <span>{isEn ? '4 min read' : 'Lettura 4 min'}</span>
            </div>
          </div>
          <h1 className="text-4xl md:text-6xl font-display font-medium leading-tight mb-8 break-words">
            {isEn ? (
              <>Before the candidates, <span className="italic text-accent">the market.</span></>
            ) : (
              <>Prima dei candidati, <span className="italic text-accent">il mercato.</span></>
            )}
          </h1>
          <p className="text-xl md:text-2xl text-gray-500 font-light leading-relaxed">
            {isEn ? 'Every search project for senior professionals is born from a structured reading of the ecosystem in which the sought figure operates. Before opening the search, we build a strategic map of the reference market — a working tool shared with the client, not an internal exercise in our methodology.' : 'Ogni progetto di ricerca di profili senior nasce da una lettura strutturata dell\'ecosistema in cui opera la figura ricercata. Prima di aprire la ricerca, costruiamo una mappa strategica del mercato di riferimento — uno strumento di lavoro condiviso con il cliente, non un esercizio interno alla nostra metodologia.'}
          </p>
        </header>

        {isEn ? (
          <article className="prose prose-lg prose-headings:font-display prose-headings:font-medium text-gray-600 font-light leading-relaxed max-w-none">
            <h2 className="text-3xl mt-16 mb-8 text-ink">How our mapping works</h2>
            <p>
              At the launch of each assignment, we develop an analytical target list: a reasoned representation of the market that enables us to identify the most suitable profiles within the most relevant organizations, well before initiating first contact.
            </p>
            <p className="font-medium text-ink mb-6">Each mapping is structured across four dimensions:</p>
            
            <ul className="space-y-6 list-none pl-0">
              <li className="flex gap-4">
                <span className="text-accent font-display font-bold text-xl">1</span>
                <div>
                  <strong className="text-ink">Strategic clusters</strong> — We organize potentially relevant companies by production chain, business model, and competitive proximity to the client. The clustering logic varies depending on the sector and role: in some contexts product affinities prevail, in others channel affinities, and in others technical or regulatory expertise.
                </div>
              </li>
              <li className="flex gap-4">
                <span className="text-accent font-display font-bold text-xl">2</span>
                <div>
                  <strong className="text-ink">Geographic perimeter</strong> — We define sourcing areas in alignment with company headquarters, the operational model of the role (field-based, hybrid, on-site), and realistic talent mobility pools for the target seniority.
                </div>
              </li>
              <li className="flex gap-4">
                <span className="text-accent font-display font-bold text-xl">3</span>
                <div>
                  <strong className="text-ink">Target profiles</strong> — We select the figures most coherent with the mandate's mission, including adjacent roles from which transferable skills can be attracted. The definition of the perimeter is never limited to just the requested job title.
                </div>
              </li>
              <li className="flex gap-4">
                <span className="text-accent font-display font-bold text-xl">4</span>
                <div>
                  <strong className="text-ink">Screening criteria</strong> — We establish ex-ante the indicators we will use to qualify candidates: scope of managed responsibilities, familiarity with relevant regulatory frameworks, and a measurable track record on priority KPIs for the role.
                </div>
              </li>
            </ul>

            <h2 className="text-3xl mt-16 mb-8 text-ink">A concrete example</h2>
            <p>
              To illustrate our method in practice, we share an anonymized example of mapping carried out on a recent assignment:
            </p>
            <blockquote className="border-l-2 border-accent pl-6 italic my-8">
              In a project within the Manufacturing sector, we built a target list of 45 companies, organized across 3 strategic clusters and 2 priority geographic areas. Scouting covered profiles with background in Operations & Supply Chain, with a benchmark compensation range between €80k and €110k + variable component.
            </blockquote>
            <p>
              Each assignment generates a dedicated mapping. The complete version — with clusters, identified companies, selection criteria, and prioritization logic — is shared with the client as an operational tool throughout the duration of the project.
            </p>

            <h2 className="text-3xl mt-16 mb-8 text-ink">Scouting priority allocation logic</h2>
            <p>
              Mapping does not distribute resources evenly: it defines where to concentrate search efforts and where to maintain a more exploratory coverage. Allocation follows three principles.
            </p>
            <ul className="space-y-4 list-disc pl-5">
              <li>
                <strong className="text-ink">Direct skill transferability.</strong> Companies where the role's skills are most immediately transferable receive top scouting priority. This typically represents the core focus, around 40–50% of the overall effort.
              </li>
              <li>
                <strong className="text-ink">Strategic adjacencies.</strong> A significant share, approximately 20–30%, is allocated to adjacent sectors with profiles possessing key competencies for the role, even if originating from a different supply chain. It is often from these areas that the most interesting candidates emerge in terms of fresh perspective.
              </li>
              <li>
                <strong className="text-ink">Targeted exploration.</strong> The remaining portion is reserved for less obvious but relevant contexts for the client — such as client companies, suppliers, or industrial partners in the destination sector — where profiles with complementary vision and established relationships can emerge.
              </li>
            </ul>
            <p>
              This distribution is redefined for each mandate, because every client possesses a distinct commercial strategy, competitive positioning, and organizational culture.
            </p>

            <h2 className="text-3xl mt-16 mb-8 text-ink">The key points we define together, before starting</h2>
            <p>
              Before launching the search, we address several questions with the client that are often taken for granted, but are decisive for project success:
            </p>
            <ul className="space-y-2 list-disc pl-5 font-medium text-ink">
              <li>Who does the sought figure report to, and who are their key internal stakeholders?</li>
              <li>What commercial or operational model supports the role (direct sales, distributors, agents, industrial partners)?</li>
              <li>Are there companies from which it is not appropriate to recruit, due to client relationships, partnerships, or reputation?</li>
              <li>What is the margin of flexibility on the compensation package compared to market benchmarks?</li>
              <li>Which skills is the client willing to develop internally over time, and which are non-negotiable prerequisites at the time of hiring?</li>
            </ul>
            <p className="mt-6">
              These questions do not slow down the project: they make it significantly more precise and reduce the risk of misalignment in the final stages, when second thoughts are far more costly to manage — for both client and candidate.
            </p>
          </article>
        ) : (
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
        )}
      </div>

      <div className="bg-ink text-paper py-24 px-6 mt-24">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-display font-medium text-white mb-8">
            {isEn ? 'Want to see how we map the market for your next mandate?' : 'Vuoi vedere come mappiamo il mercato per il tuo prossimo mandato?'}
          </h2>
          <p className="text-xl text-gray-400 font-light leading-relaxed mb-12">
            {isEn ? 'Every project begins with a strategic briefing session: a discussion where we define together the scope of the search, scouting priorities, and evaluation criteria. It is the first step to building a mapping that is truly useful for decision-making.' : 'Ogni progetto inizia con una sessione di briefing strategico: un confronto in cui definiamo insieme il perimetro della ricerca, le priorità di scouting e i criteri di valutazione. È il primo passo per costruire una mappatura realmente utile alla decisione.'}
          </p>
          <Link 
            to="/contatti"
            className="inline-block px-8 py-4 bg-accent text-ink text-sm font-bold tracking-widest uppercase hover:bg-white transition-colors"
          >
            {isEn ? 'Request a strategic briefing' : 'Richiedi un briefing strategico'}
          </Link>
        </div>
      </div>
    </div>
  );
}
