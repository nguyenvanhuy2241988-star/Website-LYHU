
import React from 'react';
import { CONTACT_INFO } from '../constants';
import { MapPin, Phone, Mail, Facebook, Linkedin, ArrowRight, Send, Lock } from 'lucide-react';

interface FooterProps {
  onNavigate?: (page: string) => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    // Main Footer Background - Deep Teal Gradient matching Brand
    <footer className="bg-gradient-to-b from-[#04ACA9] to-[#026E6C] text-white pt-24 pb-10 rounded-t-[3rem] mt-12 relative overflow-hidden">
        {/* Background Accents */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-white/10 rounded-full blur-[120px] pointer-events-none mix-blend-overlay"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#8FC842]/20 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        
        {/* Top CTA & Newsletter Section - White Card for Contrast on Teal */}
        <div className="bg-white text-gray-800 rounded-[2rem] p-8 md:p-12 border border-white/50 mb-20 flex flex-col lg:flex-row gap-10 items-center justify-between shadow-2xl">
            <div className="lg:w-1/2">
                <h2 className="text-3xl font-bold mb-3 text-[#04ACA9]">Đăng ký nhận bản tin</h2>
                <p className="text-gray-500 font-medium">Nhận thông tin thị trường FMCG, xu hướng sản phẩm mới và các chương trình khuyến mãi độc quyền từ LYHU.</p>
            </div>
            <div className="lg:w-1/2 w-full">
                <form className="flex flex-col sm:flex-row gap-3">
                    <input 
                        type="email" 
                        placeholder="Địa chỉ Email của bạn" 
                        className="flex-grow px-6 py-4 rounded-xl bg-gray-50 text-gray-800 placeholder-gray-400 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#04ACA9] transition-all"
                    />
                    <button type="button" className="px-8 py-4 bg-[#04ACA9] hover:bg-[#038C89] text-white font-bold rounded-xl transition-all shadow-lg shadow-[#04ACA9]/20 flex items-center justify-center gap-2 group whitespace-nowrap transform hover:-translate-y-0.5">
                        Đăng ký <Send size={16} className="group-hover:translate-x-1 transition-transform" />
                    </button>
                </form>
            </div>
        </div>

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-16">
           
           {/* Column 1: Brand (4 cols) */}
           <div className="lg:col-span-4 space-y-6">
             <div className="bg-white p-4 rounded-2xl inline-block shadow-sm">
                {/* Logo displayed in original color on white card */}
                <img 
                  src={CONTACT_INFO.logoUrl} 
                  alt="LYHU Logo" 
                  className="h-12 w-auto object-contain" 
                  onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = 'https://placehold.co/200x80?text=LYHU';
                  }}
                />
             </div>
             <p className="text-white/90 text-sm leading-relaxed pr-4 border-l-2 border-[#8FC842] pl-4 font-medium">
               {CONTACT_INFO.slogan}.<br/>
               Chúng tôi cam kết mang đến những sản phẩm chất lượng và giải pháp phân phối hiệu quả nhất cho thị trường Việt Nam.
             </p>
             <div className="flex gap-3 pt-2">
                {/* Social Icons */}
                <a href={CONTACT_INFO.facebook} target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-white/20 border border-white/20 flex items-center justify-center hover:bg-white hover:text-[#04ACA9] transition-all text-white shadow-sm">
                    <Facebook size={18} />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-white/20 border border-white/20 flex items-center justify-center hover:bg-white hover:text-[#04ACA9] transition-all text-white shadow-sm">
                    <Linkedin size={18} />
                </a>
                 <a href={`mailto:${CONTACT_INFO.email}`} className="w-10 h-10 rounded-full bg-white/20 border border-white/20 flex items-center justify-center hover:bg-white hover:text-[#04ACA9] transition-all text-white shadow-sm">
                    <Mail size={18} />
                </a>
             </div>
           </div>
           
           {/* Column 2: Quick Links (2 cols) */}
           <div className="lg:col-span-2">
              <h3 className="text-lg font-bold mb-6 text-white flex items-center gap-2">
                  Liên kết
                  <span className="w-1.5 h-1.5 rounded-full bg-[#8FC842]"></span>
              </h3>
              <ul className="space-y-3">
                  {['Trang chủ', 'Về chúng tôi', 'Sản phẩm', 'Tin tức', 'Tuyển dụng'].map((item) => (
                      <li key={item}>
                          <a href="#" className="text-white/80 hover:text-white transition-colors text-sm font-medium block hover:translate-x-1 duration-200">{item}</a>
                      </li>
                  ))}
              </ul>
           </div>

             {/* Column 3: Policy Links (2 cols) */}
             <div className="lg:col-span-2">
              <h3 className="text-lg font-bold mb-6 text-white flex items-center gap-2">
                  Hỗ trợ
                  <span className="w-1.5 h-1.5 rounded-full bg-[#8FC842]"></span>
              </h3>
              <ul className="space-y-3">
                  {['Chính sách bảo mật', 'Điều khoản sử dụng', 'Chính sách đổi trả', 'Liên hệ báo giá'].map((item) => (
                      <li key={item}>
                          <a href="#" className="text-white/80 hover:text-white transition-colors text-sm font-medium block hover:translate-x-1 duration-200">{item}</a>
                      </li>
                  ))}
              </ul>
           </div>

           {/* Column 4: Contact Info (4 cols) */}
           <div className="lg:col-span-4">
              <h3 className="text-lg font-bold mb-6 text-white flex items-center gap-2">
                  Liên hệ
                  <span className="w-1.5 h-1.5 rounded-full bg-[#8FC842]"></span>
              </h3>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 space-y-5 shadow-lg">
                 <div className="flex items-start gap-4">
                    <div className="mt-1 w-8 h-8 rounded-full bg-white/20 flex items-center justify-center text-white shrink-0 shadow-inner">
                        <MapPin size={16} />
                    </div>
                    <div>
                        <span className="text-[10px] font-bold text-white/70 uppercase tracking-wider block mb-1">Văn phòng</span>
                        <span className="text-white text-sm leading-relaxed block font-medium">{CONTACT_INFO.address}</span>
                    </div>
                 </div>
                 <div className="flex items-start gap-4">
                    <div className="mt-1 w-8 h-8 rounded-full bg-white/20 flex items-center justify-center text-white shrink-0 shadow-inner">
                        <Phone size={16} />
                    </div>
                    <div>
                        <span className="text-[10px] font-bold text-white/70 uppercase tracking-wider block mb-1">Hotline</span>
                        <span className="text-white text-lg font-bold block">{CONTACT_INFO.phone}</span>
                    </div>
                 </div>
                 <div className="flex items-start gap-4">
                    <div className="mt-1 w-8 h-8 rounded-full bg-white/20 flex items-center justify-center text-white shrink-0 shadow-inner">
                        <Mail size={16} />
                    </div>
                    <div>
                        <span className="text-[10px] font-bold text-white/70 uppercase tracking-wider block mb-1">Email</span>
                        <span className="text-white text-sm font-medium block">{CONTACT_INFO.email}</span>
                    </div>
                 </div>
              </div>
           </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-white/70 font-medium">
          <p>© {new Date().getFullYear()} CÔNG TY TNHH LYHU. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0 items-center">
             {onNavigate && (
                 <button 
                    onClick={() => onNavigate('admin')}
                    className="flex items-center gap-1 hover:text-white transition-colors opacity-70 hover:opacity-100"
                 >
                    <Lock size={12} /> Quản trị viên
                 </button>
             )}
             <span className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-[#8FC842] animate-pulse"></div> System Online</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
