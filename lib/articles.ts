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
  {
    slug: 'landmark-supreme-court-judgments',
    title: 'Landmark Supreme Court Judgments Every Indian Should Know',
    excerpt: 'A guide to the most consequential Supreme Court decisions that shaped constitutional rights, personal freedoms, and the rule of law in India.',
    category: 'Constitutional Law',
    date: '2026-02-15',
    readTime: '10 min',
    content: `The Supreme Court of India has delivered judgments that have fundamentally reshaped the relationship between the citizen and the state. These are not merely legal precedents — they are constitutional milestones that define your rights today.

## 1. Kesavananda Bharati v. State of Kerala (1973)

**What it decided**: By a razor-thin 7-6 majority, the Supreme Court held that while Parliament can amend the Constitution under Article 368, it cannot alter or destroy its "basic structure." The basic structure includes features like the supremacy of the Constitution, the republican and democratic form of government, secularism, federalism, and judicial review.

**Why it matters today**: Every time Parliament passes a constitutional amendment, Kesavananda Bharati is the invisible guardrail. It was the direct basis for striking down Emergency-era amendments and continues to be invoked whenever constitutional amendments are challenged. Without this judgment, Parliament could have legally converted India into an authoritarian state simply through a two-thirds majority.

## 2. Maneka Gandhi v. Union of India (1978)

**What it decided**: The Court dramatically expanded Article 21 (right to life and personal liberty), holding that the procedure depriving a person of life or liberty must be "right, just, and fair" — not merely any procedure established by law. The Court also held that Articles 14, 19, and 21 are interlinked and must be read together.

**Why it matters today**: Maneka Gandhi transformed Article 21 from a narrow procedural guarantee into the foundation of substantive rights. Every subsequent right recognised under Article 21 — the right to livelihood, the right to health, the right to a speedy trial, the right to legal aid — traces back to this case.

## 3. Vishaka v. State of Rajasthan (1997)

**What it decided**: Following the gang rape of social worker Bhanwari Devi, the Court laid down binding guidelines (the "Vishaka Guidelines") to prevent sexual harassment at the workplace, in the absence of any legislation on the subject.

**Why it matters today**: Vishaka was the direct precursor to the Prevention of Sexual Harassment (POSH) Act 2013. It established that sexual harassment at the workplace violates Articles 14, 15, 19, and 21, and that the state has an obligation to protect women at work.

## 4. Navtej Singh Johar v. Union of India (2018)

**What it decided**: A five-judge Constitution Bench unanimously struck down Section 377 of the IPC (now repealed) insofar as it criminalised consensual sexual conduct between adults, holding it violated Articles 14, 15, 19, and 21.

**Why it matters today**: Beyond decriminalisation, Navtej Johar firmly established that constitutional morality must prevail over popular morality, and that the dignity and identity of LGBTQ+ persons are fully protected under the Constitution. It overruled the 2013 Suresh Kumar Koushal judgment and reversed a significant regression in rights.

## 5. K.S. Puttaswamy v. Union of India (2017)

**What it decided**: A nine-judge bench unanimously held that privacy is a fundamental right under the Constitution, forming part of the right to life and personal liberty under Article 21.

**Why it matters today**: The right to privacy is the constitutional foundation for challenges to Aadhaar, data protection claims, and protections against state surveillance. It directly shaped the DPDP Act 2023 and continues to be invoked against government overreach into personal data.

## 6. Shah Bano Case — Mohd. Ahmed Khan v. Shah Bano Begum (1985)

**What it decided**: The Court held that a Muslim woman divorced by her husband is entitled to maintenance under Section 125 of the CrPC (now Section 144 BNSS), rejecting the argument that Muslim personal law excluded this right.

**Why it matters today**: While the judgment was partially overridden by the Muslim Women (Protection of Rights on Divorce) Act 1986, it sparked a national debate on uniform civil law and women's rights that continues today. The Supreme Court's 2017 judgment striking down triple talaq (Shayara Bano) stands on its shoulders.

## 7. Shreya Singhal v. Union of India (2015)

**What it decided**: The Court struck down Section 66A of the Information Technology Act, which criminalised sending "offensive" messages online, as unconstitutional for being vague, overbroad, and violating the right to free speech under Article 19(1)(a).

**Why it matters today**: Shreya Singhal established that online speech enjoys the same constitutional protection as offline speech. It has become the anchor case for internet freedom challenges in India and is frequently cited in cases involving digital content regulation.

## 8. Aruna Shanbaug v. Union of India (2011) & Common Cause v. Union of India (2018)

**What it decided**: In Aruna Shanbaug, the Court permitted passive euthanasia under strict guidelines. In Common Cause, a five-judge bench went further, recognising the right to die with dignity as part of Article 21 and validating "advance directives" (living wills).

**Why it matters today**: These judgments are the legal basis for passive euthanasia in India and establish the right of a competent person to refuse medical treatment. They remain practically relevant for family members and medical professionals dealing with terminally ill patients.

## 9. M.C. Mehta v. Union of India (ongoing since 1986)

**What it decided**: A series of judgments by the Court (still ongoing) on the Ganga pollution, Delhi vehicular pollution, and industrial relocation cases established the principles of absolute liability (Shriram Gas case), the polluter pays principle, and the precautionary principle in Indian environmental law.

**Why it matters today**: M.C. Mehta cases are the foundation of environmental public interest litigation in India. They directly led to CNG mandates in Delhi, closure of polluting industries near the Taj Mahal, and the National Green Tribunal's jurisdiction framework.

---

These judgments are not historical curiosities. They are living instruments that courts apply in ongoing cases and that lawyers invoke in your defence. Understanding them is the first step to understanding your constitutional rights.`,
  },
  {
    slug: 'consumer-protection-act-2019-guide',
    title: 'Consumer Protection Act 2019 — A Complete Guide for Consumers',
    excerpt: 'Everything you need to know about filing consumer complaints in India — who qualifies, where to file, what relief you can get, and how the 2019 Act strengthens your rights.',
    category: 'Consumer Law',
    date: '2026-01-20',
    readTime: '8 min',
    content: `The Consumer Protection Act 2019 replaced the three-decade-old Act of 1986, significantly expanding consumer rights and remedies. Whether you have been sold a defective product, received a substandard service, or been misled by advertising, this Act is your primary legal tool.

## Who is a Consumer?

Under the 2019 Act, a consumer is any person who:

- Buys goods for consideration (not for resale or commercial purpose)
- Hires or avails services for consideration

The 2019 Act crucially includes **e-commerce transactions** and **online consumers** within its scope — a major expansion from the 1986 Act.

## What Can You Complain About?

### Defects in Goods

A "defect" is any fault, imperfection, or shortcoming in quality, quantity, potency, purity, or standard which is required to be maintained under any law or as represented by the seller. This includes expired products, adulterated food, and goods not conforming to advertised specifications.

### Deficiency in Services

A "deficiency" includes any fault, imperfection, shortcoming, or inadequacy in the quality, nature, or manner of performance in a service. This covers banking delays, insurance claim rejections, poor construction work, courier losses, and medical negligence.

### Unfair Trade Practices

The Act covers false representations about the quality, quantity, style, or grade of goods; false claims of government approval; misleading advertisements; and manipulation through bait-and-switch tactics.

### Product Liability

The 2019 Act introduced product liability — manufacturers, sellers, and service providers can be held strictly liable for harm caused by defective products or deficient services, without the consumer needing to prove negligence.

## Where to File Your Complaint

Complaints are filed based on the value of goods/services plus compensation claimed:

| Forum | Pecuniary Jurisdiction |
|-------|----------------------|
| District Consumer Disputes Redressal Commission | Up to Rs 50 lakh |
| State Consumer Disputes Redressal Commission | Rs 50 lakh to Rs 2 crore |
| National Consumer Disputes Redressal Commission | Above Rs 2 crore |

## Filing Online — e-Daakhil

The 2019 Act and its rules enable online filing of complaints through the **e-Daakhil portal** (edaakhil.nic.in). This allows consumers to file, pay fees, and track complaints without physically visiting a forum. Filing fees range from Rs 200 to Rs 7,500 depending on the claim value.

## Mediation Option

The 2019 Act introduced consumer mediation as an alternative to adjudication. Once a complaint is admitted, the forum may refer it to mediation with the parties' consent. Mediation is faster and preserves the relationship between consumer and business. If mediation fails, the complaint returns to the forum.

## Types of Relief You Can Get

A consumer commission can award:

1. Replacement of defective goods or repair of deficiency
2. Return of price paid
3. Compensation for loss or injury suffered
4. Punitive damages where appropriate
5. Discontinuation of unfair trade practice
6. Withdrawal of hazardous goods from sale
7. Refund to affected consumers in class action complaints

## Misleading Advertisements — New Penalties

The 2019 Act introduced specific provisions targeting misleading advertisements. The Central Consumer Protection Authority (CCPA) can:

- Issue directions to discontinue or modify the advertisement
- Impose a penalty of up to Rs 10 lakh on the manufacturer/endorser
- Impose up to Rs 50 lakh for repeat offences
- Ban the endorser from endorsing products for up to 3 years

## How It Differs from the 1986 Act

| Feature | 1986 Act | 2019 Act |
|---------|----------|----------|
| E-commerce | Not covered | Explicitly covered |
| Product liability | Not covered | Strict liability provisions |
| Misleading ads | Limited | CCPA with enforcement power |
| Mediation | Not available | Formal mediation option |
| Unfair contracts | Not covered | Can be declared null and void |

## Practical Tips for Consumers

1. **Document everything**: Keep bills, invoices, warranty cards, screenshots of orders, and all communication with the seller/service provider.
2. **Send a legal notice first**: A well-drafted legal notice often resolves the matter without filing. It also demonstrates good faith.
3. **Act within the limitation period**: Complaints must be filed within two years of the cause of action. Do not delay.
4. **Include all costs in your claim**: You can claim the price paid, consequential losses, and compensation for mental agony and legal costs.

Consumer forums are designed to be accessible without a lawyer, but complex matters — particularly product liability claims or class actions — benefit from legal representation.`,
  },
  {
    slug: 'civil-suits-india-guide',
    title: 'Understanding Civil Suits in India — From Filing to Execution',
    excerpt: 'A step-by-step guide to civil litigation in India: types of suits, jurisdiction rules, the full lifecycle from plaint to decree, and how to enforce your judgment.',
    category: 'Civil Law',
    date: '2025-12-10',
    readTime: '9 min',
    content: `Civil litigation resolves disputes between private parties — over property, contracts, family matters, and money. Understanding how civil suits work helps you make informed decisions about pursuing or defending a claim.

## What is a Civil Suit?

A civil suit is a legal proceeding initiated by a party (the plaintiff) against another (the defendant) to enforce a legal right or seek compensation for its violation. Unlike criminal proceedings, the state is not typically a party. The governing statute is the **Code of Civil Procedure 1908 (CPC)**, which lays down the procedure for every civil court in India.

## Types of Civil Suits

### Suit for Declaration

Seeks a court declaration of your legal right or status — for example, declaring that you are the owner of a property or that a contract is void. Governed by the Specific Relief Act 1963.

### Suit for Permanent Injunction

Seeks a court order restraining the defendant from doing a specific act — for example, preventing encroachment on your land or stopping publication of defamatory material.

### Suit for Specific Performance

Where a party refuses to perform a contract, the other party can seek a decree directing actual performance — most commonly in sale agreements for immovable property.

### Suit for Recovery of Money

Filed to recover a debt, damages, or any sum of money due under contract or otherwise.

### Suit for Partition

Filed by a co-owner seeking division of property held jointly — common in family disputes involving ancestral property.

## Jurisdiction Rules

Before filing, you must identify the correct court.

**Pecuniary jurisdiction**: Each court has a monetary limit. The Civil Judge (Junior Division) handles smaller claims; the District Court handles larger ones. Check your state's rules for current limits.

**Territorial jurisdiction**: A suit must be filed where (a) the defendant resides, carries on business, or personally works for gain; or (b) where the cause of action arises; or (c) for immovable property suits, where the property is situated (Section 16-20 CPC).

**Subject matter jurisdiction**: Certain suits can only be filed in specific courts — family courts for matrimonial disputes, debt recovery tribunals for bank recovery matters, etc.

## Limitation Periods

The Limitation Act 1963 prescribes strict deadlines. The general limitation for civil suits is **three years** from the date the cause of action arises, but specific suits have different periods:

- Suit on a mortgage: 12 years
- Suit for recovery of immovable property: 12 years
- Suit on a contract: 3 years
- Suit for compensation for tort: 3 years

Filing after limitation is fatal to your case unless you can show sufficient cause for delay under Section 5 of the Limitation Act.

## The Civil Suit Lifecycle

### 1. Filing the Plaint

The plaintiff files a plaint (the initial pleading) setting out the facts, the relief sought, and the court fee paid. Court fees are calculated on the value of the suit.

### 2. Summons to Defendant

The court issues summons requiring the defendant to appear and file a written statement (their defence) within 30 days, extendable to 90 days in total.

### 3. Written Statement

The defendant files their reply, admitting or denying the plaintiff's allegations and raising any legal or factual defences.

### 4. Framing of Issues

The court identifies the points in dispute between the parties — these are the "issues" on which the case will be decided.

### 5. Evidence

Each party leads evidence — documentary (documents marked as exhibits) and oral (witnesses examined-in-chief and cross-examined). Commercial Courts have strict timelines for this stage.

### 6. Arguments

After evidence, both sides present oral and written arguments on questions of law and fact.

### 7. Decree

The court pronounces judgment and a formal decree is drawn up. The decree specifies what the plaintiff has won and what the defendant must do or pay.

## Interim Orders

At any stage, a party can apply for interim orders to preserve the status quo pending final decision:

- **Temporary Injunction (Order XXXIX)**: Restrains the other party from taking a specific action during the pendency of the suit.
- **Receiver (Order XL)**: Court appoints a receiver to manage disputed property.
- **Attachment before Judgment (Order XXXVIII)**: Attaches the defendant's property to prevent dissipation before a decree.

## Appeals

A decree of the trial court can be appealed to the District Court (first appeal), then to the High Court (second appeal on a substantial question of law), and in some cases to the Supreme Court.

## Execution of Decrees

Winning a decree is only the first step — you must execute it. An execution petition under Order XXI CPC is filed in the court that passed the decree. Methods of execution include:

- Attachment and sale of the judgment debtor's property
- Arrest and detention of the judgment debtor
- Appointment of receiver over their property

Indian courts have time limits for execution: a decree must be executed within 12 years of the date of the decree.

Civil litigation demands patience — suits can take years in congested courts. Commercial Courts (established under the Commercial Courts Act 2015) offer faster resolution for commercial disputes. Understanding the process helps you set realistic expectations and make strategic decisions.`,
  },
  {
    slug: 'rti-act-2005-guide',
    title: 'Your Rights Under the Right to Information Act 2005',
    excerpt: 'How to use the RTI Act to obtain information from the government — filing procedure, fees, timelines, appeals, and practical tips for effective applications.',
    category: 'Constitutional Law',
    date: '2025-11-05',
    readTime: '7 min',
    content: `The Right to Information Act 2005 is one of the most powerful tools a citizen has against government opacity. It operationalises the fundamental right to information recognised by the Supreme Court as part of Article 19(1)(a) — the right to freedom of speech. Understanding how to use it effectively can unlock government records, expose corruption, and hold authorities accountable.

## What is the RTI Act?

The RTI Act 2005 gives every citizen the right to request information from any "public authority" — central or state government bodies, government-aided institutions, and statutory bodies. The Act covers information in any form: documents, files, records, data, samples, and emails.

## Who Can File an RTI Application?

Any citizen of India. There is no requirement to provide a reason for the request, and applicants can remain anonymous when making requests through third parties or postal applications. Non-citizens cannot file RTI applications.

## What Information Can You Seek?

You can request:

- Copies of decisions and the reasoning behind them
- Files, reports, and official records
- Status of pending applications or cases
- Details of government schemes and their beneficiaries
- Inspection of public works, documents, and records
- Samples of materials

You **cannot** seek opinions, interpretations, or creation of information that does not exist in recorded form. The Act enables access to existing records only.

## How to File an RTI Application

### Online (Recommended)

For central government public authorities, file at **rtionline.gov.in**. Pay the Rs 10 fee online by debit/credit card or net banking. You will receive an acknowledgment with a registration number.

For state government public authorities, check your state's RTI portal (most states now have one).

### Offline

Write a plain-language letter addressed to the Public Information Officer (PIO) of the concerned department. The application should:

1. Clearly describe the information sought
2. Include your name and contact address
3. Be accompanied by a Rs 10 fee (by demand draft, postal order, or cash where accepted)

Below Poverty Line applicants are exempt from fees.

## Timelines

| Stage | Deadline |
|-------|----------|
| Response from PIO | 30 days from receipt |
| Response affecting life or liberty | 48 hours |
| Transfer to another PIO | Within 5 days |
| Response after transfer | 35 days total |

## First Appeal

If the PIO fails to respond within 30 days, provides incomplete information, or you are dissatisfied with the response, you can file a **First Appeal** with the First Appellate Authority (a senior officer of the same department) within 30 days of the PIO's response or the expiry of the 30-day period.

The First Appellate Authority must decide within 30 days, extendable to 45 days.

## Second Appeal to the Information Commission

If still unsatisfied, file a **Second Appeal** with:
- The **Central Information Commission (CIC)** for central government bodies
- The **State Information Commission (SIC)** for state government bodies

There is no fee for the second appeal, and it must be filed within 90 days of the First Appellate Authority's decision.

## Exemptions Under the RTI Act

Not all information is accessible. Section 8 exempts:

- Information affecting national security and sovereignty
- Cabinet papers and advice to the President/Governor
- Trade secrets and commercially confidential information
- Information received in confidence from a foreign government
- Personal information with no public interest connection
- Information that would impede investigation or prosecution

However, the Act has a critical override: **even exempt information must be disclosed if the public interest outweighs the harm from disclosure**.

## Penalties for Non-Compliance

If the CIC or SIC finds that a PIO has refused to accept an application, wilfully provided incorrect information, or obstructed compliance, it can impose a penalty of **Rs 250 per day** of delay, up to a maximum of Rs 25,000 on the PIO personally. It can also recommend disciplinary action.

## Landmark RTI Cases

- **Namit Sharma v. Union of India (2013)**: The Supreme Court examined the qualifications required for Information Commissioners.
- **CBSE v. Aditya Bandopadhyay (2011)**: The Supreme Court held that RTI applies to examination answer sheets.
- **Girish Ramchandra Deshpande v. CIC (2013)**: Information about a government employee's service record is personal information but is accessible when the employee is a public servant performing public duties.

## Practical Tips

1. **Be specific**: Vague requests invite vague responses. Describe the exact document, file number, or record you seek.
2. **File separately for each department**: One application per public authority. Do not ask multiple departments in one application.
3. **Attach evidence if relevant**: If seeking status of your own application, attach the application number.
4. **Follow up diligently**: Track deadlines and file the first appeal immediately on expiry — delays can be used against you.
5. **Use RTI as a diagnostic tool**: Before filing a legal case, use RTI to obtain the government file and understand what has actually been recorded about your matter.

The RTI Act works best when used systematically and strategically. A well-drafted RTI application can often resolve a government grievance faster than formal litigation.`,
  },
  {
    slug: 'property-disputes-telangana',
    title: 'How to Handle Property Disputes in Telangana',
    excerpt: 'A practical guide to resolving property disputes in Telangana — common dispute types, relevant laws, revenue records, court remedies, and Hyderabad-specific context.',
    category: 'Property Law',
    date: '2025-10-01',
    readTime: '8 min',
    content: `Property disputes are among the most common and most consequential legal conflicts in Telangana. Whether you are dealing with a boundary encroachment, an ancestral property claim, or a title dispute in Hyderabad's rapidly developing real estate market, understanding your legal options is essential.

## Common Types of Property Disputes in Telangana

### Title Disputes

Title disputes arise when two or more parties claim ownership of the same property. These are especially common where:

- Old properties have been sold multiple times without proper documentation
- Forgery or impersonation has occurred in sale deeds
- Properties fall in Hyderabad's peripheral areas with unclear survey boundaries

### Boundary Disputes

Encroachments and boundary disputes are endemic in Hyderabad. Neighbouring properties, government land, and roads are common sources of boundary conflicts. Survey numbers and field measurement books (FMBs) are critical documents in these disputes.

### Ancestral and Joint Family Property

Under Hindu law, male coparceners in a Hindu Undivided Family (HUF) have a birthright in ancestral property. The Hindu Succession (Amendment) Act 2005 extended this right equally to daughters. Disputes often arise when one family member sells, mortgages, or develops joint family property without the others' consent.

### Benami Transactions

Properties registered in another person's name while the actual buyer funds the purchase are "benami." The Benami Transactions (Prohibition) Amendment Act 2016 provides for confiscation of benami properties.

## Relevant Laws

- **Transfer of Property Act 1882**: Governs sale, mortgage, lease, exchange, and gift of immovable property.
- **Registration Act 1908**: Mandates registration of sale deeds and certain other documents.
- **Limitation Act 1963**: Prescribes 12 years for suits to recover immovable property based on possession.
- **Telangana Land Revenue Act 1317 Fasli (as amended)**: Governs revenue records, mutations, and land administration in Telangana.
- **Hyderabad Municipal Corporation Act**: Governs property tax and building permissions within GHMC limits.
- **RERA Act 2016 + TSRERA**: Governs disputes with real estate developers in Telangana.

## Document Verification — What to Check

Before purchasing or disputing any property in Telangana, verify:

1. **Sale deed chain**: All previous sale deeds going back at least 30 years (30-year search).
2. **Encumbrance Certificate (EC)**: From the Sub-Registrar's office, confirming no mortgage or lien on the property.
3. **Pahani/Adangal**: The revenue record of rights showing the current owner, extent of land, and nature of possession.
4. **Pattadar Passbook**: Issued to the recorded owner of agricultural land in Telangana.
5. **Field Measurement Book (FMB)**: Survey map showing the exact boundaries and area of the land.
6. **Building Permission**: GHMC or Municipal approval for constructed properties.
7. **RERA registration**: For under-construction or newly developed properties.

## Revenue Records — Pahani and Mutation

In Telangana, **Dharani** (dharani.telangana.gov.in) is the integrated land record management portal for agricultural lands. When ownership changes, the mutation (name substitution) in revenue records must be completed.

Mutation does not create title — it is merely a revenue record. A person recorded in the pahani is not automatically the legal owner if the underlying sale deed is defective. However, long-term undisputed possession reflected in revenue records is strong evidence of title.

For urban properties within GHMC limits, property tax records and the GHMC's property registration are relevant alongside the Sub-Registrar's records.

## Court Remedies

### Civil Court Remedies

**Suit for Declaration and Permanent Injunction**: The most common remedy — you seek a declaration that you are the owner and an injunction preventing the other party from disturbing your possession.

**Suit for Specific Performance**: Where a seller refuses to execute the sale deed after receiving advance, you can compel performance in civil court.

**Suit for Partition**: Filed by a coparcener or co-owner to divide the property and receive their defined share.

**Suit for Possession**: Where you have been dispossessed, you can sue for recovery of possession. A suit based on title must be filed within 12 years; a suit based purely on previous possession must be filed within 3 years.

### Revenue Court Remedies

Revenue courts in Telangana (Mandal Revenue Officers, Revenue Divisional Officers, and the Revenue Appellate Tribunal) handle:

- Disputes over mutation entries in revenue records
- Disputes relating to survey boundaries
- Partition of agricultural land

Revenue court orders on mutations do not decide civil title disputes — those must go to civil courts. However, correcting revenue records through revenue courts is often a necessary first step.

### High Court Writs

Where a government authority is acting illegally in relation to your property — for example, cancelling a registration or recording government land over your patta land without due process — a writ petition in the Telangana High Court may be the appropriate remedy.

## Hyderabad-Specific Considerations

Hyderabad's real estate market has specific challenges:

- **Nala lands and lake beds**: Properties in Hyderabad near Hussain Sagar, Mir Alam Tank, or any minor irrigation tank may fall within lake bed / buffer zone restrictions. The HMDA/GHMC has been demolishing unauthorised constructions on such lands.
- **Government lands**: Extensive government-owned land (Waqf lands, Endowment properties, Revenue lands) abuts private property in many parts of the city. Verify your property's classification before purchasing.
- **Old city properties**: Properties in areas like Charminar, Secunderabad, and parts of Banjara Hills may have complex historical title chains involving pre-independence grants.

If you are involved in a property dispute in Telangana, the first step is to obtain and verify all relevant revenue and registration records before taking any legal action.`,
  },
  {
    slug: 'arbitration-india-guide',
    title: 'Arbitration in India — When and How to Use It',
    excerpt: 'A practical overview of arbitration under Indian law — when it applies, how the process works, key statutory provisions, and why businesses increasingly prefer it over court litigation.',
    category: 'Corporate Law',
    date: '2025-09-15',
    readTime: '7 min',
    content: `Arbitration is the preferred dispute resolution mechanism for commercial agreements in India. As courts remain clogged, arbitration offers privacy, speed (in theory), and expert adjudication. But arbitration has its own rules, limitations, and strategic considerations that every business must understand.

## What is Arbitration?

Arbitration is a private, consensual, and binding process in which the parties to a dispute agree to have their dispute decided by one or more arbitrators rather than a court. The governing law in India is the **Arbitration and Conciliation Act 1996**, substantially amended in 2015, 2019, and 2021 to make the process more efficient.

## When Does Arbitration Apply?

Arbitration applies only when the parties have agreed to it — through an **arbitration clause** in their contract or a separate **submission agreement** after a dispute arises.

A valid arbitration clause must:
- Be in writing (broadly interpreted to include electronic communications)
- Reflect an intention to refer disputes to arbitration
- Identify the mechanism for constituting the arbitral tribunal

Standard arbitration clauses specify the number of arbitrators (typically one or three), the seat of arbitration (legal situs — important for procedural law), the venue (physical location of hearings), the language, and any institutional rules to be applied.

## Institutional vs. Ad Hoc Arbitration

### Institutional Arbitration

The arbitration is administered by an institution (such as the Indian Council of Arbitration, the Delhi International Arbitration Centre, FICCI Arbitration Centre, or international bodies like the ICC, SIAC, or LCIA). The institution:

- Manages appointment of arbitrators
- Provides procedural rules
- Administers timelines and fees
- Provides infrastructure for hearings

### Ad Hoc Arbitration

The parties manage the arbitration themselves without institutional administration. While potentially cheaper for smaller disputes, ad hoc arbitration is more prone to procedural disputes and delays.

## Appointing Arbitrators

Under Section 11 of the Act, parties are free to agree on the procedure for appointing arbitrators. In the absence of agreement:

- For a sole arbitrator: the Chief Justice of the High Court (or designate) makes the appointment on party application
- For a three-member tribunal: each party appoints one arbitrator; the two party-appointed arbitrators appoint the presiding arbitrator

The 2019 amendments enabled arbitral institutions to make appointments, reducing court intervention.

## The Arbitration Process

1. **Notice of Arbitration**: The claimant sends a formal notice invoking the arbitration clause and specifying the claim.
2. **Tribunal constitution**: Arbitrators are appointed per the agreed procedure.
3. **Preliminary hearings**: The tribunal frames the terms of reference, timetable, and procedural orders.
4. **Statement of Claim and Defence**: Parties file their detailed pleadings and documentary evidence.
5. **Evidence**: Document disclosure and witness statements; hearings for cross-examination.
6. **Final arguments**: Written and/or oral.
7. **Award**: The tribunal issues a reasoned award, typically within the statutory timeline.

Under the 2021 amendments, arbitral proceedings must be completed within **12 months** of the tribunal's constitution (extendable by 6 months by party consent, and further by court order).

## Interim Measures — Section 9

A party can approach the court under Section 9 **before, during, or after** arbitral proceedings (but before enforcement) to seek:

- Preservation of assets
- Appointment of a receiver
- Injunctions restraining dissipation of funds
- Preservation of evidence

Section 9 provides a critical safety net when urgent relief is needed before the tribunal is constituted.

## Challenging an Arbitral Award — Section 34

An arbitral award can be challenged in the High Court within **3 months** (extendable by 30 days for sufficient cause) on limited grounds:

- Incapacity of a party or invalidity of the arbitration agreement
- Lack of proper notice to a party
- Award beyond the scope of the arbitration agreement
- Improper composition of the tribunal
- Award contrary to public policy of India (a ground that has been narrowly interpreted post-2015)

Section 34 is not an appeal on the merits — courts will not re-examine factual findings.

## Enforcement

An award that is not challenged (or has survived challenge) is enforced as if it were a court decree under Section 36. This means all execution mechanisms under the CPC apply: attachment of property, bank accounts, and assets.

## International Commercial Arbitration

Where at least one party is foreign (or the dispute has an international commercial character), the arbitration may be governed by Part II of the Act (if seated abroad) with enforcement in India under the New York Convention (to which India is a party). India has recognised awards from over 45 countries under the New York Convention framework.

## Why Businesses Prefer Arbitration

1. **Privacy**: Arbitral proceedings and awards are confidential — no public record of your dispute.
2. **Expert adjudicators**: Parties can appoint arbitrators with domain expertise in construction, finance, or technology — something courts cannot offer.
3. **Cross-border enforceability**: An arbitral award from India is enforceable in 170+ countries under the New York Convention; a court decree is not.
4. **Finality**: Limited grounds of challenge mean the dispute is truly resolved (though this cuts both ways if you are the losing party).
5. **Flexibility**: Parties design the procedure to fit the dispute, rather than following a rigid court schedule.

Well-drafted arbitration clauses are as important as the contract itself. Getting the seat, institution, number of arbitrators, and governing law right can determine whether your arbitration is efficient or a procedural nightmare.`,
  },
  {
    slug: 'writ-petitions-high-court-guide',
    title: 'Writ Petitions — When and How to Approach the High Court',
    excerpt: 'A practical guide to writ petitions under Article 226 — the five writs, when to use them, the filing process at the Telangana High Court, and how PIL works.',
    category: 'Constitutional Law',
    date: '2025-08-20',
    readTime: '8 min',
    content: `The writ jurisdiction of the High Court is one of the most powerful constitutional remedies available to citizens. When a government authority acts illegally, exceeds its power, or violates your fundamental rights, a writ petition is often the most direct and fastest route to relief.

## The Five Types of Writs

### 1. Habeas Corpus ("You shall have the body")

Habeas corpus is issued to release a person who is unlawfully detained or imprisoned. The court directs the authority holding the person to produce them before the court and justify the detention.

**When to use**: Illegal police detention, detention beyond permitted periods without magistrate's order, detention under preventive detention laws without following due process.

### 2. Mandamus ("We command")

Mandamus is issued to a public authority commanding it to perform a public duty which it has refused or failed to perform.

**When to use**: A government officer refuses to process your application, issue a certificate, or take an action they are legally required to take. It cannot be issued against private individuals.

### 3. Certiorari ("To be certified")

Certiorari is issued to quash the decision of a lower court, tribunal, or public authority that has acted without jurisdiction, exceeded its jurisdiction, or committed an error apparent on the face of the record.

**When to use**: An inferior court or tribunal has passed an order it had no authority to pass, or has made an obvious legal error in its order.

### 4. Prohibition

Prohibition is issued to prevent a lower court or tribunal from exceeding its jurisdiction or usurping jurisdiction it does not have. Unlike certiorari (which is used after the decision), prohibition is preventive — issued while proceedings are ongoing.

**When to use**: When a tribunal begins hearing a matter it clearly has no jurisdiction over.

### 5. Quo Warranto ("By what authority")

Quo warranto is issued to a person who holds a public office asking them to show by what authority they hold that office. If they cannot establish the lawful authority, the court can remove them from office.

**When to use**: A person holding a public office without having the prescribed qualifications, or continuing in office despite disqualification.

## Article 226 vs. Article 32

Both the High Court (Article 226) and the Supreme Court (Article 32) have writ jurisdiction. Key differences:

- **Article 226 (High Court)** is broader — it covers not just fundamental rights violations but also legal rights, allowing writs against both state and private bodies in certain circumstances.
- **Article 32 (Supreme Court)** is available only for enforcement of fundamental rights.
- As a practical matter, High Court writs are faster and less expensive. Approach the Supreme Court under Article 32 only when the matter requires national resolution or when High Court remedy is inadequate.

## When to File a Writ Petition

**File a writ when**:

- A state authority or public body has violated your rights or acted illegally
- There is no equally efficacious alternative remedy, or waiting for alternative remedy would cause irreparable harm
- A statutory tribunal is acting without jurisdiction
- You are detained without legal authority
- A government officer is refusing to perform a statutory duty

**Do not file a writ when**:

- The dispute is purely private (contract disputes, property disputes between private parties)
- Facts are seriously disputed — writ courts do not conduct elaborate fact-finding; disputed facts must go to trial courts
- You have not exhausted alternative statutory remedies (unless those remedies are inadequate)

The doctrine of exhaustion of alternative remedies is flexible — courts regularly entertain writs despite available alternatives where constitutional violations are alleged.

## Who Can File and Against Whom

Any person aggrieved can file a writ petition. The petition is typically filed against a "state" as defined in Article 12 — the Government of India, state governments, local authorities, statutory bodies, and instrumentalities of the state. Some bodies receiving substantial government funding may also qualify.

## The Filing Process at Telangana High Court

Writ petitions at the Telangana High Court are filed at the filing counter, High Court Buildings, Nampally, Hyderabad. The petition must include:

1. **Writ Petition**: Setting out the facts, the legal grounds, and the relief sought.
2. **Affidavit**: Verifying the facts in the petition.
3. **Annexures**: All relevant documents and orders being challenged.
4. **Vakalatnama**: Authority given to your advocate.

Court fee for a writ petition is a fixed amount (check the current schedule). After filing, the petition is registered and assigned to a bench. Ordinarily, the petition is listed for admission hearing where the court decides whether to issue notice to the respondent.

## Urgent Listing and Mentioning

If the matter is urgent — particularly in habeas corpus cases or matters involving imminent harm — you can **mention** the matter before the presiding judge of the bench at the start of the court day for urgent listing. This allows the matter to be heard on the same day or the next day without waiting for the regular list.

## Interim Orders in Writ Proceedings

Once admitted, you can seek interim relief — a stay of the impugned order or an interim direction to the respondent. Courts routinely grant interim stays in writ matters where a prima facie case is shown and irreparable harm is apprehended.

## Public Interest Litigation (PIL)

PIL is a special form of writ petition where the petitioner files not for their own grievance but on behalf of the public or a class of persons who cannot approach the court themselves. PIL expanded dramatically after the 1980s through cases like Bandhua Mukti Morcha (bonded labour) and M.C. Mehta (environmental protection).

Key features of PIL:
- Any public-spirited citizen can file (locus standi is relaxed)
- Courts may treat a letter addressed to the Chief Justice as a PIL
- Courts appoint amicus curiae and commissioners to investigate facts
- Courts can issue continuing mandamus to monitor compliance

PILs involving matters of local importance — infrastructure, municipal services, pollution — are routinely filed in the Telangana High Court.

## Practical Tips for Writ Petitioners

1. **Act promptly**: High Courts can refuse writs on grounds of delay and laches. File as soon as possible after the cause of action arises.
2. **Attach the impugned order**: Always attach the specific order, notice, or action being challenged.
3. **Be accurate in your affidavit**: Courts take affidavit accuracy seriously. Any misstatement can lead to dismissal of the petition and costs.
4. **Serve respondents properly**: After admission, ensure proper service of notice on all respondents. Cases can be delayed for want of proper service.

Writ petitions, when used correctly, are among the fastest and most effective constitutional remedies. They can convert a matter that might take years in civil courts into a resolution within months.`,
  },
  {
    slug: 'negotiable-instruments-guide',
    title: 'Negotiable Instruments Beyond Section 138 — Promissory Notes, Bills of Exchange, and Cheques',
    excerpt: 'A comprehensive guide to the Negotiable Instruments Act 1881 — understanding promissory notes, bills of exchange, cheques, dishonour, and holder in due course protections.',
    category: 'Commercial Law',
    date: '2025-07-10',
    readTime: '7 min',
    content: `Most business people in India know about Section 138 — the criminal remedy for cheque dishonour. But the Negotiable Instruments Act 1881 is a much richer statute that governs three fundamental commercial instruments underpinning trade and credit. Understanding all three helps businesses manage risk, enforce payment obligations, and protect themselves from fraudulent instruments.

## What are Negotiable Instruments?

A negotiable instrument is a document that:

1. Embodies a right to payment of money
2. Is transferable by delivery (or delivery and endorsement)
3. Gives a holder in due course a better title than the transferor

The three negotiable instruments under the NI Act are promissory notes, bills of exchange, and cheques.

## Promissory Notes

### Definition

A promissory note is an instrument in writing (not a bank note or currency note) containing an **unconditional undertaking** by the maker to pay a certain sum of money to, or to the order of, a certain person, or to the bearer.

### Essential Elements

For a document to be a valid promissory note:
- It must be in writing
- It must contain an unconditional promise to pay (not conditional on an event)
- The sum must be certain and fixed
- The payee must be a certain person or bearer
- It must be signed by the maker
- It must be stamped under the Indian Stamp Act 1899 (unstamped promissory notes cannot be enforced in court)

### Enforcement

A promissory note is enforced through a civil suit for recovery. The holder can sue the maker (and any endorsers) on the note. The limitation period is 3 years from the date of the note (or from the date it becomes payable if payable at a future date).

Promissory notes are especially common in **informal lending**, **inter-company loans**, and **trade credit** arrangements. Businesses should insist on stamped promissory notes for any significant credit extended.

## Bills of Exchange

### Definition

A bill of exchange is an instrument in writing containing an **unconditional order** directing a certain person (the drawee) to pay a certain sum to, or to the order of, a certain person, or to the bearer.

### Parties to a Bill of Exchange

- **Drawer**: The person who draws (creates) the bill — typically the creditor or seller
- **Drawee**: The person ordered to pay — typically the debtor or buyer
- **Payee**: The person to whom payment is to be made (may be the same as the drawer)

### Types of Bills

- **Demand bill**: Payable immediately on presentation
- **Time bill (Usance bill)**: Payable after a specified period ("pay 90 days after sight")

### Acceptance

A bill is presented to the drawee for **acceptance**. Once the drawee accepts (by signing across the face of the bill), they become the **acceptor** and are primarily liable to pay on the due date. Bills of exchange are particularly common in **export trade**, **documentary credit**, and **supply chain finance**.

## Cheques

A cheque is a bill of exchange drawn on a specified banker and not expressed to be payable otherwise than on demand. Key types:

### Bearer Cheque

Payable to the bearer — whoever presents it gets paid. Most risky: if lost or stolen, anyone can encash it.

### Order Cheque

Payable to a specific named person or their order. The named payee must endorse the cheque to transfer it.

### Crossed Cheque

Two parallel lines on the face of the cheque. A generally crossed cheque can only be deposited into a bank account, not encashed at the counter. An "Account Payee Only" crossing restricts payment to the named payee's bank account only.

### Post-Dated Cheque (PDC)

Dated in the future. Banks will not honour a PDC before its date. PDCs are commonly used in EMI arrangements and rent payments. Section 138 applies to PDCs when dishonoured.

## Electronic Fund Transfers

NEFT, RTGS, IMPS, and UPI transfers are not negotiable instruments under the NI Act. They are governed by the Payment and Settlement Systems Act 2007 and RBI regulations. Disputes over EFTs must be addressed through bank grievance mechanisms, the Banking Ombudsman, or civil courts — Section 138 does not apply to failed EFTs.

## Dishonour Beyond Section 138

Section 138 of the NI Act creates a criminal offence when a cheque is dishonoured for insufficiency of funds. But the NI Act also provides civil remedies for dishonour of all three instruments:

- **Notice of dishonour**: On dishonour, the holder must give notice to all prior parties (drawer, endorsers) within a reasonable time. Failure to give notice discharges prior parties from liability.
- **Noting and Protest**: Bills of exchange (especially in international trade) can be "noted" by a Notary Public and a formal protest issued, which constitutes prima facie evidence of dishonour.
- **Civil suit on the instrument**: The holder can sue all prior parties jointly or severally for the amount of the instrument.

## Holder in Due Course

A **holder in due course** is a person who takes a negotiable instrument:

1. For value
2. In good faith
3. Without notice of any defect in the title of the transferor
4. Before the instrument became overdue

A holder in due course obtains a **clean title** — free from most defences that prior parties could raise (fraud, failure of consideration, etc.). This is the central commercial protection of negotiable instruments: a bona fide purchaser of the instrument is insulated from upstream disputes between prior parties.

## Practical Advice for Businesses

1. **Always use crossed "Account Payee Only" cheques** for significant payments — eliminates bearer risk.
2. **Stamp promissory notes correctly** — an unstamped note cannot be produced in evidence.
3. **Track post-dated cheque dates carefully** — a dishonoured PDC triggers the 30-day notice requirement under Section 138 from the date of dishonour, not the date of the cheque.
4. **Give notice of dishonour promptly** — failure to notify discharges endorsers.
5. **Maintain a record of all instruments**: The NI Act imposes strict limitation periods and notice requirements. Diarise all key dates.

Understanding negotiable instruments goes beyond knowing what to do when a cheque bounces. Used correctly, these instruments are efficient tools for credit management, trade finance, and commercial relationships.`,
  },
] as const;

export function getArticleBySlug(slug: string): Article | undefined {
  return ARTICLES.find((a) => a.slug === slug);
}

export const ARTICLE_CATEGORIES = [...new Set(ARTICLES.map((a) => a.category))] as const;
