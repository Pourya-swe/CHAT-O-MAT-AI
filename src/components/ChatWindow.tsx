import useChat from "../hooks/useChat";
import ChatBox from "./ChatBox";
import EmptyStateMessage from "./EmptyStateMessage";

// interface ChatWindowProps {
//   chatInitiated: boolean;
// }

function ChatWindow() {
  const { messages } = useChat();

  return (
    <div
      dir="auto"
      className="overflow-x-hidden overflow-y-auto flex flex-col grow direction-left-to-right"
    >
      {messages.length ? <ChatBox /> : <EmptyStateMessage />}
    </div>
  );
}

export default ChatWindow;
