// Users.jsx
const Users = () => {
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
                Search
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Users;