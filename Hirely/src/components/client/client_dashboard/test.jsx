import { useState } from 'react';
import { 
  LayoutDashboard, 
  Users, 
  BriefcaseBusinessIcon, 
  Search,
  Building2,
  Calendar,
  DollarSign,
  GraduationCap,
  MapPin,
  Tags, 
  Clock,
  CheckCircle,
  XCircle,
  Timer,
  ExternalLink,
  ChevronRight,
  FileText,
  Briefcase,
  Edit,
  Trash2,
  ArrowLeft
} from 'lucide-react';

const HirelyDashboard = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [selectedApplication, setSelectedApplication] = useState(null);
  const [selectedJob, setSelectedJob] = useState(null);

  const jobCategories = [
    "Technology",
    "Finance",
    "Healthcare",
    "Marketing",
    "Sales",
    "Education",
    "Other"
  ];

  const recentApplications = [
    {
      jobTitle: "Senior Frontend Developer",
      applicantName: "John Doe",
      status: "Pending Review",
      appliedDate: "2024-12-20",
      experience: "5 years"
    },
    {
      jobTitle: "UX Designer",
      applicantName: "Jane Smith",
      status: "Interviewed",
      appliedDate: "2024-12-19",
      experience: "3 years"
    },
    {
      jobTitle: "Backend Developer",
      applicantName: "Mike Johnson",
      status: "Shortlisted",
      appliedDate: "2024-12-18",
      experience: "4 years"
    }
  ];

  const activeJobs = [
    {
      title: "Full Stack Developer",
      location: "San Francisco, CA",
      applications: 12,
      deadline: "2024-12-31",
      status: "Active"
    },
    {
      title: "Product Manager",
      location: "New York, NY",
      applications: 8,
      deadline: "2024-12-28",
      status: "Active"
    },
    {
      title: "DevOps Engineer",
      location: "Remote",
      applications: 15,
      deadline: "2024-12-25",
      status: "Active"
    }
  ];


  const jobTypes = [
    "Full-Time",
    "Part-Time",
    "Contract",
    "Internship",
    "Remote"
  ];

  const allApplications = [
    {
      id: 1,
      jobTitle: "Senior Frontend Developer",
      applicantName: "John Doe",
      status: "Pending Review",
      appliedDate: "2024-12-20",
      experience: "5 years",
      email: "john.doe@email.com",
      phone: "+1 234 567 8900",
      education: "BS Computer Science",
      skills: ["React", "TypeScript", "Node.js"],
      coverLetter: "I am excited to apply for this position...",
      portfolio: "https://johndoe.dev",
      resumeLink: "https://resume.pdf"
    },
    // Add more applications...
  ];

  const allPostedJobs = [
    {
      id: 1,
      title: "Full Stack Developer",
      location: "San Francisco, CA",
      applications: 12,
      deadline: "2024-12-31",
      status: "Active",
      description: "We are looking for a Full Stack Developer...",
      requirements: ["5+ years experience", "React expertise", "Node.js"],
      salary: "$120,000 - $150,000",
      type: "Full-Time",
      category: "Technology",
      education: "Bachelor's degree",
      skills: ["React", "Node.js", "MongoDB"],
      company: "Tech Corp"
    },
    // Add more jobs...
  ];

  const renderApplicationDetails = () => {
    const application = selectedApplication;
    return (
      <div className="p-8">
        <button 
          onClick={() => setSelectedApplication(null)}
          className="flex items-center gap-2 text-purple-500 hover:text-purple-400 mb-6"
        >
          <ArrowLeft size={20} />
          Back to Applications
        </button>
        <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl shadow-xl border border-purple-500/20 p-6">
          <div className="flex justify-between items-start mb-6">
            <div>
              <h2 className="text-2xl font-bold text-gray-100">{application.applicantName}</h2>
              <p className="text-gray-400">{application.jobTitle}</p>
            </div>
            <span className="px-4 py-2 rounded-full text-sm font-medium bg-purple-500/10 text-purple-400">
              {application.status}
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-200 mb-2">Contact Information</h3>
                <div className="space-y-2 text-gray-300">
                  <p>Email: {application.email}</p>
                  <p>Phone: {application.phone}</p>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-200 mb-2">Experience & Education</h3>
                <div className="space-y-2 text-gray-300">
                  <p>Experience: {application.experience}</p>
                  <p>Education: {application.education}</p>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-200 mb-2">Skills</h3>
                <div className="flex flex-wrap gap-2">
                  {application.skills.map((skill, index) => (
                    <span key={index} className="px-3 py-1 bg-gray-800 rounded-full text-sm text-gray-300">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-200 mb-2">Cover Letter</h3>
                <p className="text-gray-300">{application.coverLetter}</p>
              </div>

              <div className="space-y-2">
                <a 
                  href={application.portfolio}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-purple-500 hover:text-purple-400"
                >
                  <ExternalLink size={16} />
                  View Portfolio
                </a>
                <a 
                  href={application.resumeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-purple-500 hover:text-purple-400"
                >
                  <FileText size={16} />
                  View Resume
                </a>
              </div>
            </div>
          </div>

          <div className="mt-8 flex gap-4">
            <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg flex items-center gap-2">
              <CheckCircle size={20} />
              Accept
            </button>
            <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-lg flex items-center gap-2">
              <XCircle size={20} />
              Reject
            </button>
          </div>
        </div>
      </div>
    );
  };

  const renderJobDetails = () => {
    const job = selectedJob;
    return (
      <div className="p-8">
        <button 
          onClick={() => setSelectedJob(null)}
          className="flex items-center gap-2 text-purple-500 hover:text-purple-400 mb-6"
        >
          <ArrowLeft size={20} />
          Back to Jobs
        </button>
        <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl shadow-xl border border-purple-500/20 p-6">
          <div className="flex justify-between items-start mb-6">
            <div>
              <h2 className="text-2xl font-bold text-gray-100">{job.title}</h2>
              <p className="text-gray-400">{job.company}</p>
            </div>
            <div className="flex gap-2">
              <button 
                onClick={() => setActiveTab('editJob')}
                className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg flex items-center gap-2"
              >
                <Edit size={16} />
                Edit
              </button>
              <button className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg flex items-center gap-2">
                <Trash2 size={16} />
                Remove
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-200 mb-2">Job Details</h3>
                <div className="space-y-2 text-gray-300">
                  <p>Location: {job.location}</p>
                  <p>Type: {job.type}</p>
                  <p>Category: {job.category}</p>
                  <p>Salary: {job.salary}</p>
                  <p>Applications: {job.applications}</p>
                  <p>Deadline: {job.deadline}</p>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-200 mb-2">Requirements</h3>
                <ul className="list-disc list-inside space-y-1 text-gray-300">
                  {job.requirements.map((req, index) => (
                    <li key={index}>{req}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-200 mb-2">Description</h3>
                <p className="text-gray-300">{job.description}</p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-200 mb-2">Required Skills</h3>
                <div className="flex flex-wrap gap-2">
                  {job.skills.map((skill, index) => (
                    <span key={index} className="px-3 py-1 bg-gray-800 rounded-full text-sm text-gray-300">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
  };

  const stats = {
    postedJobs: 12,
    totalApplicants: 156,
    activeListings: 8
  };

  const renderContent = () => {
    switch(activeTab) {

      
      case 'dashboard':
        return (
          <div className="p-8">
            <h2 className="text-2xl font-bold mb-8 text-gray-100">Dashboard Overview</h2>
            
            {/* Stats Overview */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-xl shadow-xl border border-purple-500/20">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-gray-400">Posted Jobs</h3>
                  <LayoutDashboard className="text-purple-500" size={24} />
                </div>
                <p className="text-4xl font-bold text-gray-100">{stats.postedJobs}</p>
              </div>
              <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-xl shadow-xl border border-purple-500/20">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-gray-400">Total Applicants</h3>
                  <Users className="text-purple-500" size={24} />
                </div>
                <p className="text-4xl font-bold text-gray-100">{stats.totalApplicants}</p>
              </div>
              <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-xl shadow-xl border border-purple-500/20">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-gray-400">Active Listings</h3>
                  <BriefcaseBusinessIcon className="text-purple-500" size={24} />
                </div>
                <p className="text-4xl font-bold text-gray-100">{stats.activeListings}</p>
              </div>
            </div>

            {/* Two Main Sections */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Recent Applications Section */}
              <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl shadow-xl border border-purple-500/20 p-6">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-semibold text-gray-100">Recent Applications</h3>
                  <button className="text-purple-500 hover:text-purple-400 flex items-center gap-1">
                    View All <ChevronRight size={16} />
                  </button>
                </div>
                <div className="space-y-4">
                  {recentApplications.map((application, index) => (
                    <div key={index} className="bg-gray-800/50 rounded-lg p-4 hover:bg-gray-800 transition-colors">
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <h4 className="font-medium text-gray-200">{application.applicantName}</h4>
                          <p className="text-sm text-gray-400">{application.jobTitle}</p>
                        </div>
                        <span className="px-3 py-1 rounded-full text-xs font-medium bg-purple-500/10 text-purple-400">
                          {application.status}
                        </span>
                      </div>
                      <div className="flex items-center gap-4 text-sm text-gray-400">
                        <span className="flex items-center gap-1">
                          <Clock size={14} />
                          {application.appliedDate}
                        </span>
                        <span className="flex items-center gap-1">
                          <Timer size={14} />
                          {application.experience}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Active Job Listings Section */}
              <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl shadow-xl border border-purple-500/20 p-6">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-semibold text-gray-100">Active Job Listings by You</h3>
                  <button className="text-purple-500 hover:text-purple-400 flex items-center gap-1">
                    View All <ChevronRight size={16} />
                  </button>
                </div>
                <div className="space-y-4">
                  {activeJobs.map((job, index) => (
                    <div key={index} className="bg-gray-800/50 rounded-lg p-4 hover:bg-gray-800 transition-colors">
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <h4 className="font-medium text-gray-200">{job.title}</h4>
                          <p className="text-sm text-gray-400">{job.location}</p>
                        </div>
                        <span className="px-3 py-1 rounded-full text-xs font-medium bg-green-500/10 text-green-400">
                          {job.status}
                        </span>
                      </div>
                      <div className="flex items-center gap-4 text-sm text-gray-400">
                        <span className="flex items-center gap-1">
                          <Users size={14} />
                          {job.applications} Applications
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock size={14} />
                          Deadline: {job.deadline}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        );
      case 'users':
        return (
          <div className="p-8">
            <h2 className="text-2xl font-bold mb-8 text-gray-100">User Search</h2>
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-xl shadow-xl border border-purple-500/20">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2 text-gray-300">Location</label>
                  <input 
                    type="text" 
                    className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg text-gray-100 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-colors" 
                    placeholder="Enter location" 
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 text-gray-300">Study</label>
                  <input 
                    type="text" 
                    className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg text-gray-100 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-colors" 
                    placeholder="Field of study" 
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 text-gray-300">Skills</label>
                  <input 
                    type="text" 
                    className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg text-gray-100 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-colors" 
                    placeholder="Enter skills" 
                  />
                </div>
                <div className="flex items-end">
                  <button className="w-full bg-purple-600 hover:bg-purple-700 text-white p-3 rounded-lg flex items-center justify-center gap-2 transition-colors shadow-lg">
                    <Search size={20} />
                    Search
                  </button>
                </div>
              </div>
            </div>
          </div>
        );
        case 'postJob':
          return (
            <div className="p-8">
              <h2 className="text-2xl font-bold mb-8 text-gray-100">Post New Job</h2>
              <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-xl shadow-xl border border-purple-500/20">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Left Column */}
                    <div className="space-y-6">
                      <div>
                        <label className="block text-sm font-medium mb-2 text-gray-300">Job ID</label>
                        <input 
                          type="text" 
                          className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg text-gray-100 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-colors" 
                          placeholder="Enter job ID"
                          required 
                        />
                      </div>
  
                      <div>
                        <label className="block text-sm font-medium mb-2 text-gray-300">Job Title</label>
                        <input 
                          type="text" 
                          className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg text-gray-100 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-colors" 
                          placeholder="e.g. Software Engineer"
                          required 
                        />
                      </div>
  
                      <div>
                        <label className="block text-sm font-medium mb-2 text-gray-300">Company Name</label>
                        <input 
                          type="text" 
                          className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg text-gray-100 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-colors" 
                          placeholder="Enter company name"
                          required 
                        />
                      </div>
  
                      <div>
                        <label className="block text-sm font-medium mb-2 text-gray-300">Location</label>
                        <div className="relative">
                          <MapPin className="absolute left-3 top-3.5 text-gray-400" size={18} />
                          <input 
                            type="text" 
                            className="w-full p-3 pl-10 bg-gray-800 border border-gray-700 rounded-lg text-gray-100 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-colors" 
                            placeholder="e.g. San Francisco, CA"
                            required 
                          />
                        </div>
                      </div>
  
                      <div>
                        <label className="block text-sm font-medium mb-2 text-gray-300">Job Type</label>
                        <select 
                          className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg text-gray-100 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-colors"
                          required
                        >
                          <option value="">Select job type</option>
                          {jobTypes.map(type => (
                            <option key={type} value={type}>{type}</option>
                          ))}
                        </select>
                      </div>
  
                      <div>
                        <label className="block text-sm font-medium mb-2 text-gray-300">Salary Range</label>
                        <div className="relative">
                          <DollarSign className="absolute left-3 top-3.5 text-gray-400" size={18} />
                          <input 
                            type="text" 
                            className="w-full p-3 pl-10 bg-gray-800 border border-gray-700 rounded-lg text-gray-100 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-colors" 
                            placeholder="e.g. $70,000 - $90,000"
                            required 
                          />
                        </div>
                      </div>
                    </div>
  
                    {/* Right Column */}
                    <div className="space-y-6">
                      <div>
                        <label className="block text-sm font-medium mb-2 text-gray-300">Experience Required</label>
                        <input 
                          type="text" 
                          className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg text-gray-100 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-colors" 
                          placeholder="e.g. 2+ years"
                          required 
                        />
                      </div>
  
                      <div>
                        <label className="block text-sm font-medium mb-2 text-gray-300">Education Required</label>
                        <div className="relative">
                          <GraduationCap className="absolute left-3 top-3.5 text-gray-400" size={18} />
                          <input 
                            type="text" 
                            className="w-full p-3 pl-10 bg-gray-800 border border-gray-700 rounded-lg text-gray-100 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-colors" 
                            placeholder="e.g. Bachelor's Degree"
                            required 
                          />
                        </div>
                      </div>
  
                      <div>
                        <label className="block text-sm font-medium mb-2 text-gray-300">Skills Required</label>
                        <div className="relative">
                          <Tags className="absolute left-3 top-3.5 text-gray-400" size={18} />
                          <input 
                            type="text" 
                            className="w-full p-3 pl-10 bg-gray-800 border border-gray-700 rounded-lg text-gray-100 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-colors" 
                            placeholder="e.g. JavaScript, React, Node.js"
                            required 
                          />
                        </div>
                      </div>
  
                      <div>
                        <label className="block text-sm font-medium mb-2 text-gray-300">Job Category</label>
                        <select 
                          className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg text-gray-100 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-colors"
                          required
                        >
                          <option value="">Select category</option>
                          {jobCategories.map(category => (
                            <option key={category} value={category}>{category}</option>
                          ))}
                        </select>
                      </div>
  
                      <div>
                        <label className="block text-sm font-medium mb-2 text-gray-300">Application Deadline</label>
                        <div className="relative">
                          <Calendar className="absolute left-3 top-3.5 text-gray-400" size={18} />
                          <input 
                            type="date" 
                            className="w-full p-3 pl-10 bg-gray-800 border border-gray-700 rounded-lg text-gray-100 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-colors" 
                            required 
                          />
                        </div>
                      </div>
  
                      <div>
                        <label className="block text-sm font-medium mb-2 text-gray-300">Job Status</label>
                        <select 
                          className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg text-gray-100 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-colors"
                          required
                        >
                          <option value="Open">Open</option>
                          <option value="Closed">Closed</option>
                          <option value="Draft">Draft</option>
                        </select>
                      </div>
                    </div>
                  </div>
  
                  {/* Full Width Fields */}
                  <div>
                    <label className="block text-sm font-medium mb-2 text-gray-300">Job Description</label>
                    <textarea 
                      className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg text-gray-100 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-colors h-32" 
                      placeholder="Enter detailed job description"
                      required
                    ></textarea>
                  </div>
  
                  <button 
                    type="submit" 
                    className="w-full bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg transition-colors shadow-lg flex items-center justify-center gap-2"
                  >
                    <BriefcaseBusinessIcon size={20} />
                    Post Job
                  </button>
                </form>
              </div>
            </div>
          );
          case 'applications':
        if (selectedApplication) {
          return renderApplicationDetails();
        }
        return (
          <div className="p-8">
            <h2 className="text-2xl font-bold mb-8 text-gray-100">All Applications</h2>
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl shadow-xl border border-purple-500/20 p-6">
              <div className="space-y-4">
                {allApplications.map((application, index) => (
                  <div 
                    key={index} 
                    className="bg-gray-800/50 rounded-lg p-4 hover:bg-gray-800 transition-colors cursor-pointer"
                    onClick={() => setSelectedApplication(application)}
                  >
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h4 className="font-medium text-gray-200">{application.applicantName}</h4>
                        <p className="text-sm text-gray-400">{application.jobTitle}</p>
                      </div>
                      <span className="px-3 py-1 rounded-full text-xs font-medium bg-purple-500/10 text-purple-400">
                        {application.status}
                      </span>
                    </div>
                    <div className="flex items-center gap-4 text-sm text-gray-400">
                      <span className="flex items-center gap-1">
                        <Clock size={14} />
                        {application.appliedDate}
                      </span>
                      <span className="flex items-center gap-1">
                        <Timer size={14} />
                        {application.experience}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );
      case 'postedJobs':
        if (selectedJob) {
          return renderJobDetails();
        }
        return (
          <div className="p-8">
            <h2 className="text-2xl font-bold mb-8 text-gray-100">Posted Jobs</h2>
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl shadow-xl border border-purple-500/20 p-6">
              <div className="space-y-4">
                {allPostedJobs.map((job, index) => (
                  <div 
                    key={index} 
                    className="bg-gray-800/50 rounded-lg p-4 hover:bg-gray-800 transition-colors cursor-pointer"
                    onClick={() => setSelectedJob(job)}
                  >
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h4 className="font-medium text-gray-200">{job.title}</h4>
                        <p className="text-sm text-gray-400">{job.location}</p>
                      </div>
                      <span className="px-3 py-1 rounded-full text-xs font-medium bg-green-500/10 text-green-400">
                        {job.status}
                      </span>
                    </div>
                    <div className="flex items-center gap-4 text-sm text-gray-400">
                      <span className="flex items-center gap-1">
                        <Users size={14} />
                        {job.applications} Applications
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock size={14} />
                        Deadline: {job.deadline}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="flex h-screen bg-gray-950">
      {/* Sidebar */}
      <div className="w-64 bg-gray-900 border-r border-purple-500/20">
        <div className="p-6 border-b border-purple-500/20">
          <div className="flex items-center gap-3">
            <Building2 className="text-purple-500" size={28} />
            <h1 className="text-xl font-bold text-gray-100">Hirely</h1>
          </div>
        </div>
        <nav className="p-4">
          <ul className="space-y-2">
            <li>
              <button
                onClick={() => setActiveTab('dashboard')}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
                  activeTab === 'dashboard' 
                    ? 'bg-purple-500/10 text-purple-500 shadow-lg shadow-purple-500/10' 
                    : 'text-gray-400 hover:bg-gray-800 hover:text-gray-200'
                }`}
              >
                <LayoutDashboard size={20} />
                Dashboard
              </button>
            </li>
            <li>
              <button
                onClick={() => setActiveTab('users')}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
                  activeTab === 'users' 
                    ? 'bg-purple-500/10 text-purple-500 shadow-lg shadow-purple-500/10' 
                    : 'text-gray-400 hover:bg-gray-800 hover:text-gray-200'
                }`}
              >
                <Users size={20} />
                Users
              </button>
            </li>
            <li>
              <button
                onClick={() => setActiveTab('postJob')}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
                  activeTab === 'postJob' 
                    ? 'bg-purple-500/10 text-purple-500 shadow-lg shadow-purple-500/10' 
                    : 'text-gray-400 hover:bg-gray-800 hover:text-gray-200'
                }`}
              >
                <BriefcaseBusinessIcon size={20} />
                Post Job
              </button>
            </li>
            <li>
              <button
                onClick={() => {
                  setActiveTab('applications');
                  setSelectedApplication(null);
                }}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
                  activeTab === 'applications' 
                    ? 'bg-purple-500/10 text-purple-500 shadow-lg shadow-purple-500/10' 
                    : 'text-gray-400 hover:bg-gray-800 hover:text-gray-200'
                }`}
              >
                <FileText size={20} />
                Applications
              </button>
            </li>
            <li>
              <button
                onClick={() => {
                  setActiveTab('postedJobs');
                  setSelectedJob(null);
                }}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
                  activeTab === 'postedJobs' 
                    ? 'bg-purple-500/10 text-purple-500 shadow-lg shadow-purple-500/10' 
                    : 'text-gray-400 hover:bg-gray-800 hover:text-gray-200'
                }`}
              >
                <FileText size={20} />
                Jobs Posted
              </button>
            </li>
          </ul>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        {renderContent()}
      </div>
    </div>
  );
};

export default HirelyDashboard;