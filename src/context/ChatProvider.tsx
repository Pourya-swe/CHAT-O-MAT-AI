import type { ReactNode } from "react";
import { createContext, useEffect, useReducer } from "react";
import type { ChatMessage, ChatState } from "../types";
import { send } from "../services/chatApi";

type Action =
  | { type: "ADD_MESSAGE"; payload: ChatMessage }
  | { type: "SET_TYPING"; payload: boolean }
  | { type: "SET_ERROR"; payload: string | null };

// Note: Not using useLocalStorageState hook to avoid circular dependency, basically avoiding second re-render because of local storage state.
const initialState = {
  messages: JSON.parse(localStorage.getItem("chat:messages") || "[]"),
  isTyping: false,
  error: "",
};

interface ChatContextValue extends ChatState {
  sendMessage: (message: ChatMessage) => void;
}

const ChatContext = createContext<ChatContextValue>({
  ...initialState,
  sendMessage: () => {},
});

function reducer(state: ChatState, action: Action) {
  switch (action.type) {
    case "ADD_MESSAGE":
      return { ...state, messages: [...state.messages, action.payload] };
    case "SET_TYPING":
      return { ...state, isTyping: action.payload };
    case "SET_ERROR":
      return { ...state, error: action.payload };
    default:
      return state;
  }
}

function ChatProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  async function sendMessage(message: ChatMessage) {
    dispatch({ type: "ADD_MESSAGE", payload: message });
    dispatch({ type: "SET_TYPING", payload: true });
    dispatch({ type: "SET_ERROR", payload: null });

    try {
      const formattedMessage = {
        messages: [{ role: message.role, content: message.content }],
      };
      const assistant = await send(formattedMessage);

      const assistantMsg: ChatMessage = {
        id: crypto.randomUUID(),
        role: "assistant",
        content: assistant,
        createdAt: new Date().toISOString(),
      };

      dispatch({ type: "ADD_MESSAGE", payload: assistantMsg });
    } catch (error) {
      console.error(
        "Something went wrong on process of sending/receiving message:",
        error
      );
      dispatch({ type: "SET_ERROR", payload: "خطا در ارتباط با سرور" });
    } finally {
      dispatch({ type: "SET_TYPING", payload: false });
    }
  }

  useEffect(() => {
    localStorage.setItem("chat:messages", JSON.stringify(state.messages));
  }, [state.messages]);

  return (
    <ChatContext.Provider value={{ ...state, sendMessage }}>
      {children}
    </ChatContext.Provider>
  );
}

export { ChatContext, ChatProvider };
