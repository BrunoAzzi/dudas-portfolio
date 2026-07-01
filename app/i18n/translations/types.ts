export interface CaseTranslation {
  title: string;
  description: string;
  tags: string[];
}

export interface Translation {
  meta: {
    title: string;
    description: string;
  };
  header: {
    greeting: string;
    namePrefix: string;
    role: string;
    bio: string;
    bioContinued: string;
    checkProjects: string;
    resume: string;
  };
  cases: {
    telemedicine: CaseTranslation;
    logistics: CaseTranslation;
    elearning: CaseTranslation;
    gamification: CaseTranslation;
  };
  contact: {
    title: string;
    description: string;
    cta: string;
  };
  caseCard: {
    comingSoon: string;
  };
  language: {
    label: string;
    pt: string;
    en: string;
  };
}
