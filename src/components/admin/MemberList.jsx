import { useState, useEffect } from 'react';
import axios from 'axios';
import MemberForm from './forms/MemberForm';
import { useNavigate } from 'react-router-dom';

const AdminMemberList = () => {
  const navigate = useNavigate();
  const [members, setMembers] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('name-asc');
  const [editingMember, setEditingMember] = useState(null);

  const fetchMembers = async () => {
    try {
      const response = await axios.get('https://be-pustantarannepal.onrender.com/api/members');
      setMembers(response.data);
    } catch (error) {
      console.error('Error fetching members:', error);
    }
  };

  useEffect(() => {
    fetchMembers();
  }, []);

  const getAuthConfig = () => ({
    headers: { Authorization: `Bearer ${localStorage.getItem('adminToken')}` }
  });

  const handleDelete = async (id) => {
    try {
      await axios.delete(`https://be-pustantarannepal.onrender.com/api/members/${id}`, getAuthConfig());
      setMembers(members.filter(member => member._id !== id));
    } catch (error) {
      console.error('Error deleting member:', error);
    }
  };

  const handleEdit = (member) => {
    setEditingMember(member);
  };

  const handleUpdate = async (updatedMember) => {
    try {
      const response = await axios.put(
        `https://be-pustantarannepal.onrender.com/api/members/${updatedMember._id}`,
        updatedMember,
        getAuthConfig()
      );
      setMembers(members.map(m => 
        m._id === updatedMember._id ? response.data : m
      ));
      setEditingMember(null);
    } catch (error) {
      console.error('Error updating member:', error);
    }
  };

  const sortMembers = (members) => {
    return [...members].sort((a, b) => {
      switch (sortBy) {
        case 'name-asc':
          return a.name.localeCompare(b.name);
        case 'name-desc':
          return b.name.localeCompare(a.name);
        case 'date-asc':
          return new Date(a.joinDate) - new Date(b.joinDate);
        case 'date-desc':
          return new Date(b.joinDate) - new Date(a.joinDate);
        default:
          return 0;
      }
    });
  };

  const filteredMembers = sortMembers(
    members.filter(member =>
      member.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  return (
    <div className="py-6 px-4 max-w-5xl mx-auto">
      <button
        onClick={() => navigate('/adminpanel')}
        className="px-6 py-2.5 bg-gradient-to-r from-teal-500 to-teal-700 text-white rounded-full hover:from-teal-600 hover:to-teal-800 transition-all duration-200 shadow-md mb-6"
      >
        Back to Admin Panel
      </button>
      <h2 className="text-3xl font-bold text-teal-600 text-center mb-6">
        {editingMember ? 'Edit Member' : 'Manage Members'}
      </h2>
      
      <MemberForm 
        onMemberAdded={(newMember) => setMembers([...members, newMember])}
        editingMember={editingMember}
        onUpdate={handleUpdate}
        onCancel={() => setEditingMember(null)}
      />

      <div className="mb-4 mt-8 flex flex-col sm:flex-row gap-4 items-center justify-between">
        <input
          type="text"
          placeholder="Search members..."
          className="w-full sm:w-64 px-3 py-2 border rounded-lg focus:ring-2 focus:ring-teal-500"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="w-full sm:w-48 px-3 py-2 border rounded-lg focus:ring-2 focus:ring-teal-500 bg-white"
        >
          <option value="name-asc">Name (A-Z)</option>
          <option value="name-desc">Name (Z-A)</option>
          <option value="date-asc">Join Date (Oldest)</option>
          <option value="date-desc">Join Date (Newest)</option>
        </select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filteredMembers.map(member => (
          <div key={member._id} className="bg-white rounded-lg shadow-md p-4 flex justify-between items-center">
            <div>
              <h3 className="text-lg font-semibold text-gray-800">{member.name}</h3>
              <p className="text-gray-600">
                Joined: {new Date(member.joinDate).toLocaleDateString()}
              </p>
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => handleEdit(member)}
                className="bg-teal-500 text-white px-3 py-1 rounded hover:bg-teal-600"
              >
                Edit
              </button>
              <button
                onClick={() => handleDelete(member._id)}
                className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>

      {filteredMembers.length === 0 && (
        <div className="text-center text-gray-500 mt-8">
          No members found matching your search.
        </div>
      )}
    </div>
  );
};

export default AdminMemberList;
