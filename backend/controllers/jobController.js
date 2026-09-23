const Job = require("../models/Job");

// GET /jobs  (optional ?category=Design query param)
const getJobs = async (req, res) => {
  try {
    const filter = {};
    if (req.query.category && req.query.category !== "All") {
      filter.category = req.query.category;
    }

    const jobs = await Job.find(filter).sort({ createdAt: -1 });
    res.json(jobs);
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
};

// POST /jobs
const createJob = async (req, res) => {
  try {
    const { title, company, category, location, description } = req.body;

    if (!title?.trim() || !company?.trim() || !category?.trim() || !location?.trim()) {
      return res.status(400).json({
        message: "Title, company, category and location are all required",
      });
    }

    const job = await Job.create({
      title: title.trim(),
      company: company.trim(),
      category: category.trim(),
      location: location.trim(),
      description: description?.trim() || "",
    });

    res.status(201).json(job);
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
};

module.exports = { getJobs, createJob };
