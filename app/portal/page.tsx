import type { Metadata } from 'next';
import Link from 'next/link';
import { redirect } from 'next/navigation';
import { SITE } from '@/lib/constants';
import { getSession } from '@/lib/auth';
import { getCasesForClient, getStatusLabel, getStatusColor } from '@/lib/cases';
import { Section } from '@/components/ui/section';
import { PortalHeader } from './portal-header';

export const metadata: Metadata = {
  title: `Dashboard | ${SITE.name}`,
  description: 'Your case dashboard — track active matters, upcoming hearings, and documents.',
};

export default async function PortalDashboard() {
  const session = await getSession();
  if (!session) redirect('/portal/login');

  const cases = getCasesForClient(session.email);
  const activeCases = cases.filter((c) => c.status === 'active' || c.status === 'pending');
  const nextHearing = activeCases
    .filter((c) => c.nextHearing)
    .sort((a, b) => (a.nextHearing! > b.nextHearing! ? 1 : -1))[0];

  return (
    <>
      <PortalHeader name={session.name} />

      <Section className="pt-8">
        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          <StatCard label="Total Cases" value={String(cases.length)} />
          <StatCard label="Active" value={String(activeCases.length)} accent />
          <StatCard
            label="Next Hearing"
            value={nextHearing?.nextHearing
              ? new Date(nextHearing.nextHearing).toLocaleDateString('en-IN', { month: 'short', day: 'numeric' })
              : 'None'}
          />
          <StatCard
            label="Documents"
            value={String(cases.reduce((sum, c) => sum + c.documents.length, 0))}
          />
        </div>

        {/* Cases list */}
        <p className="text-xs tracking-[0.3em] uppercase text-text-muted mb-4">Your Cases</p>
        {cases.length === 0 ? (
          <div className="rounded-sm border border-border bg-bg-card p-8 text-center">
            <p className="text-text-muted">No cases found for your account.</p>
          </div>
        ) : (
          <div className="space-y-4">
            {cases.map((c) => (
              <Link key={c.id} href={`/portal/case/${c.id}`}>
                <div className="group rounded-sm border border-border bg-bg-card p-6 hover:border-accent/40 hover:bg-bg-elevated transition-all">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <span className={`text-xs px-2 py-0.5 rounded-sm border ${getStatusColor(c.status)}`}>
                          {getStatusLabel(c.status)}
                        </span>
                        <span className="text-xs text-text-muted">{c.practiceArea}</span>
                      </div>
                      <h3 className="font-serif text-lg text-text-primary group-hover:text-accent transition-colors">
                        {c.title}
                      </h3>
                      <p className="text-xs text-text-muted mt-1">{c.caseNumber} &middot; {c.court}</p>
                    </div>
                    {c.nextHearing && (
                      <div className="text-right shrink-0">
                        <p className="text-xs text-text-muted">Next Hearing</p>
                        <p className="text-sm text-accent font-medium">
                          {new Date(c.nextHearing).toLocaleDateString('en-IN', {
                            year: 'numeric',
                            month: 'short',
                            day: 'numeric',
                          })}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </Section>
    </>
  );
}

function StatCard({ label, value, accent }: { readonly label: string; readonly value: string; readonly accent?: boolean }) {
  return (
    <div className="rounded-sm border border-border bg-bg-card p-5">
      <p className="text-xs text-text-muted mb-1">{label}</p>
      <p className={`font-serif text-2xl ${accent ? 'text-accent' : 'text-text-primary'}`}>{value}</p>
    </div>
  );
}
