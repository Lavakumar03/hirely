import { useState } from 'react';
import { ArrowRight, ArrowLeft, Building2, User, Lock, CheckCircle } from 'lucide-react';
import CustomAlert from "../../../assets/customAlert"
import { useNavigate, Link } from 'react-router-dom';

const Signup = () => {
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    companyName: '',
    companyWebsite: '',
    employeeId: '',
    mobileNumber: '',
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const validateStep = (currentStep) => {
    switch(currentStep) {
      case 1:
        if (!formData.companyName || !formData.companyWebsite || !formData.employeeId) {
          setAlertMessage('Please fill all company details');
          return false;
        }
        break;
      case 2:
        if (!formData.mobileNumber || !formData.email || !formData.firstName || !formData.lastName) {
          setAlertMessage('Please fill all personal details');
          return false;
        }
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
          setAlertMessage('Please enter a valid email');
          return false;
        }
        break;
      case 3:
        if (!formData.password || !formData.confirmPassword) {
          setAlertMessage('Please fill both password fields');
          return false;
        }
        if (formData.password !== formData.confirmPassword) {
          setAlertMessage('Passwords do not match');
          return false;
        }
        if (formData.password.length < 8) {
          setAlertMessage('Password must be at least 8 characters');
          return false;
        }
        break;
    }
    return true;
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const nextStep = () => {
    if (validateStep(step)) {
      setStep(step + 1);
    }
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateStep(3)) return;

    try {
      const response = await fetch('http://localhost:3000/api/clients/add', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.message);
      }

      setSubmitted(true);
    } catch (error) {
      setAlertMessage(error.message || 'Registration failed');
    }
  };

  const handleLoginRedirect = () => {
    navigate('/client_login');  // Navigate to the login page when clicking OK
  };
  

  return (
    <div className="min-h-screen bg-gray-950 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-gray-900 p-8 rounded-xl shadow-2xl">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-purple-500 mb-8">
            Sign Up
          </h1>
        </div>
        
        {!submitted ? (
          <>
            <div className="flex justify-between mb-8">
              {[1, 2, 3].map((num) => (
                <div key={num} className="flex flex-col items-center">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center ${
                      step >= num ? 'bg-purple-600' : 'bg-gray-700'
                    } transition-colors duration-300`}
                  >
                    {num === 1 && <Building2 className="w-5 h-5 text-white" />}
                    {num === 2 && <User className="w-5 h-5 text-white" />}
                    {num === 3 && <Lock className="w-5 h-5 text-white" />}
                  </div>
                  <div className={`mt-2 text-sm ${step >= num ? 'text-purple-400' : 'text-gray-500'}`}>
                    Step {num}
                  </div>
                </div>
              ))}
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {step === 1 && (
                <div className="space-y-4">
                  <h2 className="text-2xl font-bold text-white mb-6">Company Details</h2>
                  <div>
                    <label className="text-gray-300 block mb-2">Company Name</label>
                    <input
                      type="text"
                      name="companyName"
                      value={formData.companyName}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 rounded bg-gray-800 text-white border border-gray-700 focus:border-purple-500 focus:ring-2 focus:ring-purple-500"
                      required
                    />
                  </div>
                  <div>
                    <label className="text-gray-300 block mb-2">Company Website</label>
                    <input
                      type="url"
                      name="companyWebsite"
                      value={formData.companyWebsite}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 rounded bg-gray-800 text-white border border-gray-700 focus:border-purple-500 focus:ring-2 focus:ring-purple-500"
                      required
                    />
                  </div>
                  <div>
                    <label className="text-gray-300 block mb-2">Employee ID</label>
                    <input
                      type="text"
                      name="employeeId"
                      value={formData.employeeId}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 rounded bg-gray-800 text-white border border-gray-700 focus:border-purple-500 focus:ring-2 focus:ring-purple-500"
                      required
                    />
                  </div>
                </div>
              )}

              {step === 2 && (
                <div className="space-y-4">
                  <h2 className="text-2xl font-bold text-white mb-6">Personal Details</h2>
                  <div>
                    <label className="text-gray-300 block mb-2">Mobile Number</label>
                    <input
                      type="tel"
                      name="mobileNumber"
                      value={formData.mobileNumber}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 rounded bg-gray-800 text-white border border-gray-700 focus:border-purple-500 focus:ring-2 focus:ring-purple-500"
                      required
                    />
                  </div>
                  <div>
                    <label className="text-gray-300 block mb-2">Email Address</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 rounded bg-gray-800 text-white border border-gray-700 focus:border-purple-500 focus:ring-2 focus:ring-purple-500"
                      required
                    />
                  </div>
                  <div>
                    <label className="text-gray-300 block mb-2">First Name</label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 rounded bg-gray-800 text-white border border-gray-700 focus:border-purple-500 focus:ring-2 focus:ring-purple-500"
                      required
                    />
                  </div>
                  <div>
                    <label className="text-gray-300 block mb-2">Last Name</label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 rounded bg-gray-800 text-white border border-gray-700 focus:border-purple-500 focus:ring-2 focus:ring-purple-500"
                      required
                    />
                  </div>
                </div>
              )}

              {step === 3 && (
                <div className="space-y-4">
                  <h2 className="text-2xl font-bold text-white mb-6">Set Password</h2>
                  <div>
                    <label className="text-gray-300 block mb-2">Password</label>
                    <input
                      type="password"
                      name="password"
                      value={formData.password}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 rounded bg-gray-800 text-white border border-gray-700 focus:border-purple-500 focus:ring-2 focus:ring-purple-500"
                      required
                    />
                  </div>
                  <div>
                    <label className="text-gray-300 block mb-2">Confirm Password</label>
                    <input
                      type="password"
                      name="confirmPassword"
                      value={formData.confirmPassword}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 rounded bg-gray-800 text-white border border-gray-700 focus:border-purple-500 focus:ring-2 focus:ring-purple-500"
                      required
                    />
                  </div>
                </div>
              )}

              <div className="flex justify-between mt-8">
                {step > 1 && (
                  <button
                    type="button"
                    onClick={prevStep}
                    className="flex items-center px-4 py-2 text-sm font-medium text-white bg-gray-800 rounded-md hover:bg-gray-700"
                  >
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Previous
                  </button>
                )}
                {step < 3 && (
                  <button
                    type="button"
                    onClick={nextStep}
                    className="flex items-center px-4 py-2 text-sm font-medium text-white bg-purple-600 rounded-md hover:bg-purple-700 ml-auto"
                  >
                    Next
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </button>
                )}
                {step === 3 && (
                  <button
                    type="submit"
                    className="flex items-center px-6 py-2 text-sm font-medium text-white bg-purple-600 rounded-md hover:bg-purple-700 ml-auto"
                  >
                    Submit
                    <CheckCircle className="w-4 h-4 ml-2" />
                  </button>
                )}
              </div>
            </form>
          </>
        ) : (
          <div className="bg-purple-900/50 border border-purple-500 rounded-lg p-6 text-center">
            <CheckCircle className="w-12 h-12 text-purple-400 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-white mb-2">Registration Successful!</h3>
            <p className="text-gray-300">
              Thank you for registering. Your profile is under review and will be verified within 48 hours. 
              We will notify you via email once the verification is complete.
            </p>
            <button
              onClick={handleLoginRedirect}
              className="mt-4 px-6 py-2 text-sm font-medium text-white bg-purple-600 rounded-md hover:bg-purple-700"
            >
              OK
            </button>
          </div>
        )}
        {alertMessage && <CustomAlert message={alertMessage} onClose={() => setAlertMessage('')} />}
        <div className="text-center mt-6">
          <p className="text-sm text-gray-400">
            Already have an account?{' '}
            <Link to="/client_login" className="text-purple-500 hover:text-purple-600">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;