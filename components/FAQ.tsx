'use client'

export default function FAQ() {
  const faqs = [
    {
      question: "Wat kost een professionele autopoetsbeurt in Woerden?",
      answer: "De prijzen voor autopoesbeurten variëren afhankelijk van de gewenste service. Interieur reiniging start vanaf €120, een basis polijstbeurt vanaf €150, en een complete lakcorrectie vanaf €500. Neem contact op voor een offerte op maat."
    },
    {
      question: "Hoe lang duurt een interieur reiniging?",
      answer: "Een grondige interieur reiniging duurt gemiddeld 3-4 uur, afhankelijk van de grootte van de auto en de staat van het interieur. Voor een bekleding behandeling kan dit oplopen tot 5-6 uur."
    },
    {
      question: "Kunnen jullie swirls uit mijn autolak verwijderen?",
      answer: "Ja, wij zijn gespecialiseerd in het verwijderen van swirls en waskrassen. Door professioneel polijsten met meerdere stappen kunnen we uw autolak weer als nieuw laten glanzen."
    },
    {
      question: "Waar is AM Carcleaning gevestigd?",
      answer: "AM Carcleaning is gevestigd in Woerden op Barwoutswaarder 5, 3449 HE. Wij bedienen Woerden en omliggende plaatsen zoals Utrecht, Harmelen, en Montfoort."
    },
    {
      question: "Moet ik een afspraak maken?",
      answer: "Ja, wij werken uitsluitend op afspraak om u de beste service te kunnen bieden. Bel +31 6 246 804 51 of neem contact op via onze contactpagina."
    },
    {
      question: "Welke services bieden jullie aan?",
      answer: "Wij bieden professionele interieur reiniging (bekleding, dashboard, leder), exterieur polijsten (lak correctie, swirls verwijderen), hand wassen en waxen, en geur verwijdering. Bekijk onze prijzenpagina voor alle services."
    }
  ]

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer
      }
    }))
  }

  return (
    <>
      <style jsx>{`
        /* Rogo DNA: FAQ Component Styles */
        .rogo-faq-container {
          max-width: 1200px;
          margin: 0 auto;
        }
        .rogo-faq-title {
          font-size: clamp(2rem, 4vw, 3rem);
          line-height: 1.2;
          color: #ffffff;
          margin-bottom: 16px;
          font-weight: 600;
          font-family: 'Barlow', serif;
          text-align: center;
        }
        .rogo-faq-subtitle {
          font-size: 1rem;
          color: #b0b0b0;
          text-align: center;
          margin-bottom: 64px;
        }
        .rogo-faq-card {
          background: #1f1f1f;
          border-radius: 2px;
          padding: 32px;
          border: 1px solid rgba(255, 255, 255, 0.1);
          height: 100%;
          transition: all 200ms ease;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
        }
        .rogo-faq-card:hover {
          background: #252525;
          border-color: rgba(188, 150, 0, 0.3);
          transform: translateY(-2px);
        }
        .rogo-faq-question {
          font-size: 1.125rem;
          color: #ffffff;
          margin-bottom: 16px;
          font-weight: 600;
          line-height: 1.4;
          display: flex;
          align-items: flex-start;
        }
        .rogo-faq-answer {
          font-size: 1rem;
          line-height: 1.6;
          color: #b0b0b0;
          margin: 0;
        }
        .rogo-faq-icon {
          margin-right: 12px;
          width: 24px;
          height: 24px;
          flex-shrink: 0;
        }
      `}</style>

      <div>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
        <div className="rogo-faq-container">
          <h2 className="rogo-faq-title">
            Veelgestelde Vragen
          </h2>
          <p className="rogo-faq-subtitle">
            Alles wat u moet weten over onze autopoetsdiensten
          </p>
          <div className="row g-4">
            {faqs.map((faq, index) => (
              <div key={index} className="col-lg-6">
                <div className="rogo-faq-card">
                  <h3 className="rogo-faq-question">
                    <svg className="rogo-faq-icon" viewBox="0 0 24 24" fill="none" stroke="#bc9600" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="12" cy="12" r="10"/>
                      <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/>
                      <line x1="12" y1="17" x2="12.01" y2="17"/>
                    </svg>
                    <span>{faq.question}</span>
                  </h3>
                  <p className="rogo-faq-answer">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
