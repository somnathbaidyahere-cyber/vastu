import MandalaHero from "@/components/pages/tools/mandala/MandalaHero";
import MandalaIntro from './../../../components/pages/tools/mandala/MandalaIntro';

export default function MandalaPage() {
  return (
    <main className="min-h-screen overflow-hidden">
      <MandalaHero />

      <MandalaIntro/>
    </main>
  );
}