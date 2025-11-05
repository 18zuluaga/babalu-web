"use client";
import Image from "next/image";
import TabSection from "@/components/TabSection";
import Accordion from "@/components/Accordion";
import Modal from "@/components/Modal";
import { useState } from "react";

const powerBIImages = [
  "/doc4_assets/doc4_image17.png", // Solo la última imagen
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
            <button onClick={() => setOpenImg("linea.png")} className="mb-3 block overflow-hidden rounded-xl border bg-white p-2 hover:shadow">
              <Image src="/linea.png" alt="PIB Panamá" width={0} height={0} sizes="100vw" style={{ width: "100%", height: "auto" }} />
            </button>
            <p>La gráfica muestra que Panamá ha tenido tasas de crecimiento del PIB muy altas en la región, lo que muestra una economía activa y con oportunidades (2015-2019), en el 2020 se observa una caída pronunciada debido a la pandemia de (-18,9) pero en el 2021 se puede observa un fuerte rebote 15,1 (el pico en la gráfica), lo que demuestra la rápida reactivación de su economía y hasta el 2024 se puede evidenciar que ha disminuido pero manteniéndose en un (1,6).</p>
            <p>Todo esto demuestra que en términos de internacionalización tiene impactos tanto positivos como negativos ya que tiene el crecimiento proyectado en los años posteriores a 2021 justifica la entrada al mercado ya que se recupera de manera rápida, pero también puede ocurrir una caída libre como en 2020 esto volviéndose una montaña rusa, todo esto sucede porque la economía de Panamá depende mucho del comercio mundial por su canal de Panamá y la plataforma logística asociada (puertos, zonas libres, transportes son el corazón de su internacionalización. Los ingresos directos e indirectos del canal contribuyen significativamente al PIB y consolidan a Panamá como un eje global de comercio y servicios.</p>
            <p><strong>Calificación:</strong> 4</p>
            <p><strong>Referencia:</strong> Banco Mundial. (2025). Crecimiento del PIB per cápita (% anual) – Panamá [Conjunto de datos]. Indicadores del Desarrollo Mundial. https://datos.bancomundial.org/indicator/NY.GDP.PCAP.KD.ZG?locations=PA</p>
          </div>

          <div>
            <h3 className="mb-2 text-lg font-semibold text-zinc-800">PIB en el sector en que la empresa opere</h3>
            <button onClick={() => setOpenImg("/comercio.jpeg")} className="mb-3 block overflow-hidden rounded-xl border bg-white p-2 hover:shadow">
              <img src="/comercio.jpeg" alt="PIB sector Panamá" className="w-full h-auto" />
            </button>
            <button onClick={() => setOpenImg("/industrias.jp")} className="mb-3 block overflow-hidden rounded-xl border bg-white p-2 hover:shadow">
              <Image src="/industrias.jpeg" alt="Inflación Panamá" width={0} height={0} sizes="100vw" style={{ width: "100%", height: "auto" }} />
            </button>
            <p>Comercio al por mayor y al por menor</p>
            <p>Industrias Manufactureras</p>
            <p>Con estas dos tablas podemos observar que el comercio al por mayor y menor es, sin duda, el motor económico del país. Los datos muestran que es un sector de gran magnitud y con un crecimiento constante en los últimos años, este dinamismo sucede en gran parte por la posición estratégica de Panamá como hub comercial (canal de Panamá, Zona Libre de Colón). Para las empresas que buscan distribuir o vender productos en el comercio panameño puede tener un impacto positivo ya que los datos muestran un crecimiento significativo en los períodos recientes (2020-2025) por sus canales de distribución establecidos, un mercado de consumo amplio y un acceso simplificado a la región. Por eso su calificación puede estar en un 5, mientras que las Industrias Manufactureras muestran una tendencia de crecimiento positivo, pero tienen una escala menor en comparación con el comercio. Ya que la base industrial panameña no es tan grande ni diversificada por su dependencia de factores internos o de la minería (que ha tenido problemas recientes) por esta razón la base industrial es menos desarrollada para la internacionalización, su calificación es 3</p>
            <p><strong>Referencias:</strong> Instituto Nacional de Estadística y Censo. (2025). PIB anual por categoría de actividad económica, a precios de comprador: años 2018-24 [Conjunto de datos]. https://www.inec.gob.pa/DASHBOARDS/PIB/PIB_ANUAL_POR_CATEGORIA</p>
          </div>

          <div>
            <h3 className="mb-2 text-lg font-semibold text-zinc-800">Inflación</h3>
            <button onClick={() => setOpenImg("/inflacion.jpeg")} className="mb-3 block overflow-hidden rounded-xl border bg-white p-2 hover:shadow">
              <Image src="/inflacion.jpeg" alt="Poder adquisitivo Panamá" width={0} height={0} sizes="100vw" style={{ width: "100%", height: "auto" }} />
            </button>
            <p>En estos diez años (2015–2024) Panamá ha tenido una inflación muy baja y bastante estable; si miramos los números, el promedio queda más o menos de 0.8 % anual. Nos llama la atención que en 2019 y 2020 los precios incluso bajaron un poco, y después hubo un pequeño aumento en 2022–2023. Gran parte de esto se explica porque el país usa el dólar, eso le quita mucha volatilidad al tipo de cambio y ayuda a que los precios no se disparen. Para una empresa que quiere llegar desde otro país, eso es tranquilizador porque permite planear mejor los costos. Ahora, también pienso que cuando la inflación está muy baja puede querer decir que la demanda interna no está muy fuerte. Básicamente la estabilidad facilita la internacionalización, pero vale la pena vigilar lo que viene siendo la demanda local.</p>
            <p><strong>Calificación:</strong> 4</p>
            <p><strong>Referencias:</strong> International Monetary Fund. (2024). World Economic Outlook Database: Panama. https://www.imf.org/external/datamapper/profile/PAN; World Bank. (2024). Inflation, consumer prices (annual %): Panama [FP.CPI.TOTL.ZG]. https://data.worldbank.org/indicator/FP.CPI.TOTL.ZG?locations=PA</p>
          </div>

          <div>
            <h3 className="mb-2 text-lg font-semibold text-zinc-800">Poder adquisitivo</h3>
            <button onClick={() => setOpenImg("/poderadquisitivo.jpeg")} className="mb-3 block overflow-hidden rounded-xl border bg-white p-2 hover:shadow">
              <Image src="/poderadquisitivo.jpeg" alt="Tasa de interés Panamá" width={0} height={0} sizes="100vw" style={{ width: "100%", height: "auto" }} />
            </button>
            <p>Si miramos el PIB per cápita entre 2015 y 2024, podemos apreciar que pasó de US$14 000 a más de US$19 000. Eso significa que el ingreso promedio subió y la gente, en promedio, tiene más capacidad de compra que antes (aunque 2020 fue un año “complicado” por la pandemia). Para las empresas que evalúan entrar al mercado panameño, esto es una buena señal ya que mayor poder adquisitivo suele ser más clientes potenciales y posibilidad de vender productos con mayor valor agregado. Sin embargo, una aclaración importante es que en promedio no cuenta cómo se distribuye la renta. El FMI y otros organismos han señalado que la desigualdad sigue siendo relevante o sea que no todos ganan más, y por eso conviene segmentar la oferta y no asumir que todo el país tiene el mismo poder de compra.</p>
            <p><strong>Calificación:</strong> 4</p>
            <p><strong>Fuentes:</strong> World Bank. (2024). GDP per capita (current US$): Panama [NY.GDP.PCAP.CD]. https://data.worldbank.org/indicator/NY.GDP.PCAP.CD?locations=PA; International Monetary Fund. (2024). NGDPDPC@WEO/PA. https://www.imf.org/external/datamapper/NGDPDPC@WEO/PA</p>
          </div>

          <div>
            <h3 className="mb-2 text-lg font-semibold text-zinc-800">Tasa de interés</h3>
            <button onClick={() => setOpenImg("/tasadeinteres.jpeg")} className="mb-3 block overflow-hidden rounded-xl border bg-white p-2 hover:shadow">
              <Image src="/tasadeinteres.jpeg" alt="Tipo de cambio Panamá" width={0} height={0} sizes="100vw" style={{ width: "100%", height: "auto" }} />
            </button>
            <p>Esta gráfica muestra una tendencia general de crecimiento en la Tasa de Interés Real desde el 2014 hasta alcanzar un pico alrededor del año 2020 de 7,5%. A partir de allí, el sistema comenzó a descender con valores como 5.4% en 2021 y continúa disminuyendo hasta el último punto disponible en 2022 de 4,6%. Esta tendencia es favorable para la inversión, ya que un menor costo real del endeudamiento puede estimular el capital de trabajo. La principal característica y ventaja de Panamá en este ámbito es su sistema dolarizado. Esto es altamente valorado por los inversores internacionales para la planificación financiera a largo plazo. No obstante, esta misma dependencia limita la autonomía monetaria del país. Aunque el costo del crédito puede aumentar si la Reserva Federal de EE. UU (FED) sube las tasas, la previsibilidad del sistema financiero hace que este indicador sea favorable teniendo una calificación de 4</p>
            <p><strong>Referencia:</strong> The World Bank. (2022). Real interest rate (%) – Panama. https://datos.bancomundial.org/indicador/FR.INR.RINR?end=2022&locations=PA&start=2014&type=points&view=chart</p>
          </div>

          <div>
            <h3 className="mb-2 text-lg font-semibold text-zinc-800">Tipo y tasa de cambio</h3>
            <button onClick={() => setOpenImg("/doc4_assets/doc4_image7.png")} className="mb-3 block overflow-hidden rounded-xl border bg-white p-2 hover:shadow">
              <Image src="/doc4_assets/doc4_image7.png" alt="Empleo Panamá" width={0} height={0} sizes="100vw" style={{ width: "100%", height: "auto" }} />
            </button>
            <button onClick={() => setOpenImg("/doc4_assets/doc4_image8.png")} className="mb-3 block overflow-hidden rounded-xl border bg-white p-2 hover:shadow">
              <Image src="/doc4_assets/doc4_image8.png" alt="PIB Chile" width={0} height={0} sizes="100vw" style={{ width: "100%", height: "auto" }} />
            </button>
            <button onClick={() => setOpenImg("/doc4_assets/doc4_image8.png")} className="mb-3 block overflow-hidden rounded-xl border bg-white p-2 hover:shadow">
              <Image src="/doc4_assets/doc4_image8.png" alt="Empleo Panamá" width={0} height={0} sizes="100vw" style={{ width: "100%", height: "auto" }} />
            </button>
            <p>En esta gráfica se puede ver claramente que el tipo de cambio del balboa panameño (PAB) frente al dólar estadounidense (USD) se mantiene totalmente estable en un valor de 1.000. Esto quiere decir que un balboa siempre vale lo mismo que un dólar estadounidense, sin ninguna variación.</p>
            <p>Esta situación se debe a que Panamá tiene una economía dolarizada desde el año 1904. En otras palabras, el país adoptó el dólar estadounidense como su moneda principal, aunque también usa el balboa como referencia. Por eso, el tipo de cambio nunca cambia: 1 PAB siempre equivale a 1 USD.</p>
            <p>Panamá no cuenta con una política monetaria propia, ya que depende completamente del dólar. Gracias a esto, el país ha logrado mantener una economía muy estable, baja inflación y confianza internacional, porque su moneda no se devalúa. Sin embargo, también tiene una desventaja importante al no tener un banco central que controle su propia moneda, Panamá no puede modificar su política monetaria en caso de una crisis o si necesita ajustar su economía.</p>
            <p>Al mostrar que el tipo de cambio oficial se mantiene constante en 1.000 PAB por 1 USD. Esto demuestra que la paridad entre ambas monedas se ha mantenido fija por más de un siglo.</p>
            <p>La gráfica demuestra que Panamá mantiene un tipo de cambio fijo de 1 balboa igual a 1 dólar estadounidense, lo que refleja una gran estabilidad económica. Esta política ha beneficiado al país al evitar devaluaciones y mantener la confianza en su sistema financiero, aunque también limita su capacidad para tomar decisiones monetarias propias.</p>
            <p><strong>Calificación:</strong> 5</p>
            <p><strong>Referencias:</strong> BID (2024) data.iadb.org; Datosmacro (2025) https://datosmacro.expansion.com/divisas/pab; FMI (2023) IMF Country Report 23/129; Banco Mundial (2024) https://data.worldbank.org/indicator/PA.NUS.FCRF?locations=PA</p>
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
            <p><strong>Referencias:</strong> Banco Mundial (2025) infografía; Banco Mundial (2025) SL.UEM.TOTL.ZS; BID (2024) SIMS; Datosmacro (2025) indicadores económicos.</p>
          </div>

        </div>
      </Accordion>

      <Accordion title="PESTEL" color="border-purple-200 bg-purple-50">
        <div className="space-y-4">
          <div>
            <h3 className="mb-2 text-lg font-semibold text-zinc-800">Político</h3>
            <p>Panamá mantiene un desempeño intermedio en cuanto a eficiencia gubernamental y calidad institucional. El país registró en 2023 un valor de –0.21 puntos en el indicador Government Effectiveness, dentro de una escala que va de –2.5 a +2.5. Este resultado lo ubica alrededor del 42.9, es decir, por debajo de la mediana global en esa categoría. Estos datos muestran que la administración pública panameña aún enfrenta desafíos para lograr una gestión más ágil, transparente y eficaz. Los desafíos se reflejan en la formulación y cumplimiento de políticas públicas, así como en la credibilidad de las instituciones ante la ciudadanía y los inversionistas. La previsibilidad de las decisiones gubernamentales no alcanza estándares altos, lo que puede generar incertidumbre regulatoria o costos adicionales para las empresas. Sin embargo, avanzar en reformas administrativas y fortalecer la capacidad estatal podría aumentar la confianza del sector privado y mejorar la competitividad del país.</p>
            <p><strong>Referencias:</strong> Banco Mundial. (2024). WGI – Eficacia del Gobierno, Panamá (2023). https://data.worldbank.org/indicator/GE.PER.RNK?locations=PA</p>
          </div>
          <div>
            <h3 className="mb-2 text-lg font-semibold text-zinc-800">Económico</h3>
            <p>Según los datos oficiales del Banco Mundial, Panamá registró en 2024 una tasa de crecimiento del PIB del 2,9 %, lo que representa una desaceleración comparada con los años anteriores. Aun así, este valor sigue siendo positivo, lo que significa que la economía panameña continúa expandiéndose, aunque a un ritmo más moderado. Este comportamiento refleja que Panamá mantiene una base económica sólida, sustentada principalmente en sectores como servicios, logística, comercio internacional y turismo, los cuales siguen generando ingresos y empleo. Además, el PIB total alcanzó los 86,26 mil millones de dólares, y el PIB per cápita fue de 19.102,9 USD, lo que evidencia un nivel de ingreso medio-alto y una capacidad de compra considerable en comparación con otros países de la región. Sin embargo, el crecimiento más bajo puede deberse a factores globales como la inflación internacional, los costos logísticos y la desaceleración del comercio mundial. Aun así, una tasa de 2,9 % es suficiente para mantener la estabilidad económica y un mercado con poder adquisitivo.</p>
            <p>La relación con la internacionalización en ropa deportiva, puede influir de manera que el crecimiento del PIB positivo implica que el consumo interno sigue activo, por lo que el mercado panameño continúa siendo atractivo para productos importados como la ropa deportiva. El aumento del PIB per cápita refleja que los panameños tienen un mayor nivel de ingreso disponible, lo que les permite gastar en productos de estilo de vida, bienestar y deporte. Además, la estabilidad económica y la posición geográfica estratégica del país facilitan la distribución regional hacia otros mercados centroamericanos. Aunque el ritmo de crecimiento ha bajado, la economía panameña mantiene las condiciones adecuadas para la entrada de nuevas marcas que busquen aprovechar el auge del consumo saludable y las tendencias fitness.</p>
            <p><strong>Referencia:</strong> Banco Mundial. (s. f.). Panamá [Perfil país]. https://datos.bancomundial.org/country/panama</p>
          </div>
          <div>
            <h3 className="mb-2 text-lg font-semibold text-zinc-800">Social</h3>
            <p>Panamá enfrenta un problema constante de desigualdad, indica un valor de 49.7 en 2024, lo cual revela una distribución del ingreso muy desigual. Un valor cercano a 50 significa que gran parte de la riqueza está concentrada en una pequeña parte, mientras una porción importante de la población sigue atrasada. Esta grieta afecta la unión social y limita el crecimiento inclusivo. Los informes recientes muestran que la desigualdad aumentó ligeramente en los últimos años, pasando de 48.9 en 2023 a 49.7 en 2024, pese a la recuperación económica. La persistencia de esta desigualdad puede generar tensiones sociales, menor estabilidad y una reducción en la capacidad de consumo interno. Sin embargo promover políticas redistributivas, fortalecer la educación y garantizar el acceso equitativo a los servicios básicos podrían impulsar un desarrollo más inclusivo y sostenible.</p>
            <p><strong>Referencias:</strong> Banco Mundial. (2024). Índice de Gini – Panamá. https://data.worldbank.org/indicator/SI.POV.GINI?locations=PA; FMI. (2024). Perspectivas Económicas Mundiales. https://www.imf.org/en/Data</p>
          </div>
          <div>
            <h3 className="mb-2 text-lg font-semibold text-zinc-800">Tecnológico</h3>
            <p>Panamá invierte una parte muy pequeña de su producto interno bruto en investigación y desarrollo. Según el Banco Mundial, el gasto interno en I+D representó solo el 0.16 % del PIB en 2023. Esto refleja una capacidad reducida para generar innovación propia y adoptar tecnologías avanzadas que impulsen sectores estratégicos. Panamá se mantiene dependiente de tecnología importada y de conocimiento externo. Aumentar los incentivos a la investigación, fortalecer la cooperación entre universidades y empresas, así como atraer inversión extranjera en tecnología, son medidas que podrían elevar el nivel de innovación y la competitividad del país.</p>
            <p><strong>Referencias:</strong> Banco Mundial. (2024). Gasto en I+D (% del PIB) – Panamá. https://data.worldbank.org/indicator/GB.XPD.RSDV.GD.ZS; OCDE. (2024). Gasto interno bruto en I+D. https://data.oecd.org/</p>
          </div>
          <div>
            <h3 className="mb-2 text-lg font-semibold text-zinc-800">Ecológico</h3>
            <p>Panamá mantiene una huella de carbono per cápita moderada, cercana a las 3.3 toneladas métricas de CO₂ por habitante. Aunque este valor es menor al promedio mundial, ha venido aumentando poco a poco desde 2010, impulsado por el crecimiento económico, el transporte que aún depende de combustibles fósiles y la expansión de las ciudades. Aun así, el país ha dado pasos importantes para reducir su impacto ambiental, invirtiendo en energías limpias, protegiendo sus bosques y promoviendo políticas más sostenibles. Estas acciones reflejan su compromiso y lo consolidan como un ejemplo en la región en materia de sostenibilidad. De una forma parecida, las empresas del sector de ropa deportiva que buscan crecer e internacionalizarse se enfrentan al mismo dilema, cómo expandirse sin dejar una huella negativa en el medio ambiente. Así como Panamá busca equilibrar su desarrollo con la sostenibilidad, las marcas deportivas también están aprendiendo a hacerlo, adoptando materiales reciclados, reduciendo emisiones en la producción y apostando por energías más limpias. Hoy, los consumidores valoran más que nunca las marcas que se preocupan por el planeta, y esa conciencia se ha convertido en una parte esencial de su reputación global. Tanto Panamá como estas empresas comparten un mismo camino: avanzar hacia un modelo de crecimiento más responsable y consciente. Mientras el país trabaja por cumplir sus compromisos climáticos, las marcas deportivas que integran prácticas sostenibles en su proceso de internacionalización logran destacarse no solo por su calidad, sino también por su compromiso ambiental.</p>
            <p><strong>Referencias:</strong> Banco Mundial. (2024). World Development Indicators. https://data.worldbank.org/; Global Carbon Atlas. (2024). CO₂ per capita; UNDP (2024) Climate & Environment Data; Yale (2024) EPI.</p>
          </div>
          <div>
            <h3 className="mb-2 text-lg font-semibold text-zinc-800">Legal</h3>
            <p>El entorno legal y regulatorio panameño muestra un desempeño medio en materia de facilidad para hacer negocios. Panamá alcanzó una puntuación de 66.6 y se ubicó en el puesto 86 entre 190 economías. Estos resultados indican que el país ofrece condiciones razonables para la creación de empresas, pero aún presenta obstáculos en áreas como el pago de impuestos, la resolución de insolvencias y el cumplimiento de contratos. El marco legal panameño es funcional, aunque todavía puede mejorarse. Fortalecer la seguridad jurídica, simplificar los trámites y modernizar los procesos administrativos ayudaría a atraer más inversión extranjera y a consolidar un entorno empresarial más competitivo y estable.</p>
            <p><strong>Referencias:</strong> Banco Mundial. (2020). Doing Business 2020 – Panamá. https://documents1.worldbank.org/curated/en/225191575269872521/pdf/Doing-Business-2020-Comparing-Business-Regulation-in-190-Economies-Economy-Profile-of-Panama.pdf</p>
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
            <p><strong>Referencia:</strong> Banco Central de Chile. Cuentas Nacionales – CAP_CCNN. https://si3.bcentral.cl/Siete/ES/Siete/Cuadro/CAP_CCNN/MN_CCNN76/CCNN2018_P2</p>
          </div>
          <div>
            <h3 className="mb-2 text-lg font-semibold text-zinc-800">Tasa de interés</h3>
            <button onClick={() => setOpenImg("/doc4_assets/doc4_image13.png")} className="mb-3 block overflow-hidden rounded-xl border bg-white p-2 hover:shadow">
              <Image src="/doc4_assets/doc4_image13.png" alt="Tasa de cambio Chile" width={0} height={0} sizes="100vw" style={{ width: "100%", height: "auto" }} />
            </button>
            <p>La tasa de interés varió mucho entre 2015 y 2024. Se mantuvo estable y baja entre el 2015 y 2019, pero en el 2020 cayó bruscamente debido a la pandemia y luego subió hasta más del 10% en 2022 para controlar la inflación. En 2024 bajó de nuevo cerca del 6%, reflejando una política monetaria moderada. Estas variaciones afectan la inversión y el consumo. La tasa de interés aún es un poco alta lo cual limita parcialmente la competitividad financiera y la atracción de inversión extranjera. <strong>Calificación:</strong> 3/5</p>
            <p><strong>Referencia:</strong> Banco Central de Chile. TPM. https://si3.bcentral.cl/.../TPM_C1?...</p>
          </div>
        <div className="space-y-4">
          
          <div>
            <h3 className="mb-2 text-lg font-semibold text-zinc-800">Empleo y desempleo</h3>
            <button onClick={() => setOpenImg("/empleoydesempleo.jpeg")} className="mb-3 block overflow-hidden rounded-xl border bg-white p-2 hover:shadow">
              <Image src="/empleoydesempleo.jpeg" alt="Tasa de cambio Chile" width={0} height={0} sizes="100vw" style={{ width: "100%", height: "auto" }} />
            </button>
            <p>En los últimos años, el empleo en Chile ha tenido varios cambios. La tasa de desempleo ha estado subiendo y bajando según la situación económica del país. En 2020, durante la pandemia, el desempleo llegó a cerca del 11 %. En 2021 bajó un poco y se mantuvo alrededor del 9 %. Para el 2024 y parte del 2025, el desempleo se ha mantenido entre el 8 % y el 9 %. Hace unos años, entre 2014 y 2018, el desempleo era más bajo, cerca del 6 % o 7 %, lo que muestra que la economía chilena ha pasado por varios cambios. Actualmente, la tasa de empleo en Chile está cerca del 56 %. En general, el país muestra señales de recuperación después de los años más difíciles, aunque el ritmo de crecimiento laboral sigue siendo moderado. <strong>Calificación:</strong> 3</p>
            <p><strong>Referencias:</strong> INE (2025) tasa de desocupación; Macrotrends (2025); YCharts (2025); Trading Economics (2025).</p>
          </div>
          <div>
            <h3 className="mb-2 text-lg font-semibold text-zinc-800">Inflación y poder adquisitivo</h3>
            <button onClick={() => setOpenImg("/inflacion2.jpeg")} className="mb-3 block overflow-hidden rounded-xl border bg-white p-2 hover:shadow">
              <Image src="/inflacion2.jpeg" alt="Tasa de cambio Chile" width={0} height={0} sizes="100vw" style={{ width: "100%", height: "auto" }} />
            </button>
            <p>En los últimos años, en Chile los precios han subido de forma moderada, lo que afecta el poder adquisitivo de las familias. Por ejemplo, la inflación anual fue de alrededor de 4,3 % en 2024. En 2023 llegó a aproximadamente 7,6 %, una cifra mucho más elevada que hace unos años. Al mismo tiempo, el indicador de producción por persona ajustado por paridad de poder adquisitivo (PPP) muestra que Chile tiene un nivel de ingreso per cápita relativamente alto: en 2024, ese valor fue de unos 30.182 USD en términos PPP. <strong>Calificación:</strong> 4</p>
            <p><strong>Referencias:</strong> Banco Mundial (2024) inflación; FocusEconomics (2024) CPI; Trading Economics (2024) PPP.</p>
          </div>
          <div>
            <h3 className="mb-2 text-lg font-semibold text-zinc-800">Tasa de cambio</h3>
            <button onClick={() => setOpenImg("/tasadecambio.jpeg")} className="mb-3 block overflow-hidden rounded-xl border bg-white p-2 hover:shadow">
              <Image src="/tasadecambio.jpeg" alt="Tasa de cambio Chile" width={0} height={0} sizes="100vw" style={{ width: "100%", height: "auto" }} />
            </button>
            <p>La gráfica del tipo de cambio entre el peso chileno (CLP) y el dólar estadounidense (USD) muestra cómo el valor del peso ha variado durante los últimos años. Se observa una tendencia general al aumento del valor del dólar frente al peso, lo que significa que la moneda chilena se ha ido depreciando. En el gráfico, el tipo de cambio pasa de niveles cercanos a los 800 pesos por dólar en años anteriores, hasta ubicarse alrededor de los 940 a 950 pesos por dólar en 2025. Este comportamiento refleja la influencia de distintos factores económicos, como el aumento de la inflación, los movimientos en el precio del cobre y la política monetaria del Banco Central. Cuando el dólar sube frente al peso, los productos importados se encarecen; sin embargo, también puede favorecer las exportaciones. <strong>Calificación:</strong> 3</p>
            <p><strong>Referencias:</strong> Banco Central de Chile (2025) tipo de cambio; Trading Economics; CEIC Data; XE.</p>
          </div>
        </div>
      </Accordion>

      <Accordion title="PESTEL" color="border-purple-200 bg-purple-50">
        <div className="space-y-4">
          <div>
            <h3 className="mb-2 text-lg font-semibold text-zinc-800">Político</h3>
            <p>Chile tiene un puntaje de 7,83 en el índice The Economist Intelligence Unit de Democracia para 2024, lo que lo clasifica como una “democracia defectuosa”. En cuanto a indicadores más específicos: el índice de democracia electoral fue de 0,838 en 2023; el índice de democracia liberal es de 0,786 en 2023. En participación ciudadana, 0,599 en 2023. En conjunto, estos datos indican que Chile cuenta con instituciones democráticas relativamente sólidas, con elecciones limpias, libertad de expresión y una ciudadanía formalmente involucrada, aunque con retos de participación, confianza y cultura política.</p>
            <p><strong>Referencias:</strong> StatBase (2024) Democracy Index; TheGlobalEconomy.com varios índices.</p>
          </div>
          <div>
            <h3 className="mb-2 text-lg font-semibold text-zinc-800">Económico</h3>
            <p>Los desequilibrios macroeconómicos generados por la pandemia se han resuelto en gran medida. La economía chilena ha retomado su tendencia de crecimiento y la inflación ha disminuido desde un máximo del 14,1% en 2022 hasta el 4,2% en 2024 gracias a políticas macroeconómicas adecuadas. Sin embargo, la concurrencia de ingresos de Chile se ha estancado desde 2012, lo que refleja la disminución de la productividad y la inversión. Las perspectivas de crecimiento a largo plazo dependen de superar barreras de productividad, inversión y margen de gasto público. Se estima crecimiento sólido 2025-2026.</p>
            <p><strong>Referencia:</strong> OECD. (2025). OECD Economic Surveys: Chile 2025. https://doi.org/10.1787/efad96ce-en</p>
          </div>
          <div>
            <h3 className="mb-2 text-lg font-semibold text-zinc-800">Social</h3>
            <p>Chile es uno de los países latinoamericanos con mejor desarrollo humano, con un IDH alto (0.851) y esperanza de vida de 80 años. Población altamente alfabetizada y clase media amplia, aunque persiste polarización en ingresos y acceso a servicios.</p>
            <p><strong>Referencias:</strong> datosmacro expansion (IDH); World Bank (Life expectancy).</p>
          </div>
          <div>
            <h3 className="mb-2 text-lg font-semibold text-zinc-800">Tecnológico</h3>
            <p>Fuerte infraestructura digital; ~94 % penetración de internet. Avance en fibra y 5G. Desafíos en banda ancha fija (~23 % en 2023) que puede afectar calidad de servicio en zonas.</p>
            <p><strong>Referencias:</strong> BritCham (2022) Tech report; Helgi Library (2023) fixed broadband; H2 Chile (2024); Internet Society (2024); Trade.gov (2024).</p>
          </div>
          <div>
            <h3 className="mb-2 text-lg font-semibold text-zinc-800">Ecológico</h3>
            <p>Riesgos climáticos y metas de descarbonización. Se requiere aumentar inversión en adaptación, precio del carbono, regulación, inversión e infraestructura de transmisión. Posible brecha con metas 2025-2030 si no se acelera reducción de emisiones.</p>
            <p><strong>Referencia:</strong> OECD (2025) Economic Surveys: Chile 2025.</p>
          </div>
          <div>
            <h3 className="mb-2 text-lg font-semibold text-zinc-800">Legal</h3>
            <p>Marco legal sólido, transparente y alineado con estándares internacionales; seguridad jurídica para empresas. TLCs facilitan internacionalización. Fortalecimiento normativas ambientales y laborales aumenta costos de cumplimiento.</p>
            <p><strong>Referencia:</strong> Servicio Nacional de Aduanas de Chile. Normativas. https://www.aduana.cl/...</p>
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

  const tabs = [
    { key: "panama", label: "Panamá", content: panamaContent },
    { key: "chile", label: "Chile", content: chileContent },
    { key: "powerbi", label: "Power BI", content: powerBIContent },
    { key: "comparativo", label: "Cuadro comparativo", content: comparativoContent },
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


