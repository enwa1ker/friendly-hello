import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, ArrowRight } from "lucide-react";
import boosterIcon from "@/assets/booster-icon.jpeg";
import TextReveal from "./TextReveal";

const projects = [
  {
    title: "Booster",
    subtitle: "Платформа для швейных цехов",
    description: "Приложение и веб-платформа для управления полным циклом швейного производства. Kanban-модель, теория ограничений, командное взаимодействие.",
    tags: ["React", "React Native", "Python", "Django", "SQL"],
    link: "https://booster.kg/",
    icon: boosterIcon,
    accent: "from-blue-500/20 to-cyan-500/20",
  },
  {
    title: "TOP Engineering",
    subtitle: "Редизайн корпоративного сайта",
    description: "Полная переработка сайта энергетической компании. До: устаревший шаблон. После: современный, адаптивный сайт с анимациями.",
    tags: ["React", "TypeScript", "Tailwind", "Figma"],
    link: "https://empathy-engine-boost.lovable.app",
    beforeAfter: true,
    accent: "from-amber-500/20 to-orange-500/20",
  },
  {
    title: "Weekly Planner",
    subtitle: "Стартап — планнер для жизни",
    description: "Личное приложение-планнер с финансовым трекером и трекером привычек. Мой собственный стартап-проект.",
    tags: ["React", "TypeScript", "CSS"],
    link: "https://weekly-planer.netify.app/",
    accent: "from-emerald-500/20 to-teal-500/20",
  },
  {
    title: "Geeks Academy",
    subtitle: "Менторинг Frontend направления",
    description: "Руководил обучением студентов по React, JavaScript и вёрстке в ведущей IT-школе Кыргызстана.",
    tags: ["React", "JavaScript", "HTML/CSS", "Менторинг"],
    link: "https://geeks.kg/",
    accent: "from-yellow-500/20 to-amber-500/20",
  },
];

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-24 sm:py-32 relative noise-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-primary font-mono text-sm tracking-widest uppercase mb-2">Проекты</p>
          <TextReveal as="h2" className="text-3xl sm:text-4xl md:text-5xl font-bold">
            Избранные работы
          </TextReveal>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <motion.a
              key={project.title}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 60 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.12 * i, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -8 }}
              className="group skeuomorphic-card rounded-2xl overflow-hidden hover:glow-primary transition-all duration-500"
            >
              {/* Top gradient + icon */}
              <div className={`relative h-40 sm:h-48 overflow-hidden bg-gradient-to-br ${project.accent}`}>
                <div className="absolute inset-0 flex items-center justify-center">
                  {project.icon ? (
                    <motion.img
                      src={project.icon}
                      alt={project.title}
                      className="w-20 h-20 rounded-2xl object-cover shadow-2xl"
                      whileHover={{ rotate: 10, scale: 1.1 }}
                    />
                  ) : project.beforeAfter ? (
                    <div className="flex items-center gap-4">
                      <div className="skeuomorphic-card px-4 py-2 rounded-lg">
                        <span className="text-xs font-mono text-muted-foreground">До</span>
                      </div>
                      <motion.div
                        animate={{ x: [0, 5, 0] }}
                        transition={{ repeat: Infinity, duration: 1.5 }}
                      >
                        <ArrowRight size={20} className="text-primary" />
                      </motion.div>
                      <div className="skeuomorphic-card px-4 py-2 rounded-lg border-primary/50">
                        <span className="text-xs font-mono text-primary">После ✨</span>
                      </div>
                    </div>
                  ) : (
                    <span className="text-6xl font-bold text-foreground/5 uppercase tracking-tighter">
                      {project.title}
                    </span>
                  )}
                </div>
                {/* Floating particles */}
                <motion.div
                  animate={{ y: [-10, 10, -10], x: [-5, 5, -5] }}
                  transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
                  className="absolute top-4 right-4 w-8 h-8 rounded-full bg-primary/10 blur-md"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">{project.subtitle}</p>
                  </div>
                  <motion.div whileHover={{ rotate: 45 }} transition={{ duration: 0.2 }}>
                    <ExternalLink size={16} className="text-muted-foreground group-hover:text-primary transition-colors mt-1" />
                  </motion.div>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="text-xs font-mono px-2.5 py-1 rounded-md bg-secondary text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>
                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  className="mt-4 flex items-center gap-1.5 text-xs text-primary font-medium opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  Открыть проект <ArrowRight size={12} />
                </motion.div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
