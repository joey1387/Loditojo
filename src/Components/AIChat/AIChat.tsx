import "./AIChat.css";
import { useState } from "react";
import botReplies from "./botReplies";
import {
  FaRobot,
  FaPaperPlane,
  FaComments,
  FaTruck,
  FaCreditCard,
  FaUndo,
  FaShieldAlt,
} from "react-icons/fa";

type Message = {
  Sender: "bot" | "user";
  text: string;
};

const AIChat = () => {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);

  const [messages, setMessages] = useState<Message[]>([
    {
      Sender: "bot",
      text: "Welcome to Loditojo Gadgets.\n\nHow can I assist you today?",
    },
  ]);

  // Helper function to resolve the best matching bot response
  const getBotReply = (userMessageText: string): string => {
    const lower = userMessageText.toLowerCase().trim();

    // 1. Specific Multi-Word Checks (Priority overrides)
    if (lower.includes("best iphone") || lower.includes("top iphone")) {
      return botReplies.best_iphone || botReplies.iphone;
    }
    if (lower.includes("best laptop") || lower.includes("top laptop")) {
      return botReplies.best_laptop || botReplies.laptop;
    }
    if (
      lower.includes("best watch") ||
      lower.includes("top watch") ||
      lower.includes("best smartwatch")
    ) {
      return botReplies.best_watch || botReplies.smartwatch;
    }

    // 2. Exact or Partial Keyword Matching
    for (const keyword of Object.keys(botReplies)) {
      // Skip internal composite keys containing underscores
      if (keyword.includes("_")) continue;

      if (lower.includes(keyword)) {
        return botReplies[keyword];
      }
    }

    // 3. Fallback Reply
    return (
      botReplies.default ||
      "Sorry, I couldn't find an answer to that.\n\nPlease contact our customer support team."
    );
  };

  const SendMessage = (message?: string) => {
    const text = message || input;

    if (!text.trim()) return;

    const userMessage: Message = {
      Sender: "user",
      text,
    };

    // Determine reply using match logic
    const reply = getBotReply(text);

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setTyping(true);

    setTimeout(() => {
      setTyping(false);
      setMessages((prev) => [
        ...prev,
        {
          Sender: "bot",
          text: reply,
        },
      ]);
    }, 800);
  };

  return (
    <>
      {open && (
        <div className="chat-window">
          <div className="chat-header">
            <div className="chat-title">
              <h3>
                <FaRobot /> Loditojo AI
              </h3>
              <small>Customer Support</small>
            </div>

            <button
              className="close-chat-btn"
              onClick={() => setOpen(false)}
              aria-label="Close Chat"
            >
              ✕
            </button>
          </div>

          <div className="chat-body">
            <div className="suggestions">
              <button onClick={() => SendMessage("delivery")}>
                <FaTruck /> Delivery
              </button>

              <button onClick={() => SendMessage("payment")}>
                <FaCreditCard /> Payment
              </button>

              <button onClick={() => SendMessage("refund")}>
                <FaUndo /> Refund
              </button>

              <button onClick={() => SendMessage("warranty")}>
                <FaShieldAlt /> Warranty
              </button>
            </div>

            {messages.map((msg, index) => (
              <div
                key={index}
                className={
                  msg.Sender === "bot" ? "bot-message" : "user-message"
                }
              >
                {msg.text}
              </div>
            ))}

            {typing && (
              <div className="bot-message typing">
                <span></span>
                <span></span>
                <span></span>
              </div>
            )}
          </div>

          <div className="chat-input">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  SendMessage();
                }
              }}
              placeholder="Ask me anything..."
            />

            <button onClick={() => SendMessage()} aria-label="Send message">
              <FaPaperPlane />
            </button>
          </div>
        </div>
      )}

      <button
        className="chat-fab"
        onClick={() => setOpen(!open)}
        aria-label="Open AI Chat Support"
      >
        <FaComments />
      </button>
    </>
  );
};

export default AIChat;