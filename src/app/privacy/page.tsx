import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy | PureRend',
  description: 'How PureRend collects, uses, and protects your personal information under UK GDPR.',
};

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-zinc-50 pt-32 pb-16 px-6">
      <div className="max-w-3xl mx-auto bg-white p-4 md:p-8 md:p-12 rounded-3xl shadow-sm border border-zinc-100">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-teal-50 border border-teal-100 mb-6">
          <span className="text-xs font-semibold tracking-widest text-teal-800 uppercase">Legal</span>
        </div>

        <h1 className="text-4xl font-bold font-headline text-zinc-900 mb-8">Privacy Policy</h1>

        <div className="prose prose-zinc prose-a:text-blue-700 max-w-none space-y-8">
          <p className="text-sm text-zinc-500">Last updated: April 2026</p>

          <section>
            <h2 className="text-2xl font-bold font-headline text-zinc-900 mt-8 mb-4">Who we are</h2>
            <p>
              PureRend is a plastering and rendering business operated by Ben Rod, based in Bude, Cornwall. Our registered address is 64 High Street, Bideford, Devon, EX39 2AR.
            </p>
            <p>
              When we refer to &ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo; in this policy, we mean PureRend. When we refer to &ldquo;you&rdquo; or &ldquo;your&rdquo;, we mean any person whose personal data we process.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold font-headline text-zinc-900 mt-8 mb-4">What data we collect</h2>
            <p>We may collect the following information when you contact us or use our website:</p>
            <ul className="list-disc pl-6 space-y-2 mt-4 text-zinc-600">
              <li>Your name</li>
              <li>Email address</li>
              <li>Phone number</li>
              <li>Property address (for quoting purposes)</li>
              <li>Details of the work you require</li>
              <li>Photos you send us of work needed</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold font-headline text-zinc-900 mt-8 mb-4">How we use your data</h2>
            <p>We use the information you provide to:</p>
            <ul className="list-disc pl-6 space-y-2 mt-4 text-zinc-600">
              <li>Respond to your enquiry and provide a quote</li>
              <li>Arrange and carry out work at your property</li>
              <li>Send you relevant information about your job (e.g. scheduling updates)</li>
              <li>Comply with legal obligations</li>
            </ul>
            <p className="mt-4">
              We do not use your data for marketing purposes unless you have explicitly opted in. We do not sell, share, or pass your data to any third parties for their marketing purposes.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold font-headline text-zinc-900 mt-8 mb-4">Legal basis for processing</h2>
            <p>We process your personal data on the following lawful bases under UK GDPR:</p>
            <ul className="list-disc pl-6 space-y-2 mt-4 text-zinc-600">
              <li><strong>Consent</strong> — when you voluntarily submit your details via our contact form or WhatsApp</li>
              <li><strong>Contractual necessity</strong> — when we need your data to fulfil a job or provide a quote</li>
              <li><strong>Legitimate interest</strong> — for running our business and responding to enquiries</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold font-headline text-zinc-900 mt-8 mb-4">Cookies</h2>
            <p>
              Our website uses only essential cookies required for the site to function. We do not use tracking cookies, advertising cookies, or any third-party analytics that track individual users. If this changes, we will update this policy and our cookie banner.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold font-headline text-zinc-900 mt-8 mb-4">How long we keep your data</h2>
            <p>
              We keep your contact details and job information for up to 6 years after the completion of any work, in line with HMRC requirements for business records and to support any warranty claims. If you enquire but do not proceed with work, we delete your data within 12 months.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold font-headline text-zinc-900 mt-8 mb-4">Your rights</h2>
            <p>
              Under UK GDPR, you have the right to access, rectify, erase, restrict, or port your data. You also have the right to object to processing. For full details, see our <a href="/your-rights">Your Data Rights</a> page.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold font-headline text-zinc-900 mt-8 mb-4">Contact us</h2>
            <p>If you have any questions about this privacy policy or wish to exercise your data rights, contact us at:</p>
            <ul className="list-disc pl-6 space-y-2 mt-4 text-zinc-600">
              <li>Email: <a href="mailto:b.rplasteringsw@gmail.com">b.rplasteringsw@gmail.com</a></li>
              <li>Phone: 07469 931 758</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold font-headline text-zinc-900 mt-8 mb-4">Complaints</h2>
            <p>
              If you are not satisfied with our response, you have the right to lodge a complaint with the Information Commissioner&apos;s Office (ICO) at <a href="https://ico.org.uk" target="_blank" rel="noopener noreferrer">ico.org.uk</a>.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
