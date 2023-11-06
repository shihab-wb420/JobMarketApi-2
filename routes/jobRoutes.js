const express = require('express');
const router = express.Router();
const jobController = require('../controllers/jobController');
const applicationController = require('../controllers/applicationController');

//--Create a job
router.post('/jobs', jobController.createJob);
//get jobs
router.get('/jobs', jobController.getJobs);
//update job by job id
router.put('/jobs/:id/update', jobUpdateController.updateJob);

// --Apply to a job
router.post('/jobs/:id/apply', applicationController.applyToJob);

module.exports = router; 
