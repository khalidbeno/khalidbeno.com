import type { Locale } from '@/config/locales';
import { profile } from '@/content/profile';
import { interfaceCopy } from '@/content/interface';
import { Tag } from '@/components/ui/tag';
export function Disciplines({
  locale,
  tiles = false,
}: {
  locale: Locale;
  tiles?: boolean;
}) {
  return (
    <div className={tiles ? 'discipline-tiles' : 'disciplines'}>
      <div
        className="discipline-group"
        role="group"
        aria-label={interfaceCopy[locale].primary}
      >
        {profile.disciplines
          .filter((item) => item.primary)
          .map((item) => (
            <Tag key={item.label} icon={item.icon}>
              {item.label}
            </Tag>
          ))}
      </div>
      <div
        className="discipline-group discipline-complementary"
        role="group"
        aria-label={interfaceCopy[locale].complementary}
      >
        {profile.disciplines
          .filter((item) => !item.primary)
          .map((item) => (
            <Tag key={item.label} icon={item.icon} subtle>
              {item.label}
            </Tag>
          ))}
      </div>
    </div>
  );
}
