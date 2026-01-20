import { useState } from "react";
import { motion } from "framer-motion";
import { FaArrowRight, FaMapMarkerAlt, FaGlobeEurope } from "react-icons/fa";
import ProjectModal from "../ui/ProjectModal"; 

// --- VERİLER ---
const PROJECTS = [
  {
    id: 1,
    title: "E-Ticaret Dashboard",
    category: "Dashboard",
    gridClass: "col-span-1 md:col-span-2 md:row-span-2", 
    image: "linear-gradient(to bottom right, #18181b, #27272a)",
    description: "Satış analizleri, stok takibi ve kullanıcı yönetimi sağlayan kapsamlı panel. Recharts ile veri görselleştirme.",
    tech: ["Next.js", "Supabase", "Recharts"]
  },
  {
    id: 2,
    title: "Finans Asistanı",
    category: "Mobile App",
    gridClass: "col-span-1 md:col-span-1 md:row-span-2",
    image: "linear-gradient(to bottom, #09090b, #18181b)",
    description: "Kişisel harcamaları yapay zeka ile analiz eden mobil uyumlu uygulama.",
    tech: ["React Native", "Firebase", "AI"]
  },
  {
    id: 3,
    title: "Portfolio V1",
    category: "Web Design",
    gridClass: "col-span-1 md:col-span-1 md:row-span-1", 
    image: "linear-gradient(to top right, #27272a, #3f3f46)",
    description: "Minimalist tasarım anlayışı ile oluşturulan ilk portfolyo.",
    tech: ["HTML/SCSS", "JS"]
  },
  {
    id: 4,
    title: "AI Chatbot",
    category: "AI Tool",
    gridClass: "col-span-1 md:col-span-2 md:row-span-1", 
    image: "linear-gradient(to right, #000000, #18181b)",
    description: "PDF okuyabilen ve bağlamı hatırlayan akıllı asistan.",
    tech: ["OpenAI", "Python"]
  },
  {
    id: 5,
    title: "Travel Map",
    category: "Interactive",
    gridClass: "col-span-1 md:col-span-1 md:row-span-1", 
    image: "linear-gradient(to bottom left, #18181b, #09090b)",
    description: "Gezginler için harita bazlı blog.",
    tech: ["Mapbox", "React"]
  },
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projeler" className="py-32 bg-white dark:bg-brand-black transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Başlık */}
        <div className="mb-20 flex flex-col md:flex-row items-end justify-between gap-6 border-b border-gray-200 dark:border-gray-800 pb-8">
          <div>
            <span className="text-sm font-bold text-gray-500 dark:text-gray-400 tracking-widest uppercase">Portfolio</span>
            <h2 className="text-4xl md:text-6xl font-heading font-bold text-gray-900 dark:text-brand-white mt-2 tracking-tighter">
              Selected Works
            </h2>
          </div>
          <p className="max-w-md text-gray-600 dark:text-gray-400 text-right md:text-left">
            Grid yapısında gezinerek detayları keşfedin.
          </p>
        </div>

        {/* --- GRID (BİTİŞİK & MASONRY) --- */}
        <div className="grid grid-cols-1 md:grid-cols-4 auto-rows-[280px] border-t border-l border-gray-200 dark:border-gray-800">
          
          <ProjectCard project={PROJECTS[0]} onClick={() => setSelectedProject(PROJECTS[0])} />
          <ProjectCard project={PROJECTS[1]} onClick={() => setSelectedProject(PROJECTS[1])} />
          <ProjectCard project={PROJECTS[2]} onClick={() => setSelectedProject(PROJECTS[2])} />

          {/* --- FILLER CARD: LOCATION & AVAILABILITY --- */}
          {/* Spotify yerine bu kart geldi */}
          <div className="col-span-1 md:col-span-1 md:row-span-1 border-b border-r border-gray-200 dark:border-gray-800 bg-blue-50/50 dark:bg-blue-900/10 relative group overflow-hidden flex flex-col justify-between p-6">
              
              {/* Arka Plan Efekti (Dünya Haritası Hissi) */}
              <div className="absolute inset-0 opacity-20 dark:opacity-10 pointer-events-none">
                 <FaGlobeEurope className="absolute -right-10 -bottom-10 text-[180px] text-blue-500 transform rotate-12" />
              </div>

              {/* Üst Kısım: Status */}
              <div className="relative z-10 flex justify-between items-start">
                  <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-white/50 dark:bg-white/10 backdrop-blur-md border border-gray-200 dark:border-white/10">
                      <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                      </span>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-gray-600 dark:text-gray-300">Available</span>
                  </div>
              </div>

              {/* Alt Kısım: Lokasyon */}
              <div className="relative z-10">
                  <p className="text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wider mb-1">Based In</p>
                  <div className="flex items-center gap-2">
                      <FaMapMarkerAlt className="text-gray-400 dark:text-gray-500" />
                      <h4 className="text-lg font-bold text-gray-900 dark:text-white leading-tight">İstanbul, TR</h4>
                  </div>
                  <p className="text-xs text-gray-500 mt-1">UTC+3 • Local Time</p>
              </div>
          </div>

          <ProjectCard project={PROJECTS[3]} onClick={() => setSelectedProject(PROJECTS[3])} />
          <ProjectCard project={PROJECTS[4]} onClick={() => setSelectedProject(PROJECTS[4])} />

        </div>

        {/* --- MODAL --- */}
        <ProjectModal 
          selectedProject={selectedProject} 
          onClose={() => setSelectedProject(null)} 
        />

      </div>
    </section>
  );
};

// --- PROJE KARTI ---
const ProjectCard = ({ project, onClick }) => {
  return (
    <motion.div
      layoutId={`card-${project.id}`}
      onClick={onClick}
      className={`relative group cursor-pointer border-b border-r border-gray-200 dark:border-gray-800 overflow-hidden bg-gray-50 dark:bg-zinc-900/50 ${project.gridClass}`}
    >
      {/* Arka Plan */}
      <div 
        className="absolute inset-0 transition-transform duration-700 group-hover:scale-105"
        style={{ background: project.image }}
      />
      
      {/* İçerik Katmanı */}
      <div className="absolute inset-0 p-8 flex flex-col justify-between">
        
        {/* Üst Kısım */}
        <div className="flex justify-between items-start opacity-70 group-hover:opacity-100 transition-opacity">
          <span className="text-xs font-mono text-white/60 border border-white/20 px-2 py-1 rounded-full backdrop-blur-sm">
            {project.category}
          </span>
          <div className="bg-white/10 p-2 rounded-full backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
            <FaArrowRight className="text-white text-sm" />
          </div>
        </div>

        {/* Alt Kısım: Başlık ve Açıklama */}
        <div>
          <motion.h3 
            layoutId={`title-${project.id}`}
            className="text-2xl md:text-3xl font-heading font-bold text-white leading-tight drop-shadow-md"
          >
            {project.title}
          </motion.h3>

          {/* --- GERİ EKLENEN KISIM: HOVER AÇIKLAMASI --- */}
          <p className="text-gray-300 text-sm mt-3 line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform translate-y-4 group-hover:translate-y-0 ease-out">
             {project.description}
          </p>

        </div>
      </div>
      
      {/* Parlama Efekti */}
      <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
    </motion.div>
  );
};

export default Projects;