// Components/Products/Items.jsx
import React, { useState } from "react";

const Items = ({ subcategory, onBack }) => {
    
    const [selectedItem, setSelectedItem] = useState(null);

    return (
        <div className="p-6">
            {/* Back Button */}
            <button
                onClick={onBack}
                className="mb-4 bg-blue-500 text-white px-4 py-2 rounded"
            >
                ← Back
            </button>

            {/* Subcategory Title */}
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                {subcategory.name}
            </h2>

            {/* Items Grid */}
            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {subcategory.items.map((item) => (
                    <div
                        key={item.id}
                        className="bg-white shadow-md rounded-xl overflow-hidden hover:shadow-lg transition cursor-pointer"
                    >
                        <img
                            src={item.image}
                            alt={item.name}
                            className="w-full h-40 object-cover"
                        />
                        <div className="p-4">
                            <h3 className="text-lg font-semibold text-gray-700">
                                {item.name}
                            </h3>
                            <p className="text-gray-500">৳ {item.price}</p>

                            <div className="flex gap-2 mt-3">
                                {/* Add to Cart */}
                                <button
                                    className="flex-1 bg-green-500 text-white py-2 rounded hover:bg-green-600"
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        alert(`${item.name} added to cart`);
                                    }}
                                >
                                    Add to Cart
                                </button>

                                {/* View More → Open Modal */}
                                <button
                                    className="flex-1 bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        setSelectedItem(item);
                                    }}
                                >
                                    View More
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Product Details Popup */}
            {selectedItem && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
                    <div className="bg-white p-6 rounded-2xl w-11/12 md:w-2/3 lg:w-1/2 relative shadow-2xl">
                        {/* Close Button */}
                        <button
                            onClick={() => setSelectedItem(null)}
                            className="absolute top-3 right-3 bg-red-500 text-white px-2 py-1 rounded-full hover:bg-red-600"
                        >
                            ✕
                        </button>

                        <div className="grid md:grid-cols-2 gap-6">
                            <img
                                src={selectedItem.image}
                                alt={selectedItem.name}
                                className="w-full h-64 object-cover rounded"
                            />

                            <div>
                                <h2 className="text-2xl font-bold text-gray-800 mb-2">
                                    {selectedItem.name}
                                </h2>
                                <p className="text-gray-600 mb-2">
                                    Category: {subcategory.name}
                                </p>
                                <p className="text-xl font-semibold text-green-600 mb-4">
                                    ৳ {selectedItem.price}
                                </p>
                                <p className="text-gray-700 mb-4">
                                    {selectedItem.description || "No description available."}
                                </p>

                                <button
                                    className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
                                    onClick={() => alert(`Buying ${selectedItem.name}`)}
                                >
                                    Buy Now
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Items;
