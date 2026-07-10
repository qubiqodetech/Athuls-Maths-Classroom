interface CourseSchemaProps {
  name: string;
  description: string;
  providerName: string;
}

export function CourseSchema({ name, description, providerName }: CourseSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Course",
    "name": name,
    "description": description,
    "provider": {
      "@type": "EducationalOrganization",
      "name": providerName,
      "sameAs": "https://athulsmathsclassroom.com"
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
