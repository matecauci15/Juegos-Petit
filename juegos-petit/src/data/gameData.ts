// export interface Game {
//   id: string;
//   title: string;
//   shortDescription: string;
//   detailedDescription: string;
//   image: string;
//   difficulty: string;
//   participants: string;
//   duration: string;
//   ageGroup: string;
//   tags: string[];
//   category: string[];
//   author: string;
//   type: string;
//   whatYouWillLearn: string[];
//   materials: string[];
// }

// export const games: Game[] = [
//   {
//     id: 'loca-aventura-ahorro',
//     title: 'La Loca Aventura del Ahorro',
//     shortDescription: 'Juego interactivo digital donde los niños toman decisiones financieras cotidianas y aprenden conceptos básicos de ahorro.',
//     detailedDescription: 'A través de situaciones cotidianas, este juego digital anima a los estudiantes a tomar decisiones financieras inteligentes, permitiéndoles aplicar su aprendizaje matemático a la vida real. Los niños enfrentan diferentes escenarios donde deben decidir si gastar o ahorrar, aprendiendo las consecuencias de cada decisión. Es una aventura educativa que combina diversión con aprendizaje financiero práctico.',
//     image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2026&q=80',
//     difficulty: 'Fácil',
//     participants: '1-4 jugadores',
//     duration: '45-60 minutos',
//     ageGroup: '6-12 años',
//     tags: ['Digital', 'Ahorro', 'Decisiones', 'Matemáticas'],
//     category: ['Ahorro', 'Toma de Decisiones'],
//     author: 'Educación 3.0',
//     type: 'Digital Interactivo',
//     whatYouWillLearn: [
//       'Identificar la diferencia entre necesidades y deseos',
//       'Tomar decisiones financieras inteligentes',
//       'Aplicar conceptos matemáticos a situaciones reales',
//       'Desarrollar hábitos de ahorro desde temprana edad',
//       'Evaluar consecuencias de decisiones de gasto',
//       'Planificar objetivos financieros a corto plazo'
//     ],
//     materials: [
//       'Dispositivo con acceso a internet',
//       'Navegador web actualizado',
//       'Cuaderno para apuntes (opcional)',
//       'Calculadora básica (opcional)'
//     ]
//   },
//   {
//     id: 'campeones-ahorro',
//     title: 'Campeones del Ahorro',
//     shortDescription: 'Competencia familiar divertida donde cada miembro debe ahorrar dinero real y quien ahorre más gana premios especiales.',
//     detailedDescription: 'Este emocionante juego familiar convierte el ahorro en una competencia amigable. Cada participante recibe objetivos de ahorro semanales y debe encontrar formas creativas de guardar dinero. Se crea una tabla de clasificación visible donde se registran los ahorros de cada miembro. El juego incluye desafíos especiales como "semana sin compras innecesarias" o "encuentra la mejor oferta". Es perfecto para motivar a toda la familia a desarrollar hábitos de ahorro.',
//     image: 'https://images.unsplash.com/photo-1434626881859-194d67b2b86f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80',
//     difficulty: 'Intermedio',
//     participants: '2-6 jugadores',
//     duration: '4-8 semanas',
//     ageGroup: '8-16 años',
//     tags: ['Familiar', 'Competencia', 'Ahorro Real', 'Motivación'],
//     category: ['Ahorro', 'Planificación'],
//     author: 'BBVA Educación Financiera',
//     type: 'Actividad Familiar',
//     whatYouWillLearn: [
//       'Establecer y alcanzar metas de ahorro',
//       'Identificar oportunidades de ahorro diario',
//       'Desarrollar disciplina financiera',
//       'Comparar diferentes estrategias de ahorro',
//       'Celebrar logros financieros',
//       'Crear hábitos de ahorro sostenibles'
//     ],
//     materials: [
//       'Tabla de seguimiento impresa',
//       'Marcadores de colores',
//       'Alcancías o frascos para cada participante',
//       'Calculadora',
//       'Premios simbólicos para ganadores',
//       'Stickers o sellos de progreso'
//     ]
//   },
//   {
//     id: 'monopoly-real',
//     title: 'Monopoly con Dinero Real',
//     shortDescription: 'Versión especial del clásico Monopoly usando dinero real de baja denominación para hacer la experiencia más realista y educativa.',
//     detailedDescription: 'Esta adaptación del famoso juego de mesa utiliza monedas reales de hasta $10 pesos en lugar de dinero de juguete, haciendo que cada decisión sea más significativa. Los precios de las propiedades se ajustan proporcionalmente y el ganador puede quedarse con el dinero real, pero con la condición de ahorrar al menos el 50%. El juego enseña conceptos de inversión, manejo de efectivo y toma de decisiones financieras bajo presión real.',
//     image: 'https://images.unsplash.com/photo-1606092195730-5d7b9af1efc5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
//     difficulty: 'Intermedio',
//     participants: '3-6 jugadores',
//     duration: '90-120 minutos',
//     ageGroup: '10-16 años',
//     tags: ['Estrategia', 'Dinero Real', 'Inversión', 'Clásico'],
//     category: ['Inversión', 'Estrategia Financiera'],
//     author: 'BBVA México',
//     type: 'Juego de Mesa Adaptado',
//     whatYouWillLearn: [
//       'Gestionar dinero real con responsabilidad',
//       'Evaluar riesgos de inversión',
//       'Negociar y hacer tratos financieros',
//       'Administrar propiedades y activos',
//       'Planificar estrategias a largo plazo',
//       'Manejar la presión financiera'
//     ],
//     materials: [
//       'Juego Monopoly clásico',
//       'Monedas reales ($5 y $10 pesos)',
//       'Calculadora',
//       'Nueva tabla de precios impresa',
//       'Cuaderno para registro de transacciones',
//       'Timer para turnos'
//     ]
//   },
//   {
//     id: 'carrera-obstaculos-financiera',
//     title: 'Carrera de Obstáculos Financiera',
//     shortDescription: 'Actividad física donde los niños ganan dinero real superando desafíos y luego deben tomar decisiones sobre qué hacer con sus ganancias.',
//     detailedDescription: 'Esta innovadora actividad combina ejercicio físico con educación financiera. Los participantes enfrentan diferentes obstáculos y pruebas, cada uno con un valor monetario diferente según la dificultad. Una vez que ganan su dinero, deben decidir cómo administrarlo: ahorrarlo, gastarlo en pequeños premios disponibles, o invertirlo en desafíos más difíciles con mayores recompensas. Es perfecto para niños activos que aprenden mejor a través del movimiento.',
//     image: 'https://images.unsplash.com/photo-1594882645126-14020914d58d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2085&q=80',
//     difficulty: 'Fácil',
//     participants: '3-10 jugadores',
//     duration: '60-90 minutos',
//     ageGroup: '6-14 años',
//     tags: ['Actividad Física', 'Recompensas', 'Decisiones', 'Energético'],
//     category: ['Toma de Decisiones', 'Ahorro'],
//     author: 'BBVA Educación Financiera',
//     type: 'Actividad Física Educativa',
//     whatYouWillLearn: [
//       'Relacionar esfuerzo con recompensa económica',
//       'Tomar decisiones rápidas sobre el dinero',
//       'Evaluar riesgo versus beneficio',
//       'Administrar ganancias inmediatas',
//       'Desarrollar perseverancia para objetivos financieros',
//       'Aprender el valor del dinero ganado con esfuerzo'
//     ],
//     materials: [
//       'Conos o marcadores para obstáculos',
//       'Cronómetro',
//       'Monedas de diferentes denominaciones',
//       'Lista de desafíos y recompensas',
//       'Pequeños premios para comprar',
//       'Área amplia para realizar actividades',
//       'Silbato (opcional)'
//     ]
//   },
//   {
//     id: 'banco-familiar',
//     title: 'El Banco Familiar Digital',
//     shortDescription: 'Simulación de un banco real donde los niños tienen cuentas virtuales, pueden hacer transferencias, y aprender sobre servicios bancarios.',
//     detailedDescription: 'Los niños experimentan cómo funciona un banco real a través de una simulación digital o física. Pueden abrir cuentas, hacer depósitos, retiros, transferencias entre hermanos, solicitar "préstamos" para compras especiales, y hasta ganar intereses por sus ahorros. Los padres actúan como gerentes del banco, aprobando transacciones y explicando conceptos bancarios. Es una experiencia completa del sistema financiero adaptada para niños.',
//     image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80',
//     difficulty: 'Intermedio-Avanzado',
//     participants: '2-6 jugadores',
//     duration: 'Actividad continua (semanas)',
//     ageGroup: '8-16 años',
//     tags: ['Bancario', 'Digital', 'Simulación', 'Realista'],
//     category: ['Servicios Bancarios', 'Ahorro'],
//     author: 'BBVA Link Card',
//     type: 'Simulación Bancaria',
//     whatYouWillLearn: [
//       'Entender cómo funcionan los bancos',
//       'Usar servicios bancarios básicos',
//       'Administrar una cuenta propia',
//       'Calcular y entender intereses',
//       'Planificar grandes compras',
//       'Desarrollar responsabilidad financiera digital'
//     ],
//     materials: [
//       'Aplicación bancaria para menores (Link Card o similar)',
//       'Dispositivo móvil o tablet',
//       'Cuaderno de registro bancario',
//       'Calculadora',
//       'Tarjetas de juego bancarias impresas',
//       'Dinero de juguete para transacciones físicas'
//     ]
//   },
//   {
//     id: 'desafio-alcancías',
//     title: 'Desafío de las Alcancías Inteligentes',
//     shortDescription: 'Competencia de ahorro usando diferentes tipos de alcancías con metas específicas y recompensas por cumplir objetivos.',
//     detailedDescription: 'Cada participante recibe varias alcancías con objetivos diferentes: una para ahorros de emergencia, otra para un objetivo específico (como un juguete), y una tercera para donaciones. El desafío incluye diferentes niveles de dificultad y bonificaciones por alcanzar las metas en tiempo récord. Se establecen fechas límite y se celebran los logros con ceremonias especiales. Es perfecto para enseñar la importancia de tener múltiples objetivos de ahorro.',
//     image: 'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2101&q=80',
//     difficulty: 'Fácil',
//     participants: '1-8 jugadores',
//     duration: '2-6 meses',
//     ageGroup: '5-14 años',
//     tags: ['Ahorro', 'Metas', 'Competencia', 'Paciencia'],
//     category: ['Ahorro', 'Planificación'],
//     author: 'BBVA Educación Financiera',
//     type: 'Actividad de Ahorro Prolongada',
//     whatYouWillLearn: [
//       'Establecer múltiples objetivos de ahorro',
//       'Desarrollar paciencia y constancia',
//       'Administrar diferentes fondos simultáneamente',
//       'Celebrar logros financieros',
//       'Entender la importancia de tener un fondo de emergencia',
//       'Aprender sobre donaciones y responsabilidad social'
//     ],
//     materials: [
//       '3 alcancías diferentes por participante',
//       'Etiquetas para identificar cada alcancía',
//       'Tabla de seguimiento de metas',
//       'Stickers de progreso',
//       'Certificados de logro',
//       'Pequeños premios para incentivos',
//       'Marcadores de colores'
//     ]
//   },
//   {
//     id: 'presupuesto-familiar',
//     title: 'Simulador de Presupuesto Familiar',
//     shortDescription: 'Los niños reciben un presupuesto familiar ficticio y deben tomar decisiones sobre gastos esenciales, lujos y ahorros.',
//     detailedDescription: 'En este juego de simulación, cada niño o equipo recibe un presupuesto mensual realista y una lista de gastos familiares obligatorios (comida, servicios, transporte) y opcionales (entretenimiento, lujos). Deben distribuir el dinero sabiamente, enfrentando situaciones inesperadas como gastos médicos o reparaciones. El objetivo es terminar el mes con ahorros y haber cubierto todas las necesidades básicas. Es excelente para entender la complejidad de manejar un hogar.',
//     image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2026&q=80',
//     difficulty: 'Avanzado',
//     participants: '2-6 jugadores',
//     duration: '2-3 horas',
//     ageGroup: '12-18 años',
//     tags: ['Presupuesto', 'Realismo', 'Planificación', 'Responsabilidad'],
//     category: ['Presupuesto', 'Planificación Financiera'],
//     author: 'Inclusión Financiera',
//     type: 'Juego de Simulación',
//     whatYouWillLearn: [
//       'Crear y administrar un presupuesto realista',
//       'Priorizar gastos esenciales vs opcionales',
//       'Manejar gastos inesperados',
//       'Planificar ahorros dentro de un presupuesto',
//       'Entender el costo real de mantener una familia',
//       'Desarrollar habilidades de negociación y búsqueda de ofertas'
//     ],
//     materials: [
//       'Hojas de presupuesto impresas',
//       'Tarjetas de gastos e ingresos',
//       'Calculadora',
//       'Dinero de juguete',
//       'Tarjetas de "emergencias financieras"',
//       'Marcadores y lápices',
//       'Timer para simular urgencia de decisiones'
//     ]
//   },
//   {
//     id: 'mercado-emprendedor',
//     title: 'El Mercado del Pequeño Emprendedor',
//     shortDescription: 'Los niños crean pequeños negocios, calculan costos, establecen precios y aprenden sobre ganancias y pérdidas.',
//     detailedDescription: 'Cada participante debe crear y operar un pequeño negocio durante el juego. Pueden vender limonada, hacer pulseras, ofrecer servicios como organizar juguetes, etc. Deben calcular sus costos de materiales, establecer precios competitivos, hacer marketing, y registrar sus ventas. Al final del día calculan si tuvieron ganancias o pérdidas. Es una introducción práctica al mundo empresarial y las finanzas comerciales básicas.',
//     image: 'https://images.unsplash.com/photo-1556740738-b6a63e27c4df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
//     difficulty: 'Intermedio',
//     participants: '3-8 jugadores',
//     duration: '4-6 horas',
//     ageGroup: '8-16 años',
//     tags: ['Emprendimiento', 'Creatividad', 'Negocios', 'Matemáticas'],
//     category: ['Emprendimiento', 'Planificación Financiera'],
//     author: 'Centro de Emprendimiento Infantil',
//     type: 'Actividad Empresarial',
//     whatYouWillLearn: [
//       'Calcular costos y establecer precios',
//       'Desarrollar habilidades de marketing',
//       'Entender conceptos de ganancia y pérdida',
//       'Administrar inventario y recursos',
//       'Desarrollar creatividad empresarial',
//       'Aprender sobre servicio al cliente'
//     ],
//     materials: [
//       'Materiales básicos para productos (papel, pegamento, etc.)',
//       'Dinero de juguete para transacciones',
//       'Calculadora',
//       'Hojas de registro de ventas',
//       'Materiales para hacer carteles publicitarios',
//       'Mesa o espacio para cada "negocio"',
//       'Timer para sesiones de venta'
//     ]
//   },
//     {
//     id: 'juegos-dinamicas-gestion-dinero',
//     title: 'Juegos y Dinámicas para la Gestión del Dinero en Niños',
//     shortDescription: 'Colección de 5 dinámicas del "Laboratorio del Ahorro" diseñadas para enseñar gestión del dinero, ahorro responsable y toma de decisiones financieras a diferentes edades.',
//     detailedDescription: 'Esta colección forma parte del programa "Laboratorio del Ahorro" desarrollado junto con la Fundación Mutualidad Abogacía. Incluye 5 actividades específicas: "El árbol de los deseos y el árbol de la felicidad" para distinguir necesidades de deseos, "Denarius Prix" como juego de presupuesto familiar, "Maslow y las necesidades humanas" para reflexionar sobre prioridades, "El tesoro escondido en la basura" sobre economía circular, y "Fashion Revolution Day" para consumo responsable de moda. Cada actividad está adaptada por edades desde primaria hasta bachillerato, abordando conceptos desde el valor del dinero hasta decisiones de consumo sostenible.',
//     image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2009&q=80',
//     difficulty: 'Fácil-Intermedio',
//     participants: '2-8 jugadores',
//     duration: '30-90 minutos por actividad',
//     ageGroup: '6-18 años',
//     tags: ['Laboratorio del Ahorro', 'Educación Financiera', 'Sostenibilidad', 'Reflexión'],
//     category: ['Ahorro', 'Consumo Responsable', 'Planificación Financiera'],
//     author: 'Siete Estrellas',
//     type: 'Colección de Dinámicas',
//     whatYouWillLearn: [
//       'Distinguir entre deseos y necesidades básicas',
//       'Comprender el valor real del dinero y lo que no se puede comprar',
//       'Gestionar presupuestos familiares de forma práctica',
//       'Aplicar la pirámide de Maslow a decisiones de consumo',
//       'Reflexionar sobre el impacto ambiental del consumo',
//       'Desarrollar conciencia sobre moda sostenible y economía circular',
//       'Tomar decisiones de compra responsables e informadas',
//       'Entender conceptos de reutilización y reciclaje aplicados al ahorro'
//     ],
//     materials: [
//       'Materiales para murales y árboles de la felicidad',
//       'Dinero ficticio para Denarius Prix',
//       'Tablero estilo "Juego de la Oca"',
//       'Materiales para Mural Thinking de Maslow',
//       'Bolsas para recolección de residuos plásticos',
//       'Mapamundi para actividad de moda',
//       'Ejemplos de ropa para upcycling',
//       'Tarjetas de pruebas y desafíos',
//       'Marcadores y material de escritura',
//       'Espacios amplios para actividades grupales'
//     ]
//   }
// ];

// export default games;

import loca from '../assets/loca.jpg';
import monopoly from '../assets/monopoly.webp';
import carrera from '../assets/carrera.jpg';
import ahorro from '../assets/ahorro.avif';
import wordwall from '../assets/wordwall.png';


  export interface Game {
    id: string;
    title: string;
    shortDescription: string;
    detailedDescription: string;
    image: string;
    difficulty: string;
    participants: string;
    duration: string;
    ageGroup: string;
    tags: string[];
    category: string[];
    author: string;
    type: string;
    whatYouWillLearn: string[];
    materials: string[];
  }

  export const games: Game[] = [
    {
      id: 'loca-aventura-ahorro',
      title: 'La Loca Aventura del Ahorro',
      shortDescription: 'Juego interactivo digital donde los niños toman decisiones financieras cotidianas y aprenden conceptos básicos de ahorro.',
      detailedDescription: 'A través de situaciones cotidianas, este juego digital anima a los estudiantes a tomar decisiones financieras inteligentes, permitiéndoles aplicar su aprendizaje matemático a la vida real. Los niños enfrentan diferentes escenarios donde deben decidir si gastar o ahorrar, aprendiendo las consecuencias de cada decisión. Es una aventura educativa que combina diversión con aprendizaje financiero práctico.',
      image: loca,
      difficulty: 'Fácil',
      participants: '1-4 jugadores',
      duration: '45-60 minutos',
      ageGroup: '6-12 años',
      tags: ['Digital', 'Ahorro', 'Decisiones', 'Matemáticas'],
      category: ['Ahorro', 'Toma de Decisiones'],
      author: 'Educación 3.0',
      type: 'Digital Interactivo',
      whatYouWillLearn: [
        'Identificar la diferencia entre necesidades y deseos',
        'Tomar decisiones financieras inteligentes',
        'Aplicar conceptos matemáticos a situaciones reales',
        'Desarrollar hábitos de ahorro desde temprana edad',
        'Evaluar consecuencias de decisiones de gasto',
        'Planificar objetivos financieros a corto plazo'
      ],
      materials: [
        'Dispositivo con acceso a internet',
        'Navegador web actualizado',
        'Cuaderno para apuntes (opcional)',
        'Calculadora básica (opcional)'
      ]
    },
    {
      id: 'campeones-ahorro',
      title: 'Campeones del Ahorro',
      shortDescription: 'Competencia familiar divertida donde cada miembro debe ahorrar dinero real y quien ahorre más gana premios especiales.',
      detailedDescription: 'Este emocionante juego familiar convierte el ahorro en una competencia amigable. Cada participante recibe objetivos de ahorro semanales y debe encontrar formas creativas de guardar dinero. Se crea una tabla de clasificación visible donde se registran los ahorros de cada miembro. El juego incluye desafíos especiales como "semana sin compras innecesarias" o "encuentra la mejor oferta". Es perfecto para motivar a toda la familia a desarrollar hábitos de ahorro.',
      image: 'https://images.unsplash.com/photo-1434626881859-194d67b2b86f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80',
      difficulty: 'Intermedio',
      participants: '2-6 jugadores',
      duration: '4-8 semanas',
      ageGroup: '8-16 años',
      tags: ['Familiar', 'Competencia', 'Ahorro Real', 'Motivación'],
      category: ['Ahorro', 'Planificación'],
      author: 'BBVA Educación Financiera',
      type: 'Actividad Familiar',
      whatYouWillLearn: [
        'Establecer y alcanzar metas de ahorro',
        'Identificar oportunidades de ahorro diario',
        'Desarrollar disciplina financiera',
        'Comparar diferentes estrategias de ahorro',
        'Celebrar logros financieros',
        'Crear hábitos de ahorro sostenibles'
      ],
      materials: [
        'Tabla de seguimiento impresa',
        'Marcadores de colores',
        'Alcancías o frascos para cada participante',
        'Calculadora',
        'Premios simbólicos para ganadores',
        'Stickers o sellos de progreso'
      ]
    },
    {
      id: 'monopoly-real',
      title: 'Monopoly con Dinero Real',
      shortDescription: 'Versión especial del clásico Monopoly usando dinero real de baja denominación para hacer la experiencia más realista y educativa.',
      detailedDescription: 'Esta adaptación del famoso juego de mesa utiliza monedas reales de hasta $10 pesos en lugar de dinero de juguete, haciendo que cada decisión sea más significativa. Los precios de las propiedades se ajustan proporcionalmente y el ganador puede quedarse con el dinero real, pero con la condición de ahorrar al menos el 50%. El juego enseña conceptos de inversión, manejo de efectivo y toma de decisiones financieras bajo presión real.',
      image: monopoly,
      difficulty: 'Intermedio',
      participants: '3-6 jugadores',
      duration: '90-120 minutos',
      ageGroup: '10-16 años',
      tags: ['Estrategia', 'Dinero Real', 'Inversión', 'Clásico'],
      category: ['Inversión', 'Estrategia Financiera'],
      author: 'BBVA México',
      type: 'Juego de Mesa Adaptado',
      whatYouWillLearn: [
        'Gestionar dinero real con responsabilidad',
        'Evaluar riesgos de inversión',
        'Negociar y hacer tratos financieros',
        'Administrar propiedades y activos',
        'Planificar estrategias a largo plazo',
        'Manejar la presión financiera'
      ],
      materials: [
        'Juego Monopoly clásico',
        'Monedas reales ($5 y $10 pesos)',
        'Calculadora',
        'Nueva tabla de precios impresa',
        'Cuaderno para registro de transacciones',
        'Timer para turnos'
      ]
    },
    {
      id: 'carrera-obstaculos-financiera',
      title: 'Carrera de Obstáculos Financiera',
      shortDescription: 'Actividad física donde los niños ganan dinero real superando desafíos y luego deben tomar decisiones sobre qué hacer con sus ganancias.',
      detailedDescription: 'Esta innovadora actividad combina ejercicio físico con educación financiera. Los participantes enfrentan diferentes obstáculos y pruebas, cada uno con un valor monetario diferente según la dificultad. Una vez que ganan su dinero, deben decidir cómo administrarlo: ahorrarlo, gastarlo en pequeños premios disponibles, o invertirlo en desafíos más difíciles con mayores recompensas. Es perfecto para niños activos que aprenden mejor a través del movimiento.',
      image: carrera,
      difficulty: 'Fácil',
      participants: '3-10 jugadores',
      duration: '60-90 minutos',
      ageGroup: '6-14 años',
      tags: ['Actividad Física', 'Recompensas', 'Decisiones', 'Energético'],
      category: ['Toma de Decisiones', 'Ahorro'],
      author: 'BBVA Educación Financiera',
      type: 'Actividad Física Educativa',
      whatYouWillLearn: [
        'Relacionar esfuerzo con recompensa económica',
        'Tomar decisiones rápidas sobre el dinero',
        'Evaluar riesgo versus beneficio',
        'Administrar ganancias inmediatas',
        'Desarrollar perseverancia para objetivos financieros',
        'Aprender el valor del dinero ganado con esfuerzo'
      ],
      materials: [
        'Conos o marcadores para obstáculos',
        'Cronómetro',
        'Monedas de diferentes denominaciones',
        'Lista de desafíos y recompensas',
        'Pequeños premios para comprar',
        'Área amplia para realizar actividades',
        'Silbato (opcional)'
      ]
    },
    {
      id: 'banco-familiar',
      title: 'El Banco Familiar Digital',
      shortDescription: 'Simulación de un banco real donde los niños tienen cuentas virtuales, pueden hacer transferencias, y aprender sobre servicios bancarios.',
      detailedDescription: 'Los niños experimentan cómo funciona un banco real a través de una simulación digital o física. Pueden abrir cuentas, hacer depósitos, retiros, transferencias entre hermanos, solicitar "préstamos" para compras especiales, y hasta ganar intereses por sus ahorros. Los padres actúan como gerentes del banco, aprobando transacciones y explicando conceptos bancarios. Es una experiencia completa del sistema financiero adaptada para niños.',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80',
      difficulty: 'Intermedio-Avanzado',
      participants: '2-6 jugadores',
      duration: 'Actividad continua (semanas)',
      ageGroup: '8-16 años',
      tags: ['Bancario', 'Digital', 'Simulación', 'Realista'],
      category: ['Servicios Bancarios', 'Ahorro'],
      author: 'BBVA Link Card',
      type: 'Simulación Bancaria',
      whatYouWillLearn: [
        'Entender cómo funcionan los bancos',
        'Usar servicios bancarios básicos',
        'Administrar una cuenta propia',
        'Calcular y entender intereses',
        'Planificar grandes compras',
        'Desarrollar responsabilidad financiera digital'
      ],
      materials: [
        'Aplicación bancaria para menores (Link Card o similar)',
        'Dispositivo móvil o tablet',
        'Cuaderno de registro bancario',
        'Calculadora',
        'Tarjetas de juego bancarias impresas',
        'Dinero de juguete para transacciones físicas'
      ]
    },
    {
      id: 'desafio-alcancías',
      title: 'Desafío de las Alcancías Inteligentes',
      shortDescription: 'Competencia de ahorro usando diferentes tipos de alcancías con metas específicas y recompensas por cumplir objetivos.',
      detailedDescription: 'Cada participante recibe varias alcancías con objetivos diferentes: una para ahorros de emergencia, otra para un objetivo específico (como un juguete), y una tercera para donaciones. El desafío incluye diferentes niveles de dificultad y bonificaciones por alcanzar las metas en tiempo récord. Se establecen fechas límite y se celebran los logros con ceremonias especiales. Es perfecto para enseñar la importancia de tener múltiples objetivos de ahorro.',
      image: 'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2101&q=80',
      difficulty: 'Fácil',
      participants: '1-8 jugadores',
      duration: '2-6 meses',
      ageGroup: '5-14 años',
      tags: ['Ahorro', 'Metas', 'Competencia', 'Paciencia'],
      category: ['Ahorro', 'Planificación'],
      author: 'BBVA Educación Financiera',
      type: 'Actividad de Ahorro Prolongada',
      whatYouWillLearn: [
        'Establecer múltiples objetivos de ahorro',
        'Desarrollar paciencia y constancia',
        'Administrar diferentes fondos simultáneamente',
        'Celebrar logros financieros',
        'Entender la importancia de tener un fondo de emergencia',
        'Aprender sobre donaciones y responsabilidad social'
      ],
      materials: [
        '3 alcancías diferentes por participante',
        'Etiquetas para identificar cada alcancía',
        'Tabla de seguimiento de metas',
        'Stickers de progreso',
        'Certificados de logro',
        'Pequeños premios para incentivos',
        'Marcadores de colores'
      ]
    },
    {
      id: 'presupuesto-familiar',
      title: 'Simulador de Presupuesto Familiar',
      shortDescription: 'Los niños reciben un presupuesto familiar ficticio y deben tomar decisiones sobre gastos esenciales, lujos y ahorros.',
      detailedDescription: 'En este juego de simulación, cada niño o equipo recibe un presupuesto mensual realista y una lista de gastos familiares obligatorios (comida, servicios, transporte) y opcionales (entretenimiento, lujos). Deben distribuir el dinero sabiamente, enfrentando situaciones inesperadas como gastos médicos o reparaciones. El objetivo es terminar el mes con ahorros y haber cubierto todas las necesidades básicas. Es excelente para entender la complejidad de manejar un hogar.',
      image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2026&q=80',
      difficulty: 'Avanzado',
      participants: '2-6 jugadores',
      duration: '2-3 horas',
      ageGroup: '12-18 años',
      tags: ['Presupuesto', 'Realismo', 'Planificación', 'Responsabilidad'],
      category: ['Presupuesto', 'Planificación Financiera'],
      author: 'Inclusión Financiera',
      type: 'Juego de Simulación',
      whatYouWillLearn: [
        'Crear y administrar un presupuesto realista',
        'Priorizar gastos esenciales vs opcionales',
        'Manejar gastos inesperados',
        'Planificar ahorros dentro de un presupuesto',
        'Entender el costo real de mantener una familia',
        'Desarrollar habilidades de negociación y búsqueda de ofertas'
      ],
      materials: [
        'Hojas de presupuesto impresas',
        'Tarjetas de gastos e ingresos',
        'Calculadora',
        'Dinero de juguete',
        'Tarjetas de "emergencias financieras"',
        'Marcadores y lápices',
        'Timer para simular urgencia de decisiones'
      ]
    },
    {
      id: 'mercado-emprendedor',
      title: 'El Mercado del Pequeño Emprendedor',
      shortDescription: 'Los niños crean pequeños negocios, calculan costos, establecen precios y aprenden sobre ganancias y pérdidas.',
      detailedDescription: 'Cada participante debe crear y operar un pequeño negocio durante el juego. Pueden vender limonada, hacer pulseras, ofrecer servicios como organizar juguetes, etc. Deben calcular sus costos de materiales, establecer precios competitivos, hacer marketing, y registrar sus ventas. Al final del día calculan si tuvieron ganancias o pérdidas. Es una introducción práctica al mundo empresarial y las finanzas comerciales básicas.',
      image: 'https://images.unsplash.com/photo-1556740738-b6a63e27c4df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      difficulty: 'Intermedio',
      participants: '3-8 jugadores',
      duration: '4-6 horas',
      ageGroup: '8-16 años',
      tags: ['Emprendimiento', 'Creatividad', 'Negocios', 'Matemáticas'],
      category: ['Emprendimiento', 'Planificación Financiera'],
      author: 'Centro de Emprendimiento Infantil',
      type: 'Actividad Empresarial',
      whatYouWillLearn: [
        'Calcular costos y establecer precios',
        'Desarrollar habilidades de marketing',
        'Entender conceptos de ganancia y pérdida',
        'Administrar inventario y recursos',
        'Desarrollar creatividad empresarial',
        'Aprender sobre servicio al cliente'
      ],
      materials: [
        'Materiales básicos para productos (papel, pegamento, etc.)',
        'Dinero de juguete para transacciones',
        'Calculadora',
        'Hojas de registro de ventas',
        'Materiales para hacer carteles publicitarios',
        'Mesa o espacio para cada "negocio"',
        'Timer para sesiones de venta'
      ]
    },
    {
      id: 'juegos-dinamicas-gestion-dinero',
      title: 'Juegos y Dinámicas para la Gestión del Dinero en Niños',
      shortDescription: 'Colección de 5 dinámicas del "Laboratorio del Ahorro" diseñadas para enseñar gestión del dinero, ahorro responsable y toma de decisiones financieras a diferentes edades.',
      detailedDescription: 'Esta colección forma parte del programa "Laboratorio del Ahorro" desarrollado junto con la Fundación Mutualidad Abogacía. Incluye 5 actividades específicas: "El árbol de los deseos y el árbol de la felicidad" para distinguir necesidades de deseos, "Denarius Prix" como juego de presupuesto familiar, "Maslow y las necesidades humanas" para reflexionar sobre prioridades, "El tesoro escondido en la basura" sobre economía circular, y "Fashion Revolution Day" para consumo responsable de moda. Cada actividad está adaptada por edades desde primaria hasta bachillerato, abordando conceptos desde el valor del dinero hasta decisiones de consumo sostenible.',
      image: ahorro,
      difficulty: 'Fácil-Intermedio',
      participants: '2-8 jugadores',
      duration: '30-90 minutos por actividad',
      ageGroup: '6-18 años',
      tags: ['Laboratorio del Ahorro', 'Educación Financiera', 'Sostenibilidad', 'Reflexión'],
      category: ['Ahorro', 'Consumo Responsable', 'Planificación Financiera'],
      author: 'Siete Estrellas',
      type: 'Colección de Dinámicas',
      whatYouWillLearn: [
        'Distinguir entre deseos y necesidades básicas',
        'Comprender el valor real del dinero y lo que no se puede comprar',
        'Gestionar presupuestos familiares de forma práctica',
        'Aplicar la pirámide de Maslow a decisiones de consumo',
        'Reflexionar sobre el impacto ambiental del consumo',
        'Desarrollar conciencia sobre moda sostenible y economía circular',
        'Tomar decisiones de compra responsables e informadas',
        'Entender conceptos de reutilización y reciclaje aplicados al ahorro'
      ],
      materials: [
        'Materiales para murales y árboles de la felicidad',
        'Dinero ficticio para Denarius Prix',
        'Tablero estilo "Juego de la Oca"',
        'Materiales para Mural Thinking de Maslow',
        'Bolsas para recolección de residuos plásticos',
        'Mapamundi para actividad de moda',
        'Ejemplos de ropa para upcycling',
        'Tarjetas de pruebas y desafíos',
        'Marcadores y material de escritura',
        'Espacios amplios para actividades grupales'
      ]
    },
    {
      id: 'juegos-online-didacticos-wordwall',
      title: 'JUEGOS ONLINE DIDACTICOS PARA NIÑOS',
      shortDescription: 'Plataforma digital con más de 10,000 juegos educativos interactivos diseñados para enseñar conceptos financieros y matemáticos de forma divertida.',
      detailedDescription: 'Wordwall es una plataforma educativa que ofrece una amplia colección de juegos didácticos diseñados específicamente para niños. Con más de 10,000 recursos disponibles, incluye juegos de matemáticas, sumas sucesivas, gestión de presupuestos familiares, y actividades de toma de decisiones. Los juegos utilizan diferentes formatos interactivos como ruedas aleatorias, concursos de preguntas, laberintos, y rompecabezas para mantener a los niños comprometidos mientras aprenden conceptos financieros fundamentales. La plataforma permite personalizar los juegos según la edad y nivel de dificultad, haciendo el aprendizaje accesible y progresivo.',
      image: wordwall,
      difficulty: 'Fácil-Intermedio',
      participants: '1-4 jugadores',
      duration: '15-45 minutos por juego',
      ageGroup: '5-16 años',
      tags: ['Digital', 'Interactivo', 'Matemáticas', 'Online', 'Educativo'],
      category: ['Matemáticas Financieras', 'Juegos Digitales', 'Aprendizaje Interactivo'],
      author: 'Wordwall',
      type: 'Plataforma Digital Educativa',
      whatYouWillLearn: [
        'Resolver operaciones matemáticas básicas y avanzadas',
        'Practicar sumas, restas, multiplicaciones y divisiones',
        'Desarrollar habilidades de cálculo mental',
        'Mejorar la concentración y velocidad de respuesta',
        'Aprender conceptos financieros a través del juego',
        'Trabajar con números y cantidades de dinero',
        'Desarrollar pensamiento lógico y resolución de problemas',
        'Adaptar el aprendizaje al ritmo individual'
      ],
      materials: [
        'Dispositivo con conexión a internet (tablet, computadora o smartphone)',
        'Navegador web actualizado',
        'Cuenta gratuita en Wordwall (opcional para funciones avanzadas)',
        'Cuaderno para apuntes (opcional)',
        'Calculadora para verificar resultados (opcional)'
      ]
    }
  ];