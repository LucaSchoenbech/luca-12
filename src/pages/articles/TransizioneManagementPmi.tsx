import { motion } from 'motion/react';
import { ArrowLeft, Clock, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import React from 'react';
import ReadingProgress from '../../components/ReadingProgress';

export default function TransizioneManagementPmi() {
  const { t, i18n } = useTranslation();
  const isEn = i18n.language === 'en';

  return (
    <div className="py-24 md:py-48 bg-paper">
      <ReadingProgress />
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
            <span className="text-[9px] uppercase tracking-[0.4em] font-bold text-accent">#PMI</span>
            <div className="h-4 w-[1px] bg-accent-soft" />
            <div className="flex items-center space-x-2 text-[10px] uppercase tracking-widest font-mono text-gray-400">
              <Clock size={12} />
              <span>{isEn ? '5 min read' : 'Lettura 5 min'}</span>
            </div>
          </div>
          <h1 className="text-4xl md:text-6xl font-display font-medium leading-tight mb-8">
            {isEn ? (
              <>Guiding the transition of <br /><span className="italic text-accent">Historical Management.</span></>
            ) : (
              <>Guidare la transizione del <br /><span className="italic text-accent">Management Storico.</span></>
            )}
          </h1>
          <p className="text-xl md:text-2xl text-gray-500 font-light leading-relaxed">
            {isEn ? 'Accelerating the evolution of Italian SMEs, overcoming the paradox of managerial loyalty.' : 'Accelerare l\'evoluzione delle PMI italiane, superando il paradosso della lealtà manageriale.'}
          </p>
        </header>

        {isEn ? (
          <article className="prose prose-lg prose-headings:font-display prose-headings:font-medium text-gray-600 font-light leading-relaxed max-w-none">
            <div className="bg-ink text-paper p-8 md:p-12 mb-16 border-l-4 border-accent">
              <h3 className="text-[10px] uppercase tracking-[0.3em] font-bold text-accent mb-8 mt-0">Executive Summary</h3>
              <div className="space-y-6 text-base font-light">
                <div>
                  <strong className="block text-white mb-1">1. The Problem — The Loyalty Paradox</strong>
                  73% of scaling Italian SMEs retain "historic" managers in critical roles despite a growing skill gap. The Peter Principle: those who helped build the company often lack the skills to scale it, but loyalty obstructs renewal.
                </div>
                <div>
                  <strong className="block text-white mb-1">2. The Impact — 7 Absent Skill Domains</strong>
                  Data-driven decision making, digital transformation, structured people management, strategic planning, operational excellence, advanced financial literacy, and change management. Each gap costs an average of 15-30% in operational efficiency.
                </div>
                <div>
                  <strong className="block text-white mb-1">3. Risk Signals — When to Intervene</strong>
                  "Gut feeling" decisions, resistance to processes, high turnover among junior talent. 68% of generational transitions fail for this reason.
                </div>
                <div>
                  <strong className="block text-white mb-1">4. Implications for the Entrepreneur</strong>
                  Enterprise valuations discounted by 20-40% in M&A, flight of serious PE funds, stalling growth.
                </div>
                <div>
                  <strong className="block text-white mb-1">5. Priority Actions</strong>
                  Competency mapping (now), transition plan (within 3 months), implementation of objective KPIs and contractual clauses (within 12 months).
                </div>
              </div>
            </div>

            <h2 className="text-3xl mt-16 mb-8 text-ink">1. The Loyalty Paradox</h2>
            <p>
              When an SME grows from 30 to 150 employees, it undergoes an organizational metamorphosis that requires radically different skillsets. The manager who successfully led a team of 20 people finds themselves, through the Peter Principle, promoted beyond their level of competence.
            </p>
            <p>
              The Palo Alto School (Watzlawick) teaches us that the system — the company, the family, the manager themselves — mounts systemic resistance to change: a homeostatic mechanism that stalls evolution precisely when it is most urgently needed.
            </p>
            <blockquote className="border-l-2 border-accent pl-6 italic text-xl my-8">
              The historic manager, nurtured "inside" the company, has forged a symbiotic relationship with the founder. This relationship turns into a "golden cage" that bars the injection of fresh skills. Loyalty, paradoxically, becomes the most hazardous brake.
            </blockquote>
            <ul className="list-disc pl-5 mt-4 mb-12 space-y-2">
              <li>60% of SMEs report inadequate managerial skills for VUCA environments.</li>
              <li>Northern Italy's industrial fabric exhibits chronic friction when confronting this transition.</li>
              <li>Only 9% of SMEs possess an adequate level of advanced digital skills.</li>
            </ul>

            <h2 className="text-3xl mt-16 mb-8 text-ink">2. Mapping the Competency Deficit</h2>
            <div className="overflow-x-auto mb-12">
              <table className="min-w-full text-left text-base border-collapse">
                <thead>
                  <tr className="border-b border-accent-soft text-ink">
                    <th className="py-4 pr-4 font-medium w-1/4">Domain</th>
                    <th className="py-4 px-4 font-medium w-1/3">Deficit</th>
                    <th className="py-4 pl-4 font-medium">Impact of the Historic Manager</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  <tr>
                    <td className="py-4 pr-4 font-medium text-ink">Vision & Strategy</td>
                    <td className="py-4 px-4">Absence of long-term vision; no business planning for complex scenarios</td>
                    <td className="py-4 pl-4">Hyper-operationalism ("firefighting"). Market opportunities are missed.</td>
                  </tr>
                  <tr>
                    <td className="py-4 pr-4 font-medium text-ink">Leadership & Change Management</td>
                    <td className="py-4 px-4">Difficulty leading cultural and operational transformations</td>
                    <td className="py-4 pl-4">Passive-aggressive resistance to innovation. Mistrust toward newcomers.</td>
                  </tr>
                  <tr>
                    <td className="py-4 pr-4 font-medium text-ink">People Management</td>
                    <td className="py-4 px-4">Lack of structured HR frameworks and delegation</td>
                    <td className="py-4 pl-4">Stifling micromanagement. Talent flight.</td>
                  </tr>
                  <tr>
                    <td className="py-4 pr-4 font-medium text-ink">Digital Skills</td>
                    <td className="py-4 px-4">Only 9% have adequate competency (Data, AI, etc.)</td>
                    <td className="py-4 pl-4">Rejection of tech tools. Data analysis ignored in favor of "gut feelings".</td>
                  </tr>
                  <tr>
                    <td className="py-4 pr-4 font-medium text-ink">Enterprise Systems</td>
                    <td className="py-4 px-4">ERP 42.2%, CRM 19.2%, BI 14.3%</td>
                    <td className="py-4 pl-4">Information silos: fragmented records and zero scalability.</td>
                  </tr>
                  <tr>
                    <td className="py-4 pr-4 font-medium text-ink">Sustainability (ESG)</td>
                    <td className="py-4 px-4">Inability to embed Environmental and Social criteria</td>
                    <td className="py-4 pl-4">Viewed as mere "red tape". Precludes access to institutional capital.</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-3xl mt-16 mb-8 text-ink">3. The Kamikaze Effect in Family Businesses</h2>
            <p>
              The historic manager regarded as "one of the family" guaranteed decades of continuity, but often acts today as a barrier to the rise of the next generation. A textbook case: a business founded in the 1990s with declining revenue due to commercial obsolescence, where the younger generation proposes e-commerce and digital channels, only for the historic manager to dismiss them as "frivolities."
            </p>
            <p>
              As a result, the enterprise risks withering around its "historic praetorians." The intangible capital of relationships and institutional knowledge erodes. Perceived instability undermines the trust of suppliers and banking partners.
            </p>
            
            <div className="bg-paper border border-accent-soft p-8 my-10">
              <h4 className="text-[10px] uppercase tracking-[0.2em] font-bold text-accent mb-6">Watch out for these 15 risk signals:</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 text-sm">
                <ul className="list-disc pl-4 space-y-2">
                  <li>Decisions grounded in "intuition" without KPIs</li>
                  <li>Resistance to structured processes</li>
                  <li>Elevated turnover among junior talent</li>
                  <li>The "we've always done it this way" syndrome</li>
                  <li>Inability to delegate operational tasks</li>
                  <li>Information gatekeeping (non-transparent data)</li>
                  <li>Obsessive focus on firefighting</li>
                  <li>Absence of a 3-5 year business plan</li>
                </ul>
                <ul className="list-disc pl-4 space-y-2">
                  <li>Uncodified workflows</li>
                  <li>Clients monopolized by single individuals</li>
                  <li>Aversion to M&A or strategic alliances</li>
                  <li>Deep skepticism toward external managers</li>
                  <li>Rejection of formal executive training</li>
                  <li>No objective appraisal system</li>
                  <li>Inability to plan generational handover</li>
                </ul>
              </div>
            </div>

            <h2 className="text-3xl mt-16 mb-8 text-ink">4. The Hurdle for Private Equity Funds</h2>
            <p>
              Today's funds demand transparency, delegation to middle management, accountability, and real-time reporting. The historic manager, accustomed to high-stakes contracts based on handshakes, becomes incompatible in this modern ecosystem where over 75% of value creation stems from operational excellence and digital transformation. In fact, 54% of premature CEO and executive departures in fund portfolio companies occur specifically due to this disconnect.
            </p>

            <h2 className="text-3xl mt-16 mb-8 text-ink">5. Contractual Engineering</h2>
            <p>
              Legal mechanisms to navigate this transition align the interests of outgoing leadership with the long-term financial health of the business:
            </p>
            <ul className="list-disc pl-5 mt-4 space-y-4">
              <li><strong>Good/Bad Leaver:</strong> Differentiate severance based on the nature of the separation.</li>
              <li><strong>Earn-Out:</strong> Link final consideration to the attainment of milestone targets (KPIs, EBITDA).</li>
              <li><strong>Non-Compete Covenants:</strong> Geographic and temporal restrictions to safeguard know-how.</li>
              <li><strong>Structured Governance:</strong> Architectures that distribute authority (Committees, Advisory Boards).</li>
            </ul>

            <h2 className="text-3xl mt-16 mb-8 text-ink">6. The Modern Entrepreneur's Toolkit</h2>
            <p>
              To avoid stalemate or talent attrition, the entrepreneur should execute four immediate operational actions:
            </p>
            <ol className="list-decimal pl-5 mt-4 space-y-4 text-ink font-medium">
              <li><span className="font-light text-gray-600 block mt-1"><strong>Architectural Assessment:</strong> Objectively audit leadership bench strength to evaluate readiness for scale via independent third parties.</span></li>
              <li><span className="font-light text-gray-600 block mt-1"><strong>Targeted Executive Education:</strong> Deploy highly pragmatic coaching pathways (one-to-one and on-the-job training).</span></li>
              <li><span className="font-light text-gray-600 block mt-1"><strong>Transition Management:</strong> Introduce targeted Fractional or Interim Managers to break down organizational bottlenecks.</span></li>
              <li><span className="font-light text-gray-600 block mt-1"><strong>Governance Evolution:</strong> Establish boards with independent directors and introduce Long-Term Incentive (LTI) schemes.</span></li>
            </ol>
          </article>
        ) : (
          <article className="prose prose-lg prose-headings:font-display prose-headings:font-medium text-gray-600 font-light leading-relaxed max-w-none">
            
            <div className="bg-ink text-paper p-8 md:p-12 mb-16 border-l-4 border-accent">
              <h3 className="text-[10px] uppercase tracking-[0.3em] font-bold text-accent mb-8 mt-0">Executive Summary</h3>
              <div className="space-y-6 text-base font-light">
                <div>
                  <strong className="block text-white mb-1">1. Il Problema — Il Paradosso della Lealtà</strong>
                  Il 73% delle PMI italiane in fase di scaling mantiene manager "storici" in ruoli critici nonostante il gap di competenze crescente. Il Principio di Peter: chi ha costruito l'azienda spesso non ha le skill per farla crescere, ma la lealtà blocca il ricambio.
                </div>
                <div>
                  <strong className="block text-white mb-1">2. L'Impatto — 7 Domini di Competenza Assenti</strong>
                  Data-driven decision making, digital transformation, people management strutturato, strategic planning, operational excellence, financial literacy avanzata e change management. Ogni gap costa in media il 15-30% di efficienza operativa.
                </div>
                <div>
                  <strong className="block text-white mb-1">3. Segnali di Rischio — Quando Intervenire</strong>
                  Decisioni "a sensazione", resistenza ai processi, turnover elevato nei talenti junior. Il 68% dei passaggi generazionali fallisce per questo motivo.
                </div>
                <div>
                  <strong className="block text-white mb-1">4. Implicazioni per l'Imprenditore</strong>
                  Valutazioni aziendali ridotte del 20-40% in M&A, fuga di fondi PE seri, blocco della crescita.
                </div>
                <div>
                  <strong className="block text-white mb-1">5. Azioni Prioritarie</strong>
                  Mappatura competenze (ora), transition plan (entro 3 mesi), implementazione KPI oggettivi e clausole contrattuali (entro 12 mesi).
                </div>
              </div>
            </div>

            <h2 className="text-3xl mt-16 mb-8 text-ink">1. Il Paradosso della Lealtà</h2>
            <p>
              Quando una PMI cresce da 30 a 150 dipendenti attraversa una metamorfosi organizzativa che richiede competenze radicalmente diverse. Il manager che ha guidato con successo una squadra di 20 persone si trova, per il Principio di Peter, promosso oltre il proprio livello di competenza.
            </p>
            <p>
              La Scuola di Palo Alto (Watzlawick) ci insegna che il sistema — l'azienda, la famiglia, il manager stesso — oppone una resistenza sistemica al cambiamento, un meccanismo omeostatico che blocca l'evoluzione proprio quando è più necessaria.
            </p>
            <blockquote className="border-l-2 border-accent pl-6 italic text-xl my-8">
              Il manager storico, cresciuto "dentro" l'azienda, ha sviluppato una relazione simbiotica con il fondatore. Questa relazione diventa una "gabbia dorata" che impedisce l'ingresso di competenze fresche. La lealtà, paradossalmente, si trasforma nel freno più pericoloso.
            </blockquote>
            <ul className="list-disc pl-5 mt-4 mb-12 space-y-2">
              <li>Il 60% delle PMI dichiara competenze manageriali inadeguate per scenari VUCA.</li>
              <li>Il tessuto produttivo del Nord Italia mostra una cronica difficoltà nell'affrontare questa transizione.</li>
              <li>Solo il 9% delle PMI ha un livello adeguato di competenze digitali avanzate.</li>
            </ul>

            <h2 className="text-3xl mt-16 mb-8 text-ink">2. La Mappatura del Deficit</h2>
            <div className="overflow-x-auto mb-12">
              <table className="min-w-full text-left text-base border-collapse">
                <thead>
                  <tr className="border-b border-accent-soft text-ink">
                    <th className="py-4 pr-4 font-medium w-1/4">Dominio</th>
                    <th className="py-4 px-4 font-medium w-1/3">Carenza</th>
                    <th className="py-4 pl-4 font-medium">Impatto del Manager Storico</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  <tr>
                    <td className="py-4 pr-4 font-medium text-ink">Visione e Strategia</td>
                    <td className="py-4 px-4">Assenza di visione a lungo termine; no business plan per scenari complessi</td>
                    <td className="py-4 pl-4">Iper-operatività ("firefighting"). Si perdono opportunità di mercato.</td>
                  </tr>
                  <tr>
                    <td className="py-4 pr-4 font-medium text-ink">Leadership e Change Management</td>
                    <td className="py-4 px-4">Difficoltà nel guidare trasformazioni culturali e operative</td>
                    <td className="py-4 pl-4">Resistenza passivo-aggressiva all'innovazione. Sfiducia verso i nuovi.</td>
                  </tr>
                  <tr>
                    <td className="py-4 pr-4 font-medium text-ink">Gestione delle Persone</td>
                    <td className="py-4 px-4">Mancanza di assetto HR strutturato e deleghe</td>
                    <td className="py-4 pl-4">Micromanagement asfissiante. Fuga dei talenti.</td>
                  </tr>
                  <tr>
                    <td className="py-4 pr-4 font-medium text-ink">Competenze Digitali</td>
                    <td className="py-4 px-4">Solo il 9% ha livello adeguato (Data, AI, ecc.)</td>
                    <td className="py-4 pl-4">Rifiuto della tecnologia. L'analisi dati viene ignorata per le "sensazioni".</td>
                  </tr>
                  <tr>
                    <td className="py-4 pr-4 font-medium text-ink">Sistemi Gestionali</td>
                    <td className="py-4 px-4">ERP 42.2%, CRM 19.2%, BI 14.3%</td>
                    <td className="py-4 pl-4">Segregazione informativa: dati frammentati e zero scalabilità.</td>
                  </tr>
                  <tr>
                    <td className="py-4 pr-4 font-medium text-ink">Sostenibilità (ESG)</td>
                    <td className="py-4 px-4">Incapacità di integrare criteri Ambientali e Sociali</td>
                    <td className="py-4 pl-4">Considerati "burocrazia". Precluso accesso ai capitali istituzionali.</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-3xl mt-16 mb-8 text-ink">3. L'Effetto Kamikaze nel Family Business</h2>
            <p>
              Il manager storico "one of the family" ha garantito continuità decennale, ma opera oggi come baluardo all'affermazione delle nuove generazioni. Un caso tipico: l'azienda nata negli anni '90 con fatturato in declino per obsolescenza commerciale, dove la nuova generazione propone e-commerce e digital marketing, ma il manager storico le respinge come "frivolezze".
            </p>
            <p>
              Così, l'azienda rischia di soffrire mortalmente intorno ai suoi "pretoriani storici". Il patrimonio intangibile di relazioni e competenze si disperde. L'incertezza percepita mina la fiducia di fornitori e banche.
            </p>
            
            <div className="bg-paper border border-accent-soft p-8 my-10">
              <h4 className="text-[10px] uppercase tracking-[0.2em] font-bold text-accent mb-6">Attenzione a questi 15 segnali di rischio:</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 text-sm">
                <ul className="list-disc pl-4 space-y-2">
                  <li>Decisioni basate su "sensazione" senza KPI</li>
                  <li>Resistenza ai processi strutturati</li>
                  <li>Turnover elevato nei talenti junior</li>
                  <li>Sindrome del "abbiamo sempre fatto così"</li>
                  <li>Difficoltà nel delegare compiti operativi</li>
                  <li>Segregazione informativa (dati non trasparenti)</li>
                  <li>Focus ossessivo sul "firefighting"</li>
                  <li>Mancanza di business plan a 3-5 anni</li>
                </ul>
                <ul className="list-disc pl-4 space-y-2">
                  <li>Processi non codificati</li>
                  <li>Clienti monopolizzati da singoli</li>
                  <li>Resistenza a fusioni o acquisizioni</li>
                  <li>Sfiducia verso manager esterni</li>
                  <li>Rifiuto della formazione formale</li>
                  <li>Nessun sistema oggettivo di valutazione</li>
                  <li>Incapacità di pianificare il passaggio generazionale</li>
                </ul>
              </div>
            </div>

            <h2 className="text-3xl mt-16 mb-8 text-ink">4. L'Ostacolo ai Fondi di Private Equity</h2>
            <p>
              I fondi oggi esigono trasparenza, delega ai livelli intermedi, accountability e reportistica in tempo reale. Il manager storico, abituato a contratti milionari basati su strette di mano, diviene incompatibile in questo nuovo ecosistema, dove oltre il 75% della creazione di valore deriva da excellenza operativa e trasformazione digitale. Il 54% delle uscite di CEO e top manager prima pianificate avviene proprio nei portafogli dei fondi per questo scollamento.
            </p>

            <h2 className="text-3xl mt-16 mb-8 text-ink">5. Ingegneria Contrattuale</h2>
            <p>
              Gli strumenti legali per gestire questa transizione sono mirati ad allineare gli interessi del management uscente con quelli finanziari del futuro:
            </p>
            <ul className="list-disc pl-5 mt-4 space-y-4">
              <li><strong>Good/Bad Leaver:</strong> Differenziano il trattamento in base alla qualità della separazione.</li>
              <li><strong>Earn-Out:</strong> Collegano il corrispettivo al raggiungimento di obiettivi (KPI, EBITDA).</li>
              <li><strong>Patto di Non Concorrenza:</strong> Vincoli temporali e geografici per la tutela del know-how.</li>
              <li><strong>Governance Strutturata:</strong> Architetture che distribuiscono il potere (Comitati, Board).</li>
            </ul>

            <h2 className="text-3xl mt-16 mb-8 text-ink">6. Il Toolkit dell'Imprenditore Moderno</h2>
            <p>
              Per evitare stalli o emorragie di talenti, l'imprenditore deve mettere in campo 4 azioni operative immediate:
            </p>
            <ol className="list-decimal pl-5 mt-4 space-y-4 text-ink font-medium">
              <li><span className="font-light text-gray-600 block mt-1"><strong>Assessment Architetturale:</strong> Mappare oggettivamente le leadership per misurare l'adeguatezza allo scaling tramite third party indipendenti.</span></li>
              <li><span className="font-light text-gray-600 block mt-1"><strong>Formazione Mirata:</strong> Implementare percorsi formativi executive altamente pragmatici (One-to-One e training on-the-job).</span></li>
              <li><span className="font-light text-gray-600 block mt-1"><strong>Management di Transizione:</strong> Introdurre Fractional o Interim Manager mirati per abbattere le resistenze.</span></li>
              <li><span className="font-light text-gray-600 block mt-1"><strong>Evoluzione della Governance:</strong> Costruire board of directors con indipendenti e sistemi LTI (Long Term Incentive).</span></li>
            </ol>
          </article>
        )}
      </div>

      <div className="mt-24 pt-16 border-t border-accent-soft max-w-4xl mx-auto px-6">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-medium text-ink mb-4">
            {isEn ? 'Sources & References' : 'Fonti & Riferimenti'}
          </h2>
          <p className="text-gray-500 font-light">
            {isEn ? 'Documentation used for the elaboration of this insight (SME Management Transition).' : 'Documentazione utilizzata per l\'elaborazione di questo insight (Transizione Management PMI).'}
          </p>
        </div>
        
        <div className="flex flex-col gap-4 mb-24">
          {[
            { author: "ALDAI-Federmanager & Fondirigenti", title: "Il management delle PMI lombarde di fronte alla transizione digitale e green", year: "2025" },
            { author: "Assolombarda", title: "Capitale umano e manageriale per affrontare le sfide del futuro", year: "2024" },
            { author: "SDA Bocconi", title: "Osservatorio sulle PMI e Family Business Italiani", year: "2024" },
            { author: "Harvard Business Review", title: "Scaling up: The Peter Principle in modern organizations", year: "2024" },
            { author: "AIFI", title: "L'impatto del Private Equity nelle PMI Italiane: Driver di crescita e modernizzazione", year: "2023" },
            { author: "Bain & Company", title: "Global Private Equity Report - Focus Italy", year: "2024" }
          ].map((source, index) => (
            <div key={index} className="flex flex-row items-center p-6 bg-white border border-gray-100 rounded shadow-sm">
              <div className="w-12 h-12 rounded-full bg-paper flex items-center justify-center shrink-0 mr-6">
                <FileText size={20} className="text-ink" />
              </div>
              <div className="flex flex-col">
                <span className="text-ink font-display text-lg font-medium mb-1">{source.author}</span>
                <span className="text-gray-500 text-sm font-light">
                  {source.title} <span className="mx-2">&bull;</span> {source.year}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
