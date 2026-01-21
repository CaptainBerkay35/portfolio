import { motion } from "framer-motion";

const TECHNOLOGIES = [
  "React", "Node.js", "MongoDB", "Express", "JavaScript","C#",".NET","Html","CSS","MSSQL", 
  "TypeScript", "Tailwind CSS", "Framer Motion", "Git", "Agile"
];

const Marquee = () => {
  return (
    <div className="w-full py-12 bg-white dark:bg-brand-black overflow-hidden border-y border-gray-100 dark:border-brand-gray/20">
      
      {/* Gradyan Maskeler (Kenarlarda yumuşak kayboluş) */}
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white dark:from-brand-black to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white dark:from-brand-black to-transparent z-10 pointer-events-none" />

      <div className="flex">
        {/* Hareket Eden Konteyner */}
        <motion.div
          className="flex gap-16 whitespace-nowrap"
          animate={{ x: "-50%" }}
          transition={{ 
            ease: "linear", 
            duration: 30, // Biraz yavaşlattım, daha okunaklı ve asil olsun diye
            repeat: Infinity 
          }}
        >
          {/* İçeriği 2 kez tekrarlıyoruz */}
          {[...TECHNOLOGIES, ...TECHNOLOGIES].map((tech, index) => (
            <div key={index} className="flex items-center gap-6"> {/* Gap arttırıldı, ferahladı */}
              
              {/* Teknoloji İsmi */}
              {/* RENK AYARI BURADA YAPILDI: */}
              {/* Light: text-gray-300 (Net gri) | Dark: text-gray-700 (Koyu çelik) */}
              <span className="text-4xl md:text-6xl font-heading font-bold text-gray-300 dark:text-gray-700 uppercase tracking-tighter select-none">
                {tech}
              </span>
              
              {/* Ayırıcı Nokta (Daha minimalist) */}
              <span className="w-1.5 h-1.5 rounded-full bg-gray-300 dark:bg-gray-700" />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Marquee;