import { useState } from "react";
import { motion } from "framer-motion";
import { FaArrowRight, FaMapMarkerAlt, FaGlobeEurope } from "react-icons/fa";
import ProjectModal from "../ui/ProjectModal"; 

// --- VERİLER ---
const PROJECTS = [
 {
    id: 1,
    title: "TaskManager",
    category: "Full-Stack / .NET & React",
    gridClass: "col-span-1 md:col-span-2 md:row-span-2", 
    image: "/TaskFavIcon.png", 
    description: `TaskManager, bireysel kullanıcılar ve ekipler için geliştirilmiş, hiyerarşik organizasyon yapısına sahip modern bir görev yönetim platformudur. 

Proje, .NET 8.0 Web API mimarisi üzerine kurulu sağlam bir backend ve React 19 ile güçlendirilmiş hızlı bir frontend deneyimi sunar. Repository Pattern ve JWT tabanlı kimlik doğrulama sistemleriyle güvenli ve ölçeklenebilir bir yapı kurgulanmıştır.

Öne Çıkan Özellikler:
• Üç Katmanlı Organizasyon: Proje → Görev → Alt Görev yapısıyla karmaşık süreçleri yönetme imkanı.
• Dinamik Dashboard: Görev durumları, öncelik seviyeleri ve yaklaşan deadline'lar için görsel raporlama.
• Takvim Entegrasyonu: React Big Calendar ile tüm iş süreçlerini takvim üzerinden takip etme kolaylığı.
• Cascade Deadline Yönetimi: Alt görev ve görev tarihlerinin, ana projenin zaman sınırları içerisinde kalmasını sağlayan otomatik kontrol mekanizması.
• Veritabanı Mimarisi: Supabase üzerinde barındırılan PostgreSQL ile yüksek performanslı veri yönetimi.

Dockerize edilmiş yapısı sayesinde her ortamda kolayca yayına alınabilen bu platform, hem mobil uyumlu arayüzü hem de karanlık mod desteğiyle kullanıcı odaklı bir deneyim sağlar.`,
    tech: [".NET 8.0", "React 19", "PostgreSQL", "Tailwind CSS", "JWT", "Docker"],
    links: {
      demo: "https://taskmanager-frontend-phi.vercel.app/login", 
      github: "https://github.com/CaptainBerkay35/TaskManager"
    }
},
  {
    id: 2,
    title: "Dorothy",
    category: "Game Development / Unity",
    gridClass: "col-span-1 md:col-span-1 md:row-span-2",
    image: "/unityLogo.jpg", 
    images:["/Dorothy1.JPG","/Dorothy2.JPG"],
    description: `Dorothy, üniversite dönemindeki 'Oyun Programlama' dersi için geliştirilmiş, strateji ve dikkati ön plana çıkaran 2D platform-bulmaca oyunudur.

Unity oyun motoru kullanılarak tasarlanan bu projenin temel hedefi, oyuncuyu sürekli denemeye ve hatalarından ders çıkarmaya zorlayan yüksek bir zorluk seviyesi sunmaktır. 

Öne Çıkan Özellikler:
• Platform & Puzzle Dinamikleri: Oyuncunun reflekslerini ve mantıksal çözüm yeteneğini aynı anda test eden bölümler.
• İlerlemeli Zorluk Tasarımı: Göründüğünden çok daha zorlayıcı bir deneyim sunan, oyuncuyu sürekli aktif tutan oyun mekanikleri.
• Mimari Yapı: Unity üzerinde kurgulanan nesne tabanlı programlama prensipleri ve oyun fiziği entegrasyonu.

Bu proje, bir oyunun sadece eğlence değil, aynı zamanda zorluk ve başarı hissi üzerinden nasıl bir kullanıcı motivasyonu yaratabileceğine dair teknik bir çalışmadır.`,
    tech: ["Unity", "C#", "2D Physics", "Game Design"],
    links: {
       demo: "https://play.unity.com/en/games/10b0057a-fd6a-4336-b332-f97d851692a0/dorothy",
      github: "https://github.com/CaptainBerkay35/DorothyReleased" 
    }
},
  {
    id: 3,
    title: "Fitio",
    category: "Fitness & Sağlıklı Yaşam",
    gridClass: "col-span-1 md:col-span-1 md:row-span-1", 
    image: "/fitio.png", // Public klasöründeki görselin
    description: `Fitio, kullanıcılara kişiselleştirilmiş antrenman programları ve bilimsel temelli beslenme rehberleri sunan kapsamlı bir fitness platformudur.

  React 19 ve TypeScript mimarisiyle geliştirilen uygulama, interaktif anket sistemi sayesinde kullanıcıların hedeflerine ve fitness seviyelerine özel bir yol haritası çıkartır.

  Öne Çıkan Özellikler:
  • Dinamik Antrenman Programları: Full-body ve split antrenman seçenekleri ile video destekli egzersiz rehberliği.
  • Beslenme ve PDF Entegrasyonu: Makro besin analizleri ve indirilebilir "Fit Tarifler" rehberi.
  • İnteraktif Analiz: Kullanıcı verilerini işleyen anket sistemi ve hedeflere göre özelleştirilmiş öneriler.
  • Veri Yönetimi: XLSX entegrasyonu ile dosya işleme ve tsParticles ile zenginleştirilmiş modern kullanıcı arayüzü.

  Framer Motion animasyonları ve Tailwind CSS ile harmanlanan bu proje, hem eğitim kaynakları hem de kişiselleştirilmiş araçları ile bütünsel bir sağlıklı yaşam deneyimi sunar.`,
      tech: ["React 19", "TypeScript", "Framer Motion", "Tailwind CSS", "XLSX", "tsParticles"],
      links: {
        demo: "https://fitio-nu.vercel.app/",
        github: "https://github.com/CaptainBerkay35/fitio" // GitHub reposu adını kontrol etmeyi unutma
      }
  },
  {
    id: 4,
    title: "Quicko",
    category: "Mobil / Flutter & Firebase",
    gridClass: "col-span-1 md:col-span-2 md:row-span-1", 
    image: "linear-gradient(to right, #000000, #1e293b)", 
    description: `Quicko, restoran ve kafeler için geliştirilmiş, QR kod tabanlı temassız sipariş ve ödeme sistemidir. Kullanıcıların fiziksel menülere dokunmadan dijital ortamda sipariş vermelerini sağlayan modern bir çözüm sunar.

Flutter mimarisiyle geliştirilen uygulama, Firebase platformunun sunduğu gerçek zamanlı veritabanı ve kimlik doğrulama servislerini kullanarak senkronize bir sipariş akışı sağlar.

Öne Çıkan Özellikler:
• QR Kod Entegrasyonu: QR Kod ile temassız kolay ödeme imkanı.
• Gerçek Zamanlı Sipariş Takibi: Firebase Realtime Database sayesinde mutfak ve müşteri arasında anlık veri senkronizasyonu.
• Kullanıcı Deneyimi: Responsive tasarım prensipleriyle kurgulanmış, hızlı ve sezgisel mobil arayüz.
• Güvenli Ödeme Akışı: Kullanıcı dostu sepet yönetimi ve güvenli ödeme simülasyonu süreçleri.

Proje, geleneksel hizmet sektörünü dijitalleştirerek operasyonel verimliliği artırmayı hedefleyen bir mobil teknoloji çalışmasıdır.`,
    tech: ["Flutter", "Dart", "Firebase Auth", "Cloud Firestore", "QR Integration"],
    links: {
      github: "https://github.com/CaptainBerkay35/Quicko"
    }
},
  {
    id: 5,
    title: "Mehmet Bekir Website",
    category: "WordPress / Web Development",
    gridClass: "col-span-1 md:col-span-1 md:row-span-1", 
    image: "linear-gradient(to bottom left, #18181b, #27272a)", 
    description: `Mehmet Bekir için geliştirilen, tamamen kullanıcı talepleri ve marka kimliği doğrultusunda kurgulanmış profesyonel bir kurumsal web sitesidir.

PenDigital staj sürecindeki deneyimlerimle paralel olarak; modern arayüz tasarımı, yüksek mobil uyumluluk ve arama motoru optimizasyonu (SEO) odaklı bir altyapı üzerine inşa edilmiştir.

Öne Çıkan Özellikler:
• Özel Tema Yapılandırması: PHP ve CSS özelleştirmeleri ile marka kimliğine tam uyumlu tasarım süreçleri.
• Performans Odaklı Yapı: Hızlı yükleme süreleri için optimize edilmiş veritabanı ve görsel yönetim altyapısı.
• SEO ve Erişilebilirlik: Arama motorlarında üst sıralarda yer almayı hedefleyen semantik kod yapısı ve içerik stratejisi.
• Yönetilebilir İçerik: Kullanıcının teknik bilgiye ihtiyaç duymadan güncelleyebileceği dinamik bir yönetim paneli entegrasyonu.

Proje, kurumsal bir varlığın dijital dünyada estetik ve işlevsel bir şekilde temsil edilmesini sağlayan uçtan uca bir geliştirme sürecidir.`,
    tech: ["WordPress", "PHP", "MySQL", "SEO Optimization", "CSS3"],
    links: {
      demo: "https://labiaplastyturkey.com/tr/",
      github: "https://github.com/CaptainBerkay35/Mehmet-Bekir-Website-wp-based"
    }
},
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projeler" className="py-12 md:py-24 bg-white dark:bg-brand-black transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Başlık Bölümü - Mobilde alt alta, Webde yan yana */}
        <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-8 border-b border-gray-100 dark:border-gray-800 pb-10">
          <div className="space-y-4">
            <span className="text-sm font-bold text-gray-500 dark:text-gray-400 tracking-widest  md:text-sm ftracking-[0.3em] uppercase block">
              Portfolyom
            </span>
            <h2 className="text-4xl md:text-5xl font-heading font-bold  mt-2 lg:text-6xl  text-gray-900 dark:text-brand-white tracking-tighter leading-none">
              Projeler
            </h2>
          </div>
          <p className="max-w-xs text-gray-500 dark:text-gray-400 text-sm md:text-base leading-relaxed font-light">
            Modern teknolojiler ve kullanıcı odaklı tasarım prensipleriyle geliştirdiğim seçkin çalışmalarım.
          </p>
        </div>

        {/* --- GRID (Responsive Tasarım) --- */}
        {/* Mobilde 1 sütun, Tablette 2 sütun, Masaüstünde 4 sütun */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 auto-rows-[320px] md:auto-rows-[300px] border-t border-l border-gray-100 dark:border-gray-800">
          
          <ProjectCard project={PROJECTS[0]} onClick={() => setSelectedProject(PROJECTS[0])} />
          <ProjectCard project={PROJECTS[1]} onClick={() => setSelectedProject(PROJECTS[1])} />
          <ProjectCard project={PROJECTS[2]} onClick={() => setSelectedProject(PROJECTS[2])} />

          {/* --- FILLER CARD: LOCATION (Mobilde gizlenebilir veya yer değiştirilebilir) --- */}
          <div className="col-span-1 border-b border-r border-gray-100 dark:border-gray-800 bg-gray-50/50 dark:bg-zinc-900/30 relative group overflow-hidden flex flex-col justify-between p-8">
              <div className="absolute inset-0 opacity-10 pointer-events-none">
                 <FaGlobeEurope className="absolute -right-8 -bottom-8 text-[150px] text-gray-400 dark:text-white" />
              </div>
              <div className="relative z-10 flex items-center gap-2 px-3 py-1.5 rounded-full bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 w-fit">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                  </span>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-gray-600 dark:text-gray-300">Müsait</span>
              </div>
              <div className="relative z-10">
                  <p className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.2em] mb-2">Lokasyon</p>
                  <div className="flex items-center gap-2">
                      <FaMapMarkerAlt className="text-gray-400" />
                      <h4 className="text-xl font-bold text-gray-900 dark:text-white tracking-tight">İzmir, TR</h4>
                  </div>
              </div>
          </div>

          <ProjectCard project={PROJECTS[3]} onClick={() => setSelectedProject(PROJECTS[3])} />
          <ProjectCard project={PROJECTS[4]} onClick={() => setSelectedProject(PROJECTS[4])} />

        </div>
        
        {/* Modal bileşeni aynı kalabilir */}
        <ProjectModal selectedProject={selectedProject} onClose={() => setSelectedProject(null)} />
      </div>
    </section>
  );
};

// --- PROJE KARTI ---
const ProjectCard = ({ project, onClick }) => {
  // Resim veya gradyan kontrolü
  const isImage = project.image.startsWith("/");

  // Arka plan stilini belirleme
  const backgroundStyle = isImage
    ? `url(${project.image}) center/cover no-repeat`
    : project.image;

  return (
    <motion.div
      layoutId={`card-${project.id}`}
      onClick={onClick}
      className={`relative group cursor-pointer border-b border-r border-gray-200 dark:border-gray-800 overflow-hidden ${project.gridClass}`}
    >
      {/* Arka Plan Katmanı */}
      {/* dark:opacity-40 -> Gradyanların karanlık modda daha sönük kalmasını sağlar */}
      <div 
        className="absolute inset-0 transition-transform duration-700 group-hover:scale-105 dark:opacity-60"
        style={{ background: backgroundStyle }}
      />
      
      {/* KARANLIK MOD KATMANI (Overlay) */}
      {/* Bu katman light modda şeffaf, dark modda kartı hafifçe karartır */}
      <div className="absolute inset-0 bg-transparent dark:bg-zinc-950/40 group-hover:dark:bg-zinc-950/20 transition-colors duration-500" />
      
      {/* Resim varsa ekstra karartma */}
      {isImage && (
        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500" />
      )}
      
      {/* İçerik Katmanı */}
      <div className="absolute inset-0 p-8 flex flex-col justify-between z-10">
        
        {/* Üst Kısım */}
        <div className="flex justify-between items-start">
          <span className="text-xs font-mono text-white/90 dark:text-white/60 border border-white/30 dark:border-white/20 px-2 py-1 rounded-full backdrop-blur-md bg-black/10">
            {project.category}
          </span>
          <div className="bg-white/20 dark:bg-white/10 p-2 rounded-full backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
            <FaArrowRight className="text-white text-sm" />
          </div>
        </div>

        {/* Alt Kısım: Başlık ve Açıklama */}
        <div className="relative">
          <motion.h3 
            layoutId={`title-${project.id}`}
            className="text-2xl md:text-3xl font-heading font-bold text-white leading-tight drop-shadow-lg"
          >
            {project.title}
          </motion.h3>

          <p className="text-gray-100 dark:text-gray-300 text-sm mt-3 line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform translate-y-0 group-hover:translate-y-0 ease-out font-medium">
             {project.description}
          </p>
        </div>
      </div>
      
      {/* Hover Parlama/Işıltı Efekti */}
      <div className="absolute inset-0 bg-white/5 dark:bg-white/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-20" />
    </motion.div>
  );
};
export default Projects;