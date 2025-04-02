import Professor from "../professor/professor.model.js";

const viewAvailability = async (userId) => {
    let professor = await Professor.findOne({userId});
    if(!professor) {
        throw new Error("Professor Does not exist.");
    }

    return professor;
}

const bookAppointments = async (userId, professorData) => {
    let professorAvailability = await Professor.findOne({
        userId,
        day: professorData.day,
    });

    for(let i=0; i<professorAvailability.startTime.length; i++) {
        if(professorAvailability.startTime[i] === professorData.startTime && professorAvailability.isBooked === true) {
            throw new Error("TimeSlot Already Booked.");
        }
        else {
            professorAvailability.isBooked[i] = true;
        }
    }

    await professorAvailability.save();

    return professorAvailability;
}

export const studentService = {viewAvailability, bookAppointments};