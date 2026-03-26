import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, Calendar } from "lucide-react";
import geeksTeam from "@/assets/geeks-team.png";
import geeksFullTeam from "@/assets/geeks-full-team.png";

const experiences = [
  {
    company: "ООО «Бустер Групп»",
    role: "Fullstack разработчик",
    period: "Настоящее время",
    description: "Разработка приложения и сайта Booster для швейных цехов — платформа для управления полным циклом производства.",
    link: "https://booster.kg/",
    current: true,
  },
  {
    company: "ООО «ТОП Инжиниринг»",
    role: "IT-специалист",
    period: "Настоящее время",
    description: "Полная переработка корпоративного сайта компании — от устаревшего дизайна к современному и функциональному.",
    link: "https://empathy-engine-boost.lovable.app",
    current: true,
  },
  {
    company: "Geeks Academy",
    role: "Старший ментор Frontend",
    period: "2023 — 2024",
    description: "Руководил группой студентов по направлению Frontend, проводил занятия по React, JavaScript и HTML/CSS. Начал в 15-16 лет.",
    link: "https://geeks.kg/",
    current: false,
  },
  {
    company: "ООО «КлаудКод»",
    role: "Стажёр",
    period: "2024",
    description: "Прошёл стажировку, получил опыт коммерческой разработки в продуктовой команде.",
    current: false,
  },
];

const ExperienceSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-24 sm:py-32 relative noise-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-primary font-mono text-sm tracking-widest uppercase mb-2">Опыт работы</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
            Карьерный <span className="text-gradient">путь</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Timeline */}
          <div className="lg:col-span-2 space-y-6">
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.15 * i }}
                className="skeuomorphic-card rounded-2xl p-6 relative group hover:glow-primary transition-all duration-500"
              >
                {exp.current && (
                  <div className="absolute top-4 right-4">
                    <span className="flex items-center gap-1.5 text-xs font-mono text-primary">
                      <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                      Сейчас
                    </span>
                  </div>
                )}
                <div className="flex items-start gap-4">
                  <div className="p-2 rounded-lg bg-primary/10 text-primary mt-1">
                    <Briefcase size={18} />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-foreground text-lg">{exp.company}</h3>
                    <p className="text-primary text-sm font-medium">{exp.role}</p>
                    <div className="flex items-center gap-1.5 text-xs text-muted-foreground mt-1 mb-3">
                      <Calendar size={12} />
                      {exp.period}
                    </div>
                    <p className="text-muted-foreground text-sm leading-relaxed">{exp.description}</p>
                    {exp.link && (
                      <a
                        href={exp.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block mt-3 text-xs font-mono text-accent hover:text-primary transition-colors"
                      >
                        {exp.link.replace("https://", "")} →
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Photos */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="space-y-6"
          >
            <div className="skeuomorphic-card rounded-2xl overflow-hidden">
              <img src={geeksTeam} alt="С коллегами в Geeks Academy" className="w-full h-48 object-cover" />
              <div className="p-4">
                <p className="text-xs text-muted-foreground">С командой Geeks Academy, 2023</p>
                <p className="text-xs text-primary mt-1">Я справа — в серой рубашке 👋</p>
              </div>
            </div>
            <div className="skeuomorphic-card rounded-2xl overflow-hidden">
              <img src={geeksFullTeam} alt="Полная команда Geeks Academy" className="w-full h-48 object-cover" />
              <div className="p-4">
                <p className="text-xs text-muted-foreground">Полная команда Geeks Academy</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
