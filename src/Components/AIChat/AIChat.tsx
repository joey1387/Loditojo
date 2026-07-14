import "./AIChat.css";
import { useState } from "react";
import botReplies from "./botReplies";

type Message = {
  sender: "bot" | "user";
  text: string;
};

const AIChat = () => {
  const [open, setOpen] = useState(false);

  const [input, setInput] = useState("");

  const [typing, setTyping] = useState(false);

  const [messages, setMessages] = useState<Message[]>([
    {
      sender: "bot",
      text: "👋 Hi there!\n\nWelcome to Loditojo Gadgets.\nHow can I help you today?",
    },
  ]);

  const sendMessage = (message?: string) => {
    const text = message || input;

    if (!text.trim()) return;

    const userMessage: Message = {
      sender: "user",
      text,
    };

    const lower = text.toLowerCase();

    let reply =
      "🤖 Sorry, I don't understand that yet. Please contact our customer care team.";

    Object.keys(botReplies).forEach((keyword) => {
      if (lower.includes(keyword)) {
        reply = botReplies[keyword];
      }
    });

    setMessages((prev) => [...prev, userMessage]);

    setInput("");

    setTyping(true);

    setTimeout(() => {
      setTyping(false);

      setMessages((prev) => [
        ...prev,
        {
          sender: "bot",
          text: reply,
        },
      ]);
    }, 1000);
  };

  return (
    <>
      {open && (
        <div className="chat-window">
          <div className="chat-header">
            <div>
              <h3>🤖 Loditojo AI</h3>
              <small>Customer Support</small>
            </div>

            <button onClick={() => setOpen(false)}>
              ✕
            </button>
          </div>

          <div className="chat-body">

            <div className="suggestions">

              <button
                onClick={() => sendMessage("delivery")}
              >
                🚚 Delivery
              </button>

              <button
                onClick={() => sendMessage("payment")}
              >
                💳 Payment
              </button>

              <button
                onClick={() => sendMessage("refund")}
              >
                💰 Refund
              </button>

              <button
                onClick={() => sendMessage("warranty")}
              >
                🛡 Warranty
              </button>

            </div>

            {messages.map((msg, index) => (
              <div
                key={index}
                className={
                  msg.sender === "bot"
                    ? "bot-message"
                    : "user-message"
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
              onChange={(e) =>
                setInput(e.target.value)
              }
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  sendMessage();
                }
              }}
              placeholder="Ask me anything..."
            />

            <button
              onClick={() => sendMessage()}
            >
              Send
            </button>

          </div>
        </div>
      )}

      <button
        className="chat-fab"
        onClick={() => setOpen(!open)}
      >
        💬
      </button>
    </>
  );
};

export default AIChat;