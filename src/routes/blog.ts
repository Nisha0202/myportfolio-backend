import express from "express";
import {
  createBlog,
  getAllBlogs,
  getBlogBySlug,
  updateBlog,
  deleteBlog,
} from "../controllers/blogController";
import { verifyToken } from "../middlewares/authMiddleware";

const router = express.Router();

router.post("/new-blog", createBlog, verifyToken);
router.get("/", getAllBlogs);
router.get("/:slug", getBlogBySlug);
router.put("/:slug", updateBlog, verifyToken);
router.delete("/:slug", deleteBlog, verifyToken);

export default router;
