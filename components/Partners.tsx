
import React from 'react';
import SectionTitle from './SectionTitle';
import { Store, ShoppingCart } from 'lucide-react';

const PARTNERS = [
  { name: 'WinMart', color: 'text-red-600', bg: 'bg-red-50' },
  { name: 'Circle K', color: 'text-red-600', bg: 'bg-red-50' },
  { name: 'GS25', color: 'text-blue-500', bg: 'bg-blue-50' },
  { name: '7-Eleven', color: 'text-green-600', bg: 'bg-green-50' },
  { name: 'AEON', color: 'text-purple-600', bg: 'bg-purple-50' },
  { name: 'Co.op Mart', color: 'text-blue-600', bg: 'bg-blue-50' },
  { name: 'GO!', color: 'text-red-500', bg: 'bg-red-50' },
  { name: 'FamilyMart', color: 'text-green-500', bg: 'bg-green-50' },
  { name: 'Lotte Mart', color: 'text-red-700', bg: 'bg-red-50' },
  { name: 'Mega Market', color: 'text-yellow-600', bg: 'bg-yellow-50' },
  { name: 'Ministop', color: 'text-yellow-500', bg: 'bg-yellow-50' },
  { name: 'Tops Market', color: 'text-emerald-600', bg: 'bg-emerald-50' },
  { name: 'Cheers', color: 'text-blue-400', bg: 'bg-blue-50' }
];

const Partners: React.FC = () => {
  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-4 mb-12">
        <SectionTitle 
            title="ĐỐI TÁC PHÂN PHỐI" 
            subtitle="Sản phẩm của LYHU đã có mặt tại các hệ thống siêu thị và cửa hàng tiện lợi hàng đầu Việt Nam." 
        />
      </div>

      {/* Marquee Container */}
      <div className="relative w-full overflow-hidden group">
         {/* Gradient Masks */}
         <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
         <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>

         {/* Moving Track */}
         <div className="flex animate-marquee hover:[animation-play-state:paused] w-max">
            {/* Duplicate list 3 times to ensure smooth infinite scroll on wide screens */}
            {[...PARTNERS, ...PARTNERS, ...PARTNERS].map((partner, idx) => (
                <div key={idx} className="mx-4">
                    <div className={`w-48 h-24 rounded-2xl border border-gray-100 flex items-center justify-center shadow-sm hover:shadow-md transition-all duration-300 cursor-default group/item ${partner.bg}`}>
                        <div className="flex flex-col items-center gap-1">
                            {idx % 2 === 0 ? <Store size={20} className="text-gray-300 mb-1" /> : <ShoppingCart size={20} className="text-gray-300 mb-1" />}
                            <span className={`text-lg font-black uppercase tracking-tight ${partner.color} drop-shadow-sm`}>
                                {partner.name}
                            </span>
                        </div>
                    </div>
                </div>
            ))}
         </div>
      </div>
    </section>
  );
};

export default Partners;
