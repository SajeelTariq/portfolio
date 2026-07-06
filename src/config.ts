// ============================================================
//  EDIT YOUR PORTFOLIO HERE — replace the placeholder text/links below.
// ============================================================
export const config = {
    developer: {
        name: "Sajeel Tariq",
        fullName: "Sajeel Tariq",
        title: "AI Engineer",
        description: "AI Engineer building intelligent systems and the backends that power them. Focused on LLMs, applied machine learning, and reliable production software."
    },
    social: {
        github: "SajeelTariq",
        email: "sajeeltariqst@gmail.com",
        location: "Karachi, Pakistan"
    },
    about: {
        title: "About Me",
        description: "I'm an AI Engineer with a degree specialized in artificial intelligence. Day to day I work on AI integration and core AI features — LLM-powered workflows, retrieval pipelines, and the backend services that make them production-ready. My foundation spans machine learning and Python, and I bring that together with backend engineering to ship end-to-end AI features. I care about clean architecture, reliability, and building things people actually use."
    },
    experiences: [
        {
            position: "AI Engineer",
            company: "Intellexal Solutions",
            period: "2026 - Present",
            location: "Karachi, Pakistan",
            description: "Building AI-powered conversational systems — including a WhatsApp chatbot for Indolj that lets customers place food orders in natural language, driving additional orders through WhatsApp. Designing Retrieval-Augmented Generation (RAG) pipelines for a Communication-as-a-Service (CaaS) product and building knowledge-base chatbots with tool integrations. Also built a high-performance analytics dashboard over 40M+ live records with FastAPI, React, and Docker, and optimized OLAP analytical queries on 40GB+ datasets using partitioning and indexing for fast retrieval under heavy workloads.",
            responsibilities: [
                "Built a WhatsApp ordering chatbot for Indolj using natural language, increasing orders via WhatsApp",
                "Built knowledge-base chatbots with tool integrations",
                "Designed RAG pipelines for a CaaS product",
                "Developed an analytics dashboard over 40M+ live records and optimized OLAP queries on 40GB+ datasets"
            ],
            technologies: ["LLMs", "RAG", "Chatbots", "WhatsApp", "FastAPI", "React", "Docker", "OLAP"]
        },
        {
            position: "Data Science Intern",
            company: "EvantageSoft",
            period: "2025",
            location: "Karachi, Pakistan",
            description: "Processed large-scale legal datasets to build domain-specific knowledge bases for RAG systems. Implemented Fusion RAG and Corrective RAG architectures to improve retrieval accuracy and reasoning, and built autonomous AI agents using LangGraph, CrewAI, and AutoGen to automate workflows.",
            responsibilities: [
                "Built domain-specific knowledge bases from large legal datasets",
                "Implemented Fusion RAG and Corrective RAG architectures",
                "Built autonomous AI agents with LangGraph, CrewAI, and AutoGen"
            ],
            technologies: ["RAG", "LangGraph", "CrewAI", "AutoGen", "Python", "NLP"]
        },
        {
            position: "B.S. Computer Science — AI Specialization",
            company: "NED University of Engineering & Technology",
            period: "2022 - 2026",
            location: "Karachi, Pakistan",
            description: "Bachelor of Science in Computer Science with a specialization in Artificial Intelligence (CGPA 3.84). Coursework and projects spanning machine learning, deep learning, NLP, and software engineering.",
            responsibilities: [
                "Specialization in Artificial Intelligence",
                "CGPA: 3.84",
                "Machine learning, deep learning, NLP, and software engineering"
            ],
            technologies: ["Machine Learning", "Deep Learning", "NLP", "Python"]
        },
        {
            position: "Intermediate in Computer Science",
            company: "Bahria College Karsaz",
            period: "2020 - 2022",
            location: "Karachi, Pakistan",
            description: "Intermediate in Computer Science (86%), building the foundation in programming and core computer science concepts.",
            responsibilities: [
                "Intermediate in Computer Science",
                "Percentage: 86%"
            ],
            technologies: ["Programming", "Computer Science"]
        }
    ],
    projects: [
        {
            id: 1,
            title: "AI Knowledge Assistant",
            category: "AI / LLM",
            technologies: "Python, FastAPI, RAG, Vector DB, React",
            image: "/images/drishti.png",
            description: "A retrieval-augmented chatbot that answers questions over private documents with source citations. Handles ingestion, embeddings, and streaming responses."
        },
        {
            id: 2,
            title: "Document Intelligence Pipeline",
            category: "AI / NLP",
            technologies: "Python, Celery, PostgreSQL, LLMs",
            image: "/images/floodhub.png",
            description: "Automated extraction and classification of unstructured documents using LLMs plus a fine-tuned model, exposed through a queue-backed API."
        },
        {
            id: 3,
            title: "Realtime AI Agent Backend",
            category: "AI / Agents",
            technologies: "Python, WebSockets, Function Calling",
            image: "/images/phoenix.png",
            description: "A tool-using agent service with function calling, memory, and guardrails, built to plug into web and mobile clients over websockets."
        },
        {
            id: 4,
            title: "ML Forecasting Service",
            category: "ML / MLOps",
            technologies: "Python, Docker, Scheduling, Model Versioning",
            image: "/images/eie.png",
            description: "A time-series forecasting microservice with scheduled retraining, model versioning, and a clean prediction API for downstream teams."
        },
        {
            id: 5,
            title: "E-Commerce Platform",
            category: "Full Stack",
            technologies: "React, Node.js, PostgreSQL, Stripe",
            image: "/images/gamekroy.png",
            description: "A full-featured commerce platform with authentication, catalog, cart, secure payments, order tracking, and an admin dashboard."
        },
        {
            id: 6,
            title: "Analytics Dashboard",
            category: "Full Stack",
            technologies: "Next.js, FastAPI, PostgreSQL",
            image: "/images/votechain.png",
            description: "A data dashboard with real-time metrics, role-based access, and a clean API layer aggregating multiple data sources."
        }
    ],
    contact: {
        email: "sajeeltariqst@gmail.com",
        github: "https://github.com/SajeelTariq",
        linkedin: "https://www.linkedin.com/in/sajeeltariq",
        twitter: "",
        facebook: "",
        instagram: "https://www.instagram.com/sajeel_tariq_st?igsh=MWVobjQ3OGQ4cG45cA=="
    },
    skills: {
        develop: {
            title: "AI ENGINEER",
            description: "Building intelligent systems & AI solutions",
            details: "Developing AI agents, chatbots, and machine learning models using Python. Specializing in LLMs, RAG, NLP, deep learning, and integrating AI into real products.",
            tools: ["Python", "PyTorch", "LLMs", "RAG", "NLP", "OpenAI", "Hugging Face", "Deep Learning", "AI Agents", "Scikit-learn"]
        },
        design: {
            title: "BACKEND",
            description: "APIs, data & scalable services",
            details: "Building reliable, performant backends using Python, FastAPI, and databases. Designing clean APIs, data pipelines, and infrastructure to serve AI features at scale.",
            tools: ["FastAPI", "Node.js", "TypeScript", "PostgreSQL", "Redis", "Docker", "REST APIs", "Celery", "AWS", "Git"]
        }
    }
};
