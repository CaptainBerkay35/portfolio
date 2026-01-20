import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaTimes, FaGithub, FaExternalLinkAlt, FaChevronRight, FaChevronLeft } from "react-icons/fa";

const ProjectModal = ({ selectedProject, onClose }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Modal açıldığında index'i sıfırla ve scroll'u kilitle
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = "hidden";
      setCurrentImageIndex(0);
    } else {
      document.body.style.overflow = "auto";
    }
  }, [selectedProject]);

  if (!selectedProject) return null;

  // Projenin görselleri (Eğer veri tabanında yoksa, placeholder üretelim)
  // Normalde burası project.images array'inden gelir.
  const images = selectedProject.images || [
    selectedProject.image, // Ana resim
    "linear-gradient(to bottom, #18181b, #09090b)", // Örnek 2
    "linear-gradient(to top right, #27272a, #3f3f46)" // Örnek 3
  ];

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <AnimatePresence>
      {selectedProject && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/90 backdrop-blur-md z-[90]"
          />

          {/* Modal Container */}
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6 pointer-events-none">
            
            <motion.div
              layoutId={`card-${selectedProject.id}`}
              className="w-full max-w-5xl bg-white dark:bg-zinc-950 rounded-2xl overflow-hidden shadow-2xl relative flex flex-col pointer-events-auto max-h-[90vh] border border-gray-200 dark:border-gray-800"
            >
              
              {/* Kapat Butonu */}
              <button 
                onClick={onClose}
                className="absolute top-4 right-4 z-30 w-10 h-10 bg-black/50 hover:bg-black/80 text-white rounded-full flex items-center justify-center transition-colors backdrop-blur-md border border-white/10"
              >
                <FaTimes />
              </button>

              {/* --- IMAGE SLIDER ALANI --- */}
              <div className="h-[45vh] w-full relative flex-shrink-0 bg-zinc-900 group">
                 
                 {/* Resim */}
                 <div className="absolute inset-0 w-full h-full transition-all duration-500" 
                      style={{ background: images[currentImageIndex] }} 
                 />
                 
                 {/* Overlay Gradient */}
                 <div className="absolute inset-0 bg-gradient-to-t from-white dark:from-zinc-950 via-transparent to-transparent opacity-100" />
                 
                 {/* Slider Kontrolleri */}
                 {images.length > 1 && (
                    <>
                        <button onClick={prevImage} className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-black/30 hover:bg-black/60 text-white rounded-full backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity">
                            <FaChevronLeft />
                        </button>
                        <button onClick={nextImage} className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-black/30 hover:bg-black/60 text-white rounded-full backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity">
                            <FaChevronRight />
                        </button>
                        
                        {/* Dots */}
                        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                            {images.map((_, idx) => (
                                <div 
                                    key={idx} 
                                    className={`w-2 h-2 rounded-full transition-all ${idx === currentImageIndex ? "bg-white w-4" : "bg-white/40"}`} 
                                />
                            ))}
                        </div>
                    </>
                 )}

                 {/* Başlık ve Kategori (Slider Üzerinde Sabit) */}
                 <div className="absolute bottom-0 left-0 w-full p-8 md:p-10">
                    <motion.h2 
                        layoutId={`title-${selectedProject.id}`}
                        className="text-4xl md:text-5xl font-heading font-bold text-gray-900 dark:text-white mb-2 drop-shadow-sm"
                    >
                        {selectedProject.title}
                    </motion.h2>
                    <span className="inline-block px-3 py-1 bg-blue-600/10 dark:bg-white/10 text-blue-600 dark:text-white rounded-md text-sm font-medium backdrop-blur-sm border border-blue-600/20 dark:border-white/10">
                        {selectedProject.category}
                    </span>
                 </div>
              </div>

              {/* --- İÇERİK ALANI (SCROLLABLE) --- */}
              <div className="flex-1 overflow-y-auto p-8 md:p-10 bg-white dark:bg-zinc-950">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                      
                      {/* Sol: Açıklama */}
                      <div className="md:col-span-2 space-y-8">
                          <div>
                            <h4 className="text-sm font-bold text-gray-400 dark:text-gray-500 uppercase tracking-widest mb-3">Genel Bakış</h4>
                            <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg font-light">
                                {selectedProject.description}
                            </p>
                          </div>
                          
                          <div>
                            <h4 className="text-sm font-bold text-gray-400 dark:text-gray-500 uppercase tracking-widest mb-3">Zorluklar ve Çözümler</h4>
                            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                                Bu projede özellikle performans optimizasyonu ve state yönetimi konusunda ciddi çalışmalar yapıldı. Kullanıcı deneyimini artırmak için animasyonlar optimize edildi ve load time %30 düşürüldü.
                            </p>
                          </div>
                      </div>

                      {/* Sağ: Teknik & Linkler */}
                      <div className="space-y-8">
                          
                          {/* Teknolojiler */}
                          <div className="bg-gray-50 dark:bg-zinc-900/50 p-6 rounded-2xl border border-gray-100 dark:border-zinc-800">
                              <h4 className="text-xs font-bold text-gray-900 dark:text-white uppercase tracking-widest mb-4">
                                  Teknolojiler
                              </h4>
                              <div className="flex flex-wrap gap-2">
                                  {selectedProject.tech.map(t => (
                                      <span key={t} className="px-3 py-1 bg-white dark:bg-zinc-800 text-gray-700 dark:text-gray-300 rounded-md text-sm font-medium border border-gray-200 dark:border-zinc-700 shadow-sm">
                                          {t}
                                      </span>
                                  ))}
                              </div>
                          </div>

                          {/* Linkler */}
                          <div className="flex flex-col gap-3">
                              <a href="#" className="flex items-center justify-between w-full px-5 py-4 bg-gray-900 dark:bg-white text-white dark:text-black rounded-xl font-medium hover:scale-[1.02] active:scale-95 transition-all shadow-lg">
                                  <span>Projeyi İncele</span>
                                  <FaExternalLinkAlt />
                              </a>
                              <a href="#" className="flex items-center justify-between w-full px-5 py-4 bg-gray-100 dark:bg-zinc-900 text-gray-900 dark:text-white rounded-xl font-medium hover:bg-gray-200 dark:hover:bg-zinc-800 transition-colors border border-gray-200 dark:border-zinc-800">
                                  <span>Github Repo</span>
                                  <FaGithub />
                              </a>
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