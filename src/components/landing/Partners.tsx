import { motion } from "framer-motion";

const partners = [
  "Google",
  "PureDC",
  "VOLTA Cabs",
  "TerraPay",
  "Almonds AI",
  "Avataar AI",
];

const Partners = () => {
  return (
    <section id="partners" className="pt-12 pb-10 md:pt-20 md:pb-16 relative">
      {/* Top Border */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="container relative z-10 px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <span className="text-muted-foreground text-sm mb-6 md:mb-8 block">
            Trusted Partners
          </span>
          <div className="flex flex-wrap justify-center items-center gap-4 md:gap-8 lg:gap-12">
            {partners.map((partner, index) => (
              <motion.div
                key={partner}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="text-xl md:text-2xl font-bold text-muted-foreground/50 hover:text-foreground transition-colors cursor-default"
              >
                {partner}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Partners;
