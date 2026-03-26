import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, ArrowRight } from "lucide-react";

const projects = [
  {
    title: "Booster",
    subtitle: "Платформа для швейных цехов",
    description: "Приложение и веб-платформа для управления полным циклом швейного производства. Kanban-модель, теория ограничений, командное взаимодействие.",
    tags: ["React", "React Native", "Python", "Django", "SQL"],
    link: "https://booster.kg/",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=600&h=400&fit=crop",
    accent: "from-blue-500/20 to-cyan-500/20",
  },
  {
    title: "TOP Engineering",
    subtitle: "Редизайн корпоративного сайта",
    description: "Полная переработка сайта энергетической компании. До: устаревший шаблон. После: современный, адаптивный сайт с анимациями.",
    tags: ["React", "TypeScript", "Tailwind", "Figma"],
    link: "https://empathy-engine-boost.lovable.app",
    beforeAfter: true,
    beforeImage: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&h=400&fit=crop",
    afterImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
    accent: "from-amber-500/20 to-orange-500/20",
  },
  {
    title: "Weekly Planner",
    subtitle: "Стартап — планнер для жизни",
    description: "Личное приложение-планнер с финансовым трекером и трекером привычек. Мой собственный стартап-проект.",
    tags: ["React", "TypeScript", "CSS"],
    link: "https://weekly-planer.netify.app/",
    image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=600&h=400&fit=crop",
    accent: "from-emerald-500/20 to-teal-500/20",
  },
  {
    title: "Geeks Academy",
    subtitle: "Менторинг Frontend направления",
    description: "Руководил обучением студентов по React, JavaScript и вёрстке в ведущей IT-школе Кыргызстана.",
    tags: ["React", "JavaScript", "HTML/CSS", "Менторинг"],
    link: "https://geeks.kg/",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop",
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
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-primary font-mono text-sm tracking-widest uppercase mb-2">Проекты</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
            Избранные <span className="text-gradient">работы</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <motion.a
              key={project.title}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 * i }}
              className="group skeuomorphic-card rounded-2xl overflow-hidden hover:glow-primary transition-all duration-500"
            >
              {/* Image */}
              <div className="relative h-48 sm:h-56 overflow-hidden">
                <div className={`absolute inset-0 bg-gradient-to-br ${project.accent} z-10`} />
                {project.beforeAfter ? (
                  <div className="flex h-full">
                    <div className="w-1/2 relative overflow-hidden">
                      <img src={project.beforeImage} alt="До" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                      <span className="absolute bottom-2 left-2 text-xs font-mono glass px-2 py-1 rounded-md text-foreground z-20">До</span>
                    </div>
                    <div className="w-px bg-primary/50 z-20" />
                    <div className="w-1/2 relative overflow-hidden">
                      <img src={project.afterImage} alt="После" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                      <span className="absolute bottom-2 right-2 text-xs font-mono glass px-2 py-1 rounded-md text-primary z-20">После</span>
                    </div>
                  </div>
                ) : (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                )}
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
                  <ExternalLink size={16} className="text-muted-foreground group-hover:text-primary transition-colors mt-1" />
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="text-xs font-mono px-2.5 py-1 rounded-md bg-secondary text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="mt-4 flex items-center gap-1.5 text-xs text-primary font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                  Открыть проект <ArrowRight size={12} />
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
