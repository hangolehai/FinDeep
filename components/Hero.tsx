import { Button } from "./ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

interface HeroProps {
  onNavigateToApp?: () => void;
}

export function Hero({ onNavigateToApp }: HeroProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0A2540] text-white">
      {/* Background gradient effects */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-96 h-96 bg-[#4FD1C5] rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#4FD1C5] rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-2 mb-6">
              <Sparkles className="w-5 h-5 text-[#4FD1C5]" />
              <span className="text-[#4FD1C5]">AI-Powered Financial Intelligence</span>
            </div>
            
            <h1 className="mb-6 text-white">
              FinDeep Agents — The Transparent and Auditable FP&A Assistant
            </h1>
            
            <p className="text-xl text-gray-300 mb-8">
              ReAct-based multi-agent reasoning for financial planning, variance analysis, and forecasting.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                onClick={onNavigateToApp}
                className="bg-[#4FD1C5] hover:bg-[#3DBFB5] text-[#0A2540] group"
              >
                Try Demo
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-[#4FD1C5] text-[#4FD1C5] hover:bg-[#4FD1C5] hover:text-[#0A2540]"
              >
                Explore Features
              </Button>
            </div>

            <div className="mt-12 grid grid-cols-3 gap-6">
              <div>
                <div className="text-3xl text-[#4FD1C5] mb-1">{"<1%"}</div>
                <div className="text-sm text-gray-400">Error Rate</div>
              </div>
              <div>
                <div className="text-3xl text-[#4FD1C5] mb-1">100%</div>
                <div className="text-sm text-gray-400">Transparent</div>
              </div>
              <div>
                <div className="text-3xl text-[#4FD1C5] mb-1">24/7</div>
                <div className="text-sm text-gray-400">Availability</div>
              </div>
            </div>
          </motion.div>

          {/* Right illustration */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden border border-[#4FD1C5]/20 shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1759661966728-4a02e3c6ed91?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaW5hbmNpYWwlMjBkYXRhJTIwYW5hbHl0aWNzJTIwZGFzaGJvYXJkfGVufDF8fHx8MTc2MTk1NDU2N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Financial Analytics Dashboard"
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A2540] via-transparent to-transparent" />
            </div>

            {/* Floating cards */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute -bottom-4 -left-4 bg-white/10 backdrop-blur-md rounded-lg p-4 border border-white/20"
            >
              <div className="text-sm text-[#4FD1C5] mb-1">Data Sources</div>
              <div className="text-xs text-gray-300">10-Q • ERP • Excel</div>
            </motion.div>

            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
              className="absolute -top-4 -right-4 bg-white/10 backdrop-blur-md rounded-lg p-4 border border-white/20"
            >
              <div className="text-sm text-[#4FD1C5] mb-1">Accuracy</div>
              <div className="text-xs text-gray-300">99%+ Verified</div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
