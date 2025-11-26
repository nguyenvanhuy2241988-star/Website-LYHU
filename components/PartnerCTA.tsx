
import React from 'react';
import { ArrowRight, Sparkles, Check } from 'lucide-react';

interface PartnerCTAProps {
  onNavigate: (page: string) => void;
}

const PartnerCTA: React.FC<PartnerCTAProps> = ({ onNavigate }) => {
  return (
    <section className="py-16 px-4 md:px-8 bg-gray-50">
      <div className="container mx-auto max-w-7xl">
        <div className="relative rounded-[2.5rem] overflow-hidden bg-gradient-to-r from-[#04ACA9] to-[#8FC842] shadow-2xl shadow-[#04ACA9]/20 animate-on-scroll group">
           {/* Background Effects */}
           <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-white/10 rounded-full blur-[100px] mix-blend-overlay pointer-events-none animate-pulse-slow"></div>
           <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-black/5 rounded-full blur-[80px] pointer-events-none"></div>
           {/* Animated Pattern */}
           <div className="absolute inset-0 opacity-10 transition-opacity duration-700 group-hover:opacity-20" style={{backgroundImage: 'radial-gradient(circle at center, white 2px, transparent 2px)', backgroundSize: '40px 40px'}}></div>

           <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between p-10 md:p-16 gap-10">
              <div className="text-white max-w-3xl text-center lg:text-left">
                  <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/20 backdrop-blur-sm border border-white/20 text-xs font-bold uppercase tracking-widest mb-6 shadow-sm animate-in slide-in-from-left duration-700">
                      <Sparkles size={14} className="fill-current animate-pulse" /> Cơ hội kinh doanh
                  </div>
                  <h2 className="text-3xl md:text-5xl font-black mb-6 leading-tight tracking-tight">
                      Trở thành Đối tác Phân phối của LYHU ngay hôm nay
                  </h2>
                  <p className="text-white/90 text-lg font-medium leading-relaxed mb-10 max-w-2xl">
                      Nhận chính sách chiết khấu hấp dẫn, hỗ trợ Marketing toàn diện và độc quyền khu vực. Cùng chúng tôi kiến tạo thành công bền vững.
                  </p>
                  
                  <div className="flex flex-wrap justify-center lg:justify-start gap-4 md:gap-8">
                      {['Chiết khấu cao', 'Hỗ trợ 24/7', 'Vốn linh hoạt', 'Độc quyền vùng'].map((benefit, idx) => (
                          <div key={idx} className="flex items-center gap-2 text-sm font-bold bg-white/10 px-4 py-2 rounded-xl backdrop-blur-sm border border-white/10">
                              <Check size={16} className="text-[#C2E8A0]" strokeWidth={3} />
                              {benefit}
                          </div>
                      ))}
                  </div>
              </div>

              <div className="shrink-0">
                  <button 
                    onClick={() => {
                        onNavigate('contact');
                        // Wait for navigation to complete then click the tab
                        setTimeout(() => {
                            const partnerTabBtn = document.getElementById('tab-partner');
                            if(partnerTabBtn) partnerTabBtn.click();
                        }, 300);
                    }}
                    className="group relative px-10 py-6 bg-white text-[#04ACA9] rounded-[2rem] font-black uppercase tracking-wider shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 overflow-hidden"
                  >
                      <span className="relative z-10 flex items-center gap-3 text-sm md:text-base">
                          Đăng ký ngay <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                      </span>
                      <div className="absolute inset-0 bg-gray-50 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
                  </button>
                  <p className="text-white/70 text-xs font-bold text-center mt-4">
                      *Đăng ký nhanh trong 1 phút
                  </p>
              </div>
           </div>
        </div>
      </div>
    </section>
  );
};

export default PartnerCTA;
