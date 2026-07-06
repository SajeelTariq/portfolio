/**
 * ============================================================
 *  EDIT YOUR PORTFOLIO HERE — this is the only file most edits need.
 *  Replace the placeholder text/links below with your real info.
 * ============================================================
 */

export const site = {
  name: "Your Name",
  role: "AI Engineer",
  // Short one-liner under your name in the hero.
  tagline:
    "I build AI-powered products — from LLM integrations to production backends.",
  // Longer hero subtext.
  intro:
    "AI Engineer specializing in large language models and applied machine learning, backed by solid backend engineering. I turn AI capabilities into reliable, shippable software.",
  location: "Your City, Country",
  email: "you@example.com",
  // Put resume.pdf in the /public folder and keep this path, or set to "" to hide the button.
  resumeUrl: "/resume.pdf",
};

/**
 * HERO 3D SCENE (Spline).
 * 1. Go to https://spline.design/  →  open the Community tab (or your own scene).
 * 2. Open a scene you like  →  Export (top-right)  →  "Public URL" / React  →  copy the .splinecode link.
 * 3. Paste it below. A default scene is pre-filled so the site works right away.
 * Set to "" to fall back to the built-in animated placeholder instead.
 */
export const heroSplineUrl =
  "https://prod.spline.design/6Wq1Q7YGyM-iab9i/scene.splinecode";

export const socials = [
  { label: "GitHub", href: "https://github.com/yourusername", icon: "github" },
  { label: "LinkedIn", href: "https://linkedin.com/in/yourusername", icon: "linkedin" },
  { label: "X / Twitter", href: "https://x.com/yourusername", icon: "x" },
  { label: "Email", href: "mailto:you@example.com", icon: "mail" },
] as const;

export const about = {
  heading: "About me",
  paragraphs: [
    "I'm an AI Engineer with a degree specialized in artificial intelligence. Day to day I work on AI integration and core AI features — LLM-powered workflows, prompt and retrieval pipelines, and the backend services that make them production-ready.",
    "My foundation spans machine learning and Python, and I bring that together with backend engineering to ship end-to-end AI features rather than isolated experiments. I care about clean architecture, reliability, and shipping things people actually use.",
  ],
  highlights: [
    { value: "2+", label: "Years building with AI" },
    { value: "10+", label: "Projects shipped" },
    { value: "AI", label: "Degree specialization" },
    { value: "∞", label: "Curiosity" },
  ],
};

export const skillGroups = [
  {
    title: "AI / ML",
    items: [
      "LLM Integration",
      "Prompt Engineering",
      "RAG / Vector Search",
      "OpenAI & Anthropic APIs",
      "Machine Learning",
      "PyTorch",
      "Hugging Face",
      "Model Evaluation",
    ],
  },
  {
    title: "Backend",
    items: [
      "FastAPI",
      "REST APIs",
      "PostgreSQL",
      "Redis",
      "Docker",
      "Celery / Queues",
      "Auth & Security",
      "Cloud (AWS/GCP)",
    ],
  },
  {
    title: "Languages & Tools",
    items: ["Python", "TypeScript", "SQL", "Git", "Linux", "CI/CD", "Pytest"],
  },
];

export type Project = {
  title: string;
  description: string;
  tags: string[];
  live?: string;
  repo?: string;
};

export const projects: Project[] = [
  {
    title: "AI Knowledge Assistant",
    description:
      "A retrieval-augmented chatbot that answers questions over private documents with source citations. Handles ingestion, embeddings, and streaming responses.",
    tags: ["LLM", "RAG", "FastAPI", "Vector DB"],
    live: "#",
    repo: "#",
  },
  {
    title: "Document Intelligence Pipeline",
    description:
      "Automated extraction and classification of unstructured documents using LLMs plus a fine-tuned model, exposed through a queue-backed API.",
    tags: ["NLP", "Python", "Celery", "PostgreSQL"],
    live: "#",
    repo: "#",
  },
  {
    title: "Realtime AI Agent Backend",
    description:
      "A tool-using agent service with function calling, memory, and guardrails — built to plug into web and mobile clients over websockets.",
    tags: ["Agents", "Function Calling", "WebSockets"],
    live: "#",
    repo: "#",
  },
  {
    title: "ML Forecasting Service",
    description:
      "Time-series forecasting microservice with scheduled retraining, model versioning, and a clean prediction API for downstream teams.",
    tags: ["ML", "Forecasting", "Docker", "MLOps"],
    live: "#",
    repo: "#",
  },
];

export type TimelineItem = {
  year: string; // big display label, e.g. "NOW", "2025", "2024"
  title: string;
  subtitle: string; // accent-colored line under the title
  description: string;
};

export const timeline: TimelineItem[] = [
  {
    year: "NOW",
    title: "AI Engineer",
    subtitle: "Company Name",
    description:
      "Building AI-powered features end to end: LLM integrations, RAG pipelines, and the backend services around them. Focused on turning AI capabilities into reliable production software.",
  },
  {
    year: "2024",
    title: "Backend / ML Developer",
    subtitle: "Previous Company",
    description:
      "Developed Python backends and machine learning components, from data pipelines to model serving APIs.",
  },
  {
    year: "2020",
    title: "B.Sc. — AI Specialization",
    subtitle: "Your University",
    description:
      "Degree with a specialization in AI, covering machine learning, deep learning, NLP, and software engineering fundamentals.",
  },
];

export const nav = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];
