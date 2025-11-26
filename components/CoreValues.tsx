
import React from 'react';
import { PRINCIPLES_3K1C } from '../constants';
import SectionTitle from './SectionTitle';

const CoreValues: React.FC = () => {
  return (
    <section id="values" className="py-24 bg-gradient-to-br from-[#04ACA9] to-[#026E6C] relative overflow-hidden">
      {/* Abstract Background pattern */}
      <div className="absolute inset-0 opacity-[0.1]" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-white/10 rounded-full blur-[120px] pointer-events-none animate-pulse"></div>
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <SectionTitle title="GIÁ TRỊ CỐT LÕI 3K1C" light subtitle="Kim chỉ nam cho hành động & tư duy" />

        <div className="grid md:grid-cols-2 gap-8 mt-12 max-w-5xl mx-auto">
          {PRINCIPLES_3K1C.map((val, idx) => (
            <div 
              key={idx} 
              className="group flex gap-6 p-8 bg-white/10 border border-white/10 rounded-3xl hover:bg-white/20 hover:border-white/30 transition-all duration-300 backdrop-blur-sm hover:-translate-y-1"
            >
              <div className="shrink-0">
                <div className="w-16 h-16 rounded-2xl bg-white text-[#04ACA9] flex items-center justify-center border border-white/20 shadow-lg group-hover:scale-110 transition-transform duration-300">
                   <val.icon size={32} strokeWidth={1.5} />
                </div>
              </div>
              
              <div>
                 <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mb-3">
                    <h3 className="text-2xl font-bold text-white tracking-tight">{val.code}</h3>
                    <span className="inline-flex px-3 py-1 bg-white/20 text-white text-[10px] font-bold uppercase rounded-full border border-white/10 tracking-widest self-start">
                        {val.title}
                    </span>
                 </div>
                 <p className="text-white/80 leading-relaxed text-sm font-medium group-hover:text-white transition-colors">
                   {val.desc}
                 </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreValues;
