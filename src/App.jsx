import SplitHeader from './components/layout/SplitHeader';
import { motion, useScroll, useTransform } from 'framer-motion';
import ScrollIndicator from './components/ui/ScrollIndicator'; 
import ThemeToggle from './components/ui/ThemeToggle'; 

export default function App() {
  const { scrollY } = useScroll();
  
  const contentOpacity = useTransform(scrollY, [0, 400], [0, 1]);
  const contentY = useTransform(scrollY, [0, 400], [100, 0]);

  return (
    // ANA KAPLAYICI: Light(Beyaz) | Dark(Siyah)
    <div className="bg-white dark:bg-brand-black min-h-[200vh] font-sans transition-colors duration-500">
      
      <ThemeToggle />
      
      {/* Header (Fixed) */}
      <SplitHeader />

      {/* Scroll Göstergesi & Yukarı Çık Butonu */}
      <ScrollIndicator />  
      
      {/* Ana İçerik Alanı */}
      <main className="relative z-10 pt-[50vh] px-4 md:px-20">
        
        <motion.div 
          style={{ opacity: contentOpacity, y: contentY }}
          // Metin Rengi: Light(Koyu Gri) | Dark(Beyaz)
          className="max-w-4xl mx-auto text-gray-900 dark:text-brand-white text-center mt-40 transition-colors duration-500"
        >
          {/* Başlık Fontu ve Rengi */}
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6">
            Merhaba, Ben Berkay 👋
          </h2>
          
          {/* Açıklama Metni: Light(Gri) | Dark(Muted) */}
          <p className="text-gray-600 dark:text-brand-muted text-lg leading-relaxed transition-colors duration-500">
            Header yukarıda ikiye ayrıldı ve beni buldun! 
            Burada projelerim, deneyimlerim ve benimle ilgili detaylar yer alacak.
            Aşağıya doğru kaydırmaya devam et.
          </p>

          {/* Örnek Proje Kutuları */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-20">
            {/* Kutu 1: Light(Açık Gri) | Dark(Koyu Gri) */}
            <div className="bg-gray-100 dark:bg-brand-dark p-8 rounded-lg border border-gray-200 dark:border-brand-gray h-64 flex items-center justify-center shadow-sm dark:shadow-none transition-colors duration-500">
              <span className="text-gray-700 dark:text-brand-muted">Proje 1</span>
            </div>
            
            {/* Kutu 2 */}
            <div className="bg-gray-100 dark:bg-brand-dark p-8 rounded-lg border border-gray-200 dark:border-brand-gray h-64 flex items-center justify-center shadow-sm dark:shadow-none transition-colors duration-500">
              <span className="text-gray-700 dark:text-brand-muted">Proje 2</span>
            </div>
          </div>

        </motion.div>
      </main>
      
    </div>
  );
}