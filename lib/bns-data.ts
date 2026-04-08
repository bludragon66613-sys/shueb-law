/**
 * IPC to BNS Section Mapping
 * Based on the Bharatiya Nyaya Sanhita 2023 which replaced the Indian Penal Code 1860
 * Effective from July 1, 2024
 *
 * This is a curated subset of the most commonly referenced sections.
 * The full IPC had 511 sections; BNS has 358 sections.
 */

export interface BnsMapping {
  readonly ipcSection: string;
  readonly ipcTitle: string;
  readonly bnsSection: string;
  readonly bnsTitle: string;
  readonly notes: string;
}

export const BNS_MAPPINGS: readonly BnsMapping[] = [
  // General Exceptions & Definitions
  { ipcSection: '34', ipcTitle: 'Acts done by several persons in furtherance of common intention', bnsSection: '3(5)', bnsTitle: 'Common intention', notes: 'Moved from substantive section to definition clause.' },
  { ipcSection: '76', ipcTitle: 'Act done by a person bound or justified by law', bnsSection: '14', bnsTitle: 'Act done by a person bound by law', notes: 'Substantially similar.' },
  { ipcSection: '80', ipcTitle: 'Accident in doing a lawful act', bnsSection: '18', bnsTitle: 'Accident in doing a lawful act', notes: 'No change in substance.' },
  { ipcSection: '84', ipcTitle: 'Act of a person of unsound mind', bnsSection: '22', bnsTitle: 'Act of a person of unsound mind', notes: 'No change in substance.' },
  { ipcSection: '96', ipcTitle: 'Things done in private defence', bnsSection: '34', bnsTitle: 'Right of private defence', notes: 'Substantially similar with updated language.' },
  { ipcSection: '100', ipcTitle: 'When right of private defence extends to causing death', bnsSection: '37', bnsTitle: 'When right of private defence of body extends to causing death', notes: 'Substantially similar.' },
  { ipcSection: '107', ipcTitle: 'Abetment of a thing', bnsSection: '45', bnsTitle: 'Abetment of a thing', notes: 'Substantially similar.' },

  // Offences Against the State
  { ipcSection: '120A', ipcTitle: 'Definition of criminal conspiracy', bnsSection: '61(1)', bnsTitle: 'Criminal conspiracy', notes: 'Consolidated with 120B into single section.' },
  { ipcSection: '120B', ipcTitle: 'Punishment of criminal conspiracy', bnsSection: '61(2)', bnsTitle: 'Punishment of criminal conspiracy', notes: 'Merged with 120A.' },
  { ipcSection: '121', ipcTitle: 'Waging or attempting to wage war against Government of India', bnsSection: '147', bnsTitle: 'Waging war against Government of India', notes: 'Substantially similar.' },
  { ipcSection: '124A', ipcTitle: 'Sedition', bnsSection: '152', bnsTitle: 'Acts endangering sovereignty, unity and integrity of India', notes: 'Major change: "sedition" replaced with broader formulation. Removes colonial-era terminology.' },

  // Offences Against Public Tranquility
  { ipcSection: '141', ipcTitle: 'Unlawful assembly', bnsSection: '189', bnsTitle: 'Unlawful assembly', notes: 'Substantially similar.' },
  { ipcSection: '147', ipcTitle: 'Punishment for rioting', bnsSection: '191', bnsTitle: 'Rioting', notes: 'Substantially similar.' },
  { ipcSection: '153A', ipcTitle: 'Promoting enmity between different groups', bnsSection: '196', bnsTitle: 'Promoting enmity between different groups', notes: 'Substantially similar with updated language.' },

  // Offences Against Human Body — Murder & Culpable Homicide
  { ipcSection: '299', ipcTitle: 'Culpable homicide', bnsSection: '100', bnsTitle: 'Culpable homicide', notes: 'No change in substance.' },
  { ipcSection: '300', ipcTitle: 'Murder', bnsSection: '101', bnsTitle: 'Murder', notes: 'No change in substance.' },
  { ipcSection: '302', ipcTitle: 'Punishment for murder', bnsSection: '103(1)', bnsTitle: 'Punishment for murder', notes: 'Death or life imprisonment + fine. Mob lynching added as 103(2).' },
  { ipcSection: '304', ipcTitle: 'Punishment for culpable homicide not amounting to murder', bnsSection: '105', bnsTitle: 'Punishment for culpable homicide not amounting to murder', notes: 'Substantially similar.' },
  { ipcSection: '304A', ipcTitle: 'Causing death by negligence', bnsSection: '106', bnsTitle: 'Causing death by negligence', notes: 'Enhanced punishment for hit-and-run cases under 106(2).' },
  { ipcSection: '304B', ipcTitle: 'Dowry death', bnsSection: '80', bnsTitle: 'Dowry death', notes: 'Moved to chapter on offences against women. Substance unchanged.' },
  { ipcSection: '306', ipcTitle: 'Abetment of suicide', bnsSection: '108', bnsTitle: 'Abetment of suicide', notes: 'Substantially similar.' },

  // Hurt & Grievous Hurt
  { ipcSection: '319', ipcTitle: 'Hurt', bnsSection: '114', bnsTitle: 'Hurt', notes: 'No change in substance.' },
  { ipcSection: '320', ipcTitle: 'Grievous hurt', bnsSection: '114(1)', bnsTitle: 'Grievous hurt', notes: 'Consolidated into single section with hurt.' },
  { ipcSection: '323', ipcTitle: 'Punishment for voluntarily causing hurt', bnsSection: '115(1)', bnsTitle: 'Voluntarily causing hurt', notes: 'Substantially similar.' },
  { ipcSection: '325', ipcTitle: 'Punishment for voluntarily causing grievous hurt', bnsSection: '115(2)', bnsTitle: 'Voluntarily causing grievous hurt', notes: 'Consolidated with 323.' },
  { ipcSection: '326', ipcTitle: 'Voluntarily causing grievous hurt by dangerous weapons', bnsSection: '118(1)', bnsTitle: 'Grievous hurt by dangerous weapons or means', notes: 'Substantially similar.' },

  // Kidnapping & Abduction
  { ipcSection: '359', ipcTitle: 'Kidnapping', bnsSection: '135', bnsTitle: 'Kidnapping', notes: 'Substantially similar.' },
  { ipcSection: '363', ipcTitle: 'Punishment for kidnapping', bnsSection: '137', bnsTitle: 'Kidnapping from lawful guardianship', notes: 'Substantially similar.' },
  { ipcSection: '364', ipcTitle: 'Kidnapping for ransom', bnsSection: '138', bnsTitle: 'Kidnapping for ransom etc.', notes: 'Substantially similar.' },

  // Sexual Offences
  { ipcSection: '354', ipcTitle: 'Assault or criminal force to woman with intent to outrage modesty', bnsSection: '74', bnsTitle: 'Assault or use of criminal force to woman with intent to outrage her modesty', notes: 'Moved to chapter on offences against women.' },
  { ipcSection: '354A', ipcTitle: 'Sexual harassment', bnsSection: '75', bnsTitle: 'Sexual harassment', notes: 'Substantially similar.' },
  { ipcSection: '354B', ipcTitle: 'Assault or use of criminal force with intent to disrobe', bnsSection: '76', bnsTitle: 'Assault or use of criminal force to woman with intent to disrobe', notes: 'Substantially similar.' },
  { ipcSection: '354D', ipcTitle: 'Stalking', bnsSection: '78', bnsTitle: 'Stalking', notes: 'Substantially similar.' },
  { ipcSection: '375', ipcTitle: 'Rape', bnsSection: '63', bnsTitle: 'Rape', notes: 'Moved to chapter on offences against women. Substance largely similar.' },
  { ipcSection: '376', ipcTitle: 'Punishment for rape', bnsSection: '64', bnsTitle: 'Punishment for rape', notes: 'Enhanced minimum punishment. Gang rape under Section 70.' },

  // Theft, Robbery, Dacoity
  { ipcSection: '378', ipcTitle: 'Theft', bnsSection: '303', bnsTitle: 'Theft', notes: 'No change in substance.' },
  { ipcSection: '379', ipcTitle: 'Punishment for theft', bnsSection: '303(2)', bnsTitle: 'Punishment for theft', notes: 'Consolidated into single section.' },
  { ipcSection: '380', ipcTitle: 'Theft in dwelling house', bnsSection: '305(a)', bnsTitle: 'Theft in dwelling house', notes: 'Substantially similar.' },
  { ipcSection: '384', ipcTitle: 'Punishment for extortion', bnsSection: '308', bnsTitle: 'Extortion', notes: 'Substantially similar.' },
  { ipcSection: '390', ipcTitle: 'Robbery', bnsSection: '309', bnsTitle: 'Robbery', notes: 'Substantially similar with consolidated structure.' },
  { ipcSection: '392', ipcTitle: 'Punishment for robbery', bnsSection: '309(2)', bnsTitle: 'Punishment for robbery', notes: 'Consolidated into single section.' },
  { ipcSection: '395', ipcTitle: 'Punishment for dacoity', bnsSection: '310(2)', bnsTitle: 'Dacoity', notes: 'Consolidated into single section.' },
  { ipcSection: '396', ipcTitle: 'Dacoity with murder', bnsSection: '310(3)', bnsTitle: 'Dacoity with murder', notes: 'Consolidated.' },

  // Criminal Breach of Trust & Cheating
  { ipcSection: '403', ipcTitle: 'Dishonest misappropriation of property', bnsSection: '314', bnsTitle: 'Dishonest misappropriation of property', notes: 'Substantially similar.' },
  { ipcSection: '405', ipcTitle: 'Criminal breach of trust', bnsSection: '316', bnsTitle: 'Criminal breach of trust', notes: 'Substantially similar.' },
  { ipcSection: '406', ipcTitle: 'Punishment for criminal breach of trust', bnsSection: '316(2)', bnsTitle: 'Punishment for criminal breach of trust', notes: 'Consolidated.' },
  { ipcSection: '415', ipcTitle: 'Cheating', bnsSection: '318', bnsTitle: 'Cheating', notes: 'Substantially similar.' },
  { ipcSection: '420', ipcTitle: 'Cheating and dishonestly inducing delivery of property', bnsSection: '318(4)', bnsTitle: 'Cheating and dishonestly inducing delivery of property', notes: 'Consolidated with enhanced structure.' },

  // Criminal Intimidation & Defamation
  { ipcSection: '499', ipcTitle: 'Defamation', bnsSection: '356', bnsTitle: 'Defamation', notes: 'Substantially similar.' },
  { ipcSection: '500', ipcTitle: 'Punishment for defamation', bnsSection: '356(2)', bnsTitle: 'Punishment for defamation', notes: 'Consolidated.' },
  { ipcSection: '503', ipcTitle: 'Criminal intimidation', bnsSection: '351', bnsTitle: 'Criminal intimidation', notes: 'Substantially similar.' },
  { ipcSection: '506', ipcTitle: 'Punishment for criminal intimidation', bnsSection: '351(2)-(3)', bnsTitle: 'Punishment for criminal intimidation', notes: 'Consolidated with graded punishment.' },
  { ipcSection: '509', ipcTitle: 'Word, gesture or act intended to insult the modesty of a woman', bnsSection: '79', bnsTitle: 'Word, gesture or act intended to insult the modesty of a woman', notes: 'Moved to chapter on offences against women.' },

  // Forgery & Document Offences
  { ipcSection: '463', ipcTitle: 'Forgery', bnsSection: '336', bnsTitle: 'Forgery', notes: 'Substantially similar.' },
  { ipcSection: '465', ipcTitle: 'Punishment for forgery', bnsSection: '336(2)', bnsTitle: 'Punishment for forgery', notes: 'Consolidated.' },
  { ipcSection: '468', ipcTitle: 'Forgery for purpose of cheating', bnsSection: '336(3)', bnsTitle: 'Forgery for purpose of cheating', notes: 'Consolidated.' },
  { ipcSection: '471', ipcTitle: 'Using as genuine a forged document', bnsSection: '338', bnsTitle: 'Using as genuine a forged document or forged electronic record', notes: 'Electronic records explicitly included.' },

  // Cruelty & Domestic Violence
  { ipcSection: '498A', ipcTitle: 'Husband or relative of husband subjecting woman to cruelty', bnsSection: '85', bnsTitle: 'Cruelty by husband or relatives of husband', notes: 'Moved to chapter on offences against women. Substance unchanged.' },

  // New BNS Offences (no IPC equivalent)
  { ipcSection: 'N/A', ipcTitle: 'No equivalent in IPC', bnsSection: '111', bnsTitle: 'Organised crime', notes: 'NEW: Covers organized crime syndicates, extortion rackets, land grabbing. Punishment up to life imprisonment or death.' },
  { ipcSection: 'N/A', ipcTitle: 'No equivalent in IPC', bnsSection: '112', bnsTitle: 'Petty organised crime', notes: 'NEW: Covers theft, snatching, pickpocketing, etc. by organized groups.' },
  { ipcSection: 'N/A', ipcTitle: 'No equivalent in IPC', bnsSection: '113', bnsTitle: 'Terrorist act', notes: 'NEW: Formal definition of terrorism in general criminal law. Previously only under UAPA.' },
  { ipcSection: 'N/A', ipcTitle: 'No equivalent in IPC', bnsSection: '103(2)', bnsTitle: 'Murder by mob lynching', notes: 'NEW: Specific provision for mob lynching — group of 5+ acting on grounds of race, caste, community, sex, language, personal belief.' },
] as const;

export function searchBnsMappings(query: string): readonly BnsMapping[] {
  const q = query.toLowerCase().trim();
  if (!q) return [];

  return BNS_MAPPINGS.filter((m) => {
    const searchable = `${m.ipcSection} ${m.ipcTitle} ${m.bnsSection} ${m.bnsTitle} ${m.notes}`.toLowerCase();
    return searchable.includes(q);
  });
}
