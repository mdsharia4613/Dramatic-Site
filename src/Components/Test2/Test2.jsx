import { NavLink } from 'react-router-dom';
import { FaCartShopping } from "react-icons/fa6";
import { useState } from 'react';
import { MdDelete } from "react-icons/md";
import { CiHeart } from "react-icons/ci";



const Test2 = ({ productCount, handleIncrease, handleRemove, handleDecrease, cartItems }) => {
    const [showCart, setShowCart] = useState(false);

    const navLinkstyle = ({ isActive }) =>
        isActive
            ? 'font-semibold text-yellow-400 transition-all duration-500'
            : 'hover:text-yellow-400 transition-all duration-500';

    const links = (
        <>
            <li><NavLink to='/' className={navLinkstyle}>Home</NavLink></li>
            <li><NavLink to='show' className={navLinkstyle}>TV Show</NavLink></li>
            <li><NavLink to='movies' className={navLinkstyle}>Movies</NavLink></li>
            <li><NavLink to='news' className={navLinkstyle}>News</NavLink></li>
        </>
    );

    return (
        <>
            <div className="navbar bg-base-100 shadow-sm">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex="-1"
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            <ul className="menu menu-horizontal px-1">{links}</ul>
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl">daisyUI</a>
                </div>

                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">{links}</ul>
                </div>

                <div className="navbar-end">
                    <div className='relative'>
                        <FaCartShopping fontSize={28} onClick={() => setShowCart(!showCart)} />
                        {productCount > 0 && (
                            <span className='absolute -top-3.5 bg-amber-300 rounded-full px-2 text-xs py-0.5 -right-3'>
                                {productCount}
                            </span>
                        )}
                    </div>

                    {/* 🧺 Cart Dropdown */}
                    {showCart && (
                        <div className="absolute top-12 right-0 bg-white border border-amber-400 rounded-lg shadow-lg p-3 ">
                            {cartItems.length === 0 ? (
                                <p className="text-center text-gray-500">🛒 Cart is empty</p>
                            ) : (
                                <>
                                    <h3 className="font-semibold text-lg flex justify-between items-center border-b py-2  pb-4 mb-2">Shopping Cart <span className="text-sm text-gray-500">{cartItems.length} item{cartItems.length > 1 && 's'}</span></h3>

                                        <ul className="space-y-3 max-h-64 overflow-y-auto pr-2">
                                        {
                                            cartItems.map((item, index) => (
                                                <li key={index} item={item} className='flex justify-between items-center gap-4  p-3 mt-3 bg-gray-100 rounded-2xl shadow-sm'>
                                                    <img src={item.img} alt="" className='w-12 h-12 rounded-md object-cover border' />
                                                    <div className='flex-1 ml-5'>
                                                        <h4>{item.productName}</h4>
                                                        <p>
                                                            ${item.price} * {item.quantity} = {" "}
                                                            <span>${item.price * item.quantity}</span>
                                                        </p>
                                                        <div className='flex items-center gap-2'>
                                                            <button className='bg-stone-300 px-2 rounded-lg' onClick={() => handleDecrease(item)}>-</button>
                                                            <samp>{item.quantity}</samp>
                                                            <button className='bg-amber-400 px-1.5 rounded-lg' onClick={() => handleIncrease(item)}>+</button>
                                                        </div>
                                                    </div>
                                                    <button onClick={() => handleRemove(item)} className='text-amber-400'><MdDelete fontSize={24} /></button>
                                                </li>))
                                        }
                                    </ul>

                                    <div className='border-t border-gray-500 flex justify-between py-2 mt-3'>
                                        <span>Total:</span>
                                        <span className='text-amber-500'>
                                            ${cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0)
                                                .toFixed(2)}
                                        </span>
                                    </div>
                                    <button className='bg-yellow-300  w-full py-1.5 rounded-2xl font-semibold hover:bg-amber-500 transition-all mt-5' type='button' >CheckOut</button>

                                </>
                            )}
                        </div>
                    )}
                </div>
                <CiHeart className="text-2xl cursor-pointer hover:text-pink-400" />

            </div>
        </>
    );
};

export default Test2;
