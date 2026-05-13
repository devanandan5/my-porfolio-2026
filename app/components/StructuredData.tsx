import { experience, profile, siteUrl, skillGroups } from "../lib/data";

const LINE_SEP = new RegExp("\\u2028", "g");
const PARA_SEP = new RegExp("\\u2029", "g");

function escapeJsonForScript(value: unknown): string {
  return JSON.stringify(value)
    .replace(/</g, "\\u003c")
    .replace(/>/g, "\\u003e")
    .replace(/&/g, "\\u0026")
    .replace(LINE_SEP, "\\u2028")
    .replace(PARA_SEP, "\\u2029");
}

export default function StructuredData() {
  const person = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${siteUrl}/#person`,
    name: profile.name,
    givenName: profile.firstName,
    familyName: profile.lastName,
    alternateName: profile.alternateName,
    description: profile.about[0],
    image: `${siteUrl}/profile.png`,
    url: siteUrl,
    email: `mailto:${profile.email}`,
    telephone: profile.phoneTel,
    jobTitle: profile.role,
    gender: "male",
    nationality: { "@type": "Country", name: "India" },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Bengaluru",
      addressRegion: "Karnataka",
      addressCountry: "IN",
    },
    homeLocation: {
      "@type": "Place",
      name: "Bengaluru, Karnataka, India",
    },
    knowsAbout: [
      "Full-Stack Development",
      "React",
      "Next.js",
      "Node.js",
      "TypeScript",
      "React Native",
      "iOS Development",
      "AI Engineering",
      "Generative AI",
      "Large Language Models",
      "RAG Pipelines",
      "LangChain",
      "Data Science",
      "Python",
      "DevOps",
      "Docker",
      "AWS",
      "MongoDB",
      "PostgreSQL",
      "Web3",
      "Smart Contracts",
    ],
    knowsLanguage: ["English", "Malayalam", "Tamil", "Hindi"],
    hasOccupation: {
      "@type": "Occupation",
      name: profile.role,
      occupationLocation: { "@type": "City", name: "Bengaluru" },
      skills: skillGroups.flatMap((g) => g.items).join(", "),
    },
    worksFor: experience
      .filter((e) => e.end === "Present")
      .map((e) => ({ "@type": "Organization", name: e.company })),
    alumniOf: experience.map((e) => ({
      "@type": "Organization",
      name: e.company,
    })),
    sameAs: [profile.linkedin, profile.github, profile.x, profile.instagram],
  };

  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteUrl}/#website`,
    url: siteUrl,
    name: `${profile.name} — Portfolio`,
    description: `Portfolio of ${profile.name}, a ${profile.role} based in Bengaluru.`,
    inLanguage: "en",
    publisher: { "@id": `${siteUrl}/#person` },
  };

  const profilePage = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    "@id": `${siteUrl}/#profilepage`,
    url: siteUrl,
    name: `${profile.name} — ${profile.role}`,
    description: profile.about.join(" "),
    primaryImageOfPage: `${siteUrl}/profile.png`,
    mainEntity: { "@id": `${siteUrl}/#person` },
    about: { "@id": `${siteUrl}/#person` },
    isPartOf: { "@id": `${siteUrl}/#website` },
    inLanguage: "en",
  };

  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
    ],
  };

  const faq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: `Who is ${profile.name}?`,
        acceptedAnswer: {
          "@type": "Answer",
          text: `${profile.name} is a ${profile.role} based in ${profile.location} with ${profile.experienceLabel} of professional experience (since ${profile.experienceSince}). He builds end-to-end products across web, native mobile, AI/GenAI, data science, DevOps and Web3.`,
        },
      },
      {
        "@type": "Question",
        name: `What does ${profile.firstName} S specialize in?`,
        acceptedAnswer: {
          "@type": "Answer",
          text: `${profile.firstName} specializes in full-stack engineering with React, Next.js, Node.js and TypeScript; mobile development with React Native and iOS; AI/GenAI with LLM apps, RAG pipelines and LangChain; data science with Python and Pandas; DevOps with Docker, AWS and CI/CD; and Web3 development.`,
        },
      },
      {
        "@type": "Question",
        name: `Is ${profile.firstName} S available for hire?`,
        acceptedAnswer: {
          "@type": "Answer",
          text: `Yes — ${profile.firstName} is open to opportunities. You can reach him at ${profile.email} or ${profile.phone}.`,
        },
      },
      {
        "@type": "Question",
        name: `Where is ${profile.name} based?`,
        acceptedAnswer: {
          "@type": "Answer",
          text: `${profile.name} is based in Bengaluru, Karnataka, India, and works remotely with teams globally.`,
        },
      },
      {
        "@type": "Question",
        name: `How many years of experience does ${profile.firstName} have?`,
        acceptedAnswer: {
          "@type": "Answer",
          text: `${profile.experienceLabel} of professional software engineering experience, starting in ${profile.experienceSince} as an independent freelance developer.`,
        },
      },
    ],
  };

  const graph = {
    "@context": "https://schema.org",
    "@graph": [person, website, profilePage, breadcrumb, faq],
  };

  return (
    <script
      type="application/ld+json"
      suppressHydrationWarning
    >
      {escapeJsonForScript(graph)}
    </script>
  );
}
