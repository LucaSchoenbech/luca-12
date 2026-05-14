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
        "p1": "Quasi vent'anni in talent acquisition, lungo tre traiettorie che oggi convergono in un unico modo di lavorare: l'esecuzione di ricerche dirette per i settori industriali, l'esperienza di delivery nel mondo Life Sciences e Healthcare, e una lettura organizzativa dei contesti aziendali — perché identificare le persone giuste richiede prima di capire dove un ruolo è collocato nell'organizzazione, da chi dipende, su quali leve incide. Su queste basi opero come libero professionista, su mandati selezionati, dal middle management ai ruoli direttivi.",
        "quote": "\"Un curriculum racconta dove una persona è stata. Il mio lavoro è capire dove può ancora andare — e con chi.\"",
        "p2": "Il mio approccio combina hunting diretto, mappature strutturate del mercato di riferimento e una rete professionale costruita in vent'anni di interazione con candidati e clienti. Ogni mandato significativo parte dalla ricostruzione dell'universo dei profili potenziali e dall'analisi delle traiettorie di carriera tipiche per ruoli analoghi nel settore. È un lavoro analitico, non meccanico: la differenza tra trovare un nome e scegliere il nome giusto sta nella profondità con cui si legge il mercato e nella precisione con cui si comprende il contesto organizzativo del cliente.",
        "p3": "A questo metodo affianco uno stack tecnico costruito in autonomia. Progetto e metto in produzione web app e dashboard AI-powered su Google Cloud, integrando analisi automatizzata dei dati HR e strumenti di intelligenza artificiale multimodale — dalla sintesi vocale alla generazione video. È infrastruttura di delivery: riduce i tempi operativi, libera tempo per la valutazione delle persone e restituisce a candidati e aziende una reportistica più ricca e accessibile."
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
            "title": "Pharma & Specialty Care",
            "description": "Ricerca di figure manageriali e specialistiche lungo l'intera catena del farmaco etico. Esperienza consolidata su medical affairs, market access, regulatory, brand e commerciale ospedaliero, con copertura di aree terapeutiche complesse — oncologia, malattie rare, cardiometabolica — e di filiali italiane di gruppi internazionali."
          },
          {
            "title": "Medical Devices & Diagnostica",
            "description": "Profili direttivi per dispositivi medici di classe IIb/III, elettromedicali, IVD, diagnostica molecolare e point-of-care. Competenza specifica sulle transizioni regolatorie MDR/IVDR, sulla gestione del canale ospedaliero e dei gruppi d'acquisto, su funzioni tender, application e service field."
          },
          {
            "title": "Cosmetica, Fragranze, Hair Care & Consumer Health",
            "description": "Selezione per i mondi della bellezza e del benessere quotidiano: dermocosmesi, profumeria selettiva e mass market, hair care professionale e retail, OTC, integratori e nutraceutici. Ruoli di brand management, trade marketing, innovation & NPD, key account su canale farmacia, GDO e perfumery."
          },
          {
            "title": "Chimica & Process Industries",
            "description": "Leadership tecnica e manageriale per chimica fine, specialty chemicals, coatings e intermedi. Direzione di stabilimento, QHSE con esperienza su siti Seveso, process engineering, R&D di prodotto sostenibile, procurement strategico in contesti di pressione sui margini."
          },
          {
            "title": "Metalmeccanica, Elettronica Industriale & Automazione",
            "description": "Ingegneria, plant management e supply chain in contesti di precision engineering, componentistica B2B e macchine utensili. A queste competenze si affianca un focus crescente su strumentazione, sensoristica, robotica e automazione di fabbrica — l'asse dove la meccanica italiana incontra l'intelligenza della macchina."
          },
          {
            "title": "Impiantistica, Building Materials & Industria Pesante",
            "description": "Ricerca di profili per EPC e contracting industriale, oil & gas, power generation, e per i comparti dei materiali da costruzione: cemento, ceramiche, laterizi, vetro, compositi. Filiera capital-intensive, con esigenze manageriali forti su operations, engineering, HSE e gestione di stabilimenti complessi."
          },
          {
            "title": "Packaging",
            "description": "Soluzioni di talento per l'intera filiera dell'imballaggio: OEM di macchine packaging food, beverage e pharma; imballaggi primari farmaceutici; flessibili e sostenibili. Ruoli in plant management, engineering meccatronico, R&D in risposta alla normativa PPWR, supply chain integrata e key account su clienti GMP."
          }
        ],
        "engagement_categories": [
          {
            "category": "Farmaceutico",
            "items": [
              { "role": "Medical Affairs Manager", "company": "Multinazionale farmaceutica specialty care (€500M+ Italia, 600 dip.)", "description": "strutturazione del team medical a supporto del lancio di una nuova area terapeutica." },
              { "role": "Market Access Manager", "company": "Filiale italiana di gruppo pharma USA su rare diseases (€100-500M, 200 dip.)", "description": "profilo con esperienza pricing & reimbursement su terapie ad alto costo." },
              { "role": "Brand Manager Senior", "company": "Multinazionale ethical tedesca (€1Mld+ Italia, 1500 dip.)", "description": "rilancio strategico di un franchise consolidato in concorrenza con nuovi entranti generici." },
              { "role": "Regulatory Affairs Manager", "company": "Gruppo farmaceutico italiano specialty/generics (€200-500M, 800 dip.)", "description": "rafforzamento della funzione in vista dell'espansione internazionale del portfolio." },
              { "role": "Hospital Sales Manager", "company": "Multinazionale pharma area cardiometabolica (€1Mld+, presenza EMEA)", "description": "successione di una figura storica con riorganizzazione del territorio nazionale." },
              { "role": "Key Account Manager Hospital", "company": "Divisione italiana di gruppo svizzero in oncologia (€500M+ Italia)", "description": "profilo ibrido scientifico-negoziale per gestione AIFA e centri ad alta complessità." }
            ]
          },
          {
            "category": "Chimico",
            "items": [
              { "role": "Responsabile di Stabilimento", "company": "Gruppo chimico specialties PE-backed (€200-500M, 3 stabilimenti, 600 dip.)", "description": "profilo con esperienza di scale-up e cultura industriale lean." },
              { "role": "R&D Manager", "company": "Multinazionale chimica fine francese (€2Mld+ globale, polo italiano 300 dip.)", "description": "guida del centro di ricerca nel ridisegno del portfolio prodotti sostenibili." },
              { "role": "EHS Manager", "company": "Polo industriale chimico italiano (€100-500M, 400 dip.)", "description": "allineamento ai nuovi obblighi ESG e gestione di un sito Seveso di soglia superiore." },
              { "role": "Sales Manager", "company": "Chimico specialty per packaging & coating, PMI italiana family-owned (€50-100M, 150 dip.)", "description": "apertura del canale food & beverage premium." },
              { "role": "Production Manager", "company": "Gruppo chimico multistabilimento (€200-500M, 500 dip.)", "description": "introduzione di logiche di pianificazione integrata in un contesto storicamente decentralizzato." },
              { "role": "Procurement Manager", "company": "Multinazionale chimica tedesca (€1Mld+, polo Italia 800 dip.)", "description": "centralizzazione degli acquisti strategici in fase di pressione sui margini." }
            ]
          },
          {
            "category": "Medicale (Medical Devices)",
            "items": [
              { "role": "Sales Manager Hospital", "company": "Multinazionale elettromedicali area cardiologia interventistica (€500M+ Italia, 400 dip.)", "description": "profilo con network consolidato sui centri Hub di alta complessità." },
              { "role": "Quality & Regulatory Manager", "company": "Gruppo medical devices Classe IIb/III (€100-500M, 300 dip.)", "description": "gestione della transizione MDR su un portfolio prodotti articolato." },
              { "role": "Tender Manager", "company": "Filiale italiana di gruppo medicale USA (€200-500M Italia)", "description": "strutturazione ex novo di una funzione gare dedicata in fase di espansione commerciale." },
              { "role": "Product Manager", "company": "Devices imaging, multinazionale giapponese (€1Mld+ globale)", "description": "lancio di una nuova piattaforma tecnologica sul mercato italiano." },
              { "role": "Marketing Manager", "company": "Mid-size leader di nicchia in cardiologia (€50-100M, 120 dip.)", "description": "costruzione della funzione marketing in un'azienda storicamente sales-driven." },
              { "role": "Key Account Manager", "company": "Disposable ospedalieri, gruppo industriale italiano (€100-500M, 600 dip.)", "description": "apertura di accordi quadro su gruppi d'acquisto regionali." }
            ]
          },
          {
            "category": "Diagnostica",
            "items": [
              { "role": "Sales Manager", "company": "IVD multinazionale per laboratori clinici (€500M+ Italia, 350 dip.)", "description": "riorganizzazione della rete commerciale post-consolidamento del mercato laboratori." },
              { "role": "Product Manager", "company": "Diagnostica molecolare e NGS, divisione italiana di gruppo USA (€100-500M Italia)", "description": "supporto al lancio di una piattaforma di oncologia di precisione." },
              { "role": "Marketing Manager", "company": "Point-of-care diagnostics, mid-size internazionale (€50-100M Italia, 80 dip.)", "description": "profilo con competenza su canale ospedaliero e medicina del territorio." },
              { "role": "Service & Technical Manager", "company": "Strumentazione clinica per grandi laboratori (€200-500M, 400 dip.)", "description": "ridisegno del modello di service field in ottica di efficienza e SLA contrattuali." },
              { "role": "Application Specialist Senior", "company": "Multinazionale tedesca di strumentazione laboratorio (€1Mld+ globale)", "description": "profilo con competenza tecnica avanzata su piattaforme di automazione totale." },
              { "role": "Area Manager", "company": "IVD, PMI italiana in espansione (€20-50M, 60 dip.)", "description": "apertura del mercato Centro-Sud sul canale laboratori privati." }
            ]
          },
          {
            "category": "Industriale & Impiantistica",
            "items": [
              { "role": "Plant Manager", "company": "Stabilimento manufacturing automotive (€100-500M, 800 dip.)", "description": "riorganizzazione della produzione in ottica Industry 4.0 e revisione dei KPI di stabilimento." },
              { "role": "Engineering Manager", "company": "EPC impiantistica industriale, gruppo italiano internazionalizzato (€200-500M, 700 dip.)", "description": "guida di progetti turnkey su clienti oil & gas e power generation." },
              { "role": "Operations Manager", "company": "Polo Italia di multinazionale industriale tedesca (€500M+, 1200 dip.)", "description": "ridisegno della funzione operations." }
            ]
          },
          {
            "category": "Packaging",
            "items": [
              { "role": "Plant Manager", "company": "Gruppo packaging machinery family-owned export-oriented (€100-500M, 400 dip.)", "description": "riorganizzazione della produzione in fase di crescita post-acquisizione." },
              { "role": "Engineering Manager", "company": "OEM packaging machinery food & beverage (€200-500M, 600 dip.)", "description": "guida del team di progettazione meccatronica per nuove linee ad alta velocità." },
              { "role": "R&D Manager", "company": "Imballaggi flessibili sostenibili (€100-500M, 300 dip.)", "description": "sviluppo di soluzioni mono-materiale e compostabili in risposta alla normativa PPWR." },
              { "role": "Sales Manager Export", "company": "Macchine packaging pharma, PMI italiana export-oriented (€50-100M, 200 dip.)", "description": "apertura dei mercati Asia-Pacifico e Medio Oriente con strutturazione della rete di agenti." },
              { "role": "Key Account Manager Pharma", "company": "Imballaggi primari farmaceutici, gruppo internazionale (€500M+, 1000 dip.)", "description": "gestione di top account con specifiche GMP e processi di validation." },
              { "role": "Quality Manager", "company": "Packaging primario pharma, gruppo italiano (€100-500M, 400 dip.)", "description": "strutturazione del sistema qualità per ampliamento del business verso clienti specialty multistabilimento." },
              { "role": "Supply Chain Manager", "company": "Gruppo industriale PE-backed (€100-500M, 5 stabilimenti)", "description": "centralizzazione planning e demand a fronte di crescita per acquisizioni." },
              { "role": "HSE / RSPP Manager", "company": "Gruppo industriale multistabilimento (€200-500M, 600 dip.)", "description": "profilo con competenze su siti Seveso e gestione integrata salute-sicurezza-ambiente." },
              { "role": "Sales Manager", "company": "Componentistica B2B per macchine utensili, PMI italiana export-oriented (€50-100M, 200 dip.)", "description": "apertura del canale OEM su mercati DACH e Nord Europa." }
            ]
          },
          {
            "category": "Consumer Health",
            "items": [
              { "role": "Marketing Manager", "company": "Divisione italiana di multinazionale OTC (€500M+ Italia, 800 dip.)", "description": "repositioning di un portfolio brand storici post-acquisizione." },
              { "role": "Trade Marketing Manager", "company": "Brand consumer health canale farmacia (€100-500M Italia, 300 dip.)", "description": "evoluzione del modello di category management con le catene farmacia organizzate." },
              { "role": "Sales Manager GDO", "company": "Integratori e nutraceutici, gruppo italiano (€50-100M, 150 dip.)", "description": "apertura del canale GDO premium in affiancamento al tradizionale farmacia." },
              { "role": "Brand Manager Senior", "company": "Linea benessere farmacia, divisione di multinazionale ethical (€1Mld+ globale)", "description": "rilancio di una linea storica con riposizionamento del target." },
              { "role": "Innovation & NPD Manager", "company": "Consumer health, mid-size italiano (€50-100M, 100 dip.)", "description": "strutturazione del processo di sviluppo nuovi prodotti su pipeline triennale." },
              { "role": "Key Account Manager Pharmacy", "company": "Filiale italiana di gruppo internazionale OTC (€200-500M Italia, 250 dip.)", "description": "gestione delle catene farmacia organizzate e dei nuovi gruppi d'acquisto." }
            ]
          }
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
            "title": "Il Fattore Umano nell'M&A: perché il 70% delle acquisizioni PE fallisce prima ancora di iniziare",
            "excerpt": "Il problema che nessuno vuole nominare in due diligence, dove si annida il paradosso più costoso del mid-market italiano.",
            "tag": "Talent Sourcing Advisory",
            "date": "14 Maggio 2026",
            "slug": "/insights/fattore-umano-ma"
          },
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
        "institutional_desc": "gestiti nell'ambito di Human Value",
        "private_title": "Consulenza privata e progetti diretti",
        "form_title": "Invia un messaggio",
        "form_name": "Nome e Cognome",
        "form_name_placeholder": "Il tuo nome...",
        "form_email": "Email",
        "form_email_placeholder": "esempio@email.it",
        "form_message": "Messaggio",
        "form_message_placeholder": "Descrivi brevemente il tuo mandato...",
        "form_submit": "Invia Messaggio",
        "form_submitting": "INVIO IN CORSO...",
        "form_success": "Messaggio inviato con successo! Ti risponderò al più presto.",
        "form_error": "C'è stato un errore nell'invio del messaggio. Riprova o contattami direttamente via email.",
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
        "p1": "Almost twenty years in talent acquisition, along three trajectories that today converge into a single way of working: the execution of direct searches for the industrial sectors, the delivery experience in the Life Sciences and Healthcare world, and an organizational reading of corporate contexts — because identifying the right people requires first understanding where a role is placed in the organization, who it reports to, and what levers it affects. On these bases, I operate as a freelancer, on selected assignments, from middle management to executive roles.",
        "quote": "\"A resume tells where a person has been. My job is to understand where they can still go — and with whom.\"",
        "p2": "My approach combines direct hunting, structured mapping of the target market, and a professional network built over twenty years of interaction with candidates and clients. Every significant assignment starts from reconstructing the universe of potential profiles and analyzing the typical career trajectories for similar roles in the sector. It is analytical work, not mechanical: the difference between finding a name and choosing the right name lies in the depth with which the market is read and the precision with which the client's organizational context is understood.",
        "p3": "I combine this method with an independently built technical stack. I design and deploy AI-powered web apps and dashboards on Google Cloud, integrating automated HR data analysis and multimodal artificial intelligence tools — from text-to-speech to video generation. It is delivery infrastructure: it reduces operational time, frees up time for evaluating people, and returns richer and more accessible reporting to candidates and companies."
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
            "title": "Pharma & Specialty Care",
            "description": "Search for managerial and specialized figures along the entire ethical drug chain. Consolidated experience in medical affairs, market access, regulatory, brand and hospital sales, covering complex therapeutic areas — oncology, rare diseases, cardiometabolic — and Italian branches of international groups."
          },
          {
            "title": "Medical Devices & Diagnostics",
            "description": "Executive profiles for class IIb/III medical devices, electromedical equipment, IVD, molecular diagnostics and point-of-care. Specific expertise on MDR/IVDR regulatory transitions, hospital channel management and purchasing groups, on tender functions, application and service field."
          },
          {
            "title": "Cosmetics, Fragrances, Hair Care & Consumer Health",
            "description": "Selection for the worlds of beauty and daily wellness: dermocosmetics, selective perfumery and mass market, professional and retail hair care, OTC, supplements and nutraceuticals. Roles in brand management, trade marketing, innovation & NPD, key account on pharmacy, large-scale retail and perfumery channels."
          },
          {
            "title": "Chemistry & Process Industries",
            "description": "Technical and managerial leadership for fine chemicals, specialty chemicals, coatings and intermediates. Plant management, QHSE with experience on Seveso sites, process engineering, sustainable product R&D, strategic procurement in margin-pressure contexts."
          },
          {
            "title": "Metalworking, Industrial Electronics & Automation",
            "description": "Engineering, plant management and supply chain in precision engineering, B2B components and machine tools contexts. Alongside these skills, there is a growing focus on instrumentation, sensors, robotics and factory automation — the axis where Italian mechanics meets machine intelligence."
          },
          {
            "title": "Plant Engineering, Building Materials & Heavy Industry",
            "description": "Profile search for EPC and industrial contracting, oil & gas, power generation, and for the construction materials sectors: cement, ceramics, bricks, glass, composites. Capital-intensive supply chain, with strong managerial needs in operations, engineering, HSE and complex plant management."
          },
          {
            "title": "Packaging",
            "description": "Talent solutions for the entire packaging supply chain: OEMs of food, beverage and pharma packaging machines; primary pharmaceutical packaging; flexible and sustainable packaging. Roles in plant management, mechatronic engineering, R&D in response to PPWR regulations, integrated supply chain and key account for GMP clients."
          }
        ],
        "engagement_categories": [
          {
            "category": "Pharma",
            "items": [
              { "role": "Medical Affairs Manager", "company": "Specialty care pharma multinational (€500M+ Italy, 600 emp.)", "description": "structuring the medical team to support the launch of a new therapeutic area." },
              { "role": "Market Access Manager", "company": "Italian branch of a US pharma group for rare diseases (€100-500M, 200 emp.)", "description": "profile with pricing & reimbursement experience on high-cost therapies." },
              { "role": "Senior Brand Manager", "company": "German ethical multinational (€1B+ Italy, 1500 emp.)", "description": "strategic relaunch of an established franchise competing with new generic entrants." },
              { "role": "Regulatory Affairs Manager", "company": "Italian specialty/generics pharmaceutical group (€200-500M, 800 emp.)", "description": "strengthening the function ahead of the portfolio's international expansion." },
              { "role": "Hospital Sales Manager", "company": "Cardiometabolic pharma multinational (€1B+, EMEA presence)", "description": "succession of a historic figure with reorganization of the national territory." },
              { "role": "Key Account Manager Hospital", "company": "Italian division of a Swiss oncology group (€500M+ Italy)", "description": "hybrid scientific-commercial profile for AIFA management and highly complex centers." }
            ]
          },
          {
            "category": "Chemical",
            "items": [
              { "role": "Plant Manager", "company": "PE-backed specialty chemical group (€200-500M, 3 plants, 600 emp.)", "description": "profile with scale-up experience and lean industrial culture." },
              { "role": "R&D Manager", "company": "French fine chemical multinational (€2B+ global, Italian hub 300 emp.)", "description": "leading the research center in redesigning the sustainable product portfolio." },
              { "role": "EHS Manager", "company": "Italian chemical industrial hub (€100-500M, 400 emp.)", "description": "alignment with new ESG obligations and management of an upper-tier Seveso site." },
              { "role": "Sales Manager", "company": "Packaging & coating specialty chemical, Italian family-owned SME (€50-100M, 150 emp.)", "description": "opening of the premium food & beverage channel." },
              { "role": "Production Manager", "company": "Multi-site chemical group (€200-500M, 500 emp.)", "description": "introduction of integrated planning logic in a historically decentralized context." },
              { "role": "Procurement Manager", "company": "German chemical multinational (€1B+, Italy hub 800 emp.)", "description": "centralization of strategic purchasing amidst margin pressure." }
            ]
          },
          {
            "category": "Medical Devices",
            "items": [
              { "role": "Sales Manager Hospital", "company": "Electromedical multinational in interventional cardiology (€500M+ Italy, 400 emp.)", "description": "profile with an established network in highly complex Hub centers." },
              { "role": "Quality & Regulatory Manager", "company": "Class IIb/III medical devices group (€100-500M, 300 emp.)", "description": "management of the MDR transition on a complex product portfolio." },
              { "role": "Tender Manager", "company": "Italian branch of a US medical group (€200-500M Italy)", "description": "establishing a dedicated tender function during commercial expansion." },
              { "role": "Product Manager", "company": "Imaging devices, Japanese multinational (€1B+ global)", "description": "launch of a new technology platform on the Italian market." },
              { "role": "Marketing Manager", "company": "Mid-size niche leader in cardiology (€50-100M, 120 emp.)", "description": "building the marketing function in a historically sales-driven company." },
              { "role": "Key Account Manager", "company": "Hospital disposables, Italian industrial group (€100-500M, 600 emp.)", "description": "opening framework agreements with regional purchasing groups." }
            ]
          },
          {
            "category": "Diagnostics",
            "items": [
              { "role": "Sales Manager", "company": "IVD multinational for clinical laboratories (€500M+ Italy, 350 emp.)", "description": "reorganization of the commercial network post-consolidation of the laboratory market." },
              { "role": "Product Manager", "company": "Molecular diagnostics & NGS, Italian division of a US group (€100-500M Italy)", "description": "supporting the launch of a precision oncology platform." },
              { "role": "Marketing Manager", "company": "Point-of-care diagnostics, international mid-size (€50-100M Italy, 80 emp.)", "description": "profile with expertise in hospital channel and community medicine." },
              { "role": "Service & Technical Manager", "company": "Clinical instrumentation for large laboratories (€200-500M, 400 emp.)", "description": "redesign of the field service model for efficiency and contractual SLAs." },
              { "role": "Senior Application Specialist", "company": "German laboratory instrumentation multinational (€1B+ global)", "description": "profile with advanced technical expertise in total automation platforms." },
              { "role": "Area Manager", "company": "Expanding Italian IVD SME (€20-50M, 60 emp.)", "description": "expanding the market in Central and Southern Italy in private laboratories." }
            ]
          },
          {
            "category": "Industrial & Engineering",
            "items": [
              { "role": "Plant Manager", "company": "Automotive manufacturing plant (€100-500M, 800 emp.)", "description": "production reorganization oriented towards Industry 4.0 and revision of plant KPIs." },
              { "role": "Engineering Manager", "company": "EPC industrial engineering, internationalized Italian group (€200-500M, 700 emp.)", "description": "leading turnkey projects for oil & gas and power generation clients." },
              { "role": "Operations Manager", "company": "Italy hub of a German industrial multinational (€500M+, 1200 emp.)", "description": "redesign of the operations function." }
            ]
          },
          {
            "category": "Packaging",
            "items": [
              { "role": "Plant Manager", "company": "Export-oriented family-owned packaging machinery group (€100-500M, 400 emp.)", "description": "production reorganization during post-acquisition growth." },
              { "role": "Engineering Manager", "company": "OEM food & beverage packaging machinery (€200-500M, 600 emp.)", "description": "leading the mechatronics design team for new high-speed lines." },
              { "role": "R&D Manager", "company": "Sustainable flexible packaging (€100-500M, 300 emp.)", "description": "developing mono-material and compostable solutions in response to PPWR regulations." },
              { "role": "Export Sales Manager", "company": "Pharma packaging machinery, Italian export-oriented SME (€50-100M, 200 emp.)", "description": "opening Asia-Pacific and Middle East markets with structuring of the agent network." },
              { "role": "Pharma Key Account Manager", "company": "Primary pharmaceutical packaging, international group (€500M+, 1000 emp.)", "description": "management of top accounts with GMP specifics and validation processes." },
              { "role": "Quality Manager", "company": "Pharma primary packaging, Italian group (€100-500M, 400 emp.)", "description": "structuring the quality system to expand the business towards multi-site specialty clients." },
              { "role": "Supply Chain Manager", "company": "PE-backed industrial group (€100-500M, 5 plants)", "description": "centralizing planning and demand amidst acquisition-driven growth." },
              { "role": "HSE / RSPP Manager", "company": "Multi-site industrial group (€200-500M, 600 emp.)", "description": "profile with expertise on Seveso sites and integrated HSE management." },
              { "role": "Sales Manager", "company": "B2B components for machine tools, export-oriented Italian SME (€50-100M, 200 emp.)", "description": "expanding the OEM channel in DACH and Northern Europe markets." }
            ]
          },
          {
            "category": "Consumer Health",
            "items": [
              { "role": "Marketing Manager", "company": "Italian division of an OTC multinational (€500M+ Italy, 800 emp.)", "description": "repositioning of a historic brand portfolio post-acquisition." },
              { "role": "Trade Marketing Manager", "company": "Consumer health brands in pharmacy channel (€100-500M Italy, 300 emp.)", "description": "evolution of the category management model with organized pharmacy chains." },
              { "role": "GDO Sales Manager", "company": "Supplements and nutraceuticals, Italian group (€50-100M, 150 emp.)", "description": "opening the premium mass market channel alongside the traditional pharmacy one." },
              { "role": "Senior Brand Manager", "company": "Pharmacy wellness line, division of an ethical multinational (€1B+ global)", "description": "relaunch of a historic line with target repositioning." },
              { "role": "Innovation & NPD Manager", "company": "Consumer health, Italian mid-size (€50-100M, 100 emp.)", "description": "structuring the new product development process over a three-year pipeline." },
              { "role": "Pharmacy Key Account Manager", "company": "Italian branch of an international OTC group (€200-500M Italy, 250 emp.)", "description": "management of organized pharmacy chains and new purchasing groups." }
            ]
          }
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
            "title": "The Human Factor in M&A: why 70% of PE acquisitions fail before they even start",
            "excerpt": "The problem no one wants to mention in due diligence, where the most expensive paradox of the Italian mid-market hides.",
            "tag": "Talent Sourcing Advisory",
            "date": "May 14th, 2026",
            "slug": "/insights/fattore-umano-ma"
          },
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
        "institutional_desc": "managed within Human Value",
        "private_title": "Private consulting and direct projects",
        "form_title": "Send a message",
        "form_name": "Full Name",
        "form_name_placeholder": "Your name...",
        "form_email": "Email",
        "form_email_placeholder": "example@email.com",
        "form_message": "Message",
        "form_message_placeholder": "Briefly describe your assignment...",
        "form_submit": "Send Message",
        "form_submitting": "SENDING...",
        "form_success": "Message sent successfully! I will reply as soon as possible.",
        "form_error": "There was an error sending the message. Please try again or contact me directly via email.",
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
