import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import { MdDelete, MdEdit, MdClose } from 'react-icons/md';

const ProductList = () => {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [isLoading, setIsLoading] = useState(true); // Add loading state
  const [editingProduct, setEditingProduct] = useState(null);
  const [editForm, setEditForm] = useState({
    name: '',
    description: '',
    price: '',
    status: ''
  });

  useEffect(() => {
    const token = localStorage.getItem('adminToken');
    if (!token) {
      navigate('/admin/login');
      return;
    }
    fetchProducts();
  }, [navigate]);

  const fetchProducts = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get('https://be-pustantarannepal.onrender.com/api/products');
      console.log('Fetched products:', response.data); // Debug log
      setProducts(response.data);
    } catch (error) {
      console.error('Error fetching products:', error);
      setProducts([]); // Set empty array on error
    } finally {
      setIsLoading(false);
    }
  };

  const handleDelete = async (id) => {
    const token = localStorage.getItem('adminToken');
    if (!token) {
      alert('Please login to delete products');
      navigate('/admin/login');
      return;
    }
    if (window.confirm('Are you sure you want to delete this product?')) {
      try {
        await axios.delete(`https://be-pustantarannepal.onrender.com/api/products/${id}`, {
          headers: { Authorization: `Bearer ${token}` }
        });
        fetchProducts();
      } catch (error) {
        if (error.response?.status === 401) {
          alert('Session expired. Please login again.');
          navigate('/admin/login');
        } else {
          alert('Failed to delete product: ' + (error.response?.data?.message || 'Unknown error'));
        }
      }
    }
  };

  const handleEdit = (product) => {
    const token = localStorage.getItem('adminToken');
    if (!token) {
      alert('Please login to edit products');
      navigate('/admin/login');
      return;
    }
    setEditingProduct(product);
    setEditForm({
      name: product.name || '',
      description: product.description || '',
      price: product.price || '',
      status: product.status || 'Active'
    });
  };

  const handleEditFormChange = (e) => {
    const { name, value } = e.target;
    setEditForm(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('adminToken');
    if (!token) {
      alert('Please login to update products');
      navigate('/admin/login');
      return;
    }
    try {
      await axios.put(
        `https://be-pustantarannepal.onrender.com/api/products/${editingProduct._id}`,
        editForm,
        {
          headers: { Authorization: `Bearer ${token}` }
        }
      );
      setEditingProduct(null);
      fetchProducts(); // Refresh the list
    } catch (error) {
      if (error.response?.status === 401) {
        alert('Session expired. Please login again.');
        navigate('/admin/login');
      } else {
        alert('Failed to update product: ' + (error.response?.data?.message || 'Unknown error'));
      }
    }
  };

  const filteredProducts = products.filter(product => 
    product?.name?.toLowerCase().includes(searchTerm.toLowerCase()) ?? false
  );

  if (isLoading) {
    return (
      <div className="max-w-7xl mx-auto p-8 text-center">
        <p>Loading products...</p>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto p-8 bg-white rounded-lg shadow-lg mt-10">
      <div className="flex justify-between items-center mb-8 border-b pb-4">
        <h2 className="text-3xl font-['Playfair_Display'] text-[#1a5f7a]">Products</h2>
        <button
          onClick={() => navigate('/adminpanel')}
          className="px-6 py-2.5 bg-gradient-to-r from-teal-500 to-teal-700 text-white rounded-full hover:from-teal-600 hover:to-teal-800 transition-all duration-200 shadow-md"
        >
          <FiArrowLeft className="inline mr-2" /> Back to Admin Panel
        </button>
      </div>

      <div className="flex gap-4 mb-6">
        <input
          type="text"
          placeholder="Search products..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="flex-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
        />
        {searchTerm && (
          <button
            onClick={() => setSearchTerm('')}
            className="px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300 transition-colors"
          >
            Clear Search
          </button>
        )}
      </div>

      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        {filteredProducts.length > 0 ? (
          filteredProducts.map(product => (
            <div
              key={product._id}
              className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300"
            >
              <div className="relative overflow-hidden">
                <img
                  src={`https://be-pustantarannepal.onrender.com/api/products/image/${product._id}`}
                  alt={product.name}
                  className="w-full h-48 object-cover transform group-hover:scale-105 transition-transform duration-300"
                  onError={(e) => {
                    console.error('Error loading image:', product._id);
                    e.target.src = 'placeholder.jpg';
                  }}
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300" />
                <div className="absolute top-2 right-2 flex gap-2">
                  <button
                    onClick={() => handleEdit(product)}
                    className="p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors transform hover:scale-105"
                  >
                    <MdEdit size={20} />
                  </button>
                  <button
                    onClick={() => handleDelete(product._id)}
                    className="p-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors transform hover:scale-105"
                  >
                    <MdDelete size={20} />
                  </button>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-teal-600 mb-2">
                  {product.name}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-2">{product.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-teal-500 font-medium">
                    NPR {product.price ? product.price.toLocaleString() : 'N/A'}
                  </span>
                  <span className="text-gray-500">
                    Status: {product.status || 'Active'}
                  </span>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="col-span-full text-center text-gray-500 py-10">
            {products.length === 0 ? 'No products found' : 'No products match your search'}
          </div>
        )}
      </div>

      {/* Edit Modal */}
      {editingProduct && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-xl shadow-2xl w-11/12 max-w-2xl relative">
            <button
              onClick={() => setEditingProduct(null)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
            >
              <MdClose size={24} />
            </button>
            
            <h2 className="text-2xl font-semibold text-teal-600 mb-6">Edit Product</h2>
            
            <form onSubmit={handleUpdate} className="space-y-4">
              <div>
                <label className="block text-gray-700 mb-2">Name</label>
                <input
                  type="text"
                  name="name"
                  value={editForm.name}
                  onChange={handleEditFormChange}
                  className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-teal-500"
                  required
                />
              </div>

              <div>
                <label className="block text-gray-700 mb-2">Description</label>
                <textarea
                  name="description"
                  value={editForm.description}
                  onChange={handleEditFormChange}
                  className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-teal-500 h-32"
                  required
                />
              </div>

              <div>
                <label className="block text-gray-700 mb-2">Price (NPR)</label>
                <input
                  type="number"
                  name="price"
                  value={editForm.price}
                  onChange={handleEditFormChange}
                  className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-teal-500"
                  required
                />
              </div>

              <div>
                <label className="block text-gray-700 mb-2">Status</label>
                <select
                  name="status"
                  value={editForm.status}
                  onChange={handleEditFormChange}
                  className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-teal-500"
                >
                  <option value="Active">Active</option>
                  <option value="Inactive">Inactive</option>
                  <option value="Sold">Sold</option>
                </select>
              </div>

              <div className="flex justify-end gap-4 mt-6">
                <button
                  type="button"
                  onClick={() => setEditingProduct(null)}
                  className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-6 py-2 bg-teal-500 text-white rounded-lg hover:bg-teal-600 transition-colors"
                >
                  Save Changes
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductList;
