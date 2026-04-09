export const SITE = {
  name: 'Shueb Hussain',
  qualifications: 'B.Com., LL.B., LL.M., Ph.D.',
  qualificationsLong: 'B.Com. (Computers), LL.B., LL.M. (Constitutional Law), Dual Masters (Management & Systems), Ph.D.',
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

export interface ProcessStep {
  readonly step: string;
  readonly title: string;
  readonly description: string;
}

export interface PracticeArea {
  readonly slug: string;
  readonly title: string;
  readonly shortDescription: string;
  readonly icon: string;
  readonly description: string;
  readonly approach: string;
  readonly process: readonly ProcessStep[];
  readonly strengths: readonly string[];
  readonly services: readonly string[];
}

export const PRACTICE_AREAS: readonly PracticeArea[] = [
  {
    slug: 'criminal-law',
    title: 'Criminal Law',
    shortDescription: 'Defence and prosecution across all criminal matters under BNS, BNSS, and BSA.',
    icon: 'shield',
    description: 'Comprehensive criminal defence and advisory services covering the full spectrum of criminal law under the Bharatiya Nyaya Sanhita (BNS) 2023, Bharatiya Nagarik Suraksha Sanhita (BNSS) 2023, and Bharatiya Sakshya Adhiniyam (BSA) 2023. From pre-arrest strategy to final appellate arguments, every case is handled with forensic attention to evidence and procedural safeguards.',
    approach: 'Criminal matters demand speed, precision, and deep knowledge of procedural law. Our approach begins with an immediate, forensic analysis of the prosecution\'s case — identifying evidentiary gaps, procedural violations, and constitutional safeguards that can be leveraged. Every defence strategy is built on exhaustive case law research powered by AI tools that search across millions of Indian judgments, giving our clients an analytical edge that traditional research simply cannot match. We treat every arrest as urgent and every liberty as non-negotiable.',
    process: [
      {
        step: '01',
        title: 'Immediate Case Assessment',
        description: 'Within hours of engagement, we obtain the FIR, analyse the sections invoked, assess the evidence landscape, and advise on immediate steps — whether that is anticipatory bail, surrender strategy, or quashing proceedings.',
      },
      {
        step: '02',
        title: 'Defence Strategy & Filing',
        description: 'We draft and file the appropriate applications — bail, anticipatory bail, quashing petitions, or discharge applications — supported by AI-researched case law specific to the sections charged and the facts at hand.',
      },
      {
        step: '03',
        title: 'Court Representation',
        description: 'Rigorous courtroom advocacy across District Courts, Sessions Courts, and the Telangana High Court. Every hearing is prepared with written arguments, cited precedents, and a clear theory of defence.',
      },
      {
        step: '04',
        title: 'Resolution & Appeals',
        description: 'Whether through acquittal at trial, favourable plea negotiations, or appellate relief, we pursue the outcome that best protects our client\'s liberty and reputation. Post-conviction appeals are handled with the same intensity as fresh matters.',
      },
    ],
    strengths: [
      'Available around the clock for urgent bail and arrest matters — liberty cannot wait for business hours',
      'Among the first practices in Telangana to fully transition to BNS, BNSS, and BSA — no section-mapping confusion or transitional errors',
      'AI-powered research across 1M+ Indian judgments to find the most persuasive precedents for your specific facts',
      'Experience across the full court hierarchy — from Metropolitan Magistrate courts to the Telangana High Court',
      'Proven track record in complex matters including white-collar crime, cybercrime under the IT Act, and PMLA defence',
    ],
    services: [
      'Bail applications — regular, anticipatory, default, and transit bail',
      'FIR quashing petitions under Section 528 BNSS (formerly 482 CrPC)',
      'Trial defence and cross-examination',
      'Criminal appeals and revision petitions',
      'White-collar crime defence — fraud, cheating, misappropriation, forgery',
      'Cybercrime matters under the Information Technology Act',
      'Cheque bounce cases under Section 138 NI Act — for complainants and accused',
      'PMLA defence and ED investigation support',
      'Domestic violence and Section 498A defence',
      'Criminal mediation and compounding applications',
    ],
  },
  {
    slug: 'civil-litigation',
    title: 'Civil Litigation',
    shortDescription: 'Strategic civil litigation from district courts to the Supreme Court.',
    icon: 'scale',
    description: 'End-to-end civil litigation services covering property disputes, recovery suits, injunctions, declaratory actions, and appeals. Cases handled across District Courts, High Courts, and the Supreme Court of India. Every matter is approached with a dual focus — achieving the strongest possible legal outcome while managing time and cost efficiently.',
    approach: 'Civil litigation is often a war of attrition. Our approach is different: we begin every matter with an honest assessment of the merits, the likely timeline, and the realistic outcomes — including settlement potential. When litigation is the right path, we pursue it aggressively, with meticulous pleadings and evidence management. When mediation or negotiation can achieve a faster, better result, we guide our clients there without ego. AI-assisted document review and case law research ensure that our pleadings cite the most current and persuasive authorities available.',
    process: [
      {
        step: '01',
        title: 'Case Evaluation & Merit Analysis',
        description: 'We conduct a thorough review of all documents, evidence, and facts. You receive a candid assessment of the case strength, likely timeline, estimated costs, and strategic options — including whether settlement should be explored first.',
      },
      {
        step: '02',
        title: 'Pleadings & Documentation',
        description: 'Drafting of suits, written statements, applications, and supporting affidavits with precision. Every pleading is cross-referenced against current case law and tailored to the specific court and judge.',
      },
      {
        step: '03',
        title: 'Hearings, Evidence & Arguments',
        description: 'Active court representation through every stage — from interim applications and evidence recording to final arguments. Written submissions and compilations of authorities are prepared for every substantive hearing.',
      },
      {
        step: '04',
        title: 'Judgment, Execution & Appeals',
        description: 'Post-judgment, we handle execution proceedings to enforce decrees, or pursue appeals if the outcome is unfavourable. Decree execution is where many litigants falter — we ensure that a favourable judgment translates into actual relief.',
      },
    ],
    strengths: [
      'Presence across 15+ courts in Telangana — District Courts, City Civil Courts, Family Courts, and the High Court',
      'Alternate Dispute Resolution experience — mediation and arbitration when litigation is not the most efficient path',
      'Deep expertise in Hyderabad property disputes — title conflicts, partition suits, and specific performance actions',
      'AI-assisted document review for large-volume evidence cases, reducing preparation time and improving accuracy',
      'Relentless focus on execution — because a decree on paper is worthless until it is enforced',
    ],
    services: [
      'Property and title disputes — ownership, possession, partition, and boundary issues',
      'Recovery and money suits — debt recovery, promissory notes, and commercial dues',
      'Injunctions — temporary, permanent, and mandatory injunctions',
      'Specific performance of contracts — compelling fulfilment of contractual obligations',
      'Declaratory suits — establishing legal rights, status, or title',
      'Partition and succession matters — division of joint family property',
      'Consumer disputes before NCDRC, State, and District Commissions',
      'Appellate practice — first and second appeals, revision petitions',
      'Execution proceedings — attachment, sale, and delivery of possession',
      'Mediation and settlement negotiations',
    ],
  },
  {
    slug: 'corporate-law',
    title: 'Corporate & Commercial',
    shortDescription: 'Business formation, contracts, compliance, and corporate governance.',
    icon: 'building',
    description: 'Advisory and transactional services for businesses of all sizes — from startup incorporation to complex commercial agreements and regulatory compliance under the Companies Act, SEBI regulations, and FEMA. We function as an external legal department for businesses that need reliable, responsive counsel without the overhead of an in-house team.',
    approach: 'Business moves fast, and legal counsel must keep pace. Our corporate practice is built around commercial understanding — we structure advice around your business objectives, not just legal compliance. Whether you are incorporating your first company, negotiating a joint venture, or facing an NCLT proceeding, we deliver practical, actionable counsel. Contract drafting leverages AI-assisted review to catch inconsistencies, missing protections, and non-standard terms — resulting in tighter agreements delivered faster.',
    process: [
      {
        step: '01',
        title: 'Business Assessment',
        description: 'We start by understanding your business model, commercial goals, and risk appetite. Legal structure, regulatory exposure, and compliance obligations are mapped before any document is drafted.',
      },
      {
        step: '02',
        title: 'Structuring & Drafting',
        description: 'From company incorporation to shareholder agreements, joint venture contracts, and commercial terms — every document is drafted to protect your interests while remaining commercially workable.',
      },
      {
        step: '03',
        title: 'Regulatory Compliance',
        description: 'We handle MCA filings, GST registrations, FEMA compliance, and SEBI requirements. Annual compliance calendars ensure you never miss a statutory deadline.',
      },
      {
        step: '04',
        title: 'Ongoing Advisory & Dispute Resolution',
        description: 'Continuing counsel on governance matters, board decisions, and commercial disputes. When disputes arise, we handle NCLT/NCLAT proceedings and commercial arbitration.',
      },
    ],
    strengths: [
      'Startup-friendly approach — we understand bootstrapped budgets and help founders get the legal foundation right from day one',
      'End-to-end company incorporation — DSC, DIN, SPICe+, PAN, TAN, GST, and bank account opening handled as a single package',
      'AI-assisted contract review that flags risks, missing clauses, and non-standard terms in hours, not days',
      'NCLT and NCLAT experience for corporate insolvency, oppression and mismanagement, and winding-up proceedings',
      'Cross-border advisory for NRIs and foreign investors navigating FEMA and RBI regulations for Indian investments',
    ],
    services: [
      'Company incorporation and structuring — Pvt Ltd, LLP, OPC, Partnership',
      'Commercial contracts — supply agreements, service agreements, NDAs, MOUs',
      'Shareholder agreements and joint venture documentation',
      'Due diligence for mergers, acquisitions, and investments',
      'NCLT/NCLAT proceedings — insolvency, oppression, mismanagement',
      'SEBI and securities compliance advisory',
      'Foreign investment advisory under FEMA and RBI regulations',
      'Startup legal packages — incorporation, founder agreements, ESOP structuring',
      'GST registration and compliance advisory',
      'Commercial arbitration and dispute resolution',
    ],
  },
  {
    slug: 'constitutional-law',
    title: 'Constitutional Law',
    shortDescription: 'Fundamental rights, writ petitions, and PIL before High Courts and the Supreme Court.',
    icon: 'book',
    description: 'Practice focused on constitutional remedies, fundamental rights enforcement, and public interest litigation. Writ petitions under Articles 32 and 226 for individuals, organizations, and public causes. When the state oversteps or fundamental rights are violated, the Constitution provides powerful remedies — we ensure those remedies are pursued with the urgency and skill they demand.',
    approach: 'Constitutional law is the ultimate safeguard against overreach — by the state, by institutions, and by private actors wielding public power. Our approach is to identify the constitutional dimension of every dispute and pursue the most effective remedy available. Whether it is a habeas corpus petition for an unlawful detention, a mandamus to compel a government authority to act, or a Public Interest Litigation for a systemic injustice, we bring the same intensity to Article 226 petitions before the Telangana High Court as to Article 32 matters before the Supreme Court.',
    process: [
      {
        step: '01',
        title: 'Rights Analysis',
        description: 'We identify which fundamental rights or constitutional provisions are engaged, assess the strength of the claim, and determine the appropriate court and writ type — habeas corpus, mandamus, certiorari, prohibition, or quo warranto.',
      },
      {
        step: '02',
        title: 'Petition Drafting',
        description: 'Writ petitions and PILs require exceptional drafting — the constitutional argument must be clear, the facts must be irrefutable, and the relief sought must be precise. We prepare petitions that command the court\'s attention from the first page.',
      },
      {
        step: '03',
        title: 'Filing & Urgent Listing',
        description: 'We handle filing, mentioning for urgent listing where the matter warrants it, and obtaining interim orders. Constitutional matters often require immediate relief — we move with the urgency the situation demands.',
      },
      {
        step: '04',
        title: 'Hearing & Enforcement',
        description: 'Sustained advocacy through admission, counter-affidavit stage, and final hearing. Post-order, we ensure compliance through contempt proceedings if necessary — a court order is only as effective as its enforcement.',
      },
    ],
    strengths: [
      'Practiced extensively before the Telangana High Court — deep familiarity with the court\'s procedures, bench patterns, and listing protocols',
      'PIL experience on matters of public concern — environmental protection, government accountability, and institutional reform',
      'Service law expertise — challenging arbitrary transfers, suspensions, and denial of promotions for government employees',
      'Speed in urgent matters — habeas corpus and emergency writ petitions filed and listed within hours when liberty is at stake',
      'Strong research foundation — AI-assisted constitutional law research across decades of Supreme Court and High Court jurisprudence',
    ],
    services: [
      'Writ petitions under Article 226 before the Telangana High Court',
      'Writ petitions under Article 32 before the Supreme Court of India',
      'Public Interest Litigation — environmental, governance, and institutional accountability',
      'Habeas corpus petitions for unlawful detention',
      'Mandamus to compel government action or compliance',
      'Certiorari and prohibition to challenge quasi-judicial orders',
      'Service and administrative law — government employees, PSU matters',
      'Fundamental rights enforcement — speech, movement, profession, equality',
      'Election petitions and disqualification challenges',
      'Contempt proceedings for non-compliance with court orders',
    ],
  },
  {
    slug: 'family-law',
    title: 'Family & Matrimonial',
    shortDescription: 'Divorce, custody, maintenance, and succession across personal laws.',
    icon: 'users',
    description: 'Sensitive and strategic handling of family disputes across Hindu, Muslim, Christian, and Special Marriage Act provisions. Focus on mediation-first approaches with full litigation readiness. Family matters affect not just legal rights but personal well-being, finances, and — most importantly — children. We handle every case with the discretion and empathy it deserves, while pursuing our client\'s interests with unwavering resolve.',
    approach: 'Family disputes are unlike any other legal matter — the opposing party is often someone our client once trusted completely. Our approach balances empathy with assertiveness. We prioritise mediation and negotiated settlement wherever possible, because the emotional and financial cost of protracted family litigation is devastating. But when negotiation fails, we are fully prepared for contested proceedings. Every case is handled with strict confidentiality, and our strategy accounts for the emotional dynamics — not just the legal positions.',
    process: [
      {
        step: '01',
        title: 'Confidential Consultation',
        description: 'A private, judgement-free assessment of your situation. We listen to the full picture — legal, emotional, and financial — and outline every option available to you, including the realistic outcomes and timelines for each.',
      },
      {
        step: '02',
        title: 'Mediation & Negotiation',
        description: 'Where both parties are willing, we pursue mediation for faster, less adversarial resolution. Settlement terms covering maintenance, custody, property division, and other matters are negotiated to protect your long-term interests.',
      },
      {
        step: '03',
        title: 'Court Proceedings',
        description: 'When mediation is not viable, we initiate or defend proceedings before the Family Court — divorce petitions, custody applications, maintenance claims, protection orders, and related matters. Interim relief is sought where urgency exists.',
      },
      {
        step: '04',
        title: 'Settlement & Compliance',
        description: 'Whether through mediated agreement or court order, we ensure the terms are properly documented, executed, and enforceable. Post-decree matters — modification of custody, enforcement of maintenance — are handled as needed.',
      },
    ],
    strengths: [
      'Multi-personal-law expertise — Hindu Marriage Act, Muslim personal law, Christian personal law, Special Marriage Act, and Parsi law',
      'Mediation-first philosophy that resolves matters in months, not years — saving emotional energy, money, and relationships where children are involved',
      'Deep experience with the Protection of Women from Domestic Violence Act 2005 — obtaining and defending protection orders',
      'Child custody advocacy focused on the welfare principle — building the strongest case for the parent who serves the child\'s best interests',
      'Absolute confidentiality — family matters are handled with the discretion they demand, with no public exposure',
    ],
    services: [
      'Mutual consent divorce — fast-track resolution with fair settlement terms',
      'Contested divorce — grounds-based proceedings with full trial support',
      'Child custody and visitation — interim and permanent custody orders',
      'Maintenance and alimony — pendente lite and permanent maintenance claims',
      'Domestic violence — protection orders under the DV Act 2005',
      'Section 498A / BNS Section 85-86 — defence and prosecution of cruelty cases',
      'Succession and inheritance — testamentary and intestate matters',
      'Muslim personal law matters — talaq, khula, mahr, and inheritance',
      'Guardianship applications under the Hindu Minority and Guardianship Act',
      'Restitution of conjugal rights and judicial separation',
    ],
  },
  {
    slug: 'technology-law',
    title: 'Technology & AI Law',
    shortDescription: 'Data protection, IT Act compliance, AI governance, and digital rights.',
    icon: 'cpu',
    description: 'Cutting-edge practice at the intersection of law and technology. Advisory on the Digital Personal Data Protection Act 2023, Information Technology Act, AI governance frameworks, and digital business compliance. As businesses and individuals increasingly operate in digital spaces, the legal questions are becoming more complex — and the consequences of getting them wrong are becoming more severe.',
    approach: 'Technology law is not a niche — it touches every business that operates online, collects data, or deploys AI. Our approach is forward-looking: we advise on compliance today while preparing you for the regulation that is coming tomorrow. Unlike firms that bolt technology advisory onto a traditional practice, our counsel is informed by genuine technical understanding. We work with startups building AI products, established businesses navigating DPDP compliance, and individuals whose digital rights have been violated. Every advisory engagement produces actionable deliverables, not abstract legal opinions.',
    process: [
      {
        step: '01',
        title: 'Compliance Audit',
        description: 'We assess your current data practices, technology infrastructure, and regulatory exposure against the DPDP Act, IT Act, and sector-specific requirements. The audit identifies gaps, risks, and priorities.',
      },
      {
        step: '02',
        title: 'Gap Analysis & Roadmap',
        description: 'A clear, prioritised compliance roadmap with specific actions, responsible owners, and deadlines. No generic checklists — every recommendation is tailored to your business model and data flows.',
      },
      {
        step: '03',
        title: 'Implementation Support',
        description: 'We draft privacy policies, consent mechanisms, data processing agreements, and internal governance documents. For AI products, we advise on responsible AI frameworks, bias testing obligations, and deployment safeguards.',
      },
      {
        step: '04',
        title: 'Ongoing Monitoring & Response',
        description: 'Technology regulation is evolving rapidly. We provide ongoing advisory to keep your compliance current, and incident response support for data breaches, takedown demands, and regulatory inquiries.',
      },
    ],
    strengths: [
      'One of the few practices in Hyderabad with dedicated technology law expertise — not an afterthought bolted onto a general practice',
      'DPDP Act 2023 compliance from first principles — privacy audits, consent architecture, and Data Protection Board readiness',
      'AI governance advisory for companies building or deploying AI systems — bias frameworks, transparency requirements, and liability mapping',
      'IT Act defence for individuals and companies facing cybercrime accusations — hacking charges, data theft, and intermediary liability',
      'Practical, implementation-ready advice — we deliver compliance roadmaps and drafted documents, not just legal opinions',
    ],
    services: [
      'DPDP Act 2023 compliance — audits, privacy policies, consent management, DPO advisory',
      'IT Act advisory and defence — Section 43, 66, 66C, 66D, and intermediary liability',
      'AI and algorithmic governance frameworks',
      'Data breach response — notification, mitigation, and regulatory engagement',
      'SaaS and technology agreements — licensing, SLAs, data processing terms',
      'Intermediary liability and safe harbour advisory for platforms',
      'Cybercrime victim support — online fraud, identity theft, defamation',
      'Domain and intellectual property disputes in digital spaces',
      'Social media compliance and content takedown matters',
      'Startup technology advisory — product compliance, terms of service, privacy by design',
    ],
  },
] as const;
