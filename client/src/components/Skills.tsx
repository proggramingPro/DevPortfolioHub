import { motion } from "framer-motion";
import { SiPython, SiCpp, SiC, SiNode, SiHtml, SiCss, SiPandas, SiJava } from "react-icons/si";

const skills = [
  { icon: SiPython, name: "Python" },
  { icon: SiCpp, name: "C++" },
  { icon: SiC, name: "C" },
  { icon: SiNode, name: "Node.Js" },
  { icon: SiHtml, name: "HTML" },
  { icon: SiCss, name: "CSS" },
  { icon: SiPandas, name: "Pandas" },
  { icon: SiJava, name: "Java" },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-muted/50" />
      <div className="absolute inset-0 grid-pattern opacity-20" />
      <div className="container mx-auto px-4 relative">
        <h2 className="text-3xl font-bold text-center mb-8">Technical Expertise</h2>
        <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
          Proficient in modern machine learning frameworks and tools, with extensive experience in
          developing and deploying ML models at scale.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {skills.map((skill, i) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="flex flex-col items-center gap-4 p-6 rounded-lg bg-card/80 backdrop-blur-sm hover:bg-card/90 transition-colors"
            >
              <skill.icon className="w-12 h-12 text-primary" />
              <span className="font-medium">{skill.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
