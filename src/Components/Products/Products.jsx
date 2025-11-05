// Components/Products/Products.jsx
import React, { useEffect, useState } from "react";
import Items from "./Items";

const Products = () => {
    const [categories, setCategories] = useState([]);
    const [selectedSub, setSelectedSub] = useState(null);

    useEffect(() => {
        fetch("/products.json")
            .then(res => res.json())
            .then(data => setCategories(data))
            .catch(err => console.error("Failed to load data", err));
    }, []);

    return (
        <div className="p-6">
            {!selectedSub ? (
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {categories.map((cat) => (
                        <div key={cat.id} className="bg-white shadow rounded-xl p-5 border">
                            <h2 className="text-xl font-semibold text-blue-600 mb-4">
                                {cat.category}
                            </h2>
                            <ul className="space-y-2">
                                {cat.subcategories.map((sub, i) => (
                                    <li
                                        key={i}
                                        onClick={() => setSelectedSub(sub)}
                                        className="cursor-pointer bg-blue-50 hover:bg-blue-100 py-2 px-3 rounded"
                                    >
                                        {sub.name}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            ) : (
                <Items
                    subcategory={selectedSub}
                    onBack={() => setSelectedSub(null)}
                />
            )}
        </div>
    );
};

export default Products;
