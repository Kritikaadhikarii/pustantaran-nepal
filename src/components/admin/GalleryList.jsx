import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import { MdDelete } from 'react-icons/md';

const GalleryList = () => {
  const navigate = useNavigate();
  const [images, setImages] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetchImages();
  }, []);

  const fetchImages = async () => {
    try {
      const response = await axios.get('https://be-pustantarannepal.onrender.com/api/images/all');
      console.log('Fetched images:', response.data); // Debug log
      if (Array.isArray(response.data)) {
        setImages(response.data);
      } else {
        console.error('Unexpected data format:', response.data);
      }
    } catch (error) {
      console.error('Error fetching images:', error);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this image?')) {
      try {
        await axios.delete(`https://be-pustantarannepal.onrender.com/api/images/delete/${id}`, {
          headers: { Authorization: `Bearer ${localStorage.getItem('adminToken')}` }
        });
        fetchImages(); // Refresh the list after deletion
      } catch (error) {
        console.error('Error deleting image:', error);
      }
    }
  };

  const formatDisplayDate = (date) => {
    return new Date(date).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const filteredImages = images.filter(image => 
    image.filename.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="max-w-4xl mx-auto p-8 bg-white rounded-lg shadow-lg mt-10">
      <div className="flex justify-between items-center mb-8 border-b pb-4">
        <h2 className="text-3xl font-['Playfair_Display'] text-[#1a5f7a]">Gallery Images</h2>
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
          placeholder="Search by filename..."
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

      <div className="grid grid-cols-3 gap-6">
        {filteredImages.length > 0 ? (
          filteredImages.map(image => (
            <div key={image._id} className="relative group">
              <img
                src={`https://be-pustantarannepal.onrender.com/uploads/${image.filename}`}
                alt="Gallery"
                className="w-full h-48 object-cover rounded-lg shadow-md transition-all duration-300 group-hover:shadow-xl"
                onError={(e) => {
                  console.error('Error loading image:', image.filename);
                  e.target.src = 'placeholder.jpg'; // Add a placeholder image
                }}
              />
              <div className="absolute bottom-0 left-0 right-0 p-2 bg-black bg-opacity-50 text-white text-xs">
                <div>{image.filename}</div>
                <div className="text-gray-300 mt-1">
                  Added: {formatDisplayDate(image.uploadDate)}
                </div>
              </div>
              <button
                onClick={() => handleDelete(image._id)}
                className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity hover:bg-red-600 flex items-center gap-1"
              >
                <MdDelete /> Delete
              </button>
            </div>
          ))
        ) : (
          <div className="col-span-3 text-center text-gray-500 py-10">
            {images.length === 0 ? 'No images found in the gallery' : 'No images match your search'}
          </div>
        )}
      </div>
    </div>
  );
};

export default GalleryList;
