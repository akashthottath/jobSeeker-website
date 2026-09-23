import api from "./api";

export const fetchJobs = () => api.get("/jobs");

export const postJob = (payload) => api.post("/jobs", payload);
