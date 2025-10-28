export default function StructuredData() {
  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': 'https://amcarcleaning.nl/#organization',
    name: 'AM Carcleaning',
    alternateName: 'AM Carcleaning Woerden',
    description: 'Professioneel autopoetsbedrijf in Woerden. Specialist in auto polijsten, interieur reiniging, lak correctie en swirls verwijderen.',
    url: 'https://amcarcleaning.nl',
    telephone: '+31624680451',
    email: 'carcleaning75@gmail.com',
    image: 'https://amcarcleaning.nl/img/logo.jpg',
    logo: 'https://amcarcleaning.nl/img/logo.jpg',
    priceRange: '€€',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Barwoutswaarder 5',
      addressLocality: 'Woerden',
      postalCode: '3449 HE',
      addressCountry: 'NL',
      addressRegion: 'Utrecht',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 52.083,
      longitude: 4.883,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '09:00',
        closes: '18:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Saturday',
        opens: '09:00',
        closes: '18:00',
      },
    ],
    sameAs: [
      'https://www.facebook.com/amcarcleaning',
      'https://www.instagram.com/amcarcleaning',
    ],
    areaServed: {
      '@type': 'City',
      name: 'Woerden',
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Autopoets Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Interieur Reiniging',
            description: 'Professionele interieur reiniging inclusief bekleding, dashboard en geur verwijdering',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Auto Polijsten',
            description: 'Lak correctie, swirls verwijderen en beschermende coating',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Lak Correctie',
            description: 'Complete lakcorrectie met meerdere polijststappen',
          },
        },
      ],
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '5.0',
      reviewCount: '47',
    },
  }

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://amcarcleaning.nl',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Interieur',
        item: 'https://amcarcleaning.nl/interieur',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: 'Exterieur',
        item: 'https://amcarcleaning.nl/exterieur',
      },
      {
        '@type': 'ListItem',
        position: 4,
        name: 'Prijzen',
        item: 'https://amcarcleaning.nl/prijzen',
      },
      {
        '@type': 'ListItem',
        position: 5,
        name: 'Contact',
        item: 'https://amcarcleaning.nl/contact',
      },
    ],
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
    </>
  )
}
