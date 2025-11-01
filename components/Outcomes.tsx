import { TrendingUp, Target, Award, ThumbsUp } from "lucide-react";
import { motion } from "framer-motion";
import { Card, CardContent } from "./ui/card";

const outcomes = [
  {
    icon: Target,
    metric: "<1%",
    label: "Numerical Deviation",
    description: "Industry-leading precision in all financial calculations and forecasts",
    color: "#4FD1C5"
  },
  {
    icon: Award,
    metric: "100%",
    label: "Traceable Citations",
    description: "Every insight backed by clear source references and reasoning steps",
    color: "#4FD1C5"
  },
  {
    icon: TrendingUp,
    metric: "Multi-period",
    label: "Forecasting Support",
    description: "Seamless analysis across quarterly, annual, and custom time frames",
    color: "#4FD1C5"
  },
  {
    icon: ThumbsUp,
    metric: "Expert",
    label: "Validation",
    description: "Positive feedback from leading FP&A professionals and finance teams",
    color: "#4FD1C5"
  }
];

export function Outcomes() {
  return (
    <section className="py-24 bg-gradient-to-br from-[#0A2540] via-[#0A2540] to-[#0A3550]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="mb-4 text-white">Expected Outcomes</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Setting new standards for AI-powered financial intelligence
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {outcomes.map((outcome, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="h-full bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-colors">
                <CardContent className="p-6 text-center">
                  <div 
                    className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                    style={{ backgroundColor: `${outcome.color}20` }}
                  >
                    <outcome.icon className="w-8 h-8" style={{ color: outcome.color }} />
                  </div>
                  <div className="text-3xl text-[#4FD1C5] mb-1">{outcome.metric}</div>
                  <div className="text-white mb-3">{outcome.label}</div>
                  <p className="text-sm text-gray-400">{outcome.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Success Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
            <h3 className="text-center mb-8 text-white">Success Criteria</h3>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#4FD1C5]/20 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-[#4FD1C5] text-sm">✓</span>
                  </div>
                  <div>
                    <div className="text-white mb-1">Accuracy Benchmark</div>
                    <p className="text-sm text-gray-400">Maintain sub-1% error rates across all financial metrics and calculations</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#4FD1C5]/20 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-[#4FD1C5] text-sm">✓</span>
                  </div>
                  <div>
                    <div className="text-white mb-1">Transparency Score</div>
                    <p className="text-sm text-gray-400">100% of insights include verifiable source citations and reasoning chains</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#4FD1C5]/20 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-[#4FD1C5] text-sm">✓</span>
                  </div>
                  <div>
                    <div className="text-white mb-1">Performance</div>
                    <p className="text-sm text-gray-400">Sub-second response times for standard queries on T4 GPU infrastructure</p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#4FD1C5]/20 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-[#4FD1C5] text-sm">✓</span>
                  </div>
                  <div>
                    <div className="text-white mb-1">User Satisfaction</div>
                    <p className="text-sm text-gray-400">Positive validation from 90%+ of beta FP&A professional testers</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#4FD1C5]/20 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-[#4FD1C5] text-sm">✓</span>
                  </div>
                  <div>
                    <div className="text-white mb-1">Scalability</div>
                    <p className="text-sm text-gray-400">Handle 20-30GB financial datasets with consistent performance</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#4FD1C5]/20 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-[#4FD1C5] text-sm">✓</span>
                  </div>
                  <div>
                    <div className="text-white mb-1">Security Compliance</div>
                    <p className="text-sm text-gray-400">Full RBAC implementation with audit logs for all data access</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
