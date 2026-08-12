import { Router } from "express";
import { createTask } from "../services/tasks.js";
const router = Router();
router.post('/api/add-task', createTask);
export default router;
//# sourceMappingURL=index.js.map