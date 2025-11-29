import ChatHeader from "./components/ChatHeader";
import ChatInput from "./components/ChatInput";
import Layout from "./components/Layout";
import ChatWindow from "./components/ChatWindow";
import { ThemeProvider } from "./context/ThemeProvider";
import { ChatProvider } from "./context/ChatProvider";

function App() {
  return (
    <ChatProvider>
      <ThemeProvider>
        <Layout>
          <ChatHeader />
          <ChatWindow />
          <ChatInput />
        </Layout>
      </ThemeProvider>
    </ChatProvider>
  );
}

export default App;
