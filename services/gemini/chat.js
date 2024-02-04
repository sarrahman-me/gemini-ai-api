import genAI from "../../config/gemini.js";

const GeminiChat = async (message, history) => {
  try {
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });

    const chat = model.startChat({
      history,
      generationConfig: {
        maxOutputTokens: 1024,
      },
    });

    const result = await chat.sendMessage(message);

    const responseGemini = result.response;

    return responseGemini.text();
  } catch (error) {
    throw new Error("kesalahan terjadi pada gemini chat" + error);
  }
};

export default GeminiChat;
