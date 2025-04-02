import mongoose from "mongoose";

const professorSchema = new mongoose.Schema( {
        userId: {
            type: mongoose.Types.ObjectId, 
            ref: "User",
            required: true
        },
        day: {
            type: String,
            enum: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
            required: true
        },
        startTime: {
            type: [Date], 
            required: true
        },
        endTime: {
            type: [Date], 
            required: true
        },
        isBooked: {
            type: [Boolean],
            required: true 
        }
    },
    {
        timestamps:  true
    }
);

const Professor = mongoose.model("Professor", professorSchema);

export default Professor;