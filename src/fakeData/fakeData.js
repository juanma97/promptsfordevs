const fakePrompts = [
    {
      id: 1,
      title: 'Improve Writing Skills',
      description: 'A prompt to enhance writing abilities.',
      tags: ['writing', 'education'],
      isPaid: false,
      price: null,
      preview: 'Brief preview: Improve your writing skills by practicing daily writing prompts.',
      content: 'Detailed content: Write a 500-word essay on the importance of writing regularly to improve clarity and expression. Include examples and practical tips.',
      ratings: [
        { id: '101', rating: 5, comment: 'Really inspiring!' },
        { id: '102', rating: 4, comment: 'Very useful for my writing practice.' }
      ]
    },
    {
      id: 2,
      title: 'Debugging Helper',
      description: 'AI-assisted debugging for developers.',
      tags: ['coding', 'debugging'],
      isPaid: true,
      price: '4,99',
      preview: 'Preview: Get tips and tricks to debug your code faster.',
      content: 'Detailed content: Use this prompt to analyze your code, detect errors, and receive improvement suggestions using AI algorithms. Perfect for developers facing tricky bugs.',
      ratings: [
        { id: '201', rating: 4, comment: 'Helped me find bugs quickly.' },
        { id: '202', rating: 4.5, comment: 'Very practical debugging tips.' }
      ]
    },
    {
      id: 3,
      title: 'Creative Story Ideas',
      description: 'Generate creative story ideas instantly.',
      tags: ['creative', 'storytelling'],
      isPaid: false,
      price: null,
      preview: 'Preview: Spark your creativity with unique story ideas and plot twists.',
      content: 'Detailed content: This prompt offers creative ideas for stories, including character sketches, unexpected plot twists, and immersive settings to inspire writers in crafting engaging narratives.',
      ratings: [
        { id: '301', rating: 5, comment: 'Super creative and engaging.' },
        { id: '302', rating: 4, comment: 'A good starting point for a new story.' }
      ]
    },
    {
      id: 4,
      title: 'Resume Optimizer',
      description: 'Improve your resume with AI suggestions.',
      tags: ['career', 'resume'],
      isPaid: true,
      price: '4,99',
      preview: 'Preview: Enhance your resume to stand out from the crowd.',
      content: 'Detailed content: Use this prompt to analyze your current resume and receive actionable suggestions to improve its layout, content, and overall appeal to potential employers.',
      ratings: [
        { id: '401', rating: 3.5, comment: 'Gave some decent pointers.' },
        { id: '402', rating: 4, comment: 'Helped me update my resume.' }
      ]
    },
    {
      id: 5,
      title: 'Learning New Languages',
      description: 'AI-powered language learning exercises.',
      tags: ['language', 'education'],
      isPaid: false,
      price: null,
      preview: 'Preview: Engage with fun and interactive language exercises.',
      content: 'Detailed content: This prompt provides a series of interactive exercises to help you learn a new language. It covers vocabulary, grammar, and conversation practice, making language learning enjoyable and effective.',
      ratings: [
        { id: '501', rating: 4.5, comment: 'Fun and interactive!' },
        { id: '502', rating: 5, comment: 'Perfect for language learners.' }
      ]
    },
    {
      id: 6,
      title: 'Workout Plans',
      description: 'Get personalized workout routines.',
      tags: ['fitness', 'health'],
      isPaid: true,
      price: '4,99',
      preview: 'Preview: Personalized workout routines to help you achieve your fitness goals.',
      content: 'Detailed content: This prompt provides a step-by-step workout plan tailored to your fitness level and goals. It includes warm-up, exercises, cool-down, and tips for staying motivated and tracking progress.',
      ratings: [
        { id: '601', rating: 4, comment: 'Great workout ideas!' },
        { id: '602', rating: 3.5, comment: 'Good, but needs more variety.' }
      ]
    },
    {
      id: 7,
      title: 'Daily Motivation Boost',
      description: 'Start your day with an uplifting quote or challenge.',
      tags: ['motivation', 'self-improvement'],
      isPaid: false,
      price: null,
      preview: 'Preview: Get a motivational quote to boost your day.',
      content: 'Detailed content: Receive daily motivational quotes, personal development challenges, and reflective questions to start your day with a positive mindset.',
      ratings: [
        { id: '701', rating: 5, comment: 'Really uplifting!' },
        { id: '702', rating: 4, comment: 'Helps me stay focused.' }
      ]
    },
    {
      id: 8,
      title: 'Photography Composition Guide',
      description: 'Improve your photography skills with composition techniques.',
      tags: ['photography', 'art'],
      isPaid: true,
      price: '3,99',
      preview: 'Preview: Learn about the rule of thirds and leading lines.',
      content: 'Detailed content: This guide explains essential photography composition techniques, such as framing, symmetry, leading lines, and the rule of thirds, to enhance your photography skills.',
      ratings: [
        { id: '801', rating: 4.5, comment: 'Very informative and useful.' },
        { id: '802', rating: 4, comment: 'Great tips for beginners!' }
      ]
    },
    {
      id: 9,
      title: 'Public Speaking Confidence',
      description: 'Overcome fear and speak with confidence.',
      tags: ['communication', 'self-improvement'],
      isPaid: false,
      price: null,
      preview: 'Preview: Tips for becoming a confident speaker.',
      content: 'Detailed content: Learn how to overcome stage fright, structure your speeches effectively, and use vocal and body language techniques to enhance your confidence in public speaking.',
      ratings: [
        { id: '901', rating: 5, comment: 'Helped me with my presentations!' },
        { id: '902', rating: 4, comment: 'Great practical exercises.' }
      ]
    },
    {
      id: 10,
      title: 'Meal Planning for Busy People',
      description: 'Create a weekly meal plan with easy recipes.',
      tags: ['nutrition', 'health'],
      isPaid: true,
      price: '5,99',
      preview: 'Preview: Plan your meals ahead for a healthier diet.',
      content: 'Detailed content: Learn how to efficiently plan your meals for the week, including grocery shopping tips, meal prep strategies, and quick, healthy recipes to save time while eating well.',
      ratings: [
        { id: '1001', rating: 4.5, comment: 'Made meal planning so much easier!' },
        { id: '1002', rating: 4, comment: 'Helpful, but could include more recipes.' }
      ]
    },
    {
        id: 11,
        title: 'Stock Market Basics',
        description: 'Learn the fundamentals of investing.',
        tags: ['finance', 'investing'],
        isPaid: true,
        price: '6,99',
        preview: 'Preview: Introduction to stock market concepts.',
        content: 'Detailed content: Understand how the stock market works, key investment strategies, and risk management to help you make informed financial decisions.',
        ratings: [
        { id: '1101', rating: 4, comment: 'Good for beginners!' },
        { id: '1102', rating: 4.5, comment: 'Explains the basics really well.' }
        ]
    },
    {
        id: 12,
        title: 'Speed Reading Techniques',
        description: 'Improve your reading speed and comprehension.',
        tags: ['learning', 'education'],
        isPaid: false,
        price: null,
        preview: 'Preview: Learn to read faster while understanding more.',
        content: 'Detailed content: Discover proven speed-reading techniques, including skimming, scanning, and chunking, to enhance your comprehension and learning efficiency.',
        ratings: [
        { id: '1201', rating: 5, comment: 'Helped me a lot with studying!' },
        { id: '1202', rating: 4, comment: 'Good strategies, but takes practice.' }
        ]
    },
    {
        id: 13,
        title: 'Creative Writing Prompts',
        description: 'Daily exercises to boost creativity.',
        tags: ['writing', 'creativity'],
        isPaid: false,
        price: null,
        preview: 'Preview: Get fresh creative writing ideas every day.',
        content: 'Detailed content: A collection of writing prompts designed to spark creativity and storytelling skills. Perfect for overcoming writer’s block and exploring new ideas.',
        ratings: [
        { id: '1301', rating: 4.5, comment: 'Great for daily practice!' },
        { id: '1302', rating: 5, comment: 'Inspires me to write more.' }
        ]
    },
    {
        id: 14,
        title: 'Mindfulness Meditation Guide',
        description: 'Learn to meditate and stay present.',
        tags: ['mindfulness', 'wellness'],
        isPaid: true,
        price: '4,50',
        preview: 'Preview: Simple techniques to practice mindfulness.',
        content: 'Detailed content: Step-by-step guide to mindfulness meditation, including breathing exercises, focus techniques, and relaxation tips to reduce stress and improve mental clarity.',
        ratings: [
        { id: '1401', rating: 4, comment: 'Very calming and useful.' },
        { id: '1402', rating: 4.5, comment: 'Perfect for beginners in meditation.' }
        ]
    },
    {
        id: 15,
        title: 'Time Management Strategies',
        description: 'Boost productivity with time management tips.',
        tags: ['productivity', 'self-improvement'],
        isPaid: false,
        price: null,
        preview: 'Preview: Learn to manage your time effectively.',
        content: 'Detailed content: Explore proven time management techniques, including the Pomodoro technique, Eisenhower Matrix, and prioritization methods to enhance productivity.',
        ratings: [
        { id: '1501', rating: 5, comment: 'Game changer for my work schedule!' },
        { id: '1502', rating: 4, comment: 'Helpful strategies, easy to apply.' }
        ]
    },
    {
        id: 16,
        title: 'Home Workout Routines',
        description: 'Stay fit with home-based exercises.',
        tags: ['fitness', 'health'],
        isPaid: true,
        price: '3,99',
        preview: 'Preview: Work out from home with no equipment.',
        content: 'Detailed content: A series of bodyweight exercises and structured workout routines for all fitness levels, designed for effective training at home.',
        ratings: [
        { id: '1601', rating: 4, comment: 'Simple and effective routines.' },
        { id: '1602', rating: 3.5, comment: 'Would love more variety.' }
        ]
    },
    {
        id: 17,
        title: 'Personal Finance Planner',
        description: 'Manage your finances effectively.',
        tags: ['finance', 'budgeting'],
        isPaid: true,
        price: '7,99',
        preview: 'Preview: Budgeting and saving made easy.',
        content: 'Detailed content: Learn how to create a personal budget, track expenses, and develop saving habits to improve financial stability and achieve financial goals.',
        ratings: [
        { id: '1701', rating: 5, comment: 'Really useful for managing money!' },
        { id: '1702', rating: 4.5, comment: 'Great tool for financial planning.' }
        ]
    },
    {
        id: 18,
        title: 'Healthy Cooking Recipes',
        description: 'Delicious and nutritious meal ideas.',
        tags: ['cooking', 'nutrition'],
        isPaid: false,
        price: null,
        preview: 'Preview: Simple, healthy recipes to try at home.',
        content: 'Detailed content: A curated list of easy-to-make, nutritious meals, including step-by-step cooking instructions and tips for maintaining a balanced diet.',
        ratings: [
        { id: '1801', rating: 4.5, comment: 'Tasty and healthy recipes!' },
        { id: '1802', rating: 4, comment: 'Would love more vegetarian options.' }
        ]
    },
    {
        id: 19,
        title: 'Social Media Growth Hacks',
        description: 'Boost your social media presence.',
        tags: ['marketing', 'social media'],
        isPaid: true,
        price: '5,99',
        preview: 'Preview: Tips to grow your audience organically.',
        content: 'Detailed content: Discover proven social media strategies, engagement techniques, and content planning methods to increase followers and improve brand presence online.',
        ratings: [
        { id: '1901', rating: 4, comment: 'Helpful insights for influencers!' },
        { id: '1902', rating: 3.5, comment: 'Some tips are basic, but useful.' }
        ]
    },
    {
        id: 20,
        title: 'DIY Home Improvement Guide',
        description: 'Easy home improvement projects.',
        tags: ['DIY', 'home'],
        isPaid: false,
        price: null,
        preview: 'Preview: Step-by-step home improvement projects.',
        content: 'Detailed content: Learn DIY techniques for improving your home, including painting, repairs, organization hacks, and creative decor ideas.',
        ratings: [
        { id: '2001', rating: 5, comment: 'Perfect for home projects!' },
        { id: '2002', rating: 4, comment: 'Very practical and easy to follow.' }
        ]
    }
];
      
export default fakePrompts;