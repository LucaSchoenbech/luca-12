import { ArrowLeft, Clock, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import React from 'react';
import ReadingProgress from '../../components/ReadingProgress';

export default function AiLiteracy() {
  const { t, i18n } = useTranslation();
  const isEn = i18n.language === 'en';

  return (
    <>
      <ReadingProgress />
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
              <span className="text-[9px] uppercase tracking-[0.4em] font-bold text-accent">#Technology</span>
              <div className="h-4 w-[1px] bg-accent-soft" />
              <div className="flex items-center space-x-2 text-[10px] uppercase tracking-widest font-mono text-gray-400">
                <Clock size={12} />
                <span>{isEn ? '7 min read' : 'Lettura 7 min'}</span>
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-display font-medium leading-tight mb-8 text-ink">
              {isEn ? (
                <>AI Literacy as a managerial<br /><span className="italic text-accent">assessment dimension</span></>
              ) : (
                <>AI Literacy come dimensione<br /><span className="italic text-accent">di valutazione manageriale</span></>
              )}
            </h1>
            <p className="text-xl md:text-2xl text-gray-500 font-light leading-relaxed">
              {isEn ? 'In a market where AI governance is a board matter, what to look for in leadership candidates.' : 'In un mercato in cui la governance dell\'IA è materia di CDA, cosa cercare nei candidati di responsabilità.'}
            </p>
          </header>

          {isEn ? (
            <article className="prose prose-lg prose-headings:font-display prose-headings:font-medium text-gray-600 font-light leading-relaxed max-w-none">
              <p>
                AI literacy is no longer a "nice to have" skill: it is becoming a variable of corporate governance, managerial selection, and supervision. In Europe, the obligation to ensure a sufficient level of AI literacy is already operational under the AI Act; in Italy, Law 132/2025 and its implementing decrees are translating it into concrete training and liability obligations; in parallel, standards, frameworks, and sector authorities are converging on a simple point: those who decide, supervise or authorize the use of AI must understand enough of it to direct the strategy, evaluate the risks, demand controls, and take responsibility for the choices.
              </p>

              <h2 className="text-3xl mt-16 mb-8 text-ink border-b border-accent-soft pb-4">
                Why the topic has become critical
              </h2>
              <p>
                As of July 2026, the European framework is already very concrete. The official Commission timeline indicates that the general provisions on AI literacy apply from February 2, 2025, while most of the AI Act's rules enter the application phase from August 2, 2026. The Commission also clarifies that AI literacy, under Article 4, is not an abstract requirement: it concerns providers and deployers of AI systems and must be modeled on the organization's role, the system's risk, the context of use, and the affected persons.
              </p>
              <p>
                This shifts the issue directly into the perimeter of the Board of Directors and senior management. In the OECD/Bank of Italy report presented in April 2026 on Italian financial markets, it is stated that the ultimate responsibility for AI adoption falls on the board of directors, which should define effective AI development and management strategies, robust policies for controlling operational, legal, and reputational risks, periodically review AI's contribution to organizational performance, and incentivize solid data and model governance frameworks. The report also captures the pace of adoption: in the insurance sector, AI is used by 70% of respondents, in banking by 59%, and among financial market operators by 31%.
              </p>
              <p>
                The point is not theoretical. The same report shows that, among the Italian operators examined, the understanding of AI at the board of directors level is mostly indicated as partial or limited, and that only a minority claims to have a specific governance framework for AI. Among the risks of adopting non-proprietary AI, insufficient skills within the company and insufficient understanding by senior management and the BoD are explicitly mentioned. Translated: the market is moving faster than the average managerial maturity.
              </p>
              <p>
                International supervisors have also raised the bar. On May 15, 2026, the Bank of England, FCA, and HM Treasury published a joint statement — referring in particular to the cyber risks posed by frontier AI models — in which they indicate that firms must ensure that the board and senior management have a sufficient understanding of these risks, to be able to set the strategic direction and oversee how control functions manage them. A few weeks later, on June 3, 2026, Frank Elderson (ECB, Vice-Chair of the Supervisory Board) announced the dispatch of a "dear CEO letter" to all supervised banks, recalling that over 85% of banks under European supervision already use AI and that the response to the risks of frontier models is not just a technical issue, but a strategic, top-level one, with management taking charge.
              </p>

              <h2 className="text-3xl mt-16 mb-8 text-ink border-b border-accent-soft pb-4">
                The Italian regulatory framework: from Law 132/2025 to implementing decrees
              </h2>
              <p>
                Italy intervened before Europe with an organic national law: Law September 23, 2025, no. 132 ("Provisions and delegations to the Government concerning artificial intelligence"). The law is based on an anthropocentric, transparent, and secure use of AI, explicitly promotes paths for literacy, training, and certification of skills, and in Article 20 designates AgID and ACN as national Artificial Intelligence Authorities, without prejudice to the competencies of the Bank of Italy, CONSOB, and IVASS in their respective sectors.
              </p>
              <p>
                On June 10, 2026, the Council of Ministers preliminarily approved the first implementing decrees. The decree on governance, training, and labor dedicates a large section to literacy: school, public administration, university, professions, judiciary, and health, with obligations for professional orders to update their regulations including technical, legal, and ethical literacy.
              </p>
              <p>
                For those dealing with selection and organization, there is a decisive passage: in decision-making processes regarding the employment relationship, employers using AI systems must ensure that decisions on the establishment, modification, or termination of the relationship, including disciplinary measures, are not adopted solely on the basis of automated processing. The final decision must be reserved for a natural person with effective and autonomous power, the worker has the right to an understandable explanation of the decision, and a dismissal ordered in violation is null and void. Furthermore, the use of AI systems that affect work organization and safety enters the risk assessment document under Legislative Decree 81/2008. It is difficult to imagine a clearer signal that understanding AI — its limits, its outputs, the responsibilities it entails — is now an integral part of managerial competence, particularly for those leading HR, operations, and control functions.
              </p>

              <h2 className="text-3xl mt-16 mb-8 text-ink border-b border-accent-soft pb-4">
                What AI literacy really means for a manager
              </h2>
              <p>
                The most relevant European definition today is the one recalled by the Commission in the official Q&A on Article 4 of the AI Act: AI literacy means possessing skills, knowledge, and understanding such as to allow an informed deployment of AI systems and a concrete awareness of opportunities, risks, and possible harms. The Commission adds that the minimum content of a serious program should include a general understanding of what AI is, how it works, what AI is used in the organization, the role of the company as a provider or deployer, the specific risks of the adopted systems, and the relevant legal, ethical, and governance aspects.
              </p>
              <p>
                Academic literature helps clarify an important aspect: literacy does not coincide with mere instrumental familiarity. The review by Ng and colleagues proposes four dimensions of AI literacy — knowing and understanding, using and applying, evaluating, addressing ethical implications — and subsequent literature distinguishes between literacy and competency: the former is about knowing, the latter the ability to apply that knowledge in a useful way, with confidence and reflexivity. In other words, for an executive, it is not enough to "have tried a chatbot": what is needed is the ability to use it as an object of decision, control, and judgment.
              </p>
              <p>
                For top management, the issue now also has an empirical basis. The open-access study by Pinski, Hofmann, and Benlian (2024) shows that the AI literacy of the top management team has a positive effect on both the firm's AI orientation — the ability to recognize where AI generates value — and AI implementation ability, i.e., the ability to concretely realize that value. In parallel, the work of Benlian and Pinski published in Business Horizons (online since October 2025) proposes an AI Literacy Assessment Matrix explicitly adapted to different managerial levels and a canvas for planning the development and measurement of AI skills in the organization.
              </p>
              <p>
                A practical conclusion follows from this. Managerial AI literacy does not mean knowing how to design models or write code, except for specific roles. It means, more realistically, knowing how to distinguish between serious use cases and hype, understanding limits and failure modes, having data, dependencies, and assumptions explained, demanding documentary evidence, fixing ownership and controls, and understanding when the final word must remain with a human being. This reading is well supported by the role-based design of the AI Act, the NIST AI RMF, and the latest literature on assessment for managerial levels.
              </p>

              <h2 className="text-3xl mt-16 mb-8 text-ink border-b border-accent-soft pb-4">
                What skills to look for in leadership candidates
              </h2>
              <p>
                The first dimension to look for is <strong>strategic discernment</strong>. A credible candidate doesn't just talk about AI in terms of efficiency or trendiness, but knows how to connect it to business priorities, competitive advantage, processes, customer value, and context limits. Research on top management AI literacy shows exactly that the ability to generate value with AI depends on the strategic orientation of the leadership.
              </p>
              <p>
                The second is <strong>regulatory and fiduciary understanding</strong>. Those aspiring to positions of responsibility must be able to recognize the organization's position in the AI value chain, understand whether they are developing, purchasing, or merely using systems, and know how to link each use to a risk level, documentation duties, oversight requirements, and possible impacts on affected subjects. The Commission insists on this risk-based and role-based reading; NIST requires that legal and regulatory obligations be understood, managed, and documented; the Italian framework of Law 132/2025 adds specific responsibilities, starting from the workplace.
              </p>
              <p>
                The third is <strong>data and model governance literacy</strong>. A good candidate must know how to ask the right questions about data provenance, quality, representativeness, training set limits, performance metrics, validation, supplier dependencies, third-party models, and monitoring plans. The NIST Playbook recommends standardized documentation on business justification, scope, expected risks, assumptions, limits, training data, algorithmic methodology, test results, and upstream/downstream dependencies; the OECD/Bank of Italy report explicitly recalls the need for robust data and model governance frameworks; ISO/IEC 42001 presents an organizational scheme to manage AI risks and opportunities in a structured way.
              </p>
              <p>
                The fourth dimension is the ability to establish <strong>human oversight and accountability</strong>. The Commission links AI literacy to the AI Act articles on transparency and human oversight and clarifies that, especially in riskier contexts, relying solely on instructions for use is not enough: further training and guidance are needed. NIST insists on clear roles and responsibilities, documented communication lines, separation of functions, review processes, and, if necessary, dedicated AI risk management committees. The Italian law makes this principle binding at work: the final decision belongs to a natural person with effective power. A mature executive therefore knows how to define who decides, who controls, who can stop the system, and who answers in case of an incident.
              </p>
              <p>
                The fifth is the management of <strong>risk, monitoring, and metrics</strong>. Approving a use case is not enough: one must know how to ask for indicators, thresholds, frequency of reviews, escalation, and audit trails. The NIST AI RMF makes GOVERN a transversal function, with continuous monitoring, periodic review, explicit risk tolerance, and documented processes; the Italian standard UNI 11621-8 insists that AI professional profiles must also be described through KPIs; the Corporate Governance Code requires the board to self-assess also with respect to the role played in defining strategies and monitoring the adequacy of the internal control and risk management system.
              </p>
              <p>
                The sixth is the ability to drive <strong>culture and organizational learning</strong>. Both the Commission and NIST insist that literacy must be proportionate to roles and that staff and partners must receive training tailored to their responsibilities. OECD recommendations explicitly include the construction of human capacity, the Italian Strategy 2024-2026 places businesses and training among the decisive macro-areas, and the implementing decrees of Law 132/2025 extend literacy to schools, PA, professions, and adult education. For a managerial candidate, therefore, the question is not just "how much do they know", but "are they capable of growing widespread literacy in the organization".
              </p>
              <p>
                A warning sign, on the other hand, is the profile that reduces AI to tool fluency. If a candidate speaks well about prompts but cannot discuss ownership, data, validation, vendor risk, escalation, auditability, or reputational risk, they are not showing managerial AI literacy but only low-level operational familiarity. This conclusion, although interpretative, is consistent with the approach of the Commission, NIST, and literature distinguishing literacy from applied competence.
              </p>

              <h2 className="text-3xl mt-16 mb-8 text-ink border-b border-accent-soft pb-4">
                How to assess them seriously and documentably
              </h2>
              <p>
                A serious assessment should be role-based, not generic. The work of Benlian and Pinski proposes an evaluation matrix tailored to different managerial levels; the Corporate Governance Code establishes that the board's orientation on candidates must identify the professional and managerial profiles necessary also in light of the company's sector characteristics. This means that selecting an operations manager, a CFO, a general counsel, or an independent director cannot use the same undifferentiated checklist.
              </p>
              <p>
                The first test should concern the <strong>trace of real experience</strong>. In a CV or reference call, one must look for evidence of approved or implemented AI policies, governed use cases, priority criteria, involvement of legal/compliance/risk, stop or redesign decisions, vendor management, and post-deployment monitoring processes. This approach derives directly from the requirements for documentation, transparency, roles, and periodic reviews described by NIST and the governance expectations recalled by the OECD/Bank of Italy report.
              </p>
              <p>
                The second test is an <strong>interview by scenarios</strong>. It is worth much more than a theoretical question like "do you know ChatGPT?". It is better to present the candidate with a concrete case — a scoring system, an internal generative assistant, a recruitment tool — and ask them: where do you see value, what data is needed, what risks emerge, what functions should be involved, what KPIs would you demand, what human supervision would you maintain, and what conditions would lead you to suspend the initiative. This format well reflects the European risk-based approach and the NIST Map-Measure-Manage logic. In the Italian context, the recruitment case is particularly instructive: with the implementing decrees of Law 132/2025, a candidate who does not know where algorithmic support ends and human responsibility begins shows a substantial, not formal, gap.
              </p>
              <p>
                The third test, very useful for top roles, is a <strong>board or executive committee simulation</strong>. Here, technical knowledge is not evaluated, but governance judgment: the ability to read an incomplete memo, recognize information gaps, request additional documentation, clarify responsibilities, demand a tolerable risk threshold, and distinguish between controlled experimentation and full deployment. It is the type of competence that European and British supervisors are explicitly asking of the top management and that the Corporate Governance Code includes in the dynamics of composition, functioning, and self-assessment of the administrative body.
              </p>
              <p>
                The fourth test is verifying the <strong>ability to build a system</strong>, not just to decide alone. A strong candidate describes how they coordinated different functions, how they set up information flows, what training they promoted, how they managed the separation between development and control, and how they built a chain of accountability. NIST explicitly suggests differentiated training for subgroups, clarity of roles, collaboration with compliance and audit, and even the possible establishment of board committees dedicated to AI risk supervision.
              </p>
              <p>
                In practice, the most defensible formula is this: <strong>evaluating managerial AI literacy as the demonstrated ability to unite strategy, risk, data, compliance, control, and execution</strong>. It is not a test of technological brilliance. It is a test of decision-making reliability in a context where AI is already a matter of corporate governance.
              </p>

              <h2 className="text-3xl mt-16 mb-8 text-ink border-b border-accent-soft pb-4">
                Italian and international framework as a starting point
              </h2>
              <p>
                On the Italian front, the Italian Strategy for Artificial Intelligence 2024-2026 presents AI as a lever for systemic transformation and insists on the need for anthropocentric, reliable, and sustainable development. The document identifies four macro-areas of action — research, public administration, business, and training — and recalls the need for a balance between speed of adoption and safeguarding privacy, security, transparency, sustainability, and social impact. The legislative framework is now completed by Law 132/2025 and the implementing decrees being adopted.
              </p>
              <p>
                Also in Italy, the publication of the UNI 11621-8:2026 standard (April 30, 2026) is a very concrete signal. The Department for Digital Transformation presents it as the first national standard in Europe that structurally defines 12 AI professional profiles, aligned with the European e-Competence Framework: for each profile it indicates mission, tasks, expected results, competencies, knowledge, skills, and KPIs. Among these profiles, the Chief AI Officer also appears, alongside roles in product, data, security, algorithms, and research. This reinforces the idea that AI competencies can and must be translated into observable role criteria, also for managerial selection.
              </p>
              <p>
                Internationally, the picture is now surprisingly coherent. The OECD AI Principles, updated in 2024, insist on human rights and democratic values, fairness and privacy, transparency and explainability, robustness, security and safety, accountability, and human capacity development. The NIST AI RMF organizes risk management into four functions, with governance as a cross-cutting base, requiring clarity of roles, documentation, training, risk tolerance, and periodic reviews. ISO/IEC 42001 offers the first management system standard dedicated to AI, designed to balance innovation and governance. The theme of board oversight on AI, moreover, is not new: already in 2020 the World Economic Forum, with the "Empowering AI Leadership" toolkit, posed it as a board of directors issue, linking it to integrity, ethics, "human in the loop", and risk management frameworks. The difference is that today that perspective has become an explicit expectation of supervisors and, in Italy, a legal obligation.
              </p>
              <p>
                The most robust conclusion, therefore, is this: <strong>AI literacy is becoming a true managerial evaluation dimension</strong>, because European law requires it, Italian law makes it operational, supervisors demand it at the top, standards translate it into profiles and KPIs, and empirical research shows that it makes the difference between companies that extract value from AI and companies that suffer its risks. Those who select and evaluate managers today have the task — and the opportunity — to make it observable, documentable, and comparable.
              </p>
            </article>
          ) : (
            <article className="prose prose-lg prose-headings:font-display prose-headings:font-medium text-gray-600 font-light leading-relaxed max-w-none">
              <p>
                L'AI literacy non è più una competenza "nice to have": sta diventando una variabile di governo societario, di selezione manageriale e di vigilanza. In Europa l'obbligo di assicurare un livello sufficiente di AI literacy è già operativo ai sensi dell'AI Act; in Italia la Legge 132/2025 e i suoi decreti attuativi lo stanno traducendo in obblighi concreti di formazione e responsabilità; in parallelo, standard, framework e autorità di settore stanno convergendo su un punto semplice: chi decide, supervisiona o autorizza l'uso dell'IA deve capirne abbastanza da indirizzare la strategia, valutare i rischi, pretendere controlli e assumersi la responsabilità delle scelte.
              </p>

              <h2 className="text-3xl mt-16 mb-8 text-ink border-b border-accent-soft pb-4">
                Perché il tema è diventato critico
              </h2>
              <p>
                A luglio 2026 il quadro europeo è già molto concreto. La timeline ufficiale della Commissione indica che le disposizioni generali sull'AI literacy si applicano dal 2 febbraio 2025, mentre la maggior parte delle regole dell'AI Act entra nella fase applicativa dal 2 agosto 2026. La Commissione chiarisce inoltre che l'AI literacy, per l'articolo 4, non è un adempimento astratto: riguarda provider e deployer di sistemi di IA e deve essere modellata sul ruolo dell'organizzazione, sul rischio del sistema, sul contesto d'uso e sulle persone impattate.
              </p>
              <p>
                Questo sposta il tema direttamente nel perimetro del CdA e dell'alta direzione. Nel rapporto OCSE/Banca d'Italia presentato ad aprile 2026 sui mercati finanziari italiani si afferma che la responsabilità finale sull'adozione dell'IA ricade sul consiglio di amministrazione, che dovrebbe definire strategie efficaci di sviluppo e gestione dell'IA, politiche robuste di controllo dei rischi operativi, legali e reputazionali, riesaminare periodicamente il contributo dell'IA alla performance organizzativa e incentivare solidi assetti di data governance e model governance. Il rapporto fotografa anche il ritmo dell'adozione: nel comparto assicurativo l'IA è impiegata dal 70% degli intervistati, nel bancario dal 59%, tra gli operatori dei mercati finanziari dal 31%.
              </p>
              <p>
                Il punto non è teorico. Lo stesso rapporto mostra che, tra gli operatori italiani esaminati, la comprensione dell'IA a livello di consiglio di amministrazione viene indicata per lo più come parziale o limitata, e che solo una minoranza dichiara di avere un assetto di governance specifico per l'IA. Tra i rischi di adozione di IA non proprietaria compaiono espressamente le competenze insufficienti all'interno dell'impresa e la comprensione insufficiente dell'alta dirigenza e del CdA. Tradotto: il mercato si sta muovendo più velocemente della maturità manageriale media.
              </p>
              <p>
                Anche i supervisori internazionali hanno alzato il livello. Il 15 maggio 2026 Bank of England, FCA e HM Treasury hanno pubblicato una dichiarazione congiunta — riferita in particolare ai rischi cyber posti dai modelli di IA di frontiera — in cui indicano che le imprese devono assicurare che board e senior management abbiano una comprensione sufficiente di tali rischi, per poter fissare la direzione strategica e supervisionare come le funzioni di controllo li gestiscono. Poche settimane dopo, il 3 giugno 2026, Frank Elderson (BCE, Vice-Chair del Supervisory Board) ha annunciato l'invio di una "dear CEO letter" a tutte le banche vigilate, ricordando che oltre l'85% delle banche sotto vigilanza europea usa già l'IA e che la risposta ai rischi dei modelli di frontiera non è una questione solo tecnica, ma strategica, di vertice, con management che se ne fa carico.
              </p>

              <h2 className="text-3xl mt-16 mb-8 text-ink border-b border-accent-soft pb-4">
                Il quadro normativo italiano: dalla Legge 132/2025 ai decreti attuativi
              </h2>
              <p>
                L'Italia è intervenuta prima in Europa con una legge nazionale organica: la Legge 23 settembre 2025, n. 132 ("Disposizioni e deleghe al Governo in materia di intelligenza artificiale"). La legge si fonda su un utilizzo antropocentrico, trasparente e sicuro dell'IA, promuove esplicitamente percorsi di alfabetizzazione, formazione e certificazione delle competenze, e all'articolo 20 designa AgID e ACN quali Autorità nazionali per l'intelligenza artificiale, ferme restando le competenze di Banca d'Italia, CONSOB e IVASS nei rispettivi settori.
              </p>
              <p>
                Il 10 giugno 2026 il Consiglio dei Ministri ha approvato in via preliminare i primi decreti attuativi. Il decreto su governance, formazione e lavoro dedica un'ampia sezione all'alfabetizzazione: scuola, pubblica amministrazione, università, professioni, magistratura e sanità, con obblighi per gli ordini professionali di aggiornare i propri regolamenti includendo alfabetizzazione tecnica, giuridica ed etica.
              </p>
              <p>
                Per chi si occupa di selezione e organizzazione c'è un passaggio decisivo: nei processi decisionali sul rapporto di lavoro, i datori che utilizzano sistemi di IA devono assicurare che le decisioni su costituzione, modifica o cessazione del rapporto, incluse le misure disciplinari, non siano adottate sulla base del solo trattamento automatizzato. La decisione definitiva deve essere riservata a una persona fisica con potere effettivo e autonomo, il lavoratore ha diritto a una spiegazione comprensibile della decisione e il licenziamento intimato in violazione è nullo. Inoltre, l'uso di sistemi di IA che incidono su organizzazione del lavoro e sicurezza entra nel documento di valutazione dei rischi ex d.lgs. 81/2008. È difficile immaginare un segnale più chiaro del fatto che la comprensione dell'IA — dei suoi limiti, dei suoi output, delle responsabilità che comporta — sia ormai parte integrante della competenza manageriale, in particolare per chi guida funzioni HR, operations e di controllo.
              </p>

              <h2 className="text-3xl mt-16 mb-8 text-ink border-b border-accent-soft pb-4">
                Che cosa significa davvero AI literacy per un manager
              </h2>
              <p>
                La definizione europea oggi più rilevante è quella richiamata dalla Commissione nella Q&A ufficiale sull'articolo 4 dell'AI Act: AI literacy significa possedere competenze, conoscenze e comprensione tali da consentire un dispiegamento informato dei sistemi di IA e una consapevolezza concreta di opportunità, rischi e possibili danni. La Commissione aggiunge che il contenuto minimo di un programma serio dovrebbe includere una comprensione generale di che cosa sia l'IA, di come funzioni, di quale IA venga usata in organizzazione, del ruolo dell'impresa come provider o deployer, dei rischi specifici dei sistemi adottati e degli aspetti legali, etici e di governance pertinenti.
              </p>
              <p>
                La letteratura accademica aiuta a chiarire un aspetto importante: literacy non coincide con mera familiarità strumentale. La review di Ng e colleghi propone quattro dimensioni dell'AI literacy — conoscere e comprendere, usare e applicare, valutare, affrontare le implicazioni etiche — e la letteratura successiva distingue fra literacy e competency: la prima riguarda il sapere, la seconda la capacità di applicare quel sapere in modo utile, con fiducia e riflessività. In altre parole, per un dirigente non basta "aver provato un chatbot": serve la capacità di usarlo come oggetto di decisione, controllo e giudizio.
              </p>
              <p>
                Per il top management la questione ha ormai anche una base empirica. Lo studio open access di Pinski, Hofmann e Benlian (2024) mostra che l'AI literacy del top management team ha un effetto positivo sia sull'AI orientation dell'impresa — la capacità di riconoscere dove l'IA genera valore — sia sulla AI implementation ability, cioè la capacità di realizzare concretamente quel valore. In parallelo, il lavoro di Benlian e Pinski pubblicato su Business Horizons (online da ottobre 2025) propone un'AI Literacy Assessment Matrix esplicitamente adattata ai diversi livelli manageriali e un canvas per pianificare sviluppo e misurazione delle competenze AI in organizzazione.
              </p>
              <p>
                Da qui discende una conclusione pratica. Managerial AI literacy non significa saper progettare modelli o scrivere codice, salvo ruoli specifici. Significa, più realisticamente, saper distinguere tra casi d'uso seri e hype, comprendere limiti e failure mode, farsi spiegare dati, dipendenze e assunzioni, pretendere evidenze documentali, fissare ownership e controlli, e capire quando l'ultima parola deve restare a un essere umano. Questa lettura è ben supportata dal disegno role-based dell'AI Act, dal NIST AI RMF e dalla letteratura più recente sull'assessment per livelli manageriali.
              </p>

              <h2 className="text-3xl mt-16 mb-8 text-ink border-b border-accent-soft pb-4">
                Quali competenze cercare nei candidati di responsabilità
              </h2>
              <p>
                La prima dimensione da cercare è il <strong>discernimento strategico</strong>. Un candidato credibile non parla di IA solo in termini di efficienza o moda, ma sa collegarla a priorità di business, vantaggio competitivo, processi, customer value e limiti di contesto. La ricerca sull'AI literacy del top management mostra proprio che la capacità di generare valore con l'IA dipende dall'orientamento strategico del vertice.
              </p>
              <p>
                La seconda è la <strong>comprensione regolatoria e fiduciaria</strong>. Chi aspira a ruoli di responsabilità deve saper riconoscere la posizione dell'organizzazione nella catena del valore dell'IA, capire se sta sviluppando, acquistando o solo utilizzando sistemi, e saper collegare ogni uso a un livello di rischio, a doveri di documentazione, a requisiti di oversight e a possibili impatti su soggetti interessati. La Commissione insiste su questa lettura risk-based e role-based; il NIST richiede che obblighi legali e regolatori siano compresi, gestiti e documentati; il quadro italiano della Legge 132/2025 aggiunge responsabilità specifiche, a partire dall'ambito lavoro.
              </p>
              <p>
                La terza è la <strong>data e model governance literacy</strong>. Un buon candidato deve saper fare le domande giuste su provenienza dei dati, qualità, rappresentatività, limiti del training set, metriche di performance, validazione, dipendenze da fornitori, modelli terzi e piani di monitoraggio. Il NIST Playbook raccomanda documentazione standardizzata su business justification, scope, rischi attesi, assunzioni, limiti, training data, metodologia algoritmica, risultati di test e dipendenze upstream e downstream; il rapporto OCSE/Banca d'Italia richiama espressamente la necessità di assetti robusti di governance dei dati e dei modelli; ISO/IEC 42001 presenta uno schema organizzativo per gestire rischi e opportunità dell'IA in modo strutturato.
              </p>
              <p>
                La quarta dimensione è la capacità di impostare <strong>human oversight e accountability</strong>. La Commissione collega l'AI literacy agli articoli dell'AI Act su trasparenza e human oversight e chiarisce che, soprattutto nei contesti più rischiosi, affidarsi alle sole istruzioni d'uso non basta: servono formazione e guida ulteriori. Il NIST insiste su ruoli e responsabilità chiari, linee di comunicazione documentate, separazione delle funzioni, processi di revisione e, se necessario, comitati dedicati all'AI risk management. La legge italiana rende questo principio vincolante nel lavoro: la decisione definitiva spetta a una persona fisica con potere effettivo. Un dirigente maturo sa quindi definire chi decide, chi controlla, chi può fermare il sistema e chi risponde in caso di incidente.
              </p>
              <p>
                La quinta è il presidio di <strong>rischio, monitoraggio e metriche</strong>. Non basta approvare un caso d'uso: occorre saper chiedere indicatori, soglie, frequenza delle review, escalation e audit trail. Il NIST AI RMF fa del GOVERN una funzione trasversale, con monitoraggio continuo, revisione periodica, risk tolerance esplicita e processi documentati; la norma italiana UNI 11621-8 insiste sul fatto che i profili professionali AI debbano essere descritti anche tramite KPI; il Codice di Corporate Governance richiede che il board si autovaluti anche rispetto al ruolo svolto nella definizione delle strategie e nel monitoraggio dell'adeguatezza del sistema di controllo interno e gestione dei rischi.
              </p>
              <p>
                La sesta è la capacità di guidare <strong>cultura e apprendimento organizzativo</strong>. Sia la Commissione sia il NIST insistono sul fatto che la literacy debba essere proporzionata ai ruoli e che personale e partner debbano ricevere formazione adatta alle proprie responsabilità. Le raccomandazioni OCSE includono espressamente la costruzione di human capacity, la Strategia italiana 2024-2026 colloca imprese e formazione tra le macroaree decisive, e i decreti attuativi della Legge 132/2025 estendono l'alfabetizzazione a scuola, PA, professioni e formazione degli adulti. Per un candidato manageriale, quindi, la domanda non è solo "quanto ne sa lui", ma "è capace di far crescere literacy diffusa nell'organizzazione".
              </p>
              <p>
                Un segnale d'allarme, per contro, è il profilo che riduce l'IA a tool fluency. Se un candidato parla bene di prompt ma non sa discutere di ownership, dati, validazione, vendor risk, escalation, auditabilità o rischio reputazionale, non sta mostrando managerial AI literacy ma solo familiarità operativa di basso livello. Questa conclusione, pur essendo interpretativa, è coerente con l'impostazione della Commissione, del NIST e della letteratura che distingue literacy da competence applicata.
              </p>

              <h2 className="text-3xl mt-16 mb-8 text-ink border-b border-accent-soft pb-4">
                Come valutarle in modo serio e documentabile
              </h2>
              <p>
                Un assessment serio dovrebbe essere role-based, non generico. Il lavoro di Benlian e Pinski propone una matrice di valutazione tagliata sui diversi livelli manageriali; il Codice di Corporate Governance stabilisce che l'orientamento del board sui candidati deve individuare i profili manageriali e professionali e le competenze necessarie anche alla luce delle caratteristiche settoriali della società. Questo significa che la selezione di un responsabile operations, di un CFO, di un general counsel o di un consigliere indipendente non può usare la stessa check-list indistinta.
              </p>
              <p>
                Il primo test dovrebbe riguardare la <strong>traccia di esperienza reale</strong>. In un CV o in una reference call bisogna cercare evidenze di policy AI approvate o implementate, casi d'uso governati, criteri di priorità, coinvolgimento di legal/compliance/risk, decisioni di stop o redesign, gestione di fornitori e processi di monitoraggio post-deployment. Questo approccio deriva direttamente dai requisiti di documentazione, trasparenza, ruoli e review periodiche descritti dal NIST e dalle aspettative di governance richiamate dal rapporto OCSE/Banca d'Italia.
              </p>
              <p>
                Il secondo test è un <strong>colloquio per scenari</strong>. Vale molto più di una domanda teorica come "conosci ChatGPT?". Conviene presentare al candidato un caso concreto — un sistema di scoring, un assistente generativo interno, un tool per il recruitment — e chiedergli: dove vede valore, quali dati servono, quali rischi emergono, quali funzioni devono essere coinvolte, quali KPI pretenderebbe, quale supervisione umana manterrebbe e quali condizioni lo porterebbero a sospendere l'iniziativa. Questo formato riflette bene l'approccio risk-based europeo e la logica Map-Measure-Manage del NIST. Nel contesto italiano, il caso del recruitment è particolarmente istruttivo: con i decreti attuativi della Legge 132/2025, un candidato che non sa dove finisce il supporto algoritmico e dove inizia la responsabilità umana mostra una lacuna sostanziale, non formale.
              </p>
              <p>
                Il terzo test, molto utile per ruoli apicali, è una <strong>simulazione di board o executive committee</strong>. Qui non si valuta la conoscenza tecnica, ma il giudizio di governo: capacità di leggere un memo incompleto, riconoscere lacune informative, chiedere documentazione aggiuntiva, chiarire responsabilità, pretendere una soglia di rischio tollerabile e distinguere tra sperimentazione controllata e deployment pieno. È il tipo di competenza che i supervisori europei e britannici stanno esplicitamente chiedendo ai vertici e che il Codice di Corporate Governance ricomprende nelle dinamiche di composizione, funzionamento e autovalutazione dell'organo amministrativo.
              </p>
              <p>
                Il quarto test è la verifica della <strong>capacità di costruire sistema</strong>, non solo di decidere da solo. Un candidato forte descrive come ha coordinato funzioni diverse, come ha impostato flussi informativi, quali training ha promosso, come ha gestito la separazione tra sviluppo e controllo, e come ha costruito una catena di accountability. Il NIST suggerisce esplicitamente training differenziati per sottogruppi, chiarezza di ruoli, collaborazione con compliance e audit, e persino l'eventuale istituzione di board committees dedicati alla supervisione del rischio AI.
              </p>
              <p>
                In pratica, la formula più difendibile è questa: <strong>valutare l'AI literacy manageriale come capacità dimostrata di unire strategia, rischio, dati, compliance, controllo e execution</strong>. Non è una prova di brillantezza tecnologica. È una prova di affidabilità decisionale in un contesto in cui l'IA è già materia di governo societario.
              </p>

              <h2 className="text-3xl mt-16 mb-8 text-ink border-b border-accent-soft pb-4">
                Quadro italiano e internazionale da cui partire
              </h2>
              <p>
                Sul fronte italiano, la Strategia Italiana per l'Intelligenza Artificiale 2024-2026 presenta l'IA come leva di trasformazione di sistema e insiste sulla necessità di uno sviluppo antropocentrico, affidabile e sostenibile. Il documento individua quattro macroaree di azione — ricerca, pubblica amministrazione, imprese e formazione — e richiama la necessità di un equilibrio tra rapidità di adozione e presidio di privacy, sicurezza, trasparenza, sostenibilità e impatto sociale. La cornice legislativa è oggi completata dalla Legge 132/2025 e dai decreti attuativi in corso di adozione.
              </p>
              <p>
                Sempre in Italia, la pubblicazione della norma UNI 11621-8:2026 (30 aprile 2026) è un segnale molto concreto. Il Dipartimento per la trasformazione digitale la presenta come il primo standard nazionale in Europa che definisce in modo strutturato 12 profili professionali AI, allineati all'e-Competence Framework europeo: per ciascun profilo indica missione, compiti, risultati attesi, competenze, conoscenze, abilità e KPI. Fra questi profili compare anche il Chief AI Officer, accanto a ruoli di prodotto, dati, sicurezza, algoritmi e ricerca. Questo rafforza l'idea che le competenze AI possano e debbano essere tradotte in criteri osservabili di ruolo, anche per la selezione manageriale.
              </p>
              <p>
                Sul piano internazionale, il quadro è ormai sorprendentemente coerente. Gli OECD AI Principles, aggiornati nel 2024, insistono su diritti umani e valori democratici, fairness e privacy, transparency and explainability, robustness, security and safety, accountability e sviluppo della capacità umana. Il NIST AI RMF organizza la gestione del rischio in quattro funzioni, con la governance come base trasversale, richiedendo chiarezza di ruoli, documentazione, training, risk tolerance e review periodiche. ISO/IEC 42001 offre il primo standard di management system dedicato all'IA, pensato per bilanciare innovazione e governance. Il tema del board oversight sull'IA, del resto, non è nuovo: già nel 2020 il World Economic Forum, con il toolkit "Empowering AI Leadership", lo poneva come questione di consiglio di amministrazione, collegandolo a integrità, etica, "human in the loop" e framework di risk management. La differenza è che oggi quella prospettiva è diventata aspettativa esplicita dei supervisori e, in Italia, obbligo di legge.
              </p>
              <p>
                La conclusione più robusta, quindi, è questa: <strong>l'AI literacy sta diventando una vera dimensione di valutazione manageriale</strong>, perché il diritto europeo la esige, la legge italiana la rende operativa, i supervisori la pretendono ai vertici, gli standard la traducono in profili e KPI, e la ricerca empirica mostra che fa la differenza tra imprese che estraggono valore dall'IA e imprese che ne subiscono i rischi. Chi seleziona e valuta manager oggi ha il compito — e l'opportunità — di renderla osservabile, documentabile e comparabile.
              </p>
            </article>
          )}

          <div className="mt-24 pt-16 border-t border-accent-soft">
            <div className="mb-12">
              <h2 className="text-3xl md:text-4xl font-display font-medium text-ink mb-4">
                {isEn ? 'Sources & References' : 'Fonti & Riferimenti'}
              </h2>
              <p className="text-gray-500 font-light">
                {isEn ? 'Documentation and research referenced in the article.' : 'Documentazione e ricerca citata nell\'articolo.'}
              </p>
            </div>
            
            <div className="flex flex-col gap-4">
              {[
                { title: "AI Act Service Desk – Timeline for the Implementation of the EU AI Act", author: "Commissione europea", year: "2026" },
                { title: "AI Literacy: Questions & Answers (art. 4 AI Act)", author: "Commissione europea", year: "2026" },
                { title: "L’intelligenza artificiale nei mercati finanziari italiani", author: "OCSE", year: "2026" },
                { title: "L’intelligenza artificiale nei mercati finanziari italiani: l’OCSE presenta il rapporto finale", author: "Banca d’Italia", year: "2026" },
                { title: "Joint statement on frontier AI models and cyber resilience", author: "Bank of England, FCA e HM Treasury", year: "2026" },
                { title: "Strengthening operational resilience for the age of AI", author: "F. Elderson (BCE)", year: "2026" },
                { title: "Legge 23 settembre 2025, n. 132 – Disposizioni e deleghe al Governo in materia di intelligenza artificiale", author: "Gazzetta Ufficiale", year: "2025" },
                { title: "Intelligenza artificiale: quadro normativo e ruolo delle Autorità nazionali", author: "AgID", year: "2025" },
                { title: "AI: il CdM approva in via preliminare i decreti attuativi della Legge n. 132/2025", author: "ADVANT Nctm", year: "2026" },
                { title: "Conceptualizing AI literacy: An exploratory review", author: "D. Ng et al. (Computers and Education)", year: "2021" },
                { title: "AI Literacy for the top management: An upper echelons perspective", author: "M. Pinski, T. Hofmann, A. Benlian (Electronic Markets)", year: "2024" },
                { title: "The AI literacy development canvas: Assessing and building AI literacy in organizations", author: "A. Benlian, M. Pinski (Business Horizons)", year: "2025" },
                { title: "Artificial Intelligence Risk Management Framework (AI RMF 1.0)", author: "NIST", year: "2023" },
                { title: "NIST AI RMF Playbook – Govern", author: "NIST", year: "2023" },
                { title: "ISO/IEC 42001:2023 – Artificial intelligence management system", author: "ISO/IEC", year: "2023" },
                { title: "Intelligenza Artificiale: pubblicata la norma UNI 11621-8", author: "Dipartimento per la trasformazione digitale", year: "2026" },
                { title: "Codice di Corporate Governance", author: "Comitato per la Corporate Governance", year: "2020" },
                { title: "Strategia Italiana per l’Intelligenza Artificiale 2024-2026", author: "Governo Italiano", year: "2024" },
                { title: "AI Principles Overview", author: "OECD", year: "2024" },
                { title: "Empowering AI Leadership: An Oversight Toolkit for Boards of Directors", author: "World Economic Forum", year: "2020" }
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
    </>
  );
}
