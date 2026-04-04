import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Accessibility Statement | PureRend',
  description: 'Our commitment to digital accessibility for all users.',
};

export default function AccessibilityPage() {
  return (
    <main className="min-h-screen bg-zinc-50 pt-32 pb-16 px-6">
      <div className="max-w-3xl mx-auto bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-zinc-100">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-teal-50 border border-teal-100 mb-6">
          <span className="text-xs font-semibold tracking-widest text-teal-800 uppercase">Accessibility</span>
        </div>
        
        <h1 className="text-4xl font-bold font-headline text-zinc-900 mb-8">Accessibility Statement</h1>
        
        <div className="prose prose-zinc prose-a:text-blue-700 max-w-none">
          <p>
            PureRend is committed to ensuring digital accessibility for people with disabilities. We are continually improving the user experience for everyone and applying the relevant accessibility standards.
          </p>

          <h2 className="text-2xl font-bold font-headline text-zinc-900 mt-8 mb-4">Conformance Status</h2>
          <p>
            The Web Content Accessibility Guidelines (WCAG) defines requirements for designers and developers to improve accessibility for people with disabilities. It defines three levels of conformance: Level A, Level AA, and Level AAA. PureRend aims to be fully conformant with WCAG 2.1 level AA.
          </p>

          <h2 className="text-2xl font-bold font-headline text-zinc-900 mt-8 mb-4">Feedback</h2>
          <p>
            We welcome your feedback on the accessibility of the PureRend website. Please let us know if you encounter accessibility barriers on our site:
          </p>
          <ul className="list-disc pl-6 space-y-2 mt-4 text-zinc-600">
            <li>Phone: 07469 931 758</li>
            <li>E-mail: b.rplasteringsw@gmail.com</li>
          </ul>

          <h2 className="text-2xl font-bold font-headline text-zinc-900 mt-8 mb-4">Technical Specifications</h2>
          <p>
            Accessibility of this website relies on the following technologies to work with the particular combination of web browser and any assistive technologies or plugins installed on your computer:
          </p>
          <ul className="list-disc pl-6 space-y-2 mt-4 text-zinc-600">
            <li>HTML</li>
            <li>WAI-ARIA</li>
            <li>CSS</li>
            <li>JavaScript</li>
          </ul>
        </div>
      </div>
    </main>
  );
}
