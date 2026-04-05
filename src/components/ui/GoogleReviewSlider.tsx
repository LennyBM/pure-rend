'use client';

import { Star } from 'lucide-react';

const REVIEWS = [
  {
    id: 1,
    author: "Steve Allonby",
    date: "Google Review",
    content: "Excellent, wouldn't hesitate to recommend to anyone, great quality, value and very responsive, many thanks.",
    rating: 5,
    initials: "SA",
    color: "bg-orange-500",
    source: "Google",
  },
  {
    id: 2,
    author: "Darren Horstmann",
    date: "Google Review",
    content: "Ben and the team provided an outstanding rendering service. The attention to detail and quality of the finish completely transformed our property. Highly absolute class professionalism.",
    rating: 5,
    initials: "DH",
    color: "bg-blue-600",
    source: "Google",
  },
  {
    id: 3,
    author: "Verified Customer",
    date: "MyBuilder Review — Bude",
    content: "Ben is an outstanding tradesman! He responded promptly to my enquiry, was friendly and professional and gave me a competitive quote which was fair and realistic. He kept in contact throughout to confirm arrangements. Worked really hard and to the timetable agreed and did an absolutely brilliant job at plastering my new workspace including leaving everything neat and tidy. I would happily recommend Ben to anyone and will definitely ask him to quote for me another time.",
    rating: 5,
    initials: "MB",
    color: "bg-green-600",
    source: "MyBuilder",
  },
  {
    id: 4,
    author: "Verified Customer",
    date: "Rated People Review — Bude",
    content: "Ben is hard working, punctual, reliable and the quality of his work is very good. He and Tony turned up on time and did our ceiling in the timescale and price he said he would. They tidied away at the end of the day. We had him back shortly after to plasterboard and skim our fireplace and again a very pleasant experience. Price quoted was competitive. A trustworthy chap, we would use again.",
    rating: 5,
    initials: "RP",
    color: "bg-purple-600",
    source: "Rated People",
  },
];

export default function GoogleReviewSlider() {
  return (
    <div className="w-full max-w-5xl mx-auto py-12 px-6">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-8 pb-6 border-b border-zinc-200">
        <div>
          <h2 className="text-2xl font-bold font-headline text-zinc-900 flex items-center gap-3 mb-2">
            What customers say
            <div className="flex text-amber-400">
              {[1, 2, 3, 4, 5].map((s) => (
                <Star key={s} className="w-5 h-5 fill-current" />
              ))}
            </div>
          </h2>
          <p className="text-zinc-600 text-sm">
            Verified reviews from Google, MyBuilder and Rated People
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {REVIEWS.map((review) => (
          <div key={review.id} className="bg-white p-6 rounded-2xl border border-zinc-200 shadow-sm flex flex-col hover:shadow-md transition-shadow">
            <div className="flex items-center gap-4 mb-4">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0 ${review.color}`}>
                {review.initials}
              </div>
              <div>
                <div className="font-semibold text-zinc-900 text-sm">{review.author}</div>
                <div className="text-zinc-500 text-xs">{review.date}</div>
              </div>
            </div>

            <div className="flex text-amber-400 mb-3">
              {[1, 2, 3, 4, 5].map((s) => (
                <Star key={s} className="w-4 h-4 fill-current" />
              ))}
            </div>

            <p className="text-zinc-700 text-sm leading-relaxed flex-grow">
              &ldquo;{review.content}&rdquo;
            </p>

            <div className="mt-4 pt-4 border-t border-zinc-100">
              <span className="text-zinc-400 text-xs font-semibold uppercase tracking-wider">{review.source}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
