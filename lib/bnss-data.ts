/**
 * CrPC to BNSS Section Mapping
 * Based on the Bharatiya Nagarik Suraksha Sanhita 2023 which replaced the Code of Criminal Procedure 1973
 * Effective from July 1, 2024
 *
 * This is a curated subset of the most commonly referenced sections.
 * The full CrPC had 484 sections; BNSS has 531 sections.
 */

import type { LegalMapping } from '@/components/tools/legal-converter';

export const BNSS_MAPPINGS: readonly LegalMapping[] = [
  // FIR and Investigation
  { oldSection: '154', oldTitle: 'Information in cognizable cases (FIR)', newSection: '173', newTitle: 'Information in cognizable cases', notes: 'Electronic FIR filing now permitted. Information can be given by electronic communication.' },
  { oldSection: '155', oldTitle: 'Information as to non-cognizable cases', newSection: '174', newTitle: 'Information in non-cognizable cases', notes: 'Substantially similar.' },
  { oldSection: '156', oldTitle: 'Police officer\'s power to investigate cognizable cases', newSection: '175', newTitle: 'Police officer\'s power to investigate', notes: 'Substantially similar. Preliminary inquiry provisions clarified.' },
  { oldSection: '157', oldTitle: 'Procedure for investigation', newSection: '176', newTitle: 'Procedure for investigation', notes: 'Mandatory forensic investigation for offences punishable with 7+ years imprisonment.' },
  { oldSection: '161', oldTitle: 'Examination of witnesses by police', newSection: '180', newTitle: 'Examination of witnesses by police', notes: 'Audio-video recording of statements now permitted.' },
  { oldSection: '164', oldTitle: 'Recording of confessions and statements', newSection: '183', newTitle: 'Recording of confessions and statements', notes: 'Audio-video recording mandated for confessions. Statements of victims of sexual offences to be recorded by woman magistrate.' },
  { oldSection: '167', oldTitle: 'Procedure when investigation cannot be completed in 24 hours', newSection: '187', newTitle: 'Procedure when investigation cannot be completed in 24 hours', notes: 'Time-bound investigation: charge sheet within 90 days (life imprisonment offences) or 60 days (others), failing which default bail applies.' },
  { oldSection: '169', oldTitle: 'Release of accused when evidence is deficient', newSection: '189', newTitle: 'Release of accused when evidence is deficient', notes: 'Substantially similar.' },
  { oldSection: '170', oldTitle: 'Cases to be sent to Magistrate when evidence is sufficient', newSection: '190', newTitle: 'Cases to be sent to Magistrate', notes: 'Substantially similar.' },
  { oldSection: '173', oldTitle: 'Report of police officer on completion of investigation (Charge Sheet)', newSection: '193', newTitle: 'Report of police officer on completion of investigation', notes: 'Charge sheet must be filed electronically. Copies to be furnished to accused within 14 days.' },

  // Arrest and Detention
  { oldSection: '41', oldTitle: 'When police may arrest without warrant', newSection: '35', newTitle: 'When police may arrest without warrant', notes: 'Additional safeguards: arrest only if offence carries 3+ years punishment, and arrest is necessary to prevent absconding or evidence tampering.' },
  { oldSection: '41A', oldTitle: 'Notice of appearance before police officer', newSection: '35(3)', newTitle: 'Notice of appearance', notes: 'Integrated into main section. Notice before arrest for offences up to 7 years.' },
  { oldSection: '46', oldTitle: 'How arrest is made', newSection: '40', newTitle: 'How arrest is made', notes: 'Women cannot be arrested after sunset and before sunrise except in exceptional circumstances with written order of Magistrate.' },
  { oldSection: '50', oldTitle: 'Person arrested to be informed of grounds of arrest', newSection: '44', newTitle: 'Person arrested to be informed of grounds of arrest and right to bail', notes: 'Must inform accused of right to bail. Information of arrest must be displayed at police station and district headquarters.' },
  { oldSection: '55A', oldTitle: 'Health and safety of arrested person', newSection: '51', newTitle: 'Health and safety of arrested person', notes: 'Substantially similar.' },
  { oldSection: '57', oldTitle: 'Person arrested not to be detained more than 24 hours', newSection: '58', newTitle: 'Person arrested not to be detained more than 24 hours', notes: 'Substantially similar.' },

  // Bail Provisions
  { oldSection: '436', oldTitle: 'In what cases bail to be taken (bailable offences)', newSection: '478', newTitle: 'Bail in bailable offences', notes: 'Substantially similar. First-time offenders for offences up to 3 years entitled to bail.' },
  { oldSection: '437', oldTitle: 'When bail may be taken in non-bailable offences', newSection: '479', newTitle: 'Bail in non-bailable offences', notes: 'Added: woman or sick/infirm person can be released on bail unless charged with offences punishable by death or life imprisonment.' },
  { oldSection: '438', oldTitle: 'Direction for grant of bail to person apprehending arrest (anticipatory bail)', newSection: '482', newTitle: 'Direction for grant of bail to person apprehending arrest', notes: 'Anticipatory bail provisions retained. Interim bail can be granted pending final hearing.' },
  { oldSection: '439', oldTitle: 'Special powers of High Court or Court of Session regarding bail', newSection: '483', newTitle: 'Special powers of High Court or Court of Session regarding bail', notes: 'Substantially similar. Hearing on bail application must be concluded within 2 weeks if accused is in custody.' },
  { oldSection: '167(2)', oldTitle: 'Default bail on failure to file charge sheet', newSection: '187(3)', newTitle: 'Default bail', notes: 'Default bail if charge sheet not filed within 60/90 days. Right to apply within 30 days of expiry of detention period.' },
  { oldSection: '440', oldTitle: 'Amount of bond and reduction thereof', newSection: '484', newTitle: 'Amount of bond and reduction thereof', notes: 'Substantially similar.' },

  // Search and Seizure
  { oldSection: '91', oldTitle: 'Summons to produce document or other thing', newSection: '94', newTitle: 'Summons to produce document or thing', notes: 'Includes electronic records.' },
  { oldSection: '93', oldTitle: 'When search warrant may be issued', newSection: '96', newTitle: 'When search warrant may be issued', notes: 'Substantially similar.' },
  { oldSection: '100', oldTitle: 'Persons in charge of closed place to allow search', newSection: '103', newTitle: 'Persons in charge of closed place to allow search', notes: 'Search to be videographed mandatorily.' },
  { oldSection: '102', oldTitle: 'Power of police officer to seize certain property', newSection: '106', newTitle: 'Power of police officer to seize certain property', notes: 'Substantially similar with provisions for electronic records.' },

  // Summons and Warrants
  { oldSection: '61', oldTitle: 'Form of summons', newSection: '63', newTitle: 'Form of summons', notes: 'Summons may be issued in electronic form.' },
  { oldSection: '62', oldTitle: 'Summons how served', newSection: '64', newTitle: 'Summons how served', notes: 'Service through electronic means permitted.' },
  { oldSection: '70', oldTitle: 'Form of warrant of arrest', newSection: '72', newTitle: 'Form of warrant of arrest', notes: 'Substantially similar.' },
  { oldSection: '82', oldTitle: 'Proclamation for person absconding', newSection: '84', newTitle: 'Proclamation for person absconding', notes: 'Substantially similar.' },
  { oldSection: '83', oldTitle: 'Attachment of property of person absconding', newSection: '85', newTitle: 'Attachment of property of person absconding', notes: 'Substantially similar.' },

  // Magistrate Powers and Jurisdiction
  { oldSection: '190', oldTitle: 'Cognizance of offences by Magistrates', newSection: '210', newTitle: 'Cognizance of offences by Magistrates', notes: 'Substantially similar.' },
  { oldSection: '200', oldTitle: 'Examination of complainant', newSection: '223', newTitle: 'Examination of complainant', notes: 'Substantially similar. Examination via audio-video means permitted.' },
  { oldSection: '202', oldTitle: 'Postponement of issue of process', newSection: '225', newTitle: 'Postponement of issue of process', notes: 'Substantially similar.' },
  { oldSection: '204', oldTitle: 'Issue of process', newSection: '227', newTitle: 'Issue of process', notes: 'Substantially similar.' },

  // Charge and Trial
  { oldSection: '211', oldTitle: 'Contents of charge', newSection: '233', newTitle: 'Contents of charge', notes: 'Substantially similar.' },
  { oldSection: '225', oldTitle: 'Trial before Court of Session', newSection: '247', newTitle: 'Trial before Court of Session', notes: 'Substantially similar.' },
  { oldSection: '227', oldTitle: 'Discharge', newSection: '250', newTitle: 'Discharge', notes: 'Substantially similar.' },
  { oldSection: '228', oldTitle: 'Framing of charge', newSection: '251', newTitle: 'Framing of charge', notes: 'Charge to be framed within 60 days of first hearing.' },
  { oldSection: '232', oldTitle: 'Acquittal', newSection: '255', newTitle: 'Acquittal', notes: 'Substantially similar.' },
  { oldSection: '233', oldTitle: 'Entering upon defence', newSection: '256', newTitle: 'Defence evidence', notes: 'Substantially similar.' },
  { oldSection: '239', oldTitle: 'When accused shall be discharged (warrant cases)', newSection: '262', newTitle: 'Discharge in warrant cases', notes: 'Substantially similar.' },
  { oldSection: '245', oldTitle: 'When accused shall be acquitted (summons cases)', newSection: '268', newTitle: 'Acquittal in summons cases', notes: 'Substantially similar.' },
  { oldSection: '251', oldTitle: 'Substance of accusation to be stated (summons trial)', newSection: '274', newTitle: 'Substance of accusation', notes: 'Substantially similar.' },

  // Judgment and Sentencing
  { oldSection: '353', oldTitle: 'Judgment', newSection: '392', newTitle: 'Judgment', notes: 'Judgment to be delivered within 45 days of completion of arguments. Can be pronounced via electronic means.' },
  { oldSection: '354', oldTitle: 'Language and contents of judgment', newSection: '393', newTitle: 'Language and contents of judgment', notes: 'Substantially similar.' },
  { oldSection: '357', oldTitle: 'Order to pay compensation', newSection: '396', newTitle: 'Compensation to victims', notes: 'Enhanced victim compensation provisions. Mandatory compensation in certain offences.' },
  { oldSection: '360', oldTitle: 'Order to release on probation of good conduct', newSection: '399', newTitle: 'Release on probation', notes: 'Substantially similar with community service as additional option.' },
  { oldSection: '362', oldTitle: 'Court not to alter judgment', newSection: '401', newTitle: 'Court not to alter judgment', notes: 'Substantially similar.' },

  // Appeals, Revision and Reference
  { oldSection: '372', oldTitle: 'No appeal to lie unless otherwise provided', newSection: '411', newTitle: 'No appeal unless otherwise provided', notes: 'Substantially similar.' },
  { oldSection: '374', oldTitle: 'Appeals from convictions', newSection: '413', newTitle: 'Appeals from convictions', notes: 'Substantially similar.' },
  { oldSection: '378', oldTitle: 'Appeal in case of acquittal', newSection: '417', newTitle: 'Appeal against acquittal', notes: 'Substantially similar.' },
  { oldSection: '389', oldTitle: 'Suspension of sentence pending appeal', newSection: '428', newTitle: 'Suspension of sentence pending appeal', notes: 'Substantially similar.' },
  { oldSection: '397', oldTitle: 'Calling for records to examine correctness (revision)', newSection: '436', newTitle: 'Calling for records', notes: 'Substantially similar.' },
  { oldSection: '399', oldTitle: 'Sessions Judge\'s powers of revision', newSection: '438', newTitle: 'Sessions Judge\'s power of revision', notes: 'Substantially similar.' },
  { oldSection: '401', oldTitle: 'High Court\'s powers of revision', newSection: '442', newTitle: 'High Court\'s powers of revision', notes: 'Substantially similar.' },

  // Maintenance
  { oldSection: '125', oldTitle: 'Order for maintenance of wives, children and parents', newSection: '144', newTitle: 'Order for maintenance of wives, children and parents', notes: 'Enhanced maintenance provisions. Interim maintenance to be decided within 60 days. Proceedings to be completed within 9 months.' },
  { oldSection: '126', oldTitle: 'Procedure for maintenance orders', newSection: '145', newTitle: 'Procedure for maintenance', notes: 'Substantially similar.' },
  { oldSection: '127', oldTitle: 'Alteration in allowance', newSection: '146', newTitle: 'Alteration in allowance', notes: 'Substantially similar.' },
  { oldSection: '128', oldTitle: 'Enforcement of order of maintenance', newSection: '147', newTitle: 'Enforcement of order', notes: 'Substantially similar with enhanced enforcement mechanisms.' },

  // Inherent Powers and Special Provisions
  { oldSection: '482', oldTitle: 'Saving of inherent powers of High Court', newSection: '528', newTitle: 'Saving of inherent powers of High Court', notes: 'Substantially similar. Used for quashing FIRs and criminal proceedings.' },
  { oldSection: '468', oldTitle: 'Bar to taking cognizance after lapse of period of limitation', newSection: '512', newTitle: 'Limitation for taking cognizance', notes: 'Substantially similar.' },
  { oldSection: '311', oldTitle: 'Power to summon material witness or examine person present', newSection: '348', newTitle: 'Power to summon material witness', notes: 'Substantially similar.' },
  { oldSection: '313', oldTitle: 'Power to examine the accused', newSection: '351', newTitle: 'Examination of accused', notes: 'Substantially similar. Statement can be recorded via audio-video means.' },
  { oldSection: '319', oldTitle: 'Power to proceed against other persons appearing to be guilty', newSection: '358', newTitle: 'Power to proceed against other persons', notes: 'Substantially similar.' },

  // Plea Bargaining
  { oldSection: '265A', oldTitle: 'Application for plea bargaining', newSection: '290', newTitle: 'Application for plea bargaining', notes: 'Expanded scope: now available for offences punishable with up to 7 years (previously only compoundable offences).' },
  { oldSection: '265B', oldTitle: 'Guidelines for plea bargaining', newSection: '291', newTitle: 'Guidelines for plea bargaining', notes: 'Substantially similar with expanded scope.' },

  // New BNSS Provisions
  { oldSection: 'N/A', oldTitle: 'No equivalent in CrPC', newSection: '173(1)', newTitle: 'Zero FIR', notes: 'NEW: FIR can be registered at any police station regardless of jurisdiction. Must be transferred to appropriate station within 15 days.' },
  { oldSection: 'N/A', oldTitle: 'No equivalent in CrPC', newSection: '176(2)', newTitle: 'Mandatory forensic investigation', notes: 'NEW: Forensic experts must visit crime scene and collect evidence for offences punishable with 7+ years. Digital forensic evidence to be collected mandatorily.' },
  { oldSection: 'N/A', oldTitle: 'No equivalent in CrPC', newSection: '530', newTitle: 'Use of electronic communication', notes: 'NEW: All trials, inquiries and proceedings may be conducted via audio-video electronic means. Enables virtual courts.' },
  { oldSection: 'N/A', oldTitle: 'No equivalent in CrPC', newSection: '531', newTitle: 'Supply of police report and documents in electronic form', notes: 'NEW: All documents, reports, statements filed in electronic form. Digital case diary mandated.' },
  { oldSection: 'N/A', oldTitle: 'No equivalent in CrPC', newSection: '356', newTitle: 'Witness protection scheme', notes: 'NEW: Statutory recognition of witness protection measures. Court may take steps to protect identity and ensure safety of witnesses.' },
] as const;

export function searchBnssMappings(query: string): readonly LegalMapping[] {
  const q = query.toLowerCase().trim();
  if (!q) return [];

  return BNSS_MAPPINGS.filter((m) => {
    const searchable = `${m.oldSection} ${m.oldTitle} ${m.newSection} ${m.newTitle} ${m.notes}`.toLowerCase();
    return searchable.includes(q);
  });
}
