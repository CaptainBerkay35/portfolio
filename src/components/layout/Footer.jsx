import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaPaperPlane, FaDownload } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    // FOOTER KONTEYNERİ
    // bg-white -> Light mod | dark:bg-zinc-950 -> Dark mod
    // text-zinc-900 -> Light mod | dark:text-white -> Dark mod
    <footer className="fixed bottom-0 left-0 w-full h-[800px] bg-white dark:bg-zinc-950 text-zinc-900 dark:text-white z-0 flex flex-col justify-between p-8 md:pb-12 md:pl-40 md:pr-40 overflow-hidden transition-colors duration-500">
      
      {/* Arka Plan Grid Efekti (Her iki moda uygun opaklık) */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:14px_24px] pointer-events-none" />

      {/* --- ÜST KISIM: CALL TO ACTION --- */}
      <div className="flex-1 flex flex-col justify-center items-center text-center z-10 mt-20 md:mt-0">
        
        {/* Başlık: Light modda koyu gri gradient | Dark modda beyaz/şeffaf gradient */}
        <h2 className="text-5xl md:text-8xl font-heading font-bold tracking-tighter mb-12 text-transparent bg-clip-text bg-gradient-to-b from-zinc-900 to-zinc-400 dark:from-white dark:to-white/20">
          İletişim Kur.
        </h2>
        
        {/* BUTON GRUBU */}
        <div className="flex flex-col md:flex-row gap-6 items-center">
            
            {/* 1. MAIL GÖNDER BUTONU */}
            <a href="mailto:kaptanberkay35@hotmail.com">
                <MagneticButton variant="outline">
                    <FaPaperPlane />
                    <span>Mail Yolla</span>
                </MagneticButton>
            </a>

            {/* 2. CV İNDİR BUTONU */}
            <a href="/BerkayKaptan_Resume.pdf" download>
                <MagneticButton variant="filled">
                    <FaDownload />
                    <span>CV'mi İndir</span>
                </MagneticButton>
            </a>

        </div>
      
      </div>

      {/* --- ALT KISIM: FOOTER BİLGİLERİ --- */}
      {/* Border rengini modlara göre ayarladık */}
      <div className="flex flex-col md:flex-row justify-between items-end md:items-center gap-8 z-10 border-t border-zinc-200 dark:border-white/10 pt-8 w-full">
        
        {/* Sol: Copyright & Yer */}
        <div className="text-zinc-500 dark:text-gray-400 text-sm font-medium flex flex-col gap-1 text-right md:text-left w-full md:w-auto">
          <span>&copy; {currentYear} Berkay.dev</span>
          <span className="flex items-center justify-end md:justify-start gap-2">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            Izmir, Turkiye
          </span>
        </div>

        {/* Sağ: Sosyal Medya */}
        <div className="flex gap-6 justify-center md:justify-end w-full md:w-auto">
          <SocialLink href="https://github.com/CaptainBerkay35" icon={<FaGithub />} label="Github" />
          <SocialLink href="https://www.linkedin.com/in/berkay-kaptan-957156239/" icon={<FaLinkedin />} label="LinkedIn" />
        </div>

      </div>

    </footer>
  );
};

// --- YARDIMCI BİLEŞENLER ---

const MagneticButton = ({ children, onClick, variant = "outline" }) => {
    // Artik ref ve position state'ine ihtiyacimiz yok, butonu sabitliyoruz.

    const baseStyles = "group relative flex items-center justify-center gap-3 px-8 py-4 md:px-10 md:py-5 rounded-full text-lg font-medium overflow-hidden transition-all duration-300";
    
    const variants = {
        outline: "bg-transparent border border-zinc-300 dark:border-white/20 text-zinc-900 dark:text-white hover:border-zinc-900 dark:hover:border-white/50",
        filled: "bg-zinc-900 dark:bg-white text-white dark:text-zinc-950 border border-zinc-900 dark:border-white hover:bg-zinc-700 dark:hover:bg-gray-200"
    };

    return (
        <motion.button
            onClick={onClick}
            // animate={{ x, y }} kısmını sildik, buton artık X veya Y ekseninde kaymayacak.
            whileTap={{ scale: 0.95 }} // Tıklayınca hafif bir basılma hissi (opsiyonel)
            className={`${baseStyles} ${variants[variant]}`}
        >
            {/* Arka plan dolgu efekti (Sadece aşağıdan yukarı çıkar) */}
            {variant === 'outline' && (
                <div className="absolute inset-0 bg-zinc-900 dark:bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)]" />
            )}

            {/* İçerik (Yazı ve İkon) */}
            <div className={`relative z-10 flex items-center gap-3 ${variant === 'outline' ? 'group-hover:text-white dark:group-hover:text-zinc-950 transition-colors duration-500' : ''}`}>
               {children}
            </div>
        </motion.button>
    );
};

const SocialLink = ({ href, icon, label }) => {
    return (
        <a 
            href={href} 
            target="_blank"
            rel="noreferrer"
            className="text-2xl text-zinc-400 dark:text-gray-400 hover:text-zinc-900 dark:hover:text-white transition-colors hover:scale-110 transform duration-200"
            aria-label={label}
        >
            {icon}
        </a>
    );
};

export default Footer;