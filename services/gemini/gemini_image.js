import genAI from "../../config/gemini.js";

const GeminiImage = async (message, base64Image) => {
  try {
    const model = genAI.getGenerativeModel({ model: "gemini-pro-vision" });

    const dataImage = {
      inlineData: {
        data: base64Image,
        mimeType: "image/png",
      },
    };

    const result = await model.generateContent([message, dataImage]);

    const responseGemini = result.response;

    return responseGemini.text();
  } catch (error) {
    throw new Error(
      "Kesalahan terjadi pada gemini generate text with image: " + error
    );
  }
};

export default GeminiImage;
