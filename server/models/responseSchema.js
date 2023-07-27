const mongoose = require("mongoose");

const responseSchema = new mongoose.Schema({
  formId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "Form",
  },

  contents: [
    {
      name: {
        type: String,
      },
      type: {
        type: String,
      },
      answer: {
        type: String,
      },
    },
  ],
});

const Response = mongoose.model("Response", responseSchema);

module.exports = Response;
