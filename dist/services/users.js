import prisma from "../lib/prisma.js";
export const createUser = async (req, res) => {
    const userData = req.body;
    const result = await prisma.user.create({ data: userData });
    res.json({
        success: true,
        message: 'user add success',
        data: result
    });
};
//# sourceMappingURL=users.js.map