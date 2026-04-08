import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service | PureRend',
  description: 'Terms and conditions for PureRend plastering and rendering services.',
  alternates: { canonical: 'https://purerend.co.uk/terms' },
};

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-zinc-50 pt-32 pb-16 px-6">
      <div className="max-w-3xl mx-auto bg-white p-4 md:p-12 rounded-3xl shadow-sm border border-zinc-100">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-teal-50 border border-teal-100 mb-6">
          <span className="text-xs font-semibold tracking-widest text-teal-800 uppercase">Legal</span>
        </div>

        <h1 className="text-4xl font-bold font-headline text-zinc-900 mb-8">Terms of Service</h1>

        <div className="prose prose-zinc prose-a:text-blue-700 max-w-none space-y-8">
          <p className="text-sm text-zinc-500">Last updated: April 2026</p>

          <section>
            <h2 className="text-2xl font-bold font-headline text-zinc-900 mt-8 mb-4">1. About these terms</h2>
            <p>
              These terms apply to the use of the PureRend website (purerend.co.uk) and to any quotation, agreement, or work carried out by PureRend. By using this website or engaging our services, you agree to these terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold font-headline text-zinc-900 mt-8 mb-4">2. Who we are</h2>
            <p>
              PureRend is a plastering and rendering business operated by Ben Rod. Registered address: 64 High Street, Bideford, Devon, EX39 2AR. Contact: 07761 735022 or <a href="mailto:b.rplasteringsw@gmail.com">b.rplasteringsw@gmail.com</a>.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold font-headline text-zinc-900 mt-8 mb-4">3. Quotations</h2>
            <p>All quotations are provided free of charge and without obligation. A quotation is valid for 30 days from the date it is issued unless otherwise stated. Quotations are based on the information provided and conditions observed at the time of the site visit. If additional work is discovered during the job (e.g. hidden damp, substrate damage), we will discuss this with you before proceeding and agree any additional costs.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold font-headline text-zinc-900 mt-8 mb-4">4. Work and workmanship</h2>
            <p>All rendering and plastering work is carried out by Ben Rod personally — we do not subcontract. All work is completed to a professional standard using quality materials from reputable manufacturers (including EcoRend, Weber, and K-Rend).</p>
            <p className="mt-4">All work comes with a <strong>10-year workmanship guarantee</strong>. This covers defects arising from the application and installation of render or plaster systems. It does not cover damage caused by third parties, structural movement, or failure to follow aftercare advice.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold font-headline text-zinc-900 mt-8 mb-4">5. Payment</h2>
            <p>Payment terms will be agreed before any work commences. For larger jobs, staged payments may be requested. Final payment is due on satisfactory completion of the work. We accept bank transfer and cash.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold font-headline text-zinc-900 mt-8 mb-4">6. Cancellations</h2>
            <p>
              You may cancel a booking with reasonable notice. If materials have been ordered or scaffolding arranged specifically for your job, you may be liable for those costs. We will always try to resolve this fairly.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold font-headline text-zinc-900 mt-8 mb-4">7. Website content</h2>
            <p>
              The content on this website is provided for general information purposes. While we make every effort to keep the information accurate and up to date, we do not guarantee that everything on the site is complete or error-free. Images may show previous work and may not reflect the exact finish or materials available at the time of your enquiry.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold font-headline text-zinc-900 mt-8 mb-4">8. Intellectual property</h2>
            <p>
              All content on this website — including text, images, design, and code — is the property of PureRend or its licensors and is protected by copyright. You may not reproduce, distribute, or use any content without written permission.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold font-headline text-zinc-900 mt-8 mb-4">9. Liability</h2>
            <p>
              We accept no liability for any loss or damage arising from your use of this website. Our liability for any work carried out is limited to the value of the contract for that specific job.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold font-headline text-zinc-900 mt-8 mb-4">10. Governing law</h2>
            <p>
              These terms are governed by the laws of England and Wales. Any disputes will be subject to the exclusive jurisdiction of the courts of England and Wales.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold font-headline text-zinc-900 mt-8 mb-4">Contact us</h2>
            <p>If you have any questions about these terms, please contact us:</p>
            <ul className="list-disc pl-6 space-y-2 mt-4 text-zinc-600">
              <li>Email: <a href="mailto:b.rplasteringsw@gmail.com">b.rplasteringsw@gmail.com</a></li>
              <li>Phone: 07761 735022</li>
            </ul>
          </section>
        </div>
      </div>
    </main>
  );
}
