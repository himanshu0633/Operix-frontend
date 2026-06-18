"use client";

import React, { useEffect, useRef, useState } from "react";
import { Bot, Send, Sparkles, TrendingUp } from "lucide-react";
import "./AiAssistant.css";
import ScrollReveal from "./ScrollReveal";
import { BRAND_NAME } from "../../config/branding";

export default function AiAssistant() {
  const [isVisible, setIsVisible] = useState(false);
  const [typedText, setTypedText] = useState("");
  const [isTyping, setIsTyping] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);

  const fullText = "Last month's net profit was $82,500 — up 28.4% from the previous month. Your highest-margin product category was food & beverages.";

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let index = 0;
    let interval: any;
    let resetTimeout: any;

    const startTyping = () => {
      setIsTyping(true);
      setTypedText("");
      index = 0;

      interval = setInterval(() => {
        setTypedText(fullText.slice(0, index + 1));
        index++;
        if (index >= fullText.length) {
          clearInterval(interval);
          setIsTyping(false);

          // Wait 5 seconds after typing completes, then reset and restart!
          resetTimeout = setTimeout(() => {
            startTyping();
          }, 5000);
        }
      }, 20); // typing speed
    };

    // Start typing after initial slide-up entry animation (700ms transition duration + 200ms pause)
    const startTimeout = setTimeout(() => {
      startTyping();
    }, 900);

    return () => {
      clearTimeout(startTimeout);
      clearInterval(interval);
      clearTimeout(resetTimeout);
    };
  }, [isVisible]);

  return (
    <section id="ai-assistant" className="section-padding" style={{ background: '#070913' }}>
      <div className="lp-container">
        <ScrollReveal animation="slide-up" duration={800}>
          <div className="section-header">
            <div className="badge">
              <Sparkles size={12} />
              <span>AI Business Assistant</span>
            </div>
            <h2>Ask Your Business Anything</h2>
            <p>Get instant answers from your business data.</p>
          </div>
        </ScrollReveal>

        <ScrollReveal animation="scale-up" duration={1000} delay={200}>
          <div className="mock-chat-window">
            {/* Chat Header */}
            <div className="mock-chat-header">
              <div className="chat-header-user">
                <div className="chat-bot-avatar">
                  <Bot size={18} />
                </div>
                <div>
                  <div className="chat-header-name">{BRAND_NAME} AI</div>
                  <div className="chat-header-status">
                    <span className="chat-status-dot"></span>
                    <span>Online</span>
                  </div>
                </div>
              </div>
              <div className="window-dots">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>

            <div className="chat-body-area">
              {/* Quick Suggestions */}
              <div className="chat-pill-row">
                <button className="chat-pill active" type="button">
                  "What was last month's profit?"
                </button>
                <button className="chat-pill" type="button">
                  "Which products need restocking?"
                </button>
                <button className="chat-pill" type="button">
                  "Who are my top customers?"
                </button>
              </div>

              {/* Message: User */}
              <div className="chat-msg-row user-row">
                <div className="chat-bubble user">
                  What was last month's profit?
                </div>
              </div>

              {/* Message: AI */}
              <div
                className="chat-msg-row"
                ref={containerRef}
                style={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? "translateY(0)" : "translateY(24px)",
                  transition: "all 0.7s cubic-bezier(0.16, 1, 0.3, 1)",
                  willChange: "transform, opacity"
                }}
              >
                <div className="ai-icon-bubble">
                  <TrendingUp size={18} />
                </div>
                <div className="chat-bubble ai">
                  {typedText}
                  {isTyping && <span className="typing-cursor"></span>}
                </div>
              </div>
            </div>

            {/* Chat Input */}
            <div className="mock-chat-input-row">
              <div className="chat-input-container">
                <span className="chat-input-placeholder">Ask your business anything...</span>
                <button className="chat-send-btn" aria-label="Send message" type="button">
                  <Send size={15} />
                </button>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
