import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ResourceFile = ({ isAdmin }) => {
  const [resources, setResources] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const fetchResources = async () => {
    try {
      const response = await axios.get('https://be-pustantarannepal.onrender.com/api/resources');
      setResources(response.data);
    } catch (err) {
      setError('Error fetching resources');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchResources();
  }, []);

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this resource?')) {
      try {
        await axios.delete(`https://be-pustantarannepal.onrender.com/api/resources/${id}`);
        fetchResources(); // Refresh the list after deletion
      } catch (error) {
        setError('Error deleting resource: ' + (error.response?.data?.message || error.message));
      }
    }
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div className="text-red-500">{error}</div>;
  if (resources.length === 0) return (
    <div className="text-gray-500 text-center py-8">
      {isAdmin 
        ? "No resources available. Use the form above to add new resources."
        : "No resources available right now"
      }
    </div>
  );

  return (
    <div className="space-y-4">
      {resources.map((resource) => (
        <div key={resource._id} className="flex items-center p-4 border rounded-lg shadow-sm hover:bg-gray-50">
          <div className="mr-4">
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M14 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V8L14 2Z" 
                stroke="#4F46E5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M14 2V8H20" stroke="#818CF8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M16 13H8" stroke="#C7D2FE" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M16 17H8" stroke="#C7D2FE" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M10 9H8" stroke="#C7D2FE" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <div className="flex-grow">
            <h3 className="text-lg font-medium text-gray-900">{resource.name}</h3>
            <p className="text-sm text-gray-500">{resource.type}</p>
            <p className="text-sm text-gray-500">
              Added: {new Date(resource.uploadDate).toLocaleDateString()}
            </p>
          </div>
          <div className="flex gap-2">
            <button 
              onClick={() => window.open(resource.url, '_blank')}
              className="px-4 py-2 text-sm font-medium text-teal-600 hover:text-teal-800"
            >
              View
            </button>
            {isAdmin && (
              <button 
                onClick={() => handleDelete(resource._id)}
                className="px-4 py-2 text-sm font-medium text-red-600 hover:text-red-800"
              >
                Delete
              </button>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ResourceFile;
