import { Calendar, Users, Zap, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { Progress } from "./ui/progress";

const milestones = [
  {
    phase: "Week 1–2",
    title: "Data Collection",
    description: "Gathering 3,000–5,000 high-quality FP&A training samples from diverse financial sources.",
    icon: Calendar,
    progress: 100,
    status: "Completed"
  },
  {
    phase: "Week 3–4",
    title: "Fine-tuning & Testing",
    description: "Model optimization using LoRA techniques and comprehensive accuracy testing.",
    icon: Zap,
    progress: 85,
    status: "In Progress"
  },
  {
    phase: "Week 5–6",
    title: "Feedback Iteration",
    description: "Incorporating feedback from FP&A experts and preparing for demo release.",
    icon: Users,
    progress: 40,
    status: "Upcoming"
  },
  {
    phase: "Week 7+",
    title: "Public Demo Launch",
    description: "Beta release with early access for selected finance teams and AI researchers.",
    icon: Sparkles,
    progress: 15,
    status: "Planned"
  }
];

export function Roadmap() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="mb-4 text-[#0A2540]">Development Roadmap</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Our journey to building the most transparent and accurate FP&A AI assistant
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#4FD1C5] via-[#4FD1C5]/50 to-gray-200 hidden md:block" />

            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="relative mb-12 last:mb-0"
              >
                <div className="flex items-start gap-6">
                  {/* Icon */}
                  <div className="relative z-10 flex-shrink-0">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#4FD1C5] to-[#3DBFB5] flex items-center justify-center shadow-lg">
                      <milestone.icon className="w-7 h-7 text-white" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 bg-gray-50 rounded-xl p-6 border border-gray-200">
                    <div className="flex items-center justify-between mb-3">
                      <div className="text-sm text-[#4FD1C5]">{milestone.phase}</div>
                      <span className={`px-3 py-1 rounded-full text-sm ${
                        milestone.status === "Completed" 
                          ? "bg-green-100 text-green-700"
                          : milestone.status === "In Progress"
                          ? "bg-blue-100 text-blue-700"
                          : "bg-gray-100 text-gray-600"
                      }`}>
                        {milestone.status}
                      </span>
                    </div>
                    
                    <h3 className="mb-2 text-[#0A2540]">{milestone.title}</h3>
                    <p className="text-gray-600 mb-4">{milestone.description}</p>
                    
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-500">Progress</span>
                        <span className="text-[#0A2540]">{milestone.progress}%</span>
                      </div>
                      <Progress value={milestone.progress} className="h-2" />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mt-16"
        >
          <div className="inline-flex items-center gap-2 bg-[#4FD1C5]/10 text-[#0A2540] px-6 py-3 rounded-full border border-[#4FD1C5]/30">
            <Sparkles className="w-5 h-5 text-[#4FD1C5]" />
            <span>Stay tuned for our beta launch in early 2025!</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
