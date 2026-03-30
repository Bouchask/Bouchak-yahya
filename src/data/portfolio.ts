// ============================================================
// Centralized portfolio data — edit here, not in components.
// Every user-facing string lives in this file.
// ============================================================

export interface LocalizedString {
  en: string;
  fr: string;
}

// ── Personal info (language-independent) ─────────────────────
export const personalInfo = {
  name: "Yahya Bouchak",
  email: "mr.bouchakyahya@gmail.com",
  github: "https://github.com/Bouchask",
  githubUser: "Bouchask",
  linkedin: "https://linkedin.com/in/yahyabouchak",
  linkedinUser: "yahyabouchak",
  cvFile: "/Yahya_Bouchak_CV.pdf",
};

// ── Skill categories ─────────────────────────────────────────
export const skillCategories = [
  { title: "AI & Machine Learning", prefix: "ai_ml", skills: ["Python", "TensorFlow", "Scikit-learn", "Pandas", "NumPy", "Streamlit", "Ollama LLM"] },
  { title: "Computer Vision & NLP", prefix: "cv_nlp", skills: ["OpenCV", "YOLOv8", "ArcFace", "FAISS", "InsightFace", "HuggingFace", "DistilRoBERTa"] },
  { title: "Big Data & Engineering", prefix: "data", skills: ["Apache Kafka", "Apache Spark", "Hadoop", "Hive", "Wazuh SIEM", "UML Design"] },
  { title: "Web & Backend", prefix: "web", skills: ["React", "React Native", "FastAPI", "Flask", "Laravel", "Tailwind CSS", "TypeScript"] },
  { title: "Databases", prefix: "db", skills: ["MySQL", "PostgreSQL", "Oracle PL/SQL", "SQLite", "SQL Server"] },
  { title: "Tools & DevOps", prefix: "devops", skills: ["Git", "Docker", "Linux", "Ngrok", "Postman", "VS Code"] },
];

// ── Projects ─────────────────────────────────────────────────
export interface Project {
  id: string;
  title: string;
  description: LocalizedString;
  technologies: string[];
  githubUrl: string;
  linkedinUrl?: string;
}

export const projects: Project[] = [
  {
    id: "siem-ai",
    title: "SIEM AI Dashboard",
    description: {
      en: "Real-time security alert classification using local LLMs. Ingests Wazuh alerts via Apache Kafka.",
      fr: "Classification d'alertes de sécurité en temps réel avec des LLMs locaux. Ingestion d'alertes Wazuh via Apache Kafka.",
    },
    technologies: ["FastAPI", "React", "Kafka", "Ollama", "Wazuh"],
    githubUrl: "https://github.com/Bouchask/siam-stage",
    linkedinUrl: "https://www.linkedin.com/posts/yahyabouchak_cybersecurity-ai-siem-share-7389277413135839232-d68H",
  },
  {
    id: "attendance-portal",
    title: "AI Attendance Portal",
    description: {
      en: "Automated face recognition attendance using YOLOv8 + ArcFace with FAISS vector search.",
      fr: "Système de présence par reconnaissance faciale automatisée utilisant YOLOv8 + ArcFace avec recherche vectorielle FAISS.",
    },
    technologies: ["YOLOv8", "ArcFace", "FAISS", "Flask"],
    githubUrl: "https://github.com/Bouchask/Portail_IA",
  },
  {
    id: "rome-ai",
    title: "RomeAI — Campus Room Manager",
    description: {
      en: "University room & session management with React Native mobile app and Flask REST API.",
      fr: "Gestion de salles et sessions universitaires avec application mobile React Native et API REST Flask.",
    },
    technologies: ["React Native", "Flask", "SQLAlchemy"],
    githubUrl: "https://github.com/Bouchask/romeAI",
    linkedinUrl: "https://www.linkedin.com/posts/yahyabouchak_reactnative-mobiledevelopment-flask-activity-7438396977131704321-ffOY",
  },
  {
    id: "nasdaq-prediction",
    title: "NASDAQ 100 Prediction",
    description: {
      en: "Time-series forecasting for NASDAQ 100 price movements using deep learning.",
      fr: "Prédiction de séries temporelles des mouvements NASDAQ 100 par deep learning.",
    },
    technologies: ["TensorFlow", "Streamlit", "yfinance"],
    githubUrl: "https://github.com/Bouchask/prediction_nasdaq",
  },
  {
    id: "face-clustering",
    title: "Unsupervised Face Clustering",
    description: {
      en: "Computer vision pipeline: InsightFace extraction + HDBSCAN density-based clustering.",
      fr: "Pipeline de vision par ordinateur : extraction InsightFace + clustering HDBSCAN.",
    },
    technologies: ["InsightFace", "HDBSCAN", "OpenCV"],
    githubUrl: "https://github.com/Bouchask/D-tection-et-de-Clustering-des-Visages",
  },
  {
    id: "sentiment-analysis",
    title: "NLP Sentiment Analysis",
    description: {
      en: "Sentiment detection on a fine-tuned DistilRoBERTa model from HuggingFace.",
      fr: "Détection de sentiments sur un modèle DistilRoBERTa affiné de HuggingFace.",
    },
    technologies: ["DistilRoBERTa", "HuggingFace", "Streamlit"],
    githubUrl: "https://github.com/Bouchask/nlp_sentiment_project",
    linkedinUrl: "https://www.linkedin.com/posts/yahyabouchak_datascience-nlp-ia-activity-7324906617034993664-0B2f",
  },
];

// ── Timeline entries ─────────────────────────────────────────
export interface TimelineEntry {
  type: "education" | "experience";
  title: LocalizedString;
  subtitle: LocalizedString;
  date: string;
  description: LocalizedString;
}

export const timeline: TimelineEntry[] = [
  {
    type: "education",
    title: { en: "Master — AI & Information Systems (SIIA)", fr: "Master — Systèmes d'Information & IA (SIIA)" },
    subtitle: { en: "Excellence Track — FPK Khouribga", fr: "Filière Excellence — FPK Khouribga" },
    date: "2025 — Present",
    description: { en: "ML, Deep Learning, Big Data, NLP, Computer Vision, Distributed Systems", fr: "ML, Deep Learning, Big Data, NLP, Vision par Ordinateur, Systèmes Distribués" },
  },
  {
    type: "education",
    title: { en: "Bachelor — AI & Information Systems (SIIA)", fr: "Licence — Systèmes d'Information & IA (SIIA)" },
    subtitle: { en: "Excellence Track — FPK Khouribga", fr: "Filière Excellence — FPK Khouribga" },
    date: "2024 — 2025",
    description: { en: "Graduated with Honors (Mention Bien)", fr: "Mention : Bien" },
  },
  {
    type: "experience",
    title: { en: "Web Development Intern", fr: "Stagiaire Développement Web" },
    subtitle: { en: "OCP Phosboucraa (OCP Group)", fr: "OCP Phosboucraa (Groupe OCP)" },
    date: "Jun — Aug 2024",
    description: {
      en: "Designed & delivered internal medical appointment management web app. Laravel, Tailwind CSS, MySQL. Scrum methodology, 3 user feedback cycles.",
      fr: "Conception et livraison d'une application web interne de gestion de rendez-vous médicaux. Laravel, Tailwind CSS, MySQL. Méthode Scrum, 3 cycles de retours utilisateurs.",
    },
  },
  {
    type: "education",
    title: { en: "BTS — Information Systems Development (DSI)", fr: "BTS — Développement des Systèmes d'Information (DSI)" },
    subtitle: { en: "", fr: "" },
    date: "2022 — 2024",
    description: { en: "Graduated with High Honors (Mention Très Bien)", fr: "Mention : Très Bien" },
  },
];

// ── All translatable UI strings ──────────────────────────────
export const translations: Record<string, LocalizedString> = {
  // Navbar
  "nav.home": { en: "home", fr: "accueil" },
  "nav.about": { en: "about", fr: "profil" },
  "nav.skills": { en: "skills", fr: "compétences" },
  "nav.projects": { en: "projects", fr: "projets" },
  "nav.journey": { en: "journey", fr: "parcours" },
  "nav.connect": { en: "connect", fr: "contact" },

  // Hero
  "hero.path": { en: "/home/yahya", fr: "/accueil/yahya" },
  "hero.cmd": { en: "whoami", fr: "whoami" },
  "hero.role1": { en: "Junior AI Engineer", fr: "Ingénieur IA Junior" },
  "hero.role2": { en: "Data Engineering Enthusiast", fr: "Passionné d'Ingénierie Data" },
  "hero.role3": { en: "Full-Stack Developer", fr: "Développeur Full-Stack" },
  "hero.role4": { en: "Computer Vision Explorer", fr: "Explorateur Vision par Ordinateur" },
  "hero.role5": { en: "NLP Practitioner", fr: "Praticien NLP" },
  "hero.comment1": { en: "# Building end-to-end intelligent systems", fr: "# Construction de systèmes intelligents de bout en bout" },
  "hero.comment2": { en: "# From research-grade AI → production pipelines", fr: "# De la recherche IA → pipelines de production" },
  "hero.focus": { en: '"AI/ML, Computer Vision, NLP"', fr: '"IA/ML, Vision par Ordinateur, NLP"' },
  "hero.stack": { en: '"PyTorch, Kafka, FastAPI, React"', fr: '"PyTorch, Kafka, FastAPI, React"' },
  "hero.status": { en: '"Shipping products, not notebooks"', fr: '"Des produits livrés, pas des notebooks"' },
  "hero.scroll": { en: "scroll to explore", fr: "défiler pour explorer" },

  // About
  "about.section": { en: "section::about", fr: "section::profil" },
  "about.cmd": { en: "cat", fr: "cat" },
  "about.p1": {
    en: "Master's student in <accent>AI & Information Systems</accent> (Excellence Track — SIIA) specialized in designing end-to-end intelligent systems — from AI research (<cyan>PyTorch, YOLOv8, HuggingFace</cyan>) to production engineering (<cyan>Kafka pipelines, FastAPI microservices, Docker</cyan>).",
    fr: "Étudiant en Master <accent>IA & Systèmes d'Information</accent> (Filière Excellence — SIIA) spécialisé dans la conception de systèmes intelligents de bout en bout — de la recherche IA (<cyan>PyTorch, YOLOv8, HuggingFace</cyan>) à l'ingénierie de production (<cyan>pipelines Kafka, microservices FastAPI, Docker</cyan>).",
  },
  "about.p2": {
    en: "<amber>4</amber> production-delivered projects spanning real-time SIEM alert classification, automated facial recognition, NLP sentiment analysis, and a real-estate recommendation engine — each shipped as a <accent>working product</accent>, not just a notebook.",
    fr: "<amber>4</amber> projets livrés en production couvrant la classification d'alertes SIEM en temps réel, la reconnaissance faciale, l'analyse de sentiments NLP et un moteur de recommandation immobilière — chaque projet livré comme un <accent>produit fonctionnel</accent>, pas un simple notebook.",
  },
  "about.status": {
    en: "Actively seeking AI Engineering / Data Engineering internship",
    fr: "En recherche active d'un stage en Ingénierie IA / Data Engineering",
  },

  // Skills
  "skills.section": { en: "section::skills", fr: "section::compétences" },

  // Projects
  "projects.section": { en: "section::projects", fr: "section::projets" },

  // Timeline
  "timeline.section": { en: "section::timeline", fr: "section::parcours" },

  // Contact
  "contact.section": { en: "section::connect", fr: "section::contact" },
  "contact.desc": {
    en: "Execute a command below to reach me. Each action simulates a real terminal workflow before connecting you.",
    fr: "Exécutez une commande ci-dessous pour me contacter. Chaque action simule un flux terminal avant de vous connecter.",
  },
  "terminal.welcome": { en: "Welcome to yahya_bouchak.terminal v2.1.0", fr: "Bienvenue sur yahya_bouchak.terminal v2.1.0" },
  "terminal.hint": { en: "Type a command or click an action below.", fr: "Tapez une commande ou cliquez sur une action ci-dessous." },

  // Footer
  "footer.text": { en: "© 2025 Yahya Bouchak — ", fr: "© 2025 Yahya Bouchak — " },
};
