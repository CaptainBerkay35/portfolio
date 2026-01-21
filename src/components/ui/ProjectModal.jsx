import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaTimes, FaGithub, FaExternalLinkAlt, FaChevronRight, FaChevronLeft } from "react-icons/fa";

const ProjectModal = ({ selectedProject, onClose }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = "hidden";
      setCurrentImageIndex(0);
    } else {
      document.body.style.overflow = "auto";
    }
  }, [selectedProject]);

  if (!selectedProject) return null;

  // Resim listesi kontrolü
  const projectImages = selectedProject.images && selectedProject.images.length > 0 
    ? selectedProject.images 
    : [selectedProject.image];

  const nextImage = () => setCurrentImageIndex((prev) => (prev + 1) % projectImages.length);
  const prevImage = () => setCurrentImageIndex((prev) => (prev - 1 + projectImages.length) % projectImages.length);

  return (
    <AnimatePresence>
      {selectedProject && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/95 backdrop-blur-xl z-[90]"
          />

          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6 pointer-events-none">
            <motion.div
              layoutId={`card-${selectedProject.id}`}
              className="w-full max-w-5xl bg-white dark:bg-zinc-950 rounded-2xl overflow-hidden shadow-2xl relative flex flex-col pointer-events-auto max-h-[90vh] border border-gray-200 dark:border-gray-800"
            >
              {/* Kapat Butonu */}
              <button onClick={onClose} className="absolute top-4 right-4 z-30 w-10 h-10 bg-black/50 hover:bg-black/80 text-white rounded-full flex items-center justify-center transition-colors backdrop-blur-md border border-white/10">
                <FaTimes />
              </button>

              {/* --- IMAGE SLIDER --- */}
              <div className="h-[45vh] w-full relative flex-shrink-0 bg-zinc-900 group">
                <motion.div 
                  key={currentImageIndex}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="absolute inset-0 w-full h-full" 
                  style={{ 
                    background: projectImages[currentImageIndex].startsWith("/") 
                      ? `url(${projectImages[currentImageIndex]}) center/cover no-repeat` 
                      : projectImages[currentImageIndex] 
                  }} 
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-white dark:from-zinc-950 via-transparent to-transparent opacity-100" />
                
                {projectImages.length > 1 && (
                  <>
                    <button onClick={prevImage} className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-black/30 hover:bg-black/60 text-white rounded-full backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity">
                      <FaChevronLeft />
                    </button>
                    <button onClick={nextImage} className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-black/30 hover:bg-black/60 text-white rounded-full backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity">
                      <FaChevronRight />
                    </button>
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                      {projectImages.map((_, idx) => (
                        <div key={idx} className={`w-2 h-2 rounded-full transition-all ${idx === currentImageIndex ? "bg-white w-4" : "bg-white/40"}`} />
                      ))}
                    </div>
                  </>
                )}

                <div className="absolute bottom-0 left-0 w-full p-8 md:p-10 z-20">
                  <motion.h2 
                    layoutId={`title-${selectedProject.id}`} 
                    className="text-4xl md:text-5xl font-heading font-bold text-gray-900 dark:text-white mb-3 tracking-tighter"
                  >
                    {selectedProject.title}
                  </motion.h2>
                  <span className="inline-block px-3 py-1.5 bg-zinc-900 dark:bg-white text-white dark:text-black rounded-lg text-xs font-semibold backdrop-blur-md uppercase tracking-widest">
                    {selectedProject.category}
                  </span>
                </div>
              </div>

              {/* --- İÇERİK ALANI --- */}
              <div className="flex-1 overflow-y-auto p-8 md:p-10 bg-white dark:bg-zinc-950 scrollbar-hide">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                  
                  {/* Sol: Detaylı Açıklama (Zorluklar buraya dahil edilebilir) */}
                  <div className="md:col-span-2 space-y-6">
                      <h4 className="text-xs font-bold text-gray-400 dark:text-gray-500 uppercase tracking-[0.2em]">Proje Hakkında</h4>
                      <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg font-light whitespace-pre-line">
                        {selectedProject.description}
                      </p>
                  </div>

                  {/* Sağ: Teknik Detaylar & Linkler */}
                  <div className="space-y-8">
                    <div className="bg-gray-50 dark:bg-zinc-900/50 p-6 rounded-2xl border border-gray-100 dark:border-zinc-800">
                      <h4 className="text-[10px] font-bold text-gray-900 dark:text-white uppercase tracking-[0.2em] mb-5">Teknoloji Stack</h4>
                      <div className="flex flex-wrap gap-2">
                        {selectedProject.tech.map(t => (
                          <span key={t} className="px-3 py-1 bg-white dark:bg-zinc-800 text-gray-700 dark:text-gray-300 rounded-md text-xs font-bold border border-gray-200 dark:border-zinc-700 uppercase">
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex flex-col gap-3">
                      {selectedProject.links?.demo && (
                        <a href={selectedProject.links.demo} target="_blank" rel="noreferrer" className="flex items-center justify-between w-full px-5 py-4 bg-zinc-900 dark:bg-white text-white dark:text-black rounded-xl font-bold hover:scale-[1.02] active:scale-95 transition-all shadow-lg uppercase text-xs tracking-widest">
                          <span>Live Demo</span>
                          <FaExternalLinkAlt />
                        </a>
                      )}
                      {selectedProject.links?.github && (
                        <a href={selectedProject.links.github} target="_blank" rel="noreferrer" className="flex items-center justify-between w-full px-5 py-4 bg-gray-100 dark:bg-zinc-900 text-gray-900 dark:text-white rounded-xl font-bold hover:bg-gray-200 dark:hover:bg-zinc-800 transition-colors border border-gray-200 dark:border-zinc-800 uppercase text-xs tracking-widest">
                          <span>Source Code</span>
                          <FaGithub />
                        </a>
                      )}
                    </div>
                  </div>

                </div>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
};

export default ProjectModal;