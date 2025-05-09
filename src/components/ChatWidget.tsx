
import React, { useState, useRef, useEffect } from "react";
import { MessageCircle, Send, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import ThemeToggle from "./ThemeToggle";

// Enhanced mock AI responses for common questions with more specific keywords
const mockResponses: Record<string, string> = {
  "default": "I'm sorry, I don't have information about that specific topic. Please ask about selling software licenses, our process, or how SoftSell works.",
  "hello": "Hello! Welcome to SoftSell. How can I assist you with selling your unused software licenses today?",
  "hi": "Hi there! How can I help you sell your software licenses today?",
  "hey": "Hey! Thanks for reaching out to SoftSell. What can I help you with?",
  "sell license": "Selling your license with SoftSell is easy! Here's how it works:\n1. Upload your license details through our secure portal\n2. Our team will provide a market valuation within 24 hours\n3. Once you accept the offer, we handle the transfer and you get paid",
  "how do i sell": "Selling your license with SoftSell is easy! Here's how it works:\n1. Upload your license details through our secure portal\n2. Our team will provide a market valuation within 24 hours\n3. Once you accept the offer, we handle the transfer and you get paid",
  "price": "The value of your license depends on several factors including the software type, remaining validity period, and current market demand. Our valuation experts typically secure 50-80% of the original purchase price for our clients.",
  "worth": "The value of your license depends on several factors including the software type, remaining validity period, and current market demand. Our valuation experts typically secure 50-80% of the original purchase price for our clients.",
  "value": "The value of your license depends on several factors including the software type, remaining validity period, and current market demand. Our valuation experts typically secure 50-80% of the original purchase price for our clients.",
  "types of licenses": "We accept most major software licenses including:\n• Microsoft Office and Windows\n• Adobe Creative Suite\n• AutoCAD and other Autodesk products\n• Enterprise software like SAP, Oracle, and Salesforce\n• Many others - just ask!",
  "software": "We accept most major software licenses including:\n• Microsoft Office and Windows\n• Adobe Creative Suite\n• AutoCAD and other Autodesk products\n• Enterprise software like SAP, Oracle, and Salesforce\n• Many others - just ask!",
  "legal": "Absolutely! Software license resale is legal in many jurisdictions under the first-sale doctrine. We ensure all transactions comply with the applicable software license agreements and local laws. Our legal team reviews each transaction.",
  "time": "Our process is designed to be quick and efficient:\n• License valuation: 24-48 hours\n• Offer acceptance to payment: Typically 3-5 business days\nFor urgent sales, we also offer expedited services.",
  "how long": "Our process is designed to be quick and efficient:\n• License valuation: 24-48 hours\n• Offer acceptance to payment: Typically 3-5 business days\nFor urgent sales, we also offer expedited services.",
  "payment": "We offer flexible payment options including:\n• Direct bank transfer\n• PayPal\n• Cryptocurrency (Bitcoin, Ethereum)\nAll payments are secure and guaranteed once the license transfer is verified.",
  "get paid": "We offer flexible payment options including:\n• Direct bank transfer\n• PayPal\n• Cryptocurrency (Bitcoin, Ethereum)\nAll payments are secure and guaranteed once the license transfer is verified.",
  "buyer": "Your license will be purchased by pre-verified businesses looking to save on software costs. We maintain a large network of corporate clients, educational institutions, and SMBs seeking legitimate license transfers.",
  "who buys": "Your license will be purchased by pre-verified businesses looking to save on software costs. We maintain a large network of corporate clients, educational institutions, and SMBs seeking legitimate license transfers.",
  "contact": "You can reach our support team at support@softsell.example.com or fill out the contact form at the bottom of this page. Our team is available Monday-Friday, 9am-5pm EST.",
  "support": "You can reach our support team at support@softsell.example.com or fill out the contact form at the bottom of this page. Our team is available Monday-Friday, 9am-5pm EST.",
  "secure": "Security is our top priority. All license transfers are handled through our encrypted platform, and we use industry-standard security protocols to protect your data and payment information. We are also SOC 2 compliant.",
  "safe": "Security is our top priority. All license transfers are handled through our encrypted platform, and we use industry-standard security protocols to protect your data and payment information. We are also SOC 2 compliant.",
};

type Message = {
  id: number;
  text: string;
  isUser: boolean;
  timestamp: Date;
};

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hi there! I'm SoftSell Assistant. How can I help you sell your software licenses today?",
      isUser: false,
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  
  const messagesEndRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInputValue(e.target.value);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const findBestResponse = (query: string): string => {
    // Convert to lowercase for case-insensitive matching
    const lowercaseQuery = query.toLowerCase().trim();
    
    // Check for greeting patterns first
    if (/^(hello|hi|hey)(\s|$|!)/i.test(lowercaseQuery)) {
      if (lowercaseQuery.includes("hello")) return mockResponses["hello"];
      if (lowercaseQuery.includes("hi")) return mockResponses["hi"];
      if (lowercaseQuery.includes("hey")) return mockResponses["hey"];
    }
    
    // Match by keywords with priority scoring
    const matches: {key: string, score: number}[] = [];
    
    for (const [key, _] of Object.entries(mockResponses)) {
      if (key === "default" || key === "hello" || key === "hi" || key === "hey") continue;
      
      // Calculate how relevant this key is to the query
      if (lowercaseQuery.includes(key)) {
        // Exact phrase match gives highest score
        matches.push({key, score: key.split(' ').length * 10});
      } else {
        // Check for individual word matches
        const keyWords = key.split(' ');
        let wordMatches = 0;
        
        keyWords.forEach(word => {
          if (word.length > 3 && lowercaseQuery.includes(word)) {
            wordMatches++;
          }
        });
        
        if (wordMatches > 0) {
          matches.push({key, score: wordMatches * 5});
        }
      }
    }
    
    // Return the highest scoring match, or default
    if (matches.length > 0) {
      matches.sort((a, b) => b.score - a.score);
      return mockResponses[matches[0].key];
    }
    
    // Check specific categories
    if (lowercaseQuery.includes("price") || lowercaseQuery.includes("cost") || lowercaseQuery.includes("worth") || lowercaseQuery.includes("value")) {
      return mockResponses["price"];
    }
    if (lowercaseQuery.includes("legal") || lowercaseQuery.includes("allowed") || lowercaseQuery.includes("legitimate")) {
      return mockResponses["legal"];
    }
    if (lowercaseQuery.includes("payment") || lowercaseQuery.includes("money") || lowercaseQuery.includes("pay")) {
      return mockResponses["payment"];
    }
    if (lowercaseQuery.includes("time") || lowercaseQuery.includes("long") || lowercaseQuery.includes("fast") || lowercaseQuery.includes("quick")) {
      return mockResponses["time"];
    }
    if (lowercaseQuery.includes("sell") || lowercaseQuery.includes("process") || lowercaseQuery.includes("how")) {
      return mockResponses["sell license"];
    }
    if (lowercaseQuery.includes("type") || lowercaseQuery.includes("software") || lowercaseQuery.includes("accept")) {
      return mockResponses["types of licenses"];
    }
    if (lowercaseQuery.includes("buy") || lowercaseQuery.includes("customer") || lowercaseQuery.includes("who")) {
      return mockResponses["buyer"];
    }
    if (lowercaseQuery.includes("secure") || lowercaseQuery.includes("safe") || lowercaseQuery.includes("protect")) {
      return mockResponses["secure"];
    }
    if (lowercaseQuery.includes("contact") || lowercaseQuery.includes("support") || lowercaseQuery.includes("help")) {
      return mockResponses["contact"];
    }
    
    // Default response if no matches found
    return mockResponses["default"];
  };

  const handleSendMessage = () => {
    if (inputValue.trim() === "") return;

    // Add user message
    const userMessage: Message = {
      id: messages.length + 1,
      text: inputValue,
      isUser: true,
      timestamp: new Date(),
    };
    
    setMessages((prevMessages) => [...prevMessages, userMessage]);
    setInputValue("");
    setIsTyping(true);
    
    // Simulate AI thinking time (0.5-2 seconds)
    setTimeout(() => {
      const botResponse: Message = {
        id: messages.length + 2,
        text: findBestResponse(userMessage.text),
        isUser: false,
        timestamp: new Date(),
      };
      
      setMessages((prevMessages) => [...prevMessages, botResponse]);
      setIsTyping(false);
    }, Math.random() * 1500 + 500);
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {isOpen ? (
        <div className="bg-background border border-border shadow-lg rounded-lg w-[350px] max-h-[500px] flex flex-col overflow-hidden animate-fade-in">
          <div className="bg-softsell-600 dark:bg-softsell-800 text-white p-3 flex justify-between items-center">
            <div className="flex items-center gap-2">
              <MessageCircle size={20} />
              <span className="font-medium">SoftSell Assistant</span>
            </div>
            <Button variant="ghost" size="icon" onClick={toggleChat} className="text-white hover:bg-softsell-700">
              <X size={20} />
            </Button>
          </div>
          
          <div className="flex-grow overflow-y-auto p-4 space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.isUser ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[80%] p-3 rounded-lg ${
                    message.isUser
                      ? "bg-softsell-500 text-white"
                      : "bg-muted"
                  }`}
                >
                  <p className="whitespace-pre-line">{message.text}</p>
                  <p className="text-xs opacity-70 mt-1">
                    {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </p>
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex justify-start">
                <div className="max-w-[80%] p-3 rounded-lg bg-muted">
                  <div className="flex space-x-2">
                    <div className="w-2 h-2 rounded-full bg-softsell-400 animate-pulse"></div>
                    <div className="w-2 h-2 rounded-full bg-softsell-400 animate-pulse delay-150"></div>
                    <div className="w-2 h-2 rounded-full bg-softsell-400 animate-pulse delay-300"></div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>
          
          <div className="border-t border-border p-3">
            <div className="flex items-end gap-2">
              <Textarea
                value={inputValue}
                onChange={handleInputChange}
                onKeyDown={handleKeyDown}
                placeholder="Ask about selling licenses..."
                className="min-h-[60px] resize-none"
              />
              <Button onClick={handleSendMessage} disabled={inputValue.trim() === ""} className="h-[60px]">
                <Send size={20} />
              </Button>
            </div>
            <div className="text-xs text-muted-foreground mt-2">
              Try asking: "How do I sell my license?" or "Is this legal?"
            </div>
          </div>
        </div>
      ) : (
        <Button
          onClick={toggleChat}
          size="lg"
          className="rounded-full w-14 h-14 bg-softsell-600 dark:bg-softsell-800 hover:bg-softsell-700 shadow-lg"
        >
          <MessageCircle size={24} />
        </Button>
      )}
    </div>
  );
};

export default ChatWidget;
