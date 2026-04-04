'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { AlertCircle, RotateCcw } from 'lucide-react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Optionally log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-[80vh] flex items-center justify-center bg-white px-6">
      <div className="max-w-2xl w-full text-center space-y-8">
        <div className="inline-flex items-center justify-center w-20 h-20 bg-red-50 rounded-full mb-4">
          <AlertCircle className="w-10 h-10 text-red-600" />
        </div>
        
        <h1 className="text-4xl md:text-5xl font-headline font-bold text-zinc-900 tracking-tight">
          Something went wrong
        </h1>
        
        <p className="text-lg text-zinc-500 max-w-xl mx-auto leading-relaxed">
          We apologise, but an unexpected error occurred while loading this page. 
          Our team has been notified.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
          <button
            onClick={() => reset()}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-full font-medium hover:bg-blue-500 transition-colors"
          >
            <RotateCcw className="w-4 h-4" /> Try Again
          </button>
          <Link
            href="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-zinc-50 text-zinc-900 border border-zinc-200 px-8 py-4 rounded-full font-medium hover:bg-zinc-100 transition-colors"
          >
            Return Home
          </Link>
        </div>
      </div>
    </div>
  );
}
