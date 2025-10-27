import Image from "next/image";
import Link from "next/link";
import ProductCard from "@/components/ProductCard";
import { images } from "@/lib/images";

export default function Home() {
  return (
    <section className="space-y-12">
      {/* Banner principal solo imagen */}
      <div className="relative w-full overflow-hidden rounded-2xl border bg-white">
        <Image
          src={images.homeBanner}
          alt="Colección Babalú"
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: "100%", height: "auto" }}
          priority
        />
      </div>

      <section className="rounded-2xl border border-pink-200 bg-pink-50 p-6">
        <div className="grid grid-cols-1 items-center gap-6 md:grid-cols-3">
          <div className="md:col-span-2">
            <h2 className="text-2xl font-semibold">Presentación del proyecto</h2>
            <p className="text-zinc-700">Conoce los objetivos y el análisis que sustentan la expansión de Babalú.</p>
          </div>
          <div className="flex flex-wrap gap-3 md:justify-end">
            <Link href="/smart" className="rounded-full border border-pink-300 px-4 py-2 text-zinc-800 transition hover:scale-105 hover:bg-pink-100 hover:shadow-sm">Objetivos y viabilidad</Link>
            <Link href="/analisis-dofa" className="rounded-full border border-pink-300 px-4 py-2 text-zinc-800 transition hover:scale-105 hover:bg-pink-100 hover:shadow-sm">Análisis estratégico</Link>
          </div>
        </div>
      </section>

      <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2">
        <div className="space-y-4">
          <h1 className="text-4xl font-bold tracking-tight">¿Qué encontrarás aquí?</h1>
          <p className="text-lg text-zinc-600">Modelo de negocio, sostenibilidad y fuentes completas del proyecto Babalú.</p>
          <div className="flex flex-wrap gap-3">
            <Link href="/modelo-canvas" className="rounded-full border border-pink-300 px-4 py-2 text-zinc-800 transition hover:scale-105 hover:bg-pink-100 hover:shadow-sm">Modelo de negocio</Link>
            <Link href="/sostenibilidad" className="rounded-full border border-pink-300 px-4 py-2 text-zinc-800 transition hover:scale-105 hover:bg-pink-100 hover:shadow-sm">Sostenibilidad y equipo</Link>
            <Link href="/referencias" className="rounded-full border border-pink-300 px-4 py-2 text-zinc-800 transition hover:scale-105 hover:bg-pink-100 hover:shadow-sm">Referencias</Link>
          </div>
        </div>
        <div className="relative w-full overflow-hidden rounded-xl border bg-white">
          <Image
            src="/image1.png"
            alt="Babalú colección"
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "100%", height: "auto" }}
          />
        </div>
      </div>

      <section>
        <h2 className="mb-4 text-2xl font-semibold">Productos destacados</h2>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {[
            { src: "/image2.png", title: "Top Deportivo" },
            { src: "/image3.png", title: "Leggins Compresión" },
            { src: "/image4.png", title: "Enterizo Active" },
            { src: "/image5.png", title: "Jogger Urbano" },
          ].map((p) => (
            <ProductCard key={p.src} src={p.src} title={p.title} />
          ))}
        </div>
      </section>
    </section>
  );
}
