import { useState, useEffect } from "react";
import { FaSun, FaMoon } from "react-icons/fa";
import { motion } from "framer-motion";

const ThemeToggle = () => {
  // Başlangıçta localStorage'a bak, yoksa 'true' (Dark Mode) varsay.
  const [isDark, setIsDark] = useState(() => {
    if (typeof window !== "undefined") {
      const savedTheme = localStorage.getItem("theme");
      // Eğer kayıtlı tema yoksa varsayılan olarak DARK olsun
      return savedTheme ? savedTheme === "dark" : true;
    }
    return true;
  });

  useEffect(() => {
    const root = window.document.documentElement;
    if (isDark) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDark]);

  return (
    <button
      onClick={() => setIsDark(!isDark)}
      className="fixed top-6 right-8 z-[60] p-3 rounded-full bg-gray-200 dark:bg-brand-gray text-brand-dark dark:text-brand-white transition-colors duration-300 shadow-lg hover:scale-110 active:scale-95"
      aria-label="Temayı Değiştir"
    >
      <motion.div
        initial={false}
        animate={{ rotate: isDark ? 0 : 180 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        {isDark ? <FaMoon size={20} /> : <FaSun size={20} className="text-orange-500" />}
      </motion.div>
    </button>
  );
};

export default ThemeToggle;