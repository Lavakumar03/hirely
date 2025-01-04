// HirelyDashboard.jsx
import { useState } from 'react';
import Sidebar from './Sidebar';
import Dashboard from './Dashboard';
import Users from './Users';
import PostNewJob from './PostNewJob.jsx';
import Applications from './Applications';
import JobsPosted from './JobsPosted';
import PropTypes from 'prop-types';

const HirelyDashboard = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [selectedJob, setSelectedJob] = useState(null);
  const [selectedApplication, setSelectedApplication] = useState(null);

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return <Dashboard activeTab={activeTab} setActiveTab={setActiveTab} selectedJob={selectedJob} setSelectedJob={setSelectedJob} selectedApplication={selectedApplication} setSelectedApplication={setSelectedApplication}/>;
      case 'users':
        return <Users />;
      case 'postJob':
        return <PostNewJob />;
      case 'applications':
        return <Applications selectedApplication={selectedApplication} setSelectedApplication={setSelectedApplication}/>;
      case 'postedJobs':
        return <JobsPosted selectedJob={selectedJob} setSelectedJob={setSelectedJob}/>;
      default:
        return null;
    }
  };

  return (
    <div className="flex h-screen bg-gray-950">
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      <div className="flex-1 overflow-auto">{renderContent()}</div>
    </div>
  );
};

export default HirelyDashboard;
