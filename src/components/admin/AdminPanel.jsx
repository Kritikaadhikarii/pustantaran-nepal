import { Link, useNavigate } from 'react-router-dom';
import { FiLogOut } from 'react-icons/fi';
import { MdAddBox, MdPhotoLibrary, MdEdit, MdViewList, MdLibraryBooks, MdSupportAgent, MdGroup } from 'react-icons/md';

const AdminPanel = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('adminToken');
    navigate('/admin-login');
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="flex justify-between items-center mb-8 bg-white p-4 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold text-teal-500">Admin Dashboard</h1>
        <button
          onClick={handleLogout}
          className="bg-teal-500 text-white px-4 py-2 rounded hover:bg-teal-600 transition-colors flex items-center gap-2"
        >
          <FiLogOut /> Logout
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Products Management Card */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4 text-gray-800 flex items-center gap-2">
            <MdViewList className="text-teal-500" /> Products Management
          </h2>
          <div className="space-y-3">
            <Link
              to="/add-product"
              className="block w-full bg-teal-500 text-white text-center py-2 px-4 rounded hover:bg-teal-600 transition-colors flex items-center justify-center gap-2"
            >
              <MdAddBox /> Add New Product
            </Link>
            <Link
              to="/admin/products"
              className="block w-full bg-teal-500 text-white text-center py-2 px-4 rounded hover:bg-teal-600 transition-colors flex items-center justify-center gap-2"
            >
              <MdEdit /> View/Edit Products
            </Link>
          </div>
        </div>

        {/* Gallery Management Card */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4 text-gray-800 flex items-center gap-2">
            <MdPhotoLibrary className="text-teal-500" /> Gallery Management
          </h2>
          <div className="space-y-3">
            <Link
              to="/add-gallery"
              className="block w-full bg-teal-500 text-white text-center py-2 px-4 rounded hover:bg-teal-600 transition-colors flex items-center justify-center gap-2"
            >
              Add Gallery Image
            </Link>
            <Link
              to="/admin/gallery"
              className="block w-full bg-teal-500 text-white text-center py-2 px-4 rounded hover:bg-teal-600 transition-colors flex items-center justify-center gap-2"
            >
              View/Delete Images
            </Link>
          </div>
        </div>

        {/* Resources Management Card */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4 text-gray-800 flex items-center gap-2">
            <MdLibraryBooks className="text-teal-500" /> Resources Management
          </h2>
          <div className="space-y-3">
            <Link
              to="/add-resource"
              className="block w-full bg-teal-500 text-white text-center py-2 px-4 rounded hover:bg-teal-600 transition-colors flex items-center justify-center gap-2"
            >
              <MdAddBox /> Add New Resource
            </Link>
            <Link
              to="/admin/resources"
              className="block w-full bg-teal-500 text-white text-center py-2 px-4 rounded hover:bg-teal-600 transition-colors flex items-center justify-center gap-2"
            >
              <MdEdit /> View/Edit Resources
            </Link>
          </div>
        </div>

        {/* Supporters Management Card */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4 text-gray-800 flex items-center gap-2">
            <MdSupportAgent className="text-teal-500" /> Supporters Management
          </h2>
          <div className="space-y-3">
            <Link
              to="/add-supporter"
              className="block w-full bg-teal-500 text-white text-center py-2 px-4 rounded hover:bg-teal-600 transition-colors flex items-center justify-center gap-2"
            >
              <MdAddBox /> Add New Supporter
            </Link>
            <Link
              to="/admin/supporters"
              className="block w-full bg-teal-500 text-white text-center py-2 px-4 rounded hover:bg-teal-600 transition-colors flex items-center justify-center gap-2"
            >
              <MdEdit /> View/Edit Supporters
            </Link>
          </div>
        </div>

        {/* Members Management Card */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4 text-gray-800 flex items-center gap-2">
            <MdGroup className="text-teal-500" /> Members Management
          </h2>
          <div className="space-y-3">
            <Link
              to="/admin/add-member"
              className="block w-full bg-teal-500 text-white text-center py-2 px-4 rounded hover:bg-teal-600 transition-colors flex items-center justify-center gap-2"
            >
              <MdAddBox /> Add New Member
            </Link>
            <Link
              to="/admin/members"
              className="block w-full bg-teal-500 text-white text-center py-2 px-4 rounded hover:bg-teal-600 transition-colors flex items-center justify-center gap-2"
            >
              <MdEdit /> View/Edit Members
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
};

export default AdminPanel;
