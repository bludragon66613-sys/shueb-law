/**
 * IEA to BSA Section Mapping
 * Based on the Bharatiya Sakshya Adhiniyam 2023 which replaced the Indian Evidence Act 1872
 * Effective from July 1, 2024
 *
 * This is a curated subset of the most commonly referenced sections.
 * The full IEA had 167 sections; BSA has 170 sections.
 */

import type { LegalMapping } from '@/components/tools/legal-converter';

export const BSA_MAPPINGS: readonly LegalMapping[] = [
  // Definitions and Preliminary
  { oldSection: '3', oldTitle: 'Interpretation clause', newSection: '2', newTitle: 'Definitions', notes: 'Updated terminology. "Document" now explicitly includes electronic and digital records.' },

  // Relevancy of Facts
  { oldSection: '5', oldTitle: 'Evidence may be given of facts in issue and relevant facts', newSection: '4', newTitle: 'Evidence may be given of facts in issue and relevant facts', notes: 'Substantially similar.' },
  { oldSection: '6', oldTitle: 'Relevancy of facts forming part of same transaction (Res Gestae)', newSection: '5', newTitle: 'Relevancy of facts forming part of same transaction', notes: 'Substantially similar. Res gestae principle retained.' },
  { oldSection: '7', oldTitle: 'Facts which are occasion, cause, or effect of relevant facts', newSection: '6', newTitle: 'Facts which are occasion, cause, or effect of relevant facts', notes: 'Substantially similar.' },
  { oldSection: '8', oldTitle: 'Motive, preparation and previous or subsequent conduct', newSection: '7', newTitle: 'Motive, preparation and previous or subsequent conduct', notes: 'Substantially similar.' },
  { oldSection: '9', oldTitle: 'Facts necessary to explain or introduce relevant facts', newSection: '8', newTitle: 'Facts necessary to explain or introduce relevant facts', notes: 'Substantially similar.' },
  { oldSection: '11', oldTitle: 'When facts not otherwise relevant become relevant', newSection: '10', newTitle: 'When facts not otherwise relevant become relevant', notes: 'Substantially similar.' },
  { oldSection: '14', oldTitle: 'Facts showing existence of state of mind', newSection: '13', newTitle: 'Facts showing existence of state of mind', notes: 'Substantially similar.' },
  { oldSection: '15', oldTitle: 'Facts bearing on question whether act was accidental or intentional', newSection: '14', newTitle: 'Facts bearing on question whether act was accidental or intentional', notes: 'Substantially similar.' },

  // Admissions and Confessions
  { oldSection: '17', oldTitle: 'Admission defined', newSection: '16', newTitle: 'Admission defined', notes: 'Substantially similar.' },
  { oldSection: '18', oldTitle: 'Admission by party to proceeding', newSection: '17', newTitle: 'Admission by party to proceeding', notes: 'Substantially similar.' },
  { oldSection: '21', oldTitle: 'Proof of admissions against persons making them', newSection: '20', newTitle: 'Proof of admissions against persons making them', notes: 'Substantially similar.' },
  { oldSection: '24', oldTitle: 'Confession caused by inducement, threat or promise', newSection: '22', newTitle: 'Confession caused by inducement, threat or promise', notes: 'Substantially similar. Confession to be irrelevant if caused by inducement, threat, or promise.' },
  { oldSection: '25', oldTitle: 'Confession to police officer not to be proved', newSection: '23', newTitle: 'Confession to police officer not to be proved', notes: 'Substantially similar. Confessions to police officers remain inadmissible.' },
  { oldSection: '26', oldTitle: 'Confession by accused while in custody of police', newSection: '24', newTitle: 'Confession by accused while in custody of police', notes: 'Substantially similar. Exception for confessions made in presence of Magistrate retained.' },
  { oldSection: '27', oldTitle: 'How much of information received from accused may be proved (discovery)', newSection: '25', newTitle: 'How much of information received from accused may be proved', notes: 'Substantially similar. Discovery statements continue to be admissible to the extent of fact discovered.' },
  { oldSection: '30', oldTitle: 'Consideration of proved confession affecting person making it and co-accused', newSection: '28', newTitle: 'Confession affecting person making it and co-accused', notes: 'Substantially similar.' },

  // Statements by Persons Who Cannot Be Called as Witnesses
  { oldSection: '32', oldTitle: 'Cases in which statement of relevant fact by person who is dead or cannot be found is relevant (dying declaration)', newSection: '26', newTitle: 'Cases in which statement of relevant fact is relevant', notes: 'Substantially similar. Dying declarations remain admissible. Electronic statements now explicitly covered.' },
  { oldSection: '33', oldTitle: 'Relevancy of certain evidence for proving in subsequent proceeding', newSection: '27', newTitle: 'Relevancy of certain evidence in subsequent proceeding', notes: 'Substantially similar.' },

  // Statements Under Special Circumstances
  { oldSection: '34', oldTitle: 'Entries in books of account when relevant', newSection: '29', newTitle: 'Entries in books of account and electronic records when relevant', notes: 'Electronic records explicitly included alongside physical books of account.' },
  { oldSection: '35', oldTitle: 'Relevancy of entry in public record', newSection: '30', newTitle: 'Relevancy of entry in public record or electronic record', notes: 'Electronic public records now explicitly covered.' },

  // Expert Opinion
  { oldSection: '45', oldTitle: 'Opinions of experts', newSection: '39', newTitle: 'Opinions of experts', notes: 'Expanded to include electronic and digital evidence experts. Expert opinion on electronic form of evidence explicitly recognized.' },
  { oldSection: '46', oldTitle: 'Facts bearing upon opinions of experts', newSection: '40', newTitle: 'Facts bearing upon opinions of experts', notes: 'Substantially similar.' },
  { oldSection: '47', oldTitle: 'Opinion as to handwriting', newSection: '41', newTitle: 'Opinion as to handwriting, digital signature', notes: 'Digital signatures and electronic authentication expressly included.' },

  // Character
  { oldSection: '52', oldTitle: 'In civil cases character to prove conduct imputed is irrelevant', newSection: '46', newTitle: 'In civil cases character is irrelevant', notes: 'Substantially similar.' },
  { oldSection: '53', oldTitle: 'In criminal cases previous good character relevant', newSection: '47', newTitle: 'In criminal cases previous good character relevant', notes: 'Substantially similar.' },
  { oldSection: '54', oldTitle: 'Previous bad character not relevant except in reply', newSection: '48', newTitle: 'Previous bad character not relevant', notes: 'Substantially similar.' },
  { oldSection: '53A', oldTitle: 'Evidence of character or previous sexual experience in certain cases', newSection: '49', newTitle: 'Evidence of character or previous sexual experience not relevant', notes: 'Strengthened protection for victims. Character of prosecutrix not relevant in sexual offence trials.' },

  // Documentary Evidence
  { oldSection: '59', oldTitle: 'Proof of facts by oral evidence', newSection: '53', newTitle: 'Proof of facts by oral evidence', notes: 'Substantially similar.' },
  { oldSection: '61', oldTitle: 'Proof of contents of documents', newSection: '55', newTitle: 'Proof of contents of documents', notes: 'Substantially similar. Applies to electronic records.' },
  { oldSection: '62', oldTitle: 'Primary evidence', newSection: '57', newTitle: 'Primary evidence', notes: 'Primary evidence now includes electronic and digital records in their original form.' },
  { oldSection: '63', oldTitle: 'Secondary evidence', newSection: '58', newTitle: 'Secondary evidence', notes: 'Expanded: oral and written admissions, certified copies, and copies from electronic records all accepted as secondary evidence.' },
  { oldSection: '65', oldTitle: 'Cases in which secondary evidence may be given', newSection: '59', newTitle: 'Cases in which secondary evidence relating to documents may be given', notes: 'Substantially similar with electronic records provisions.' },
  { oldSection: '65A', oldTitle: 'Special provisions as to evidence relating to electronic record', newSection: '61', newTitle: 'Admissibility of electronic records', notes: 'Major simplification. Electronic records now on par with paper documents.' },
  { oldSection: '65B', oldTitle: 'Admissibility of electronic records', newSection: '63', newTitle: 'Admissibility of electronic records', notes: 'MAJOR CHANGE: Certificate requirement under 65B(4) simplified. Electronic evidence including emails, server logs, digital photos, CCTV footage directly admissible with certificate of authenticity.' },
  { oldSection: '67', oldTitle: 'Proof of signature and handwriting of person alleged to have signed', newSection: '65', newTitle: 'Proof of signature and handwriting', notes: 'Substantially similar.' },
  { oldSection: '67A', oldTitle: 'Proof as to electronic signature', newSection: '66', newTitle: 'Proof as to electronic signature', notes: 'Substantially similar.' },
  { oldSection: '73', oldTitle: 'Comparison of signature, writing or seal with admitted or proved ones', newSection: '71', newTitle: 'Comparison of signature, writing or seal', notes: 'Substantially similar.' },

  // Presumptions
  { oldSection: '79', oldTitle: 'Presumption as to genuineness of certified copies', newSection: '77', newTitle: 'Presumption as to genuineness of certified copies', notes: 'Substantially similar.' },
  { oldSection: '81', oldTitle: 'Presumption as to Gazettes, newspapers, etc.', newSection: '79', newTitle: 'Presumption as to Gazettes, newspapers, etc.', notes: 'Extended to electronic Gazettes and official digital publications.' },
  { oldSection: '81A', oldTitle: 'Presumption as to electronic agreements', newSection: '80', newTitle: 'Presumption as to electronic agreements', notes: 'Substantially similar.' },
  { oldSection: '85A', oldTitle: 'Presumption as to electronic records', newSection: '83', newTitle: 'Presumption as to electronic records', notes: 'Substantially similar.' },
  { oldSection: '85B', oldTitle: 'Presumption as to electronic agreements', newSection: '84', newTitle: 'Presumption as to electronic agreements', notes: 'Substantially similar.' },
  { oldSection: '90', oldTitle: 'Presumption as to documents thirty years old', newSection: '88', newTitle: 'Presumption as to documents thirty years old', notes: 'Substantially similar.' },
  { oldSection: '114', oldTitle: 'Court may presume existence of certain facts', newSection: '112', newTitle: 'Court may presume existence of certain facts', notes: 'Updated with electronic records presumptions. Presumption that electronic messages were sent and received.' },

  // Burden of Proof
  { oldSection: '101', oldTitle: 'Burden of proof', newSection: '99', newTitle: 'Burden of proof', notes: 'Substantially similar. Party asserting a fact bears the burden.' },
  { oldSection: '102', oldTitle: 'On whom burden of proof lies', newSection: '100', newTitle: 'On whom burden of proof lies', notes: 'Substantially similar.' },
  { oldSection: '103', oldTitle: 'Burden of proof as to particular fact', newSection: '101', newTitle: 'Burden of proof as to particular fact', notes: 'Substantially similar.' },
  { oldSection: '104', oldTitle: 'Burden of proving fact to be proved to make evidence admissible', newSection: '102', newTitle: 'Burden of proving fact to make evidence admissible', notes: 'Substantially similar.' },
  { oldSection: '105', oldTitle: 'Burden of proving that case of accused comes within exceptions', newSection: '103', newTitle: 'Burden of proving exceptions', notes: 'Substantially similar.' },
  { oldSection: '106', oldTitle: 'Burden of proving fact especially within knowledge', newSection: '104', newTitle: 'Burden of proving fact especially within knowledge of person', notes: 'Substantially similar.' },

  // Estoppel
  { oldSection: '115', oldTitle: 'Estoppel', newSection: '113', newTitle: 'Estoppel', notes: 'Substantially similar.' },
  { oldSection: '116', oldTitle: 'Estoppel of tenant', newSection: '114', newTitle: 'Estoppel of tenant', notes: 'Substantially similar.' },
  { oldSection: '117', oldTitle: 'Estoppel of acceptor of bill of exchange', newSection: '115', newTitle: 'Estoppel of acceptor of bill of exchange', notes: 'Substantially similar.' },

  // Witnesses
  { oldSection: '118', oldTitle: 'Who may testify', newSection: '116', newTitle: 'Who may testify', notes: 'Substantially similar. Any person competent to understand questions may testify.' },
  { oldSection: '119', oldTitle: 'Dumb witnesses', newSection: '117', newTitle: 'Person unable to communicate verbally', notes: 'Updated language. Evidence may be given by writing or signs or through electronic means.' },
  { oldSection: '120', oldTitle: 'Parties to civil suit and their wives or husbands', newSection: '118', newTitle: 'Parties to civil suit and their spouses', notes: 'Gender-neutral language.' },
  { oldSection: '133', oldTitle: 'Accomplice', newSection: '130', newTitle: 'Accomplice', notes: 'Substantially similar. Accomplice is a competent witness.' },
  { oldSection: '134', oldTitle: 'Number of witnesses', newSection: '131', newTitle: 'Number of witnesses', notes: 'Substantially similar. No particular number of witnesses required.' },

  // Examination of Witnesses
  { oldSection: '135', oldTitle: 'Order of production and examination of witnesses', newSection: '132', newTitle: 'Order of production and examination', notes: 'Substantially similar.' },
  { oldSection: '137', oldTitle: 'Examination-in-chief, cross-examination, re-examination', newSection: '134', newTitle: 'Examination-in-chief, cross-examination, re-examination', notes: 'Substantially similar. Examination via audio-video electronic means permitted.' },
  { oldSection: '138', oldTitle: 'Order of examinations', newSection: '135', newTitle: 'Order of examinations', notes: 'Substantially similar.' },
  { oldSection: '145', oldTitle: 'Cross-examination as to previous statements in writing', newSection: '142', newTitle: 'Cross-examination as to previous statements in writing or electronic form', notes: 'Includes statements in electronic form.' },

  // Privileged Communications
  { oldSection: '122', oldTitle: 'Communications during marriage', newSection: '119', newTitle: 'Communications during marriage', notes: 'Substantially similar. Marital privilege retained.' },
  { oldSection: '126', oldTitle: 'Professional communications (legal privilege)', newSection: '123', newTitle: 'Professional communications', notes: 'Substantially similar. Attorney-client privilege retained. Extended to communications via electronic means.' },
  { oldSection: '129', oldTitle: 'Confidential communications with legal advisers', newSection: '126', newTitle: 'Confidential communications with legal advisers', notes: 'Substantially similar.' },
  { oldSection: '130', oldTitle: 'Production of title deeds of witness not a party', newSection: '127', newTitle: 'Production of title deeds', notes: 'Substantially similar.' },

  // New BSA Provisions
  { oldSection: 'N/A', oldTitle: 'No equivalent in IEA', newSection: '62', newTitle: 'Admissibility of electronic or digital record', notes: 'NEW: Comprehensive provision for admissibility of electronic evidence including emails, server logs, documents on computers, smartphones, locational evidence, and voice mail messages.' },
  { oldSection: 'N/A', oldTitle: 'No equivalent in IEA', newSection: '170', newTitle: 'Oral evidence by electronic means', notes: 'NEW: Formal provision allowing testimony through audio-video electronic means. Witness may depose from any location with court permission.' },
] as const;

export function searchBsaMappings(query: string): readonly LegalMapping[] {
  const q = query.toLowerCase().trim();
  if (!q) return [];

  return BSA_MAPPINGS.filter((m) => {
    const searchable = `${m.oldSection} ${m.oldTitle} ${m.newSection} ${m.newTitle} ${m.notes}`.toLowerCase();
    return searchable.includes(q);
  });
}
