import { processImage } from "../services/imageService";

export const removeBackgroundController = async (req: any, res: any) => {
  try {
    if (!req.file) {
      return res
        .status(400)
        .json({ success: false, message: "No se recibió archivo" });
    }

    const processedImage = await processImage(
      req.file.buffer,
      req.file.mimetype
    );
    res.set({
      "Content-Type": "image/png",
      "Access-Control-Allow-Origin": "*",
    });
    res.status(200).send(processedImage);
  } catch (error) {
    res.status(500).json({ success: false, message: (error as Error).message });
  }
};
