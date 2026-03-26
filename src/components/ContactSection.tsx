import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Github, Mail, Send, MapPin, GraduationCap } from "lucide-react";

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const contacts = [
    { icon: Mail, label: "Email", value: "eakbagysov@gmail.com", href: "mailto:eakbagysov@gmail.com" },
    { icon: Send, label: "Telegram", value: "@enwa1ker", href: "https://t.me/enwa1ker" },
    { icon: Github, label: "GitHub", value: "enwa1ker", href: "https://github.com/enwa1ker" },
  ];

  return (
    <section id="contact" className="py-24 sm:py-32 relative noise-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <p className="text-primary font-mono text-sm tracking-widest uppercase mb-2">Контакты</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Давайте <span className="text-gradient">работать вместе</span>
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Открыт для фриланс-проектов, стажировок и интересных предложений. Пишите — отвечу быстро!
          </p>
        </motion.div>

        <div className="max-w-2xl mx-auto">
          <div className="grid gap-4">
            {contacts.map((c, i) => (
              <motion.a
                key={c.label}
                href={c.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 * i }}
                className="skeuomorphic-card rounded-2xl p-5 flex items-center gap-4 group hover:glow-primary transition-all duration-500"
              >
                <div className="p-3 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <c.icon size={20} />
                </div>
                <div className="flex-1">
                  <p className="text-xs text-muted-foreground uppercase tracking-wider">{c.label}</p>
                  <p className="text-foreground font-medium">{c.value}</p>
                </div>
                <span className="text-muted-foreground group-hover:text-primary transition-colors text-sm">→</span>
              </motion.a>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 text-sm text-muted-foreground"
          >
            <span className="flex items-center gap-1.5">
              <MapPin size={14} className="text-primary" /> Бишкек, Кыргызстан
            </span>
            <span className="hidden sm:block">•</span>
            <span className="flex items-center gap-1.5">
              <GraduationCap size={14} className="text-primary" /> КГТУ им. Раззакова
            </span>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
