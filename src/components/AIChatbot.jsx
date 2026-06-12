import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send, Bot, User, Sparkles, RotateCcw } from 'lucide-react';

// ── Knowledge Base about Jeeshan ──────────────────────────────────────────────
const knowledge = {
  name: 'Jeeshan Abbasi',
  title: 'Full Stack Developer (MERN)',
  location: 'Bikaner, Rajasthan, India',
  email: 'jeeshanabbasi055@gmail.com',
  github: 'https://github.com/jeeshanabbasi/',
  linkedin: 'https://www.linkedin.com/in/jeeshan-abbasi-67aa7638a/',
  instagram: 'http://instagram.com/jeeshan_abbasi18',

  about: `Jeeshan is a passionate Full Stack Developer specializing in the MERN stack (MongoDB, Express.js, React.js, Node.js). With a keen eye for modern UI/UX design, he crafts beautiful, responsive, and highly functional web applications. He started his web development journey out of curiosity for how things work on the internet. When not coding, he enjoys learning about new technologies and contributing to open-source projects.`,

  skills: {
    frontend: ['React', 'JavaScript', 'Tailwind CSS', 'HTML5/CSS3', 'Framer Motion'],
    backend: ['Node.js', 'Express.js', 'NestJS', 'REST APIs', 'JWT Auth'],
    database: ['MongoDB', 'MySQL', 'Mongoose'],
    tools: ['Git / GitHub', 'Postman', 'Vite', 'Responsive Design'],
  },

  projects: [
    {
      name: 'Service Booking App',
      type: 'Full Stack',
      tech: ['React', 'Tailwind CSS', 'Node.js', 'Express', 'MongoDB'],
      desc: 'A comprehensive platform for booking services with user authentication, provider management, cart, checkout, and admin dashboard with dark mode.',
    },
    {
      name: 'Task Manager',
      type: 'Full Stack',
      tech: ['React', 'Framer Motion', 'Node.js', 'MongoDB'],
      desc: 'A productivity app with drag-and-drop task management, category filtering, progress tracking, and a glassmorphism interface.',
      live: 'https://dipanshu-taskboard.vercel.app/',
    },
    {
      name: 'Print Point Website',
      type: 'Frontend',
      tech: ['React', 'Tailwind CSS', 'Vite'],
      desc: 'An elegant e-commerce front-end for a printing business with rotating hero banners, product catalogs, and smooth scroll animations.',
    },
  ],

  experience: [
    {
      role: 'Full Stack Developer',
      org: 'Freelance / Self Projects',
      period: '2024 - Present',
      desc: 'Building modern full-stack web applications using MERN stack — service booking platforms, task managers, and portfolio websites.',
    },
  ],

  education: [
    { degree: 'Bachelor of Computer Applications (BCA)', year: '2023 - Present', place: 'University, Bikaner' },
    { degree: 'Higher Secondary (12th)', year: '2021 - 2023', place: 'Senior Secondary School, Bikaner' },
  ],
};

// ── Intent Matching ────────────────────────────────────────────────────────────
const getResponse = (message) => {
  const msg = message.toLowerCase().trim();

  // Greetings
  if (/^(hi|hello|hey|helo|namaste|salam|assalam|yo|sup|howdy|hii|hiii)/.test(msg)) {
    return `👋 Hey there! I'm **Jeeshan's AI Assistant**. I know everything about him!\n\nYou can ask me about:\n• 🛠️ **Skills** & Technologies\n• 💼 **Projects** he's built\n• 🎓 **Education** & **Experience**\n• 📬 **Contact** info\n• 🧑 **About** Jeeshan\n\nWhat would you like to know?`;
  }

  // Name / Who is he
  if (/(who is|who are you|naam|name|kon h|kaun hai|introduce|apna|jeeshan)/.test(msg)) {
    return `🧑‍💻 **${knowledge.name}** is a passionate **${knowledge.title}** based in **${knowledge.location}**.\n\nHe builds modern, scalable, and visually stunning web applications using the MERN stack. He has a keen eye for UI/UX design and loves turning ideas into digital reality with clean code and creative design.\n\n*Fun fact: When not coding, he's exploring new tech or contributing to open-source!* 🚀`;
  }

  // Skills
  if (/(skill|technology|tech|stack|programming|language|framework|kya use karta|kya jaanta|tools?)/.test(msg)) {
    return `🛠️ **Jeeshan's Tech Stack:**\n\n**Frontend:**\n${knowledge.skills.frontend.map(s => `• ${s}`).join('\n')}\n\n**Backend:**\n${knowledge.skills.backend.map(s => `• ${s}`).join('\n')}\n\n**Database:**\n${knowledge.skills.database.map(s => `• ${s}`).join('\n')}\n\n**Tools:**\n${knowledge.skills.tools.map(s => `• ${s}`).join('\n')}`;
  }

  // Projects
  if (/(project|built|work|portfolio|app|application|banana|banaya|website|kya banaya)/.test(msg)) {
    const list = knowledge.projects.map((p, i) =>
      `**${i + 1}. ${p.name}** *(${p.type})*\n${p.desc}\n🔧 Tech: ${p.tech.join(', ')}${p.live ? `\n🔗 [Live Demo](${p.live})` : ''}`
    ).join('\n\n');
    return `💼 **Featured Projects by Jeeshan:**\n\n${list}`;
  }

  // Experience
  if (/(experience|work|job|internship|freelance|career|kaam|kab se|kitne saal)/.test(msg)) {
    const exp = knowledge.experience[0];
    return `💼 **Work Experience:**\n\n**${exp.role}** @ ${exp.org}\n📅 ${exp.period}\n\n${exp.desc}\n\nHe has been independently developing full-stack MERN applications since 2024, specializing in scalable web applications with premium UI/UX design.`;
  }

  // Education
  if (/(education|study|college|university|school|degree|padhai|bca|10th|12th|qualification)/.test(msg)) {
    const edu = knowledge.education.map(e =>
      `🎓 **${e.degree}**\n📅 ${e.year} | ${e.place}`
    ).join('\n\n');
    return `🎓 **Education:**\n\n${edu}`;
  }

  // Contact
  if (/(contact|email|reach|hire|gmail|message|linkedin|github|social|kaise milun|connect)/.test(msg)) {
    return `📬 **Get in Touch with Jeeshan:**\n\n• 📧 **Email:** ${knowledge.email}\n• 💼 **LinkedIn:** [jeeshan-abbasi](${knowledge.linkedin})\n• 🐙 **GitHub:** [jeeshanabbasi](${knowledge.github})\n• 📸 **Instagram:** [jeeshan_abbasi18](${knowledge.instagram})\n\nFeel free to reach out for collaborations, freelance work, or just to say hi! 😊`;
  }

  // Location
  if (/(location|where|city|state|country|kahan|rahta|bikaner|rajasthan|india)/.test(msg)) {
    return `📍 Jeeshan is based in **Bikaner, Rajasthan, India**. He works remotely and is open to remote opportunities worldwide! 🌍`;
  }

  // MERN Stack
  if (/(mern|mongo|express|react|node)/.test(msg)) {
    return `⚡ **MERN Stack Expert!**\n\nJeeshan specializes in the full MERN Stack:\n• 🍃 **MongoDB** — NoSQL database\n• ⚡ **Express.js** — Backend framework\n• ⚛️ **React** — Frontend library\n• 🟢 **Node.js** — JavaScript runtime\n\nHe builds complete end-to-end applications with this stack!`;
  }

  // Hire / Freelance
  if (/(hire|freelance|available|work together|collaborate|project mein|help|kaam chahiye)/.test(msg)) {
    return `🎯 **Yes! Jeeshan is available for freelance work!**\n\nHe specializes in:\n• 🌐 Full Stack Web Applications\n• ⚛️ React / Next.js Frontend Development\n• 🔧 Node.js / Express Backend APIs\n• 🎨 UI/UX Design with Tailwind CSS\n\n📬 Reach out at: **${knowledge.email}**\n\nOr connect on LinkedIn for a quick chat! 💬`;
  }

  // About / Hobbies
  if (/(about|hobby|hobbies|passion|interest|like|enjoy|fun|personality|background)/.test(msg)) {
    return `🧑 **About Jeeshan:**\n\n${knowledge.about}\n\n🎯 **Fun Facts:**\n• 🚀 Started coding out of pure curiosity\n• 🎨 Has a keen eye for modern UI/UX design\n• 📚 Always learning new technologies\n• 🌟 Loves open-source contributions`;
  }

  // Thank you
  if (/(thank|thanks|shukriya|shukria|dhanyawad|thx|ty)/.test(msg)) {
    return `😊 You're welcome! Feel free to ask anything else about Jeeshan. I'm here to help! 🤖✨`;
  }

  // Bye
  if (/(bye|goodbye|alvida|see you|tata|cya|quit|exit)/.test(msg)) {
    return `👋 Goodbye! Have a great day! Feel free to come back anytime. Jeeshan would love to connect with you! 😊`;
  }

  // How are you / bot status
  if (/(how are you|kaisa hai|kya hal|how r u|wassup|what's up)/.test(msg)) {
    return `🤖 I'm doing great, thanks for asking! I'm Jeeshan's AI assistant, always ready to answer your questions about him.\n\nWhat would you like to know? 😊`;
  }

  // Default fallback
  return `🤔 Hmm, I'm not sure about that specific query. But I can help you with:\n\n• 🛠️ **Skills** — Ask "What are his skills?"\n• 💼 **Projects** — Ask "Show me his projects"\n• 🎓 **Education** — Ask "What's his education?"\n• 📬 **Contact** — Ask "How to contact Jeeshan?"\n• 💻 **Experience** — Ask "What's his work experience?"\n\nTry one of these! 👆`;
};

// ── Quick Suggestions ─────────────────────────────────────────────────────────
const suggestions = [
  "Tell me about Jeeshan",
  "What are his skills?",
  "Show me his projects",
  "How to hire him?",
  "Contact details",
  "His education",
];

// ── Component ─────────────────────────────────────────────────────────────────
export default function AIChatbot({ isOpenProp, setIsOpenProp }) {
  const [isOpen, setIsOpen] = useState(isOpenProp || false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      role: 'bot',
      text: `👋 Hi! I'm **Jeeshan's AI Assistant**.\n\nAsk me anything about Jeeshan — his skills, projects, experience, or how to hire him! 🚀`,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    },
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const close = () => {
    setIsOpen(false);
    if (setIsOpenProp) setIsOpenProp(false);
  };

  useEffect(() => {
    if (isOpenProp !== undefined) setIsOpen(isOpenProp);
  }, [isOpenProp]);

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 300);
    }
  }, [isOpen]);

  const sendMessage = (text) => {
    const userText = text || input.trim();
    if (!userText) return;

    const userMsg = {
      id: Date.now(),
      role: 'user',
      text: userText,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsTyping(true);

    // Simulate AI thinking delay
    const delay = 600 + Math.random() * 800;
    setTimeout(() => {
      const botResponse = getResponse(userText);
      const botMsg = {
        id: Date.now() + 1,
        role: 'bot',
        text: botResponse,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };
      setMessages(prev => [...prev, botMsg]);
      setIsTyping(false);
    }, delay);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  const resetChat = () => {
    setMessages([
      {
        id: Date.now(),
        role: 'bot',
        text: `👋 Hi! I'm **Jeeshan's AI Assistant**.\n\nAsk me anything about Jeeshan — his skills, projects, experience, or how to hire him! 🚀`,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      },
    ]);
  };

  // Render bold markdown **text**
  const renderText = (text) => {
    const parts = text.split(/(\*\*[^*]+\*\*)/g);
    return parts.map((part, i) => {
      if (part.startsWith('**') && part.endsWith('**')) {
        return <strong key={i} className="font-semibold text-white">{part.slice(2, -2)}</strong>;
      }
      // Render line breaks
      return part.split('\n').map((line, j, arr) => (
        <span key={`${i}-${j}`}>
          {line}
          {j < arr.length - 1 && <br />}
        </span>
      ));
    });
  };

  return (
    <>
      {/* ── Chat Window ── */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="ai-chatbot-window"
            initial={{ opacity: 0, y: -10, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.97 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="fixed top-20 right-4 md:right-8 z-40 w-[calc(100vw-2rem)] max-w-sm flex flex-col"
            style={{
              height: 'min(520px, calc(100vh - 12rem))',
              background: 'rgba(15, 23, 42, 0.92)',
              backdropFilter: 'blur(20px)',
              border: '1px solid rgba(6, 182, 212, 0.2)',
              borderRadius: '20px',
              boxShadow: '0 25px 60px rgba(0,0,0,0.5), 0 0 40px rgba(6, 182, 212, 0.08)',
            }}
          >
            {/* ── Header ── */}
            <div
              className="flex items-center justify-between px-4 py-3 rounded-t-[20px] flex-shrink-0"
              style={{
                background: 'linear-gradient(135deg, rgba(6,182,212,0.15), rgba(59,130,246,0.15))',
                borderBottom: '1px solid rgba(6, 182, 212, 0.15)',
              }}
            >
              <div className="flex items-center gap-3">
                {/* Avatar */}
                <div className="relative">
                  <div className="w-9 h-9 rounded-full flex items-center justify-center"
                    style={{ background: 'linear-gradient(135deg, #06b6d4, #3b82f6)' }}>
                    <Bot size={18} className="text-white" />
                  </div>
                  <span className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 bg-emerald-400 rounded-full border-2 border-slate-900" />
                </div>
                <div>
                  <p className="text-white text-sm font-semibold leading-none">Jeeshan's AI</p>
                  <p className="text-emerald-400 text-xs mt-0.5 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full inline-block animate-pulse" />
                    Online
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={resetChat}
                  className="p-1.5 rounded-lg text-slate-400 hover:text-cyan-400 hover:bg-cyan-500/10 transition-colors"
                  title="Reset chat"
                >
                  <RotateCcw size={15} />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={close}
                  className="p-1.5 rounded-lg text-slate-400 hover:text-red-400 hover:bg-red-500/10 transition-colors"
                >
                  <X size={15} />
                </motion.button>
              </div>
            </div>

            {/* ── Messages ── */}
            <div className="flex-1 overflow-y-auto px-3 py-3 space-y-3 scrollbar-thin">
              {messages.map((msg) => (
                <motion.div
                  key={msg.id}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className={`flex gap-2 ${msg.role === 'user' ? 'flex-row-reverse' : 'flex-row'}`}
                >
                  {/* Avatar */}
                  <div className={`flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-white ${
                    msg.role === 'bot'
                      ? 'bg-gradient-to-br from-cyan-500 to-blue-600'
                      : 'bg-gradient-to-br from-purple-500 to-pink-500'
                  }`}>
                    {msg.role === 'bot' ? <Bot size={14} /> : <User size={14} />}
                  </div>

                  {/* Bubble */}
                  <div className={`max-w-[80%] ${msg.role === 'user' ? 'items-end' : 'items-start'} flex flex-col gap-1`}>
                    <div
                      className={`px-3 py-2.5 rounded-2xl text-xs leading-relaxed ${
                        msg.role === 'user'
                          ? 'text-white rounded-tr-sm'
                          : 'text-slate-200 rounded-tl-sm'
                      }`}
                      style={
                        msg.role === 'user'
                          ? { background: 'linear-gradient(135deg, #06b6d4, #3b82f6)' }
                          : { background: 'rgba(30, 41, 59, 0.8)', border: '1px solid rgba(255,255,255,0.06)' }
                      }
                    >
                      {renderText(msg.text)}
                    </div>
                    <span className="text-slate-600 text-[10px] px-1">{msg.time}</span>
                  </div>
                </motion.div>
              ))}

              {/* Typing Indicator */}
              <AnimatePresence>
                {isTyping && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    className="flex gap-2 items-end"
                  >
                    <div className="w-7 h-7 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center flex-shrink-0">
                      <Bot size={14} className="text-white" />
                    </div>
                    <div className="px-4 py-3 rounded-2xl rounded-tl-sm flex items-center gap-1.5"
                      style={{ background: 'rgba(30, 41, 59, 0.8)', border: '1px solid rgba(255,255,255,0.06)' }}>
                      {[0, 1, 2].map(i => (
                        <motion.span
                          key={i}
                          className="w-1.5 h-1.5 bg-cyan-400 rounded-full block"
                          animate={{ y: [0, -5, 0] }}
                          transition={{ duration: 0.6, repeat: Infinity, delay: i * 0.15 }}
                        />
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
              <div ref={messagesEndRef} />
            </div>

            {/* ── Quick Suggestions ── */}
            {messages.length <= 2 && (
              <div className="px-3 pb-2 flex gap-1.5 flex-wrap flex-shrink-0">
                {suggestions.map((s, i) => (
                  <motion.button
                    key={i}
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    onClick={() => sendMessage(s)}
                    className="text-[10px] px-2.5 py-1.5 rounded-full text-cyan-400 transition-all"
                    style={{ background: 'rgba(6,182,212,0.1)', border: '1px solid rgba(6,182,212,0.25)' }}
                  >
                    {s}
                  </motion.button>
                ))}
              </div>
            )}

            {/* ── Input ── */}
            <div
              className="px-3 py-3 flex-shrink-0 rounded-b-[20px] flex items-center gap-2"
              style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}
            >
              <input
                ref={inputRef}
                id="ai-chatbot-input"
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Ask me about Jeeshan..."
                className="flex-1 bg-transparent text-white text-xs placeholder-slate-500 outline-none px-3 py-2 rounded-xl transition-colors"
                style={{ background: 'rgba(30, 41, 59, 0.6)', border: '1px solid rgba(255,255,255,0.07)' }}
              />
              <motion.button
                id="ai-chatbot-send"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => sendMessage()}
                disabled={!input.trim() || isTyping}
                className="w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0 disabled:opacity-40 transition-opacity"
                style={{ background: 'linear-gradient(135deg, #06b6d4, #3b82f6)' }}
              >
                <Send size={14} className="text-white" />
              </motion.button>
            </div>

            {/* ── Footer branding ── */}
            <div className="text-center pb-2 flex-shrink-0">
              <span className="text-[9px] text-slate-600 flex items-center justify-center gap-1">
                <Sparkles size={8} className="text-cyan-500" />
                Powered by Jeeshan's AI
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
