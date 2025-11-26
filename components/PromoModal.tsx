
import React, { useState, useEffect } from 'react';
import { X, Gift, ArrowRight, Sparkles, Percent } from 'lucide-react';

const PromoModal: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  useEffect(() => {
    // Check if user has seen the modal in this session
    const hasSeenPromo = sessionStorage.getItem('lyhu_promo_seen');

    if (!hasSeenPromo) {
      // Show modal after 2 seconds delay for better UX
      const timer = setTimeout(() => {
        setIsOpen(true);
        sessionStorage.setItem('lyhu_promo_seen', 'true');
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      setIsOpen(false);
      setIsClosing(false);
    }, 300);
  };

  const handleNavigate = () => {
    setIsClosing(true);
    setTimeout(() => {
        setIsOpen(false);
        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
        // Simulate clicking the partner tab if it exists
        setTimeout(() => {
            const partnerTabBtn = document.getElementById('tab-partner');
            if(partnerTabBtn) partnerTabBtn.click();
        }, 500);
    }, 300);
  };

  if (!isOpen) return null;

  return (
    <div className={`fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 transition-all duration-500 ${isClosing ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-gray-900/60 backdrop-blur-sm transition-opacity"
        onClick={handleClose}
      ></div>

      {/* Modal Content */}
      <div className={`relative bg-white rounded-[2.5rem] shadow-2xl w-full max-w-4xl overflow-hidden flex flex-col md:flex-row transition-all duration-500 transform ${isClosing ? 'scale-95 translate-y-4' : 'scale-100 translate-y-0'} animate-in zoom-in-95 slide-in-from-bottom-8`}>
        
        {/* Close Button */}
        <button 
          onClick={handleClose}
          className="absolute top-4 right-4 z-50 p-2 bg-black/5 hover:bg-black/10 rounded-full text-gray-500 transition-colors"
        >
          <X size={24} />
        </button>

        {/* Left Side: Image & Visuals - Brand Gradient */}
        <div className="w-full md:w-5/12 bg-gradient-to-br from-[#04ACA9] via-[#039693] to-[#027A78] relative overflow-hidden min-h-[220px] md:min-h-full flex items-center justify-center p-8">
            {/* Animated Background Elements */}
            <div className="absolute top-[-20%] right-[-20%] w-64 h-64 bg-white/10 rounded-full blur-[50px] animate-pulse-slow"></div>
            <div className="absolute bottom-[-20%] left-[-20%] w-64 h-64 bg-[#8FC842]/30 rounded-full blur-[60px] animate-float"></div>
            
            <div className="relative z-10 text-center">
                <div className="inline-block relative">
                    {/* Floating Gift Box */}
                    <div className="w-28 h-28 bg-white/10 backdrop-blur-md rounded-[2rem] flex items-center justify-center mb-6 shadow-xl border border-white/20 animate-float">
                        <Gift size={56} className="text-white drop-shadow-md" strokeWidth={1.5} />
                    </div>
                    {/* Badge */}
                    <div className="absolute -top-2 -right-4 bg-[#8FC842] text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg animate-bounce">
                        HOT
                    </div>
                </div>
                
                <h3 className="text-white font-bold text-xl mb-1 drop-shadow-sm">Ưu Đãi Tháng {new Date().getMonth() + 1}</h3>
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/20 rounded-full border border-white/20 text-white/90 text-xs font-bold uppercase tracking-widest">
                    <Sparkles size={12} fill="currentColor" /> Limited Time
                </div>
            </div>
        </div>

        {/* Right Side: Content */}
        <div className="w-full md:w-7/12 p-8 md:p-12 bg-white relative flex flex-col justify-center">
            <div className="mb-8">
                <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-3 leading-tight">
                    Chào Mừng <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#04ACA9] to-[#8FC842]">Đối Tác Mới</span>
                </h2>
                <p className="text-gray-500 font-medium text-sm md:text-base leading-relaxed">
                    Cơ hội vàng để mở rộng kinh doanh cùng hệ sinh thái sản phẩm LYHU. Đăng ký ngay để nhận gói hỗ trợ đặc biệt.
                </p>
            </div>

            <div className="space-y-4 mb-10">
                {/* Benefit 1 */}
                <div className="flex items-center gap-4 p-4 rounded-2xl bg-orange-50 border border-orange-100 group hover:border-orange-200 transition-colors">
                    <div className="w-12 h-12 rounded-xl bg-white text-orange-500 shadow-sm flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                        <Percent size={24} strokeWidth={2.5} />
                    </div>
                    <div>
                        <h4 className="font-bold text-gray-900">Chiết khấu lên đến 40%</h4>
                        <p className="text-xs text-gray-500 font-medium">Cho đơn hàng nhập kho đầu tiên.</p>
                    </div>
                </div>

                {/* Benefit 2 */}
                <div className="flex items-center gap-4 p-4 rounded-2xl bg-blue-50 border border-blue-100 group hover:border-blue-200 transition-colors">
                    <div className="w-12 h-12 rounded-xl bg-white text-blue-500 shadow-sm flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                        <Gift size={24} strokeWidth={2.5} />
                    </div>
                    <div>
                        <h4 className="font-bold text-gray-900">Tặng gói POSM 2 Triệu</h4>
                        <p className="text-xs text-gray-500 font-medium">Kệ trưng bày, áo thun, dù & banner.</p>
                    </div>
                </div>
            </div>

            <div className="flex gap-4">
                <button 
                    onClick={handleNavigate}
                    className="flex-1 py-4 bg-[#04ACA9] hover:bg-[#038C89] text-white font-bold rounded-2xl shadow-lg shadow-[#04ACA9]/30 transition-all transform hover:-translate-y-1 flex items-center justify-center gap-2 group"
                >
                    Nhận ưu đãi ngay <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </button>
            </div>
            
            <p className="text-[10px] text-gray-400 text-center mt-6 font-medium">
                *Chương trình áp dụng cho Đại lý & NPP mới đăng ký trong tháng.
            </p>
        </div>
      </div>
    </div>
  );
};

export default PromoModal;
