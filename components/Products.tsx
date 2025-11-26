
import React, { useState, useEffect, useMemo } from 'react';
import { PRODUCT_CATEGORIES, PRODUCTS_DATA, BRAND_DETAILS, BRANDS } from '../constants';
import { ShoppingCart, Search, Info, X, Check, Package, Calendar, Award, Share2, Heart, ExternalLink, Filter, ChevronRight, Star, Leaf, Globe, Zap, ArrowDown, Medal, ThumbsUp, ArrowLeft, BookOpen, Quote, ArrowRight, Sparkles, Facebook, Video, ShoppingBag, Instagram, Youtube } from 'lucide-react';

interface ProductsProps {
  initialCategory?: string;
}

const Products: React.FC<ProductsProps> = ({ initialCategory = 'all' }) => {
  const [activeCategory, setActiveCategory] = useState(initialCategory);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedProduct, setSelectedProduct] = useState<typeof PRODUCTS_DATA[0] | null>(null);
  
  // Toast Notification State
  const [toast, setToast] = useState<{show: boolean, message: string} | null>(null);

  // Sync state if props change (when navigating via navbar while already on page)
  useEffect(() => {
    setActiveCategory(initialCategory);
  }, [initialCategory]);

  // Filter products using useMemo for performance
  const filteredProducts = useMemo(() => {
    return PRODUCTS_DATA.filter(product => {
      // Map 'all' to all, otherwise strict match on brand or category ID
      const matchesCategory = activeCategory === 'all' || product.brand === activeCategory;
      const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchTerm]);

  // Related Products Logic
  const relatedProducts = useMemo(() => {
    return selectedProduct 
      ? PRODUCTS_DATA.filter(p => p.category === selectedProduct.category && p.id !== selectedProduct.id).slice(0, 3)
      : [];
  }, [selectedProduct]);

  // Get Brand Details if active category is a brand
  const activeBrandDetails = useMemo(() => {
    return BRAND_DETAILS[activeCategory] || null;
  }, [activeCategory]);

  // Get Signature Product if available
  const signatureProduct = useMemo(() => {
    if (activeBrandDetails && activeBrandDetails.signatureProductId) {
      return PRODUCTS_DATA.find(p => p.id === activeBrandDetails.signatureProductId);
    }
    return null;
  }, [activeBrandDetails]);

  // Prevent scrolling when modal is open
  useEffect(() => {
    if (selectedProduct) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedProduct]);

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

  const handleCopyLink = (e: React.MouseEvent) => {
    e.stopPropagation();
    navigator.clipboard.writeText(window.location.href);
    showToast("Đã sao chép liên kết!");
  };

  const handleContact = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setSelectedProduct(null);
    showToast("Đang chuyển đến phần liên hệ...");
    setTimeout(() => {
        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
    }, 500);
  };

  // Scroll to Shop Section
  const scrollToShop = () => {
      document.getElementById('product-grid-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  // Determine Main Background Style for Immersive Experience
  const pageBgClass = activeBrandDetails 
     ? `bg-${activeBrandDetails.theme.primary.split('-')[1]}-50/30` 
     : 'bg-gray-50';

  return (
    <div className={`${pageBgClass} min-h-screen pb-20 pt-20 relative transition-colors duration-700`}>
      
      {/* --- TOAST NOTIFICATION --- */}
      <div className={`fixed bottom-6 right-6 z-[60] transition-all duration-500 transform ${toast?.show ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0 pointer-events-none'}`}>
        <div className="bg-lyhu-dark text-white px-6 py-3 rounded-xl shadow-2xl flex items-center gap-3 border border-gray-700">
            <div className="w-5 h-5 rounded-full bg-green-500 flex items-center justify-center">
                <Check size={12} strokeWidth={4} />
            </div>
            <span className="text-sm font-bold">{toast?.message}</span>
        </div>
      </div>

      {/* --- HERO BANNER AREA --- */}
      {activeBrandDetails ? (
        // === SPECIFIC BRAND PAGE ===
        <>
            <div className={`relative overflow-hidden rounded-b-[3rem] shadow-xl bg-gradient-to-br ${activeBrandDetails.theme.gradient} text-white min-h-[500px] lg:min-h-[600px] flex items-center transition-all duration-700`}>
               {/* Cover Image Background (Faded) */}
               {activeBrandDetails.coverImage && (
                   <div className="absolute inset-0 mix-blend-overlay opacity-20">
                       <img src={activeBrandDetails.coverImage} className="w-full h-full object-cover" alt="Brand Cover" />
                   </div>
               )}

               {/* Abstract Background Animation */}
               <div className="absolute inset-0 opacity-20" style={{backgroundImage: 'radial-gradient(circle at center, white 1px, transparent 1px)', backgroundSize: '30px 30px'}}></div>
               <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-white/20 rounded-full blur-[100px] translate-x-1/2 -translate-y-1/2 animate-pulse"></div>
               
               <div className="container mx-auto px-6 md:px-12 relative z-10 grid lg:grid-cols-2 gap-12 items-center py-10">
                   {/* Text Content */}
                   <div className="order-2 lg:order-1 animate-in slide-in-from-left duration-700 fade-in">
                      <button 
                        onClick={() => setActiveCategory('all')}
                        className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-6 text-sm font-bold transition-colors group px-4 py-2 bg-black/10 rounded-full backdrop-blur-sm border border-white/10"
                      >
                         <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" /> Hệ sinh thái LYHU
                      </button>
                      
                      <div className="flex items-center gap-3 mb-4">
                        <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-xs font-bold uppercase tracking-widest border border-white/20 shadow-lg">
                           <Star size={12} fill="currentColor" /> Official Brand
                        </div>
                      </div>

                      <h1 className="text-3xl md:text-6xl lg:text-7xl font-black mb-4 tracking-tight leading-tight drop-shadow-sm">
                        {activeBrandDetails.title}
                      </h1>
                      
                      <p className="text-xl md:text-3xl font-sans italic text-white/90 mb-8 border-l-4 border-white/40 pl-6 leading-relaxed">
                        "{activeBrandDetails.slogan}"
                      </p>

                      {/* Social Media Links */}
                      {activeBrandDetails.socials && (
                          <div className="flex flex-wrap items-center gap-4 mb-8">
                              {activeBrandDetails.socials.map(social => (
                                  <a 
                                      key={social.id}
                                      href={social.url}
                                      target="_blank"
                                      rel="noreferrer"
                                      className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white hover:bg-white hover:text-gray-900 transition-all border border-white/10 shadow-lg hover:scale-110"
                                      title={social.label}
                                  >
                                      {social.id === 'facebook' && <Facebook size={20} />}
                                      {social.id === 'tiktok' && <Video size={20} />}
                                      {social.id === 'shopee' && <ShoppingBag size={20} />}
                                      {social.id === 'website' && <Globe size={20} />}
                                      {social.id === 'instagram' && <Instagram size={20} />}
                                      {social.id === 'youtube' && <Youtube size={20} />}
                                  </a>
                              ))}
                          </div>
                      )}
                      
                      {/* Brand Stats */}
                      <div className="flex flex-wrap gap-4 md:gap-8 bg-black/10 backdrop-blur-sm p-4 md:p-6 rounded-2xl border border-white/10 inline-flex mb-8">
                          {activeBrandDetails.stats?.map((stat, idx) => (
                             <div key={idx} className="flex flex-col border-r last:border-0 border-white/20 pr-4 md:pr-8 mr-4 md:mr-0 last:mr-0">
                                <span className="text-xl md:text-3xl font-black">{stat.value}</span>
                                <span className="text-[10px] uppercase font-bold text-white/70 tracking-wider">{stat.label}</span>
                             </div>
                          ))}
                      </div>

                      <button 
                         onClick={scrollToShop}
                         className="px-8 py-3 bg-white text-gray-900 font-bold uppercase rounded-full shadow-xl hover:scale-105 transition-transform flex items-center gap-2"
                      >
                         Khám phá ngay <ArrowDown size={16} />
                      </button>
                   </div>

                   {/* Hero Image / Logo */}
                   <div className="order-1 lg:order-2 flex justify-center lg:justify-end animate-in zoom-in duration-700 fade-in delay-100">
                       <div className="w-48 h-48 md:w-80 md:h-80 lg:w-[450px] lg:h-[450px] bg-white rounded-[2rem] md:rounded-[3rem] p-6 md:p-12 shadow-2xl flex items-center justify-center border-8 border-white/10 backdrop-blur-sm relative transform hover:scale-105 transition-transform duration-500">
                           {/* Decorative ring */}
                           <div className="absolute inset-0 border-2 border-dashed border-white/20 rounded-[2rem] md:rounded-[3rem] m-2 animate-[spin_20s_linear_infinite]"></div>
                           
                           <img 
                              src={activeBrandDetails.logoUrl} 
                              alt={activeBrandDetails.title} 
                              className="w-full h-full object-contain filter drop-shadow-xl"
                            />
                       </div>
                   </div>
               </div>
               
               {/* Scroll Indicator */}
               <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce opacity-70 hidden md:block cursor-pointer" onClick={scrollToShop}>
                   <ChevronRight className="rotate-90 text-white" size={24} />
               </div>
            </div>

            {/* --- BRAND STORY SECTION (MAGAZINE STYLE) --- */}
             <div className="container mx-auto px-6 md:px-12 -mt-10 md:-mt-16 relative z-20 mb-20 animate-in slide-in-from-bottom duration-700 delay-200">
                 <div className="bg-white rounded-[2rem] md:rounded-[2.5rem] shadow-2xl border border-gray-100 overflow-hidden relative">
                     {/* Decorative Header Bar */}
                     <div className={`h-3 w-full bg-gradient-to-r ${activeBrandDetails.theme.gradient}`}></div>
                     
                     <div className="grid md:grid-cols-12 gap-0">
                         {/* Left: Values & Title */}
                         <div className={`md:col-span-5 p-10 md:p-12 ${activeBrandDetails.theme.light} relative overflow-hidden flex flex-col justify-center`}>
                             <div className="absolute top-0 right-0 opacity-10 transform translate-x-1/2 -translate-y-1/2">
                                <Quote size={200} className={activeBrandDetails.theme.primary} />
                             </div>
                             
                             <h3 className={`text-3xl font-black ${activeBrandDetails.theme.primary} mb-6 tracking-tight`}>
                                 GIÁ TRỊ <br/> KHÁC BIỆT
                             </h3>
                             
                             <div className="space-y-4 relative z-10">
                                 {activeBrandDetails.values?.map((val, idx) => (
                                     <div key={idx} className="flex items-center gap-3">
                                         <div className={`w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center ${activeBrandDetails.theme.primary}`}>
                                             <span className="font-bold text-lg">{idx + 1}</span>
                                         </div>
                                         <span className="text-lg font-bold text-gray-800">{val}</span>
                                     </div>
                                 ))}
                             </div>
                         </div>

                         {/* Right: Story Content */}
                         <div className="md:col-span-7 p-10 md:p-12 bg-white flex flex-col justify-center">
                             <div className="flex items-center gap-3 mb-6">
                                <div className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest ${activeBrandDetails.theme.light} ${activeBrandDetails.theme.primary}`}>
                                    Story
                                </div>
                                <div className="h-px bg-gray-200 flex-grow"></div>
                             </div>
                             
                             <p className="text-gray-600 text-lg leading-relaxed font-medium drop-cap first-letter:text-5xl first-letter:font-black first-letter:float-left first-letter:mr-3 first-letter:mt-[-4px]">
                                {activeBrandDetails.story}
                             </p>
                         </div>
                     </div>
                 </div>
            </div>

            {/* --- SIGNATURE PRODUCT SPOTLIGHT --- */}
            {signatureProduct && (
                <div className="container mx-auto px-6 md:px-12 mb-24">
                     <div className={`relative rounded-[3rem] overflow-hidden ${activeBrandDetails.theme.light} border ${activeBrandDetails.theme.border}`}>
                        {/* Background Decor */}
                        <div className={`absolute top-0 right-0 w-[500px] h-[500px] ${activeBrandDetails.theme.bg} opacity-5 rounded-full blur-[120px]`}></div>
                        
                        <div className="grid lg:grid-cols-2 gap-12 items-center p-8 md:p-12">
                           {/* Product Image - Big */}
                           <div className="relative order-2 lg:order-1 flex justify-center">
                               <div className="w-64 h-64 md:w-96 md:h-96 relative z-10">
                                  <img 
                                    src={signatureProduct.image} 
                                    alt={signatureProduct.name} 
                                    className="w-full h-full object-contain drop-shadow-2xl transform hover:scale-105 transition-transform duration-700"
                                  />
                               </div>
                               <div className="absolute inset-0 bg-white rounded-full opacity-50 blur-3xl scale-75"></div>
                           </div>

                           {/* Info */}
                           <div className="order-1 lg:order-2">
                               <div className="inline-flex items-center gap-2 mb-4 px-3 py-1 bg-white rounded-full shadow-sm text-xs font-bold uppercase tracking-widest text-gray-400">
                                   <Sparkles size={14} className="text-yellow-400 fill-current" /> Signature Product
                               </div>
                               <h2 className={`text-3xl md:text-5xl font-black ${activeBrandDetails.theme.primary} mb-6 leading-tight`}>
                                   {signatureProduct.name}
                               </h2>
                               <p className="text-gray-600 text-lg font-medium mb-8 leading-relaxed">
                                   {signatureProduct.desc}
                                </p>
                               
                               <div className="space-y-4 mb-8">
                                  {signatureProduct.highlights?.map((hl, i) => (
                                      <div key={i} className="flex items-center gap-3">
                                          <div className={`w-6 h-6 rounded-full ${activeBrandDetails.theme.bg} text-white flex items-center justify-center`}>
                                              <Check size={14} strokeWidth={3} />
                                          </div>
                                          <span className="font-bold text-gray-700">{hl}</span>
                                      </div>
                                  ))}
                               </div>

                               <button 
                                  onClick={() => setSelectedProduct(signatureProduct)}
                                  className={`px-8 py-4 ${activeBrandDetails.theme.bg} text-white rounded-2xl font-bold uppercase tracking-wider shadow-xl hover:scale-105 transition-transform flex items-center gap-3`}
                               >
                                   Xem chi tiết <ArrowRight size={18} />
                               </button>
                           </div>
                        </div>
                     </div>
                </div>
            )}

            {/* --- PROCESS / HIGHLIGHTS SECTION --- */}
            {activeBrandDetails.process && (
                <div className="container mx-auto px-6 md:px-12 mb-24">
                     <div className="text-center mb-12">
                        <h3 className={`text-2xl md:text-3xl font-bold ${activeBrandDetails.theme.primary} mb-3`}>QUY TRÌNH & CAM KẾT</h3>
                        <p className="text-gray-500">Hành trình tạo nên sản phẩm chất lượng</p>
                     </div>

                     <div className="grid md:grid-cols-4 gap-4">
                        {activeBrandDetails.process.map((step, idx) => (
                             <div key={idx} className="relative group">
                                 <div className={`h-full bg-white p-6 rounded-[2rem] border border-gray-100 ${activeBrandDetails.theme.shadow} hover:-translate-y-2 transition-transform duration-300 flex flex-col items-center text-center`}>
                                     {/* Number Badge */}
                                     <div className={`absolute top-0 right-0 px-4 py-2 rounded-bl-2xl rounded-tr-2xl bg-gray-100 text-xs font-black text-gray-400 ${activeBrandDetails.theme.light.replace('bg-', 'group-hover:bg-')} ${activeBrandDetails.theme.primary.replace('text-', 'group-hover:text-')} transition-colors`}>
                                         {step.step}
                                     </div>
                                     
                                     <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-4 ${activeBrandDetails.theme.light} ${activeBrandDetails.theme.primary} group-hover:scale-110 transition-transform`}>
                                         <step.icon size={28} strokeWidth={1.5} />
                                     </div>
                                     <h4 className="font-bold text-gray-900 mb-2">{step.title}</h4>
                                     <p className="text-xs text-gray-500 leading-relaxed font-medium">{step.desc}</p>
                                 </div>
                             </div>
                        ))}
                     </div>
                </div>
            )}
        </>
      ) : (
        // === GENERIC CATALOG BANNER (SYNCED BRAND TEAL) ===
        <div className="bg-gradient-to-br from-[#04ACA9] via-[#039693] to-[#027A78] text-white relative overflow-hidden rounded-b-[3rem] shadow-xl mb-12">
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-white/10 rounded-full blur-[100px] animate-pulse mix-blend-overlay"></div>
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#8FC842]/20 rounded-full blur-[100px]"></div>
            
            <div className="container mx-auto px-6 py-16 md:py-24 relative z-10 text-center animate-in fade-in zoom-in duration-500">
                <div className="inline-block mb-4">
                     <span className="px-4 py-1.5 rounded-full bg-white/20 backdrop-blur-md border border-white/20 text-xs font-bold uppercase tracking-widest text-white shadow-lg">
                         Sản phẩm LYHU
                     </span>
                </div>
                <h1 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">Danh Mục Sản Phẩm</h1>
                <p className="text-white/90 max-w-2xl mx-auto text-sm md:text-base font-medium leading-relaxed">
                    Khám phá thế giới đồ ăn vặt đa dạng, chất lượng cao từ các thương hiệu hàng đầu Việt Nam và Quốc tế.
                </p>
                <div className="mt-8 flex justify-center cursor-pointer" onClick={scrollToShop}>
                    <ArrowDown className="animate-bounce text-white/70" />
                </div>
            </div>
        </div>
      )}

      <div id="product-grid-section" className="container mx-auto px-4 md:px-8">
        
        {/* --- CONTROLS BAR (Filter & Search) --- */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 mb-8 sticky top-20 md:top-24 z-30 bg-white/90 backdrop-blur-md py-4 transition-all -mx-2 px-4 rounded-2xl shadow-sm border border-gray-100 lg:border-none lg:bg-transparent lg:shadow-none lg:backdrop-blur-none lg:static">
           
           {/* Category Tabs */}
           <div className="w-full lg:w-auto overflow-x-auto no-scrollbar pb-2 lg:pb-0">
              <div className="flex items-center gap-2">
                 <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-gray-400 border border-gray-100 shrink-0 lg:hidden">
                    <Filter size={14} />
                 </div>
                 {PRODUCT_CATEGORIES.map((cat) => {
                    // Check if there is specific brand theme data available for this category
                    const brandTheme = BRAND_DETAILS[cat.id]?.theme;
                    
                    return (
                        <button
                            key={cat.id}
                            onClick={() => setActiveCategory(cat.id)}
                            className={`px-5 py-2.5 rounded-full text-xs font-bold whitespace-nowrap transition-all duration-300 active:scale-95 border ${
                                activeCategory === cat.id 
                                ? `${brandTheme ? `bg-gradient-to-r ${brandTheme.gradient} text-white border-transparent` : 'bg-lyhu-teal text-white border-lyhu-teal'} shadow-lg scale-105` 
                                : 'bg-white text-gray-500 hover:bg-white hover:text-lyhu-dark border-gray-100 hover:border-gray-200'
                            }`}
                        >
                            {cat.label}
                        </button>
                    );
                 })}
              </div>
           </div>

           {/* Search Box */}
           <div className="w-full lg:w-80 relative group">
               <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                   <Search size={16} className={`text-gray-400 transition-colors ${activeBrandDetails ? activeBrandDetails.theme.primary : 'group-focus-within:text-lyhu-teal'}`} />
               </div>
               <input 
                  type="text" 
                  placeholder={activeBrandDetails ? `Tìm trong ${activeBrandDetails.title.split(' ')[0]}...` : "Tìm kiếm sản phẩm..."}
                  className={`w-full pl-10 pr-10 py-3 rounded-2xl bg-white border border-gray-200 focus:ring-4 outline-none text-sm font-medium transition-all shadow-sm placeholder-gray-400 ${activeBrandDetails ? `focus:border-${activeBrandDetails.theme.primary.split('-')[1]}-500 focus:ring-${activeBrandDetails.theme.primary.split('-')[1]}-500/10` : 'focus:border-lyhu-teal focus:ring-lyhu-teal/10'}`}
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
               />
               {searchTerm && (
                   <button 
                     onClick={() => setSearchTerm('')}
                     className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600 animate-in fade-in zoom-in duration-200"
                   >
                       <div className="bg-gray-100 rounded-full p-1 hover:bg-gray-200 transition-colors">
                           <X size={12} />
                       </div>
                   </button>
               )}
           </div>
        </div>

        {/* Result Count Info */}
        <div className="mb-6 flex items-center gap-2 text-xs font-medium text-gray-500 animate-in slide-in-from-left-2 duration-300">
            <span>Hiển thị <span className="text-gray-900 font-bold">{filteredProducts.length}</span> sản phẩm</span>
            {searchTerm && <span> cho từ khóa "<span className={`${activeBrandDetails ? activeBrandDetails.theme.primary : 'text-lyhu-teal'} font-bold`}>{searchTerm}</span>"</span>}
            {activeCategory !== 'all' && <span> thuộc <span className={`${activeBrandDetails ? activeBrandDetails.theme.primary : 'text-lyhu-teal'} font-bold`}>{PRODUCT_CATEGORIES.find(c => c.id === activeCategory)?.label}</span></span>}
        </div>

        {/* --- PRODUCTS GRID --- */}
        {filteredProducts.length > 0 ? (
            <div key={activeCategory} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8 min-h-[400px] animate-in fade-in duration-500 slide-in-from-bottom-4">
            {filteredProducts.map((product) => {
                // Determine card styling based on brand details
                const productBrandTheme = BRAND_DETAILS[product.brand]?.theme;
                const cardBadgeColor = productBrandTheme ? productBrandTheme.bg : (product.tagColor || 'bg-gray-800');
                const cardTextColor = productBrandTheme ? productBrandTheme.primary : 'text-lyhu-teal';
                const cardBorderClass = productBrandTheme ? `border-${productBrandTheme.border.split('-')[1]}-100` : 'border-gray-100';
                
                // Specific hover styling for brands
                const hoverRingClass = productBrandTheme ? `hover:${productBrandTheme.ring} hover:ring-2` : 'hover:ring-2 hover:ring-gray-100';

                return (
                <div 
                    key={product.id} 
                    className={`group bg-white rounded-[2rem] p-3 shadow-app hover:shadow-app-hover hover:-translate-y-2 transition-all duration-300 flex flex-col h-full border ${cardBorderClass} relative cursor-pointer ring-0 ${hoverRingClass}`}
                    onClick={() => setSelectedProduct(product)}
                >
                    {/* Image Container */}
                    <div className="relative aspect-square rounded-[1.5rem] overflow-hidden bg-gray-50 mb-4 border border-gray-50">
                        <img 
                            src={product.image} 
                            alt={product.name} 
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />

                        {/* Top Badges */}
                        <div className="absolute top-3 left-3 flex flex-col gap-2 z-10">
                             {product.tag && (
                                <span className={`px-2.5 py-1 rounded-lg text-[10px] font-extrabold uppercase tracking-wide text-white shadow-sm ${cardBadgeColor}`}>
                                    {product.tag}
                                </span>
                             )}
                        </div>
                        
                        {/* Hover Action Overlay */}
                        <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                             <div className={`px-4 py-2 bg-white/90 backdrop-blur ${cardTextColor} rounded-full font-bold text-xs shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 flex items-center gap-2`}>
                                <Search size={14} /> Xem nhanh
                             </div>
                        </div>
                    </div>

                    {/* Content Info */}
                    <div className="px-2 pb-2 flex flex-col flex-grow">
                        <div className="flex items-center gap-2 mb-2">
                             <span className={`text-[10px] font-bold uppercase px-2 py-0.5 rounded ${productBrandTheme ? productBrandTheme.light : 'bg-gray-100'} ${productBrandTheme ? productBrandTheme.primary : 'text-gray-600'} `}>
                                {product.brand}
                             </span>
                        </div>
                        
                        <h3 className={`text-lg font-bold text-gray-900 mb-2 leading-tight group-hover:${productBrandTheme ? productBrandTheme.primary.replace('text-', 'text-') : 'text-lyhu-teal'} transition-colors`}>
                            {product.name}
                        </h3>
                        
                        <p className="text-xs text-gray-500 font-medium leading-relaxed mb-4 line-clamp-2">
                            {product.desc}
                        </p>

                        <div className="mt-auto pt-4 border-t border-gray-50 flex items-center justify-between gap-3">
                            <button 
                                className="flex-1 py-2.5 rounded-xl bg-gray-50 text-gray-600 text-xs font-bold uppercase tracking-wider group-hover:bg-gray-100 transition-all flex items-center justify-center gap-2"
                            >
                                <Info size={14} /> Chi tiết
                            </button>
                            <div
                                className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all group-hover:text-white group-hover:shadow-lg ${productBrandTheme 
                                    ? `${productBrandTheme.light} ${productBrandTheme.primary} group-hover:bg-gradient-to-r ${productBrandTheme.gradient}` 
                                    : 'bg-lyhu-green/10 text-lyhu-green group-hover:bg-lyhu-green group-hover:shadow-lyhu-green/30'}`}
                                onClick={(e) => {
                                    e.stopPropagation();
                                    showToast(`Đã thêm ${product.name} vào danh sách quan tâm`);
                                }}
                            >
                                <Heart size={16} />
                            </div>
                        </div>
                    </div>
                </div>
            )})}
            </div>
        ) : (
            <div className="flex flex-col items-center justify-center py-20 text-center animate-in fade-in zoom-in duration-300">
                <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mb-6">
                    <Search size={32} className="text-gray-300" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Không tìm thấy sản phẩm</h3>
                <p className="text-gray-500">Thử thay đổi bộ lọc hoặc từ khóa tìm kiếm của bạn.</p>
                <button 
                    onClick={() => { setActiveCategory('all'); setSearchTerm(''); }}
                    className="mt-6 px-6 py-2 bg-lyhu-teal text-white rounded-full text-sm font-bold shadow-lg shadow-lyhu-teal/30 hover:shadow-xl hover:-translate-y-1 transition-all"
                >
                    Xóa bộ lọc
                </button>
            </div>
        )}
      </div>

      {/* --- EXPLORE OTHER BRANDS (Footer Navigation for Brand Pages) --- */}
      {activeBrandDetails && (
          <div className="container mx-auto px-4 md:px-8 mt-24">
              <div className="border-t border-gray-200 pt-12 pb-8">
                  <div className="text-center mb-10">
                      <h4 className="text-lg font-bold text-gray-400 uppercase tracking-widest mb-2">Khám phá hệ sinh thái LYHU</h4>
                      <h3 className="text-2xl font-bold text-gray-900">Các thương hiệu khác</h3>
                  </div>
                  
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
                      {BRANDS.filter(b => b.name !== activeBrandDetails.title.split(' ')[0]).map((brand, idx) => (
                          <button 
                             key={idx}
                             onClick={() => {
                                 setActiveCategory(brand.name.split(' ')[0]);
                                 window.scrollTo({ top: 0, behavior: 'smooth' });
                             }}
                             className="group bg-white rounded-3xl p-6 border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 flex flex-col items-center justify-center gap-4 relative overflow-hidden"
                          >
                             {/* Hover brand color bg */}
                             <div className={`absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300 ${BRAND_DETAILS[brand.name.split(' ')[0]]?.theme.bg}`}></div>

                             <img src={brand.logoPlaceholder === 'BOYO' ? 'https://drive.google.com/thumbnail?id=18S5Pe52quMkvtZmRt5vCAwR3BVXaWJuk&sz=w1000' : 
                                       brand.logoPlaceholder === 'UHi' ? 'https://drive.google.com/thumbnail?id=1Mb3p6UdcHGwrUSoghO5bfXxB70QUvXYc&sz=w1000' :
                                       brand.logoPlaceholder === 'CVT' ? 'https://drive.google.com/thumbnail?id=15nhC20zE7ulpESkh_WfjWNrr9Hkrff8A&sz=w1000' :
                                       'https://drive.google.com/thumbnail?id=1VJmK-iUrzUrczRlldGtfUPGftHMOzzag&sz=w1000'} 
                                  alt={brand.name}
                                  className="h-12 w-auto object-contain grayscale group-hover:grayscale-0 transition-all duration-300 relative z-10"
                             />
                             <span className={`text-xs font-bold text-gray-400 uppercase tracking-widest ${BRAND_DETAILS[brand.name.split(' ')[0]]?.theme.primary.replace('text-', 'group-hover:text-')} transition-colors relative z-10 flex items-center gap-1`}>
                                 Xem ngay <ArrowRight size={12} className="opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
                             </span>
                          </button>
                      ))}
                  </div>
              </div>
          </div>
      )}

      {/* --- PRODUCT DETAIL MODAL --- */}
      {selectedProduct && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-gray-900/80 backdrop-blur-md animate-in fade-in duration-200"
          onClick={() => setSelectedProduct(null)}
        >
          <div 
            className="bg-white rounded-[2.5rem] overflow-hidden max-w-5xl w-full flex flex-col md:flex-row shadow-2xl relative animate-in zoom-in-95 duration-300 max-h-[90vh] md:max-h-[800px] md:min-h-[500px]"
            onClick={e => e.stopPropagation()}
          >
             {/* Header Controls (Floating) */}
             <div className="absolute top-4 right-4 z-50 flex gap-2">
                 <button 
                    onClick={handleCopyLink}
                    className="p-2.5 bg-white/80 hover:bg-white rounded-full text-gray-600 shadow-sm backdrop-blur-sm transition-all hover:text-lyhu-teal hover:scale-105"
                    title="Chia sẻ"
                 >
                     <Share2 size={18} />
                 </button>
                 <button 
                    onClick={() => setSelectedProduct(null)}
                    className="p-2.5 bg-black/80 hover:bg-black text-white rounded-full shadow-lg backdrop-blur-sm transition-all hover:scale-105"
                 >
                    <X size={18} />
                 </button>
             </div>

             {/* Modal Image Side */}
             <div className="w-full md:w-5/12 h-64 md:h-auto relative bg-gray-50 shrink-0 md:border-r border-gray-100">
                <img 
                  src={selectedProduct.image} 
                  alt={selectedProduct.name} 
                  className="w-full h-full object-cover absolute inset-0 z-10"
                />
                {/* Fallback pattern background */}
                <div className="absolute inset-0 opacity-10" style={{backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '20px 20px'}}></div>
                
                {/* Gradient overlay for text contrast if needed */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent pointer-events-none md:hidden z-20"></div>
             </div>

             {/* Modal Info Side */}
             <div className="w-full md:w-7/12 p-6 md:p-10 flex flex-col overflow-y-auto custom-scrollbar bg-white relative">
                 <div className="mb-6">
                     <div className="flex items-center gap-2 mb-4">
                        <span className={`px-2.5 py-1 rounded-lg text-[10px] font-bold uppercase tracking-wider text-white shadow-sm ${selectedProduct.tagColor || (BRAND_DETAILS[selectedProduct.brand]?.theme.bg) || 'bg-gray-500'}`}>
                           {selectedProduct.brand}
                        </span>
                        <span className="text-gray-400 text-xs font-bold uppercase tracking-wider bg-gray-100 px-2 py-1 rounded-lg">
                             {selectedProduct.category}
                        </span>
                     </div>
                     <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 leading-tight">{selectedProduct.name}</h2>
                     <p className="text-gray-600 text-sm md:text-base leading-relaxed font-medium">{selectedProduct.desc}</p>
                 </div>

                 {/* Specs Grid */}
                 <div className="grid grid-cols-3 gap-4 mb-8 bg-gray-50 rounded-2xl p-5 border border-gray-100">
                     <div className="text-center group">
                        <div className={`flex justify-center text-gray-400 ${BRAND_DETAILS[selectedProduct.brand]?.theme.primary.replace('text-', 'group-hover:text-')} transition-colors mb-2`}><Package size={24} strokeWidth={1.5} /></div>
                        <div className="text-[10px] uppercase text-gray-400 font-bold mb-1 tracking-wider">Quy cách</div>
                        <div className="text-sm font-bold text-gray-800">{selectedProduct.specs?.pack || 'N/A'}</div>
                     </div>
                     <div className="text-center border-l border-gray-200 group">
                        <div className={`flex justify-center text-gray-400 ${BRAND_DETAILS[selectedProduct.brand]?.theme.primary.replace('text-', 'group-hover:text-')} transition-colors mb-2`}><Calendar size={24} strokeWidth={1.5} /></div>
                        <div className="text-[10px] uppercase text-gray-400 font-bold mb-1 tracking-wider">Hạn dùng</div>
                        <div className="text-sm font-bold text-gray-800">{selectedProduct.specs?.shelfLife || 'N/A'}</div>
                     </div>
                     <div className="text-center border-l border-gray-200 group">
                        <div className={`flex justify-center text-gray-400 ${BRAND_DETAILS[selectedProduct.brand]?.theme.primary.replace('text-', 'group-hover:text-')} transition-colors mb-2`}><Award size={24} strokeWidth={1.5} /></div>
                        <div className="text-[10px] uppercase text-gray-400 font-bold mb-1 tracking-wider">Chứng nhận</div>
                        <div className="text-sm font-bold text-gray-800">{selectedProduct.specs?.cert || 'N/A'}</div>
                     </div>
                 </div>

                 {/* Highlights */}
                 <div className={`mb-8 ${BRAND_DETAILS[selectedProduct.brand]?.theme.light} rounded-2xl p-6 border ${BRAND_DETAILS[selectedProduct.brand]?.theme.border}`}>
                     <h4 className={`text-xs font-bold ${BRAND_DETAILS[selectedProduct.brand]?.theme.primary} uppercase tracking-widest mb-4 flex items-center gap-2`}>
                        <Award size={14} /> Đặc điểm nổi bật
                     </h4>
                     <ul className="space-y-3">
                        {selectedProduct.highlights?.map((hl, idx) => (
                            <li key={idx} className="flex items-start gap-3 text-sm text-gray-700 font-medium">
                                <div className={`mt-0.5 w-5 h-5 rounded-full bg-white ${BRAND_DETAILS[selectedProduct.brand]?.theme.primary} shadow-sm flex items-center justify-center shrink-0`}>
                                    <Check size={12} strokeWidth={4} />
                                </div>
                                {hl}
                            </li>
                        ))}
                     </ul>
                 </div>

                 {/* Related Products Section */}
                 {relatedProducts.length > 0 && (
                    <div className="mt-auto mb-8 pt-6 border-t border-gray-100">
                        <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">Sản phẩm tương tự</h4>
                        <div className="grid grid-cols-3 gap-4">
                            {relatedProducts.map(rp => (
                                <div 
                                    key={rp.id} 
                                    className="group/related cursor-pointer bg-gray-50 rounded-xl p-2 hover:bg-white hover:shadow-md transition-all border border-transparent hover:border-gray-100"
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        setSelectedProduct(rp);
                                    }}
                                >
                                    <div className="aspect-square rounded-lg overflow-hidden bg-white mb-2 relative">
                                        <img src={rp.image} className="w-full h-full object-cover opacity-90 group-hover/related:opacity-100 transition-opacity" alt={rp.name} />
                                    </div>
                                    <p className={`text-[10px] font-bold text-gray-600 truncate ${BRAND_DETAILS[rp.brand]?.theme.primary.replace('text-', 'group-hover/related:text-')} text-center`}>{rp.name}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                 )}

                 {/* Actions */}
                 <div className="mt-4 flex gap-4 sticky bottom-0 bg-white pt-4 border-t border-gray-50">
                     <button 
                         onClick={handleContact}
                         className={`flex-1 py-4 ${BRAND_DETAILS[selectedProduct.brand] ? `bg-gradient-to-r ${BRAND_DETAILS[selectedProduct.brand].theme.gradient}` : 'bg-lyhu-dark'} text-white rounded-xl font-bold uppercase text-xs tracking-wider shadow-lg hover:shadow-xl active:scale-[0.98] transition-all flex items-center justify-center gap-2`}
                     >
                         <ExternalLink size={16} /> Liên hệ đặt hàng
                     </button>
                 </div>
             </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Products;
