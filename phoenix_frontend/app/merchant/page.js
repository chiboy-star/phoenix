'use client';
import { useEffect, useState } from 'react';
import { FaShoppingCart, FaFacebookF, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { BsPlusCircle } from 'react-icons/bs';
import { BiSearchAlt } from 'react-icons/bi';
import Image from 'next/image';
import Link from 'next/link';

export default function SimplePage() {
  const [productList, setProductList] = useState([]);
  const [showModal, setShowModal] = useState(false); // Modal visibility state
  const [newProduct, setNewProduct] = useState({ name: '', price: '', image: null }); // New product form data
  const [confirmationMessage, setConfirmationMessage] = useState(''); // Success/Error message

  useEffect(() => {
    fetch('/api/products')
      .then((res) => res.json())
      .then((data) => setProductList(data))
      .catch((err) => console.error("Error fetching products:", err));
  }, []);

  // Function to toggle the modal
  const toggleModal = () => {
    setShowModal(!showModal);
    setConfirmationMessage(''); // Reset the message when modal is closed
  };

  // Function to handle form changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewProduct((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Function to handle image file change
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type === 'image/jpeg') {
      setNewProduct((prev) => ({ ...prev, image: URL.createObjectURL(file) }));
    } else {
      alert("Only JPG images are allowed.");
    }
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setProductList((prev) => [
      ...prev,
      {
        id: productList.length + 1,
        title: newProduct.name,
        price: newProduct.price,
        image: newProduct.image,
        rating: 4, // Static rating for now
      },
    ]);
    setConfirmationMessage('Product added successfully!'); // Success message
    setShowModal(false); // Close the modal after submission
  };

  return (
    <div className="bg-gradient-to-r from-[rgba(195,254,121,1)] to-white min-h-screen flex flex-col">
      {/* Top Bar */}
      <div className="bg-gradient-to-r from-[rgba(195,254,121,1)] to-white flex flex-col sm:flex-row items-center justify-between py-4 px-6 gap-4">
        <Link href="/">
          <Image src="/p2.svg" alt="Logo" width={100} height={100} />
        </Link>

        <div className="flex items-center flex-1 max-w-lg mx-4 bg-white rounded-md px-4 py-2">
          <BiSearchAlt className="text-gray-500 text-2xl" />
          <input
            type="text"
            placeholder="Search..."
            className="w-full p-2 pl-3 text-black rounded-md focus:outline-none"
            aria-label="Search"
          />
        </div>

        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2 bg-white px-3 py-2 rounded-full shadow-md">
            <FaShoppingCart className="text-green-600 text-2xl" />
            <span className="text-green-600 text-lg font-semibold">Cart</span>
          </div>
          <BsPlusCircle
            className="text-green-700 text-3xl hover:text-green-900 cursor-pointer"
            onClick={toggleModal} // Open the modal when clicked
          />
        </div>
      </div>

      {/* Main Body */}
      <div className="flex flex-col sm:flex-row">
        <div className="w-full sm:w-64 p-6 flex flex-col items-center">
          <div className="w-32 h-32 rounded-full overflow-hidden mb-4">
            <Image src="/profile.jpg" alt="Profile" width={128} height={128} className="object-cover" />
          </div>
          <h2 className="text-xl font-semibold mb-2 text-center text-black">John Doe</h2>
          <p className="text-gray-800 text-center mb-4">Lorem ipsum dolor sit amet...</p>
          <div className="flex sm:gap-4 gap-2 justify-center">
            <FaInstagram className="text-pink-500 text-2xl cursor-pointer hover:scale-110 transition" />
            <FaWhatsapp className="text-green-500 text-2xl cursor-pointer hover:scale-110 transition" />
            <FaFacebookF className="text-blue-600 text-2xl cursor-pointer hover:scale-110 transition" />
          </div>
        </div>

        <div className="flex-1 p-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {productList.map((product) => (
              <div key={product.id} className="flex flex-col items-start gap-2 transform transition-transform hover:scale-105 hover:shadow-lg">
                <div className="w-full h-48 overflow-hidden rounded-lg mb-1">
                  <Image src={product.image} alt={product.title} width={192} height={192} className="object-cover w-full h-full" />
                </div>
                <h3 className="text-lg font-semibold text-black">{product.title}</h3>
                <p className="text-xl font-bold text-black">₦ {product.price}</p>
                <div className="flex text-yellow-500 text-3xl">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className={i < product.rating ? 'text-yellow-500' : 'text-gray-400'}>★</span>
                  ))}
                </div>
                <button className="mt-2 px-6 py-2 bg-green-500 border border-black text-black rounded hover:bg-green-600 hover:scale-105 transition">
                  Add to Cart
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Modal (Input Form for New Product) */}
      {showModal && (
        <div className="fixed inset-0 flex justify-center items-center bg-opacity-50 z-50 backdrop-blur-sm">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96 transform transition-transform translate-y-10 hover:translate-y-0">
            <div className="flex justify-between">
              <h2 className="text-xl font-semibold mb-4">Add New Product</h2>
              <button onClick={toggleModal} className="text-gray-500 text-2xl">X</button>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block mb-2 text-gray-700">Product Name</label>
                <input
                  type="text"
                  name="name"
                  value={newProduct.name}
                  onChange={handleInputChange}
                  className="w-full p-2 border rounded-md text-black "
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block mb-2 text-gray-700">Price</label>
                <input
                  type="number"
                  name="price"
                  value={newProduct.price}
                  onChange={handleInputChange}
                  className="w-full p-2 border rounded-md text-black"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block mb-2 text-gray-700">Image</label>
                <input
                  type="file"
                  name="image"
                  onChange={handleImageChange}
                  className="w-full p-2 border rounded-md text-black"
                  accept="image/jpeg"
                  required
                />
              </div>
              <button type="submit" className="w-full bg-green-500 text-white p-2 rounded-md">
                Add Product
              </button>
            </form>
            {confirmationMessage && (
              <div className="mt-4 text-green-500 text-center">{confirmationMessage}</div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
