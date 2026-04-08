import type { Metadata } from 'next';
import { redirect, notFound } from 'next/navigation';
import { SITE } from '@/lib/constants';
import { getSession } from '@/lib/auth';
import { getCaseById, getStatusLabel, getStatusColor } from '@/lib/cases';
import { Section } from '@/components/ui/section';
import { Button } from '@/components/ui/button';
import { PortalHeader } from '../../portal-header';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  return {
    title: `Case ${id} | ${SITE.name}`,
  };
}

export default async function CaseDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const session = await getSession();
  if (!session) redirect('/portal/login');

  const { id } = await params;
  const legalCase = getCaseById(id, session.email);
  if (!legalCase) notFound();

  return (
    <>
      <PortalHeader name={session.name} />

      <Section className="pt-8">
        <Button href="/portal" variant="ghost" className="mb-6">
          &larr; Dashboard
        </Button>

        {/* Case header */}
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-8">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <span className={`text-xs px-2 py-0.5 rounded-sm border ${getStatusColor(legalCase.status)}`}>
                {getStatusLabel(legalCase.status)}
              </span>
              <span className="text-xs text-text-muted">{legalCase.practiceArea}</span>
            </div>
            <h1 className="font-serif text-2xl md:text-3xl text-text-primary mb-1">
              {legalCase.title}
            </h1>
            <p className="text-sm text-text-muted">
              {legalCase.caseNumber} &middot; {legalCase.court}
            </p>
          </div>
          {legalCase.nextHearing && (
            <div className="rounded-sm border border-accent/20 bg-accent-muted px-5 py-3 text-center shrink-0">
              <p className="text-xs text-accent mb-1">Next Hearing</p>
              <p className="font-serif text-xl text-accent">
                {new Date(legalCase.nextHearing).toLocaleDateString('en-IN', {
                  year: 'numeric',
                  month: 'short',
                  day: 'numeric',
                })}
              </p>
            </div>
          )}
        </div>

        <p className="text-text-secondary leading-relaxed mb-12">
          {legalCase.description}
        </p>

        {/* Two-column: Timeline + Documents */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Timeline */}
          <div className="lg:col-span-2">
            <p className="text-xs tracking-[0.3em] uppercase text-text-muted mb-4">Case Timeline</p>
            <div className="space-y-0">
              {legalCase.timeline.map((event, i) => (
                <div key={i} className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <div className={`h-3 w-3 rounded-full shrink-0 ${i === legalCase.timeline.length - 1 ? 'bg-accent' : 'bg-border'}`} />
                    {i < legalCase.timeline.length - 1 && (
                      <div className="w-px flex-1 bg-border" />
                    )}
                  </div>
                  <div className="pb-8">
                    <time className="text-xs text-text-muted">
                      {new Date(event.date).toLocaleDateString('en-IN', {
                        year: 'numeric',
                        month: 'short',
                        day: 'numeric',
                      })}
                    </time>
                    <h4 className="text-sm text-text-primary font-medium mt-1">{event.title}</h4>
                    <p className="text-xs text-text-secondary mt-1">{event.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Documents */}
          <div>
            <p className="text-xs tracking-[0.3em] uppercase text-text-muted mb-4">Documents</p>
            <div className="space-y-2">
              {legalCase.documents.map((doc, i) => (
                <div key={i} className="rounded-sm border border-border bg-bg-card p-4">
                  <p className="text-sm text-text-primary">{doc.name}</p>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="text-xs text-accent">{doc.type}</span>
                    <span className="text-xs text-text-muted">&middot;</span>
                    <time className="text-xs text-text-muted">
                      {new Date(doc.uploadedAt).toLocaleDateString('en-IN', {
                        month: 'short',
                        day: 'numeric',
                        year: 'numeric',
                      })}
                    </time>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
