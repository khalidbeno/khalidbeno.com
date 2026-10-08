import Image from 'next/image';
import { brandLogo } from '@/config/brand';

export function LogoMark() {
  return (
    <Image
      className="logo-mark"
      src={brandLogo.src}
      width={brandLogo.width}
      height={brandLogo.height}
      alt=""
      unoptimized
    />
  );
}
