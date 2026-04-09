import type { Metadata } from 'next';
import { SITE } from '@/lib/constants';
import { Section } from '@/components/ui/section';
import { Button } from '@/components/ui/button';
import { AnimateOnScroll } from '@/components/ui/animate-on-scroll';

export const metadata: Metadata = {
  title: `About | ${SITE.name}`,
  description: `Learn about ${SITE.name} — credentials, practice philosophy, and approach to AI-powered legal counsel.`,
};

const QUOTES = [
  {
    text: 'Injustice anywhere is a threat to justice everywhere.',
    author: 'Martin Luther King Jr.',
  },
  {
    text: 'The law is reason, free from passion.',
    author: 'Aristotle',
  },
  {
    text: 'Where there is a right, there is a remedy.',
    author: 'Legal Maxim — Ubi jus ibi remedium',
  },
  {
    text: 'Justice delayed is justice denied.',
    author: 'William E. Gladstone',
  },
  {
    text: 'The life of the law has not been logic; it has been experience.',
    author: 'Oliver Wendell Holmes Jr.',
  },
  {
    text: 'The Constitution is not a mere lawyers\u2019 document, it is a vehicle of life, and its spirit is always the spirit of the age.',
    author: 'Nani Palkhivala',
  },
  {
    text: 'Law and order are the medicine of the body politic and when the body politic gets sick, medicine must be administered.',
    author: 'Dr. B.R. Ambedkar',
  },
  {
    text: 'It is better that ten guilty persons escape than that one innocent suffer.',
    author: 'William Blackstone',
  },
  {
    text: 'The safety of the people shall be the highest law.',
    author: 'Cicero — Salus populi suprema lex esto',
  },
  {
    text: 'There is no greater tyranny than that which is perpetrated under the shield of the law and in the name of justice.',
    author: 'Montesquieu',
  },
  {
    text: 'The law must be stable, but it must not stand still.',
    author: 'Roscoe Pound',
  },
  {
    text: 'An unjust law is itself a species of violence. Arrest for its breach is more so.',
    author: 'Mahatma Gandhi',
  },
  {
    text: 'Equal rights for all, special privileges for none.',
    author: 'Thomas Jefferson',
  },
  {
    text: 'The power of the Constitution lies in the will of the people to defend it.',
    author: 'Justice V.R. Krishna Iyer',
  },
  {
    text: 'The proper function of a judge is to do justice between the parties before him.',
    author: 'Lord Denning',
  },
  {
    text: 'Facts are stubborn things; and whatever may be our wishes, our inclinations, or the dictates of our passions, they cannot alter the state of facts and evidence.',
    author: 'John Adams',
  },
  {
    text: 'The law is not the private property of lawyers, nor is justice the exclusive province of judges and juries.',
    author: 'Fali S. Nariman',
  },
  {
    text: 'Liberty is not the power of doing what we like, but the right of being able to do what we ought.',
    author: 'Lord Acton',
  },
  {
    text: 'Nobody has a more sacred obligation to obey the law than those who make the law.',
    author: 'Sophocles',
  },
  {
    text: 'The judge is not to innovate at pleasure but to vindicate and free the common law from misrepresentation and abuse.',
    author: 'Sir Edward Coke',
  },
] as const;

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <Section className="pt-32">
        <AnimateOnScroll>
          <p className="text-xs tracking-[0.3em] uppercase text-text-muted mb-4">About</p>
          <h1 className="font-serif text-4xl md:text-5xl text-text-primary mb-3">
            {SITE.name}
          </h1>
          <p className="text-sm text-accent mb-8">
            {SITE.qualificationsLong}
          </p>
          <p className="text-lg text-text-secondary leading-relaxed max-w-2xl">
            {SITE.title} — combining deep legal expertise with cutting-edge AI technology to deliver exceptional results for every client.
          </p>
        </AnimateOnScroll>
      </Section>

      {/* Background & Credentials */}
      <Section className="bg-bg-secondary">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

          <AnimateOnScroll className="md:col-span-2 space-y-6">
            <h2 className="font-serif text-2xl text-text-primary">Background</h2>
            <p className="text-text-secondary leading-relaxed">
              Shueb Hussain is a practicing Advocate enrolled with the Bar Council of India, bringing an exceptionally rare combination of academic depth and courtroom experience to every engagement. With a practice spanning criminal law, civil litigation, corporate advisory, constitutional law, family matters, and technology law, he offers a truly multidisciplinary perspective that few practitioners can match.
            </p>
            <p className="text-text-secondary leading-relaxed">
              His academic foundation is equally formidable. A doctorate (Ph.D.) demonstrates his commitment to the deepest levels of legal scholarship. His LL.M. in Constitutional Law provides specialised mastery over the foundational framework of Indian governance — the rights, remedies, and structural principles that underpin every area of law. A Dual MBA in Management and Systems equips him with a business acumen that is indispensable in corporate and commercial matters, allowing him to advise clients not just on legal compliance but on strategic outcomes. His LL.B. and B.Com. in Computers complete a profile that bridges law, business, and technology in a way that is increasingly vital in the modern legal landscape.
            </p>
            <p className="text-text-secondary leading-relaxed">
              His practice stands at the forefront of legal technology adoption in India — leveraging AI-powered research tools, automated document analysis, and intelligent case management systems to deliver results that match the depth and speed of large institutional firms. This is not technology for its own sake; it is technology deployed in service of better legal outcomes.
            </p>
          </AnimateOnScroll>

          <AnimateOnScroll delay={200} className="space-y-8">
            <div>
              <p className="text-xs tracking-[0.3em] uppercase text-text-muted mb-3">Academic Credentials</p>
              <ul className="space-y-3 text-sm text-text-secondary">
                <li className="border-l-2 border-accent/30 pl-4">
                  <span className="text-text-primary font-medium">Ph.D.</span>
                  <span className="block text-xs text-text-muted mt-0.5">Doctoral Research</span>
                </li>
                <li className="border-l-2 border-accent/30 pl-4">
                  <span className="text-text-primary font-medium">LL.M. — Constitutional Law</span>
                  <span className="block text-xs text-text-muted mt-0.5">Master of Laws, specialisation in Constitutional Law</span>
                </li>
                <li className="border-l-2 border-accent/30 pl-4">
                  <span className="text-text-primary font-medium">Dual MBA — Management &amp; Systems</span>
                  <span className="block text-xs text-text-muted mt-0.5">Business strategy, operations, and systems management</span>
                </li>
                <li className="border-l-2 border-accent/30 pl-4">
                  <span className="text-text-primary font-medium">LL.B.</span>
                  <span className="block text-xs text-text-muted mt-0.5">Bachelor of Laws</span>
                </li>
                <li className="border-l-2 border-accent/30 pl-4">
                  <span className="text-text-primary font-medium">B.Com. — Computers</span>
                  <span className="block text-xs text-text-muted mt-0.5">Commerce with Computer Applications</span>
                </li>
              </ul>
            </div>
            <div>
              <p className="text-xs tracking-[0.3em] uppercase text-text-muted mb-3">Professional Standing</p>
              <ul className="space-y-3 text-sm text-text-secondary">
                <li className="border-l-2 border-accent/30 pl-4">Bar Council of India — Enrolled Advocate</li>
                <li className="border-l-2 border-accent/30 pl-4">Practice across Supreme Court, High Courts, and Tribunals</li>
                <li className="border-l-2 border-accent/30 pl-4">Telangana High Court — Regular Practitioner</li>
              </ul>
            </div>
            <div>
              <p className="text-xs tracking-[0.3em] uppercase text-text-muted mb-3">Practice Areas</p>
              <ul className="space-y-3 text-sm text-text-secondary">
                <li className="border-l-2 border-border pl-4">Criminal Law</li>
                <li className="border-l-2 border-border pl-4">Civil Litigation</li>
                <li className="border-l-2 border-border pl-4">Corporate &amp; Commercial</li>
                <li className="border-l-2 border-border pl-4">Constitutional Law</li>
                <li className="border-l-2 border-border pl-4">Family &amp; Matrimonial</li>
                <li className="border-l-2 border-border pl-4">Technology &amp; AI Law</li>
              </ul>
            </div>
          </AnimateOnScroll>

        </div>
      </Section>

      {/* The Advantage */}
      <Section>
        <AnimateOnScroll>
          <p className="text-xs tracking-[0.3em] uppercase text-text-muted mb-4">
            The Advantage
          </p>
          <h2 className="font-serif text-2xl md:text-3xl text-text-primary mb-8">
            Why Qualifications Matter
          </h2>
        </AnimateOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <AnimateOnScroll>
            <div className="rounded-sm border border-border bg-bg-card p-8 h-full card-border-reveal">
              <p className="font-serif text-lg text-text-primary mb-3">Constitutional Depth</p>
              <p className="text-sm text-text-secondary leading-relaxed">
                An LL.M. in Constitutional Law means your advocate doesn&apos;t just cite precedents — he understands the foundational principles behind them. When fundamental rights are at stake, this depth is the difference between a good argument and a winning one.
              </p>
            </div>
          </AnimateOnScroll>
          <AnimateOnScroll delay={100}>
            <div className="rounded-sm border border-border bg-bg-card p-8 h-full card-border-reveal">
              <p className="font-serif text-lg text-text-primary mb-3">Business Acumen</p>
              <p className="text-sm text-text-secondary leading-relaxed">
                A Dual MBA in Management and Systems means corporate clients receive counsel that understands P&amp;L statements, organisational structures, and operational risk — not just legal provisions. Legal advice that ignores commercial reality is advice that fails.
              </p>
            </div>
          </AnimateOnScroll>
          <AnimateOnScroll delay={200}>
            <div className="rounded-sm border border-border bg-bg-card p-8 h-full card-border-reveal">
              <p className="font-serif text-lg text-text-primary mb-3">Technology Fluency</p>
              <p className="text-sm text-text-secondary leading-relaxed">
                A B.Com. in Computers combined with AI-powered practice tools means this is not an advocate who outsources technology questions. Cybercrime, data protection, and digital commerce matters are handled with genuine technical understanding.
              </p>
            </div>
          </AnimateOnScroll>
        </div>
      </Section>

      {/* Philosophy */}
      <Section className="bg-bg-secondary">
        <AnimateOnScroll>
          <p className="text-xs tracking-[0.3em] uppercase text-text-muted mb-4">
            Philosophy
          </p>
          <h2 className="font-serif text-2xl md:text-3xl text-text-primary mb-8">
            Principles That Guide This Practice
          </h2>
        </AnimateOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <AnimateOnScroll>
            <div className="space-y-6">
              <div>
                <h3 className="font-serif text-xl text-text-primary mb-3">Access to Justice</h3>
                <p className="text-text-secondary leading-relaxed">
                  The law is fundamentally about access to justice. Technology should lower barriers, not raise them. Every AI tool in this practice exists to serve one purpose: ensuring that no argument goes unresearched, no deadline is missed, and no client feels like a number.
                </p>
              </div>
              <div>
                <h3 className="font-serif text-xl text-text-primary mb-3">Candour Over Comfort</h3>
                <p className="text-text-secondary leading-relaxed">
                  Clients deserve honest assessments, not reassuring fictions. If a case is weak, we say so — and we explain why, what the alternatives are, and what the realistic outcomes look like. Trust is built on truth, not on telling people what they want to hear.
                </p>
              </div>
              <div>
                <h3 className="font-serif text-xl text-text-primary mb-3">Preparation Wins Cases</h3>
                <p className="text-text-secondary leading-relaxed">
                  Courtroom theatrics are overrated. What wins cases is relentless preparation — knowing the law better, knowing the facts better, and anticipating every argument the other side will make before they make it. AI-powered research is our force multiplier, but the discipline of preparation is irreplaceable.
                </p>
              </div>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll delay={150}>
            <div className="space-y-6">
              <div>
                <h3 className="font-serif text-xl text-text-primary mb-3">Efficiency Is a Duty</h3>
                <p className="text-text-secondary leading-relaxed">
                  Legal matters drain time, money, and emotional energy. We have a professional obligation to resolve matters as efficiently as possible — through mediation when appropriate, through decisive litigation when necessary, and never through delay for its own sake.
                </p>
              </div>
              <div>
                <h3 className="font-serif text-xl text-text-primary mb-3">Confidentiality Is Absolute</h3>
                <p className="text-text-secondary leading-relaxed">
                  Every communication, every document, every detail of your matter is held in the strictest confidence. This is not just an ethical obligation — it is the foundation of the advocate-client relationship. Without absolute trust, effective representation is impossible.
                </p>
              </div>
              <div>
                <h3 className="font-serif text-xl text-text-primary mb-3">Continuous Learning</h3>
                <p className="text-text-secondary leading-relaxed">
                  The law evolves constantly — new statutes, new judgments, new technology, new challenges. A Ph.D. is not the end of scholarship; it is a commitment to the habit of deep inquiry. This practice stays current because its founder never stopped being a student.
                </p>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </Section>

      {/* Quotes */}
      <Section>
        <AnimateOnScroll>
          <p className="text-xs tracking-[0.3em] uppercase text-text-muted mb-4">
            Guiding Wisdom
          </p>
          <h2 className="font-serif text-2xl md:text-3xl text-text-primary mb-12">
            Words That Shape the Practice of Law
          </h2>
        </AnimateOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {QUOTES.map((quote, index) => (
            <AnimateOnScroll key={quote.author} delay={index * 100}>
              <div className="rounded-sm border border-border bg-bg-card p-8 h-full">
                <div
                  className="h-px w-8 mb-6"
                  style={{ backgroundColor: 'var(--color-accent)' }}
                />
                <blockquote className="font-serif text-lg text-text-primary leading-relaxed mb-4 italic">
                  &ldquo;{quote.text}&rdquo;
                </blockquote>
                <p className="text-sm text-accent">
                  — {quote.author}
                </p>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <Section className="bg-bg-secondary">
        <AnimateOnScroll className="text-center">
          <h2 className="font-serif text-3xl text-text-primary mb-4">
            Ready to discuss your matter?
          </h2>
          <p className="text-text-secondary mb-8 max-w-lg mx-auto">
            Schedule a consultation to understand how AI-powered legal counsel can make a difference in your case.
          </p>
          <Button href="/contact" size="lg">
            Book a Consultation
          </Button>
        </AnimateOnScroll>
      </Section>
    </>
  );
}
