import { Icon, type IconName } from '@/components/ui/icon';
export function EmptyState({
  title,
  description,
  icon = 'document',
}: {
  title: string;
  description: string;
  icon?: IconName;
}) {
  return (
    <div className="empty-state glass-card">
      <span className="icon-tile">
        <Icon name={icon} />
      </span>
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
}
