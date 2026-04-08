export interface Article {
  readonly slug: string;
  readonly title: string;
  readonly excerpt: string;
  readonly category: string;
  readonly date: string;
  readonly readTime: string;
  readonly content: string;
}

export const ARTICLES: readonly Article[] = [
  {
    slug: 'bns-bnss-transition-guide',
    title: 'The BNS & BNSS Transition: What You Need to Know',
    excerpt: 'A comprehensive guide to the replacement of the Indian Penal Code with the Bharatiya Nyaya Sanhita, effective July 1, 2024.',
    category: 'Criminal Law',
    date: '2026-04-01',
    readTime: '8 min',
    content: `The Bharatiya Nyaya Sanhita (BNS) 2023, along with the Bharatiya Nagarik Suraksha Sanhita (BNSS) 2023 and the Bharatiya Sakshya Adhiniyam (BSA) 2023, replaced the colonial-era Indian Penal Code 1860, Code of Criminal Procedure 1973, and Indian Evidence Act 1872 respectively, effective July 1, 2024.

## Key Structural Changes

The IPC's 511 sections have been consolidated into 358 sections under the BNS. This is not merely a renumbering exercise — several sections have been merged, reorganized by subject matter, and new offences have been introduced.

### New Offences Under BNS

1. **Organised Crime (Section 111)**: For the first time, organised crime has been defined and penalised under general criminal law, covering syndicate-based extortion, land grabbing, and contract killing.

2. **Petty Organised Crime (Section 112)**: Addresses theft, snatching, and pickpocketing by organised groups — offences previously handled under general theft provisions.

3. **Terrorist Act (Section 113)**: Terrorism is now formally defined in the general criminal law. Previously, this was exclusively under the UAPA.

4. **Mob Lynching (Section 103(2))**: A specific provision addresses murder by a group of five or more persons acting on grounds of race, caste, community, sex, language, or personal belief.

## Transitional Provisions

Cases registered before July 1, 2024 continue to be tried under the IPC/CrPC. New FIRs filed on or after this date must cite BNS sections. This creates a transitional period where courts must simultaneously apply both frameworks — a practical challenge that demands careful section-mapping in every filing.

## Impact on Legal Practice

For practitioners, the transition requires:

- Familiarity with the new section numbering and consolidation patterns
- Understanding of which provisions have substantive changes versus mere renumbering
- Awareness of the four entirely new offences
- Facility with cross-referencing old IPC sections in existing case law with new BNS sections

Our [IPC to BNS Converter](/tools/bns-converter) tool provides instant cross-referencing for the most commonly cited sections.

## The Broader Context

The BNS transition represents the most significant overhaul of Indian criminal law since independence. While much of the substantive law remains unchanged, the reorganisation around Indian priorities — women's safety, organised crime, digital evidence, and national security — marks a philosophical shift from the colonial framework.

Understanding this transition is essential for every legal professional practicing criminal law in India today.`,
  },
  {
    slug: 'dpdp-act-2023-compliance',
    title: 'DPDP Act 2023: Compliance Requirements for Businesses',
    excerpt: 'Understanding the Digital Personal Data Protection Act 2023 and what Indian businesses need to do to comply.',
    category: 'Technology Law',
    date: '2026-03-15',
    readTime: '6 min',
    content: `The Digital Personal Data Protection Act 2023 (DPDP Act) represents India's first comprehensive data protection legislation. Now in full force, it establishes a framework for processing personal data that balances individual privacy rights with legitimate business needs.

## Who Does This Apply To?

The DPDP Act applies to every entity that processes digital personal data within India, and to entities outside India that process data of individuals in India in connection with offering goods or services. This means virtually every business with an online presence serving Indian customers falls within scope.

## Key Obligations

### For Data Fiduciaries (Controllers)

1. **Lawful Basis**: Personal data can only be processed based on consent or certain "legitimate uses" specified in the Act.

2. **Purpose Limitation**: Data must be collected for a specific, stated purpose and cannot be repurposed without fresh consent.

3. **Data Minimisation**: Only data that is necessary for the stated purpose should be collected.

4. **Accuracy**: Reasonable efforts must be made to ensure data accuracy, particularly when decisions affecting the individual are based on such data.

5. **Storage Limitation**: Personal data must be erased when it is no longer needed for the purpose for which it was collected, unless retention is required by law.

6. **Security Safeguards**: Reasonable security measures must be implemented to prevent data breaches.

### Consent Requirements

Consent must be free, specific, informed, unconditional, and unambiguous. It must be given through a clear affirmative action. Importantly, consent can be withdrawn at any time, and the process for withdrawal must be as easy as the process for giving consent.

### Data Breach Notification

In the event of a personal data breach, the Data Fiduciary must notify the Data Protection Board of India and affected individuals. The notification must be made without undue delay.

## Penalties

The Act prescribes significant penalties for non-compliance:

- Up to INR 250 crore for failure to take reasonable security safeguards resulting in a data breach
- Up to INR 200 crore for failure to notify the Board and affected individuals of a breach
- Up to INR 150 crore for non-compliance with obligations regarding children's data

## What Businesses Should Do Now

1. **Audit your data**: Map what personal data you collect, where it's stored, how it's processed, and who has access.

2. **Update privacy policies**: Ensure your privacy notices meet the Act's requirements for clarity and specificity.

3. **Implement consent mechanisms**: Build or update consent collection workflows that meet the "free, specific, informed" standard.

4. **Establish breach protocols**: Have a documented incident response plan that includes notification procedures.

5. **Appoint a DPO**: Consider appointing a Data Protection Officer if you process data at significant scale.

For specific compliance guidance tailored to your business, [schedule a consultation](/contact) with our Technology & AI Law practice.`,
  },
  {
    slug: 'ai-governance-india-2026',
    title: 'AI Governance in India: The 2026 Landscape',
    excerpt: 'An overview of the emerging AI regulatory framework in India and what businesses deploying AI systems need to consider.',
    category: 'Technology Law',
    date: '2026-03-01',
    readTime: '5 min',
    content: `India currently operates without a singular AI regulation statute. Unlike the EU, which enacted the comprehensive AI Act, India has taken a sector-specific and principles-based approach to AI governance. As AI adoption accelerates across industries, understanding this evolving landscape is critical.

## Current Regulatory Framework

### No Unified AI Law

As of 2026, India has no dedicated AI legislation. The IndiaAI Mission, launched by the government, focuses primarily on AI development and adoption rather than restriction. However, existing laws apply:

- **DPDP Act 2023**: Governs personal data used in AI training and inference
- **IT Act 2000**: Covers liability for AI-mediated communications and transactions
- **Consumer Protection Act 2019**: Holds AI-driven services to the same standards as traditional services
- **Competition Act 2002**: Applies to AI-facilitated anti-competitive practices

### Sector-Specific Guidance

Several regulators have issued sector-specific AI guidance:

- **RBI**: Guidelines on AI/ML in financial services, particularly credit scoring and fraud detection
- **SEBI**: Norms for algorithmic trading and AI-driven investment advice
- **IRDAI**: Framework for AI in insurance underwriting and claims processing

## Supreme Court and AI

The Supreme Court's February 2026 observations on AI-generated citations have created de facto governance for legal AI. The Court declared that citing AI-generated fake judgments constitutes professional misconduct, not mere error. This establishes a clear principle: the burden of verifying AI output falls on the professional using it.

## Practical Considerations for Businesses

### Deploying AI Systems in India

1. **Transparency**: While not legally mandated across sectors, transparency about AI usage builds trust and prepares for future regulation.

2. **Human oversight**: Maintain meaningful human review for consequential AI-driven decisions, particularly in finance, healthcare, and employment.

3. **Bias auditing**: Proactively test AI systems for bias, particularly in the Indian context where caste, religion, and regional factors can create discriminatory patterns.

4. **Data localisation**: Under DPDP requirements, ensure AI training data for Indian users remains compliant with data protection obligations.

5. **Accountability**: Establish clear accountability chains for AI decisions within your organisation.

## Looking Ahead

India is likely to introduce more formal AI governance frameworks in the coming years. Businesses that proactively adopt responsible AI practices will be better positioned when regulation arrives.

For guidance on AI governance compliance specific to your industry, [reach out to our Technology & AI Law practice](/contact).`,
  },
] as const;

export function getArticleBySlug(slug: string): Article | undefined {
  return ARTICLES.find((a) => a.slug === slug);
}

export const ARTICLE_CATEGORIES = [...new Set(ARTICLES.map((a) => a.category))] as const;
