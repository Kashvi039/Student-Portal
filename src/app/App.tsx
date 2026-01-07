import { useState } from "react";
import { motion } from "motion/react";
import { FileText, MessageSquare, TrendingUp, Users, CheckCircle, Clock } from "lucide-react";
import { Header } from "./components/Header";
import { StatsCard } from "./components/StatsCard";
import { FormModal } from "./components/FormModal";
import { MessageCenter } from "./components/MessageCenter";
import { FloatingParticles } from "./components/FloatingParticles";
import { Toaster } from "./components/ui/sonner";

export default function App() {
  const [formModalOpen, setFormModalOpen] = useState(false);
  const [messageCenterOpen, setMessageCenterOpen] = useState(false);

  const stats = [
    {
      title: "Total Requests",
      value: 156,
      icon: FileText,
      color: "#06b6d4",
      delay: 0.1,
    },
    {
      title: "Pending Approvals",
      value: 23,
      icon: Clock,
      color: "#f59e0b",
      delay: 0.2,
    },
    {
      title: "Active Students",
      value: 342,
      icon: Users,
      color: "#3b82f6",
      delay: 0.3,
    },
    {
      title: "Completed",
      value: 133,
      icon: CheckCircle,
      color: "#10b981",
      delay: 0.4,
    },
  ];

  return (
    <div className="min-h-screen bg-black">
      <FloatingParticles />
      <Toaster position="top-right" />
      
      <div className="relative z-10">
        <Header />
        
        <main className="max-w-7xl mx-auto px-6 py-12">
          {/* Welcome Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="mb-12 text-center"
          >
            <motion.h2
              className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              Welcome to Student Services
            </motion.h2>
            <motion.p
              className="text-gray-400 text-lg max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              Manage all your student requests efficiently with our AI-powered platform
            </motion.p>
          </motion.div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {stats.map((stat) => (
              <StatsCard key={stat.title} {...stat} />
            ))}
          </div>

          {/* Main Action Cards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto"
          >
            {/* Submit Form Card */}
            <motion.div
              whileHover={{ scale: 1.03, y: -8 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setFormModalOpen(true)}
              className="relative group cursor-pointer"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-2xl blur-2xl opacity-30 group-hover:opacity-50 transition-all" />
              <div className="relative bg-black rounded-2xl p-8 shadow-2xl border border-cyan-500/30 overflow-hidden hover:border-cyan-500/50 transition-all">
                <motion.div
                  className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-full blur-3xl opacity-20"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.2, 0.4, 0.2],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
                <div className="relative z-10">
                  <motion.div
                    className="inline-block p-5 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-2xl mb-6 shadow-lg shadow-cyan-500/50"
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  >
                    <FileText size={40} className="text-white" />
                  </motion.div>
                  <h3 className="text-2xl font-bold mb-3 text-white">Submit Request</h3>
                  <p className="text-gray-400 mb-6">
                    Submit bonafide certificates, leave applications, complaints, or general queries through our integrated form system.
                  </p>
                  <motion.div
                    className="inline-flex items-center gap-2 text-cyan-400 font-semibold"
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    Submit Now
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </motion.div>
                </div>
              </div>
            </motion.div>

            {/* Message Center Card */}
            <motion.div
              whileHover={{ scale: 1.03, y: -8 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setMessageCenterOpen(true)}
              className="relative group cursor-pointer"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl blur-2xl opacity-30 group-hover:opacity-50 transition-all" />
              <div className="relative bg-black rounded-2xl p-8 shadow-2xl border border-purple-500/30 overflow-hidden hover:border-purple-500/50 transition-all">
                <motion.div
                  className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full blur-3xl opacity-20"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.2, 0.4, 0.2],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.5,
                  }}
                />
                <div className="relative z-10">
                  <motion.div
                    className="inline-block p-5 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl mb-6 shadow-lg shadow-purple-500/50 relative"
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  >
                    <MessageSquare size={40} className="text-white" />
                    <motion.span
                      className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-black shadow-lg shadow-green-500/50"
                      animate={{ scale: [1, 1.3, 1] }}
                      transition={{ duration: 1, repeat: Infinity }}
                    />
                  </motion.div>
                  <h3 className="text-2xl font-bold mb-3 text-white">AI Message Center</h3>
                  <p className="text-gray-400 mb-6">
                    Get instant AI-powered support. Ask about bonafide certificates, leave applications, complaints, or any queries - get smart contextual responses.
                  </p>
                  <motion.div
                    className="inline-flex items-center gap-2 text-purple-400 font-semibold"
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    Start Chat
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Features Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.5 }}
            className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            <motion.div 
              className="bg-black border border-cyan-500/30 rounded-xl p-6 shadow-xl hover:border-cyan-500/50 transition-all"
              whileHover={{ scale: 1.02 }}
            >
              <div className="w-12 h-12 bg-cyan-500/20 border border-cyan-500/40 rounded-lg flex items-center justify-center mb-4">
                <CheckCircle size={24} className="text-cyan-400" />
              </div>
              <h4 className="text-lg font-bold mb-2 text-white">Quick Approval</h4>
              <p className="text-gray-400 text-sm">
                Fast-track approval process for bonafide certificates and leave applications
              </p>
            </motion.div>

            <motion.div 
              className="bg-black border border-blue-500/30 rounded-xl p-6 shadow-xl hover:border-blue-500/50 transition-all"
              whileHover={{ scale: 1.02 }}
            >
              <div className="w-12 h-12 bg-blue-500/20 border border-blue-500/40 rounded-lg flex items-center justify-center mb-4">
                <TrendingUp size={24} className="text-blue-400" />
              </div>
              <h4 className="text-lg font-bold mb-2 text-white">Real-time Updates</h4>
              <p className="text-gray-400 text-sm">
                Get instant notifications on your request status and administrative responses
              </p>
            </motion.div>

            <motion.div 
              className="bg-black border border-purple-500/30 rounded-xl p-6 shadow-xl hover:border-purple-500/50 transition-all"
              whileHover={{ scale: 1.02 }}
            >
              <div className="w-12 h-12 bg-purple-500/20 border border-purple-500/40 rounded-lg flex items-center justify-center mb-4">
                <MessageSquare size={24} className="text-purple-400" />
              </div>
              <h4 className="text-lg font-bold mb-2 text-white">AI-Powered Support</h4>
              <p className="text-gray-400 text-sm">
                24/7 intelligent assistance through our context-aware AI messaging system
              </p>
            </motion.div>
          </motion.div>
        </main>

        {/* Floating Action Buttons */}
        <div className="fixed bottom-8 right-8 flex flex-col gap-4 z-30">
          <motion.button
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 1, type: "spring" }}
            whileHover={{ scale: 1.15 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setMessageCenterOpen(true)}
            className="p-5 bg-gradient-to-br from-blue-500 to-purple-500 text-white rounded-full shadow-2xl shadow-purple-500/50 hover:shadow-purple-500/70 relative"
          >
            <MessageSquare size={28} />
            <motion.span
              className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-black shadow-lg shadow-green-500/50"
              animate={{ scale: [1, 1.3, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          </motion.button>

          <motion.button
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 1.2, type: "spring" }}
            whileHover={{ scale: 1.15 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setFormModalOpen(true)}
            className="p-5 bg-gradient-to-br from-cyan-500 to-blue-500 text-white rounded-full shadow-2xl shadow-cyan-500/50 hover:shadow-cyan-500/70"
          >
            <FileText size={28} />
          </motion.button>
        </div>
      </div>

      {/* Form Modal */}
      <FormModal
        isOpen={formModalOpen}
        onClose={() => setFormModalOpen(false)}
        title="Submit Your Request"
      />

      {/* Message Center */}
      <MessageCenter
        isOpen={messageCenterOpen}
        onClose={() => setMessageCenterOpen(false)}
      />
    </div>
  );
}
