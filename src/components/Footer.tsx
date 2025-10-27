import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-20 border-t border-zinc-200 bg-zinc-50 py-12">
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid gap-8 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="mb-3 flex items-center gap-2">
              <h3 className="text-2xl font-bold text-zinc-800">Babalú</h3>
            </div>
            <p className="mb-4 text-sm text-zinc-600">
              Moda activa de calidad con diseño innovador. Internacionalización estratégica y compromiso con la sostenibilidad.
            </p>
            <div className="flex gap-3">
              <a href="#" className="flex h-10 w-10 items-center justify-center rounded-full bg-pink-100 text-zinc-700 transition-all hover:bg-pink-200">
                <span className="text-lg">f</span>
              </a>
              <a href="#" className="flex h-10 w-10 items-center justify-center rounded-full bg-pink-100 text-zinc-700 transition-all hover:bg-pink-200">
                <span className="text-lg">ig</span>
              </a>
              <a href="#" className="flex h-10 w-10 items-center justify-center rounded-full bg-pink-100 text-zinc-700 transition-all hover:bg-pink-200">
                <span className="text-lg">tw</span>
              </a>
            </div>
          </div>

          <div>
            <h4 className="mb-3 font-semibold text-zinc-800">Análisis</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/analisis-dofa" className="text-zinc-600 hover:text-pink-600">
                  DOFA & PESTEL
                </Link>
              </li>
              <li>
                <Link href="/smart" className="text-zinc-600 hover:text-pink-600">
                  SMART & Viabilidad
                </Link>
              </li>
              <li>
                <Link href="/modelo-canvas" className="text-zinc-600 hover:text-pink-600">
                  Canvas & Diagnóstico
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-3 font-semibold text-zinc-800">Empresa</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/sostenibilidad" className="text-zinc-600 hover:text-pink-600">
                  Sostenibilidad
                </Link>
              </li>
              <li>
                <Link href="/referencias" className="text-zinc-600 hover:text-pink-600">
                  Referencias
                </Link>
              </li>
              <li>
                <Link href="/" className="text-zinc-600 hover:text-pink-600">
                  Inicio
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t border-zinc-200 pt-8 text-center text-sm text-zinc-600">
          <p>© {new Date().getFullYear()} Babalú Moda Activa. Todos los derechos reservados.</p>
          <p className="mt-2">Diseñado para la internacionalización estratégica</p>
        </div>
      </div>
    </footer>
  );
}
