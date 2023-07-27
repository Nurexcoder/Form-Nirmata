const express = require("express");
const Response = require("../models/responseSchema");
const Form = require("../models/formSchema");
const router = express.Router();

router.get("/:id", async (req, res) => {
  try {
    const formId = req.params.id;
    console.log(formId);
    const form = await Form.findById(formId)
      .select("+responses")
      .populate("responses");

    if (!form) {
      return res.status(404).json({ error: "Form not found" });
    }

    let columns = form.contents.map((content, index) => {
      return {
        headerName: content.name,
        field: index.toLocaleString(),
      };
    });
    columns.unshift({
      headerName: "ID",
      field: "id",
    });
    console.log(columns);

    const rows = form.responses.map((responseMap, indexRow) => {
      const responses = {};

      responseMap.contents.map((content, indexCol) => {
        if (content.type === "date") {
          const date = new Date(content.answer);
          const day = String(date.getDate()).padStart(2, "0");
          const month = String(date.getMonth() + 1).padStart(2, "0");
          const year = String(date.getFullYear());

          const formatedDate = `${day}/${month}/${year}`;

          console.log(formatedDate);
          responses[indexCol.toLocaleString()] = formatedDate;
        } else {
          responses[indexCol.toLocaleString()] = content.answer;
        }
      });
      responses.id = indexRow;
      return responses;
    });

    const responses = {
      name: form.name,
      description: form.description,
      columns: columns,
      rows: rows,
    };
    res.status(200).json(responses);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Server error" });
  }
});
router.post("/:id", async (req, res) => {
  try {
    const data = req.body;
    const formId = req.params.id;

    const response = await Response.create({
      formId: formId,
      contents: data.contents,
    });
    const updatedForm = await Form.findByIdAndUpdate(
      formId,
      { $push: { responses: response._id } },
      { new: true } // Return the updated form after the update
    );
    res.status(201).json(response);
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
});

module.exports = router;
