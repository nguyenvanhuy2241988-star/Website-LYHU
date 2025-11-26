
import React, { useEffect, useState } from 'react';
import { ArrowRight, ChevronDown, Sparkles } from 'lucide-react';

interface HeroProps {
  onNavigate: (page: string) => void;
}

const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setOffset(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative min-h-[95vh] flex items-center justify-center overflow-hidden pt-20 rounded-b-[3rem] md:rounded-b-[5rem] shadow-2xl z-10 mb-8 mx-0 md:mx-2 lg:mx-4 mt-2 md:mt-4 rounded-t-[2rem] md:rounded-t-[3rem]">
      {/* --- BACKGROUND LAYER: BRAND TEAL GRADIENT & ANIMATED BLOBS --- */}
      <div className="absolute inset-0 z-0">
         {/* Main Brand Gradient - Vibrant Teal */}
         <div className="absolute inset-0 bg-gradient-to-br from-[#04ACA9] via-[#039693] to-[#027A78]"></div>
         
         {/* Soft animated gradient blobs - Floating Effects */}
         <div className="absolute top-[-10%] right-[-10%] w-[700px] h-[700px] bg-white/10 rounded-full blur-[120px] animate-float mix-blend-overlay"></div>
         <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-[#8FC842]/30 rounded-full blur-[100px] animate-float-delayed mix-blend-soft-light"></div>
         
         {/* Central Glow */}
         <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#04ACA9] rounded-full blur-[150px] opacity-50 animate-pulse-slow"></div>

         {/* Noise texture overlay */}
         <div className="absolute inset-0 opacity-[0.05]" style={{backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`}}></div>
      </div>

      <div className="container mx-auto px-6 md:px-12 z-10 relative flex flex-col items-center text-center">
        
        {/* Pill Badge - Slide Down Animation */}
        <div className="inline-flex items-center gap-2 mb-8 px-4 py-1.5 rounded-full bg-white/20 backdrop-blur-md border border-white/30 shadow-lg animate-[reveal_1s_ease-out]">
          <div className="w-2 h-2 rounded-full bg-white animate-pulse"></div>
          <span className="text-white text-[10px] md:text-xs font-bold uppercase tracking-widest drop-shadow-sm">
            Phân phối hàng tiêu dùng
          </span>
        </div>

        {/* Main Headline - Staggered Reveal */}
        <h1 className="max-w-6xl mx-auto mb-6 drop-shadow-md">
          <span className="block text-4xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-tight mb-2 animate-[reveal_1s_ease-out_0.2s_both]">
            Kết Nối <span className="text-[#C2E8A0] relative inline-block">
              Chân Thành
              <svg className="absolute w-full h-3 -bottom-1 left-0 text-[#8FC842] opacity-60" viewBox="0 0 100 10" preserveAspectRatio="none">
                 <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="3" fill="none" />
              </svg>
            </span>
          </span>
          <span className="block text-3xl md:text-5xl lg:text-6xl font-bold text-white/95 tracking-tight animate-[reveal_1s_ease-out_0.4s_both]">
            Hợp Tác Bền Vững
          </span>
        </h1>
        
        {/* Description - Fade In */}
        <p className="text-white/90 text-sm md:text-lg font-medium max-w-2xl mx-auto leading-relaxed mb-10 drop-shadow-sm animate-[reveal_1s_ease-out_0.6s_both]">
          LYHU đồng hành cùng sự phát triển của bạn. Chúng tôi nỗ lực mỗi ngày để mang đến những sản phẩm chất lượng và giải pháp phân phối hiệu quả nhất.
        </p>

        {/* Actions - App Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto animate-[reveal_1s_ease-out_0.8s_both]">
            {/* White Button with Teal Text */}
            <button 
              onClick={() => onNavigate('business')} 
              className="group relative px-8 py-4 bg-white text-[#04ACA9] font-extrabold text-sm uppercase tracking-wider rounded-full shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2 overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-2">Về chúng tôi <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" /></span>
              <div className="absolute inset-0 bg-gray-50 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
            </button>
            
            {/* Green Brand Button with Shimmer Effect */}
            <button 
              onClick={() => onNavigate('contact')} 
              className="relative overflow-hidden px-8 py-4 bg-[#8FC842] text-white font-bold text-sm uppercase tracking-wider rounded-full shadow-lg shadow-[#8FC842]/40 hover:bg-[#7AB530] hover:scale-105 transition-all duration-300 border border-transparent group"
            >
              <div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/20 to-transparent z-10"></div>
              <span className="relative z-20 flex items-center gap-2"><Sparkles size={16} /> Liên hệ hợp tác</span>
            </button>
        </div>

        {/* Stats - Minimal with Hover Effects */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-16 mt-16 md:mt-24 pt-8 border-t border-white/20 w-full max-w-4xl animate-[reveal_1s_ease-out_1s_both]">
          {[
            { label: 'Uy tín', val: 'Hàng đầu' },
            { label: 'Sản phẩm', val: 'Chính hãng' },
            { label: 'Phục vụ', val: 'Tận tâm' },
            { label: 'Hợp tác', val: 'Bền vững' }
          ].map((stat, i) => (
            <div key={i} className="flex flex-col items-center group cursor-default">
               <span className="text-white font-black text-xl md:text-2xl mb-1 transform group-hover:scale-110 transition-transform duration-300">{stat.val}</span>
               <span className="text-white/70 text-[10px] uppercase font-bold tracking-widest group-hover:text-[#C2E8A0] transition-colors relative">
                  {stat.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#C2E8A0] group-hover:w-full transition-all duration-300"></span>
               </span>
            </div>
          ))}
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce opacity-80 cursor-pointer hover:text-[#C2E8A0] transition-colors" onClick={() => document.getElementById('business')?.scrollIntoView({ behavior: 'smooth' })}>
        <ChevronDown size={32} />
      </div>
    </section>
  );
};

export default Hero;
