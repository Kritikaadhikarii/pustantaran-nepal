import { useState, useEffect } from 'react';
import axios from 'axios';
import ResourceFile from '../resources/ResourceFile';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

const ResourceList = () => {
const navigate = useNavigate();
  const [resources, setResources] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchResources();
  }, []);

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

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this resource?')) {
      try {
        await axios.delete(`https://be-pustantarannepal.onrender.com/api/resources/${id}`);
        fetchResources();
      } catch (err) {
        setError('Error deleting resource');
      }
    }
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div className="text-red-500">{error}</div>;
  if (resources.length === 0) return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-teal-600">Resources List</h2>
        <button
          onClick={() => navigate('/adminpanel')}
          className="px-6 py-2.5 bg-gradient-to-r from-teal-500 to-teal-700 text-white rounded-full hover:from-teal-600 hover:to-teal-800 transition-all duration-200 shadow-md"
        >
          <FiArrowLeft className="inline mr-2" /> Back to Admin Panel
        </button>
      </div>
      <div className="text-gray-500 text-center py-8">
        No resources available right now. Please add new resources
      </div>
    </div>
  );

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-teal-600">Resources List</h2>
        <button
          onClick={() => navigate('/adminpanel')}
          className="px-6 py-2.5 bg-gradient-to-r from-teal-500 to-teal-700 text-white rounded-full hover:from-teal-600 hover:to-teal-800 transition-all duration-200 shadow-md"
        >
          Back to Admin Panel
        </button>
      </div>
      <div className="space-y-4">
        {resources.map((resource) => (
          <ResourceFile
            key={resource._id}
            fileName={resource.name}
            fileType={resource.type}
            url={resource.url}
            resourceId={resource._id}
            onUpdate={fetchResources}
            isAdmin={true}
            uploadDate={resource.uploadDate}
          />
        ))}
      </div>
    </div>
  );
};

export default ResourceList;
