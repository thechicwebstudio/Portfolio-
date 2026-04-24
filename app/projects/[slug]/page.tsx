import { projectsData } from '@/data/projects';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import InteractiveGallery from '@/components/InteractiveGallery';
import fs from 'fs';
import path from 'path';

export function generateStaticParams() {
  return projectsData.map((p) => ({ slug: p.id }));
}

export default async function ProjectGallery({ params }: { params: { slug: string } }) {
  const project = projectsData.find(p => p.id === params.slug);
  if (!project) notFound();

  let groupedImages: Record<string, string[]> = {};
  let sortedGroups: string[] = [];

  try {
    const projectDir = path.join(process.cwd(), 'public', 'projects', params.slug);
    
    function findImages(dir: string, currentGroup: string) {
      if (!fs.existsSync(dir)) return;
      const items = fs.readdirSync(dir);
      
      for (const item of items) {
        const fullPath = path.join(dir, item);
        if (fs.statSync(fullPath).isDirectory()) {
            findImages(fullPath, item); // use folder name as group
        } else if (/\.(jpg|jpeg|png|webp|gif|avif)$/i.test(item)) {
            const publicDir = path.join(process.cwd(), 'public');
            let staticPath = fullPath.split(publicDir)[1].replace(/\\/g, '/');
            
            // Ensure there's a leading slash just in case
            if (!staticPath.startsWith('/')) staticPath = '/' + staticPath;
            
            let groupName = currentGroup;
            // Prevent naming the group the same as the project slug, fallback to 'Gallery'
            if (groupName.toLowerCase() === params.slug.toLowerCase()) {
                groupName = 'Gallery';
            }
            
            if (!groupedImages[groupName]) groupedImages[groupName] = [];
            groupedImages[groupName].push(staticPath);
        }
      }
    }

    findImages(projectDir, 'Gallery');

    sortedGroups = Object.keys(groupedImages).sort((a, b) =>
      a.localeCompare(b, undefined, { numeric: true, sensitivity: 'base' })
    );
  } catch (e) {
    console.error('Local directory fetch error:', e);
  }

  return (
    <main className="w-full min-h-screen bg-black text-white py-32 px-6 md:px-20">
      <div className="max-w-7xl mx-auto">
        <Link href="/" className="inline-flex items-center text-white/50 hover:text-white transition-colors mb-12">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
            <line x1="19" x2="5" y1="12" y2="12"></line>
            <polyline points="12 19 5 12 12 5"></polyline>
          </svg>
          Back to Home
        </Link>

        <div className="mb-16">
          <p className="text-amber-400 font-medium mb-4 tracking-widest uppercase text-sm">{project!.category}</p>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-glow">{project!.title}</h1>
          <p className="text-white/60 text-lg md:text-xl max-w-3xl leading-relaxed">{project!.description}</p>
        </div>

        <InteractiveGallery
          groupedImages={groupedImages}
          sortedGroups={sortedGroups}
          projectTitle={project!.title}
        />
      </div>
    </main>
  );
}