import prisma from "../lib/prisma.js";
export const createTask = async (req, res) => {
    try {
        const { title, description, userId } = req.body;
        if (typeof title !== 'string' ||
            typeof description !== 'string' ||
            typeof userId !== 'string' ||
            !title.trim() ||
            !description.trim() ||
            !userId.trim()) {
            return res.status(400).json({
                success: false,
                message: 'title, description, and userId are required'
            });
        }
        const user = await prisma.user.findUnique({
            where: {
                id: userId.trim()
            }
        });
        if (!user) {
            return res.status(404).json({
                success: false,
                message: 'user not found'
            });
        }
        const result = await prisma.tasks.create({
            data: {
                title: title.trim(),
                description: description.trim(),
                userId: userId.trim()
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
//# sourceMappingURL=tasks.js.map