const fakePrompts = [
  {
    title: "Generador de Componentes React",
    description: "Genera un componente React con buenas prácticas y TypeScript",
    content: "Actúa como un experto desarrollador de React. Genera un componente React que siga las mejores prácticas, incluyendo: 1) Uso de TypeScript 2) Props tipadas 3) Manejo de estados 4) Comentarios explicativos 5) Estilos modulares. El componente debe ser: [descripción del componente deseado]",
    category: "React",
    tags: ["react", "typescript", "componentes"],
    isFeatured: true,
    views: 0,
    likes: 0,
    userLikes: [],
    avgRating: 0,
    authorId: "system",
    authorName: "PromptsForDevs",
    createdAt: new Date().toISOString()
  },
  {
    title: "Optimizador de Consultas SQL",
    description: "Optimiza consultas SQL complejas para mejor rendimiento",
    content: "Como experto en optimización de bases de datos, analiza y mejora la siguiente consulta SQL: [consulta SQL]. Considera: 1) Uso de índices 2) Reducción de subconsultas 3) Optimización de JOINs 4) Análisis del plan de ejecución",
    category: "SQL",
    tags: ["sql", "database", "optimization"],
    isFeatured: false,
    views: 0,
    likes: 0,
    userLikes: [],
    avgRating: 0,
    authorId: "system",
    authorName: "PromptsForDevs",
    createdAt: new Date().toISOString()
  },
  {
    title: "Refactorizador de Código",
    description: "Mejora la calidad del código siguiendo principios SOLID",
    content: "Como arquitecto de software, analiza y refactoriza el siguiente código aplicando principios SOLID y patrones de diseño: [código]. Explica: 1) Problemas identificados 2) Soluciones propuestas 3) Patrones aplicados 4) Mejoras en mantenibilidad",
    category: "Clean Code",
    tags: ["refactoring", "solid", "clean-code"],
    isFeatured: true,
    views: 0,
    likes: 0,
    userLikes: [],
    avgRating: 0,
    authorId: "system",
    authorName: "PromptsForDevs",
    createdAt: new Date().toISOString()
  }
];
      
export default fakePrompts;