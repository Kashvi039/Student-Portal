import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, Send, User, Bot, Sparkles } from "lucide-react";
import { toast } from "sonner";

interface Message {
  id: number;
  text: string;
  sender: "user" | "admin";
  timestamp: string;
}

interface MessageCenterProps {
  isOpen: boolean;
  onClose: () => void;
}

const initialMessages: Message[] = [
  {
    id: 1,
    text: "Welcome to the Student Support Center! How can I assist you today?",
    sender: "admin",
    timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
  },
];

// Smart response function that understands context
const getSmartResponse = (userMessage: string): string => {
  const message = userMessage.toLowerCase();
  
  // Bonafide certificate queries
  if (message.includes('bonafide') || message.includes('certificate')) {
    return "I can help you with bonafide certificate requests! To apply for a bonafide certificate, please use the 'Submit Request' form. You'll need to provide your student ID, purpose of certificate, and any supporting documents. The processing time is typically 2-3 business days. Is there anything specific you'd like to know?";
  }
  
  // Leave application queries
  if (message.includes('leave') || message.includes('absent') || message.includes('permission')) {
    return "For leave applications, please submit a formal request through our 'Submit Request' form. Make sure to include the dates, reason for leave, and any medical documents if applicable. Leave requests are typically approved within 24 hours. Would you like to know more about the leave policy?";
  }
  
  // Complaint queries
  if (message.includes('complaint') || message.includes('issue') || message.includes('problem')) {
    return "I'm sorry to hear you're facing an issue. Please submit a detailed complaint through our form, and our admin team will address it within 24 hours. You can also describe your issue here, and I'll do my best to assist you immediately. What seems to be the problem?";
  }
  
  // Status queries
  if (message.includes('status') || message.includes('track') || message.includes('pending')) {
    return "To check the status of your request, you can log in to your student portal with your credentials. All pending requests are shown in your dashboard. If you've submitted a request recently, it typically takes 1-3 business days for processing. Would you like me to help you with anything else?";
  }
  
  // Documents queries
  if (message.includes('document') || message.includes('upload') || message.includes('submit')) {
    return "For document submissions, please ensure all files are in PDF or JPG format, under 5MB each. You can upload them through the 'Submit Request' form. Required documents usually include ID proof, purpose letter, and any supporting documents. Do you need help with a specific document?";
  }
  
  // Timing/hours queries
  if (message.includes('time') || message.includes('hours') || message.includes('when') || message.includes('office')) {
    return "Our admin office is open Monday to Friday, 9:00 AM to 5:00 PM. However, you can submit requests through our online portal 24/7. Urgent queries will be addressed within 24 hours. The message center is available round the clock for your convenience!";
  }
  
  // Fee/payment queries
  if (message.includes('fee') || message.includes('payment') || message.includes('cost') || message.includes('charge')) {
    return "Most student services like bonafide certificates and leave applications are provided free of charge. Some specialized certificates may have nominal fees, which will be communicated during the application process. You can make payments through our online payment portal. Need details about a specific service?";
  }
  
  // Contact/help queries
  if (message.includes('contact') || message.includes('email') || message.includes('phone') || message.includes('reach')) {
    return "You can reach us at: Email: admin@studentportal.edu | Phone: +91-XXXX-XXXX | Office Hours: Mon-Fri, 9 AM - 5 PM. For urgent matters, please use this message center or submit a priority request through the form. How else can I help you?";
  }
  
  // Greeting responses
  if (message.includes('hi') || message.includes('hello') || message.includes('hey')) {
    return "Hello! I'm here to help you with all your student service needs. You can ask me about bonafide certificates, leave applications, complaints, or any other queries. What can I assist you with today?";
  }
  
  // Thanks responses
  if (message.includes('thank') || message.includes('thanks')) {
    return "You're very welcome! I'm always here to help. If you have any other questions or need assistance in the future, don't hesitate to reach out. Have a great day!";
  }
  
  // General/default response with helpful suggestions
  return "I understand you need assistance. I can help you with:\n\n📋 Bonafide Certificates\n📅 Leave Applications\n💬 Complaints & Issues\n📄 Document Submissions\n⏰ Office Hours & Contact Info\n\nPlease let me know which service you need help with, or feel free to submit your request directly through the 'Submit Request' form. What would you like to know more about?";
};

export function MessageCenter({ isOpen, onClose }: MessageCenterProps) {
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const handleSend = () => {
    if (!inputValue.trim()) return;

    const newMessage: Message = {
      id: messages.length + 1,
      text: inputValue,
      sender: "user",
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages([...messages, newMessage]);
    const userMessageText = inputValue;
    setInputValue("");
    setIsTyping(true);

    // Simulate admin response with smart context understanding
    setTimeout(() => {
      const adminResponse: Message = {
        id: messages.length + 2,
        text: getSmartResponse(userMessageText),
        sender: "admin",
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };

      setMessages((prev) => [...prev, adminResponse]);
      setIsTyping(false);
      toast.success("Message sent successfully!");
    }, 1500);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/70 backdrop-blur-sm z-40"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: 20 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            exit={{ opacity: 0, scale: 0.9, x: 20 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="fixed right-4 bottom-4 top-4 w-full max-w-md bg-black border border-cyan-500/30 rounded-2xl shadow-2xl shadow-cyan-500/20 z-50 flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-white/20 rounded-lg backdrop-blur-sm">
                  <Sparkles size={20} className="text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">AI Message Center</h3>
                  <p className="text-xs text-white/80">Smart Assistant Online</p>
                </div>
              </div>
              <motion.button
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
                onClick={onClose}
                className="p-2 bg-white/20 rounded-lg backdrop-blur-sm hover:bg-white/30 transition-all text-white"
              >
                <X size={20} />
              </motion.button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-black">
              <AnimatePresence>
                {messages.map((message) => (
                  <motion.div
                    key={message.id}
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 0.3 }}
                    className={`flex gap-3 ${
                      message.sender === "user" ? "flex-row-reverse" : "flex-row"
                    }`}
                  >
                    <div
                      className={`p-2 rounded-full ${
                        message.sender === "user"
                          ? "bg-cyan-500/20 border border-cyan-500/50"
                          : "bg-purple-500/20 border border-purple-500/50"
                      }`}
                    >
                      {message.sender === "user" ? (
                        <User size={20} className="text-cyan-400" />
                      ) : (
                        <Bot size={20} className="text-purple-400" />
                      )}
                    </div>
                    <div
                      className={`max-w-[70%] ${
                        message.sender === "user" ? "items-end" : "items-start"
                      }`}
                    >
                      <div
                        className={`rounded-2xl p-3 ${
                          message.sender === "user"
                            ? "bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-tr-none shadow-lg shadow-cyan-500/20"
                            : "bg-gray-900 border border-gray-800 text-gray-100 rounded-tl-none shadow-lg"
                        }`}
                      >
                        <p className="text-sm whitespace-pre-line">{message.text}</p>
                      </div>
                      <p className="text-xs text-gray-500 mt-1 px-1">
                        {message.timestamp}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>

              {isTyping && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex gap-3"
                >
                  <div className="p-2 rounded-full bg-purple-500/20 border border-purple-500/50">
                    <Bot size={20} className="text-purple-400" />
                  </div>
                  <div className="bg-gray-900 border border-gray-800 rounded-2xl rounded-tl-none p-3 shadow-lg">
                    <div className="flex gap-1">
                      <motion.div
                        className="w-2 h-2 bg-purple-400 rounded-full"
                        animate={{ y: [0, -5, 0] }}
                        transition={{ duration: 0.6, repeat: Infinity, delay: 0 }}
                      />
                      <motion.div
                        className="w-2 h-2 bg-cyan-400 rounded-full"
                        animate={{ y: [0, -5, 0] }}
                        transition={{ duration: 0.6, repeat: Infinity, delay: 0.2 }}
                      />
                      <motion.div
                        className="w-2 h-2 bg-blue-400 rounded-full"
                        animate={{ y: [0, -5, 0] }}
                        transition={{ duration: 0.6, repeat: Infinity, delay: 0.4 }}
                      />
                    </div>
                  </div>
                </motion.div>
              )}
            </div>

            {/* Input */}
            <div className="p-4 bg-black border-t border-gray-800">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Type your message..."
                  className="flex-1 px-4 py-3 bg-gray-900 border border-gray-800 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none text-white placeholder-gray-500"
                />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleSend}
                  disabled={!inputValue.trim()}
                  className="px-4 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-xl font-medium disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-lg hover:shadow-cyan-500/20 transition-all"
                >
                  <Send size={20} />
                </motion.button>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}