const express = require('express');
const router = express.Router();
const jobController = require('../controllers/jobController');


//--Create a job
router.post('/jobs', jobController.createJob);
//get jobs
router.get('/jobs', jobController.getJobs);
//update job by job id
router.put('/jobs/:id/update', jobController.updateJob);

// --Apply to a job by id
router.post('/jobs/:id/apply', jobController.applyToJob); 
router.get('/jobs/:id/applicants', jobController.getApplicantsForJob); 

module.exports = router; 
