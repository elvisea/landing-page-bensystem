export function SchemaOrg() {
  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Bensystem Segurança Eletrônica',
    url: 'https://www.bensystem.com.br',
    description: 'Soluções completas em segurança eletrônica para residências e empresas. Câmeras, alarmes e monitoramento 24h.',
    potentialAction: {
      '@type': 'SearchAction',
      target: 'https://www.bensystem.com.br/search?q={search_term_string}',
      'query-input': 'required name=search_term_string'
    }
  }

  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Bensystem',
    url: 'https://www.bensystem.com.br',
    logo: 'https://www.bensystem.com.br/logo.png',
    description: 'Empresa especializada em sistemas de segurança eletrônica, alarmes e câmeras de monitoramento.',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Rua Marechal Deodoro, 500',
      addressLocality: 'Curitiba',
      addressRegion: 'PR',
      postalCode: '80010-010',
      addressCountry: 'BR'
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+554133333333',
      contactType: 'customer service',
      areaServed: 'BR',
      availableLanguage: 'Portuguese'
    },
    sameAs: [
      'https://www.facebook.com/bensystem',
      'https://www.instagram.com/bensystem',
      'https://www.linkedin.com/company/bensystem'
    ]
  }

  // Adicionando schema para o processo de serviço (How It Works)
  const serviceProcessSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Instalação de Sistemas de Segurança Eletrônica',
    provider: {
      '@type': 'Organization',
      name: 'Bensystem'
    },
    serviceType: 'Segurança Eletrônica',
    areaServed: {
      '@type': 'State',
      name: 'Paraná'
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Serviços de Segurança Eletrônica',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Instalação de Câmeras de Segurança'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Sistemas de Alarme'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Controle de Acesso'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Monitoramento 24h'
          }
        }
      ]
    }
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceProcessSchema) }}
      />
    </>
  )
} 