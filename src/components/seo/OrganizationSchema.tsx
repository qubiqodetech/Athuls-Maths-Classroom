export function OrganizationSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "name": "Athul's Maths Classroom",
    "url": "https://athulsmathsclassroom.com",
    "logo": "https://athulsmathsclassroom.com/logo.png",
    "sameAs": [
      "https://facebook.com/athulsmathsclassroom",
      "https://instagram.com/athulsmathsclassroom",
      "https://youtube.com/athulsmathsclassroom"
    ],
    "description": "Transforming mathematics education with premium learning experiences, expert faculty, and exceptional results in Kerala.",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Kerala",
      "addressRegion": "KL",
      "addressCountry": "IN"
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
