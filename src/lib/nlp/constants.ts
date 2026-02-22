import stopwordsData from "./stopwords.json";
import commonwordsData from "./commonwords.json";

export const STOPWORDS = new Set(stopwordsData as string[]);
export const COMMON_WORDS = new Set(commonwordsData as string[]);

export const CHAR_LIMIT = 800;
export const DEBOUNCE_MS = 1000;
export const AUTO_SAVE_INTERVAL_MS = 600000; // 10 minutes
export const SAVE_THRESHOLD = 30; // Levenshtein distance threshold

export interface SectionThresholds {
  section: string;
  density: { LSL: number; USL: number };
  sophistication: { LSL: number; USL: number };
  variety: { LSL: number; USL: number };
}

export const SECTION_THRESHOLDS: SectionThresholds[] = [
  {
    section: "HIPOTESIS",
    density: { LSL: 0.5235, USL: 0.6603 },
    sophistication: { LSL: 0.5167, USL: 0.7211 },
    variety: { LSL: 0.8881, USL: 0.9855 },
  },
  {
    section: "JUSTIFICACION",
    density: { LSL: 0.5347, USL: 0.6013 },
    sophistication: { LSL: 0.5326, USL: 0.6326 },
    variety: { LSL: 0.5968, USL: 0.761 },
  },
  {
    section: "OBJETIVOS",
    density: { LSL: 0.5569, USL: 0.7193 },
    sophistication: { LSL: 0.5577, USL: 0.7535 },
    variety: { LSL: 0.8516, USL: 0.9858 },
  },
  {
    section: "PLANTEAMIENTO DEL PROBLEMA",
    density: { LSL: 0.5585, USL: 0.6293 },
    sophistication: { LSL: 0.5384, USL: 0.6668 },
    variety: { LSL: 0.5571, USL: 0.7047 },
  },
  {
    section: "PREGUNTAS DE INVESTIGACION",
    density: { LSL: 0.6043, USL: 0.7443 },
    sophistication: { LSL: 0.5766, USL: 0.7742 },
    variety: { LSL: 0.8885, USL: 1 },
  },
  {
    section: "METODOLOGIA",
    density: { LSL: 0.49, USL: 0.6195 },
    sophistication: { LSL: 0.5601, USL: 0.7141 },
    variety: { LSL: 0.5211, USL: 0.6508 },
  },
  {
    section: "CONCLUSIONES",
    density: { LSL: 0.5536, USL: 0.5843 },
    sophistication: { LSL: 0.5504, USL: 0.6062 },
    variety: { LSL: 0.5537, USL: 0.6477 },
  },
];

export interface FeedbackMessages {
  [status: string]: {
    [metric: string]: string[];
  };
}

export const FEEDBACKS: FeedbackMessages = {
  good: {
    "Sofisticación": [
      "Tu uso del lenguaje muestra una gran sofisticación. Has empleado términos y estructuras complejas de manera efectiva, lo que demuestra un alto nivel de habilidad lingüística.",
      "Impresionante nivel de sofisticación lingüística. Has demostrado un dominio excepcional del idioma al utilizar términos y estructuras complejas de manera fluida y natural.",
      "Tu habilidad para expresarte de manera sofisticada es admirable. Has mostrado un dominio excepcional del lenguaje al utilizar un vocabulario variado y estructuras elaboradas.",
      "Felicidades por tu excelente manejo del lenguaje. Tu sofisticación lingüística es evidente en tu capacidad para comunicar ideas de manera clara y precisa utilizando un vocabulario rico y diverso.",
      "Has demostrado un alto nivel de sofisticación en tu uso del lenguaje. Tu habilidad para utilizar términos y estructuras complejas enriquece tu comunicación y demuestra un dominio impresionante del idioma.",
    ],
    Densidad: [
      "La densidad de tu lenguaje es notable. Has logrado transmitir ideas complejas de manera concisa y precisa, utilizando un vocabulario rico y variado.",
      "Impresionante nivel de densidad lingüística. Has sido capaz de comunicar ideas complejas de manera efectiva en un espacio limitado, demostrando un alto grado de precisión y concisión.",
      "Tu capacidad para transmitir ideas de manera densa es destacable. Has utilizado un vocabulario variado y preciso para comunicar conceptos complejos de manera clara y concisa.",
      "Felicidades por tu habilidad para comunicar de manera densa y precisa. Has logrado transmitir información compleja de manera efectiva, utilizando un lenguaje claro y conciso.",
      "Has demostrado una gran habilidad para comunicarte de manera densa. Tu capacidad para transmitir información compleja de manera concisa y precisa es impresionante.",
    ],
    Variedad: [
      "Tu uso variado del lenguaje es impresionante. Has demostrado una capacidad para utilizar diferentes palabras, frases y estructuras de manera efectiva, lo que enriquece tu comunicación.",
      "Impresionante variedad lingüística. Has utilizado una amplia gama de palabras, frases y estructuras para comunicarte de manera efectiva, lo que demuestra un dominio excepcional del idioma.",
      "Felicidades por tu habilidad para diversificar tu lenguaje. Has utilizado una variedad de palabras y estructuras para comunicar ideas de manera efectiva y creativa.",
      "Has demostrado una gran habilidad para diversificar tu lenguaje. Tu capacidad para utilizar una amplia variedad de palabras y estructuras enriquece tu comunicación y la hace más interesante.",
      "Tu habilidad para utilizar un lenguaje variado es impresionante. Has demostrado creatividad y habilidad para comunicarte de manera efectiva al emplear una amplia gama de palabras y estructuras.",
    ],
  },
  medium: {
    "Sofisticación": [
      "Tu nivel de sofisticación en el uso del lenguaje es promedio. Aunque has mostrado cierta habilidad para utilizar términos y estructuras más complejas, aún hay espacio para mejorar en este aspecto.",
      "Tienes un buen nivel de sofisticación lingüística, pero aún hay margen para crecer. Sigue explorando términos y estructuras complejas para enriquecer tu comunicación.",
      "Has mostrado cierta sofisticación en tu uso del lenguaje, pero aún puedes mejorar. Considera expandir tu vocabulario y explorar nuevas formas de expresión para enriquecer tu comunicación.",
      "Tu nivel de sofisticación lingüística es aceptable. Sigue trabajando en la incorporación de términos y estructuras más complejas para mejorar tu habilidad con el lenguaje.",
      "Tienes un buen comienzo en tu nivel de sofisticación lingüística. Continúa explorando nuevas formas de expresión para enriquecer tu comunicación y llevar tu habilidad con el lenguaje al siguiente nivel.",
    ],
    Densidad: [
      "La densidad de tu lenguaje es aceptable. Has logrado transmitir tus ideas de manera clara, pero sería beneficioso explorar formas de expresión más compactas y precisas para enriquecer tu comunicación.",
      "Tu nivel de densidad lingüística es promedio. Sigue trabajando en transmitir tus ideas de manera más concisa y precisa para mejorar tu comunicación.",
      "Tienes un buen nivel de densidad en tu lenguaje, pero aún puedes mejorar. Considera utilizar un vocabulario más variado y estructuras más compactas para enriquecer tu comunicación.",
      "Tu habilidad para comunicarte de manera densa es aceptable. Sigue practicando para transmitir tus ideas de manera más concisa y precisa, utilizando un lenguaje claro y directo.",
      "Has logrado transmitir tus ideas de manera aceptable, pero aún puedes mejorar en la densidad de tu lenguaje. Sigue trabajando en transmitir información compleja de manera concisa y precisa.",
    ],
    Variedad: [
      "Tu uso del lenguaje muestra una variedad decente. Has utilizado una gama de palabras y estructuras, pero podrías beneficiarte de explorar más opciones para diversificar aún más tu expresión.",
      "Tienes una variedad aceptable en tu lenguaje, pero aún hay margen para crecer. Sigue explorando nuevas palabras y estructuras para enriquecer tu comunicación.",
      "Has mostrado cierta variedad en tu lenguaje, pero aún puedes diversificar más tu expresión. Considera ampliar tu vocabulario y explorar diferentes formas de estructurar tus frases.",
      "Tu variedad lingüística es promedio. Sigue practicando para ampliar tu vocabulario y diversificar tu expresión para enriquecer tu comunicación.",
      "Tienes una buena base de variedad lingüística, pero aún puedes mejorar. Sigue explorando nuevas formas de expresión para enriquecer tu comunicación y hacerla más interesante.",
    ],
  },
  bad: {
    "Sofisticación": [
      "Tu uso del lenguaje muestra una falta de sofisticación. Sería beneficioso trabajar en la incorporación de términos y estructuras más complejas para mejorar tu habilidad lingüística.",
      "Necesitas mejorar tu nivel de sofisticación lingüística. Sigue trabajando en la exploración de términos y estructuras más complejas para enriquecer tu comunicación.",
      "Tu nivel de sofisticación lingüística es bajo. Considera ampliar tu vocabulario y explorar nuevas formas de expresión para mejorar tu habilidad con el lenguaje.",
      "Tienes un nivel bajo de sofisticación lingüística. Sigue practicando para utilizar términos y estructuras más complejas y enriquecer tu comunicación.",
      "Es importante mejorar tu nivel de sofisticación lingüística. Trabaja en la incorporación de términos y estructuras más complejas para enriquecer tu comunicación.",
    ],
    Densidad: [
      "La densidad de tu lenguaje es baja. Es importante trabajar en transmitir tus ideas de manera más compacta y precisa, utilizando un vocabulario más rico y variado.",
      "Tu nivel de densidad lingüística es bajo. Sigue trabajando en la transmisión de ideas de manera concisa y precisa para mejorar tu comunicación.",
      "Necesitas mejorar tu densidad lingüística. Sigue practicando para comunicar tus ideas de manera más compacta y precisa utilizando un lenguaje claro y directo.",
      "Tienes un nivel bajo de densidad en tu lenguaje. Trabaja en la simplificación y clarificación de tus ideas para mejorar tu comunicación.",
      "Es importante mejorar tu densidad lingüística. Sigue practicando para transmitir información compleja de manera concisa y precisa.",
    ],
    Variedad: [
      "Tu uso del lenguaje carece de variedad. Sería útil explorar diferentes palabras, frases y estructuras para enriquecer tu comunicación y evitar la repetición.",
      "Necesitas mejorar tu variedad lingüística. Sigue explorando nuevas palabras y estructuras para diversificar tu expresión y enriquecer tu comunicación.",
      "Tienes una falta de variedad en tu lenguaje. Trabaja en la incorporación de una gama más amplia de palabras y estructuras para enriquecer tu comunicación.",
      "Tu nivel de variedad lingüística es bajo. Sigue practicando para utilizar una mayor variedad de palabras y estructuras y hacer tu comunicación más interesante.",
      "Es importante mejorar tu variedad lingüística. Sigue explorando nuevas formas de expresión para enriquecer tu comunicación y hacerla más efectiva.",
    ],
  },
};
