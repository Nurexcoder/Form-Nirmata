const mongoose = require("mongoose");

const formSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  contents: [
    {
      name: {
        type: String,
      },
      type: {
        type: String,
      },
      placeholder: {
        type: String,
      },
      options: [
        {
          value: {
            type: String,
          },
          label: {
            type: String,
          },
        },
      ],
      isRequired: {
        type: Boolean,
        default: false,
      },
    },
  ],
  responses: [
    {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "Response",
      select: false,
    },
  ],
});

const Form = mongoose.model("Form", formSchema);

module.exports = Form;
