import { GeminiChat } from "../services/index.js";

export const Chat = async (req, res) => {
  try {
    const { message, history } = req.body;

    // Validasi input
    if (!message) {
      return res.status(400).json({
        success: false,
        status: 400,
        message: "kamu belum mengisikan pertanyaan apapun",
      });
    }

    const response = await GeminiChat(message, history);

    return res.status(200).json({
      success: true,
      status: 200,
      message: "Chat Success",
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
