export const THESIS_OVERVIEW = {
  title: 'LL.M. Dissertation & Thesis Guide',
  description:
    'A dissertation (or thesis) is an original, independently researched piece of legal scholarship that demonstrates a student\'s ability to identify a legal problem, analyse it systematically, and advance a reasoned argument. LL.M. students at NALSAR and affiliated universities are required to submit a dissertation as a mandatory component of the postgraduate programme, carrying 200 marks (150 written + 50 viva-voce).',
} as const;

export const DISSERTATION_STEPS = [
  {
    step: '01',
    title: 'Choose Your Topic',
    description:
      'Pick a narrow, answerable legal question. Use the "topic health test": What is the exact legal question? Which jurisdictions? What gap will you address? What will you prove? Narrow early to save time later.',
    tips: [
      'Choose a topic you can finish, not just one that sounds impressive',
      'Validate with your supervisor before investing weeks',
      'Check if sufficient primary sources exist',
      'Ensure the topic has a clear legal gap or conflict to address',
    ] as const,
  },
  {
    step: '02',
    title: 'Write the Research Proposal',
    description:
      'Mandatory 1000-word proposal. Must include: introduction, statement of problem/research gap, research objectives, scope and limitations, hypothesis, research questions (3-4 primary + secondary), methodology, literature review, and tentative chapterisation. This is your roadmap.',
    tips: [
      'The proposal is a roadmap — not a formality',
      'Frame 3-4 primary research questions in analytical form',
      'Secondary questions should complement primary ones',
      'Be willing to revise as you discover more about your topic',
    ] as const,
  },
  {
    step: '03',
    title: 'Choose Your Methodology',
    description:
      'Select from: Doctrinal (black-letter analysis of statutes/cases — most common for LL.M.), Comparative Legal (compare 2+ jurisdictions), Socio-Legal/Empirical (interviews, surveys, data), Policy and Reform Analysis, or Mixed Methods. Justify your choice.',
    tips: [
      'Doctrinal is safest for most LL.M. dissertations',
      'If comparative — limit to 2 jurisdictions with clear justification',
      'Empirical requires ethical clearance and access',
      'State and justify your method clearly in the proposal',
    ] as const,
  },
  {
    step: '04',
    title: 'Conduct Literature Review',
    description:
      'Review existing scholarship. Compare and contrast authors, identify disagreements, highlight gaps, and show how your study relates to prior work. Use the Core 20 + Supporting 40 rule: 20 key sources (cases, statutes, leading articles) + 40 supporting sources. Assign each source to a future chapter heading as you read.',
    tips: [
      'Assign each source to a chapter heading as you read',
      'A good review identifies gaps and controversy, not just summaries',
      'Include primary sources (statutes, judgments) and secondary (books, articles)',
      'Conclude by showing what the literature lacks — that is your research gap',
    ] as const,
  },
  {
    step: '05',
    title: 'Structure Your Chapters',
    description:
      'Maximum 6-7 chapters including Introduction and Conclusion. Standard structure: Ch.1 Introduction (problem, gap, question, method), Ch.2 Conceptual/Legal Framework, Ch.3 Current Law and Case Analysis, Ch.4 Problem Analysis (where the law fails), Ch.5 Comparative/Policy Chapter (if applicable), Ch.6 Recommendations and Conclusion. Every chapter must move your thesis forward.',
    tips: [
      'Write the Introduction LAST — after you know what you actually proved',
      'Each chapter should support your central argument',
      'If a chapter does not advance your thesis, remove it',
      'Main body must be minimum 80 pages (100+ total with prelims and bibliography)',
    ] as const,
  },
  {
    step: '06',
    title: 'Write and Draft',
    description:
      'Follow the 6-week plan: Week 1 (framework chapter), Week 2 (main analysis), Week 3 (enforcement gaps), Week 4 (comparative/policy + recommendations), Week 5 (conclusion + rewrite introduction), Week 6 (editing, citations, formatting). Draft chapters 2-4 first. Write conclusion once argument is clear. Write introduction LAST.',
    tips: [
      'Write the introduction last — it should be a map, not a promise',
      'Start with the chapter you are most confident about',
      'Paraphrase in your own voice — short quotations only when exact wording matters',
      'Cite immediately when the idea is not yours',
    ] as const,
  },
  {
    step: '07',
    title: 'Citations and Bibliography',
    description:
      'Use Bluebook 19th/20th edition OR ILI Citation Style consistently throughout. Footnotes are mandatory. Maintain a Cases Table and Legislation Table. Bibliography must include: Books, Scholarly Articles, News Sources, and Internet Sources. Save full citation details when you first find a source — do not leave footnotes for the final week.',
    tips: [
      'Pick one citation style and follow it throughout — consistency matters most',
      'Save full citation details the moment you find a source',
      'Maintain separate Tables of Cases and Legislation',
      'Messy citations increase similarity issues and look careless',
    ] as const,
  },
  {
    step: '08',
    title: 'Submit and Defend (Viva-Voce)',
    description:
      'Submit draft for supervisor review first. Once approved, submit hard copy. Dissertation carries 150 marks (written) + 50 marks (viva-voce) = 200 marks total. In the viva, be prepared to explain your methodology, defend your conclusions, and discuss limitations honestly.',
    tips: [
      'Know your dissertation inside out — the viva tests depth, not breadth',
      'Be honest about limitations — examiners respect intellectual honesty',
      'Prepare a 5-minute summary of your argument and key findings',
      'Reread your introduction and conclusion the night before',
    ] as const,
  },
] as const;

export const DISSERTATION_STRUCTURE = [
  {
    title: 'Cover / Title Page',
    description:
      'Degree programme, dissertation title, student name, roll number, submission date, university name and logo.',
  },
  {
    title: 'Certificate by Supervisor',
    description:
      'Signed certification by the supervising faculty member confirming the originality and adequacy of the work.',
  },
  {
    title: 'Declaration by Student',
    description:
      'Originality declaration signed by the student confirming the work is their own and has not been submitted elsewhere.',
  },
  {
    title: 'Acknowledgements',
    description:
      'Brief note of thanks to supervisor, faculty, and any persons or institutions that assisted the research.',
  },
  {
    title: 'Table of Contents',
    description:
      'All chapters, subheadings, and page numbers including appendices and bibliography.',
  },
  {
    title: 'Index of Authorities',
    description:
      'Separately listed: Statutes, Judgments, and Other official sources such as reports, circulars, and treaties.',
  },
  {
    title: 'List of Abbreviations',
    description:
      'All short forms and acronyms used in the text, listed alphabetically with their full forms.',
  },
  {
    title: 'List of Tables / Figures',
    description:
      'Enumeration of all tables, charts, and figures with their titles and page numbers (required if any are used).',
  },
  {
    title: 'Introduction (Chapter 1)',
    description:
      'Research gap, statement of problem, objectives, scope and limitations, hypothesis, research questions, methodology, value of research, literature review, and tentative chapterisation.',
  },
  {
    title: 'Main Body (Chapters 2–5)',
    description:
      'Divided into thematic chapters addressing all research questions with analysis of findings, case law, comparative material, and policy critique.',
  },
  {
    title: 'Conclusion and Suggestions',
    description:
      'Answer the main research question, reflect on findings, and suggest concrete legislative or judicial reforms.',
  },
  {
    title: 'Bibliography',
    description:
      'Books, Scholarly Articles, News Sources, and Internet Sources listed in Bluebook or ILI citation style, organised by category.',
  },
] as const;

export const CITATION_GUIDE = [
  {
    category: 'Book (Single Author)',
    format: 'Author FIRST NAME LAST NAME, TITLE OF THE BOOK page no. (Edition, Publisher Year).',
    example:
      "M.P. Jain, INDIAN CONSTITUTIONAL LAW 102 (8th ed., LexisNexis 2018).",
  },
  {
    category: 'Book (Two Authors)',
    format: 'Author1 FIRST NAME LAST NAME & Author2 FIRST NAME LAST NAME, TITLE OF THE BOOK page no. (Edition, Publisher Year).',
    example:
      "M.P. Jain & S.N. Jain, PRINCIPLES OF ADMINISTRATIVE LAW 45 (7th ed., LexisNexis 2017).",
  },
  {
    category: 'Edited Book',
    format: 'Editor FIRST NAME LAST NAME ed., TITLE OF THE BOOK page no. (Publisher Year).',
    example:
      "Susan A. Bandes ed., THE PASSIONS OF LAW 12 (New York University Press 1999).",
  },
  {
    category: 'Journal Article',
    format: 'Author First Name Last Name, Title of Article, Volume No. JOURNAL NAME page no. (Year).',
    example:
      "Upendra Baxi, Taking Suffering Seriously: Social Action Litigation in the Supreme Court of India, 4 THIRD WORLD LEGAL STUDIES 107 (1985).",
  },
  {
    category: 'Essay in Edited Book',
    format: 'Author First Name Last Name, Title of Essay, in TITLE OF BOOK page no. (Editor First Name Last Name ed., Publisher Year).',
    example:
      "Jutta Brunnee, The Kyoto Protocol: Testing Ground for Compliance Theories, in COMMITMENT AND COMPLIANCE 255 (Dinah Shelton ed., Oxford University Press 2000).",
  },
  {
    category: 'Newspaper Article',
    format: 'Author First Name Last Name, Title of Article, NEWSPAPER NAME, Date of Publication, at page no.',
    example:
      "Robert Freidman, India's New Privacy Law, THE HINDU, Mar. 15, 2024, at 7.",
  },
  {
    category: 'Case Law (Indian)',
    format: 'Case Name, (Year) Volume Reporter page no. (Court).',
    example:
      "Kesavananda Bharati v. State of Kerala, (1973) 4 SCC 225 (India).",
  },
  {
    category: 'Statute / Act',
    format: 'Short Title of Act, Year, § Section No. (Country).',
    example:
      "Information Technology Act, 2000, § 43 (India).",
  },
  {
    category: 'Constitution',
    format: 'CONSTITUTION OF [COUNTRY] art. Article No., § clause (if applicable).',
    example:
      "INDIA CONST. art. 14.",
  },
  {
    category: 'Website',
    format: 'Author (if known), Title of Page, Publisher/Website Name, URL (last visited Date).',
    example:
      "Ministry of Electronics and IT, The Information Technology Act 2000, India.gov.in, https://www.meity.gov.in/content/information-technology-act (last visited Apr. 9, 2026).",
  },
] as const;

export const COMMON_MISTAKES = [
  'Topic too broad — no strong conclusion possible when the question spans too many jurisdictions or legal fields',
  'No clear thesis — chapters become disconnected summaries instead of a unified argument',
  'Weak methodology section — examiner questions your approach when it is not explicitly stated and justified',
  'Too many jurisdictions in comparative work — leads to shallow analysis that covers everything and proves nothing',
  'Over-quoting — low originality score and poor reading flow; paraphrase and synthesise in your own voice',
  'Citation inconsistency — mixing Bluebook and ILI styles, or missing footnotes, appears careless and unprofessional',
  'Late proofreading — avoidable grammatical and formatting errors that cost marks and undermine credibility',
] as const;
