import type { ReactNode } from 'react';
import { Icon, type IconName } from '@/components/ui/icon';
interface ActionProps {
  children: ReactNode;
  variant?: 'primary' | 'secondary';
  icon?: IconName;
}
export function ButtonLink({
  href,
  children,
  variant = 'primary',
  icon = 'arrow',
  download,
}: ActionProps & { href: string; download?: boolean }) {
  return (
    <a className={`button button--${variant}`} href={href} download={download}>
      {children}
      <Icon name={icon} />
    </a>
  );
}
export function UnavailableButton({
  children,
  variant = 'secondary',
  icon = 'download',
  descriptionId,
}: ActionProps & { descriptionId: string }) {
  return (
    <button
      className={`button button--${variant}`}
      type="button"
      disabled
      aria-describedby={descriptionId}
    >
      {children}
      <Icon name={icon} />
    </button>
  );
}
