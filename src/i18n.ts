import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  it: {
    translation: {
      "nav": {
        "chi-sono": "Chi sono",
        "aree-di-lavoro": "Aree di Lavoro",
        "metodo": "Metodo",
        "insights": "Insights",
        "contatti": "Contatti"
      },
      "footer": {
        "info": "Info",
        "city": "Milano",
        "vat": "P.IVA 10706990966",
        "rights": "© 2026 — Tutti i diritti riservati"
      },
      "home": {
        "hero_subtitle": "Talent Sourcing Advisory",
        "hero_desc": "Ricerca e valutazione di professionisti senior e figure manageriali che sostengono la capacità di trasformazione dell'organizzazione.",
        "btn_contact": "Entra in contatto",
        "btn_method": "Esplora il metodo",
        "intro_title": "Il brief iniziale raramente coincide con quello che <span className=\"italic\">effettivamente serve.</span>",
        "intro_p1": "Lavoro nella ricerca e selezione da quasi vent'anni, con un focus su ruoli di middle management e senior professional. Il valore consulenziale consiste nell'arrivare insieme alla definizione vera del mandato prima di attivare la ricerca.",
        "intro_p2": "La mia metodologia integra una dimensione analitica di mappatura con una lettura psicometrica e semantica della motivazione del candidato.",
        "experience_quote": "\"Facilito l'incontro tra professionisti e aziende, nei momenti in cui entrambi cercano qualcosa di importante.\"",
        "engagements_title": "Selected Engagements",
        "engagements_explore": "Alcune case histories",
        "engagements": [
          {
            "title": "Direzione di Stabilimento",
            "sector": "Life Sciences & Pharma",
            "description": "Plant Manager con expertise GMP per impianto produttivo da 400 dipendenti in Lombardia."
          },
          {
            "title": "Sales Director Italia",
            "sector": "Packaging & Industrial",
            "description": "Ristrutturazione direzione vendite per gruppo internazionale entrato di recente nel mercato italiano."
          },
          {
            "title": "Production Manager",
            "sector": "Cosmetic Industrial",
            "description": "Responsabile produzione per stabilimento da 600 dipendenti in fase di scaling industriale."
          }
        ],
        "insights_subtitle": "Pensiero e Metodo",
        "insights_title": "Insights & Prospettive",
        "insights_explore": "Tutti gli articoli",
        "pillars_title": "Un approccio analitico e interdipendente.",
        "pillars_desc": "Il mio metodo integra strumenti psicometrici scientificamente validati con l'analisi semantica del linguaggio della motivazione.",
        "report_title": "Ogni nostra ricerca si chiude con un <span className=\"italic text-accent\">Search Report digitale</span>: non un PDF, ma intelligence di mercato navigabile.",
        "report_cta": "Scopri il metodo",
        "report_bands": [
          { "title": "TALENT MAPPING", "desc": "Perimetro del talent pool esplorato" },
          { "title": "COMPENSATION BENCHMARKING", "desc": "Ranges salariali, benefits, modelli MBO" },
          { "title": "DISTRIBUZIONE GEOGRAFICA", "desc": "Dove si concentra il talento" },
          { "title": "COMPOSIZIONE SETTORIALE", "desc": "Industrie e mercati di provenienza" }
        ],
        "pillars": [
          { "t": "Headhunting Analitico", "d": "La mappatura strutturata come deliverable consulenziale autonomo." },
          { "t": "Contesto Organizzativo", "d": "La logica delle interdipendenze per prevenire fallimenti prevedibili." },
          { "t": "Valutazione Integrata", "d": "Psicometria e analisi semantica per distinguere l'attitudine reale." }
        ]
      },
      "about": {
        "role": "Talent Acquisition Advisor",
        "title": "HR passionated & <br /><span className=\"italic text-accent\">Head Hunter.</span>",
        "p1": "Con quasi 20 anni di esperienza in talent acquisition nei settori Industriale, Life Sciences e Servizi, unisco solide competenze di strategia di recruitment a un'esecuzione tecnica hands-on.",
        "quote": "\"L'innovazione nel recruitment passa attraverso la capacità di trasformare la complessità organizzativa in insight e azioni misurabili, grazie anche alla tecnologia.\"",
        "p2": "Il mio background spazia dall'headhunting per ruoli manageriali e direzionali, all'avviamento e gestione di business line nel segmento Healthcare/Life Sciences, fino alla consulenza HR più organizzativa.",
        "p3": "A questa esperienza unisco uno stack tecnico avanzato: progetto, sviluppo e metto in produzione in autonomia web app e dashboard AI-powered su Google Cloud. Automatizzando l'analisi dei dati HR e sfruttando tool di AI multimodale (come video e voce sintetica), trasformo la reportistica in insight sempre accessibili, riducendo i tempi operativi e restituendo un valore di delivery più alto ai candidati e alle aziende."
      },
      "work_areas": {
        "subtitle": "Perimetro Operativo",
        "title": "Settori e <br /><span className=\"italic text-accent\">Engagement.</span>",
        "p1": "In quasi vent'anni di lavoro nella ricerca di figure manageriali e direttive ho attraversato settori industriali molto diversi tra loro. Questa trasversalità è oggi uno degli asset più consistenti del mio lavoro: mi consente di leggere il mercato delle competenze in modo comparativo, di riconoscere le ricorrenze che attraversano contesti apparentemente distanti, e di costruire sourcing strategies che escono dai perimetri ovvi.",
        "p2": "Il processo di identificazione dei candidati combina hunting diretto, mappature strutturate del mercato di riferimento e attività di networking professionale costruita negli anni. È un lavoro analitico più che meccanico: ogni mandato significativo parte dalla ricostruzione dell'universo dei candidati potenziali e dall'analisi delle traiettorie di carriera tipiche per ruoli analoghi nel settore del cliente.",
        "engagements_title": "Selected Engagements",
        "leadership_title": "Leadership <br />Assessment",
        "leadership_desc": "Valutazione predittiva di candidati e team manageriali attraverso metodologia integrata di KPI qualitativi e quantitativi, strumenti psicometrici e analisi semantica della motivazione. L'assessment è parte costitutiva delle ricerche, e può essere ingaggiato come servizio dedicato per:",
        "leadership_items": [
          "Valutazione di candidati selezionati direttamente dal cliente",
          "Profilazione di team manageriali in fase di trasformazione organizzativa"
        ],
        "sectors": [
          {
            "title": "Life Sciences, Pharma, MedTech & Cosmetica",
            "description": "Ricerca e selezione per l'intero ecosistema della salute e del benessere. Solida expertise su ruoli operativi e direttivi in produzione, qualità, regulatory affairs, R&D, medical affairs e commerciale."
          },
          {
            "title": "Aziende Chimiche",
            "description": "Competenze manageriali e tecniche per l'industria chimica. Individuazione di leadership operations, QHSE, process engineering e direzione stabilimento per multinazionali e gruppi padronali."
          },
          {
            "title": "Metalmeccanica",
            "description": "Ingegneria, plant management e supply chain. Interventi mirati per l'acquisizione di talenti in contesti di automazione industriale, precision engineering e trasformazione lean."
          },
          {
            "title": "Packaging",
            "description": "Soluzioni di talento per l'industria dell'imballaggio. Direzione strategica, R&D engineering, sostenibilità dei materiali e ottimizzazione della supply chain globale e locale."
          },
          {
            "title": "Consulenza Energy",
            "description": "Ricerca di professionisti per il settore della transizione energetica ed ESCo. Ruoli tecnici, commerciali ed ESG con forte convergenza tra visione strategica e profonda competenza tecnologica."
          },
          {
            "title": "ICT",
            "description": "Information & Communication Technology. Selezione di profili senior e manageriali per guidare la digital transformation, architetture di sistema, infrastrutture e innovazione tecnologica."
          }
        ],
        "engagements": [
          { "label": "Direzione di Stabilimento", "context": "Per multinazionale farmaceutica quotata" },
          { "label": "Sales Director Italia", "context": "Per gruppo industriale del packaging" },
          { "label": "Production Manager", "context": "Per gruppo cosmetico" },
          { "label": "Responsabile HSE", "context": "Per gruppo chimico multi-sede" },
          { "label": "Manager & Senior Manager di practice", "context": "STRATEGY & RISK ADVISORY — FINANCIAL SERVICES" }
        ]
      },
      "methodology": {
        "subtitle": "Metodologia",
        "title": "Tre dimensioni <br /><span className=\"italic text-accent\">interdipendenti.</span>",
        "desc": "Ogni mandato di ricerca affronta simultaneamente tre domande: dove cercare, come capire il ruolo reale e come distinguere l'attitudine dei candidati.",
        "pillars": [
          {
            "id": "01",
            "title": "Headhunting Analitico",
            "subtitle": "La mappatura come strumento consulenziale",
            "content": "L'identificazione dei candidati non è un'attività meccanica di sourcing. È un esercizio analitico che inizia con la costruzione di una mappa strutturata del mercato: aziende competitor, settori adiacenti, traiettorie di carriera tipiche. Fornisco al cliente un file di mappatura navigabile che traccia l'universo dei candidati potenziali e fornisce una lettura strategica del mercato delle competenze."
          },
          {
            "id": "02",
            "title": "Contesto Organizzativo",
            "subtitle": "La logica delle interdipendenze",
            "content": "Una posizione manageriale non vive nel vuoto. Vive in una rete di interdipendenze: riporti gerarchici, relazioni con peer, dinamiche con il board. Mappare questa rete significa prevenire fallimenti prevedibili. Dedico tempo alla ricostruzione delle aspettative implicite e delle criticità che il candidato erediterà."
          },
          {
            "id": "03",
            "title": "Valutazione Integrata",
            "subtitle": "Psicometria e Analisi Semantica",
            "content": "Integro strumenti psicometrici scientificamente validati (HEXACO, leadership styles) con l'analisi semantica del linguaggio della motivazione. La struttura motivazionale emerge dal come si racconta la carriera: pattern semantici che distinguono l'attitudine reale dal profilo dichiarato sul CV."
          }
        ],
        "cont_title": "Continuità nell'inserimento",
        "cont_p1": "Il mandato non si conclude con la firma del contratto. Mantengo un rapporto strutturato di follow-up con candidato e cliente nei primi sei mesi di inserimento.",
        "cont_p2": "Check-in periodici permettono di intercettare precocemente eventuali criticità di integrazione e di facilitare gli aggiustamenti necessari per il successo del placement.",
        "sem_title": "Analisi Semantica",
        "sem_quote": "\"La struttura motivazionale emerge molto più dal come racconta la propria carriera che dal cosa dichiara di volere.\""
      },
      "insights": {
        "subtitle": "Pensiero e Metodo",
        "title": "Insights e <br /><span className=\"italic text-accent\">Prospettive.</span>",
        "desc": "Riflessioni sulle dinamiche di leadership e sulle trasformazioni nei processi di ricerca manageriale contemporanea.",
        "read_abstract": "Leggi abstract",
        "read_article": "Leggi articolo completo",
        "articles": [
          {
            "title": "Paper & Packaging 2026: leggere la trasformazione del settore attraverso la lente del capitale umano",
            "excerpt": "Se la carta grafica perde terreno, il packaging affronta una crescita con vincoli normativi crescenti e competenze sempre più rare: priorità HR e organizzative.",
            "tag": "Paper & Packaging",
            "date": "Maggio 2026",
            "slug": "/insights/paper-packaging-2026"
          },
          {
            "title": "2026: L'Anno della Convergenza",
            "excerpt": "Dall'AI Agentica al nuovo CCNL: la trasformazione del capitale umano nel Life Sciences italiano.",
            "tag": "Life Sciences",
            "date": "Maggio 2026",
            "slug": "/insights/life-sciences-2026"
          },
          {
            "title": "Shadow AI nelle PMI: il rischio invisibile nascosto nei vostri uffici",
            "excerpt": "Come un fenomeno sommerso sta mettendo a rischio dati, compliance e vantaggio competitivo delle piccole e medie imprese lombarde.",
            "tag": "Technology",
            "date": "Maggio 2026",
            "slug": "/insights/shadow-ai-pmi"
          },
          {
            "title": "AI Literacy come dimensione di valutazione manageriale",
            "excerpt": "In un mercato in cui la governance dell'IA è materia di CDA, cosa cercare nei candidati di responsabilità.",
            "tag": "Technology",
            "date": "In programma"
          },
          {
            "title": "Analisi semantica della motivazione nei colloqui manageriali",
            "excerpt": "Cosa rivela il linguaggio del candidato che il curriculum non racconta.",
            "tag": "Methodology",
            "date": "In programma"
          },
          {
            "title": "La transizione del management storico nelle PMI italiane",
            "excerpt": "Quando il fondatore decide che è arrivato il momento di managerializzare: pattern e condizioni di successo.",
            "tag": "PMI",
            "date": "Maggio 2026",
            "slug": "/insights/transizione-management-pmi"
          }
        ]
      },
      "contact": {
        "title": "Iniziamo una <span className=\"italic text-accent\">conversazione.</span>",
        "institutional_title": "Mandati istituzionali e progetti enterprise",
        "institutional_desc": "gestiti nell'ambito di Human Value / network Kienbaum",
        "private_title": "Consulenza privata e progetti diretti",
        "form_title": "Invia un messaggio",
        "form_name": "Nome e Cognome",
        "form_name_placeholder": "Il tuo nome...",
        "form_email": "Email",
        "form_email_placeholder": "esempio@email.it",
        "form_message": "Messaggio",
        "form_message_placeholder": "Descrivi brevemente il tuo mandato...",
        "form_submit": "Invia Messaggio",
        "form_protected": "Piattaforma protetta — I dati rimangono confidenziali."
      }
    }
  },
  en: {
    translation: {
      "nav": {
        "chi-sono": "About",
        "aree-di-lavoro": "Practice Areas",
        "metodo": "Methodology",
        "insights": "Insights",
        "contatti": "Contact"
      },
      "footer": {
        "info": "Info",
        "city": "Milan, Italy",
        "vat": "VAT 10706990966",
        "rights": "© 2026 — All rights reserved"
      },
      "home": {
        "hero_subtitle": "Talent Sourcing Advisory",
        "hero_desc": "Search and assessment of senior professionals and managerial figures who support the organization's transformation capabilities.",
        "btn_contact": "Get in touch",
        "btn_method": "Explore the method",
        "intro_title": "The initial brief rarely matches what is <span className=\"italic\">actually needed.</span>",
        "intro_p1": "I have been working in search and selection for almost twenty years, focusing on middle management and senior professional roles. The consulting value lies in arriving together at the true definition of the assignment before activating the search.",
        "intro_p2": "My methodology integrates an analytical mapping dimension with a psychometric and semantic reading of the candidate's motivation.",
        "experience_quote": "\"I facilitate the meeting between professionals and companies, at times when both are looking for something important.\"",
        "engagements_title": "Selected Engagements",
        "engagements_explore": "Some case histories",
        "engagements": [
          {
            "title": "Plant Director",
            "sector": "Life Sciences & Pharma",
            "description": "Plant Manager with GMP expertise for a 400-employee manufacturing facility in Lombardy."
          },
          {
            "title": "Sales Director Italy",
            "sector": "Packaging & Industrial",
            "description": "Sales leadership restructuring for an international group recently entering the Italian market."
          },
          {
            "title": "Production Manager",
            "sector": "Cosmetic Industrial",
            "description": "Production Manager for a 600-employee plant during industrial scaling."
          }
        ],
        "insights_subtitle": "Thought and Method",
        "insights_title": "Insights & Perspectives",
        "insights_explore": "All articles",
        "pillars_title": "An analytical and interdependent approach.",
        "pillars_desc": "My method integrates scientifically validated psychometric tools with semantic analysis of motivational language.",
        "report_title": "Every search concludes with a <span className=\"italic text-accent\">digital Search Report</span>: not a PDF, but navigable market intelligence.",
        "report_cta": "Explore the method",
        "report_bands": [
          { "title": "TALENT MAPPING", "desc": "Scope of the talent pool explored" },
          { "title": "COMPENSATION BENCHMARKING", "desc": "Salary ranges, benefits, MBO patterns" },
          { "title": "GEOGRAPHIC DISTRIBUTION", "desc": "Where the talent is concentrated" },
          { "title": "SECTOR COMPOSITION", "desc": "Industries of provenance" }
        ],
        "pillars": [
          { "t": "Analytical Headhunting", "d": "Structured mapping as an independent consulting deliverable." },
          { "t": "Organizational Context", "d": "The logic of interdependencies to prevent predictable failures." },
          { "t": "Integrated Assessment", "d": "Psychometrics and semantic analysis to distinguish real aptitude." }
        ]
      },
      "about": {
        "role": "Talent Acquisition Advisor",
        "title": "HR passionated & <br /><span className=\"italic text-accent\">Head Hunter.</span>",
        "p1": "With nearly 20 years of talent acquisition experience in the Industrial, Life Sciences, and Services sectors, I combine solid recruitment strategy skills with hands-on technical execution.",
        "quote": "\"Innovation in recruitment happens through the ability to transform organizational complexity into measurable insights and actions, leveraging technology as well.\"",
        "p2": "My background ranges from headhunting for managerial roles, to the launch and management of business lines in the Healthcare/Life Sciences segment, up to more organizational HR consulting.",
        "p3": "I pair this experience with an advanced technical stack: I independently design, develop, and deploy AI-powered web apps and dashboards on Google Cloud. By automating HR data analysis and leveraging multimodal AI tools (like synthetic video and voice), I transform reporting into always-accessible insights, reducing operational time and delivering higher value to candidates and companies."
      },
      "work_areas": {
        "subtitle": "Operative Perimeter",
        "title": "Sectors and <br /><span className=\"italic text-accent\">Engagements.</span>",
        "p1": "In almost twenty years of working in middle management and senior professional search, I have traversed very different industrial sectors. This transversality is today one of the most substantial assets of my work: it allows me to read the skills market comparatively, to recognize recurrences across seemingly distant contexts, and to build sourcing strategies that go beyond obvious boundaries.",
        "p2": "The candidate identification process combines direct hunting, structured mapping of the target market, and professional networking built over the years. It is an analytical rather than mechanical work: every significant assignment starts from reconstructing the universe of potential candidates and analyzing typical career trajectories for similar roles in the client's sector.",
        "engagements_title": "Selected Engagements",
        "leadership_title": "Leadership <br />Assessment",
        "leadership_desc": "Predictive assessment of candidates and management teams through an integrated methodology of qualitative and quantitative KPIs, psychometric tools, and semantic analysis of motivation. Assessment is a constituent part of searches, and can be engaged as a dedicated service for:",
        "leadership_items": [
          "Assessment of candidates directly selected by the client",
          "Profiling of management teams during organizational transformation"
        ],
        "sectors": [
          {
            "title": "Life Sciences, Pharma, MedTech & Cosmetics",
            "description": "Search and selection for the entire health and wellness ecosystem. Solid expertise in operational and directive roles in production, quality, regulatory affairs, R&D, medical affairs, and sales."
          },
          {
            "title": "Chemical Companies",
            "description": "Managerial and technical skills for the chemical industry. Identification of operations leadership, QHSE, process engineering, and plant management for multinationals and privately owned groups."
          },
          {
            "title": "Metalworking & Machinery",
            "description": "Engineering, plant management, and supply chain. Targeted interventions for talent acquisition in industrial automation contexts, precision engineering, and lean transformation."
          },
          {
            "title": "Packaging",
            "description": "Talent solutions for the packaging industry. Strategic direction, R&D engineering, material sustainability, and global/local supply chain optimization."
          },
          {
            "title": "Energy Consulting",
            "description": "Search for professionals in the energy transition and ESCo sectors. Technical, commercial, and ESG roles with strong convergence between strategic vision and deep technological expertise."
          },
          {
            "title": "ICT",
            "description": "Information & Communication Technology. Selection of executive and managerial profiles to lead digital transformation, system architectures, infrastructure, and technological innovation."
          }
        ],
        "engagements": [
          { "label": "Plant Director", "context": "For a listed multinational pharmaceutical company" },
          { "label": "Sales Director Italy", "context": "For an industrial packaging group" },
          { "label": "Production Manager", "context": "For a cosmetic group" },
          { "label": "HSE Manager", "context": "For a multi-site chemical group" },
          { "label": "Manager & Senior Manager di practice", "context": "STRATEGY & RISK ADVISORY — FINANCIAL SERVICES" }
        ]
      },
      "methodology": {
        "subtitle": "Methodology",
        "title": "Three interdependent <br /><span className=\"italic text-accent\">dimensions.</span>",
        "desc": "Every search assignment simultaneously addresses three questions: where to look, how to understand the real role, and how to distinguish candidates' aptitude.",
        "pillars": [
          {
            "id": "01",
            "title": "Analytical Headhunting",
            "subtitle": "Mapping as a consulting tool",
            "content": "Candidate identification is not a mechanical sourcing activity. It is an analytical exercise that begins with constructing a structured map of the market: competitor companies, adjacent sectors, typical career trajectories. I provide the client with a navigable mapping file that traces the universe of potential candidates and offers a strategic reading of the skills market."
          },
          {
            "id": "02",
            "title": "Organizational Context",
            "subtitle": "The logic of interdependencies",
            "content": "A managerial position does not live in a vacuum. It lives in a network of interdependencies: hierarchical reporting, relationships with peers, board dynamics. Mapping this network means preventing predictable failures. I dedicate time to reconstructing the implicit expectations and critical issues the candidate will inherit."
          },
          {
            "id": "03",
            "title": "Integrated Assessment",
            "subtitle": "Psychometrics and Semantic Analysis",
            "content": "I integrate scientifically validated psychometric tools (HEXACO, leadership styles) with semantic analysis of motivational language. The motivational structure emerges from how one recounts their career: semantic patterns that distinguish true aptitude from the profile claimed on the resume."
          }
        ],
        "cont_title": "Onboarding Continuity",
        "cont_p1": "The assignment does not end with the contract signing. I maintain a structured follow-up relationship with the candidate and client during the first six months of onboarding.",
        "cont_p2": "Periodic check-ins allow for the early interception of potential integration issues and facilitate the adjustments necessary for a successful placement.",
        "sem_title": "Semantic Analysis",
        "sem_quote": "\"The motivational structure emerges much more from how one recounts their career than from what they claim to want.\""
      },
      "insights": {
        "subtitle": "Thought and Method",
        "title": "Insights & <br /><span className=\"italic text-accent\">Perspectives.</span>",
        "desc": "Reflections on leadership dynamics and transformations in contemporary executive search processes.",
        "read_abstract": "Read abstract",
        "read_article": "Read full article",
        "articles": [
          {
            "title": "Paper & Packaging 2026: reading sector transformation through the human capital lens",
            "excerpt": "As graphic paper loses ground, packaging expands with growing compliance constraints and scarce technical skills: HR and organizational priorities.",
            "tag": "Paper & Packaging",
            "date": "May 2026",
            "slug": "/insights/paper-packaging-2026"
          },
          {
            "title": "2026: The Year of Convergence",
            "excerpt": "From Agentic AI to the new national collective agreement: the transformation of human capital in Italian Life Sciences.",
            "tag": "Life Sciences",
            "date": "May 2026",
            "slug": "/insights/life-sciences-2026"
          },
          {
            "title": "Shadow AI in SMEs: the invisible risk hidden in your offices",
            "excerpt": "How a submerged phenomenon is putting data, compliance, and competitive advantage of SMEs at risk.",
            "tag": "Technology",
            "date": "May 2026",
            "slug": "/insights/shadow-ai-pmi"
          },
          {
            "title": "AI Literacy as a managerial assessment dimension",
            "excerpt": "In a market where AI governance is a board matter, what to look for in leadership candidates.",
            "tag": "Technology",
            "date": "Upcoming"
          },
          {
            "title": "Semantic analysis of motivation in executive interviews",
            "excerpt": "What the candidate's language reveals that the resume doesn't tell.",
            "tag": "Methodology",
            "date": "Upcoming"
          },
          {
            "title": "The transition of historical management in Italian SMEs",
            "excerpt": "When the founder decides it's time to managerialize: patterns and conditions for success.",
            "tag": "SME",
            "date": "May 2026",
            "slug": "/insights/transizione-management-pmi"
          }
        ]
      },
      "contact": {
        "title": "Let's start a <span className=\"italic text-accent\">conversation.</span>",
        "institutional_title": "Institutional mandates and enterprise projects",
        "institutional_desc": "managed within Human Value / Kienbaum network",
        "private_title": "Private consulting and direct projects",
        "form_title": "Send a message",
        "form_name": "Full Name",
        "form_name_placeholder": "Your name...",
        "form_email": "Email",
        "form_email_placeholder": "example@email.com",
        "form_message": "Message",
        "form_message_placeholder": "Briefly describe your assignment...",
        "form_submit": "Send Message",
        "form_protected": "Protected platform — Data remains confidential."
      }
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "it",
    fallbackLng: "it",
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
