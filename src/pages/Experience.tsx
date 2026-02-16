import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import { GraduationCap, Rocket, Code, School } from "lucide-react";

const timeline = [
  {
    year: "2022",
    title: "High School Graduation",
    description: "Completed senior secondary education with a focus on Science and Mathematics.",
    icon: School,
  },
  {
    year: "2023",
    title: "Joined SRM Institute",
    description: "Started B.Tech in Computer Science and Engineering at SRMIST.",
    icon: GraduationCap,
  },
  {
    year: "2024",
    title: "Developer Journey Begins",
    description: "Built first full-stack projects with Node.js, MongoDB, and React. Contributed to open source.",
    icon: Code,
  },
  {
    year: "2025",
    title: "PharmaGo — Founder",
    description: "Launched PharmaGo, a startup focused on digitizing pharmacy operations.",
    icon: Rocket,
  },
];

const Experience = () => (
  <Layout>
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="mt-16 sm:mt-20 mb-20 max-w-2xl mx-auto"
    >
      <h1 className="text-3xl sm:text-4xl font-bold text-foreground text-center uppercase mb-14 font-display tracking-tight">
        Experience
      </h1>

      <div className="relative">
        {/* Vertical line */}
        <div className="absolute left-5 sm:left-6 top-0 bottom-0 w-px bg-border" />

        <div className="space-y-12">
          {timeline.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="relative pl-14 sm:pl-16"
              >
                {/* Dot / Icon */}
                <div className="absolute left-0 top-0 w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-primary/40 bg-background flex items-center justify-center">
                  <Icon size={18} className="text-primary" />
                </div>

                {/* Content */}
                <span className="text-xs font-semibold uppercase tracking-widest text-primary">
                  {item.year}
                </span>
                <h2 className="text-lg font-semibold text-foreground mt-1 font-display tracking-tight">
                  {item.title}
                </h2>
                <p className="text-sm font-light text-muted-foreground leading-relaxed mt-1">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </motion.section>
  </Layout>
);

export default Experience;
