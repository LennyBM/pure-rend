import fs from 'fs';
import path from 'path';
import Image from 'next/image';

export default function GalleryPage() {
  const directoryPath = path.join(process.cwd(), 'public/images/real_portfolio');
  let files: string[] = [];
  
  try {
    files = fs.readdirSync(directoryPath).filter(file => file.endsWith('.webp') || file.endsWith('.webp'));
  } catch (error) {
    console.error("Error reading directory:", error);
  }

  return (
    <div className="min-h-screen bg-zinc-50 pt-32 pb-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-headline font-bold text-zinc-900 mb-4">Raw Scraped Portfolio</h1>
        <p className="text-zinc-600 mb-12">All 52 images scraped from social media. Use this page to review and select your favorite before/after pairs.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {files.map((file) => (
            <div key={file} className="bg-white rounded-xl shadow-sm border border-zinc-200 overflow-hidden">
              <div className="relative aspect-square bg-zinc-100">
                <Image
                  src={`/images/real_portfolio/${file}`}
                  alt={file}
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <div className="p-4 bg-zinc-900">
                <p className="text-sm font-mono text-zinc-300 break-all">{file}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
