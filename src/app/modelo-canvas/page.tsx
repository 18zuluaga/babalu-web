"use client";
import Image from "next/image";
import TabSection from "@/components/TabSection";
import FeatureCard from "@/components/FeatureCard";
import { images } from "@/lib/images";

export default function Page() {
  const canvasContent = (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="mb-2 text-3xl font-bold text-zinc-800">Modelo Canvas de Babalú</h2>
        <p className="text-zinc-600">Visualización estratégica del modelo de negocio</p>
      </div>

      <div className="overflow-hidden rounded-2xl border border-zinc-200 shadow-lg">
        <Image 
          src={images.canvasImage}
          alt="Modelo Canvas" 
          width={1200} 
          height={800} 
          className="h-auto w-full object-contain"
        />
      </div>
    </div>
  );

  const diagnosticoContent = (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="mb-2 text-3xl font-bold text-zinc-800">Diagnóstico de Potencialidades</h2>
        <p className="text-zinc-600">Identificación de capacidades clave para la internacionalización</p>
      </div>

      <div className="overflow-hidden rounded-2xl border border-zinc-200 shadow-lg">
        <Image 
          src={images.diagnosticoImage}
          alt="Diagnóstico de potencialidades" 
          width={1200} 
          height={800} 
          className="h-auto w-full object-contain"
        />
      </div>
    </div>
  );

  const tabs = [
    { key: "canvas", label: "Modelo Canvas", content: canvasContent },
    { key: "diagnostico", label: "Diagnóstico", content: diagnosticoContent },
  ];

  return (
    <section className="space-y-8">
      <header className="text-center">
        <h1 className="mb-3 text-4xl font-bold text-zinc-800">
          Modelo de Negocio
        </h1>
        <p className="text-lg text-zinc-600">
          Canvas estratégico y diagnóstico de potencialidades de Babalú
        </p>
      </header>

      <TabSection tabs={tabs} />

    </section>
  );
}
