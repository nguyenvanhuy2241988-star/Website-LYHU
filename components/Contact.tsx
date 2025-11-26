
import React, { useState } from 'react';
import SectionTitle from './SectionTitle';
import { CONTACT_INFO, PARTNER_BENEFITS } from '../constants';
import { Mail, MapPin, Phone, User, Check, Store, Building } from 'lucide-react';

const Contact: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'general' | 'partner'>('general');

  return (
    <section id="contact" className="py-20 px-4 md:px-8">
      <div className="container mx-auto max-w-5xl">
        <SectionTitle title={activeTab === 'general' ? "LIÊN HỆ" : "HỢP TÁC KINH DOANH"} />

        {/* Tabs */}
        <div className="flex justify-center mb-10">
            <div className="bg-gray-100 p-1 rounded-full inline-flex">
                <button 
                    onClick={() => setActiveTab('general')}
                    className={`px-8 py-3 rounded-full text-sm font-bold transition-all ${activeTab === 'general' ? 'bg-white text-[#04ACA9] shadow-md' : 'text-gray-500 hover:text-gray-700'}`}
                >
                    Khách hàng
                </button>
                <button 
                    onClick={() => setActiveTab('partner')}
                    className={`px-8 py-3 rounded-full text-sm font-bold transition-all ${activeTab === 'partner' ? 'bg-[#04ACA9] text-white shadow-md' : 'text-gray-500 hover:text-gray-700'}`}
                >
                    Đăng ký Đại lý / CTV
                </button>
            </div>
        </div>

        <div className="bg-white rounded-app-lg shadow-app overflow-hidden border border-gray-100">
            <div className="grid lg:grid-cols-2">
                {/* Info Side - Dynamic Content based on Tab */}
                <div className="p-10 md:p-12 bg-gradient-to-br from-[#04ACA9] to-[#026E6C] text-white flex flex-col justify-between relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none"></div>
                    <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#8FC842]/20 rounded-full blur-3xl -ml-10 -mb-10 pointer-events-none"></div>
                    
                    <div className="relative z-10">
                        {activeTab === 'general' ? (
                            <>
                                <h3 className="text-2xl font-bold mb-2 text-white">Kết nối với LYHU</h3>
                                <p className="text-white/90 text-sm mb-10 font-medium">Chúng tôi luôn sẵn sàng lắng nghe bạn.</p>
                                
                                <div className="space-y-6">
                                    <div className="flex items-start gap-4">
                                        <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center shrink-0 shadow-sm backdrop-blur-sm">
                                            <MapPin size={18} />
                                        </div>
                                        <div>
                                            <span className="text-[10px] font-bold uppercase text-white/70 tracking-wider">Địa chỉ</span>
                                            <p className="font-medium text-sm mt-1 text-white">{CONTACT_INFO.address}</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-4">
                                        <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center shrink-0 shadow-sm backdrop-blur-sm">
                                            <Mail size={18} />
                                        </div>
                                        <div>
                                            <span className="text-[10px] font-bold uppercase text-white/70 tracking-wider">Email</span>
                                            <p className="font-medium text-sm mt-1 text-white">{CONTACT_INFO.email}</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-4">
                                        <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center shrink-0 shadow-sm backdrop-blur-sm">
                                            <Phone size={18} />
                                        </div>
                                        <div>
                                            <span className="text-[10px] font-bold uppercase text-white/70 tracking-wider">Hotline</span>
                                            <p className="font-medium text-sm mt-1 text-white">{CONTACT_INFO.phone}</p>
                                        </div>
                                    </div>
                                </div>
                            </>
                        ) : (
                            <>
                                <h3 className="text-2xl font-bold mb-2 text-white">Trở thành Đối tác</h3>
                                <p className="text-white/90 text-sm mb-8 font-medium">Cùng LYHU phát triển bền vững và thịnh vượng.</p>
                                
                                <div className="space-y-4">
                                    {PARTNER_BENEFITS.map((benefit, idx) => (
                                        <div key={idx} className="bg-white/10 backdrop-blur-sm p-4 rounded-2xl border border-white/10 flex items-start gap-4">
                                            <div className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 bg-white text-[#04ACA9]`}>
                                                <benefit.icon size={20} />
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-sm mb-1">{benefit.title}</h4>
                                                <p className="text-xs text-white/80 leading-relaxed">{benefit.desc}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </>
                        )}
                    </div>

                    <div className="mt-10 relative z-10">
                        <div className="text-[10px] font-bold uppercase text-white/70 tracking-widest mb-4">Mạng xã hội</div>
                        <div className="flex gap-4">
                            <a href={CONTACT_INFO.facebook} target="_blank" rel="noreferrer" className="px-4 py-2 rounded-full border border-white/30 text-xs font-bold hover:bg-white hover:text-[#04ACA9] transition-colors text-white">
                                Facebook
                            </a>
                            {['Zalo', 'LinkedIn'].map(social => (
                                <button key={social} className="px-4 py-2 rounded-full border border-white/30 text-xs font-bold hover:bg-white hover:text-[#04ACA9] transition-colors text-white">
                                    {social}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Form Side - Dynamic Fields */}
                <div className="p-10 md:p-12 bg-white">
                    <form className="space-y-5">
                        {/* Common Fields */}
                        <div className="space-y-1">
                            <label className="text-xs font-bold text-gray-500 ml-2">Họ tên</label>
                            <div className="relative">
                                <User size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                                <input type="text" className="w-full pl-10 bg-gray-50 border border-gray-200 rounded-2xl p-4 text-sm font-medium focus:ring-2 focus:ring-[#04ACA9]/20 focus:border-[#04ACA9] outline-none transition-all" placeholder="Nhập họ tên của bạn" />
                            </div>
                        </div>
                        
                        <div className="grid md:grid-cols-2 gap-5">
                            <div className="space-y-1">
                                <label className="text-xs font-bold text-gray-500 ml-2">Email</label>
                                <input type="email" className="w-full bg-gray-50 border border-gray-200 rounded-2xl p-4 text-sm font-medium focus:ring-2 focus:ring-[#04ACA9]/20 focus:border-[#04ACA9] outline-none transition-all" placeholder="name@example.com" />
                            </div>
                            <div className="space-y-1">
                                <label className="text-xs font-bold text-gray-500 ml-2">Số điện thoại</label>
                                <input type="tel" className="w-full bg-gray-50 border border-gray-200 rounded-2xl p-4 text-sm font-medium focus:ring-2 focus:ring-[#04ACA9]/20 focus:border-[#04ACA9] outline-none transition-all" placeholder="09xxxxxxx" />
                            </div>
                        </div>

                        {/* Partner Specific Fields */}
                        {activeTab === 'partner' && (
                            <>
                                <div className="grid md:grid-cols-2 gap-5">
                                    <div className="space-y-1">
                                        <label className="text-xs font-bold text-gray-500 ml-2">Khu vực</label>
                                        <div className="relative">
                                            <MapPin size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                                            <input type="text" className="w-full pl-10 bg-gray-50 border border-gray-200 rounded-2xl p-4 text-sm font-medium focus:ring-2 focus:ring-[#04ACA9]/20 focus:border-[#04ACA9] outline-none transition-all" placeholder="Tỉnh/Thành phố" />
                                        </div>
                                    </div>
                                    <div className="space-y-1">
                                        <label className="text-xs font-bold text-gray-500 ml-2">Vốn dự kiến</label>
                                        <select className="w-full bg-gray-50 border border-gray-200 rounded-2xl p-4 text-sm font-medium focus:ring-2 focus:ring-[#04ACA9]/20 focus:border-[#04ACA9] outline-none transition-all appearance-none text-gray-500">
                                            <option>Dưới 50 triệu</option>
                                            <option>50 - 200 triệu</option>
                                            <option>200 - 500 triệu</option>
                                            <option>Trên 500 triệu</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-xs font-bold text-gray-500 ml-2">Hình thức hợp tác mong muốn</label>
                                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                                        <label className="cursor-pointer">
                                            <input type="radio" name="type" className="peer sr-only" />
                                            <div className="p-3 rounded-xl border-2 border-gray-100 peer-checked:border-[#04ACA9] peer-checked:bg-[#04ACA9]/5 flex flex-col items-center gap-1 transition-all">
                                                <User className="text-gray-400 peer-checked:text-[#04ACA9]" size={20} />
                                                <span className="text-xs font-bold text-gray-600 peer-checked:text-[#04ACA9]">Cộng tác viên</span>
                                            </div>
                                        </label>
                                        <label className="cursor-pointer">
                                            <input type="radio" name="type" className="peer sr-only" />
                                            <div className="p-3 rounded-xl border-2 border-gray-100 peer-checked:border-[#04ACA9] peer-checked:bg-[#04ACA9]/5 flex flex-col items-center gap-1 transition-all">
                                                <Store className="text-gray-400 peer-checked:text-[#04ACA9]" size={20} />
                                                <span className="text-xs font-bold text-gray-600 peer-checked:text-[#04ACA9]">Đại lý</span>
                                            </div>
                                        </label>
                                        <label className="cursor-pointer">
                                            <input type="radio" name="type" className="peer sr-only" />
                                            <div className="p-3 rounded-xl border-2 border-gray-100 peer-checked:border-[#04ACA9] peer-checked:bg-[#04ACA9]/5 flex flex-col items-center gap-1 transition-all">
                                                <Building className="text-gray-400 peer-checked:text-[#04ACA9]" size={20} />
                                                <span className="text-xs font-bold text-gray-600 peer-checked:text-[#04ACA9]">Nhà phân phối</span>
                                            </div>
                                        </label>
                                    </div>
                                </div>
                            </>
                        )}

                        <div className="space-y-1">
                            <label className="text-xs font-bold text-gray-500 ml-2">
                                {activeTab === 'general' ? "Nội dung" : "Ghi chú thêm"}
                            </label>
                            <textarea rows={4} className="w-full bg-gray-50 border border-gray-200 rounded-2xl p-4 text-sm font-medium focus:ring-2 focus:ring-[#04ACA9]/20 focus:border-[#04ACA9] outline-none transition-all" placeholder={activeTab === 'general' ? "Bạn cần hỗ trợ gì?" : "Mô tả ngắn về kinh nghiệm kinh doanh của bạn..."}></textarea>
                        </div>

                        <button type="button" className={`w-full font-bold py-4 rounded-2xl uppercase tracking-wider text-xs shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all text-white ${activeTab === 'general' ? 'bg-[#8FC842] hover:bg-[#7AB530] shadow-[#8FC842]/30' : 'bg-[#04ACA9] hover:bg-[#038C89] shadow-[#04ACA9]/30'}`}>
                            {activeTab === 'general' ? "Gửi tin nhắn" : "Đăng ký ngay"}
                        </button>
                    </form>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
