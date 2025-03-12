import MemberForm from '../forms/MemberForm';
import { useNavigate } from 'react-router-dom';

const AddMember = () => {
  const navigate = useNavigate();

  const handleMemberAdded = () => {
    navigate('/admin/members');
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <button
        onClick={() => navigate('/adminpanel')}
        className="px-6 py-2.5 bg-gradient-to-r from-teal-500 to-teal-700 text-white rounded-full hover:from-teal-600 hover:to-teal-800 transition-all duration-200 shadow-md mb-6"
      >
        Back to Admin Panel
      </button>
      <h2 className="text-3xl font-bold text-teal-600 text-center mb-6">Add New Member</h2>
      <MemberForm onMemberAdded={handleMemberAdded} />
    </div>
  );
};

export default AddMember;
