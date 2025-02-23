import { useState, useEffect } from 'react';
import axios from 'axios';

const Gallery = () => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    fetchImages();
  }, []);

  const fetchImages = async () => {
    try {
      const response = await axios.get('https://be-pustantarannepal.onrender.com/api/images/all');
      setImages(response.data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching images:', error);
      setError('Failed to load gallery images');
      setLoading(false);
    }
  };

  if (loading) return <div className="text-center py-10">Loading gallery...</div>;
  if (error) return <div className="text-center py-10 text-red-500">{error}</div>;

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-playfair text-teal-600 font-bold mb-4">Our Gallery</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Explore moments captured at our elderly care center, showcasing the vibrant life and activities of our community.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {images.map((image) => (
          <div
            key={image._id}
            className="relative group cursor-pointer overflow-hidden rounded-lg shadow-md"
            onClick={() => setSelectedImage(image)}
          >
            <img
              src={`https://be-pustantarannepal.onrender.com/uploads/${image.filename}`}
              alt="Gallery"
              className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-500"
              onError={(e) => {
                console.error('Error loading image:', image.filename);
                e.target.src = '/placeholder.jpg';
              }}
            />
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300" />
          </div>
        ))}
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-5xl w-full">
            <img
              src={`https://be-pustantarannepal.onrender.com/uploads/${selectedImage.filename}`}
              alt="Gallery"
              className="w-full h-auto max-h-[90vh] object-contain rounded-lg"
            />
            <button
              className="absolute top-4 right-4 text-white text-xl hover:text-gray-300"
              onClick={() => setSelectedImage(null)}
            >
              ×
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
