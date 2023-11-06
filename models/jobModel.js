//---Defining the schema for the job model---
const mongoose = require('mongoose');

const jobSchema = new mongoose.Schema({
  title: String,
  description: String,
  company: String,
  location: String,
  salary: Number,
  experience:Number,
  tags: [String], // Add tags field to store an array of job tags
  applicants: [
    {
      applicantName: String,
      resume: String,
      email: String,
      phone: Number,
      address: String,
      
    },
  ],
  createdAt: {
    type: Date,
    default: Date.now,
  },
},{timestamps:true});

//--Createing model for the job schema--
const Job = mongoose.model('Job', jobSchema);

module.exports = Job;