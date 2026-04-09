export const LLB_SUBJECTS = [
  {
    title: "Law of Contracts",
    semester: "Sem 1",
    description:
      "The Indian Contract Act, 1872 governs the formation, performance, and breach of contracts and remains one of the most commercially significant statutes in India. The subject covers essentials of a valid contract, capacity, free consent, consideration, void and voidable agreements, quasi-contracts, and remedies for breach. Understanding contract law is foundational to corporate transactions, consumer protection, and commercial dispute resolution.",
    landmarks: [
      {
        name: "Mohori Bibee v Dharmodas Ghose",
        citation: "(1903) 30 IA 114",
        principle:
          "Held that a contract entered into by a minor is void ab initio and not merely voidable, establishing that no restitution can be ordered against a minor even if the consideration was obtained by fraud.",
      },
      {
        name: "Lalman Shukla v Gauri Dutt",
        citation: "(1913) 11 ALJ 489",
        principle:
          "Ruled that an offer of reward must be communicated to the offeree before performance; Lalman, unaware of the reward for finding the missing boy, could not claim it as he lacked knowledge of the offer.",
      },
      {
        name: "Carlill v Carbolic Smoke Ball Company",
        citation: "[1893] 1 QB 256",
        principle:
          "Established that a general offer to the world at large can be accepted by conduct, and advertisement of a reward constitutes a binding offer that ripens into a contract upon performance.",
      },
      {
        name: "Hadley v Baxendale",
        citation: "(1854) 9 Exch 341",
        principle:
          "Established the foundational rule for remoteness of damages in contract — recoverable damages are limited to those that were in the reasonable contemplation of the parties at the time of contracting.",
      },
    ] as const,
    topics: [
      "Offer, acceptance, and communication",
      "Consideration and privity of contract",
      "Capacity and minor's agreements",
      "Free consent — coercion, undue influence, fraud, misrepresentation, mistake",
      "Void and voidable agreements under Sections 23–30",
      "Performance and breach of contract",
      "Remedies — damages, specific performance, injunction, quantum meruit",
      "Quasi-contracts and restitutionary obligations",
    ] as const,
    scope:
      "Contract law permeates every area of legal practice — employment contracts, sale agreements, insurance policies, licensing arrangements, and technology agreements are all governed by contract principles. Corporate lawyers draft and negotiate complex multi-party agreements, while litigators enforce and resist contractual claims. The rise of e-contracts, smart contracts, and consumer contracts in the digital economy has expanded the practical scope of this subject significantly in recent years.",
  },
  {
    title: "Law of Torts",
    semester: "Sem 1",
    description:
      "Tort law is the law of civil wrongs — it provides remedies to individuals whose legal rights have been infringed by the acts or omissions of others. Unlike criminal law, tort law is primarily compensatory, aiming to restore the injured party to their pre-tort position. India has no codified tort statute, making case law the primary source, and the subject draws heavily on English common law and evolving Indian jurisprudence.",
    landmarks: [
      {
        name: "MC Mehta v Union of India",
        citation: "AIR 1987 SC 1086",
        principle:
          "Evolved the doctrine of absolute liability, holding that enterprises engaged in hazardous activities are absolutely liable for harm caused without any exceptions, departing from the English rule of strict liability in Rylands v Fletcher.",
      },
      {
        name: "Donoghue v Stevenson",
        citation: "[1932] AC 562",
        principle:
          "Established the modern law of negligence by articulating the neighbour principle — one must take reasonable care to avoid acts or omissions that one can reasonably foresee would injure one's neighbour.",
      },
      {
        name: "Rylands v Fletcher",
        citation: "(1868) LR 3 HL 330",
        principle:
          "Established the rule of strict liability — a person who brings onto their land something likely to do mischief if it escapes is prima facie liable for all damage that naturally flows from the escape.",
      },
      {
        name: "Bhim Singh v State of Jammu & Kashmir",
        citation: "AIR 1986 SC 494",
        principle:
          "Recognised the tort of wrongful arrest and detention by the state and awarded exemplary damages, holding that the Supreme Court can award compensation in writ proceedings under Article 32.",
      },
    ] as const,
    topics: [
      "General principles — damnum sine injuria, injuria sine damnum",
      "Negligence — duty, breach, causation, and remoteness",
      "Nuisance — public and private nuisance",
      "Strict and absolute liability",
      "Defamation — libel and slander",
      "Trespass to person, land, and goods",
      "Vicarious liability and liability of the state",
      "Defences — volenti non fit injuria, contributory negligence, act of God",
    ] as const,
    scope:
      "Tort law is the primary vehicle for compensating victims of accidents, medical negligence, defamation, environmental harm, and consumer product liability. With the rise of the Motor Vehicles Act and the Consumer Protection Act, tortious claims have been statutorily codified, but the common-law framework remains essential for novel cases. Environmental lawyers, personal injury litigators, and media lawyers rely heavily on tort principles, and the doctrine of absolute liability has particular relevance for industrial accident litigation.",
  },
  {
    title: "Criminal Law — BNS/IPC",
    semester: "Sem 2",
    description:
      "Criminal Law defines offences against the state and society and prescribes punishments for them. The Bharatiya Nyaya Sanhita, 2023 (BNS) has replaced the Indian Penal Code, 1860, modernising the nomenclature and introducing new offences while retaining the core framework. The course covers the general principles of criminal liability — actus reus, mens rea, and defences — as well as specific offences against persons, property, and the state.",
    landmarks: [
      {
        name: "K.M. Nanavati v State of Maharashtra",
        citation: "AIR 1962 SC 605",
        principle:
          "Examined the law of culpable homicide and murder under Sections 299 and 300 IPC; the last jury trial in India, it clarified the distinction between sudden provocation and premeditated killing.",
      },
      {
        name: "Bachan Singh v State of Punjab",
        citation: "(1980) 2 SCC 684",
        principle:
          "Upheld the constitutional validity of the death penalty and established the 'rarest of rare cases' doctrine as the guiding principle for imposing capital punishment.",
      },
      {
        name: "State of Maharashtra v MH George",
        citation: "AIR 1965 SC 722",
        principle:
          "Ruled that knowledge of a prohibition is not essential to constitute an offence of strict liability, distinguishing between mens rea requirements in regulatory and traditional criminal offences.",
      },
      {
        name: "Alister Anthony Pareira v State of Maharashtra",
        citation: "(2012) 2 SCC 648",
        principle:
          "Clarified the distinction between rash and negligent acts under culpable homicide and the threshold for imposing imprisonment versus fines in motor accident fatalities.",
      },
    ] as const,
    topics: [
      "General exceptions and defences (private defence, insanity, intoxication)",
      "Offences against the human body — murder, culpable homicide, grievous hurt",
      "Offences against property — theft, robbery, extortion, cheating",
      "Offences against the state and public tranquility",
      "Sexual offences and crimes against women under BNS",
      "Abetment, criminal conspiracy, and attempt",
      "Sentencing policy and the death penalty framework",
      "New offences introduced by BNS 2023",
    ] as const,
    scope:
      "Criminal law is the primary domain of criminal courts from the Sessions Court to the Supreme Court. Practitioners handle bail applications, trials, appeals, and revision petitions, making procedural fluency under the BNSS equally important. The BNS has introduced organised crime, terrorism provisions, and expanded sexual offences, creating new areas of specialisation for criminal lawyers. Defence lawyers, public prosecutors, and legal aid advocates all rely heavily on a thorough command of substantive criminal law.",
  },
  {
    title: "Criminal Procedure — BNSS/CrPC",
    semester: "Sem 3",
    description:
      "Criminal Procedure governs the machinery through which criminal law is administered — from the registration of an FIR to investigation, trial, sentencing, and appeal. The Bharatiya Nagarik Suraksha Sanhita, 2023 (BNSS) replaces the Code of Criminal Procedure, 1973, introducing timelines for trials, video-conference hearings, and witness protection provisions. The subject bridges substantive criminal law with practical courtroom procedure.",
    landmarks: [
      {
        name: "Arnesh Kumar v State of Bihar",
        citation: "(2014) 8 SCC 273",
        principle:
          "Laid down binding guidelines restricting arrest in offences punishable up to seven years, requiring magistrates to independently apply their mind before authorising detention and mandating compliance checklists for police officers.",
      },
      {
        name: "Lalita Kumari v Government of Uttar Pradesh",
        citation: "(2014) 2 SCC 1",
        principle:
          "Held that registration of an FIR is mandatory under Section 154 CrPC upon receipt of information disclosing a cognisable offence, and a preliminary inquiry is not permissible before registration.",
      },
      {
        name: "Joginder Kumar v State of Uttar Pradesh",
        citation: "(1994) 4 SCC 260",
        principle:
          "Established that arrest should not be made as a matter of course, and the arrested person has the right to have a friend, relative, or nominee informed of the arrest.",
      },
      {
        name: "D.K. Basu v State of West Bengal",
        citation: "AIR 1997 SC 610",
        principle:
          "Issued comprehensive guidelines on arrest and detention to prevent custodial violence and torture, now codified in BNSS, including the right to be produced before a magistrate within 24 hours.",
      },
    ] as const,
    topics: [
      "FIR, cognisable and non-cognisable offences",
      "Powers of arrest with and without warrant",
      "Investigation, charge sheet, and bail provisions",
      "Cognisance, framing of charge, and trial procedures",
      "Summary trials and magisterial powers",
      "Appeals, revisions, and reference under BNSS",
      "Plea bargaining and compounding of offences",
      "Witness protection and victim compensation schemes",
    ] as const,
    scope:
      "Criminal procedure is the operational spine of criminal justice practice. Every criminal lawyer must master the stages of a criminal case — from FIR to final appeal — to advise clients effectively on strategy, bail, and timelines. The BNSS introduces mandatory timelines and technology-based hearings, making this knowledge essential for modern criminal practice. Judicial officers, magistrates, and police officers are equally governed by procedural rules that attorneys can use to check executive overreach.",
  },
  {
    title: "Constitutional Law I & II",
    semester: "Sem 3-4",
    description:
      "Constitutional Law forms the bedrock of the Indian legal system, covering the structure of government, fundamental rights, directive principles, and the amendment procedure. It examines the relationship between the three organs of state — legislature, executive, and judiciary — and the limits each places on the other. The course traces the evolution of Indian constitutionalism through landmark Supreme Court decisions that have reshaped the constitutional landscape.",
    landmarks: [
      {
        name: "Kesavananda Bharati v State of Kerala",
        citation: "(1973) 4 SCC 225",
        principle:
          "Established the Basic Structure doctrine, holding that Parliament cannot amend the Constitution in a manner that destroys its basic or essential features.",
      },
      {
        name: "Maneka Gandhi v Union of India",
        citation: "AIR 1978 SC 597",
        principle:
          "Expanded the scope of Article 21 by reading it with Articles 14 and 19, requiring that any procedure depriving personal liberty must be fair, just, and reasonable.",
      },
      {
        name: "Minerva Mills Ltd v Union of India",
        citation: "(1980) 3 SCC 625",
        principle:
          "Reaffirmed the Basic Structure doctrine and struck down clauses of the 42nd Amendment that had given Parliament unlimited power to amend Fundamental Rights.",
      },
      {
        name: "Golaknath v State of Punjab",
        citation: "AIR 1967 SC 1643",
        principle:
          "Held that Fundamental Rights are beyond the amending power of Parliament under Article 368, a position later overruled but which triggered the Basic Structure doctrine debate.",
      },
    ] as const,
    topics: [
      "Preamble and its justiciability",
      "Fundamental Rights (Articles 12–35)",
      "Directive Principles of State Policy",
      "Amendment procedure under Article 368",
      "Basic Structure doctrine",
      "Separation of powers and checks and balances",
      "Judicial review and writ jurisdiction",
      "Emergency provisions (Articles 352, 356, 360)",
    ] as const,
    scope:
      "Constitutional Law is indispensable for every branch of legal practice — litigators invoke fundamental rights in High Courts and the Supreme Court, while corporate lawyers navigate regulatory frameworks built on constitutional powers. Public-interest litigation (PIL) has transformed this subject into a tool for social change, making constitutional advocacy one of the most prestigious areas of Indian legal practice. Understanding constitutional principles is also critical for competitive examinations such as the civil services and judicial services.",
  },
  {
    title: "Law of Evidence — BSA",
    semester: "Sem 4",
    description:
      "The Law of Evidence determines what facts may be proved in a court of law, how they may be proved, and by whom. The Bharatiya Sakshya Adhiniyam, 2023 (BSA) replaces the Indian Evidence Act, 1872, updating provisions on electronic evidence and digital records while preserving the foundational rules of relevancy, admissibility, and burden of proof. The subject is critical for effective trial advocacy.",
    landmarks: [
      {
        name: "Anvar PV v PK Basheer",
        citation: "(2014) 10 SCC 473",
        principle:
          "Held that electronic records are admissible only when accompanied by a certificate under Section 65B of the Evidence Act (now Section 63 BSA), establishing strict procedural requirements for digital evidence.",
      },
      {
        name: "State of Himachal Pradesh v Jai Lal",
        citation: "AIR 1999 SC 3318",
        principle:
          "Explained the principles governing expert testimony under Section 45 of the Evidence Act, holding that expert opinion is only advisory and must be tested against other evidence on record.",
      },
      {
        name: "Tomaso Bruno v State of Uttar Pradesh",
        citation: "(2015) 7 SCC 178",
        principle:
          "Clarified the 'last seen theory' as a piece of circumstantial evidence, holding that mere proximity of the accused to the deceased is insufficient for conviction without corroboration or an explanation.",
      },
      {
        name: "Sharda v Dharmpal",
        citation: "(2003) 4 SCC 493",
        principle:
          "Held that a court in matrimonial proceedings can direct a party to undergo medical examination, and refusal to comply can be used as adverse evidence under the principle of best evidence.",
      },
    ] as const,
    topics: [
      "Relevancy of facts — Sections 6–55 and BSA equivalents",
      "Admissions and confessions — evidentiary value",
      "Electronic records and digital evidence under BSA",
      "Examination of witnesses — examination-in-chief, cross, re-examination",
      "Burden of proof and presumptions",
      "Dying declarations and res gestae",
      "Expert evidence and opinion testimony",
      "Privilege, exclusions, and judicial notice",
    ] as const,
    scope:
      "Evidence law is the battleground of the courtroom — a lawyer's ability to admit favourable evidence and exclude harmful evidence often determines the outcome of a case. With the BSA's modernised provisions on electronic records, social media content, and forensic evidence, competency in digital evidence is now indispensable. The subject intersects with criminal trials, civil suits, family court proceedings, and arbitration, giving it comprehensive practical relevance across every forum.",
  },
  {
    title: "Civil Procedure Code",
    semester: "Sem 5",
    description:
      "The Code of Civil Procedure, 1908 (CPC) governs the procedure for adjudication of civil disputes in courts. It covers jurisdiction, institution of suits, pleadings, discovery, interim reliefs, execution of decrees, and appeals. The CPC strikes a balance between procedural rigidity and the court's inherent power to do justice, making it a dynamic subject that rewards careful study.",
    landmarks: [
      {
        name: "Salem Advocate Bar Association v Union of India",
        citation: "(2005) 6 SCC 344",
        principle:
          "Upheld the constitutional validity of CPC amendments introducing case management, time-bound hearings, and restrictions on adjournments, holding that they advance access to justice.",
      },
      {
        name: "Sangram Singh v Election Tribunal",
        citation: "AIR 1955 SC 425",
        principle:
          "Articulated that procedural law must be the handmaiden of justice and not its mistress, and courts should not allow technical objections to defeat substantive rights.",
      },
      {
        name: "Kiran Singh v Chaman Paswan",
        citation: "AIR 1954 SC 340",
        principle:
          "Held that a decree passed by a court without inherent jurisdiction is a nullity and can be challenged at any stage, even in execution proceedings.",
      },
      {
        name: "Daryao v State of Uttar Pradesh",
        citation: "AIR 1961 SC 1457",
        principle:
          "Applied the doctrine of res judicata to writ petitions, holding that a final decision of a High Court dismissing a writ bars a subsequent writ petition on the same facts under Article 32.",
      },
    ] as const,
    topics: [
      "Jurisdiction — territorial, pecuniary, and subject-matter",
      "Pleadings — plaint, written statement, and amendment",
      "Temporary injunctions, attachment before judgment, and interim reliefs",
      "Discovery, inspection, and production of documents",
      "Decree, judgment, and execution proceedings",
      "Appeals, revision, and review under CPC",
      "Res judicata and constructive res judicata",
      "Order I (joinder of parties) through Order XLIX",
    ] as const,
    scope:
      "Civil procedure is the framework within which all civil litigation unfolds — property disputes, contractual claims, matrimonial suits, and succession matters all proceed under CPC norms. Mastery of pleadings and interim injunctions is essential for litigation lawyers, while understanding execution proceedings is critical for debt recovery and enforcement work. The CPC's interaction with specialist codes such as the Specific Relief Act, Limitation Act, and Commercial Courts Act makes it a foundational subject for civil practice.",
  },
  {
    title: "Family Law — Hindu Law",
    semester: "Sem 5",
    description:
      "Hindu Personal Law governs marriage, divorce, maintenance, adoption, guardianship, and succession for Hindus. The subject is rooted in ancient Dharmashastra texts but is today primarily regulated by four codifying Acts: the Hindu Marriage Act, 1955, the Hindu Succession Act, 1956, the Hindu Minority and Guardianship Act, 1956, and the Hindu Adoptions and Maintenance Act, 1956. Constitutional challenges to these statutes have produced landmark judgments reshaping gender equality within the Hindu family.",
    landmarks: [
      {
        name: "Sarla Mudgal v Union of India",
        citation: "(1995) 3 SCC 635",
        principle:
          "Held that conversion to Islam by a Hindu husband to contract a second marriage without dissolving the first is an offence of bigamy under Section 494 IPC, as the first marriage subsists under Hindu law.",
      },
      {
        name: "Shamim Ara v State of Uttar Pradesh",
        citation: "(2002) 7 SCC 518",
        principle:
          "Although primarily a Muslim law case, it clarified the court's role in examining the validity of divorce and reinforced that maintenance rights of women must be protected against arbitrary dissolution of marriage.",
      },
      {
        name: "Danamma @ Suman Surpur v Amar",
        citation: "(2018) 3 SCC 343",
        principle:
          "Held that daughters who were alive on the date of the amendment in 2005 to the Hindu Succession Act are entitled to coparcenary rights, even if their father had died before the amendment.",
      },
      {
        name: "Vineeta Sharma v Rakesh Sharma",
        citation: "(2020) 9 SCC 1",
        principle:
          "Constitution Bench settled the law on daughters' coparcenary rights, confirming that a daughter has equal rights in the Hindu Undivided Family property by birth, regardless of whether the father was alive on 9 September 2005.",
      },
    ] as const,
    topics: [
      "Sources and schools of Hindu law — Mitakshara and Dayabhaga",
      "Marriage under the Hindu Marriage Act — conditions, ceremonies, and void and voidable marriages",
      "Grounds for divorce and judicial separation",
      "Maintenance — interim and permanent maintenance",
      "Hindu Undivided Family and coparcenary rights",
      "Daughters' rights under the amended Hindu Succession Act, 2005",
      "Adoption under the Hindu Adoptions and Maintenance Act",
      "Guardianship and custody of minor children",
    ] as const,
    scope:
      "Hindu personal law governs the lives of the majority of India's population in matters of marriage, inheritance, and family structure. Family court practitioners deal daily with matrimonial disputes, maintenance claims, and succession conflicts. The landmark constitutional amendments to the Hindu Succession Act and Supreme Court jurisprudence on daughters' coparcenary rights have generated extensive fresh litigation. Family lawyers also navigate the intersection of personal law with child custody, domestic violence remedies, and inheritance planning.",
  },
  {
    title: "Family Law — Muslim Law",
    semester: "Sem 5",
    description:
      "Muslim Personal Law in India is an uncodified system primarily derived from Quranic injunctions, Hadith, and classical jurisprudence (fiqh), operating through four main schools — Hanafi, Shafi'i, Maliki, and Hanbali — of which the Hanafi school predominates. The subject covers Muslim marriage (nikah), dower (mehr), divorce, maintenance, inheritance, and wakf, and has been the subject of significant Supreme Court intervention in recent decades.",
    landmarks: [
      {
        name: "Mohd Ahmed Khan v Shah Bano Begum",
        citation: "AIR 1985 SC 945",
        principle:
          "Held that a Muslim woman divorced by her husband is entitled to maintenance under Section 125 CrPC beyond the iddat period if she is unable to maintain herself, despite the provisions of Muslim personal law.",
      },
      {
        name: "Shayara Bano v Union of India",
        citation: "(2017) 9 SCC 1",
        principle:
          "By a 3:2 majority, declared instantaneous triple talaq (talaq-e-biddat) unconstitutional as manifestly arbitrary under Article 14, paving the way for the Muslim Women (Protection of Rights on Marriage) Act, 2019.",
      },
      {
        name: "Daniel Latifi v Union of India",
        citation: "(2001) 7 SCC 740",
        principle:
          "Upheld the constitutional validity of the Muslim Women (Protection of Rights on Divorce) Act, 1986, interpreting it to require that a divorced Muslim woman's entire future needs be provided for within the iddat period.",
      },
      {
        name: "Ahmedabad Women Action Group v Union of India",
        citation: "(1997) 3 SCC 573",
        principle:
          "Declined to strike down polygamy and unilateral divorce under Muslim personal law on the ground that reform of personal laws is a matter for the legislature and not the courts.",
      },
    ] as const,
    topics: [
      "Sources of Muslim law and the four schools of jurisprudence",
      "Nikah — essentials, conditions, and types of marriage",
      "Dower (Mehr) — classification and legal consequences",
      "Divorce — talaq, khula, mubarat, and judicial divorce (faskh)",
      "Maintenance (nafaqa) during marriage, iddat, and after divorce",
      "Inheritance under Sunni and Shia law — sharers and residuaries",
      "Muslim Wakf — creation, administration, and the Wakf (Amendment) Act",
      "Adoption and guardianship under Muslim law",
    ] as const,
    scope:
      "Muslim personal law has been among the most constitutionally contested areas of Indian family law, generating high-profile Supreme Court decisions and legislative interventions. Practitioners working in family courts regularly encounter issues of divorce, maintenance, and inheritance that require nuanced understanding of both classical fiqh and its statutory modifications. The triple talaq ban and Uniform Civil Code debates have brought Muslim personal law into sharp public focus, making this subject both academically and politically significant.",
  },
  {
    title: "Transfer of Property Act",
    semester: "Sem 6",
    description:
      "The Transfer of Property Act, 1882 (TPA) codifies the law relating to the transfer of immovable property between living persons. It covers sale, mortgage, lease, gift, exchange, and actionable claims, and introduces essential doctrines such as lis pendens, part performance, and tacking. The TPA operates alongside the Registration Act, 1908, and the Stamp Act to create a comprehensive framework for property transactions.",
    landmarks: [
      {
        name: "Suraj Lamp & Industries v State of Haryana",
        citation: "(2012) 1 SCC 656",
        principle:
          "Held that immovable property above a specified value cannot be transferred by a general power of attorney (GPA) or will; sales by GPA are not valid modes of transfer and convey no title to the buyer.",
      },
      {
        name: "Vidyadhar v Manikrao",
        citation: "(1999) 3 SCC 573",
        principle:
          "Articulated the essential requirements of a valid sale under the TPA — there must be transfer of ownership, the property must be defined, the price must be paid or promised, and the transfer must be by a registered instrument.",
      },
      {
        name: "K.J. Shivshankar Pillai v K.P. Mani",
        citation: "AIR 1994 SC 853",
        principle:
          "Applied the doctrine of part performance under Section 53-A TPA, holding that a transferee in possession on the strength of a written and signed agreement can defend possession even without a registered deed.",
      },
      {
        name: "Rajbir Kaur v Chokosiri & Co.",
        citation: "AIR 1988 SC 1845",
        principle:
          "Distinguished between a mortgage, a lease, and a licence in the context of Section 58 TPA, clarifying that an exclusive right to possession for a definite period in consideration of rent creates a lease and not a licence.",
      },
    ] as const,
    topics: [
      "General principles of transfer — essentials, restrictions, and conditions",
      "Sale of immovable property — rights and liabilities of buyer and seller",
      "Mortgage — types, rights of mortgagor and mortgagee, redemption",
      "Lease — essential conditions, rights, duties, and termination",
      "Gift — essentials, onerous gifts, and universal donee",
      "Doctrine of lis pendens (Section 52)",
      "Doctrine of part performance (Section 53A)",
      "Actionable claims and their assignment",
    ] as const,
    scope:
      "Property law is central to transactional legal practice — real estate lawyers, conveyancers, and banking lawyers work with TPA provisions daily. The Supreme Court's ruling on GPA sales has had a massive practical impact, requiring reliance on registered sale deeds for property transactions. Understanding mortgage law is essential for banking and finance lawyers handling secured lending. The interplay of TPA with RERA (Real Estate Regulation and Development Act), stamp duty laws, and local tenancy legislation creates a rich landscape for specialisation.",
  },
  {
    title: "Company Law",
    semester: "Sem 7",
    description:
      "Company Law governs the formation, management, and dissolution of corporate entities under the Companies Act, 2013. The subject covers the separate legal personality of companies, corporate governance, directors' duties, shareholders' rights, mergers and acquisitions, insolvency, and the regulatory role of SEBI and the Ministry of Corporate Affairs. India's corporate law framework has been significantly reformed in recent decades to align with global standards.",
    landmarks: [
      {
        name: "Tata Consultancy Services Ltd v Cyrus Investments Pvt Ltd",
        citation: "(2021) 9 SCC 449",
        principle:
          "Examined the law of oppression and mismanagement under Sections 241–244 of the Companies Act, 2013, clarifying the threshold for court intervention and the weight to be given to business judgment of a board.",
      },
      {
        name: "Salomon v Salomon & Co. Ltd",
        citation: "[1897] AC 22",
        principle:
          "Established the foundational principle of separate corporate personality — a company is a legal person distinct from its members, and shareholders are not personally liable for the company's debts.",
      },
      {
        name: "Life Insurance Corporation of India v Escorts Ltd",
        citation: "(1986) 1 SCC 264",
        principle:
          "Lifted the corporate veil on grounds of public interest and the doctrine of alter ego, holding that the court can look behind the corporate form when it is used as a vehicle for fraud or evasion.",
      },
      {
        name: "Dale & Carrington Invt Ltd v PK Prathapan",
        citation: "(2005) 1 SCC 212",
        principle:
          "Held that directors of a company owe fiduciary duties to the company and cannot allot shares to defeat existing shareholders' rights, confirming the court's power to set aside oppressive acts.",
      },
    ] as const,
    topics: [
      "Incorporation and types of companies",
      "Memorandum and Articles of Association",
      "Share capital, debentures, and charges",
      "Directors — appointment, powers, duties, and liabilities",
      "Board meetings, general meetings, and resolutions",
      "Oppression and mismanagement remedies",
      "Mergers, amalgamations, and takeovers under Companies Act and SEBI regulations",
      "Winding up and insolvency under the Insolvency and Bankruptcy Code",
    ] as const,
    scope:
      "Company law is foundational to corporate practice — M&A lawyers, securities lawyers, and compliance professionals work within this framework daily. The Insolvency and Bankruptcy Code has created an entirely new specialisation in corporate insolvency resolution. Listed company lawyers navigate the intersection of the Companies Act with SEBI regulations, the Listing Obligations and Disclosure Requirements, and Takeover Code. NCLT and NCLAT have emerged as busy forums for corporate disputes, creating demand for specialist corporate litigators.",
  },
  {
    title: "Labour & Industrial Law",
    semester: "Sem 8",
    description:
      "Labour and Industrial Law is a composite subject covering the regulation of the employment relationship, trade union rights, industrial disputes, workmen's compensation, and social security. India's labour law framework is undergoing significant restructuring through the four Labour Codes — the Code on Wages, 2019; the Industrial Relations Code, 2020; the Occupational Safety, Health and Working Conditions Code, 2020; and the Code on Social Security, 2020 — which consolidate 29 central labour laws.",
    landmarks: [
      {
        name: "Bangalore Water Supply & Sewerage Board v Rajappa",
        citation: "(1978) 2 SCC 213",
        principle:
          "Defined the term 'industry' expansively under the Industrial Disputes Act to include all organised activity where capital and labour cooperate for production of goods or services, bringing government undertakings and hospitals within its scope.",
      },
      {
        name: "People's Union for Democratic Rights v Union of India",
        citation: "(1982) 3 SCC 235",
        principle:
          "Held that payment of wages below the minimum wage violates the right against forced labour under Article 23 of the Constitution, treating minimum wage compliance as a fundamental rights issue.",
      },
      {
        name: "Workmen v Reptakos Brett & Co. Ltd",
        citation: "(1992) 1 SCC 290",
        principle:
          "Identified the components of a living wage for the purpose of minimum wage fixation — food, clothing, housing, fuel and lighting, education, and medical expenses — providing a constitutional benchmark for wage policy.",
      },
      {
        name: "Hindustan Lever Ltd v Ashok Vishnu Kate",
        citation: "(1995) 6 SCC 326",
        principle:
          "Clarified the law on retrenchment and the requirements of notice, compensation, and government approval under Section 25N of the Industrial Disputes Act for establishments employing 300 or more workmen.",
      },
    ] as const,
    topics: [
      "Industrial disputes — strikes, lockouts, retrenchment, and closure",
      "Trade unions — registration, recognition, and collective bargaining",
      "Standing Orders and conditions of employment",
      "Wages and the Code on Wages, 2019",
      "Workmen's Compensation and Employees' State Insurance",
      "Provident Fund and the Employees' Provident Funds Act",
      "Child labour, bonded labour, and contract labour regulations",
      "Labour Codes — consolidation, scope, and implementation status",
    ] as const,
    scope:
      "Labour law practice spans both advisory and litigation work — employment lawyers advise corporations on HR compliance, redundancy, and restructuring, while union lawyers represent workers in Labour Courts and Industrial Tribunals. The four Labour Codes, once notified, will substantially rewrite compliance obligations for employers, creating demand for specialists who understand the transitional framework. With the expansion of the gig economy, platform workers, and fixed-term employment, labour law is rapidly evolving to address new employment relationships.",
  },
] as const;

export const LLM_SUBJECTS = [
  {
    title: "Advanced Constitutional Law",
    description:
      "Advanced Constitutional Law examines the deeper structural principles of the Indian Constitution — federalism, secularism, democratic accountability, and the relationship between courts, Parliament, and the executive. The course builds on the Basic Structure doctrine to explore how constitutional courts use interpretive techniques such as purposive interpretation, proportionality review, and constitutional morality to resolve hard cases. Contemporary debates on judicial overreach, the National Judicial Appointments Commission, and constitutional silences are central themes.",
    landmarks: [
      {
        name: "SR Bommai v Union of India",
        citation: "(1994) 3 SCC 1",
        principle:
          "Transformed Article 356 from an instrument of political manipulation to a judicially reviewable provision, holding that the imposition of President's Rule must be based on relevant material and is subject to full judicial scrutiny.",
      },
      {
        name: "IR Coelho v State of Tamil Nadu",
        citation: "(2007) 2 SCC 1",
        principle:
          "Constitution Bench ruled that laws placed in the Ninth Schedule are not immune from judicial review if they violate fundamental rights forming part of the Basic Structure, effectively bridging the gap between Ninth Schedule immunity and constitutional supremacy.",
      },
      {
        name: "Indra Sawhney v Union of India",
        citation: "(1992) 3 SCC 217",
        principle:
          "Upheld the OBC reservations recommended by the Mandal Commission with a 50% cap on total reservations, excluded the 'creamy layer' from OBC benefits, and denied reservations in promotions — a landmark nine-judge bench decision on affirmative action.",
      },
      {
        name: "Supreme Court Advocates-on-Record Association v Union of India",
        citation: "(2016) 5 SCC 1",
        principle:
          "Struck down the 99th Constitutional Amendment establishing the National Judicial Appointments Commission (NJAC), holding that judicial primacy in appointments is part of the Basic Structure and the collegium system must be retained.",
      },
    ] as const,
    topics: [
      "Federalism — distribution of powers, inter-state disputes, and cooperative federalism",
      "Secularism as a Basic Structure element",
      "Article 356 and its judicial review after SR Bommai",
      "Ninth Schedule and the limits of parliamentary immunity",
      "Reservation jurisprudence — OBC, SC/ST, and economic reservation",
      "Judicial appointments and the collegium system",
      "Constitutional morality versus popular morality",
      "Comparative federalism — US, German, and Australian models",
    ] as const,
    scope:
      "Advanced Constitutional Law equips scholars and practitioners for constitutional litigation at the highest level — representing parties in public interest litigations, advising on parliamentary and legislative constitutionality, and contributing to the academic literature that shapes judicial reasoning. The subject is essential for aspirants to senior advocacy, constitutional law academia, and policy advisory roles. India's ongoing debates on federalism, the Uniform Civil Code, and minority rights make constitutional expertise increasingly sought after in both courtrooms and policy forums.",
  },
  {
    title: "Human Rights Law",
    description:
      "Human Rights Law examines the domestic and international legal framework protecting the dignity, equality, and freedom of individuals. In India, the subject encompasses the fundamental rights guaranteed by the Constitution, the Protection of Human Rights Act, 1993, and the expanding jurisprudence of the Supreme Court recognising new rights through creative interpretation of Article 21. The course addresses marginalised communities — women, transgender persons, LGBTQ+ individuals, prisoners, and migrant workers — and the mechanisms available to vindicate their rights.",
    landmarks: [
      {
        name: "Vishaka v State of Rajasthan",
        citation: "(1997) 6 SCC 241",
        principle:
          "Laid down binding guidelines on prevention of sexual harassment at the workplace in the absence of legislation, invoking CEDAW as an interpretive aid and treating sexual harassment as a violation of Articles 14, 19, and 21.",
      },
      {
        name: "National Legal Services Authority v Union of India",
        citation: "(2014) 5 SCC 438",
        principle:
          "Recognised transgender persons as a third gender with constitutional rights under Articles 14, 15, 19, and 21, directing the government to treat them as a socially and educationally backward class entitled to reservations.",
      },
      {
        name: "Navtej Singh Johar v Union of India",
        citation: "(2018) 10 SCC 1",
        principle:
          "Unanimously read down Section 377 IPC to decriminalise consensual same-sex relations between adults, holding that sexual orientation is an essential attribute of identity protected under Articles 14, 15, 19, and 21.",
      },
      {
        name: "Puttaswamy v Union of India",
        citation: "(2017) 10 SCC 1",
        principle:
          "Nine-judge Constitution Bench unanimously recognised the right to privacy as a fundamental right under Article 21, overruling contrary precedents and providing the constitutional foundation for data protection, bodily autonomy, and informational self-determination.",
      },
    ] as const,
    topics: [
      "International human rights instruments — UDHR, ICCPR, ICESCR, CAT",
      "NHRC and State Human Rights Commissions — structure and powers",
      "Rights of prisoners, undertrials, and persons in custodial settings",
      "Gender justice — sexual harassment, domestic violence, and trafficking",
      "Rights of transgender and LGBTQ+ persons",
      "Refugee law and the principle of non-refoulement",
      "Socio-economic rights as enforceable rights — right to food, shelter, education",
      "National security and derogation from human rights standards",
    ] as const,
    scope:
      "Human rights law practice spans constitutional litigation, NGO advisory work, UN special procedure submissions, and law reform advocacy. The NHRC, State Commissions, and international treaty bodies all provide forums for human rights complaints. LLM graduates in this area pursue careers in public interest litigation, international organisations, civil society groups, and academic research. The subject's intersection with criminal justice, gender law, disability rights, and environmental rights gives it an exceptionally broad practical canvas.",
  },
  {
    title: "International Law & Treaties",
    description:
      "International Law governs relations between sovereign states, international organisations, and in some domains individuals. The course covers the sources of international law — treaties, customary international law, general principles, and judicial decisions — and examines how international obligations are incorporated into domestic law. India's approach under Articles 51 and 253 of the Constitution, the use of international law as an interpretive tool by the Supreme Court, and India's treaty obligations under WTO, environmental conventions, and human rights instruments are central themes.",
    landmarks: [
      {
        name: "Jolly George Varghese v Bank of Cochin",
        citation: "AIR 1980 SC 470",
        principle:
          "Examined India's obligation under Article 11 of the ICCPR (prohibition of imprisonment for inability to fulfill a contractual obligation) and held that the right against civil imprisonment requires executive action to implement treaty norms domestically.",
      },
      {
        name: "Vellore Citizens' Welfare Forum v Union of India",
        citation: "(1996) 5 SCC 647",
        principle:
          "Integrated the precautionary principle and the polluter pays principle from international environmental law into Indian domestic law as part of the law of the land through Articles 21, 47, 48A, and 51A(g).",
      },
      {
        name: "Apparel Export Promotion Council v AK Chopra",
        citation: "(1999) 1 SCC 759",
        principle:
          "Used CEDAW and the Vishaka guidelines as interpretive tools to hold that sexual harassment short of physical contact constitutes an affront to dignity and gender equality warranting disciplinary action.",
      },
      {
        name: "Gramophone Co. of India v Birendra Bahadur Pandey",
        citation: "AIR 1984 SC 667",
        principle:
          "Held that customary international law is automatically part of Indian law (incorporation doctrine) provided it is not inconsistent with Acts of Parliament or final decisions of superior courts.",
      },
    ] as const,
    topics: [
      "Sources of international law — treaties, custom, general principles, jus cogens",
      "State responsibility and international dispute settlement",
      "International organisations — UN, ICJ, WTO, ICC",
      "Law of treaties — Vienna Convention on the Law of Treaties, 1969",
      "International trade law — WTO agreements and dispute settlement",
      "International environmental law — climate conventions, precautionary principle",
      "International humanitarian law — Geneva Conventions and Protocols",
      "Relationship between international law and Indian municipal law",
    ] as const,
    scope:
      "International law expertise opens doors to careers in foreign service, international arbitration, WTO litigation, multilateral organisations, and international NGOs. Indian advocates increasingly appear before international arbitral tribunals in investment and commercial disputes. The WTO's Appellate Body and dispute settlement mechanism, the ICJ, and regional courts all create demand for specialists. The convergence of international climate law, trade law, and human rights standards with domestic policy makes this a cutting-edge field for both practice and scholarship.",
  },
  {
    title: "Comparative Constitutional Law",
    description:
      "Comparative Constitutional Law examines constitutional frameworks across multiple legal systems to identify common principles, divergent approaches, and lessons for constitutional design and interpretation. The course compares the Indian model with the United States, United Kingdom, Germany, South Africa, and other jurisdictions across themes of fundamental rights, judicial review, federalism, and constitutional amendment. Comparative methodology is deployed not as a borrowing exercise but as a tool to understand why constitutions succeed or fail.",
    landmarks: [
      {
        name: "Marbury v Madison",
        citation: "5 US (1 Cranch) 137 (1803)",
        principle:
          "Established the power of the United States Supreme Court to strike down legislation inconsistent with the Constitution, creating the doctrine of judicial review that influenced constitutional courts worldwide including India.",
      },
      {
        name: "AV Dicey's Parliamentary Sovereignty Doctrine",
        citation: "Introduction to the Study of the Law of the Constitution (1885)",
        principle:
          "Articulated the British constitutional principle that Parliament is the supreme law-making authority and no body — including courts — can override its legislation, contrasting sharply with the Indian Basic Structure doctrine.",
      },
      {
        name: "BVerfGE 30, 1 — Lüth Case (German Basic Law)",
        citation: "BVerfGE 7, 198 (1958)",
        principle:
          "The German Federal Constitutional Court established the doctrine that fundamental rights create an objective value order permeating all areas of law, an approach that influenced the expansive reading of Indian fundamental rights in Maneka Gandhi and subsequent cases.",
      },
      {
        name: "Minister of Home Affairs v Fourie",
        citation: "[2006] ZACC 19 (South Africa)",
        principle:
          "South African Constitutional Court extended marriage rights to same-sex couples under the equality and dignity provisions of the South African Constitution, demonstrating how comparative constitutional dialogue can accelerate rights jurisprudence across jurisdictions.",
      },
    ] as const,
    topics: [
      "Constitutional design — written vs unwritten constitutions, rigidity vs flexibility",
      "Models of judicial review — concentrated (Kelsenian) vs diffuse (US) vs advisory (Canadian reference)",
      "Fundamental rights — negative vs positive obligations, proportionality review",
      "Federalism — dual, cooperative, and asymmetric federal arrangements",
      "Emergency powers and democratic backsliding in comparative perspective",
      "Constitutional amendment procedures — entrenchment, supermajorities, and unamendability",
      "Comparative bill of rights — US Bill of Rights, ECHR, German Basic Law, South African Bill of Rights",
      "Constitutional courts and their institutional design — tenure, selection, and jurisdiction",
    ] as const,
    scope:
      "Comparative constitutional law is essential for academic careers, law reform work, and international legal practice where cross-system fluency is valued. Constitutional courts increasingly engage in transjudicial dialogue — citing foreign decisions — making comparative knowledge useful for top-tier constitutional litigation. Law reform commissions, parliamentary committees, and international development organisations regularly rely on comparative analysis when designing legislative frameworks. The subject also prepares students for LLM study and academic writing for peer-reviewed journals.",
  },
  {
    title: "Research Methodology & Legal Writing",
    description:
      "Research Methodology and Legal Writing is a skills-intensive course that trains law students in the techniques of rigorous legal research, academic writing, and scholarly communication. It covers doctrinal and empirical research methods, the architecture of legal arguments, citation and referencing standards, and the conventions of legal academic genres including dissertations, case comments, law review articles, and research papers. The course bridges the gap between classroom learning and original scholarly contribution.",
    landmarks: [
      {
        name: "Hart and Sacks — The Legal Process",
        citation: "Henry M. Hart Jr. & Albert M. Sacks (1958, published posthumously 1994)",
        principle:
          "Introduced the legal process school of thought, arguing that adjudication, legislation, and administration are distinct legal processes with their own institutional competencies — a foundational framework for understanding how law is made and applied.",
      },
      {
        name: "Dworkin's 'Law as Integrity'",
        citation: "Ronald Dworkin, Law's Empire (1986)",
        principle:
          "Argued that law is not merely a set of rules but an interpretive practice that requires judges to construct the most coherent and morally justified account of the legal material — a jurisprudential framework influencing constitutional scholarship worldwide.",
      },
      {
        name: "Socio-Legal Studies — Galanter on Legal Pluralism",
        citation: "Marc Galanter, 'Justice in Many Rooms' (1981) 19(1) J Legal Pluralism 1",
        principle:
          "Demonstrated that formal legal institutions are only one among many normative orderings in society, establishing the empirical and theoretical foundation for socio-legal research methods that examine how law operates in practice.",
      },
      {
        name: "OSCOLA Citation Standard",
        citation: "Oxford University Standard for Citation of Legal Authorities (4th ed, 2012)",
        principle:
          "The dominant citation standard for legal academic writing in India and globally, providing uniform rules for citing cases, legislation, books, journal articles, and online sources in legal scholarship.",
      },
    ] as const,
    topics: [
      "Doctrinal research — using SCC Online, Manupatra, Westlaw India, HeinOnline, SSRN",
      "Empirical legal research — surveys, field research, and quantitative methods",
      "Research design — formulating a thesis, research questions, and hypotheses",
      "Dissertation structure — introduction, literature review, chapters, conclusion, bibliography",
      "Case comment writing — facts, issues, ratio, obiter, critical analysis",
      "Citation formats — SCC, AIR, OSCOLA, APA, Bluebook adapted for India",
      "Plagiarism, research ethics, and academic integrity",
      "Publication pathways — law reviews, SSRN preprints, and peer-reviewed journals",
    ] as const,
    scope:
      "Legal research and writing skills are the professional foundation of every legal career — litigators write pleadings and submissions, transactional lawyers draft agreements and opinions, and academics write articles and books. An LLM dissertation is the primary vehicle for demonstrating original scholarly contribution, making research methodology indispensable for postgraduate study. The shift to digital legal research platforms and the emerging role of AI-assisted legal research make information literacy and critical evaluation of AI-generated content essential skills for the modern legal researcher.",
  },
] as const;

export const AIBE_GUIDE = {
  introduction:
    "The All India Bar Examination (AIBE) is a mandatory professional qualifying examination conducted by the Bar Council of India (BCI) for advocates enrolled with State Bar Councils after June 2010. It tests the functional legal knowledge required to practise law and must be passed to obtain a Certificate of Practice, which is compulsory for appearance in courts. The examination is designed as an open-book test, reflecting the practical reality that lawyers work with bare acts, precedents, and commentaries rather than from memory alone.",
  format: [
    "Open-book examination — candidates may bring bare acts, code books, and study materials into the examination hall; annotated books and notes are not permitted",
    "100 multiple choice questions (MCQs) to be answered in 3 hours 30 minutes (210 minutes)",
    "Each question carries 1 mark; there is no negative marking for wrong answers",
    "Minimum passing mark: 45% (45 out of 100) for general category candidates; 40% (40 out of 100) for SC/ST candidates",
    "Conducted online or in pen-and-paper mode at designated centres across India",
    "Candidates who fail may re-attempt without limit; the AIBE certificate, once obtained, is valid for life and does not need renewal",
  ] as const,
  subjects: [
    "Constitutional Law — fundamental rights, directive principles, and amendment procedure",
    "Code of Criminal Procedure / BNSS — FIR, arrest, bail, trial, and appeals",
    "Indian Penal Code / Bharatiya Nyaya Sanhita — general exceptions and major offences",
    "Indian Evidence Act / Bharatiya Sakshya Adhiniyam — relevancy, admissibility, and burden of proof",
    "Civil Procedure Code — pleadings, jurisdiction, interim orders, and execution",
    "Law of Contracts — essentials, void agreements, and remedies for breach",
    "Transfer of Property Act — sale, mortgage, lease, and gift",
    "Family Law — Hindu Marriage Act, Muslim Personal Law, Special Marriage Act",
    "Company Law and Insolvency — corporate basics and the IBC",
    "Professional Ethics and Court Craft — BCI Rules, contempt, and advocates' duties",
  ] as const,
  tips: [
    "Focus on bare acts — bring well-tabbed, unmarked copies of the key statutes to the examination; quick navigation is more valuable than memorisation",
    "Practise previous years' AIBE papers (AIBE I through the most recent edition) — the question pattern repeats significantly across years and this is the highest-return activity",
    "Know the amendment dates — many MCQs test whether candidates know the current position of law including BNS, BNSS, and BSA which replaced the IPC, CrPC, and Evidence Act respectively",
    "Prioritise the big five subjects — Constitutional Law, CrPC/BNSS, IPC/BNS, Evidence, and CPC account for the majority of questions; secure these before moving to specialist topics",
    "Use the time buffer — with no negative marking, attempt all 100 questions; use the remaining time to revisit uncertain answers by consulting your bare acts",
    "Prepare a subject-wise quick reference index — mark key section numbers and definitions in your bare acts with sticky notes or page markers for rapid look-up under exam conditions",
    "Study landmark judgments for context — while most questions are statute-based, some questions test principles derived from Supreme Court judgments; learn the core ratio of landmark cases in each subject",
    "Join a study group or mock test series — peer discussion and timed mock tests under open-book conditions replicate the examination environment and sharpen time management skills",
  ] as const,
} as const;

export const COURT_PRACTICE = [
  {
    title: "Drafting Skills",
    description:
      "Legal drafting is the foundation of effective legal representation — a poorly drafted plaint, petition, or affidavit can jeopardise a client's case before arguments even begin. Court documents must be precise, logically structured, and compliant with the procedural requirements of the relevant court or forum. Mastery of drafting comes through sustained practice, exposure to model precedents, and careful study of the defects that cause courts to reject or return documents.",
    points: [
      "Plaint drafting under Order VII CPC — include all material facts, cause of action, relief sought, and valuation; ensure the plaint is filed in the court of competent jurisdiction with correct court fees",
      "Written statement under Order VIII CPC — admit or deny each allegation specifically; raise all preliminary objections (limitation, jurisdiction, res judicata) in the first paragraph to preserve them",
      "Petitions in High Court and Supreme Court — structure writ petitions under Article 226/32 with clearly identified rights, impugned orders, grounds of challenge, and specific prayers; attach certified copies of all impugned documents",
      "Affidavit drafting — affidavits must be sworn before a notary or oath commissioner and comply with Order XIX CPC; each paragraph should contain a single factual assertion, not submissions or legal arguments",
      "Applications and interlocutory applications — applications for interim injunctions, stay orders, and amendments must state the specific provision invoked, grounds, and urgency; attach supporting affidavit",
      "Contracts and transactional documents — SLAs, NDAs, and sale agreements require precise definition clauses, condition precedents, representation and warranty sections, indemnity clauses, and dispute resolution mechanisms tailored to the client's risk profile",
    ] as const,
  },
  {
    title: "Court Etiquette & Procedure",
    description:
      "Court etiquette reflects the dignity of the judicial process and is governed by a combination of statutory rules, high court rules, and long-standing conventions of the Bar. Young lawyers who understand these norms earn the confidence of the bench and the respect of senior colleagues more quickly than those who do not. Procedural missteps — improper filing, missing court fee stamps, incorrect listing — can delay matters and harm clients.",
    points: [
      "Addressing the bench — judges of the Supreme Court are addressed as 'My Lord' or 'Your Lordship'; High Court judges as 'My Lord' or 'Your Honour'; District Court judges and magistrates as 'Your Honour' or 'Sir/Ma'am' depending on local convention",
      "Dress code — advocates must appear in prescribed court dress: black coat, black and white band, black gown in High Courts and Supreme Court; some district courts waive the gown requirement on non-court days",
      "Filing procedure — documents must be filed in the correct registry counter with proper index, page numbering, and tabbing; urgent matters require a separate mentioning note or mentioning application before the Registrar",
      "Mentioning and listing — urgent matters can be mentioned before the bench at the start of the day; the Chief Justice's court or Roster Bench must be approached for listing; obtain list position before the matter is called",
      "Conduct in court — rise when the bench enters and exits; do not interrupt the bench or opposing counsel without permission; mobile phones must be on silent mode and must not be used during arguments",
      "Robing room protocol — the robing room is for advocates only; maintain decorum and do not discuss confidential client matters in shared spaces; senior advocates' robing rooms are typically separate and by invitation only",
    ] as const,
  },
  {
    title: "Client Management",
    description:
      "Effective client management is as important as legal expertise — clients who feel heard, informed, and fairly treated are more likely to provide accurate instructions, cooperate with the legal process, and refer others. The lawyer-client relationship is a fiduciary one, governed by the Bar Council of India Rules on professional conduct, and breaches of duty — whether in communication, fees, or confidentiality — can lead to disciplinary proceedings.",
    points: [
      "Intake and initial consultation — listen carefully during the first meeting; ask open and closed questions to elicit all relevant facts; avoid premature legal advice before the full factual picture is clear; take detailed notes",
      "Fee discussion — discuss fees transparently at the outset; issue a fee agreement or engagement letter covering the scope of representation, fee structure (fixed, hourly, or contingency where permitted), and billing cycle",
      "Managing expectations — explain the realistic prospects of success honestly; clients who are told their case is stronger than it is will be more difficult to manage when outcomes disappoint; candour builds trust",
      "Communication hygiene — keep clients regularly informed of developments; return calls and emails within one working day; inform clients of adverse orders immediately, even if you plan to challenge them",
      "Confidentiality obligations — all client communications are protected by attorney-client privilege and cannot be disclosed without consent; this obligation survives the end of the retainer and the client's death",
      "Conflict of interest — check for conflicts before accepting a new client; if you have previously represented an adverse party on related matters, decline the brief or obtain informed written consent from all parties",
    ] as const,
  },
  {
    title: "Research & Preparation",
    description:
      "Thorough legal research is the difference between a well-argued case and a missed point of law that the opposing party exploits. Modern legal research platforms make Indian case law more accessible than ever, but knowing how to search effectively — filtering by court, date, subject, and citation — is a skill that requires deliberate development. AI-assisted research tools have emerged as a complement to traditional databases but must be verified against primary sources.",
    points: [
      "Primary legal databases — SCC Online (authoritative for Supreme Court and High Court citations), Manupatra (comprehensive tribunal and legislative coverage), and Indian Kanoon (free access with good search functionality for basic research)",
      "Citation verification — always verify citations in primary law reporters (SCC, AIR, SCR, Cri LJ) before relying on them in submissions; headnotes and summaries on databases can be inaccurate; read the full judgment",
      "Legislative updates — use the Ministry of Law and Justice's India Code portal (indiacode.nic.in) for consolidated and amended statutes; note the commencement dates of amendments and whether the amended version applies to your client's situation",
      "AI-assisted research tools — tools such as CaseMine, CARA (for finding authorities cited by a judgment), and emerging generative AI tools can help identify relevant precedents quickly, but always verify AI outputs against primary sources before using them in court",
      "Building a brief — organise research into a brief with a statement of facts, issues, arguments, relevant statutory provisions, and a hierarchy of authorities from the Supreme Court downwards; include contrary authorities and distinguish them",
      "Moot records and pleadings review — read all pleadings in your matter carefully before drafting submissions; ensure arguments in submissions respond to the specific case made by the other side and do not argue points not raised in the pleadings",
    ] as const,
  },
  {
    title: "Advocacy & Arguments",
    description:
      "Advocacy is the art of persuading — persuading a judge, tribunal, arbitrator, or jury that your client's position is correct in fact and law. Effective advocates combine thorough preparation, logical argument structure, command of the record, and the ability to respond to questions from the bench. Oral advocacy and written submissions are complementary skills; both require clarity, precision, and the discipline to focus on what matters most.",
    points: [
      "Opening oral arguments — state your case in a single, compelling sentence within the first minute; judges form early impressions and a crisp opening that identifies the issue and the relief sought immediately commands attention",
      "Handling bench questions — treat every question as an opportunity, not an interruption; if the answer is unfavourable, acknowledge it candidly and move to your strongest counter-argument; judges respect intellectual honesty",
      "Written submissions — written submissions (also called notes of arguments or synopses) should be filed before hearings in High Courts and the Supreme Court; keep them focused on the two or three strongest arguments rather than listing every conceivable point",
      "Cross-examination strategy — in civil cross-examination, aim to elicit admissions that advance your case rather than attacking the witness's credibility on peripheral matters; in criminal trials, focus cross-examination on inconsistencies between the statement under Section 161 CrPC and oral testimony",
      "Authorities compilation — compile a list of citations (case law, statutory provisions, and textbook passages) that you intend to rely on and serve it on the opposing party and the court before the hearing; this is mandatory in some courts",
      "Appellate advocacy — in appellate arguments, identify the specific error of law or fact in the lower court's order; respect the record and do not raise new factual arguments not taken before the trial court without specific permission",
    ] as const,
  },
  {
    title: "Career Pathways",
    description:
      "A law degree opens pathways across an unusually wide range of careers — from courtroom advocacy to corporate boardrooms, from academic scholarship to judicial office, and from public policy to legal technology. The legal profession in India is in a period of significant transformation, driven by the growth of domestic and international arbitration, the emergence of alternative legal service providers, and the increasing integration of technology into legal work. Informed career planning, network-building, and continuous learning are essential to navigate this landscape.",
    points: [
      "Litigation — join chambers of a senior advocate or enrol as a junior in a law firm's litigation department; district court practice builds foundational procedural skills before moving to High Court and Supreme Court work; expect a minimum 5-7 year apprenticeship period before independent practice becomes financially viable",
      "Corporate law — Tier I and Tier II law firms (Cyril Amarchand, AZB, Trilegal, Khaitan, JSA, and others) recruit from campus at NLSIU, NALSAR, NLU-D, and comparable institutions; transactional work spans M&A, banking, capital markets, private equity, and regulatory advisory",
      "Judiciary — the civil judge examinations (conducted by High Court and State Public Service Commissions) are the entry point to the subordinate judiciary; preparation requires strong command of civil and criminal procedure, substantive law, and drafting; the higher judiciary is recruited from the Bar through the collegium process",
      "Academia — an LLM followed by a PhD and publication record is the standard pathway to full-time faculty positions; National Law Universities, IITs, and central universities are significant employers; legal academia in India is growing but remains under-resourced compared to the Bar",
      "Legal technology and alternative legal services — legaltech startups, contract review platforms, legal process outsourcing (LPO) companies, and in-house legal operations teams increasingly recruit law graduates with technology aptitude; skills in legal data analytics, AI prompt engineering, and process automation are in demand",
      "Government and public service — the Indian Legal Service, Advocate General offices, public sector undertakings, law commissions, and international organisations such as the UN and World Bank all recruit law graduates; competitive examinations such as the UPSC civil services and ILS examinations have distinct preparation pathways",
    ] as const,
  },
] as const;

export const AIBE_SYLLABUS = {
  title: 'AIBE-XX Syllabus',
  source: 'Bar Council of India Trust (BCI Trust — PEARL FIRST)',
  date: '27 September 2025',
  totalQuestions: 100,
  subjects: [
    { name: 'Constitutional Law', questions: 10 },
    { name: 'IPC / Bharatiya Nyaya Sanhita', questions: 8 },
    { name: 'CrPC / Bharatiya Nagarik Suraksha Sanhita', questions: 10 },
    { name: 'CPC (Code of Civil Procedure)', questions: 10 },
    { name: 'Evidence Act / Bharatiya Sakshya Adhiniyam', questions: 8 },
    { name: 'ADR including Arbitration Act', questions: 4 },
    { name: 'Family Law', questions: 8 },
    { name: 'Public Interest Litigation', questions: 4 },
    { name: 'Administrative Law', questions: 3 },
    { name: 'Professional Ethics & BCI Misconduct Rules', questions: 4 },
    { name: 'Company Law', questions: 2 },
    { name: 'Environmental Law', questions: 2 },
    { name: 'Cyber Law', questions: 2 },
    { name: 'Labour & Industrial Law', questions: 4 },
    { name: 'Torts, Motor Vehicle Act & Consumer Protection', questions: 5 },
    { name: 'Law related to Taxation', questions: 4 },
    { name: 'Contract, Specific Relief, Property Laws, NI Act', questions: 8 },
    { name: 'Land Acquisition Act', questions: 2 },
    { name: 'Intellectual Property Laws', questions: 2 },
  ],
} as const;

export const OU_LLM_BRANCHES = {
  university: 'Osmania University, Faculty of Law',
  revision: 'Revised w.e.f. Academic Year 2022-2023',
  duration: '2 Years (4 Semesters, 15 weeks each)',
  totalMarks: 1600,
  branches: [
    {
      number: 'I',
      name: 'Jurisprudence',
      papers: [
        'Schools of Jurisprudence and Theories of Law',
        'Sources of Law',
        'Law and Social Transformation',
        'Legal Research Methodology',
        'Hindu and Muslim Jurisprudence',
        'Theory of Legislation and Interpretation of Statutes',
        'Law and Justice in Globalization',
        'Fundamental Legal Rights',
        'Legislative Drafting',
        'Indian Constitutional Law: The New Challenges',
      ],
    },
    {
      number: 'II',
      name: 'Constitutional Law',
      papers: [
        'Schools of Jurisprudence and Theories of Law',
        'Indian Constitutional Law-I',
        'Law and Social Transformation',
        'Legal Research Methodology',
        'Indian Constitutional Law-II',
        'Comparative Constitutional Law-I',
        'Law and Justice in Globalization',
        'Comparative Constitutional Law-II',
        'Administrative Law',
        'Indian Constitutional Law: The New Challenges',
      ],
    },
    {
      number: 'III',
      name: 'International Law',
      papers: [
        'Schools of Jurisprudence and Theories of Law',
        'International Law of Peace',
        'Law and Social Transformation',
        'Legal Research Methodology',
        'International Law of War, Neutrality and Refugee Law',
        'International Institutions',
        'Law and Justice in Globalization',
        'Conflict of Laws',
        'Law of Sea, Air and Outer Space',
        'Indian Constitutional Law: The New Challenges',
      ],
    },
    {
      number: 'IV',
      name: 'Corporate and Securities Laws',
      papers: [
        'Schools of Jurisprudence and Theories of Law',
        'Law on Corporate Contracts',
        'Law and Social Transformation',
        'Legal Research Methodology',
        'Modern Company Law',
        'Law of Insurance and Carriage',
        'Law and Justice in Globalization',
        'Law of Banking and Negotiable Instruments',
        'Corporate and Securities Laws',
        'Indian Constitutional Law: The New Challenges',
      ],
    },
    {
      number: 'V',
      name: 'Labour and Employment Laws',
      papers: [
        'Schools of Jurisprudence and Theories of Law',
        'Collective Bargaining and Trade Union Law',
        'Law and Social Transformation',
        'Legal Research Methodology',
        'Resolution of Industrial Disputes',
        'Labour Management Relations and Law relating to Civil Servants',
        'Law and Justice in Globalization',
        'International Labour Organization',
        'Social Security Law',
        'Indian Constitutional Law: The New Challenges',
      ],
    },
    {
      number: 'VI',
      name: 'Crimes and Torts',
      papers: [
        'Schools of Jurisprudence and Theories of Law',
        'General Principles of Criminal Law',
        'Law and Social Transformation',
        'Legal Research Methodology',
        'Criminology and Penology',
        'Law relating to Socio-Economic Offences',
        'Law and Justice in Globalization',
        'General Principles of Law of Torts',
        'Law Relating to Specific Torts',
        'Indian Constitutional Law: The New Challenges',
      ],
    },
    {
      number: 'VII',
      name: 'Alternative Dispute Resolution',
      papers: [
        'Schools of Jurisprudence and Theories of Law',
        'ADR: Concepts and Methods',
        'Law and Social Transformation',
        'Legal Research Methodology',
        'Law of Arbitration and Conciliation in India',
        'Online Dispute Resolution',
        'Law and Justice in Globalization',
        'Family Dispute Resolution',
        'International Commercial Arbitration',
        'Indian Constitutional Law: The New Challenges',
      ],
    },
    {
      number: 'VIII',
      name: 'Intellectual Property Rights',
      papers: [
        'Schools of Jurisprudence and Theories of Law',
        'Intellectual Property Rights: Concepts',
        'Law and Social Transformation',
        'Legal Research Methodology',
        'International Legal Regime Relating to IPR',
        'Law Relating to Copyright and Neighbouring Rights',
        'Law and Justice in Globalization',
        'Law Relating to Patents in India',
        'Law Relating to Trademarks and Designs',
        'Indian Constitutional Law: The New Challenges',
      ],
    },
    {
      number: 'IX',
      name: 'International Trade and Economic Laws',
      papers: [
        'Schools of Jurisprudence and Theories of Law',
        'Development and Origin of International Economic Law',
        'Law and Social Transformation',
        'Legal Research Methodology',
        'International Regime of Intellectual Property Rights',
        'International Trade and Economic Institutions',
        'Law and Justice in Globalization',
        'GATT and WTO',
        'Emerging Trends in World Trade and Economy',
        'Indian Constitutional Law: The New Challenges',
      ],
    },
    {
      number: 'X',
      name: 'Criminology and Criminal Justice System',
      papers: [
        'Schools of Jurisprudence and Theories of Law',
        'Comparative Criminal Law',
        'Law and Social Transformation',
        'Legal Research Methodology',
        'Criminology and Privileged Class Deviance',
        'Penology and Correctional Method',
        'Law and Justice in Globalization',
        'Victimology and Victim Compensation',
        'Evidentiary Issues — Modern Technology and Forensic in Criminal Trials',
        'Indian Constitutional Law: The New Challenges',
      ],
    },
    {
      number: 'XI',
      name: 'Human Rights and Social Justice',
      papers: [
        'Schools of Jurisprudence and Theories of Law',
        'International Human Rights Law',
        'Law and Social Transformation',
        'Legal Research Methodology',
        'Human Rights Law and New Dimensions',
        'Applied Human Rights and Criminal Justice System in India',
        'Law and Justice in Globalization',
        'Human Rights and Social Justice',
        'Social Justice and Challenges for Social Change',
        'Indian Constitutional Law: The New Challenges',
      ],
    },
  ],
} as const;

export const TS_LAWCET = {
  title: 'TS LAWCET 2026',
  courses: 'LL.B. 3-Year and 5-Year Degree Course',
  duration: '90 minutes',
  totalQuestions: 120,
  totalMarks: 120,
  parts: [
    {
      name: 'Part A — General Knowledge & Mental Ability',
      questions: 30,
      marks: 30,
      topics: [
        'Indian History and Culture',
        'Indian Polity and Governance',
        'Geography — India and World',
        'General Science and Technology',
        'Economy and Development',
        'Logical Reasoning and Analytical Ability',
        'Verbal and Non-Verbal Reasoning',
        'Data Interpretation',
      ],
    },
    {
      name: 'Part B — Current Affairs',
      questions: 30,
      marks: 30,
      topics: [
        'National and International Events',
        'Awards, Honours, and Appointments',
        'Sports and Games',
        'Books and Authors',
        'Science and Technology Developments',
        'Legal and Constitutional Developments',
        'Important Government Schemes and Policies',
        'Telangana State — Current Affairs',
      ],
    },
    {
      name: 'Part C — Aptitude for the Study of Law',
      questions: 60,
      marks: 60,
      topics: [
        'Legal Passage Comprehension (10 questions)',
        'Basic Principles of Indian Constitution',
        'Fundamental Rights and Duties',
        'Legal Reasoning and Logical Deduction',
        'Legal Maxims and Terminology',
        'Elementary Legal Awareness',
        'Principles of Natural Justice',
        'Rights and Obligations under Indian Law',
      ],
    },
  ],
  note: 'For 5-Year LLB, standard expected is Intermediate/10+2 level. For 3-Year LLB, standard expected is Degree/Graduation level.',
} as const;

export const TS_PGLCET = {
  title: 'TS PGLCET 2026',
  course: 'LL.M. (all specialisations)',
  duration: '90 minutes',
  totalQuestions: 120,
  totalMarks: 120,
  parts: [
    {
      name: 'Part A',
      questions: 40,
      marks: 40,
      sections: [
        {
          name: 'Jurisprudence',
          questions: 20,
          topics: [
            'Schools of Jurisprudence',
            'Sources of Law — Custom, Precedent, Legislation',
            'Rights and Duties',
            'Ownership and Possession',
            'Persons',
            'Obligation',
            'Property',
            'Liability',
            'Legal Sanctions',
          ],
        },
        {
          name: 'Constitutional Law',
          questions: 20,
          topics: [
            'Nature of the Constitution',
            'Fundamental Rights',
            'Directive Principles of State Policy',
            'Executive, Judiciary and Legislature',
            'Centre-State Relations',
            'Emergency Provisions',
            'Amendments to the Constitution',
          ],
        },
      ],
    },
    {
      name: 'Part B',
      questions: 80,
      marks: 80,
      sections: [
        {
          name: 'International Law',
          questions: 16,
          topics: [
            'International Law and Municipal Law',
            'Subjects of International Law',
            'State Territory',
            'Law of Air and Outer Space',
            'Law of Sea',
            'Nationality and Statelessness',
            'Extradition and Asylum',
            'State Jurisdiction',
            'United Nations',
            'Private International Law',
            'International Court of Justice (ICJ)',
          ],
        },
        {
          name: 'Business and Corporate Laws',
          questions: 16,
          topics: [
            'General Principles of Contract (Sections 1-75)',
            'The Companies Act, 2013',
            'Intellectual Property Rights',
            'Insolvency and Bankruptcy Code, 2016',
            'Competition Laws',
          ],
        },
        {
          name: 'Labour Law',
          questions: 16,
          topics: [
            'Trade Union Laws',
            'Factories Act',
            'Social Security Laws',
            'Industrial Disputes',
            'New Labour Codes — latest developments',
          ],
        },
        {
          name: 'Crimes and Torts',
          questions: 16,
          topics: [
            'IPC — General Principles and General Exceptions',
            'Bharatiya Nyaya Sanhita, 2023 — Salient Features',
            'Torts — General Principles, Defences, Joint Liability',
            'State Liability for Torts',
            'Consumer Protection Act, 2019',
          ],
        },
        {
          name: 'Other Allied Laws',
          questions: 16,
          topics: [
            'Environmental Laws',
            'Human Rights Laws',
            'Laws relating to ADR',
            'Information Technology Act, 2000',
            'Right to Information Act, 2005',
            'Family Laws',
          ],
        },
      ],
    },
  ],
} as const;
