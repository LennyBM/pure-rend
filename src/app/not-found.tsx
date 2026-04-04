import Link from 'next/link';
import { ArrowRight, Search } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center bg-white px-6">
      <div className="max-w-2xl w-full text-center space-y-8">
        <div className="inline-flex items-center justify-center w-20 h-20 bg-blue-50 rounded-full mb-4">
          <Search className="w-10 h-10 text-blue-600" />
        </div>
        
        <h1 className="text-4xl md:text-5xl font-headline font-bold text-zinc-900 tracking-tight">
          Page Not Found
        </h1>
        
        <p className="text-lg text-zinc-500 max-w-xl mx-auto leading-relaxed">
          The page you are looking for might have been removed, had its name changed,
          or is temporarily unavailable. Let&apos;s get you back to the right place.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
          <Link
            href="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-full font-medium hover:bg-blue-500 transition-colors"
          >
            Return Home
          </Link>
          <Link
            href="/contact"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-zinc-50 text-zinc-900 border border-zinc-200 px-8 py-4 rounded-full font-medium hover:bg-zinc-100 transition-colors"
          >
            Contact Us <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
