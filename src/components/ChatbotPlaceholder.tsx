"use client";

import { useState } from "react";
import { MessageCircle, Send, X } from "lucide-react";
import { chatbotFAQs } from "@/data/chatbotFAQs";

type ChatMessage = {
  sender: "bot" | "user";
  text: string;
};

const whatsappNumber = "263787282897";

export default function ChatbotPlaceholder() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");

  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      sender: "bot",
      text:
        "Hello 👋 Welcome to MNB College. You can ask me about admissions, fees, boarding, location, ZIMSEC, Cambridge, vision or mission.",
    },
  ]);

  function findAnswer(question: string) {
    const lowerQuestion = question.toLowerCase();

    const match = chatbotFAQs.find((item) =>
      item.keywords.some((keyword) => lowerQuestion.includes(keyword))
    );

    if (match) return match.answer;

    return null;
  }

  function handleSend() {
    if (!input.trim()) return;

    const userQuestion = input.trim();
    const botAnswer = findAnswer(userQuestion);

    setMessages((previous) => [
      ...previous,
      { sender: "user", text: userQuestion },
      {
        sender: "bot",
        text:
          botAnswer ||
          "Sorry, I could not answer that question clearly. Please chat with our school office on WhatsApp for assistance.",
      },
    ]);

    setInput("");
  }

  return (
    <>
      {!open && (
        <button
          aria-label="Open MNB chatbot"
          onClick={() => setOpen(true)}
          className="fixed bottom-6 right-6 z-50 h-14 w-14 rounded-full bg-[var(--mnb-gold)] text-[var(--mnb-navy)] shadow-2xl grid place-items-center"
          title="Ask MNB"
        >
          <MessageCircle />
        </button>
      )}

      {open && (
        <div className="fixed bottom-6 right-6 z-50 w-[350px] max-w-[92vw] rounded-2xl bg-white shadow-2xl border overflow-hidden">
          <div className="bg-[var(--mnb-navy)] text-white px-4 py-3 flex items-center justify-between">
            <div>
              <h3 className="font-black">MNB Virtual Assistant</h3>
              <p className="text-xs text-blue-100">Ask general school questions</p>
            </div>

            <button onClick={() => setOpen(false)} aria-label="Close chatbot">
              <X />
            </button>
          </div>

          <div className="h-[330px] overflow-y-auto p-4 bg-[var(--mnb-light)] space-y-3">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`max-w-[85%] rounded-2xl px-4 py-3 text-sm ${
                  message.sender === "bot"
                    ? "bg-white text-gray-700"
                    : "bg-[var(--mnb-navy)] text-white ml-auto"
                }`}
              >
                {message.text}

                {message.text.includes("WhatsApp") && (
                  <a
                    href={`https://wa.me/${whatsappNumber}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 block rounded-xl bg-green-600 px-4 py-2 text-center font-bold text-white"
                  >
                    Chat on WhatsApp
                  </a>
                )}
              </div>
            ))}
          </div>

          <div className="p-3 border-t bg-white">
            <div className="flex gap-2">
              <input
                value={input}
                onChange={(event) => setInput(event.target.value)}
                onKeyDown={(event) => {
                  if (event.key === "Enter") handleSend();
                }}
                placeholder="Type your question..."
                className="flex-1 rounded-xl border px-3 py-2 text-sm outline-none"
              />

              <button
                onClick={handleSend}
                className="rounded-xl bg-[var(--mnb-gold)] px-4 py-2 text-[var(--mnb-navy)] font-bold"
              >
                <Send size={18} />
              </button>
            </div>

            <p className="mt-2 text-xs text-gray-500">
              For further clarification, you will be referred to a WhatsApp chat with our staff
            </p>
          </div>
        </div>
      )}
    </>
  );
}