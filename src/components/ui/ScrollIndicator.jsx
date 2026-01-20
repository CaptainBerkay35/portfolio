import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaArrowUp } from 'react-icons/fa';

const ScrollIndicator = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);

  // Scroll takibi yapıyoruz
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
    <div className="fixed bottom-8 w-full z-[60] pointer-events-none px-8 transition-colors duration-500">
      <AnimatePresence mode="wait">
        
        {/* DURUM 1: EN TEPEDEYİZ (SCROLL MOUSE) */}
        {!showBackToTop && (
          <motion.div
            key="mouse-indicator"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="absolute left-1/2 -translate-x-1/2 bottom-0 flex flex-col items-center gap-2"
          >
            {/* Mouse Çerçevesi: Light(Koyu Gri Sınır) | Dark(Muted Sınır) */}
            <div className="w-[30px] h-[50px] border-2 border-gray-400 dark:border-brand-muted/50 rounded-full flex justify-center p-2 transition-colors duration-500">
              {/* Hareketli Tekerlek: Light(Siyah) | Dark(Beyaz) */}
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
            {/* Yazı: Light(Gri) | Dark(Muted) */}
            <span className="text-[10px] uppercase tracking-[0.2em] text-gray-500 dark:text-brand-muted/70 font-sans transition-colors duration-500">
              Kaydır
            </span>
          </motion.div>
        )}

        {/* DURUM 2: AŞAĞI İNDİK (BACK TO TOP BUTONU) */}
        {showBackToTop && (
          <motion.button
            key="back-to-top"
            onClick={scrollToTop}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            // --- RENK DÜZENLEMESİ ---
            // Light Mode: Koyu Gri/Siyah Buton + Beyaz Ok
            // Dark Mode: Beyaz Buton + Siyah Ok
            className="pointer-events-auto absolute right-5 bottom-0 w-12 h-12 
                       bg-gray-900 text-white hover:bg-black 
                       dark:bg-brand-white dark:text-brand-black dark:hover:bg-gray-200 
                       rounded-full flex items-center justify-center shadow-lg transition-colors duration-300"
          >
            <FaArrowUp />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ScrollIndicator;