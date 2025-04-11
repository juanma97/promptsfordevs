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
            "title": "Implementar Sistema de Caché Distribuido con Redis",
            "description": "Diseña e implementa un sistema de caché distribuido utilizando Redis para mejorar el rendimiento de una aplicación de microservicios.",
            "tags": ["Redis", "Caching", "Microservices", "Performance", "Backend"],
            "category": "backend",
            "content": "Actúa como arquitecto de sistemas y ayúdame a implementar un sistema de caché distribuido con Redis:\n\n1. Configura un cluster de Redis con replicación para alta disponibilidad\n2. Implementa estrategias de caché (write-through, write-behind, cache-aside)\n3. Establece políticas de expiración y evicción de datos\n4. Gestiona la serialización/deserialización de objetos\n5. Implementa mecanismos de fallback cuando el caché no está disponible\n6. Configura monitorización y alertas para el rendimiento del caché\n7. Optimiza las consultas y patrones de acceso a datos\n8. Implementa mecanismos de invalidación de caché\n\nConsideraciones específicas:\n- Tamaño máximo de objetos en caché\n- Estrategias de particionamiento\n- Manejo de concurrencia\n- Recuperación ante fallos",
            "author": "PromptsForDevs",
            "createdAt": "2024-03-02T15:35:00Z",
            "avgRating": 0,
            "views": 0,
            "likes": 0
        },
        "prompt2": {
            "id": "2",
            "title": "Implementación de Clean Architecture en React",
            "description": "Guía paso a paso para implementar Clean Architecture en una aplicación React, siguiendo los principios SOLID y mejores prácticas.",
            "tags": ["React", "Clean Architecture", "SOLID", "Frontend", "Architecture"],
            "category": "frontend",
            "content": "Actúa como arquitecto frontend y guíame en la implementación de Clean Architecture en React:\n\n1. Estructura de carpetas y organización del código:\n- /domain (entidades y casos de uso)\n- /data (repositorios e implementaciones)\n- /presentation (componentes y vistas)\n- /infrastructure (servicios externos)\n\n2. Implementación de capas:\n- Definir interfaces para repositorios\n- Crear casos de uso para la lógica de negocio\n- Implementar inyección de dependencias\n- Separar la lógica de UI de la lógica de negocio\n\n3. Gestión de estado:\n- Implementar patrón Observable\n- Manejar efectos secundarios\n- Gestionar caché y persistencia\n\n4. Testing:\n- Unit tests para casos de uso\n- Integration tests para repositorios\n- E2E tests para flujos completos\n\nConsideraciones:\n- Manejo de errores entre capas\n- Estrategias de caché\n- Performance y optimizaciones\n- Patrones de diseño recomendados",
            "author": "PromptsForDevs",
            "createdAt": "2024-03-02T15:40:00Z",
            "avgRating": 0,
            "views": 0,
            "likes": 0
        },
        "prompt3": {
            "id": "3",
            "title": "Diseño de Sistema de Autenticación OAuth2 y OpenID Connect",
            "description": "Implementación completa de un sistema de autenticación y autorización usando OAuth2 y OpenID Connect con múltiples providers.",
            "tags": ["Security", "OAuth2", "OpenID Connect", "Authentication", "Backend"],
            "category": "security",
            "content": "Actúa como experto en seguridad y guíame en la implementación de un sistema de autenticación:\n\n1. Configuración de OAuth2:\n- Implementar flujos de autorización\n- Gestionar tokens JWT\n- Configurar refresh tokens\n- Implementar revocación de tokens\n\n2. Integración de Providers:\n- Google OAuth2\n- GitHub OAuth\n- Microsoft Identity Platform\n- Custom OAuth Server\n\n3. Seguridad:\n- PKCE para aplicaciones SPA\n- Almacenamiento seguro de secretos\n- Rotación de claves\n- Rate limiting\n\n4. Implementación de OpenID Connect:\n- UserInfo Endpoint\n- ID Tokens\n- Claims personalizados\n\nConsideraciones de seguridad:\n- Prevención de CSRF\n- Validación de state\n- Sanitización de redirects\n- Auditoría de accesos",
            "author": "PromptsForDevs",
            "createdAt": "2024-03-02T15:45:00Z",
            "avgRating": 0,
            "views": 0,
            "likes": 0
        },
        "prompt4": {
            "id": "4",
            "title": "Implementación de GraphQL con Federation",
            "description": "Diseño e implementación de una arquitectura GraphQL federada para microservicios con Apollo Federation.",
            "tags": ["GraphQL", "Microservices", "Apollo", "API", "Backend"],
            "category": "backend",
            "content": "Actúa como arquitecto de APIs y guíame en la implementación de GraphQL Federation:\n\n1. Diseño del Schema:\n- Definir tipos federados\n- Implementar resolvers\n- Configurar directivas @key\n- Establecer referencias entre servicios\n\n2. Configuración de Servicios:\n- Gateway configuration\n- Subgraph implementation\n- Schema stitching\n- Query planning\n\n3. Performance:\n- Implementar DataLoader\n- Batch queries\n- Caching strategies\n- Query complexity analysis\n\n4. Monitorización:\n- Tracing\n- Error tracking\n- Performance metrics\n- Schema changes monitoring\n\nConsideraciones:\n- Schema design best practices\n- Error handling strategies\n- Security considerations\n- Deployment strategies",
            "author": "PromptsForDevs",
            "createdAt": "2024-03-02T15:50:00Z",
            "avgRating": 0,
            "views": 0,
            "likes": 0
        },
        "prompt5": {
            "id": "5",
            "title": "Implementación de Event Sourcing con CQRS",
            "description": "Diseño e implementación de un sistema basado en Event Sourcing y CQRS utilizando tecnologías modernas.",
            "tags": ["Event Sourcing", "CQRS", "Architecture", "DDD", "Backend"],
            "category": "backend",
            "content": "Actúa como arquitecto de software y guíame en la implementación de Event Sourcing y CQRS:\n\n1. Event Store:\n- Diseño de eventos\n- Implementación de agregados\n- Manejo de snapshots\n- Versionado de eventos\n\n2. Command Handling:\n- Validación de comandos\n- Procesamiento de eventos\n- Manejo de concurrencia\n- Transacciones distribuidas\n\n3. Query Side:\n- Proyecciones\n- Materialización de vistas\n- Sincronización de datos\n- Optimización de consultas\n\n4. Infraestructura:\n- Message bus configuration\n- Event store setup\n- Read database optimization\n- Monitoring and logging\n\nConsideraciones:\n- Consistency boundaries\n- Event schema evolution\n- Performance optimization\n- Error handling and recovery",
            "author": "PromptsForDevs",
            "createdAt": "2024-03-02T15:55:00Z",
            "avgRating": 0,
            "views": 0,
            "likes": 0
        },
        "prompt6": {
            "id": "6",
            "title": "Implementación de CI/CD para Microservicios con GitOps",
            "description": "Configuración completa de un pipeline CI/CD utilizando GitOps para una arquitectura de microservicios.",
            "tags": ["DevOps", "GitOps", "CI/CD", "Kubernetes", "Infrastructure"],
            "category": "devops",
            "content": "Actúa como DevOps Engineer y guíame en la implementación de CI/CD con GitOps:\n\n1. Configuración de GitOps:\n- ArgoCD setup\n- Flux configuration\n- Repository structure\n- Environment management\n\n2. Pipeline CI:\n- Build automation\n- Test execution\n- Security scanning\n- Artifact generation\n\n3. Pipeline CD:\n- Deployment strategies\n- Rollback procedures\n- Secret management\n- Configuration management\n\n4. Monitorización:\n- Metrics collection\n- Log aggregation\n- Alert configuration\n- Dashboard setup\n\nConsideraciones:\n- Security best practices\n- Scalability requirements\n- Disaster recovery\n- Compliance requirements",
            "author": "PromptsForDevs",
            "createdAt": "2024-03-02T16:00:00Z",
            "avgRating": 0,
            "views": 0,
            "likes": 0
        },
        "prompt7": {
            "id": "7",
            "title": "Diseño de Sistema de Machine Learning en Producción",
            "description": "Implementación de un sistema MLOps completo para el despliegue y monitorización de modelos de machine learning.",
            "tags": ["MLOps", "Machine Learning", "DevOps", "AI", "Backend"],
            "category": "mlops",
            "content": "Actúa como MLOps Engineer y guíame en la implementación de un sistema MLOps:\n\n1. Pipeline de Entrenamiento:\n- Data versioning\n- Feature store setup\n- Model training automation\n- Experiment tracking\n\n2. Modelo en Producción:\n- Model serving\n- A/B testing\n- Model monitoring\n- Feature pipeline\n\n3. Infraestructura:\n- Kubernetes setup\n- GPU management\n- Scaling configuration\n- Resource optimization\n\n4. Monitorización:\n- Model performance metrics\n- Data drift detection\n- Resource utilization\n- Alert configuration\n\nConsideraciones:\n- Model versioning\n- Data privacy\n- Performance optimization\n- Compliance requirements",
            "author": "PromptsForDevs",
            "createdAt": "2024-03-02T16:05:00Z",
            "avgRating": 0,
            "views": 0,
            "likes": 0
        },
        "prompt8": {
            "id": "8",
            "title": "Implementación de Arquitectura Serverless Event-Driven",
            "description": "Diseño e implementación de una arquitectura serverless basada en eventos utilizando AWS Lambda y Event Bridge.",
            "tags": ["Serverless", "AWS", "Event-Driven", "Cloud", "Backend"],
            "category": "cloud",
            "content": "Actúa como arquitecto cloud y guíame en la implementación de una arquitectura serverless:\n\n1. Configuración de Eventos:\n- Event patterns\n- Routing rules\n- Dead letter queues\n- Event filtering\n\n2. Funciones Lambda:\n- Function design\n- Cold start optimization\n- Memory configuration\n- Error handling\n\n3. Integración de Servicios:\n- API Gateway setup\n- DynamoDB integration\n- S3 event triggers\n- SQS/SNS configuration\n\n4. Monitorización:\n- CloudWatch metrics\n- X-Ray tracing\n- Log analysis\n- Cost optimization\n\nConsideraciones:\n- Security best practices\n- Performance optimization\n- Cost management\n- Scaling strategies",
            "author": "PromptsForDevs",
            "createdAt": "2024-03-02T16:10:00Z",
            "avgRating": 0,
            "views": 0,
            "likes": 0
        },
        "prompt9": {
            "id": "9",
            "title": "Implementación de Sistema de Monitorización con Observabilidad",
            "description": "Diseño e implementación de un sistema completo de monitorización y observabilidad utilizando la stack ELK y Prometheus.",
            "tags": ["Monitoring", "Observability", "DevOps", "ELK", "Infrastructure"],
            "category": "devops",
            "content": "Actúa como SRE y guíame en la implementación de un sistema de monitorización:\n\n1. Métricas:\n- Prometheus setup\n- Custom metrics\n- Alert rules\n- Grafana dashboards\n\n2. Logs:\n- ELK stack configuration\n- Log shipping\n- Log parsing\n- Log retention\n\n3. Trazabilidad:\n- Jaeger implementation\n- Trace sampling\n- Span correlation\n- Service mapping\n\n4. Alerting:\n- Alert manager setup\n- Notification channels\n- Escalation policies\n- On-call rotation\n\nConsideraciones:\n- Data retention\n- Performance impact\n- Storage optimization\n- Alert fatigue prevention",
            "author": "PromptsForDevs",
            "createdAt": "2024-03-02T16:15:00Z",
            "avgRating": 0,
            "views": 0,
            "likes": 0
        },
        "prompt10": {
            "id": "10",
            "title": "Implementación de Sistema de Testing E2E Automatizado",
            "description": "Diseño e implementación de un sistema completo de testing E2E utilizando Cypress y GitHub Actions.",
            "tags": ["Testing", "E2E", "Automation", "QA", "DevOps"],
            "category": "testing",
            "content": "Actúa como QA Engineer y guíame en la implementación de testing E2E:\n\n1. Framework Setup:\n- Cypress configuration\n- Custom commands\n- Fixtures management\n- Page objects\n\n2. Test Automation:\n- Test case design\n- Data management\n- Visual testing\n- API mocking\n\n3. CI Integration:\n- GitHub Actions setup\n- Parallel execution\n- Report generation\n- Artifact storage\n\n4. Monitorización:\n- Test analytics\n- Performance metrics\n- Flaky test detection\n- Coverage reporting\n\nConsideraciones:\n- Test reliability\n- Execution speed\n- Maintenance strategy\n- Resource optimization",
            "author": "PromptsForDevs",
            "createdAt": "2024-03-02T16:20:00Z",
            "avgRating": 0,
            "views": 0,
            "likes": 0
        },
        "prompt11": {
            "id": "11",
            "title": "Implementación de Tests Unitarios en Java con JUnit y Mockito",
            "description": "Guía completa para implementar tests unitarios en Java utilizando JUnit 5 y Mockito, incluyendo buenas prácticas y patrones.",
            "tags": ["Java", "Testing", "JUnit", "Mockito", "Unit Testing"],
            "category": "testing",
            "content": "Actúa como desarrollador senior de Java y guíame en la implementación de tests unitarios:\n\n1. Estructura de Tests:\n- Patrón AAA (Arrange, Act, Assert)\n- Given/When/Then\n- Naming conventions\n- Test lifecycle (@BeforeEach, @AfterEach)\n\n2. Mocking con Mockito:\n- Mock vs Spy\n- Argument matchers\n- Verify interactions\n- Capture arguments\n\n3. Casos de Prueba:\n```java\n@Service\npublic class UserService {\n    private final UserRepository userRepository;\n    private final EmailService emailService;\n\n    public UserService(UserRepository userRepository, EmailService emailService) {\n        this.userRepository = userRepository;\n        this.emailService = emailService;\n    }\n\n    public User createUser(UserDTO userDTO) {\n        if (userRepository.existsByEmail(userDTO.getEmail())) {\n            throw new UserAlreadyExistsException();\n        }\n        User user = new User(userDTO);\n        User savedUser = userRepository.save(user);\n        emailService.sendWelcomeEmail(savedUser);\n        return savedUser;\n    }\n}\n```\n\n4. Implementación de Tests:\n```java\n@ExtendWith(MockitoExtension.class)\nclass UserServiceTest {\n    @Mock\n    private UserRepository userRepository;\n    @Mock\n    private EmailService emailService;\n    @InjectMocks\n    private UserService userService;\n\n    @Test\n    void shouldCreateUserSuccessfully() {\n        // Arrange\n        UserDTO userDTO = new UserDTO(\"test@test.com\");\n        User user = new User(userDTO);\n        when(userRepository.existsByEmail(userDTO.getEmail())).thenReturn(false);\n        when(userRepository.save(any(User.class))).thenReturn(user);\n\n        // Act\n        User result = userService.createUser(userDTO);\n\n        // Assert\n        assertNotNull(result);\n        verify(emailService).sendWelcomeEmail(user);\n        verify(userRepository).save(any(User.class));\n    }\n\n    @Test\n    void shouldThrowExceptionWhenUserExists() {\n        // Arrange\n        UserDTO userDTO = new UserDTO(\"test@test.com\");\n        when(userRepository.existsByEmail(userDTO.getEmail())).thenReturn(true);\n\n        // Act & Assert\n        assertThrows(UserAlreadyExistsException.class, () -> {\n            userService.createUser(userDTO);\n        });\n        verify(userRepository, never()).save(any());\n        verify(emailService, never()).sendWelcomeEmail(any());\n    }\n}\n```\n\nConsideraciones:\n- Test isolation\n- Test data management\n- Exception testing\n- Coverage goals",
            "author": "PromptsForDevs",
            "createdAt": "2024-03-02T16:25:00Z",
            "avgRating": 0,
            "views": 0,
            "likes": 0
        },
        "prompt12": {
            "id": "12",
            "title": "Implementación de Spring Security con JWT y Roles",
            "description": "Configuración completa de Spring Security utilizando JWT para autenticación y un sistema de roles para autorización.",
            "tags": ["Java", "Spring", "Security", "JWT", "Backend"],
            "category": "security",
            "content": "Actúa como experto en Spring Security y guíame en la implementación de seguridad:\n\n1. Configuración Base:\n```java\n@Configuration\n@EnableWebSecurity\npublic class SecurityConfig {\n    @Bean\n    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {\n        return http\n            .csrf(csrf -> csrf.disable())\n            .sessionManagement(session -> session.sessionCreationPolicy(SessionCreationPolicy.STATELESS))\n            .authorizeHttpRequests(auth -> auth\n                .requestMatchers(\"/api/auth/**\").permitAll()\n                .requestMatchers(\"/api/admin/**\").hasRole(\"ADMIN\")\n                .requestMatchers(\"/api/user/**\").hasAnyRole(\"USER\", \"ADMIN\")\n                .anyRequest().authenticated()\n            )\n            .addFilterBefore(jwtAuthenticationFilter(), UsernamePasswordAuthenticationFilter.class)\n            .build();\n    }\n}\n```\n\n2. JWT Implementation:\n- Token generation\n- Token validation\n- Claims management\n- Refresh token logic\n\n3. Custom Authentication:\n```java\n@Service\npublic class JwtService {\n    private final String secretKey;\n    private final long tokenValidityMs;\n\n    public String generateToken(UserDetails userDetails) {\n        Map<String, Object> claims = new HashMap<>();\n        claims.put(\"roles\", userDetails.getAuthorities().stream()\n            .map(GrantedAuthority::getAuthority)\n            .collect(Collectors.toList()));\n        \n        return Jwts.builder()\n            .setClaims(claims)\n            .setSubject(userDetails.getUsername())\n            .setIssuedAt(new Date())\n            .setExpiration(new Date(System.currentTimeMillis() + tokenValidityMs))\n            .signWith(getSigningKey())\n            .compact();\n    }\n}\n```\n\n4. Authorization:\n- Role-based access\n- Method security\n- Custom annotations\n- Permission evaluators\n\nConsideraciones:\n- Token storage\n- CORS configuration\n- Password encoding\n- Security headers",
            "author": "PromptsForDevs",
            "createdAt": "2024-03-02T16:30:00Z",
            "avgRating": 0,
            "views": 0,
            "likes": 0
        },
        "prompt13": {
            "id": "13",
            "title": "Implementación de DDD en Spring Boot",
            "description": "Diseño e implementación de una aplicación Spring Boot siguiendo los principios de Domain-Driven Design.",
            "tags": ["Java", "Spring Boot", "DDD", "Architecture", "Backend"],
            "category": "architecture",
            "content": "Actúa como arquitecto de software y guíame en la implementación de DDD con Spring Boot:\n\n1. Estructura del Proyecto:\n```\nsrc/main/java/com/company/domain\n├── model\n│   ├── aggregates\n│   ├── entities\n│   └── valueobjects\n├── repository\n├── service\n└── events\n```\n\n2. Implementación de Agregados:\n```java\n@Aggregate\npublic class Order {\n    @AggregateIdentifier\n    private OrderId id;\n    private CustomerId customerId;\n    private Money totalAmount;\n    private Set<OrderLine> orderLines;\n    private OrderStatus status;\n\n    public void addProduct(Product product, int quantity) {\n        validateProductAvailability(product, quantity);\n        OrderLine line = new OrderLine(product.getId(), quantity, product.getPrice());\n        orderLines.add(line);\n        recalculateTotal();\n        registerEvent(new ProductAddedToOrderEvent(this.id, product.getId(), quantity));\n    }\n\n    private void validateProductAvailability(Product product, int quantity) {\n        if (!product.hasStock(quantity)) {\n            throw new InsufficientStockException(product.getId(), quantity);\n        }\n    }\n}\n```\n\n3. Value Objects:\n```java\n@Value\npublic class Money {\n    BigDecimal amount;\n    Currency currency;\n\n    public Money add(Money other) {\n        if (!this.currency.equals(other.currency)) {\n            throw new CurrencyMismatchException();\n        }\n        return new Money(this.amount.add(other.amount), this.currency);\n    }\n}\n```\n\n4. Repositorios:\n```java\n@Repository\npublic interface OrderRepository extends JpaRepository<Order, OrderId> {\n    @Query(\"SELECT o FROM Order o WHERE o.customerId = :customerId\")\n    List<Order> findByCustomerId(@Param(\"customerId\") CustomerId customerId);\n}\n```\n\nConsideraciones:\n- Bounded contexts\n- Aggregate design\n- Event sourcing\n- CQRS implementation",
            "author": "PromptsForDevs",
            "createdAt": "2024-03-02T16:35:00Z",
            "avgRating": 0,
            "views": 0,
            "likes": 0
        },
        "prompt14": {
            "id": "14",
            "title": "Implementación de CRUD REST API con Spring Boot",
            "description": "Desarrollo completo de una API REST CRUD utilizando Spring Boot, incluyendo validación, manejo de errores y documentación.",
            "tags": ["Java", "Spring Boot", "REST", "API", "Backend"],
            "category": "backend",
            "content": "Actúa como desarrollador Spring Boot y guíame en la implementación de un CRUD REST API:\n\n1. Entidad y DTO:\n```java\n@Entity\n@Table(name = \"products\")\npublic class Product {\n    @Id\n    @GeneratedValue(strategy = GenerationType.IDENTITY)\n    private Long id;\n    \n    @Column(nullable = false)\n    private String name;\n    \n    @Column(nullable = false)\n    private BigDecimal price;\n    \n    @Column(length = 1000)\n    private String description;\n    \n    @Version\n    private Long version;\n}\n\n@Data\n@Builder\npublic class ProductDTO {\n    @NotBlank(message = \"Name is required\")\n    private String name;\n    \n    @NotNull(message = \"Price is required\")\n    @Positive(message = \"Price must be positive\")\n    private BigDecimal price;\n    \n    @Size(max = 1000, message = \"Description must be less than 1000 characters\")\n    private String description;\n}\n```\n\n2. Controller:\n```java\n@RestController\n@RequestMapping(\"/api/products\")\n@Tag(name = \"Product API\", description = \"Product management endpoints\")\npublic class ProductController {\n    private final ProductService productService;\n\n    @GetMapping\n    public Page<ProductDTO> getAllProducts(\n        @RequestParam(defaultValue = \"0\") int page,\n        @RequestParam(defaultValue = \"10\") int size,\n        @RequestParam(defaultValue = \"id\") String sortBy\n    ) {\n        return productService.getAllProducts(PageRequest.of(page, size, Sort.by(sortBy)));\n    }\n\n    @PostMapping\n    @ResponseStatus(HttpStatus.CREATED)\n    public ProductDTO createProduct(@Valid @RequestBody ProductDTO productDTO) {\n        return productService.createProduct(productDTO);\n    }\n\n    @PutMapping(\"/{id}\")\n    public ProductDTO updateProduct(\n        @PathVariable Long id,\n        @Valid @RequestBody ProductDTO productDTO\n    ) {\n        return productService.updateProduct(id, productDTO);\n    }\n\n    @DeleteMapping(\"/{id}\")\n    @ResponseStatus(HttpStatus.NO_CONTENT)\n    public void deleteProduct(@PathVariable Long id) {\n        productService.deleteProduct(id);\n    }\n}\n```\n\n3. Service:\n```java\n@Service\n@Transactional\npublic class ProductService {\n    private final ProductRepository productRepository;\n    private final ProductMapper productMapper;\n\n    public ProductDTO createProduct(ProductDTO productDTO) {\n        Product product = productMapper.toEntity(productDTO);\n        Product savedProduct = productRepository.save(product);\n        return productMapper.toDTO(savedProduct);\n    }\n\n    public ProductDTO updateProduct(Long id, ProductDTO productDTO) {\n        Product product = productRepository.findById(id)\n            .orElseThrow(() -> new ResourceNotFoundException(\"Product not found\"));\n            \n        productMapper.updateEntityFromDTO(productDTO, product);\n        Product updatedProduct = productRepository.save(product);\n        return productMapper.toDTO(updatedProduct);\n    }\n}\n```\n\n4. Exception Handling:\n```java\n@RestControllerAdvice\npublic class GlobalExceptionHandler {\n    @ExceptionHandler(ResourceNotFoundException.class)\n    @ResponseStatus(HttpStatus.NOT_FOUND)\n    public ErrorResponse handleResourceNotFoundException(ResourceNotFoundException ex) {\n        return new ErrorResponse(HttpStatus.NOT_FOUND.value(), ex.getMessage());\n    }\n\n    @ExceptionHandler(MethodArgumentNotValidException.class)\n    @ResponseStatus(HttpStatus.BAD_REQUEST)\n    public ErrorResponse handleValidationExceptions(MethodArgumentNotValidException ex) {\n        Map<String, String> errors = new HashMap<>();\n        ex.getBindingResult().getAllErrors().forEach(error -> {\n            String fieldName = ((FieldError) error).getField();\n            String errorMessage = error.getDefaultMessage();\n            errors.put(fieldName, errorMessage);\n        });\n        return new ErrorResponse(HttpStatus.BAD_REQUEST.value(), \"Validation failed\", errors);\n    }\n}\n```\n\nConsideraciones:\n- Input validation\n- Error handling\n- API documentation\n- Pagination and sorting",
            "author": "PromptsForDevs",
            "createdAt": "2024-03-02T16:40:00Z",
            "avgRating": 0,
            "views": 0,
            "likes": 0
        },
        "prompt15": {
            "id": "15",
            "title": "Optimización de Rendimiento en Spring Boot",
            "description": "Guía completa para optimizar el rendimiento de una aplicación Spring Boot, incluyendo caché, pool de conexiones y configuración JVM.",
            "tags": ["Java", "Spring Boot", "Performance", "Optimization", "Backend"],
            "category": "performance",
            "content": "Actúa como experto en rendimiento y guíame en la optimización de Spring Boot:\n\n1. Configuración de Caché:\n```java\n@EnableCaching\n@Configuration\npublic class CacheConfig {\n    @Bean\n    public CacheManager cacheManager() {\n        SimpleCacheManager cacheManager = new SimpleCacheManager();\n        cacheManager.setCaches(Arrays.asList(\n            new ConcurrentMapCache(\"products\"),\n            new ConcurrentMapCache(\"categories\")\n        ));\n        return cacheManager;\n    }\n}\n\n@Service\npublic class ProductService {\n    @Cacheable(value = \"products\", key = \"#id\")\n    public ProductDTO getProduct(Long id) {\n        return productRepository.findById(id)\n            .map(productMapper::toDTO)\n            .orElseThrow(() -> new ResourceNotFoundException(\"Product not found\"));\n    }\n\n    @CacheEvict(value = \"products\", key = \"#id\")\n    public void deleteProduct(Long id) {\n        productRepository.deleteById(id);\n    }\n}\n```\n\n2. Connection Pool:\n```yaml\nspring:\n  datasource:\n    hikari:\n      maximum-pool-size: 10\n      minimum-idle: 5\n      idle-timeout: 300000\n      connection-timeout: 20000\n      max-lifetime: 1200000\n```\n\n3. JVM Tuning:\n```bash\njava -Xms2g -Xmx2g -XX:+UseG1GC -XX:MaxGCPauseMillis=200 -jar app.jar\n```\n\n4. Monitoring:\n```java\n@Configuration\npublic class MetricsConfig {\n    @Bean\n    public MeterRegistry meterRegistry() {\n        return new SimpleMeterRegistry();\n    }\n\n    @Bean\n    public TimedAspect timedAspect(MeterRegistry registry) {\n        return new TimedAspect(registry);\n    }\n}\n\n@Service\npublic class ProductService {\n    private final MeterRegistry meterRegistry;\n\n    @Timed(\"product.search\")\n    public Page<ProductDTO> searchProducts(String query, Pageable pageable) {\n        Timer.Sample sample = Timer.start(meterRegistry);\n        try {\n            return productRepository.search(query, pageable)\n                .map(productMapper::toDTO);\n        } finally {\n            sample.stop(meterRegistry.timer(\"product.search.time\"));\n        }\n    }\n}\n```\n\nConsideraciones:\n- Memory management\n- Thread pool sizing\n- Database optimization\n- Monitoring setup",
            "author": "PromptsForDevs",
            "createdAt": "2024-03-02T16:45:00Z",
            "avgRating": 0,
            "views": 0,
            "likes": 0
        },
        "prompt16": {
            "id": "16",
            "title": "Implementación de Tests de Integración en Spring Boot",
            "description": "Guía completa para implementar tests de integración en Spring Boot utilizando TestContainers y MockMvc.",
            "tags": ["Java", "Spring Boot", "Testing", "Integration Tests", "TestContainers"],
            "category": "testing",
            "content": "Actúa como experto en testing y guíame en la implementación de tests de integración:\n\n1. Configuración Base:\n```java\n@SpringBootTest\n@AutoConfigureMockMvc\n@Testcontainers\nclass ProductControllerIntegrationTest {\n    @Container\n    static PostgreSQLContainer<?> postgres = new PostgreSQLContainer<>(\"postgres:14-alpine\");\n\n    @Autowired\n    private MockMvc mockMvc;\n\n    @Autowired\n    private ObjectMapper objectMapper;\n\n    @DynamicPropertySource\n    static void configureProperties(DynamicPropertyRegistry registry) {\n        registry.add(\"spring.datasource.url\", postgres::getJdbcUrl);\n        registry.add(\"spring.datasource.username\", postgres::getUsername);\n        registry.add(\"spring.datasource.password\", postgres::getPassword);\n    }\n\n    @Test\n    void shouldCreateProduct() throws Exception {\n        ProductDTO productDTO = new ProductDTO(\"Test Product\", BigDecimal.TEN);\n        \n        mockMvc.perform(post(\"/api/products\")\n            .contentType(MediaType.APPLICATION_JSON)\n            .content(objectMapper.writeValueAsString(productDTO)))\n            .andExpect(status().isCreated())\n            .andExpect(jsonPath(\"$.name\").value(productDTO.getName()))\n            .andExpect(jsonPath(\"$.price\").value(productDTO.getPrice()));\n    }\n}\n```\n\n2. Test Data Management:\n```java\n@TestConfiguration\nclass TestConfig {\n    @Bean\n    public DataLoader dataLoader(ProductRepository repository) {\n        return new DataLoader(repository);\n    }\n}\n\nclass DataLoader {\n    private final ProductRepository repository;\n\n    public Product createTestProduct() {\n        Product product = Product.builder()\n            .name(\"Test Product\")\n            .price(BigDecimal.TEN)\n            .build();\n        return repository.save(product);\n    }\n}\n```\n\n3. API Tests:\n```java\n@Test\nvoid shouldGetProductById() throws Exception {\n    Product product = dataLoader.createTestProduct();\n\n    mockMvc.perform(get(\"/api/products/{id}\", product.getId()))\n        .andExpect(status().isOk())\n        .andExpect(jsonPath(\"$.id\").value(product.getId()))\n        .andExpect(jsonPath(\"$.name\").value(product.getName()))\n        .andDo(document(\"get-product\",\n            pathParameters(\n                parameterWithName(\"id\").description(\"Product ID\")\n            ),\n            responseFields(\n                fieldWithPath(\"id\").description(\"Product ID\"),\n                fieldWithPath(\"name\").description(\"Product name\")\n            )\n        ));\n}\n```\n\n4. Security Tests:\n```java\n@Test\n@WithMockUser(roles = \"ADMIN\")\nvoid shouldDeleteProductWhenAdmin() throws Exception {\n    Product product = dataLoader.createTestProduct();\n\n    mockMvc.perform(delete(\"/api/products/{id}\", product.getId()))\n        .andExpect(status().isNoContent());\n\n    assertFalse(productRepository.existsById(product.getId()));\n}\n```\n\nConsideraciones:\n- Database cleanup\n- Transaction management\n- Security context\n- Documentation generation",
            "author": "PromptsForDevs",
            "createdAt": "2024-03-02T16:50:00Z",
            "avgRating": 0,
            "views": 0,
            "likes": 0
        },
        "prompt17": {
            "id": "17",
            "title": "Implementación de Validación Avanzada en Spring Boot",
            "description": "Guía completa para implementar validación personalizada y manejo de errores en Spring Boot.",
            "tags": ["Java", "Spring Boot", "Validation", "Error Handling", "Backend"],
            "category": "backend",
            "content": "Actúa como experto en Spring Boot y guíame en la implementación de validación avanzada:\n\n1. Validadores Personalizados:\n```java\n@Constraint(validatedBy = UniqueEmailValidator.class)\n@Target({ElementType.FIELD})\n@Retention(RetentionPolicy.RUNTIME)\npublic @interface UniqueEmail {\n    String message() default \"Email already exists\";\n    Class<?>[] groups() default {};\n    Class<? extends Payload>[] payload() default {};\n}\n\npublic class UniqueEmailValidator implements ConstraintValidator<UniqueEmail, String> {\n    private final UserRepository userRepository;\n\n    @Override\n    public boolean isValid(String email, ConstraintValidatorContext context) {\n        return email != null && !userRepository.existsByEmail(email);\n    }\n}\n```\n\n2. Validación de Grupos:\n```java\npublic interface OnCreate {}\npublic interface OnUpdate {}\n\n@Data\npublic class UserDTO {\n    @Null(groups = OnCreate.class)\n    @NotNull(groups = OnUpdate.class)\n    private Long id;\n\n    @NotBlank\n    @Email\n    @UniqueEmail(groups = OnCreate.class)\n    private String email;\n\n    @NotBlank\n    @Size(min = 8, max = 100)\n    private String password;\n\n    @AssertTrue(message = \"Terms must be accepted\")\n    private boolean termsAccepted;\n}\n```\n\n3. Manejo de Errores:\n```java\n@RestControllerAdvice\npublic class ValidationExceptionHandler extends ResponseEntityExceptionHandler {\n    \n    @Override\n    protected ResponseEntity<Object> handleMethodArgumentNotValid(\n        MethodArgumentNotValidException ex,\n        HttpHeaders headers,\n        HttpStatusCode status,\n        WebRequest request\n    ) {\n        Map<String, List<String>> errors = new HashMap<>();\n        ex.getBindingResult().getAllErrors().forEach(error -> {\n            String fieldName = error instanceof FieldError ?\n                ((FieldError) error).getField() : error.getObjectName();\n            String message = error.getDefaultMessage();\n            errors.computeIfAbsent(fieldName, k -> new ArrayList<>()).add(message);\n        });\n\n        return ResponseEntity\n            .badRequest()\n            .body(new ValidationErrorResponse(errors));\n    }\n}\n```\n\n4. Validación Programática:\n```java\n@Service\n@Validated\npublic class UserService {\n    private final Validator validator;\n\n    public void validateUser(UserDTO user) {\n        Set<ConstraintViolation<UserDTO>> violations = validator.validate(user);\n        if (!violations.isEmpty()) {\n            throw new ConstraintViolationException(violations);\n        }\n    }\n\n    @Validated(OnCreate.class)\n    public UserDTO createUser(@Valid UserDTO userDTO) {\n        validateBusinessRules(userDTO);\n        return userRepository.save(mapper.toEntity(userDTO));\n    }\n\n    private void validateBusinessRules(UserDTO user) {\n        if (user.isAdmin() && !currentUser.hasRole(\"SUPER_ADMIN\")) {\n            throw new BusinessValidationException(\"Only super admins can create admin users\");\n        }\n    }\n}\n```\n\nConsideraciones:\n- Cross-field validation\n- Custom validation messages\n- Localization support\n- Performance impact",
            "author": "PromptsForDevs",
            "createdAt": "2024-03-02T16:55:00Z",
            "avgRating": 0,
            "views": 0,
            "likes": 0
        },
        "prompt18": {
            "id": "18",
            "title": "Implementación de Eventos en Spring Boot",
            "description": "Guía completa para implementar eventos síncronos y asíncronos en Spring Boot.",
            "tags": ["Java", "Spring Boot", "Events", "Async", "Backend"],
            "category": "backend",
            "content": "Actúa como experto en Spring Boot y guíame en la implementación de eventos:\n\n1. Configuración de Eventos:\n```java\n@Configuration\n@EnableAsync\npublic class AsyncConfig implements AsyncConfigurer {\n    @Override\n    public Executor getAsyncExecutor() {\n        ThreadPoolTaskExecutor executor = new ThreadPoolTaskExecutor();\n        executor.setCorePoolSize(5);\n        executor.setMaxPoolSize(10);\n        executor.setQueueCapacity(25);\n        executor.setThreadNamePrefix(\"AsyncThread-\");\n        executor.initialize();\n        return executor;\n    }\n\n    @Override\n    public AsyncUncaughtExceptionHandler getAsyncUncaughtExceptionHandler() {\n        return new SimpleAsyncUncaughtExceptionHandler();\n    }\n}\n```\n\n2. Eventos y Listeners:\n```java\n@Getter\npublic class UserRegisteredEvent extends ApplicationEvent {\n    private final User user;\n    private final String activationToken;\n\n    public UserRegisteredEvent(Object source, User user, String activationToken) {\n        super(source);\n        this.user = user;\n        this.activationToken = activationToken;\n    }\n}\n\n@Component\npublic class UserRegistrationListener {\n    private final EmailService emailService;\n    private final NotificationService notificationService;\n\n    @EventListener\n    @Async\n    public void handleUserRegistration(UserRegisteredEvent event) {\n        CompletableFuture.allOf(\n            sendWelcomeEmail(event),\n            sendAdminNotification(event)\n        ).join();\n    }\n\n    private CompletableFuture<Void> sendWelcomeEmail(UserRegisteredEvent event) {\n        return CompletableFuture.runAsync(() -> {\n            emailService.sendWelcomeEmail(\n                event.getUser().getEmail(),\n                event.getActivationToken()\n            );\n        });\n    }\n\n    private CompletableFuture<Void> sendAdminNotification(UserRegisteredEvent event) {\n        return CompletableFuture.runAsync(() -> {\n            notificationService.notifyAdmins(\n                \"New user registered: \" + event.getUser().getEmail()\n            );\n        });\n    }\n}\n```\n\n3. Transactional Events:\n```java\n@Service\n@Transactional\npublic class UserService {\n    private final ApplicationEventPublisher eventPublisher;\n\n    public User registerUser(UserDTO userDTO) {\n        User user = userRepository.save(mapper.toEntity(userDTO));\n        String token = tokenService.generateActivationToken(user);\n        \n        eventPublisher.publishEvent(\n            new UserRegisteredEvent(this, user, token)\n        );\n        \n        return user;\n    }\n}\n```\n\n4. Error Handling:\n```java\n@Component\npublic class EventErrorHandler {\n    private final ErrorTrackingService errorTracker;\n\n    @EventListener\n    public void handleAsyncError(AsyncEventHandlingExceptionEvent event) {\n        Throwable ex = event.getThrowable();\n        errorTracker.trackError(\"Async Event Error\", ex);\n        // Implement retry logic or fallback mechanism\n    }\n}\n```\n\nConsideraciones:\n- Event ordering\n- Transaction boundaries\n- Error handling strategies\n- Monitoring and tracking",
            "author": "PromptsForDevs",
            "createdAt": "2024-03-02T17:00:00Z",
            "avgRating": 0,
            "views": 0,
            "likes": 0
        },
        "prompt19": {
            "id": "19",
            "title": "Implementación de Caché en Spring Boot",
            "description": "Guía completa para implementar diferentes estrategias de caché en Spring Boot.",
            "tags": ["Java", "Spring Boot", "Cache", "Performance", "Backend"],
            "category": "performance",
            "content": "Actúa como experto en Spring Boot y guíame en la implementación de caché:\n\n1. Configuración de Caché:\n```java\n@EnableCaching\n@Configuration\npublic class CacheConfig {\n    @Bean\n    public CacheManager cacheManager() {\n        RedisCacheManager.RedisCacheManagerBuilder builder = RedisCacheManager\n            .builder(redisConnectionFactory())\n            .cacheDefaults(defaultConfig());\n            \n        return builder\n            .withInitialCacheConfigurations(customConfigs())\n            .build();\n    }\n\n    private RedisCacheConfiguration defaultConfig() {\n        return RedisCacheConfiguration.defaultCacheConfig()\n            .entryTtl(Duration.ofMinutes(10))\n            .serializeKeysWith(\n                RedisSerializationContext.SerializationPair.fromSerializer(new StringRedisSerializer())\n            )\n            .serializeValuesWith(\n                RedisSerializationContext.SerializationPair.fromSerializer(new GenericJackson2JsonRedisSerializer())\n            );\n    }\n\n    private Map<String, RedisCacheConfiguration> customConfigs() {\n        Map<String, RedisCacheConfiguration> configs = new HashMap<>();\n        configs.put(\"products\", defaultConfig().entryTtl(Duration.ofHours(1)));\n        configs.put(\"categories\", defaultConfig().entryTtl(Duration.ofDays(1)));\n        return configs;\n    }\n}\n```\n\n2. Uso de Caché:\n```java\n@Service\npublic class ProductService {\n    @Cacheable(\n        value = \"products\",\n        key = \"#id\",\n        unless = \"#result == null\",\n        condition = \"#id != null\"\n    )\n    public ProductDTO getProduct(Long id) {\n        return productRepository.findById(id)\n            .map(mapper::toDTO)\n            .orElse(null);\n    }\n\n    @CachePut(value = \"products\", key = \"#result.id\")\n    public ProductDTO updateProduct(Long id, ProductDTO dto) {\n        Product product = productRepository.findById(id)\n            .orElseThrow(() -> new NotFoundException(\"Product not found\"));\n        \n        mapper.updateEntityFromDto(dto, product);\n        return mapper.toDTO(productRepository.save(product));\n    }\n\n    @CacheEvict(value = \"products\", key = \"#id\")\n    public void deleteProduct(Long id) {\n        productRepository.deleteById(id);\n    }\n\n    @CacheEvict(value = \"products\", allEntries = true)\n    @Scheduled(cron = \"0 0 * * * *\")\n    public void clearProductCache() {\n        log.info(\"Clearing product cache\");\n    }\n}\n```\n\n3. Caché Personalizado:\n```java\n@Component\npublic class CustomKeyGenerator implements KeyGenerator {\n    @Override\n    public Object generate(Object target, Method method, Object... params) {\n        StringBuilder key = new StringBuilder();\n        key.append(target.getClass().getSimpleName())\n           .append(\":\")\n           .append(method.getName());\n\n        for (Object param : params) {\n            key.append(\":\")\n               .append(param.toString());\n        }\n\n        return key.toString();\n    }\n}\n```\n\n4. Monitorización:\n```java\n@Configuration\npublic class CacheMetricsConfig {\n    @Bean\n    public CacheMetricsRegistrar cacheMetricsRegistrar(CacheManager cacheManager, MeterRegistry registry) {\n        return new CacheMetricsRegistrar(cacheManager, registry);\n    }\n}\n\n@Component\n@RequiredArgsConstructor\npublic class CacheMetricsRegistrar {\n    private final CacheManager cacheManager;\n    private final MeterRegistry registry;\n\n    @PostConstruct\n    public void registerMetrics() {\n        cacheManager.getCacheNames().forEach(cacheName -> {\n            Cache cache = cacheManager.getCache(cacheName);\n            if (cache instanceof ConcurrentMapCache) {\n                registerConcurrentMapMetrics(cacheName, (ConcurrentMapCache) cache);\n            }\n        });\n    }\n}\n```\n\nConsideraciones:\n- Cache eviction policies\n- Memory management\n- Concurrency handling\n- Monitoring and metrics",
            "author": "PromptsForDevs",
            "createdAt": "2024-03-02T17:05:00Z",
            "avgRating": 0,
            "views": 0,
            "likes": 0
        },
        "prompt20": {
            "id": "20",
            "title": "Implementación de Batch Processing en Spring Boot",
            "description": "Guía completa para implementar procesamiento por lotes en Spring Boot utilizando Spring Batch.",
            "tags": ["Java", "Spring Boot", "Batch", "Spring Batch", "Backend"],
            "category": "backend",
            "content": "Actúa como experto en Spring Batch y guíame en la implementación de procesamiento por lotes:\n\n1. Configuración de Job:\n```java\n@Configuration\n@EnableBatchProcessing\npublic class BatchConfig {\n    @Bean\n    public Job importProductsJob(\n        JobRepository jobRepository,\n        Step importProductsStep\n    ) {\n        return new JobBuilder(\"importProductsJob\", jobRepository)\n            .incrementer(new RunIdIncrementer())\n            .listener(new JobCompletionNotificationListener())\n            .flow(importProductsStep)\n            .end()\n            .build();\n    }\n\n    @Bean\n    public Step importProductsStep(\n        JobRepository jobRepository,\n        PlatformTransactionManager transactionManager,\n        ItemReader<ProductDTO> reader,\n        ItemProcessor<ProductDTO, Product> processor,\n        ItemWriter<Product> writer\n    ) {\n        return new StepBuilder(\"importProductsStep\", jobRepository)\n            .<ProductDTO, Product>chunk(100, transactionManager)\n            .reader(reader)\n            .processor(processor)\n            .writer(writer)\n            .faultTolerant()\n            .retry(Exception.class)\n            .retryLimit(3)\n            .listener(new StepExecutionListener())\n            .build();\n    }\n}\n```\n\n2. Reader, Processor y Writer:\n```java\n@Component\npublic class CsvProductReader implements ItemReader<ProductDTO> {\n    private final FlatFileItemReader<ProductDTO> delegate;\n\n    public CsvProductReader() {\n        delegate = new FlatFileItemReader<>();\n        delegate.setLinesToSkip(1);\n        delegate.setLineMapper(new DefaultLineMapper<>() {\n            {\n                setLineTokenizer(new DelimitedLineTokenizer() {\n                    {\n                        setNames(\"name\", \"description\", \"price\");\n                    }\n                });\n                setFieldSetMapper(new BeanWrapperFieldSetMapper<>() {\n                    {\n                        setTargetType(ProductDTO.class);\n                    }\n                });\n            }\n        });\n    }\n\n    @Override\n    public ProductDTO read() throws Exception {\n        return delegate.read();\n    }\n}\n\n@Component\npublic class ProductProcessor implements ItemProcessor<ProductDTO, Product> {\n    @Override\n    public Product process(ProductDTO dto) {\n        if (dto.getPrice().compareTo(BigDecimal.ZERO) <= 0) {\n            return null; // will be filtered out\n        }\n        return Product.builder()\n            .name(dto.getName())\n            .description(dto.getDescription())\n            .price(dto.getPrice())\n            .build();\n    }\n}\n\n@Component\npublic class ProductWriter implements ItemWriter<Product> {\n    private final ProductRepository repository;\n\n    @Override\n    public void write(List<? extends Product> products) {\n        repository.saveAll(products);\n    }\n}\n```\n\n3. Job Execution:\n```java\n@Service\npublic class BatchService {\n    private final JobLauncher jobLauncher;\n    private final Job importProductsJob;\n\n    public JobExecution runImportJob(MultipartFile file) throws Exception {\n        JobParameters params = new JobParametersBuilder()\n            .addString(\"fileName\", file.getOriginalFilename())\n            .addLong(\"startAt\", System.currentTimeMillis())\n            .toJobParameters();\n\n        return jobLauncher.run(importProductsJob, params);\n    }\n}\n```\n\n4. Monitorización:\n```java\n@Component\npublic class JobCompletionNotificationListener implements JobExecutionListener {\n    private final JdbcTemplate jdbcTemplate;\n\n    @Override\n    public void afterJob(JobExecution jobExecution) {\n        if (jobExecution.getStatus() == BatchStatus.COMPLETED) {\n            log.info(\"Job finished! Time to verify the results\");\n\n            jdbcTemplate.query(\"SELECT COUNT(*) FROM products\",\n                (rs, row) -> rs.getInt(1)\n            ).forEach(count -> {\n                log.info(\"Found {} products in the database.\", count);\n            });\n        }\n    }\n}\n```\n\nConsideraciones:\n- Error handling\n- Performance tuning\n- Resource management\n- Monitoring and metrics",
            "author": "PromptsForDevs",
            "createdAt": "2024-03-02T17:10:00Z",
            "avgRating": 0,
            "views": 0,
            "likes": 0
        },
        "prompt21": {
            "id": "21",
            "title": "Implementación de WebSocket en Spring Boot",
            "description": "Guía completa para implementar comunicación en tiempo real usando WebSocket en Spring Boot.",
            "tags": ["Java", "Spring Boot", "WebSocket", "Real-time", "Backend"],
            "category": "backend",
            "content": "Actúa como experto en Spring WebSocket y guíame en la implementación:\n\n1. Configuración WebSocket:\n```java\n@Configuration\n@EnableWebSocketMessageBroker\npublic class WebSocketConfig implements WebSocketMessageBrokerConfigurer {\n    @Override\n    public void configureMessageBroker(MessageBrokerRegistry config) {\n        config.enableSimpleBroker(\"/topic\", \"/queue\");\n        config.setApplicationDestinationPrefixes(\"/app\");\n        config.setUserDestinationPrefix(\"/user\");\n    }\n\n    @Override\n    public void registerStompEndpoints(StompEndpointRegistry registry) {\n        registry.addEndpoint(\"/ws\")\n               .setAllowedOrigins(\"*\")\n               .withSockJS();\n    }\n\n    @Override\n    public void configureWebSocketTransport(WebSocketTransportRegistration registration) {\n        registration.setMessageSizeLimit(8192)\n                   .setSendBufferSizeLimit(8192)\n                   .setSendTimeLimit(10000);\n    }\n}\n```\n\n2. Controlador WebSocket:\n```java\n@Controller\npublic class ChatController {\n    @MessageMapping(\"/chat.send\")\n    @SendTo(\"/topic/messages\")\n    public ChatMessage send(ChatMessage message) {\n        return ChatMessage.builder()\n            .from(message.getFrom())\n            .content(message.getContent())\n            .timestamp(LocalDateTime.now())\n            .build();\n    }\n\n    @MessageMapping(\"/chat.private\")\n    public ChatMessage sendPrivate(\n        @Payload ChatMessage message,\n        @Header(\"simpSessionId\") String sessionId,\n        SimpMessageHeaderAccessor headerAccessor\n    ) {\n        String username = headerAccessor.getSessionAttributes().get(\"username\").toString();\n        messagingTemplate.convertAndSendToUser(\n            message.getTo(),\n            \"/queue/private\",\n            ChatMessage.builder()\n                .from(username)\n                .content(message.getContent())\n                .timestamp(LocalDateTime.now())\n                .build()\n        );\n        return message;\n    }\n}\n```\n\n3. Manejo de Eventos:\n```java\n@Component\npublic class WebSocketEventListener {\n    private final SimpMessageSendingOperations messagingTemplate;\n\n    @EventListener\n    public void handleWebSocketConnectListener(SessionConnectedEvent event) {\n        logger.info(\"Received a new web socket connection\");\n    }\n\n    @EventListener\n    public void handleWebSocketDisconnectListener(SessionDisconnectEvent event) {\n        StompHeaderAccessor headerAccessor = StompHeaderAccessor.wrap(event.getMessage());\n        String username = (String) headerAccessor.getSessionAttributes().get(\"username\");\n        \n        if (username != null) {\n            logger.info(\"User Disconnected : \" + username);\n            ChatMessage chatMessage = ChatMessage.builder()\n                .type(MessageType.LEAVE)\n                .sender(username)\n                .build();\n            messagingTemplate.convertAndSend(\"/topic/public\", chatMessage);\n        }\n    }\n}\n```\n\n4. Cliente WebSocket:\n```javascript\nconst socket = new SockJS('/ws');\nconst stompClient = Stomp.over(socket);\n\nstompClient.connect({}, frame => {\n    console.log('Connected: ' + frame);\n    \n    stompClient.subscribe('/topic/messages', message => {\n        const messageBody = JSON.parse(message.body);\n        displayMessage(messageBody);\n    });\n    \n    stompClient.subscribe('/user/queue/private', message => {\n        const messageBody = JSON.parse(message.body);\n        displayPrivateMessage(messageBody);\n    });\n});\n```\n\nConsideraciones:\n- Connection management\n- Error handling\n- Security configuration\n- Performance optimization",
            "author": "PromptsForDevs",
            "createdAt": "2024-03-02T17:15:00Z",
            "avgRating": 0,
            "views": 0,
            "likes": 0
        },
        "prompt22": {
            "id": "22",
            "title": "Implementación de Reactive Programming en Spring Boot",
            "description": "Guía completa para implementar programación reactiva usando Spring WebFlux y Project Reactor.",
            "tags": ["Java", "Spring Boot", "Reactive", "WebFlux", "Backend"],
            "category": "backend",
            "content": "Actúa como experto en programación reactiva y guíame en la implementación:\n\n1. Configuración Reactiva:\n```java\n@Configuration\npublic class WebFluxConfig {\n    @Bean\n    public RouterFunction<ServerResponse> routerFunction(ProductHandler handler) {\n        return RouterFunctions\n            .route(GET(\"/products\").and(accept(APPLICATION_JSON)), handler::getAllProducts)\n            .andRoute(GET(\"/products/{id}\").and(accept(APPLICATION_JSON)), handler::getProduct)\n            .andRoute(POST(\"/products\").and(accept(APPLICATION_JSON)), handler::createProduct)\n            .andRoute(PUT(\"/products/{id}\").and(accept(APPLICATION_JSON)), handler::updateProduct)\n            .andRoute(DELETE(\"/products/{id}\"), handler::deleteProduct);\n    }\n}\n```\n\n2. Handler Reactivo:\n```java\n@Component\npublic class ProductHandler {\n    private final ProductService productService;\n\n    public Mono<ServerResponse> getAllProducts(ServerRequest request) {\n        return ServerResponse.ok()\n            .contentType(APPLICATION_JSON)\n            .body(productService.getAllProducts(), ProductDTO.class);\n    }\n\n    public Mono<ServerResponse> getProduct(ServerRequest request) {\n        String id = request.pathVariable(\"id\");\n        return productService.getProduct(id)\n            .flatMap(product -> ServerResponse.ok()\n                .contentType(APPLICATION_JSON)\n                .bodyValue(product))\n            .switchIfEmpty(ServerResponse.notFound().build());\n    }\n\n    public Mono<ServerResponse> createProduct(ServerRequest request) {\n        return request.bodyToMono(ProductDTO.class)\n            .flatMap(productService::createProduct)\n            .flatMap(product -> ServerResponse.created(URI.create(\"/products/\" + product.getId()))\n                .contentType(APPLICATION_JSON)\n                .bodyValue(product));\n    }\n}\n```\n\n3. Servicio Reactivo:\n```java\n@Service\npublic class ProductService {\n    private final ProductRepository repository;\n\n    public Flux<ProductDTO> getAllProducts() {\n        return repository.findAll()\n            .map(this::toDTO)\n            .onErrorResume(e -> {\n                log.error(\"Error fetching products\", e);\n                return Flux.empty();\n            });\n    }\n\n    public Mono<ProductDTO> getProduct(String id) {\n        return repository.findById(id)\n            .map(this::toDTO)\n            .onErrorResume(e -> {\n                log.error(\"Error fetching product {}\", id, e);\n                return Mono.empty();\n            });\n    }\n\n    public Mono<ProductDTO> createProduct(ProductDTO dto) {\n        return Mono.just(dto)\n            .map(this::toEntity)\n            .flatMap(repository::save)\n            .map(this::toDTO)\n            .onErrorMap(e -> new ProductCreationException(\"Error creating product\", e));\n    }\n}\n```\n\n4. Testing Reactivo:\n```java\n@SpringBootTest\nclass ProductServiceTest {\n    @Autowired\n    private ProductService productService;\n\n    @Test\n    void shouldCreateProduct() {\n        ProductDTO dto = new ProductDTO(\"Test Product\", BigDecimal.TEN);\n\n        StepVerifier.create(productService.createProduct(dto))\n            .expectNextMatches(created -> {\n                assertNotNull(created.getId());\n                assertEquals(dto.getName(), created.getName());\n                return true;\n            })\n            .verifyComplete();\n    }\n\n    @Test\n    void shouldGetAllProducts() {\n        StepVerifier.create(productService.getAllProducts())\n            .expectNextCount(5)\n            .verifyComplete();\n    }\n}\n```\n\nConsideraciones:\n- Backpressure handling\n- Error propagation\n- Resource management\n- Testing strategies",
            "author": "PromptsForDevs",
            "createdAt": "2024-03-02T17:20:00Z",
            "avgRating": 0,
            "views": 0,
            "likes": 0
        },
        "prompt23": {
            "id": "23",
            "title": "Implementación de Patrones de Diseño en Java",
            "description": "Guía completa para implementar los patrones de diseño más comunes en Java con ejemplos prácticos.",
            "tags": ["Java", "Design Patterns", "OOP", "Architecture", "Backend"],
            "category": "architecture",
            "content": "Actúa como experto en patrones de diseño y guíame en su implementación:\n\n1. Patrón Factory:\n```java\n// Factory Method Pattern\npublic interface PaymentProcessor {\n    void processPayment(BigDecimal amount);\n}\n\npublic class PaymentProcessorFactory {\n    public static PaymentProcessor createProcessor(String type) {\n        return switch (type.toLowerCase()) {\n            case \"credit\" -> new CreditCardProcessor();\n            case \"paypal\" -> new PayPalProcessor();\n            case \"crypto\" -> new CryptoProcessor();\n            default -> throw new IllegalArgumentException(\"Unknown payment type\");\n        };\n    }\n}\n```\n\n2. Patrón Observer:\n```java\npublic interface OrderObserver {\n    void onOrderStatusChange(Order order);\n}\n\npublic class Order extends Observable {\n    private String status;\n    private List<OrderObserver> observers = new ArrayList<>();\n\n    public void addObserver(OrderObserver observer) {\n        observers.add(observer);\n    }\n\n    public void setStatus(String status) {\n        this.status = status;\n        notifyObservers();\n    }\n\n    private void notifyObservers() {\n        observers.forEach(observer -> observer.onOrderStatusChange(this));\n    }\n}\n\npublic class EmailNotifier implements OrderObserver {\n    @Override\n    public void onOrderStatusChange(Order order) {\n        // Send email notification\n    }\n}\n```\n\n3. Patrón Strategy:\n```java\npublic interface DiscountStrategy {\n    BigDecimal applyDiscount(BigDecimal amount);\n}\n\npublic class RegularCustomerDiscount implements DiscountStrategy {\n    @Override\n    public BigDecimal applyDiscount(BigDecimal amount) {\n        return amount.multiply(new BigDecimal(\"0.90\")); // 10% discount\n    }\n}\n\npublic class VIPCustomerDiscount implements DiscountStrategy {\n    @Override\n    public BigDecimal applyDiscount(BigDecimal amount) {\n        return amount.multiply(new BigDecimal(\"0.80\")); // 20% discount\n    }\n}\n\npublic class PriceCalculator {\n    private DiscountStrategy discountStrategy;\n\n    public void setDiscountStrategy(DiscountStrategy strategy) {\n        this.discountStrategy = strategy;\n    }\n\n    public BigDecimal calculateFinalPrice(BigDecimal originalPrice) {\n        return discountStrategy.applyDiscount(originalPrice);\n    }\n}\n```\n\n4. Patrón Builder:\n```java\npublic class User {\n    private final String firstName;\n    private final String lastName;\n    private final String email;\n    private final String phone;\n    private final String address;\n\n    private User(UserBuilder builder) {\n        this.firstName = builder.firstName;\n        this.lastName = builder.lastName;\n        this.email = builder.email;\n        this.phone = builder.phone;\n        this.address = builder.address;\n    }\n\n    public static class UserBuilder {\n        private String firstName;\n        private String lastName;\n        private String email;\n        private String phone;\n        private String address;\n\n        public UserBuilder firstName(String firstName) {\n            this.firstName = firstName;\n            return this;\n        }\n\n        public UserBuilder lastName(String lastName) {\n            this.lastName = lastName;\n            return this;\n        }\n\n        public User build() {\n            return new User(this);\n        }\n    }\n}\n\n// Usage\nUser user = new User.UserBuilder()\n    .firstName(\"John\")\n    .lastName(\"Doe\")\n    .email(\"john@example.com\")\n    .build();\n```\n\nConsideraciones:\n- Pattern selection criteria\n- Implementation trade-offs\n- Testing strategies\n- Performance implications",
            "author": "PromptsForDevs",
            "createdAt": "2024-03-02T17:25:00Z",
            "avgRating": 0,
            "views": 0,
            "likes": 0
        },
        "prompt24": {
            "id": "24",
            "title": "Implementación de Microservicios con Spring Cloud",
            "description": "Guía completa para implementar una arquitectura de microservicios usando Spring Cloud.",
            "tags": ["Java", "Spring Boot", "Microservices", "Spring Cloud", "Backend"],
            "category": "architecture",
            "content": "Actúa como arquitecto de microservicios y guíame en la implementación:\n\n1. Service Discovery:\n```java\n@SpringBootApplication\n@EnableEurekaServer\npublic class DiscoveryServiceApplication {\n    public static void main(String[] args) {\n        SpringApplication.run(DiscoveryServiceApplication.class, args);\n    }\n}\n\n// Client Configuration\n@SpringBootApplication\n@EnableDiscoveryClient\npublic class ProductServiceApplication {\n    @Bean\n    @LoadBalanced\n    public WebClient.Builder loadBalancedWebClient() {\n        return WebClient.builder();\n    }\n}\n```\n\n2. API Gateway:\n```java\n@SpringBootApplication\n@EnableDiscoveryClient\npublic class GatewayApplication {\n    @Bean\n    public RouteLocator customRouteLocator(RouteLocatorBuilder builder) {\n        return builder.routes()\n            .route(\"product_service\", r -> r\n                .path(\"/api/products/**\")\n                .filters(f -> f\n                    .rewritePath(\"/api/(?<segment>.*)\", \"/${segment}\")\n                    .addRequestHeader(\"X-Gateway-Request\", \"true\")\n                    .circuitBreaker(c -> c\n                        .setName(\"productsCB\")\n                        .setFallbackUri(\"forward:/fallback\")))\n                .uri(\"lb://product-service\"))\n            .route(\"order_service\", r -> r\n                .path(\"/api/orders/**\")\n                .filters(f -> f\n                    .rewritePath(\"/api/(?<segment>.*)\", \"/${segment}\")\n                    .retry(5))\n                .uri(\"lb://order-service\"))\n            .build();\n    }\n}\n```\n\n3. Circuit Breaker:\n```java\n@Service\npublic class ProductService {\n    private final WebClient.Builder webClientBuilder;\n\n    @CircuitBreaker(name = \"productService\", fallbackMethod = \"getProductFallback\")\n    @Bulkhead(name = \"productService\")\n    @RateLimiter(name = \"productService\")\n    public Mono<ProductDTO> getProduct(String id) {\n        return webClientBuilder.build()\n            .get()\n            .uri(\"http://product-service/products/\" + id)\n            .retrieve()\n            .bodyToMono(ProductDTO.class);\n    }\n\n    public Mono<ProductDTO> getProductFallback(String id, Exception ex) {\n        return Mono.just(new ProductDTO(id, \"Fallback Product\", BigDecimal.ZERO));\n    }\n}\n```\n\n4. Configuración Distribuida:\n```yaml\n# application.yml in Config Server\nspring:\n  cloud:\n    config:\n      server:\n        git:\n          uri: https://github.com/your-org/config-repo\n          searchPaths: '{application}'\n          clone-on-start: true\n\n# bootstrap.yml in Microservice\nspring:\n  application:\n    name: product-service\n  cloud:\n    config:\n      uri: http://config-server:8888\n      fail-fast: true\n      retry:\n        max-attempts: 6\n        initial-interval: 1000\n        max-interval: 2000\n        multiplier: 1.1\n```\n\nConsideraciones:\n- Service communication\n- Resilience patterns\n- Configuration management\n- Monitoring setup",
            "author": "PromptsForDevs",
            "createdAt": "2024-03-02T17:30:00Z",
            "avgRating": 0,
            "views": 0,
            "likes": 0
        },
        "prompt25": {
            "id": "25",
            "title": "Implementación de Testing Avanzado en Java",
            "description": "Guía completa para implementar pruebas avanzadas en Java incluyendo tests de integración, rendimiento y seguridad.",
            "tags": ["Java", "Testing", "JUnit", "Performance", "Security"],
            "category": "testing",
            "content": "Actúa como experto en testing y guíame en la implementación de pruebas avanzadas:\n\n1. Tests de Integración:\n```java\n@SpringBootTest\n@AutoConfigureMockMvc\n@TestPropertySource(locations = \"classpath:test.properties\")\nclass OrderControllerIntegrationTest {\n    @Autowired\n    private MockMvc mockMvc;\n\n    @Autowired\n    private ObjectMapper objectMapper;\n\n    @MockBean\n    private PaymentService paymentService;\n\n    @Test\n    void shouldCreateOrder() throws Exception {\n        OrderDTO orderDTO = new OrderDTO(\"Test Product\", 1, BigDecimal.TEN);\n        when(paymentService.processPayment(any())).thenReturn(true);\n\n        mockMvc.perform(post(\"/api/orders\")\n            .contentType(MediaType.APPLICATION_JSON)\n            .content(objectMapper.writeValueAsString(orderDTO)))\n            .andExpect(status().isCreated())\n            .andExpect(jsonPath(\"$.status\").value(\"CREATED\"))\n            .andDo(document(\"create-order\",\n                requestFields(\n                    fieldWithPath(\"productName\").description(\"Name of the product\"),\n                    fieldWithPath(\"quantity\").description(\"Quantity ordered\"),\n                    fieldWithPath(\"price\").description(\"Price per unit\")\n                )));\n    }\n}\n```\n\n2. Tests de Rendimiento:\n```java\n@ExtendWith(PerfTestExtension.class)\nclass ProductServicePerfTest {\n    @Test\n    @PerfTest(invocations = 1000, threads = 10)\n    @Required(max = 500, average = 100)\n    void shouldHandleMultipleRequests() {\n        productService.getProduct(\"test-id\");\n    }\n\n    @Test\n    void shouldMeasureResponseTime() {\n        Timer timer = new Timer();\n        timer.start();\n\n        IntStream.range(0, 100)\n            .parallel()\n            .forEach(i -> productService.getProduct(\"test-id\"));\n\n        long timeElapsed = timer.stop();\n        assertTrue(timeElapsed < 5000); // 5 seconds max\n    }\n}\n```\n\n3. Tests de Seguridad:\n```java\n@WebMvcTest(UserController.class)\nclass SecurityTest {\n    @Autowired\n    private MockMvc mockMvc;\n\n    @Test\n    void shouldPreventSQLInjection() throws Exception {\n        String maliciousInput = \"' OR '1'='1\";\n\n        mockMvc.perform(get(\"/api/users\")\n            .param(\"username\", maliciousInput))\n            .andExpect(status().isBadRequest());\n    }\n\n    @Test\n    void shouldPreventXSS() throws Exception {\n        String xssPayload = \"<script>alert('xss')</script>\";\n\n        mockMvc.perform(post(\"/api/users\")\n            .contentType(MediaType.APPLICATION_JSON)\n            .content(createUserJson(xssPayload)))\n            .andExpect(status().isBadRequest());\n    }\n\n    @Test\n    @WithMockUser(roles = \"USER\")\n    void shouldPreventUnauthorizedAccess() throws Exception {\n        mockMvc.perform(get(\"/api/admin/users\"))\n            .andExpect(status().isForbidden());\n    }\n}\n```\n\n4. Tests de Concurrencia:\n```java\n@Test\nvoid shouldHandleConcurrentRequests() throws Exception {\n    int threadCount = 10;\n    CountDownLatch latch = new CountDownLatch(threadCount);\n    ExecutorService executor = Executors.newFixedThreadPool(threadCount);\n\n    List<Future<ProductDTO>> futures = new ArrayList<>();\n    for (int i = 0; i < threadCount; i++) {\n        futures.add(executor.submit(() -> {\n            try {\n                return productService.createProduct(new ProductDTO(\"Test\", BigDecimal.TEN));\n            } finally {\n                latch.countDown();\n            }\n        }));\n    }\n\n    latch.await(10, TimeUnit.SECONDS);\n    executor.shutdown();\n\n    for (Future<ProductDTO> future : futures) {\n        assertNotNull(future.get());\n    }\n}\n```\n\nConsideraciones:\n- Test data management\n- Performance metrics\n- Security vulnerabilities\n- Concurrent execution",
            "author": "PromptsForDevs",
            "createdAt": "2024-03-02T17:35:00Z",
            "avgRating": 0,
            "views": 0,
            "likes": 0
        }
    }
}
      
  
  

const subirDatos = async () => {
    try {
        const promptsArray = Object.values(data.prompts);
        for (const prompt of promptsArray) {
            await addDoc(coleccionRef, prompt);
            console.log(`✅ Subido: ${prompt.title}`);
        }
        console.log("🚀 Todos los prompts han sido subidos correctamente.");
    } catch (error) {
        console.error("❌ Error subiendo prompts:", error);
    }
};

// Ejecutar la carga de datos
subirDatos();

  