import { motion } from 'motion/react';
import { ArrowLeft, Clock, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ShadowAiPmi() {
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
            <span className="text-[9px] uppercase tracking-[0.4em] font-bold text-accent">#Technology</span>
            <div className="h-4 w-[1px] bg-accent-soft" />
            <div className="flex items-center space-x-2 text-[10px] uppercase tracking-widest font-mono text-gray-400">
              <Clock size={12} />
              <span>Lettura 6 min</span>
            </div>
          </div>
          <h1 className="text-4xl md:text-6xl font-display font-medium leading-tight mb-8">
            Shadow AI nelle PMI:<br /><span className="italic text-accent">il rischio invisibile</span> nascosto nei vostri uffici.
          </h1>
          <p className="text-xl md:text-2xl text-gray-500 font-light leading-relaxed">
            Come un fenomeno sommerso sta mettendo a rischio dati, compliance e vantaggio competitivo delle piccole e medie imprese lombarde — e perché la soluzione non è vietare, ma governare.
          </p>
        </header>

        <article className="prose prose-lg prose-headings:font-display prose-headings:font-medium text-gray-600 font-light leading-relaxed max-w-none">
          
          <h2 className="text-3xl mt-16 mb-8 text-ink">L'IA è già in azienda. Solo che non lo sapete.</h2>
          <p>
            Immaginate la scena: un imprenditore è seduto in sala riunioni con i suoi consulenti, e stanno discutendo se e quando introdurre l'Intelligenza Artificiale in azienda. Nel frattempo, a pochi metri di distanza, il responsabile tecnico sta copiando le specifiche di un componente proprietario su ChatGPT per velocizzare la traduzione del manuale in inglese. L'addetta HR sta usando un chatbot gratuito per scremare duecento curriculum. Lo sviluppatore del gestionale interno ha appena incollato trecento righe di codice sorgente in una finestra del browser per trovare un bug.
          </p>
          <p>
            Nessuno di loro sta facendo nulla di "sbagliato" nella propria percezione. Stanno semplicemente cercando di lavorare meglio, più in fretta, con gli strumenti che hanno a disposizione. Il problema è che quei dati — le specifiche tecniche, i profili dei dipendenti, il codice proprietario — hanno appena lasciato il perimetro aziendale per sempre.
          </p>
          <blockquote className="border-l-2 border-accent pl-6 italic text-xl my-8">
            Questo è il fenomeno della Shadow AI: l'utilizzo non autorizzato, informale e non tracciato di strumenti basati sull'Intelligenza Artificiale da parte del personale, al di fuori di qualsiasi perimetro di controllo IT.
          </blockquote>
          <p>
            E la sua diffusione nelle PMI lombarde è già oggi un dato di fatto, non una previsione futura.
          </p>

          <h2 className="text-3xl mt-16 mb-8 text-ink">I numeri che nessun imprenditore si aspetta</h2>
          <p>
            La ricerca condotta da Human Value su un universo di 965.000 imprese attive in Lombardia restituisce un quadro che sorprende soprattutto per la sua dimensione. Il <strong>40% dei dipendenti nelle PMI della regione utilizza già quotidianamente strumenti di IA gratuiti</strong> per le proprie mansioni lavorative, nella maggior parte dei casi senza alcuna consapevolezza dei rischi che questo comporta e, soprattutto, senza che la direzione ne sia informata.
          </p>
          <p>
            Il mercato dell'Intelligenza Artificiale in Italia ha raggiunto un valore di 1,2 miliardi di euro nel 2024, con una crescita del 58% anno su anno. Ma quella corsa si sta svolgendo su due binari separati:
          </p>
          <ul className="list-disc pl-5 mt-4 mb-8 space-y-2">
            <li>Il <strong>71% delle grandi imprese italiane</strong> ha già progetti strutturati e governati di adozione dell'IA.</li>
            <li>Le <strong>PMI</strong> contribuiscono al mercato AI nazionale per appena il <strong>18%</strong> del totale.</li>
          </ul>
          <p>
            Il ritardo formale è evidente. Quello che non si vede è che nelle stesse PMI la forza lavoro ha già colmato quel ritardo in modo autonomo, informale e — dal punto di vista della sicurezza aziendale — pericoloso. Il paradosso è cristallino: l'imprenditore crede che l'IA sia ancora un traguardo da raggiungere, mentre è già una realtà operativa incontrollata dentro la sua azienda.
          </p>

          <h2 className="text-3xl mt-16 mb-8 text-ink">Perché i dipendenti aggirano le policy (e perché è comprensibile)</h2>
          <p>
            Per capire il fenomeno è necessario guardarlo senza giudizio. La Shadow AI non nasce da malafede, né da negligenza. Nasce da un bisogno reale e legittimo: aggirare i colli di bottiglia operativi che rallentano il lavoro quotidiano.
          </p>
          <p>
            La differenza fondamentale rispetto al vecchio <em>Shadow IT</em> è la frizione tecnica, o meglio la sua assenza totale. In passato, installare un software non autorizzato richiedeva competenze tecniche. Oggi, accedere a un Large Language Model richiede un solo gesto: aprire una nuova scheda del browser.
          </p>
          <div className="bg-paper border border-accent-soft p-8 my-10">
            <h4 className="text-[10px] uppercase tracking-[0.2em] font-bold text-accent mb-6">La Spinta alla Shadow AI:</h4>
            <div className="space-y-4 text-sm">
              <p>I dipendenti che utilizzano la Shadow AI risparmiano mediamente tra i <strong>40 e i 60 minuti al giorno</strong>: un'ora di produttività recuperata ogni giorno, per ogni persona.</p>
              <p>Il fenomeno BYOAI (<em>Bring Your Own AI</em>) riguarda oggi il <strong>78% dei lavoratori</strong> a livello globale. È la norma.</p>
              <p>Quasi il <strong>90% dei CISO e dei professionisti IT</strong> ammette di utilizzare regolarmente strumenti non approvati. Chi dovrebbe presidiare la sicurezza è il primo a cercare scorciatoie.</p>
            </div>
          </div>

          <h2 className="text-3xl mt-16 mb-8 text-ink">La mappa del rischio: dove finiscono davvero i dati aziendali</h2>
          <p>
            Il 92,6% del rischio di esposizione dei dati sensibili è riconducibile a sole sei applicazioni principali. L'ecosistema di OpenAI — con ChatGPT e i suoi plugin — assorbe da solo oltre il 53% dell'utilizzo complessivo analizzato. Questo significa che più della metà dei segreti industriali delle PMI lombarde transita attraverso i server di un unico fornitore privato senza adeguate protezioni.
          </p>
          <p className="font-medium text-ink mb-6 mt-8">I reparti aziendali più esposti:</p>
          
          <div className="space-y-8">
            <div>
              <h4 className="text-lg font-medium text-ink">Ufficio tecnico e manualistica</h4>
              <p className="text-sm mt-1">Le PMI lombarde esportano il 44% del loro fatturato. Spesso, per tradurre manuali in inglese, specifiche costruttive e datasheet vengono caricati direttamente nei chatbot. Risultato? Specifiche proprietarie entrano in database di addestramento pubblici.</p>
            </div>
            
            <div>
              <h4 className="text-lg font-medium text-ink">Reportistica e analisi dati</h4>
              <p className="text-sm mt-1">Quando la direzione chiede un'analisi rapida, si trascina talvolta l'intero database clienti in un chatbot. Il GDPR viene violato: dati di clienti identificabili trasferiti su server esteri senza anonimizzazione o DPA.</p>
            </div>
            
            <div>
              <h4 className="text-lg font-medium text-ink">Vendite e strategie commerciali</h4>
              <p className="text-sm mt-1">Listini prezzi dinamici, margini di contribuzione, sconti riservati. Dati che definiscono il vantaggio competitivo. Inseriti in un modello pubblico, possono diventare indirettamente accessibili ai competitor.</p>
            </div>
            
            <div>
              <h4 className="text-lg font-medium text-ink">Sviluppo software e R&S</h4>
              <p className="text-sm mt-1">Sviluppatori che incollano codice nei chatbot per trovare errori. Algoritmi proprietari, chiavi API, logiche di business non escono più dal modello. Perdere il codice sorgente significa perdere il vantaggio competitivo.</p>
            </div>

            <div>
              <h4 className="text-lg font-medium text-ink">HR e amministrazione</h4>
              <p className="text-sm mt-1">Dati anagrafici, percorsi formativi, informazioni reddituali dei dipendenti filtrati tramite IA gratuite. Dati personali protetti dal GDPR che finiscono su piattaforme senza controllo.</p>
            </div>
          </div>

          <h2 className="text-3xl mt-16 mb-8 text-ink">Esposizione Strategica: il patrimonio intellettuale nel cloud pubblico</h2>
          <p>
            Cosa succede, concretamente, quando i dati più preziosi di un'azienda vengono incollati in un chatbot pubblico? L'erosione del vantaggio competitivo e della capacità negoziale non avviene con un attacco informatico clamoroso: <strong>avviene con un copia-incolla</strong>.
          </p>
          <p>
            Il report cita il caso <em>Samsung Semiconductor</em>, dove ricercatori caricarono accidentalmente il codice sorgente proprietario su ChatGPT per una correzione rapida. Quando la direzione vietò l'uso del tool, il danno era irreversibile. Questa dinamica si ripete ogni giorno, in scala ridotta, negli uffici tecnici delle PMI. La protezione del patrimonio intellettuale deve estendersi alla consapevolezza dei flussi di dati verso le reti neurali pubbliche.
          </p>

          <h2 className="text-3xl mt-16 mb-8 text-ink">Il Labirinto Normativo: GDPR, AI Act e il debito di compliance</h2>
          <p>
            Il quadro normativo europeo trasforma un problema operativo in un rischio esistenziale:
          </p>
          <ul className="list-disc pl-5 mt-4 space-y-4">
            <li>
              <strong>Il GDPR:</strong> L'uso di modelli basati negli USA comporta il trasferimento di dati extra-UE. Senza un Data Processing Agreement, questo viola gli Articoli 44-49. Le sanzioni arrivano al 4% del fatturato annuo. Il principio dell'Accountability non ammette l'ignoranza.
            </li>
            <li>
              <strong>L'AI Act:</strong> Regolamento che assegna obblighi piramidali. Le applicazioni tipiche (risorse umane, scoring clienti, vendite) ricadono nella categoria "Alto Rischio", richiedendo trasparenza e supervisione umana che l'uso informale non può garantire.
            </li>
            <li>
              <strong>Diritto d'autore:</strong> Il contenuto generato dall'IA pubblica oggi non è tutelabile legalmente. Un'azienda che usa Shadow AI per materiale critico o strategico rischia di non poterne difendere la proprietà intellettuale.
            </li>
          </ul>
        </article>
      </div>

      <div className="mt-24 pt-16 border-t border-accent-soft max-w-4xl mx-auto px-6">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-medium text-ink mb-4">
            Fonti & Riferimenti
          </h2>
          <p className="text-gray-500 font-light">
            Documentazione utilizzata per l'elaborazione di questo insight (Shadow AI nelle PMI).
          </p>
        </div>
        
        <div className="flex flex-col gap-4 mb-24">
          {[
            { author: "Microsoft & LinkedIn", title: "2024 Work Trend Index Annual Report: The AI at work is here. Now comes the hard part", year: "2024" },
            { author: "Salesforce Research", title: "The State of IT — Shadow AI and the Enterprise Risk Surface", year: "2024" },
            { author: "Parlamento Europeo", title: "The EU AI Act — Regulatory framework on Artificial Intelligence", year: "2024" },
            { author: "Gartner", title: "Quick Answer: How to Manage Shadow AI Risks in the Workplace", year: "2024" }
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
