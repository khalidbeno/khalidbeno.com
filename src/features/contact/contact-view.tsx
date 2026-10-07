import type { Locale } from '@/config/locales';
import { contact } from '@/content/contact';
import { profile } from '@/content/profile';
import { interfaceCopy } from '@/content/interface';
import { PageFrame } from '@/components/layout/page-frame';
import { PageHero } from '@/components/sections/page-hero';
import { CityConnection } from '@/components/sections/city-connection';
import { CVAction } from '@/components/sections/cv-action';
import { Disciplines } from '@/components/sections/disciplines';
import { ButtonLink, UnavailableButton } from '@/components/ui/button';
import { Icon, type IconName } from '@/components/ui/icon';

const copy = {
  es: {
    title: 'Hablemos.',
    description:
      'Abierto a oportunidades en software, cloud, sistemas y seguridad.',
    introduction:
      'Experiencia profesional entre España e Irlanda. Interés en seguir construyendo, resolviendo problemas y aprendiendo.',
    interests: 'Intereses y oportunidades',
    interestsBody:
      'Soporte, sistemas y desarrollo como base. Software, cloud y ciberseguridad como dirección profesional.',
    message: 'Enviar un mensaje',
    status: 'Disponibilidad',
    country: 'Madrid · experiencia internacional',
    role: 'Oportunidades profesionales',
    focus: 'Software · Cloud & Systems · Cybersecurity',
  },
  en: {
    title: 'Let’s talk.',
    description:
      'Open to opportunities in software, cloud, systems and security.',
    introduction:
      'Professional experience between Spain and Ireland. Interested in continuing to build, solve problems and learn.',
    interests: 'Interests and opportunities',
    interestsBody:
      'Support, systems and development as a foundation. Software, cloud and cybersecurity as a professional direction.',
    message: 'Send a message',
    status: 'Availability',
    country: 'Madrid · international experience',
    role: 'Professional opportunities',
    focus: 'Software · Cloud & Systems · Cybersecurity',
  },
};

function ContactChannel({
  label,
  value,
  href,
  icon,
  locale,
}: {
  label: string;
  value: string | null;
  href: string | null;
  icon: IconName;
  locale: Locale;
}) {
  return (
    <div className="contact-channel">
      <span className="icon-tile">
        <Icon name={icon} />
      </span>
      <div>
        <span className="channel-label">{label}</span>
        {value && href ? (
          <a href={href}>{value}</a>
        ) : (
          <span className="channel-pending">
            {interfaceCopy[locale].pending}
          </span>
        )}
      </div>
    </div>
  );
}

export function ContactSection({
  locale,
  standalone = false,
}: {
  locale: Locale;
  standalone?: boolean;
}) {
  const ui = interfaceCopy[locale];
  return (
    <section
      tabIndex={-1}
      id="contact"
      aria-label={locale === 'es' ? 'Contacto' : 'Contact'}
      className={`portfolio-section page-contact `}
    >
      <PageHero
        headingLevel={standalone ? 1 : 2}
        eyebrow={locale === 'es' ? 'Contacto' : 'Contact'}
        title={copy[locale].title}
        description={copy[locale].description}
      />
      <p className="contact-introduction">{copy[locale].introduction}</p>
      <div className="contact-composition">
        <section className="contact-panel glass-card">
          <div className="contact-details">
            <h2>{profile.name}</h2>
            <p className="contact-location">{ui.location}</p>
            <div className="contact-channels">
              <ContactChannel
                label="Email"
                icon="mail"
                value={contact.email}
                href={contact.email ? `mailto:${contact.email}` : null}
                locale={locale}
              />
              <ContactChannel
                label="LinkedIn"
                icon="link"
                value={contact.linkedin}
                href={contact.linkedin}
                locale={locale}
              />
              <ContactChannel
                label={locale === 'es' ? 'Teléfono' : 'Phone'}
                icon="phone"
                value={contact.phone}
                href={
                  contact.phone
                    ? `tel:${contact.phone.replace(/\s/g, '')}`
                    : null
                }
                locale={locale}
              />
              <ContactChannel
                label="GitHub"
                icon="code"
                value={contact.github}
                href={contact.github}
                locale={locale}
              />
            </div>
            <div className="actions">
              <CVAction locale={locale} id="contact-cv-status" primary />
              {contact.email ? (
                <ButtonLink
                  href={`mailto:${contact.email}`}
                  variant="secondary"
                  icon="mail"
                >
                  {copy[locale].message}
                </ButtonLink>
              ) : (
                <UnavailableButton descriptionId="contact-status" icon="mail">
                  {copy[locale].message}
                </UnavailableButton>
              )}
            </div>
            <p id="contact-status" className="contact-status">
              {ui.contactPending}
            </p>
          </div>
          <div className="contact-interests">
            <h3>{copy[locale].interests}</h3>
            <p>{copy[locale].interestsBody}</p>
            <Disciplines locale={locale} />
          </div>
        </section>
        <CityConnection locale={locale} compact />
      </div>
      <section className="opportunity-section">
        <div>
          <p className="eyebrow">{copy[locale].status}</p>
          <h2>{ui.opportunities}.</h2>
          <p>{copy[locale].country}</p>
        </div>
        <div className="opportunity-card glass-card">
          <span className="availability-dot" aria-hidden="true" />
          <div>
            <h3>{copy[locale].role}</h3>
            <p>{copy[locale].focus}</p>
          </div>
        </div>
      </section>
    </section>
  );
}

export function ContactView({ locale }: { locale: Locale }) {
  return (
    <PageFrame locale={locale} active="contact">
      <ContactSection locale={locale} standalone />
    </PageFrame>
  );
}
