import { Router } from "express";
import { QuestionsController } from "@/controllers/questions-controller";

const questionsController = new QuestionsController();

const questionsRoutes = Router();

questionsRoutes.get("/", questionsController.index);
questionsRoutes.post("/", questionsController.create);
questionsRoutes.put("/:id", questionsController.update);
questionsRoutes.delete("/:id", questionsController.remove);

export { questionsRoutes };
