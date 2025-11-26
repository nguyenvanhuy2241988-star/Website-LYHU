
import React from 'react';
import SectionTitle from './SectionTitle';
import { APP_FEATURES, APP_STEPS } from '../constants';
import { Smartphone, Check, Star } from 'lucide-react';

const DownloadApp: React.FC = () => {
  return (
    <div className="pt-24 pb-20 bg-white">
      {/* Hero Section */}
      <div className="container mx-auto px-4 md:px-8">
        <div className="bg-gradient-to-br from-[#04ACA9] to-[#026E6C] rounded-[3rem] overflow-hidden shadow-2xl relative">
          {/* Background Decor */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/10 rounded-full blur-[100px] animate-pulse-slow"></div>
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#8FC842]/20 rounded-full blur-[80px]"></div>

          <div className="grid lg:grid-cols-2 gap-12 items-center p-8 md:p-16 relative z-10">
            <div className="text-white order-2 lg:order-1">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/20 rounded-full border border-white/20 mb-6 backdrop-blur-sm shadow-lg animate-in fade-in slide-in-from-left duration-700">
                <Smartphone size={16} className="fill-current" />
                <span className="text-xs font-bold uppercase tracking-widest">LYHU App</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight">
                Đặt hàng tiện lợi <br/> Ưu đãi mỗi ngày
              </h1>
              <p className="text-lg font-medium text-white/90 mb-10 leading-relaxed max-w-xl">
                Trải nghiệm mua sắm thông minh với ứng dụng LYHU. Tích điểm đổi quà, theo dõi đơn hàng và nhận thông báo khuyến mãi độc quyền.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-black text-white px-6 py-3 rounded-xl flex items-center gap-3 hover:scale-105 transition-transform shadow-xl">
                  <div className="text-2xl"><i className="fab fa-apple"></i></div> {/* FontAwesome or SVG placeholder */}
                  <div className="text-left">
                    <div className="text-[10px] uppercase tracking-wider">Download on the</div>
                    <div className="text-lg font-bold leading-none">App Store</div>
                  </div>
                </button>
                <button className="bg-black text-white px-6 py-3 rounded-xl flex items-center gap-3 hover:scale-105 transition-transform shadow-xl">
                  <div className="text-2xl"><i className="fab fa-google-play"></i></div> {/* FontAwesome or SVG placeholder */}
                  <div className="text-left">
                    <div className="text-[10px] uppercase tracking-wider">Get it on</div>
                    <div className="text-lg font-bold leading-none">Google Play</div>
                  </div>
                </button>
              </div>
              
              <div className="mt-8 flex items-center gap-2 text-sm font-medium text-white/80">
                <div className="flex">
                  {[1, 2, 3, 4, 5].map(i => <Star key={i} size={16} className="fill-yellow-400 text-yellow-400" />)}
                </div>
                <span>4.9/5 đánh giá từ khách hàng</span>
              </div>
            </div>

            <div className="order-1 lg:order-2 flex justify-center relative">
               {/* Phone Mockup Placeholder */}
               <div className="relative w-64 md:w-72 h-[500px] md:h-[550px] bg-gray-900 rounded-[3rem] border-[8px] border-gray-800 shadow-2xl overflow-hidden transform rotate-[-5deg] hover:rotate-0 transition-all duration-500">
                  {/* Screen Content */}
                  <div className="absolute inset-0 bg-white flex flex-col">
                      <div className="h-8 bg-gray-100 border-b border-gray-200 flex justify-center items-center">
                          <div className="w-20 h-4 bg-gray-200 rounded-full"></div>
                      </div>
                      <div className="flex-grow bg-gray-50 p-4">
                          {/* Fake App UI */}
                          <div className="flex justify-between items-center mb-6">
                              <div className="w-8 h-8 bg-gray-200 rounded-full"></div>
                              <div className="w-24 h-4 bg-gray-200 rounded"></div>
                              <div className="w-8 h-8 bg-gray-200 rounded-full"></div>
                          </div>
                          <div className="h-32 bg-[#04ACA9] rounded-2xl mb-4 shadow-lg opacity-80"></div>
                          <div className="grid grid-cols-2 gap-3">
                              {[1, 2, 3, 4].map(i => (
                                  <div key={i} className="h-24 bg-white rounded-xl shadow-sm"></div>
                              ))}
                          </div>
                      </div>
                      {/* Bottom Nav */}
                      <div className="h-16 bg-white border-t border-gray-100 flex justify-around items-center px-4">
                          {[1, 2, 3, 4].map(i => (
                              <div key={i} className={`w-6 h-6 rounded-full ${i === 1 ? 'bg-[#04ACA9]' : 'bg-gray-200'}`}></div>
                          ))}
                      </div>
                  </div>
               </div>
               
               {/* Decorative elements around phone */}
               <div className="absolute top-1/2 -right-8 bg-white p-3 rounded-xl shadow-lg animate-bounce">
                   <span className="text-xs font-bold text-[#04ACA9]">Free Ship!</span>
               </div>
               <div className="absolute bottom-20 -left-8 bg-white p-3 rounded-xl shadow-lg animate-pulse">
                   <span className="text-xs font-bold text-orange-500">-50% Voucher</span>
               </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-20 bg-gray-50 mt-12">
          <div className="container mx-auto px-4 md:px-8">
              <SectionTitle title="TẠI SAO NÊN TẢI APP?" subtitle="Trải nghiệm mua sắm vượt trội dành riêng cho bạn" />
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
                  {APP_FEATURES.map((feature, idx) => (
                      <div key={idx} className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-lg transition-all border border-gray-100 group">
                          <div className="w-14 h-14 bg-teal-50 rounded-2xl flex items-center justify-center mb-6 text-[#04ACA9] group-hover:scale-110 transition-transform">
                              <feature.icon size={28} />
                          </div>
                          <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-[#04ACA9] transition-colors">{feature.title}</h3>
                          <p className="text-sm text-gray-500 leading-relaxed font-medium">{feature.desc}</p>
                      </div>
                  ))}
              </div>
          </div>
      </div>

      {/* Steps Section */}
      <div className="py-20 container mx-auto px-4 md:px-8">
          <SectionTitle title="HƯỚNG DẪN ĐẶT HÀNG" subtitle="4 bước đơn giản để nhận hàng ngay tại nhà" />
          
          <div className="grid md:grid-cols-4 gap-8 mt-12 relative">
              {/* Connector Line (Desktop) */}
              <div className="hidden md:block absolute top-8 left-[12%] right-[12%] h-0.5 bg-gray-200 border-t-2 border-dashed border-gray-300 z-0"></div>

              {APP_STEPS.map((step, idx) => (
                  <div key={idx} className="relative z-10 flex flex-col items-center text-center group">
                      <div className="w-16 h-16 bg-white border-4 border-gray-100 rounded-full flex items-center justify-center text-[#04ACA9] shadow-lg mb-6 group-hover:border-[#04ACA9] transition-colors duration-300">
                          <step.icon size={24} />
                      </div>
                      <div className="bg-gray-100 text-gray-500 text-[10px] font-bold px-3 py-1 rounded-full mb-3 group-hover:bg-[#04ACA9] group-hover:text-white transition-colors">
                          BƯỚC {step.step}
                      </div>
                      <h4 className="text-lg font-bold text-gray-900 mb-2">{step.title}</h4>
                      <p className="text-sm text-gray-500">{step.desc}</p>
                  </div>
              ))}
          </div>
      </div>
    </div>
  );
};

export default DownloadApp;
