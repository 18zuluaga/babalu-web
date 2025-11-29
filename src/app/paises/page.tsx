"use client";
import Image from "next/image";
import TabSection from "@/components/TabSection";
import Accordion from "@/components/Accordion";
import Modal from "@/components/Modal";
import { useState } from "react";

const powerBIImages = [
  "/doc4_assets/doc4_image17.png", // Solo la última imagen
];

const powerBITrabajo4Images = [
  "/trabajo4_assets/WhatsApp Image 2025-11-18 at 11.16.17 PM.jpeg",
  "/trabajo4_assets/WhatsApp Image 2025-11-18 at 11.16.29 PM.jpeg",
  "/trabajo4_assets/WhatsApp Image 2025-11-18 at 11.16.48 PM.jpeg",
  "/trabajo4_assets/WhatsApp Image 2025-11-18 at 11.17.01 PM.jpeg",
  "/trabajo4_assets/doc4_image5.png",
  "/trabajo4_assets/doc4_image6.png",
  "/trabajo4_assets/WhatsApp Image 2025-11-18 at 11.17.15 PM.jpeg",
];

export default function Page() {
  const [openImg, setOpenImg] = useState<string | null>(null);

  const panamaContent = (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="mb-2 text-3xl font-bold text-zinc-800">Panamá</h2>
        <p className="text-zinc-600">Indicadores macroeconómicos y PESTEL</p>
      </div>

      <Accordion title="Indicadores macroeconómicos" defaultOpen={true} color="border-blue-200 bg-blue-50">
        <div className="space-y-4">
          <div>
            <h3 className="mb-2 text-lg font-semibold text-zinc-800">Productos Interno Bruto (PIB)</h3>
            <button onClick={() => setOpenImg("/linea.png")} className="mb-3 block overflow-hidden rounded-xl border bg-white p-2 hover:shadow">
              <Image src="/linea.png" alt="PIB Panamá" width={0} height={0} sizes="100vw" style={{ width: "100%", height: "auto" }} />
            </button>
            <p>La gráfica muestra que Panamá ha tenido tasas de crecimiento del PIB muy altas en la región, lo que muestra una economía activa y con oportunidades (2015-2019), en el 2020 se observa una caída pronunciada debido a la pandemia de (-18,9) pero en el 2021 se puede observa un fuerte rebote 15,1 (el pico en la gráfica), lo que demuestra la rápida reactivación de su economía y hasta el 2024 se puede evidenciar que ha disminuido pero manteniéndose en un (1,6).</p>
            <p>Todo esto demuestra que en términos de internacionalización tiene impactos tanto positivos como negativos ya que tiene el crecimiento proyectado en los años posteriores a 2021 justifica la entrada al mercado ya que se recupera de manera rápida, pero también puede ocurrir una caída libre como en 2020 esto volviéndose una montaña rusa, todo esto sucede porque la economía de Panamá depende mucho del comercio mundial por su canal de Panamá y la plataforma logística asociada (puertos, zonas libres, transportes son el corazón de su internacionalización. Los ingresos directos e indirectos del canal contribuyen significativamente al PIB y consolidan a Panamá como un eje global de comercio y servicios.</p>
            <p><strong>Calificación:</strong> 4</p>
            <p><strong>Referencia:</strong> Banco Mundial. (2025). <em>Crecimiento del PIB per cápita (% anual) – Panamá</em> [Conjunto de datos]. Indicadores del Desarrollo Mundial. https://datos.bancomundial.org/indicator/NY.GDP.PCAP.KD.ZG?locations=PA</p>
          </div>

          <div>
            <h3 className="mb-2 text-lg font-semibold text-zinc-800">PIB en el sector en que la empresa opere</h3>
            <button onClick={() => setOpenImg("/comercio.jpeg")} className="mb-3 block overflow-hidden rounded-xl border bg-white p-2 hover:shadow">
              <img src="/comercio.jpeg" alt="PIB sector Panamá" className="w-full h-auto" />
            </button>
            <button onClick={() => setOpenImg("/industrias.jpeg")} className="mb-3 block overflow-hidden rounded-xl border bg-white p-2 hover:shadow">
              <Image src="/industrias.jpeg" alt="Inflación Panamá" width={0} height={0} sizes="100vw" style={{ width: "100%", height: "auto" }} />
            </button>
            <p>Comercio al por mayor y al por menor</p>
            <p>Industrias Manufactureras</p>
            <p>Con estas dos tablas podemos observar que el comercio al por mayor y menor es, sin duda, el motor económico del país. Los datos muestran que es un sector de gran magnitud y con un crecimiento constante en los últimos años, este dinamismo sucede en gran parte por la posición estratégica de Panamá como hub comercial (canal de Panamá, Zona Libre de Colón). Para las empresas que buscan distribuir o vender productos en el comercio panameño puede tener un impacto positivo ya que los datos muestran un crecimiento significativo en los períodos recientes (2020-2025) por sus canales de distribución establecidos, un mercado de consumo amplio y un acceso simplificado a la región. Por eso su calificación puede estar en un 5, mientras que las Industrias Manufactureras muestran una tendencia de crecimiento positivo, pero tienen una escala menor en comparación con el comercio. Ya que la base industrial panameña no es tan grande ni diversificada por su dependencia de factores internos o de la minería (que ha tenido problemas recientes) por esta razón la base industrial es menos desarrollada para la internacionalización, su calificación es 3</p>
            <p><strong>Referencia:</strong> Instituto Nacional de Estadística y Censo de Panamá. (2025). <em>PIB anual por categoría de actividad económica, a precios de comprador: años 2018-24</em> [Conjunto de datos]. https://www.inec.gob.pa/DASHBOARDS/PIB/PIB_ANUAL_POR_CATEGORIA</p>
          </div>

          <div>
            <h3 className="mb-2 text-lg font-semibold text-zinc-800">Inflación</h3>
            <button onClick={() => setOpenImg("/inflacion.jpeg")} className="mb-3 block overflow-hidden rounded-xl border bg-white p-2 hover:shadow">
              <Image src="/inflacion.jpeg" alt="Poder adquisitivo Panamá" width={0} height={0} sizes="100vw" style={{ width: "100%", height: "auto" }} />
            </button>
            <p>En estos diez años (2015–2024) Panamá ha tenido una inflación muy baja y bastante estable; si miramos los números, el promedio queda más o menos de 0.8 % anual. Nos llama la atención que en 2019 y 2020 los precios incluso bajaron un poco, y después hubo un pequeño aumento en 2022–2023. Gran parte de esto se explica porque el país usa el dólar, eso le quita mucha volatilidad al tipo de cambio y ayuda a que los precios no se disparen. Para una empresa que quiere llegar desde otro país, eso es tranquilizador porque permite planear mejor los costos. Ahora, también pienso que cuando la inflación está muy baja puede querer decir que la demanda interna no está muy fuerte. Básicamente la estabilidad facilita la internacionalización, pero vale la pena vigilar lo que viene siendo la demanda local.</p>
            <p><strong>Calificación:</strong> 4</p>
            <p><strong>Referencias:</strong></p>
            <p className="ml-8">International Monetary Fund. (2024). <em>World Economic Outlook Database: Panama</em>. https://www.imf.org/external/datamapper/profile/PAN</p>
            <p className="ml-8">World Bank. (2024). <em>Inflation, consumer prices (annual %): Panama</em> [Indicador FP.CPI.TOTL.ZG]. https://data.worldbank.org/indicator/FP.CPI.TOTL.ZG?locations=PA</p>
          </div>

          <div>
            <h3 className="mb-2 text-lg font-semibold text-zinc-800">Poder adquisitivo</h3>
            <button onClick={() => setOpenImg("/poderadquisitivo.jpeg")} className="mb-3 block overflow-hidden rounded-xl border bg-white p-2 hover:shadow">
              <Image src="/poderadquisitivo.jpeg" alt="Tasa de interés Panamá" width={0} height={0} sizes="100vw" style={{ width: "100%", height: "auto" }} />
            </button>
            <p>Si miramos el PIB per cápita entre 2015 y 2024, podemos apreciar que pasó de US$14 000 a más de US$19 000. Eso significa que el ingreso promedio subió y la gente, en promedio, tiene más capacidad de compra que antes (aunque 2020 fue un año “complicado” por la pandemia). Para las empresas que evalúan entrar al mercado panameño, esto es una buena señal ya que mayor poder adquisitivo suele ser más clientes potenciales y posibilidad de vender productos con mayor valor agregado. Sin embargo, una aclaración importante es que en promedio no cuenta cómo se distribuye la renta. El FMI y otros organismos han señalado que la desigualdad sigue siendo relevante o sea que no todos ganan más, y por eso conviene segmentar la oferta y no asumir que todo el país tiene el mismo poder de compra.</p>
            <p><strong>Calificación:</strong> 4</p>
            <p><strong>Referencias:</strong></p>
            <p className="ml-8">International Monetary Fund. (2024). <em>GDP per capita, current prices</em> [Indicador NGDPDPC]. https://www.imf.org/external/datamapper/NGDPDPC@WEO/PA</p>
            <p className="ml-8">World Bank. (2024). <em>GDP per capita (current US$): Panama</em> [Indicador NY.GDP.PCAP.CD]. https://data.worldbank.org/indicator/NY.GDP.PCAP.CD?locations=PA</p>
          </div>

          <div>
            <h3 className="mb-2 text-lg font-semibold text-zinc-800">Tasa de interés</h3>
            <button onClick={() => setOpenImg("/tasadeinteres.jpeg")} className="mb-3 block overflow-hidden rounded-xl border bg-white p-2 hover:shadow">
              <Image src="/tasadeinteres.jpeg" alt="Tipo de cambio Panamá" width={0} height={0} sizes="100vw" style={{ width: "100%", height: "auto" }} />
            </button>
            <p>Esta gráfica muestra una tendencia general de crecimiento en la Tasa de Interés Real desde el 2014 hasta alcanzar un pico alrededor del año 2020 de 7,5%. A partir de allí, el sistema comenzó a descender con valores como 5.4% en 2021 y continúa disminuyendo hasta el último punto disponible en 2022 de 4,6%. Esta tendencia es favorable para la inversión, ya que un menor costo real del endeudamiento puede estimular el capital de trabajo. La principal característica y ventaja de Panamá en este ámbito es su sistema dolarizado. Esto es altamente valorado por los inversores internacionales para la planificación financiera a largo plazo. No obstante, esta misma dependencia limita la autonomía monetaria del país. Aunque el costo del crédito puede aumentar si la Reserva Federal de EE. UU (FED) sube las tasas, la previsibilidad del sistema financiero hace que este indicador sea favorable teniendo una calificación de 4</p>
            <p><strong>Referencia:</strong> World Bank. (2022). <em>Real interest rate (%) – Panama</em> [Indicador FR.INR.RINR]. https://datos.bancomundial.org/indicador/FR.INR.RINR?end=2022&locations=PA&start=2014&type=points&view=chart</p>
          </div>

          <div>
            <h3 className="mb-2 text-lg font-semibold text-zinc-800">Tipo y tasa de cambio</h3>
            <button onClick={() => setOpenImg("/doc4_assets/doc4_image7.png")} className="mb-3 block overflow-hidden rounded-xl border bg-white p-2 hover:shadow">
              <Image src="/doc4_assets/doc4_image7.png" alt="Empleo Panamá" width={0} height={0} sizes="100vw" style={{ width: "100%", height: "auto" }} />
            </button>
            <button onClick={() => setOpenImg("/doc4_assets/doc4_image8.png")} className="mb-3 block overflow-hidden rounded-xl border bg-white p-2 hover:shadow">
              <Image src="/doc4_assets/doc4_image8.png" alt="PIB Chile" width={0} height={0} sizes="100vw" style={{ width: "100%", height: "auto" }} />
            </button>
            <p>En esta gráfica se puede ver claramente que el tipo de cambio del balboa panameño (PAB) frente al dólar estadounidense (USD) se mantiene totalmente estable en un valor de 1.000. Esto quiere decir que un balboa siempre vale lo mismo que un dólar estadounidense, sin ninguna variación.</p>
            <p>Esta situación se debe a que Panamá tiene una economía dolarizada desde el año 1904. En otras palabras, el país adoptó el dólar estadounidense como su moneda principal, aunque también usa el balboa como referencia. Por eso, el tipo de cambio nunca cambia: 1 PAB siempre equivale a 1 USD.</p>
            <p>Panamá no cuenta con una política monetaria propia, ya que depende completamente del dólar. Gracias a esto, el país ha logrado mantener una economía muy estable, baja inflación y confianza internacional, porque su moneda no se devalúa. Sin embargo, también tiene una desventaja importante al no tener un banco central que controle su propia moneda, Panamá no puede modificar su política monetaria en caso de una crisis o si necesita ajustar su economía.</p>
            <p>Al mostrar que el tipo de cambio oficial se mantiene constante en 1.000 PAB por 1 USD. Esto demuestra que la paridad entre ambas monedas se ha mantenido fija por más de un siglo.</p>
            <p>La gráfica demuestra que Panamá mantiene un tipo de cambio fijo de 1 balboa igual a 1 dólar estadounidense, lo que refleja una gran estabilidad económica. Esta política ha beneficiado al país al evitar devaluaciones y mantener la confianza en su sistema financiero, aunque también limita su capacidad para tomar decisiones monetarias propias.</p>
            <p><strong>Calificación:</strong> 5</p>
            <p><strong>Referencias:</strong></p>
            <p className="ml-8">Banco Interamericano de Desarrollo. (2024). <em>Datos macroeconómicos: Panamá</em>. https://data.iadb.org</p>
            <p className="ml-8">Datosmacro. (2025). <em>Cambio peso panameño</em>. https://datosmacro.expansion.com/divisas/pab</p>
            <p className="ml-8">International Monetary Fund. (2023). <em>Panama: Staff report for the 2023 Article IV consultation</em> (Country Report No. 23/129). https://www.imf.org</p>
            <p className="ml-8">World Bank. (2024). <em>Official exchange rate (LCU per US$, period average): Panama</em> [Indicador PA.NUS.FCRF]. https://data.worldbank.org/indicator/PA.NUS.FCRF?locations=PA</p>
          </div>

          <div>
            <h3 className="mb-2 text-lg font-semibold text-zinc-800">Empleo y desempleo</h3>
            <button onClick={() => setOpenImg("/doc4_assets/doc4_image9.png")} className="mb-3 block overflow-hidden rounded-xl border bg-white p-2 hover:shadow">
              <Image src="/doc4_assets/doc4_image9.png" alt="PIB sector Chile" width={0} height={0} sizes="100vw" style={{ width: "100%", height: "auto" }} />
            </button>
            <button onClick={() => setOpenImg("/doc4_assets/doc4_image10.png")} className="mb-3 block overflow-hidden rounded-xl border bg-white p-2 hover:shadow">
              <Image src="/doc4_assets/doc4_image10.png" alt="Tasa de interés Chile" width={0} height={0} sizes="100vw" style={{ width: "100%", height: "auto" }} />
            </button>
            <p>En los últimos años, Panamá ha mostrado una recuperación importante en el tema del empleo después de los efectos negativos que dejó la pandemia. la tasa de desempleo del país se encuentra cerca del 6,5 %, lo que refleja una mejoría respecto al fuerte aumento que se vivió en 2020, cuando el desempleo llegó a cerca del 18 % debido al cierre de empresas y la desaceleración económica.</p>
            <p>Esta recuperación ha sido posible gracias al crecimiento de sectores como la logística, la construcción y los servicios financieros, que han ayudado a generar nuevas oportunidades laborales. Sin embargo, el mismo Banco Mundial advierte que todavía hay retos importantes: muchos empleos siguen siendo informales o de baja calidad, lo que significa que una parte de los trabajadores no tiene estabilidad ni acceso a seguridad social.</p>
            <p>Panamá mantiene una fuerza laboral activa, pero con diferencias marcadas entre hombres y mujeres, y con un alto porcentaje de empleo informal, sobre todo en zonas rurales. Esto indica que, aunque hay empleo, no todos los trabajos ofrecen condiciones justas o seguras.</p>
            <p>En la infografía publicada por el Banco Mundial (2025), titulada “Más y mejores empleos para Panamá”, se destaca precisamente esta situación. El informe explica que el país ha avanzado en recuperar los niveles de ocupación previos a la pandemia, pero todavía necesita mejorar la calidad del trabajo y ampliar las oportunidades para los jóvenes y las mujeres. También resalta la importancia de invertir en educación técnica y capacitación para que las personas puedan acceder a empleos más productivos y mejor remunerados.</p>
            <p>En conclusión, aunque Panamá ha logrado estabilizar su tasa de desempleo y recuperar buena parte del empleo perdido, todavía enfrenta desafíos en cuanto a la calidad, equidad e inclusión laboral. La economía panameña sigue siendo una de las más estables de la región, pero para lograr un desarrollo más justo, el país debe enfocarse en crear empleos formales, bien remunerados y con mejores condiciones para todos. <strong>Calificación:</strong> 3</p>
            <p><strong>Referencias:</strong></p>
            <p className="ml-8">Banco Interamericano de Desarrollo. (2024). <em>Sistema de Información de Mercados Laborales y Seguridad Social (SIMS): Panamá</em>. https://www.iadb.org</p>
            <p className="ml-8">Banco Mundial. (2025). <em>Más y mejores empleos para Panamá</em> [Infografía]. https://www.bancomundial.org</p>
            <p className="ml-8">Banco Mundial. (2025). <em>Unemployment, total (% of total labor force): Panama</em> [Indicador SL.UEM.TOTL.ZS]. https://data.worldbank.org</p>
            <p className="ml-8">Datosmacro. (2025). <em>Indicadores económicos: Panamá</em>. https://datosmacro.expansion.com</p>
          </div>

        </div>
      </Accordion>

      <Accordion title="PESTEL" color="border-purple-200 bg-purple-50">
        <div className="space-y-4">
          <div>
            <h3 className="mb-2 text-lg font-semibold text-zinc-800">Político</h3>
            <p>Panamá mantiene un desempeño intermedio en cuanto a eficiencia gubernamental y calidad institucional. El país registró en 2023 un valor de –0.21 puntos en el indicador Government Effectiveness, dentro de una escala que va de –2.5 a +2.5. Este resultado lo ubica alrededor del 42.9, es decir, por debajo de la mediana global en esa categoría. Estos datos muestran que la administración pública panameña aún enfrenta desafíos para lograr una gestión más ágil, transparente y eficaz. Los desafíos se reflejan en la formulación y cumplimiento de políticas públicas, así como en la credibilidad de las instituciones ante la ciudadanía y los inversionistas. La previsibilidad de las decisiones gubernamentales no alcanza estándares altos, lo que puede generar incertidumbre regulatoria o costos adicionales para las empresas. Sin embargo, avanzar en reformas administrativas y fortalecer la capacidad estatal podría aumentar la confianza del sector privado y mejorar la competitividad del país.</p>
            <p><strong>Referencia:</strong> Banco Mundial. (2024). <em>Worldwide Governance Indicators: Government effectiveness, percentile rank – Panama</em> [Indicador GE.PER.RNK]. https://data.worldbank.org/indicator/GE.PER.RNK?locations=PA</p>
          </div>
          <div>
            <h3 className="mb-2 text-lg font-semibold text-zinc-800">Económico</h3>
            <p>Según los datos oficiales del Banco Mundial, Panamá registró en 2024 una tasa de crecimiento del PIB del 2,9 %, lo que representa una desaceleración comparada con los años anteriores. Aun así, este valor sigue siendo positivo, lo que significa que la economía panameña continúa expandiéndose, aunque a un ritmo más moderado. Este comportamiento refleja que Panamá mantiene una base económica sólida, sustentada principalmente en sectores como servicios, logística, comercio internacional y turismo, los cuales siguen generando ingresos y empleo. Además, el PIB total alcanzó los 86,26 mil millones de dólares, y el PIB per cápita fue de 19.102,9 USD, lo que evidencia un nivel de ingreso medio-alto y una capacidad de compra considerable en comparación con otros países de la región. Sin embargo, el crecimiento más bajo puede deberse a factores globales como la inflación internacional, los costos logísticos y la desaceleración del comercio mundial. Aun así, una tasa de 2,9 % es suficiente para mantener la estabilidad económica y un mercado con poder adquisitivo.</p>
            <p>La relación con la internacionalización en ropa deportiva, puede influir de manera que el crecimiento del PIB positivo implica que el consumo interno sigue activo, por lo que el mercado panameño continúa siendo atractivo para productos importados como la ropa deportiva. El aumento del PIB per cápita refleja que los panameños tienen un mayor nivel de ingreso disponible, lo que les permite gastar en productos de estilo de vida, bienestar y deporte. Además, la estabilidad económica y la posición geográfica estratégica del país facilitan la distribución regional hacia otros mercados centroamericanos. Aunque el ritmo de crecimiento ha bajado, la economía panameña mantiene las condiciones adecuadas para la entrada de nuevas marcas que busquen aprovechar el auge del consumo saludable y las tendencias fitness.</p>
            <p><strong>Referencia:</strong> Banco Mundial. (s.f.). <em>Panamá: Panorama general</em> [Perfil país]. https://datos.bancomundial.org/country/panama</p>
          </div>
          <div>
            <h3 className="mb-2 text-lg font-semibold text-zinc-800">Social</h3>
            <p>Panamá enfrenta un problema constante de desigualdad, indica un valor de 49.7 en 2024, lo cual revela una distribución del ingreso muy desigual. Un valor cercano a 50 significa que gran parte de la riqueza está concentrada en una pequeña parte, mientras una porción importante de la población sigue atrasada. Esta grieta afecta la unión social y limita el crecimiento inclusivo. Los informes recientes muestran que la desigualdad aumentó ligeramente en los últimos años, pasando de 48.9 en 2023 a 49.7 en 2024, pese a la recuperación económica. La persistencia de esta desigualdad puede generar tensiones sociales, menor estabilidad y una reducción en la capacidad de consumo interno. Sin embargo promover políticas redistributivas, fortalecer la educación y garantizar el acceso equitativo a los servicios básicos podrían impulsar un desarrollo más inclusivo y sostenible.</p>
            <p><strong>Referencias:</strong></p>
            <p className="ml-8">Banco Mundial. (2024). <em>Gini index: Panama</em> [Indicador SI.POV.GINI]. https://data.worldbank.org/indicator/SI.POV.GINI?locations=PA</p>
            <p className="ml-8">International Monetary Fund. (2024). <em>World Economic Outlook Database</em>. https://www.imf.org/en/Data</p>
          </div>
          <div>
            <h3 className="mb-2 text-lg font-semibold text-zinc-800">Tecnológico</h3>
            <p>Panamá invierte una parte muy pequeña de su producto interno bruto en investigación y desarrollo. Según el Banco Mundial, el gasto interno en I+D representó solo el 0.16 % del PIB en 2023. Esto refleja una capacidad reducida para generar innovación propia y adoptar tecnologías avanzadas que impulsen sectores estratégicos. Panamá se mantiene dependiente de tecnología importada y de conocimiento externo. Aumentar los incentivos a la investigación, fortalecer la cooperación entre universidades y empresas, así como atraer inversión extranjera en tecnología, son medidas que podrían elevar el nivel de innovación y la competitividad del país.</p>
            <p><strong>Referencias:</strong></p>
            <p className="ml-8">Banco Mundial. (2024). <em>Research and development expenditure (% of GDP): Panama</em> [Indicador GB.XPD.RSDV.GD.ZS]. https://data.worldbank.org/indicator/GB.XPD.RSDV.GD.ZS</p>
            <p className="ml-8">OECD. (2024). <em>Gross domestic spending on R&D</em>. https://data.oecd.org/</p>
          </div>
          <div>
            <h3 className="mb-2 text-lg font-semibold text-zinc-800">Ecológico</h3>
            <p>Panamá mantiene una huella de carbono per cápita moderada, cercana a las 3.3 toneladas métricas de CO₂ por habitante. Aunque este valor es menor al promedio mundial, ha venido aumentando poco a poco desde 2010, impulsado por el crecimiento económico, el transporte que aún depende de combustibles fósiles y la expansión de las ciudades. Aun así, el país ha dado pasos importantes para reducir su impacto ambiental, invirtiendo en energías limpias, protegiendo sus bosques y promoviendo políticas más sostenibles. Estas acciones reflejan su compromiso y lo consolidan como un ejemplo en la región en materia de sostenibilidad. De una forma parecida, las empresas del sector de ropa deportiva que buscan crecer e internacionalizarse se enfrentan al mismo dilema, cómo expandirse sin dejar una huella negativa en el medio ambiente. Así como Panamá busca equilibrar su desarrollo con la sostenibilidad, las marcas deportivas también están aprendiendo a hacerlo, adoptando materiales reciclados, reduciendo emisiones en la producción y apostando por energías más limpias. Hoy, los consumidores valoran más que nunca las marcas que se preocupan por el planeta, y esa conciencia se ha convertido en una parte esencial de su reputación global. Tanto Panamá como estas empresas comparten un mismo camino: avanzar hacia un modelo de crecimiento más responsable y consciente. Mientras el país trabaja por cumplir sus compromisos climáticos, las marcas deportivas que integran prácticas sostenibles en su proceso de internacionalización logran destacarse no solo por su calidad, sino también por su compromiso ambiental.</p>
            <p><strong>Referencias:</strong></p>
            <p className="ml-8">Banco Mundial. (2024). <em>World Development Indicators</em>. https://data.worldbank.org/</p>
            <p className="ml-8">Global Carbon Atlas. (2024). <em>CO₂ emissions per capita</em>. http://www.globalcarbonatlas.org</p>
            <p className="ml-8">United Nations Development Programme. (2024). <em>Climate & Environment Data</em>. https://www.undp.org</p>
            <p className="ml-8">Yale Center for Environmental Law & Policy. (2024). <em>Environmental Performance Index (EPI)</em>. https://epi.yale.edu</p>
          </div>
          <div>
            <h3 className="mb-2 text-lg font-semibold text-zinc-800">Legal</h3>
            <p>El entorno legal y regulatorio panameño muestra un desempeño medio en materia de facilidad para hacer negocios. Panamá alcanzó una puntuación de 66.6 y se ubicó en el puesto 86 entre 190 economías. Estos resultados indican que el país ofrece condiciones razonables para la creación de empresas, pero aún presenta obstáculos en áreas como el pago de impuestos, la resolución de insolvencias y el cumplimiento de contratos. El marco legal panameño es funcional, aunque todavía puede mejorarse. Fortalecer la seguridad jurídica, simplificar los trámites y modernizar los procesos administrativos ayudaría a atraer más inversión extranjera y a consolidar un entorno empresarial más competitivo y estable.</p>
            <p><strong>Referencia:</strong> Banco Mundial. (2020). <em>Doing Business 2020: Comparing business regulation in 190 economies – Economy profile of Panama</em>. https://documents1.worldbank.org/curated/en/225191575269872521/pdf/Doing-Business-2020-Comparing-Business-Regulation-in-190-Economies-Economy-Profile-of-Panama.pdf</p>
          </div>
        </div>
      </Accordion>
    </div>
  );

  const chileContent = (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="mb-2 text-3xl font-bold text-zinc-800">Chile</h2>
        <p className="text-zinc-600">Indicadores macroeconómicos y PESTEL</p>
      </div>

      <Accordion title="Indicadores macroeconómicos" defaultOpen={true} color="border-blue-200 bg-blue-50">
        <div>
          <h3 className="mb-2 text-lg font-semibold text-zinc-800">PIB</h3>
          <button onClick={() => setOpenImg("/doc4_assets/doc4_image11.png")} className="mb-3 block overflow-hidden rounded-xl border bg-white p-2 hover:shadow">
            <Image src="/doc4_assets/doc4_image11.png" alt="Empleo Chile" width={0} height={0} sizes="100vw" style={{ width: "100%", height: "auto" }} />
          </button>
          <p>El PIB de Chile tiende a variar entre los años 2015 y 2024, en los primeros años el crecimiento fue moderado, pero a partir del año 2019 se observa una caída que alcanza el punto más bajo en el 2020, ya que descendió hasta -7% resultado de la crisis económica que se vivía causada por la pandemia. En 2021, Chile experimenta una fuerte recuperación con un crecimiento del 10%, aunque este impulso se detendría nuevamente en los años siguientes. Estos cambios reflejan una economía sensible a cambios globales y a factores internos como la inflación y la inestabilidad política. Para una empresa que busque internacionalizarse, Chile representa un mercado con alto potencial, pero tiene sus riesgos debido a la fácil variación económica. Si el mercado se mantiene estable puede ofrecer buenas oportunidades, si cae, puede afectar el consumo y la inversión extranjera.</p>
          <p><strong>Puntaje:</strong> 3/5</p>
        </div>
        <div>
          <h3 className="mb-2 text-lg font-semibold text-zinc-800">PIB del sector</h3>
          <button onClick={() => setOpenImg("/doc4_assets/doc4_image12.png")} className="mb-3 block overflow-hidden rounded-xl border bg-white p-2 hover:shadow">
            <Image src="/doc4_assets/doc4_image12.png" alt="Inflación y poder adquisitivo Chile" width={0} height={0} sizes="100vw" style={{ width: "100%", height: "auto" }} />
          </button>
          <p>Se evidencia que el PIB de la industria textil, de prendas de vestir en Chile, mantiene una participación muy baja dentro del total manufacturero, con pocas variaciones entre 2015 y 2025, mientras el sector manufacturero se mantiene estable entre los 4000 y 5000 millones de pesos. La línea roja refleja la baja contribución del sector textil al PIB nacional, lo que evidencia su vulnerabilidad frente a la competencia internacional sobre todo mercados asiáticos. Sin embargo, esta estabilidad indica cierta resiliencia y potencial para la especialización de producción de prendas de nicho como la moda sostenible. El bajo peso del sector presenta barreras, pero también muy buenas oportunidades para innovar y atraer inversión extranjera. <strong>Puntaje</strong> 3/5</p>
          <p><strong>Referencia:</strong> Banco Central de Chile. (s.f.). <em>Cuentas Nacionales: Producto Interno Bruto por clase de actividad económica</em> [Serie CCNN2018_P2]. https://si3.bcentral.cl/Siete/ES/Siete/Cuadro/CAP_CCNN/MN_CCNN76/CCNN2018_P2</p>
        </div>
        <div>
          <h3 className="mb-2 text-lg font-semibold text-zinc-800">Tasa de interés</h3>
          <button onClick={() => setOpenImg("/doc4_assets/doc4_image13.png")} className="mb-3 block overflow-hidden rounded-xl border bg-white p-2 hover:shadow">
            <Image src="/doc4_assets/doc4_image13.png" alt="Tasa de cambio Chile" width={0} height={0} sizes="100vw" style={{ width: "100%", height: "auto" }} />
          </button>
          <p>La tasa de interés varió mucho entre 2015 y 2024. Se mantuvo estable y baja entre el 2015 y 2019, pero en el 2020 cayó bruscamente debido a la pandemia y luego subió hasta más del 10% en 2022 para controlar la inflación. En 2024 bajó de nuevo cerca del 6%, reflejando una política monetaria moderada. Estas variaciones afectan la inversión y el consumo. La tasa de interés aún es un poco alta lo cual limita parcialmente la competitividad financiera y la atracción de inversión extranjera. <strong>Calificación:</strong> 3/5</p>
          <p><strong>Referencia:</strong> Banco Central de Chile. (s.f.). <em>Tasa de Política Monetaria (TPM)</em> [Serie estadística]. https://si3.bcentral.cl</p>
        </div>
        <div className="space-y-4">

          <div>
            <h3 className="mb-2 text-lg font-semibold text-zinc-800">Empleo y desempleo</h3>
            <button onClick={() => setOpenImg("/empleoydesempleo.jpeg")} className="mb-3 block overflow-hidden rounded-xl border bg-white p-2 hover:shadow">
              <Image src="/empleoydesempleo.jpeg" alt="Tasa de cambio Chile" width={0} height={0} sizes="100vw" style={{ width: "100%", height: "auto" }} />
            </button>
            <p>En los últimos años, el empleo en Chile ha tenido varios cambios. La tasa de desempleo ha estado subiendo y bajando según la situación económica del país. En 2020, durante la pandemia, el desempleo llegó a cerca del 11 %. En 2021 bajó un poco y se mantuvo alrededor del 9 %. Para el 2024 y parte del 2025, el desempleo se ha mantenido entre el 8 % y el 9 %. Hace unos años, entre 2014 y 2018, el desempleo era más bajo, cerca del 6 % o 7 %, lo que muestra que la economía chilena ha pasado por varios cambios. Actualmente, la tasa de empleo en Chile está cerca del 56 %. En general, el país muestra señales de recuperación después de los años más difíciles, aunque el ritmo de crecimiento laboral sigue siendo moderado. <strong>Calificación:</strong> 3</p>
            <p><strong>Referencias:</strong></p>
            <p className="ml-8">Instituto Nacional de Estadísticas de Chile. (2025). <em>Tasa de desocupación</em>. https://www.ine.gob.cl</p>
            <p className="ml-8">Macrotrends. (2025). <em>Chile unemployment rate</em>. https://www.macrotrends.net</p>
            <p className="ml-8">Trading Economics. (2025). <em>Chile unemployment rate</em>. https://tradingeconomics.com</p>
            <p className="ml-8">YCharts. (2025). <em>Chile unemployment rate</em>. https://ycharts.com</p>
          </div>
          <div>
            <h3 className="mb-2 text-lg font-semibold text-zinc-800">Inflación y poder adquisitivo</h3>
            <button onClick={() => setOpenImg("/inflacion2.jpeg")} className="mb-3 block overflow-hidden rounded-xl border bg-white p-2 hover:shadow">
              <Image src="/inflacion2.jpeg" alt="Tasa de cambio Chile" width={0} height={0} sizes="100vw" style={{ width: "100%", height: "auto" }} />
            </button>
            <p>En los últimos años, en Chile los precios han subido de forma moderada, lo que afecta el poder adquisitivo de las familias. Por ejemplo, la inflación anual fue de alrededor de 4,3 % en 2024. En 2023 llegó a aproximadamente 7,6 %, una cifra mucho más elevada que hace unos años. Al mismo tiempo, el indicador de producción por persona ajustado por paridad de poder adquisitivo (PPP) muestra que Chile tiene un nivel de ingreso per cápita relativamente alto: en 2024, ese valor fue de unos 30.182 USD en términos PPP. <strong>Calificación:</strong> 4</p>
            <p><strong>Referencias:</strong></p>
            <p className="ml-8">Banco Mundial. (2024). <em>Inflation, consumer prices (annual %): Chile</em>. https://data.worldbank.org</p>
            <p className="ml-8">FocusEconomics. (2024). <em>Chile – Consumer Price Index (CPI)</em>. https://www.focus-economics.com</p>
            <p className="ml-8">Trading Economics. (2024). <em>Chile GDP per capita PPP</em>. https://tradingeconomics.com</p>
          </div>
          <div>
            <h3 className="mb-2 text-lg font-semibold text-zinc-800">Tasa de cambio</h3>
            <button onClick={() => setOpenImg("/tasadecambio.jpeg")} className="mb-3 block overflow-hidden rounded-xl border bg-white p-2 hover:shadow">
              <Image src="/tasadecambio.jpeg" alt="Tasa de cambio Chile" width={0} height={0} sizes="100vw" style={{ width: "100%", height: "auto" }} />
            </button>
            <p>La gráfica del tipo de cambio entre el peso chileno (CLP) y el dólar estadounidense (USD) muestra cómo el valor del peso ha variado durante los últimos años. Se observa una tendencia general al aumento del valor del dólar frente al peso, lo que significa que la moneda chilena se ha ido depreciando. En el gráfico, el tipo de cambio pasa de niveles cercanos a los 800 pesos por dólar en años anteriores, hasta ubicarse alrededor de los 940 a 950 pesos por dólar en 2025. Este comportamiento refleja la influencia de distintos factores económicos, como el aumento de la inflación, los movimientos en el precio del cobre y la política monetaria del Banco Central. Cuando el dólar sube frente al peso, los productos importados se encarecen; sin embargo, también puede favorecer las exportaciones. <strong>Calificación:</strong> 3</p>
            <p><strong>Referencias:</strong></p>
            <p className="ml-8">Banco Central de Chile. (2025). <em>Tipo de cambio nominal</em>. https://www.bcentral.cl</p>
            <p className="ml-8">CEIC Data. (s.f.). <em>Chile exchange rate</em>. https://www.ceicdata.com</p>
            <p className="ml-8">Trading Economics. (s.f.). <em>Chilean peso</em>. https://tradingeconomics.com</p>
            <p className="ml-8">XE. (s.f.). <em>CLP to USD chart</em>. https://www.xe.com</p>
          </div>
        </div>
      </Accordion>

      <Accordion title="PESTEL" color="border-purple-200 bg-purple-50">
        <div className="space-y-4">
          <div>
            <h3 className="mb-2 text-lg font-semibold text-zinc-800">Político</h3>
            <p>Chile tiene un puntaje de 7,83 en el índice The Economist Intelligence Unit de Democracia para 2024, lo que lo clasifica como una “democracia defectuosa”. En cuanto a indicadores más específicos: el índice de democracia electoral fue de 0,838 en 2023; el índice de democracia liberal es de 0,786 en 2023. En participación ciudadana, 0,599 en 2023. En conjunto, estos datos indican que Chile cuenta con instituciones democráticas relativamente sólidas, con elecciones limpias, libertad de expresión y una ciudadanía formalmente involucrada, aunque con retos de participación, confianza y cultura política.</p>
            <p><strong>Referencias:</strong></p>
            <p className="ml-8">StatBase. (2024). <em>Democracy Index: Chile</em>. https://www.statbase.com</p>
            <p className="ml-8">TheGlobalEconomy.com. (s.f.). <em>Chile: Political and economic indicators</em>. https://www.theglobaleconomy.com</p>
          </div>
          <div>
            <h3 className="mb-2 text-lg font-semibold text-zinc-800">Económico</h3>
            <p>Los desequilibrios macroeconómicos generados por la pandemia se han resuelto en gran medida. La economía chilena ha retomado su tendencia de crecimiento y la inflación ha disminuido desde un máximo del 14,1% en 2022 hasta el 4,2% en 2024 gracias a políticas macroeconómicas adecuadas. Sin embargo, la concurrencia de ingresos de Chile se ha estancado desde 2012, lo que refleja la disminución de la productividad y la inversión. Las perspectivas de crecimiento a largo plazo dependen de superar barreras de productividad, inversión y margen de gasto público. Se estima crecimiento sólido 2025-2026.</p>
            <p><strong>Referencia:</strong> OECD. (2025). <em>OECD Economic Surveys: Chile 2025</em>. OECD Publishing. https://doi.org/10.1787/efad96ce-en</p>
          </div>
          <div>
            <h3 className="mb-2 text-lg font-semibold text-zinc-800">Social</h3>
            <p>Chile es uno de los países latinoamericanos con mejor desarrollo humano, con un IDH alto (0.851) y esperanza de vida de 80 años. Población altamente alfabetizada y clase media amplia, aunque persiste polarización en ingresos y acceso a servicios.</p>
            <p><strong>Referencias:</strong></p>
            <p className="ml-8">Datosmacro. (s.f.). <em>Chile – Índice de Desarrollo Humano (IDH)</em>. https://datosmacro.expansion.com</p>
            <p className="ml-8">World Bank. (s.f.). <em>Life expectancy at birth: Chile</em>. https://data.worldbank.org</p>
          </div>
          <div>
            <h3 className="mb-2 text-lg font-semibold text-zinc-800">Tecnológico</h3>
            <p>Fuerte infraestructura digital; ~94 % penetración de internet. Avance en fibra y 5G. Desafíos en banda ancha fija (~23 % en 2023) que puede afectar calidad de servicio en zonas.</p>
            <p><strong>Referencias:</strong></p>
            <p className="ml-8">BritCham Chile. (2022). <em>Technology report: Chile</em>. https://www.britcham.cl</p>
            <p className="ml-8">H2 Chile. (2024). <em>Renewable energy and hydrogen in Chile</em>. https://www.h2chile.cl</p>
            <p className="ml-8">Helgi Library. (2023). <em>Fixed broadband subscriptions: Chile</em>. https://www.helgilibrary.com</p>
            <p className="ml-8">Internet Society. (2024). <em>Chile internet infrastructure</em>. https://www.internetsociety.org</p>
            <p className="ml-8">U.S. Department of Commerce, International Trade Administration. (2024). <em>Chile – Country commercial guide</em>. https://www.trade.gov</p>
          </div>
          <div>
            <h3 className="mb-2 text-lg font-semibold text-zinc-800">Ecológico</h3>
            <p>Riesgos climáticos y metas de descarbonización. Se requiere aumentar inversión en adaptación, precio del carbono, regulación, inversión e infraestructura de transmisión. Posible brecha con metas 2025-2030 si no se acelera reducción de emisiones.</p>
            <p><strong>Referencia:</strong> OECD. (2025). <em>OECD Economic Surveys: Chile 2025</em>. OECD Publishing. https://doi.org/10.1787/efad96ce-en</p>
          </div>
          <div>
            <h3 className="mb-2 text-lg font-semibold text-zinc-800">Legal</h3>
            <p>Marco legal sólido, transparente y alineado con estándares internacionales; seguridad jurídica para empresas. TLCs facilitan internacionalización. Fortalecimiento normativas ambientales y laborales aumenta costos de cumplimiento.</p>
            <p><strong>Referencia:</strong> Servicio Nacional de Aduanas de Chile. (s.f.). <em>Normativas y regulaciones aduaneras</em>. https://www.aduana.cl</p>
          </div>
        </div>
      </Accordion>
    </div>
  );

  const powerBIContent = (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="mb-2 text-3xl font-bold text-zinc-800">Power BI</h2>
        <p className="text-zinc-600">Imágenes y gráficos extraídos del documento</p>
      </div>
      <div>
        <button onClick={() => setOpenImg(powerBIImages[0])} className="group overflow-hidden rounded-xl border bg-white p-2 transition hover:shadow">
          <div className="relative w-full bg-zinc-50">
            <Image src={powerBIImages[0]} alt="Power BI" width={0} height={0} sizes="100vw" style={{ width: "100%", height: "auto" }} />
          </div>
        </button>
      </div>
      <Modal isOpen={!!openImg} onClose={() => setOpenImg(null)} title="Power BI">
        {openImg && (
          <div className="relative w-full bg-white">
            <Image src={openImg} alt="Power BI" width={0} height={0} sizes="90vw" style={{ width: "100%", height: "auto" }} />
          </div>
        )}
      </Modal>
    </div>
  );

  const powerBITrabajo4Content = (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="mb-2 text-3xl font-bold text-zinc-800">Power BI (Trabajo 4)</h2>
        <p className="text-zinc-600">Gráficas del documento “Trabajo 4” (galería completa)</p>
      </div>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
        {powerBITrabajo4Images.map((src) => (
          <button key={src} onClick={() => setOpenImg(src)} className="group overflow-hidden rounded-xl border bg-white p-2 transition hover:shadow">
            <div className="relative w-full bg-zinc-50">
              <img src={src} alt="Power BI Trabajo 4" className="w-full h-auto" />
            </div>
          </button>
        ))}
      </div>
      <Modal isOpen={!!openImg} onClose={() => setOpenImg(null)} title="Power BI (Trabajo 4)">
        {openImg && (
          <div className="relative w-full bg-white">
            <img src={openImg} alt="Power BI Trabajo 4" className="w-full h-auto" />
          </div>
        )}
      </Modal>
    </div>
  );

  const comparativoContent = (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="mb-2 text-3xl font-bold text-zinc-800">Cuadro comparativo</h2>
        <p className="text-zinc-600">Indicadores económicos de Panamá y Chile</p>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full overflow-hidden rounded-xl border border-zinc-200 bg-white text-left">
          <thead className="bg-pink-50">
            <tr>
              <th className="px-4 py-3 text-sm font-semibold text-zinc-700">Indicador</th>
              <th className="px-4 py-3 text-sm font-semibold text-zinc-700">Panamá</th>
              <th className="px-4 py-3 text-sm font-semibold text-zinc-700">Chile</th>
            </tr>
          </thead>
          <tbody className="align-top">
            <tr className="border-t">
              <td className="px-4 py-3 font-medium text-zinc-800">PIB y crecimiento</td>
              <td className="px-4 py-3 text-zinc-700">
                Manifestó tasas de crecimiento excepcionalmente altas en la región (2015-2019). Experimentó una caída aguda en 2020 (-18,9%) debido a la crisis sanitaria, seguida de un vigoroso rebote en 2021 (15,1%), evidenciando una rápida resiliencia. El crecimiento se modera a 1,6% en 2024. Su estructura económica pende esencialmente del comercio global (Canal de Panamá y plataforma logística).
              </td>
              <td className="px-4 py-3 text-zinc-700">
                Presentó un crecimiento moderado y fluctuante entre 2015 y 2024. La crisis de 2020 supuso una contracción de -7%. La recuperación en 2021 fue intensa (10%), si bien su impulso fue efímero. La variabilidad obedece a la sensibilidad a factores globales y a la inestabilidad política e inflacionaria interna.
              </td>
            </tr>
            <tr className="border-t">
              <td className="px-4 py-3 font-medium text-zinc-800">Inflación y poder adquisitivo</td>
              <td className="px-4 py-3 text-zinc-700">
                Ha mantenido una inflación históricamente baja y notablemente estable (promedio cercano al 0,8% anual) a lo largo del periodo. La dolarización mitiga la volatilidad cambiaria e impide el descontrol de precios. El PIB per cápita se incrementó de US$14.000 a más de US$19.000, denotando una elevación del poder adquisitivo promedio, aunque subsisten disparidades distributivas.
              </td>
              <td className="px-4 py-3 text-zinc-700">
                Los precios han exhibido un incremento moderado pero persistente; la inflación se ubicó aproximadamente en 7,6% en 2023 y alrededor de 4,3% en 2024, lo cual erosionó la capacidad de compra. El ingreso per cápita (PPA) en 2024 fue superior, alcanzando aproximadamente US$30.182.
              </td>
            </tr>
            <tr className="border-t">
              <td className="px-4 py-3 font-medium text-zinc-800">Tasa de interés de referencia</td>
              <td className="px-4 py-3 text-zinc-700">
                La tasa de interés real manifestó una trayectoria descendente: desde un pico de ~7,5% en 2020 hasta 4,6% en 2022. La dolarización confiere una previsibilidad considerable en los costos financieros, aunque subordina la autonomía de la política monetaria a las determinaciones de la Reserva Federal (FED) de EE. UU.
              </td>
              <td className="px-4 py-3 text-zinc-700">
                La tasa de interés oficial varió notablemente: estable y reducida (2015-2019), con un repunte posterior a más del 10% en 2022 para contener la inflación, y una subsiguiente disminución hasta cerca del 6% en 2024 (tasa de ~6,22%). Estas oscilaciones afectan el consumo y la inversión, reflejando la autonomía, pero también la volatilidad, de su Banco Central.
              </td>
            </tr>
            <tr className="border-t">
              <td className="px-4 py-3 font-medium text-zinc-800">Tipo y tasa de cambio</td>
              <td className="px-4 py-3 text-zinc-700">
                El tipo de cambio (PAB/USD) se mantiene en una paridad inalterable de 1:1 desde 1904, dada la dolarización oficial. Este régimen asegura una estabilidad cambiaria absoluta y una inflación contenida. Como contrapartida, el país carece de instrumentos de política monetaria propia.
              </td>
              <td className="px-4 py-3 text-zinc-700">
                El peso chileno (CLP) ha experimentado una depreciación frente al dólar, fluctuando entre 800 CLP/USD y 940–950 CLP/USD en 2025. Esta devaluación es imputable a la inflación, la cotización del cobre y las decisiones monetarias. Si bien encarece las importaciones, potencia la competitividad de las exportaciones.
              </td>
            </tr>
            <tr className="border-t">
              <td className="px-4 py-3 font-medium text-zinc-800">Empleo y desempleo</td>
              <td className="px-4 py-3 text-zinc-700">
                Se observa una recuperación efectiva del mercado laboral post-pandemia. La tasa de desempleo se sitúa en torno al 6,5% (2025), una mejora sustancial respecto al pico de ~18% en 2020. El impulso radica en los sectores de logística, construcción y servicios financieros, si bien persisten desafíos en la informalidad y la calidad del trabajo.
              </td>
              <td className="px-4 py-3 text-zinc-700">
                La tasa de desempleo alcanzó su máximo en 2020 (~11%), disminuyendo a ~9% en 2021 y estabilizándose entre 8–9% en 2024–2025. La tasa de empleo se mantiene cercana al 56%. La recuperación es catalogada como moderada con una limitación en el ritmo de generación de nuevos puestos de trabajo.
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );

  const entornosPanamaContent = (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="mb-2 text-3xl font-bold text-zinc-800">Panamá: 5 entornos, 3 indicadores c/u</h2>
        <p className="text-zinc-600">Contenido completo según “Trabajo 4 (1).docx”</p>
      </div>

      <Accordion title="Entorno Cultural (1)" defaultOpen={true} color="border-pink-200 bg-pink-50">
        <div className="space-y-4">
          <div>
            <h3 className="mb-2 text-lg font-semibold text-zinc-800">Indicador 1: Dimensiones culturales de Hofstede y distancia cultural</h3>
            <div className="overflow-x-auto">
              <table className="min-w-full overflow-hidden rounded-xl border border-zinc-200 bg-white text-left">
                <thead className="bg-pink-50">
                  <tr>
                    <th className="px-4 py-3 text-sm font-semibold text-zinc-700">Dimensión</th>
                    <th className="px-4 py-3 text-sm font-semibold text-zinc-700">Puntuación (Panamá)</th>
                    <th className="px-4 py-3 text-sm font-semibold text-zinc-700">Descripción Cultural</th>
                  </tr>
                </thead>
                <tbody className="align-top">
                  <tr className="border-t">
                    <td className="px-4 py-3 text-zinc-800">Distancia de Poder (DdP)</td>
                    <td className="px-4 py-3 text-zinc-800">95</td>
                    <td className="px-4 py-3 text-zinc-700">Muy Alta: Sociedad jerárquica</td>
                  </tr>
                  <tr className="border-t">
                    <td className="px-4 py-3 text-zinc-800">Individualismo (IDV)</td>
                    <td className="px-4 py-3 text-zinc-800">11</td>
                    <td className="px-4 py-3 text-zinc-700">Muy Baja: Sociedad colectivista</td>
                  </tr>
                  <tr className="border-t">
                    <td className="px-4 py-3 text-zinc-800">Motivación hacia el Logro y el Éxito (MAS)</td>
                    <td className="px-4 py-3 text-zinc-800">44</td>
                    <td className="px-4 py-3 text-zinc-700">Baja/Media: Sociedad de Consenso</td>
                  </tr>
                  <tr className="border-t">
                    <td className="px-4 py-3 text-zinc-800">Evitación de la Incertidumbre (UAI)</td>
                    <td className="px-4 py-3 text-zinc-800">86</td>
                    <td className="px-4 py-3 text-zinc-700">Muy Alta: Alta necesidad emocional de reglas</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-4">1.Distancia de Poder (DdP: 95): Con una puntuación muy alta, Panamá es una sociedad jerárquica. Las personas aceptan un orden jerárquico donde cada individuo tiene un lugar que no necesita justificación adicional. La jerarquía se percibe como un reflejo de las desigualdades inherentes. La centralización es popular, los subordinados esperan que se les diga qué hacer, y el jefe ideal es un autócrata benévolo.</p>
            <p>2. Individualismo (IDV: 11): La puntuación muy baja clasifica a Panamá como una sociedad colectivista. Esto se manifiesta en un compromiso cercano y a largo plazo con el "grupo" (familiar, familia extendida o relaciones extendidas)</p>
            <p>3. Motivación hacia el Logro y el Éxito (MAS: 44): Este puntaje caracteriza a Panamá como una sociedad de consenso relativo. El enfoque está en "trabajar para vivir". Los gerentes buscan el consenso, y las personas valoran la igualdad, la solidaridad y la calidad en su vida laboral. Los conflictos se resuelven mediante el compromiso y la negociación.</p>
            <p>4. Evitación de la Incertidumbre (UAI: 86): La puntuación alta indica una alta preferencia por evitar la incertidumbre. Esto se manifiesta como una necesidad emocional de reglas estrictas, leyes y regulaciones para minimizar la incertidumbre, incluso si estas reglas no siempre parecen funcionar. Las sociedades con alta UAI mantienen códigos rígidos de comportamiento y son intolerantes con ideas poco ortodoxas. La precisión y la puntualidad son la norma, y la seguridad es un elemento importante en la motivación individual.</p>
            <p>Distancia Cultural Panamá se encuentra entre las culturas más colectivistas del mundo, junto con Ecuador y Guatemala. Su alta Evitación de la Incertidumbre es un rasgo cultural que comparte con la mayoría de los países latinoamericanos que pertenecieron al reino español, como Argentina, Perú, y El Salvador.</p>
            <p><strong>calificacion: 4</strong></p>
            <p><strong>Referencia:</strong> The Culture Factor Group. (s.f.). <em>Country comparison tool: Panama</em>. https://www.theculturefactor.com/country-comparison-tool</p>
          </div>
          <div>
            <h3 className="mb-2 text-lg font-semibold text-zinc-800">Indicador 2: Religión y valores culturales relevantes</h3>
            <p>Panamá es un país con una fuerte tradición cristiana, especialmente católica, aunque con tendencias crecientes de pluralidad religiosa que reflejan cambios sociales y culturales.  Alrededor del 70 % de los panameños se identifica como católico, mientras que cerca del 19 % son protestantes “Evangelical / Protestant”, y aproximadamente el 7 % no están afiliados a ninguna religión formal o son “otros”, lo que señala una diversificación paulatina en la afiliación. Además, de acuerdo con estudios legales y de libertad religiosa, entre el 75 y 85 % de la población panameña se considera católica, y entre un 15 y 25 % se identifica como cristiano evangélico, según estimaciones basadas en encuestas y no en datos censales, dado que el Estado no recopila afiliación religiosa en sus censos.
              En cuanto a minorías religiosas, hay presencia de grupos más pequeños como mormones, adventistas, Testigos de Jehová, así como comunidades de judíos, hindúes, budistas y musulmanes, junto con prácticas religiosas indígenas. Estas minorías reflejan la pluralidad cultural y étnica del país, especialmente en áreas con poblaciones indígenas o afrodescendientes, lo que añade complejidad a su paisaje religioso.
              Los valores culturales dominantes en Panamá influenciados por su mayoría católica tienden a valorar la familia, la tradición y la moral cristiana, pero está emergiendo un componente evangélico con impactos sociales algunas comunidades evangélicas promueven un compromiso activo con la política, la moral social y una religiosidad práctica. Además, la libertad de culto está garantizada en la constitución panameña, lo que favorece una convivencia relativamente pacífica entre diferentes credos y una diversidad religiosa creciente.
              En términos sociales, este fuerte núcleo cristiano influye en cómo se construyen las normas, valores sobre la familia, género, la vida comunitaria pero la tendencia hacia relaciones más diversas, junto con la presencia de religiones no cristianas y la no afiliación, apunta a una sociedad en transformación religiosa. Este cambio cultural abre oportunidades para actores institucionales y empresariales para dialogar con valores religiosos, ya sea para programas sociales, responsabilidad corporativa o iniciativas comunitarias, reconociendo tanto el peso de la tradición católica como el dinamismo de nuevas expresiones de fe.
            </p>
            <img src="/trabajo4_1_assets/doc4_image8.jpg" alt="Religión y valores culturales relevantes" className="h-auto w-full" />
            <p><strong>calificacion: 4</strong></p>
            <p><strong>Referencias:</strong></p>
            <p className="ml-8">Catholics & Cultures. (s.f.). <em>Panama</em>. https://www.catholicsandcultures.org</p>
            <p className="ml-8">International Center for Law and Religion Studies (ICLRS). (s.f.). <em>Panama religious freedom report</em>. https://www.iclrs.org</p>
            <p className="ml-8">Pew Research Center. (2014). <em>Religion in Latin America: Widespread change in a historically Catholic region</em>. https://www.pewresearch.org</p>
            <p className="ml-8">U.S. Department of State. (2008). <em>International religious freedom report 2008: Panama</em>. https://www.state.gov</p>
          </div>
          <div>
            <h3 className="mb-2 text-lg font-semibold text-zinc-800">Indicador 3: Nivel de alfabetismo y educación</h3>
            <p>Panamá ha logrado un nivel muy alto de alfabetización entre su población adulta, lo cual es un pilar fundamental para su desarrollo educativo y social,la tasa de alfabetización de adultos (mayores de 15 años) ha crecido desde alrededor del 88 % en 1980 hasta aproximadamente el 96,1 % en 2023. Esta cifra alta refleja avances sostenidos en acceso a la educación básica y en la capacidad lecto escritora de gran parte de la población panameña. Además, los datos de jóvenes de 15 a 24 años son aún más alentadores: la tasa de alfabetización juvenil en ese grupo llega al 98,88 % 2019
              Sin embargo, a pesar de que la alfabetización formal es muy alta, el problema del aprendizaje real es preocupante: un informe reciente indica que el “learning poverty” en Panamá es elevado es decir, un alto porcentaje de niños en edad primaria no logra un nivel mínimo de competencia lectora para su edad, lo que plantea un desafío para la calidad educativa, no solo para la cobertura.
              En cuanto a la estructura educativa,el promedio de años de escolaridad para la población mayor de 25 años en Panamá es de 9,04 años, lo cual sugiere que muchas personas completan la educación básica y algunos pasan a niveles secundarios, pero no todos alcanzan niveles superiores. Este dato también indica desigualdades: el análisis del Banco Mundial muestra que los niños indígenas abandonan la escuela más temprano, lo cual limita sus años de educación y su capacidad de alfabetización funcional a largo plazo.
              Estos datos perfilan un panorama mixto: por un lado, Panamá ha consolidado un muy buen nivel de alfabetización formal, lo cual crea una base sólida para la educación y el desarrollo. Por otro lado, los retos persisten en calidad: la alta “learning poverty” indica que muchos estudiantes no alcanzan competencias esenciales, y la diferencia de logros según grupos poblacionales  sugiere que el progreso no es homogéneo. Para políticas públicas y empresas que dependan de capital humano. </p>
            <img src="/trabajo4_1_assets/doc4_image26.png" alt="Religión y valores culturales relevantes" className="h-auto w-full" />
            <p><strong>calificacion: 5  </strong></p>
            <p><strong>Referencias:</strong></p>
            <p className="ml-8">Federal Reserve Economic Data (FRED). (s.f.). <em>Literacy rate: Panama</em>. https://fred.stlouisfed.org</p>
            <p className="ml-8">OECD. (2017-2018). <em>Multi-dimensional review of Panama</em>. OECD Publishing. https://www.oecd.org</p>
            <p className="ml-8">World Bank & UNESCO Institute for Statistics. (2022). <em>Learning poverty: Panama</em>. https://www.worldbank.org</p>
          </div>
        </div>
      </Accordion>

      <Accordion title="Entorno Político y Legal (2)" color="border-blue-200 bg-blue-50">
        <div className="space-y-4">
          <div>
            <h3 className="mb-2 text-lg font-semibold text-zinc-800">Indicador 1: Regulaciones específicas del sector</h3>
            <p>regulaciones específicas del sector :
              iLa estabilidad macroeconómica de Panamá sustentada en la dolarización, un sector financiero sólido y su posición logística internacional contrasta con desafíos en su marco regulatorio sectorial. La literatura académica y los informes institucionales muestran que la regulación es formalmente robusta, pero su aplicación es desigual según el sector.
              En áreas como infraestructura, energía, transporte y minería, estudios sobre gobernanza señalan problemas recurrentes: discrecionalidad política, debilidad en la supervisión técnica y procesos de licitación susceptibles a presiones de grupos económicos. Estos factores incrementan el riesgo regulatorio, afectando la predictibilidad para inversionistas, aunque Panamá ha avanzado en transparencia y regulación financiera, aún persisten vacíos en la implementación y continuidad de las normas,sobre todo ante cambios gubernamentales.
              La investigación sobre gobernanza de megaproyectos en Panamá muestra cómo prácticas institucionales y culturales influyen en decisiones regulatorias, pudiendo generar retrasos, sobrecostos o modificaciones normativas. Por eso, para sectores regulados se recomienda combinar análisis jurídico detallado, evaluación del riesgo político y estrategias de mitigación social y contractual.
              Panamá ofrece oportunidades atractivas, pero la estabilidad depende del sector: donde la regulación es clara y tecnificada (finanzas, logística), el riesgo es bajo; en sectores con alta intervención estatal (infraestructura, energía), la incertidumbre regulatoria es mayor.
            </p>
            <p><strong>calificacion: 5  </strong></p>
            <p><strong>Referencias:</strong></p>
            <p className="ml-8">Bertelsmann Stiftung. (2024). <em>BTI 2024 country report: Panama</em>. https://bti-project.org</p>
            <p className="ml-8">International Monetary Fund. (s.f.). <em>Financial Sector Assessment Program (FSAP): Panama</em>. https://www.imf.org</p>
            <p className="ml-8">U.S. Department of State. (s.f.). <em>Investment Climate Statements: Panama</em>. https://www.state.gov</p>
            <p className="ml-8">van Marrewijk, A. (2016). <em>Conflicting practices in megaproject governance</em>. Project Management Journal.</p>
            <p className="ml-8">World Bank. (s.f.). <em>Infrastructure development: Panama</em>. https://www.worldbank.org</p>
          </div>
          <div>
            <h3 className="mb-2 text-lg font-semibold text-zinc-800">Indicador 2: Índice de gobernanza mundial (WGI)</h3>
            <p>Se muestra que Panamá mantiene un nivel de gobernanza moderado, ubicándose en una posición intermedia dentro de América Latina. El país sobresale en calidad regulatoria, lo que indica que sus normas para el funcionamiento de empresas y actividades económicas son relativamente claras y predecibles. Esto ha contribuido a que Panamá siga siendo atractivo para la inversión extranjera y para sectores como comercio, logística y servicios.
              Aun así, el WGI también evidencia áreas donde Panamá enfrenta retos importantes, especialmente en estado de derecho y control de la corrupción. Estos indicadores reflejan dificultades en la aplicación efectiva de las leyes, en la confianza ciudadana hacia las instituciones y en la percepción de integridad del sector público. Estos factores son determinantes porque influyen en la estabilidad institucional y en la evaluación del riesgo país.
              En cuanto a la estabilidad política y la voz y rendición de cuentas, Panamá muestra variaciones según cada periodo gubernamental. Si bien hay espacios de participación y cierta apertura institucional, continúan existiendo desafíos relacionados con transparencia y fortalecimiento democrático.
              Panamá posee bases sólidas en algunos ámbitos clave, pero necesita mejorar en las áreas institucionales críticas para consolidar un entorno más confiable, estable y competitivo tanto para los ciudadanos como para los inversionistas.
            </p>
            <p><strong>calificacion: 4</strong></p>
            <p><strong>Referencias:</strong></p>
            <p className="ml-8">International Monetary Fund. (2022). <em>Panama: Staff report for the 2022 Article IV consultation</em> (Country Report). https://www.imf.org</p>
            <p className="ml-8">World Bank. (s.f.). <em>Country data report: Panama</em>. https://www.worldbank.org</p>
            <p className="ml-8">World Bank. (s.f.). <em>Worldwide Governance Indicators (WGI)</em>. https://info.worldbank.org/governance/wgi/</p>
          </div>
          <div>
            <h3 className="mb-2 text-lg font-semibold text-zinc-800">Indicador 3: Índice de riesgo político</h3>
            <p>El riesgo político en Panamá se considera moderado, influenciado principalmente por la calidad institucional y los niveles de confianza ciudadana en el Estado. Aunque el país mantiene un clima económico favorable y una tradición de apertura a la inversión extranjera, persisten debilidades que incrementan la percepción de riesgo para los inversionistas.
              La OCDE señala que Panamá presenta bajos niveles de confianza en el gobierno y en la transparencia de los procesos electorales, lo que refleja un desgaste institucional que puede afectar la estabilidad de políticas públicas a largo plazo. Asimismo, el Banco Mundial identifica riesgos sustanciales en gobernanza, especialmente en la coordinación interinstitucional y en la capacidad del Estado para ejecutar programas y reformas, lo que puede generar incertidumbre para proyectos privados.
              Estudios regionales evidencian problemas de captura institucional y limitada efectividad en el control de la corrupción, factores que pueden distorsionar la formulación de políticas y aumentar los costos para inversionistas no alineados con grupos de influencia. En conjunto, estos elementos muestran que, aunque Panamá posee fortalezas económicas, necesita fortalecer su institucionalidad para reducir su nivel de riesgo político.
            </p>
            <img src="/trabajo4_1_assets/doc4_image7.png" alt="Religión y valores culturales relevantes" className="h-auto w-full" />

            <p><strong>Referencias:</strong></p>
            <p><strong>calificacion: 4</strong></p>
            <p className="ml-8">Dašić, D. (2022). <em>Political risk in Latin America</em>. International Journal of Economics and Business.</p>
            <p className="ml-8">OECD. (2017). <em>Multi-dimensional review of Panama: Volume 1. Initial assessment</em>. OECD Publishing. https://doi.org/10.1787/9789264278547-en</p>
            <p className="ml-8">TheGlobalEconomy.com. (s.f.). <em>Rule of law: Panama</em>. https://www.theglobaleconomy.com</p>
            <p className="ml-8">World Bank. (2016). <em>Panama development policy financing (DPF)</em>. https://www.worldbank.org</p>
          </div>
        </div>
      </Accordion>

      <Accordion title="Entorno Tecnológico y Geoambiental (3)" color="border-green-200 bg-green-50">
        <div className="space-y-4">
          <div>
            <h3 className="mb-2 text-lg font-semibold text-zinc-800">Indicador 1: Indicadores geográficos relevantes</h3>
            <div className="grid gap-3 sm:grid-cols-3">
              <button onClick={() => setOpenImg("/trabajo4_1_assets/doc4_image1.png")} className="overflow-hidden rounded-xl border bg-white p-2 hover:shadow">
                <img src="/trabajo4_1_assets/doc4_image24.png" alt="Infraestructura Logística" className="h-auto w-full" />
              </button>
              <button onClick={() => setOpenImg("/trabajo4_1_assets/doc4_image2.png")} className="overflow-hidden rounded-xl border bg-white p-2 hover:shadow">
                <img src="/trabajo4_1_assets/doc4_image22.png" alt="Riesgo Climático" className="h-auto w-full" />
              </button>
              <button onClick={() => setOpenImg("/trabajo4_1_assets/doc4_image3.png")} className="overflow-hidden rounded-xl border bg-white p-2 hover:shadow">
                <img src="/trabajo4_1_assets/doc4_image23.png" alt="Ubicación/Tránsito" className="h-auto w-full" />
              </button>
            </div>
            <p className="mt-3">La Ubicación Geográfica de Panamá es su mayor ventaja; es como un gran punto central de distribución gracias al Canal, que conecta rápidamente el Océano Pacífico con el Atlántico. Esta posición facilita el envío de la ropa deportiva a todos los mercados de América, lo que significa menos tiempo y dinero en transporte. Por esta razón, su impacto es muy bueno (Calificación 5) para nuestra estrategia de expansión regional. Además, esta ventaja se apoya en una sólida Infraestructura Logística, los puertos y servicios de aduana del país son de alta calidad (algo que confirma el índice LPI, que lo ubica entre los mejores 40 países). Esto asegura que la mercancía se mueva de manera rápida y confiable, garantizando que esta calificación también sea excelente (Calificación 5). Sin embargo, hay que tener cuidado con las Condiciones Geoambientales y el Clima, el clima tropical trae riesgos de sequías que han estado afectando el nivel de agua del Canal y lluvias fuertes que pueden causar inundaciones. El país no tiene un nivel alto de preparación contra estos riesgos (su ranking en el índice ND-GAIN es bajo). Este factor introduce un riesgo real de retrasos en la cadena de suministro, por lo que su calificación es un poco desfavorable (Calificación 3).</p>
            <p><strong>Referencias:</strong></p>
            <p className="ml-8">Autoridad del Canal de Panamá (ACP). (2024). <em>Informe Anual 2024</em>. https://www.pancanal.com</p>
            <p className="ml-8">University of Notre Dame Global Adaptation Initiative. (2023). <em>ND-GAIN Country Index: Panama</em>. https://gain.nd.edu</p>
            <p className="ml-8">World Bank. (2024). <em>Logistics Performance Index: Overall (1=low to 5=high) – Panama</em>. https://lpi.worldbank.org</p>
          </div>
          <div>
            <h3 className="mb-2 text-lg font-semibold text-zinc-800">Indicador 2: Usuarios de internet y conectividad digital</h3>
            <button onClick={() => setOpenImg("/trabajo4_1_assets/doc4_image2.png")} className="mb-3 block overflow-hidden rounded-xl border bg-white p-2 hover:shadow">
              <img src="/trabajo4_1_assets/doc4_image2.png" alt="Conectividad digital Panamá" className="h-auto w-full" />
            </button>
            <button onClick={() => setOpenImg("/trabajo4_1_assets/doc4_image1.png")} className="mb-3 block overflow-hidden rounded-xl border bg-white p-2 hover:shadow">
              <img src="/trabajo4_1_assets/doc4_image1.png" alt="Conectividad digital Panamá" className="h-auto w-full" />
            </button>
            <p>El Uso de Internet en la Población es sólido, ya que el 69% de las personas utiliza la red (dato oficial del Banco Mundial). Esto es Muy Favorable (Calificación 4), pues asegura que la mayoría de los habitantes son clientes potenciales para las ventas en línea y el marketing digital. Además, la Capacidad de la Red Móvil es Excelente (Calificación 5), ya que las cifras de la Unión Internacional de Telecomunicaciones (ITU) muestran que hay casi 97 suscripciones de Internet móvil activas por cada 100 habitantes. Esto es crucial, significa que los clientes están conectados todo el tiempo a través de sus celulares, lo que maximiza las oportunidades de que realicen compras inmediatas de nuestra ropa deportiva desde cualquier lugar. Finalmente, la Calidad de la conexión es también muy buena, con una velocidad promedio en el celular de alrededor de 41.83 Mbps (según Ookla). Este factor es Muy Favorable (Calificación 4)</p>
            <p><strong>Referencias:</strong></p>
            <p className="ml-8">International Telecommunication Union (ITU). (2022). <em>Country profile: Panama</em>. https://www.itu.int</p>
            <p className="ml-8">Ookla. (2025). <em>Speedtest Global Index: Panama</em>. https://www.speedtest.net/global-index</p>
            <p className="ml-8">World Bank. (2023). <em>Individuals using the Internet (% of population): Panama</em> [Indicador IT.NET.USER.ZS]. https://data.worldbank.org</p>
          </div>
          <div>
            <h3 className="mb-2 text-lg font-semibold text-zinc-800">Indicador 3: Acceso a tecnología e innovación</h3>
            <button onClick={() => setOpenImg("/trabajo4_1_assets/doc4_image17.png")} className="mb-3 block overflow-hidden rounded-xl border bg-white p-2 hover:shadow">
              <img src="/trabajo4_1_assets/doc4_image17.png" alt="Innovación Panamá" className="h-auto w-full" />
            </button>
            <p>Panamá ha mostrado avances pero también limitaciones en su ecosistema de innovación y acceso a tecnología se ubica en el puesto 82/139, impulsado por su buena infraestructura y un sector creativo dinámico, aunque su capacidad de investigación aún es débil. En términos de inversión en I+D, los datos más recientes reportan que Panamá destina alrededor de 0,16 % de su PIB a investigación, un nivel bajo que limita el desarrollo de proyectos tecnológicos de mayor envergadura. También enfrenta un reto importante en propiedad intelectual: en 2021 solo hubo 35 solicitudes de patentes por residentes, según la OMPI, lo que refleja una actividad inventiva limitada o con dificultades para patentar. En cuanto a energía, el acceso a la electricidad es muy amplio: cerca del 97 % de la población tenía acceso en 2023, según datos del Banco Mundial. Esto favorece la posibilidad de adoptar tecnologías intensivas en energía, siempre que se fortalezca al mismo tiempo la capacidad de innovación local. A nivel institucional, Panamá ha expresado un compromiso claro con la innovación: el gobierno ha señalado la ciencia, la educación tecnológica y el emprendimiento como pilares de su estrategia para hacer la economía más competitiva. Panamá cuenta con una base energética sólida y escena creativa prometedora, pero para avanzar en innovación necesita aumentar su inversión en I+D, fomentar la cultura de patentes y fortalecer su capital humano y la colaboración entre universidades y empresas.</p>
            <p><strong>Referencias:</strong></p>
            <p className="ml-8">CAF – Banco de Desarrollo de América Latina. (2016). <em>Hacia la transformación digital de América Latina y el Caribe: El observatorio CAF del ecosistema digital</em>. https://www.caf.com</p>
            <p className="ml-8">TheGlobalEconomy.com. (s.f.). <em>Global Innovation Index and access to electricity: Panama</em>. https://www.theglobaleconomy.com</p>
            <p className="ml-8">World Bank. (s.f.). <em>Access to electricity (% of population): Panama</em>. https://data.worldbank.org</p>
            <p className="ml-8">World Intellectual Property Organization (WIPO). (2025). <em>Global Innovation Index 2025</em>. https://www.wipo.int/global_innovation_index</p>
            <p className="ml-8">World Intellectual Property Organization (WIPO). (s.f.). <em>IP statistics data center</em>. https://www.wipo.int/ipstats</p>
          </div>
        </div>
      </Accordion>

      <Accordion title="Entorno Comercio Internacional (4)" color="border-yellow-200 bg-yellow-50">
        <div className="space-y-4">
          <div>
            <h3 className="mb-2 text-lg font-semibold text-zinc-800">Indicador 1: Instituciones de apoyo</h3>
            <p>Panamá cuenta con una amplia red de instituciones que impulsan la internacionalización empresarial mediante programas de exportación, asesorías y servicios logísticos. ProPanamá, agencia del Gobierno Nacional, lidera la promoción de exportaciones y la atracción de inversión extranjera, brindando acompañamiento técnico a las empresas interesadas en ingresar a nuevos mercados. La Cámara de Comercio, Industrias y Agricultura de Panamá (CCIAP) y la Asociación Panameña de Exportadores (APEX) ofrecen capacitaciones, misiones comerciales y eventos empresariales que facilitan contactos internacionales. Además, la Zona Libre de Colón (ZLC) representa una plataforma clave para la distribución regional, otorgando beneficios fiscales y logísticos. El Ministerio de Comercio e Industrias (MICI) y la Autoridad Nacional de Aduanas (ANA) garantizan el cumplimiento normativo y los procedimientos de exportación, mientras que la Cámara Panameña de Comercio Electrónico (CAPACE) fomenta la digitalización y el comercio electrónico, aspecto esencial para una marca de ropa deportiva con proyección global.</p>
            <p><strong>Calificación:</strong> 5</p>
            <p><strong>Referencias:</strong></p>
            <p className="ml-8">Asociación Panameña de Exportadores (APEX). (2024). <em>Servicios de promoción de exportaciones</em>. https://www.apexpanama.com</p>
            <p className="ml-8">Autoridad Nacional de Aduanas de Panamá (ANA). (2024). <em>Procedimientos aduaneros</em>. https://www.ana.gob.pa</p>
            <p className="ml-8">Cámara de Comercio, Industrias y Agricultura de Panamá (CCIAP). (2024). <em>Servicios empresariales</em>. https://www.panacamara.com</p>
            <p className="ml-8">Cámara Panameña de Comercio Electrónico (CAPACE). (2024). <em>Desarrollo del e-commerce en Panamá</em>. https://www.capace.org</p>
            <p className="ml-8">Ministerio de Comercio e Industrias de Panamá (MICI). (2024). <em>Servicios de comercio exterior</em>. https://mici.gob.pa</p>
            <p className="ml-8">ProPanamá. (2024). <em>Promoción de exportaciones e inversiones</em>. https://www.propanama.gob.pa</p>
            <p className="ml-8">Zona Libre de Colón (ZLC). (2024). <em>Servicios logísticos y beneficios fiscales</em>. https://www.zolicol.gob.pa</p>
          </div>
          <div>
            <h3 className="mb-2 text-lg font-semibold text-zinc-800">Indicador 2: Evolución balanza comercial Colombia–Panamá</h3>
            <button onClick={() => setOpenImg("/trabajo4_1_assets/doc4_image25.png")} className="mb-3 block overflow-hidden rounded-xl border bg-white p-2 hover:shadow">
              <img src="/trabajo4_1_assets/doc4_image25.png" alt="Balanza comercial PAN-COL" className="h-auto w-full" />
            </button>
            <p>La balanza comercial entre Colombia y Panamá es altamente favorable para Colombia, lo que se conoce como superávit comercial. Esto significa que Colombia le vende (exporta) a Panamá mucho más de lo que le compra (importa). Por ejemplo, en 2023, las exportaciones colombianas alcanzaron un valor de 4.166 millones de dólares hacia Panamá. Aunque la mayor parte de este valor proviene de productos grandes como el petróleo crudo y los minerales, el hecho de que Panamá sea un mercado que ya compra tanto a Colombia es una gran ventaja para nuestra empresa de ropa deportiva. Este superávit sostenido confirma dos cosas importantes para la estrategia de internacionalización. La primera es la cercanía y el fuerte flujo comercial establecido facilitan la distribución y ayudan a reducir los tiempos de envío y la complejidad de los trámites. Esto se traduce en costos logísticos más bajos para nuestra empresa y la segunda es que el mercado panameño es un receptor natural de bienes colombianos. La estrategia de la empresa se beneficia de que los consumidores panameños están familiarizados y confían en la calidad de los productos de origen colombiano, lo que minimiza el riesgo de entrada en el mercado.</p>
            <p><strong>Calificación:</strong> 4</p>
            <p><strong>Referencia:</strong> Observatory of Economic Complexity (OEC). (s.f.). <em>Colombia (COL) and Panama (PAN) trade</em>. https://oec.world</p>
          </div>
          <div>
            <h3 className="mb-2 text-lg font-semibold text-zinc-800">Indicador 3: Desempeño logístico y ruta de exportación</h3>
            <button onClick={() => setOpenImg("/trabajo4_1_assets/doc4_image11.png")} className="mb-3 block overflow-hidden rounded-xl border bg-white p-2 hover:shadow">
              <img src="/trabajo4_1_assets/doc4_image11.png" alt="Desempeño logístico y ruta" className="h-auto w-full" />
            </button><button onClick={() => setOpenImg("/trabajo4_1_assets/doc4_image20.png")} className="mb-3 block overflow-hidden rounded-xl border bg-white p-2 hover:shadow">
              <img src="/trabajo4_1_assets/doc4_image20.png" alt="Desempeño logístico y ruta" className="h-auto w-full" />
            </button>
            <p>El Índice de Desempeño Logístico (LPI) es una medida del Banco Mundial que evalúa qué tan fácil, rápido y eficiente es mover mercancías a través de las aduanas y la infraestructura de un país. En la última medición disponible (Informe 2023, con datos de 2022), Panamá obtuvo un puntaje de 3.10 en una escala de 1 a 5, lo cual lo sitúa en la posición global 57. Aunque el ranking global ha descendido ligeramente respecto a años anteriores (en 2018 estaba en la posición 38), el puntaje de 3.10 sigue siendo una señal fuerte de que el país tiene una logística confiable. Este alto desempeño se basa en su infraestructura marítima, centrada en el famoso Canal de Panamá y sus puertos clave como Balboa (en el lado Pacífico) y Manzanillo (en el lado Atlántico). Esta red garantiza alta puntualidad y facilita la gestión de aduanas. Para una empresa de ropa deportiva, un LPI tan sólido es altamente favorable, pues minimiza los riesgos de retraso en la llegada de colecciones y mantiene bajos los costos logísticos, asegurando que el producto colombiano sea competitivo en el mercado panameño.</p>
            <p><strong>Calificación:</strong> 5</p>
            <p><strong>Referencia:</strong> World Bank. (s.f.). <em>Logistics Performance Index: Overall LPI score</em> [Serie LP.LPI.OVRL.XQ]. https://lpi.worldbank.org</p>
          </div>
        </div>
      </Accordion>

      <Accordion title="Entorno Inversión Extranjera Directa (5)" color="border-purple-200 bg-purple-50">
        <div className="space-y-4">
          <div>
            <img src="/trabajo4_1_assets/doc4_image9.png" alt="Flujos de IED entre Colombia y Panamá" className="h-auto w-full" />
            <img src="/trabajo4_1_assets/doc4_image18.png" alt="Flujos de IED entre Colombia y Panamá" className="h-auto w-full" />
            <h3 className="mb-2 text-lg font-semibold text-zinc-800">Indicador 1: Flujos de IED entre Colombia y Panamá</h3>
            <p>l flujo de inversión se refiere al movimiento de capital entre países, y en este caso se mide por la Inversión Extranjera Directa (IED), que muestra cuánto dinero llega de inversionistas extranjeros para abrir empresas, expandirse o apoyar actividades productivas.
              Las gráficas del Banco Mundial muestran el comportamiento de la inversión extranjera directa como porcentaje del PIB en Panamá y Colombia. En Panamá, la IED cayó fuertemente en 2020 (pandemia) y en los últimos años se mantiene relativamente estable, con pequeñas variaciones, lo que indica que el país sigue siendo atractivo para los inversionistas internacionales. Este comportamiento refleja estabilidad económica y confianza en el mercado panameño, especialmente por su ubicación estratégica, el Canal y su papel como centro logístico. Esto es muy positivo porque demuestra que Panamá recibe capital extranjero de manera constante y mantiene un entorno favorable para nuevas empresas. En Colombia, la IED también ha mostrado cambios, con algunos años de aumento y otros de disminución. Aunque existe variabilidad, los datos muestran que el país sigue recibiendo inversión extranjera, lo cual demuestra que sigue siendo un mercado activo y con oportunidades. Para una marca de ropa deportiva que quiere internacionalizarse en Panamá, estos indicadores son importantes. La estabilidad de la IED en Panamá muestra que es un país seguro para invertir, abrir tiendas, distribuir productos o crear alianzas comerciales. En general, los datos respaldan que Panamá es un buen destino para expandir la marca.
            </p>
            <p><strong>Calificación:</strong> 4</p>
            <p><strong>Referencias:</strong></p>
            <p className="ml-8">FocusEconomics. (2024). <em>Foreign direct investment: Panama and Colombia</em>. https://www.focus-economics.com</p>
            <p className="ml-8">World Bank. (2025). <em>Foreign direct investment, net inflows (% of GDP)</em>. https://data.worldbank.org</p>
            <p className="ml-8">The World Bank. (2025). Foreign direct investment, net inflows (% of GDP) Panama [Data set]. https://data.worldbank.org/indicator/BX.KLT.DINV.WD.GD.ZS?locations=PA</p>
          </div>
          <div>
            <h3 className="mb-2 text-lg font-semibold text-zinc-800">Indicador 2: Sectores receptores de inversión</h3>
            <img src="/trabajo4_1_assets/doc4_image3.png" alt="Desempeño logístico y ruta" className="h-auto w-full" />
            <p>El Flujo de Inversión Extranjera más reciente (el preliminar de 2024 del INEC), vemos que el flujo total que entra a Panamá es de 2,832.6 millones de USD. La forma en que ese dinero se reparte es lo que realmente importa para la empresa de ropa deportiva ya que es el sector que recibe la mayor parte de la inversión (y por mucha diferencia) es el de "Otras Empresas". Esta categoría, que incluye las tiendas, las ventas al por menor y el comercio, abarca 1,857.5 millones de USD, lo que equivale a (65.6%) de todo el dinero extranjero que entra al país. Este hallazgo es el más positivo de todos, pues nos dice que los inversionistas internacionales confían plenamente en el consumo y las ventas en Panamá, lo que reduce la incertidumbre para la empresa y valida la estrategia de entrada. El dinero restante va a sectores que apoyan su operación, los Bancos siguen fuertes, asegurando un sistema financiero estable, y la Zona Libre de Colón (ZLC) sigue recibiendo inversión (294.2 millones de USD), confirmando que la plataforma logística sigue operativa y confiable.</p>
            <p><strong>Calificación:</strong> 5</p>
            <p><strong>Referencia:</strong> Instituto Nacional de Estadística y Censo de Panamá (INEC). (2023). <em>Balanza de pagos</em>. https://www.inec.gob.pa</p>
          </div>
          <h3 className="mb-2 text-lg font-semibold text-zinc-800">Indicador 3: Incentivos a la inversión</h3>
          <img src="/trabajo4_1_assets/doc4_image16.png" alt="Desempeño logístico y ruta" className="h-auto w-full" />
          <p>Los incentivos a la inversión en Panamá combinan regímenes fiscales (zonas francas, Panamá Pacífico, exenciones tributarias), regímenes legales puntuales (Ley No. 41 para Sedes de Empresas Multinacionales) y servicios de promoción (PROPANAMA, PROINVEX) que facilitan la llegada y operación de empresas extranjeras. Estos incentivos reducen costos fiscales y aduaneros, agilizan trámites y ofrecen estabilidad legal para sedes regionales; además, la existencia de hubs logísticos (Zona Libre de Colón, Panamá Pacífico) mejora la eficiencia operativa. Para una estrategia de internacionalización, estos apoyos son altamente favorables, porque disminuyen la barrera de entrada, favorecen la estructura de costos y facilitan la logística regional, incrementando la probabilidad de éxito y la rapidez de implantación. Sin embargo, se requiere cumplimiento regulatorio y asesoría local para maximizar beneficios y evitar riesgos fiscales o de cumplimiento</p>
          <p><strong>Calificación:</strong> 5</p>
          <p><strong>Referencias:</strong></p>
          <p className="ml-8">Instituto Nacional de Estadística y Censo de Panamá (INEC). (2025). <em>Balanza de pagos</em>. https://www.inec.gob.pa</p>
          <p className="ml-8">Ministerio de Comercio e Industrias de Panamá. (2025). <em>Incentivos a la inversión extranjera</em>. https://mici.gob.pa</p>
          <p className="ml-8">ProPanamá. (2025). <em>Zonas francas y regímenes especiales</em>. https://www.propanama.gob.pa</p>
          <p className="ml-8">Zona Libre de Colón. (2025). Incentivos comerciales y aduaneros para empresas extranjeras. https://www.zolicol.gob.pa/</p>
          <p className="ml-8">Ministerio de Comercio e Industrias. (2007). Ley 41: Régimen para las Sedes de Empresas Multinacionales. https://mici.gob.pa</p>
          <p className="ml-8">Dirección General de Ingresos. (2025). Incentivos tributarios aplicables a zonas francas. https://dgi.mef.gob.pa/</p>
        </div>
        <div>
        </div>
      </Accordion>
    </div>
  );

  const entornosChileContent = (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="mb-2 text-3xl font-bold text-zinc-800">Chile: 5 entornos, 3 indicadores c/u</h2>
        <p className="text-zinc-600">Contenido completo según “Trabajo 4 (1).docx”</p>
      </div>

      <Accordion title="Entorno Cultural (1)" defaultOpen={true} color="border-pink-200 bg-pink-50">
        <div className="space-y-4">
          <div>
            <h3 className="mb-2 text-lg font-semibold text-zinc-800">Indicador 1: Dimensiones de Hofstede</h3>
            <img src="/trabajo4_1_assets/doc4_image19.jpg" alt="Desempeño logístico y ruta" className="h-auto w-full" />
            <div className="overflow-x-auto">
              <table className="min-w-full overflow-hidden rounded-xl border border-zinc-200 bg-white text-left">
                <thead className="bg-pink-50">
                  <tr>
                    <th className="px-4 py-3 text-sm font-semibold text-zinc-700">Dimensión</th>
                    <th className="px-4 py-3 text-sm font-semibold text-zinc-700">Puntuación (Chile)</th>
                  </tr>
                </thead>
                <tbody className="align-top">
                  <tr className="border-t">
                    <td className="px-4 py-3 text-zinc-800">Distancia de poder</td>
                    <td className="px-4 py-3 text-zinc-800">63</td>
                  </tr>
                  <tr className="border-t">
                    <td className="px-4 py-3 text-zinc-800">Individualismo</td>
                    <td className="px-4 py-3 text-zinc-800">49</td>
                  </tr>
                  <tr className="border-t">
                    <td className="px-4 py-3 text-zinc-800">Motivación hacia el logro y el éxito</td>
                    <td className="px-4 py-3 text-zinc-800">28</td>
                  </tr>
                  <tr className="border-t">
                    <td className="px-4 py-3 text-zinc-800">Evitación de la incertidumbre</td>
                    <td className="px-4 py-3 text-zinc-800">86</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-4"><strong>Distancia de poder (63):</strong> indica una aceptación moderada – alta de las jerarquías. Las organizaciones normalmente funcionan con estructuras claras y la autoridad es respetada, además las decisiones importantes vienen de niveles superiores. Para una empresa que busca chile como opción de internacionalización esto implica adaptar los estilos de liderazgo, formalidad, claridad en los roles y procesos bien establecidos, la comunicación debe ser ordenada. Ignorar este factor cultural puede generar roces entre empleados o socios, tomarla en cuenta facilita la toma de decisiones en el mercado chileno.</p>
            <p><strong>Individualismo (49):</strong> Chile tiene un nivel medio – bajo de individualismo. Esto significa que existe un equilibrio entre el valor individual y el grupal. Las relaciones de confianza y las redes sociales siguen siendo importantes, pero no tanto como en culturas altamente colectivistas. Para una empresa que tenga a Chile en mente para internacionalizarse, esto requiere la construcción de vínculos con socios locales. Los equipos prefieren ambientes colaborativos donde se escuche a todos y haya un sentido de comunidad.</p>
            <p><strong>Motivación hacia el logro y el éxito (28):</strong> Chile es una cultura donde predomina el género femenino, por lo cual las personas priorizan la cooperación y el bienestar colectivo que la competencia agresiva o el éxito material. A esto se le agrega que los chilenos tienen un comportamiento modesto. Esto implica que el liderazgo vaya más orientado a los consensos, ser cercanos y empáticos. Los consumidores pueden reaccionar mejor a mensajes que destaquen beneficios sociales. Las dinámicas sociales favorecen la colaboración y no tanto la competencia interna.</p>
            <p><strong>Evitación de la incertidumbre (86):</strong> En esta dimensión Chile tiene un nivel muy alto. La sociedad prefiere reglas claras, procesos formales y bajo riesgo en los trámites. Para las empresas extranjeras este es uno de los puntos mas importantes a tomar en cuenta, el mercado chileno exige contratos detallados, cumplimiento riguroso de las normas y comunicación clara. Por lo tanto, los consumidores también prefieren marcas confiables que se muestren cercanas, no adaptarse a este rasgo puede generar desconfianza e incertidumbre en el mercado chileno.</p>
            <p><strong>Referencia:</strong> The Culture Factor Group. (s.f.). <em>Country comparison tool: Chile</em>. https://www.theculturefactor.com/country-comparison-tool</p>
          </div>
          <div>
            <h3 className="mb-2 text-lg font-semibold text-zinc-800">Indicador 2: Idioma y comunicación empresarial</h3>
            <p>Idioma predominante y su relación con la comunicación empresarial. WB

              El idioma oficial de Chile es el español, con unas variantes locales como en la mayoría de los países latinoamericanos. Aunque se usa el mismo idioma que en la gran mayoría de países latinoamericanos, existen diferencias que pueden afectar la comunicación empresarial, especialmente en negociaciones, campañas de marketing o capacitaciones de equipos de trabajo. Aunque el español brinda una base solida para la comunicación, es clave que se eviten las suposiciones y se realice un estudio del lenguaje para asegurar la claridad y cercanía con el público chileno. Esta adaptación minimiza los errores de interpretación, mejora la confianza y fortalece la confianza con socios y consumidores locales.
            </p>
            <p><strong>Calificación:</strong> 2/5</p>
          </div>
          <div>
            <h3 className="mb-2 text-lg font-semibold text-zinc-800">Indicador 3: Indicadores demográficos</h3>
            <p>Chile presenta una edad media de 36,6 años, lo que refleja una población adulta con poder adquisitivo estable y preferencias de consumo algo más maduras. Su crecimiento poblacional es del 0,4 % por lo que la expansión del mercado depende de ganar participación mas que lo que depende de un aumento natural de habitantes. Además, chile es un país altamente urbanizado con el 88% de la población viviendo en zonas urbanas, lo que facilita de gran manera la distribución, logística y acceso a los consumidores por los canales modernos. Para una empresa colombiana, este escenario demográfico implica un mercado concentrado, adulto urbano con oportunidades crecientes en servicios de calidad de vida y bienestar.</p>
            <img src="/trabajo4_1_assets/doc4_image21.png" alt="Desempeño logístico y ruta" className="h-auto w-full" />
            <img src="/trabajo4_1_assets/doc4_image10.png" alt="Desempeño logístico y ruta" className="h-auto w-full" />
            <img src="/trabajo4_1_assets/doc4_image15.png" alt="Desempeño logístico y ruta" className="h-auto w-full" />
            <p><strong>Calificación:</strong> 4/5</p>
            <p><strong>Referencias:</strong></p>
            <p className="ml-8">Statista. (s.f.). <em>Chile: Average age of the population</em>. https://www.statista.com</p>
            <p className="ml-8">World Bank. (s.f.). <em>Population growth (annual %): Chile</em> [Indicador SP.POP.GROW]. https://data.worldbank.org</p>
            <p className="ml-8">World Bank. (s.f.). <em>Urban population (% of total population): Chile</em> [Indicador SP.URB.TOTL.IN.ZS]. https://data.worldbank.org</p>
          </div>
        </div>
      </Accordion>

      <Accordion title="Entorno Político y Legal (2)" color="border-blue-200 bg-blue-50">
        <div className="space-y-4">
          <div>
            <h3 className="mb-2 text-lg font-semibold text-zinc-800">Indicador 1: WGI</h3>
            <p>Este indicador muestra qué tan bien está manejado un país. Revisa si el gobierno es estable, si las leyes se cumplen, si hay control frente a la corrupción y si las instituciones funcionan correctamente. En Chile, estos resultados suelen ser buenos comparados con otros países de la región. Esto significa que el país es organizado y tiene reglas claras. Para una empresa que quiere entrar al mercado chileno, esto es útil porque disminuye riesgos, da más seguridad para invertir y permite trabajar sin tanta incertidumbre. </p>
            <p><strong>Calificación:</strong> 5</p>
          </div>
          <div>
            <h3 className="mb-2 text-lg font-semibold text-zinc-800">Indicador 2: Propiedad Intelectual</h3>
            <p>Este indicador mide qué tan bien un país protege las marcas, diseños y productos que crean las empresas. Chile cuenta con leyes claras que castigan las copias y el uso ilegal de marcas. Esto es una ventaja para una empresa extranjera, porque puede registrar su marca y estar tranquila de que no será imitada fácilmente. Además, ayuda a que el valor del producto se mantenga y a que los consumidores confíen más en lo que compran. </p>
            <p><strong>Calificación:</strong> 4</p>
          </div>
          <div>
            <h3 className="mb-2 text-lg font-semibold text-zinc-800">Indicador 3: Regulaciones específicas del sector</h3>
            <p>Este indicador se refiere a las normas que aplican directamente al sector donde trabaja la empresa. En el caso de ropa o accesorios, incluye reglas sobre importación, etiquetas, materiales permitidos y protección al consumidor. En Chile, estas normas son claras y están bien establecidas. Cumplirlas puede exigir algunos ajustes, pero también ayuda a evitar problemas legales y permite que los productos se vendan sin inconvenientes en el país. Esto hace más fácil la entrada de una marca extranjera al mercado. </p>
            <div className="overflow-x-auto">
              <table className="min-w-full overflow-hidden rounded-xl border border-zinc-200 bg-white text-left">
                <thead className="bg-blue-50">
                  <tr>
                    <th className="px-4 py-3 text-sm font-semibold text-zinc-700">Indicador</th>
                    <th className="px-4 py-3 text-sm font-semibold text-zinc-700">Explicación general</th>
                    <th className="px-4 py-3 text-sm font-semibold text-zinc-700">Impacto en Chile y en la internacionalización</th>
                    <th className="px-4 py-3 text-sm font-semibold text-zinc-700">Impacto (1-5)</th>
                  </tr>
                </thead>
                <tbody className="align-top">
                  <tr className="border-t">
                    <td className="px-4 py-3 font-medium text-zinc-800">Índice de Gobernanza Mundial (WGI)</td>
                    <td className="px-4 py-3 text-zinc-700">Mide qué tan bien está manejado un país: si el gobierno es estable, si las leyes se cumplen y si las instituciones funcionan bien.</td>
                    <td className="px-4 py-3 text-zinc-700">Chile suele tener buenos resultados, lo que muestra un país organizado y con reglas claras. Esto ayuda a que una empresa extranjera entre al mercado con menos riesgos y más seguridad al invertir.</td>
                    <td className="px-4 py-3 text-center font-semibold text-zinc-800">5</td>
                  </tr>
                  <tr className="border-t">
                    <td className="px-4 py-3 font-medium text-zinc-800">Índice de Propiedad Intelectual</td>
                    <td className="px-4 py-3 text-zinc-700">Evalúa qué tan bien se protegen las marcas, diseños y productos creados por las empresas.</td>
                    <td className="px-4 py-3 text-zinc-700">Chile tiene leyes claras que castigan las copias o el uso ilegal de marcas. Esto protege a las empresas nuevas y permite vender sin temor a imitaciones, lo que ayuda a la internacionalización.</td>
                    <td className="px-4 py-3 text-center font-semibold text-zinc-800">4</td>
                  </tr>
                  <tr className="border-t">
                    <td className="px-4 py-3 font-medium text-zinc-800">Regulaciones específicas del sector</td>
                    <td className="px-4 py-3 text-zinc-700">Son las normas que aplican directamente al tipo de productos de la empresa, como reglas de importación, etiquetas, materiales y calidad.</td>
                    <td className="px-4 py-3 text-zinc-700">En Chile estas reglas están bien definidas. Aunque requieren ciertos ajustes, dan seguridad legal y permiten vender los productos sin tantos problemas, facilitando la entrada al mercado.</td>
                    <td className="px-4 py-3 text-center font-semibold text-zinc-800">4</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <img src="/trabajo4_1_assets/doc4_image5.jpg" alt="Desempeño logístico y ruta" className="h-auto w-full" />
            <img src="/trabajo4_1_assets/doc4_image6.jpg" alt="Desempeño logístico y ruta" className="h-auto w-full" />
            <p><strong>Calificación:</strong> 4</p>
            <p><strong>Referencias:</strong></p>
            <p className="ml-8">InvestChile. (2023). <em>Why Chile: Legal framework</em>. https://investchile.gob.cl</p>
            <p className="ml-8">Ministerio de Economía, Fomento y Turismo de Chile. (2023). <em>Normativas sectoriales</em>. https://www.economia.gob.cl</p>
            <p className="ml-8">Statista. (2023). <em>Chile: Intellectual property indicators</em>. https://www.statista.com</p>
            <p className="ml-8">World Bank. (2023). <em>Worldwide Governance Indicators: Chile</em>. https://info.worldbank.org/governance/wgi/</p>
          </div>
        </div>
      </Accordion>

      <Accordion title="Entorno Tecnológico y Geoambiental (3)" color="border-green-200 bg-green-50">
        <div className="space-y-4">
          <div>
            <h3 className="mb-2 text-lg font-semibold text-zinc-800">Indicador 1: Geografía y clima</h3>
            <p>Chile se encuentra en el extremo sur de América del sur, tiene una amplia costa sobre el océano Pacífico. Esta ubicación facilita el comercio internacional, especialmente para sectores que dependen de la logística marítima. Para una empresa colombiana esto permite integrar mercados de exportación, aprovechar tratados comerciales y conectar los productos con centros de logística eficientes. Chile presenta una diversidad climática grande, desierto en la parte del norte, clima mediterráneo en el centro y temperaturas frías en el sur. Esto afecta costos logísticos, uso energético y la estacionalidad de los productos, especialmente en sectores como los alimentos o el transporte. Conocer esto permite ajustar rutas, empaques y tiempos de entrega según la región. Aunque esto presenta un reto también abre oportunidades para adaptar los productos a necesidades de distintas regiones.</p>
            <p><strong>Calificación:</strong> 4/5</p>
          </div>
          <div>
            <h3 className="mb-2 text-lg font-semibold text-zinc-800">Indicador 2: Conectividad digital</h3>
            <p>Chile ha mantenido un crecimiento sostenido en los ultimo 30 años de usuarios con acceso a internet alcanzando un 94% de la población en 2023, esto lo hace uno de los mas conectados en américa latina. El alto nivel de acceso refleja la buena infraestructura tecnológica el país además de una amplia disponibilidad de servicios y la rápida adopción de las herramientas digitales por parte de la población. Para una empresa colombiana, el panorama es muy favorable ya que el alto nivel de conectividad permite que se hagan campañas de marketing digital, estrategias de comercio electrónico, automatización de procesos logísticos y canales digitales de servicio al cliente. El uso masivo del internet en el país da como resultado, usuarios que están bien informados y que van a esperar, rapidez, confianza y buen manejo de los canales digitales por parte de las empresas. Chile es óptimo para la operación digital de una empresa y la comunicación de esta soportada en herramientas digitales</p>
            <button onClick={() => setOpenImg("/trabajo4_1_assets/doc4_image14.png")} className="mb-3 block overflow-hidden rounded-xl border bg-white p-2 hover:shadow">
              <img src="/trabajo4_1_assets/doc4_image14.png" alt="Conectividad Chile" className="h-auto w-full" />
            </button>
            <p><strong>Referencia:</strong> World Bank. (s.f.). <em>Individuals using the Internet (% of population): Chile</em> [Indicador IT.NET.USER.ZS]. https://data.worldbank.org</p>
            <p><strong>Calificación:</strong> 5/5</p>
          </div>
          <div>
            <h3 className="mb-2 text-lg font-semibold text-zinc-800">Indicador 3: Acceso a tecnología e innovación</h3>
            <p>Chile presenta un acceso amplio a tecnología gracias a su alta conectividad y tasa de acceso a internet. El país destaca por su amplia cobertura de internet fijo y móvil, su penetración de fibra óptica es una de las más altas de Latinoamérica. Además, tiene un ecosistema de startups apoyado por Start-up chile lo cual permite la </p>
            <p>diversificación del mercado permitiendo la entrada de empresas emergentes brindándoles apoyo monetario. Para una empresa colombiana este entorno facilita la integración digital, el comercio electrónico y la automatización.</p>
            <p><strong>Calificación:</strong> 4/5</p>
          </div>
        </div>
      </Accordion>

      <Accordion title="Entorno Comercio Internacional (4)" color="border-yellow-200 bg-yellow-50">
        <div className="space-y-4">
          <div>
            <h3 className="mb-2 text-lg font-semibold text-zinc-800">Indicador 1: Acuerdos comerciales</h3>
            <p>Colombia y chile tienen un comercio basado en el tratado de libre comercio que está vigente desde el año 2009 lo cual eliminó casi el 100% de los aranceles y abrió por completo el comercio de bienes y servicios entre los 2 países. Este acuerdo incluye varios parámetros que brindan seguridad jurídica a empresas colombianas que deseen entrar al mercado de Chile. Además de esto, con el fin de agilizar las operaciones de exportación e importación y facilitar los procesos Colombia y chile acordaron emitir, enviar y recibir los certificados de origen lo cual se hará digitalmente.</p>
            <button onClick={() => setOpenImg("/trabajo4_1_assets/doc4_image13.png")} className="mb-3 block overflow-hidden rounded-xl border bg-white p-2 hover:shadow">
              <img src="/trabajo4_1_assets/doc4_image13.png" alt="Acuerdos comerciales COL-CL" className="h-auto w-full" />
            </button>
            <p><strong>Calificación:</strong> 5/5</p>
            <p><strong>Referencias:</strong></p>
            <p className="ml-8">Gobierno de Chile, Ministerio de Relaciones Exteriores. (s.f.). <em>Relación bilateral Chile-Colombia</em>. https://www.minrel.gob.cl</p>
            <p className="ml-8">Ministerio de Comercio, Industria y Turismo de Colombia (MinCIT). (s.f.). <em>Tratado de Libre Comercio Chile-Colombia: Seguimiento</em>. https://www.mincit.gov.co</p>
          </div>
          <div>
            <h3 className="mb-2 text-lg font-semibold text-zinc-800">Indicador 2: Desempeño logístico y ruta</h3>
            <p>El LPI (índice de desempeño logístico) de chile es de 3 y su posición es la número 61, esto muestra que el país cuenta con capacidades logísticas aceptables, pero tiene un margen muy amplio para la mejora. Chile destaca en Sudamérica por su infraestructura sólida, en especial sus puertos que facilitan el comercio exterior. La ruta Colombia – Chile es eficiente gracias a la conexión directa por el océano pacífico. El puerto de Buenaventura en el pacífico colombiano permiten una salida estratégica hacia chile puertos de Valparaíso y San Antonio que mantienen infraestructura sólida y disposición para recibir altos volúmenes de carga. Los tiempos de tránsito marítimo son competitivos (8 – 12 días) lo que favorece operaciones estables para Colombia.</p>
            <button onClick={() => setOpenImg("/trabajo4_1_assets/doc4_image13.png")} className="mb-3 block overflow-hidden rounded-xl border bg-white p-2 hover:shadow">
              <img src="/trabajo4_1_assets/doc4_image4.png" alt="LPI Chile y ruta" className="h-auto w-full" />
            </button>
            <p><strong>Calificación:</strong> 5/5</p>
            <p><strong>Referencia:</strong> World Bank. (s.f.). <em>International Logistics Performance Index: Chile</em>. https://lpi.worldbank.org</p>
          </div>
          <div>
            <h3 className="mb-2 text-lg font-semibold text-zinc-800">Indicador 3: Instituciones de apoyo</h3>

            <p>Ambos países (chile y Colombia) cuentan con instituciones que apoyan la internacionalización empresarial. Procolombia brinda estudios de mercado, asesoría exportadora y conexión con compradores chilenos, mientras que prochile ofrece información comercial y de apoyo en promoción. La cámara de comercio colombo chilena facilita asesorías legales y contacto con socios locales. InvestChile es un organismo público que promueve Chile como destino de inversión extranjera directa en el mercado global, conectando los intereses de los inversionistas extranjeros con las oportunidades de negocio que Chile brinda. Además, instituciones colombianas como ANDI y Bancóldex ofrecen capacitación en comercio exterior y financiamiento para internacionalización.</p>
            <p><strong>Calificación:</strong> 5/5</p>
            <p><strong>Referencias:</strong></p>
            <p className="ml-8">Cámara de Comercio Colombo-Chilena. (s.f.). <em>Servicios de apoyo empresarial</em>. https://www.camcolchi.cl</p>
            <p className="ml-8">InvestChile. (s.f.). <em>Investment support services</em>. https://investchile.gob.cl</p>
            <p className="ml-8">ProChile. (s.f.). <em>Información comercial y promoción de exportaciones</em>. https://www.prochile.gob.cl</p>
          </div>
        </div>
      </Accordion>

      <Accordion title="Entorno Inversión Extranjera (5)" color="border-purple-200 bg-purple-50">
        <div className="space-y-4">
          <div>
            <h3 className="mb-2 text-lg font-semibold text-zinc-800">Indicador 1: Flujos de inversión COL–Chile</h3>
            <p>Este indicador muestra cuánto dinero se mueve en inversión entre Colombia y Chile. En los últimos años, estos flujos han sido estables y han crecido en sectores como comercio, servicios y manufactura. Esto significa que existe una relación económica sólida entre ambos países, lo que reduce riesgos para una empresa colombiana como Babalu. La estabilidad en la inversión ayuda a que los trámites sean más claros, las reglas más conocidas y la entrada al mercado más predecible. Para Babalu, esto es positivo porque facilita abrir tiendas, formar alianzas con distribuidores y tener un proceso de expansión más seguro.</p>
            <button onClick={() => setOpenImg("/trabajo4_1_assets/doc4_image12.png")} className="mb-3 block overflow-hidden rounded-xl border bg-white p-2 hover:shadow">
              <img src="/trabajo4_1_assets/doc4_image12.png" alt="Flujos IED COL-CL" className="h-auto w-full" />
            </button>
            <p><strong>calificación:</strong> 4/5</p>
          </div>
          <div>
            <h3 className="mb-2 text-lg font-semibold text-zinc-800">Indicador 2: Sectores receptores de IED</h3>

            <p>Este indicador muestra qué sectores en Chile reciben más inversión extranjera. Los más fuertes son comercio, servicios, energía, tecnología y manufactura. Esto beneficia a Babalu porque el comercio minorista y el mercado de ropa deportiva están dentro de los sectores activos donde más inversión entra. Cuando un país recibe mucha inversión en un sector, es una señal de crecimiento, estabilidad y oportunidades. Esto significa que Babalu podría entrar a un mercado dinámico, con consumidores acostumbrados a nuevas marcas y con posibilidades de abrir tiendas o vender por canales digitales.</p>
            <p><strong>Calificación:</strong> 4/5</p>
          </div>
          <div>
            <h3 className="mb-2 text-lg font-semibold text-zinc-800">Indicador 3: Incentivos y entidades de promoción</h3>
            
            <p>Este indicador muestra los apoyos que Chile ofrece para atraer empresas extranjeras. "InvestChile" es la entidad principal y brinda asesoría gratuita, información legal, datos del mercado y acompañamiento para todo el proceso de entrada al país. Chile también ofrece impuestos competitivos, trámites simples y apertura comercial. Para Babalu, esto hace más fácil y barato internacionalizarse, porque tiene acceso a apoyo directo para registrarse, entender el mercado, cumplir con normas y encontrar socios locales. Estos incentivos reducen el riesgo y aceleran la expansión.</p>
            <div className="overflow-x-auto mt-4">
              <table className="min-w-full overflow-hidden rounded-xl border border-zinc-200 bg-white text-left">
                <thead className="bg-purple-50">
                  <tr>
                    <th className="px-4 py-3 text-sm font-semibold text-zinc-700">Indicador</th>
                    <th className="px-4 py-3 text-sm font-semibold text-zinc-700">Evidencia</th>
                    <th className="px-4 py-3 text-sm font-semibold text-zinc-700">Significado</th>
                  </tr>
                </thead>
                <tbody className="align-top">
                  <tr className="border-t">
                    <td className="px-4 py-3 font-medium text-zinc-800">Flujos de inversión entre Colombia y Chile</td>
                    <td className="px-4 py-3 text-zinc-700">Las inversiones entre ambos países han sido estables y se concentran en comercio y servicios</td>
                    <td className="px-4 py-3 text-zinc-700">Hay una relación económica previa que facilita la entrada de empresas como Babalu y reduce riesgos</td>
                  </tr>
                  <tr className="border-t">
                    <td className="px-4 py-3 font-medium text-zinc-800">Sectores que más reciben inversión en Chile</td>
                    <td className="px-4 py-3 text-zinc-700">Comercio, servicios, tecnología y manufactura son los sectores con mayor inversión extranjera</td>
                    <td className="px-4 py-3 text-zinc-700">Babalu entra a un sector activo donde hay demanda, crecimiento y espacio para nuevas marcas</td>
                  </tr>
                  <tr className="border-t">
                    <td className="px-4 py-3 font-medium text-zinc-800">Incentivos a la inversión e instituciones de apoyo</td>
                    <td className="px-4 py-3 text-zinc-700">Chile ofrece asesoría gratuita, trámites simples y acompañamiento para empresas extranjeras</td>
                    <td className="px-4 py-3 text-zinc-700">Babalu puede internacionalizarse más rápido, con menos costos y con apoyo directo del gobierno</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p><strong>Calificación:</strong> 5/5</p>
            <p><strong>Referencias:</strong></p>
            <p className="ml-8">Banco Central de Chile. (s.f.). <em>Estadísticas de inversión extranjera</em>. https://www.bcentral.cl</p>
            <p className="ml-8">InvestChile. (2024). <em>Investment incentives and promotion</em>. https://investchile.gob.cl</p>
            <p className="ml-8">Ministerio de Economía, Fomento y Turismo de Chile. (s.f.). <em>Políticas de fomento a la inversión</em>. https://www.economia.gob.cl</p>
            <p className="ml-8"> ￼InvestChile. (2024). #InvestChileInsights – Chile y la inversión extranjera 2023 (informe). https://www.investchile.gob.cl/wp-content/uploads/2024/12/Inversion-Extranjera-en-Chile-2023-esp.pdf</p>
            <p className="ml-8">Ministerio de Economía, Fomento y Turismo de Chile. (2023, 11 de abril). Inversión extranjera alcanza los US$ 4.677 millones a febrero de este año. https://www.economia.gob.cl/2023/04/11/inversion-extranjera-alcanza-los-us-4-677-millones-a-febrero-de-este-ano.htm</p>
          </div>
        </div>
      </Accordion>
    </div>
  );

  const panamaInternacionalizacionContent = (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="mb-2 text-3xl font-bold text-zinc-800">Panamá internacionalización</h2>
        <p className="text-zinc-600">Contenido íntegro del documento grupal (sin resumir)</p>
      </div>

      <Accordion title="1. País seleccionado: Panamá" defaultOpen={true} color="border-pink-200 bg-pink-50">
        <div className="space-y-4">
          <p>Panamá es, sin duda, la mejor opción para que nuestra marca de ropa deportiva crezca a nivel internacional porque combina una ubicación perfecta con una economía sin tantos riesgos.Su ubicación y Negocios (Entorno Logístico y Comercial), Panamá funciona como un gran hub logístico y distribución para toda América. Gracias al Canal de Panamá y a la Zona Libre de Colón, es muy fácil y rápido enviar nuestros productos a cualquier país de la región. La infraestructura es tan buena que el país tiene un alto Índice de Desempeño Logístico, lo que confirma que el transporte es eficiente. Además, el comercio es el motor principal de su economía, lo que nos da la seguridad de que hay canales de distribución establecidos y funcionando perfectamente para vender nuestra ropa. También su entorno Económico y Financiero, nos brinda seguridad ya que Panamá usa el dólar estadounidense como moneda, lo que significa que el tipo de cambio está fijo (1 Balboa es siempre 1 Dólar). Esto es una ventaja enorme porque elimina la preocupación de que el dinero se devalúe. Podemos planificar nuestros costos y ganancias a largo plazo con total confianza. Además, la mayoría del dinero extranjero que entra al país (el 65.6% de la Inversión Extranjera Directa) va al sector comercial, lo cual es una señal clara de que nuestra estrategia de venta es la correcta. El entorno Político y Legal demuestra que el ambiente es favorable para hacer negocios. El país tiene buenas regulaciones comerciales y ofrece mucho apoyo a las empresas extranjeras a través de entidades como (ProPanamá, CCIAP). Desde el punto de vista tecnológico, Panamá está muy bien conectado. Casi todos tienen acceso a la red móvil (97 de cada 100 personas), lo que es excelente para vender por internet (e-commerce) y hacer publicidad digital. A nivel cultural, la gente valora mucho las comunidades y la lealtad (Colectivismo), por lo que una marca que fomente el sentido de pertenencia y comunidad será bien recibida. También valoran mucho la formalidad y la confianza (Evitación de la Incertidumbre), algo que se logra al usar una plataforma logística y legal tan robusta como la panameña. Con todo esto podemos observar que Panamá ofrece menores barreras de entrada, una logística más eficiente, un entorno financiero estable gracias a la dolarización y un mercado más receptivo para marcas colombianas.</p>
        </div>
      </Accordion>

      <Accordion title="2. Estrategias de internacionalización y modos de entrada" defaultOpen={false} color="border-blue-200 bg-blue-50">
        <div className="space-y-4">
          <p>La forma de entrada más acertada para Babalú en Panamá es una combinación de exportación directa y una alianza con un distribuidor panameño, ya que esto permite entrar rápido al mercado, con bajo riesgo y aprovechando la infraestructura logística del país. La exportación directa desde Colombia a Panamá facilita enviar facilita el envío de inventario, reduciendo los costos y tiempos. Al mismo tiempo una alianza comercial estratégica con un distribuidor de panamá permitirá acceder a tiendas deportivas, malls y puntos multimarca donde marcas globales están posicionadas. Esto se puede complementar con un e-commerce o tienda online propia que permite probar la demanda y rotar inventario con rapidez, dado que la moda es una de las categorías con mayor crecimiento en ventas digitales del país, este planteamiento reduce los costos de entrada, facilita el manejo logístico, permite evaluar el nivel de aceptación de la marca y la visibilidad de la marca ya partir de eso crear un diagnóstico inicial y con esto hacer un posicionamiento sólido inicialmente.</p>
          <p>Esta combinación es la más adecuada para entrar a Panamá ya que es un país que ofrece un entorno logístico altamente efectivo y favorable que reduce tiempos y costos de importación, lo que permite mover inventario con rapidez sin crear operaciones propias desde el principio. Además, Panamá es un mercado competitivo dominado por marcas internacionales que ya están consolidadas, por lo que apoyarse en un distribuidor con presencia en marcas deportivas facilita ganar visibilidad sin negociar desde cero. Este contexto que incluye alta competitividad, infraestructura logística competente y consumidores digitales, hace que una entrada gradual y de bajo riesgo sea la opción más estratégica antes de considerar inversiones en franquicias o tiendas propias.</p>
          <p>La entrada mediante explotación directa y alianza estratégica con distribuidor implica que la empresa maneja una operación más ligera, ya que no necesita abrir una sede en Panamá para abastecer, y lo puede hacer desde Colombia. Logísticamente la empresa debe coordinar inventarios, tiempos de entrega, reposición con su distribuidor y además definir un sistema eficiente para devoluciones y pedidos del e-commerce. Lo que exige un flujo de comunicación constante y una planificación precisa de la demanda. En cuanto a los costos se reducen inversiones iniciales en infraestructura y personal, pero se deben asumir gastos de transporte internacional, almacenamiento e ingresos compartidos con el distribuidor, afectando el margen final pero reduciendo significativamente el riesgo. Esta estrategia permite que la marca llegue rápido a tiendas deportivas, malls y puntos multimarca, apoyándose en la red y reputación del distribuidor, mientras que el e-commerce refuerza la visibilidad, control sobre la identidad de marca y el acceso directo al consumidor</p>
        </div>
      </Accordion>

      <Accordion title="3. Plan de marketing internacional" defaultOpen={false} color="border-purple-200 bg-purple-50">
        <div className="space-y-4">
          <h4 className="font-semibold text-zinc-800">Estrategia de entrada al mercado</h4>
          <p>La estrategia de entrada para Babalú en Panamá será una combinación de exportación directa desde Colombia y una alianza comercial con un distribuidor local. Esto permite ingresar rápido al mercado sin grandes inversiones iniciales y aprovechando la fuerte infraestructura logística de Panamá, que facilita el manejo del inventario, los tiempos de entrega y los costos de transporte. El distribuidor será clave para entrar a tiendas deportivas, centros comerciales y puntos multimarca donde ya se mueven marcas reconocidas.</p>
          <p>Además, se complementará con un e-commerce propio para Panamá, lo que permitirá probar la demanda, aumentar la presencia digital y tener contacto directo con las consumidoras. Esta estrategia es la más adecuada para un mercado competitivo como Panamá, porque reduce el riesgo, mejora la visibilidad inicial y permite evaluar la aceptación de la marca antes de invertir en tiendas propias o franquicias.</p>

          <h4 className="font-semibold text-zinc-800">Comercialización del Producto o Servicio</h4>
          <ul className="list-disc pl-6 space-y-2">
            <li>Marketing Digital: Se utilizará la plataforma de E-commerce propio como centro de la estrategia, soportado por publicidad pagada (SEM/Social Ads) dirigida específicamente a mujeres en Ciudad de Panamá. El objetivo es dirigir tráfico tanto a la tienda en línea para la venta directa como a los puntos de venta físicos del distribuidor.</li>
            <li>Influencer Marketing: Colaboración con micro-influencers y coaches de fitness panameños. Estas alianzas se centrarán en la demostración de la versatilidad de las prendas y la tecnología de los textiles.</li>
            <li>Relaciones Públicas y Eventos: Se buscará organizar un evento de lanzamiento o una clase magistral de fitness en alianza con un gimnasio premium local. El foco de la comunicación será el diseño innovador y la calidad de la confección colombiana.</li>
            <li>Promociones y Lealtad (Precio): Se ofrecerán descuentos de introducción en el e-commerce y ofertas exclusivas en los puntos físicos ej. 20% off en la primera compra para incentivar la prueba del producto y la recolección de datos de clientes.</li>
          </ul>
          <p><strong>Babalu se  posicionarse como:</strong> "Activewear de diseño premium y alto rendimiento, fusionando la moda vanguardista colombiana con la funcionalidad deportiva que busca el consumidor de Panamá."</p>

          <h4 className="font-semibold text-zinc-800">Segmentación del mercado</h4>
          <p>Público Objetivo</p>
          <p>El segmento se concentra en las Mujeres de 25 a 45 años, con nivel socioeconómico medio-alto y alto, residentes principalmente en la Ciudad de Panamá. Este grupo está activamente involucrado en el fitnessy el bienestar personal, es digitalmente competente y valora la diferenciación por diseño y calidad,son compradoras que buscan que su ropa deportiva tenga un estilo athleisure(ropa deportiva con prendas informales o elegantes para crear atuendos) que les permita transicionar del gimnasio a las actividades sociales.</p>

          <h4 className="font-semibold text-zinc-800">Buyer Personas</h4>
          <ul className="list-disc pl-6 space-y-2">
            <li>Andrea, la Profesional Activa: es una ejecutiva de 32 años,su motivación es la versatilidad y  necesita que sus leggings y tops funcionen perfectamente en el gimnasio, pero que también la hagan sentir elegante y presentable para sus actividades post-entrenamiento y valora mucho  la calidad y la comodidad que justifica un precio más alto.</li>
            <li>Sofía aficionada  de la Moda: Joven que tiene 27 años y su principal motivación es el diseño y la tendencia,usa su ropa deportiva para crear contenido en redes sociales y  busca estampados exclusivos y cortes innovadores que no se vean comúnmente en las marcas globales para destacar y ser única.</li>
          </ul>
        </div>
      </Accordion>

      <Accordion title="Características del producto o servicio" defaultOpen={false} color="border-amber-200 bg-amber-50">
        <div className="space-y-4">
          <p>La oferta de Babalú se compone de prendas de moda activa, incluyendo Leggings de Compresión, Tops Deportivos, Enterizos y Joggers Urbanos.</p>
          <p>- El valor se muestra en el Diseño Colombiano con cortes que estilizan la figura y estampados exclusivos, se da prioridad a la  la tecnología textil, utilizando telas con alta compresión, control de humedad, secado rápido y protección UV, diferenciándose del fast fashion o sea moda rápida  en términos de rendimiento y durabilidad.</p>
          <h4 className="font-semibold text-zinc-800">Beneficios (Producto)</h4>
          <p>El beneficio es de valor ya que ofrece una prenda que brinda Rendimiento (apoyo y comodidad en el ejercicio) junto con Estilo Único que permite al cliente diferenciarse.</p>
          <p>El cliente recibe una inversión en una prenda duradera y con un diseño exclusivo, evitando la uniformidad de las marcas globales y sintiéndose más seguro de su imagen fitness y urbana.</p>
        </div>
      </Accordion>

      <Accordion title="Canales de distribución" defaultOpen={false} color="border-teal-200 bg-teal-50">
        <div className="space-y-4">
          <p>Babalú utilizará una estructura de distribución mixta para llegar al consumidor final de forma eficiente:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Distribuidor local en Panamá: Será el encargado de colocar los productos en tiendas deportivas, puntos multimarca y centros comerciales. Esto ayuda a que la marca gane presencia física desde el primer momento sin tener que abrir locales propios.</li>
            <li>E-commerce propio: Permitirá vender directamente a las consumidoras, mostrando todo el catálogo, manejando promociones y rotando inventario más rápido. También es útil para medir preferencias, tallas más pedidas y tendencias de compra.</li>
            <li>Venta directa en eventos y alianzas: Se podrán hacer activaciones con gimnasios, estudios de yoga, entrenadores personales y ferias de bienestar para aumentar visibilidad y ventas.</li>
          </ul>
          <p>Esta mezcla de canales permite cubrir tanto la compra física como la digital, ofreciendo un alcance más amplio y flexible.</p>
        </div>
      </Accordion>

      <Accordion title="Estrategias de precio" defaultOpen={false} color="border-lime-200 bg-lime-50">
        <div className="space-y-4">
          <p>Para entrar al mercado panameño, Babalú aplicará una estrategia de precios de penetración, es decir, precios accesibles y competitivos frente a marcas globales como Nike, Adidas o Under Armour.</p>
          <p>La estructura de precios considerará:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Costos de producción en Colombia, que son relativamente bajos gracias a la industria textil local.</li>
            <li>Costos logísticos y de transporte internacional, que en Panamá son favorables debido a su infraestructura.</li>
            <li>Margen del distribuidor, que debe ser rentable sin elevar demasiado el precio final.</li>
            <li>Precios de la competencia, que tienden a ser altos en marcas internacionales, lo que deja espacio para que Babalú sea una opción de buena calidad a menor costo.</li>
            <li>Percepción de valor, donde la marca se presenta como ropa deportiva moderna, cómoda y duradera.</li>
          </ul>
          <p>Esta estrategia permite que nuevos clientes se animen a probar la marca, genere rotación en tiendas y aumente la presencia de Babalú en el mercado de forma rápida.</p>
        </div>
      </Accordion>

      <Accordion title="Análisis de clientes y competencia" defaultOpen={false} color="border-sky-200 bg-sky-50">
        <div className="space-y-4">
          <p>Los clientes potenciales son mujeres que conciben el fitness como una parte integral de su estilo de vida y están dispuestas a pagar un precio premium por el valor añadido de diseño exclusivo y calidad superior. Su motivación clave es la Diferenciación de su vestuario deportivo y la confianza que les da el respaldo logístico del distribuidor y la transparencia del e-commerce.</p>
          <h4 className="font-semibold text-zinc-800">Competencia</h4>
          <p>El mercado panameño está dominado por dos grupos principales de competidores:</p>
          <p>Gigantes globales Nike, Adidas, Under Armour, tienen una Plaza excelente en malls. Su precio es alto, pero su principal debilidad es que sus diseños son más estandarizados y menos enfocados en las tendencias de moda rápida.</p>
          <p>Fast Fashion Zara, H&amp;M ofrecen un Precio muy bajo. Su debilidad es la calidad y la tecnología textil inferior a la de Babalú.</p>
        </div>
      </Accordion>

      <Accordion title="Conclusión del trabajo" defaultOpen={false} color="border-rose-200 bg-rose-50">
        <div className="space-y-4">
          <p>La conclusión general de este trabajo nos muestra  la viabilidad y solidez estratégica de la entrada de Babalú al mercado panameño. La decisión de elegir a Panamá se fundamenta en su estabilidad económica y su eficiencia logística como hub regional, lo que minimiza los riesgos financieros y operativos. El modelo de Exportación Directa + Distribuidor + E-commerce es la estrategia más acertada, ya que permite una rápida entrada  en la Plaza, malls y puntos multimarca con una inversión inicial baja, mientras el canal digital garantiza el control total de la marca y la rentabilidad. El Plan de Marketing es coherente al posicionar a Babalú como una marca de Diseño Premium y Alto Rendimiento, utilizando tácticas digitales para atraer al segmento clave de mujeres con poder adquisitivo que buscan diferenciación. Finalmente, el proceso de aprendizaje demostrado por el equipo en los resultados del test asegura que la base analítica para la implementación y futura expansión del proyecto es robusta y consciente de los desafíos del mercado.</p>
        </div>
      </Accordion>

      <Accordion title="Conclusiones de los talleres" defaultOpen={false} color="border-indigo-200 bg-indigo-50">
        <div className="space-y-4">
          <h4 className="font-semibold text-zinc-800">Conclusión taller #2</h4>
          <p>En el trabajo de “reto empresarial” pudimos ver que de Babalú es una marca de ropa deportiva colombiana. Se encuentra en una fase avanzada de planificación, con decisiones estratégicas bien definidas. El objetivo principal es la internacionalización al mercado chileno en un periodo de 12 meses, buscando alcanzar US$75.000 en ventas (SMART). La decisión de enfocarse en Chile se sostiene en su estabilidad económica, la afinidad cultural con Colombia, el alto nivel de digitalización y el crecimiento en la demanda de ropa deportiva. La estrategia de entrada prioriza el comercio digital (tienda virtual) y la alianza con distribuidores locales. A nivel interno, la marca capitaliza sus fortalezas clave, como su experiencia exportadora (a más de nueve países) y su capacidad productiva que asegura la calidad. Estas fortalezas se cruzan directamente con las Oportunidades de exportar servicios e iniciar proyectos de innovación con actores internacionales (Estrategia FO).  El principal desafío interno son las Debilidades relacionadas con el bajo manejo de una segunda lengua y la limitada experiencia internacional del equipo humano. La respuesta estratégica (Estrategia DO) es clara, diseñar un programa de formación en idiomas y temas globales para el equipo, junto con la búsqueda de alianzas para la innovación (DOFA). El compromiso de Babalú con la sostenibilidad social (generación de empleo digno, igualdad de género) y la calidad de los materiales (reducción de desperdicio textil) funciona como un diferenciador de alto valor. Sin embargo, la empresa debe estructurar formalmente sus políticas de sostenibilidad, equidad de género y responsabilidad social empresarial para mitigar las Amenazas de problemas de reputación y las exigencias de los mercados internacionales.</p>

          <h4 className="font-semibold text-zinc-800">Conclusiones taller #3</h4>
          <p>El análisis macroeconómico muestra que Panamá es un país favorable para la internacionalización gracias a la combinación de crecimiento económico sostenido que tiene, estabilidad monetaria y condiciones claras para la inversión. Durante los últimos años, ha mantenido un PIB alto, una inflación baja y predecible y una tasa de cambio estable. Los niveles de inversión pública y privada especialmente en entornos como la logística y la tecnología reflejan un entorno dinámico y orientado al comercio. Chile presenta un entorno macroeconómico estable, con instituciones sólidas, baja inflación y un crecimiento moderado pero sostenido, lo que lo convierte en un destino confiable para la internacionalización. Sus tasas de interés son controladas. Además, la inversión pública y privada mantienen un mercado competitivo y abierto. Chile ofrece condiciones favorables para ingresar con productos o servicios, teniendo un entorno económico, ordenado y de bajo riesgo.</p>

          <h4 className="font-semibold text-zinc-800">Conclusion taller #5</h4>
          <p>El análisis de los entornos permitió comprender el contexto interno y externo en el que se desarrolla el proyecto. Al estudiar factores económicos, sociales, tecnológicos, políticos y del mercado, fue posible identificar oportunidades que pueden impulsar el crecimiento de la marca, así como amenazas que deben ser gestionadas con estrategias claras.</p>
          <p>Este ejercicio también mostró que la empresa no funciona de manera aislada, sino que depende de cambios y tendencias del entorno. Gracias a esto, se fortaleció la capacidad para anticipar retos, reconocer ventajas competitivas y tomar decisiones más informadas. En general, el análisis de los entornos aportó una visión amplia y realista del panorama en el que se mueve el proyecto, y se convirtió en una base sólida para las siguientes etapas del núcleo.</p>
        </div>
      </Accordion>
    </div>
  );

  const testSalidaContent = (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="mb-2 text-3xl font-bold text-zinc-800">Test de salida</h2>
        <p className="text-zinc-600">Comparaciones (texto íntegro del documento)</p>
      </div>
      <Accordion title="Comparación: Mariana Serna Borja" defaultOpen={true} color="border-pink-200 bg-pink-50">
        <img src="/grupal_assets/doc4_image3.png" alt="Mariana Serna Borja" className="w-full h-auto" />
        <p>Al comparar el test de entrada con el de salida, me di cuenta de que en el test final solo tuve un error. Aunque me demoré un poco más en completarlo, el resultado fue mucho mejor. Esto me permitió ver que mis conocimientos crecieron bastante. Ahora tengo mucha más comprensión sobre la internacionalización, algo que no dominaba cuando inicié el núcleo. Por eso, al momento de responder, no se me hizo tan difícil escoger las opciones correctas.                                                                                       Los contenidos del núcleo me dieron herramientas para entender mejor diferentes problemáticas y situaciones, como las que aparecían en el test. Además, el hecho de que este núcleo tuviera tanta investigación hizo que mis aprendizajes aumentaran mucho más, y eso se reflejó claramente en el test de salida.</p>
      </Accordion>
      <Accordion title="Comparación: Santiago Castaño Ramírez" defaultOpen={false} color="border-blue-200 bg-blue-50">
        <img src="/grupal_assets/doc4_image2.png" alt="Santiago Castaño Ramírez" className="w-full h-auto" />
        <p>Al hacer la comparación del test de entrada y el de salida vi que el puntaje subió de manera significativa. En el test de entrada obtuve un puntaje de 600 puntos, mientras que en el test de salida obtuve uno de 865 puntos de 1000 posibles. Lo que quiere decir que ahora tengo una visión mucho más integral y clara de los procesos de internacionalización y todo lo que implican. Las herramientas que me dió el núcleo fueron sumamente acertadas para la realización del test de salida y además para llevar a cabo todos los trabajos, y más importante, para seguir formándome como profesional.</p>
      </Accordion>
      <Accordion title="Comparación: Mariana Zapata Ramírez" defaultOpen={false} color="border-purple-200 bg-purple-50">
        <img src="/grupal_assets/doc4_image4.png" alt="Mariana Zapata Ramírez" className="w-full h-auto" />
        <p>Al comparar los resultados del test de entrada con los del test de salida, noté que mi puntaje no fue tan alto como el inicial. Sin embargo, esta vez me tomé el tiempo para leer, analizar y comprender mejor cada pregunta, por lo que el proceso fue más profundo, aunque tardará más. A pesar de todo, considero que obtuve un buen resultado y me siento satisfecha. Siento que ahora manejo mucho mejor los temas de internacionalización y he aprendido muchas cosas que en el primer test no tenía tan claras.</p>
      </Accordion>
      <Accordion title="Comparación: Juan José Cárdenas" defaultOpen={false} color="border-amber-200 bg-amber-50">
        <img src="/grupal_assets/doc4_image1.png" alt="Juan José Cárdenas" className="w-full h-auto" />
        <p>Al comparar los resultados del test de entrada con los del test de salida, observé que mi puntaje se mantuvo . Igual en ambas evaluaciones. Esto muestra que no hubo un aumento significativo en mi resultado final, a pesar de que la meta era obtener un puntaje más alto en el test de salida.Sin embargo, durante el proceso sí hubo aprendizaje. En el test de salida respondí cada pregunta con más conciencia, entendiendo mejor los temas y analizando cada opción antes de contestar. Aunque el puntaje no refleja un cambio, considero que mi forma de abordar el test fue más segura y ordenada, lo que demuestra que sí hubo un avance en mi comprensión del núcleo</p>
      </Accordion>
    </div>
  );

  const referenciasGrupalContent = (
    <div className="space-y-4">
      <div className="text-center">
        <h2 className="mb-2 text-3xl font-bold text-zinc-800">Referencias</h2>
        <p className="text-zinc-600">Listado íntegro en formato APA (tal cual en el documento)</p>
      </div>
      <ul className="list-disc pl-6 space-y-2">
        <li>Babalú. (2025). Página oficial de Babalú Moda Activa. Recuperado el 27 de octubre de 2025, de https://babalu.co</li>
        <li>Babalú. (2025). Quiénes somos. Recuperado el 27 de octubre de 2025, de https://babalu.com.co/quienes-somos</li>

        <li>Banco Mundial. (2020). Doing Business 2020: Comparing business regulation in 190 economies – Economy profile of Panama. https://documents1.worldbank.org/...</li>
        <li>Banco Mundial. (2024). Chile: Panorama general. Recuperado de https://www.bancomundial.org/...</li>
        <li>Banco Mundial. (2024). Gini index: Panama [Indicador SI.POV.GINI]. https://data.worldbank.org/...</li>
        <li>Banco Mundial. (2024). Research and development expenditure (% of GDP): Panama [Indicador GB.XPD.RSDV.GD.ZS]. https://data.worldbank.org/...</li>
        <li>Banco Mundial. (2024). World Development Indicators. https://data.worldbank.org/</li>
        <li>Banco Mundial. (2024). Worldwide Governance Indicators: Government effectiveness, percentile rank – Panama [Indicador GE.PER.RNK]. https://data.worldbank.org/...</li>
        <li>Banco Mundial. (s.f.). Panamá: Panorama general [Perfil país]. https://datos.bancomundial.org/country/panama</li>

        <li>CEIPA. (2025). Datos empresariales de Babalu [Archivo de Microsoft Excel]. CEIPA.</li>
        <li>Ceipa Talks. (s. f.). Episodio 3: Sostenibilidad en los Negocios Internacionales: Con Ana María Gómez.</li>
        <li>Comisión Económica para América Latina y el Caribe (CEPAL). (2023). Panorama económico de América Latina y el Caribe 2023. Naciones Unidas. Recuperado de https://www.cepal.org/...</li>
        <li>Czinkota, M. R., & Ronkainen, I. A. (2013). International marketing (10th ed.). Cengage Learning.</li>
        <li>Departamento Administrativo Nacional de Estadística – DANE. (2025). Indicadores económicos de coyuntura: inflación y PIB en Colombia. Recuperado de https://www.dane.gov.co</li>
        <li>Global Carbon Atlas. (2024). CO₂ emissions per capita. http://www.globalcarbonatlas.org</li>
        <li>Inexmoda. (2025, febrero). Observatorio de la Moda – Febrero 2025: Desempeño del Sistema Moda Colombiano. Recuperado de https://inexmoda.org.co/...</li>
        <li>International Monetary Fund. (2024). World Economic Outlook Database. https://www.imf.org/en/Data</li>
        <li>Kotler, P., & Keller, K. L. (2016). Marketing management (15th ed.). Pearson Education.</li>

        <li>Ministerio de Ambiente y Desarrollo Sostenible de Colombia. (2022). Ley 2232 de 2022 – Por la cual se regula el uso de plásticos de un solo uso. Diario Oficial 52.126. Recuperado de https://www.minambiente.gov.co/</li>
        <li>Ministerio de Comercio, Industria y Turismo. (2025). Políticas de apoyo al sector textil y confección en Colombia. Recuperado de https://www.mincit.gov.co</li>
        <li>Ministerio del Medio Ambiente de Chile. (2023). Estrategia nacional de consumo y producción sustentable. Gobierno de Chile. Recuperado de https://mma.gob.cl</li>

        <li>OECD. (2024). Economic survey of Chile 2024. Organisation for Economic Co-operation and Development. Recuperado de https://www.oecd.org/chile</li>
        <li>OECD. (2024). Gross domestic spending on R&amp;D. https://data.oecd.org/</li>
        <li>Osterwalder, A., & Pigneur, Y. (2010). Business model generation: A handbook for visionaries, game changers, and challengers.</li>
        <li>Porter, M. E. (1990). The competitive advantage of nations. New York: Free Press.</li>
        <li>ProChile. (2024). Estrategias de expansión internacional y comercio exterior. Gobierno de Chile. Recuperado de https://www.prochile.gob.cl</li>
        <li>ProChile. (2024). Guía para la internacionalización de empresas chilenas y extranjeras. Gobierno de Chile. Recuperado de https://www.prochile.gob.cl</li>
        <li>Statista. (2024). Crecimiento del mercado de productos naturales y sostenibles en Chile (2020–2025) [Datos estadísticos]. Recuperado de https://www.statista.com</li>
        <li>Statista. (2024). Participación del mercado de cosmética y cuidado personal en Chile (2019–2025) [Datos estadísticos]. Recuperado de https://www.statista.com</li>
        <li>United Nations Development Programme. (2024). Climate & Environment Data. https://www.undp.org</li>
        <li>Yale Center for Environmental Law & Policy. (2024). Environmental Performance Index (EPI). https://epi.yale.edu</li>
      </ul>
    </div>
  );

  const videoFinalContent = (
    <div className="space-y-4">
      <div className="text-center">
        <h2 className="mb-2 text-3xl font-bold text-zinc-800">Video final</h2>
        <p className="text-zinc-600">Inserta aquí el recurso del video final (URL o embed)</p>
      </div>
      <p>Contenido pendiente de enlace o archivo de video. Cuando nos compartas el enlace, lo integramos aquí como reproductor.</p>
    </div>
  );

  const tabs = [
    { key: "panama", label: "Panamá", content: panamaContent },
    { key: "chile", label: "Chile", content: chileContent },
    { key: "entornos_pa", label: "Entornos Panamá", content: entornosPanamaContent },
    { key: "entornos_cl", label: "Entornos Chile", content: entornosChileContent },
    { key: "powerbi", label: "Power BI", content: powerBIContent },
    { key: "powerbi_t4", label: "Power BI (T4)", content: powerBITrabajo4Content },
    { key: "comparativo", label: "Cuadro comparativo", content: comparativoContent },
    { key: "panama_int", label: "Panamá internacionalización", content: panamaInternacionalizacionContent },
    { key: "test_salida", label: "Test de salida", content: testSalidaContent },
    { key: "ref_grupal", label: "Referencias (Grupal)", content: referenciasGrupalContent },
    { key: "video_final", label: "Video final", content: videoFinalContent },
  ];

  return (
    <section className="space-y-8">
      <header className="text-center">
        <h1 className="mb-3 text-4xl font-bold text-zinc-800">Análisis por país</h1>
        <p className="text-lg text-zinc-600">Panamá y Chile: macroeconomía, PESTEL e insights visuales</p>
      </header>

      <TabSection tabs={tabs} />
    </section>
  );
}


