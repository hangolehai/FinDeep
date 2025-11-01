import { Search, Table2, FileSpreadsheet, GitBranch } from "lucide-react";
import { motion } from "framer-motion";

const modules = [
  {
    icon: Search,
    title: "Planner & Retriever",
    description: "Intelligent task understanding that fetches data from 10-Q filings, ERP systems, or Excel workbooks.",
    tags: ["Natural Language Processing", "Smart Retrieval"]
  },
  {
    icon: Table2,
    title: "FP&A Tools",
    description: "Built-in tools like doc.search, table.read, and sheet.write for seamless data extraction and KPI tracking.",
    tags: ["Data Extraction", "KPI Monitoring"]
  },
  {
    icon: GitBranch,
    title: "Reasoning Engine",
    description: "Fine-tuned 7B–13B LLM with ReAct-based reasoning for transparent, step-by-step financial analysis.",
    tags: ["ReAct Framework", "Multi-step Logic"]
  },
  {
    icon: FileSpreadsheet,
    title: "Verification Layer",
    description: "Cross-checks all data points and provides clear citations for every calculation and insight.",
    tags: ["Data Verification", "Source Citations"]
  }
];

export function Features() {
  return (
    <section className="py-24 bg-[#0A2540] text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#4FD1C5] rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="mb-4">Core Features</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Technical modules designed for enterprise-grade financial intelligence
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {modules.map((module, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 hover:bg-white/10 transition-colors"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-[#4FD1C5]/20 flex items-center justify-center flex-shrink-0">
                  <module.icon className="w-6 h-6 text-[#4FD1C5]" />
                </div>
                <div className="flex-1">
                  <h3 className="mb-2">{module.title}</h3>
                  <p className="text-gray-300 mb-4">{module.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {module.tags.map((tag, tagIndex) => (
                      <span 
                        key={tagIndex}
                        className="px-3 py-1 bg-[#4FD1C5]/10 text-[#4FD1C5] rounded-full text-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Agent Flow Diagram */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8"
        >
          <h3 className="text-center mb-8">Agent Interaction Flow</h3>
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex-1 text-center">
              <div className="w-16 h-16 rounded-full bg-[#4FD1C5]/20 flex items-center justify-center mx-auto mb-3">
                <span className="text-2xl">📥</span>
              </div>
              <div className="text-[#4FD1C5] mb-1">Input</div>
              <div className="text-sm text-gray-300">User Query</div>
            </div>
            
            <div className="text-[#4FD1C5] text-2xl hidden md:block">→</div>
            
            <div className="flex-1 text-center">
              <div className="w-16 h-16 rounded-full bg-[#4FD1C5]/20 flex items-center justify-center mx-auto mb-3">
                <span className="text-2xl">🧠</span>
              </div>
              <div className="text-[#4FD1C5] mb-1">Planner</div>
              <div className="text-sm text-gray-300">Task Analysis</div>
            </div>
            
            <div className="text-[#4FD1C5] text-2xl hidden md:block">→</div>
            
            <div className="flex-1 text-center">
              <div className="w-16 h-16 rounded-full bg-[#4FD1C5]/20 flex items-center justify-center mx-auto mb-3">
                <span className="text-2xl">🔍</span>
              </div>
              <div className="text-[#4FD1C5] mb-1">Retriever</div>
              <div className="text-sm text-gray-300">Data Fetching</div>
            </div>
            
            <div className="text-[#4FD1C5] text-2xl hidden md:block">→</div>
            
            <div className="flex-1 text-center">
              <div className="w-16 h-16 rounded-full bg-[#4FD1C5]/20 flex items-center justify-center mx-auto mb-3">
                <span className="text-2xl">⚙️</span>
              </div>
              <div className="text-[#4FD1C5] mb-1">Reasoning</div>
              <div className="text-sm text-gray-300">Analysis</div>
            </div>
            
            <div className="text-[#4FD1C5] text-2xl hidden md:block">→</div>
            
            <div className="flex-1 text-center">
              <div className="w-16 h-16 rounded-full bg-[#4FD1C5]/20 flex items-center justify-center mx-auto mb-3">
                <span className="text-2xl">✅</span>
              </div>
              <div className="text-[#4FD1C5] mb-1">Verification</div>
              <div className="text-sm text-gray-300">Output</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
