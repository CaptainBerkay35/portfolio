import { motion, useScroll, useTransform } from 'framer-motion';
import { FaHome, FaUser, FaCode, FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';

const SplitHeader = () => {
  const { scrollY } = useScroll();

  // --- ANİMASYON AYARLARI ---
  const moveLeft = useTransform(scrollY, [0, 300], ["0%", "-90%"]); 
  const moveRight = useTransform(scrollY, [0, 300], ["0%", "90%"]);
  
  const mainContentOpacity = useTransform(scrollY, [0, 200], [1, 0]);
  const iconOpacity = useTransform(scrollY, [220, 300], [0, 1]);
  const iconPointerEvents = useTransform(scrollY, (y) => y < 220 ? "none" : "auto");

  return (
    <div className="fixed top-0 left-0 w-full h-screen z-50 flex pointer-events-none">
      
      {/* --- SOL PANEL --- */}
      {/* RENK GÜNCELLEMESİ: bg-gray-50 (Light) | dark:bg-brand-dark (Dark) */}
      <motion.div 
        style={{ x: moveLeft }} 
        className="w-1/2 h-full bg-gray-50 dark:bg-brand-dark border-r border-gray-200 dark:border-brand-gray flex items-center justify-center pointer-events-auto relative transition-colors duration-500"
      >
        {/* BÜYÜK İÇERİK */}
        <motion.div 
            style={{ opacity: mainContentOpacity }}
            className="text-center min-w-[300px]"
        >
            {/* YAZI RENGİ: text-gray-800 (Light) | dark:text-brand-white (Dark) */}
            <h1 className="text-4xl md:text-6xl font-heading font-bold text-gray-900 dark:text-brand-white tracking-tighter transition-colors duration-500">
            BERKAY<span className="text-blue-600 dark:text-brand-accent">.</span>DEV
            </h1>
            <p className="mt-4 text-gray-600 dark:text-brand-muted text-sm md:text-base font-sans transition-colors duration-500">
            Frontend Developer & UI Designer
            </p>
        </motion.div>

        {/* SIDEBAR İKONLARI (SAĞ KENARDA) */}
        <motion.div 
            style={{ opacity: iconOpacity, pointerEvents: iconPointerEvents }}
            className="absolute right-0 top-0 h-full w-[10%] flex flex-col items-center justify-center gap-6 border-l border-gray-200 dark:border-brand-gray/20 transition-colors duration-500"
        >
             <span className="font-heading font-bold text-gray-900 dark:text-brand-white mb-4 border-b border-gray-200 dark:border-brand-gray pb-4 transition-colors duration-500">B.</span>
             <a href="https://github.com" target="_blank" className="text-2xl text-gray-500 dark:text-brand-muted hover:text-gray-900 dark:hover:text-brand-white transition-colors"><FaGithub /></a>
             <a href="https://linkedin.com" target="_blank" className="text-2xl text-gray-500 dark:text-brand-muted hover:text-blue-600 dark:hover:text-blue-500 transition-colors"><FaLinkedin /></a>
        </motion.div>

      </motion.div>

      {/* --- SAĞ PANEL --- */}
      <motion.div 
        style={{ x: moveRight }} 
        className="w-1/2 h-full bg-gray-50 dark:bg-brand-dark border-l border-gray-200 dark:border-brand-gray flex items-center justify-center pointer-events-auto relative transition-colors duration-500"
      >
        {/* BÜYÜK İÇERİK */}
        <motion.div 
            style={{ opacity: mainContentOpacity }}
            className="min-w-[300px] text-center"
        >
            <nav className="flex flex-col gap-8 text-xl md:text-2xl font-heading font-medium text-gray-500 dark:text-brand-muted text-center transition-colors duration-500">
                <a href="#hakkimda" className="hover:text-blue-600 dark:hover:text-brand-accent transition-colors duration-300">Hakkımda</a>
                <a href="#projeler" className="hover:text-blue-600 dark:hover:text-brand-accent transition-colors duration-300">Projeler</a>
                <a href="#iletisim" className="hover:text-blue-600 dark:hover:text-brand-accent transition-colors duration-300">İletişim</a>
            </nav>
        </motion.div>

        {/* SIDEBAR İKONLARI (SOL KENARDA) */}
        <motion.div 
            style={{ opacity: iconOpacity, pointerEvents: iconPointerEvents }}
            className="absolute left-0 top-0 h-full w-[10%] flex flex-col items-center justify-center gap-10 border-r border-gray-200 dark:border-brand-gray/20 transition-colors duration-500"
        >
            <a href="#" className="text-xl text-gray-500 dark:text-brand-muted hover:text-blue-600 dark:hover:text-brand-accent transition-colors"><FaHome /></a>
            <a href="#hakkimda" className="text-xl text-gray-500 dark:text-brand-muted hover:text-blue-600 dark:hover:text-brand-accent transition-colors"><FaUser /></a>
            <a href="#projeler" className="text-xl text-gray-500 dark:text-brand-muted hover:text-blue-600 dark:hover:text-brand-accent transition-colors"><FaCode /></a>
            <a href="#iletisim" className="text-xl text-gray-500 dark:text-brand-muted hover:text-blue-600 dark:hover:text-brand-accent transition-colors"><FaEnvelope /></a>
        </motion.div>

      </motion.div>
      
    </div>
  );
};

export default SplitHeader;