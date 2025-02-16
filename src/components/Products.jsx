import { useState } from "react";
import product1 from "../assets/product1.jpg";
import product2 from "../assets/product2.jpg";
import product3 from "../assets/product3.jpg";

const Products = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  // Dummy product data
  const products = [
    {
      id: 1,
      name: "Product 1",
      description: "Product 1 description",
      image: product1,
      price: 1000,
    },
    {
      id: 2,
      name: "Product 2",
      description: "Product 2 description",
      image: product2,
      price: 2000,
    },
    {
      id: 3,
      name: "Product 3",
      description: "Product 3 description",
      image: product3,
      price: 3000,
    },
  ];

  // Function to open the modal
  const openModal = (product) => {
    setSelectedProduct(product);
  };

  // Function to close the modal
  const closeModal = () => {
    setSelectedProduct(null);
  };

  return (
    <section className="bg-gray-100 py-10 px-6">
      {/* Title */}
      <div className="container mx-auto mb-12 text-center">
        <h2 className="text-4xl font-bold text-teal-600">Products from Senior Citizens</h2>
        <p className="text-gray-600 mt-2">
          Explore unique products created by our talented senior citizens.
        </p>
      </div>

      {/* Product Cards */}
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white p-4 rounded shadow-lg hover:shadow-xl transition duration-300"
            onClick={() => openModal(product)}
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-40 object-cover rounded"
            />
            <h3 className="text-lg font-semibold text-teal-500 mt-4">
              {product.name}
            </h3>
            <p className="text-gray-700 text-sm mt-2">{product.description}</p>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedProduct && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded shadow-lg w-11/12 max-w-lg">
            <button
              className="absolute top-4 right-4 text-gray-500 hover:text-black"
              onClick={closeModal}
            >
              &times;
            </button>
            <img
              src={selectedProduct.image}
              alt={selectedProduct.name}
              className="w-full h-60 object-cover rounded mb-4"
            />
            <h3 className="text-2xl font-bold text-teal-600">
              {selectedProduct.name}
            </h3>
            <p className="text-gray-700 mt-4">{selectedProduct.description}</p>
            <button
              className="mt-6 bg-teal-500 hover:bg-teal-600 text-white px-4 py-2 rounded transition duration-300"
              onClick={closeModal}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Products;
