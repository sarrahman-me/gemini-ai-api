import genAI from "../../config/gemini.js";

const GeminiGenerateText = async (message) => {
  try {
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });

    const result = await model.generateContent(message);

    const responseGemini = result.response;

    return responseGemini.text();
  } catch (error) {
    throw new Error("kesalahan terjadi pada gemini chat" + error);
  }
};

export default GeminiGenerateText;
