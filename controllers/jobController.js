const Job = require('../models/jobModel');

// --Create a new job--
const createJob = async (req, res) => {
  const { title, description, company, location, salary,experience,tags} = req.body;
  
  console.log("body:-",title,description,company,location,salary,tags,experience)

  const job = new Job({
    title,
    description,
    company,
    location,
    salary,
    experience,
    tags,
    applicants: [],
  });

  try {
    const savedJob = await job.save();
    console.log("save",savedJob)
    res.status(201).json(savedJob);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// --get jobs--
const getJobs = async (req, res) => {
  const { title, location, company, tags, sort, experience } = req.query;
  const filter = {};

  // Create a filter object based on provided query parameters
  if (title) filter.title = new RegExp(title, 'i');
  if (location) filter.location = new RegExp(location, 'i');
  if (company) filter.company = new RegExp(company, 'i');
  if (tags) filter.tags = { $in: tags.split(',') };
  if (experience) filter.experience = { $gte: parseInt(experience) };

  try {
    let query;

    // Check if any filter parameters are provided
    if (Object.keys(filter).length === 0) {
      // No query parameters provided, fetch all jobs
      query = Job.find();
    } else {
      // Query parameters provided, fetch data according to query parameter
      query = Job.find(filter);
    }

    // Apply sorting based on the 'sort' query parameter
    if (sort === 'newest') {
      query.sort({ createdAt: -1 });
    } else if (sort === 'highest-paying') {
      query.sort({ salary: -1 });
    }


    const jobs = await query.exec()
 
    res.json(jobs);
  } catch (err) { 
    console.log("error bal")
    res.status(500).json({ message: err.message });
  }
};

module.exports = {
  createJob,
  getJobs,
  
};