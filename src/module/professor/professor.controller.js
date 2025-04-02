import { professorService } from "./professor.service.js";

const createAvailability = async(req, res) => {
    try {
        const data = await professorService.createAvailability(req.body, req.user.id);
        return res.status(200).json({data});
    }
    catch (error) {
        console.error(error);
    }
}

export const professorController = {createAvailability};