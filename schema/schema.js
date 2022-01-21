const {Schema, model} = require("mongoose");

const raspSchema = new Schema(
    {
        state_botton: {
            type: String,
            required: [true, "state field is required"],
        },
    },
    {timestamps: true}
);

module.exports = model("rasp", raspSchema);
