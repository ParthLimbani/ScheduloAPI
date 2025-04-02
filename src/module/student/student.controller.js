import { studentService } from "./student.service.js";

const viewAvailability = async(req, res) => {
    try {
        const data = await studentService.viewAvailability(req.params.id)
        return res.status(200).json({data});
    }
    catch (error) {
        console.error(error);
    }
}

const bookAppointments = async(req, res) => {
    try {
        const data = await studentService.bookAppointments(req.params.id, req.body);
        return res.status(200).json({data});
    }
    catch (error) {
        console.error(error);
    }
}

export const studentController = {viewAvailability, bookAppointments};