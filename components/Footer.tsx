import { Github, Linkedin, FileText, Mail } from "lucide-react";
import { Button } from "./ui/button";

export function Footer() {
  return (
    <footer className="bg-[#0A2540] text-white py-16 border-t border-white/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-[#4FD1C5] flex items-center justify-center">
                <span className="text-[#0A2540]">F</span>
              </div>
              <span className="text-xl">FinDeep</span>
            </div>
            <p className="text-gray-400 text-sm">
              The transparent and auditable FP&A assistant powered by multi-agent LLMs.
            </p>
          </div>

          {/* Product */}
          <div>
            <h4 className="mb-4 text-white">Product</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#features" className="hover:text-[#4FD1C5] transition-colors">Features</a></li>
              <li><a href="#architecture" className="hover:text-[#4FD1C5] transition-colors">Architecture</a></li>
              <li><a href="#roadmap" className="hover:text-[#4FD1C5] transition-colors">Roadmap</a></li>
              <li><a href="#demo" className="hover:text-[#4FD1C5] transition-colors">Demo</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="mb-4 text-white">Resources</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#docs" className="hover:text-[#4FD1C5] transition-colors">Documentation</a></li>
              <li><a href="#research" className="hover:text-[#4FD1C5] transition-colors">Research Paper</a></li>
              <li><a href="#blog" className="hover:text-[#4FD1C5] transition-colors">Blog</a></li>
              <li><a href="#faq" className="hover:text-[#4FD1C5] transition-colors">FAQ</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-4 text-white">Get Early Access</h4>
            <p className="text-sm text-gray-400 mb-4">
              Join our beta program and be among the first to experience FinDeep.
            </p>
            <Button className="w-full bg-[#4FD1C5] hover:bg-[#3DBFB5] text-[#0A2540]">
              Request Access
            </Button>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Copyright */}
            <div className="text-sm text-gray-400">
              © 2025 FinDeep. All rights reserved.
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-4 h-4 text-gray-400" />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4 text-gray-400" />
              </a>
              <a 
                href="https://notion.so" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center transition-colors"
                aria-label="Notion"
              >
                <FileText className="w-4 h-4 text-gray-400" />
              </a>
              <a 
                href="mailto:contact@findeep.ai"
                className="w-9 h-9 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center transition-colors"
                aria-label="Email"
              >
                <Mail className="w-4 h-4 text-gray-400" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
