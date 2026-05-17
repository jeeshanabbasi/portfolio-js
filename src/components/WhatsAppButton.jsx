import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import { MessageCircle, X } from 'lucide-react';

export default function WhatsAppButton() {
  const [showTooltip, setShowTooltip] = useState(false);
  const phoneNumber = '918079024831'; // India +91
  const message = "Hi Jeeshan! I saw your portfolio and I'd like to connect with you.";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <div className="fixed bottom-24 right-5 z-[998] flex flex-col items-end gap-3">
      {/* Tooltip message bubble */}
      <AnimatePresence>
        {showTooltip && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 10 }}
            className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-xl rounded-2xl p-3 pr-4 max-w-[200px] text-right"
          >
            <p className="text-slate-700 dark:text-slate-200 text-xs font-medium leading-relaxed">
              👋 Hi! Need help or want to collaborate?
            </p>
            <p className="text-green-600 dark:text-green-400 text-xs font-semibold mt-1">
              Chat on WhatsApp →
            </p>
            {/* Tooltip arrow */}
            <div className="absolute -bottom-2 right-5 w-4 h-4 bg-white dark:bg-slate-800 border-r border-b border-slate-200 dark:border-slate-700 rotate-45" />
          </motion.div>
        )}
      </AnimatePresence>

      {/* WhatsApp Button */}
      <motion.a
        href={whatsappUrl}
        target="_blank"
        rel="noreferrer"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 2, type: 'spring', stiffness: 200 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        className="relative w-14 h-14 rounded-full flex items-center justify-center shadow-[0_8px_30px_rgba(37,211,102,0.4)] hover:shadow-[0_8px_40px_rgba(37,211,102,0.6)] transition-all duration-300"
        style={{ background: 'linear-gradient(135deg, #25D366, #128C7E)' }}
        aria-label="Chat on WhatsApp"
      >
        {/* Ping animation */}
        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-25" />
        <FaWhatsapp size={28} className="text-white relative z-10" />
      </motion.a>
    </div>
  );
}
