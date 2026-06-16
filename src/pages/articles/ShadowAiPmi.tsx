import { motion } from 'motion/react';
import { ArrowLeft, Clock, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export default function ShadowAiPmi() {
  const { t, i18n } = useTranslation();
  const isEn = i18n.language === 'en';

  return (
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
              <span>{isEn ? '6 min read' : 'Lettura 6 min'}</span>
            </div>
          </div>
          <h1 className="text-4xl md:text-6xl font-display font-medium leading-tight mb-8">
            {isEn ? (
              <>Shadow AI in SMEs:<br /><span className="italic text-accent">the invisible risk</span> hidden in your offices.</>
            ) : (
              <>Shadow AI nelle PMI:<br /><span className="italic text-accent">il rischio invisibile</span> nascosto nei vostri uffici.</>
            )}
          </h1>
          <p className="text-xl md:text-2xl text-gray-500 font-light leading-relaxed">
            {isEn ? 'How a submerged phenomenon is putting data, compliance, and competitive advantage of Italian SMEs at risk — and why prohibiting it is not the solution.' : 'Come un fenomeno sommerso sta mettendo a rischio dati, compliance e vantaggio competitivo delle piccole e medie imprese lombarde — e perché la soluzione non è vietare, ma governare.'}
          </p>
        </header>

        {isEn ? (
          <article className="prose prose-lg prose-headings:font-display prose-headings:font-medium text-gray-600 font-light leading-relaxed max-w-none">
            <h2 className="text-3xl mt-16 mb-8 text-ink">AI is already in the company. You just don't know it.</h2>
            <p>
              Imagine the scene: an entrepreneur is sitting in a meeting room with his consultants, discussing if and when to introduce Artificial Intelligence into the company. Meanwhile, a few meters away, the technical manager is copying the specifications of a proprietary component into ChatGPT to speed up the translation of the manual. The HR manager is using a free chatbot to screen two hundred resumes. The internal software developer has just pasted three hundred lines of source code into a browser window to find a bug.
            </p>
            <p>
              None of them are doing anything "wrong" in their perception. They are simply trying to work better, faster, with the tools they have available. The problem is that that data — technical specifications, employee profiles, proprietary code — has just left the corporate perimeter forever.
            </p>
            <blockquote className="border-l-2 border-accent pl-6 italic text-xl my-8">
              This is the phenomenon of Shadow AI: the unauthorized, informal, and untracked use of Artificial Intelligence tools by staff, outside of any IT control perimeter.
            </blockquote>
            <p>
              And its spread in SMEs is already a fact today, not a future forecast.
            </p>

            <h2 className="text-3xl mt-16 mb-8 text-ink">The numbers no entrepreneur expects</h2>
            <p>
              Research shows a picture that surprises above all for its size. <strong>40% of employees in SMEs already use free AI tools on a daily basis</strong> for their work duties, in most cases without any awareness of the risks this entails and, above all, without management being informed.
            </p>
            <p>
              The Artificial Intelligence market has reached a value of 1.2 billion euros in 2024, with a 58% year-over-year growth. But that race is taking place on two separate tracks:
            </p>
            <ul className="list-disc pl-5 mt-4 mb-8 space-y-2">
              <li><strong>71% of large companies</strong> already have structured and governed AI adoption projects.</li>
              <li><strong>SMEs</strong> contribute to the national AI market for just <strong>18%</strong> of the total.</li>
            </ul>
            <p>
              The formal delay is evident. What is not seen is that in the same SMEs the workforce has already bridged that delay autonomously, informally and — from the point of view of corporate security — dangerously. The paradox is clear: the entrepreneur believes that AI is still a goal to be achieved, while it is already an uncontrolled operational reality inside their company.
            </p>

            <h2 className="text-3xl mt-16 mb-8 text-ink">Why employees bypass policies (and why it's understandable)</h2>
            <p>
              To understand the phenomenon it is necessary to look at it without judgment. Shadow AI does not arise from bad faith, nor from negligence. It stems from a real and legitimate need: to bypass the operational bottlenecks that slow down daily work.
            </p>
            <p>
              The fundamental difference compared to the old <em>Shadow IT</em> is technical friction, or rather its total absence. In the past, installing unauthorized software required technical skills. Today, accessing a Large Language Model requires a single gesture: opening a new browser tab.
            </p>
            <div className="bg-paper border border-accent-soft p-8 my-10">
              <h4 className="text-[10px] uppercase tracking-[0.2em] font-bold text-accent mb-6">The Drive for Shadow AI:</h4>
              <div className="space-y-4 text-sm">
                <p>Employees using Shadow AI save an average of between <strong>40 and 60 minutes a day</strong>: an hour of productivity recovered every day, for every person.</p>
                <p>The BYOAI (<em>Bring Your Own AI</em>) phenomenon today affects <strong>78% of workers</strong> globally. It's the norm.</p>
                <p>Almost <strong>90% of CISOs and IT professionals</strong> admit to regularly using unapproved tools. Those who should monitor security are the first to look for shortcuts.</p>
              </div>
            </div>

            <h2 className="text-3xl mt-16 mb-8 text-ink">The risk map: where corporate data really ends up</h2>
            <p>
              92.6% of the risk of sensitive data exposure is attributable to just six main applications. The OpenAI ecosystem — with ChatGPT and its plugins — alone absorbs over 53% of the overall usage analyzed. This means that more than half of the industrial secrets pass through the servers of a single private supplier without adequate protections.
            </p>
            <p className="font-medium text-ink mb-6 mt-8">The most exposed corporate departments:</p>
            
            <div className="space-y-8">
              <div>
                <h4 className="text-lg font-medium text-ink">Technical office and manuals</h4>
                <p className="text-sm mt-1">SMEs export heavily. Often, to translate manuals into English, construction specifications and datasheets are uploaded directly into chatbots. The result? Proprietary specifications enter public training databases.</p>
              </div>
              
              <div>
                <h4 className="text-lg font-medium text-ink">Reporting and data analysis</h4>
                <p className="text-sm mt-1">When management asks for a quick analysis, sometimes the entire customer database is dragged into a chatbot. The GDPR is violated: identifiable customer data transferred to foreign servers without anonymization or DPA.</p>
              </div>
              
              <div>
                <h4 className="text-lg font-medium text-ink">Sales and business strategies</h4>
                <p className="text-sm mt-1">Dynamic price lists, contribution margins, reserved discounts. Data that defines competitive advantage. Entered into a public model, they can become indirectly accessible to competitors.</p>
              </div>
              
              <div>
                <h4 className="text-lg font-medium text-ink">Software development and R&D</h4>
                <p className="text-sm mt-1">Developers pasting code into chatbots to find errors. Proprietary algorithms, API keys, business logic no longer leave the model. Losing source code means losing competitive advantage.</p>
              </div>

              <div>
                <h4 className="text-lg font-medium text-ink">HR and administration</h4>
                <p className="text-sm mt-1">Personal data, training paths, employee income information filtered through free AIs. Personal data protected by GDPR ending up on platforms without control.</p>
              </div>
            </div>

            <h2 className="text-3xl mt-16 mb-8 text-ink">Strategic Exposure: intellectual property in the public cloud</h2>
            <p>
              What happens, concretely, when a company's most precious data is pasted into a public chatbot? The erosion of competitive advantage and negotiating ability does not happen with a resounding cyber attack: <strong>it happens with a copy-paste</strong>.
            </p>
            <p>
              Reports cite the case of <em>Samsung Semiconductor</em>, where researchers accidentally uploaded proprietary source code to ChatGPT for a quick fix. By the time management banned the use of the tool, the damage was irreversible. This dynamic is repeated every day, on a smaller scale, in the technical offices of SMEs.
            </p>

            <h2 className="text-3xl mt-16 mb-8 text-ink">The Regulatory Maze: GDPR, AI Act and compliance debt</h2>
            <p>
              The European regulatory framework transforms an operational problem into an existential risk:
            </p>
            <ul className="list-disc pl-5 mt-4 space-y-4">
              <li>
                <strong>The GDPR:</strong> The use of US-based models involves the extra-EU transfer of data. Without a Data Processing Agreement, this violates Articles 44-49. Fines reach up to 4% of annual turnover.
              </li>
              <li>
                <strong>The AI Act:</strong> A regulation that assigns pyramidal obligations. Typical applications (human resources, customer scoring, sales) fall into the "High Risk" category, requiring transparency and human supervision that informal use cannot guarantee.
              </li>
              <li>
                <strong>Copyright:</strong> Content generated by public AI is not legally protectable today. A company using Shadow AI for critical or strategic material risks not being able to defend its intellectual property.
              </li>
            </ul>
          </article>
        ) : (
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
        )}
      </div>

      <div className="mt-24 pt-16 border-t border-accent-soft max-w-4xl mx-auto px-6">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-medium text-ink mb-4">
            {isEn ? 'Sources & References' : 'Fonti & Riferimenti'}
          </h2>
          <p className="text-gray-500 font-light">
            {isEn ? 'Documentation used for the elaboration of this insight.': 'Documentazione utilizzata per l\'elaborazione di questo insight (Shadow AI nelle PMI).'}
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
