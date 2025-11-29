import { useContext } from "react";
import { ChatContext } from "../context/ChatProvider";

function useChat() {
  const context = useContext(ChatContext);

  if (!context)
    throw new Error("useChatState must be used within ChatProvider");

  return context;
}

export default useChat;
