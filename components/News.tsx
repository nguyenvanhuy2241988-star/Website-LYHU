
import React, { useState, useMemo, useEffect, useRef } from 'react';
import SectionTitle from './SectionTitle';
import { NEWS_ITEMS, NEWS_CATEGORIES } from '../constants';
import { ArrowRight, Tag, Bookmark, Clock, User, X, Share2, Calendar, ChevronRight, Mail, Search, Send, Check, Eye } from 'lucide-react';

const News: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedArticle, setSelectedArticle] = useState<typeof NEWS_ITEMS[0] | null>(null);
  const [readingProgress, setReadingProgress] = useState(0);
  const [toast, setToast] = useState<{show: boolean, message: string} | null>(null);
  const modalContentRef = useRef<HTMLDivElement>(null);

  // Helper to get color style based on category
  const getCategoryStyle = (category: string) => {
    switch (category) {
      case 'Bản Tin Sản Xuất':
        return 'bg-blue-50 text-blue-700 border-blue-100 ring-blue-500/10';
      case 'Bản Tin Nhập Khẩu':
        return 'bg-purple-50 text-purple-700 border-purple-100 ring-purple-500/10';
      case 'Bản Tin Phân Phối':
        return 'bg-emerald-50 text-emerald-700 border-emerald-100 ring-emerald-500/10'; 
      case 'Bản Tin Hoạt Động':
        return 'bg-orange-50 text-orange-700 border-orange-100 ring-orange-500/10';
      case 'Bản Tin Chung':
      default:
        return 'bg-gray-50 text-gray-700 border-gray-200 ring-gray-500/10';
    }
  };

  const filteredNews = useMemo(() => {
     let news = NEWS_ITEMS;
     if (activeCategory !== 'all') {
         news = news.filter(item => item.category === activeCategory);
     }
     if (searchTerm) {
         news = news.filter(item => item.title.toLowerCase().includes(searchTerm.toLowerCase()));
     }
     return news;
  }, [activeCategory, searchTerm]);

  const featuredNews = NEWS_ITEMS.find(item => item.featured) || NEWS_ITEMS[0];

  // Get Related Articles (Same category, excluding current)
  const relatedArticles = useMemo(() => {
      if (!selectedArticle) return [];
      return NEWS_ITEMS.filter(item => 
          item.category === selectedArticle.category && item.id !== selectedArticle.id
      ).slice(0, 2);
  }, [selectedArticle]);

  // Handle Reading Progress
  const handleScroll = () => {
      if (modalContentRef.current) {
          const { scrollTop, scrollHeight, clientHeight } = modalContentRef.current;
          const progress = (scrollTop / (scrollHeight - clientHeight)) * 100;
          setReadingProgress(progress);
      }
  };

  // Lock scroll when modal is open
  useEffect(() => {
    if (selectedArticle) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; }
  }, [selectedArticle]);

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

  const handleSubscribe = () => {
      showToast("Đăng ký thành công! Kiểm tra email của bạn.");
  };

  const handleShare = () => {
      navigator.clipboard.writeText(window.location.href);
      showToast("Đã sao chép liên kết bài viết!");
  };

  return (
    <section id="news" className="py-20 bg-gray-50 relative">
      
      {/* --- TOAST NOTIFICATION --- */}
      <div className={`fixed bottom-6 right-6 z-[70] transition-all duration-500 transform ${toast?.show ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0 pointer-events-none'}`}>
        <div className="bg-lyhu-dark text-white px-6 py-3 rounded-xl shadow-2xl flex items-center gap-3 border border-gray-700">
            <div className="w-5 h-5 rounded-full bg-green-500 flex items-center justify-center">
                <Check size={12} strokeWidth={4} />
            </div>
            <span className="text-sm font-bold">{toast?.message}</span>
        </div>
      </div>
        
      {/* --- FEATURED HERO SECTION --- */}
      {!searchTerm && (
          <div className="container mx-auto px-4 md:px-8 mb-16 relative z-10">
              <SectionTitle 
                  title="TIN TỨC & SỰ KIỆN" 
                  subtitle="Cập nhật thông tin mới nhất từ hệ sinh thái LYHU"
                  align="center"
              />

              <div 
                 className="mt-12 group relative rounded-[2.5rem] overflow-hidden shadow-2xl cursor-pointer aspect-[16/9] md:aspect-[21/9]"
                 onClick={() => setSelectedArticle(featuredNews)}
              >
                 <img 
                   src={featuredNews.image} 
                   alt={featuredNews.title} 
                   className="w-full h-full object-cover transform transition-transform duration-1000 group-hover:scale-105"
                 />
                 <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
                 
                 <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
                     <div className="inline-flex items-center gap-2 px-3 py-1 bg-lyhu-teal text-white text-[10px] font-bold uppercase tracking-widest rounded-full mb-4">
                         <Tag size={12} /> Tâm điểm
                     </div>
                     <h3 className="text-2xl md:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight max-w-4xl group-hover:underline decoration-lyhu-teal decoration-4 underline-offset-8 transition-all">
                         {featuredNews.title}
                     </h3>
                     <div className="flex flex-wrap items-center gap-6 text-gray-300 text-sm font-medium">
                         <span className="flex items-center gap-2"><Clock size={16} /> {featuredNews.readTime} đọc</span>
                         <span className="flex items-center gap-2"><Calendar size={16} /> {featuredNews.date}</span>
                         <span className="flex items-center gap-2"><Eye size={16} /> {featuredNews.views}</span>
                         <span className="flex items-center gap-2 text-white ml-auto md:ml-0"><ArrowRight size={16} /> Đọc ngay</span>
                     </div>
                 </div>
              </div>
          </div>
      )}

      {/* --- NEWS CONTENT --- */}
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        
        {/* Controls: Search & Categories */}
        <div className="mb-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            {/* Category Filters (Scrollable) */}
            <div className="overflow-x-auto no-scrollbar -mx-4 px-4 md:mx-0 md:px-0 w-full md:w-auto">
                <div className="flex items-center gap-2 min-w-max">
                    {NEWS_CATEGORIES.map(cat => (
                        <button
                            key={cat.id}
                            onClick={() => setActiveCategory(cat.id)}
                            className={`px-5 py-2.5 rounded-full text-xs font-bold whitespace-nowrap transition-all border ${
                                activeCategory === cat.id 
                                ? 'bg-lyhu-teal text-white border-lyhu-teal shadow-lg shadow-lyhu-teal/20' 
                                : 'bg-white text-gray-500 border-gray-100 hover:border-gray-200 hover:bg-gray-50'
                            }`}
                        >
                            {cat.label}
                        </button>
                    ))}
                </div>
            </div>

            {/* Search Bar */}
            <div className="w-full md:w-64 relative group">
                <input 
                    type="text" 
                    placeholder="Tìm kiếm tin tức..." 
                    className="w-full pl-10 pr-4 py-2.5 rounded-full border border-gray-200 focus:border-lyhu-teal focus:ring-2 focus:ring-lyhu-teal/10 outline-none text-sm transition-all"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-lyhu-teal transition-colors" />
                {searchTerm && (
                    <button onClick={() => setSearchTerm('')} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600">
                        <X size={14} />
                    </button>
                )}
            </div>
        </div>

        {/* News Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredNews.map((item, idx) => {
            // Render Newsletter Card after 2nd item
            const showNewsletter = idx === 2 && !searchTerm;

            return (
              <React.Fragment key={idx}>
                {showNewsletter && (
                     <div className="group bg-gradient-to-br from-[#04ACA9] to-[#026E6C] rounded-[2rem] p-8 shadow-app text-white flex flex-col justify-between relative overflow-hidden h-full">
                         <div className="absolute top-0 right-0 w-32 h-32 bg-white rounded-full blur-[60px] opacity-20"></div>
                         <div className="absolute bottom-0 left-0 w-32 h-32 bg-[#8FC842] rounded-full blur-[60px] opacity-20"></div>
                         
                         <div className="relative z-10">
                             <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center mb-6 text-white">
                                 <Mail size={24} />
                             </div>
                             <h3 className="text-xl font-bold mb-2">Đăng ký bản tin</h3>
                             <p className="text-white/80 text-sm mb-6">Nhận thông báo về tin tức thị trường và khuyến mãi mới nhất từ LYHU.</p>
                             
                             <div className="space-y-3">
                                 <input type="email" placeholder="Email của bạn" className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-sm text-white placeholder-white/50 focus:outline-none focus:border-white focus:ring-1 focus:ring-white transition-colors" />
                                 <button onClick={handleSubscribe} className="w-full py-3 bg-white text-[#04ACA9] font-bold text-sm rounded-xl hover:bg-gray-50 transition-colors flex items-center justify-center gap-2">
                                     Đăng ký <Send size={14} />
                                 </button>
                             </div>
                         </div>
                     </div>
                )}

                <article 
                    onClick={() => setSelectedArticle(item)}
                    className="group bg-white rounded-[2rem] p-3 shadow-app hover:shadow-floating transition-all duration-300 cursor-pointer border border-white h-full flex flex-col"
                >
                  {/* Image Area */}
                  <div className="aspect-[16/10] overflow-hidden relative rounded-[1.5rem] mb-4 bg-gray-100">
                    <img 
                      src={item.image} 
                      alt={item.title} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    
                    {/* Category Badge */}
                    <div className="absolute top-3 left-3 z-10">
                        <span className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-[10px] font-extrabold uppercase tracking-wide border shadow-sm backdrop-blur-md ${getCategoryStyle(item.category)}`}>
                            <Bookmark size={10} className="fill-current" />
                            {item.category.replace('Bản Tin ', '')}
                        </span>
                    </div>
                  </div>
                  
                  <div className="px-2 pb-2 flex flex-col flex-grow">
                     <div className="flex items-center gap-3 text-xs text-gray-400 font-medium mb-3">
                         <span className="flex items-center gap-1"><Calendar size={12} /> {item.date}</span>
                         <span className="w-1 h-1 rounded-full bg-gray-300"></span>
                         <span className="flex items-center gap-1"><Eye size={12} /> {item.views}</span>
                     </div>

                    <h3 className="text-lg font-bold text-gray-900 mb-3 leading-snug group-hover:text-lyhu-teal transition-colors line-clamp-2">
                      {item.title}
                    </h3>
                    
                    <p className="text-sm text-gray-500 font-medium line-clamp-2 mb-6 leading-relaxed">
                      {item.summary}
                    </p>
                    
                    <div className="mt-auto pt-4 border-t border-gray-50 flex items-center justify-between">
                        <div className="flex items-center gap-2">
                            <div className="w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center text-gray-400">
                               <User size={12} />
                            </div>
                            <span className="text-xs font-bold text-gray-500">{item.author}</span>
                        </div>
                        <div className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 group-hover:bg-lyhu-teal group-hover:text-white transition-all">
                            <ArrowRight size={14} />
                        </div>
                    </div>
                  </div>
                </article>
              </React.Fragment>
            );
          })}
        </div>
      </div>

      {/* --- READING MODAL --- */}
      {selectedArticle && (
          <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 md:p-8 bg-gray-900/90 backdrop-blur-md animate-in fade-in duration-300">
              <div 
                className="bg-white w-full max-w-4xl h-full md:h-auto md:max-h-[90vh] rounded-[2rem] shadow-2xl relative flex flex-col overflow-hidden animate-in slide-in-from-bottom-10 duration-500"
                onClick={e => e.stopPropagation()}
              >
                  {/* Reading Progress Bar */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gray-100 z-30">
                      <div className="h-full bg-lyhu-teal transition-all duration-100 ease-out" style={{ width: `${readingProgress}%` }}></div>
                  </div>

                  {/* Modal Header Actions */}
                  <div className="absolute top-0 left-0 right-0 p-4 md:p-6 flex justify-between items-start z-20 pointer-events-none">
                      <div className="pointer-events-auto mt-2">
                         <span className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[10px] font-extrabold uppercase tracking-wide shadow-sm bg-white border border-gray-100 text-lyhu-dark`}>
                            {selectedArticle.category}
                        </span>
                      </div>
                      <div className="flex gap-2 pointer-events-auto mt-2">
                          <button 
                             onClick={handleShare}
                             className="p-2.5 bg-white/80 hover:bg-white rounded-full text-gray-600 shadow-sm backdrop-blur-sm transition-all hover:scale-105"
                          >
                              <Share2 size={18} />
                          </button>
                          <button 
                             onClick={() => setSelectedArticle(null)}
                             className="p-2.5 bg-black/80 hover:bg-black text-white rounded-full shadow-lg backdrop-blur-sm transition-all hover:scale-105"
                          >
                              <X size={18} />
                          </button>
                      </div>
                  </div>

                  {/* Scrollable Content */}
                  <div 
                    ref={modalContentRef}
                    onScroll={handleScroll}
                    className="overflow-y-auto custom-scrollbar flex-grow bg-white"
                  >
                      {/* Hero Image */}
                      <div className="h-64 md:h-80 relative">
                          <img 
                            src={selectedArticle.image} 
                            alt={selectedArticle.title} 
                            className="w-full h-full object-cover"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent"></div>
                      </div>

                      {/* Content Body */}
                      <div className="px-6 md:px-12 pb-12 -mt-20 relative z-10">
                          <div className="bg-white/95 backdrop-blur-md border border-gray-100 shadow-sm rounded-3xl p-6 md:p-8 mb-8">
                               <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                                   {selectedArticle.title}
                               </h2>
                               <div className="flex flex-wrap items-center gap-6 text-sm text-gray-500 font-medium border-t border-gray-100 pt-4">
                                   <div className="flex items-center gap-2">
                                       <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center">
                                           <User size={14} />
                                       </div>
                                       <span>{selectedArticle.author}</span>
                                   </div>
                                   <span className="flex items-center gap-2"><Calendar size={14} /> {selectedArticle.date}</span>
                                   <span className="flex items-center gap-2"><Clock size={14} /> {selectedArticle.readTime} đọc</span>
                                   <span className="flex items-center gap-2"><Eye size={14} /> {selectedArticle.views} xem</span>
                               </div>
                          </div>

                          <div className="prose prose-lg prose-headings:font-bold prose-headings:text-lyhu-dark prose-p:text-gray-600 prose-p:leading-relaxed prose-a:text-lyhu-teal max-w-none mb-12">
                              <div dangerouslySetInnerHTML={{ __html: selectedArticle.content || '' }} />
                          </div>

                          {/* Tags */}
                          <div className="flex flex-wrap gap-2 mb-12 border-t border-gray-100 pt-6">
                              {selectedArticle.tags?.map((tag, idx) => (
                                  <span key={idx} className="px-3 py-1 bg-gray-100 text-gray-600 text-xs font-bold rounded-lg hover:bg-gray-200 transition-colors cursor-pointer">
                                      #{tag}
                                  </span>
                              ))}
                          </div>
                          
                          {/* Related Articles */}
                          {relatedArticles.length > 0 && (
                              <div className="bg-gray-50 rounded-[2rem] p-6 md:p-8">
                                  <h3 className="text-lg font-bold text-gray-900 mb-6 flex items-center gap-2">
                                      <Bookmark className="text-lyhu-teal" /> Bài viết liên quan
                                  </h3>
                                  <div className="grid md:grid-cols-2 gap-6">
                                      {relatedArticles.map((item, idx) => (
                                          <div 
                                            key={idx} 
                                            className="group cursor-pointer bg-white rounded-2xl p-3 shadow-sm hover:shadow-md transition-all flex gap-4"
                                            onClick={(e) => {
                                                e.stopPropagation(); // prevent modal close if clicked
                                                setSelectedArticle(item);
                                                modalContentRef.current?.scrollTo(0,0);
                                            }}
                                          >
                                              <div className="w-24 h-24 rounded-xl overflow-hidden shrink-0">
                                                  <img src={item.image} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" alt={item.title} />
                                              </div>
                                              <div className="flex flex-col justify-center">
                                                  <span className="text-[10px] font-bold text-lyhu-teal uppercase mb-1">{item.category}</span>
                                                  <h4 className="font-bold text-gray-900 text-sm line-clamp-2 group-hover:text-lyhu-teal transition-colors">{item.title}</h4>
                                                  <span className="text-xs text-gray-400 mt-2 flex items-center gap-1"><Calendar size={10} /> {item.date}</span>
                                              </div>
                                          </div>
                                      ))}
                                  </div>
                              </div>
                          )}
                      </div>
                  </div>
              </div>
          </div>
      )}
    </section>
  );
};

export default News;
