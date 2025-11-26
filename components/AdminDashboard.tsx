
import React, { useState, useMemo } from 'react';
import { PRODUCTS_DATA, NEWS_ITEMS, JOBS, NEWS_CATEGORIES, PRODUCT_CATEGORIES, CONTACT_INFO, PRINCIPLES_3K1C, LYHU_VALUES, BRAND_DETAILS } from '../constants';
import { 
  LayoutDashboard, Package, Users, FileText, LogOut, 
  TrendingUp, Menu, ArrowUpRight, Edit, Trash2, Plus, 
  Home, Info, Briefcase, Mail, Save, Image, X, CheckCircle, 
  Layers, BarChart3, Eye, EyeOff, Upload, Star, Megaphone, ToggleLeft, ToggleRight, MessageSquare, Link as LinkIcon, Globe, Search, Type, Target, ShieldCheck, MapPin, Phone, Award, Clock, Shuffle, Filter, Video, Palette, Calendar, Check
} from 'lucide-react';

interface AdminDashboardProps {
  onLogout: () => void;
}

const AdminDashboard: React.FC<AdminDashboardProps> = ({ onLogout }) => {
  const [isSidebarOpen, setSidebarOpen] = useState(true);
  const [activeTab, setActiveTab] = useState('dashboard');
  const [showToast, setShowToast] = useState(false);
  
  // --- LOCAL STATE FOR CRUD OPERATIONS ---
  const [products, setProducts] = useState(PRODUCTS_DATA);
  const [news, setNews] = useState(NEWS_ITEMS);
  const [jobs, setJobs] = useState(JOBS.map(j => ({...j, status: 'active', applicants: Math.floor(Math.random() * 20)}))); 
  
  // Brand Data State
  const [brandsData, setBrandsData] = useState(BRAND_DETAILS);
  const [selectedBrandEdit, setSelectedBrandEdit] = useState<string | null>(null);

  // Partners State
  const [partners, setPartners] = useState([
      { name: 'WinMart', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/WinMart_logo.svg/1200px-WinMart_logo.svg.png' },
      { name: 'Circle K', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Circle_K_logo.svg/2048px-Circle_K_logo.svg.png' },
      { name: 'GS25', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/GS25_Logo.svg/1200px-GS25_Logo.svg.png' },
      { name: 'AEON', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/AEON_logo.svg/2560px-AEON_logo.svg.png' },
      { name: 'Co.op Mart', logo: 'https://upload.wikimedia.org/wikipedia/commons/9/9b/Co.opmart_logo.svg' },
      { name: 'GO!', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/GO%21_Mall_logo.svg/2560px-GO%21_Mall_logo.svg.png' },
  ]);

  // Home Data State
  const [homeData, setHomeData] = useState({
      seo: {
          title: 'LYHU - Kết nối chân thành, Hợp tác bền vững',
          desc: 'Website chính thức của LYHU Corporation. Chuyên sản xuất, nhập khẩu và phân phối hàng tiêu dùng nhanh (FMCG) tại Việt Nam.'
      },
      hero: {
          title1: 'Kết Nối Chân Thành',
          title2: 'Hợp Tác Bền Vững',
          desc: 'LYHU đồng hành cùng sự phát triển của bạn. Chúng tôi nỗ lực mỗi ngày để mang đến những sản phẩm chất lượng và giải pháp phân phối hiệu quả nhất.',
          buttons: {
              primary: { text: "Về chúng tôi", link: "business" },
              secondary: { text: "Liên hệ hợp tác", link: "contact" }
          },
          stats: [
            { label: 'Uy tín', val: 'Hàng đầu' },
            { label: 'Sản phẩm', val: 'Chính hãng' },
            { label: 'Phục vụ', val: 'Tận tâm' },
            { label: 'Hợp tác', val: 'Bền vững' }
          ]
      },
      sectionTitles: {
          business: { title: "LĨNH VỰC HOẠT ĐỘNG", subtitle: "4 trụ cột tạo nên sức mạnh tổng hợp của LYHU." },
          brands: { title: "HỆ SINH THÁI THƯƠNG HIỆU", subtitle: "Quy tụ những thương hiệu chất lượng, đa dạng nguồn gốc và hương vị." },
          partners: { title: "ĐỐI TÁC PHÂN PHỐI", subtitle: "Sản phẩm của LYHU đã có mặt tại các hệ thống siêu thị và cửa hàng tiện lợi hàng đầu Việt Nam." },
          news: { title: "TIN TỨC & SỰ KIỆN", subtitle: "Cập nhật thông tin mới nhất từ hệ sinh thái LYHU" }
      },
      businessAreas: [
        { title: "SẢN XUẤT", subtitle: "Nhà máy & R&D", desc: "Hệ thống nhà máy chuẩn ISO 22000. Nghiên cứu & phát triển sản phẩm chất lượng.", isVisible: true, highlight: true },
        { title: "NHẬP KHẨU", subtitle: "Chính ngạch", desc: "Đối tác chiến lược của các tập đoàn FMCG. Nhập khẩu minh bạch.", isVisible: true, highlight: false },
        { title: "THƯƠNG MẠI", subtitle: "Phân phối B2B", desc: "Mạng lưới phân phối 63 tỉnh thành. Chính sách linh hoạt.", isVisible: true, highlight: false },
        { title: "BÁN LẺ", subtitle: "Kênh MT & GT", desc: "Phủ sóng siêu thị & điểm bán lẻ. Tiếp cận người dùng cuối.", isVisible: true, highlight: false }
      ],
      brandEcosystem: [
        { name: "BOYO", tag: "Thương hiệu riêng", desc: "Gia vị rắc & Snack", logo: "https://drive.google.com/thumbnail?id=18S5Pe52quMkvtZmRt5vCAwR3BVXaWJuk&sz=w1000" },
        { name: "CVT", tag: "Trung Quốc", desc: "Khoai môn tẩm vị", logo: "https://drive.google.com/thumbnail?id=15nhC20zE7ulpESkh_WfjWNrr9Hkrff8A&sz=w1000" },
        { name: "UHi", tag: "Hàn Quốc", desc: "Kẹo dẻo siêu chua", logo: "https://drive.google.com/thumbnail?id=1Mb3p6UdcHGwrUSoghO5bfXxB70QUvXYc&sz=w1000" },
        { name: "ABI SNACK", tag: "Việt Nam", desc: "Bánh tráng trộn", logo: "https://drive.google.com/thumbnail?id=1VJmK-iUrzUrczRlldGtfUPGftHMOzzag&sz=w1000" }
      ],
      featuredNewsId: 1,
      visibility: { hero: true, stats: true, business: true, brands: true, partners: true, news: true, cta: true },
      promo: {
          isActive: true,
          title: "Ưu Đãi Tháng 12",
          discount: "40%",
          desc: "Cơ hội vàng để mở rộng kinh doanh cùng hệ sinh thái sản phẩm LYHU.",
          image: "https://images.unsplash.com/photo-1513885535751-8b9238bd345a?auto=format&fit=crop&q=80&w=1000"
      },
      cta: {
          title: "Trở thành Đối tác Phân phối của LYHU ngay hôm nay",
          subtitle: "Nhận chính sách chiết khấu hấp dẫn, hỗ trợ Marketing toàn diện và độc quyền khu vực."
      }
  });

  // About Data State
  const [aboutData, setAboutData] = useState({
      intro: {
          title: "CÂU CHUYỆN LYHU",
          subtitle: "Hành trình kiến tạo giá trị bền vững từ những kết nối chân thành.",
          desc1: "Tại LYHU, mỗi sản phẩm được đưa ra thị trường là kết quả của một quá trình tuyển chọn khắt khe và tâm huyết. Chúng tôi hiểu rằng, đằng sau mỗi đơn hàng là sự kỳ vọng của đối tác và sức khỏe của người tiêu dùng.",
          desc2: "Khởi đầu từ những bước chân nhỏ bé, LYHU đang vươn mình trở thành mắt xích quan trọng trong chuỗi cung ứng FMCG tại Việt Nam.",
          image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=1000"
      },
      vision: { 
          title: "Tầm Nhìn", 
          desc: "Top 10 doanh nghiệp phân phối FMCG uy tín nhất Việt Nam. Tiên phong đưa các sản phẩm Trend quốc tế về thị trường nội địa.",
          icon: Star 
      },
      mission: { 
          title: "Sứ Mệnh", 
          desc: "Nâng cao chất lượng cuộc sống Việt thông qua nguồn thực phẩm an toàn, minh bạch nguồn gốc và dịch vụ tận tâm.",
          icon: CheckCircle 
      },
      stats: [
          { val: 63, label: "Tỉnh thành" },
          { val: 500, label: "Đối tác" },
          { val: "24/7", label: "Hỗ trợ" }
      ],
      coreValues: [
          { code: 'KỶ LUẬT', title: 'HÀNH VI', desc: 'Là nền móng để mọi người làm đúng nguyên tắc, quy chuẩn, và giữ sự ổn định trong hành động.', icon: ShieldCheck },
          { code: 'KIÊN TRÌ', title: 'THÓI QUEN', desc: 'Máy phát lực giúp kỷ luật không bị nguội lạnh. Duy trì hành động đều đặn và không bỏ cuộc.', icon: TrendingUp },
          { code: 'KIÊN NHẪN', title: 'THÁI ĐỘ', desc: 'Thái độ chấp nhận nhịp độ và thời gian cần thiết để thấy kết quả. Tránh nóng vội.', icon: Clock },
          { code: 'CHẤP NHẬN QUÁ TRÌNH', title: 'TƯ DUY', desc: 'Hiểu rằng mọi thành quả đều đến từ hành trình. Sẵn sàng đối mặt với thăng trầm.', icon: Shuffle }
      ]
  });

  // Contact Info State
  const [contactData, setContactData] = useState(CONTACT_INFO);
  const [leads, setLeads] = useState([
      { id: 1, name: "Nguyễn Văn A", phone: "0909123456", type: "Đại lý", region: "Hà Nội", status: "Mới", date: "25/11/2024" },
      { id: 2, name: "Trần Thị B", phone: "0912345678", type: "NPP", region: "Đà Nẵng", status: "Đã liên hệ", date: "24/11/2024" },
  ]);
  
  // Editor State
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState<any>({});
  const [newPartner, setNewPartner] = useState({ name: '', logo: '' });
  
  // Filters
  const [productFilter, setProductFilter] = useState('all');
  const [newsFilter, setNewsFilter] = useState('all');
  const [jobFilter, setJobFilter] = useState('all');

  // --- HELPERS ---
  const openEdit = (item?: any) => { setFormData(item || {}); setIsEditing(true); };
  
  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    if (activeTab === 'products') {
        if (formData.id) setProducts(prev => prev.map(p => p.id === formData.id ? { ...p, ...formData } : p));
        else setProducts(prev => [{ ...formData, id: Date.now(), image: formData.image || 'https://placehold.co/400' }, ...prev]);
    } else if (activeTab === 'news') {
        if (formData.id) setNews(prev => prev.map(n => n.id === formData.id ? { ...n, ...formData } : n));
        else setNews(prev => [{ ...formData, id: Date.now(), date: new Date().toLocaleDateString('vi-VN'), views: '0', image: formData.image || 'https://placehold.co/600x400' }, ...prev]);
    } else if (activeTab === 'recruitment') {
        if (formData.id) setJobs(prev => prev.map(j => j.id === formData.id ? { ...j, ...formData } : j));
        else setJobs(prev => [{ ...formData, id: Date.now(), status: 'active', applicants: 0 }, ...prev]);
    }
    showSuccess();
    setIsEditing(false);
    setFormData({});
  };

  const showSuccess = () => { setShowToast(true); setTimeout(() => setShowToast(false), 3000); };

  // Generic Nested Object Update Helper
  const handleNestedChange = (stateSetter: any, path: string[], value: any) => {
      stateSetter((prev: any) => {
          const newState = JSON.parse(JSON.stringify(prev));
          let current = newState;
          for (let i = 0; i < path.length - 1; i++) {
              current = current[path[i]];
          }
          current[path[path.length - 1]] = value;
          return newState;
      });
  };

  const handleBrandChange = (brandKey: string, field: string, value: any) => {
      setBrandsData(prev => ({
          ...prev,
          [brandKey]: { ...prev[brandKey], [field]: value }
      }));
  };

  // Home & About Handlers
  const handleHomeChange = (section: string, field: string, value: any, index?: number) => {
      setHomeData(prev => {
          // @ts-ignore
          const sectionData = prev[section];
          if (Array.isArray(sectionData) && index !== undefined) {
             const newData = [...sectionData];
             // @ts-ignore
             newData[index] = { ...newData[index], [field]: value };
             // @ts-ignore
             return { ...prev, [section]: newData };
          }
          // @ts-ignore
          if (typeof sectionData === 'object' && !Array.isArray(sectionData)) {
             // @ts-ignore
             if (index !== undefined && section === 'hero') { 
                 // @ts-ignore
                 const newStats = [...prev.hero.stats];
                 newStats[index] = { ...newStats[index], ...value };
                 // @ts-ignore
                 return { ...prev, hero: { ...prev.hero, stats: newStats } };
             }
             if (section === 'hero' && field === 'button') {
                 return { ...prev, hero: { ...prev.hero, buttons: { ...prev.hero.buttons, [index as any]: { ...prev.hero.buttons[index as any], ...value } } } };
             }
             // @ts-ignore
             return { ...prev, [section]: { ...prev[section], [field]: value } };
          }
          return prev;
      });
  };

  const handleAboutChange = (section: string, field: string, value: any, index?: number) => {
      setAboutData(prev => {
          if (index !== undefined && (section === 'coreValues' || section === 'stats')) {
              // @ts-ignore
              const newArr = [...prev[section]];
              newArr[index] = { ...newArr[index], [field]: value };
              return { ...prev, [section]: newArr };
          }
          // @ts-ignore
          return { ...prev, [section]: { ...prev[section], [field]: value } };
      });
  };

  const addHomeList = (type: 'stats' | 'business' | 'brand') => {
      if (type === 'stats') setHomeData(prev => ({ ...prev, hero: { ...prev.hero, stats: [...prev.hero.stats, { label: 'Mới', val: '0' }] } }));
      else if (type === 'business') setHomeData(prev => ({ ...prev, businessAreas: [...prev.businessAreas, { title: "MỚI", subtitle: "Mô tả", desc: "...", isVisible: true, highlight: false }] }));
      else if (type === 'brand') setHomeData(prev => ({ ...prev, brandEcosystem: [...prev.brandEcosystem, { name: "NEW BRAND", tag: "Origin", desc: "Description", logo: "" }] }));
  };
  const removeHomeList = (type: 'stats' | 'business' | 'brand', index: number) => {
      if (type === 'stats') setHomeData(prev => ({ ...prev, hero: { ...prev.hero, stats: prev.hero.stats.filter((_, i) => i !== index) } }));
      else if (type === 'business') setHomeData(prev => ({ ...prev, businessAreas: prev.businessAreas.filter((_, i) => i !== index) }));
      else if (type === 'brand') setHomeData(prev => ({ ...prev, brandEcosystem: prev.brandEcosystem.filter((_, i) => i !== index) }));
  };

  const handleDelete = (id: number, type: 'product' | 'news' | 'job') => {
      if (confirm('Xóa mục này?')) {
          if (type === 'product') setProducts(prev => prev.filter(p => p.id !== id));
          if (type === 'news') setNews(prev => prev.filter(n => n.id !== id));
          if (type === 'job') setJobs(prev => prev.filter(j => j.id !== id));
      }
  };

  const toggleNewsFeatured = (id: number) => {
      setNews(prev => prev.map(n => n.id === id ? { ...n, featured: !n.featured } : n));
  };

  const toggleJobStatus = (id: number) => {
      setJobs(prev => prev.map(j => j.id === id ? { ...j, status: j.status === 'active' ? 'closed' : 'active' } : j));
  };

  const addPartner = () => {
      if (newPartner.name) {
          setPartners(prev => [...prev, { name: newPartner.name, logo: newPartner.logo || '' }]);
          setNewPartner({ name: '', logo: '' });
      }
  };
  const removePartner = (idx: number) => setPartners(prev => prev.filter((_, i) => i !== idx));

  // --- RENDERERS ---

  const renderDashboardHome = () => (
      <div className="space-y-8">
         <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-[2rem] shadow-sm border border-gray-100">
                <div className="flex justify-between items-start mb-4">
                    <div className="w-12 h-12 rounded-2xl flex items-center justify-center bg-orange-50 text-orange-600"><Users size={24} /></div>
                    <span className="text-xs font-bold px-2 py-1 rounded-lg bg-green-50 text-green-600">+3 Mới</span>
                </div>
                <h3 className="text-3xl font-black text-gray-900 mb-1">{leads.length}</h3>
                <p className="text-sm text-gray-500 font-medium">Đăng ký đối tác</p>
            </div>
            <div className="bg-white p-6 rounded-[2rem] shadow-sm border border-gray-100">
                <div className="flex justify-between items-start mb-4">
                    <div className="w-12 h-12 rounded-2xl flex items-center justify-center bg-blue-50 text-blue-600"><Package size={24} /></div>
                </div>
                <h3 className="text-3xl font-black text-gray-900 mb-1">{products.length}</h3>
                <p className="text-sm text-gray-500 font-medium">Sản phẩm</p>
            </div>
            <div className="bg-white p-6 rounded-[2rem] shadow-sm border border-gray-100">
                <div className="flex justify-between items-start mb-4">
                    <div className="w-12 h-12 rounded-2xl flex items-center justify-center bg-purple-50 text-purple-600"><FileText size={24} /></div>
                </div>
                <h3 className="text-3xl font-black text-gray-900 mb-1">{news.length}</h3>
                <p className="text-sm text-gray-500 font-medium">Bài viết tin tức</p>
            </div>
         </div>
      </div>
  );

  const renderHomeManager = () => (
      <div className="max-w-5xl mx-auto pb-20 space-y-8">
          <div className="flex justify-between items-center sticky top-0 bg-gray-50 z-30 py-4 backdrop-blur-sm">
              <h2 className="text-2xl font-bold text-gray-900">Quản lý Trang chủ</h2>
              <button onClick={showSuccess} className="bg-lyhu-teal text-white px-6 py-3 rounded-xl font-bold text-sm flex items-center gap-2 shadow-lg hover:bg-lyhu-teal-deep transition-all"><Save size={18} /> Lưu thay đổi</button>
          </div>
          
          {/* SEO Config */}
          <div className="bg-white rounded-[2rem] shadow-sm border border-gray-100 p-8">
              <h3 className="text-lg font-bold text-gray-900 mb-6 flex items-center gap-2"><Globe size={20} className="text-indigo-600" /> Cấu hình SEO & Hiển thị</h3>
              <div className="space-y-4">
                  <input type="text" value={homeData.seo.title} onChange={(e) => handleHomeChange('seo', 'title', e.target.value)} className="w-full p-3 bg-gray-50 rounded-xl border border-gray-200 text-gray-900" placeholder="Meta Title" />
                  <textarea rows={2} value={homeData.seo.desc} onChange={(e) => handleHomeChange('seo', 'desc', e.target.value)} className="w-full p-3 bg-gray-50 rounded-xl border border-gray-200 text-gray-900" placeholder="Meta Description"></textarea>
                  <div className="flex flex-wrap gap-4 mt-4 pt-4 border-t border-gray-100">
                      {Object.entries(homeData.visibility).map(([key, val]) => (
                          <button key={key} onClick={() => handleHomeChange('visibility', key, !val)} className={`px-4 py-2 rounded-lg text-xs font-bold uppercase border ${val ? 'bg-teal-50 border-teal-200 text-teal-700' : 'bg-gray-50 border-gray-200 text-gray-400'}`}>
                              {key} {val ? 'ON' : 'OFF'}
                          </button>
                      ))}
                  </div>
              </div>
          </div>

          {/* Hero Banner Section */}
          <div className="bg-white rounded-[2rem] shadow-sm border border-gray-100 p-8">
              <div className="flex justify-between mb-6"><h3 className="text-lg font-bold text-gray-900">Banner & Thống kê</h3></div>
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <input type="text" value={homeData.hero.title1} onChange={(e) => handleHomeChange('hero', 'title1', e.target.value)} className="w-full p-3 bg-gray-50 rounded-xl border border-gray-200 font-bold text-gray-900" />
                  <input type="text" value={homeData.hero.title2} onChange={(e) => handleHomeChange('hero', 'title2', e.target.value)} className="w-full p-3 bg-gray-50 rounded-xl border border-gray-200 font-bold text-lyhu-teal" />
              </div>
              <div className="mb-6">
                  <textarea rows={3} value={homeData.hero.desc} onChange={(e) => handleHomeChange('hero', 'desc', e.target.value)} className="w-full p-3 bg-gray-50 rounded-xl border border-gray-200 text-sm text-gray-900" placeholder="Mô tả ngắn"></textarea>
              </div>
              {/* Hero Buttons */}
              <div className="grid md:grid-cols-2 gap-6 mb-6 bg-gray-50 p-4 rounded-xl border border-gray-200">
                  <div>
                      <label className="text-xs font-bold text-gray-500 uppercase mb-1 block">Nút 1 (Trái)</label>
                      <div className="flex gap-2">
                          <input type="text" value={homeData.hero.buttons.primary.text} onChange={(e) => handleHomeChange('hero', 'button', { text: e.target.value }, 'primary' as any)} className="w-full p-2 bg-white rounded-lg border border-gray-200 text-sm text-gray-900" placeholder="Text" />
                          <input type="text" value={homeData.hero.buttons.primary.link} onChange={(e) => handleHomeChange('hero', 'button', { link: e.target.value }, 'primary' as any)} className="w-full p-2 bg-white rounded-lg border border-gray-200 text-sm text-gray-900" placeholder="Link ID" />
                      </div>
                  </div>
                  <div>
                      <label className="text-xs font-bold text-gray-500 uppercase mb-1 block">Nút 2 (Phải)</label>
                      <div className="flex gap-2">
                          <input type="text" value={homeData.hero.buttons.secondary.text} onChange={(e) => handleHomeChange('hero', 'button', { text: e.target.value }, 'secondary' as any)} className="w-full p-2 bg-white rounded-lg border border-gray-200 text-sm text-gray-900" placeholder="Text" />
                          <input type="text" value={homeData.hero.buttons.secondary.link} onChange={(e) => handleHomeChange('hero', 'button', { link: e.target.value }, 'secondary' as any)} className="w-full p-2 bg-white rounded-lg border border-gray-200 text-sm text-gray-900" placeholder="Link ID" />
                      </div>
                  </div>
              </div>

              <div className="grid md:grid-cols-4 gap-4 pt-4 border-t border-gray-100">
                  {homeData.hero.stats.map((stat, idx) => (
                      <div key={idx} className="relative group">
                          <input type="text" value={stat.val} onChange={(e) => handleHomeChange('hero', 'stats', { val: e.target.value }, idx)} className="w-full p-2 bg-white text-center font-bold border-b border-gray-200 focus:border-lyhu-teal outline-none text-gray-900" />
                          <input type="text" value={stat.label} onChange={(e) => handleHomeChange('hero', 'stats', { label: e.target.value }, idx)} className="w-full p-1 bg-white text-center text-xs text-gray-500 border-b border-transparent focus:border-lyhu-teal outline-none" />
                          <button onClick={() => removeHomeList('stats', idx)} className="absolute -top-2 -right-2 text-red-400 opacity-0 group-hover:opacity-100"><X size={14} /></button>
                      </div>
                  ))}
                  <button onClick={() => addHomeList('stats')} className="flex items-center justify-center bg-gray-50 rounded-xl hover:bg-gray-100"><Plus size={20} className="text-gray-400" /></button>
              </div>
          </div>

          {/* Brand Ecosystem Manager (NEW) */}
          <div className="bg-white rounded-[2rem] shadow-sm border border-gray-100 p-8">
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-gray-100">
                  <h3 className="text-lg font-bold text-gray-900 flex items-center gap-2"><Award size={20} className="text-pink-600" /> Hệ sinh thái Thương hiệu</h3>
                  <button onClick={() => addHomeList('brand')} className="text-lyhu-teal hover:bg-lyhu-teal/10 p-2 rounded-lg flex items-center gap-2 text-xs font-bold"><Plus size={16} /> Thêm thương hiệu</button>
              </div>
              {/* Header Config */}
              <div className="bg-gray-50 p-4 rounded-xl border border-gray-200 mb-6">
                  <input type="text" value={homeData.sectionTitles.brands.title} onChange={(e) => handleHomeChange('sectionTitles', 'brands', { ...homeData.sectionTitles.brands, title: e.target.value })} className="w-full p-2 bg-transparent font-bold border-b border-gray-300 mb-2 outline-none focus:border-lyhu-teal text-gray-900" placeholder="Tiêu đề section" />
                  <input type="text" value={homeData.sectionTitles.brands.subtitle} onChange={(e) => handleHomeChange('sectionTitles', 'brands', { ...homeData.sectionTitles.brands, subtitle: e.target.value })} className="w-full p-2 bg-transparent text-sm text-gray-500 border-b border-gray-300 outline-none focus:border-lyhu-teal" placeholder="Mô tả phụ" />
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                  {homeData.brandEcosystem.map((brand, idx) => (
                      <div key={idx} className="p-4 border border-gray-200 rounded-xl relative group bg-white">
                          <button onClick={() => removeHomeList('brand', idx)} className="absolute -top-2 -right-2 p-1 bg-white shadow text-gray-400 hover:text-red-500 rounded-full opacity-0 group-hover:opacity-100 z-10"><X size={14} /></button>
                          <div className="flex gap-4 mb-3">
                              <div className="w-16 h-16 bg-gray-50 rounded-lg border flex items-center justify-center shrink-0">
                                  {brand.logo ? <img src={brand.logo} className="w-12 h-12 object-contain" alt="" /> : <Image size={24} className="text-gray-300" />}
                              </div>
                              <div className="flex-grow space-y-2">
                                  <input type="text" value={brand.name} onChange={(e) => handleHomeChange('brandEcosystem', 'name', e.target.value, idx)} className="w-full font-bold text-sm border-b border-gray-200 focus:border-lyhu-teal outline-none text-gray-900" placeholder="Tên Brand" />
                                  <input type="text" value={brand.tag} onChange={(e) => handleHomeChange('brandEcosystem', 'tag', e.target.value, idx)} className="w-full text-xs text-gray-500 border-b border-gray-200 focus:border-lyhu-teal outline-none" placeholder="Tag/Xuất xứ" />
                              </div>
                          </div>
                          <input type="text" value={brand.desc} onChange={(e) => handleHomeChange('brandEcosystem', 'desc', e.target.value, idx)} className="w-full text-sm text-gray-600 border-b border-gray-200 focus:border-lyhu-teal outline-none mb-2" placeholder="Mô tả ngắn" />
                          <input type="text" value={brand.logo} onChange={(e) => handleHomeChange('brandEcosystem', 'logo', e.target.value, idx)} className="w-full text-xs text-gray-400 bg-gray-50 p-2 rounded outline-none text-gray-600" placeholder="Logo URL" />
                      </div>
                  ))}
              </div>
          </div>

          {/* Business Areas Section */}
          <div className="bg-white rounded-[2rem] shadow-sm border border-gray-100 p-8">
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-gray-100">
                  <h3 className="text-lg font-bold text-gray-900 flex items-center gap-2"><Layers size={20} className="text-orange-600" /> Lĩnh vực hoạt động</h3>
                  <button onClick={() => addHomeList('business')} className="text-lyhu-teal hover:bg-lyhu-teal/10 p-2 rounded-lg flex items-center gap-2 text-xs font-bold"><Plus size={16} /> Thêm lĩnh vực</button>
              </div>
              {/* Header Config */}
              <div className="bg-gray-50 p-4 rounded-xl border border-gray-200 mb-6">
                  <input type="text" value={homeData.sectionTitles.business.title} onChange={(e) => handleHomeChange('sectionTitles', 'business', { ...homeData.sectionTitles.business, title: e.target.value })} className="w-full p-2 bg-transparent font-bold border-b border-gray-300 mb-2 outline-none focus:border-lyhu-teal text-gray-900" placeholder="Tiêu đề section" />
                  <input type="text" value={homeData.sectionTitles.business.subtitle} onChange={(e) => handleHomeChange('sectionTitles', 'business', { ...homeData.sectionTitles.business, subtitle: e.target.value })} className="w-full p-2 bg-transparent text-sm text-gray-500 border-b border-gray-300 outline-none focus:border-lyhu-teal" placeholder="Mô tả phụ" />
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                  {homeData.businessAreas.map((area, idx) => (
                      <div key={idx} className={`border border-gray-200 rounded-2xl p-5 transition-all relative group ${area.isVisible ? 'bg-white hover:shadow-md' : 'bg-gray-50 opacity-70'}`}>
                          <button onClick={() => removeHomeList('business', idx)} className="absolute -top-2 -right-2 p-1.5 bg-white shadow-md text-gray-400 hover:text-red-500 rounded-full transition-all opacity-0 group-hover:opacity-100 z-10"><X size={14} /></button>
                          <div className="flex justify-between items-center mb-3">
                              <div className="flex items-center gap-2">
                                  <span className="text-xs font-bold text-gray-400 uppercase">Khu vực {idx + 1}</span>
                                  <button onClick={() => handleHomeChange('businessAreas', 'highlight', !area.highlight, idx)} className={`p-1 rounded-md transition-colors ${area.highlight ? 'text-yellow-500 bg-yellow-50' : 'text-gray-300 hover:text-yellow-400'}`} title="Đánh dấu nổi bật"><Star size={14} fill={area.highlight ? "currentColor" : "none"} /></button>
                              </div>
                              <button onClick={() => handleHomeChange('businessAreas', 'isVisible', !area.isVisible, idx)} className={`p-1.5 rounded-full transition-colors ${area.isVisible ? 'bg-lyhu-teal/10 text-lyhu-teal' : 'bg-gray-200 text-gray-400'}`} title={area.isVisible ? 'Đang hiện' : 'Đang ẩn'}>{area.isVisible ? <Eye size={16} /> : <EyeOff size={16} />}</button>
                          </div>
                          <input type="text" value={area.title} onChange={(e) => handleHomeChange('businessAreas', 'title', e.target.value, idx)} className="w-full font-bold text-gray-900 mb-1 bg-transparent border-b border-transparent hover:border-gray-300 focus:border-lyhu-teal outline-none" />
                          <input type="text" value={area.subtitle} onChange={(e) => handleHomeChange('businessAreas', 'subtitle', e.target.value, idx)} className="w-full text-xs font-bold text-gray-500 uppercase mb-2 bg-transparent border-b border-transparent hover:border-gray-300 focus:border-lyhu-teal outline-none" />
                          <textarea rows={2} value={area.desc} onChange={(e) => handleHomeChange('businessAreas', 'desc', e.target.value, idx)} className="w-full text-sm text-gray-600 bg-gray-50 p-2 rounded-lg resize-none outline-none focus:ring-2 focus:ring-lyhu-teal/20"></textarea>
                      </div>
                  ))}
              </div>
          </div>
          
          {/* Partners Section */}
          <div className="bg-white rounded-[2rem] shadow-sm border border-gray-100 p-8">
              <h3 className="text-lg font-bold text-gray-900 mb-6 flex items-center gap-2"><Users size={20} className="text-green-600" /> Đối tác phân phối</h3>
              
              {/* Header Config */}
              <div className="bg-gray-50 p-4 rounded-xl border border-gray-200 mb-6">
                  <input type="text" value={homeData.sectionTitles.partners.title} onChange={(e) => handleHomeChange('sectionTitles', 'partners', { ...homeData.sectionTitles.partners, title: e.target.value })} className="w-full p-2 bg-transparent font-bold border-b border-gray-300 mb-2 outline-none focus:border-lyhu-teal text-gray-900" placeholder="Tiêu đề section" />
                  <input type="text" value={homeData.sectionTitles.partners.subtitle} onChange={(e) => handleHomeChange('sectionTitles', 'partners', { ...homeData.sectionTitles.partners, subtitle: e.target.value })} className="w-full p-2 bg-transparent text-sm text-gray-500 border-b border-gray-300 outline-none focus:border-lyhu-teal" placeholder="Mô tả phụ" />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6 max-h-64 overflow-y-auto custom-scrollbar">
                  {partners.map((p, i) => (
                      <div key={i} className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl border border-gray-100 relative group">
                          <img src={p.logo} className="w-10 h-10 object-contain bg-white rounded-lg border p-1" alt="" onError={(e: any) => e.target.src='https://placehold.co/40'} />
                          <div className="flex-grow space-y-1">
                              <input type="text" value={p.name} onChange={(e) => {const newP = [...partners]; newP[i].name = e.target.value; setPartners(newP)}} className="w-full text-sm font-bold text-gray-800 bg-transparent border-b border-transparent hover:border-gray-300 outline-none" />
                              <input type="text" value={p.logo} onChange={(e) => {const newP = [...partners]; newP[i].logo = e.target.value; setPartners(newP)}} className="w-full text-[10px] text-gray-400 bg-transparent border-b border-transparent hover:border-gray-300 outline-none" />
                          </div>
                          <button onClick={() => removePartner(i)} className="text-gray-300 hover:text-red-500"><X size={16} /></button>
                      </div>
                  ))}
              </div>
              <div className="flex gap-3">
                  <input type="text" placeholder="Tên" className="w-1/3 p-3 bg-gray-50 rounded-xl border border-gray-200 text-sm text-gray-900" value={newPartner.name} onChange={(e) => setNewPartner({...newPartner, name: e.target.value})} />
                  <input type="text" placeholder="Logo URL" className="w-2/3 p-3 bg-gray-50 rounded-xl border border-gray-200 text-sm text-gray-900" value={newPartner.logo} onChange={(e) => setNewPartner({...newPartner, logo: e.target.value})} />
                  <button onClick={addPartner} className="p-3 bg-lyhu-teal text-white rounded-xl"><Plus size={20} /></button>
              </div>
          </div>

          {/* Featured News Section */}
          <div className="bg-white rounded-[2rem] shadow-sm border border-gray-100 p-8">
              <h3 className="text-lg font-bold text-gray-900 mb-6 flex items-center gap-2"><Star size={20} className="text-yellow-500" /> Tin tức nổi bật</h3>
              
              {/* Header Config */}
              <div className="bg-gray-50 p-4 rounded-xl border border-gray-200 mb-6">
                  <input type="text" value={homeData.sectionTitles.news.title} onChange={(e) => handleHomeChange('sectionTitles', 'news', { ...homeData.sectionTitles.news, title: e.target.value })} className="w-full p-2 bg-transparent font-bold border-b border-gray-300 mb-2 outline-none focus:border-lyhu-teal text-gray-900" placeholder="Tiêu đề section" />
                  <input type="text" value={homeData.sectionTitles.news.subtitle} onChange={(e) => handleHomeChange('sectionTitles', 'news', { ...homeData.sectionTitles.news, subtitle: e.target.value })} className="w-full p-2 bg-transparent text-sm text-gray-500 border-b border-gray-300 outline-none focus:border-lyhu-teal" placeholder="Mô tả phụ" />
              </div>

              <div>
                  <label className="block text-xs font-bold text-gray-500 uppercase mb-2 ml-1">Chọn bài viết hiển thị lớn</label>
                  <select 
                    className="w-full p-4 bg-gray-50 rounded-xl border border-gray-200 focus:border-lyhu-teal outline-none transition-all appearance-none font-medium text-gray-700"
                    value={homeData.featuredNewsId}
                    onChange={(e) => handleHomeChange('featuredNewsId', '', parseInt(e.target.value))}
                  >
                      {news.map(item => (
                          <option key={item.id} value={item.id}>{item.title}</option>
                      ))}
                  </select>
                  <p className="mt-2 text-xs text-gray-400">* Bài viết được chọn sẽ hiển thị ở vị trí "Tâm điểm" trên trang tin tức và trang chủ.</p>
              </div>
          </div>
          
          {/* Promo & CTA */}
          <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-[2rem] shadow-sm border border-gray-100 p-8">
                  <div className="flex justify-between mb-4">
                      <h3 className="font-bold flex items-center gap-2 text-gray-900"><MessageSquare size={18} /> Popup KM</h3>
                      <button onClick={() => handleHomeChange('promo', 'isActive', !homeData.promo.isActive)} className={homeData.promo.isActive ? 'text-green-500' : 'text-gray-300'}>{homeData.promo.isActive ? <ToggleRight size={28} fill="currentColor" /> : <ToggleLeft size={28} />}</button>
                  </div>
                  <input type="text" value={homeData.promo.title} onChange={(e) => handleHomeChange('promo', 'title', e.target.value)} className="w-full p-2 border rounded mb-2 text-gray-900" placeholder="Tiêu đề" />
                  <input type="text" value={homeData.promo.discount} onChange={(e) => handleHomeChange('promo', 'discount', e.target.value)} className="w-full p-2 border rounded mb-2 text-gray-900" placeholder="Giảm giá" />
                  <textarea rows={2} value={homeData.promo.desc} onChange={(e) => handleHomeChange('promo', 'desc', e.target.value)} className="w-full p-2 border rounded text-sm text-gray-900" placeholder="Mô tả"></textarea>
              </div>
              <div className="bg-white rounded-[2rem] shadow-sm border border-gray-100 p-8">
                  <h3 className="font-bold flex items-center gap-2 mb-4 text-gray-900"><Megaphone size={18} /> Banner Đối tác</h3>
                  <input type="text" value={homeData.cta.title} onChange={(e) => handleHomeChange('cta', 'title', e.target.value)} className="w-full p-2 border rounded mb-2 text-gray-900" placeholder="Tiêu đề" />
                  <textarea rows={3} value={homeData.cta.subtitle} onChange={(e) => handleHomeChange('cta', 'subtitle', e.target.value)} className="w-full p-2 border rounded text-sm text-gray-900" placeholder="Mô tả"></textarea>
              </div>
          </div>
      </div>
  );
  
  const renderAboutManager = () => (
      <div className="max-w-4xl mx-auto space-y-8 pb-20">
          <div className="flex justify-between items-center sticky top-0 bg-gray-50 z-30 py-4 backdrop-blur-sm">
              <h2 className="text-2xl font-bold text-gray-900">Quản lý Về chúng tôi</h2>
              <button onClick={showSuccess} className="bg-lyhu-teal text-white px-6 py-3 rounded-xl font-bold text-sm flex items-center gap-2 shadow-lg"><Save size={18} /> Lưu thay đổi</button>
          </div>
          
          {/* Brand Story */}
          <div className="bg-white rounded-[2rem] shadow-sm border border-gray-100 p-8 space-y-6">
              <h3 className="text-lg font-bold text-gray-900 border-b border-gray-100 pb-4 flex items-center gap-2"><Info size={20} className="text-blue-600" /> Giới thiệu chung</h3>
              
              <div>
                  <label className="block text-xs font-bold text-gray-500 uppercase mb-2">Tiêu đề lớn</label>
                  <input type="text" value={aboutData.intro.title} onChange={(e) => handleAboutChange('intro', 'title', e.target.value)} className="w-full p-3 bg-gray-50 rounded-xl border border-gray-200 font-bold text-lg text-gray-900" />
              </div>
              <div>
                  <label className="block text-xs font-bold text-gray-500 uppercase mb-2">Slogan phụ</label>
                  <input type="text" value={aboutData.intro.subtitle} onChange={(e) => handleAboutChange('intro', 'subtitle', e.target.value)} className="w-full p-3 bg-gray-50 rounded-xl border border-gray-200 text-lyhu-teal font-medium" />
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                  <div>
                      <label className="block text-xs font-bold text-gray-500 uppercase mb-2">Đoạn mô tả 1</label>
                      <textarea rows={4} value={aboutData.intro.desc1} onChange={(e) => handleAboutChange('intro', 'desc1', e.target.value)} className="w-full p-3 bg-gray-50 rounded-xl border border-gray-200 text-sm text-gray-900 resize-none"></textarea>
                  </div>
                  <div>
                      <label className="block text-xs font-bold text-gray-500 uppercase mb-2">Đoạn mô tả 2</label>
                      <textarea rows={4} value={aboutData.intro.desc2} onChange={(e) => handleAboutChange('intro', 'desc2', e.target.value)} className="w-full p-3 bg-gray-50 rounded-xl border border-gray-200 text-sm text-gray-900 resize-none"></textarea>
                  </div>
              </div>
          </div>

          {/* Vision & Mission */}
          <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-[2rem] shadow-sm border border-gray-100 p-6 relative overflow-hidden">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">Tầm Nhìn</h3>
                  <input type="text" value={aboutData.vision.title} onChange={(e) => handleAboutChange('vision', 'title', e.target.value)} className="w-full p-2 border-b border-gray-200 mb-2 font-bold bg-transparent outline-none text-gray-900" />
                  <textarea rows={3} value={aboutData.vision.desc} onChange={(e) => handleAboutChange('vision', 'desc', e.target.value)} className="w-full p-2 bg-gray-50 rounded-lg border border-gray-200 text-sm text-gray-900 resize-none"></textarea>
              </div>
              <div className="bg-white rounded-[2rem] shadow-sm border border-gray-100 p-6 relative overflow-hidden">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">Sứ Mệnh</h3>
                  <input type="text" value={aboutData.mission.title} onChange={(e) => handleAboutChange('mission', 'title', e.target.value)} className="w-full p-2 border-b border-gray-200 mb-2 font-bold bg-transparent outline-none text-gray-900" />
                  <textarea rows={3} value={aboutData.mission.desc} onChange={(e) => handleAboutChange('mission', 'desc', e.target.value)} className="w-full p-2 bg-gray-50 rounded-lg border border-gray-200 text-sm text-gray-900 resize-none"></textarea>
              </div>
          </div>
      </div>
  );

  const renderProductManager = () => {
      // If editing a specific Brand Page
      if (selectedBrandEdit) {
          const brand = brandsData[selectedBrandEdit];
          return (
              <div className="max-w-5xl mx-auto pb-20 space-y-8 animate-in slide-in-from-right-4 duration-300">
                  <div className="flex justify-between items-center sticky top-0 bg-gray-50 z-30 py-4 backdrop-blur-sm">
                      <div className="flex items-center gap-4">
                          <button onClick={() => setSelectedBrandEdit(null)} className="p-2 bg-white rounded-full hover:bg-gray-100 border border-gray-200"><ArrowUpRight className="rotate-[225deg]" size={20} /></button>
                          <h2 className="text-2xl font-bold text-gray-900">Thương hiệu {brand.title}</h2>
                      </div>
                      <button onClick={showSuccess} className="bg-lyhu-teal text-white px-6 py-3 rounded-xl font-bold text-sm flex items-center gap-2 shadow-lg"><Save size={18} /> Lưu thay đổi</button>
                  </div>

                  <div className="bg-white rounded-[2rem] shadow-sm border border-gray-100 p-8 space-y-6">
                      <h3 className="text-lg font-bold text-gray-900 border-b border-gray-100 pb-4 flex items-center gap-2"><Info size={20} className="text-blue-600" /> Thông tin cơ bản</h3>
                      <div className="grid md:grid-cols-2 gap-6">
                          <div>
                              <label className="block text-xs font-bold text-gray-500 uppercase mb-2">Tên thương hiệu</label>
                              <input type="text" value={brand.title} onChange={(e) => handleBrandChange(selectedBrandEdit, 'title', e.target.value)} className="w-full p-3 bg-gray-50 rounded-xl border border-gray-200 font-bold text-gray-900" />
                          </div>
                          <div>
                              <label className="block text-xs font-bold text-gray-500 uppercase mb-2">Slogan</label>
                              <input type="text" value={brand.slogan} onChange={(e) => handleBrandChange(selectedBrandEdit, 'slogan', e.target.value)} className="w-full p-3 bg-gray-50 rounded-xl border border-gray-200 italic text-gray-600" />
                          </div>
                      </div>
                      <div>
                          <label className="block text-xs font-bold text-gray-500 uppercase mb-2">Câu chuyện thương hiệu</label>
                          <textarea rows={4} value={brand.story} onChange={(e) => handleBrandChange(selectedBrandEdit, 'story', e.target.value)} className="w-full p-3 bg-gray-50 rounded-xl border border-gray-200 text-sm text-gray-900 resize-none"></textarea>
                      </div>
                  </div>

                  <div className="bg-white rounded-[2rem] shadow-sm border border-gray-100 p-8 space-y-6">
                      <h3 className="text-lg font-bold text-gray-900 border-b border-gray-100 pb-4 flex items-center gap-2"><Image size={20} className="text-purple-600" /> Hình ảnh & Media</h3>
                      <div className="grid md:grid-cols-2 gap-6">
                          <div>
                              <label className="block text-xs font-bold text-gray-500 uppercase mb-2">Logo URL</label>
                              <input type="text" value={brand.logoUrl} onChange={(e) => handleBrandChange(selectedBrandEdit, 'logoUrl', e.target.value)} className="w-full p-3 bg-gray-50 rounded-xl border border-gray-200 text-sm text-gray-900" />
                          </div>
                          <div>
                              <label className="block text-xs font-bold text-gray-500 uppercase mb-2">Ảnh bìa (Cover) URL</label>
                              <input type="text" value={brand.coverImage} onChange={(e) => handleBrandChange(selectedBrandEdit, 'coverImage', e.target.value)} className="w-full p-3 bg-gray-50 rounded-xl border border-gray-200 text-sm text-gray-900" />
                          </div>
                      </div>
                      <div>
                          <label className="block text-xs font-bold text-gray-500 uppercase mb-2">Video TVC Thumbnail URL</label>
                          <input type="text" value={brand.videoThumbnail} onChange={(e) => handleBrandChange(selectedBrandEdit, 'videoThumbnail', e.target.value)} className="w-full p-3 bg-gray-50 rounded-xl border border-gray-200 text-sm text-gray-900" />
                      </div>
                  </div>
                  
                  <div className="bg-white rounded-[2rem] shadow-sm border border-gray-100 p-8 space-y-6">
                      <h3 className="text-lg font-bold text-gray-900 border-b border-gray-100 pb-4 flex items-center gap-2"><Star size={20} className="text-yellow-500" /> Sản phẩm tiêu biểu (Signature)</h3>
                      <div>
                          <label className="block text-xs font-bold text-gray-500 uppercase mb-2">ID Sản phẩm</label>
                          <select 
                            value={brand.signatureProductId} 
                            onChange={(e) => handleBrandChange(selectedBrandEdit, 'signatureProductId', parseInt(e.target.value))}
                            className="w-full p-3 bg-gray-50 rounded-xl border border-gray-200 font-medium text-gray-900"
                          >
                              {products.filter(p => p.brand === selectedBrandEdit).map(p => (
                                  <option key={p.id} value={p.id}>{p.name}</option>
                              ))}
                          </select>
                      </div>
                  </div>
              </div>
          );
      }

      const filteredProducts = productFilter === 'all' ? products : products.filter(p => p.brand === productFilter);

      return (
        <div className="space-y-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {Object.entries(brandsData).map(([key, brand]) => (
                    <div 
                        key={key} 
                        onClick={() => setSelectedBrandEdit(key)}
                        className="bg-white p-4 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md cursor-pointer transition-all group"
                    >
                        <div className="flex justify-between items-start mb-3">
                            <div className="w-10 h-10 rounded-lg bg-gray-50 p-1 border border-gray-100 flex items-center justify-center">
                                <img src={brand.logoUrl} alt={brand.title} className="w-full h-full object-contain" />
                            </div>
                            <div className="p-1.5 bg-gray-50 rounded-lg text-gray-400 group-hover:bg-lyhu-teal group-hover:text-white transition-colors">
                                <Edit size={14} />
                            </div>
                        </div>
                        <h4 className="font-bold text-sm text-gray-900">{brand.title}</h4>
                        <p className="text-xs text-gray-500">{products.filter(p => p.brand === key).length} sản phẩm</p>
                    </div>
                ))}
            </div>

            <div className="space-y-6">
                <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                    <h2 className="text-2xl font-bold text-gray-900">Danh sách Sản phẩm</h2>
                    <div className="flex gap-3 w-full md:w-auto">
                        <div className="relative flex-grow md:flex-grow-0">
                            <Filter size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                            <select 
                                className="w-full md:w-48 pl-10 pr-4 py-2.5 bg-white border border-gray-200 rounded-xl text-sm font-medium outline-none focus:border-lyhu-teal appearance-none cursor-pointer hover:bg-gray-50 text-gray-900"
                                value={productFilter}
                                onChange={(e) => setProductFilter(e.target.value)}
                            >
                                <option value="all">Tất cả thương hiệu</option>
                                {Object.keys(brandsData).map(b => <option key={b} value={b}>{b}</option>)}
                            </select>
                        </div>
                        <button onClick={() => openEdit()} className="bg-lyhu-teal text-white px-4 py-2.5 rounded-xl font-bold text-sm flex items-center gap-2 shadow-lg shadow-lyhu-teal/20 hover:-translate-y-1 transition-transform whitespace-nowrap">
                            <Plus size={18} /> Thêm mới
                        </button>
                    </div>
                </div>

                <div className="bg-white rounded-[2rem] shadow-sm border border-gray-100 overflow-hidden">
                    <table className="w-full text-left border-collapse">
                        <thead className="bg-gray-50/50 text-xs font-bold text-gray-400 uppercase tracking-wider">
                            <tr>
                                <th className="px-6 py-4">Sản phẩm</th>
                                <th className="px-6 py-4 hidden md:table-cell">Quy cách</th>
                                <th className="px-6 py-4 hidden md:table-cell">Danh mục</th>
                                <th className="px-6 py-4 text-right">Hành động</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-50">
                            {filteredProducts.map((p) => (
                                <tr key={p.id} className="hover:bg-gray-50/50 transition-colors group">
                                    <td className="px-6 py-3">
                                        <div className="flex items-center gap-3">
                                            <img src={p.image} className="w-12 h-12 rounded-xl object-cover bg-gray-100 border border-gray-100 group-hover:scale-105 transition-transform" alt="" />
                                            <div>
                                                <p className="font-bold text-gray-800 text-sm">{p.name}</p>
                                                <span className={`inline-flex px-2 py-0.5 rounded text-[10px] font-bold uppercase ${p.tagColor?.replace('bg-', 'text-').replace('600', '700') || 'text-gray-500'} bg-gray-100 mt-1`}>{p.brand}</span>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-6 py-3 text-sm text-gray-500 hidden md:table-cell">{p.specs?.pack || '-'}</td>
                                    <td className="px-6 py-3 text-sm text-gray-500 font-medium hidden md:table-cell">{p.category}</td>
                                    <td className="px-6 py-3 text-right">
                                        <div className="flex justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                            <button onClick={() => openEdit(p)} className="p-2 bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-100 transition-colors"><Edit size={16} /></button>
                                            <button onClick={() => handleDelete(p.id, 'product')} className="p-2 bg-red-50 text-red-600 rounded-lg hover:bg-red-100 transition-colors"><Trash2 size={16} /></button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
      );
  };

  const renderContactManager = () => (
      <div className="max-w-6xl mx-auto space-y-8 pb-20">
          <div className="flex justify-between items-center sticky top-0 bg-gray-50 z-30 py-4 backdrop-blur-sm">
              <h2 className="text-2xl font-bold text-gray-900">Quản lý Liên hệ & Đối tác</h2>
              <button onClick={showSuccess} className="bg-lyhu-teal text-white px-6 py-3 rounded-xl font-bold text-sm flex items-center gap-2 shadow-lg"><Save size={18} /> Lưu thay đổi</button>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
              {/* Left: Contact Info Config */}
              <div className="lg:col-span-1 space-y-8">
                  <div className="bg-white rounded-[2rem] shadow-sm border border-gray-100 p-6 space-y-4">
                      <h3 className="text-lg font-bold text-gray-900 flex items-center gap-2"><Info size={20} /> Thông tin công ty</h3>
                      <div>
                          <label className="text-xs font-bold text-gray-500 uppercase">Hotline</label>
                          <input type="text" value={contactData.phone} onChange={(e) => setContactData({...contactData, phone: e.target.value})} className="w-full p-2 bg-gray-50 rounded-lg border border-gray-200 text-sm font-medium text-gray-900" />
                      </div>
                      <div>
                          <label className="text-xs font-bold text-gray-500 uppercase">Email</label>
                          <input type="text" value={contactData.email} onChange={(e) => setContactData({...contactData, email: e.target.value})} className="w-full p-2 bg-gray-50 rounded-lg border border-gray-200 text-sm font-medium text-gray-900" />
                      </div>
                      <div>
                          <label className="text-xs font-bold text-gray-500 uppercase">Địa chỉ</label>
                          <textarea rows={3} value={contactData.address} onChange={(e) => setContactData({...contactData, address: e.target.value})} className="w-full p-2 bg-gray-50 rounded-lg border border-gray-200 text-sm font-medium text-gray-900"></textarea>
                      </div>
                  </div>
              </div>

              {/* Right: Partner Requests List */}
              <div className="lg:col-span-2">
                  <div className="bg-white rounded-[2rem] shadow-sm border border-gray-100 p-8 h-full">
                      <div className="flex justify-between items-center mb-6">
                          <h3 className="text-lg font-bold text-gray-900 flex items-center gap-2"><Users size={20} /> Danh sách đăng ký Đại lý</h3>
                          <span className="bg-orange-100 text-orange-600 px-3 py-1 rounded-full text-xs font-bold">{leads.length} yêu cầu</span>
                      </div>
                      
                      <div className="overflow-x-auto">
                          <table className="w-full text-sm text-left">
                              <thead className="text-xs text-gray-400 uppercase bg-gray-50">
                                  <tr>
                                      <th className="px-4 py-3 rounded-l-lg">Thông tin</th>
                                      <th className="px-4 py-3">Loại hình</th>
                                      <th className="px-4 py-3">Ngày gửi</th>
                                      <th className="px-4 py-3 rounded-r-lg text-right">Xử lý</th>
                                  </tr>
                              </thead>
                              <tbody className="divide-y divide-gray-50">
                                  {leads.map(lead => (
                                      <tr key={lead.id} className="hover:bg-gray-50/50">
                                          <td className="px-4 py-4">
                                              <p className="font-bold text-gray-900">{lead.name}</p>
                                              <p className="text-xs text-gray-500">{lead.phone} - {lead.region}</p>
                                          </td>
                                          <td className="px-4 py-4">
                                              <span className={`px-2 py-1 rounded text-[10px] font-bold uppercase ${lead.type === 'NPP' ? 'bg-purple-50 text-purple-600' : 'bg-blue-50 text-blue-600'}`}>{lead.type}</span>
                                          </td>
                                          <td className="px-4 py-4 text-gray-500 text-xs">{lead.date}</td>
                                          <td className="px-4 py-4 text-right">
                                              <button onClick={() => {
                                                  if(confirm('Đã liên hệ xử lý yêu cầu này?')) {
                                                      setLeads(leads.map(l => l.id === lead.id ? {...l, status: 'Đã xử lý'} : l));
                                                      showSuccess();
                                                  }
                                              }} className={`text-xs font-bold px-3 py-1.5 rounded-lg transition-colors ${lead.status === 'Mới' ? 'bg-lyhu-teal text-white hover:bg-lyhu-teal-deep' : 'bg-gray-100 text-gray-400 cursor-default'}`}>
                                                  {lead.status === 'Mới' ? 'Xử lý' : 'Xong'}
                                              </button>
                                          </td>
                                      </tr>
                                  ))}
                              </tbody>
                          </table>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  );

  // --- ENHANCED NEWS MANAGER ---
  const renderNewsManager = () => {
      const filteredNews = newsFilter === 'all' ? news : news.filter(n => n.category === newsFilter);
      return (
      <div className="space-y-6">
         <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <h2 className="text-2xl font-bold text-gray-900">Danh sách Tin tức ({news.length})</h2>
            <div className="flex gap-3 w-full md:w-auto">
                <div className="relative flex-grow md:flex-grow-0">
                    <Filter size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                    <select 
                        className="w-full md:w-48 pl-10 pr-4 py-2.5 bg-white border border-gray-200 rounded-xl text-sm font-medium outline-none focus:border-lyhu-teal appearance-none cursor-pointer hover:bg-gray-50 text-gray-900"
                        value={newsFilter}
                        onChange={(e) => setNewsFilter(e.target.value)}
                    >
                        <option value="all">Tất cả chuyên mục</option>
                        {NEWS_CATEGORIES.filter(c => c.id !== 'all').map(c => <option key={c.id} value={c.label}>{c.label}</option>)}
                    </select>
                </div>
                <button onClick={() => openEdit()} className="bg-lyhu-teal text-white px-4 py-2.5 rounded-xl font-bold text-sm flex items-center gap-2 shadow-lg shadow-lyhu-teal/20 hover:-translate-y-1 transition-transform whitespace-nowrap">
                   <Plus size={18} /> Viết bài mới
                </button>
            </div>
         </div>
         <div className="bg-white rounded-[2rem] shadow-sm border border-gray-100 overflow-hidden">
            <table className="w-full text-sm text-left border-collapse">
               <thead className="bg-gray-50/50 text-xs font-bold text-gray-400 uppercase tracking-wider">
                  <tr><th className="px-6 py-4">Tiêu đề</th><th className="px-6 py-4">Thông tin</th><th className="px-6 py-4 text-center">Nổi bật</th><th className="px-6 py-4 text-right">Hành động</th></tr>
               </thead>
               <tbody className="divide-y divide-gray-50">
                  {filteredNews.map((n) => (
                     <tr key={n.id} className="hover:bg-gray-50/50 transition-colors">
                        <td className="px-6 py-4">
                            <p className="font-bold text-gray-900 max-w-xs truncate mb-1">{n.title}</p>
                            <span className="px-2 py-0.5 bg-gray-100 rounded text-[10px] font-bold uppercase text-gray-500">{n.category}</span>
                        </td>
                        <td className="px-6 py-4 text-xs text-gray-500 space-y-1">
                            <div className="flex items-center gap-1"><Calendar size={12} /> {n.date}</div>
                            <div className="flex items-center gap-1"><Eye size={12} /> {n.views} xem</div>
                        </td>
                        <td className="px-6 py-4 text-center">
                            <button onClick={() => toggleNewsFeatured(n.id)} className={`p-1.5 rounded-full transition-colors ${n.featured ? 'bg-yellow-50 text-yellow-500' : 'text-gray-300 hover:bg-gray-100'}`}>
                                <Star size={18} fill={n.featured ? "currentColor" : "none"} />
                            </button>
                        </td>
                        <td className="px-6 py-4 text-right">
                           <div className="flex justify-end gap-2">
                              <button onClick={() => openEdit(n)} className="p-2 bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-100 transition-colors"><Edit size={16} /></button>
                              <button onClick={() => handleDelete(n.id, 'news')} className="p-2 bg-red-50 text-red-600 rounded-lg hover:bg-red-100 transition-colors"><Trash2 size={16} /></button>
                           </div>
                        </td>
                     </tr>
                  ))}
               </tbody>
            </table>
         </div>
      </div>
      );
  };

  // --- ENHANCED RECRUITMENT MANAGER ---
  const renderRecruitmentManager = () => {
      const filteredJobs = jobFilter === 'all' ? jobs : jobs.filter(j => j.department === jobFilter);
      const departments = Array.from(new Set(jobs.map(j => j.department)));

      return (
      <div className="space-y-6">
         <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <h2 className="text-2xl font-bold text-gray-900">Tin Tuyển dụng ({jobs.length})</h2>
            <div className="flex gap-3 w-full md:w-auto">
                <div className="relative flex-grow md:flex-grow-0">
                    <Filter size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                    <select 
                        className="w-full md:w-48 pl-10 pr-4 py-2.5 bg-white border border-gray-200 rounded-xl text-sm font-medium outline-none focus:border-lyhu-teal appearance-none cursor-pointer hover:bg-gray-50 text-gray-900"
                        value={jobFilter}
                        onChange={(e) => setJobFilter(e.target.value)}
                    >
                        <option value="all">Tất cả phòng ban</option>
                        {departments.map(d => <option key={d} value={d}>{d}</option>)}
                    </select>
                </div>
                <button onClick={() => openEdit()} className="bg-lyhu-teal text-white px-4 py-2.5 rounded-xl font-bold text-sm flex items-center gap-2 shadow-lg shadow-lyhu-teal/20 hover:-translate-y-1 transition-transform whitespace-nowrap">
                   <Plus size={18} /> Đăng tin mới
                </button>
            </div>
         </div>
         <div className="bg-white rounded-[2rem] shadow-sm border border-gray-100 overflow-hidden">
            <table className="w-full text-sm text-left border-collapse">
               <thead className="bg-gray-50/50 text-xs font-bold text-gray-400 uppercase tracking-wider">
                  <tr><th className="px-6 py-4">Vị trí</th><th className="px-6 py-4">Hạn nộp</th><th className="px-6 py-4">Trạng thái</th><th className="px-6 py-4 text-right">Hành động</th></tr>
               </thead>
               <tbody className="divide-y divide-gray-50">
                  {filteredJobs.map((j) => (
                     <tr key={j.id} className="hover:bg-gray-50/50 transition-colors">
                        <td className="px-6 py-4">
                            <p className="font-bold text-gray-900 mb-1">{j.title}</p>
                            <span className="text-xs text-gray-500">{j.department} • {j.location}</span>
                        </td>
                        <td className="px-6 py-4 text-sm font-bold text-orange-500">
                            <div className="flex items-center gap-2"><Calendar size={14} /> {j.deadline}</div>
                        </td>
                        <td className="px-6 py-4">
                            <div className="flex items-center gap-4">
                                <span className={`px-2.5 py-1 rounded-lg text-[10px] font-bold uppercase ${j.status === 'active' ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-500'}`}>
                                    {j.status === 'active' ? 'Đang tuyển' : 'Đã đóng'}
                                </span>
                                <div className="flex items-center gap-1 text-xs font-bold text-gray-500" title="Số lượng ứng tuyển">
                                    <Users size={14} /> {j.applicants || 0}
                                </div>
                            </div>
                        </td>
                        <td className="px-6 py-4 text-right">
                           <div className="flex justify-end gap-2">
                              <button onClick={() => toggleJobStatus(j.id)} className={`p-2 rounded-lg transition-colors ${j.status === 'active' ? 'bg-green-50 text-green-600 hover:bg-green-100' : 'bg-gray-100 text-gray-400 hover:bg-gray-200'}`} title={j.status === 'active' ? 'Đóng tin' : 'Mở lại'}>
                                  {j.status === 'active' ? <ToggleRight size={16} /> : <ToggleLeft size={16} />}
                              </button>
                              <button onClick={() => openEdit(j)} className="p-2 bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-100 transition-colors"><Edit size={16} /></button>
                              <button onClick={() => handleDelete(j.id, 'job')} className="p-2 bg-red-50 text-red-600 rounded-lg hover:bg-red-100 transition-colors"><Trash2 size={16} /></button>
                           </div>
                        </td>
                     </tr>
                  ))}
               </tbody>
            </table>
         </div>
      </div>
      );
  };

  // --- UNIFIED EDITOR FORM ---
  const renderEditor = () => {
      return (
          <div className="max-w-4xl mx-auto animate-in slide-in-from-right-4 duration-300 pb-20">
              <form onSubmit={handleSave}>
                {/* Header */}
                <div className="flex justify-between items-center mb-6 sticky top-0 bg-gray-50 z-30 py-4">
                    <div className="flex items-center gap-4">
                        <button type="button" onClick={() => setIsEditing(false)} className="p-2 bg-white rounded-full hover:bg-gray-100 text-gray-600 transition-colors border border-gray-200">
                            <ArrowUpRight className="rotate-[225deg]" size={20} />
                        </button>
                        <h2 className="text-2xl font-bold text-gray-900">{formData.id ? 'Chỉnh sửa' : 'Thêm mới'} {activeTab === 'products' ? 'Sản phẩm' : activeTab === 'news' ? 'Tin tức' : 'Tuyển dụng'}</h2>
                    </div>
                    <button type="submit" className="bg-lyhu-teal text-white px-8 py-3 rounded-xl font-bold text-sm flex items-center gap-2 shadow-lg hover:bg-lyhu-teal-deep transition-colors">
                        <Save size={18} /> Lưu lại
                    </button>
                </div>

                <div className="bg-white rounded-[2rem] shadow-sm border border-gray-100 p-8 space-y-6">
                    
                    {/* Common Title */}
                    <div>
                        <label className="block text-xs font-bold text-gray-500 uppercase mb-2 ml-1">
                            {activeTab === 'products' ? 'Tên sản phẩm' : activeTab === 'news' ? 'Tiêu đề bài viết' : 'Vị trí tuyển dụng'}
                        </label>
                        <input 
                            type="text" 
                            required
                            className="w-full p-4 bg-gray-50 rounded-xl border border-gray-200 focus:border-lyhu-teal outline-none font-bold text-lg transition-all text-gray-900" 
                            value={formData.title || formData.name || ''}
                            onChange={(e) => setFormData({...formData, [activeTab === 'products' ? 'name' : 'title']: e.target.value})}
                        />
                    </div>

                    {/* Product Specific Fields - ENHANCED */}
                    {activeTab === 'products' && (
                        <>
                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-xs font-bold text-gray-500 uppercase mb-2 ml-1">Thương hiệu</label>
                                    <select 
                                        className="w-full p-4 bg-gray-50 rounded-xl border border-gray-200 focus:border-lyhu-teal outline-none transition-all font-medium text-gray-900"
                                        value={formData.brand || ''}
                                        onChange={(e) => setFormData({...formData, brand: e.target.value})}
                                    >
                                        <option value="">Chọn thương hiệu</option>
                                        {Object.keys(brandsData).map(b => (
                                            <option key={b} value={b}>{b}</option>
                                        ))}
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-xs font-bold text-gray-500 uppercase mb-2 ml-1">Danh mục</label>
                                    <input 
                                        type="text" 
                                        className="w-full p-4 bg-gray-50 rounded-xl border border-gray-200 focus:border-lyhu-teal outline-none transition-all text-gray-900" 
                                        placeholder="VD: Snack, Kẹo..."
                                        value={formData.category || ''}
                                        onChange={(e) => setFormData({...formData, category: e.target.value})}
                                    />
                                </div>
                            </div>
                            
                            <div className="grid md:grid-cols-3 gap-6">
                                <div>
                                    <label className="block text-xs font-bold text-gray-500 uppercase mb-2 ml-1">Quy cách</label>
                                    <input type="text" className="w-full p-4 bg-gray-50 rounded-xl border border-gray-200 focus:border-lyhu-teal outline-none text-gray-900" placeholder="Gói 50g" value={formData.specs?.pack || ''} onChange={(e) => handleNestedChange(setFormData, ['specs', 'pack'], e.target.value)} />
                                </div>
                                <div>
                                    <label className="block text-xs font-bold text-gray-500 uppercase mb-2 ml-1">Hạn sử dụng</label>
                                    <input type="text" className="w-full p-4 bg-gray-50 rounded-xl border border-gray-200 focus:border-lyhu-teal outline-none text-gray-900" placeholder="12 tháng" value={formData.specs?.shelfLife || ''} onChange={(e) => handleNestedChange(setFormData, ['specs', 'shelfLife'], e.target.value)} />
                                </div>
                                <div>
                                    <label className="block text-xs font-bold text-gray-500 uppercase mb-2 ml-1">Chứng nhận</label>
                                    <input type="text" className="w-full p-4 bg-gray-50 rounded-xl border border-gray-200 focus:border-lyhu-teal outline-none text-gray-900" placeholder="ISO, HACCP" value={formData.specs?.cert || ''} onChange={(e) => handleNestedChange(setFormData, ['specs', 'cert'], e.target.value)} />
                                </div>
                            </div>

                            <div>
                                <label className="block text-xs font-bold text-gray-500 uppercase mb-2 ml-1">URL Hình ảnh</label>
                                <div className="flex gap-4">
                                    <input 
                                        type="text" 
                                        className="w-full p-4 bg-gray-50 rounded-xl border border-gray-200 focus:border-lyhu-teal outline-none transition-all text-gray-900" 
                                        placeholder="https://..."
                                        value={formData.image || ''}
                                        onChange={(e) => setFormData({...formData, image: e.target.value})}
                                    />
                                    <div className="w-16 h-16 rounded-xl bg-gray-50 border border-gray-200 flex items-center justify-center shrink-0 overflow-hidden">
                                        {formData.image ? <img src={formData.image} className="w-full h-full object-cover" alt="" /> : <Image size={24} className="text-gray-300" />}
                                    </div>
                                </div>
                            </div>
                            <div>
                                <label className="block text-xs font-bold text-gray-500 uppercase mb-2 ml-1">Mô tả ngắn</label>
                                <textarea 
                                    rows={3}
                                    className="w-full p-4 bg-gray-50 rounded-xl border border-gray-200 focus:border-lyhu-teal outline-none transition-all resize-none text-gray-900"
                                    value={formData.desc || ''}
                                    onChange={(e) => setFormData({...formData, desc: e.target.value})}
                                ></textarea>
                            </div>
                        </>
                    )}

                    {/* News Specific Fields */}
                    {activeTab === 'news' && (
                        <>
                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-xs font-bold text-gray-500 uppercase mb-2 ml-1">Chuyên mục</label>
                                    <select 
                                        className="w-full p-4 bg-gray-50 rounded-xl border border-gray-200 focus:border-lyhu-teal outline-none transition-all text-gray-900"
                                        value={formData.category || ''}
                                        onChange={(e) => setFormData({...formData, category: e.target.value})}
                                    >
                                        <option value="">Chọn chuyên mục</option>
                                        {NEWS_CATEGORIES.filter(c => c.id !== 'all').map(c => (
                                            <option key={c.id} value={c.id}>{c.label}</option>
                                        ))}
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-xs font-bold text-gray-500 uppercase mb-2 ml-1">URL Hình ảnh cover</label>
                                    <input 
                                        type="text" 
                                        className="w-full p-4 bg-gray-50 rounded-xl border border-gray-200 focus:border-lyhu-teal outline-none transition-all text-gray-900" 
                                        placeholder="https://..."
                                        value={formData.image || ''}
                                        onChange={(e) => setFormData({...formData, image: e.target.value})}
                                    />
                                </div>
                            </div>
                            <div>
                                <label className="block text-xs font-bold text-gray-500 uppercase mb-2 ml-1">Tóm tắt</label>
                                <textarea 
                                    rows={3}
                                    className="w-full p-4 bg-gray-50 rounded-xl border border-gray-200 focus:border-lyhu-teal outline-none transition-all text-gray-900"
                                    value={formData.summary || ''}
                                    onChange={(e) => setFormData({...formData, summary: e.target.value})}
                                ></textarea>
                            </div>
                            <div>
                                <label className="block text-xs font-bold text-gray-500 uppercase mb-2 ml-1">Nội dung chi tiết (HTML)</label>
                                <textarea 
                                    rows={8}
                                    className="w-full p-4 bg-gray-50 rounded-xl border border-gray-200 focus:border-lyhu-teal outline-none transition-all font-mono text-sm text-gray-900"
                                    value={formData.content || ''}
                                    onChange={(e) => setFormData({...formData, content: e.target.value})}
                                ></textarea>
                            </div>
                        </>
                    )}

                    {/* Recruitment Specific Fields */}
                    {activeTab === 'recruitment' && (
                        <>
                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-xs font-bold text-gray-500 uppercase mb-2 ml-1">Phòng ban</label>
                                    <input 
                                        type="text" 
                                        className="w-full p-4 bg-gray-50 rounded-xl border border-gray-200 focus:border-lyhu-teal outline-none transition-all text-gray-900" 
                                        placeholder="VD: Phòng Kinh Doanh"
                                        value={formData.department || ''}
                                        onChange={(e) => setFormData({...formData, department: e.target.value})}
                                    />
                                </div>
                                <div>
                                    <label className="block text-xs font-bold text-gray-500 uppercase mb-2 ml-1">Mức lương</label>
                                    <input 
                                        type="text" 
                                        className="w-full p-4 bg-gray-50 rounded-xl border border-gray-200 focus:border-lyhu-teal outline-none transition-all text-gray-900" 
                                        placeholder="VD: 10 - 15 Triệu"
                                        value={formData.salary || ''}
                                        onChange={(e) => setFormData({...formData, salary: e.target.value})}
                                    />
                                </div>
                                <div>
                                    <label className="block text-xs font-bold text-gray-500 uppercase mb-2 ml-1">Địa điểm</label>
                                    <input 
                                        type="text" 
                                        className="w-full p-4 bg-gray-50 rounded-xl border border-gray-200 focus:border-lyhu-teal outline-none transition-all text-gray-900" 
                                        placeholder="VD: Hồ Chí Minh"
                                        value={formData.location || ''}
                                        onChange={(e) => setFormData({...formData, location: e.target.value})}
                                    />
                                </div>
                                <div>
                                    <label className="block text-xs font-bold text-gray-500 uppercase mb-2 ml-1">Hạn nộp</label>
                                    <input 
                                        type="text" 
                                        className="w-full p-4 bg-gray-50 rounded-xl border border-gray-200 focus:border-lyhu-teal outline-none transition-all text-gray-900" 
                                        placeholder="DD/MM/YYYY"
                                        value={formData.deadline || ''}
                                        onChange={(e) => setFormData({...formData, deadline: e.target.value})}
                                    />
                                </div>
                            </div>
                            
                            <div className="pt-4 flex items-center gap-4">
                                 <label className="flex items-center gap-2 cursor-pointer bg-gray-50 px-4 py-2 rounded-lg border border-gray-200 hover:bg-gray-100">
                                    <input type="checkbox" checked={formData.status === 'active'} onChange={(e) => setFormData({...formData, status: e.target.checked ? 'active' : 'closed'})} className="w-5 h-5 text-green-600 rounded focus:ring-green-500" />
                                    <span className={`font-bold text-sm ${formData.status === 'active' ? 'text-green-600' : 'text-gray-500'}`}>
                                        {formData.status === 'active' ? 'Đang tuyển (Active)' : 'Đóng tuyển (Closed)'}
                                    </span>
                                </label>
                            </div>

                            <div>
                                <label className="block text-xs font-bold text-gray-500 uppercase mb-2 ml-1">Mô tả công việc (HTML)</label>
                                <textarea 
                                    rows={5}
                                    className="w-full p-4 bg-gray-50 rounded-xl border border-gray-200 focus:border-lyhu-teal outline-none transition-all font-mono text-sm text-gray-900"
                                    value={formData.description || ''}
                                    onChange={(e) => setFormData({...formData, description: e.target.value})}
                                ></textarea>
                            </div>
                        </>
                    )}
                </div>
              </form>
          </div>
      );
  };

  const renderContent = () => {
      if (isEditing) return renderEditor();

      switch (activeTab) {
          case 'dashboard': return renderDashboardHome();
          case 'home': return renderHomeManager();
          case 'about': return renderAboutManager();
          case 'products': return renderProductManager();
          case 'news': return renderNewsManager();
          case 'recruitment': return renderRecruitmentManager();
          case 'contact': return renderContactManager();
          default: return renderDashboardHome();
      }
  };

  const menuItems = [
      { id: 'dashboard', label: 'Tổng quan', icon: LayoutDashboard },
      { id: 'home', label: 'Trang chủ', icon: Home },
      { id: 'about', label: 'Về chúng tôi', icon: Info },
      { id: 'products', label: 'Sản phẩm & Brand', icon: Package },
      { id: 'news', label: 'Tin tức', icon: FileText },
      { id: 'recruitment', label: 'Tuyển dụng', icon: Briefcase },
      { id: 'contact', label: 'Liên hệ & Đối tác', icon: Mail },
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <aside className={`bg-lyhu-dark text-white fixed lg:static inset-y-0 left-0 z-50 w-64 transform transition-transform duration-300 ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'} overflow-y-auto`}>
          <div className="p-6 border-b border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-lyhu-teal rounded-xl flex items-center justify-center font-black text-xl shadow-lg">L</div>
                  <span className="font-bold text-lg tracking-wide">LYHU Admin</span>
              </div>
              <button onClick={() => setSidebarOpen(false)} className="lg:hidden text-white/50 hover:text-white"><X size={20} /></button>
          </div>
          
          <nav className="p-4 space-y-1">
              {menuItems.map(item => (
                  <button
                      key={item.id}
                      onClick={() => { setActiveTab(item.id); setIsEditing(false); setSidebarOpen(false); }}
                      className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all font-medium text-sm ${activeTab === item.id ? 'bg-lyhu-teal text-white shadow-lg shadow-lyhu-teal/20' : 'text-gray-400 hover:bg-white/5 hover:text-white'}`}
                  >
                      <item.icon size={18} />
                      {item.label}
                  </button>
              ))}
          </nav>

          <div className="absolute bottom-0 left-0 w-full p-4 border-t border-white/10">
              <button onClick={onLogout} className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-red-400 hover:bg-red-500/10 transition-all font-medium text-sm">
                  <LogOut size={18} /> Đăng xuất
              </button>
          </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col min-w-0 overflow-hidden">
          {/* Top Header */}
          <header className="bg-white border-b border-gray-100 px-8 py-4 flex justify-between items-center sticky top-0 z-40">
              <button onClick={() => setSidebarOpen(true)} className="lg:hidden p-2 bg-gray-50 rounded-lg text-gray-600"><Menu size={20} /></button>
              <h1 className="text-xl font-bold text-gray-800 hidden lg:block">
                  {menuItems.find(i => i.id === activeTab)?.label}
              </h1>
              <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2 px-4 py-2 bg-gray-50 rounded-full border border-gray-100">
                      <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                      <span className="text-xs font-bold text-gray-600">System Online</span>
                  </div>
                  <div className="w-10 h-10 bg-lyhu-teal/10 rounded-full flex items-center justify-center text-lyhu-teal font-bold border border-lyhu-teal/20">A</div>
              </div>
          </header>

          {/* Content Area */}
          <div className="flex-1 overflow-y-auto p-4 md:p-8 custom-scrollbar">
              {renderContent()}
          </div>
      </main>

      {/* Toast Notification */}
      <div className={`fixed bottom-6 right-6 z-[70] transition-all duration-500 transform ${showToast ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0 pointer-events-none'}`}>
        <div className="bg-lyhu-dark text-white px-6 py-3 rounded-xl shadow-2xl flex items-center gap-3 border border-gray-700">
            <div className="w-5 h-5 rounded-full bg-green-500 flex items-center justify-center">
                <CheckCircle size={12} strokeWidth={4} />
            </div>
            <span className="text-sm font-bold">Cập nhật thành công!</span>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
