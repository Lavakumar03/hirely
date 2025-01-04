import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import IndexPage from "./components/landingpage/index"; // Import the component correctly
import ClientSignup from "./components/client/client_signup/signup";
import ClientLogin from "./components/client/client_login/login";
import ClientDashboard from "./components/client/client_dashboard/index";



const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/client_signup" element={<ClientSignup />} />
          <Route path="/client_login" element={<ClientLogin />} />
          <Route path="/client_dashboard" element={<ClientDashboard />} />
          <Route path="*" element={<Navigate to="/index" />} /> 
          <Route path="/index" element={<IndexPage />} /> {/* Add the route for the IndexPage component */}
        </Routes>
      </div>
    </Router>
  )
}

export default App;