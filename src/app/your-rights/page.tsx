import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Your Data Rights | PureRend',
  description: 'Learn about your rights regarding your personal data under UK GDPR.',
  alternates: { canonical: 'https://purerend.co.uk/your-rights' },
};

export default function YourRightsPage() {
  return (
    <main className="min-h-screen bg-zinc-50 pt-32 pb-16 px-6">
      <div className="max-w-3xl mx-auto bg-white p-4 md:p-8 md:p-12 rounded-3xl shadow-sm border border-zinc-100">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-teal-50 border border-teal-100 mb-6">
          <span className="text-xs font-semibold tracking-widest text-teal-800 uppercase">UK GDPR Compliance</span>
        </div>
        
        <h1 className="text-4xl font-bold font-headline text-zinc-900 mb-8">Your Data Rights</h1>
        
        <div className="prose prose-zinc prose-a:text-blue-700 max-w-none">
          <p>
            Under the UK General Data Protection Regulation (UK GDPR), you have specific rights regarding your personal data. PureRend honours these rights and is committed to transparency.
          </p>

          <h2 className="text-2xl font-bold font-headline text-zinc-900 mt-8 mb-4">Your 8 Fundamental Rights</h2>
          
          <div className="space-y-6 mt-6">
            <div className="bg-zinc-50 p-6 rounded-2xl border border-zinc-100">
              <h3 className="font-bold text-zinc-900 text-lg mb-2">1. The right to be informed</h3>
              <p className="text-sm text-zinc-600">You have the right to be informed about the collection and use of your personal data. We achieve this through our Privacy Policy and clear consent forms.</p>
            </div>
            
            <div className="bg-zinc-50 p-6 rounded-2xl border border-zinc-100">
              <h3 className="font-bold text-zinc-900 text-lg mb-2">2. The right of access</h3>
              <p className="text-sm text-zinc-600">You have the right to request access to your personal data that we hold.</p>
            </div>

            <div className="bg-zinc-50 p-6 rounded-2xl border border-zinc-100">
              <h3 className="font-bold text-zinc-900 text-lg mb-2">3. The right to rectification</h3>
              <p className="text-sm text-zinc-600">You have the right to have inaccurate personal data rectified or completed if it is incomplete.</p>
            </div>

            <div className="bg-zinc-50 p-6 rounded-2xl border border-zinc-100">
              <h3 className="font-bold text-zinc-900 text-lg mb-2">4. The right to erasure ('right to be forgotten')</h3>
              <p className="text-sm text-zinc-600">You have the right to request that we delete your personal data from our systems.</p>
            </div>

            <div className="bg-zinc-50 p-6 rounded-2xl border border-zinc-100">
              <h3 className="font-bold text-zinc-900 text-lg mb-2">5. The right to restrict processing</h3>
              <p className="text-sm text-zinc-600">You have the right to request the restriction or suppression of your personal data.</p>
            </div>

            <div className="bg-zinc-50 p-6 rounded-2xl border border-zinc-100">
              <h3 className="font-bold text-zinc-900 text-lg mb-2">6. The right to data portability</h3>
              <p className="text-sm text-zinc-600">You have the right to obtain and reuse your personal data for your own purposes across different services.</p>
            </div>

            <div className="bg-zinc-50 p-6 rounded-2xl border border-zinc-100">
              <h3 className="font-bold text-zinc-900 text-lg mb-2">7. The right to object</h3>
              <p className="text-sm text-zinc-600">You have the right to object to the processing of your personal data in certain circumstances.</p>
            </div>

            <div className="bg-zinc-50 p-6 rounded-2xl border border-zinc-100">
              <h3 className="font-bold text-zinc-900 text-lg mb-2">8. Rights regarding automated decision making</h3>
              <p className="text-sm text-zinc-600">You have the right not to be subject to a decision based solely on automated processing, including profiling.</p>
            </div>
          </div>

          <h2 className="text-2xl font-bold font-headline text-zinc-900 mt-8 mb-4">Exercising Your Rights</h2>
          <p>
            If you wish to exercise any of these rights, please contact us at:
          </p>
          <ul className="list-disc pl-6 space-y-2 mt-4 text-zinc-600">
            <li>E-mail: <a href="mailto:b.rplasteringsw@gmail.com">b.rplasteringsw@gmail.com</a></li>
            <li>Phone: 07761 735022</li>
          </ul>
          <p className="mt-4 text-sm text-zinc-500">We will respond to your request within one month.</p>
        </div>
      </div>
    </main>
  );
}
