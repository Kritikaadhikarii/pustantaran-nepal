import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const ProductForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    price: '' // Add price to initial state
  });
  const [selectedImage, setSelectedImage] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedImage(file);
      setPreviewUrl(URL.createObjectURL(file));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const formDataToSend = new FormData();
      formDataToSend.append('image', selectedImage);
      formDataToSend.append('name', formData.name);
      formDataToSend.append('description', formData.description);
      formDataToSend.append('price', formData.price); // Add price to form data

      await axios.post('https://be-pustantarannepal.onrender.com/api/products/create', formDataToSend);
      
      // Reset form
      setFormData({ name: '', description: '', price: '' });
      setSelectedImage(null);
      setPreviewUrl(null);
      alert('Product created successfully!');
    } catch (error) {
      console.error('Error creating product:', error);
      alert('Failed to create product');
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-8 bg-white rounded-lg shadow-lg mt-10">
      <div className="flex justify-between items-center mb-8 border-b pb-4">
        <h2 className="text-3xl font-['Playfair_Display'] text-[#1a5f7a]">Add New Product</h2>
        <button
          onClick={() => navigate('/adminpanel')}
          className="px-6 py-2.5 bg-gradient-to-r from-teal-500 to-teal-700 text-white rounded-full hover:from-teal-600 hover:to-teal-800 transition-all duration-200 shadow-md"
        >
          Back to Admin Panel
        </button>
      </div>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-gray-700 text-sm font-semibold mb-2">Product Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-200"
            required
          />
        </div>

        {/* Add price input field */}
        <div>
          <label className="block text-gray-700 text-sm font-semibold mb-2">Price (NPR)</label>
          <input
            type="number"
            name="price"
            value={formData.price}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-200"
            min="0"
            step="1"
            required
            placeholder="Enter price in NPR"
          />
        </div>

        <div>
          <label className="block text-gray-700 text-sm font-semibold mb-2">Description</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-200"
            rows="4"
            required
          />
        </div>

        <div>
          <label className="block text-gray-700 text-sm font-semibold mb-2">Product Image</label>
          <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-lg hover:border-teal-500 transition-all duration-200">
            <div className="space-y-1 text-center">
              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className="hidden"
                id="file-upload"
                required
              />
              <label htmlFor="file-upload" className="cursor-pointer">
                <div className="flex flex-col items-center">
                  <svg className="w-12 h-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48">
                    <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <p className="text-sm text-gray-600">Click to upload an image</p>
                </div>
              </label>
            </div>
          </div>
        </div>

        {previewUrl && (
          <div className="mt-4">
            <h3 className="text-sm font-semibold text-gray-700 mb-2">Preview:</h3>
            <img src={previewUrl} alt="Preview" className="mt-2 max-h-48 object-contain rounded-lg border border-gray-200" />
          </div>
        )}

        <button
          type="submit"
          className="w-full px-6 py-3 bg-gradient-to-r from-teal-500 to-teal-700 text-white rounded-full hover:from-teal-600 hover:to-teal-800 transition-all duration-200 shadow-md font-semibold"
        >
          Add Product
        </button>
      </form>
    </div>
  );
};

export default ProductForm;
