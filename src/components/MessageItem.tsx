import { clsx } from "clsx";
import type { ChatMessage } from "../types";
import formatShamsi from "../utils/formatShamsi";

interface MessageItemProps {
  message: ChatMessage;
}

function MessageItem({ message }: MessageItemProps) {
  const isUser = message.role === "user";

  return (
    <div
      className={clsx("flex px-1", isUser ? "justify-end" : "justify-start")}
    >
      <div
        className={clsx(
          "max-w-[80%] p-3 rounded-lg wrap-break-word animate-bubble-grow",
          isUser
            ? "bg-primary text-on-primary shadow-md"
            : "bg-surface text-text border border-border shadow-sm"
        )}
      >
        <div dir="auto" className="whitespace-pre-wrap">
          {message.content}
        </div>
        <div className="text-xs text-muted mt-1 text-left">
          {formatShamsi(message.createdAt)}
        </div>
      </div>
    </div>
  );
}

export default MessageItem;
