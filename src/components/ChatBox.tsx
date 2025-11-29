import { useEffect, useRef } from "react";
import useChat from "../hooks/useChat";
import MessageItem from "./MessageItem";
import TypingDots from "./TypingDots";
import ChatError from "./ChatError";

function ChatBox() {
  const { messages, isTyping, error } = useChat();
  const bottomRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  return (
    // Note: dir="auto" is used to let the browser determine the text direction based on content (Mixed Farsi + English).
    <div
      dir="auto"
      className="pt-2 self-center w-full max-w-4xl basis-auto h-full grow min-h-2/4"
    >
      <div className="space-y-3">
        {messages.map((message) => (
          <div key={message.id}>
            <MessageItem message={message} />
          </div>
        ))}
        {error && messages.length > 0 && <ChatError message={error} />}
        {isTyping && <TypingDots />}
        <div ref={bottomRef} />
      </div>
    </div>
  );
}

export default ChatBox;
