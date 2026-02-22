import type { Metadata } from 'next';
import PageIntro from '@/app/components/common/page-intro';
import ContactContent from '@/app/components/contact/ContactContent';

export const metadata: Metadata = {
  title: 'Contact Us | Apexiums School',
  description: 'Contact the Apexiums School admissions and administration office.',
};

export default function ContactPage() {
  return (
    <div>
      <PageIntro
        eyebrow="Contact Us"
        title="Get in touch with our school office"
        description="For admissions, class information, or student support, contact our office directly or use the form below."
      />
      <ContactContent />
    </div>
  );
}
