import { Clock, Timer, ArrowLeft, ExternalLink, FileText, XCircle, CheckCircle } from 'lucide-react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';

const Applications = ({ selectedApplication, setSelectedApplication }) => {

  Applications.propTypes = {
    selectedApplication: PropTypes.object,
    setSelectedApplication: PropTypes.func.isRequired
  };

  const [selectedTab, setSelectedTab] = useState('pending');
  const [applications, setApplications] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [userDetails, setUserDetails] = useState(null);

  const Details = JSON.parse(localStorage.getItem("userDetails"));
  const employeeId = Details?.employeeId;

  const tabs = [
    { id: 'pending', label: 'Pending Review', status: 'pending' },
    { id: 'verified', label: 'Accepted', status: 'verified' },
    { id: 'rejected', label: 'Rejected', status: 'rejected' }
  ];

  useEffect(() => {
    const fetchApplications = async () => {
      try {
        setLoading(true);
        const { data } = await axios.get(
          `http://localhost:3000/api/clients/applications/${employeeId}?status=${tabs.find(tab => tab.id === selectedTab).status}`
        );
        setApplications(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    if (employeeId) {
      fetchApplications();
    }
  }, [selectedTab, employeeId]);

  useEffect(() => {
    const fetchUserDetails = async () => {
      if (!selectedApplication) return;
      
      try {
        const { data } = await axios.get(`http://localhost:3000/api/clients/user/${selectedApplication.userId}`);
        setUserDetails(data);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchUserDetails();
  }, [selectedApplication]);

  const handleStatusUpdate = async (jobId, userId, newStatus) => {
    try {
      const response = await axios.patch(
        `http://localhost:3000/api/clients/jobs/${jobId}/applications/status`,
        {
          userId,
          status: newStatus,
          comments: `Status updated to ${newStatus}`
        }
      );
  
      if (response.data.success) {
        setApplications(prevApplications => 
          prevApplications.filter(app => !(app.userId === userId && app.jobDetails.jobId === jobId))
        );
        setSelectedApplication(null);
      }
    } catch (err) {
      setError(err.message);
    }
  };

  const renderEducation = (education) => {
    if (!education?.length) {
      return <p className="text-gray-300">No education details available.</p>;
    }

    return education.map((edu, index) => (
      <div key={index} className="mb-4">
        <p className="font-medium text-gray-300">{edu.degree || 'Degree not specified'}</p>
        <p className="text-gray-300">{edu.institution || 'Institution not specified'}</p>
        <p className="text-gray-300">{edu.location || 'Location not specified'}</p>
        {edu.timeline && (
          <p className="text-sm text-gray-300">
            {new Date(edu.timeline.start_date).getFullYear()} - {edu.timeline.end_date ? new Date(edu.timeline.end_date).getFullYear() : 'Present'}
          </p>
        )}
      </div>
    ));
  };
  
  const renderApplicationDetails = () => {
    if (!selectedApplication || !userDetails) return null;

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
              <h2 className="text-2xl font-bold text-gray-100">{userDetails.name}</h2>
              <p className="text-gray-400">{selectedApplication.jobDetails.jobTitle}</p>
            </div>
            <span className="px-4 py-2 rounded-full text-sm font-medium bg-purple-500/10 text-purple-400">
              {selectedApplication.status}
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-200 mb-2">Contact Information</h3>
                <div className="space-y-2 text-gray-300">
                  <p>Email: {userDetails.email}</p>
                  <p>Phone: {userDetails.phoneNumber}</p>
                  <p>Location: {userDetails.location}</p>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-200 mb-2">Education</h3>
                <div className="space-y-2">
                  {renderEducation(userDetails.education)}
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-200 mb-2">Skills</h3>
                <div className="flex flex-wrap gap-2">
                  {userDetails.skills?.map((skill, index) => (
                    <span key={index} className="px-3 py-1 bg-gray-800 rounded-full text-sm text-gray-300">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-6">
              {userDetails.portfolioLink && (
                <div>
                  <h3 className="text-lg font-semibold text-gray-200 mb-2">Portfolio</h3>
                  <a 
                    href={userDetails.portfolioLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-purple-500 hover:text-purple-400"
                  >
                    <ExternalLink size={16} />
                    View Portfolio
                  </a>
                </div>
              )}
            </div>
          </div>

          {selectedApplication.status === 'pending' && (
            <div className="mt-8 flex gap-4">
              <button 
                onClick={() => handleStatusUpdate(
                  selectedApplication.jobDetails.jobId, 
                  selectedApplication.userId, 
                  'verified'
                )}
                className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg flex items-center gap-2"
              >
                <CheckCircle size={20} />
                Accept
              </button>
              <button 
                onClick={() => handleStatusUpdate(
                  selectedApplication.jobDetails.jobId, 
                  selectedApplication.userId, 
                  'rejected'
                )}
                className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-lg flex items-center gap-2"
              >
                <XCircle size={20} />
                Reject
              </button>
            </div>
          )}
        </div>
      </div>
    );
  };

  if (selectedApplication) {
    return renderApplicationDetails();
  }

  if (loading) {
    return <div className="p-8 text-gray-300">Loading applications...</div>;
  }

  if (error) {
    return <div className="p-8 text-red-400">Error: {error}</div>;
  }

  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-6 text-gray-100">Applications</h2>
      
      <div className="flex space-x-1 mb-6">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setSelectedTab(tab.id)}
            className={`px-4 py-2 rounded-lg flex items-center gap-2 ${
              selectedTab === tab.id 
                ? 'bg-purple-500 text-white' 
                : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
            }`}
          >
            {tab.label}
            <span className={`px-2 py-0.5 rounded-full text-xs ${
              selectedTab === tab.id 
                ? 'bg-purple-400/20 text-white' 
                : 'bg-gray-700 text-gray-400'
            }`}>
              {applications.length}
            </span>
          </button>
        ))}
      </div>

      <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl shadow-xl border border-purple-500/20 p-6">
        <div className="space-y-4">
          {applications.length === 0 ? (
            <div className="text-center text-gray-400 py-8">
              No applications found for this status
            </div>
          ) : (
            applications.map((application) => (
              <div
                key={application.applicationId}
                className="bg-gray-800/50 rounded-lg p-4 hover:bg-gray-800 transition-colors cursor-pointer"
                onClick={() => setSelectedApplication(application)}            
              >
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h4 className="font-medium text-gray-200">{application.userName}</h4>
                    <p className="text-sm text-gray-400">{application.jobDetails.jobTitle}</p>
                  </div>
                  <span className="px-3 py-1 rounded-full text-xs font-medium bg-purple-500/10 text-purple-400">
                    {application.status}
                  </span>
                </div>
                <div className="flex items-center gap-4 text-sm text-gray-400">
                  <span className="flex items-center gap-1">
                    <Clock size={14} />
                    {new Date(application.dateApplied).toLocaleDateString()}
                  </span>
                  <span className="flex items-center gap-1">
                    <Timer size={14} />
                    {application.jobDetails.location}
                  </span>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Applications;