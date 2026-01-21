import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

const EXPERIENCES = [
  {
    id: "01",
    role: "Software Developer",
    company: "SaraglobalAI",
    period: "Eylül 2025 - Günümüz",
    description: "Yapay zeka destekli kurumsal CRM platformunun uçtan uca mimarisini tasarladım. Veritabanı tasarımından kullanıcı arayüzüne kadar tam kapsamlı full-stack geliştirme süreçlerini yönettim.", 
    tech: ["AI Implementation", "Full-Stack", "Database Design", "CRM"]
  },
  {
    id: "02",
    role: "AI Model Trainer",
    company: "Outlier",
    period: "Temmuz 2024 - Mayıs 2025",
    description: "Yazılım ve matematik odaklı yapay zeka modellerinin eğitimi için veri setleri hazırladım ve çeşitli domainlerde model performansını optimize eden görevlerde yer aldım.", 
    tech: ["AI Training", "Mathematics", "Software Analysis"]
  },
  {
    id: "03",
    role: "Frontend Developer",
    company: "Teknodev",
    period: "Temmuz 2023 - Ekim 2023",
    description: "React, JavaScript ve TypeScript kullanarak kurumsal web projelerinin frontend mimarisini geliştirdim. Spica Engine üzerinden backend entegrasyonlarını gerçekleştirdim.", 
    tech: ["React", "TypeScript", "Spica Engine", "Agile"]
  },
  {
    id: "04",
    role: "Frontend Developer",
    company: "PenDigital",
    period: "Temmuz 2022 - Eylül 2022",
    description: "Bireysel projeler odaklı çalışarak modern web geliştirme süreçlerinde deneyim kazandım. WordPress tabanlı özel web sitelerinin tasarımı ve uçtan uca yayına alınması süreçlerini yöneterek teknik yetkinliğimi güçlendirdim.", 
    tech: ["WordPress", "Web Development", "UI Implementation"]
  }
];

const Experience = () => {
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <section className="bg-white dark:bg-brand-black transition-colors duration-500">
      
      {/* --- BÖLÜM 1: STICKY SCROLL --- */}
      <div ref={containerRef} className="relative hidden md:flex flex-row  max-w-7xl mx-auto"style={{ height: `${EXPERIENCES.length * 100}vh` }}> 

        {/* --- SOL PANEL (SABİT) --- */}
        <div className="w-1/2 h-screen sticky top-0 flex flex-col justify-center pl-10 lg:pl-20 relative">
          
          {/* ÇİZGİ VE NOKTALAR ALANI */}
          <div className="absolute left-4 lg:left-10 top-1/2 -translate-y-1/2 h-[60%] w-1 bg-gray-200 dark:bg-brand-gray/20 rounded-full">
            {/* Dulan Çizgi (Monochrome Renk: Siyah/Beyaz) */}
            <motion.div 
              style={{ scaleY, transformOrigin: "top" }}
              className="w-full h-full bg-gray-900 dark:bg-white"
            />
          </div>

          {/* NOKTALAR */}
          <div className="absolute left-[10px] lg:left-[34px] top-1/2 -translate-y-1/2 h-[60%] flex flex-col justify-between z-10">
             {EXPERIENCES.map((_, index) => (
                <DotIndicator key={index} index={index} progress={scrollYProgress} total={EXPERIENCES.length} />
             ))}
          </div>

          {/* DEĞİŞEN İÇERİK (SOL TARAFTAKİ YAZILAR) */}
          <div className="relative h-[300px] w-full">
            {EXPERIENCES.map((exp, index) => {
              const stepSize = 1 / EXPERIENCES.length;
              const start = index * stepSize;
              const end = start + stepSize;

              return (
                <StickyContent 
                  key={exp.id} 
                  data={exp} 
                  range={[start, end]} 
                  progress={scrollYProgress}
                  index={index}
                  total={EXPERIENCES.length}
                />
              );
            })}
          </div>
        </div>

        {/* --- SAĞ PANEL (AKAN AÇIKLAMALAR) --- */}
        <div className="w-1/2 pr-10 lg:pr-20">
          {EXPERIENCES.map((exp) => (
            <div key={exp.id} className="h-screen flex items-center justify-center">
              
              <div className="bg-gray-50/80 dark:bg-brand-dark/40 backdrop-blur-md p-10 rounded-3xl border border-gray-100 dark:border-brand-gray/20 shadow-sm max-w-lg w-full">
                <p className="text-xl leading-relaxed text-gray-600 dark:text-brand-muted font-light">
                  {exp.description}
                </p>
                <div className="flex flex-wrap gap-2 mt-8">
                  {exp.tech.map((t) => (
                     <span key={t} className="px-3 py-1 bg-white dark:bg-brand-black/50 rounded-md border border-gray-200 dark:border-brand-gray/30 text-sm font-medium text-gray-500 dark:text-gray-400">
                       #{t}
                     </span>
                  ))}
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* --- BÖLÜM 2: STATIC LIST SUMMARY --- */}
      <div className="py-32 px-4 border-t border-gray-100 dark:border-brand-gray/20">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-20">
            {/* Özet etiketi de artık gri tonlarında */}
            <span className="text-sm font-bold text-gray-500 dark:text-gray-400 tracking-widest uppercase">Kariyer Yolu</span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 dark:text-brand-white mt-2">
              Tüm Deneyimlerim
            </h2>
          </div>
          <div className="flex flex-col gap-20">
            {EXPERIENCES.map((exp, index) => (
              <StaticExperienceItem key={exp.id} data={exp} index={index} />
            ))}
          </div>
        </div>
      </div>

    </section>
  );
};

// --- YARDIMCI BİLEŞENLER ---

// 1. STICKY CONTENT (SOL TARAFTAKİ YAZILAR)
const StickyContent = ({ data, range, progress, index, total }) => {
  const isFirst = index === 0;
  const isLast = index === total - 1;

  // --- ANİMASYON MANTIĞI ---
  // İlk elemansa: Başlangıçta Görünür (1), Çıkarken Silinir (0)
  // Son elemansa: Girerken Belirir (0->1), Bitişte Kalır (1)
  // Ara elemanlar: Girerken Belirir, Çıkarken Silinir
  
  let opacityRange = [0, 1, 1, 0];
  let yRange = [50, 0, 0, -50];

  if (isFirst) {
    opacityRange = [1, 1, 1, 0];
    yRange = [0, 0, 0, -50];
  } else if (isLast) {
    opacityRange = [0, 1, 1, 1];
    yRange = [50, 0, 0, 0];
  }

  const opacity = useTransform(
  progress, 
  [range[0], range[0] + 0.07, range[1] - 0.07, range[1]], 
  opacityRange
);

const y = useTransform(
  progress, 
  [range[0], range[0] + 0.07, range[1] - 0.07, range[1]], 
  yRange
);
  
  return (
    <motion.div 
      style={{ opacity, y }}
      className="absolute top-0 left-0 w-full pl-16 lg:pl-24"
    >
      <span className="text-[100px] lg:text-[140px] font-heading font-bold text-gray-100 dark:text-white/10 absolute -left-8 -top-12 -z-10 select-none">
        {data.id}
      </span>
      <h3 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-brand-white mb-3">
        {data.role}
      </h3>
      <p className="text-2xl text-gray-700 dark:text-gray-300 font-medium mb-4">
        {data.company}
      </p>
      <span className="inline-block px-4 py-1.5 rounded-full border border-gray-300 dark:border-brand-gray/40 text-sm font-mono text-gray-500 dark:text-brand-muted">
        {data.period}
      </span>
    </motion.div>
  );
};

// 2. DOT INDICATOR (NOKTALAR - MONOCHROME)
const DotIndicator = ({ index, progress, total }) => {
  const step = 1 / total;
  const start = index * step;
  const end = (index + 1) * step;

  // Renk ve Scale değerlerini doğrudan scrollProgress'e bağlıyoruz
  // [Giriş Aralığı], [Çıkış Değerleri]
  const bgColor = useTransform(
    progress,
    [start - 0.02, start, end - 0.02, end],
    ["#ffffff", "#2563EB", "#2563EB", "#ffffff"] // Light Mode: Beyaz -> Mavi -> Beyaz
  );

  const darkBgColor = useTransform(
    progress,
    [start - 0.02, start, end - 0.02, end],
    ["#18181b", "#ffffff", "#ffffff", "#18181b"] // Dark Mode: Siyah -> Beyaz -> Siyah
  );

  const scale = useTransform(
    progress,
    [start - 0.02, start, end - 0.02, end],
    [1, 1.3, 1.3, 1]
  );

  // Tema bilgisini almak için CSS değişkeni yerine dinamik class kullanacağız
  return (
    <motion.div 
      style={{ 
        scale,
        backgroundColor: bgColor, // Framer motion temaya göre bunu yönetebilir
      }}
      className="w-4 h-4 rounded-full border-2 border-gray-300 dark:border-brand-gray/40 z-20 dark:bg-brand-black"
    />
  );
};

// 3. STATİK LİSTE (EN ALTTAKİ)
const StaticExperienceItem = ({ data, index }) => {
  const isEven = index % 2 === 0;
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6 }}
      className={`flex flex-col md:flex-row items-center gap-10 ${isEven ? "" : "md:flex-row-reverse"}`}
    >
      <div className="w-full md:w-1/2 text-center md:text-left">
         <h4 className="text-2xl font-bold text-gray-900 dark:text-brand-white">{data.role}</h4>
         {/* Buradaki maviliği de kaldırdım, gri yaptım */}
         <p className="text-gray-700 dark:text-gray-300 font-medium">{data.company}</p>
         <p className="text-sm text-gray-500 mt-1">{data.period}</p>
      </div>
      <div className="w-full md:w-1/2 bg-gray-50 dark:bg-brand-dark/20 p-8 rounded-2xl border border-gray-100 dark:border-brand-gray/10">
        <p className="text-gray-600 dark:text-brand-muted text-base leading-relaxed">
            {data.description}
        </p>
      </div>
    </motion.div>
  );
};

export default Experience;