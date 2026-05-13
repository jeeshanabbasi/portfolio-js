import { motion } from 'framer-motion';
import { Quote, Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Rajesh Kumar',
    role: 'Startup Founder',
    message: 'Jeeshan delivered a stunning service booking platform with a clean, modern UI. His attention to detail and commitment to quality exceeded my expectations. Highly recommended!',
    rating: 5,
    avatar: 'RK',
    color: 'from-cyan-500 to-blue-600',
  },
  {
    name: 'Priya Sharma',
    role: 'Small Business Owner',
    message: 'The Print Point website Jeeshan built for us was exactly what we needed. Responsive, beautiful, and fast. Communication was smooth throughout the project.',
    rating: 5,
    avatar: 'PS',
    color: 'from-purple-500 to-pink-600',
  },
  {
    name: 'Amit Verma',
    role: 'Project Manager',
    message: 'Working with Jeeshan on our task management tool was a great experience. He has solid React and Node.js skills and delivers clean, well-structured code on time.',
    rating: 5,
    avatar: 'AV',
    color: 'from-emerald-500 to-teal-600',
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 relative">
      <div className="w-full max-w-[1920px] mx-auto px-6 md:px-12 relative z-10">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            Client <span className="text-cyan-400">Reviews</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto rounded-full"></div>
          <p className="mt-6 text-slate-600 dark:text-slate-400 max-w-lg mx-auto">
            What people say about working with me and the projects we've built together.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="group relative"
            >
              <div className="h-full bg-white/80 dark:bg-slate-800/50 backdrop-blur-lg border border-slate-200 dark:border-slate-700/50 shadow-md rounded-2xl p-8 hover:border-cyan-400/50 dark:hover:border-cyan-500/30 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 flex flex-col">
                
                {/* Quote Icon */}
                <div className="mb-6">
                  <div className="w-10 h-10 rounded-xl bg-cyan-50 dark:bg-cyan-500/10 flex items-center justify-center">
                    <Quote size={20} className="text-cyan-500" />
                  </div>
                </div>

                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} size={16} className="text-amber-400 fill-amber-400" />
                  ))}
                </div>

                {/* Message */}
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-sm flex-grow mb-6">
                  "{testimonial.message}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-3 pt-4 border-t border-slate-100 dark:border-slate-700/50">
                  <div className={`w-11 h-11 rounded-full bg-gradient-to-br ${testimonial.color} flex items-center justify-center text-white font-bold text-sm shadow-md`}>
                    {testimonial.avatar}
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-slate-900 dark:text-white">
                      {testimonial.name}
                    </h4>
                    <p className="text-xs text-slate-500 dark:text-slate-400">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
