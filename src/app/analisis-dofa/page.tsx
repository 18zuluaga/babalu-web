"use client";
import TabSection from "@/components/TabSection";
import Accordion from "@/components/Accordion";

export default function Page() {
  const dofaContent = (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="mb-2 text-3xl font-bold text-zinc-800">Análisis DOFA</h2>
        <p className="text-zinc-600">Evaluación completa de Fortalezas, Oportunidades, Debilidades y Amenazas</p>
      </div>

      <Accordion title="Fortalezas (F)" defaultOpen={true} color="border-green-200 bg-green-50">
        <p className="mb-3">
          Babalu tiene varios puntos a favor. Para empezar, ya cuenta con una estructura organizacional bien definida y un plan estratégico que incluye la internacionalización como uno de sus objetivos principales, lo cual no es poca cosa. Además, tiene un área dedicada específicamente a los temas de internacionalización, lo que demuestra que hay compromiso y preparación.
        </p>
        <p className="mb-3">
          En temas de tecnología e innovación, también va por buen camino, hace investigación y desarrollo, tiene acceso a tecnología de otros países, y ha invertido en innovación. Todo esto le da herramientas para competir en mercados más exigentes.
        </p>
        <p>
          Otro punto fuerte es que su producción puede responder a la demanda internacional sin perder calidad, y tiene productos patentados que protegen su propiedad intelectual. Por si fuera poco, ya ha exportado a más de nueve países, tiene el registro como exportadora e importadora, y su modelo de negocio tiene potencial para convertirse en franquicia.
        </p>
      </Accordion>

      <Accordion title="Oportunidades (O)" color="border-blue-200 bg-blue-50">
        <p className="mb-3">
          Por el lado de las oportunidades, hay muchas cosas por aprovechar. Por ejemplo, Babalu aún no exporta servicios, así que ese es un campo totalmente nuevo que podría explorar. Tampoco tiene alianzas estratégicas con empresas o entidades internacionales, pero eso puede convertirse en una gran ventaja si empieza a construir esas relaciones.
        </p>
        <p className="mb-3">
          También hay mucho por hacer en temas de innovación a nivel global y en la transferencia de conocimiento, lo cual le permitiría aprender de otros y mejorar sus procesos. Otro aspecto clave es la sostenibilidad, aún no mide su huella de carbono ni tiene políticas estructuradas en ese tema, pero eso se puede desarrollar y le sumaría valor en mercados donde ese tipo de prácticas son muy importantes.
        </p>
        <p>
          Por último, una gran oportunidad está en formar mejor a su equipo humano en competencias internacionales, como dominar otros idiomas o tener experiencias en el exterior, lo cual facilitaría mucho cualquier proceso de internacionalización.
        </p>
      </Accordion>

      <Accordion title="Debilidades (D)" color="border-orange-200 bg-orange-50">
        <p className="mb-3">
          Como toda empresa, Babalu también tiene puntos débiles que podrían jugarle en contra si no se trabajan a tiempo. Uno de los más evidentes es el bajo manejo de una segunda lengua en su equipo humano, algo que es básico para moverse a nivel internacional. A eso se suma que pocas personas en la empresa tienen experiencia internacional, lo que puede dificultar el entendimiento de otros mercados.
        </p>
        <p className="mb-3">
          Además, no participa en proyectos de innovación internacional ni tiene alianzas con actores clave del exterior, lo que le resta posibilidades de crecer más rápido. Tampoco tiene políticas claras de sostenibilidad, ni de equidad de género, ni de responsabilidad social empresarial, aspectos que hoy en día muchas empresas del mundo consideran esenciales.
        </p>
        <p>
          Por si fuera poco, Babalu no tiene inversión extranjera, ni filiales fuera del país, ni ha desarrollado aún un modelo de franquicia activo. Y, quizás lo más preocupante: su inversión en innovación es muy baja (solo 0.03% del presupuesto), lo cual limita mucho su capacidad para evolucionar en un entorno tan cambiante.
        </p>
      </Accordion>

      <Accordion title="Amenazas (A)" color="border-purple-200 bg-purple-50">
        <p className="mb-3">
          Fuera de la empresa también hay riesgos que no se pueden ignorar. La competencia internacional suele tener más experiencia, mejores tecnologías y más trayectoria, lo que puede hacer que entrar a esos mercados sea más complicado.
        </p>
        <p className="mb-3">
          También están los cambios en las normas internacionales, los requisitos específicos de cada país y las barreras arancelarias, que pueden afectar directamente su operación. Otro punto importante es que, al no tener políticas ambientales ni sociales bien establecidas, puede tener problemas de reputación, especialmente en países donde estos temas pesan mucho.
        </p>
        <p>
          Finalmente, no tener alianzas estratégicas también representa una amenaza, porque muchas veces entrar a un nuevo mercado requiere del apoyo de socios locales o internacionales.
        </p>
      </Accordion>

      <div className="mt-8 rounded-xl bg-pink-50 p-6">
        <h3 className="mb-4 text-2xl font-bold text-zinc-800">Cruces Estratégicos</h3>
        <div className="space-y-4">
          <div className="rounded-lg bg-white p-5 shadow-sm">
            <h4 className="mb-2 font-semibold text-green-700">FO (Fortalezas + Oportunidades)</h4>
            <ul className="list-inside list-disc space-y-1 text-sm text-zinc-700">
              <li>Usar su capacidad tecnológica y de producción para entrar a nuevos mercados y empezar a exportar servicios</li>
              <li>Desarrollar su modelo de franquicia aprovechando su experiencia exportadora</li>
              <li>Iniciar proyectos de innovación en alianza con actores internacionales</li>
            </ul>
          </div>

          <div className="rounded-lg bg-white p-5 shadow-sm">
            <h4 className="mb-2 font-semibold text-blue-700">FA (Fortalezas + Amenazas)</h4>
            <ul className="list-inside list-disc space-y-1 text-sm text-zinc-700">
              <li>Crear políticas de sostenibilidad y responsabilidad social que estén al nivel de los estándares internacionales</li>
              <li>Fortalecer el manejo de idiomas y la experiencia del equipo para competir mejor</li>
              <li>Ajustar sus procesos a las normas y requisitos de cada país para evitar barreras</li>
            </ul>
          </div>

          <div className="rounded-lg bg-white p-5 shadow-sm">
            <h4 className="mb-2 font-semibold text-orange-700">DO (Debilidades + Oportunidades)</h4>
            <ul className="list-inside list-disc space-y-1 text-sm text-zinc-700">
              <li>Diseñar un programa de formación en idiomas y temas globales para su equipo</li>
              <li>Buscar alianzas y participación en proyectos de innovación fuera del país</li>
              <li>Empezar a medir su huella de carbono y crear políticas de equidad</li>
              <li>Iniciar poco a poco la exportación de servicios y el desarrollo de franquicias</li>
            </ul>
          </div>

          <div className="rounded-lg bg-white p-5 shadow-sm">
            <h4 className="mb-2 font-semibold text-purple-700">DA (Debilidades + Amenazas)</h4>
            <ul className="list-inside list-disc space-y-1 text-sm text-zinc-700">
              <li>Reducir el riesgo internacional formando mejor a su equipo y construyendo alianzas</li>
              <li>Establecer políticas internas ambientales y sociales para evitar problemas de reputación</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="rounded-lg border border-zinc-200 bg-white p-4">
        <p className="text-sm text-zinc-600">
          <strong>Fuente:</strong> CEIPA. (2025). Datos empresariales de Babalu [Archivo de Microsoft Excel]. CEIPA.
        </p>
      </div>
    </div>
  );

  const pestelContent = (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="mb-2 text-3xl font-bold text-zinc-800">Análisis PESTEL</h2>
        <p className="text-zinc-600">Factores externos que impactan a Babalú</p>
      </div>

      <Accordion title="Político" defaultOpen={true} color="border-red-200 bg-red-50">
        <p>
          Colombia se encuentra en un momento político bastante estable, y el sector textil y de confección ha recibido un respaldo significativo del gobierno, dado su papel fundamental en la economía. Organizaciones como Inexmoda y el Ministerio de Comercio han lanzado iniciativas para potenciar la innovación y la internacionalización de las empresas del sistema moda, lo que beneficia a marcas como Babalú, los cambios en las políticas tributarias y las modificaciones en los tratados comerciales podrían impactar los costos de producción y la facilidad para exportar. Por eso, aunque el panorama político es alentador, la empresa debe estar atenta a los movimientos en las relaciones comerciales con otros países y a los nuevos reglamentos que puedan influir en su operación.
        </p>
      </Accordion>

      <Accordion title="Económico" color="border-yellow-200 bg-yellow-50">
        <p>
          El entorno económico en Colombia ha experimentado momentos de desaceleración, pero el sector moda sigue siendo uno de los más activos. Según datos de Inexmoda, el sistema moda nacional genera más de un millón de empleos y continúa en crecimiento, especialmente en áreas como la ropa deportiva, que es precisamente donde Babalú enfoca su oferta. A pesar de esto, factores como la inflación y el aumento en los costos de los insumos han impactado los márgenes de ganancia. Las exportaciones textiles del país también han mostrado una ligera disminución en los últimos años, lo que indica que el mercado internacional se vuelve cada vez más competitivo. Para una marca como Babalú, que busca expandirse más allá de Colombia, esto significa que debe innovar y mantener una producción eficiente. Aun así, el consumo local sigue mostrando un interés por prendas cómodas y de diseño, lo que proporciona una buena base para seguir creciendo dentro del país.
        </p>
      </Accordion>

      <Accordion title="Social" color="border-blue-200 bg-blue-50">
        <p>
          El contexto social está a favor de Babalú. En los últimos años, ha crecido el interés por el bienestar, la actividad física y la ropa que combine comodidad con estilo. La tendencia de usar ropa deportiva para el día a día, ha cobrado fuerza, y Babalú se adapta perfectamente a esta corriente. Además, los consumidores colombianos están valorando cada vez más las marcas locales, especialmente aquellas que reflejan identidad y cercanía. Las redes sociales y las tiendas en línea se han convertido en canales clave para conectar con el público, algo que la empresa ya está aprovechando a través de su página web y su comunicación digital. Sin embargo, los nuevos consumidores también exigen mayor transparencia en la producción y un compromiso con el medio ambiente, por lo que será fundamental mantener coherencia entre el mensaje y las acciones para preservar su reputación.
        </p>
      </Accordion>

      <Accordion title="Ecológico" color="border-green-200 bg-green-50">
        <p>
          Lo ambiental se ha vuelto fundamental en la industria de la moda. En Colombia, leyes como la que prohíbe los plásticos de un solo uso y los programas de economía circular están presionando a las empresas para que adopten prácticas más sostenibles. Aunque en la página oficial de Babalú no se especifican políticas ambientales concretas, la marca está en una posición ideal para avanzar en este sentido, ya que Medellín es una de las ciudades más activas en la promoción de la moda sostenible. Adaptarse a estas tendencias no solo ayudará a cumplir con las regulaciones, sino que también puede convertirse en una oportunidad para diferenciarse de la competencia.
        </p>
      </Accordion>

      <Accordion title="Legal" color="border-purple-200 bg-purple-50">
        <p>
          Babalú se asegura de cumplir con todas las normativas actuales sobre la protección de datos personales, tal como lo establece la Ley 1581 de 2012, lo cual puedes verificar en su aviso de privacidad disponible en su página web. Además, como empresa dedicada a la confección, tiene que seguir las normas laborales, las regulaciones de etiquetado textil y los estándares requeridos para el comercio electrónico. En los últimos años, las regulaciones ambientales y de responsabilidad empresarial se han vuelto más rigurosas, por lo que es crucial que la compañía mantenga sus procesos al día para evitar sanciones y garantizar buenas prácticas, especialmente si su meta es expandirse a otros mercados internacionales.
        </p>
      </Accordion>

      <div className="mt-6 rounded-lg border border-zinc-200 bg-white p-4">
        <h4 className="mb-2 font-semibold text-zinc-800">Referencias</h4>
        <ul className="space-y-1 text-sm text-zinc-600">
          <li>• Babalú. (2025). Quiénes somos. https://babalu.com.co/quienes-somos</li>
          <li>• Babalú. (2025). Página oficial de Babalú Moda Activa. https://babalu.co</li>
          <li>• Inexmoda. (2025). Observatorio de la Moda – Febrero 2025</li>
          <li>• DANE. (2025). Indicadores económicos de coyuntura</li>
          <li>• MinAmbiente. (2022). Ley 2232 de 2022</li>
          <li>• MinCIT. (2025). Políticas de apoyo al sector textil</li>
        </ul>
      </div>
    </div>
  );

  const tabs = [
    { key: "dofa", label: "Análisis DOFA", content: dofaContent },
    { key: "pestel", label: "Análisis PESTEL", content: pestelContent },
  ];

  return (
    <section className="space-y-8">
      <header className="text-center">
        <h1 className="mb-3 text-4xl font-bold text-zinc-800">
          Análisis Estratégico
        </h1>
        <p className="text-lg text-zinc-600">
          Comprende el contexto interno y externo de Babalú Moda Activa
        </p>
      </header>

      <TabSection tabs={tabs} />

      <div className="rounded-2xl bg-pink-100 p-8">
        <h3 className="mb-2 text-2xl font-bold text-zinc-800">¿Por qué es importante?</h3>
        <p className="text-zinc-700">
          Estos análisis nos permiten tomar decisiones estratégicas informadas para la internacionalización de Babalú,
          identificando oportunidades clave en mercados como Chile y preparándonos para los desafíos del comercio global.
        </p>
      </div>
    </section>
  );
}
