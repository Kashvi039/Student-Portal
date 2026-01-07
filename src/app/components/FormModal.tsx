import { motion, AnimatePresence } from "motion/react";
import { X } from "lucide-react";

interface FormModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
}

export function FormModal({ isOpen, onClose, title }: FormModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-40"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="fixed inset-4 md:inset-10 bg-black border border-cyan-500/30 rounded-3xl shadow-2xl shadow-cyan-500/20 z-50 overflow-hidden"
          >
            <div className="h-full flex flex-col">
              <div className="bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 p-6 flex items-center justify-between">
                <h2 className="text-2xl font-bold text-white">{title}</h2>
                <motion.button
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={onClose}
                  className="p-2 bg-white/20 rounded-xl backdrop-blur-sm hover:bg-white/30 transition-all text-white"
                >
                  <X size={24} />
                </motion.button>
              </div>
              <div className="flex-1 overflow-auto p-6 bg-black">
                <iframe
                  src="https://docs.google.com/forms/d/e/1FAIpQLScuO2AFD7SKj_dBciIhOm_FPkAULoVezfDhKyUC-1BAjmDhgQ/viewform?embedded=true"
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  marginHeight={0}
                  marginWidth={0}
                  className="rounded-xl"
                >
                  Loading…
                </iframe>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}