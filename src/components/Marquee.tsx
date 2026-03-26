interface MarqueeProps {
  items: string[];
  className?: string;
}

const Marquee = ({ items, className = "" }: MarqueeProps) => {
  const repeated = [...items, ...items];
  return (
    <div className={`overflow-hidden whitespace-nowrap ${className}`}>
      <div className="animate-marquee inline-flex gap-8">
        {repeated.map((item, i) => (
          <span key={i} className="text-muted-foreground/30 text-6xl sm:text-8xl font-bold uppercase tracking-tighter select-none">
            {item}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Marquee;
