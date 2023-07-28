// routes/formRoutes.js
const express = require("express");
const router = express.Router();
const Form = require("../models/formSchema");

// Get all forms
router.get("/", async (req, res) => {
  try {
    const forms = await Form.find();
    const resForm = forms.map((form, index) => {
      return {
        name: form.name,
        description: form.description,
        slNo: index,
        _id: form._id,
      };
    });
    res.json(resForm);
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
});
router.get("/:id", async (req, res) => {
  try {
    const forms = await Form.findById(req.params.id);
    res.json(forms);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Server error" });
  }
});

// Create a new form
router.post("/", async (req, res) => {
  try {
    const formData = req.body;
    const form = await Form.create({
      name: formData.name,
      description: formData.description,
      contents: formData.contents,
    });
    res.json(form);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Server error" });
  }
});

// Update an existing form
router.put("/:id", async (req, res) => {
  try {
    const formData = req.body;
    const form = await Form.findByIdAndUpdate(
      req.params.id,
      {
        name: formData.name,
        description: formData.description,
        contents: formData.contents,
      },
      {
        new: true,
      }
    );
    res.json(form);
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
});

// Delete a form
router.delete("/:id", async (req, res) => {
  try {
    await Form.findByIdAndRemove(req.params.id);
    res.json({ message: "Form deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
});

module.exports = router;
