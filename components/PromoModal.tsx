
import React, { useState, useEffect } from 'react';
import { X, Gift, ArrowRight, Sparkles, Calendar } from 'lucide-react';

const PromoModal: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  useEffect(() => {
    // Check if user has seen the modal in this session
    const hasSeenPromo = sessionStorage.getItem('lyhu_promo_seen');

    if (!hasSeenPromo) {
      // Show modal after 3 seconds delay for better UX
      const timer = setTimeout(() => {
        setIsOpen(true);
        sessionStorage.setItem('lyhu_promo_seen', 'true');
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      setIsOpen(false);
      setIsClosing(false);
    }, 300); // Match animation duration
  };

  const handleNavigate = () => {
    handleClose();
    // Wait for modal to close then scroll
    setTimeout(() => {
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
    <div className={`fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 transition-opacity duration-300 ${isClosing ? 'opacity-0' : 'opacity-100'}`}>
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={handleClose}
      ></div>

      {/* Modal Content */}
      <div className={`relative bg-white rounded-[2.5rem] shadow-2xl w-full max-w-3xl overflow-hidden flex flex-col md:flex-row transition-all duration-500 transform ${isClosing ? 'scale-95 translate-y-4' : 'scale-100 translate-y-0'} animate-in zoom-in-95 slide-in-from-bottom-8`}>
        
        {/* Close Button */}
        <button 
          onClick={handleClose}
          className="absolute top-4 right-4 z-20 p-2 bg-black/10 hover:bg-black/20 rounded-full text-gray-600 transition-colors"
        >
          <X size={20} />
        </button>

        {/* Left Side: Image & Visuals */}
        <div className="w-full md:w-5/12 bg-gradient-to-br from-[#04ACA9] to-[#027A78] relative overflow-hidden min-h-[200px] md:min-h-full flex items-center justify-center">
            {/* Animated Background */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-[50px] animate-pulse-slow"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#8FC842]/20 rounded-full blur-[40px]"></div>
            
            <div className="relative z-10 text-center p-6">
                <div className="w-24 h-24 bg-white/20 backdrop-blur-md rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-lg border border-white/20 animate-bounce-slow">
                    <Gift size={48} className="text-white" strokeWidth={1.5} />
                </div>
                <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#8FC842] text-white text-[10px] font-bold uppercase tracking-widest rounded-full shadow-lg animate-pulse">
                    <Sparkles size={12} fill="currentColor" /> Ưu đãi đặc biệt
                </div>
            </div>

            {/* Decorative Circles */}
            <div className="absolute -left-4 -bottom-4 w-20 h-20 bg-yellow-400 rounded-full mix-blend-overlay blur-xl"></div>
        </div>

        {/* Right Side: Content */}
        <div className="w-full md:w-7/12 p-8 md:p-10 bg-white relative">
            <div className="mb-6">
                <h2 className="text-3xl font-black text-gray-900 mb-2 leading-tight">
                    CHÀO MỪNG ĐỐI TÁC MỚI
                </h2>
                <p className="text-[#04ACA9] font-bold text-lg">Tháng {new Date().getMonth() + 1} - Bùng nổ doanh số</p>
            </div>

            <div className="space-y-4 mb-8">
                <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-orange-50 text-orange-500 flex items-center justify-center shrink-0 mt-1">
                        <span className="font-black text-sm">-20%</span>
                    </div>
                    <div>
                        <h4 className="font-bold text-gray-900">Chiết khấu đơn hàng đầu tiên</h4>
                        <p className="text-sm text-gray-500 font-medium">Dành cho Đại lý nhập hàng lần đầu trong tháng này.</p>
                    </div>
                </div>
                <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-500 flex items-center justify-center shrink-0 mt-1">
                        <Gift size={20} />
                    </div>
                    <div>
                        <h4 className="font-bold text-gray-900">Tặng kệ trưng bày sản phẩm</h4>
                        <p className="text-sm text-gray-500 font-medium">Bộ POSM & Kệ trưng bày chuẩn LYHU trị giá 2 triệu đồng.</p>
                    </div>
                </div>
            </div>

            <div className="flex gap-3">
                <button 
                    onClick={handleNavigate}
                    className="flex-1 py-3.5 bg-[#04ACA9] hover:bg-[#038C89] text-white font-bold rounded-xl shadow-lg shadow-[#04ACA9]/30 transition-all flex items-center justify-center gap-2 group"
                >
                    Đăng ký ngay <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </button>
                <button 
                    onClick={handleClose}
                    className="px-6 py-3.5 bg-gray-100 hover:bg-gray-200 text-gray-600 font-bold rounded-xl transition-colors"
                >
                    Để sau
                </button>
            </div>
            
            <p className="text-[10px] text-gray-400 text-center mt-4 font-medium">
                *Số lượng ưu đãi có hạn. Áp dụng theo điều khoản chương trình.
            </p>
        </div>
      </div>
    </div>
  );
};

export default PromoModal;
