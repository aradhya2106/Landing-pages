import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {

  return (
    <>
      <footer className="relative">
        {/* CTA Section */}
        <section className="py-24 md:py-32 relative overflow-hidden">
          {/* Background */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-muted/30" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-primary/10 rounded-full blur-[150px]" />

          <div className="container relative z-10 px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="glass-strong rounded-3xl p-8 md:p-16 text-center max-w-4xl mx-auto"
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                Ready to Build{" "}
                <span className="text-gradient">Reliable AI agents?</span>
              </h2>
              <p className="text-muted-foreground text-lg max-w-xl mx-auto mb-8">
                Let's discuss how our agentic data and evaluation infrastructure
                can accelerate your AI development.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a href="mailto:Team@yachthree.com">
                  <Button
                    size="lg"
                    className="bg-gradient-primary hover:opacity-90 text-primary-foreground font-semibold px-8 py-6 text-lg shadow-glow"
                  >
                    Get Started Today
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Bottom Footer */}
        <div className="border-t border-border py-8">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <a href="#" className="flex items-center gap-2">
                <img
                  src="/logo.png"
                  alt="H+AI logo"
                  className="h-12 md:h-14 w-auto object-contain"
                />
              </a>

              <nav className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
                <a
                  href="#what-we-do"
                  className="hover:text-foreground transition-colors"
                >
                  What We Do
                </a>
                <a
                  href="#products"
                  className="hover:text-foreground transition-colors"
                >
                  Products
                </a>
                <a
                  href="#use-cases"
                  className="hover:text-foreground transition-colors"
                >
                  Use Cases
                </a>
                <a
                  href="#why-us"
                  className="hover:text-foreground transition-colors"
                >
                  Why Us
                </a>
                <a
                  href="#partners"
                  className="hover:text-foreground transition-colors"
                >
                  Partners
                </a>
              </nav>

              <p className="text-sm text-muted-foreground">
                © 2026 H+AI. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>

    </>
  );
};

export default Footer;
