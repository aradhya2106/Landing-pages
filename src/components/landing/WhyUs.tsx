import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const reasons = [
  {
    title: "Multimodal",
    description:
      "Building AI agents systems that seamlessly understand and operate across text, vision, audio, and actions.",
  },
  {
    title: "Fine-Tuning",
    description:
      "Custom fine-tuning proprietary models to optimize performance for real-world, task-specific use cases.",
  },
  {
    title: "RLHF",
    description:
      "Aligning AI agents behavior through Reinforcement Learning from Human Feedback for accuracy, safety, and reliability.",
  },
  {
    title: "AI Products Distribution",
    description:
      "We help AI products reach global markets through powerful digital distribution networks.",
  },
];

const WhyUs = () => {
  return (
    <section id="why-us" className="py-24 md:py-32 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-glow opacity-30" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[150px]" />

      <div className="container relative z-10 px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-primary font-medium tracking-wider uppercase text-sm mb-4 block">
              Why Teams Work With Us
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Built for <span className="text-gradient">Serious AI agents Teams</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              We understand the unique challenges of deploying AI agents in high-stakes
              environments. Our team brings together expertise from leading AI
              Frontier Labs, AI research labs, Generative AI platforms,
              autonomous vehicle companies, and enterprise AI deployments.
            </p>
          </motion.div>

          {/* Right - Benefits */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {reasons.map((reason, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="glass rounded-xl p-6 flex gap-4 group hover:border-primary/30 transition-all duration-300"
              >
                <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
                    {reason.title}
                  </h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {reason.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
