"use client";
import { useState } from "react";

interface Reference {
  category: string;
  items: string[];
}

const references: Reference[] = [
  {
    category: "Datos Empresariales",
    items: [
      "CEIPA. (2025). Datos empresariales de Babalu.",
      "Babalú. (2025). Quiénes somos. babalu.com.co",
      "Babalú. (2025). Página oficial. babalu.co"
    ]
  },
  {
    category: "Sector y Mercado",
    items: [
      "Inexmoda (2025). Observatorio de la Moda.",
      "DANE (2025). Indicadores económicos.",
      "Statista (2024). Crecimiento del mercado de productos naturales y sostenibles en Chile (2020–2025). [Datos estadísticos]. Recuperado de https://www.statista.com",
      "MMA Chile (2023). Marketing digital en Chile."
    ]
  },
  {
    category: "Internacionalización",
    items: [
      "Banco Mundial (2024). Chile panorama.",
      "CEPAL (2023). Panorama económico LAC.",
      "OECD (2024). Economic survey of Chile.",
      "ProChile (2024). Estrategias de expansión internacional y comercio exterior. Gobierno de Chile. Recuperado de https://www.prochile.gob.cl"
    ]
  },
  {
    category: "Sostenibilidad y Normativa",
    items: [
      "MinAmbiente (2022). Ley 2232 de economía circular.",
      "MinCIT (2025). Políticas de apoyo sector textil."
    ]
  },
  {
    category: "Marco Teórico",
    items: [
      "Osterwalder, A. & Pigneur, Y. (2010). Business Model Generation. Wiley.",
      "Kotler, P. & Keller, K. (2016). Marketing Management (15th ed.). Pearson.",
      "Porter, M. (1990). The Competitive Advantage of Nations. Free Press.",
      "Czinkota, M. & Ronkainen, I. (2013). International Marketing (10th ed.). Cengage."
    ]
  }
];

export default function Page() {
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);

  return (
    <section className="space-y-8">
      <header className="text-center">
        <h1 className="mb-3 text-4xl font-bold text-zinc-800">
          Referencias Bibliográficas
        </h1>
        <p className="text-lg text-zinc-600">
          Fuentes consultadas para el análisis estratégico de Babalú
        </p>
      </header>

      <div className="rounded-xl border border-blue-200 bg-blue-50 p-6">
        <div className="flex items-start gap-3">
          <div>
            <h3 className="mb-1 font-semibold text-zinc-800">Investigación Rigurosa</h3>
            <p className="text-sm text-zinc-700">
              Todas las fuentes han sido cuidadosamente seleccionadas para garantizar información actualizada y confiable sobre 
              internacionalización, análisis estratégico y sostenibilidad empresarial.
            </p>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        {references.map((ref) => (
          <div 
            key={ref.category}
            className="overflow-hidden rounded-xl border border-zinc-200 bg-white transition-all"
          >
            <button
              onClick={() => setExpandedCategory(expandedCategory === ref.category ? null : ref.category)}
              className="flex w-full items-center justify-between p-6 text-left transition-colors hover:bg-zinc-50"
            >
              <div className="flex items-center gap-3">
                <h3 className="text-lg font-semibold text-zinc-800">{ref.category}</h3>
              </div>
              <div className="flex items-center gap-3">
                <span className="rounded-full bg-pink-100 px-3 py-1 text-sm font-medium text-pink-700">
                  {ref.items.length} fuente{ref.items.length !== 1 ? 's' : ''}
                </span>
                <span className={`text-xl transition-transform ${expandedCategory === ref.category ? 'rotate-180' : ''}`}>
                  ▼
                </span>
              </div>
            </button>
            
            {expandedCategory === ref.category && (
              <div className="border-t border-zinc-200 bg-zinc-50 p-6">
                <ul className="space-y-3">
                  {ref.items.map((item, idx) => (
                    <li key={idx} className="flex gap-3">
                      <span className="mt-1.5 h-2 w-2 flex-shrink-0 rounded-full bg-pink-400" />
                      <span className="text-sm text-zinc-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <div className="rounded-xl bg-blue-100 p-6">
          <div className="text-2xl font-bold text-blue-700">{references.reduce((acc, ref) => acc + ref.items.length, 0)}</div>
          <div className="text-sm text-zinc-700">Fuentes consultadas</div>
        </div>
        <div className="rounded-xl bg-purple-100 p-6">
          <div className="text-2xl font-bold text-purple-700">{references.filter(r => r.category.includes("Datos") || r.category.includes("Sector")).length}</div>
          <div className="text-sm text-zinc-700">Instituciones oficiales</div>
        </div>
        <div className="rounded-xl bg-green-100 p-6">
          <div className="text-2xl font-bold text-green-700">2025</div>
          <div className="text-sm text-zinc-700">Información actualizada</div>
        </div>
      </div>

      <div className="rounded-2xl bg-pink-100 p-8">
        <h3 className="mb-2 text-2xl font-bold text-zinc-800">Nota sobre las fuentes</h3>
        <p className="text-zinc-700">
          Este trabajo de análisis estratégico para la internacionalización de Babalú se fundamenta en datos oficiales, 
          estudios de mercado reconocidos y teoría empresarial consolidada. Las fuentes abarcan desde información 
          directa de la empresa hasta organismos internacionales como OECD, Banco Mundial y CEPAL.
        </p>
      </div>
    </section>
  );
}
