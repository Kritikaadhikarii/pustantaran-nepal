import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const GalleryForm = () => {
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);
  const [uploadedImages, setUploadedImages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchImages();
  }, []);

  const fetchImages = async () => {
    try {
      const response = await axios.get('https://be-pustantarannepal.onrender.com/api/images/all');
      setUploadedImages(response.data);
    } catch (error) {
      console.error('Error fetching images:', error);
    } finally {
      setLoading(false);
    }
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
      const formData = new FormData();
      formData.append('image', selectedImage);

      const token = localStorage.getItem('adminToken');
      const response = await axios.post(
        'https://be-pustantarannepal.onrender.com/api/images/upload',
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );
      
      // Reset form and refresh images
      setSelectedImage(null);
      setPreviewUrl(null);
      fetchImages();
      alert('Image uploaded successfully!');
    } catch (error) {
      if (error.response?.status === 401) {
        alert('Please login to upload images');
        navigate('/admin/login');
      } else {
        console.error('Error uploading image:', error);
        alert('Failed to upload image');
      }
    }
  };

  if (loading) {
    return <div className="text-center py-10">Loading gallery...</div>;
  }

  return (
    <div className="max-w-2xl mx-auto p-8 bg-white rounded-lg shadow-lg mt-10">
      <div className="flex justify-between items-center mb-8 border-b pb-4">
        <h2 className="text-3xl font-['Playfair_Display'] text-[#1a5f7a]">Add to Gallery</h2>
        <button
          onClick={() => navigate('/adminpanel')}
          className="px-6 py-2.5 bg-gradient-to-r from-teal-500 to-teal-700 text-white rounded-full hover:from-teal-600 hover:to-teal-800 transition-all duration-200 shadow-md"
        >
          Back to Admin Panel
        </button>
      </div>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-gray-700 text-sm font-semibold mb-2">Upload Image</label>
          <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-lg hover:border-teal-500 transition-all duration-200">
            <div className="space-y-1 text-center">
              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className="hidden"
                id="gallery-upload"
                required
              />
              <label htmlFor="gallery-upload" className="cursor-pointer">
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
          Upload to Gallery
        </button>
      </form>

      <div className="mt-12">
        <h2 className="text-2xl font-['Playfair_Display'] text-[#1a5f7a] mb-6">Recent Uploads</h2>
        <div className="grid grid-cols-2 gap-6">
          {uploadedImages.slice(0, 6).map((image) => (
            <div key={image._id} className="relative group">
              <img
                src={`https://be-pustantarannepal.onrender.com/uploads/${image.filename}`}
                alt="Gallery"
                className="w-full h-48 object-cover rounded-lg shadow-md transition-all duration-300 group-hover:shadow-xl"
                onError={(e) => {
                  e.target.src = '/placeholder.jpg';
                }}
              />
              <div className="absolute bottom-0 left-0 right-0 p-2 bg-black bg-opacity-50 text-white text-xs">
                Added: {new Date(image.uploadDate).toLocaleDateString()}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GalleryForm;
