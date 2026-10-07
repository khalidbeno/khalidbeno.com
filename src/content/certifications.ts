export type CertificationStatus = 'completed' | 'preparation' | 'planned';
export interface Certification {
  name: string;
  issuer: string;
  exam?: string;
  status: CertificationStatus;
  credentialUrl: string | null;
  source: 'docs/content/certifications.md';
}

export const certifications: readonly Certification[] = [
  {
    name: 'Google Cybersecurity',
    issuer: 'Google',
    status: 'completed',
    credentialUrl: null,
    source: 'docs/content/certifications.md',
  },
  {
    name: 'AWS Solutions Architect Associate',
    issuer: 'AWS',
    exam: 'SAA-C03',
    status: 'preparation',
    credentialUrl: null,
    source: 'docs/content/certifications.md',
  },
  {
    name: 'CompTIA Security+',
    issuer: 'CompTIA',
    exam: 'SY0-701',
    status: 'preparation',
    credentialUrl: null,
    source: 'docs/content/certifications.md',
  },
  {
    name: 'Terraform Associate',
    issuer: 'HashiCorp',
    status: 'planned',
    credentialUrl: null,
    source: 'docs/content/certifications.md',
  },
  {
    name: 'GitHub Advanced Security',
    issuer: 'GitHub',
    status: 'planned',
    credentialUrl: null,
    source: 'docs/content/certifications.md',
  },
  {
    name: 'CCNA',
    issuer: 'Cisco',
    status: 'planned',
    credentialUrl: null,
    source: 'docs/content/certifications.md',
  },
];
