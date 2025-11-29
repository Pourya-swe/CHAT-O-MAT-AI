import clsx from "clsx";
import { LuSend } from "react-icons/lu";
import useChat from "../hooks/useChat";
import { useForm } from "react-hook-form";
import type { ChatMessage } from "../types";

interface ChatFormData {
  "chat-message": string;
}

function ChatInput() {
  const { sendMessage, messages, isTyping } = useChat();

  const {
    register,
    handleSubmit,
    reset,
    setFocus,
    formState: { isSubmitting },
  } = useForm<ChatFormData>();

  async function onSubmit(data: ChatFormData) {
    // Guard Clause
    if (!data["chat-message"].trim()) return;

    const userMsg: ChatMessage = {
      id: crypto.randomUUID(),
      role: "user",
      content: data["chat-message"].trim(),
      createdAt: new Date().toISOString(),
    };

    try {
      reset();
      setFocus("chat-message");
      await sendMessage(userMsg);
    } catch (error) {
      console.error(
        "Something went wrong on process of sending/receiving message:",
        error
      );
    }
  }

  return (
    <div
      className={clsx(
        "self-center basis-auto w-full px-7",
        !messages.length && "grow min-h-2/4",
        messages.length > 0 && "animate-slide-down"
      )}
    >
      <form
        className="py-2 max-w-4xl mx-auto"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="flex h-14 bg-surface rounded-4xl shadow-md border border-border">
          <input
            type="text"
            {...register("chat-message", { required: true })}
            placeholder={"از من بپرس..."}
            disabled={isSubmitting}
            className={
              "resize-none grow px-5 text-text placeholder-muted focus:outline-none text-base sm:text-lg"
            }
          />

          <button
            type="submit"
            disabled={isSubmitting || isTyping}
            className={`flex items-center justify-center m-1 w-12 h-12 rounded-full bg-accent`}
          >
            <LuSend size={24} className="text-on-accent" />
          </button>
        </div>
      </form>
    </div>
  );
}

export default ChatInput;
