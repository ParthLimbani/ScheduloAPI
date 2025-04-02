import mongoose from "mongoose";

const studentSchema = new mongoose.Schema( {
    professorId: {
        type: mongoose.Types.ObjectId, 
        ref: "Professor",
        required: true
    },
    bookingTime: {
        type: Date,
        required: true
    }
})