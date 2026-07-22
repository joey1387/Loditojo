import "./Inbox.css";
import { useEffect, useState } from "react";
import { Message } from "../../types/message";
import {
  FaEnvelope,
  FaCheckCircle,
  FaClock,
  FaTrashAlt,
  FaSearch,
} from "react-icons/fa";

const dummyMessages: Message[] = [
  {
    id: 1,
    title: "Order Confirmed",
    message:
      "Your order #LD2045 has been confirmed and is being processed.",
    date: "Today",
    read: false,
  },
  {
    id: 2,
    title: "Order Delivered",
    message:
      "Your MacBook Pro has been delivered successfully.",
    date: "Yesterday",
    read: true,
  },
  {
    id: 3,
    title: "Flash Sale",
    message:
      "Enjoy up to 40% off selected gadgets this weekend.",
    date: "2 days ago",
    read: true,
  },
];

const Inbox = () => {

  const [messages, setMessages] =
    useState<Message[]>([]);

  const [loading, setLoading] =
    useState(true);

  const [search, setSearch] =
    useState("");

  useEffect(() => {

    const fetchMessages = async () => {

      try {

        const response = await fetch(
          `${import.meta.env.VITE_API_URL}/notifications`,
          {
            credentials: "include",
          }
        );

        if (!response.ok) {
          throw new Error();
        }

        const data =
          await response.json();

        setMessages(data);

      } catch {

        // Fallback until backend creates notifications endpoint
        setMessages(dummyMessages);

      } finally {

        setLoading(false);

      }

    };

    fetchMessages();

  }, []);

  const filteredMessages =
    messages.filter(
      (message) =>
        message.title
          .toLowerCase()
          .includes(
            search.toLowerCase()
          ) ||
        message.message
          .toLowerCase()
          .includes(
            search.toLowerCase()
          )
    );

  if (loading) {
    return (
      <div className="loading-page">
        Loading messages...
      </div>
    );
  }

  return (

    <section className="inbox-page">

      <div className="page-header">

        <h1>Inbox</h1>

        <p>
          Notifications and updates from
          Lodito Gadgets.
        </p>

      </div>

      <div className="search-box">

        <FaSearch />

        <input
          type="text"
          placeholder="Search messages..."
          value={search}
          onChange={(e) =>
            setSearch(
              e.target.value
            )
          }
        />

      </div>

      <div className="messages-list">

        {filteredMessages.map((message) => (
                    <div
            key={message.id}
            className={`message-card ${
              !message.read
                ? "unread"
                : ""
            }`}
          >

            <div className="message-icon">

              {message.read ? (
                <FaCheckCircle />
              ) : (
                <FaEnvelope />
              )}

            </div>

            <div className="message-content">

              <div className="message-top">

                <h3>
                  {message.title}
                </h3>

                <span>
                  <FaClock />
                  {message.date}
                </span>

              </div>

              <p>
                {message.message}
              </p>

            </div>

            <button
              className="delete-message"
              onClick={() =>
                setMessages((prev) =>
                  prev.filter(
                    (item) => item.id !== message.id
                  )
                )
              }
            >
              <FaTrashAlt />
            </button>

          </div>

        ))}

        {filteredMessages.length ===
          0 && (
          <div className="empty-inbox">

            <FaEnvelope />

            <h2>
              No Messages Found
            </h2>

            <p>
              You currently have no
              notifications.
            </p>

          </div>
        )}

      </div>

    </section>

  );
};

export default Inbox;