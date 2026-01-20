import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaTwitter, FaLinkedin, FaInstagram, FaPaperPlane, FaDownload } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    // FOOTER KONTEYNERİ
    // md:pl-40 -> Sol Sidebar boşluğu
    // md:pr-20 -> Sağ kenar boşluğu (İçeriğin sağa yapışmasını engeller)
    <footer className="fixed bottom-0 left-0 w-full h-[800px] bg-zinc-950 text-white z-0 flex flex-col justify-between  p-8 md:pb-12 md:pl-40 md:pr-40 overflow-hidden">
      
      {/* Arka Plan Efekti */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] opacity-20 pointer-events-none" />

      {/* --- ÜST KISIM: CALL TO ACTION --- */}
      <div className="flex-1 flex flex-col justify-center items-center text-center z-10 mt-20 md:mt-0">
        
        <h2 className="text-5xl md:text-8xl font-heading font-bold tracking-tighter mb-12 text-transparent bg-clip-text bg-gradient-to-b from-white to-white/50">
          Let's connect.
        </h2>
        
        {/* BUTON GRUBU */}
        <div className="flex flex-col md:flex-row gap-6 items-center">
            
            {/* 1. MAIL GÖNDER BUTONU (mailto:) */}
            {/* Sunucusuz, doğrudan mail uygulamasını açar */}
            <a href="mailto:hello@berkay.dev">
                <MagneticButton variant="outline">
                    <FaPaperPlane /> {/* İkonu değiştirdim: Kağıt Uçak */}
                    <span>Send Email</span>
                </MagneticButton>
            </a>

            {/* 2. CV İNDİR BUTONU */}
            <a href="/cv.pdf" download>
                <MagneticButton variant="filled">
                    <FaDownload />
                    <span>Download CV</span>
                </MagneticButton>
            </a>

        </div>
      
      </div>

      {/* --- ALT KISIM: FOOTER BİLGİLERİ --- */}
      <div className="flex flex-col md:flex-row justify-between items-end md:items-center gap-8 z-10 border-t border-white/10 pt-8 w-full">
        
        {/* Sol: Copyright & Yer */}
        <div className="text-gray-400 text-sm font-medium flex flex-col gap-1 text-right md:text-left w-full md:w-auto">
          <span>&copy; {currentYear} Berkay.dev</span>
          <span className="flex items-center justify-end md:justify-start gap-2">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            Izmir, Turkiye
          </span>
        </div>

        {/* Sağ: Sosyal Medya */}
        <div className="flex gap-6 justify-center md:justify-end w-full md:w-auto">
          <SocialLink href="#" icon={<FaGithub />} label="Github" />
          <SocialLink href="#" icon={<FaLinkedin />} label="LinkedIn" />
          <SocialLink href="#" icon={<FaTwitter />} label="Twitter" />
          <SocialLink href="#" icon={<FaInstagram />} label="Instagram" />
        </div>

      </div>

    </footer>
  );
};

// --- YARDIMCI BİLEŞENLER ---

// 1. Manyetik Buton
const MagneticButton = ({ children, onClick, variant = "outline" }) => {
    const ref = useRef(null);
    const [position, setPosition] = useState({ x: 0, y: 0 });

    const handleMouse = (e) => {
        const { clientX, clientY } = e;
        const { height, width, left, top } = ref.current.getBoundingClientRect();
        const middleX = clientX - (left + width / 2);
        const middleY = clientY - (top + height / 2);
        setPosition({ x: middleX * 0.1, y: middleY * 0.1 });
    };

    const reset = () => {
        setPosition({ x: 0, y: 0 });
    };

    const { x, y } = position;

    const baseStyles = "group relative flex items-center justify-center gap-3 px-8 py-4 md:px-10 md:py-5 rounded-full text-lg font-medium overflow-hidden transition-all duration-300";
    
    const variants = {
        outline: "bg-transparent border border-white/20 text-white hover:border-white/50",
        filled: "bg-white text-black border border-white hover:bg-gray-200"
    };

    // onClick prop'unu burada geçiyoruz, ama üstteki <a> etiketi zaten linki tetikliyor.
    // Yine de görsel efektler için button etiketi kullanıyoruz.
    return (
        <motion.button
            ref={ref}
            onClick={onClick}
            onMouseMove={handleMouse}
            onMouseLeave={reset}
            animate={{ x, y }}
            transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
            className={`${baseStyles} ${variants[variant]}`}
        >
            {variant === 'outline' && (
                <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)]" />
            )}

            <div className={`relative z-10 flex items-center gap-3 ${variant === 'outline' ? 'group-hover:text-black transition-colors duration-500' : ''}`}>
               {children}
            </div>
        </motion.button>
    );
};

// 2. Sosyal Medya Linki
const SocialLink = ({ href, icon, label }) => {
    return (
        <a 
            href={href} 
            className="text-2xl text-gray-400 hover:text-white transition-colors hover:scale-110 transform duration-200"
            aria-label={label}
        >
            {icon}
        </a>
    );
};

export default Footer;