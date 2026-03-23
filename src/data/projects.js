const allImages = import.meta.glob('../assets/**/*.{png,jpg,jpeg,gif,avif,webp}', { eager: true });

const getProjectImages = (folderName) => {
  const images = [];
  let thumbnail = null;

  for (const path in allImages) {
    if (path.includes(`/${folderName}/`)) {
      const imageUrl = allImages[path].default;

      if (path.toLowerCase().includes('thumbnail')) {
        thumbnail = imageUrl;
      } else {
        images.push(imageUrl);
      }
    }
  }

  return { thumbnail, gallery: images };
};

export const projectsData = [
  {
  title: "Ayurvarta",
  folder: "ayurvarta",
  description: "A comprehensive ayurveda application focusing on health tracking and traditional remedies.",

  fullDetails:
    "Ayurvarta is a digital platform designed to bridge traditional Ayurvedic knowledge with modern usability. The system allows users to track health patterns, understand imbalances, and receive contextual remedy suggestions. The core goal was to translate a traditionally qualitative system into a structured and trackable digital experience without losing its essence.",

  problem:
    "Ayurvedic practices are traditionally knowledge-heavy and not easily quantifiable. Users often struggle to consistently apply remedies or track their effectiveness over time. There is no structured way to log symptoms, observe patterns, and derive actionable insights from them.",

  approach:
    "The approach focused on structuring loosely defined Ayurvedic concepts into measurable inputs. A modular UI was built where users could input daily health signals, which are then categorized and mapped to predefined logic for recommendations. Special attention was given to reducing cognitive overload through progressive input flows and calm UI design.",

  features: [
    "Structured health logging with categorized inputs",
    "Rule-based remedy suggestions based on user data",
    "Minimal and calming UI for long-term usability",
    "Component-based architecture for easy extension"
  ],

  architecture:
    "Frontend-driven architecture where user inputs are normalized into structured state objects. A rule engine processes this state and maps it to possible remedies. Designed in a way that backend intelligence or ML-based recommendations can be integrated later without restructuring the UI.",

  impact:
    "Demonstrated how traditional and unstructured domains can be translated into scalable digital systems. The project also highlighted the importance of UX in making complex knowledge systems accessible.",

  tags: ["React", "JavaScript", "UI/UX"],
  roles: ["Frontend Developer", "Designer"],
  timeline: "Jan 2026",
  github: "https://github.com/Adii-tii/ayurvarta",
  live: "https://ayurvarta-demo.vercel.app",
  ...getProjectImages("ayurvarta"),
},

  {
  title: "Expense Tracker",
  folder: "expense-tracker",
  description: "A fast and responsive financial management tool for personal expense tracking.",

  fullDetails:
    "The Expense Tracker is designed as a lightweight yet powerful tool for managing personal finances. It prioritizes speed, simplicity, and clarity, allowing users to quickly log expenses and instantly visualize their financial habits without friction.",

  problem:
    "Most financial tracking tools are either too complex or too slow for everyday use. Users often abandon them due to excessive input requirements, poor UX, or latency caused by backend dependencies.",

  approach:
    "A local-first architecture was adopted to eliminate latency and ensure instant feedback. The UI was optimized for rapid data entry with minimal steps, while still supporting structured categorization and meaningful visualization.",

  features: [
    "Instant expense logging with minimal input",
    "Categorized expense tracking",
    "Real-time data visualization",
    "Local-first architecture for performance"
  ],

  architecture:
    "Client-side state management with persistent storage using browser APIs. Data is structured into time-series entries, enabling efficient rendering of analytics and visual insights without server dependency.",

  impact:
    "Significantly improved usability by reducing friction in daily expense tracking. Demonstrated how local-first design can outperform traditional cloud-based approaches for personal tools.",

  tags: ["React", "State Management", "Data Visualization"],
  roles: ["Full Stack Developer"],
  timeline: "Nov 2025",
  github: "https://github.com/Adii-tii/expense-tracker",
  live: "https://expense-tracker-modern.vercel.app",
  ...getProjectImages("expense-tracker"),
},

  {
  title: "Jewelry Catalog",
  folder: "jewlery-catalog",
  description: "A modern, high-performance catalog for showcasing premium jewelry collections.",

  fullDetails:
    "A visually immersive digital catalog designed to showcase premium jewelry collections. The focus was on delivering a smooth browsing experience while maintaining high visual quality and performance.",

  problem:
    "Traditional product catalogs often suffer from slow loading times and lack immersive design, reducing user engagement and product appeal.",

  approach:
    "The system was built with performance-first design principles. Image optimization, lazy loading, and lightweight animations were used to create a balance between aesthetics and speed.",

  features: [
    "Optimized image delivery",
    "Smooth animations for browsing",
    "Responsive layout across devices",
    "Minimalist UI focused on product visibility"
  ],

  architecture:
    "Static frontend architecture with optimized asset delivery. Separation of layout and animation layers ensures smooth rendering without performance degradation.",

  impact:
    "Enhanced product presentation and engagement. Demonstrated how performance and design can coexist in visually rich applications.",

  tags: ["Tailwind", "Design", "E-commerce"],
  roles: ["UI Developer"],
  timeline: "Oct 2025",
  github: "https://github.com/Adii-tii/jewelry-catalog",
  live: "https://premium-catalog.netlify.app",
  ...getProjectImages("jewlery-catalog"),
},
  {
    title: "Loopin",
    folder: "loopin",
    description: "A productivity and scheduling platform designed to streamline daily workflows.",
    fullDetails:
      "Loopin aggregates tasks, schedules, and calendar data into a unified interface. Designed to reduce fragmentation across productivity tools and provide a single source of truth.",

    problem:
      "Users rely on multiple disconnected tools for tasks, scheduling, and reminders, leading to inefficiency and missed actions.",

    approach:
      "Built a unified dashboard that integrates multiple data sources. Focused on real-time updates and synchronization across systems.",

    features: [
      "Unified productivity dashboard",
      "Calendar and task integration",
      "Real-time updates",
      "Centralized workflow management"
    ],

    architecture:
      "Backend-integrated system using APIs to fetch and synchronize data. Frontend renders a unified state combining multiple sources into a single interface.",

    impact:
      "Reduced tool fragmentation and improved workflow efficiency. Showcased how aggregation can simplify complex productivity ecosystems.",

    tags: ["Productivity", "APIs", "Node.js"],
    roles: ["Backend Developer"],
    timeline: "Aug 2025",
    github: "https://github.com/Adii-tii/loopin-productivity",
    live: "https://loopin-sync.vercel.app",
    ...getProjectImages("loopin"),
  },

  {
    title: "PR Tracker",
    folder: "pr-tracker",
    description: "A developer tool that tracks Pull Requests to generate insights on code velocity.",
    fullDetails:
      "PR Tracker analyzes GitHub repositories to provide insights into development workflows, helping teams understand productivity trends and bottlenecks.",

    problem:
      "Teams lack visibility into development velocity and PR lifecycle metrics, making it difficult to optimize workflows and identify delays.",

    approach:
      "Integrated GitHub APIs to collect PR data and built visualization layers to represent trends clearly. Focused on actionable insights rather than raw data.",

    features: [
      "PR lifecycle tracking",
      "Code velocity analytics",
      "Interactive data visualizations",
      "GitHub API integration"
    ],

    architecture:
      "Microservice-style backend for fetching GitHub data, combined with a frontend visualization layer using D3.js. Data is processed into meaningful metrics before rendering.",

    impact:
      "Enabled better decision-making for development teams by visualizing workflow inefficiencies. Demonstrated strong data engineering and visualization skills.",

    tags: ["D3.js", "GitHub API", "Data"],
    roles: ["Software Engineer"],
    timeline: "Jul 2025",
    github: "https://github.com/Adii-tii/pr-velocity-tracker",
    live: "https://pr-tracker-insights.vercel.app",
    ...getProjectImages("pr-tracker"),
  },

  {
    title: "Sign Language Interpreter",
    folder: "sign-lang",
    description: "An AI-powered application that translates sign language gestures into text in real time.",
    fullDetails:
      "A real-time sign language recognition system using computer vision and machine learning. The system processes video input and converts gestures into readable text.",

    problem:
      "Communication barriers exist for individuals using sign language, especially in environments where interpreters are not available.",

    approach:
      "Used computer vision models to detect hand gestures and map them to language tokens. Focused on optimizing inference speed for real-time performance.",

    features: [
      "Real-time gesture recognition",
      "Camera-based input processing",
      "Text output generation",
      "Optimized frame processing pipeline"
    ],

    architecture:
      "Pipeline-based architecture: video input → keypoint extraction → ML model inference → text output. Designed to minimize latency while maintaining accuracy.",

    impact:
      "Demonstrated practical application of AI in accessibility. Highlighted challenges of real-time ML systems and performance optimization.",

    tags: ["Computer Vision", "AI", "Python"],
    roles: ["Machine Learning Engineer"],
    timeline: "Mar 2025",
    github: "https://github.com/Adii-tii/sign-language-ai",
    live: "https://gesture-vision.vercel.app",
    ...getProjectImages("sign-lang"),
  }
];
