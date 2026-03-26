import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, Calendar } from "lucide-react";
import geeksTeam from "@/assets/geeks-team.png";
import geeksFullTeam from "@/assets/geeks-full-team.png";
import boosterIcon from "@/assets/booster-icon.jpeg";
import TextReveal from "./TextReveal";

const experiences = [
  {
    company: "ООО «Бустер Групп»",
    role: "Fullstack разработчик",
    period: "Настоящее время",
    description: "Разработка приложения и сайта Booster для швейных цехов — платформа для управления полным циклом производства.",
    link: "https://booster.kg/",
    current: true,
    icon: boosterIcon,
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
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-primary font-mono text-sm tracking-widest uppercase mb-2">Опыт работы</p>
          <TextReveal as="h2" className="text-3xl sm:text-4xl md:text-5xl font-bold">
            Карьерный путь
          </TextReveal>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Timeline */}
          <div className="lg:col-span-2 space-y-6 relative">
            {/* Vertical line */}
            <motion.div
              initial={{ scaleY: 0 }}
              animate={isInView ? { scaleY: 1 } : {}}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
              className="absolute left-[27px] top-0 bottom-0 w-px bg-gradient-to-b from-primary via-accent to-transparent origin-top hidden sm:block"
            />

            {experiences.map((exp, i) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, x: -50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.15 * i, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ x: 10 }}
                className="skeuomorphic-card rounded-2xl p-6 relative group hover:glow-primary transition-all duration-500 sm:ml-14"
              >
                {/* Timeline dot */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : {}}
                  transition={{ delay: 0.2 + 0.15 * i, type: "spring" }}
                  className="absolute -left-[41px] top-8 w-4 h-4 rounded-full bg-primary border-4 border-background hidden sm:block"
                />

                {exp.current && (
                  <div className="absolute top-4 right-4">
                    <span className="flex items-center gap-1.5 text-xs font-mono text-primary">
                      <motion.span
                        animate={{ opacity: [1, 0.3, 1] }}
                        transition={{ repeat: Infinity, duration: 1.5 }}
                        className="w-2 h-2 bg-primary rounded-full"
                      />
                      Сейчас
                    </span>
                  </div>
                )}
                <div className="flex items-start gap-4">
                  <div className="p-2 rounded-lg bg-primary/10 text-primary mt-1 overflow-hidden">
                    {exp.icon ? (
                      <img src={exp.icon} alt={exp.company} className="w-5 h-5 rounded object-cover" />
                    ) : (
                      <Briefcase size={18} />
                    )}
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
                      <motion.a
                        href={exp.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ x: 5 }}
                        className="inline-block mt-3 text-xs font-mono text-accent hover:text-primary transition-colors"
                      >
                        {exp.link.replace("https://", "")} →
                      </motion.a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Photos */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-6"
          >
            {[
              { src: geeksTeam, alt: "С коллегами в Geeks Academy", caption: "С командой Geeks Academy, 2023", sub: "Я справа — в серой рубашке 👋" },
              { src: geeksFullTeam, alt: "Полная команда Geeks Academy", caption: "Полная команда Geeks Academy", sub: null },
            ].map((photo, i) => (
              <motion.div
                key={photo.alt}
                whileHover={{ scale: 1.03, y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="skeuomorphic-card rounded-2xl overflow-hidden"
              >
                <div className="overflow-hidden">
                  <motion.img
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                    src={photo.src}
                    alt={photo.alt}
                    className="w-full h-48 object-cover"
                  />
                </div>
                <div className="p-4">
                  <p className="text-xs text-muted-foreground">{photo.caption}</p>
                  {photo.sub && <p className="text-xs text-primary mt-1">{photo.sub}</p>}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
