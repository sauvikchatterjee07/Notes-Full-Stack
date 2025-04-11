const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: [true, "Title is required"],
            trim: true,
            minLength: [3, "Title must be at least 3 characters"],
            maxLength: [100, "Title must be at max 20 characters"],
        },
        description: {
            type: String,
            trim: true,
            maxLength: [500, "Title must be at max 500 characters"],
        },
        dueDate: {
            type: Date,
            set: function (value) {
                // If the input is a string in "dd-mm-yyyy" format
                if (
                    typeof value === "string" &&
                    /^\d{2}-\d{2}-\d{4}$/.test(value)
                ) {
                    const [day, month, year] = value.split("-");
                    return new Date(`${year}-${month}-${day}T00:00:00Z`);
                }
                return value;
            },
            validate: {
                validator: function (v) {
                    return v > new Date();
                },
                message: "Due date must be in the future",
            },
        },
        priority: {
            type: String,
            enum: ["low", "medium", "high"],
            default: "medium",
        },

        completed: {
            type: Boolean,
            default: false,
        },
    },
    { timestamps: true }
);

module.exports = mongoose.model("Task", taskSchema);
