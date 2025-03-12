import { useState, useEffect } from 'react';
import axios from 'axios';

const MemberForm = ({ onMemberAdded, editingMember, onUpdate, onCancel }) => {
  const [formData, setFormData] = useState({
    name: '',
    joinDate: new Date().toISOString().split('T')[0]
  });

  useEffect(() => {
    if (editingMember) {
      setFormData({
        name: editingMember.name,
        joinDate: new Date(editingMember.joinDate).toISOString().split('T')[0]
      });
    }
  }, [editingMember]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('adminToken');
    const config = {
      headers: { Authorization: `Bearer ${token}` }
    };

    try {
      if (editingMember) {
        const response = await axios.put(
          `https://be-pustantarannepal.onrender.com/api/members/${editingMember._id}`,
          formData,
          config
        );
        if (onUpdate) onUpdate(response.data);
      } else {
        const response = await axios.post('https://be-pustantarannepal.onrender.com/api/members', formData, config);
        if (onMemberAdded) onMemberAdded(response.data);
      }
      setFormData({ name: '', joinDate: new Date().toISOString().split('T')[0] });
    } catch (error) {
      console.error('Error handling member:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto p-4 mb-8">
      <div className="mb-4">
        <label className="block text-gray-700 mb-2">Name</label>
        <input
          type="text"
          value={formData.name}
          onChange={(e) => setFormData({...formData, name: e.target.value})}
          className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-teal-500"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 mb-2">Join Date</label>
        <input
          type="date"
          value={formData.joinDate}
          onChange={(e) => setFormData({...formData, joinDate: e.target.value})}
          className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-teal-500"
          required
        />
      </div>
      <div className="flex gap-2">
        <button 
          type="submit"
          className="flex-1 bg-teal-600 text-white py-2 rounded-lg hover:bg-teal-700"
        >
          {editingMember ? 'Update Member' : 'Add Member'}
        </button>
        {editingMember && (
          <button 
            type="button"
            onClick={onCancel}
            className="flex-1 bg-gray-500 text-white py-2 rounded-lg hover:bg-gray-600"
          >
            Cancel
          </button>
        )}
      </div>
    </form>
  );
};

export default MemberForm;
