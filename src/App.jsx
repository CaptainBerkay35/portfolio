import SplitHeader from './components/layout/SplitHeader';
import { motion, useScroll, useTransform } from 'framer-motion';
import ScrollIndicator from './components/ui/ScrollIndicator'; 
import ThemeToggle from './components/ui/ThemeToggle'; 
import Hero from './components/sections/Hero'; 
import Marquee from './components/sections/Marquee'; 
import Experience from './components/sections/Experience'; 
import Projects from './components/sections/Projects'; 

export default function App() {
  const { scrollY } = useScroll();
  
  // Hero bölümü kapı açıldıkça yavaşça belirmeli
  // Opaklık: Scroll 400'e gelince başlasın, 600'de tam görünsün
  const heroOpacity = useTransform(scrollY, [400, 600], [0, 1]);
  // Konum: Hafif aşağıdan yukarı gelsin
  const heroY = useTransform(scrollY, [400, 600], [50, 0]);

  return (
    <div className="bg-white dark:bg-brand-black min-h-[300vh] font-sans transition-colors duration-500">
      
      <ThemeToggle />
      <SplitHeader />
      <ScrollIndicator />  
      
      <main className="relative z-10 pt-[100vh]"> {/* pt-[100vh] önemli: İlk ekran header'ın arkasında kalsın */}
        
        {/* HERO BÖLÜMÜ */}
        <motion.div style={{ opacity: heroOpacity, y: heroY }}>
          <Hero />
        </motion.div>
        {/* MARQUEE (Kayan Yazı) */}
        <div className="mt-20 mb-32">
             <Marquee />
        </div>

        {/* TECRÜBELER  */}
        <Experience />

        {/* PROJELER  */}
        <Projects />

        {/* Diğer bölümler buraya gelecek (Marquee, Projeler vs.) */}
        <div className="h-screen"></div> {/* Şimdilik boşluk olsun */}

      </main>
      
    </div>
  );
}