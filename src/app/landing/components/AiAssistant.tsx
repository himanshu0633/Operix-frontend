import { Bot, Send, Sparkles, TrendingUp } from "lucide-react";
import "./AiAssistant.css";


export default function AiAssistant() {
  return (
    <section id="ai-assistant" className="section-padding" style={{ background: '#070913' }}>
      <div className="lp-container">
        <div className="section-header">
          <div className="badge">
            <Sparkles size={12} />
            <span>AI Business Assistant</span>
          </div>
          <h2>Ask Your Business Anything</h2>
          <p>Get instant answers from your business data.</p>
        </div>

        <div className="mock-chat-window">
          {/* Chat Header */}
          <div className="mock-chat-header">
            <div className="chat-header-user">
              <div className="chat-bot-avatar">
                <Bot size={18} />
              </div>
              <div>
                <div className="chat-header-name">Operix AI</div>
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
            <div className="chat-msg-row">
              <div className="ai-icon-bubble">
                <TrendingUp size={18} />
              </div>
              <div className="chat-bubble ai">
                Last month's net profit was $82,500 — up 28.4% from the previous month.
                Your highest-margin product category wa
                <span className="typing-cursor"></span>
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
      </div>
    </section>
  );
}
