import { useState, useEffect } from 'react';
import axios from 'axios';

const SupportersView = () => {
  const [supporters, setSupporters] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchSupporters = async () => {
    try {
      const response = await axios.get('https://be-pustantarannepal.onrender.com/api/supporters', {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('adminToken')}`
        }
      });
      setSupporters(response.data.supporters);
    } catch (error) {
      console.error('Error fetching supporters:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this supporter?')) {
      try {
        await axios.delete(`https://be-pustantarannepal.onrender.com/api/supporters/${id}`, {
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('adminToken')}`
          }
        });
        setSupporters(supporters.filter(supporter => supporter._id !== id));
      } catch (error) {
        console.error('Error deleting supporter:', error);
      }
    }
  };

  useEffect(() => {
    fetchSupporters();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-teal-500"></div>
      </div>
    );
  }

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <h2 className="text-2xl font-bold text-teal-600 mb-6">Manage Supporters</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {supporters.map((supporter) => (
          <div key={supporter._id} className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <img 
              src={`https://be-pustantarannepal.onrender.com/${supporter.logo}`}
              alt={supporter.name}
              className="w-full h-32 object-contain mb-4"
            />
            <div className="flex justify-between items-center">
              <h3 className="text-gray-700 font-medium">{supporter.name}</h3>
              <button
                onClick={() => handleDelete(supporter._id)}
                className="text-red-500 hover:text-red-700 transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                </svg>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SupportersView;
