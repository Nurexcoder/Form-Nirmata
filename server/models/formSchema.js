// models/form.js
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
    },
  ],
});

const Form = mongoose.model("Form", formSchema);

module.exports = Form;
