export const projects = [
  {
    badge: "HeaLing 2026 • ACL Workshop",
    title: "Normalizing Health Concepts with Biomedical Embeddings and LLMs",
    description:
      "Built a biomedical concept normalization system that maps clinical and social-media health expressions to standardized UMLS medical concepts using embedding-based semantic retrieval and LLM-generated preferred terms.",
    metrics: [
      "3.59M UMLS embeddings indexed",
      "85.8% clinical normalization accuracy",
      "98.0% social-media normalization accuracy",
    ],
    tech: [
      "Python",
      "SapBERT",
      "FAISS",
      "UMLS",
      "GPT",
      "Gemini",
      "Llama",
      "APIs",
      "Ollama",
    ],
    paperLink: "https://aclanthology.org/2026.healing-1.15/",
    githubLink: "https://github.com/iramazam3/Biomedical-Concept-Normalization",
  },

  {
    badge: "Bioengineering 2026",
    title: "Personalized Rotator Cuff Rehabilitation Using Machine Learning",
    description:
      "Designed a machine-learning framework using surface EMG signals and optimization algorithms to personalize 60-minute rotator cuff rehabilitation therapy sessions.",
    metrics: ["XGBoost regression model", "R² = 0.5325", "MSE = 0.0084"],
    tech: ["Python", "XGBoost", "sEMG", "Optimization", "Healthcare AI"],
    paperLink: "https://www.mdpi.com/2306-5354/13/4/483",
    githubLink: "https://github.com/iramazam3/ML-Physical-Therapy-Optimization",
  },

  {
    badge: "IEEE Big Data 2025",
    title: "Batch Classification of Health Text Using LLM Batch Prompting",
    description:
      "Developed a scalable LLM batch-prompting framework for detecting personal health experiences from social-media text while optimizing throughput, latency, accuracy, and inference cost.",
    metrics: [
      "12,331 tweets analyzed",
      "GPT-4o and Gemini benchmarked",
      "Optimized batch size and cost",
    ],
    tech: ["Python", "GPT", "Gemini", "Prompt Engineering", "NLP"],
    paperLink: "https://doi.org/10.1109/BIGDATA66926.2025.11401609",
    githubLink: "https://github.com/iramazam3/LLM-Batch-Classification",
  },

  {
    badge: "Agentic AI Project",
    title: "FitAgent: AI-Powered Workout & Nutrition Planning System",
    description:
      "Built a personalized fitness and nutrition assistant using LangChain agents to generate adaptive workout and meal plans as per user needs.",
    metrics: [
      "Multi-agent architecture",
      "RAG-powered knowledge retrieval",
      "Fitness and nutrition API integration",
    ],
    tech: ["Python", "LangChain", "Gemini", "FAISS", "RAG", "HuggingFace"],
    githubLink: "https://github.com/iramazam3/AI-Fitness-Nutrition-Assistant",
  },
];
