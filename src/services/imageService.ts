import { removeBackground } from "@imgly/background-removal-node";

export const processImage = async (buffer: Buffer, mimeType: string) => {
  const blob = new Blob([buffer], { type: mimeType });
  const resultBlob = await removeBackground(blob);
  return Buffer.from(await resultBlob.arrayBuffer());
};
