"use client";
import TabSection from "@/components/TabSection";
import StatCard from "@/components/StatCard";
import Accordion from "@/components/Accordion";

export default function Page() {
  const smartContent = (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="mb-2 text-3xl font-bold text-zinc-800">Objetivo SMART para Chile</h2>
        <p className="text-zinc-600">Estrategia clara, medible y alcanzable para entrar al mercado chileno</p>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <StatCard number="US$ 75K" label="Meta de ventas año 1" color="text-pink-500" />
        <StatCard number="15" label="Referencias de producto" color="text-purple-500" />
        <StatCard number="12" label="Meses de ejecución" color="text-blue-500" />
      </div>

      <div className="space-y-4">
        <Accordion title="Específico (S)" defaultOpen={true} color="border-blue-200 bg-blue-50">
          <p>
            Lograr la entrada de Babalu al mercado chileno mediante la apertura de una tienda virtual dirigida al público chileno y la creación de alianzas con al menos dos distribuidores locales especializados en ropa deportiva.
          </p>
        </Accordion>

        <Accordion title="Medible (M)" color="border-green-200 bg-green-50">
          <p>
            Alcanzar ventas por US$75.000 durante el primer año de operación y posicionar al menos 15 referencias de producto (ropa y accesorios deportivos) dentro del portafolio chileno.
          </p>
        </Accordion>

        <Accordion title="Alcanzable (A)" color="border-yellow-200 bg-yellow-50">
          <p>
            La empresa ya cuenta con experiencia exportadora, estructura organizacional sólida y producción suficiente para responder a la demanda del nuevo mercado, por lo que los resultados propuestos son realistas.
          </p>
        </Accordion>

        <Accordion title="Relevante (R)" color="border-purple-200 bg-purple-50">
          <p>
            Este objetivo se alinea directamente con el plan estratégico de Babalu y con las oportunidades detectadas en el DOFA, como el crecimiento del mercado de ropa deportiva y la alta penetración del e-commerce en Chile.
          </p>
        </Accordion>

        <Accordion title="Temporal (T)" color="border-pink-200 bg-pink-50">
          <p>
            Cumplir con la meta en un periodo de 12 meses a partir del inicio de la estrategia de internacionalización.
          </p>
        </Accordion>
      </div>

      <div className="rounded-xl bg-blue-50 p-6">
        <h3 className="mb-3 text-xl font-bold text-zinc-800">Propósito del Objetivo</h3>
        <p className="mb-3 text-zinc-700">
          Este objetivo busca que Babalu expanda su presencia en el mercado latinoamericano empezando por Chile, un país con alta estabilidad económica, crecimiento del comercio electrónico y un público que valora la calidad y el diseño en la ropa deportiva.
        </p>
        <p className="text-zinc-700">
          A través del comercio online y alianzas locales, la marca podrá posicionarse progresivamente, medir resultados concretos y consolidar su estrategia de internacionalización de manera estructurada y sostenible.
        </p>
      </div>

      <div className="rounded-lg border border-zinc-200 bg-white p-4">
        <h4 className="mb-2 font-semibold text-zinc-800">Referencias</h4>
        <ul className="space-y-1 text-sm text-zinc-600">
          <li>• Czinkota, M. R., & Ronkainen, I. A. (2013). International marketing (10th ed.). Cengage Learning.</li>
          <li>• Kotler, P., & Keller, K. L. (2016). Marketing management (15th ed.). Pearson Education.</li>
          <li>• Porter, M. E. (1990). The competitive advantage of nations. New York: Free Press.</li>
          <li>• ProChile. (2024). Estrategias de expansión internacional y comercio exterior. Gobierno de Chile. https://www.prochile.gob.cl</li>
          <li>• Statista. (2024). Crecimiento del mercado de productos naturales y sostenibles en Chile (2020–2025). https://www.statista.com</li>
        </ul>
      </div>
    </div>
  );

  const viabilidadContent = (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="mb-2 text-3xl font-bold text-zinc-800">Chile: Mercado Estratégico</h2>
        <p className="text-zinc-600">Análisis de viabilidad para la internacionalización de Babalú</p>
      </div>

      <div className="rounded-xl border border-pink-200 bg-pink-50 p-6">
        <h3 className="mb-3 text-xl font-bold text-zinc-800">Contexto General</h3>
        <p className="text-zinc-700">
          Babalu, como marca de ropa deportiva para hombres y mujeres, busca expandirse internacionalmente para fortalecer su presencia en el mercado latinoamericano. Al analizar distintos países, Chile surge como un destino viable y estratégico para iniciar su proceso de internacionalización.
        </p>
      </div>

      <Accordion title="Estabilidad Económica y Entorno de Negocios" defaultOpen={true} color="border-green-200 bg-green-50">
        <p>
          Chile cuenta con una economía estable, un alto índice de desarrollo humano y un entorno favorable para la inversión extranjera. Su infraestructura logística y digital está bien desarrollada, lo que facilita tanto la distribución de productos físicos como las ventas por canales en línea. Además, tiene tratados de libre comercio con numerosos países, entre ellos Colombia, lo que simplifica los procesos de exportación y reduce los costos arancelarios.
        </p>
      </Accordion>

      <Accordion title="Perfil del Consumidor Chileno" color="border-blue-200 bg-blue-50">
        <p>
          El consumidor chileno se caracteriza por valorar la calidad, el diseño y la comodidad, lo que encaja perfectamente con la propuesta de Babalu, una marca que combina funcionalidad y estilo en su ropa deportiva. En los últimos años, la demanda de ropa athleisure (ropa deportiva para uso diario) ha crecido considerablemente en Chile, impulsada por una tendencia hacia estilos de vida más saludables y por el aumento de la actividad física después de la pandemia.
        </p>
      </Accordion>

      <Accordion title="Oportunidades en E-commerce" color="border-purple-200 bg-purple-50">
        <p>
          El comercio electrónico también representa una gran oportunidad. Chile es uno de los países con mayor penetración de internet y ventas online en Latinoamérica, lo que permitiría a Babalu posicionar su tienda virtual y aprovechar eventos locales como el Cyber Day o el Black Friday chileno para impulsar sus ventas.
        </p>
      </Accordion>

      <Accordion title="Afinidad Cultural" color="border-yellow-200 bg-yellow-50">
        <p>
          A nivel cultural, existe una cercanía idiomática y social entre Chile y Colombia, lo que facilita la adaptación del mensaje de marca y la comunicación con los consumidores. Además, la presencia de otras marcas deportivas internacionales ha ayudado a consolidar una base de clientes interesados en este tipo de productos, por lo que Babalu puede entrar con una propuesta fresca que combina calidad, diseño latino y precios competitivos.
        </p>
      </Accordion>

      <div className="rounded-xl bg-green-50 p-6">
        <h3 className="mb-3 text-xl font-bold text-zinc-800">Conclusión</h3>
        <p className="text-zinc-700">
          En resumen, Chile representa un mercado atractivo para Babalu debido a su estabilidad económica, su afinidad cultural, su alto nivel de digitalización y su creciente demanda de ropa deportiva y accesorios funcionales. Entrar a este país permitiría a la marca fortalecer su posicionamiento regional y avanzar en su objetivo estratégico de internacionalización.
        </p>
      </div>

      <div className="rounded-lg border border-zinc-200 bg-white p-4">
        <h4 className="mb-2 font-semibold text-zinc-800">Referencias</h4>
        <ul className="space-y-1 text-sm text-zinc-600">
          <li>• Banco Mundial. (2024). Chile: Panorama general</li>
          <li>• CEPAL. (2023). Panorama económico de América Latina y el Caribe 2023</li>
          <li>• OECD. (2024). Economic survey of Chile 2024</li>
          <li>• ProChile. (2024). Guía para la internacionalización de empresas</li>
          <li>• Statista. (2024). Participación del mercado en Chile (2019–2025)</li>
          <li>• MinAmbiente Chile. (2023). Estrategia nacional de consumo sustentable</li>
        </ul>
      </div>
    </div>
  );

  const tabs = [
    { key: "smart", label: "Objetivo SMART", content: smartContent },
    { key: "viabilidad", label: "Viabilidad Chile", content: viabilidadContent },
  ];

  return (
    <section className="space-y-8">
      <header className="text-center">
        <h1 className="mb-3 text-4xl font-bold text-zinc-800">
          Objetivos y Viabilidad
        </h1>
        <p className="text-lg text-zinc-600">
          Estrategia de internacionalización hacia Chile
        </p>
      </header>

      <TabSection tabs={tabs} />

      <div className="grid gap-6 md:grid-cols-3">
        <div className="rounded-xl bg-green-100 p-6">
          <h3 className="mb-2 text-lg font-bold text-zinc-800">Lanzamiento</h3>
          <p className="text-sm text-zinc-700">Tienda virtual + 2 distribuidores locales especializados</p>
        </div>
        <div className="rounded-xl bg-blue-100 p-6">
          <h3 className="mb-2 text-lg font-bold text-zinc-800">Productos</h3>
          <p className="text-sm text-zinc-700">15 referencias estratégicas de athleisure</p>
        </div>
        <div className="rounded-xl bg-purple-100 p-6">
          <h3 className="mb-2 text-lg font-bold text-zinc-800">Meta Anual</h3>
          <p className="text-sm text-zinc-700">US$ 75,000 en el primer año de operación</p>
        </div>
      </div>
    </section>
  );
}
