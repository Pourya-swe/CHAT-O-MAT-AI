import { FaRegMoon, FaRegSun } from "react-icons/fa";
import useDarkMode from "../hooks/useDarkMode";

function ChatHeader() {
  const { isDarkMode, toggleDarkMode } = useDarkMode();
  return (
    <header className="sticky flex justify-between items-center p-4 bg-surface border-b border-border shadow-sm">
      <button
        className="text-xl text-icon focus:outline-none hover:text-text transition-colors"
        onClick={toggleDarkMode}
      >
        {isDarkMode ? <FaRegMoon /> : <FaRegSun />}
      </button>
      <h1 className="text-lg font-bold text-text">CHAT-O-MAT-AI</h1>
    </header>
  );
}

export default ChatHeader;
