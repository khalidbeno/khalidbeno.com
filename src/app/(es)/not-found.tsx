import { PageFrame } from '@/components/layout/page-frame';
import { PageHero } from '@/components/sections/page-hero';
import { ButtonLink } from '@/components/ui/button';
export default function NotFound() {
  return (
    <PageFrame locale="es" active="home">
      <PageHero
        eyebrow="404"
        title="Esta página no está disponible."
        description="Puede que el contenido todavía no se haya publicado o que la dirección haya cambiado."
      />
      <ButtonLink href="/">Volver al inicio</ButtonLink>
    </PageFrame>
  );
}
