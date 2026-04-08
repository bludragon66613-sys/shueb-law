/**
 * Mock case data for the client portal MVP.
 * In production, this would be backed by a database (Postgres via Prisma or Drizzle).
 */

export type CaseStatus = 'active' | 'pending' | 'resolved' | 'on-hold';

export interface CaseEvent {
  readonly date: string;
  readonly title: string;
  readonly description: string;
}

export interface CaseFile {
  readonly name: string;
  readonly type: string;
  readonly uploadedAt: string;
}

export interface LegalCase {
  readonly id: string;
  readonly clientEmail: string;
  readonly title: string;
  readonly caseNumber: string;
  readonly court: string;
  readonly practiceArea: string;
  readonly status: CaseStatus;
  readonly nextHearing: string | null;
  readonly filedDate: string;
  readonly description: string;
  readonly timeline: readonly CaseEvent[];
  readonly documents: readonly CaseFile[];
}

// Demo data — replace with database queries
export const DEMO_CASES: readonly LegalCase[] = [
  {
    id: 'case-001',
    clientEmail: 'demo@example.com',
    title: 'Property Dispute — Sector 42 Land Title',
    caseNumber: 'CS/2025/1847',
    court: 'District Court, Civil Division',
    practiceArea: 'Civil Litigation',
    status: 'active',
    nextHearing: '2026-04-22',
    filedDate: '2025-09-15',
    description: 'Title dispute regarding inherited property in Sector 42. Opposing party claims adverse possession. Matter at evidence stage.',
    timeline: [
      { date: '2025-09-15', title: 'Suit Filed', description: 'Civil suit for declaration of title filed under Order VII Rule 1 CPC.' },
      { date: '2025-11-03', title: 'Written Statement', description: 'Defendant filed written statement claiming adverse possession for 12+ years.' },
      { date: '2025-12-20', title: 'Framing of Issues', description: 'Court framed 4 issues including title validity and limitation.' },
      { date: '2026-02-14', title: 'Evidence Stage', description: 'Plaintiff evidence commenced. Revenue records and sale deed submitted.' },
      { date: '2026-04-22', title: 'Next Hearing', description: 'Cross-examination of PW-1 scheduled.' },
    ],
    documents: [
      { name: 'Plaint.pdf', type: 'Filing', uploadedAt: '2025-09-15' },
      { name: 'Sale_Deed_2003.pdf', type: 'Evidence', uploadedAt: '2025-09-15' },
      { name: 'Revenue_Records.pdf', type: 'Evidence', uploadedAt: '2026-02-14' },
      { name: 'Written_Statement.pdf', type: 'Opposing', uploadedAt: '2025-11-03' },
    ],
  },
  {
    id: 'case-002',
    clientEmail: 'demo@example.com',
    title: 'FIR Quashing — Section 528 BNSS',
    caseNumber: 'CRL.M.C./2026/0341',
    court: 'High Court, Criminal Division',
    practiceArea: 'Criminal Law',
    status: 'pending',
    nextHearing: '2026-05-10',
    filedDate: '2026-01-28',
    description: 'Petition under Section 528 BNSS (erstwhile 482 CrPC) seeking quashing of FIR registered under Sections 318(4) and 336 BNS. Allegations of cheating and forgery in a commercial transaction.',
    timeline: [
      { date: '2026-01-28', title: 'Petition Filed', description: 'CRL.M.C. filed seeking quashing of FIR No. 42/2026, PS Cyber Cell.' },
      { date: '2026-02-15', title: 'Notice Issued', description: 'High Court issued notice to State and complainant. Stay on arrest granted.' },
      { date: '2026-05-10', title: 'Next Hearing', description: 'Arguments on maintainability of petition.' },
    ],
    documents: [
      { name: 'Quashing_Petition.pdf', type: 'Filing', uploadedAt: '2026-01-28' },
      { name: 'FIR_Copy.pdf', type: 'Reference', uploadedAt: '2026-01-28' },
      { name: 'Stay_Order.pdf', type: 'Court Order', uploadedAt: '2026-02-15' },
    ],
  },
  {
    id: 'case-003',
    clientEmail: 'demo@example.com',
    title: 'DPDP Act Compliance Advisory',
    caseNumber: 'ADV/2026/017',
    court: 'N/A — Advisory',
    practiceArea: 'Technology Law',
    status: 'resolved',
    nextHearing: null,
    filedDate: '2026-01-10',
    description: 'Comprehensive DPDP Act 2023 compliance audit and policy drafting for a mid-size SaaS company processing Indian user data.',
    timeline: [
      { date: '2026-01-10', title: 'Engagement Started', description: 'Scope: full DPDP compliance audit, privacy policy, consent mechanisms.' },
      { date: '2026-01-25', title: 'Audit Completed', description: 'Gap analysis delivered. 14 compliance gaps identified across 6 categories.' },
      { date: '2026-02-15', title: 'Policies Delivered', description: 'Updated privacy policy, data processing agreement, and consent flows delivered.' },
      { date: '2026-03-01', title: 'Engagement Closed', description: 'All deliverables accepted. Follow-up review scheduled for Q3 2026.' },
    ],
    documents: [
      { name: 'DPDP_Gap_Analysis.pdf', type: 'Deliverable', uploadedAt: '2026-01-25' },
      { name: 'Privacy_Policy_v2.pdf', type: 'Deliverable', uploadedAt: '2026-02-15' },
      { name: 'DPA_Template.pdf', type: 'Deliverable', uploadedAt: '2026-02-15' },
    ],
  },
];

export function getCasesForClient(email: string): readonly LegalCase[] {
  return DEMO_CASES.filter((c) => c.clientEmail === email.toLowerCase());
}

export function getCaseById(id: string, email: string): LegalCase | undefined {
  return DEMO_CASES.find((c) => c.id === id && c.clientEmail === email.toLowerCase());
}

const STATUS_LABELS: Record<CaseStatus, string> = {
  active: 'Active',
  pending: 'Pending',
  resolved: 'Resolved',
  'on-hold': 'On Hold',
};

const STATUS_COLORS: Record<CaseStatus, string> = {
  active: 'text-green-400 bg-green-400/10 border-green-400/20',
  pending: 'text-yellow-400 bg-yellow-400/10 border-yellow-400/20',
  resolved: 'text-text-muted bg-text-muted/10 border-text-muted/20',
  'on-hold': 'text-orange-400 bg-orange-400/10 border-orange-400/20',
};

export function getStatusLabel(status: CaseStatus): string {
  return STATUS_LABELS[status];
}

export function getStatusColor(status: CaseStatus): string {
  return STATUS_COLORS[status];
}
