
import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Bot, User } from 'lucide-react';
import { CHATBOT_FAQS } from '../constants';

const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{type: 'bot' | 'user', text: string}[]>([
      { type: 'bot', text: 'Xin chào! Tôi là trợ lý ảo LYHU. Tôi có thể giúp gì cho bạn hôm nay?' }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Scroll to bottom when messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  const handleSendMessage = (text: string) => {
      if (!text.trim()) return;

      // Add User Message
      setMessages(prev => [...prev, { type: 'user', text }]);
      setInputValue('');
      setIsTyping(true);

      // Simulate Bot Response
      setTimeout(() => {
          const lowerText = text.toLowerCase();
          let botReply = "Cảm ơn bạn đã quan tâm. Hiện tại nhân viên tư vấn đang bận, vui lòng để lại Số điện thoại, chúng tôi sẽ liên hệ lại ngay ạ.";

          // Simple keyword matching
          if (lowerText.includes('đại lý') || lowerText.includes('sỉ')) {
              botReply = CHATBOT_FAQS[0].a;
          } else if (lowerText.includes('chiết khấu') || lowerText.includes('giá')) {
              botReply = CHATBOT_FAQS[1].a;
          } else if (lowerText.includes('giấy tờ') || lowerText.includes('chất lượng')) {
              botReply = CHATBOT_FAQS[2].a;
          } else if (lowerText.includes('giao hàng') || lowerText.includes('ship')) {
              botReply = CHATBOT_FAQS[3].a;
          } else if (lowerText.includes('địa chỉ') || lowerText.includes('ở đâu')) {
              botReply = CHATBOT_FAQS[4].a;
          }

          setMessages(prev => [...prev, { type: 'bot', text: botReply }]);
          setIsTyping(false);
      }, 1000);
  };

  const handleFAQClick = (faq: typeof CHATBOT_FAQS[0]) => {
      handleSendMessage(faq.q);
  };

  return (
    <div className="fixed bottom-6 right-6 z-[80]">
        {/* Chat Window */}
        {isOpen && (
            <div className="absolute bottom-16 right-0 w-80 md:w-96 bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden flex flex-col animate-in slide-in-from-bottom-5 duration-300 origin-bottom-right h-[500px]">
                {/* Header */}
                <div className="bg-[#04ACA9] p-4 flex items-center justify-between text-white">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                            <Bot size={24} />
                        </div>
                        <div>
                            <h3 className="font-bold text-sm">CSKH LYHU</h3>
                            <span className="text-[10px] flex items-center gap-1 opacity-90">
                                <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse"></div> Online
                            </span>
                        </div>
                    </div>
                    <button onClick={() => setIsOpen(false)} className="p-1 hover:bg-white/20 rounded-full transition-colors">
                        <X size={20} />
                    </button>
                </div>

                {/* Messages Area */}
                <div className="flex-grow overflow-y-auto p-4 bg-gray-50 space-y-4 custom-scrollbar">
                    {messages.map((msg, idx) => (
                        <div key={idx} className={`flex items-start gap-2 ${msg.type === 'user' ? 'flex-row-reverse' : ''}`}>
                            <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${msg.type === 'bot' ? 'bg-[#04ACA9] text-white' : 'bg-gray-300 text-gray-600'}`}>
                                {msg.type === 'bot' ? <Bot size={16} /> : <User size={16} />}
                            </div>
                            <div className={`max-w-[75%] p-3 rounded-2xl text-sm leading-relaxed ${msg.type === 'bot' ? 'bg-white text-gray-800 shadow-sm rounded-tl-none' : 'bg-[#04ACA9] text-white rounded-tr-none shadow-sm'}`}>
                                {msg.text}
                            </div>
                        </div>
                    ))}
                    
                    {isTyping && (
                        <div className="flex items-start gap-2">
                             <div className="w-8 h-8 rounded-full bg-[#04ACA9] text-white flex items-center justify-center shrink-0">
                                <Bot size={16} />
                            </div>
                            <div className="bg-white p-3 rounded-2xl rounded-tl-none shadow-sm flex gap-1">
                                <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce"></div>
                                <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce delay-100"></div>
                                <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce delay-200"></div>
                            </div>
                        </div>
                    )}
                    <div ref={messagesEndRef} />
                </div>

                {/* FAQ Suggestions (Only show if not typing) */}
                {!isTyping && messages.length < 4 && (
                    <div className="px-4 pb-2 flex gap-2 overflow-x-auto no-scrollbar">
                        {CHATBOT_FAQS.slice(0, 3).map((faq, idx) => (
                            <button 
                                key={idx}
                                onClick={() => handleFAQClick(faq)}
                                className="whitespace-nowrap px-3 py-1.5 bg-white border border-[#04ACA9]/30 text-[#04ACA9] rounded-full text-xs font-medium hover:bg-[#04ACA9] hover:text-white transition-colors flex-shrink-0"
                            >
                                {faq.q}
                            </button>
                        ))}
                    </div>
                )}

                {/* Input Area */}
                <div className="p-3 bg-white border-t border-gray-100">
                    <form 
                        onSubmit={(e) => { e.preventDefault(); handleSendMessage(inputValue); }}
                        className="flex items-center gap-2"
                    >
                        <input 
                            type="text" 
                            placeholder="Nhập câu hỏi..." 
                            className="flex-grow px-4 py-2.5 bg-gray-100 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-[#04ACA9]/20"
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)}
                        />
                        <button 
                            type="submit" 
                            disabled={!inputValue.trim()}
                            className="p-2.5 bg-[#04ACA9] text-white rounded-full hover:bg-[#038C89] disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                        >
                            <Send size={18} />
                        </button>
                    </form>
                </div>
            </div>
        )}

        {/* Toggle Button */}
        <button 
            onClick={() => setIsOpen(!isOpen)}
            className={`w-14 h-14 rounded-full shadow-xl flex items-center justify-center transition-all hover:scale-110 ${isOpen ? 'bg-gray-800 text-white' : 'bg-[#04ACA9] text-white animate-bounce-slow'}`}
        >
            {isOpen ? <X size={24} /> : <MessageCircle size={28} />}
        </button>
    </div>
  );
};

export default Chatbot;
