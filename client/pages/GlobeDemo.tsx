import { Globe } from "@/components/ui/globe";

export function GlobeDemo() {
  return (
    <div className="relative flex size-full max-w-lg items-center justify-center overflow-hidden rounded-lg border border-purple-500/20 bg-gradient-to-br from-black via-black-900 to-purple-950 px-40 pb-40 pt-8 md:pb-60 md:shadow-xl">
      <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-purple-400 to-purple-600 bg-clip-text text-center text-8xl font-semibold leading-none text-transparent">
        Globe
      </span>
      <Globe className="top-28" />
      <div className="pointer-events-none absolute inset-0 h-full bg-[radial-gradient(circle_at_50%_200%,rgba(128,0,128,0.2),rgba(0,0,0,0))]" />
    </div>
  );
}

export default function GlobeDemoPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-black-800 to-purple-950 py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent mb-4">
            Interactive Globe
          </h1>
          <p className="text-purple-200 text-lg max-w-2xl mx-auto">
            Experience our interactive 3D globe powered by COBE. Drag to rotate
            and explore the world with smooth animations.
          </p>
        </div>

        <div className="flex justify-center">
          <GlobeDemo />
        </div>

        <div className="mt-12 text-center">
          <div className="bg-black/40 border border-purple-500/20 rounded-lg p-6 max-w-md mx-auto">
            <h3 className="text-purple-400 font-semibold mb-2">Features</h3>
            <ul className="text-purple-200 text-sm space-y-1">
              <li>• Interactive drag controls</li>
              <li>• Smooth 3D rendering</li>
              <li>• Location markers</li>
              <li>• Responsive design</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
