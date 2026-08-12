import prisma from "../lib/prisma.js";
export const createTask = async (req, res) => {
    try {
        const { title, description, userId } = req.body;
        const result = await prisma.tasks.create({
            data: {
                title,
                description,
                userId
            }
        });
        res.json({
            success: true,
            message: 'added success',
            data: result
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: 'failed to add task',
            error: error instanceof Error ? error.message : 'Unknown error'
        });
    }
};
export const getTasks = async (req, res) => {
    try {
        const result = await prisma.tasks.findMany();
        res.json({
            success: true,
            message: 'tasks retrieved success',
            data: result
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: 'failed to get tasks',
            error: error instanceof Error ? error.message : 'Unknown error'
        });
    }
};
export const editTask = async (req, res) => {
    try {
        const { id } = req.params;
        const { title, description } = req.body;
        if (typeof title !== 'string' ||
            typeof description !== 'string' ||
            !title.trim() ||
            !description.trim()) {
            return res.status(400).json({
                success: false,
                message: 'title and description are required'
            });
        }
        const task = await prisma.tasks.findUnique({
            where: {
                id
            }
        });
        if (!task) {
            return res.status(404).json({
                success: false,
                message: 'task not found'
            });
        }
        const result = await prisma.tasks.update({
            where: {
                id: id
            },
            data: {
                title: title.trim(),
                description: description.trim()
            }
        });
        res.json({
            success: true,
            message: 'edited success',
            data: result
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: 'failed to edit task',
            error: error instanceof Error ? error.message : 'Unknown error'
        });
    }
};
//# sourceMappingURL=tasks.js.map