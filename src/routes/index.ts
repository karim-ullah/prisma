import { Router } from "express";
import { createTask } from "../services/tasks.js";
import { createUser } from "../services/users.js";

const router = Router()

router.post('/api/add-task', createTask)
router.post('/api/add-user', createUser)

export default router
