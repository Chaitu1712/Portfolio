"use client";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaJava, FaDatabase, FaBrain } from "react-icons/fa";
import { SiPython, SiTypescript, SiFastapi, SiSpringboot, SiReact, SiNextdotjs, SiPytorch, SiTensorflow, SiPostgresql, SiMongodb, SiCplusplus } from "react-icons/si";
import { Mail, MapPin, Terminal, Network, Download, GraduationCap, Zap, TrendingUp } from "lucide-react";
import ThemeToggle from "@/components/ThemeToggle";
import ProjectCard from "@/components/ProjectCard";
import NetworkBackground from "@/components/NetworkBackground";

export default function Home() {

  const getIcon = (tech) => {
    const iconProps = { size: 14, className: "inline" };
    switch (tech.toLowerCase()) {
      case "python": return <SiPython {...iconProps} />;
      case "java": return <FaJava {...iconProps} />;
      case "typescript": return <SiTypescript {...iconProps} />;
      case "fastapi": return <SiFastapi {...iconProps} />;
      case "spring boot": return <SiSpringboot {...iconProps} />;
      case "react": return <SiReact {...iconProps} />;
      case "next.js": return <SiNextdotjs {...iconProps} />;
      case "pytorch": return <SiPytorch {...iconProps} />;
      case "tensorflow": return <SiTensorflow {...iconProps} />;
      case "postgresql": return <SiPostgresql {...iconProps} />;
      case "mongodb": return <SiMongodb {...iconProps} />;
      case "llama.cpp": return <SiCplusplus {...iconProps} />;
      case "chromadb":
      case "faiss": return <FaDatabase {...iconProps} />;
      case "tree-sitter": return <Network {...iconProps} />;
      case "llms":
      case "rag systems": return <FaBrain {...iconProps} />;
      default: return null;
    }
  };

 const projects = [
    {
      title: "Code Atlas — AI Codebase Visualizer",
      description: "Engineered a multi-language parsing engine using Tree-sitter and NetworkX for AST-driven dependency graphs. Implemented a hybrid RAG pipeline using FAISS to enable semantic code search.",
      tech: ["FastAPI", "React", "Tree-sitter", "FAISS", "Llama.cpp"],
      githubLink: "https://github.com/Chaitu1712/Code_Converter",
      deploymentLink: "https://code-atlas-eight.vercel.app/"
    },
    {
      title: "Nutri-Verify — Food Label Forensics",
      description: "Developed a multimodal AI pipeline combining computer vision, RAG, and local LLM inference to audit food labels against FSSAI standards. Built domain-specific retrieval using ChromaDB.",
      tech: ["Python", "ChromaDB", "Sentence-Transformers", "Gemini API"],
      githubLink: "https://github.com/Chaitu1712/nutri-verify",
      deploymentLink: "https://chaitu1712-nutri-verify.hf.space/"
    },
    {
      title: "EL-GAN — Low-Light Enhancement",
      description: "Engineered a lightweight GAN for low-light enhancement achieving PSNR 18.56 on the LOL benchmark. Built a RAW image processing pipeline for high-exposure amplification.",
      tech: ["PyTorch", "Torchvision", "rawpy", "Python"],
      githubLink: "https://github.com/Chaitu1712/Low-Light-Enhancement",
      deploymentLink: ""
    },
    {
      title: "AI-QKD Privacy Simulator",
      description: "Implemented the BB84 Quantum Key Distribution protocol with noise modeling and intercept-resend attack detection. Integrated differential privacy mechanisms via Diffprivlib.",
      tech: ["TensorFlow", "Scikit-Learn", "Diffprivlib"],
      githubLink: "https://github.com/Chaitu1712/AI-QKD-Privacy-simulator",
      deploymentLink: ""
    },
    {
      title: "Code Converter — Translation Platform",
      description: "Architected a decoupled microservices system enabling bidirectional Java ↔ Python code translation. Integrated Gemini-based inference for syntactically accurate conversions.",
      tech: ["Spring Boot", "Next.js", "Flask", "Microservices"],
      githubLink: "https://github.com/Chaitu1712/Code_Converter",
      deploymentLink: "https://code-converter-dun.vercel.app/"
    }
  ];

  const skills = [
    "Python", "Java", "TypeScript", "FastAPI", "Spring Boot", 
    "React", "Next.js", "PyTorch", "TensorFlow", "LLMs", "RAG Systems", 
    "FAISS", "PostgreSQL", "MongoDB", "Microservices"
  ];

  return (

    <main className="min-h-screen selection:bg-blue-200 dark:selection:bg-blue-900 selection:text-blue-900 dark:selection:text-white relative">
      
      {/* 1. D3 Interactive Background*/}
      <NetworkBackground />

      <nav className="sticky top-0 z-50 backdrop-blur-xl bg-white/60 dark:bg-[#09090b]/60 border-b border-gray-200/50 dark:border-zinc-800/50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="font-extrabold text-2xl tracking-tighter flex items-center gap-2">
            <Terminal size={24} className="text-blue-600" />
            <span>CP.</span>
          </div>
          <div className="flex items-center gap-4 md:gap-6">
            <a href="https://github.com/Chaitu1712" target="_blank" rel="noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              <FaGithub size={22} />
            </a>
            <a href="https://www.linkedin.com/in/chaitanyapandey1712" target="_blank" rel="noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              <FaLinkedin size={22} />
            </a>
            <ThemeToggle />
          </div>
        </div>
      </nav>

      <section className="max-w-6xl mx-auto px-6 pt-32 pb-20 md:pt-40 md:pb-32 relative z-10">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400 font-semibold mb-6 tracking-wide uppercase text-sm">
            <MapPin size={16} /> Dehradun, India
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8 text-gray-900 dark:text-white leading-[1.1]">
            Architecting <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">Intelligent</span> <br /> Systems & Backend.
          </h1>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mb-10 leading-relaxed backdrop-blur-sm bg-white/30 dark:bg-zinc-900/30 p-2 rounded-lg">
            Hi, I'm <span className="font-bold text-gray-900 dark:text-gray-200">Chaitanya Pandey</span>. A Computer Science undergrad at VIT Vellore specializing in RAG architectures, local LLM inference, AST parsing, and distributed microservices.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <a href="#projects" className="px-8 py-3.5 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-xl transition-all shadow-lg shadow-blue-600/20 active:scale-95">
              View Projects
            </a>
             <a href="/Chaitanya_Pandey_Resume.pdf" download="Chaitanya_Pandey_Resume.pdf" className="px-8 py-3.5 border border-blue-600 text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 backdrop-blur-md font-medium rounded-xl transition-all flex items-center gap-2 active:scale-95">
              <Download size={18} /> Resume
            </a>
            <a href="mailto:chaitanyapandey62@gmail.com" className="px-8 py-3.5 border border-gray-300 dark:border-zinc-700 hover:bg-gray-100 dark:hover:bg-zinc-800 backdrop-blur-md text-gray-900 dark:text-white font-medium rounded-xl transition-all flex items-center gap-2 active:scale-95">
              <Mail size={18} /> Contact Me
            </a>
          </div>
        </motion.div>
      </section>

      <section className="border-y border-gray-200/50 dark:border-zinc-800/50 bg-white/70 dark:bg-[#121214]/70 backdrop-blur-md py-12 relative z-10">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-sm font-semibold text-gray-500 uppercase tracking-widest mb-6 text-center">Core Technical Stack</p>
          <div className="flex flex-wrap justify-center gap-3">
            {skills.map((skill, idx) => (
              <motion.span 
                key={idx}
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-2 px-4 py-2 bg-white/80 dark:bg-zinc-800/80 text-gray-800 dark:text-gray-300 rounded-full text-sm font-medium border border-gray-200 dark:border-zinc-700 shadow-sm"
              >
                {getIcon(skill)}
                {skill}
              </motion.span>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-24">
        <div>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12 flex items-center gap-3">
            Experience
          </h2>
          <div className="space-y-12 border-l-2 border-gray-200 dark:border-zinc-800 ml-4 pl-8 relative">
            {/* Tata Motors */}
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="relative">
              <div className="absolute -left-[41px] top-1.5 h-4 w-4 rounded-full bg-blue-600 ring-4 ring-gray-50 dark:ring-[#09090b]" />
              <span className="text-sm text-blue-600 dark:text-blue-400 font-bold tracking-wider uppercase">May 2025 – June 2025</span>
              <h3 className="text-2xl font-bold mt-2 text-gray-900 dark:text-white">Tata Motors Limited</h3>
              <p className="text-lg font-medium text-gray-700 dark:text-gray-300 mb-4">Engineering Intern (Digital Safety)</p>
              <ul className="list-disc list-outside ml-4 space-y-2 text-gray-600 dark:text-gray-400 leading-relaxed bg-white/40 dark:bg-zinc-900/40 backdrop-blur-sm p-4 rounded-xl border border-gray-100 dark:border-zinc-800/50">
                <li>Built a real-time safety analytics dashboard aggregating and visualizing operational incident data.</li>
                <li>Automated ingestion and reporting pipelines, reducing manual reporting overhead across multi-source logs.</li>
              </ul>
            </motion.div>

            {/* Scalability Engineering */}
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="relative">
              <div className="absolute -left-[41px] top-1.5 h-4 w-4 rounded-full bg-zinc-400 dark:bg-zinc-600 ring-4 ring-gray-50 dark:ring-[#09090b]" />
              <span className="text-sm text-gray-500 dark:text-gray-400 font-bold tracking-wider uppercase">June 2024 – July 2024</span>
              <h3 className="text-2xl font-bold mt-2 text-gray-900 dark:text-white">Scalability Engineering</h3>
              <p className="text-lg font-medium text-gray-700 dark:text-gray-300 mb-4">Database Engineering Intern</p>
              <ul className="list-disc list-outside ml-4 space-y-2 text-gray-600 dark:text-gray-400 leading-relaxed bg-white/40 dark:bg-zinc-900/40 backdrop-blur-sm p-4 rounded-xl border border-gray-100 dark:border-zinc-800/50">
                <li>Optimized Microsoft SQL Server queries through indexing and restructuring, reducing execution time by ~40%.</li>
                <li>Redesigned database schemas to improve scalability, consistency, and production data integrity.</li>
              </ul>
            </motion.div>
          </div>
        </div>

         <div>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12 flex items-center gap-3">
            Education
          </h2>
          <motion.div 
            initial={{ opacity: 0, x: 20 }} 
            whileInView={{ opacity: 1, x: 0 }} 
            viewport={{ once: true }} 
            className="p-8 rounded-3xl bg-white/70 dark:bg-[#18181b]/70 backdrop-blur-xl border border-gray-200/50 dark:border-zinc-800/50 shadow-sm relative overflow-hidden"
          >
            {/* Decorative background blur for education card */}
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-blue-500/20 rounded-full blur-3xl"></div>
            
            <GraduationCap className="text-blue-600 dark:text-blue-400 mb-6" size={40} />
            
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Vellore Institute of Technology (VIT)</h3>
            <p className="text-lg text-blue-600 dark:text-blue-400 font-medium mb-6">B.Tech in Computer Science & Engineering</p>
            
            <div className="flex flex-col gap-3">
              <div className="flex justify-between items-center py-3 border-b border-gray-200 dark:border-zinc-700/50">
                <span className="text-gray-600 dark:text-gray-400 font-medium">Timeline</span>
                <span className="text-gray-900 dark:text-gray-200 font-semibold">2022 – 2026</span>
              </div>
              <div className="flex justify-between items-center py-3 border-b border-gray-200 dark:border-zinc-700/50">
                <span className="text-gray-600 dark:text-gray-400 font-medium">Current CGPA</span>
                <span className="text-gray-900 dark:text-gray-200 font-bold bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-400 px-3 py-1 rounded-lg">7.9 / 10</span>
              </div>
              <div className="flex justify-between items-center py-3">
                <span className="text-gray-600 dark:text-gray-400 font-medium">Location</span>
                <span className="text-gray-900 dark:text-gray-200 font-semibold">Vellore, India</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="projects" className="bg-gray-100/40 dark:bg-[#121214]/40 backdrop-blur-md py-24 relative z-10 border-t border-gray-200/50 dark:border-zinc-800/50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-12">
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((proj, idx) => (
              <ProjectCard key={idx} {...proj} getIcon={getIcon} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}