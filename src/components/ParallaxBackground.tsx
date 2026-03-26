import { motion, useScroll, useTransform } from "framer-motion";

const ParallaxBackground = () => {
  const { scrollYProgress } = useScroll();

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -600]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -400]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, -900]);
  const y4 = useTransform(scrollYProgress, [0, 1], [0, -300]);
  const y5 = useTransform(scrollYProgress, [0, 1], [0, -700]);
  const rotate1 = useTransform(scrollYProgress, [0, 1], [0, 45]);
  const rotate2 = useTransform(scrollYProgress, [0, 1], [0, -30]);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Large primary orb - top left */}
      <motion.div
        style={{ y: y1, rotate: rotate1 }}
        className="absolute -top-32 -left-32 w-[500px] h-[500px] rounded-full bg-primary/[0.06] blur-[130px]"
      />
      {/* Accent orb - mid right */}
      <motion.div
        style={{ y: y2 }}
        className="absolute top-[40%] -right-48 w-[400px] h-[400px] rounded-full bg-accent/[0.07] blur-[120px]"
      />
      {/* Small warm orb */}
      <motion.div
        style={{ y: y3, rotate: rotate2 }}
        className="absolute top-[70%] left-[15%] w-[300px] h-[300px] rounded-full bg-primary/[0.05] blur-[100px]"
      />
      {/* Deep accent orb - bottom */}
      <motion.div
        style={{ y: y4 }}
        className="absolute top-[120%] right-[20%] w-[450px] h-[450px] rounded-full bg-accent/[0.06] blur-[140px]"
      />
      {/* Extra floating orb */}
      <motion.div
        style={{ y: y5 }}
        className="absolute top-[200%] -left-24 w-[350px] h-[350px] rounded-full bg-primary/[0.04] blur-[110px]"
      />
    </div>
  );
};

export default ParallaxBackground;
