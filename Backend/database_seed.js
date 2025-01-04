// seedJobs.js
const mongoose = require('mongoose');
const Job = require('./models/Job');
const connectDB = require('./connectdb');
require('dotenv').config();

const jobsData = [
  {
    job_title: "Software Engineer",
    company_name: "Tech Solutions Inc",
    location: "New York, NY",
    job_type: "Full-Time",  // Corrected job_type
    salary_range: "$90,000 - $120,000",
    job_description: "We are seeking a talented software engineer to join our team...",
    date_posted: new Date(),
    job_category: "Engineering",
    experience_required: "3-5 years",
    education_required: "Bachelor's in Computer Science or related field",
    skills_required: ["JavaScript", "React", "Node.js", "MongoDB"],
    job_status: "Open",
    application_deadline: new Date('2024-12-31')  // Add application deadline
  },
  {
    job_title: "Senior Software Developer",
    company_name: "Software Solutions Corp",
    location: "Remote",
    job_type: "Remote",  // Corrected job_type
    salary_range: "$120,000 - $150,000",
    job_description: "Looking for a senior developer with strong backend experience...",
    date_posted: new Date(),
    job_category: "Engineering",
    experience_required: "5+ years",
    education_required: "Master's preferred",
    skills_required: ["Python", "AWS", "Microservices", "Software Architecture"],
    job_status: "Open",
    application_deadline: new Date('2024-12-25')  // Add application deadline
  },
  {
    job_title: "Frontend Developer",
    company_name: "Web Creators",
    location: "San Francisco, CA",
    job_type: "Full-Time",  // Corrected job_type
    salary_range: "$80,000 - $110,000",
    job_description: "Join our creative team building modern web applications...",
    date_posted: new Date(),
    job_category: "Engineering",
    experience_required: "2+ years",
    education_required: "Bachelor's degree",
    skills_required: ["HTML", "CSS", "JavaScript", "React", "Software Testing"],
    job_status: "Open",
    application_deadline: new Date('2024-12-30')  // Add application deadline
  }
];




const seedDatabase = async () => {
  try {
    connectDB();

    // Clear existing jobs
    await Job.deleteMany({});
    console.log('Cleared existing jobs');

    // Insert new jobs
    const insertedJobs = await Job.insertMany(jobsData);
    console.log(`Successfully inserted ${insertedJobs.length} jobs`);

    // Log the inserted jobs
    insertedJobs.forEach(job => {
      console.log(`Added job: ${job.job_title} at ${job.company_name}`);
    });

  } catch (error) {
    console.error('Error seeding database:', error);
  } finally {
    // Close the connection
    await mongoose.connection.close();
    console.log('Database connection closed');
  }
};

// Run the seed function
seedDatabase();