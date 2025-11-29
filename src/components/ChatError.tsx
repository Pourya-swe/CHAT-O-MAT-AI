import { LuTriangle } from "react-icons/lu";

function ChatError({ message }: { message: string }) {
  return (
    <div className="flex px-1 justify-end" aria-live="polite">
      <div
        className="max-w-[80%] p-3 rounded-lg bg-surface text-text border border-red-400 shadow-sm animate-bubble-grow"
        role="alert"
      >
        <div className="flex items-start gap-2">
          <div className="mt-0.5">
            <LuTriangle size={18} className="text-red-500" />
          </div>
          <div className="flex-1">
            <div className="font-medium text-sm">خطا</div>
            <div dir="auto" className="text-sm whitespace-pre-wrap">
              {message}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ChatError;
