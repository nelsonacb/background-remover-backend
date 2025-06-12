import { Router } from "express";
import { upload } from "../config/multerConfig";
import { removeBackgroundController } from "../controllers/imageController";

const router = Router();

router.post(
  "/api/remove-background",
  upload.single("image"),
  removeBackgroundController
);

export default router;
