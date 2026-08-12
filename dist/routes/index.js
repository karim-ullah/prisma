import { Router } from "express";
import { createTask, editTask, getTasks } from "../services/tasks.js";
import { createUser } from "../services/users.js";
const router = Router();
router.post('/api/add-task', createTask);
router.post('/api/add-user', createUser);
router.get('/api/tasks', getTasks);
router.patch('/api/edit-task/:id', editTask);
export default router;
//# sourceMappingURL=index.js.map