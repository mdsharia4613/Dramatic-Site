import { NavLink } from 'react-router-dom';
import './Test.css';
import { FaCartShopping } from "react-icons/fa6";
import { CiHeart } from "react-icons/ci";
import { useState } from 'react';

const Test = ({ cartItems, handleIncrease, handleDecrease, handleRemove, productCount }) => {
    const [showCart, setShowCart] = useState(false);

    const navLinkstyle = ({ isActive }) =>
        isActive
            ? 'font-semibold text-yellow-400 transition-all duration-500'
            : 'hover:text-yellow-400 transition-all duration-500';

    const links = (
        <>
            <li>
                <NavLink to='/' className={navLinkstyle}>Home</NavLink>
                    <ul>
                        <li><NavLink>Home</NavLink></li>
                    </ul>
                </li>
            <li><NavLink to='show' className={navLinkstyle}>TV Show</NavLink></li>
            <li><NavLink to='movies' className={navLinkstyle}>Movies</NavLink></li>
            <li><NavLink to='news' className={navLinkstyle}>News</NavLink></li>
        </>
    );

    

    return (
        <div className="navbar bg-base-100 shadow-sm relative">
            <div className="navbar-start">
                <a className="btn btn-ghost text-xl">daisyUI</a>
            </div>

            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">{links}</ul>
            </div>

            <div className="navbar-end flex gap-10 mr-10 relative">
                {/* 🛒 Shopping icon */}
                <div className='relative'>
                    <FaCartShopping size={28} onClick={() => setShowCart(!showCart)} />
                    {productCount > 0 && (
                        <span className='absolute -top-3.5 bg-amber-300 rounded-full px-2 text-xs py-0.5 -right-3'>
                            {productCount}
                        </span>
                    )}
                </div>

                {/* 🧺 Cart Dropdown */}
                {showCart && (
                    <div className="absolute top-12 right-0 bg-white text-gray-800 border border-yellow-400 shadow-xl rounded-xl w-80 sm:w-96 p-4 z-50">
                        {cartItems.length === 0 ? (
                            <p className="text-center text-gray-500 py-4">🛒 Your cart is empty</p>
                        ) : (
                            <>
                                <h3 className="text-lg font-semibold mb-3 border-b pb-2 flex justify-between items-center">
                                    Shopping Cart
                                    <span className="text-sm text-gray-500 font-normal">
                                        {cartItems.length} items
                                    </span>
                                </h3>

                                <ul className="space-y-3 max-h-64 overflow-y-auto pr-2">
                                    {cartItems.map((item, index) => (
                                        <li
                                            key={index}
                                            className="flex items-center justify-between bg-gray-50 rounded-lg p-2 shadow-sm"
                                        >
                                            <img
                                                src={item.img}
                                                alt={item.productName}
                                                className="w-12 h-12 rounded-md object-cover border"
                                            />
                                            <div className="flex-1 ml-3">
                                                <h4 className="font-medium text-sm">{item.productName}</h4>
                                                <p className="text-xs text-gray-500">
                                                    ${item.price} × {item.quantity} ={" "}
                                                    <span className="text-yellow-600 font-semibold">
                                                        ${item.price * item.quantity}
                                                    </span>
                                                </p>

                                                <div className="flex items-center gap-2 mt-1">
                                                    <button
                                                        onClick={() => handleDecrease(item)}
                                                        className="bg-gray-300 hover:bg-gray-400 text-gray-800 rounded-md px-2 py-0.5"
                                                    >
                                                        −
                                                    </button>
                                                    <span className="text-sm font-medium">{item.quantity}</span>
                                                    <button
                                                        onClick={() => handleIncrease(item)}
                                                        className="bg-amber-300 hover:bg-amber-400 text-gray-800 rounded-md px-2 py-0.5"
                                                    >
                                                        +
                                                    </button>
                                                </div>
                                            </div>

                                            <button
                                                onClick={() => handleRemove(item)}
                                                className="text-xs bg-red-500 hover:bg-red-600 text-white rounded-md px-2 py-1 ml-2"
                                            >
                                                Remove
                                            </button>
                                        </li>
                                    ))}
                                </ul>

                                <div className="border-t mt-3 pt-3 flex justify-between items-center text-sm font-semibold">
                                    <span>Total:</span>
                                    <span className="text-yellow-600 text-base">
                                        $
                                        {cartItems
                                            .reduce((acc, item) => acc + item.price * item.quantity, 0)
                                            .toFixed(2)}
                                    </span>
                                </div>

                                <button className="mt-4 w-full bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold py-2 rounded-lg transition-all">
                                    Checkout
                                </button>
                            </>
                        )}
                    </div>
                )}

                <CiHeart className="text-2xl cursor-pointer hover:text-pink-400" />
            </div>
        </div>
    );
};

export default Test;
