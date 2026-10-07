import type { ReactNode } from 'react';
import { Icon, type IconName } from '@/components/ui/icon';
export function Tag({
  children,
  icon,
  subtle = false,
}: {
  children: ReactNode;
  icon?: IconName;
  subtle?: boolean;
}) {
  return (
    <span className={`tag${subtle ? ' tag--subtle' : ''}`}>
      {icon ? <Icon name={icon} /> : null}
      {children}
    </span>
  );
}
