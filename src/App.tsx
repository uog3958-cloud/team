import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, ArrowUpRight, ArrowLeft, User } from 'lucide-react';
import { useState } from 'react';

interface ProjectBlockProps {
  number: string;
  title: string;
  description: string;
  href: string;
  delay: number;
}

const ProjectBlock = ({ number, title, description, href, delay }: ProjectBlockProps) => {
  return (
    <motion.a
      href={href}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      className="group relative flex flex-col justify-between p-8 h-[420px] bg-white border border-slate-100 rounded-[2rem] 
                 hover:border-sky-200 hover:bg-sky-50/50 transition-all duration-300 ease-out
                 hover:-translate-y-2 hover:shadow-2xl hover:shadow-sky-100/50 cursor-pointer overflow-hidden"
    >
      <div className="flex justify-between items-start">
        <span className="text-4xl font-display font-light text-slate-200 group-hover:text-sky-300 transition-colors duration-300">
          {number}
        </span>
        <div className="p-3 rounded-full bg-slate-50 group-hover:bg-white group-hover:text-sky-600 transition-colors duration-300">
          <ArrowUpRight className="w-5 h-5 text-slate-400 group-hover:text-sky-600 transition-colors" />
        </div>
      </div>

      <div className="space-y-4 relative z-10">
        <div className="w-12 h-1 bg-slate-100 group-hover:bg-sky-400 transition-colors duration-300" />
        <div>
          <h3 className="text-2xl font-bold text-slate-900 mb-2 group-hover:text-sky-900 transition-colors">
            {title}
          </h3>
          <p className="text-slate-500 font-medium leading-relaxed group-hover:text-slate-600 transition-colors">
            {description}
          </p>
        </div>
      </div>

      {/* Decorative gradient blob on hover */}
      <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-sky-100/50 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
    </motion.a>
  );
};

const teamMembers = [
  { role: '팀장', name: '홍길동', initial: 'H', color: 'bg-sky-500' },
  { role: '팀원', name: '김민수', initial: 'K', color: 'bg-indigo-500' },
  { role: '팀원', name: '이서연', initial: 'L', color: 'bg-violet-500' },
  { role: '팀원', name: '박준호', initial: 'P', color: 'bg-emerald-500' },
];

export default function App() {
  const [showTeam, setShowTeam] = useState(false);

  return (
    <div className="min-h-screen bg-white font-sans selection:bg-sky-100 selection:text-sky-900 overflow-x-hidden">
      
      {/* Navigation (Simple Brand Header) */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <span 
            className="font-display font-bold text-xl tracking-tight text-slate-900 cursor-pointer"
            onClick={() => setShowTeam(false)}
          >
            TP.HUB <span className="text-sky-500">2026</span>
          </span>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-500">
            <span className="hover:text-sky-600 cursor-pointer transition-colors" onClick={() => setShowTeam(false)}>About</span>
            <span className="hover:text-sky-600 cursor-pointer transition-colors" onClick={() => setShowTeam(false)}>Projects</span>
            <span className="hover:text-sky-600 cursor-pointer transition-colors" onClick={() => setShowTeam(true)}>Team</span>
            <button className="px-5 py-2.5 bg-slate-900 text-white rounded-full hover:bg-slate-800 transition-colors">
              Contact
            </button>
          </div>
        </div>
      </nav>

      <main className="pt-20 relative min-h-screen">
        <AnimatePresence mode="wait">
          {!showTeam ? (
            <motion.div
              key="main"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              {/* Hero Section */}
              <section className="relative min-h-[85vh] flex items-center overflow-hidden bg-gradient-to-b from-slate-50 to-white">
                {/* Abstract Background Elements */}
                <div className="absolute top-0 right-0 w-1/2 h-full pointer-events-none">
                  <div className="absolute top-[20%] right-[10%] w-[600px] h-[600px] bg-sky-200/30 rounded-full blur-[120px] animate-pulse" />
                  <div className="absolute bottom-[10%] right-[30%] w-[500px] h-[500px] bg-indigo-100/40 rounded-full blur-[100px]" />
                  <div className="absolute top-[40%] left-[10%] w-[300px] h-[300px] bg-blue-100/50 rounded-full blur-[80px]" />
                </div>

                <div className="max-w-7xl mx-auto px-6 w-full relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="space-y-8"
                  >
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 shadow-sm">
                      <span className="w-2 h-2 rounded-full bg-sky-500 animate-pulse" />
                      <span className="text-sm font-semibold text-slate-600 tracking-wide">2026 Team Project</span>
                    </div>
                    
                    <h1 className="text-6xl md:text-7xl font-bold text-slate-900 leading-[1.1] tracking-tight">
                      2026 팀 프로젝트<br />
                      <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-indigo-600">
                        통합 플랫폼
                      </span>
                    </h1>
                    
                    <p className="text-xl text-slate-500 leading-relaxed max-w-lg">
                      각 팀원의 결과물을 하나의 공간에서 연결하고 확장합니다.<br />
                      우리의 비전과 기술이 담긴 프로젝트를 만나보세요.
                    </p>
                    
                    <div className="flex items-center gap-4 pt-4">
                      <motion.button 
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="px-8 py-4 bg-slate-900 text-white rounded-full font-semibold text-lg hover:bg-slate-800 transition-colors shadow-lg shadow-slate-900/20 flex items-center gap-2"
                        onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                      >
                        프로젝트 둘러보기
                        <ArrowRight className="w-5 h-5" />
                      </motion.button>
                      <button 
                        className="px-8 py-4 bg-white text-slate-600 border border-slate-200 rounded-full font-semibold text-lg hover:bg-slate-50 transition-colors"
                        onClick={() => setShowTeam(true)}
                      >
                        팀 소개
                      </button>
                    </div>
                  </motion.div>
                  
                  {/* Right side graphic placeholder or 3D element */}
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="hidden lg:block relative h-[600px]"
                  >
                    <div className="absolute inset-0 bg-gradient-to-tr from-sky-50 to-white rounded-[3rem] border border-white/50 shadow-2xl shadow-sky-100/50 backdrop-blur-sm flex items-center justify-center overflow-hidden">
                       <div className="absolute inset-0 grid grid-cols-6 gap-4 opacity-[0.03] rotate-12 scale-150">
                          {Array.from({ length: 24 }).map((_, i) => (
                            <div key={i} className="bg-slate-900 rounded-xl w-full h-32" />
                          ))}
                       </div>
                       <div className="relative z-10 text-center space-y-6 p-12 bg-white/80 backdrop-blur-xl rounded-3xl shadow-xl border border-white/60">
                          <div className="w-20 h-20 bg-sky-500 rounded-2xl mx-auto flex items-center justify-center shadow-lg shadow-sky-500/30">
                            <ArrowUpRight className="w-10 h-10 text-white" />
                          </div>
                          <div>
                            <h3 className="text-2xl font-bold text-slate-900">Innovation Hub</h3>
                            <p className="text-slate-500 mt-2">Connecting Ideas & Technology</p>
                          </div>
                       </div>
                    </div>
                  </motion.div>
                </div>
              </section>

              {/* Project Selection Section */}
              <section id="projects" className="py-32 bg-white relative">
                <div className="max-w-7xl mx-auto px-6">
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-20"
                  >
                    <h2 className="text-4xl font-bold text-slate-900 mb-6">Featured Projects</h2>
                    <div className="h-1 w-20 bg-sky-500 rounded-full" />
                  </motion.div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <ProjectBlock 
                      number="01"
                      title="A 프로젝트"
                      description="사용자 경험을 혁신하는 차세대 웹 플랫폼 기획 및 디자인"
                      href="#"
                      delay={0.1}
                    />
                    <ProjectBlock 
                      number="02"
                      title="B 프로젝트"
                      description="빅데이터 기반의 실시간 분석 및 시각화 대시보드"
                      href="#"
                      delay={0.2}
                    />
                    <ProjectBlock 
                      number="03"
                      title="C 프로젝트 1"
                      description="직관적인 인터페이스와 마이크로 인터랙션 구현"
                      href="#"
                      delay={0.3}
                    />
                    <ProjectBlock 
                      number="04"
                      title="C 프로젝트 2"
                      description="안정적인 서버 아키텍처 및 고성능 네트워크 시스템"
                      href="#"
                      delay={0.4}
                    />
                  </div>
                </div>
              </section>

              {/* Footer */}
              <footer className="bg-slate-50 border-t border-slate-100 py-20">
                <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
                  <div className="text-center md:text-left">
                    <span className="font-display font-bold text-xl tracking-tight text-slate-900">
                      TP.HUB <span className="text-sky-500">2026</span>
                    </span>
                    <p className="text-slate-400 text-sm mt-2">
                      © 2026 Team Project Hub. All rights reserved.
                    </p>
                  </div>
                  <div className="flex gap-8 text-slate-400 text-sm font-medium">
                    <a href="#" className="hover:text-slate-900 transition-colors">Privacy Policy</a>
                    <a href="#" className="hover:text-slate-900 transition-colors">Terms of Service</a>
                    <a href="#" className="hover:text-slate-900 transition-colors">Contact Support</a>
                  </div>
                </div>
              </footer>
            </motion.div>
          ) : (
            <motion.div
              key="team"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="min-h-[85vh] flex flex-col items-center justify-center py-20 bg-gradient-to-b from-white to-slate-50"
            >
              <div className="max-w-6xl w-full px-6">
                <motion.button 
                  onClick={() => setShowTeam(false)}
                  whileHover={{ x: -5 }}
                  className="flex items-center gap-2 text-slate-500 hover:text-sky-600 font-medium mb-12 transition-colors"
                >
                  <ArrowLeft className="w-5 h-5" />
                  메인으로 돌아가기
                </motion.button>

                <div className="text-center mb-20 space-y-4">
                  <h2 className="text-5xl font-bold text-slate-900">우리 팀을 소개합니다</h2>
                  <p className="text-xl text-slate-500">함께 기획하고, 개발하고, 완성한 팀원들</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                  {teamMembers.map((member, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 + 0.3 }}
                      className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-lg shadow-slate-100/50 
                                 hover:shadow-xl hover:shadow-sky-100/50 hover:-translate-y-2 transition-all duration-300
                                 flex flex-col items-center text-center group"
                    >
                      <div className={`w-24 h-24 rounded-full ${member.color} mb-6 flex items-center justify-center text-white text-3xl font-bold shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                        {member.initial}
                      </div>
                      <span className="inline-block px-3 py-1 bg-slate-50 text-slate-500 text-xs font-bold rounded-full mb-3 uppercase tracking-wider">
                        {member.role}
                      </span>
                      <h3 className="text-2xl font-bold text-slate-900 mb-1">{member.name}</h3>
                      <p className="text-slate-400 text-sm">Team Project 2026</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </div>
  );
}
