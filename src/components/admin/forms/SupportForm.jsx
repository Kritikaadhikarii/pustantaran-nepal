import { useState } from 'react';
import axios from 'axios';

const SupportForm = () => {
  const [name, setName] = useState('');
  const [logo, setLogo] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData();
    formData.append('name', name);
    formData.append('logo', logo);

    try {
      await axios.post('https://be-pustantarannepal.onrender.com/api/supporters', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          'Authorization': `Bearer ${localStorage.getItem('adminToken')}`
        }
      });
      setName('');
      setLogo(null);
      alert('Supporter added successfully!');
    } catch (error) {
      console.error('Error adding supporter:', error);
      alert('Error adding supporter');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-md mx-auto p-6">
      <div>
        <label className="block text-sm font-medium text-gray-700">Supporter Name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500"
          required
        />
      </div>
      
      <div>
        <label className="block text-sm font-medium text-gray-700">Logo</label>
        <input
          type="file"
          onChange={(e) => setLogo(e.target.files[0])}
          className="mt-1 block w-full"
          accept="image/*"
          required
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full bg-teal-500 text-white py-2 px-4 rounded-md hover:bg-teal-600 disabled:bg-teal-300"
      >
        {loading ? 'Adding...' : 'Add Supporter'}
      </button>
    </form>
  );
};

export default SupportForm;
