import React from 'react';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  light?: boolean;
  align?: 'left' | 'center';
}

const SectionTitle: React.FC<SectionTitleProps> = ({ title, subtitle, light = false, align = 'center' }) => {
  return (
    <div className={`mb-12 ${align === 'center' ? 'text-center' : 'text-left'}`}>
      {/* Small Badge */}
      <div className={`inline-block mb-3 px-3 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase ${light ? 'bg-white/10 text-white/80' : 'bg-lyhu-teal/10 text-lyhu-teal'}`}>
        LYHU FMCG
      </div>
      
      {/* Title - Clean & Solid */}
      <h2 className={`text-2xl md:text-3xl font-bold tracking-tight mb-3 ${light ? 'text-white' : 'text-gray-900'}`}>
        {title}
      </h2>
      
      {/* Subtitle - Soft & Readable */}
      {subtitle && (
        <p className={`text-sm md:text-base font-medium leading-relaxed max-w-2xl ${align === 'center' ? 'mx-auto' : ''} ${light ? 'text-gray-300' : 'text-gray-500'}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionTitle;