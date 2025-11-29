import { clsx } from "clsx";
import useChat from "../hooks/useChat";

function EmptyStateMessage() {
  const { isTyping } = useChat();

  return (
    <div
      dir="auto"
      className={clsx(
        "self-center grow flex basis-auto shrink min-h-2/4",
        isTyping && "animate-fade-out-up"
      )}
    >
      <p className="self-end mb-7 text-2xl text-muted">
        چطوری می تونم بهت کمک کنم؟
      </p>
    </div>
  );
}

export default EmptyStateMessage;
