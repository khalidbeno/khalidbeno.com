import Image from 'next/image';
import { Icon, type IconName } from '@/components/ui/icon';
export function Asset({
  src,
  alt,
  label,
  icon = 'document',
  portrait = false,
  priority = false,
}: {
  src?: string | null;
  alt: string;
  label: string;
  icon?: IconName;
  portrait?: boolean;
  priority?: boolean;
}) {
  return (
    <div className={`asset${portrait ? ' asset--portrait' : ''}`}>
      {src ? (
        <Image
          src={src}
          alt={alt}
          fill
          sizes={
            portrait
              ? '(max-width: 800px) 90vw, 45vw'
              : '(max-width: 640px) 90vw, 240px'
          }
          priority={priority}
          className="asset-image"
        />
      ) : (
        <>
          {portrait ? (
            <svg
              className="portrait-placeholder"
              viewBox="0 0 500 620"
              fill="none"
              aria-hidden="true"
            >
              <circle
                cx="250"
                cy="213"
                r="90"
                fill="currentColor"
                opacity=".15"
              />
              <path
                d="M80 590v-68c0-107 76-166 170-166s170 59 170 166v68"
                fill="currentColor"
                opacity=".12"
              />
              <circle
                cx="250"
                cy="213"
                r="108"
                stroke="currentColor"
                opacity=".12"
              />
              <path
                d="M30 605h440M44 40h44M44 40v44M456 40h-44M456 40v44"
                stroke="currentColor"
                opacity=".22"
              />
            </svg>
          ) : (
            <Icon name={icon} />
          )}
          <span className="asset-label">{label}</span>
        </>
      )}
    </div>
  );
}
