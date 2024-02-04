import genAI from "../../config/gemini.js";

const GeminiImage = async (message, image) => {
  try {
    const model = genAI.getGenerativeModel({ model: "gemini-pro-vision" });

    const prompt = message;
    const dataImage = {
      inlineData: {
        data: image,
        mimeType: "image/jpg",
      },
    };

    const result = await model.generateContent([prompt, dataImage]);

    const responseGemini = result.response;

    return responseGemini.text();
  } catch (error) {
    throw new Error(
      "kesalahan terjadi pada gemini generate text with image" + error
    );
  }
};

export default GeminiImage;
