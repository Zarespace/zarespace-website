import Script from 'next/script';

interface OrganizationSchema {
  name: string;
  description: string;
  url: string;
  logo: string;
  contactPoint?: {
    telephone: string;
    contactType: string;
    areaServed: string;
    availableLanguage: string;
  };
  sameAs?: string[];
  address?: {
    addressCountry: string;
  };
}

interface ServiceSchema {
  serviceType: string[];
  providerName: string;
  areaServed: string;
}

export default function StructuredData() {
  const organizationSchema: OrganizationSchema = {
    name: "Zarespace Digital",
    description: "Leading digital agency offering web development, graphics design, video editing, and digital marketing solutions",
    url: "https://zarespace.digital",
    logo: "https://zarespace.digital/logo.png",
    contactPoint: {
      telephone: "+251 97 312 6679",
      contactType: "customer service",
      areaServed: "ET",
      availableLanguage: "en"
    },
    sameAs: [
      "https://www.linkedin.com/company/zarespace-digital",
      "https://x.com/zarespace",
      "https://t.me/zarespace"
    ],
    address: {
      addressCountry: "ET"
    }
  };

  const serviceSchema: ServiceSchema = {
    serviceType: ["Web Development", "Graphics Design", "Video Editing", "Digital Marketing"],
    providerName: "Zarespace Digital",
    areaServed: "Ethiopia"
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": organizationSchema.name,
    "description": organizationSchema.description,
    "url": organizationSchema.url,
    "logo": organizationSchema.logo,
    "contactPoint": organizationSchema.contactPoint ? {
      "@type": "ContactPoint",
      "telephone": organizationSchema.contactPoint.telephone,
      "contactType": organizationSchema.contactPoint.contactType,
      "areaServed": organizationSchema.contactPoint.areaServed,
      "availableLanguage": organizationSchema.contactPoint.availableLanguage
    } : undefined,
    "sameAs": organizationSchema.sameAs,
    "address": organizationSchema.address ? {
      "@type": "PostalAddress",
      "addressCountry": organizationSchema.address.addressCountry
    } : undefined
  };

  const serviceSchemaData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": serviceSchema.serviceType,
    "provider": {
      "@type": "Organization",
      "name": serviceSchema.providerName
    },
    "areaServed": {
      "@type": "Place",
      "name": serviceSchema.areaServed
    }
  };

  return (
    <>
      <Script
        id="organization-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <Script
        id="service-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchemaData) }}
      />
    </>
  );
}