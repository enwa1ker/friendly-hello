import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import TextReveal from "./TextReveal";
import AnimatedCounter from "./AnimatedCounter";

const categories = [
  {
    title: "Frontend",
    skills: ["React", "Redux", "TypeScript", "JavaScript", "HTML5", "CSS3", "Tailwind CSS", "React Native"],
    color: "text-accent",
  },
  {
    title: "Backend",
    skills: ["Python", "Django", "REST API", "SQL", "SQLite3", "MongoDB", "Aiogram"],
    color: "text-primary",
  },
  {
    title: "Инструменты",
    skills: ["Git", "GitLab", "GitHub", "Figma", "VS Code", "Linux", "Docker"],
    color: "text-emerald-400",
  },
  {
    title: "Продажи & Другое",
    skills: ["Психология продаж (EQ)", "UI/UX Design", "Прототипирование", "Mobile Apps", "Game Dev", "Менторинг"],
    color: "text-purple-400",
  },
];

const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-24 sm:py-32 relative noise-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-primary font-mono text-sm tracking-widest uppercase mb-2">Навыки</p>
          <TextReveal as="h2" className="text-3xl sm:text-4xl md:text-5xl font-bold">
            Технический стек
          </TextReveal>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 50, rotateX: 10 }}
              animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 * i, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="skeuomorphic-card rounded-2xl p-6 hover:glow-primary transition-all duration-500"
            >
              <h3 className={`font-bold text-lg mb-4 ${cat.color}`}>{cat.title}</h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill, si) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 0.1 * i + 0.03 * si }}
                    whileHover={{ scale: 1.1, y: -2 }}
                    className="text-xs font-mono px-3 py-1.5 rounded-lg bg-secondary/80 text-secondary-foreground hover:bg-primary/20 hover:text-primary transition-colors cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats bar with animated counters */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="mt-12 skeuomorphic-card rounded-2xl p-8 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            { num: 3, suffix: "+", label: "Года в IT" },
            { num: 5, suffix: "+", label: "Проектов" },
            { num: 4, suffix: "", label: "Компании" },
            { num: 15, suffix: "+", label: "Технологий" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-3xl sm:text-4xl font-bold text-gradient">
                <AnimatedCounter target={stat.num} suffix={stat.suffix} />
              </p>
              <p className="text-sm text-muted-foreground mt-1">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
