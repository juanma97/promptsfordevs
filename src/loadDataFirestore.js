import { initializeApp } from "firebase/app";
import { getFirestore, addDoc, collection } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyA1CdwX02t43v3cQw3DkpenCI-I-jAMJAk",
    authDomain: "promptsfordevs.firebaseapp.com",
    projectId: "promptsfordevs",
    storageBucket: "promptsfordevs.firebasestorage.app",
    messagingSenderId: "238266728311",
    appId: "1:238266728311:web:ce794da6c9330f9a812b72",
    measurementId: "G-H5HS96ZCB7"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const coleccionRef = collection(db, "prompts");


const data = {
"prompts": {
    "prompt1": {
    "id": "1",
    "title": "Responsive CSS Grid Layout",
    "description": "Create a responsive grid layout using CSS Grid for a modern website.",
    "tags": ["CSS", "Grid", "Responsive", "Frontend"],
    "category": "frontend",
    "content": "Design a responsive grid layout using CSS Grid with media queries to adjust columns based on screen width.",
    "author": "AI Prompt Generator",
    "createdAt": "2024-03-02T12:00:00Z",
    "avgRating": 4.5,
    "preview": "Responsive grid layout using CSS Grid."
    },
    "prompt2": {
    "id": "2",
    "title": "CSS Flexbox Centering",
    "description": "Center elements horizontally and vertically using CSS Flexbox.",
    "tags": ["CSS", "Flexbox", "Layout"],
    "category": "frontend",
    "content": "Implement a layout that centers a div both vertically and horizontally using Flexbox properties.",
    "author": "AI Prompt Generator",
    "createdAt": "2024-03-02T12:05:00Z",
    "avgRating": 4.7,
    "preview": "Center elements with Flexbox."
    },
    "prompt3": {
    "id": "3",
    "title": "Custom Button Component with Styled-Components",
    "description": "Create a reusable button component using styled-components in React.",
    "tags": ["React", "Styled-Components", "UI"],
    "category": "frontend",
    "content": "Develop a custom button component using styled-components. It should support variants such as primary, secondary, and disabled states.",
    "author": "AI Prompt Generator",
    "createdAt": "2024-03-02T12:10:00Z",
    "avgRating": 4.6,
    "preview": "Reusable button with styled-components."
    },
    "prompt4": {
    "id": "4",
    "title": "Unit Testing React Components with Jest",
    "description": "Write unit tests for a React component using Jest and React Testing Library.",
    "tags": ["React", "Jest", "Testing"],
    "category": "frontend",
    "content": "Create unit tests for a sample React component, covering user interactions and output rendering using Jest and React Testing Library.",
    "author": "AI Prompt Generator",
    "createdAt": "2024-03-02T12:15:00Z",
    "avgRating": 4.8,
    "preview": "Unit tests for React components."
    },
    "prompt5": {
    "id": "5",
    "title": "CSS Animation for Loading Spinner",
    "description": "Implement a CSS animation to create a smooth loading spinner.",
    "tags": ["CSS", "Animation", "UI"],
    "category": "frontend",
    "content": "Develop a CSS-only animated spinner using keyframes and transform properties as a loading indicator.",
    "author": "AI Prompt Generator",
    "createdAt": "2024-03-02T12:20:00Z",
    "avgRating": 4.3,
    "preview": "CSS animated loading spinner."
    },
    "prompt6": {
    "id": "6",
    "title": "Implement Dark Mode with CSS Variables",
    "description": "Toggle dark mode in a web app using CSS variables.",
    "tags": ["CSS", "Dark Mode", "Variables"],
    "category": "frontend",
    "content": "Create a solution to switch between light and dark themes using CSS variables and JavaScript to update the variables dynamically.",
    "author": "AI Prompt Generator",
    "createdAt": "2024-03-02T12:25:00Z",
    "avgRating": 4.7,
    "preview": "Dark mode toggle with CSS variables."
    },
    "prompt7": {
    "id": "7",
    "title": "Build a Modal Component in React",
    "description": "Develop a modal component in React with proper accessibility.",
    "tags": ["React", "Modal", "UI"],
    "category": "frontend",
    "content": "Implement a modal component in React ensuring it handles focus trapping, keyboard navigation, and ARIA attributes for accessibility.",
    "author": "AI Prompt Generator",
    "createdAt": "2024-03-02T12:30:00Z",
    "avgRating": 4.6,
    "preview": "Accessible modal component in React."
    },
    "prompt8": {
    "id": "8",
    "title": "Responsive Navigation Bar",
    "description": "Design a responsive navigation bar that adapts to mobile and desktop.",
    "tags": ["CSS", "Responsive", "Navigation"],
    "category": "frontend",
    "content": "Create a navigation bar that collapses into a hamburger menu on mobile devices and expands on desktop using media queries and JavaScript.",
    "author": "AI Prompt Generator",
    "createdAt": "2024-03-02T12:35:00Z",
    "avgRating": 4.4,
    "preview": "Responsive navbar with hamburger menu."
    },
    "prompt9": {
    "id": "9",
    "title": "CSS Variables for Theming",
    "description": "Utilize CSS variables to create a themable design system.",
    "tags": ["CSS", "Theming", "Design System"],
    "category": "frontend",
    "content": "Develop a design system that leverages CSS variables for easy theming of a web application, including primary, secondary, and accent colors.",
    "author": "AI Prompt Generator",
    "createdAt": "2024-03-02T12:40:00Z",
    "avgRating": 4.5,
    "preview": "Theming system using CSS variables."
    },
    "prompt10": {
    "id": "10",
    "title": "Optimize Image Loading with Lazy Loading",
    "description": "Implement lazy loading for images in a React application.",
    "tags": ["React", "Performance", "Lazy Loading"],
    "category": "frontend",
    "content": "Create a React component that uses the Intersection Observer API to implement lazy loading for images, improving performance.",
    "author": "AI Prompt Generator",
    "createdAt": "2024-03-02T12:45:00Z",
    "avgRating": 4.7,
    "preview": "Lazy loading images using Intersection Observer."
    },
    "prompt11": {
    "id": "11",
    "title": "Create a Responsive Card Layout",
    "description": "Design a responsive card layout using CSS Grid.",
    "tags": ["CSS", "Grid", "Responsive"],
    "category": "frontend",
    "content": "Build a responsive card layout with CSS Grid that adjusts columns based on viewport width.",
    "author": "AI Prompt Generator",
    "createdAt": "2024-03-02T12:50:00Z",
    "avgRating": 4.6,
    "preview": "Responsive card layout with CSS Grid."
    },
    "prompt12": {
    "id": "12",
    "title": "Implement a Search Autocomplete Component",
    "description": "Develop a search input with autocomplete suggestions in React.",
    "tags": ["React", "Autocomplete", "UI"],
    "category": "frontend",
    "content": "Create an autocomplete component that fetches suggestions as the user types and displays them in a dropdown menu with keyboard navigation.",
    "author": "AI Prompt Generator",
    "createdAt": "2024-03-02T12:55:00Z",
    "avgRating": 4.5,
    "preview": "Search autocomplete component in React."
    },
    "prompt13": {
    "id": "13",
    "title": "CSS Transitions for Hover Effects",
    "description": "Apply smooth CSS transitions for hover effects on buttons and links.",
    "tags": ["CSS", "Transitions", "Effects"],
    "category": "frontend",
    "content": "Design a set of CSS hover effects using transitions that can be applied to buttons and links.",
    "author": "AI Prompt Generator",
    "createdAt": "2024-03-02T13:00:00Z",
    "avgRating": 4.4,
    "preview": "Smooth hover effects using CSS transitions."
    },
    "prompt14": {
    "id": "14",
    "title": "Accessible Form Validation",
    "description": "Create accessible form validation in a React form.",
    "tags": ["React", "Forms", "Accessibility"],
    "category": "frontend",
    "content": "Implement client-side form validation in React with proper error messages and ARIA attributes to ensure accessibility.",
    "author": "AI Prompt Generator",
    "createdAt": "2024-03-02T13:05:00Z",
    "avgRating": 4.7,
    "preview": "Accessible form validation in React."
    },
    "prompt15": {
    "id": "15",
    "title": "Implement CSS Parallax Scrolling",
    "description": "Build a parallax scrolling effect using CSS.",
    "tags": ["CSS", "Parallax", "Animation"],
    "category": "frontend",
    "content": "Develop a parallax scrolling effect using CSS background-attachment and transform properties.",
    "author": "AI Prompt Generator",
    "createdAt": "2024-03-02T13:10:00Z",
    "avgRating": 4.3,
    "preview": "CSS parallax scrolling effect."
    },
    "prompt16": {
    "id": "16",
    "title": "SVG Icon System with React",
    "description": "Create a scalable SVG icon system in a React application.",
    "tags": ["React", "SVG", "Icons"],
    "category": "frontend",
    "content": "Develop a reusable SVG icon component in React that supports different sizes, colors, and accessibility attributes.",
    "author": "AI Prompt Generator",
    "createdAt": "2024-03-02T13:15:00Z",
    "avgRating": 4.6,
    "preview": "Scalable SVG icon system in React."
    },
    "prompt17": {
    "id": "17",
    "title": "CSS Blend Modes for Visual Effects",
    "description": "Experiment with CSS blend modes to create unique visual effects.",
    "tags": ["CSS", "Blend Modes", "Design"],
    "category": "frontend",
    "content": "Apply CSS blend modes to images and backgrounds to achieve creative visual effects.",
    "author": "AI Prompt Generator",
    "createdAt": "2024-03-02T13:20:00Z",
    "avgRating": 4.2,
    "preview": "CSS blend modes for visual effects."
    },
    "prompt18": {
    "id": "18",
    "title": "Integrate Google Fonts for Typography",
    "description": "Use Google Fonts to enhance the typography of your web app.",
    "tags": ["CSS", "Typography", "Google Fonts"],
    "category": "frontend",
    "content": "Integrate Google Fonts into your project and apply them to headings, paragraphs, and UI elements for a polished look.",
    "author": "AI Prompt Generator",
    "createdAt": "2024-03-02T13:25:00Z",
    "avgRating": 4.5,
    "preview": "Enhance typography using Google Fonts."
    },
    "prompt19": {
    "id": "19",
    "title": "Dynamic Theming with React Context and CSS Variables",
    "description": "Implement dynamic theming in a React app using context and CSS variables.",
    "tags": ["React", "Theming", "CSS Variables"],
    "category": "frontend",
    "content": "Create a theme switcher in React that allows users to toggle between light and dark themes by updating CSS variables.",
    "author": "AI Prompt Generator",
    "createdAt": "2024-03-02T13:30:00Z",
    "avgRating": 4.7,
    "preview": "Dynamic theming with React Context and CSS Variables."
    },
    "prompt20": {
    "id": "20",
    "title": "Performance Optimization: Code Splitting",
    "description": "Optimize your React app with code splitting and lazy loading.",
    "tags": ["React", "Performance", "Lazy Loading"],
    "category": "frontend",
    "content": "Implement code splitting in your React application using React.lazy and Suspense to reduce initial load times.",
    "author": "AI Prompt Generator",
    "createdAt": "2024-03-02T13:35:00Z",
    "avgRating": 4.8,
    "preview": "Code splitting for improved performance."
    },
    "prompt21": {
    "id": "21",
    "title": "REST API Design Best Practices",
    "description": "Design a robust REST API following industry best practices.",
    "tags": ["API", "REST", "Backend"],
    "category": "backend",
    "content": "Outline a REST API design including proper endpoint structure, HTTP methods, status codes, and error handling for a scalable application.",
    "author": "AI Prompt Generator",
    "createdAt": "2024-03-02T13:40:00Z",
    "avgRating": 4.7,
    "preview": "Best practices for designing a REST API."
    },
    "prompt22": {
    "id": "22",
    "title": "GraphQL API Implementation",
    "description": "Implement a GraphQL API using Node.js and Apollo Server.",
    "tags": ["GraphQL", "Node.js", "Backend"],
    "category": "backend",
    "content": "Develop a GraphQL API that supports queries and mutations using Apollo Server, including examples for authentication and data fetching.",
    "author": "AI Prompt Generator",
    "createdAt": "2024-03-02T13:45:00Z",
    "avgRating": 4.6,
    "preview": "GraphQL API with Apollo Server."
    },
    "prompt23": {
    "id": "23",
    "title": "JWT Authentication in Express",
    "description": "Secure your Express API with JWT-based authentication.",
    "tags": ["Express", "JWT", "Authentication"],
    "category": "backend",
    "content": "Implement JWT authentication in an Express application, including token generation, middleware for verification, and error handling.",
    "author": "AI Prompt Generator",
    "createdAt": "2024-03-02T13:50:00Z",
    "avgRating": 4.8,
    "preview": "JWT authentication implementation in Express."
    },
    "prompt24": {
    "id": "24",
    "title": "Database Schema Design with MongoDB",
    "description": "Design an efficient database schema using MongoDB for a scalable app.",
    "tags": ["MongoDB", "Database", "Backend"],
    "category": "backend",
    "content": "Develop a database schema in MongoDB that optimizes queries and scalability, including relationships, indexes, and data validation.",
    "author": "AI Prompt Generator",
    "createdAt": "2024-03-02T13:55:00Z",
    "avgRating": 4.5,
    "preview": "Efficient MongoDB schema design."
    },
    "prompt25": {
    "id": "25",
    "title": "Implementing CI/CD with Jenkins",
    "description": "Automate your build and deployment process using Jenkins.",
    "tags": ["CI/CD", "Jenkins", "Backend"],
    "category": "backend",
    "content": "Create a Jenkins pipeline that automates building, testing, and deploying your application, including environment setup and notifications.",
    "author": "AI Prompt Generator",
    "createdAt": "2024-03-02T14:00:00Z",
    "avgRating": 4.4,
    "preview": "CI/CD pipeline setup with Jenkins."
    },
    "prompt26": {
    "id": "26",
    "title": "Containerize Your App with Docker",
    "description": "Dockerize a Node.js application for consistent deployment.",
    "tags": ["Docker", "Containerization", "Backend"],
    "category": "backend",
    "content": "Write a Dockerfile and docker-compose configuration for a Node.js app to ensure environment consistency and easy scaling.",
    "author": "AI Prompt Generator",
    "createdAt": "2024-03-02T14:05:00Z",
    "avgRating": 4.6,
    "preview": "Dockerize a Node.js application."
    },
    "prompt27": {
    "id": "27",
    "title": "Build a Microservices Architecture",
    "description": "Design a microservices-based system using Node.js and Docker.",
    "tags": ["Microservices", "Node.js", "Backend"],
    "category": "backend",
    "content": "Outline a microservices architecture, defining services, inter-service communication, and data management strategies for scalability.",
    "author": "AI Prompt Generator",
    "createdAt": "2024-03-02T14:10:00Z",
    "avgRating": 4.7,
    "preview": "Design a microservices architecture."
    },
    "prompt28": {
    "id": "28",
    "title": "API Rate Limiting with Redis",
    "description": "Implement rate limiting for your API using Redis.",
    "tags": ["API", "Rate Limiting", "Redis", "Backend"],
    "category": "backend",
    "content": "Use Redis to implement rate limiting in your API by creating middleware in Express that limits the number of requests per IP address.",
    "author": "AI Prompt Generator",
    "createdAt": "2024-03-02T14:15:00Z",
    "avgRating": 4.5,
    "preview": "API rate limiting using Redis."
    },
    "prompt29": {
    "id": "29",
    "title": "Spring Boot REST API",
    "description": "Develop a REST API using Spring Boot.",
    "tags": ["Spring Boot", "Java", "Backend"],
    "category": "backend",
    "content": "Build a RESTful API using Spring Boot, incorporating dependency injection, controllers, and proper exception handling.",
    "author": "AI Prompt Generator",
    "createdAt": "2024-03-02T14:20:00Z",
    "avgRating": 4.8,
    "preview": "Spring Boot REST API implementation."
    },
    "prompt30": {
    "id": "30",
    "title": "Secure Your API with OAuth 2.0",
    "description": "Implement OAuth 2.0 authorization in your API.",
    "tags": ["OAuth", "Security", "Backend"],
    "category": "backend",
    "content": "Integrate OAuth 2.0 in your API to manage access tokens, scopes, and user permissions, enhancing security.",
    "author": "AI Prompt Generator",
    "createdAt": "2024-03-02T14:25:00Z",
    "avgRating": 4.7,
    "preview": "OAuth 2.0 integration for secure API endpoints."
    },
    "prompt31": {
    "id": "31",
    "title": "Implement WebSocket Communication",
    "description": "Set up real-time communication using WebSockets in Node.js.",
    "tags": ["WebSocket", "Real-Time", "Backend"],
    "category": "backend",
    "content": "Create a WebSocket server in Node.js to allow real-time communication between clients, handling connections and disconnections.",
    "author": "AI Prompt Generator",
    "createdAt": "2024-03-02T14:30:00Z",
    "avgRating": 4.5,
    "preview": "Real-time communication using WebSockets."
    },
    "prompt32": {
    "id": "32",
    "title": "Database Transactions in PostgreSQL",
    "description": "Implement transactions in PostgreSQL for data integrity.",
    "tags": ["PostgreSQL", "Database", "Backend"],
    "category": "backend",
    "content": "Write queries demonstrating transactions in PostgreSQL, including commit and rollback operations.",
    "author": "AI Prompt Generator",
    "createdAt": "2024-03-02T14:35:00Z",
    "avgRating": 4.6,
    "preview": "PostgreSQL transactions for data integrity."
    },
    "prompt33": {
    "id": "33",
    "title": "Logging and Monitoring with ELK Stack",
    "description": "Set up logging and monitoring using the ELK Stack.",
    "tags": ["ELK", "Logging", "Monitoring", "Backend"],
    "category": "backend",
    "content": "Integrate Elasticsearch, Logstash, and Kibana to capture logs and monitor system performance.",
    "author": "AI Prompt Generator",
    "createdAt": "2024-03-02T14:40:00Z",
    "avgRating": 4.7,
    "preview": "Logging and monitoring using ELK Stack."
    },
    "prompt34": {
    "id": "34",
    "title": "Implement Server-Side Rendering with Next.js",
    "description": "Use Next.js to render pages on the server for SEO benefits.",
    "tags": ["Next.js", "SSR", "Backend"],
    "category": "backend",
    "content": "Develop a Next.js application leveraging server-side rendering to improve SEO and initial load performance.",
    "author": "AI Prompt Generator",
    "createdAt": "2024-03-02T14:45:00Z",
    "avgRating": 4.5,
    "preview": "Server-side rendering using Next.js."
    },
    "prompt35": {
    "id": "35",
    "title": "Cache API Responses with Redis",
    "description": "Improve performance by caching API responses using Redis.",
    "tags": ["Redis", "Caching", "Backend"],
    "category": "backend",
    "content": "Implement a caching layer using Redis to store frequently requested data and reduce database load.",
    "author": "AI Prompt Generator",
    "createdAt": "2024-03-02T14:50:00Z",
    "avgRating": 4.6,
    "preview": "Cache API responses with Redis."
    },
    "prompt36": {
    "id": "36",
    "title": "Automated Testing for REST APIs",
    "description": "Write automated tests for your REST API using Postman and Newman.",
    "tags": ["Testing", "API", "Postman", "Backend"],
    "category": "backend",
    "content": "Develop a suite of automated tests for your REST API endpoints using Postman collections and Newman in a CI environment.",
    "author": "AI Prompt Generator",
    "createdAt": "2024-03-02T14:55:00Z",
    "avgRating": 4.5,
    "preview": "Automated testing for REST APIs using Postman and Newman."
    },
    "prompt37": {
    "id": "37",
    "title": "GraphQL Subscriptions with Apollo",
    "description": "Implement real-time GraphQL subscriptions using Apollo Server.",
    "tags": ["GraphQL", "Apollo", "Real-Time", "Backend"],
    "category": "backend",
    "content": "Set up GraphQL subscriptions in your API using Apollo Server to enable real-time data updates to clients.",
    "author": "AI Prompt Generator",
    "createdAt": "2024-03-02T15:00:00Z",
    "avgRating": 4.7,
    "preview": "Real-time GraphQL subscriptions with Apollo Server."
    },
    "prompt38": {
    "id": "38",
    "title": "Event-Driven Architecture with Kafka",
    "description": "Design an event-driven system using Apache Kafka.",
    "tags": ["Kafka", "Event-Driven", "Backend"],
    "category": "backend",
    "content": "Develop an event-driven architecture where services communicate asynchronously using Apache Kafka.",
    "author": "AI Prompt Generator",
    "createdAt": "2024-03-02T15:05:00Z",
    "avgRating": 4.6,
    "preview": "Event-driven architecture using Kafka."
    },
    "prompt39": {
    "id": "39",
    "title": "Implementing Caching Strategies with Varnish",
    "description": "Improve web performance using Varnish Cache.",
    "tags": ["Caching", "Varnish", "Backend"],
    "category": "backend",
    "content": "Set up Varnish Cache in front of your web server to cache static content and reduce response times.",
    "author": "AI Prompt Generator",
    "createdAt": "2024-03-02T15:10:00Z",
    "avgRating": 4.5,
    "preview": "Caching strategies with Varnish."
    },
    "prompt40": {
    "id": "40",
    "title": "Secure API Endpoints with HTTPS and SSL",
    "description": "Configure HTTPS and SSL certificates to secure your API endpoints.",
    "tags": ["Security", "HTTPS", "SSL", "Backend"],
    "category": "backend",
    "content": "Configure your API to use HTTPS, install SSL certificates, and enforce secure communication between clients and the server.",
    "author": "AI Prompt Generator",
    "createdAt": "2024-03-02T15:15:00Z",
    "avgRating": 4.8,
    "preview": "Secure API endpoints using HTTPS and SSL."
    }
}
}

const subirDatos = async () => {
    try {
        const promptsArray = Object.values(data.prompts); // Convertir a array
        for (const prompt of promptsArray) {
            await addDoc(coleccionRef, prompt); // Agregar cada prompt como documento
            console.log(`✅ Subido: ${prompt.title}`);
        }
        console.log("🚀 Todos los prompts han sido subidos correctamente.");
    } catch (error) {
        console.error("❌ Error subiendo prompts:", error);
    }
};

// Ejecutar la carga de datos
subirDatos();

  