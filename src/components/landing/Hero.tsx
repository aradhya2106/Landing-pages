import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const teamFrom = [
  "Atari",
  "Hyundai",
  "Harvard",
  "Stanford",
  "Columbia",
  "IIT",
  "Apple",
  "World Bank",
  "EY",
  "Goldman Sachs",
  "Mercor",
];

const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-20 pb-10 md:pt-28 md:pb-16">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-glow opacity-50" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-[120px]" />

      {/* Grid Pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px),
                           linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="container relative z-10 px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center max-w-5xl mx-auto"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6 md:mb-8 mt-2 md:mt-4"
          >
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-muted-foreground tracking-wide">
              The <span className="mx-0.5">SuperIntelligence</span> Labs
            </span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-4 md:mb-6"
          >
            Real-World <span className="text-gradient">Agentic Data</span>
            <br />& Model Evaluation
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-6 md:mb-8 leading-relaxed"
          >
            We build agentic datasets, evaluation pipelines, and safety
            infrastructure that empower modern AI agents systems - from self-driving
            cars to humanoids and smartglasses - to perform reliably in the real
            world.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="flex items-center justify-center"
          >
            <a href="mailto:Team@yachthree.com">
              <Button
                size="lg"
                className="bg-gradient-primary hover:opacity-90 text-primary-foreground font-semibold px-8 py-6 text-lg shadow-glow transition-all duration-300"
              >
                Get Started
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </a>
          </motion.div>

          {/* Key Benefits */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mt-6 leading-relaxed"
          >
            Measurable AI Gains. Safety-First. Human-Centered.
          </motion.p>

          {/* Team with Experts from - first scroll */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.6 }}
            className="mt-8 md:mt-12"
          >
            <span className="text-muted-foreground text-sm mb-4 md:mb-5 block">
              AI Team since 2019 with Experts from
            </span>
            <div className="flex flex-wrap justify-center items-center gap-2 sm:gap-3 md:gap-5">
              {teamFrom.map((org, index) => (
                <motion.span
                  key={org}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.05 + index * 0.04, duration: 0.4 }}
                  className="px-4 py-2 rounded-full glass text-sm font-medium text-foreground/70 hover:text-foreground hover:border-primary/30 transition-all cursor-default"
                >
                  {org}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-2"
          >
            <div className="w-1 h-2 bg-muted-foreground/50 rounded-full" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
