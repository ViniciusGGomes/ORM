import { Router } from "express";
import { UsersController } from "@/controllers/users-controller";

const usersController = new UsersController();
const usersRoutes = Router();

usersRoutes.get("/", usersController.index);
usersRoutes.post("/", usersController.create);
usersRoutes.get("/:id", usersController.show);

export { usersRoutes };
