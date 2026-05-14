"use client"

import { motion } from "framer-motion"
import { 
  ShoppingBag, 
  Users, 
  GraduationCap, 
  Activity, 
  BarChart3, 
  Home,
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
    title: "HRMS Pro",
    category: "Human Resource Management System",
    icon: Users,
    color: "#3b82f6", // Blue
  },
  {
    title: "eCommerce Go",
    category: "eCommerce Platform Solution",
    icon: ShoppingBag,
    color: "#10b981", // Green/Emerald
  },
  {
    title: "Learnify",
    category: "Learning Management System",
    icon: GraduationCap,
    color: "#8b5cf6", // Purple/Violet
  },
  {
    title: "Medicare Plus",
    category: "Hospital Management System",
    icon: Activity,
    color: "#f97316", // Orange
  },
  {
    title: "BizAnalytics",
    category: "Business Intelligence & Analytics Platform",
    icon: BarChart3,
    color: "#0ea5e9", // Sky/Blue
  },
  {
    title: "Property Suite",
    category: "Real Estate Management System",
    icon: Home,
    color: "#22c55e", // Green
  },
]

const features = [
  {
    title: "Quality Assured",
    description: "Built with industry best practices",
    icon: ShieldCheck,
    iconColor: "#3b82f6",
  },
  {
    title: "Scalable Solutions",
    description: "Designed to grow with your business",
    icon: TrendingUp,
    iconColor: "#10b981",
  },
  {
    title: "Secure & Reliable",
    description: "Security and reliability at the core",
    icon: Lock,
    iconColor: "#8b5cf6",
  },
  {
    title: "Ongoing Support",
    description: "We're with you, always",
    icon: Headphones,
    iconColor: "#f97316",
  },
]

export function ProductPortfolio() {
  return (
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
            <AnimatedButton size="lg" className="px-8 py-6 text-lg rounded-xl">
              View details <ArrowRight className="ml-2 w-5 h-5" />
            </AnimatedButton>
          </motion.div>

          {/* Right Content - Product Grid */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {products.map((product, index) => (
              <motion.div
                key={product.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="glass-dark p-8 rounded-3xl border border-white/5 flex flex-col items-center text-center group cursor-pointer transition-all duration-300 hover:border-primary/30 hover:shadow-2xl hover:shadow-primary/10"
              >
                <div 
                  className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-transform duration-500 group-hover:rotate-12"
                  style={{ backgroundColor: `${product.color}15` }}
                >
                  <product.icon 
                    className="w-8 h-8 transition-colors duration-300" 
                    style={{ color: product.color }} 
                  />
                </div>
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary transition-colors">
                  {product.title}
                </h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {product.category}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom Features */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pt-16 border-t border-white/10"
        >
          {features.map((feature, index) => (
            <div key={feature.title} className=" p-6 rounded-2xl border border-white/20 flex items-center gap-4 group transition-all duration-300 hover:border-primary/20">
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
          ))}
        </motion.div>
      </div>
    </section>
  )
}
