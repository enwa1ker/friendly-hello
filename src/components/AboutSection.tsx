import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Code, Palette, Smartphone, TrendingUp, Gamepad2 } from "lucide-react";
import ermekSport from "@/assets/ermek-sport.png";
import TextReveal from "./TextReveal";

const highlights = [
  { icon: Code, label: "Fullstack Dev", desc: "React, Django, Node.js" },
  { icon: Palette, label: "UI/UX Design", desc: "Figma, прототипирование" },
  { icon: Smartphone, label: "Mobile Apps", desc: "React Native" },
  { icon: TrendingUp, label: "Продажи & EQ", desc: "Психология продаж" },
  { icon: Gamepad2, label: "Game Dev", desc: "Моды, Minecraft" },
  { icon: GraduationCap, label: "Студент", desc: "КГТУ, 1 курс" },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.9 },
  visible: (i: number) => ({
    opacity: 1, y: 0, scale: 1,
    transition: { duration: 0.5, delay: 0.1 * i, ease: [0.22, 1, 0.36, 1] },
  }),
};

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 sm:py-32 relative noise-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-primary font-mono text-sm tracking-widest uppercase mb-2">Обо мне</p>
          <TextReveal as="h2" className="text-3xl sm:text-4xl md:text-5xl font-bold">
            Немного о себе
          </TextReveal>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-6"
          >
            <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
              Привет! Я <span className="text-foreground font-semibold">Эрмек Акбагышов</span>, мне 18 лет.
              Увлёкся IT ещё в школе — писал игры, моды для Minecraft, участвовал в олимпиадах.
              Учился в 29 гимназии, сейчас студент КГТУ им. Раззакова (1-й курс).
            </p>
            <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
              Уже в 15–16 лет работал старшим ментором frontend направления
              в <span className="text-primary font-semibold">Geeks Academy</span>. Сейчас fullstack-разработчик
              с опытом в React, Django, Python, SQL и мобильной разработке. Также занимаюсь дизайном в Figma
              и изучаю <span className="text-primary font-semibold">психологию продаж</span> — прошёл курс 
              «Психология эффективных продаж (EQ)» у тренера Хамзы Осмонкулова.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-4">
              {highlights.map((h, i) => (
                <motion.div
                  key={h.label}
                  custom={i}
                  variants={cardVariants}
                  initial="hidden"
                  animate={isInView ? "visible" : "hidden"}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="skeuomorphic-card p-4 rounded-xl cursor-default"
                >
                  <h.icon size={20} className="text-primary mb-2" />
                  <p className="text-sm font-semibold text-foreground">{h.label}</p>
                  <p className="text-xs text-muted-foreground">{h.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 60, rotateY: 10 }}
            animate={isInView ? { opacity: 1, x: 0, rotateY: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="relative flex justify-center"
          >
            <motion.div
              whileHover={{ rotateY: -5, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-accent/15 to-primary/15 rounded-3xl blur-2xl" />
              <div className="relative w-full max-w-sm rounded-3xl overflow-hidden skeuomorphic-card">
                <img src={ermekSport} alt="Эрмек на спортивном мероприятии" className="w-full h-auto object-cover" />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
