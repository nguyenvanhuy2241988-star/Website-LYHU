
import React, { useState, useEffect } from 'react';
import SectionTitle from './SectionTitle';
import { JOBS, CAREER_VALUES } from '../constants';
import { Briefcase, MapPin, Clock, DollarSign, ChevronRight, CheckCircle, X, Upload, User, Mail, Phone, FileText, Calendar, Sparkles, ArrowRight, Flame, Target, Gift, Share2, Filter, FileCheck } from 'lucide-react';

const Recruitment: React.FC = () => {
  const [selectedJob, setSelectedJob] = useState<typeof JOBS[0] | null>(null);
  const [activeDept, setActiveDept] = useState('All');
  const [fileName, setFileName] = useState('');
  const [toast, setToast] = useState<{show: boolean, message: string} | null>(null);
  
  // Get unique departments
  const departments = ['All', ...Array.from(new Set(JOBS.map(job => job.department)))];

  // Filter jobs
  const filteredJobs = activeDept === 'All' 
    ? JOBS 
    : JOBS.filter(job => job.department === activeDept);

  // Prevent scrolling when modal is open
  useEffect(() => {
    if (selectedJob) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; }
  }, [selectedJob]);

  // Handle Toast
  useEffect(() => {
    if (toast?.show) {
      const timer = setTimeout(() => setToast(null), 3000);
      return () => clearTimeout(timer);
    }
  }, [toast]);

  const showToast = (message: string) => {
    setToast({ show: true, message });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFileName(e.target.files[0].name);
    }
  };

  const handleApply = (e: React.FormEvent) => {
      e.preventDefault();
      setSelectedJob(null);
      setFileName('');
      showToast("Nộp hồ sơ thành công! Bộ phận tuyển dụng sẽ liên hệ sớm.");
  };

  const handleShare = (e: React.MouseEvent) => {
      e.stopPropagation();
      navigator.clipboard.writeText(window.location.href);
      showToast("Đã sao chép liên kết công việc!");
  };

  return (
    <section id="careers" className="bg-gray-50 min-h-screen pb-20 relative">
      
      {/* --- TOAST NOTIFICATION --- */}
      <div className={`fixed bottom-6 right-6 z-[70] transition-all duration-500 transform ${toast?.show ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0 pointer-events-none'}`}>
        <div className="bg-lyhu-dark text-white px-6 py-3 rounded-xl shadow-2xl flex items-center gap-3 border border-gray-700">
            <div className="w-5 h-5 rounded-full bg-green-500 flex items-center justify-center">
                <CheckCircle size={12} strokeWidth={4} />
            </div>
            <span className="text-sm font-bold">{toast?.message}</span>
        </div>
      </div>

      {/* --- HERO SECTION (SYNCED WITH BRAND TEAL) --- */}
      <div className="relative bg-gradient-to-br from-[#04ACA9] via-[#039693] to-[#027A78] text-white pt-32 pb-24 rounded-b-[3rem] md:rounded-b-[4rem] shadow-2xl overflow-hidden mb-20">
          {/* Background Image with Overlay */}
          <div className="absolute inset-0 z-0">
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=2000" 
                alt="LYHU Team" 
                className="w-full h-full object-cover opacity-10 mix-blend-overlay"
              />
              {/* Teal Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#04ACA9]/20 to-[#026E6C]/80"></div>
          </div>
          
          {/* Animated Blobs */}
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-white/10 rounded-full blur-[120px] animate-pulse mix-blend-overlay pointer-events-none"></div>

          <div className="container mx-auto px-6 md:px-12 relative z-10 text-center">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/20 rounded-full border border-white/20 mb-6 backdrop-blur-sm animate-in fade-in zoom-in duration-500 shadow-lg">
                  <Sparkles size={14} className="text-white fill-current" />
                  <span className="text-xs font-bold uppercase tracking-widest text-white">Tuyển dụng 2024</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-black mb-6 tracking-tight leading-tight drop-shadow-sm">
                  Kiến Tạo Tương Lai <br/> Cùng <span className="text-[#C2E8A0]">LYHU</span>
              </h1>
              <p className="text-white/90 text-lg md:text-xl max-w-2xl mx-auto font-medium leading-relaxed mb-10">
                  Gia nhập đội ngũ nhân sự tài năng, nhiệt huyết và cùng chúng tôi chinh phục những đỉnh cao mới trong ngành FMCG.
              </p>
              <button 
                onClick={() => document.getElementById('open-positions')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-4 bg-[#8FC842] text-white font-bold rounded-full shadow-lg shadow-[#8FC842]/30 hover:scale-105 transition-transform flex items-center gap-2 mx-auto hover:bg-[#7AB530]"
              >
                  Xem vị trí đang tuyển <ArrowRight size={18} />
              </button>
          </div>
      </div>

      <div className="container mx-auto px-6 md:px-12 max-w-6xl -mt-32 relative z-20">
          
          {/* --- WHY JOIN US CARDS --- */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
              {CAREER_VALUES.map((val, idx) => (
                  <div key={idx} className="bg-white p-8 rounded-[2rem] shadow-app hover:shadow-floating hover:-translate-y-2 transition-all duration-300 border border-gray-100">
                      <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 ${val.color}`}>
                          <val.icon size={28} />
                      </div>
                      <h3 className="text-lg font-bold text-gray-900 mb-3">{val.title}</h3>
                      <p className="text-sm text-gray-500 leading-relaxed font-medium">{val.desc}</p>
                  </div>
              ))}
          </div>

          {/* --- OPEN POSITIONS --- */}
          <div id="open-positions" className="scroll-mt-24">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 gap-6">
                  <SectionTitle title="VỊ TRÍ ĐANG TUYỂN" subtitle="Tìm kiếm cơ hội phù hợp với bạn" align="left" />
                  
                  {/* Department Filter */}
                  <div className="flex items-center gap-2 overflow-x-auto no-scrollbar w-full md:w-auto pb-2 md:pb-0">
                      <div className="w-8 h-8 rounded-full bg-white border border-gray-100 flex items-center justify-center text-gray-400 shrink-0">
                          <Filter size={14} />
                      </div>
                      {departments.map(dept => (
                          <button
                              key={dept}
                              onClick={() => setActiveDept(dept)}
                              className={`px-4 py-2 rounded-full text-xs font-bold whitespace-nowrap transition-all border ${
                                  activeDept === dept 
                                  ? 'bg-lyhu-teal text-white border-lyhu-teal shadow-md' 
                                  : 'bg-white text-gray-500 border-gray-100 hover:bg-gray-50'
                              }`}
                          >
                              {dept === 'All' ? 'Tất cả' : dept}
                          </button>
                      ))}
                  </div>
              </div>
              
              <div className="grid gap-6 min-h-[300px]">
                {filteredJobs.length > 0 ? (
                    filteredJobs.map((job, idx) => (
                    <div 
                        key={job.id} 
                        className="group bg-white p-6 md:p-8 rounded-[2rem] border border-gray-100 shadow-sm hover:shadow-app-hover hover:border-lyhu-teal/30 transition-all duration-300 flex flex-col md:flex-row items-start md:items-center justify-between cursor-pointer relative overflow-hidden"
                        onClick={() => setSelectedJob(job)}
                    >
                        <div className="absolute left-0 top-0 bottom-0 w-1 bg-lyhu-teal transform scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-top"></div>
                        
                        <div className="mb-6 md:mb-0 md:pr-8 relative z-10">
                        <div className="flex items-center gap-3 mb-2">
                            <span className="px-3 py-1 bg-gray-100 text-gray-500 text-[10px] font-bold uppercase tracking-wider rounded-lg group-hover:bg-lyhu-teal/10 group-hover:text-lyhu-teal transition-colors">
                                {job.department}
                            </span>
                            {idx === 0 && activeDept === 'All' && (
                                <span className="px-3 py-1 bg-red-50 text-red-500 text-[10px] font-bold uppercase tracking-wider rounded-lg flex items-center gap-1">
                                    <Flame size={10} fill="currentColor" /> Hot
                                </span>
                            )}
                        </div>
                        <h4 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-lyhu-teal transition-colors">
                            {job.title}
                        </h4>
                        <div className="flex flex-wrap gap-4 md:gap-6 text-sm text-gray-500 font-medium">
                            <span className="flex items-center gap-1.5"><MapPin size={14} /> {job.location}</span>
                            <span className="flex items-center gap-1.5"><Clock size={14} /> {job.type}</span>
                            <span className="flex items-center gap-1.5"><DollarSign size={14} /> {job.salary}</span>
                            <span className="flex items-center gap-1.5 text-orange-500"><Calendar size={14} /> Hạn: {job.deadline}</span>
                        </div>
                        </div>
                        
                        <div className="w-full md:w-auto flex items-center justify-between md:justify-end relative z-10">
                        <button className="w-full md:w-auto px-6 py-3 bg-gray-50 text-gray-600 font-bold rounded-xl group-hover:bg-lyhu-teal group-hover:text-white transition-all flex items-center justify-center gap-2 text-sm">
                            Xem chi tiết <ChevronRight size={16} />
                        </button>
                        </div>
                    </div>
                    ))
                ) : (
                    <div className="text-center py-12 bg-white rounded-[2rem] border border-gray-100 border-dashed">
                        <p className="text-gray-400 font-medium">Hiện chưa có vị trí tuyển dụng cho phòng ban này.</p>
                        <button onClick={() => setActiveDept('All')} className="mt-4 text-lyhu-teal text-sm font-bold hover:underline">Xem tất cả vị trí</button>
                    </div>
                )}
              </div>
          </div>
      </div>

      {/* --- JOB DETAIL MODAL --- */}
      {selectedJob && (
          <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 md:p-6 bg-gray-900/90 backdrop-blur-md animate-in fade-in duration-300">
              <div 
                className="bg-white w-full max-w-5xl h-full md:h-[85vh] rounded-[2.5rem] shadow-2xl relative flex flex-col md:flex-row overflow-hidden animate-in zoom-in-95 duration-300"
                onClick={e => e.stopPropagation()}
              >
                  {/* Close Button */}
                  <div className="absolute top-4 right-4 z-50 flex gap-2">
                      <button 
                        onClick={handleShare}
                        className="p-2 bg-white hover:bg-gray-50 rounded-full transition-colors shadow-sm border border-gray-100 text-gray-500 hover:text-lyhu-teal"
                        title="Chia sẻ công việc"
                      >
                          <Share2 size={20} />
                      </button>
                      <button 
                        onClick={() => setSelectedJob(null)}
                        className="p-2 bg-black/10 hover:bg-black/20 rounded-full transition-colors text-gray-700"
                      >
                          <X size={20} />
                      </button>
                  </div>

                  {/* Left Side: Content (Scrollable) */}
                  <div className="w-full md:w-3/5 h-full overflow-y-auto custom-scrollbar bg-white p-8 md:p-12">
                      <div className="mb-8">
                          <span className="inline-block px-3 py-1 bg-lyhu-teal/10 text-lyhu-teal text-xs font-bold uppercase tracking-wider rounded-lg mb-4">
                              {selectedJob.department}
                          </span>
                          <h2 className="text-3xl font-black text-gray-900 mb-4 leading-tight">{selectedJob.title}</h2>
                          
                          <div className="flex flex-wrap gap-4 text-sm font-medium text-gray-600 bg-gray-50 p-4 rounded-2xl border border-gray-100">
                              <div className="flex items-center gap-2"><MapPin size={16} className="text-gray-400" /> {selectedJob.location}</div>
                              <div className="w-px h-4 bg-gray-300"></div>
                              <div className="flex items-center gap-2"><Briefcase size={16} className="text-gray-400" /> {selectedJob.type}</div>
                              <div className="w-px h-4 bg-gray-300"></div>
                              <div className="flex items-center gap-2 text-lyhu-teal"><DollarSign size={16} /> {selectedJob.salary}</div>
                          </div>
                      </div>

                      <div className="space-y-8">
                          <div>
                              <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                                  <FileText size={20} className="text-lyhu-teal" /> Mô tả công việc
                              </h3>
                              <div className="prose prose-sm text-gray-600 leading-relaxed" dangerouslySetInnerHTML={{ __html: selectedJob.description }} />
                          </div>
                          
                          <div>
                              <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                                  <Target size={20} className="text-lyhu-teal" /> Yêu cầu ứng viên
                              </h3>
                              <div className="prose prose-sm text-gray-600 leading-relaxed" dangerouslySetInnerHTML={{ __html: selectedJob.requirements }} />
                          </div>

                          <div>
                              <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                                  <Gift size={20} className="text-lyhu-teal" /> Quyền lợi
                              </h3>
                              <div className="prose prose-sm text-gray-600 leading-relaxed" dangerouslySetInnerHTML={{ __html: selectedJob.benefits }} />
                          </div>
                      </div>
                  </div>

                  {/* Right Side: Application Form (Fixed) */}
                  <div className="w-full md:w-2/5 bg-gray-50 border-l border-gray-100 p-8 md:p-12 flex flex-col overflow-y-auto">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Ứng tuyển ngay</h3>
                      <p className="text-sm text-gray-500 mb-8">Điền thông tin bên dưới, chúng tôi sẽ liên hệ lại với bạn.</p>
                      
                      <form onSubmit={handleApply} className="space-y-4 flex-grow">
                          <div className="space-y-1">
                              <label className="text-xs font-bold text-gray-500 uppercase tracking-wide ml-1">Họ tên</label>
                              <div className="relative">
                                  <User size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                                  <input required type="text" placeholder="Nguyễn Văn A" className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 focus:border-lyhu-teal focus:ring-2 focus:ring-lyhu-teal/10 outline-none text-sm transition-all" />
                              </div>
                          </div>

                          <div className="space-y-1">
                              <label className="text-xs font-bold text-gray-500 uppercase tracking-wide ml-1">Email</label>
                              <div className="relative">
                                  <Mail size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                                  <input required type="email" placeholder="email@example.com" className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 focus:border-lyhu-teal focus:ring-2 focus:ring-lyhu-teal/10 outline-none text-sm transition-all" />
                              </div>
                          </div>

                          <div className="space-y-1">
                              <label className="text-xs font-bold text-gray-500 uppercase tracking-wide ml-1">Số điện thoại</label>
                              <div className="relative">
                                  <Phone size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                                  <input required type="tel" placeholder="0909 xxx xxx" className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 focus:border-lyhu-teal focus:ring-2 focus:ring-lyhu-teal/10 outline-none text-sm transition-all" />
                              </div>
                          </div>

                          <div className="space-y-1">
                              <label className="text-xs font-bold text-gray-500 uppercase tracking-wide ml-1">CV (PDF/Word)</label>
                              <div className={`border-2 border-dashed rounded-xl p-6 flex flex-col items-center justify-center text-center bg-white transition-all cursor-pointer group relative ${fileName ? 'border-lyhu-teal bg-lyhu-teal/5' : 'border-gray-200 hover:bg-gray-50 hover:border-lyhu-teal/30'}`}>
                                  
                                  {fileName ? (
                                      <>
                                        <div className="w-10 h-10 bg-lyhu-teal rounded-full flex items-center justify-center mb-2 text-white shadow-md">
                                            <FileCheck size={20} />
                                        </div>
                                        <span className="text-xs font-bold text-lyhu-teal line-clamp-1 max-w-full px-2">{fileName}</span>
                                        <span className="text-[10px] text-gray-400 mt-1">Nhấn để thay đổi</span>
                                      </>
                                  ) : (
                                      <>
                                        <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center mb-2 group-hover:bg-lyhu-teal/10 group-hover:text-lyhu-teal transition-colors">
                                            <Upload size={20} />
                                        </div>
                                        <span className="text-xs font-medium text-gray-500">Kéo thả hoặc bấm để tải lên</span>
                                      </>
                                  )}
                                  
                                  <input type="file" className="absolute inset-0 opacity-0 cursor-pointer" accept=".pdf,.doc,.docx" onChange={handleFileChange} required={!fileName} />
                              </div>
                          </div>

                          <button type="submit" className="w-full py-4 bg-lyhu-green hover:bg-[#7AB530] text-white font-bold rounded-xl shadow-lg shadow-lyhu-green/20 active:scale-95 transition-all mt-4 flex items-center justify-center gap-2">
                              Nộp hồ sơ <ArrowRight size={16} />
                          </button>
                          
                          <p className="text-[10px] text-gray-400 text-center mt-4">
                              Bằng việc nộp hồ sơ, bạn đồng ý với chính sách bảo mật thông tin của LYHU.
                          </p>
                      </form>
                  </div>
              </div>
          </div>
      )}
    </section>
  );
};

export default Recruitment;
