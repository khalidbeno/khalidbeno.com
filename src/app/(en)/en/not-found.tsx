import { PageFrame } from '@/components/layout/page-frame';
import { PageHero } from '@/components/sections/page-hero';
import { ButtonLink } from '@/components/ui/button';
export default function NotFound() {
  return (
    <PageFrame locale="en" active="home">
      <PageHero
        eyebrow="404"
        title="This page is not available."
        description="The content may not have been published yet, or the address may have changed."
      />
      <ButtonLink href="/en">Back to home</ButtonLink>
    </PageFrame>
  );
}
