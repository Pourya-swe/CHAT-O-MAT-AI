import axios from "axios";

export default async function handler(req, res) {
  try {
    const { messages } = req.body;

    const apiKey = process.env.AI_API_KEY; // SAFE — not exposed
    const apiUrl = process.env.AI_API_URL; // SAFE — not exposed
    const model = process.env.AI_MODEL;

    const response = await axios.post(
      apiUrl,
      {
        model,
        messages,
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${apiKey}`,
        },
        timeout: 30000,
      }
    );

    const assistant = response.data?.choices?.[0]?.message?.content ?? null;

    if (!assistant) {
      return res.status(500).json({ error: "Invalid response format" });
    }

    return res.status(200).json({ assistant });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}
