"use client";
import TabSection from "@/components/TabSection";
import Accordion from "@/components/Accordion";
import Image from "next/image";
import { images } from "@/lib/images";

export default function Page() {
  const sostenibilidadContent = (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="mb-2 text-3xl font-bold text-zinc-800">Sostenibilidad que Impacta</h2>
        <p className="text-zinc-600">Las tres dimensiones de la sostenibilidad en Babalú</p>
      </div>

      <div className="rounded-xl border border-pink-200 bg-pink-50 p-6">
        <p className="text-zinc-700">
          Babalú es reconocida por su innovación con la ropa deportiva, mantiene una relación con las 3 dimensiones de la sostenibilidad lo cual abre puertas al proceso de internacionalización, esto hace que el valor agregado de la marca sea alto ya que no solamente es un proceso de producción y unas simples prendas de vestir.
        </p>
      </div>

      <Accordion title="Dimensión Social" defaultOpen={true} color="border-pink-200 bg-pink-50">
        <p>
          En la dimensión social, Babalú se destaca por fortalecer la industria nacional y además generar empleo digno en Colombia, especialmente en la ciudad de Medellín donde se encuentran la totalidad de sus tiendas físicas y sus centros de producción. La marca contribuye al desarrollo local al ofrecer oportunidades laborales en diseño, confección, atención al cliente, logística, y promueve la igualdad de género, la mayoría de su personal está compuesto por mujeres. Impulsa el talento nacional y lo da a conocer en mercados internacionales demostrando que las marcas nacionales están en capacidad de competir con marcas globales.
        </p>
      </Accordion>

      <Accordion title="Dimensión Ambiental" color="border-green-200 bg-green-50">
        <p>
          Babalú viene implementando prácticas responsables en el proceso de producción de las prendas, utilizando materiales duraderos y de alta calidad lo que no solamente beneficia al cliente, sino que también hace lo propio con el medio ambiente, reduciendo el desperdicio textil y prolongando la vida útil de las prendas. Se ha buscado optimizar los procesos de fabricación para disminuir el uso de recursos y así reducir los residuos. Al implementar una calidad tan alta en sus prendas, se necesita menos mantenimiento de las mismas, lo que quiere decir, menos cambio de las prendas lo que regula el proceso de sobreproducción y el impacto ambiental que este trae.
        </p>
      </Accordion>

      <Accordion title="Dimensión Económica" color="border-blue-200 bg-blue-50">
        <p>
          Babalú ha logrado consolidarse como una marca competitiva y rentable gracias a una estrategia de diversificación de mercados. Gracias a su presencia en el comercio electrónico, sus exportaciones y su posicionamiento en tiendas nacionales, permite mantener una economía sólida y estable. La expansión internacional no solo genera ingresos para la empresa sino también para el sector textil lo cual impulsa la economía nacional. A parte su capacidad de adaptación a las tendencias le permite estar en un crecimiento constante y fortalecerse frente a la competencia.
        </p>
      </Accordion>

      <div className="rounded-lg border border-zinc-200 bg-white p-4">
        <h4 className="mb-2 font-semibold text-zinc-800">Referencias</h4>
        <ul className="space-y-1 text-sm text-zinc-600">
          <li>• Czinkota, M. R., & Ronkainen, I. A. (2013). International marketing (10th ed.). Cengage Learning.</li>
          <li>• Kotler, P., & Keller, K. L. (2016). Marketing management (15th ed.). Pearson Education.</li>
          <li>• Porter, M. E. (1990). The competitive advantage of nations. New York: Free Press.</li>
          <li>• ProChile. (2024). Estrategias de expansión internacional y comercio exterior.</li>
          <li>• Statista. (2024). Crecimiento del mercado de productos naturales y sostenibles en Chile (2020–2025).</li>
          <li>• Osterwalder, A., & Pigneur, Y. (2010). Business model generation: A handbook for visionaries.</li>
        </ul>
      </div>
    </div>
  );

  const equipoContent = (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="mb-2 text-3xl font-bold text-zinc-800">Acuerdo de Equipos</h2>
        <p className="text-zinc-600">Principios y compromisos que guían nuestro trabajo colaborativo</p>
      </div>

      <div className="space-y-4">
        <div className="rounded-xl border border-purple-200 bg-purple-50 p-6">
          <h3 className="mb-2 text-lg font-bold text-zinc-800">Responsabilidades Académicas</h3>
          <p className="text-zinc-700">
            Todas las responsabilidades académicas serán elaboradas por todos los integrantes del grupo.
          </p>
        </div>

        <div className="rounded-xl border border-blue-200 bg-blue-50 p-6">
          <h3 className="mb-2 text-lg font-bold text-zinc-800">Respeto y Ambiente</h3>
          <p className="text-zinc-700">
            Mantener el respeto y un buen ambiente académico en todo momento.
          </p>
        </div>

        <div className="rounded-xl border border-green-200 bg-green-50 p-6">
          <h3 className="mb-2 text-lg font-bold text-zinc-800">Gestión del Tiempo</h3>
          <p className="text-zinc-700">
            Realizar las actividades con tiempo suficiente y planificación adecuada.
          </p>
        </div>

        <div className="rounded-xl border border-yellow-200 bg-yellow-50 p-6">
          <h3 className="mb-2 text-lg font-bold text-zinc-800">Apoyo Mutuo</h3>
          <p className="text-zinc-700">
            Ayudarse mutuamente en el equipo y compartir conocimientos.
          </p>
        </div>

        <div className="rounded-xl border border-pink-200 bg-pink-50 p-6">
          <h3 className="mb-2 text-lg font-bold text-zinc-800">Tolerancia y Solidaridad</h3>
          <p className="text-zinc-700">
            Ejercer la tolerancia y solidaridad ante diferentes perspectivas y situaciones.
          </p>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {images.equipoImages.map((src) => (
          <div key={src} className="overflow-hidden rounded-xl border border-zinc-200">
            <Image src={src} alt="Equipo Babalú" width={1200} height={800} className="h-auto w-full object-cover" />
          </div>
        ))}
      </div>

      <div className="rounded-xl border border-purple-200 bg-purple-50 p-6">
        <h3 className="mb-3 text-xl font-bold text-zinc-800">Resolución de Conflictos</h3>
        <p className="text-zinc-700">
          En caso de que alguno de los acuerdos establecidos no se cumpla y esto genere conflictos dentro del grupo, se implementarán diferentes estrategias para resolver la situación. En primer lugar, se llevará a cabo una charla grupal en un ambiente de respeto y madurez, con el fin de expresar los desacuerdos y buscar una solución en conjunto. Si, después de este diálogo, el problema persiste, acudiremos al profesor encargado del núcleo para solicitar su asesoría y apoyo en la resolución del conflicto, garantizando así una solución adecuada.
        </p>
      </div>
    </div>
  );

  const tabs = [
    { key: "sostenibilidad", label: "Sostenibilidad", content: sostenibilidadContent },
    { key: "equipo", label: "Acuerdo de Equipos", content: equipoContent },
  ];

  return (
    <section className="space-y-8">
      <header className="text-center">
        <h1 className="mb-3 text-4xl font-bold text-zinc-800">
          Sostenibilidad y Valores
        </h1>
        <p className="text-lg text-zinc-600">
          Nuestro compromiso con el planeta y el equipo
        </p>
      </header>

      <TabSection tabs={tabs} />

      <div className="rounded-2xl bg-pink-100 p-8">
        <h3 className="mb-2 text-2xl font-bold text-zinc-800">Visión de Futuro</h3>
        <p className="text-zinc-700">
          En Babalú creemos que el éxito empresarial va de la mano con la responsabilidad social y ambiental. 
          Nuestro compromiso es crear moda activa de calidad mientras generamos impacto positivo en nuestra comunidad y el planeta.
        </p>
      </div>
    </section>
  );
}
