
import { Heart, Star, Users, Target, ShieldCheck, TrendingUp, Clock, Shuffle, Zap, Flame, Cherry, Leaf, Globe, CheckCircle, Package, Medal, ThumbsUp, Sprout, Truck, Search, ShoppingBag, Sun, ChefHat, FileCheck, Ship, Store, MapPin, Factory, Eye, Crown, Laptop, Gift, Smile, Percent, Megaphone, Smartphone, Download, UserPlus, Tag, ShoppingCart } from 'lucide-react';
import { NavItem, ValueCardProps, BrandProps } from './types';

// Modified for logic in Navbar.tsx
export const NAV_ITEMS = [
  { 
    label: 'Trang chủ', 
    id: 'home' 
  },
  { 
    label: 'Về chúng tôi', 
    id: 'about-group',
    children: [
      { label: 'Tầm nhìn & Sứ mệnh', id: 'about' },
      { label: 'Văn hóa & Giá trị cốt lõi', id: 'culture' },
    ]
  },
  { 
    label: 'Sản phẩm', 
    id: 'products-group',
    children: [
      { label: 'Tất cả sản phẩm', id: 'products-all' },
      { label: 'Thương hiệu BOYO', id: 'products-BOYO' },
      { label: 'Thương hiệu UHi', id: 'products-UHi' },
      { label: 'Thương hiệu CVT', id: 'products-CVT' },
      { label: 'Snack ABI', id: 'products-ABI' },
    ]
  },
  { 
    label: 'Tải App', 
    id: 'download-app' 
  },
  { 
    label: 'Tin tức', 
    id: 'news' 
  },
  { 
    label: 'Tuyển dụng', 
    id: 'careers' 
  },
];

export const LYHU_VALUES: ValueCardProps[] = [
  {
    letter: 'L',
    word: 'LOVE',
    description: 'Khi ta Yêu thương công việc.',
    icon: Heart,
    color: 'bg-red-500'
  },
  {
    letter: 'Y',
    word: 'YEARN',
    description: 'Mong đợi những thành công lớn.',
    icon: Star,
    color: 'bg-yellow-400'
  },
  {
    letter: 'H',
    word: 'HARMONIZE',
    description: 'Hòa hợp trong nhóm.',
    icon: Users,
    color: 'bg-lyhu-teal'
  },
  {
    letter: 'U',
    word: 'UNIFY',
    description: 'Thống nhất với mục tiêu chung.',
    icon: Target,
    color: 'bg-lyhu-dark'
  }
];

export const PRINCIPLES_3K1C = [
  {
    code: 'KỶ LUẬT',
    title: 'HÀNH VI',
    desc: 'Là nền móng để mọi người làm đúng nguyên tắc, quy chuẩn, và giữ sự ổn định trong hành động.',
    icon: ShieldCheck
  },
  {
    code: 'KIÊN TRÌ',
    title: 'THÓI QUEN',
    desc: 'Máy phát lực giúp kỷ luật không bị nguội lạnh. Duy trì hành động đều đặn và không bỏ cuộc.',
    icon: TrendingUp
  },
  {
    code: 'KIÊN NHẪN',
    title: 'THÁI ĐỘ',
    desc: 'Thái độ chấp nhận nhịp độ và thời gian cần thiết để thấy kết quả. Tránh nóng vội.',
    icon: Clock
  },
  {
    code: 'CHẤP NHẬN QUÁ TRÌNH',
    title: 'TƯ DUY',
    desc: 'Hiểu rằng mọi thành quả đều đến từ hành trình. Sẵn sàng đối mặt với thăng trầm.',
    icon: Shuffle
  }
];

export const BRANDS: BrandProps[] = [
  { name: 'BOYO', type: 'Thương hiệu riêng', origin: 'Việt Nam', logoPlaceholder: 'BOYO' },
  { name: 'CVT', type: 'Nhập khẩu chính ngạch', origin: 'Trung Quốc', logoPlaceholder: 'CVT' },
  { name: 'UHi', type: 'Nhập khẩu chính ngạch', origin: 'Hàn Quốc', logoPlaceholder: 'UHi' },
  { name: 'ABI SNACK', type: 'Phân phối độc quyền', origin: 'Việt Nam', logoPlaceholder: 'ABI' },
];

// Details for Brand Specific Pages
export const BRAND_DETAILS: Record<string, { 
  title: string; 
  slogan: string; 
  desc: string; 
  story: string;
  logoUrl: string;
  coverImage: string;
  videoThumbnail?: string;
  signatureProductId?: number; 
  stats: { value: string; label: string }[];
  features: { title: string; desc: string; icon: any }[];
  values: string[];
  keywords: string[];
  gallery: string[];
  socials: { id: string; label: string; url: string }[];
  process?: { step: string; title: string; desc: string; icon: any }[];
  reviews?: { user: string; comment: string; rating: number; avatar: string }[];
  theme: {
    gradient: string;
    primary: string;
    light: string;
    border: string;
    shadow: string;
    bg: string;
    ring: string;
  }
}> = {
  'BOYO': {
    title: 'BOYO VIETNAM',
    slogan: 'Vị ngon lan tỏa - Sức khỏe thăng hoa',
    desc: 'Thương hiệu hạt điều & snack nông sản chất lượng cao. Tự hào mang hương vị Bình Phước đến mọi nhà với công nghệ chế biến không chiên dầu.',
    story: 'BOYO ra đời từ vùng thủ phủ điều Bình Phước, nơi có những hạt điều ngon nhất thế giới. Với tâm huyết nâng tầm nông sản Việt, chúng tôi áp dụng công nghệ rang sấy hiện đại, nói không với chiên dầu để giữ trọn vị ngọt tự nhiên và giá trị dinh dưỡng. BOYO không chỉ là món ăn vặt, mà là món quà sức khỏe từ thiên nhiên.',
    logoUrl: 'https://drive.google.com/thumbnail?id=18S5Pe52quMkvtZmRt5vCAwR3BVXaWJuk&sz=w1000',
    coverImage: 'https://images.unsplash.com/photo-1634467524884-897d0af5e08e?auto=format&fit=crop&q=80&w=2000',
    videoThumbnail: 'https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&q=80&w=1000',
    signatureProductId: 2, 
    stats: [
      { value: 'Binh Phuoc', label: 'Nguồn gốc' },
      { value: 'Non-Fried', label: 'Công nghệ' },
      { value: 'Natural', label: 'Hương vị' }
    ],
    features: [
      { title: 'Hạt điều Bình Phước', desc: 'Tuyển chọn từ vùng nguyên liệu hạt điều ngon nhất Việt Nam.', icon: Leaf },
      { title: 'Không chiên dầu', desc: 'Công nghệ rang sấy hiện đại, tốt cho sức khỏe.', icon: Heart },
      { title: 'Giữ trọn dinh dưỡng', desc: 'Quy trình chế biến giữ lại tối đa vitamin và khoáng chất.', icon: Star }
    ],
    values: ['Tự nhiên', 'Sức khỏe', 'Tận tâm'],
    keywords: ['GIÒN TAN', 'THƠM BÙI', 'KHÔNG DẦU', 'DINH DƯỠNG', 'NÔNG SẢN VIỆT'],
    gallery: [
        'https://images.unsplash.com/photo-1600093463592-8e36ae95ef56?auto=format&fit=crop&q=80&w=600',
        'https://images.unsplash.com/photo-1541592106381-b31e9677c0e5?auto=format&fit=crop&q=80&w=600',
        'https://images.unsplash.com/photo-1599599810653-98c3964326dc?auto=format&fit=crop&q=80&w=600',
        'https://images.unsplash.com/photo-1558961363-fa8fdf82db35?auto=format&fit=crop&q=80&w=600'
    ],
    socials: [
        { id: 'website', label: 'Website', url: 'https://www.boyo.vn/' },
        { id: 'facebook', label: 'Facebook', url: '#' },
        { id: 'tiktok', label: 'TikTok', url: '#' },
        { id: 'shopee', label: 'Shopee', url: '#' },
        { id: 'instagram', label: 'Instagram', url: '#' },
        { id: 'youtube', label: 'YouTube', url: '#' }
    ],
    process: [
      { step: '01', title: 'Tuyển Chọn', desc: 'Hạt điều loại 1 từ vườn Bình Phước.', icon: Sprout },
      { step: '02', title: 'Sơ Chế', desc: 'Làm sạch và phân loại kỹ lưỡng.', icon: Factory },
      { step: '03', title: 'Rang Sấy', desc: 'Công nghệ nhiệt độ chuẩn, không dầu.', icon: Zap },
      { step: '04', title: 'Đóng Gói', desc: 'Bao bì bảo quản tối ưu độ giòn.', icon: Package }
    ],
    reviews: [
      { user: "Minh Anh", comment: "Hạt điều BOYO rất giòn và ngọt, không bị hôi dầu như loại khác.", rating: 5, avatar: "MA" },
      { user: "Hoàng Nam", comment: "Bắp rang mắm ớt đậm đà, ăn cuốn dã man. Sẽ ủng hộ dài dài.", rating: 5, avatar: "HN" },
      { user: "Chị Lan", comment: "Bao bì đẹp, mua làm quà biếu Tết rất sang trọng.", rating: 4, avatar: "L" }
    ],
    theme: {
      gradient: 'from-blue-600 via-blue-500 to-sky-400',
      primary: 'text-blue-700',
      light: 'bg-blue-50',
      border: 'border-blue-200',
      shadow: 'shadow-blue-200',
      bg: 'bg-blue-600',
      ring: 'ring-blue-400'
    }
  },
  'UHi': {
    title: 'UHi KOREA',
    slogan: 'Vị chua bùng nổ - Đánh thức vị giác',
    desc: 'UHi mang đến làn gió mới từ Hàn Quốc với các dòng kẹo dẻo hương trái cây tự nhiên. Đặc trưng bởi vị chua kích thích và độ dai mềm khó cưỡng.',
    story: 'Lấy cảm hứng từ sự năng động và trẻ trung của Seoul, UHi được tạo ra để trở thành người bạn đồng hành trong mọi cuộc vui. Mỗi viên kẹo UHi là một sự bùng nổ của hương vị trái cây tươi mát và lớp phủ chua "thần thánh". Chúng tôi mang đến trải nghiệm vị giác đầy màu sắc và cảm hứng sáng tạo.',
    logoUrl: 'https://drive.google.com/thumbnail?id=1Mb3p6UdcHGwrUSoghO5bfXxB70QUvXYc&sz=w1000',
    coverImage: 'https://images.unsplash.com/photo-1582058091505-f87a2e55a40f?auto=format&fit=crop&q=80&w=2000',
    videoThumbnail: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80&w=1000',
    signatureProductId: 5,
    stats: [
      { value: 'Korea', label: 'Xuất xứ' },
      { value: 'Top 1', label: 'Kẹo dẻo chua' },
      { value: 'Natural', label: 'Hương trái cây' }
    ],
    features: [
      { title: 'Chuẩn vị Hàn Quốc', desc: 'Nhập khẩu chính ngạch, hương vị nguyên bản.', icon: Globe },
      { title: 'Vị chua đặc trưng', desc: 'Lớp phủ chua cực đã, kích thích vị giác ngay lần đầu chạm môi.', icon: Zap },
      { title: 'An toàn sức khỏe', desc: 'Không chất bảo quản độc hại, màu thực phẩm tự nhiên.', icon: CheckCircle }
    ],
    values: ['Năng động', 'Sáng tạo', 'An toàn'],
    keywords: ['CHUA CỰC ĐÃ', 'HƯƠNG TRÁI CÂY', 'DAI MỀM', 'KOREA STYLE', 'FUNNY'],
    gallery: [
        'https://images.unsplash.com/photo-1535041422672-8888d3ad5e24?auto=format&fit=crop&q=80&w=600',
        'https://images.unsplash.com/photo-1621460245558-27422070f369?auto=format&fit=crop&q=80&w=600',
        'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&q=80&w=600',
        'https://images.unsplash.com/photo-1600359756098-8bc52195bbf4?auto=format&fit=crop&q=80&w=600'
    ],
    socials: [
        { id: 'website', label: 'Website', url: '#' },
        { id: 'facebook', label: 'Facebook', url: '#' },
        { id: 'tiktok', label: 'TikTok', url: '#' },
        { id: 'shopee', label: 'Shopee', url: '#' },
        { id: 'instagram', label: 'Instagram', url: '#' }
    ],
    process: [
        { step: '01', title: 'Nghiên Cứu Trend', desc: 'Cập nhật xu hướng snack mới nhất tại Hàn Quốc.', icon: Search },
        { step: '02', title: 'Tuyển Chọn', desc: 'Lựa chọn nhà máy Top 3 tại Hàn Quốc.', icon: CheckCircle },
        { step: '03', title: 'Nhập Khẩu', desc: 'Vận chuyển container chính ngạch.', icon: Ship },
        { step: '04', title: 'Phân Phối', desc: 'Phủ sóng siêu thị & cửa hàng tiện lợi.', icon: Store }
    ],
    reviews: [
      { user: "Bảo Ngọc", comment: "Kẹo chua chua ngọt ngọt, ăn dính lắm luôn. 10 điểm!", rating: 5, avatar: "BN" },
      { user: "Thanh Hằng", comment: "Bao bì xinh xỉu, vị đào thơm lắm. Sẽ mua lại.", rating: 5, avatar: "TH" },
      { user: "Đức Anh", comment: "Hàng chuẩn Hàn Quốc, vị lạ miệng, không bị ngọt gắt.", rating: 4, avatar: "DA" }
    ],
    theme: {
      gradient: 'from-red-600 via-red-500 to-rose-400',
      primary: 'text-red-600',
      light: 'bg-red-50',
      border: 'border-red-200',
      shadow: 'shadow-red-200',
      bg: 'bg-red-600',
      ring: 'ring-red-400'
    }
  },
  'CVT': {
    title: 'CVT SNACK',
    slogan: 'Tinh hoa ẩm thực Tứ Xuyên',
    desc: 'CVT (Chung Việt Thái) chuyên các dòng đồ ăn vặt nội địa Trung chất lượng cao. Nổi bật với các sản phẩm từ khoai môn, nấm và đồ cay Tứ Xuyên trứ danh.',
    story: 'CVT là cầu nối mang những tinh hoa ẩm thực đường phố nổi tiếng của Tứ Xuyên về Việt Nam. Chúng tôi tuyển chọn những nhà máy uy tín nhất, đảm bảo sản phẩm không chỉ ngon miệng, chuẩn vị cay tê mà còn an toàn tuyệt đối. CVT đánh thức mọi giác quan của bạn bằng sự đậm đà khó cưỡng.',
    logoUrl: 'https://drive.google.com/thumbnail?id=15nhC20zE7ulpESkh_WfjWNrr9Hkrff8A&sz=w1000',
    coverImage: 'https://images.unsplash.com/photo-1594488506899-786d77298c4d?auto=format&fit=crop&q=80&w=2000',
    videoThumbnail: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&q=80&w=1000',
    signatureProductId: 3,
    stats: [
      { value: 'Sichuan', label: 'Hương vị' },
      { value: 'Premium', label: 'Chất lượng' },
      { value: 'Spicy', label: 'Đặc trưng' }
    ],
    features: [
      { title: 'Cay tê trứ danh', desc: 'Hương vị Tứ Xuyên chính hiệu, cay nồng lôi cuốn.', icon: Flame },
      { title: 'Nguyên liệu cao cấp', desc: 'Khoai môn, nấm hương được tuyển chọn kỹ lưỡng.', icon: Package },
      { title: 'Quy trình khép kín', desc: 'Đóng gói hút chân không, đảm bảo vệ sinh an toàn thực phẩm.', icon: ShieldCheck }
    ],
    values: ['Đậm đà', 'Uy tín', 'Độc đáo'],
    keywords: ['CAY TÊ', 'ĐẬM ĐÀ', 'TỨ XUYÊN', 'KHOAI MÔN', 'ĐỘC LẠ'],
    gallery: [
        'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80&w=600',
        'https://images.unsplash.com/photo-1627207644006-e30a934da4e6?auto=format&fit=crop&q=80&w=600',
        'https://images.unsplash.com/photo-1519623399029-b6b0358fd9d6?auto=format&fit=crop&q=80&w=600',
        'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?auto=format&fit=crop&q=80&w=600'
    ],
    socials: [
        { id: 'facebook', label: 'Facebook', url: '#' },
        { id: 'shopee', label: 'Shopee', url: '#' }
    ],
    process: [
        { step: '01', title: 'Ẩm Thực Tứ Xuyên', desc: 'Khám phá đặc sản địa phương.', icon: MapPin },
        { step: '02', title: 'Kiểm Tra', desc: 'Đánh giá nhà máy & chứng từ xuất khẩu.', icon: FileCheck },
        { step: '03', title: 'Logistic', desc: 'Vận chuyển & thông quan nhanh chóng.', icon: Truck },
        { step: '04', title: 'Đến Tay Khách', desc: 'Hệ thống đại lý toàn quốc.', icon: ShoppingBag }
    ],
    reviews: [
      { user: "Tuấn Hưng", comment: "Khoai môn trứng muối đỉnh nhất từng ăn. Vị béo béo mặn mặn.", rating: 5, avatar: "TH" },
      { user: "Mỹ Duyên", comment: "Chân vịt cay tê tái mà cuốn lắm, nhậu là hết bài.", rating: 5, avatar: "MD" },
      { user: "Khánh Vy", comment: "Đồ ăn vặt CVT chưa bao giờ làm mình thất vọng.", rating: 5, avatar: "KV" }
    ],
    theme: {
      gradient: 'from-green-700 via-green-600 to-emerald-500',
      primary: 'text-green-700',
      light: 'bg-green-50',
      border: 'border-green-200',
      shadow: 'shadow-green-200',
      bg: 'bg-green-600',
      ring: 'ring-green-400'
    }
  },
  'ABI': {
    title: 'ABI SNACK',
    slogan: 'Ăn là nghiền - Vui trọn khoảnh khắc',
    desc: 'ABI Snack - Thương hiệu bánh tráng quốc dân với đa dạng hương vị độc đáo. Từ bánh tráng bơ, me, tỏi đến các loại da heo, khô gà.',
    story: 'Bắt đầu từ món ăn vặt đường phố quen thuộc, ABI đã nâng tầm bánh tráng trộn thành một sản phẩm đóng gói tiện lợi, vệ sinh nhưng vẫn giữ trọn vẹn sự dẻo thơm và hương vị đậm đà khó quên. ABI là người bạn đồng hành trong những giờ giải lao, những buổi tụ tập bạn bè đầy ắp tiếng cười.',
    logoUrl: 'https://drive.google.com/thumbnail?id=1VJmK-iUrzUrczRlldGtfUPGftHMOzzag&sz=w1000',
    coverImage: 'https://images.unsplash.com/photo-1529123202127-14e4179373eb?auto=format&fit=crop&q=80&w=2000',
    videoThumbnail: 'https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?auto=format&fit=crop&q=80&w=1000',
    signatureProductId: 7,
    stats: [
      { value: 'VietNam', label: 'Sản xuất' },
      { value: '20+', label: 'Hương vị' },
      { value: 'Bestseller', label: 'Thị trường' }
    ],
    features: [
      { title: 'Đa dạng hương vị', desc: 'Menu phong phú từ mặn, ngọt, cay, chua.', icon: Cherry },
      { title: 'Tiện lợi', desc: 'Bao bì zip tiện dụng, dễ dàng mang theo và bảo quản.', icon: Package },
      { title: 'Giá hợp lý', desc: 'Mức giá học sinh sinh viên, chất lượng vượt trội.', icon: ThumbsUp }
    ],
    values: ['Vui vẻ', 'Tiện lợi', 'Đa dạng'],
    keywords: ['BÁNH TRÁNG', 'ĂN VẶT', 'NGON QUÊN LỐI', 'ĐẬM SỐT', 'TRENDY'],
    gallery: [
        'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&q=80&w=600',
        'https://images.unsplash.com/photo-1606787366850-de6330128bfc?auto=format&fit=crop&q=80&w=600',
        'https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&q=80&w=600',
        'https://images.unsplash.com/photo-1528605248644-14dd04022da1?auto=format&fit=crop&q=80&w=600'
    ],
    socials: [
        { id: 'website', label: 'Website', url: '#' },
        { id: 'facebook', label: 'Facebook', url: '#' },
        { id: 'tiktok', label: 'TikTok', url: '#' },
        { id: 'shopee', label: 'Shopee', url: '#' },
        { id: 'instagram', label: 'Instagram', url: '#' },
        { id: 'youtube', label: 'YouTube', url: '#' }
    ],
    process: [
        { step: '01', title: 'Phơi Sương', desc: 'Bánh tráng Tây Ninh phơi sương thủ công.', icon: Sun },
        { step: '02', title: 'Phối Trộn', desc: 'Công thức sốt độc quyền, topping đầy đặn.', icon: ChefHat },
        { step: '03', title: 'Đóng Gói', desc: 'Túi Zip tiện lợi, giữ độ ngon.', icon: Package },
        { step: '04', title: 'Lan Tỏa', desc: 'Mạng lưới CTV & Đại lý khắp cả nước.', icon: Users }
    ],
    reviews: [
      { user: "Hà Linh", comment: "Bánh tráng bơ ABI là chân ái cuộc đời mình. Sốt béo ngậy, hành phi thơm phức.", rating: 5, avatar: "HL" },
      { user: "Nhóm 3 con mèo", comment: "Mua về ăn vặt trên văn phòng là hết sẩy. Đồng nghiệp ai cũng khen.", rating: 5, avatar: "M" },
      { user: "Quang Hải", comment: "Giá rẻ mà chất lượng, đóng gói sạch sẽ.", rating: 4, avatar: "QH" }
    ],
    theme: {
      gradient: 'from-orange-600 via-orange-500 to-amber-500',
      primary: 'text-orange-600',
      light: 'bg-orange-50',
      border: 'border-orange-200',
      shadow: 'shadow-orange-200',
      bg: 'bg-orange-600',
      ring: 'ring-orange-400'
    }
  }
};

export const PRODUCT_CATEGORIES = [
  { id: 'all', label: 'Tất cả' },
  { id: 'BOYO', label: 'BOYO' },
  { id: 'UHi', label: 'UHi' },
  { id: 'CVT', label: 'CVT' },
  { id: 'ABI', label: 'ABI Snack' },
];

export const PRODUCTS_DATA = [
  // BOYO Products (Blue Theme)
  {
    id: 1,
    name: 'Bắp Rang Mắm Ớt BOYO',
    brand: 'BOYO',
    category: 'Snack',
    image: 'https://cf.shopee.vn/file/vn-11134207-7r98o-lm6e3z3j4j3j8e',
    desc: 'Hạt bắp nếp vùng cao, giòn tan, vị mắm ớt đậm đà truyền thống.',
    origin: 'Việt Nam',
    tag: 'Bestseller',
    tagColor: 'bg-blue-600', // Changed to Blue
    specs: { pack: 'Gói 50g', shelfLife: '6 tháng', cert: 'ISO 22000' },
    highlights: ['Bắp nếp 100%', 'Không biến đổi gen', 'Vị mặn ngọt hài hòa']
  },
  {
    id: 2,
    name: 'Điều Vỏ Lụa Rang Muối BOYO',
    brand: 'BOYO',
    category: 'Hạt',
    image: 'https://cf.shopee.vn/file/vn-11134207-7r98o-lm6e3z3j5xpzf4',
    desc: 'Hạt điều Bình Phước loại 1, giữ nguyên vỏ lụa, rang muối thủ công.',
    origin: 'Việt Nam',
    tag: 'Premium',
    tagColor: 'bg-blue-600', // Changed to Blue
    specs: { pack: 'Hũ 200g', shelfLife: '12 tháng', cert: 'HACCP' },
    highlights: ['Hạt điều A cồ', 'Rang củi tự nhiên', 'Giàu dinh dưỡng']
  },
  // CVT Products (Green Theme)
  {
    id: 3,
    name: 'Khoai Môn Lệ Phố CVT',
    brand: 'CVT',
    category: 'Đồ ăn vặt',
    image: 'https://cf.shopee.vn/file/vn-11134207-7r98o-lm6e3z3j7caj9b',
    desc: 'Khoai môn thái lát mỏng, chiên giòn tan, vị ngọt bùi tự nhiên.',
    origin: 'Trung Quốc',
    tag: 'Mới',
    tagColor: 'bg-green-600',
    specs: { pack: 'Gói 80g', shelfLife: '9 tháng', cert: 'CNAS' },
    highlights: ['Khoai môn tím', 'Ít dầu', 'Vị nguyên bản']
  },
  {
    id: 4,
    name: 'Chân Vịt Cay Tứ Xuyên CVT',
    brand: 'CVT',
    category: 'Đồ cay',
    image: 'https://cf.shopee.vn/file/vn-11134207-7r98o-lm6e3z3j8qt3ae',
    desc: 'Chân vịt tẩm ướp gia vị Tứ Xuyên cay nồng, dai giòn sần sật.',
    origin: 'Trung Quốc',
    tag: 'Hot',
    tagColor: 'bg-green-600',
    specs: { pack: 'Gói 35g', shelfLife: '9 tháng', cert: 'VSATTP' },
    highlights: ['Vị cay tê', 'Hút chân không', 'Tiện lợi']
  },
  // NEW CVT PRODUCTS (Taro variants)
  {
    id: 11,
    name: 'Snack Khoai Môn Vị Gạch Cua CVT',
    brand: 'CVT',
    category: 'Snack Khoai Môn',
    image: 'https://cf.shopee.vn/file/vn-11134207-7r98o-lm6e3z3j7caj9b', // Placeholder reuse
    desc: 'Vị gạch cua đậm đà thơm lừng quyện cùng khoai môn giòn tan.',
    origin: 'Trung Quốc',
    tag: 'Best',
    tagColor: 'bg-green-600',
    specs: { pack: 'Gói 25g', shelfLife: '12 tháng', cert: 'CNAS' },
    highlights: ['Vị cua đậm đà', 'Gói nhỏ tiện lợi', 'Ăn vặt cực cuốn']
  },
  {
    id: 12,
    name: 'Khoai Môn Sấy Vị Trứng Muối CVT',
    brand: 'CVT',
    category: 'Snack Khoai Môn',
    image: 'https://cf.shopee.vn/file/vn-11134207-7r98o-lm6e3z3j7caj9b',
    desc: 'Sự kết hợp hoàn hảo giữa vị bùi của khoai môn và béo mặn của trứng muối.',
    origin: 'Trung Quốc',
    tag: 'Hot',
    tagColor: 'bg-green-600',
    specs: { pack: 'Gói 25g', shelfLife: '12 tháng', cert: 'CNAS' },
    highlights: ['Trứng muối thật', 'Béo ngậy', 'Giòn rụm']
  },
  {
    id: 13,
    name: 'Khoai Môn Sấy Vị Cay Tứ Xuyên CVT',
    brand: 'CVT',
    category: 'Snack Khoai Môn',
    image: 'https://cf.shopee.vn/file/vn-11134207-7r98o-lm6e3z3j7caj9b',
    desc: 'Thách thức vị giác với vị cay tê đặc trưng vùng Tứ Xuyên.',
    origin: 'Trung Quốc',
    tag: 'Cay',
    tagColor: 'bg-green-600',
    specs: { pack: 'Gói 25g', shelfLife: '12 tháng', cert: 'CNAS' },
    highlights: ['Cay tê lưỡi', 'Gia vị Tứ Xuyên', 'Kích thích']
  },
  {
    id: 14,
    name: 'Khoai Môn Vị Nấm Truffle & Thịt Nguội',
    brand: 'CVT',
    category: 'Snack Khoai Môn',
    image: 'https://cf.shopee.vn/file/vn-11134207-7r98o-lm6e3z3j7caj9b',
    desc: 'Hương vị thượng hạng từ nấm Truffle đen kết hợp thịt nguội hun khói.',
    origin: 'Trung Quốc',
    tag: 'Premium',
    tagColor: 'bg-green-600',
    specs: { pack: 'Gói 35g', shelfLife: '12 tháng', cert: 'CNAS' },
    highlights: ['Hương Truffle sang chảnh', 'Vị thịt hun khói', 'Độc lạ']
  },
  {
    id: 15,
    name: 'Khoai Môn Sấy Vị Bò Bít Tết CVT',
    brand: 'CVT',
    category: 'Snack Khoai Môn',
    image: 'https://cf.shopee.vn/file/vn-11134207-7r98o-lm6e3z3j7caj9b',
    desc: 'Vị bò bít tết nướng thơm lừng trên từng lát khoai môn.',
    origin: 'Trung Quốc',
    tag: 'Mới',
    tagColor: 'bg-green-600',
    specs: { pack: 'Gói 35g', shelfLife: '12 tháng', cert: 'CNAS' },
    highlights: ['Vị bò nướng', 'Gia vị tiêu đen', 'Đậm đà']
  },
  {
    id: 16,
    name: 'Khoai Môn Sấy Vị Hành Lá CVT',
    brand: 'CVT',
    category: 'Snack Khoai Môn',
    image: 'https://cf.shopee.vn/file/vn-11134207-7r98o-lm6e3z3j7caj9b',
    desc: 'Hương vị hành lá thơm nhẹ nhàng, quen thuộc mà lôi cuốn.',
    origin: 'Trung Quốc',
    tag: '',
    tagColor: 'bg-green-600',
    specs: { pack: 'Gói 75g', shelfLife: '12 tháng', cert: 'CNAS' },
    highlights: ['Hương hành thơm', 'Vị nhẹ nhàng', 'Gói lớn tiết kiệm']
  },
  // UHi Products (Red Theme)
  {
    id: 5,
    name: 'Kẹo Dẻo Nho Xanh UHi',
    brand: 'UHi',
    category: 'Kẹo',
    image: 'https://cf.shopee.vn/file/vn-11134207-7r98o-lm6e3z3ja5djcf',
    desc: 'Kẹo dẻo vị nho xanh chua ngọt, dai dai, thơm lừng hương trái cây.',
    origin: 'Hàn Quốc',
    tag: 'Yêu thích',
    tagColor: 'bg-red-600',
    specs: { pack: 'Gói 40g', shelfLife: '18 tháng', cert: 'K-Food' },
    highlights: ['Nước ép nho thật', 'Vitamin C', 'Không màu nhân tạo']
  },
  {
    id: 6,
    name: 'Kẹo Dẻo Đào Tiên UHi',
    brand: 'UHi',
    category: 'Kẹo',
    image: 'https://cf.shopee.vn/file/vn-11134207-7r98o-lm6e3z3jbkxzdg',
    desc: 'Hương đào thơm mát, viên kẹo hình trái tim xinh xắn, vị ngọt thanh.',
    origin: 'Hàn Quốc',
    tag: '',
    tagColor: 'bg-red-600',
    specs: { pack: 'Gói 40g', shelfLife: '18 tháng', cert: 'K-Food' },
    highlights: ['Hương đào tự nhiên', 'Mềm dẻo', 'Bao bì cute']
  },
  {
    id: 9,
    name: 'Kẹo Dẻo Xoài Chín UHi',
    brand: 'UHi',
    category: 'Kẹo',
    image: 'https://image.made-in-china.com/202f0j00lKkGYvWzZtqR/Mango-Gummy-Candy-Peeler-Mango-Gummies.jpg', 
    desc: 'Vị xoài chín mọng, ngọt ngào, hình dáng quả xoài mini cực dễ thương.',
    origin: 'Hàn Quốc',
    tag: 'Mới',
    tagColor: 'bg-red-600',
    specs: { pack: 'Gói 40g', shelfLife: '18 tháng', cert: 'K-Food' },
    highlights: ['Hương xoài 100%', 'Vitamin C', 'Ăn vặt healthy']
  },
   // ABI Products (Orange Theme)
   {
    id: 7,
    name: 'Bánh Tráng Bơ ABI',
    brand: 'ABI',
    category: 'Bánh tráng',
    image: 'https://cf.shopee.vn/file/vn-11134207-7r98o-lm6e3z3jd1ibeh',
    desc: 'Bánh tráng phơi sương dẻo, kết hợp sốt bơ béo ngậy và hành phi.',
    origin: 'Việt Nam',
    tag: 'Legend',
    tagColor: 'bg-orange-600',
    specs: { pack: 'Gói 70g', shelfLife: '1 tháng', cert: 'TCCS' },
    highlights: ['Sốt bơ độc quyền', 'Bánh tráng Tây Ninh', 'Topping đầy đặn']
  },
  {
    id: 8,
    name: 'Khô Gà Lá Chanh ABI',
    brand: 'ABI',
    category: 'Đồ khô',
    image: 'https://cf.shopee.vn/file/vn-11134207-7r98o-lm6e3z3jeezffj',
    desc: 'Thịt gà tươi sấy khô, thơm mùi lá chanh, cay nhẹ kích thích.',
    origin: 'Việt Nam',
    tag: '',
    tagColor: 'bg-orange-600',
    specs: { pack: 'Hũ 100g', shelfLife: '6 tháng', cert: 'VSATTP' },
    highlights: ['Gà tươi 100%', 'Không bột ngọt', 'Cay vừa phải']
  },
  {
    id: 10,
    name: 'Bánh Tráng Cuộn Phô Mai ABI',
    brand: 'ABI',
    category: 'Bánh tráng',
    image: 'https://product.hstatic.net/200000407330/product/banh_trang_cuon_pho_mai_6cd8d20359854746960851884485542f_master.jpg',
    desc: 'Lớp bánh tráng giòn tan cuộn tròn, phủ lớp bột phô mai thơm béo.',
    origin: 'Việt Nam',
    tag: 'Best',
    tagColor: 'bg-orange-600',
    specs: { pack: 'Hũ 150g', shelfLife: '3 tháng', cert: 'TCCS' },
    highlights: ['Phô mai nhập khẩu', 'Giòn rụm', 'Ăn là dính']
  }
];

export const NEWS_CATEGORIES = [
  { id: 'all', label: 'Tất cả' },
  { id: 'Bản Tin Chung', label: 'Bản Tin Chung' },
  { id: 'Bản Tin Sản Xuất', label: 'Sản Xuất' },
  { id: 'Bản Tin Nhập Khẩu', label: 'Nhập Khẩu' },
  { id: 'Bản Tin Phân Phối', label: 'Phân Phối' },
  { id: 'Bản Tin Hoạt Động', label: 'Hoạt Động' },
];

export const NEWS_ITEMS = [
  {
    id: 1,
    title: "LYHU ký kết hợp tác chiến lược với đối tác Hàn Quốc",
    summary: "Bước tiến quan trọng trong việc mở rộng danh mục sản phẩm nhập khẩu, mang kẹo dẻo UHi chính hãng về Việt Nam với mức giá ưu đãi.",
    image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=800",
    date: "20/05/2024",
    category: "Bản Tin Nhập Khẩu",
    author: "Ban Truyền Thông",
    readTime: "5 phút",
    views: "2.5K",
    featured: true,
    tags: ["Hợp tác", "Chiến lược", "UHi"],
    content: `
      <p class="mb-4">Sáng ngày 20/05/2024, tại trụ sở chính TP.HCM, LYHU đã chính thức ký kết biên bản ghi nhớ hợp tác chiến lược với đối tác Hàn Quốc - đơn vị sở hữu thương hiệu kẹo dẻo UHi.</p>
      <h3 class="text-xl font-bold mb-3 mt-6">Mở rộng danh mục sản phẩm</h3>
      <p class="mb-4">Thỏa thuận này đánh dấu một bước tiến quan trọng trong chiến lược mở rộng danh mục sản phẩm nhập khẩu của LYHU. Theo đó, LYHU sẽ trở thành nhà phân phối chính thức các dòng sản phẩm kẹo dẻo UHi tại thị trường Việt Nam.</p>
      <p class="mb-4">Đại diện phía Hàn Quốc chia sẻ: "Chúng tôi ấn tượng với mạng lưới phân phối và sự chuyên nghiệp của LYHU. Chúng tôi tin rằng sự hợp tác này sẽ đưa UHi đến gần hơn với người tiêu dùng Việt."</p>
      <h3 class="text-xl font-bold mb-3 mt-6">Cam kết chất lượng</h3>
      <p class="mb-4">LYHU cam kết 100% sản phẩm được nhập khẩu chính ngạch, có đầy đủ giấy tờ chứng nhận xuất xứ và chất lượng. Việc hợp tác trực tiếp với nhà máy giúp chúng tôi tối ưu hóa chi phí và mang đến mức giá tốt nhất cho người tiêu dùng.</p>
    `
  },
  {
    id: 2,
    title: "Khánh thành dây chuyền sản xuất BOYO đạt chuẩn ISO",
    summary: "Nhà máy mới tại Đồng Nai với công suất 500 tấn/năm chính thức đi vào hoạt động, đảm bảo nguồn cung ổn định cho thị trường Tết.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800",
    date: "15/05/2024",
    category: "Bản Tin Sản Xuất",
    author: "Bộ phận Sản xuất",
    readTime: "4 phút",
    views: "1.8K",
    featured: false,
    tags: ["Nhà máy", "ISO", "BOYO"],
    content: `
      <p class="mb-4">Nhằm đáp ứng nhu cầu ngày càng tăng của thị trường, LYHU đã chính thức đưa vào vận hành dây chuyền sản xuất mới cho thương hiệu BOYO tại nhà máy Đồng Nai.</p>
      <p class="mb-4">Dây chuyền mới được trang bị công nghệ rang sấy hiện đại, giúp giữ trọn hương vị tự nhiên của nông sản và đảm bảo vệ sinh an toàn thực phẩm tuyệt đối theo tiêu chuẩn ISO 22000.</p>
    `
  },
  {
    id: 3,
    title: "CVT ra mắt dòng sản phẩm Khoai Môn Lệ Phố mới",
    summary: "Phiên bản nâng cấp với công nghệ chiên chân không giúp giảm 50% lượng dầu, giữ nguyên vị ngọt bùi tự nhiên của khoai môn.",
    image: "https://images.unsplash.com/photo-1621447504864-d8686e12698c?auto=format&fit=crop&q=80&w=800",
    date: "10/05/2024",
    category: "Bản Tin Phân Phối",
    author: "Phòng Marketing",
    readTime: "3 phút",
    views: "1.2K",
    featured: false,
    tags: ["Sản phẩm mới", "CVT", "R&D"],
    content: `
      <p class="mb-4">Thương hiệu CVT vừa chính thức giới thiệu dòng sản phẩm Khoai Môn Lệ Phố phiên bản mới. Điểm nổi bật của sản phẩm lần này là công nghệ chiên chân không (Vacuum Frying) tiên tiến.</p>
      <p class="mb-4">Công nghệ này giúp giảm thiểu lượng dầu thấm vào sản phẩm, đồng thời giữ được màu sắc tự nhiên và độ giòn tan của khoai môn mà không bị cứng.</p>
    `
  },
  {
    id: 4,
    title: "Hội nghị khách hàng LYHU 2024: Kết nối vươn xa",
    summary: "Sự kiện quy tụ hơn 200 nhà phân phối trên toàn quốc, chia sẻ định hướng phát triển và chính sách thưởng năm hấp dẫn.",
    image: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&q=80&w=800",
    date: "01/05/2024",
    category: "Bản Tin Hoạt Động",
    author: "Ban Giám Đốc",
    readTime: "6 phút",
    views: "3.2K",
    featured: true,
    tags: ["Sự kiện", "Đối tác", "Kinh doanh"],
    content: `
      <p class="mb-4">Hội nghị khách hàng thường niên của LYHU đã diễn ra thành công tốt đẹp với sự tham gia của hơn 200 đại lý và nhà phân phối trên toàn quốc.</p>
      <p class="mb-4">Tại sự kiện, Ban Giám Đốc đã chia sẻ về tầm nhìn chiến lược 2025, trong đó tập trung vào việc số hóa quy trình đặt hàng và mở rộng hệ thống kho vận tại miền Bắc.</p>
    `
  },
  {
    id: 5,
    title: "ABI Snack - Top 10 thương hiệu được giới trẻ yêu thích",
    summary: "Giải thưởng do tạp chí Ẩm thực Việt bình chọn, khẳng định vị thế của ABI trong lòng người tiêu dùng trẻ.",
    image: "https://images.unsplash.com/photo-1531545514256-b1400bc00f31?auto=format&fit=crop&q=80&w=800",
    date: "28/04/2024",
    category: "Bản Tin Chung",
    author: "Ban Truyền Thông",
    readTime: "2 phút",
    views: "5K+",
    featured: false,
    tags: ["Giải thưởng", "ABI", "Thương hiệu"],
    content: `
      <p class="mb-4">Vượt qua hàng trăm đề cử, ABI Snack vinh dự lọt vào Top 10 thương hiệu snack được giới trẻ yêu thích nhất năm 2024.</p>
      <p class="mb-4">Đây là sự ghi nhận xứng đáng cho những nỗ lực không ngừng nghỉ của đội ngũ ABI trong việc sáng tạo hương vị và nâng cao chất lượng sản phẩm.</p>
    `
  },
  {
    id: 6,
    title: "LYHU mở rộng hệ thống kho vận tại miền Trung",
    summary: "Kho hàng mới tại Đà Nẵng với diện tích 2000m2 sẽ rút ngắn thời gian giao hàng cho khu vực miền Trung và Tây Nguyên.",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800",
    date: "15/04/2024",
    category: "Bản Tin Phân Phối",
    author: "Phòng Logistics",
    readTime: "3 phút",
    views: "900",
    featured: false,
    tags: ["Kho vận", "Logistics", "Đà Nẵng"],
    content: `
      <p class="mb-4">LYHU vui mừng thông báo về việc chính thức đưa vào hoạt động kho hàng trung chuyển mới tại Đà Nẵng.</p>
      <p class="mb-4">Với vị trí đắc địa và hệ thống quản lý kho WMS hiện đại, kho hàng mới sẽ giúp tối ưu hóa luồng hàng hóa và giảm 30% thời gian giao hàng cho các đối tác khu vực miền Trung.</p>
    `
  },
  {
    id: 7,
    title: "Chương trình Team Building 2024: Vượt sóng ra khơi",
    summary: "Cán bộ nhân viên LYHU đã có 3 ngày 2 đêm đầy ý nghĩa tại Nha Trang, thắt chặt tinh thần đoàn kết và tái tạo năng lượng.",
    image: "https://images.unsplash.com/photo-1528605248644-14dd04022da1?auto=format&fit=crop&q=80&w=800",
    date: "10/04/2024",
    category: "Bản Tin Hoạt Động",
    author: "Công Đoàn",
    readTime: "4 phút",
    views: "1.5K",
    featured: false,
    tags: ["Team Building", "Văn hóa", "Nội bộ"],
    content: `
      <p class="mb-4">Chương trình Team Building thường niên của LYHU đã diễn ra tại thành phố biển Nha Trang xinh đẹp với chủ đề 'Vượt sóng ra khơi'.</p>
      <p class="mb-4">Thông qua các trò chơi vận động và đêm Gala Dinner ấm cúng, các thành viên LYHU đã cùng nhau chia sẻ những khoảnh khắc đáng nhớ, khẳng định tinh thần đoàn kết và quyết tâm chinh phục những mục tiêu mới.</p>
    `
  },
  {
    id: 8,
    title: "Đào tạo kỹ năng bán hàng 4.0 cho nhân sự",
    summary: "Khóa học chuyên sâu giúp đội ngũ kinh doanh nắm bắt các công cụ digital marketing và kỹ năng chốt sale hiện đại.",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800",
    date: "05/04/2024",
    category: "Bản Tin Hoạt Động",
    author: "Phòng Nhân Sự",
    readTime: "3 phút",
    views: "850",
    featured: false,
    tags: ["Đào tạo", "Kỹ năng", "Nội bộ"],
    content: `
      <p class="mb-4">LYHU vừa tổ chức thành công khóa đào tạo 'Kỹ năng bán hàng 4.0' dành cho toàn bộ nhân viên kinh doanh. Khóa học được dẫn dắt bởi các chuyên gia hàng đầu trong lĩnh vực FMCG.</p>
      <p class="mb-4">Nội dung khóa học tập trung vào việc ứng dụng công nghệ trong quản lý khách hàng (CRM), kỹ năng tư vấn bán hàng qua mạng xã hội và nghệ thuật đàm phán trong kỷ nguyên số.</p>
    `
  },
  {
    id: 9,
    title: "Ra mắt bộ nhận diện thương hiệu mới cho UHi",
    summary: "Diện mạo mới trẻ trung, năng động hơn, phù hợp với thị hiếu của Gen Z và định hướng phát triển toàn cầu của thương hiệu.",
    image: "https://images.unsplash.com/photo-1606857521015-7f9fcf423740?auto=format&fit=crop&q=80&w=800",
    date: "20/03/2024",
    category: "Bản Tin Chung",
    author: "Phòng Marketing",
    readTime: "2 phút",
    views: "4.1K",
    featured: false,
    tags: ["Thương hiệu", "UHi", "Marketing"],
    content: `
      <p class="mb-4">Thương hiệu kẹo dẻo UHi chính thức công bố bộ nhận diện thương hiệu mới với logo và bao bì được thiết kế lại hoàn toàn.</p>
      <p class="mb-4">Thiết kế mới sử dụng tông màu tươi sáng, font chữ hiện đại và hình ảnh nhân vật đại diện ngộ nghĩnh, hứa hẹn sẽ tạo nên cơn sốt 'check-in' trong giới trẻ.</p>
    `
  },
  {
    id: 10,
    title: "LYHU đạt danh hiệu Hàng Việt Nam Chất Lượng Cao 2024",
    summary: "Người tiêu dùng bình chọn LYHU là thương hiệu uy tín, chất lượng trong nhóm ngành thực phẩm khô và ăn liền.",
    image: "https://images.unsplash.com/photo-1577155005160-2240500e22d3?auto=format&fit=crop&q=80&w=800",
    date: "15/03/2024",
    category: "Bản Tin Chung",
    author: "Hiệp hội DN",
    readTime: "3 phút",
    views: "6.5K",
    featured: false,
    tags: ["Giải thưởng", "Uy tín", "HVNCLC"],
    content: `
      <p class="mb-4">Trong lễ công bố Hàng Việt Nam Chất Lượng Cao 2024 vừa qua, LYHU vinh dự được xướng tên trong danh sách các doanh nghiệp dẫn đầu ngành thực phẩm.</p>
      <p class="mb-4">Đây là kết quả của cuộc khảo sát trên quy mô toàn quốc, ghi nhận sự tin tưởng của người tiêu dùng đối với các sản phẩm mang thương hiệu BOYO và ABI Snack.</p>
    `
  },
  {
    id: 11,
    title: "Chương trình thiện nguyện: Xuân yêu thương tại vùng cao",
    summary: "Hành trình mang 1000 suất quà Tết đến với trẻ em nghèo tại Hà Giang, chia sẻ khó khăn và lan tỏa hơi ấm mùa xuân.",
    image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&q=80&w=800",
    date: "10/01/2024",
    category: "Bản Tin Hoạt Động",
    author: "Công Đoàn",
    readTime: "5 phút",
    views: "2.1K",
    featured: false,
    tags: ["Thiện nguyện", "Cộng đồng", "CSR"],
    content: `
      <p class="mb-4">Với tinh thần 'Lá lành đùm lá rách', đoàn thiện nguyện LYHU đã vượt hơn 300km đường đèo để đến với xã Xín Cái, huyện Mèo Vạc, tỉnh Hà Giang.</p>
      <p class="mb-4">Tại đây, đoàn đã trao tặng 1000 suất quà bao gồm áo ấm, sách vở và các nhu yếu phẩm thiết yếu cho các em học sinh dân tộc thiểu số, góp phần mang đến một cái Tết ấm áp và đủ đầy hơn.</p>
    `
  }
];

export const PARTNER_BENEFITS = [
  {
    title: "Chiết khấu hấp dẫn",
    desc: "Chính sách giá sỉ cạnh tranh, thưởng doanh số tháng/quý/năm.",
    icon: Percent,
    color: "bg-yellow-50 text-yellow-600"
  },
  {
    title: "Hỗ trợ Marketing",
    desc: "Cung cấp hình ảnh, video, ấn phẩm POSM và chạy quảng cáo khu vực.",
    icon: Megaphone,
    color: "bg-blue-50 text-blue-600"
  },
  {
    title: "Đào tạo bán hàng",
    desc: "Chia sẻ kinh nghiệm, kỹ năng chốt sale và quản lý hàng hóa.",
    icon: Users,
    color: "bg-green-50 text-green-600"
  },
  {
    title: "Độc quyền khu vực",
    desc: "Chính sách bảo vệ vùng bán hàng cho Đại lý và Nhà phân phối.",
    icon: MapPin,
    color: "bg-red-50 text-red-600"
  }
];

export const CAREER_VALUES = [
  {
    title: "Môi trường cởi mở",
    desc: "Không gian làm việc hiện đại, khuyến khích sự sáng tạo và trao đổi ý kiến thẳng thắn.",
    icon: Smile,
    color: "text-yellow-500 bg-yellow-50"
  },
  {
    title: "Phát triển không giới hạn",
    desc: "Lộ trình thăng tiến rõ ràng, được tham gia các khóa đào tạo chuyên sâu trong và ngoài nước.",
    icon: TrendingUp,
    color: "text-blue-500 bg-blue-50"
  },
  {
    title: "Phúc lợi toàn diện",
    desc: "Bảo hiểm sức khỏe cao cấp, thưởng hiệu quả công việc, du lịch hàng năm.",
    icon: Gift,
    color: "text-pink-500 bg-pink-50"
  },
  {
    title: "Công nghệ tiên tiến",
    desc: "Làm việc với các hệ thống quản lý hiện đại (ERP, DMS) và công cụ digital 4.0.",
    icon: Laptop,
    color: "text-purple-500 bg-purple-50"
  }
];

export const JOBS = [
  {
    id: 1,
    title: "Nhân viên Kinh doanh (Kênh GT)",
    location: "Hồ Chí Minh",
    department: "Phòng Kinh Doanh",
    type: "Toàn thời gian",
    salary: "10 - 25 Triệu",
    deadline: "30/06/2024",
    description: `
      <ul class="list-disc pl-5 space-y-2 text-gray-600">
        <li>Chăm sóc và phát triển hệ thống đại lý, cửa hàng tạp hóa trong khu vực được giao.</li>
        <li>Triển khai các chương trình khuyến mãi, trưng bày sản phẩm tại điểm bán.</li>
        <li>Đảm bảo chỉ tiêu doanh số và độ phủ thị trường.</li>
        <li>Thu thập thông tin thị trường và đối thủ cạnh tranh.</li>
      </ul>
    `,
    requirements: `
      <ul class="list-disc pl-5 space-y-2 text-gray-600">
        <li>Tốt nghiệp Trung cấp trở lên.</li>
        <li>Có ít nhất 1 năm kinh nghiệm sales thị trường (ưu tiên ngành FMCG).</li>
        <li>Giao tiếp tốt, chịu khó, có xe máy đi lại.</li>
        <li>Kỹ năng đàm phán và giải quyết vấn đề cơ bản.</li>
      </ul>
    `,
    benefits: `
      <ul class="list-disc pl-5 space-y-2 text-gray-600">
        <li>Thu nhập hấp dẫn: Lương cứng + Phụ cấp + Thưởng doanh số (Thu nhập không giới hạn).</li>
        <li>Thưởng nóng theo chương trình thi đua hàng tháng/quý.</li>
        <li>Được đào tạo bài bản về kỹ năng bán hàng và kiến thức sản phẩm.</li>
        <li>Cơ hội thăng tiến lên Giám sát bán hàng sau 1-2 năm.</li>
      </ul>
    `
  },
  {
    id: 2,
    title: "Digital Marketing Executive",
    location: "Hà Nội",
    department: "Phòng Marketing",
    type: "Toàn thời gian",
    salary: "12 - 18 Triệu",
    deadline: "15/06/2024",
    description: `
      <ul class="list-disc pl-5 space-y-2 text-gray-600">
        <li>Lên kế hoạch và triển khai các chiến dịch quảng cáo trên Facebook, Google, TikTok.</li>
        <li>Quản lý nội dung Fanpage, Website và các kênh social media của công ty.</li>
        <li>Phối hợp với team thiết kế để sản xuất hình ảnh, video quảng cáo.</li>
        <li>Theo dõi, đo lường và tối ưu hóa hiệu quả chiến dịch.</li>
      </ul>
    `,
    requirements: `
      <ul class="list-disc pl-5 space-y-2 text-gray-600">
        <li>Tốt nghiệp Đại học chuyên ngành Marketing, Truyền thông hoặc liên quan.</li>
        <li>Có kinh nghiệm chạy Ads (Facebook/Google) từ 1 năm trở lên.</li>
        <li>Nắm bắt nhanh các xu hướng content marketing mới (đặc biệt là TikTok).</li>
        <li>Có tư duy thẩm mỹ và khả năng viết lách tốt.</li>
      </ul>
    `,
    benefits: `
      <ul class="list-disc pl-5 space-y-2 text-gray-600">
        <li>Môi trường làm việc trẻ trung, năng động, nhiều cơ hội sáng tạo.</li>
        <li>Được cung cấp ngân sách để thử nghiệm các ý tưởng mới.</li>
        <li>Tham gia các khóa học nâng cao chuyên môn do công ty tài trợ.</li>
        <li>Review lương định kỳ 6 tháng/lần.</li>
      </ul>
    `
  },
  {
    id: 3,
    title: "Kế toán bán hàng",
    location: "Đà Nẵng",
    department: "Phòng Kế Toán",
    type: "Toàn thời gian",
    salary: "8 - 12 Triệu",
    deadline: "20/06/2024",
    description: `
      <ul class="list-disc pl-5 space-y-2 text-gray-600">
        <li>Tiếp nhận và xử lý đơn đặt hàng từ bộ phận kinh doanh.</li>
        <li>Lập phiếu xuất kho, hóa đơn bán hàng.</li>
        <li>Theo dõi công nợ khách hàng, đối chiếu số liệu với thủ kho và sales.</li>
        <li>Làm báo cáo doanh số hàng ngày/tuần/tháng.</li>
      </ul>
    `,
    requirements: `
      <ul class="list-disc pl-5 space-y-2 text-gray-600">
        <li>Tốt nghiệp Cao đẳng/Đại học chuyên ngành Kế toán.</li>
        <li>Thành thạo tin học văn phòng (Excel) và phần mềm kế toán (Misa/Fast).</li>
        <li>Cẩn thận, trung thực và có trách nhiệm trong công việc.</li>
        <li>Ưu tiên ứng viên có kinh nghiệm kế toán bán hàng.</li>
      </ul>
    `,
    benefits: `
      <ul class="list-disc pl-5 space-y-2 text-gray-600">
        <li>Làm việc giờ hành chính (nghỉ chiều Thứ 7 & Chủ nhật).</li>
        <li>Đóng BHXH, BHYT đầy đủ theo quy định.</li>
        <li>Thưởng lễ, tết, lương tháng 13.</li>
        <li>Môi trường làm việc ổn định, thân thiện.</li>
      </ul>
    `
  },
  {
    id: 4,
    title: "Quản lý Kho vận",
    location: "Bình Dương",
    department: "Phòng Logistics",
    type: "Toàn thời gian",
    salary: "15 - 20 Triệu",
    deadline: "10/06/2024",
    description: `
      <ul class="list-disc pl-5 space-y-2 text-gray-600">
        <li>Quản lý, điều hành toàn bộ hoạt động của kho hàng (Nhập - Xuất - Tồn).</li>
        <li>Sắp xếp hàng hóa khoa học, đảm bảo quy định PCCC và an toàn kho bãi.</li>
        <li>Quản lý đội ngũ nhân viên kho, lái xe, bốc xếp.</li>
        <li>Phối hợp với các đơn vị vận chuyển để đảm bảo tiến độ giao hàng.</li>
      </ul>
    `,
    requirements: `
      <ul class="list-disc pl-5 space-y-2 text-gray-600">
        <li>Nam, tuổi từ 28-40. Tốt nghiệp Cao đẳng trở lên.</li>
        <li>Có kinh nghiệm quản lý kho vận quy mô >1000m2 ít nhất 2 năm.</li>
        <li>Có kỹ năng lãnh đạo, tổ chức và giải quyết vấn đề.</li>
        <li>Sử dụng tốt các phần mềm quản lý kho.</li>
      </ul>
    `,
    benefits: `
      <ul class="list-disc pl-5 space-y-2 text-gray-600">
        <li>Lương cạnh tranh + Phụ cấp trách nhiệm.</li>
        <li>Thưởng hiệu suất hoạt động kho.</li>
        <li>Được đóng bảo hiểm tai nạn 24/24.</li>
        <li>Cơ hội thăng tiến lên Giám đốc Logistics vùng.</li>
      </ul>
    `
  }
];

export const CONTACT_INFO = {
  address: "Số 11 - Liền kề 9 - KĐT mới Phú Lương - Phường Phú La - Quận Hà Đông - Thành phố Hà Nội",
  phone: "0969 153 015",
  email: "lyhu.vn@gmail.com",
  slogan: "Kết nối chân thành - Hợp tác bền vững",
  logoUrl: "https://drive.google.com/thumbnail?id=1lk2nE64HUTXpX1KCxHj2vEAsMDU8L9NG&sz=w1000", // Updated Correct ID
  facebook: "https://www.facebook.com/lyhu.vn",
  zalo: "https://zalo.me/0969153015"
};

export const APP_FEATURES = [
  { title: 'Đặt hàng nhanh chóng', desc: 'Tìm kiếm và đặt hàng chỉ trong 30 giây.', icon: Zap },
  { title: 'Theo dõi đơn hàng', desc: 'Cập nhật trạng thái đơn hàng theo thời gian thực.', icon: Truck },
  { title: 'Tích điểm đổi quà', desc: 'Nhận xu tích lũy cho mỗi đơn hàng thành công.', icon: Gift },
  { title: 'Ưu đãi độc quyền', desc: 'Voucher giảm giá chỉ dành riêng cho khách hàng App.', icon: Tag }
];

export const APP_STEPS = [
  { step: '01', title: 'Tải App LYHU', desc: 'Tìm "LYHU" trên App Store hoặc Google Play.', icon: Download },
  { step: '02', title: 'Đăng ký tài khoản', desc: 'Nhập số điện thoại để tạo tài khoản thành viên.', icon: UserPlus },
  { step: '03', title: 'Chọn sản phẩm', desc: 'Thêm sản phẩm yêu thích vào giỏ hàng.', icon: ShoppingCart },
  { step: '04', title: 'Đặt hàng & Nhận quà', desc: 'Chọn mã giảm giá và hoàn tất đơn hàng.', icon: Gift }
];

export const CHATBOT_FAQS = [
    { q: "Tôi muốn đăng ký làm đại lý?", a: "Chào bạn, để đăng ký làm đại lý, bạn vui lòng điền thông tin vào form 'Đăng ký Đối tác' trên trang Liên hệ hoặc gọi Hotline 0969 153 015 để được tư vấn trực tiếp ạ." },
    { q: "Chính sách chiết khấu thế nào?", a: "LYHU có chính sách chiết khấu hấp dẫn tùy theo cấp bậc đại lý và doanh số. Bạn vui lòng để lại Email/Zalo để chúng tôi gửi bảng chính sách chi tiết nhé." },
    { q: "Sản phẩm có giấy tờ đầy đủ không?", a: "Dạ có ạ. Tất cả sản phẩm của LYHU (BOYO, UHi, CVT, ABI) đều có đầy đủ giấy tờ công bố chất lượng, hóa đơn VAT và chứng từ nhập khẩu (với hàng ngoại)." },
    { q: "Thời gian giao hàng bao lâu?", a: "Thời gian giao hàng thông thường là 1-2 ngày (Nội thành) và 3-5 ngày (Tỉnh). LYHU hỗ trợ miễn phí vận chuyển cho đơn hàng đạt giá trị tối thiểu." },
    { q: "Văn phòng công ty ở đâu?", a: "Văn phòng LYHU tại: Số 11 - Liền kề 9 - KĐT mới Phú Lương - Phường Phú La - Quận Hà Đông - Hà Nội." }
];
