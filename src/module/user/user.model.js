import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
    {
        firstName: {
            type: String,
            required: true,
            trim: true
        },
        lastName: {
            type: String,
            trim: true
        },
        email: {
            type: String,
            unique: true,
            trim: true,
            required: true,
            set: (value, string) => value.toLowerCase(),
        },
        phoneNumber: {
            type: String,
            unique: true,
            required: true,
            trim: true
        },
        password: {
            type: String,
            unique: true,
            required: true,
            minLength: 6
        },
        role: {
            type: String,
            enum: ["student", "professor"],
            required: true
        }
    },
    {
        timestamps:  true
    }
);

userSchema.methods.toJSON = function () {
    const user = this.toObject();
    delete user.password;
    return user;
}

const User = mongoose.model("User", userSchema);

export default User;