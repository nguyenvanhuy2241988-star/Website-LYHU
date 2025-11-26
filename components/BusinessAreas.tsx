
import React from 'react';
import SectionTitle from './SectionTitle';
import { Factory, Ship, Briefcase, ShoppingCart, Check, Crown, Settings, Globe, TrendingUp, Store, Star, Award, Zap, Utensils, MapPin } from 'lucide-react';

const BusinessAreas: React.FC = () => {
  const areas = [
    {
      title: "SẢN XUẤT",
      subtitle: "Nhà máy & R&D",
      icon: Factory,
      description: "Hệ thống nhà máy chuẩn ISO 22000. Nghiên cứu & phát triển sản phẩm chất lượng.",
      illustration: (
        <div className="w-full h-full bg-[#E6F7F7] relative overflow-hidden group-hover:bg-[#d0f0f0] transition-colors duration-500">
           <div className="absolute -right-8 -top-8 w-32 h-32 bg-lyhu-teal/20 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700"></div>
           <div className="absolute -left-8 -bottom-8 w-32 h-32 bg-lyhu-green/20 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700"></div>
           <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative">
                 <div className="absolute inset-0 border-2 border-dashed border-lyhu-teal/30 rounded-full animate-[spin_10s_linear_infinite]"></div>
                 <div className="w-24 h-24 bg-white rounded-2xl shadow-sm flex items-center justify-center relative z-10 transform group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500">
                    <Factory size={40} className="text-lyhu-teal" strokeWidth={1.5} />
                 </div>
                 <div className="absolute -top-6 -right-6 w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center animate-bounce">
                    <Settings size={20} className="text-lyhu-green" strokeWidth={2} />
                 </div>
              </div>
           </div>
        </div>
      ),
      highlight: true, 
      features: ["Thương hiệu BOYO", "Công nghệ cao", "QC 100%"]
    },
    {
      title: "NHẬP KHẨU",
      subtitle: "Chính ngạch",
      icon: Ship,
      description: "Đối tác chiến lược của các tập đoàn FMCG. Nhập khẩu minh bạch.",
      illustration: (
        <div className="w-full h-full bg-blue-50 relative overflow-hidden group-hover:bg-blue-100 transition-colors duration-500">
            <div className="absolute top-0 right-0 w-full h-full transition-opacity duration-500 group-hover:opacity-20" style={{backgroundImage: 'radial-gradient(#3b82f6 1px, transparent 1px)', backgroundSize: '20px 20px', opacity: 0.1}}></div>
            <div className="absolute inset-0 flex items-center justify-center">
               <div className="relative w-full h-full flex items-center justify-center">
                  <div className="w-32 h-32 border border-blue-200 rounded-full absolute group-hover:scale-125 transition-transform duration-700"></div>
                  <div className="w-40 h-40 border border-blue-100 rounded-full absolute group-hover:scale-110 transition-transform duration-700"></div>
                  <div className="w-24 h-24 bg-white rounded-full shadow-sm flex items-center justify-center relative z-10 transform group-hover:-rotate-12 group-hover:scale-110 transition-transform duration-500">
                     <Ship size={40} className="text-blue-500" strokeWidth={1.5} />
                  </div>
                  <div className="absolute top-8 right-12 w-8 h-8 bg-white rounded-lg shadow-sm flex items-center justify-center animate-float">
                      <Globe size={16} className="text-blue-400" />
                  </div>
               </div>
            </div>
        </div>
      ),
      highlight: false,
      features: ["Nguồn gốc rõ ràng", "Đa dạng ngành", "Hợp tác quốc tế"]
    },
    {
      title: "THƯƠNG MẠI",
      subtitle: "Phân phối B2B",
      icon: Briefcase,
      description: "Mạng lưới phân phối 63 tỉnh thành. Chính sách linh hoạt.",
      illustration: (
        <div className="w-full h-full bg-emerald-50 relative overflow-hidden group-hover:bg-emerald-100 transition-colors duration-500">
            <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-emerald-100/50 to-transparent"></div>
            <div className="absolute inset-0 flex items-center justify-center pt-4">
                <div className="flex items-end gap-3 h-24">
                   <div className="w-6 h-12 bg-white rounded-t-lg shadow-sm relative group-hover:h-16 transition-all duration-300"></div>
                   <div className="w-6 h-16 bg-lyhu-green/40 rounded-t-lg shadow-sm relative group-hover:h-20 transition-all duration-300 delay-75"></div>
                   <div className="w-6 h-24 bg-lyhu-green rounded-t-lg shadow-md relative flex items-center justify-center group-hover:h-28 transition-all duration-300 delay-100 group-hover:-translate-y-2">
                      <TrendingUp size={16} className="text-white mb-2" />
                   </div>
                   <div className="absolute top-1/2 left-0 w-full h-32 border-t-2 border-dashed border-emerald-200 -rotate-12 transform origin-left"></div>
                </div>
            </div>
        </div>
      ),
      highlight: false,
      features: ["Chiết khấu tốt", "Hỗ trợ Marketing", "Kho vận tối ưu"]
    },
    {
      title: "BÁN LẺ",
      subtitle: "Kênh MT & GT",
      icon: ShoppingCart,
      description: "Phủ sóng siêu thị & điểm bán lẻ. Tiếp cận người dùng cuối.",
      illustration: (
        <div className="w-full h-full bg-orange-50 relative overflow-hidden group-hover:bg-orange-100 transition-colors duration-500">
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-orange-200/20 rounded-full mix-blend-multiply filter blur-xl animate-pulse-slow"></div>
            <div className="absolute inset-0 flex items-center justify-center">
               <div className="relative">
                  <div className="w-28 h-20 bg-white rounded-xl shadow-sm flex flex-col items-center justify-center relative z-10 transform group-hover:translate-y-1 group-hover:scale-105 transition-transform duration-300 border-b-4 border-orange-200">
                      <Store size={32} className="text-orange-500 mb-1" strokeWidth={1.5} />
                      <div className="w-12 h-1 bg-gray-100 rounded-full mt-2"></div>
                  </div>
                  <div className="absolute -right-4 -top-4 w-10 h-10 bg-lyhu-dark rounded-full flex items-center justify-center shadow-lg transform rotate-12 group-hover:rotate-180 transition-transform duration-700">
                      <span className="text-white text-[10px] font-bold">%</span>
                  </div>
               </div>
            </div>
        </div>
      ),
      highlight: false,
      features: ["Đa kênh", "Trải nghiệm tốt", "CSKH 24/7"]
    }
  ];

  // Updated colors to match Logo analysis
  const brands = [
    {
      name: "BOYO",
      logo: "BOYO", 
      logoUrl: "https://drive.google.com/thumbnail?id=18S5Pe52quMkvtZmRt5vCAwR3BVXaWJuk&sz=w1000",
      tag: "Thương hiệu riêng",
      origin: "Việt Nam",
      // BOYO: Blue (from outline/shadow)
      color: "bg-blue-50 text-blue-700 border-blue-200",
      icon: Crown,
      desc: "Gia vị rắc & Snack",
      subDesc: "Bỏng ngô, gà rán, khoai tây..."
    },
    {
      name: "CVT",
      logo: "CVT",
      logoUrl: "https://drive.google.com/thumbnail?id=15nhC20zE7ulpESkh_WfjWNrr9Hkrff8A&sz=w1000",
      tag: "Trung Quốc",
      origin: "Trung Quốc",
      // CVT: Green (from hexagon)
      color: "bg-green-50 text-green-700 border-green-200",
      icon: Globe,
      desc: "Khoai môn tẩm vị",
      subDesc: "Dòng sản phẩm cao cấp"
    },
    {
      name: "UHi",
      logo: "UHi",
      logoUrl: "https://drive.google.com/thumbnail?id=1Mb3p6UdcHGwrUSoghO5bfXxB70QUvXYc&sz=w1000",
      tag: "Hàn Quốc",
      origin: "Hàn Quốc",
      // UHi: Red (from pill shape background)
      color: "bg-red-50 text-red-700 border-red-200",
      icon: Star,
      desc: "Kẹo dẻo siêu chua",
      subDesc: "Hương vị Trend giới trẻ"
    },
    {
      name: "ABI SNACK",
      logo: "ABI",
      logoUrl: "https://drive.google.com/thumbnail?id=1VJmK-iUrzUrczRlldGtfUPGftHMOzzag&sz=w1000",
      tag: "Việt Nam",
      origin: "Việt Nam",
      // ABI: Orange (from character/vibe)
      color: "bg-orange-50 text-orange-700 border-orange-200",
      icon: Zap,
      desc: "Bánh tráng trộn",
      subDesc: "Đặc sản cao cấp"
    }
  ];

  return (
    <section id="business" className="py-20 px-4 md:px-8 bg-gray-50/50">
      <div className="container mx-auto max-w-7xl">
        <div className="animate-on-scroll">
            <SectionTitle 
            title="LĨNH VỰC HOẠT ĐỘNG" 
            subtitle="4 trụ cột tạo nên sức mạnh tổng hợp của LYHU." 
            />
        </div>
        
        {/* Business Areas Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
          {areas.map((area, idx) => (
            <div 
              key={idx}
              className={`group flex flex-col h-full bg-white rounded-app-lg shadow-app hover:shadow-app-hover hover:-translate-y-3 transition-all duration-500 overflow-hidden relative cursor-default border border-white animate-on-scroll ${area.highlight ? 'ring-2 ring-lyhu-teal ring-offset-2 ring-offset-gray-50' : ''}`}
              style={{ transitionDelay: `${idx * 100}ms` }}
            >
              {/* Illustration Area */}
              <div className="relative h-48 overflow-hidden rounded-t-app-lg m-2 mb-0">
                 {area.illustration}
              </div>

              {/* Content Area */}
              <div className="p-6 flex flex-col flex-grow">
                <div className="mb-3">
                   {area.highlight && (
                      <span className="inline-flex items-center gap-1 text-[10px] font-bold uppercase text-amber-500 bg-amber-50 px-2 py-0.5 rounded-full mb-2 animate-pulse">
                        <Crown size={10} fill="currentColor" /> Signature
                      </span>
                   )}
                   <p className="text-[10px] font-bold uppercase text-gray-400 tracking-wider mb-1">
                      {area.subtitle}
                   </p>
                   <h3 className="text-lg font-bold text-gray-900 group-hover:text-lyhu-teal transition-colors">{area.title}</h3>
                </div>

                <p className="text-gray-500 text-sm leading-6 font-medium mb-6 line-clamp-3">
                  {area.description}
                </p>

                {/* Mini Features */}
                <div className="mt-auto space-y-2">
                    {area.features.map((feature, fIdx) => (
                        <div key={fIdx} className="flex items-center gap-2 text-xs font-semibold text-gray-600">
                            <div className="w-4 h-4 rounded-full bg-lyhu-teal/10 flex items-center justify-center text-lyhu-teal shrink-0">
                              <Check size={10} strokeWidth={4} />
                            </div>
                            {feature}
                        </div>
                    ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* --- BRAND ECOSYSTEM (Redesigned - Light Theme) --- */}
        <div className="relative pt-12">
             {/* Section Header */}
            <div className="text-center mb-16 animate-on-scroll">
                <div className="inline-flex items-center justify-center p-3 bg-white shadow-sm rounded-2xl mb-4 border border-gray-100 animate-bounce-slow">
                    <Award className="text-lyhu-teal" size={24} />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">HỆ SINH THÁI THƯƠNG HIỆU</h3>
                <p className="text-gray-500 text-sm md:text-base max-w-2xl mx-auto">
                    Quy tụ những thương hiệu chất lượng, đa dạng nguồn gốc và hương vị.
                </p>
            </div>

            {/* Brand Cards - Clean & White */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {brands.map((brand, idx) => (
                    <div 
                        key={idx}
                        className="group relative bg-white rounded-[2.5rem] p-2 shadow-app hover:shadow-floating hover:-translate-y-3 transition-all duration-300 border border-gray-100 flex flex-col h-full animate-on-scroll"
                        style={{ transitionDelay: `${idx * 150}ms` }}
                    >
                        {/* Card Content Wrapper */}
                        <div className="flex flex-col h-full bg-gray-50/50 rounded-[2rem] p-6 overflow-hidden relative">
                             
                             {/* Background Decoration */}
                             <div className={`absolute top-0 right-0 w-32 h-32 ${brand.color.split(' ')[0]} rounded-bl-[100px] opacity-20 transition-all duration-500 group-hover:scale-150 group-hover:opacity-30`}></div>

                            {/* Tags */}
                            <div className="flex justify-between items-start mb-6 relative z-10">
                                <span className={`px-3 py-1.5 rounded-full text-[10px] font-extrabold uppercase tracking-wider border ${brand.color}`}>
                                    {brand.origin}
                                </span>
                            </div>

                            {/* Logo Area (White Box) */}
                            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 mb-6 flex items-center justify-center aspect-[3/2] group-hover:scale-105 transition-transform duration-500 relative z-10 group-hover:shadow-md">
                                <img 
                                    src={brand.logoUrl} 
                                    alt={`${brand.name} logo`}
                                    className="w-full h-full object-contain"
                                    onError={(e) => {
                                        const target = e.target as HTMLImageElement;
                                        target.style.display = 'none';
                                        target.parentElement!.innerHTML = `<span class="text-2xl font-black text-gray-300">${brand.logo}</span>`;
                                    }}
                                />
                            </div>

                            {/* Text Info */}
                            <div className="mt-auto relative z-10">
                                <h4 className="font-extrabold text-xl text-gray-900 mb-1 group-hover:text-gray-700 transition-colors">{brand.name}</h4>
                                <div className="flex items-center gap-2 mb-2">
                                   <div className={`w-1.5 h-1.5 rounded-full ${brand.color.split(' ')[1].replace('text-', 'bg-')} animate-pulse`}></div>
                                   <p className={`text-sm font-bold ${brand.color.split(' ')[1]}`}>{brand.desc}</p>
                                </div>
                                <p className="text-xs text-gray-500 font-medium leading-relaxed">
                                    {brand.subDesc}
                                </p>
                            </div>
                        </div>
                        
                        {/* Hover Action hint */}
                        <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                           <div className={`w-10 h-10 ${brand.color.split(' ')[1].replace('text-', 'bg-')} text-white rounded-full flex items-center justify-center shadow-lg animate-bounce`}>
                              <Utensils size={16} />
                           </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
      </div>
    </section>
  );
};

export default BusinessAreas;
