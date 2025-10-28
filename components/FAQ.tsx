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
      answer: "Ja, wij werken uitsluitend op afspraak om u de beste service te kunnen bieden. Bel 06 246 804 51 of neem contact op via onze contactpagina."
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
    <div className="container-xxl py-5">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="container">
        <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
          <h6 className="text-primary text-uppercase">// Veelgestelde Vragen //</h6>
          <h1 className="mb-5">Veelgestelde Vragen over Autopoetsen in Woerden</h1>
        </div>
        <div className="row g-4">
          {faqs.map((faq, index) => (
            <div key={index} className="col-lg-6 wow fadeInUp" data-wow-delay={`${0.1 + index * 0.1}s`}>
              <div className="bg-light p-4 h-100">
                <h5 className="text-primary mb-3">
                  <i className="fa fa-question-circle me-2"></i>
                  {faq.question}
                </h5>
                <p className="mb-0">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
