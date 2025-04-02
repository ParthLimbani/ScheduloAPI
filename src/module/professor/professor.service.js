import Professor from "./professor.model.js";

const createAvailability = async (professorData, userId) => {
  let professorAvailability = await Professor.findOne({
    userId,
    day: professorData.day,
  });
  
  if(professorAvailability) {
    for (let i = 0; i < professorAvailability.startTime.length; i++) {
      if (
        (professorData.startTime > professorAvailability.startTime[i] &&
          professorData.startTime < professorAvailability.endTime[i]) ||
        (professorData.endTime > professorAvailability.startTime[i] &&
          professorData.endTime < professorAvailability.endTime[i])
      ) {
          throw new Error("TimeSlot Already available.");
      }
    }
  }
  

  professorAvailability = new Professor({...professorData, userId});

  let isBooked = [];

  for(let j=0; j<professorAvailability.startTime.length; j++) {
    isBooked.push(false);
  }

  professorAvailability.isBooked = isBooked;

  await professorAvailability.save();

  return professorAvailability;
};


export const professorService = {createAvailability}