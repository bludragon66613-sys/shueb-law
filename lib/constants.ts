export const SITE = {
  name: 'Shueb Hussain',
  title: 'Advocate & Legal Counsel',
  tagline: 'Precision. Clarity. Justice.',
  description: 'AI-powered legal practice delivering precision, speed, and clarity across civil, criminal, corporate, and constitutional law.',
  email: 'advocate@shueb.io',
  phone: '+919063363633',
  address: {
    line1: '21-7-762/1, Ground Floor Third Shutter Masjid Lane, Opp. Post Office, Ghansi Bazaar',
    line2: 'Opp. Gate No. 6, Highcourt, Hyderabad — 500066',
    country: 'India',
  },
  barCouncil: {
    registration: '',
    disclaimer: 'This website is meant solely for the purpose of information and not for the purpose of advertising. Shueb Hussain & Associates does not wish to represent, warrant, or guarantee that the information contained herein is correct, complete, or updated. The contents of this website are for informational purposes only and should not be construed as solicitation or legal advice. Readers are advised not to act on any information provided herein without seeking appropriate professional advice. The use of this website does not create any lawyer-client relationship. Shueb Hussain & Associates shall not be liable for the consequences of any action taken by relying on the material/information provided on this website.',
  },
  social: {
    whatsapp: 'https://wa.me/919063363633',
    linkedin: 'https://linkedin.com/in/shueb',
  },
} as const;

export interface PracticeArea {
  readonly slug: string;
  readonly title: string;
  readonly shortDescription: string;
  readonly icon: string;
  readonly description: string;
  readonly services: readonly string[];
}

export const PRACTICE_AREAS: readonly PracticeArea[] = [
  {
    slug: 'criminal-law',
    title: 'Criminal Law',
    shortDescription: 'Defence and prosecution across all criminal matters under BNS, BNSS, and BSA.',
    icon: 'shield',
    description: 'Comprehensive criminal defence and advisory services covering the full spectrum of criminal law under the Bharatiya Nyaya Sanhita (BNS), Bharatiya Nagarik Suraksha Sanhita (BNSS), and Bharatiya Sakshya Adhiniyam (BSA). From bail applications to trial representation, every case is handled with strategic precision.',
    services: [
      'Bail applications (regular, anticipatory, default)',
      'Trial defence and prosecution',
      'FIR quashing petitions (Section 528 BNSS)',
      'Criminal appeals and revisions',
      'White-collar crime defence',
      'Cybercrime matters under IT Act',
    ],
  },
  {
    slug: 'civil-litigation',
    title: 'Civil Litigation',
    shortDescription: 'Strategic civil litigation from district courts to the Supreme Court.',
    icon: 'scale',
    description: 'End-to-end civil litigation services covering property disputes, recovery suits, injunctions, declaratory actions, and appeals. Cases handled across District Courts, High Courts, and the Supreme Court of India.',
    services: [
      'Property and title disputes',
      'Recovery and money suits',
      'Injunctions and specific performance',
      'Partition and succession matters',
      'Consumer disputes (NCDRC, State, District)',
      'Appellate practice',
    ],
  },
  {
    slug: 'corporate-law',
    title: 'Corporate & Commercial',
    shortDescription: 'Business formation, contracts, compliance, and corporate governance.',
    icon: 'building',
    description: 'Advisory and transactional services for businesses of all sizes — from startup incorporation to complex commercial agreements and regulatory compliance under the Companies Act, SEBI regulations, and FEMA.',
    services: [
      'Company incorporation and structuring',
      'Commercial contracts and agreements',
      'Due diligence and M&A advisory',
      'NCLT/NCLAT proceedings',
      'SEBI and securities compliance',
      'Foreign investment (FEMA) advisory',
    ],
  },
  {
    slug: 'constitutional-law',
    title: 'Constitutional Law',
    shortDescription: 'Fundamental rights, writ petitions, and PIL before High Courts and the Supreme Court.',
    icon: 'book',
    description: 'Practice focused on constitutional remedies, fundamental rights enforcement, and public interest litigation. Writ petitions under Articles 32 and 226 for individuals, organizations, and public causes.',
    services: [
      'Writ petitions (Article 32 and 226)',
      'Public Interest Litigation (PIL)',
      'Fundamental rights enforcement',
      'Constitutional challenges to legislation',
      'Service and administrative law matters',
      'Election petitions',
    ],
  },
  {
    slug: 'family-law',
    title: 'Family & Matrimonial',
    shortDescription: 'Divorce, custody, maintenance, and succession across personal laws.',
    icon: 'users',
    description: 'Sensitive and strategic handling of family disputes across Hindu, Muslim, Christian, and Special Marriage Act provisions. Focus on mediation-first approaches with litigation readiness.',
    services: [
      'Divorce and judicial separation',
      'Child custody and visitation',
      'Maintenance and alimony',
      'Domestic violence (Protection of Women from DV Act)',
      'Succession and inheritance',
      'Muslim personal law matters',
    ],
  },
  {
    slug: 'technology-law',
    title: 'Technology & AI Law',
    shortDescription: 'Data protection, IT Act compliance, AI governance, and digital rights.',
    icon: 'cpu',
    description: 'Cutting-edge practice at the intersection of law and technology. Advisory on the Digital Personal Data Protection Act 2023, Information Technology Act, AI governance frameworks, and digital business compliance.',
    services: [
      'DPDP Act 2023 compliance',
      'IT Act advisory and cybercrime',
      'AI and algorithmic governance',
      'Data breach response',
      'SaaS and technology agreements',
      'Intermediary liability and safe harbour',
    ],
  },
] as const;
