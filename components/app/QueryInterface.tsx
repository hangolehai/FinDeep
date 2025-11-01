import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Send, Bot, User, FileText, TrendingUp, DollarSign } from "lucide-react";

interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
  citations?: string[];
  timestamp: string;
}

const suggestedQueries = [
  { icon: DollarSign, text: "Analyze Q4 revenue forecast vs Q3 actual" },
  { icon: TrendingUp, text: "Calculate working capital metrics for November" },
  { icon: FileText, text: "Summarize key findings from latest 10-Q report" },
];

export function QueryInterface() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      role: "assistant",
      content: "Hello! I'm your FinDeep AI assistant. I can help you analyze financial data, create forecasts, and answer FP&A questions. How can I assist you today?",
      timestamp: "Just now"
    }
  ]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;

    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      role: "user",
      content: input,
      timestamp: "Just now"
    };

    // Mock AI response
    const aiMessage: Message = {
      id: (Date.now() + 1).toString(),
      role: "assistant",
      content: "Based on the analysis of your Q3 2024 10-Q report and current ERP data, I've identified the following insights:\n\n1. Revenue increased by 12.5% compared to Q2\n2. COGS decreased by 3.2%, improving gross margin to 50.2%\n3. OPEX increased by 5.1% due to marketing investments\n\nWould you like me to create a detailed variance analysis report?",
      citations: ["Q3_2024_10-Q_Report.pdf", "ERP_Export_Nov_2024.csv"],
      timestamp: "Just now"
    };

    setMessages([...messages, userMessage, aiMessage]);
    setInput("");
  };

  const handleSuggestedQuery = (query: string) => {
    setInput(query);
  };

  return (
    <div className="p-8 h-full flex flex-col">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-[#0A2540] mb-2">AI Query Interface</h1>
        <p className="text-gray-600">Ask questions about your financial data</p>
      </div>

      {/* Suggested Queries */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        {suggestedQueries.map((query, index) => {
          const Icon = query.icon;
          return (
            <Card
              key={index}
              className="cursor-pointer hover:shadow-lg transition-shadow border-[#4FD1C5]/20 hover:border-[#4FD1C5]"
              onClick={() => handleSuggestedQuery(query.text)}
            >
              <CardContent className="p-4">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[#4FD1C5]/10 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-5 h-5 text-[#4FD1C5]" />
                  </div>
                  <div className="text-sm text-gray-700">{query.text}</div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Chat Messages */}
      <Card className="flex-1 flex flex-col">
        <CardContent className="flex-1 p-6 overflow-y-auto">
          <div className="space-y-6">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex gap-4 ${message.role === "user" ? "justify-end" : "justify-start"}`}
              >
                {message.role === "assistant" && (
                  <div className="w-10 h-10 rounded-full bg-[#4FD1C5] flex items-center justify-center flex-shrink-0">
                    <Bot className="w-6 h-6 text-[#0A2540]" />
                  </div>
                )}
                
                <div className={`max-w-2xl ${message.role === "user" ? "order-first" : ""}`}>
                  <div
                    className={`p-4 rounded-lg ${
                      message.role === "user"
                        ? "bg-[#4FD1C5] text-[#0A2540]"
                        : "bg-gray-100 text-gray-900"
                    }`}
                  >
                    <div className="whitespace-pre-wrap">{message.content}</div>
                    
                    {message.citations && (
                      <div className="mt-3 pt-3 border-t border-gray-300 space-y-2">
                        <div className="text-xs font-semibold">Sources:</div>
                        {message.citations.map((citation, idx) => (
                          <div key={idx} className="flex items-center gap-2 text-xs">
                            <FileText className="w-3 h-3" />
                            <span>{citation}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                  <div className="text-xs text-gray-500 mt-1">
                    {message.timestamp}
                  </div>
                </div>

                {message.role === "user" && (
                  <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center flex-shrink-0">
                    <User className="w-6 h-6 text-gray-600" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </CardContent>

        {/* Input Area */}
        <div className="p-6 border-t border-gray-200">
          <div className="flex gap-4">
            <Input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === "Enter" && handleSend()}
              placeholder="Ask about revenue, OPEX, forecasts, variance analysis..."
              className="flex-1"
            />
            <Button
              onClick={handleSend}
              className="bg-[#4FD1C5] hover:bg-[#3DBFB5] text-[#0A2540]"
            >
              <Send className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
}

