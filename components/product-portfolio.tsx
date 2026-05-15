"use client"

import { motion } from "framer-motion"
import { useRef, useEffect } from "react"
import {
  ShieldCheck,
  TrendingUp,
  Lock,
  Headphones,
  ArrowRight
} from "lucide-react"
import { AnimatedButton } from "@/components/animated-button"
import { cn } from "@/lib/utils"

const products = [
  {
    title: "Afrobeutic",
    category: "Discover salons and freelance professionals trusted by thousands.",
    image: "/afro_logobeutic_logo.png",
    color: "#3b82f6", // Blue
    link: "https://www.afrobeutic.com/",
  },
  {
    title: "DawatSrls",
    category: "A taste of Bengal in the heart of Italy. Order foods & dishes online.",
    image: "/dawatsrls_logo.png",
    color: "#10b981", // Green
    link: "https://dawatsrls.com/",
  },
  {
    title: "CityRomeTickets",
    category: "Rome-based tour service, specializes in delivering seamless and enriching sightseeing experiences in the heart of Rome.",
    image: "/city_rome_tickets_logo.png",
    color: "#8b5cf6", // Purple
    link: "https://cityrometickets.com/",
  },
]

const features = [
  {
    title: "Quality Assured",
    description: "Built with industry best practices",
    icon: ShieldCheck,
    iconColor: "#3b82f6",
    hoverColor: "rgba(59, 130, 246, 0.2)",
    borderColor: "rgba(59, 130, 246, 0.6)",
    staticBorderColor: "rgba(59, 130, 246, 0.3)",
  },
  {
    title: "Scalable Solutions",
    description: "Designed to grow with your business",
    icon: TrendingUp,
    iconColor: "#10b981",
    hoverColor: "rgba(16, 185, 129, 0.2)",
    borderColor: "rgba(16, 185, 129, 0.6)",
    staticBorderColor: "rgba(16, 185, 129, 0.3)",
  },
  {
    title: "Secure & Reliable",
    description: "Security and reliability at the core",
    icon: Lock,
    iconColor: "#8b5cf6",
    hoverColor: "rgba(139, 92, 246, 0.2)",
    borderColor: "rgba(139, 92, 246, 0.6)",
    staticBorderColor: "rgba(139, 92, 246, 0.3)",
  },
  {
    title: "Ongoing Support",
    description: "We're with you, always",
    icon: Headphones,
    iconColor: "#f97316",
    hoverColor: "rgba(249, 115, 22, 0.2)",
    borderColor: "rgba(249, 115, 22, 0.6)",
    staticBorderColor: "rgba(249, 115, 22, 0.3)",
  },
]

export function ProductPortfolio() {
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const cards = document.querySelectorAll('.contact-preview-card');
      cards.forEach((card) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        (card as HTMLElement).style.setProperty('--mouse-x', `${x}px`);
        (card as HTMLElement).style.setProperty('--mouse-y', `${y}px`);
      });
    };

    const cardsContainer = document.getElementById('feature-cards-container');
    if (cardsContainer) {
      cardsContainer.addEventListener('mousemove', handleMouseMove);

      return () => {
        cardsContainer.removeEventListener('mousemove', handleMouseMove);
      };
    }
  }, []);

  return (
    <>
      <section className="py-20 relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-8 lg:px-12 xl:px-16 2xl:px-20 relative z-10">
          <div className="grid lg:grid-cols-12 gap-16 items-center mb-24">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-5"
            >
              <span className="text-primary font-bold tracking-widest uppercase text-sm mb-4 block">
                Product Portfolio
              </span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Innovative software <br /> products we built
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-xl">
                Explore our past and current software products built with innovation, quality, and scalability to solve real-world problems.
              </p>
              {/* <AnimatedButton size="lg" showArrow className="cursor-pointer">
                View details
              </AnimatedButton> */}
            </motion.div>

            {/* Right Content - Product Grid */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {products.map((product, index) => (
                <TiltCard key={product.title} index={index}>
                  <a href={product.link} target="_blank" rel="noopener noreferrer" className="block h-full">
                    <div className="glass rounded-4xl p-6 text-center group hover-lift border-4 border-gradient-to-br from-cyan-500 via-blue-500 to-purple-500 bg-gradient-to-br from-cyan-500/10 via-blue-500/10 to-purple-500/10 backdrop-blur-lg h-full flex flex-col relative overflow-hidden">
                      {/* Inner Border Effect */}
                      {/* <div className="absolute inset-2 rounded-xl border-6 border-cyan-400/30 pointer-events-none"></div> */}

                      <div className="flex-1 relative z-10">
                        <div
                          className="w-24 h-24 rounded-2xl flex items-center justify-center mb-6 transition-transform duration-500 group-hover:rotate-12 overflow-hidden mx-auto"
                          style={{ backgroundColor: `${product.color}15` }}
                        >
                          <img
                            src={product.image}
                            alt={product.title}
                            className="w-22 h-22 object-contain transition-transform duration-300"
                          />
                        </div>
                        <h3 className="text-xl font-bold mb-3 text-white">{product.title}</h3>
                        <p className="text-white/80 text-sm font-medium leading-relaxed">{product.category}</p>
                      </div>

                      {/* Animated Gradient Border */}
                      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-cyan-500 via-blue-500 to-purple-500 opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
                    </div>
                  </a>
                </TiltCard>
              ))}
            </div>
          </div>

          <motion.div
            id="feature-cards-container"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pt-16 border-t border-white/10"
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="contact-preview-card group relative bg-transparent rounded-2xl cursor-pointer flex flex-col overflow-hidden border border-white/20 transition-all duration-300 ease-in-out hover:-translate-y-0.5 hover:border-[var(--border-color)] hover:shadow-[0_10px_40px_-10px_var(--border-color)] h-full w-full"
                style={{
                  '--hover-color': feature.hoverColor,
                  '--border-color': feature.borderColor,
                  '--static-border-color': feature.staticBorderColor,
                } as React.CSSProperties}
              >
                {/* Spotlight Overlay (::before) */}
                <div 
                  className="absolute inset-0 rounded-[inherit] opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none z-[3]"
                  style={{
                    background: `radial-gradient(450px circle at var(--mouse-x) var(--mouse-y), var(--hover-color, rgba(6, 182, 212, 0.2)), transparent 40%)`
                  }}
                />
                
                {/* Border Glow Overlay (::after) */}
                <div 
                  className="absolute inset-0 rounded-[inherit] opacity-60 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none z-[1]"
                  style={{
                    background: `radial-gradient(350px circle at var(--mouse-x) var(--mouse-y), var(--border-color, rgba(6, 182, 212, 0.6)), transparent 40%)`
                  }}
                />

                <div className="card-content relative z-[2] flex flex-row items-center gap-4 flex-grow h-full p-6 transition-all duration-300 ease-in-out rounded-[inherit] group-hover:bg-[radial-gradient(350px_circle_at_var(--mouse-x)_var(--mouse-y),var(--hover-color,rgba(255,255,255,0.05)),transparent_80%)]">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-primary/20"
                    style={{ border: `1px solid ${feature.iconColor}30`, backgroundColor: `${feature.iconColor}05` }}
                  >
                    <feature.icon className="w-6 h-6" style={{ color: feature.iconColor }} />
                  </div>
                  <div className="flex flex-col">
                    <h4 className="text-sm font-bold text-white group-hover:text-primary transition-colors">
                      {feature.title}
                    </h4>
                    <p className="text-xs text-muted-foreground">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  )
}

// 3D Tilt Card Component
function TiltCard({ children, index }: { children: React.ReactNode; index: number }) {
  const ref = useRef<HTMLDivElement>(null);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover="hover"
      className="cursor-pointer transform-gpu"
      onMouseMove={(e) => {
        if (!ref.current) return;
        const card = ref.current;
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateY = (x - centerX) / 20;
        const rotateX = (centerY - y) / 20;

        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)`;
      }}
      onMouseLeave={() => {
        if (!ref.current) return;
        const card = ref.current;
        card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
      }}
    >
      {children}
    </motion.div>
  );
}
