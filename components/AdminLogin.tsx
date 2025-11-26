
import React, { useState } from 'react';
import { User, Lock, ArrowRight, ShieldCheck, AlertCircle } from 'lucide-react';
import { CONTACT_INFO } from '../constants';

interface AdminLoginProps {
  onLogin: () => void;
}

const AdminLogin: React.FC<AdminLoginProps> = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    // Simulate API Call
    setTimeout(() => {
      // Hardcoded Credentials for Demo
      if (username === 'admin' && password === 'lyhu@2024') {
        onLogin();
      } else {
        setError('Tài khoản hoặc mật khẩu không chính xác!');
        setIsLoading(false);
      }
    }, 1000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 relative overflow-hidden py-20">
      {/* Background Decor */}
      <div className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] bg-lyhu-teal/10 rounded-full blur-[100px] animate-pulse-slow"></div>
      <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-lyhu-green/10 rounded-full blur-[100px]"></div>

      <div className="w-full max-w-md p-8 relative z-10">
        <div className="bg-white rounded-[2.5rem] shadow-2xl p-10 border border-gray-100 text-center">
          
          {/* Logo */}
          <div className="flex justify-center mb-8">
             <div className="w-20 h-20 bg-gray-50 rounded-[2rem] flex items-center justify-center shadow-inner">
                <img src={CONTACT_INFO.logoUrl} alt="LYHU Logo" className="w-16 object-contain" />
             </div>
          </div>

          <h2 className="text-2xl font-black text-gray-900 mb-2">Quản Trị Viên</h2>
          <p className="text-gray-500 text-sm mb-8 font-medium">Đăng nhập để truy cập hệ thống quản lý LYHU</p>

          <form onSubmit={handleSubmit} className="space-y-5 text-left">
            
            {error && (
              <div className="p-3 bg-red-50 text-red-600 text-xs font-bold rounded-xl flex items-center gap-2 animate-in fade-in slide-in-from-top-2">
                <AlertCircle size={16} /> {error}
              </div>
            )}

            <div className="space-y-1.5">
              <label className="text-xs font-bold text-gray-500 uppercase tracking-wide ml-2">Tài khoản</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <User size={18} className="text-lyhu-teal" />
                </div>
                <input
                  type="text"
                  required
                  className="w-full pl-12 pr-4 py-4 bg-gray-50 border border-gray-200 rounded-2xl text-sm font-bold text-gray-900 focus:ring-2 focus:ring-lyhu-teal/20 focus:border-lyhu-teal outline-none transition-all"
                  placeholder="Nhập tên tài khoản"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-bold text-gray-500 uppercase tracking-wide ml-2">Mật khẩu</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Lock size={18} className="text-lyhu-teal" />
                </div>
                <input
                  type="password"
                  required
                  className="w-full pl-12 pr-4 py-4 bg-gray-50 border border-gray-200 rounded-2xl text-sm font-bold text-gray-900 focus:ring-2 focus:ring-lyhu-teal/20 focus:border-lyhu-teal outline-none transition-all"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full py-4 bg-lyhu-teal hover:bg-lyhu-teal-deep text-white font-bold rounded-2xl shadow-lg shadow-lyhu-teal/30 transition-all transform hover:-translate-y-1 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed mt-4"
            >
              {isLoading ? (
                <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
              ) : (
                <>
                  Đăng nhập <ArrowRight size={20} />
                </>
              )}
            </button>
          </form>

          <div className="mt-8 pt-6 border-t border-gray-50 flex items-center justify-center gap-2 text-xs text-gray-400 font-medium">
             <ShieldCheck size={14} /> Secured System v1.0
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
