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
      query.sort({ updatedAt: -1 });
    } else if (sort === 'highest-paying') {
      query.sort({ salary: -1 });
    }


    const jobs = await query.exec()
   console.log(jobs,jobs?.applicants)
    res.json(jobs);
  } catch (err) { 
    console.log("error bal")
    res.status(500).json({ message: err.message });
  }
};

//-- updating job post by job id--
const updateJob = async (req, res) => {
  const jobId = req.params.id; // Get the job ID from the URL
  const updatedData = req.body; // New data for the job post

  try {
    const updatedJob = await Job.findByIdAndUpdate(jobId, updatedData, { new: true });
   console.log("update",updatedJob)
    if (!updatedJob) {
      return res.status(404).json({ message: 'Job post not found' });
    }
   console.log("update",updatedJob)

    res.json(updatedJob);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
 
// --Apply to aa specific  job by id --
const applyToJob = async (req, res) => {
  const jobId = req.params.id;
  console.log("id",jobId)
  const { applicantName, email, resume, phone, address } = req.body;

  try {
    const job = await Job.findById(jobId);
    console.log("found job ",job)
    if (!job) {
      return res.status(404).json({ message: 'Job not found' });
    }

    // Push the new applicant to the applicants array
    job.applicants.push({
      applicantName,
      email,
      resume,
      phone,
      address,
    });

    // Save the updated job document
    await job.save();

    res.status(201).json({ message: 'Job application submitted successfully' });
  } catch (err) { 
    console.log("error apply",err.message)
    res.status(400).json({ message: err.message });
  }
};

//-- get applicants for job application --
const getApplicantsForJob = async (req, res) => {
  const jobId = req.params.id;

  try {
    const job = await Job.findById(jobId);

    if (!job) {
      return res.status(404).json({ message: 'Job not found' });
    }

    const applicants = job.applicants; // Retrieve the list of applicants
    console.log("applicants",applicants)
    res.status(200).json(applicants);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};


module.exports = {
  createJob,
  getJobs,
  updateJob,
  applyToJob,
  getApplicantsForJob
}; 

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
      query.sort({ updatedAt: -1 });
    } else if (sort === 'highest-paying') {
      query.sort({ salary: -1 });
    }


    const jobs = await query.exec()
   console.log(jobs)
    res.json(jobs);
  } catch (err) { 
    console.log("error bal")
    res.status(500).json({ message: err.message });
  }
};

//-- updating job post by job id--
const updateJob = async (req, res) => {
  const jobId = req.params.id; // Get the job ID from the URL
  const updatedData = req.body; // New data for the job post

  try {
    const updatedJob = await Job.findByIdAndUpdate(jobId, updatedData, { new: true });
   console.log("update",updatedJob)
    if (!updatedJob) {
      return res.status(404).json({ message: 'Job post not found' });
    }
   console.log("update",updatedJob)

    res.json(updatedJob);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
 
// --Apply to aa specific  job by id --
const applyToJob = async (req, res) => {

try {
    const {jobId, applicantData } = req.body;
    const {applicantName, resume, email, phone, address} = applicantData;

    const jobApplication = new JobApplication({
      jobId,
      applicantName,
      email,
      phone,
      address,
      resume,
    });

    const savedApplication = await jobApplication.save();
    //console.log(savedApplication)
    res.status(201).json(savedApplication);
  } catch (error) { 
  //  console.log("error aply",error.message)
    res.status(400).json({ message: error.message });
  }
};


module.exports = {
  createJob,
  getJobs,
  updateJob,
  applyToJob,
}; 
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
      query.sort({ updatedAt: -1 });
    } else if (sort === 'highest-paying') {
      query.sort({ salary: -1 });
    }


    const jobs = await query.exec()
   console.log(jobs)
    res.json(jobs);
  } catch (err) { 
    console.log("error bal")
    res.status(500).json({ message: err.message });
  }
};

//-- updating job post by job id--
const updateJob = async (req, res) => {
  const jobId = req.params.id; // Get the job ID from the URL
  const updatedData = req.body; // New data for the job post

  try {
    const updatedJob = await Job.findByIdAndUpdate(jobId, updatedData, { new: true });

    if (!updatedJob) {
      return res.status(404).json({ message: 'Job post not found' });
    }

    res.json(updatedJob);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// --Apply to a a specific  job by id --
const applyToJob = async (req, res) => {
  const jobId = req.params.id;
  const { applicantName, resume, email, phone, address } = req.body;

  try {
    const job = await Job.findById(jobId);

    if (!job) {
      return res.status(404).json({ message: 'Job not found' });
    }

    //--Adding applicant's name, resume, and contact information to the applicants array
    job.applicants.push({ applicantName, resume, email, phone, address  });

    // --Saveing the updated job document in the database--
    const savedJob = await job.save();
    res.status(201).json(savedJob);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};


module.exports = {
  createJob,
  getJobs,
  updateJob,
  applyToJob,
}; 
