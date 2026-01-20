import { motion, useScroll, useTransform } from 'framer-motion';
import { FaHome, FaBriefcase, FaCode, FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';

const SplitHeader = () => {
  const { scrollY } = useScroll();

  // --- ANİMASYON AYARLARI ---
  const moveLeft = useTransform(scrollY, [0, 300], ["0%", "-90%"]); 
  const moveRight = useTransform(scrollY, [0, 300], ["0%", "90%"]);
  
  const mainContentOpacity = useTransform(scrollY, [0, 200], [1, 0]);
  const iconOpacity = useTransform(scrollY, [220, 300], [0, 1]);
  const iconPointerEvents = useTransform(scrollY, (y) => y < 220 ? "none" : "auto");

  // Smooth Scroll Fonksiyonu
  const handleScrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="fixed top-0 left-0 w-full h-screen z-50 flex pointer-events-none">
      
      {/* --- SOL PANEL --- */}
      <motion.div 
        style={{ x: moveLeft }} 
        className="w-1/2 h-full bg-gray-50 dark:bg-brand-dark border-r border-gray-200 dark:border-brand-gray flex items-center justify-center pointer-events-auto relative transition-colors duration-500"
      >
        {/* BÜYÜK İÇERİK (Sola Kaybolan) */}
        <motion.div 
           style={{ opacity: mainContentOpacity }}
           className="text-center min-w-[300px]"
        >
           <h1 className="text-4xl md:text-6xl font-heading font-bold text-gray-900 dark:text-brand-white tracking-tighter transition-colors duration-500">
           BERKAY<span className="text-gray-400 dark:text-gray-600">.</span>DEV
           </h1>
           <p className="mt-4 text-gray-600 dark:text-brand-muted text-sm md:text-base font-sans transition-colors duration-500">
           Frontend Developer & UI Designer
           </p>
        </motion.div>

        {/* SIDEBAR SOSYAL İKONLARI (SOL TARAFTAKİLER) */}
        <motion.div 
            style={{ opacity: iconOpacity, pointerEvents: iconPointerEvents }}
            className="absolute right-0 top-0 h-full w-[10%] min-w-[60px] flex flex-col items-center justify-center gap-6 border-l border-gray-200 dark:border-brand-gray/20 transition-colors duration-500 bg-gray-50 dark:bg-brand-dark"
        >
             <span className="font-heading font-bold text-gray-900 dark:text-brand-white mb-4 border-b border-gray-200 dark:border-brand-gray pb-4 transition-colors duration-500">B.</span>
             {/* Rengi Gri -> Siyah/Beyaz yaptık */}
             <a href="https://github.com" target="_blank" rel="noreferrer" className="text-2xl text-gray-400 hover:text-gray-900 dark:text-gray-600 dark:hover:text-white transition-colors duration-300"><FaGithub /></a>
             <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="text-2xl text-gray-400 hover:text-gray-900 dark:text-gray-600 dark:hover:text-white transition-colors duration-300"><FaLinkedin /></a>
        </motion.div>

      </motion.div>

      {/* --- SAĞ PANEL --- */}
      <motion.div 
        style={{ x: moveRight }} 
        className="w-1/2 h-full bg-gray-50 dark:bg-brand-dark border-l border-gray-200 dark:border-brand-gray flex items-center justify-center pointer-events-auto relative transition-colors duration-500"
      >
        {/* BÜYÜK NAVİGASYON (Sağa Kaybolan) */}
        <motion.div 
           style={{ opacity: mainContentOpacity }}
           className="min-w-[300px] text-center"
        >
           <nav className="flex flex-col gap-6 text-xl md:text-3xl font-heading font-bold text-gray-400 dark:text-zinc-600 text-center transition-colors duration-500">
               <button onClick={() => handleScrollTo('hero')} className="hover:text-gray-900 dark:hover:text-white transition-colors duration-300">Hakkımda</button>
               <button onClick={() => handleScrollTo('tecrube')} className="hover:text-gray-900 dark:hover:text-white transition-colors duration-300">Tecrübe</button>
               <button onClick={() => handleScrollTo('projeler')} className="hover:text-gray-900 dark:hover:text-white transition-colors duration-300">Projeler</button>
               <button onClick={() => handleScrollTo('iletisim')} className="hover:text-gray-900 dark:hover:text-white transition-colors duration-300">İletişim</button>
           </nav>
        </motion.div>

        {/* --- DÜZELTİLEN KISIM: SAĞ SIDEBAR NAVİGASYON İKONLARI --- */}
        <motion.div 
            style={{ opacity: iconOpacity, pointerEvents: iconPointerEvents }}
            className="absolute left-0 top-0 h-full w-[10%] min-w-[60px] flex flex-col items-center justify-center gap-10 border-r border-gray-200 dark:border-brand-gray/20 transition-colors duration-500 bg-gray-50 dark:bg-brand-dark"
        >
            {/* Ortak Button Stili: Maviler gitti, Gri/Siyah/Beyaz geldi */}
            
            {/* HOME ICON */}
            <button onClick={() => handleScrollTo('hero')} className="text-xl text-gray-400 dark:text-gray-600 hover:text-gray-900 dark:hover:text-white transition-colors duration-300 group relative flex items-center">
                <FaHome />
                {/* Tooltip: Yazı rengi Siyah/Beyaz yapıldı + Kayma animasyonu eklendi */}
                <span className="absolute right-full mr-6 opacity-0 group-hover:opacity-100 group-hover:mr-4 transition-all duration-300 text-[10px] font-bold uppercase tracking-widest pointer-events-none text-gray-900 dark:text-white whitespace-nowrap">
                    Home
                </span>
            </button>
            
            {/* EXPERIENCE ICON */}
            <button onClick={() => handleScrollTo('tecrube')} className="text-xl text-gray-400 dark:text-gray-600 hover:text-gray-900 dark:hover:text-white transition-colors duration-300 group relative flex items-center">
                <FaBriefcase />
                <span className="absolute right-full mr-6 opacity-0 group-hover:opacity-100 group-hover:mr-4 transition-all duration-300 text-[10px] font-bold uppercase tracking-widest pointer-events-none text-gray-900 dark:text-white whitespace-nowrap">
                    Exp
                </span>
            </button>
            
            {/* PROJECTS ICON */}
            <button onClick={() => handleScrollTo('projeler')} className="text-xl text-gray-400 dark:text-gray-600 hover:text-gray-900 dark:hover:text-white transition-colors duration-300 group relative flex items-center">
                <FaCode />
                <span className="absolute right-full mr-6 opacity-0 group-hover:opacity-100 group-hover:mr-4 transition-all duration-300 text-[10px] font-bold uppercase tracking-widest pointer-events-none text-gray-900 dark:text-white whitespace-nowrap">
                    Work
                </span>
            </button>
            
            {/* CONTACT ICON */}
            <button onClick={() => handleScrollTo('iletisim')} className="text-xl text-gray-400 dark:text-gray-600 hover:text-gray-900 dark:hover:text-white transition-colors duration-300 group relative flex items-center">
                <FaEnvelope />
                <span className="absolute right-full mr-6 opacity-0 group-hover:opacity-100 group-hover:mr-4 transition-all duration-300 text-[10px] font-bold uppercase tracking-widest pointer-events-none text-gray-900 dark:text-white whitespace-nowrap">
                    Contact
                </span>
            </button>
        </motion.div>

      </motion.div>
      
    </div>
  );
};

export default SplitHeader;