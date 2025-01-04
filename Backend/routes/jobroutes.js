const express = require('express');
const router = express.Router();
const {
  createJob,
  searchJobs,
  getJobById,
  updateJob,
  deleteJob,
  getJobStats,
  getRecentJobs,
  getJobsByEmployeeId  // Ensure this is included
} = require('../controllers/jobController');


// Existing routes
router.post('/create', createJob);
router.get('/search', searchJobs);
router.get('/:job_id', getJobById);
router.put('/edit/:job_id', updateJob);
router.delete('/delete/:job_id', deleteJob);
router.get('/recent-jobs/:employeeId', getRecentJobs);
router.get('/getJobsByEmployeeId/:employee_id', getJobsByEmployeeId);

// Add route for getting job stats
router.get('/stats/:employeeId', getJobStats);  // This is the missing route

module.exports = router;
