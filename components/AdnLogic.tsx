import React from 'react';
import SectionTitle from './SectionTitle';
import { LYHU_VALUES } from '../constants';

const AdnLogic: React.FC = () => {
  return (
    <section className="py-24 px-4 md:px-8 bg-gray-50/50">
      <div className="container mx-auto max-w-6xl">
        <SectionTitle 
          title="VĂN HÓA LYHU" 
          subtitle="DNA tạo nên sự khác biệt của người LYHU"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {LYHU_VALUES.map((item, index) => (
            <div 
              key={index} 
              className="group bg-white rounded-[2rem] p-8 shadow-app hover:shadow-floating hover:-translate-y-2 transition-all duration-300 flex flex-col items-center text-center relative overflow-hidden"
            >
              {/* Decorative Background Blob */}
              <div className={`absolute top-0 right-0 w-24 h-24 ${item.color} opacity-10 rounded-bl-[4rem] transition-transform group-hover:scale-150 duration-500`}></div>

              <div className={`w-20 h-20 rounded-3xl flex items-center justify-center text-white shadow-xl mb-6 transform group-hover:rotate-6 transition-transform duration-300 ${item.color}`}>
                  <span className="text-4xl font-black font-sans">{item.letter}</span>
              </div>
              
              <h4 className="text-xl font-extrabold text-gray-900 mb-3 tracking-tight">{item.word}</h4>
              
              <div className="w-10 h-1 rounded-full bg-gray-100 mb-4 group-hover:bg-gray-200 transition-colors"></div>

              <p className="text-gray-500 text-sm font-medium leading-relaxed">
                {item.description}
              </p>
              
              <div className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0">
                  <item.icon size={20} className="text-gray-400" />
              </div>
            </div>
          ))}
        </div>

        {/* Culture Quote */}
        <div className="mt-16 text-center max-w-2xl mx-auto">
            <p className="text-xl md:text-2xl font-medium text-gray-400 italic font-serif">
              "Văn hóa không phải là những gì chúng ta nói, mà là những gì chúng ta làm mỗi ngày."
            </p>
        </div>
      </div>
    </section>
  );
};

export default AdnLogic;