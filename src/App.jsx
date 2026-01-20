import { motion } from "framer-motion";

export default function App() {
  return (
    <div className="bg-slate-900 h-screen w-full flex flex-col items-center justify-center text-white">
      <motion.h1 
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        className="text-5xl font-bold text-blue-500 mb-4"
      >
        Kurulum Başarılı! 🚀
      </motion.h1>
      <p className="text-gray-400">Tailwind ve Framer Motion çalışıyor.</p>
    </div>
  );
}