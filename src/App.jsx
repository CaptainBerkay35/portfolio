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
      
      {/* ÜST KATMAN */}
      <main className="relative z-10 bg-white dark:bg-brand-black transition-colors duration-500 shadow-2xl mb-[800px] rounded-b-3xl">
        
        <div className="relative pt-[70vh]">
          
          {/* HERO (ID: hero) */}
          <section id="hero">
            <motion.div style={{ opacity: heroOpacity, y: heroY }}>
              <Hero />
            </motion.div>
          </section>

          {/* MARQUEE */}
          <div className="mt-20 mb-32">
              <Marquee />
          </div>

          {/* TECRÜBELER (ID: tecrube) */}
          {/* Experience bileşeni içinde section varsa id'yi oraya da verebilirsin ama sarmalamak garanti yöntemdir */}
          <div id="tecrube">
            <Experience />
          </div>

          {/* PROJELER (ID: projeler) */}
          {/* Projects bileşeni içinde zaten id="projeler" vermiştik ama garanti olsun diye buraya da bakabilirsin. 
              Eğer Projects.jsx içinde <section id="projeler"> varsa buraya div sarmana gerek yok. */}
          <Projects /> 
          
          <div className="h-20 bg-white dark:bg-brand-black rounded-b-3xl"></div>
        </div>

      </main>

      {/* FOOTER (ID: iletisim) */}
      <div id="iletisim">
        <Footer />
      </div>
      
    </div>
  );
}