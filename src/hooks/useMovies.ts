import { useEffect, useState } from "react";

export type Slide = { image: string; title: string; alt: string };

export function useGhibliSlides(limit = 5) {
  const [slides, setSlides] = useState<Slide[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        const res = await fetch(`https://ghibliapi.vercel.app/films?limit=${limit}`);
        const data = await res.json();
        const mapped: Slide[] = data
          .slice(0, limit)
          .map((f: Slide) => ({
            image: f.image,
            title: f.title,
            alt: `Poster of ${f.title}`,
          }));
        if (!cancelled) setSlides(mapped);
      } catch {
        if (!cancelled) setSlides([]);
        setError("Error fetching movies");
      } finally {
        if (!cancelled) setLoading(false);
      }
    })();
    return () => { cancelled = true; };
  }, [limit]);

  return { slides, loading, error };
}
