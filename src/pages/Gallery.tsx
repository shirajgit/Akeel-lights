const images = [
  "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1400&q=80",
  "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=1400&q=80",
  "https://images.unsplash.com/photo-1530023367847-a683933f4172?auto=format&fit=crop&w=1400&q=80",
  "https://images.unsplash.com/photo-1606216794074-735e91aa2c92?auto=format&fit=crop&w=1400&q=80",
  "https://images.unsplash.com/photo-1524777313293-86d2ab467344?auto=format&fit=crop&w=1400&q=80",
  "https://images.unsplash.com/photo-1599751449455-a09c9e77bbf2?auto=format&fit=crop&w=1400&q=80",
  "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=1400&q=80",
    "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1400&q=80",
] as const;

export default function Gallery() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-12">
      <h1 className="text-3xl font-bold">Gallery</h1>
      <p className="mt-3 text-slate-600">Some of our recent work.</p>

      <div className="mt-8 columns-1 gap-4 md:columns-3">
        {images.map((src) => (
          <div key={src} className="mb-4 break-inside-avoid overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
            <div className="aspect-[4/3] bg-slate-100">
              <img src={src} alt="Akeel Lights Work" className="h-full w-full object-cover" />
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
