"use client";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="mb-12">
      <div className="rounded-2xl border border-pink-200 bg-pink-50 p-6">
        <div className="grid items-center gap-8 md:grid-cols-2">
          <div className="space-y-3">
            <h1 className="text-4xl font-bold tracking-tight text-zinc-900">Colección Pastel</h1>
            <p className="text-zinc-700">Activewear femenino con diseño, confort y tonos suaves que combinan con tu día a día.</p>
            <div className="flex gap-3">
              <Link href="/explora" className="rounded-full bg-black px-4 py-2 text-white hover:bg-zinc-800">Explorar colección</Link>
              <Link href="/analisis-dofa" className="rounded-full border border-zinc-300 px-4 py-2 hover:bg-zinc-100">Conocer más</Link>
            </div>
          </div>
          <div className="relative w-full overflow-hidden rounded-xl border bg-white">
            <Image
              src="/image12.png"
              alt="Colección pastel Babalú"
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: "100%", height: "auto" }}
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}


