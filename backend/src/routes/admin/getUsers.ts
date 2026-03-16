import type { RequestHandler } from "express";
import prisma from "../../lib/prisma";
//check if admin token valid
//check if admin id matches.
export const getUsersData: RequestHandler = async (req, res) => {
    try {
        const usersData = await prisma.client.findMany({});
        if (!usersData) {
            return res.status(404).json({ message: "no data to be found" });
        }
        return res.status(200).json({ success: true, usersData });
    } catch (e) {
        return res.status(500).json({ success: false, message: "something went wrong [admin router]" });
    }
}