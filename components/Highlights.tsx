import { Database, CheckCircle2, Brain, Shield } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import { motion } from "framer-motion";

const features = [
  {
    icon: Database,
    title: "Real-time Data Retrieval",
    description: "Seamlessly fetch data from 10-Q reports, ERP systems, and Excel spreadsheets in real-time.",
    color: "#4FD1C5"
  },
  {
    icon: CheckCircle2,
    title: "Quantitative Accuracy",
    description: "Industry-leading precision with less than 1% numerical deviation in all calculations.",
    color: "#4FD1C5"
  },
  {
    icon: Brain,
    title: "Multi-step Reasoning",
    description: "ReAct-based reasoning engine that breaks down complex FP&A tasks into transparent steps.",
    color: "#4FD1C5"
  },
  {
    icon: Shield,
    title: "Secure Data Control",
    description: "Role-based access control (RBAC) ensures your financial data remains private and secure.",
    color: "#4FD1C5"
  }
];

export function Highlights() {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="mb-4 text-[#0A2540]">Why Choose FinDeep?</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Built for FP&A analysts, finance teams, and AI researchers who demand transparency and accuracy.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="h-full border-gray-200 hover:border-[#4FD1C5] transition-colors hover:shadow-lg">
                <CardContent className="p-6">
                  <div 
                    className="w-12 h-12 rounded-lg flex items-center justify-center mb-4"
                    style={{ backgroundColor: `${feature.color}20` }}
                  >
                    <feature.icon className="w-6 h-6" style={{ color: feature.color }} />
                  </div>
                  <h3 className="mb-2 text-[#0A2540]">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
