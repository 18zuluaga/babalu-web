"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const menuSections = [
  {
    title: "Análisis Estratégico",
    links: [
      { href: "/analisis-dofa", label: "DOFA & PESTEL" },
    ]
  },
  {
    title: "Objetivos",
    links: [
      { href: "/smart", label: "SMART & Viabilidad" },
    ]
  },
  {
    title: "Modelo de Negocio",
    links: [
      { href: "/modelo-canvas", label: "Canvas & Diagnóstico" },
    ]
  },
  {
    title: "Valores",
    links: [
      { href: "/sostenibilidad", label: "Sostenibilidad & Equipo" },
    ]
  }
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  
  return (
    <header className="sticky top-0 z-50 border-b border-zinc-200 bg-white/90 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        <Link href="/" className="flex items-center gap-2" onClick={() => setOpen(false)}>
          <span className="text-xl font-bold tracking-tight text-zinc-800">Babalú</span>
        </Link>
        
        <button
          aria-label="Abrir menú"
          className="rounded-lg p-2 text-2xl hover:bg-zinc-100 lg:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? "✕" : "☰"}
        </button>

        {/* Desktop menu */}
        <ul className="hidden items-center gap-1 text-sm lg:flex">
          {menuSections.map((section) => (
            <li key={section.title}>
              <Link 
                href={section.links[0].href} 
                className="rounded-full px-4 py-2 font-medium text-zinc-700 transition-all hover:bg-pink-100 hover:text-pink-700"
              >
                {section.links[0].label}
              </Link>
            </li>
          ))}
          <li>
            <Link 
              href="/referencias" 
              className="rounded-full border border-pink-300 bg-pink-50 px-4 py-2 font-medium text-pink-700 transition-all hover:bg-pink-100"
            >
              Referencias
            </Link>
          </li>
        </ul>
      </nav>

      {/* Mobile fullscreen menu */}
      <div
        className={`fixed inset-0 z-40 transition-all lg:hidden ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={() => setOpen(false)}
      >
        <div className="absolute inset-0 bg-black/30 backdrop-blur-sm" />
        <div className={`absolute inset-x-0 top-0 max-h-screen overflow-y-auto rounded-b-3xl bg-white p-6 shadow-2xl transition-transform ${
          open ? "translate-y-0" : "-translate-y-full"
        }`}>
          <div className="mx-auto max-w-6xl">
            <div className="mb-6 flex items-center justify-between">
              <span className="text-xl font-bold text-zinc-800">Menú</span>
              <button 
                aria-label="Cerrar" 
                onClick={() => setOpen(false)} 
                className="rounded-lg p-2 text-2xl hover:bg-zinc-100"
              >
                ✕
              </button>
            </div>

            <Link 
              href="/" 
              onClick={() => setOpen(false)}
              className="mb-4 block rounded-xl bg-pink-100 p-4"
            >
              <h3 className="font-bold text-zinc-800">Inicio</h3>
              <p className="text-sm text-zinc-600">Página principal</p>
            </Link>

            <div className="space-y-4">
              {menuSections.map((section) => (
                <div key={section.title} className="rounded-xl border border-zinc-200 bg-zinc-50 p-4">
                  <h3 className="mb-2 flex items-center gap-2 font-semibold text-zinc-800">
                    <span>{section.title}</span>
                  </h3>
                  <div className="space-y-2">
                    {section.links.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        onClick={() => setOpen(false)}
                        className="block rounded-lg bg-white px-3 py-2 text-sm text-zinc-700 transition-all hover:bg-pink-50"
                      >
                        {link.label}
                      </Link>
                    ))}
                  </div>
                </div>
              ))}

              <Link 
                href="/referencias" 
                onClick={() => setOpen(false)}
                className="block rounded-xl border border-blue-200 bg-blue-50 p-4"
              >
                <h3 className="font-bold text-zinc-800">Referencias</h3>
                <p className="text-sm text-zinc-600">Fuentes y bibliografía</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
