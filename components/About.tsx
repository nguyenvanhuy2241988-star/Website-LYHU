
import React, { useEffect, useState, useRef } from 'react';
import SectionTitle from './SectionTitle';
import { Target, HeartHandshake, ShieldCheck, Rocket, Users, Globe } from 'lucide-react';

// Counter Component
const AnimatedCounter = ({ end, suffix = '', duration = 2000 }: { end: number, suffix?: string, duration?: number }) => {
  const [count, setCount] = useState(0);
  const countRef = useRef<HTMLSpanElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          let start = 0;
          const increment = end / (duration / 16); // 60fps
          const timer = setInterval(() => {
            start += increment;
            if (start >= end) {
              setCount(end);
              clearInterval(timer);
            } else {
              setCount(Math.ceil(start));
            }
          }, 16);
        }
      },
      { threshold: 0.5 }
    );

    if (countRef.current) {
      observer.observe(countRef.current);
    }

    return () => observer.disconnect();
  }, [end, duration, hasAnimated]);

  return <span ref={countRef}>{count}{suffix}</span>;
};

const About: React.FC = () => {
  return (
    <section className="py-20 md:py-28 bg-white relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[40vw] h-[40vw] bg-lyhu-teal/5 rounded-full blur-[120px] translate-x-1/2 -translate-y-1/2 pointer-events-none animate-pulse-slow"></div>
      <div className="absolute bottom-0 left-0 w-[30vw] h-[30vw] bg-lyhu-green/5 rounded-full blur-[100px] -translate-x-1/2 translate-y-1/4 pointer-events-none"></div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="animate-on-scroll">
            <SectionTitle 
                title="CÂU CHUYỆN LYHU" 
                subtitle="Hành trình kiến tạo giá trị bền vững từ những kết nối chân thành." 
            />
        </div>
        
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center mt-12">
          
          {/* Left Column: Visual Collage */}
          <div className="lg:col-span-5 relative order-2 lg:order-1 animate-on-scroll">
             <div className="relative group">
                {/* Main Image */}
                <div className="rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white relative z-10 transform group-hover:scale-[1.02] transition-transform duration-500">
                   <img 
                     src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=1000" 
                     alt="LYHU Team Strategy" 
                     className="w-full h-[500px] object-cover"
                   />
                   {/* Overlay Gradient */}
                   <div className="absolute inset-0 bg-gradient-to-t from-lyhu-dark/80 via-transparent to-transparent"></div>
                   
                   {/* Bottom Text in Image */}
                   <div className="absolute bottom-8 left-8 right-8 text-white">
                      <p className="font-bold text-lg mb-1 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">Kết Nối Chân Thành</p>
                      <p className="text-xs text-gray-300 opacity-80">Nền tảng của mọi sự hợp tác</p>
                   </div>
                </div>

                {/* Floating Secondary Image */}
                <div className="absolute -bottom-12 -right-6 w-48 h-48 rounded-[2rem] overflow-hidden shadow-floating border-4 border-white z-20 hidden md:block animate-float">
                   <img 
                     src="https://images.unsplash.com/photo-1664575602276-acd073f104c1?auto=format&fit=crop&q=80&w=400" 
                     alt="Warehouse" 
                     className="w-full h-full object-cover"
                   />
                </div>

                {/* Floating Badge */}
                <div className="absolute -top-6 -left-6 bg-white p-4 rounded-2xl shadow-xl z-30 flex items-center gap-3 animate-float-delayed">
                   <div className="w-10 h-10 bg-lyhu-teal rounded-full flex items-center justify-center text-white shadow-glow">
                      <ShieldCheck size={20} />
                   </div>
                   <div>
                      <p className="text-xs text-gray-400 font-bold uppercase">Cam kết</p>
                      <p className="text-sm font-bold text-lyhu-dark">100% Chính hãng</p>
                   </div>
                </div>
             </div>
          </div>

          {/* Right Column: Content */}
          <div className="lg:col-span-7 order-1 lg:order-2">
            <div className="space-y-6">
               <h3 className="text-3xl md:text-4xl font-bold text-lyhu-dark leading-tight animate-on-scroll">
                 Chúng tôi không chỉ phân phối hàng hóa, <br/>
                 <span className="text-transparent bg-clip-text bg-gradient-to-r from-lyhu-teal to-lyhu-green">chúng tôi trao gửi niềm tin.</span>
               </h3>
               
               <div className="prose prose-lg text-gray-500 font-medium animate-on-scroll">
                 <p>
                   Tại <strong>LYHU</strong>, mỗi sản phẩm được đưa ra thị trường là kết quả của một quá trình tuyển chọn khắt khe và tâm huyết. Chúng tôi hiểu rằng, đằng sau mỗi đơn hàng là sự kỳ vọng của đối tác và sức khỏe của người tiêu dùng.
                 </p>
                 <p>
                   Khởi đầu từ những bước chân nhỏ bé, LYHU đang vươn mình trở thành mắt xích quan trọng trong chuỗi cung ứng FMCG tại Việt Nam, kết nối các thương hiệu quốc tế và nội địa chất lượng cao đến hệ thống phân phối rộng khắp.
                 </p>
               </div>

               {/* Vision / Mission Tabs */}
               <div className="grid md:grid-cols-2 gap-6 mt-8 animate-on-scroll">
                  {/* Vision Card */}
                  <div className="bg-gray-50 rounded-3xl p-6 border border-gray-100 hover:bg-white hover:shadow-app-hover hover:-translate-y-1 transition-all duration-300 group cursor-default">
                     <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-6 transition-transform">
                        <Rocket size={24} fill="currentColor" className="opacity-80" />
                     </div>
                     <h4 className="text-lg font-bold text-gray-900 mb-2">Tầm Nhìn</h4>
                     <p className="text-sm text-gray-500 leading-relaxed">
                        Top 10 doanh nghiệp phân phối FMCG uy tín nhất Việt Nam. Tiên phong đưa các sản phẩm Trend quốc tế về thị trường nội địa.
                     </p>
                  </div>

                  {/* Mission Card */}
                  <div className="bg-gray-50 rounded-3xl p-6 border border-gray-100 hover:bg-white hover:shadow-app-hover hover:-translate-y-1 transition-all duration-300 group cursor-default">
                     <div className="w-12 h-12 bg-lyhu-green/20 text-lyhu-green rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 group-hover:-rotate-6 transition-transform">
                        <HeartHandshake size={24} fill="currentColor" className="opacity-80" />
                     </div>
                     <h4 className="text-lg font-bold text-gray-900 mb-2">Sứ Mệnh</h4>
                     <p className="text-sm text-gray-500 leading-relaxed">
                        Nâng cao chất lượng cuộc sống Việt thông qua nguồn thực phẩm an toàn, minh bạch nguồn gốc và dịch vụ tận tâm.
                     </p>
                  </div>
               </div>

               {/* Stats Row with Animated Counters */}
               <div className="flex gap-8 pt-8 border-t border-gray-100 animate-on-scroll">
                  <div>
                     <span className="block text-3xl font-black text-lyhu-dark">
                        <AnimatedCounter end={63} />
                     </span>
                     <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">Tỉnh thành</span>
                  </div>
                  <div>
                     <span className="block text-3xl font-black text-lyhu-dark">
                        <AnimatedCounter end={500} suffix="+" />
                     </span>
                     <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">Đối tác</span>
                  </div>
                  <div>
                     <span className="block text-3xl font-black text-lyhu-dark">24/7</span>
                     <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">Hỗ trợ</span>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
