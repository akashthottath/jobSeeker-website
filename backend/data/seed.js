require("dotenv").config();
const mongoose = require("mongoose");
const Job = require("../models/Job");

const sampleJobs = [
  {
    title: "Frontend Developer",
    company: "Pixel Studio",
    category: "Development",
    location: "Remote",
    description: "Build and maintain our React-based design tools.",
  },
  {
    title: "UI/UX Designer",
    company: "Brightline",
    category: "Design",
    location: "New York, NY",
    description: "Design intuitive interfaces for our SaaS dashboard.",
  },
  {
    title: "Backend Engineer (Node.js)",
    company: "DataForge",
    category: "Development",
    location: "Austin, TX",
    description: "Own our Express/MongoDB services powering the API.",
  },
  {
    title: "Digital Marketing Specialist",
    company: "Growth Labs",
    category: "Marketing",
    location: "Remote",
    description: "Run paid campaigns and track acquisition funnels.",
  },
  {
    title: "Product Designer",
    company: "Northwind",
    category: "Design",
    location: "San Francisco, CA",
    description: "Shape end-to-end product experiences with our team.",
  },
  {
    title: "Content Marketing Manager",
    company: "Loopwork",
    category: "Marketing",
    location: "Chicago, IL",
    description: "Lead content strategy across blog, email and social.",
  },
];

const seed = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    await Job.deleteMany({});
    await Job.insertMany(sampleJobs);
    console.log(`Seeded ${sampleJobs.length} jobs into jobBoard database.`);
  } catch (err) {
    console.error("Seed error:", err.message);
  } finally {
    await mongoose.disconnect();
  }
};

seed();
