import { GeminiGenerateText, GeminiImage } from "../services";

export const GenerateContent = async (req, res) => {
  try {
    const { message, image } = req.body;

    // Validasi input
    if (!message) {
      return res.status(400).json({
        success: false,
        status: 400,
        message: "kamu belum mengisikan pertanyaan apapun",
      });
    }

    let response = "";

    if (image) {
      response = await GeminiImage(message, image);
    } else {
      response = await GeminiGenerateText(message);
    }

    return res.status(200).json({
      success: true,
      status: 200,
      message: "Generate Text Success",
      data: {
        message: response,
      },
    });
  } catch (error) {
    return res.status(500).json({
      status: 500,
      success: false,
      message: "Terjadi kesalahan server" + error,
      error,
    });
  }
};
