import { motion } from "framer-motion";

const Footer = () => (
  <footer className="border-t border-border py-8 text-center relative overflow-hidden">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="max-w-7xl mx-auto px-4"
    >
      <p className="text-sm text-muted-foreground">
        © {new Date().getFullYear()} Эрмек Акбагышов. Создано с ❤️
      </p>
    </motion.div>
  </footer>
);

export default Footer;
