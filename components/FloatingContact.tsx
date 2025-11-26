
import React from 'react';
import { Phone, Facebook, MessageCircle } from 'lucide-react';
import { CONTACT_INFO } from '../constants';

const FloatingContact: React.FC = () => {
  const contactItems = [
    {
      id: 'zalo',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M19.2 19.2C21.6 16.8 21.6 13.2 19.2 10.8C16.8 8.4 13.2 8.4 10.8 10.8C8.4 13.2 8.4 16.8 10.8 19.2C13.2 21.6 16.8 21.6 19.2 19.2Z" fill="currentColor" fillOpacity="0.2"/>
            <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM15.8 15.5H13.2L13.8 13H16.4L15.8 15.5ZM15.6 12.5H10.8V11.5L13.6 8.5H10.8V7.5H15.2V8.5L12.4 11.5H15.6V12.5Z" fill="currentColor"/>
        </svg>
      ),
      label: 'Chat Zalo',
      href: CONTACT_INFO.zalo,
      delay: 'delay-0'
    },
    {
      id: 'facebook',
      icon: <Facebook size={24} fill="currentColor" />,
      label: 'Messenger',
      href: CONTACT_INFO.facebook,
      delay: 'delay-100'
    },
    {
      id: 'phone',
      icon: <Phone size={24} fill="currentColor" />,
      label: CONTACT_INFO.phone,
      href: `tel:${CONTACT_INFO.phone.replace(/\s/g, '')}`,
      delay: 'delay-200',
      pulse: true
    }
  ];

  return (
    <div className="fixed bottom-24 left-6 z-[90] flex flex-col gap-3">
        {contactItems.map((item) => (
            <a 
                key={item.id}
                href={item.href} 
                target={item.id === 'phone' ? '_self' : '_blank'} 
                rel="noreferrer"
                className="group relative flex items-center justify-start"
                title={item.label}
            >
                {/* Icon Button */}
                <div className={`
                    w-11 h-11 rounded-full flex items-center justify-center shadow-lg border border-gray-100 
                    transition-all duration-300 z-20 relative
                    bg-white text-[#04ACA9] group-hover:bg-[#04ACA9] group-hover:text-white group-hover:border-[#04ACA9]
                    group-hover:scale-110 group-hover:shadow-xl
                `}>
                    {item.pulse && (
                        <div className="absolute inset-0 rounded-full bg-[#04ACA9] animate-ping opacity-20"></div>
                    )}
                    {item.icon}
                </div>

                {/* Slide-out Label */}
                <div className="absolute left-5 pl-8 pr-4 py-2 bg-white text-[#04ACA9] text-xs font-bold rounded-r-full shadow-md 
                                opacity-0 -translate-x-4 pointer-events-none
                                group-hover:opacity-100 group-hover:translate-x-0 group-hover:pointer-events-auto
                                transition-all duration-300 ease-out whitespace-nowrap z-10 border border-gray-100">
                    {item.label}
                </div>
            </a>
        ))}
    </div>
  );
};

export default FloatingContact;
