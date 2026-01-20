import SplitHeader from './components/layout/SplitHeader';
import { motion, useScroll, useTransform } from 'framer-motion';
import ScrollIndicator from './components/ui/ScrollIndicator'; 
import ThemeToggle from './components/ui/ThemeToggle'; 
import Hero from './components/sections/Hero';
import Marquee from './components/sections/Marquee';
import Experience from './components/sections/Experience';
import Projects from './components/sections/Projects';
import Footer from './components/layout/Footer'; // <--- Footer'ı Import Et

export default function App() {
  const { scrollY } = useScroll();
  
  const heroOpacity = useTransform(scrollY, [400, 600], [0, 1]);
  const heroY = useTransform(scrollY, [400, 600], [50, 0]);

  return (
    <div className="font-sans">
      
      <ThemeToggle />
      <SplitHeader />
      <ScrollIndicator />  
      
      {/* --- ÜST KATMAN (HERO, PROJECTS VS.) --- */}
      {/* 1. relative & z-10: Footer'ın üzerinde durması için.
          2. bg-white...: Footer'ı şeffaf olmaması için boyuyoruz.
          3. mb-[800px]: Footer'ın yüksekliği kadar alt boşluk bırakıyoruz ki kaydırınca footer görünsün.
          4. shadow-2xl: Footer'ın üzerine binerken gölge düşürsün.
      */}
      <main className="relative z-10 bg-white dark:bg-brand-black transition-colors duration-500 shadow-2xl mb-[800px] rounded-b-3xl">
        
        <div className="relative pt-[100vh]">
          {/* HERO */}
          <motion.div style={{ opacity: heroOpacity, y: heroY }}>
            <Hero />
          </motion.div>

          {/* MARQUEE */}
          <div className="mt-20 mb-32">
              <Marquee />
          </div>

          {/* TECRÜBELER */}
          <Experience />

          {/* PROJELER */}
          <Projects />
          
          {/* Alt kısmı biraz yumuşatmak için extra boşluk */}
          <div className="h-20 bg-white dark:bg-brand-black rounded-b-3xl"></div>
        </div>

      </main>

      {/* --- ALT KATMAN (FOOTER REVEAL) --- */}
      {/* App.jsx içinde Footer'ı main'in DIŞINA koyuyoruz */}
      <Footer />
      
    </div>
  );
}