import { Server, Database, Cpu, Cloud, Lock } from "lucide-react";
import { motion } from "framer-motion";

export function Architecture() {
  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="mb-4 text-[#0A2540]">System Architecture</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Enterprise-grade infrastructure designed for performance, security, and scalability
          </p>
        </motion.div>

        {/* Architecture Flow */}
        <div className="max-w-5xl mx-auto mb-16">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white border-2 border-[#4FD1C5] rounded-xl p-6 text-center"
            >
              <Database className="w-10 h-10 text-[#4FD1C5] mx-auto mb-3" />
              <div className="text-[#0A2540] mb-1">Data Sources</div>
              <div className="text-sm text-gray-500">10-Q, ERP, Excel</div>
            </motion.div>

            <div className="text-[#4FD1C5] text-2xl text-center hidden md:block">→</div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white border-2 border-[#4FD1C5] rounded-xl p-6 text-center"
            >
              <Server className="w-10 h-10 text-[#4FD1C5] mx-auto mb-3" />
              <div className="text-[#0A2540] mb-1">Data Pipeline</div>
              <div className="text-sm text-gray-500">ETL & Validation</div>
            </motion.div>

            <div className="text-[#4FD1C5] text-2xl text-center hidden md:block">→</div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white border-2 border-[#4FD1C5] rounded-xl p-6 text-center"
            >
              <Cpu className="w-10 h-10 text-[#4FD1C5] mx-auto mb-3" />
              <div className="text-[#0A2540] mb-1">Reasoning Engine</div>
              <div className="text-sm text-gray-500">7B-13B LLM</div>
            </motion.div>
          </div>

          <div className="flex justify-center my-4">
            <div className="text-[#4FD1C5] text-2xl">↓</div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-xl mx-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-white border-2 border-[#4FD1C5] rounded-xl p-6 text-center"
            >
              <Lock className="w-10 h-10 text-[#4FD1C5] mx-auto mb-3" />
              <div className="text-[#0A2540] mb-1">Verification Layer</div>
              <div className="text-sm text-gray-500">Accuracy Check</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-white border-2 border-[#4FD1C5] rounded-xl p-6 text-center"
            >
              <Cloud className="w-10 h-10 text-[#4FD1C5] mx-auto mb-3" />
              <div className="text-[#0A2540] mb-1">Dashboard Output</div>
              <div className="text-sm text-gray-500">Insights & Reports</div>
            </motion.div>
          </div>
        </div>

        {/* Technical Specs */}
        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-gradient-to-br from-[#0A2540] to-[#0A2540]/80 text-white rounded-xl p-6"
          >
            <h4 className="mb-2 text-[#4FD1C5]">Model Fine-tuning</h4>
            <p className="text-gray-300 text-sm">
              Advanced LoRA (Low-Rank Adaptation) techniques for efficient model customization with minimal computational overhead.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-gradient-to-br from-[#0A2540] to-[#0A2540]/80 text-white rounded-xl p-6"
          >
            <h4 className="mb-2 text-[#4FD1C5]">Deployment</h4>
            <p className="text-gray-300 text-sm">
              Optimized for T4 GPU infrastructure, ensuring fast inference times and cost-effective operation at scale.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-gradient-to-br from-[#0A2540] to-[#0A2540]/80 text-white rounded-xl p-6"
          >
            <h4 className="mb-2 text-[#4FD1C5]">Data Storage</h4>
            <p className="text-gray-300 text-sm">
              Secure 20–30GB financial data vault with RBAC controls, hosted on enterprise-grade cloud infrastructure.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
