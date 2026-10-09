import Image from 'next/image';
import { Icon, type IconName } from '@/components/ui/icon';
export function Asset({
  src,
  alt,
  label,
  icon = 'document',
}: {
  src?: string | null;
  alt: string;
  label: string;
  icon?: IconName;
}) {
  return (
    <div className="asset">
      {src ? (
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(max-width: 640px) 90vw, 240px"
          className="asset-image"
        />
      ) : (
        <>
          <Icon name={icon} />
          <span className="asset-label">{label}</span>
        </>
      )}
    </div>
  );
}
