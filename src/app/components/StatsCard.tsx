import { motion } from "motion/react";
import { LucideIcon } from "lucide-react";

interface StatsCardProps {
  title: string;
  value: number;
  icon: LucideIcon;
  color: string;
  delay: number;
}

export function StatsCard({ title, value, icon: Icon, color, delay }: StatsCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.5 }}
      whileHover={{ scale: 1.03, y: -5 }}
      className="relative overflow-hidden rounded-xl p-6 bg-black border cursor-pointer transition-all"
      style={{ borderColor: `${color}40`, boxShadow: `0 0 20px ${color}20` }}
    >
      <div className="flex items-center justify-between mb-4">
        <div 
          className="p-3 rounded-xl border"
          style={{ backgroundColor: `${color}20`, borderColor: `${color}40` }}
        >
          <Icon size={24} style={{ color }} />
        </div>
        <motion.div
          animate={{ scale: [1, 1.3, 1], opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-2 h-2 rounded-full"
          style={{ backgroundColor: color, boxShadow: `0 0 10px ${color}` }}
        />
      </div>
      <p className="text-gray-400 text-sm mb-1">{title}</p>
      <p className="text-4xl font-bold text-white">{value}</p>
      
      <motion.div
        className="absolute inset-0 opacity-0 hover:opacity-10 transition-opacity"
        style={{ backgroundColor: color }}
      />
    </motion.div>
  );
}