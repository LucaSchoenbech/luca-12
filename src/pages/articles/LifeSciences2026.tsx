import { motion } from 'motion/react';
import { ArrowLeft, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function LifeSciences2026() {
  return (
    <div className="py-24 md:py-48">
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
            2026: L'Anno della <span className="italic text-accent">Convergenza</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-500 font-light leading-relaxed">
            Dall'AI Agentica al nuovo CCNL: la trasformazione del capitale umano nel Life Sciences italiano. Un'analisi basata su fonti McKinsey, Deloitte, BCG, Farmindustria e Assobiotec.
          </p>
        </header>

        <article className="prose prose-lg prose-headings:font-display prose-headings:font-medium text-gray-600 font-light leading-relaxed max-w-none">
          
          <h2 className="text-3xl mt-16 mb-8 text-ink">01 — Il paradosso del talento</h2>
          <p className="font-medium text-ink mb-6">Dati chiave:</p>
          <ul className="list-disc pl-5 mt-4 mb-8 space-y-2">
            <li><strong>77% Talent Shortage 2026</strong> — Il 77% degli employer Pharma fatica a reperire scienziati "bilingui" (STEM + Data Science).</li>
            <li><strong>53% Donne nella Ricerca</strong> — L'Italia è leader UE per occupazione femminile qualificata in R&D, un asset da proteggere.</li>
          </ul>

          <p className="font-medium text-ink mb-6">Benchmark d'eccellenza (casi aziendali):</p>
          <ul className="list-disc pl-5 mt-4 mb-8 space-y-4">
            <li><strong>SANOFI – Smart Working Industriale:</strong> abolisce il controllo orario ed estende la flessibilità anche ai reparti produttivi. La performance si misura sui risultati, non sulla presenza.</li>
            <li><strong>NOVARTIS:</strong> 6 mesi di congedo parentale retribuito all'80% anche per i neopapà, per promuovere una reale parità di genere.</li>
            <li><strong>ANGELINI – Future Leaders Program:</strong> internalizzare la formazione della leadership STEM per colmare il talent gap.</li>
          </ul>

          <p className="font-medium text-ink mb-6">Compliance 2026:</p>
          <ul className="list-disc pl-5 mt-4 mb-8 space-y-4">
            <li><strong>Giugno 2026 – Trasparenza Retributiva UE:</strong> audit salariali obbligatori per correggere il Gender Pay Gap prima della pubblicazione dei range.</li>
            <li><strong>Agosto 2026 – EU AI Act (High Risk HR):</strong> gli algoritmi di recruiting e valutazione devono garantire trasparenza e sorveglianza umana.</li>
          </ul>
          
          <p>
            <strong>Il Capitale Umano Aumentato</strong> — Il 2026 premierà le aziende che sapranno coniugare efficienza AI e nuovo patto sociale. Tre pilastri: AI Co-Pilot (potenziamento, non sostituzione), Wellbeing 4.0 (cura personalizzata), Ethical Governance (trasparenza ed equità come vantaggio competitivo).
          </p>

          <h2 className="text-3xl mt-16 mb-8 text-ink">02 — Il contesto italiano</h2>
          <p className="font-medium text-ink mb-6">L'Italia come primo hub manifatturiero UE nel farmaceutico:</p>
          
          <div className="overflow-x-auto mb-8">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-accent-soft text-sm uppercase tracking-widest text-ink">
                  <th className="py-4 pr-4 font-medium">KPI</th>
                  <th className="py-4 font-medium">Valore</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                <tr className="border-b border-gray-100">
                  <td className="py-4 pr-4 text-gray-500">Produzione annua</td>
                  <td className="py-4 font-medium">€56 miliardi</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-4 pr-4 text-gray-500">Export farmaceutico</td>
                  <td className="py-4 font-medium">€53,4 miliardi</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-4 pr-4 text-gray-500">Addetti diretti</td>
                  <td className="py-4 font-medium">71.000 (+1,4% vs 2023)</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-4 pr-4 text-gray-500">Investimenti R&S</td>
                  <td className="py-4 font-medium">€3,6 miliardi</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-4 pr-4 text-gray-500">Fatturato Biotech</td>
                  <td className="py-4 font-medium">€20,8 miliardi</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p>
            <strong>Profilo del capitale umano:</strong> 90% laureati o diplomati, 45% donne in organico (53% in R&D, +13% in 5 anni), +21% Under 35 in 5 anni. È il primo settore industriale italiano per welfare aziendale (fonte Istat).
          </p>

          <p className="font-medium text-ink mb-6 mt-8">Distribuzione regionale:</p>
          
          <div className="overflow-x-auto mb-8">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-accent-soft text-sm uppercase tracking-widest text-ink">
                  <th className="py-4 pr-4 font-medium">Regione</th>
                  <th className="py-4 pr-4 font-medium">Addetti</th>
                  <th className="py-4 pr-4 font-medium">Export (€mld)</th>
                  <th className="py-4 font-medium">Focus R&S</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                <tr className="border-b border-gray-100">
                  <td className="py-4 pr-4 font-medium">Lombardia</td>
                  <td className="py-4 pr-4 text-gray-500">25.000</td>
                  <td className="py-4 pr-4 text-gray-500">10,2</td>
                  <td className="py-4 text-gray-500">Hub primario</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-4 pr-4 font-medium">Lazio</td>
                  <td className="py-4 pr-4 text-gray-500">13.300</td>
                  <td className="py-4 pr-4 text-gray-500">14,0</td>
                  <td className="py-4 text-gray-500">Ricerca clinica</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-4 pr-4 font-medium">Toscana</td>
                  <td className="py-4 pr-4 text-gray-500">7.900</td>
                  <td className="py-4 pr-4 text-gray-500">11,0</td>
                  <td className="py-4 text-gray-500">Specialità</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-4 pr-4 font-medium">Emilia-Romagna</td>
                  <td className="py-4 pr-4 text-gray-500">4.500</td>
                  <td className="py-4 pr-4 text-gray-500">2,4</td>
                  <td className="py-4 text-gray-500">€645M R&S (leader EU)</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="font-medium text-ink mb-6 mt-8">Gap critici da colmare:</p>
          <ul className="list-disc pl-5 mt-4 space-y-2">
            <li><strong>Digital Readiness:</strong> ~15-20 AI specialists per 1.000 dipendenti vs 60-80 negli hub US/UK.</li>
            <li><strong>AI Compliance:</strong> solo il 15% delle aziende ha auditato i propri use cases AI, contro il 40-50% del benchmark globale.</li>
            <li><strong>Clinical Trial Digitization:</strong> 50% digitalizzazione vs 95% dell'ecosistema USA.</li>
          </ul>

          <h2 className="text-3xl mt-16 mb-8 text-ink">03 — Priorità strategiche C-Level: i 6 pilastri per il 2026</h2>
          
          <div className="space-y-12">
            <div>
              <h4 className="text-lg font-medium text-ink">01 – Talent Architecture</h4>
              <p className="text-sm text-gray-400 mt-1 italic mb-4">Case: Angelini – Future Leaders Program con SDA Bocconi ("Build vs Buy: internalizzare la leadership")</p>
              <ul className="list-disc pl-5 space-y-1 text-sm">
                <li>Time-to-fill: 60 giorni (da 120)</li>
                <li>40% Women in STEM hiring</li>
                <li>25% Talent pool non-EU</li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-medium text-ink">02 – AI Literacy & Upskilling</h4>
              <p className="text-sm text-gray-400 mt-1 italic mb-4">Case: Novartis Data Science Academy + Roche Digital Academy ("Alfabetizzazione AI Enterprise-wide")</p>
              <ul className="list-disc pl-5 space-y-1 text-sm">
                <li>60h formazione AI R&D/anno</li>
                <li>50 AI Champions per org</li>
                <li>50% Workforce AI-certified</li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-medium text-ink">03 – Hybrid Work Model</h4>
              <p className="text-sm text-gray-400 mt-1 italic mb-4">Case: Sanofi (abolizione controllo orario) + Chiesi (2-5gg remoto) ("Hybrid by Activity")</p>
              <ul className="list-disc pl-5 space-y-1 text-sm">
                <li>70% Staff in hybrid model</li>
                <li>+40 eNPS satisfaction</li>
                <li>€300 Rimborso annuo home office</li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-medium text-ink">04 – Welfare Olistico</h4>
              <p className="text-sm text-gray-400 mt-1 italic mb-4">Case: Novartis Parental Leave 6 mesi + Sanofi "All Well" + Angelini €800/anno ("Il Caring come leva di retention")</p>
              <ul className="list-disc pl-5 space-y-1 text-sm">
                <li>80% Welfare utilization (da 45%)</li>
                <li>€1.500 Credito welfare modulabile</li>
                <li>Sportello psicologico illimitato</li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-medium text-ink">05 – Supply Chain Reshoring</h4>
              <p className="text-sm text-gray-400 mt-1 italic mb-4">Critical Medicines Act EU + 80% API importati da Cina/India ("Upskilling manufacturing per capacity nazionale")</p>
              <ul className="list-disc pl-5 space-y-1 text-sm">
                <li>Hub Toscana Siena specialità</li>
                <li>Clust-ER Health partnership (Emilia-Romagna)</li>
                <li>Programmi ITS da 2 anni per technician</li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-medium text-ink">06 – AI Governance & ESG</h4>
              <p className="text-sm text-gray-400 mt-1 italic mb-4">EU AI Act Agosto 2026 + Direttiva Trasparenza Retributiva ("Compliance come vantaggio competitivo")</p>
              <ul className="list-disc pl-5 space-y-1 text-sm">
                <li>100% AI use cases auditati</li>
                <li>95% Training AI ethics completato</li>
                <li>&lt;5% Gender Pay Gap inspiegato</li>
              </ul>
            </div>
          </div>

          <h2 className="text-3xl mt-16 mb-8 text-ink">04 — Framework Normativo 2026: le scadenze critiche</h2>
          
          <div className="space-y-8">
            <div className="bg-paper border border-accent-soft p-8">
              <h4 className="text-[10px] uppercase tracking-[0.2em] font-bold text-accent mb-4">Giugno 2026 – Direttiva UE 2023/970 – Trasparenza Retributiva</h4>
              <p className="text-sm mb-4">Obbligo di pubblicare range salariali negli annunci, fornire dati retributivi disaggregati per genere, divieto di chiedere lo storico retributivo. Sanzione: Gender Pay Gap &gt;5% porta a misure correttive obbligatorie.</p>
              <p className="text-sm"><strong>Azioni:</strong> audit salariali massivi entro 2025, sistemi job evaluation oggettivi, formazione recruiter, template comunicazione candidati. Best Practice: Chiesi ha già eliminato il Gender Pay Gap inspiegato.</p>
            </div>

            <div className="bg-paper border border-accent-soft p-8">
              <h4 className="text-[10px] uppercase tracking-[0.2em] font-bold text-accent mb-4">2 Agosto 2026 – EU AI Act Art. 6 – Sistemi HR "High Risk"</h4>
              <p className="text-sm mb-4">I sistemi AI per recruiting, valutazione performance e promozioni sono classificati ad alto rischio. Requisiti: risk management, data quality, trasparenza, sorveglianza umana. Sanzioni: fino a €35 milioni o 7% del fatturato globale.</p>
              <p className="text-sm"><strong>Azioni:</strong> audit AI use cases, governance board CHRO+CIO+Legal+Scientist, protocolli human-in-the-loop, training su bias detection e Explainable AI.</p>
            </div>

            <div className="bg-paper border border-accent-soft p-8">
              <h4 className="text-[10px] uppercase tracking-[0.2em] font-bold text-accent mb-4">Luglio 2025 – Giugno 2028 – CCNL Chimico-Farmaceutico</h4>
              <p className="text-sm mb-4">Aumento TEC ~€294-305 nel triennio, diritto alla formazione soggettivo, rafforzamento Faschim/Fonchim, modelli partecipativi ESG. Novità: formazione continua come diritto esigibile focalizzato su competenze digitali e green.</p>
              <p className="text-sm"><strong>Azioni:</strong> pianificare budget aumenti TEC, piani formativi individuali certificabili, negoziare parità trattamento economico remoto vs presenza.</p>
            </div>

            <div className="bg-paper border border-accent-soft p-8">
              <h4 className="text-[10px] uppercase tracking-[0.2em] font-bold text-accent mb-4">1 Gennaio 2026 – Legge 106/2025 – Smart Working Prioritario</h4>
              <p className="text-sm mb-4">Smart working prioritario per lavoratori fragili. Obbligo di accordo individuale con diritto alla disconnessione esplicito. Opportunità per inclusione 50+, caregiver e genitori single.</p>
              <p className="text-sm"><strong>Azioni:</strong> policy "Hybrid by Activity", mapping fasce reperibilità per ruolo, rimborso home office €200-300/anno, shift metriche da ore ufficio a OKR e deliverables.</p>
            </div>
          </div>

          <h2 className="text-3xl mt-16 mb-8 text-ink">05 — Execution Strategy: Fattori critici di successo</h2>
          <ul className="list-disc pl-5 mt-4 space-y-4">
            <li><strong>C-Level Commitment:</strong> La strategia del personale non è più una funzione di supporto, ma un driver di business. Il CHRO deve sedere nel board strategico accanto al CEO.</li>
            <li><strong>Budget Adeguato:</strong> Destinare il 15-20% del budget HR complessivo specificamente a hiring strategico e Learning & Development (L&D) per colmare il gap di competenze digitali.</li>
            <li><strong>Ecosistema di Partner:</strong> Costruire una rete con Università (talento early-career), partner di welfare (es. Pluxee) e consulenza strategica (KPMG/Deloitte) per scalare le best practices.</li>
            <li><strong>Comunicazione Trasparente:</strong> Chiarire fin da subito che l'AI porterà a una "Job Evolution" (evoluzione dei ruoli) e non a una "Job Elimination", per mantenere alto l'engagement e ridurre le resistenze.</li>
          </ul>

        </article>
      </div>

      <div className="bg-[#1c1c1c] text-paper py-24 px-6 mt-24">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-medium text-white mb-2">
              Fonti e Bibliografia
            </h2>
            <div className="w-24 h-1 bg-accent"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
            {[
              { author: "Deloitte", title: "2026 Life Sciences Outlook & Executive Trends" },
              { author: "McKinsey & Company", title: "Growth Strategy: The Next Chapter in Life Sciences" },
              { author: "Boston Consulting Group", title: "Reimagining Business Models: Biopharma Trends 2026" },
              { author: "Farmindustria", title: "Indicatori Farmaceutici 2025" },
              { author: "Assobiotec", title: "Il Biotech in Italia 2025" }
            ].map((source, index) => (
              <div key={index} className="flex flex-col">
                <span className="text-white font-display text-xl font-medium mb-1">{source.author}</span>
                <span className="text-gray-400 font-light">{source.title}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
