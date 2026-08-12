import type { Request, Response } from "express";
import prisma from "../lib/prisma.js";



export const createTask = async (req: Request, res: Response) => {
    try {
        const { title, description, userId } = req.body

        

        const result = await prisma.tasks.create({
            data: {
                title,
                description,
                userId
            }
        })

        res.json({
            success: true,
            message: 'added success',
            data: result
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'failed to add task',
            error: error instanceof Error ? error.message : 'Unknown error'
        })
    }
}
