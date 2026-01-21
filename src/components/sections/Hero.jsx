import { motion } from "framer-motion";
import { FaArrowRight, FaDownload } from "react-icons/fa";

const Hero = () => {
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.5,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" }
    },
  };

  return (
    <section className="relative z-10 min-h-screen flex items-center justify-center px-4 overflow-hidden">
      
      {/* 1. ARKA PLAN EFEKTİ (Spot Işığı) */}
      {/* Mavi yerine, Beyaz/Gri bir "Mist" efekti verdik. Karanlıkta çok asil durur. */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gray-200/50 rounded-full blur-[120px] -z-10 dark:bg-white/5 pointer-events-none" />
      
      {/* İsteğe bağlı: Arka plana hafif bir Grid deseni ekleyebiliriz (CSS ile) */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.03] dark:opacity-[0.05] -z-10" />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="max-w-5xl mx-auto text-center"
      >
        
        {/* 2. ETİKET (BADGE) */}
        {/* Renkli değil, Monochrome ve Sınır Çizgili */}
        <motion.div variants={itemVariants} className="mb-6 flex justify-center">
          <div className="py-1.5 px-4 rounded-full border border-gray-200 dark:border-brand-gray bg-white/50 dark:bg-brand-gray/30 backdrop-blur-md">
            <span className="text-gray-600 dark:text-gray-300 text-sm font-medium tracking-wide flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span> {/* Online ışığı */}
              SaraGlobal AI için çalışıyor.
            </span>
          </div>
        </motion.div>

        {/* 3. ANA BAŞLIK (METALİK GRADIENT) */}
        {/* Mavi-Mor yerine: Siyah->Gri (Light) ve Beyaz->Gri (Dark) */}
       <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl lg:text-8xl font-heading font-bold tracking-tighter mb-8 leading-[1.1]">
  
  <span className="text-transparent bg-clip-text bg-gradient-to-b from-gray-900 via-gray-700 to-gray-400 dark:from-white dark:via-gray-200 dark:to-gray-500">
    Yazılım Geliştirici.
  </span>
</motion.h1>

                {/* 4. AÇIKLAMA */}
                <motion.p variants={itemVariants} className="text-lg md:text-xl text-gray-600 dark:text-brand-muted max-w-2xl mx-auto mb-10 leading-relaxed font-light">
          Merhaba, ben <strong className="text-gray-900 dark:text-brand-white font-medium">Berkay Kaptan</strong>. 
          Akdeniz Üniversitesi mezunu bir mühendis olarak, karmaşık problemleri modern teknolojiler ve yapay zeka ile ölçeklenebilir dijital çözümlere dönüştürüyorum. 
        </motion.p>
        {/* 5. BUTONLAR (MİNİMALİST) */}
        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center justify-center gap-5">
          
          {/* Siyah/Beyaz Kontrast Buton */}
          <a 
            href="#projeler"
            className="group relative px-8 py-4 bg-gray-900 dark:bg-brand-white text-white dark:text-brand-black rounded-full font-medium text-lg flex items-center gap-3 hover:shadow-2xl hover:shadow-gray-500/20 transition-all duration-300 "
          >
            Projelerimi İncele
            <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
          </a>

          {/* Outline Buton */}
          <a 
            href="/BerkayKaptan_Resume.pdf" download
            className="px-8 py-4 border border-gray-200 dark:border-brand-gray text-gray-700 dark:text-brand-white rounded-full font-medium text-lg flex items-center gap-3 hover:bg-gray-50 dark:hover:bg-brand-gray/30 transition-all duration-300"
          >
            <FaDownload className="text-gray-400 dark:text-gray-500" />
            CV İndir
          </a>

        </motion.div>

      </motion.div>
    </section>
  );
};

export default Hero;