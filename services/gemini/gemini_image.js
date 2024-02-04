import genAI from "../../config/gemini.js";

const GeminiImage = async (message, base64Image) => {
  // Memisahkan data dan tipe dari string base64
  const matches = base64Image.match(/^data:([A-Za-z-+\/]+);base64,(.+)$/);

  try {
    const model = genAI.getGenerativeModel({ model: "gemini-pro-vision" });

    if (matches && matches.length === 3) {
      const contentType = matches[1];
      const base64Data = matches[2];

      const dataImage = {
        inlineData: {
          data: base64Data,
          mimeType: contentType,
        },
      };

      const result = await model.generateContent([message, dataImage]);

      const responseGemini = result.response;

      return responseGemini.text();
    } else {
      throw new Error("Format base64 tidak valid");
    }
  } catch (error) {
    throw new Error(
      "Kesalahan terjadi pada gemini generate text with image: " + error
    );
  }
};

export default GeminiImage;
