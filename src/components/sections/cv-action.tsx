import type { Locale } from '@/config/locales';
import { profile } from '@/content/profile';
import { interfaceCopy } from '@/content/interface';
import { ButtonLink, UnavailableButton } from '@/components/ui/button';
export function CVAction({
  locale,
  id = 'cv-status',
  primary = false,
}: {
  locale: Locale;
  id?: string;
  primary?: boolean;
}) {
  const copy = interfaceCopy[locale];
  return (
    <div className="cv-action">
      {profile.cv ? (
        <ButtonLink
          href={profile.cv}
          download
          icon="download"
          variant={primary ? 'primary' : 'secondary'}
        >
          {copy.cv}
        </ButtonLink>
      ) : (
        <>
          <UnavailableButton
            descriptionId={id}
            variant={primary ? 'primary' : 'secondary'}
          >
            {copy.cv}
          </UnavailableButton>
          <span id={id} className="action-note">
            {copy.cvPending}
          </span>
        </>
      )}
    </div>
  );
}
