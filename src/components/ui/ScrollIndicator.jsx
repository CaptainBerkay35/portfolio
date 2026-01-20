import { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion';
import { FaArrowUp } from 'react-icons/fa';

const ScrollIndicator = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);

  // 1. Scroll İlerlemesini Yakala (0 ile 1 arası)
  const { scrollYProgress } = useScroll();
  
  // 2. İlerlemeyi yumuşat (Yaylanma efekti ile çizgi takılarak değil, akarak dolar)
  const scrollProgressSmooth = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="fixed bottom-8 w-full z-[60] pointer-events-none px-8">
      <AnimatePresence mode="wait">
        
        {/* --- DURUM 1: EN TEPEDEYİZ (MOUSE İKONU) --- */}
        {!showBackToTop && (
          <motion.div
            key="mouse-indicator"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="absolute left-1/2 -translate-x-1/2 bottom-0 flex flex-col items-center gap-2"
          >
            <div className="w-[30px] h-[50px] border-2 border-gray-400 dark:border-brand-muted/50 rounded-full flex justify-center p-2 transition-colors duration-500">
              <motion.div
                animate={{ y: [0, 15, 0] }}
                transition={{ 
                  duration: 1.5, 
                  repeat: Infinity, 
                  ease: "easeInOut" 
                }}
                className="w-1.5 h-1.5 bg-gray-800 dark:bg-brand-white rounded-full transition-colors duration-500"
              />
            </div>
            <span className="text-[10px] uppercase tracking-[0.2em] text-gray-500 dark:text-brand-muted/70 font-sans transition-colors duration-500">
              Kaydır
            </span>
          </motion.div>
        )}

        {/* --- DURUM 2: AŞAĞI İNDİK (DAİRESEL PROGRESS + BUTON) --- */}
        {showBackToTop && (
          <motion.div
            key="back-to-top"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            className="pointer-events-auto absolute right-6 bottom-0 flex items-center justify-center"
          >
            {/* 1. PROGRESS RING (DIŞ HALKA) */}
            {/* -rotate-90: Halkanın tepeden dolmaya başlaması için */}
            <svg className="absolute w-[58px] h-[58px] -rotate-90 pointer-events-none">
               {/* Arka Plandaki Sönük Halka (Track) */}
               <circle 
                 cx="29" cy="29" r="28" 
                 className="stroke-gray-200 dark:stroke-gray-800 fill-none" 
                 strokeWidth="2"
               />
               {/* Dolan Halka (Indicator) */}
               <motion.circle 
                 cx="29" cy="29" r="28" 
                 className="stroke-gray-900 dark:stroke-white fill-none" 
                 strokeWidth="2"
                 strokeLinecap="round" // Uçları yuvarlak olsun
                 style={{ pathLength: scrollProgressSmooth }} // Framer Motion sihri
               />
            </svg>

            {/* 2. ORTADAKİ BUTON */}
            <motion.button
              onClick={scrollToTop}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              // Light: Siyah Buton | Dark: Beyaz Buton (Titanium Tema)
              className="w-12 h-12 rounded-full flex items-center justify-center shadow-lg transition-colors duration-300
                         bg-gray-900 text-white hover:bg-black 
                         dark:bg-brand-white dark:text-brand-black dark:hover:bg-gray-200"
            >
              <FaArrowUp className="text-sm" />
            </motion.button>

          </motion.div>
        )}

      </AnimatePresence>
    </div>
  );
};

export default ScrollIndicator;