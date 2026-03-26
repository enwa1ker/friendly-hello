import { motion } from "framer-motion";
import { Github, Mail, Send, ChevronDown } from "lucide-react";
import heroPhoto from "@/assets/hero-photo.png";

const HeroSection = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden noise-bg">
      {/* Background gradient orbs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-accent/10 rounded-full blur-[120px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
          {/* Text */}
          <div className="flex-1 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <p className="text-primary font-mono text-sm mb-4 tracking-widest uppercase">
                Fullstack Developer & Designer
              </p>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="text-4xl sm:text-5xl md:text-7xl font-bold leading-tight mb-6"
            >
              Эрмек
              <br />
              <span className="text-gradient">Акбагышов</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="text-muted-foreground text-base sm:text-lg max-w-lg mx-auto lg:mx-0 mb-8"
            >
              18 лет. Создаю веб-приложения, мобильные приложения и дизайн. 
              Превращаю идеи в код, а код — в продукт.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="flex items-center gap-4 justify-center lg:justify-start"
            >
              <a
                href="https://github.com/enwa1ker"
                target="_blank"
                rel="noopener noreferrer"
                className="skeuomorphic-card p-3 rounded-xl hover:glow-primary transition-all duration-300 hover:scale-105"
              >
                <Github size={20} className="text-foreground" />
              </a>
              <a
                href="mailto:eakbagysov@gmail.com"
                className="skeuomorphic-card p-3 rounded-xl hover:glow-accent transition-all duration-300 hover:scale-105"
              >
                <Mail size={20} className="text-foreground" />
              </a>
              <a
                href="https://t.me/enwa1ker"
                target="_blank"
                rel="noopener noreferrer"
                className="skeuomorphic-card p-3 rounded-xl hover:glow-primary transition-all duration-300 hover:scale-105"
              >
                <Send size={20} className="text-foreground" />
              </a>
              <a
                href="#contact"
                className="ml-2 px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-xl hover:scale-105 transition-transform duration-300 text-sm"
              >
                Связаться
              </a>
            </motion.div>
          </div>

          {/* Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex-shrink-0"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl blur-2xl" />
              <div className="relative w-56 h-56 sm:w-72 sm:h-72 lg:w-80 lg:h-80 rounded-3xl overflow-hidden skeuomorphic-card">
                <img
                  src={heroPhoto}
                  alt="Эрмек Акбагышов"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <ChevronDown size={24} className="text-muted-foreground" />
        </motion.div>
      </motion.a>
    </section>
  );
};

export default HeroSection;
