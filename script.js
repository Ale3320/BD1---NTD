function mostrarTablaArticulo(nombre,articulo) {
  const mensaje = document.getElementById("mensaje");
  mensaje.className = "alert alert-primary mt-4";
  var nombreDB, busqueda, cantBusqueda, nArt, refBib, titulo, autores, anioPublicación, revista, resumen, keyWords, img, altImg;
  switch (nombre) {

    case 'alejandro':
          nombreDB ="Scopus";
          busqueda = 'artificial AND intelligence';
          cantBusqueda = "733,133";
          switch (articulo) {
            case 1: //Alejandro Art1
                  nArt = 1;
                  refBib = "Yang, Y., Wang, P., Yu, C., Zhu, J. & Sheng, J. (2025). Application of artificial intelligence medical imaging aided diagnosis system in the diagnosis of pulmonary nodules. BMC Medical Informatics and Decision Making, 25(185). https://doi.org/10.1186/s12911-025-03009-4";
                  titulo = "Application of artificial intelligence medical imaging aided diagnosis system in the diagnosis of pulmonary nodules";
                  autores = "Ya Yang, Pan Wang, Chengzhou Yu, Jing Zhu y Jinping Sheng";
                  anioPublicación = 2025;
                  revista = "BMC Medical Informatics and Decision Making";
                  resumen = "La aplicación de la tecnología de inteligencia artificial (IA) ha permitido la transformación de la producción y el estilo de vida de las personas, además de promover el rápido desarrollo del campo médico. En la actualidad, la aplicación de la inteligencia en el ámbito médico está en aumento. Utilizando métodos y tecnologías avanzadas de IA, este artículo busca lograr la integración de los sistemas de diagnóstico asistido por imágenes médicas con la IA, lo cual resulta útil para analizar y resolver las deficiencias y errores del diagnóstico tradicional en la detección de nódulos pulmonares. Basándose en los principios y reglas de los métodos de segmentación de imágenes, se lleva a cabo la construcción y optimización de un sistema de diagnóstico médico asistido por imágenes, con el fin de alcanzar mayor precisión en el diagnóstico de nódulos pulmonares. En la comparación entre diagnósticos de nódulos pulmonares realizados por sistemas tradicionales y por sistemas de diagnóstico asistido por imágenes médicas con IA, se evaluaron 231 nódulos con patología o sin cambios tras un seguimiento mayor a dos años, dentro de 200 casos. Los resultados mostraron que el software de IA detectó un total de 881 nódulos verdaderos con una sensibilidad del 99,10% (881/889). Por su parte, los radiólogos detectaron 385 nódulos verdaderos con una sensibilidad del 43,31% (385/889). La sensibilidad del software de IA para detectar nódulos no calcificados fue significativamente mayor que la de los radiólogos (99,01% vs 43,30%, P < 0,001), y la diferencia fue estadísticamente significativa.";
                  keyWords = "Sistema de diagnóstico asistido por imágenes médicas, IA, Segmentación de imágenes, Diagnóstico de nódulos pulmonares";
                  img = "images/articulo1_alejandro.png";
                  altImg = "busqueda_articulo1_alejandro"
                  break;

            case 2: //Alejandro Art2
                  nArt = 2;
                  refBib = "Wang, Y., Sun, Y., Lin, B., Zhang, H., Luo, X., Liu, Y., Jin, X. & Zhu, D. (2025). SEGT-GO: a graph transformer method based on PPI serialization and explanatory artificial intelligence for protein function prediction. BMC Bioinformatics, 26(46). https://doi.org/10.1186/s12859-025-06059-7";
                  titulo = "SEGT-GO: a graph transformer method based on PPI serialization and explanatory artificial intelligence for protein function prediction";
                  autores = "Yansong Wang, Yundong Sun, Baohui Lin, Haotian Zhang, Xiaoling Luo, Yumeng Liu, Xiaopeng Jin y Dongjie Zhu.";
                  anioPublicación = 2025;
                  revista = "BMC Bioinformatics";
                  resumen = "Antecedentes: Se ha obtenido una gran cantidad de secuencias de proteínas, pero sus funciones siguen siendo difíciles de identificar. En investigaciones recientes sobre la predicción de funciones de proteínas, las redes de interacción proteína-proteína (PPI, por sus siglas en inglés) han desempeñado un papel crucial. Descubrir posibles relaciones funcionales entre proteínas distantes dentro de las redes PPI es esencial para mejorar la precisión en la predicción de funciones proteicas. La mayoría de los estudios actuales intentan capturar estas relaciones distantes apilando capas de redes de grafos, pero las ganancias en rendimiento disminuyen a medida que aumenta el número de capas. Resultados: Para explorar más a fondo las posibles relaciones funcionales entre proteínas multi-hop en las redes PPI, este artículo propone SEGT-GO, un método de Graph Transformer basado en la serialización de vecindarios multi-hop en PPI y en inteligencia artificial explicable (XAI) para la predicción de funciones proteicas a gran escala y en múltiples especies. La serialización de vecindarios multi-hop mapea la información multi-hop en la red PPI hacia representaciones de características serializadas, lo que permite al Graph Transformer aprender características funcionales más profundas dentro de la red PPI. Basado en la teoría de juegos, el marco SHAP (Shapley Additive Explanations) de inteligencia artificial explicable optimiza la entrada del modelo y filtra el ruido de las características, mejorando así el rendimiento del modelo. Conclusiones: En comparación con el método avanzado DeepGraphGO, SEGT-GO logra resultados más competitivos en conjuntos de datos estándar a gran escala y resultados superiores en conjuntos pequeños, validando su capacidad para extraer información funcional de proteínas profundas. Además, SEGT-GO obtiene resultados superiores en el aprendizaje entre especies y en la predicción de las funciones de proteínas no vistas, lo que demuestra aún más la sólida capacidad de generalización del método.";
                  keyWords = "Predicción de funciones proteicas, Graph Transformer, Redes PPI, Serialización de vecindarios multi-hop, Inteligencia artificial explicable";
                  img = "images/articulo2_alejandro.png";
                  altImg = "busqueda_articulo2_alejandro"
                  break;

            case 3: //Alejandro Art3
                  nArt = 3;
                  refBib = "Mascarenhas, M., Mendes, F., Mota, J., Ribeiro, T., Cardoso, P., Martins, M., Almeida, M., Cordeiro, J., Ferreira, J., Macedo, G. & Santander, C. (2025). Artificial intelligence as a transforming factor in motility disorders–automatic detection of motility patterns in high-resolution anorectal manometry. Scientific Reports, 15(2061). https://doi.org/10.1038/s41598-024-83768-8";
                  titulo = "Artificial intelligence as a transforming factor in motility disorders–automatic detection of motility patterns in high-resolution anorectal manometry";
                  autores = "Miguel Mascarenhas, Francisco Mendes, Joana Mota, Tiago Ribeiro, Pedro Cardoso, Miguel Martins, Maria João Almeida, João Rala Cordeiro, João Ferreira, Guilherme Macedo & Cecilio Santander";
                  anioPublicación = 2025;
                  revista = "Scientific Reports";
                  resumen = "La manometría anorrectal de alta resolución (HR-ARM, por sus siglas en inglés) es el estándar de oro para la evaluación de los trastornos funcionales anorrectales, aunque se ve limitada por su accesibilidad y el análisis complejo de los datos. El Protocolo y la Clasificación de Londres fueron desarrollados para estandarizar la clasificación de los patrones de motilidad anorrectal. Este estudio de prueba de concepto tiene como objetivo desarrollar y validar un modelo de inteligencia artificial para la identificación y diferenciación de los trastornos del tono y la contractilidad anal en HR-ARM. Se utilizó un conjunto de datos de 701 exámenes HR-ARM de un centro terciario, clasificados de acuerdo con la Clasificación de Londres, para desarrollar y probar múltiples algoritmos de aprendizaje automático (machine learning, ML). Los exámenes se dividieron en un conjunto de entrenamiento y de prueba con una proporción 80/20. El conjunto de prueba se empleó para evaluar los modelos mediante precisión, sensibilidad, especificidad, valores predictivos positivos y negativos, y el área bajo la curva ROC. El clasificador LGBM obtuvo el mejor rendimiento, con una precisión del 87,0%en la identificación de trastornos de tono y contractilidad anal. Otros modelos de ML destacaron en la diferenciación de trastornos específicos de tono y contractilidad anal, con precisiones superiores al 90,0%. Este es el primer estudio a nivel mundial que demuestra la exactitud de un modelo de ML para la diferenciación de patrones de motilidad en HR-ARM, mostrando el valor de los modelos de inteligencia artificial en la optimización de la disponibilidad de HR-ARM, al mismo tiempo que reduce la variabilidad entre observadores y aumenta la precisión.";
                  keyWords = "Trastornos anorrectales, Manometría anorrectal, Inteligencia artificial, Gastroenterología, Aprendizaje automático";
                  img = "images/articulo3_alejandro.png";
                  altImg = "busqueda_articulo3_alejandro"
                  break;
              
            default:
                  break;
          }
          break;

    case 'esteban':
          nombreDB ="Scopus";
          busqueda = '“artificial intelligence” AND employment';
          cantBusqueda = "3,839";
          switch (articulo) {
            case 1: //Esteban Art1
                  nArt = 1;
                  refBib = "Mhlongo, S. (2025). Exploring the Ethical and Social Impact of Artificial Intelligence: A BERTopic Analysis of Academic Literature. Communications in computer and information science (pp. 18-34). https://doi.org/10.1007/978-3-031-96262-2_3";
                  titulo = "Exploring the Ethical and Social Impact of Artificial Intelligence: A BERTopic Analysis of Academic Literature";
                  autores = "Mhlongo, Siyabonga";
                  anioPublicación = 2025;
                  revista = "Communications in computer and information science";
                  resumen = "Artificial intelligence (AI) is fundamentally transforming society, making its ethical and social implications an increasingly critical and evolving area of study. This study investigated the dominant themes in academic literature on AI’s societal effects, with a focus on ethical, economic, and broader social implications. While previous research has explored specific aspects of AI’s impact, the comprehensive examination of overarching themes and their implications remain an ongoing and necessary endeavour. Accordingly, this study employed BERTopic, an advanced topic modelling technique, to analyse a large corpus of academic literature retrieved from Scopus and Web of Science. The search strategy combined AI-related concepts with social impact themes. The analysis identified six dominant clusters: (1) AI in Transportation and Urban Mobility; (2) AI in Agriculture, Environment, and Energy; (3) AI in Renewable Energy, Sustainability, and Industrial Systems; (4) AI and Robotics in Society: Education, Care, and Employment; (5) AI in Media, Security, and Ethical Systems; (6) AI in Governance, Creativity, and Sustainable Development. These clusters represent the dominant themes concerning AI’s social impact. In-depth analysis drew attention to pressing societal challenges, particularly ethical considerations, as well as AI’s pronounced role in healthcare and education. It also revealed emerging trends such as generative AI and the growing emphasis on sustainability, highlighting how these shape the discourse. The findings emphasise the need for interdisciplinary research and policy interventions to mitigate AI’s societal risks and promote its responsible adoption. This study contributes to the growing body of literature by providing a structured overview of dominant themes, identifying research gaps, and offering actionable insights for stakeholders. Recommendations include the development of strong governance frameworks, the promotion of interdisciplinary collaboration, and the advancement of equity and inclusivity in the development and deployment of AI initiatives.";
                  keyWords = "Artificial intelligence; BERTopic; Ethical considerations; Multidisciplinarity; Social impact; Topic modelling.";
                  img = "images/articulo1_esteban.png";
                  altImg = "busqueda_articulo1_esteban"
                  break;

            case 2: //Esteban Art2
                  nArt = 2;
                  refBib = "Liu, L. (2025). What is the Future of Work in the Generative AI Era? A Marx-ist and Ricardian Analysis.  riple Communication Capitalism & Critique Open Access Journal For A Global Sustainable Information Society, 23(1), 131-148. https://doi.org/10.31269/triplec.v23i1.1536";
                  titulo = "What is the Future of Work in the Generative AI Era? A Marx-ist and Ricardian Analysis";
                  autores = "Liu, Larry";
                  anioPublicación = 2025;
                  revista = "23riple Communication Capitalism & Critique Open Access Journal";
                  resumen = "There is an increasing public discourse of automation for white-collar professional jobs due to improvements in artificial intelligence (AI) capacities, raising the question about the contours of the future of work. Marx and Ricardo’s framework of technological labour displacement helps us understand the future of work in the context of AI. Marx’s discussion in Capital and Ricardo’s discussion in Principles of Political Economy reveal the common thesis that technology-induced worker displacement and precariousness of employment relationships are built into the internal logic of the contemporary digital capitalist economy. There are three important differences in their theoretical framework: (1) Marx did not believe that high technological unemployment is possible within capitalism even with very advanced technologies such as AI, while Ricardo saw technological unemployment as a serious threat while he acknowledges countervailing employment-creating tendencies; (2) While Ricardo’s explanation for the falling rate of profit is limited to rising wages, Marx traces the profit decline to the rising organic composition of capital and automation itself; (3) For Marx, a desirable future of work is not found within a capitalist framework but in communism, while Ricardo sees no alternatives to capitalism.";
                  keyWords = "artificial intelligence; automation; digital capitalism; future of work; Marx; Ricardo; technological unemployment.";
                  img = "images/articulo2_esteban.png";
                  altImg = "busqueda_articulo2_esteban"
                  break;

            case 3: //Esteban Art3
                  nArt = 3;
                  refBib = "Barrera-Jimenez, F., Arroyo-Barrigüete, J. L., Garrido-Merchán, E. C., & Grinda-Luna, G. (2025). Invulnerability bias in perceptions of artificial intelligence’s future impact on employment. Scientific Reports, 15(1). https://doi.org/10.1038/s41598-025-14698-2";
                  titulo = "Invulnerability bias in perceptions of artificial intelligence’s future impact on employment";
                  autores = "Barrera-Jimenez, Felipe; Arroyo-Barrigüete, Jose Luis; Garrido-Merchán, Eduardo C.; Grinda-Luna, Gonzalo.";
                  anioPublicación = 2025;
                  revista = "Scientific Reports";
                  resumen = "The adoption of Artificial Intelligence (AI) is reshaping the labor market; however, individuals’ perceptions of its impact remain inconsistent. This study investigates the presence of the Invulnerability Bias (IB), where workers perceive that AI will have a greater impact on others’ jobs than on their own, and Optimism Bias by Type of Impact (OBTI), where individuals perceive AI’s future impact on their own job as more positive than on others’. The study analyzes survey data collected from 201 participants, recruited through social media using convenience sampling. The data were analyzed using a combination of statistical and machine learning methods, including the Wilcoxon test, ordinary least squares regression, clustering, random forests, and decision trees. Results confirm a significant IB, but not OBTI; only 31.8% perceived AI’s future impact on their own job as more positive than on others’. Analysis shows that greater knowledge of AI correlates with lower IB, suggesting that familiarity with AI reduces the tendency to externalize perceived risk. Furthermore, bias levels vary across professional sectors: healthcare, law, and public administration exhibit the highest IB, while technology-related professions show lower levels. These findings highlight the need for interventions to improve workers’ awareness of AI’s potential future impact on employment.";
                  keyWords = "AI biases; Artificial intelligence; Future of work; Invulnerability bias; Optimism bias; Unrealistic optimism.";
                  img = "images/articulo3_esteban.png";
                  altImg = "busqueda_articulo3_esteban"
                  break;
              
            default:
                  break;
          }
          break;

    case 'daniel':
          nombreDB ="EBSCO Computer and Applied Science Complete(EBSCOhost) ";
          busqueda = '"Machine Learning" OR "Artificial Intelligence"';
          cantBusqueda = "281,044";
          switch (articulo) {

            case 1: //Daniel Art1
                  nArt = 1;
                  refBib = "Pelekis, S., Koutroubas, T., Blika, A., Berdelis, A., Karakolis, E., Ntanos, C., Spiliotis, E., & Askounis, D. (2025). Adversarial machine learning: A review of methods, tools, and critical industry sectors. Artificial Intelligence Review, 58(8), 1–87. https://doi.org/10.1007/s10462-025-11147-4";
                  titulo = "Adversarial machine learning: a review of methods, tools, and critical industry sectors";
                  autores = "Sotiris Pelekis, Thanos Koutroubas, Afroditi Blika, Anastasis Berdelis, Evangelos Karakolis, Christos Ntanos, Evangelos Spiliotis, Dimitris Askounis";
                  anioPublicación = 2025;
                  revista = "Applied Sciences (2076-3417)";
                  resumen = "Este estudio sistemático y metaanálisis investiga la aplicación de la inteligencia artificial (IA) en el análisis del rendimiento deportivo. Se incluyeron dieciséis estudios revisados por pares que abarcan trece disciplinas deportivas distintas, utilizando una variedad de técnicas de IA, desde algoritmos clásicos de aprendizaje automático hasta modelos avanzados de aprendizaje profundo y visión por computadora. Los métodos aplicados incluyeron redes neuronales convolucionales (CNN), redes LSTM, aprendizaje por refuerzo y arquitecturas de modelado predictivo. La precisión promedio agrupada fue del 87,78% (IC 95%: 82,66–92,90), aunque se observó una alta heterogeneidad entre los estudios (I2 = 93,75%). Los enfoques basados en visión por computadora y aprendizaje profundo mostraron métricas de rendimiento más altas, especialmente en deportes de alto movimiento como tenis y baloncesto. Sin embargo, se identificaron desafíos importantes, como la falta de estandarización en la evaluación de modelos, la limitada transparencia algorítmica y dificultades para generalizar hallazgos desde entornos controlados hacia contextos reales de competencia. Los resultados resaltan el papel prometedor de la IA en la optimización de protocolos de entrenamiento, el apoyo a decisiones tácticas y la mejora de estrategias de prevención de lesiones. Se recomienda más investigación para abordar los aspectos éticos, metodológicos y prácticos en la implementación de IA en contextos deportivos.";
                  keyWords = "artificial intelligence (AI), deep learning, machine learning, sports performance analysis";
                  img = "images/articulo1_daniel.png";
                  altImg = "busqueda_articulo1_daniel"
                  break;

            case 2: //Daniel Art2
                  nArt = 2;
                  refBib = "Karalekas, G., Vologiannidis, S., & Kalomiros, J. (2025). Teaching artificial intelligence and machine learning in secondary education: A robotics-based approach. Applied Sciences, 15(8), 4570. https://doi.org/10.3390/app15084570";
                  titulo = "Teaching Artificial Intelligence and Machine Learning in Secondary Education: A Robotics-Based Approach";
                  autores = "Georgios Karalekas, Stavros Vologiannidis, John Kalomiros";
                  anioPublicación = 2025;
                  revista = "Applied Sciences (2076-3417)";
                  resumen = "El rápido avance de la Inteligencia Artificial (IA) y el Aprendizaje Automático (ML) resalta la necesidad de enfoques educativos innovadores y atractivos en la educación secundaria. Este estudio presenta el diseño e implementación en el aula de una lección basada en robótica para introducir conceptos fundamentales de IA y ML a estudiantes de noveno grado sin experiencia previa en programación. La intervención utilizó dos robots de bajo costo impresos en 3D, cada uno empleado para ilustrar distintos aspectos del comportamiento inteligente: (1) automatización basada en reglas, (2) aprendizaje supervisado mediante clasificación de imágenes y (3) aprendizaje por refuerzo. La lección se comparó con una implementación anterior del mismo contenido impartido solo con software. Se recopilaron datos mediante observación en el aula y discusiones entre estudiantes y docentes. Los resultados indicaron un aumento en el compromiso y entusiasmo estudiantil en la versión con robótica, así como una mejor comprensión conceptual. El enfoque no requiere hardware especializado ni experiencia previa del instructor, lo que facilita su adopción en otros entornos escolares.";
                  keyWords = "educational robotics, hands-on learning, machine learning (ML) in education, student engagement, teaching";
                  img = "images/articulo2_daniel.png";
                  altImg = "busqueda_articulo2_daniel"
                  break;

            case 3: //Daniel Art3
                  nArt = 3;
                  refBib = "Mutovina, N., Nurtay, M., Kalinin, A., Tomilov, A., & Tomilova, N. (2025). Application of artificial intelligence and machine learning in expert systems for the mining industry: modern methods and technologies. <i>International Journal of Electrical & Computer Engineering, 15</i>(2025). https://doi.org/10.11591/ijece.v15i2.12345";
                  titulo = "Application of artificial intelligence and machine learning in expert systems for the mining industry: modern methods and technologies";
                  autores = "Natalya Mutovina, Margulan Nurtay, Alexey Kalinin, Aleksandr Tomilov, Nadezhda Tomilova";
                  anioPublicación = 2025;
                  revista = "International Journal of Electrical & Computer Engineering (2088-8708)";
                  resumen = "	La industria minera ha cambiado significativamente en las últimas décadas con la introducción de tecnologías avanzadas como la inteligencia artificial (IA) y el aprendizaje automático (ML). Estas innovaciones contribuyen a la creación de sistemas expertos que ayudan a optimizar procesos, aumentar la seguridad y mejorar la sostenibilidad de las operaciones. Este artículo es una revisión de literatura sobre los métodos y tecnologías modernas de IA y ML aplicados en la industria minera. Se discuten diversos sistemas inteligentes y expertos utilizados para mejorar la productividad, reducir costos operativos, aumentar la seguridad laboral, la sostenibilidad ambiental, la automatización de maquinaria, el análisis predictivo, la supervisión de calidad y el control, así como la gestión de inventario y logística. Se analizan las ventajas y desventajas de los diferentes enfoques, así como su posible impacto en el futuro del sector minero. La revisión destaca la importancia de integrar IA y ML en los procesos mineros para lograr soluciones más eficientes y seguras.";
                  keyWords = "Internet of things, Mining industry, Predictive analysis";
                  img = "images/articulo3_daniel.png";
                  altImg = "busqueda_articulo3_daniel"
                  break;
          
            default:
                  break;
          }
          break;
  
    default:
      break;
  }

  mensaje.innerHTML = `
        <h3>Artículo ` + nArt +`</h3>
        <table class="table tabla_articulo">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Item</th>
            <th scope="col">Descripción</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Base de datos seleccionada</td>
            <td>` + nombreDB + `</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Cadena de búsqueda realizada</td>
            <td>` + busqueda + `</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Cantidad de documentos arrojada</td>
            <td>` + cantBusqueda + `</td>
          </tr>
          <tr>
            <th scope="row">4</th>
            <td>Referencia bibliográfica</td>
            <td>` + refBib + `</td>
          </tr>
          <tr>
            <th scope="row">5</th>
            <td>Título del artículo</td>
            <td> ` + titulo +  ` </td>
          </tr>
          <tr>
            <th scope="row">6</th>
            <td>Autores</td>
            <td>` + autores + `</td>
          </tr>
          <tr>
            <th scope="row">7</th>
            <td>Año de publicación</td>
            <td>` + anioPublicación + `</td>
          </tr>
          <tr>
            <th scope="row">8</th>
            <td>Revista de publicación</td>
            <td>` + revista + `</td>
          </tr>
          <tr>
            <th scope="row">9</th>
            <td>Resumen</td>
            <td>` + resumen + `</td>
          </tr>
          <tr>
            <th scope="row">10</th>
            <td>Palabras clave</td>
            <td>` + keyWords + `</td>
          </tr>
          <tr>
            <th scope="row">11</th>
            <td>Imagen resultado de búsqueda</td>
            <td><img src= ` + img + ` alt= ` + altImg + ` class="capturaArticulo"></td>
          </tr>
        </tbody>
            </table>
        `;
}
