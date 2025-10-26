import express from "express";
import {
  createProject,
  getProjects,
  getProjectById,
  updateProject,
  deleteProject,
} from "../controllers/projectController";
import { verifyToken } from "../middlewares/authMiddleware";

const router = express.Router();

router.post("/", createProject, verifyToken);
router.get("/", getProjects);
router.get("/:id", getProjectById);
router.put("/:id", updateProject, verifyToken);
router.delete("/:id", deleteProject, verifyToken);

export default router;
