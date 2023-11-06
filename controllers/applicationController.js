const Job = require('../models/jobModel');

// --Apply to a job--
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
  applyToJob,
};
