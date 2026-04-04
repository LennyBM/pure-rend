'use client';

import { Star, CheckCircle } from 'lucide-react';

const REVIEWS = [
  {
    id: 1,
    author: "Steve Allonby",
    date: "4 years ago",
    content: "Excellent, wouldn't hesitate to recommend to anyone, great quality, value and very responsive, many thanks ...",
    rating: 5,
    initials: "SA",
    color: "bg-orange-600"
  },
  {
    id: 2,
    author: "Darren Horstmann",
    date: "5 years ago",
    content: "Ben and the team provided an outstanding rendering service. The attention to detail and quality of the finish completely transformed our property. Highly absolute class professionalism.",
    rating: 5,
    initials: "DH",
    color: "bg-blue-100"
  }
];

export default function GoogleReviewSlider() {
  return (
    <div className="w-full max-w-5xl mx-auto py-12">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-8 pb-6 border-b border-zinc-200">
        <div>
          <h2 className="text-2xl font-bold font-headline text-zinc-900 flex items-center gap-3 mb-2">
             Excellent
             <div className="flex text-amber-400">
               {[1, 2, 3, 4, 5].map((s) => (
                 <Star key={s} className="w-5 h-5 fill-current" />
               ))}
             </div>
          </h2>
          <p className="text-zinc-600 text-sm flex items-center gap-2">
            Based on verified <span className="font-bold flex items-center"><span className="text-blue-600 font-bold ml-1 text-lg leading-none" style={{ fontFamily: 'sans-serif' }}>G</span>oogle</span> reviews
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {REVIEWS.map((review) => (
          <div key={review.id} className="w-full px-3">
            <div className="bg-white p-6 rounded-2xl border border-zinc-200 shadow-sm h-full flex flex-col hover:shadow-md transition-shadow">
              <div className="flex items-center gap-4 mb-4">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center text-zinc-900 font-bold text-sm ${review.color}`}>
                  {review.initials}
                </div>
                <div>
                  <div className="font-semibold text-zinc-900 text-sm">{review.author}</div>
                  <div className="text-zinc-500 text-xs flex items-center gap-1">
                    {review.date}
                    <span className="inline-block w-1 h-1 rounded-full bg-zinc-300 mx-1"></span>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg" alt="Google" className="w-3 h-3" />
                  </div>
                </div>
              </div>
              
              <div className="flex text-amber-400 mb-3">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star key={s} className="w-4 h-4 fill-current" />
                ))}
              </div>
              
              <p className="text-zinc-700 text-sm leading-relaxed mb-4 flex-grow">
                "{review.content}"
              </p>

              <a 
                href="https://share.google/P7iMoAYgBODdXHWt5"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 text-xs font-semibold hover:underline mt-auto"
              >
                Read on Google
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

