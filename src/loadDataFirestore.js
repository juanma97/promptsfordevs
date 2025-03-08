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


const firstData = {
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

const data = {
    "prompts": {

    
        "prompt41": {
        "id": "41",
        "title": "Optimize SQL Queries for Performance",
        "description": "Analyze and optimize SQL queries to improve database performance.",
        "tags": ["SQL", "Database", "Optimization", "Backend"],
        "category": "backend",
        "content": "Review SQL queries, add proper indexing, optimize joins, and reduce redundant data retrieval.",
        "author": "AI Prompt Generator",
        "createdAt": "2024-03-02T15:20:00Z",
        "avgRating": 4.7,
        "preview": "Optimize SQL queries for faster execution and better performance."
        },
        "prompt42": {
        "id": "42",
        "title": "Implement JWT Authentication in a REST API",
        "description": "Secure a REST API by implementing JSON Web Token (JWT) authentication.",
        "tags": ["Authentication", "JWT", "Security", "REST API"],
        "category": "backend",
        "content": "Configure JWT authentication, generate secure tokens, and validate requests in your API.",
        "author": "AI Prompt Generator",
        "createdAt": "2024-03-02T15:25:00Z",
        "avgRating": 4.8,
        "preview": "Implement JWT authentication for secure API access."
        },
        "prompt43": {
        "id": "43",
        "title": "Improve Website Accessibility",
        "description": "Enhance a website’s accessibility to ensure compliance with WCAG guidelines.",
        "tags": ["Accessibility", "Web", "UI/UX", "Frontend"],
        "category": "frontend",
        "content": "Add ARIA attributes, improve keyboard navigation, and enhance color contrast for better accessibility.",
        "author": "AI Prompt Generator",
        "createdAt": "2024-03-02T15:30:00Z",
        "avgRating": 4.6,
        "preview": "Enhance website accessibility for better user experience."
        },
        "prompt44": {
        "id": "44",
        "title": "Implement Dark Mode in a Web App",
        "description": "Create a dark mode toggle feature in a web application.",
        "tags": ["Frontend", "CSS", "JavaScript", "UI"],
        "category": "frontend",
        "content": "Use CSS variables, media queries, and JavaScript to implement dark mode support.",
        "author": "AI Prompt Generator",
        "createdAt": "2024-03-02T15:35:00Z",
        "avgRating": 4.9,
        "preview": "Add a dark mode feature to your web application."
        },
        "prompt45": {
        "id": "45",
        "title": "Deploy a Full-Stack App with Docker",
        "description": "Use Docker to containerize and deploy a full-stack web application.",
        "tags": ["Docker", "DevOps", "Backend", "Frontend"],
        "category": "devops",
        "content": "Create Dockerfiles, define services in Docker Compose, and deploy the app in containers.",
        "author": "AI Prompt Generator",
        "createdAt": "2024-03-02T15:40:00Z",
        "avgRating": 4.8,
        "preview": "Containerize and deploy a full-stack application using Docker."
        },
        "prompt46": {
        "id": "46",
        "title": "Set Up CI/CD Pipeline with GitHub Actions",
        "description": "Automate builds and deployments using GitHub Actions.",
        "tags": ["DevOps", "CI/CD", "Automation", "GitHub"],
        "category": "devops",
        "content": "Configure GitHub Actions to automate testing, builds, and deployments in your project.",
        "author": "AI Prompt Generator",
        "createdAt": "2024-03-02T15:45:00Z",
        "avgRating": 4.9,
        "preview": "Set up a CI/CD pipeline using GitHub Actions."
        },
        "prompt47": {
        "id": "47",
        "title": "Optimize Images for Web Performance",
        "description": "Improve website loading speed by optimizing images effectively.",
        "tags": ["Performance", "Images", "Frontend", "Optimization"],
        "category": "frontend",
        "content": "Compress images, use WebP format, lazy-load images, and implement responsive image techniques.",
        "author": "AI Prompt Generator",
        "createdAt": "2024-03-02T15:50:00Z",
        "avgRating": 4.7,
        "preview": "Optimize images to improve website performance."
        },
        "prompt48": {
        "id": "48",
        "title": "Implement WebSockets for Real-Time Communication",
        "description": "Use WebSockets to enable real-time features in an application.",
        "tags": ["WebSockets", "Real-time", "Backend", "Frontend"],
        "category": "backend",
        "content": "Set up a WebSocket server, handle client connections, and broadcast messages efficiently.",
        "author": "AI Prompt Generator",
        "createdAt": "2024-03-02T15:55:00Z",
        "avgRating": 4.8,
        "preview": "Implement WebSockets for real-time communication in an app."
        },
        "prompt49": {
        "id": "49",
        "title": "Secure User Passwords with Hashing",
        "description": "Implement secure password hashing to protect user data.",
        "tags": ["Security", "Hashing", "Authentication", "Backend"],
        "category": "backend",
        "content": "Use bcrypt, PBKDF2, or Argon2 to securely hash and store user passwords.",
        "author": "AI Prompt Generator",
        "createdAt": "2024-03-02T16:00:00Z",
        "avgRating": 4.9,
        "preview": "Hash passwords securely using bcrypt or Argon2."
        },
        "prompt50": {
        "id": "50",
        "title": "Create a Progressive Web App (PWA)",
        "description": "Convert a web app into a Progressive Web App (PWA) for better performance.",
        "tags": ["PWA", "Frontend", "Offline", "Performance"],
        "category": "frontend",
        "content": "Add a service worker, manifest file, and caching strategies to make your web app a PWA.",
        "author": "AI Prompt Generator",
        "createdAt": "2024-03-02T16:05:00Z",
        "avgRating": 4.8,
        "preview": "Build a Progressive Web App with service workers and caching."
        },
        "prompt51": {
        "id": "51",
        "title": "Implement Multi-Tenant Architecture in a SaaS Application",
        "description": "Design and implement a multi-tenant system for a SaaS platform.",
        "tags": ["SaaS", "Multi-Tenancy", "Backend", "Database"],
        "category": "backend",
        "content": "Set up database sharding or row-level security, handle tenant-based authentication, and implement isolated tenant environments.",
        "author": "AI Prompt Generator",
        "createdAt": "2024-03-02T16:10:00Z",
        "avgRating": 4.9,
        "preview": "Implement a multi-tenant architecture in a SaaS application."
        },
        "prompt52": {
        "id": "52",
        "title": "Develop a GraphQL API with Advanced Authorization",
        "description": "Create a GraphQL API with role-based and field-level authorization.",
        "tags": ["GraphQL", "Security", "API", "Authorization"],
        "category": "backend",
        "content": "Use middleware to enforce role-based access control (RBAC) and limit field access dynamically based on user roles.",
        "author": "AI Prompt Generator",
        "createdAt": "2024-03-02T16:15:00Z",
        "avgRating": 4.9,
        "preview": "Build a GraphQL API with advanced authorization techniques."
        },
        "prompt53": {
        "id": "53",
        "title": "Design a Scalable Event-Driven Microservices Architecture",
        "description": "Implement an event-driven architecture using Kafka or RabbitMQ.",
        "tags": ["Microservices", "Event-Driven", "Architecture", "Messaging"],
        "category": "backend",
        "content": "Use event sourcing and publish-subscribe messaging patterns to decouple microservices while ensuring reliability and scalability.",
        "author": "AI Prompt Generator",
        "createdAt": "2024-03-02T16:20:00Z",
        "avgRating": 4.9,
        "preview": "Design an event-driven microservices architecture with message brokers."
        },
        "prompt54": {
        "id": "54",
        "title": "Implement End-to-End Encryption in a Messaging App",
        "description": "Secure chat messages using end-to-end encryption (E2EE).",
        "tags": ["Security", "Encryption", "Messaging", "Cryptography"],
        "category": "security",
        "content": "Use asymmetric encryption (RSA, ECC) for key exchange and symmetric encryption (AES) for message encryption in a chat system.",
        "author": "AI Prompt Generator",
        "createdAt": "2024-03-02T16:25:00Z",
        "avgRating": 5.0,
        "preview": "Implement E2EE for secure communication in a messaging app."
        },
        "prompt55": {
        "id": "55",
        "title": "Optimize a High-Traffic Web Application for 1M+ Users",
        "description": "Scale a web application to handle millions of users efficiently.",
        "tags": ["Performance", "Scaling", "Web Applications", "Optimization"],
        "category": "backend",
        "content": "Use database replication, caching (Redis, Memcached), load balancing, and CDNs to optimize a web app for high traffic.",
        "author": "AI Prompt Generator",
        "createdAt": "2024-03-02T16:30:00Z",
        "avgRating": 5.0,
        "preview": "Scale a web app to handle millions of concurrent users efficiently."
        },
        "prompt56": {
        "id": "56",
        "title": "Implement a Zero Downtime Deployment Strategy",
        "description": "Deploy updates to a production system with zero downtime.",
        "tags": ["DevOps", "Deployment", "CI/CD", "Scaling"],
        "category": "devops",
        "content": "Use blue-green deployments, rolling updates, or feature flags to deploy software without downtime.",
        "author": "AI Prompt Generator",
        "createdAt": "2024-03-02T16:35:00Z",
        "avgRating": 4.9,
        "preview": "Deploy applications with zero downtime using blue-green deployment."
        },
        "prompt57": {
        "id": "57",
        "title": "Develop a Custom Machine Learning Model for Anomaly Detection",
        "description": "Train a custom ML model to detect anomalies in data streams.",
        "tags": ["Machine Learning", "AI", "Anomaly Detection", "Data Science"],
        "category": "machine-learning",
        "content": "Use unsupervised learning techniques like autoencoders or Isolation Forest to detect outliers in real-time data streams.",
        "author": "AI Prompt Generator",
        "createdAt": "2024-03-02T16:40:00Z",
        "avgRating": 5.0,
        "preview": "Create an ML model for real-time anomaly detection."
        },
        "prompt58": {
        "id": "58",
        "title": "Build a Custom WebAssembly (WASM) Module for Performance",
        "description": "Develop a WebAssembly module to optimize heavy computations in a web app.",
        "tags": ["WASM", "Performance", "Optimization", "Web"],
        "category": "frontend",
        "content": "Write a WebAssembly module in Rust or C++ to offload CPU-intensive tasks in a JavaScript web application.",
        "author": "AI Prompt Generator",
        "createdAt": "2024-03-02T16:45:00Z",
        "avgRating": 5.0,
        "preview": "Enhance web performance by offloading tasks to a WebAssembly module."
        },
        "prompt59": {
        "id": "59",
        "title": "Design a Distributed Logging System for Microservices",
        "description": "Implement a centralized logging system for distributed microservices.",
        "tags": ["Microservices", "Logging", "Monitoring", "DevOps"],
        "category": "devops",
        "content": "Use ELK Stack (Elasticsearch, Logstash, Kibana) or Loki to aggregate logs across microservices for analysis and monitoring.",
        "author": "AI Prompt Generator",
        "createdAt": "2024-03-02T16:50:00Z",
        "avgRating": 4.9,
        "preview": "Centralize and analyze logs from microservices using ELK Stack."
        },
        "prompt60": {
        "id": "60",
        "title": "Develop a Custom Linter Plugin for Code Quality Enforcement",
        "description": "Create a linter plugin to enforce coding standards in a development team.",
        "tags": ["Code Quality", "Linting", "Automation", "Development"],
        "category": "devtools",
        "content": "Develop an ESLint or Prettier plugin to enforce project-specific code style rules.",
        "author": "AI Prompt Generator",
        "createdAt": "2024-03-02T16:55:00Z",
        "avgRating": 5.0,
        "preview": "Create a custom linter plugin to enforce team coding standards."
        },
        "prompt61": {
            "id": "61",
            "title": "Implement a Smart Contract for Decentralized Voting",
            "description": "Develop a smart contract on Ethereum for a secure and tamper-proof voting system.",
            "tags": ["Blockchain", "Smart Contracts", "Ethereum", "Voting"],
            "category": "blockchain",
            "content": "Use Solidity to create a decentralized voting system with transparent and immutable results.",
            "author": "AI Prompt Generator",
            "createdAt": "2024-03-02T17:00:00Z",
            "avgRating": 5.0,
            "preview": "Build a smart contract for secure voting on Ethereum."
        },
        "prompt62": {
            "id": "62",
            "title": "Develop an AI-Powered Code Review Bot",
            "description": "Create an AI-driven tool that reviews code for best practices and security vulnerabilities.",
            "tags": ["AI", "Code Review", "Automation", "Machine Learning"],
            "category": "ai",
            "content": "Use OpenAI's GPT or custom NLP models to analyze pull requests and suggest improvements.",
            "author": "AI Prompt Generator",
            "createdAt": "2024-03-02T17:05:00Z",
            "avgRating": 5.0,
            "preview": "Automate code reviews using AI and machine learning."
        },
        "prompt63": {
            "id": "63",
            "title": "Optimize a Database for Real-Time Analytics at Scale",
            "description": "Design a database architecture for low-latency analytics on large datasets.",
            "tags": ["Big Data", "Optimization", "Database", "Real-Time"],
            "category": "big-data",
            "content": "Use columnar storage, partitioning, indexing, and caching to improve query performance.",
            "author": "AI Prompt Generator",
            "createdAt": "2024-03-02T17:10:00Z",
            "avgRating": 5.0,
            "preview": "Optimize databases for real-time analytics and massive datasets."
        },
        "prompt64": {
            "id": "64",
            "title": "Develop a Low-Latency WebSocket Server for Financial Trading",
            "description": "Create a high-performance WebSocket server for live stock trading updates.",
            "tags": ["Low Latency", "Finance", "WebSockets", "Real-Time"],
            "category": "low-latency",
            "content": "Use Redis Pub/Sub, message queues, and efficient data serialization (Protocol Buffers) to minimize latency.",
            "author": "AI Prompt Generator",
            "createdAt": "2024-03-02T17:15:00Z",
            "avgRating": 5.0,
            "preview": "Build a WebSocket server for real-time stock trading updates."
        },
        "prompt65": {
            "id": "65",
            "title": "Build an Automated AI-Based Cybersecurity Threat Detection System",
            "description": "Use AI to detect anomalies and potential security breaches in real time.",
            "tags": ["Cybersecurity", "AI", "Threat Detection", "Security"],
            "category": "security",
            "content": "Implement deep learning models like LSTMs or autoencoders to detect unusual network activity.",
            "author": "AI Prompt Generator",
            "createdAt": "2024-03-02T17:20:00Z",
            "avgRating": 5.0,
            "preview": "Develop an AI system for detecting cybersecurity threats in real time."
        },
        "prompt66": {
            "id": "66",
            "title": "Implement a Scalable Distributed Cache with Consistent Hashing",
            "description": "Design a distributed cache system that scales efficiently.",
            "tags": ["Distributed Systems", "Caching", "Performance", "Optimization"],
            "category": "backend",
            "content": "Use consistent hashing with Redis or Memcached to distribute cache load across multiple nodes.",
            "author": "AI Prompt Generator",
            "createdAt": "2024-03-02T17:25:00Z",
            "avgRating": 5.0,
            "preview": "Build a distributed cache system using consistent hashing."
        },
        "prompt67": {
            "id": "67",
            "title": "Create an AI-Powered Chatbot with Memory and Context Awareness",
            "description": "Develop a chatbot that maintains conversational context and history.",
            "tags": ["AI", "Chatbot", "NLP", "Machine Learning"],
            "category": "ai",
            "content": "Use transformers like GPT-4 with vector databases for storing conversation history efficiently.",
            "author": "AI Prompt Generator",
            "createdAt": "2024-03-02T17:30:00Z",
            "avgRating": 5.0,
            "preview": "Develop an AI chatbot that remembers context in conversations."
        },
        "prompt68": {
            "id": "68",
            "title": "Design a Secure Federated Authentication System",
            "description": "Implement authentication using OAuth2, OpenID Connect, and JWT.",
            "tags": ["Security", "Authentication", "OAuth2", "SSO"],
            "category": "security",
            "content": "Set up an authentication flow with OAuth2 providers and JWT tokens for federated identity management.",
            "author": "AI Prompt Generator",
            "createdAt": "2024-03-02T17:35:00Z",
            "avgRating": 5.0,
            "preview": "Build a secure federated authentication system with OAuth2."
        },
        "prompt69": {
            "id": "69",
            "title": "Optimize Network Traffic Using QUIC Protocol",
            "description": "Improve web performance by implementing the QUIC protocol.",
            "tags": ["Performance", "Networking", "Optimization", "QUIC"],
            "category": "low-latency",
            "content": "Use QUIC to replace TCP and reduce latency in web applications.",
            "author": "AI Prompt Generator",
            "createdAt": "2024-03-02T17:40:00Z",
            "avgRating": 5.0,
            "preview": "Optimize network traffic using the QUIC protocol."
        },
        "prompt70": {
            "id": "70",
            "title": "Implement Homomorphic Encryption for Secure Data Processing",
            "description": "Use homomorphic encryption to process encrypted data without decryption.",
            "tags": ["Encryption", "Privacy", "Security", "Cryptography"],
            "category": "security",
            "content": "Implement a system using Fully Homomorphic Encryption (FHE) to allow computations on encrypted data.",
            "author": "AI Prompt Generator",
            "createdAt": "2024-03-02T17:45:00Z",
            "avgRating": 5.0,
            "preview": "Securely process encrypted data using homomorphic encryption."
        },
        "prompt71": {
            "id": "71",
            "title": "Implement JWT Authentication in a Spring Boot API",
            "description": "Secure your Spring Boot REST API using JSON Web Tokens (JWT).",
            "tags": ["Java", "Spring Boot", "Security", "JWT"],
            "category": "backend",
            "content": "Use Spring Security with JWT authentication to secure API endpoints, manage user sessions, and implement role-based access control.",
            "author": "AI Prompt Generator",
            "createdAt": "2024-03-02T18:00:00Z",
            "avgRating": 5.0,
            "preview": "Secure your Spring Boot API with JWT authentication."
        },
        "prompt72": {
            "id": "72",
            "title": "Create a Global Loading Spinner Component in React",
            "description": "Develop a global loading indicator that appears during API requests.",
            "tags": ["React", "Frontend", "UX", "Loading Spinner"],
            "category": "frontend",
            "content": "Use React context and hooks to manage a global loading state and show a spinner during asynchronous requests.",
            "author": "AI Prompt Generator",
            "createdAt": "2024-03-02T18:05:00Z",
            "avgRating": 5.0,
            "preview": "Build a global loading spinner component in React."
        },
        "prompt73": {
            "id": "73",
            "title": "Implement Role-Based Access Control (RBAC) in Spring Boot",
            "description": "Restrict API access using user roles and permissions.",
            "tags": ["Java", "Spring Boot", "Security", "RBAC"],
            "category": "backend",
            "content": "Configure Spring Security to enforce role-based access control with database-driven user roles.",
            "author": "AI Prompt Generator",
            "createdAt": "2024-03-02T18:10:00Z",
            "avgRating": 5.0,
            "preview": "Implement role-based access control in Spring Boot."
        },
        "prompt74": {
            "id": "74",
            "title": "Develop a Search Input Component with Debouncing in React",
            "description": "Create a search bar that delays API calls to improve performance.",
            "tags": ["React", "Search", "Performance", "Frontend"],
            "category": "frontend",
            "content": "Use the `useState` and `useEffect` hooks to implement debounced search queries in React.",
            "author": "AI Prompt Generator",
            "createdAt": "2024-03-02T18:15:00Z",
            "avgRating": 5.0,
            "preview": "Build a React search input with debouncing for better performance."
        },
        "prompt75": {
            "id": "75",
            "title": "Optimize Spring Boot API Performance with Caching",
            "description": "Improve API response times by caching data using Spring Cache.",
            "tags": ["Java", "Spring Boot", "Performance", "Caching"],
            "category": "backend",
            "content": "Use Spring Boot's caching abstraction with Redis to store frequently accessed data and improve performance.",
            "author": "AI Prompt Generator",
            "createdAt": "2024-03-02T18:20:00Z",
            "avgRating": 5.0,
            "preview": "Enhance API performance by caching responses with Spring Boot."
        },
        "prompt76": {
            "id": "76",
            "title": "Build an Infinite Scrolling List in React",
            "description": "Implement a dynamic list that loads more items as the user scrolls.",
            "tags": ["React", "Frontend", "UX", "Performance"],
            "category": "frontend",
            "content": "Use the Intersection Observer API and React hooks to dynamically fetch more data as the user scrolls.",
            "author": "AI Prompt Generator",
            "createdAt": "2024-03-02T18:25:00Z",
            "avgRating": 5.0,
            "preview": "Create an infinite scrolling list component in React."
        },
        "prompt77": {
            "id": "77",
            "title": "Implement File Upload with Spring Boot and React",
            "description": "Create an API and frontend component for handling file uploads.",
            "tags": ["Java", "Spring Boot", "React", "File Upload"],
            "category": "fullstack",
            "content": "Use Spring Boot's MultipartFile and React's File API to allow users to upload and preview files.",
            "author": "AI Prompt Generator",
            "createdAt": "2024-03-02T18:30:00Z",
            "avgRating": 5.0,
            "preview": "Develop a file upload feature using Spring Boot and React."
        },
        "prompt78": {
            "id": "78",
            "title": "Set Up Server-Sent Events (SSE) in Spring Boot",
            "description": "Enable real-time updates in your API using Server-Sent Events.",
            "tags": ["Java", "Spring Boot", "Real-Time", "SSE"],
            "category": "backend",
            "content": "Use Spring Boot’s `SseEmitter` to send real-time updates to clients over HTTP connections.",
            "author": "AI Prompt Generator",
            "createdAt": "2024-03-02T18:35:00Z",
            "avgRating": 5.0,
            "preview": "Implement real-time updates in Spring Boot using SSE."
        },
        "prompt79": {
            "id": "79",
            "title": "Create a React Skeleton Loader for Faster Perceived Loading",
            "description": "Improve UX by showing skeleton placeholders while data loads.",
            "tags": ["React", "Frontend", "UX", "Loading"],
            "category": "frontend",
            "content": "Use CSS and React state to display skeleton loaders before actual content is rendered.",
            "author": "AI Prompt Generator",
            "createdAt": "2024-03-02T18:40:00Z",
            "avgRating": 5.0,
            "preview": "Enhance user experience with a React skeleton loader."
        },
        "prompt80": {
            "id": "80",
            "title": "Implement Multi-Tenancy in a Spring Boot Application",
            "description": "Design a Spring Boot app that supports multiple tenants with isolated data.",
            "tags": ["Java", "Spring Boot", "Multi-Tenancy", "Database"],
            "category": "backend",
            "content": "Use Hibernate filters or separate databases to implement multi-tenancy in Spring Boot applications.",
            "author": "AI Prompt Generator",
            "createdAt": "2024-03-02T18:45:00Z",
            "avgRating": 5.0,
            "preview": "Implement multi-tenancy in a Spring Boot backend."
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

  