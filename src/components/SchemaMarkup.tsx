export default function SchemaMarkup() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://example.com'
  
  const personSchema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Виктория Бузаева',
    jobTitle: 'Психолог',
    description: 'Психолог, личностно-ориентированная реконструктивная психотерапия (ЛОРП). Работаю с самооценкой, отношениями, тревожностью.',
    url: baseUrl,
    sameAs: [
      'https://www.b17.ru/id1251116/',
    ],
    knowsAbout: [
      'Психотерапия',
      'Личностно-ориентированная реконструктивная психотерапия',
      'Работа с тревожностью',
      'Работа с самооценкой',
      'Работа с отношениями',
    ],
  }
  
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Онлайн-консультация психолога',
    description: 'Индивидуальная консультация психолога онлайн в Zoom. Личностно-ориентированная реконструктивная психотерапия.',
    provider: {
      '@type': 'Person',
      name: 'Виктория Бузаева',
    },
    serviceType: 'Психологическая консультация',
    areaServed: {
      '@type': 'Country',
      name: 'Россия',
    },
    availableChannel: {
      '@type': 'ServiceChannel',
      serviceUrl: `${baseUrl}/#booking`,
      serviceType: 'Online',
    },
    offers: {
      '@type': 'Offer',
      price: '2500',
      priceCurrency: 'RUB',
      availability: 'https://schema.org/InStock',
    },
  }
  
  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'Психолог Виктория Бузаева',
    description: 'Психологические консультации онлайн. Личностно-ориентированная реконструктивная психотерапия.',
    url: baseUrl,
    priceRange: '₽₽',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Москва',
      addressCountry: 'RU',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '55.7558',
      longitude: '37.6173',
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday'],
        opens: '10:00',
        closes: '21:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Friday',
        opens: '10:00',
        closes: '16:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Saturday',
        opens: '11:00',
        closes: '16:00',
      },
    ],
  }
  
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Как проходят онлайн-консультации?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Консультации проходят в Zoom, длительность 60 минут. Вам понадобится стабильный интернет, компьютер или смартфон с камерой и микрофоном.',
        },
      },
      {
        '@type': 'Question',
        name: 'Сколько стоит консультация психолога?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Стоимость одной консультации — 2500 рублей за 60 минут. Оплата производится онлайн при записи.',
        },
      },
      {
        '@type': 'Question',
        name: 'С какими проблемами можно обратиться?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Работаю с проблемами самооценки, отношениями, тревожностью, депрессивными состояниями, прокрастинацией, сложностями в принятии решений.',
        },
      },
    ],
  }
  
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  )
}
