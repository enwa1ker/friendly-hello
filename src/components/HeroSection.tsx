import { motion, useScroll, useTransform } from "framer-motion";
import { Github, Mail, Send, ChevronDown } from "lucide-react";
import { useRef } from "react";
import heroPhoto from "@/assets/hero-photo.png";
import TextReveal from "./TextReveal";
import Marquee from "./Marquee";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.3 } },
};
const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

const HeroSection = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start start", "end start"] });
  const yText = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const yPhoto = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section ref={sectionRef} id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden noise-bg">
      {/* Animated gradient orbs */}
      <motion.div
        animate={{ scale: [1, 1.2, 1], x: [0, 30, 0], y: [0, -20, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/10 rounded-full blur-[120px]"
      />
      <motion.div
        animate={{ scale: [1, 1.3, 1], x: [0, -30, 0], y: [0, 20, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-1/4 -right-32 w-96 h-96 bg-accent/10 rounded-full blur-[120px]"
      />

      <motion.div style={{ y: yText, opacity }} className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
          {/* Text */}
          <motion.div variants={container} initial="hidden" animate="show" className="flex-1 text-center lg:text-left">
            <motion.p variants={item} className="text-primary font-mono text-sm mb-4 tracking-widest uppercase">
              Fullstack Developer • Designer • Sales
            </motion.p>

            <div className="mb-6">
              <TextReveal as="h1" className="text-5xl sm:text-6xl md:text-8xl font-bold leading-[0.9] tracking-tight" delay={0.2}>
                Эрмек
              </TextReveal>
              <br />
              <TextReveal as="h1" className="text-5xl sm:text-6xl md:text-8xl font-bold leading-[0.9] tracking-tight text-gradient" delay={0.4}>
                Акбагышов
              </TextReveal>
            </div>

            <motion.p
              variants={item}
              className="text-muted-foreground text-base sm:text-lg max-w-lg mx-auto lg:mx-0 mb-8"
            >
              18 лет. Создаю веб и мобильные приложения, дизайн и продукты.
              Превращаю идеи в код, а код — в бизнес-результат.
            </motion.p>

            <motion.div variants={item} className="flex items-center gap-4 justify-center lg:justify-start">
              {[
                { href: "https://github.com/enwa1ker", icon: Github },
                { href: "mailto:eakbagysov@gmail.com", icon: Mail },
                { href: "https://t.me/enwa1ker", icon: Send },
              ].map(({ href, icon: Icon }) => (
                <motion.a
                  key={href}
                  href={href}
                  target={href.startsWith("mailto") ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.15, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  className="skeuomorphic-card p-3 rounded-xl hover:glow-primary transition-all duration-300"
                >
                  <Icon size={20} className="text-foreground" />
                </motion.a>
              ))}
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="ml-2 px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-xl transition-transform duration-300 text-sm"
              >
                Связаться
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Photo with parallax */}
          <motion.div
            initial={{ opacity: 0, scale: 0.7, rotateY: 15 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ duration: 1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            style={{ y: yPhoto }}
            className="flex-shrink-0"
          >
            <motion.div
              whileHover={{ rotateY: 5, rotateX: -5 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="relative"
              style={{ perspective: 800 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl blur-2xl" />
              <div className="relative w-56 h-56 sm:w-72 sm:h-72 lg:w-80 lg:h-80 rounded-3xl overflow-hidden skeuomorphic-card">
                <img src={heroPhoto} alt="Эрмек Акбагышов" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      {/* Marquee at bottom */}
      <div className="absolute bottom-16 left-0 right-0 z-0 pointer-events-none">
        <Marquee items={["React", "Django", "TypeScript", "Figma", "Python", "Mobile", "Sales"]} />
      </div>

      {/* Scroll indicator */}
      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div animate={{ y: [0, 10, 0] }} transition={{ repeat: Infinity, duration: 2 }}>
          <ChevronDown size={24} className="text-muted-foreground" />
        </motion.div>
      </motion.a>
    </section>
  );
};

export default HeroSection;
