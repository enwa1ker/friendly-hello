import { motion, useInView } from "framer-motion";
import { useRef } from "react";

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
    title: "Дизайн & Другое",
    skills: ["UI/UX Design", "Figma", "Прототипирование", "Mobile Apps", "Minecraft Modding", "Game Dev"],
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
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-primary font-mono text-sm tracking-widest uppercase mb-2">Навыки</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
            Технический <span className="text-gradient">стек</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 * i }}
              className="skeuomorphic-card rounded-2xl p-6 hover:glow-primary transition-all duration-500"
            >
              <h3 className={`font-bold text-lg mb-4 ${cat.color}`}>{cat.title}</h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <motion.span
                    key={skill}
                    whileHover={{ scale: 1.05 }}
                    className="text-xs font-mono px-3 py-1.5 rounded-lg bg-secondary/80 text-secondary-foreground hover:bg-primary/20 hover:text-primary transition-colors cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12 skeuomorphic-card rounded-2xl p-8 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            { num: "3+", label: "Года в IT" },
            { num: "5+", label: "Проектов" },
            { num: "4", label: "Компании" },
            { num: "15+", label: "Технологий" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-3xl sm:text-4xl font-bold text-gradient">{stat.num}</p>
              <p className="text-sm text-muted-foreground mt-1">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
