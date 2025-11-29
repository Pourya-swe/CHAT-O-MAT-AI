import axios from "axios";

async function send(params: { messages: { role: string; content: string }[] }) {
  const res = await axios.post("/api/sendChat", {
    messages: params.messages,
  });

  return res.data.assistant;
}

export { send };
