import { motion } from "motion/react";
import { GraduationCap, Bell, Settings, User } from "lucide-react";

export function Header() {
  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, type: "spring" }}
      className="relative bg-black text-white shadow-2xl border-b border-cyan-500/30"
    >
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-6">
        <div className="flex items-center justify-between">
          <motion.div 
            className="flex items-center gap-3"
            whileHover={{ scale: 1.02 }}
          >
            <motion.div
              className="p-3 bg-gradient-to-br from-cyan-500 via-blue-500 to-purple-500 rounded-xl shadow-lg shadow-cyan-500/50"
              whileHover={{ rotate: 5 }}
              transition={{ duration: 0.3 }}
            >
              <GraduationCap size={32} className="text-white" />
            </motion.div>
            <div>
              <h1 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">Student Portal</h1>
              <p className="text-sm text-gray-400">Admin Dashboard</p>
            </div>
          </motion.div>
          
          <div className="flex items-center gap-4">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="p-3 bg-gray-900 border border-gray-800 rounded-xl hover:border-cyan-500/50 transition-all relative"
            >
              <Bell size={20} className="text-gray-400" />
              <span className="absolute top-2 right-2 w-2 h-2 bg-cyan-500 rounded-full animate-pulse shadow-lg shadow-cyan-500/50" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="p-3 bg-gray-900 border border-gray-800 rounded-xl hover:border-cyan-500/50 transition-all"
            >
              <Settings size={20} className="text-gray-400" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="p-3 bg-gradient-to-br from-cyan-500 to-purple-500 rounded-xl shadow-lg shadow-cyan-500/30"
            >
              <User size={20} className="text-white" />
            </motion.button>
          </div>
        </div>
      </div>
      
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500"
        animate={{
          backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "linear",
        }}
        style={{ backgroundSize: "200% 100%" }}
      />
    </motion.header>
  );
}